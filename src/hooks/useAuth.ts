'use client'

import { useState } from 'react'
import { Session, User } from '@supabase/gotrue-js'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)

  return { user, session }
}
