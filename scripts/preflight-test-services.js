#!/usr/bin/env node

import net from 'node:net';
import { execSync } from 'node:child_process';

function logInfo(message) {
  console.log(`[preflight] ${message}`);
}

function logError(message) {
  console.error(`[preflight] ERROR: ${message}`);
}

function getDatabaseTarget() {
  const raw = process.env.DATABASE_URL;

  if (!raw) {
    logError('DATABASE_URL is not set. Load .env.test before running preflight checks.');
    process.exit(1);
  }

  try {
    const parsed = new URL(raw);
    return {
      raw,
      protocol: parsed.protocol,
      host: parsed.hostname || 'localhost',
      port: Number(parsed.port || 3306),
    };
  } catch {
    return {
      raw,
      protocol: 'invalid:',
      host: 'localhost',
      port: 3307,
    };
  }
}

function hasCommand(command) {
  try {
    execSync(command, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function checkDockerTooling() {
  const hasDocker = hasCommand('docker --version');
  const hasComposeV2 = hasCommand('docker compose version');
  const hasComposeV1 = hasCommand('docker-compose --version');

  if (!hasDocker || (!hasComposeV2 && !hasComposeV1)) {
    logError('Docker/Compose is not available. Install Docker Desktop and ensure PATH includes docker and docker compose (or docker-compose).');
    return false;
  }

  try {
    execSync('docker version', { stdio: 'ignore' });
  } catch {
    logError('Docker CLI is installed, but Docker daemon is not ready. Open Docker Desktop and wait for Engine running. If you just installed WSL/Docker, reboot Windows and run again.');
    return false;
  }

  logInfo(`Docker detected (${hasComposeV2 ? 'compose v2' : 'compose v1'}).`);
  return true;
}

function checkDatabaseConnection(host, port) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host, port });
    const timeoutMs = 2000;

    socket.setTimeout(timeoutMs);

    socket.on('connect', () => {
      socket.end();
      resolve(true);
    });

    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });

    socket.on('error', () => {
      resolve(false);
    });
  });
}

async function main() {
  const db = getDatabaseTarget();

  logInfo(`Using DATABASE_URL target: ${db.raw}`);

  if (db.protocol !== 'mysql:') {
    logError(`DATABASE_URL must use mysql:// protocol for this project. Received protocol: ${db.protocol}`);
    process.exit(1);
  }

  if (!checkDockerTooling()) {
    process.exit(1);
  }

  const reachable = await checkDatabaseConnection(db.host, db.port);
  if (!reachable) {
    logError(`Cannot reach test database at ${db.host}:${db.port}. Start it with: npm run docker:test:up`);
    process.exit(1);
  }

  logInfo(`Test database is reachable at ${db.host}:${db.port}.`);
  logInfo('Preflight checks passed.');
}

main().catch((error) => {
  logError(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
