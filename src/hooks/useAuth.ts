'use client'

import { Session, User } from '@supabase/gotrue-js'
import { useState } from 'react'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)

  return { user, session }
}
