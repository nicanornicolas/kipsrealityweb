import { redirect } from 'next/navigation'

export default async function InviteOrRedirect({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const resolvedSearchParams = await searchParams;
  // Build query string from searchParams and forward to /invite/accept
  const params = new URLSearchParams()

  for (const key of Object.keys(resolvedSearchParams || {})) {
    const val = resolvedSearchParams[key]
    if (Array.isArray(val)) {
      val.forEach((v) => params.append(key, v))
    } else if (typeof val === 'string') {
      params.append(key, val)
    }
  }

  const query = params.toString()
  const target = query ? `/invite/vendor/accept?${query}` : '/invite/accept'

  redirect(target)
}
