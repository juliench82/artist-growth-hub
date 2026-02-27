const { createServerComponentClient } = require('@supabase/auth-helpers-nextjs')
const { cookies } = require('next/headers')

// Placeholder for Supabase client
export function createClient() {
  const cookieStore = cookies()

  return createServerComponentClient({
    cookies: () =&gt; cookieStore,
  })
}
