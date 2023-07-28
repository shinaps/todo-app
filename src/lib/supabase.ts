import { Database } from '../../supabase/schema'
import { createClient } from '@supabase/supabase-js'

export const getSupabaseServerSideClient = (token?: string) => {
  const headers = token
    ? {
        global: {
          headers: { Authorization: `Bearer ${token}` },
        },
      }
    : {}

  const supabaseServerSideClient = createClient<Database>(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    headers,
  )

  return { supabaseServerSideClient }
}
