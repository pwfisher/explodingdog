import React from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

const flags = ['myTags']

export const AppFlags: React.FC = () => {
  const { query } = useRouter()
  const [cookies, setCookie] = useCookies()

  React.useEffect(() => {
    flags.forEach(flag => {
      const key = `feature__${flag}`
      if (query?.[key] === 'on' && cookies[key] !== 'on') setCookie(key, 'on', { path: '/' })
      if (query?.[key] === 'off' && cookies[key] !== 'off') setCookie(key, 'off', { path: '/' })
    })
  }, [query])

  return null
}
