import process from 'process';

type SmokeTarget = {
  name: string;
  path: string;
};

const baseUrl = (process.env.SMOKE_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');

const targets: SmokeTarget[] = [
  { name: 'Health', path: '/api/health' },
  { name: 'Plans', path: '/api/plan' },
  { name: 'Property Types', path: '/api/propertytypes' },
  { name: 'Hero Sections', path: '/api/hero' },
  { name: 'CTA Sections', path: '/api/cta' },
  { name: 'Policies', path: '/api/policies' },
  { name: 'Sidebar Items (All)', path: '/api/sidebarItem?all=true' },
];

async function run(): Promise<void> {
  console.log('='.repeat(64));
  console.log('Post-Seed API Smoke Check');
  console.log(`Base URL: ${baseUrl}`);
  console.log('='.repeat(64));

  let failures = 0;

  for (const target of targets) {
    const url = `${baseUrl}${target.path}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      let payloadPreview = '';
      try {
        const body = await response.json();
        payloadPreview = Array.isArray(body)
          ? `array(length=${body.length})`
          : `object(keys=${Object.keys(body).slice(0, 6).join(',')})`;
      } catch {
        payloadPreview = 'non-json-response';
      }

      if (!response.ok) {
        failures += 1;
        console.error(`FAIL ${target.name.padEnd(24)} ${response.status} ${url} (${payloadPreview})`);
        continue;
      }

      console.log(`PASS ${target.name.padEnd(24)} ${response.status} ${url} (${payloadPreview})`);
    } catch (error: unknown) {
      failures += 1;
      const message = error instanceof Error ? error.message : String(error);
      console.error(`FAIL ${target.name.padEnd(24)} network-error ${url} (${message})`);
    }
  }

  console.log('-'.repeat(64));

  if (failures > 0) {
    console.error(`Smoke check failed with ${failures} failing endpoint(s).`);
    process.exit(1);
  }

  console.log('Smoke check passed for all endpoints.');
}

run().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Unexpected smoke check error: ${message}`);
  process.exit(1);
});
