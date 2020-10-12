import React from 'react'
import App from '../app'

/* Rendering null on the server and not on the client will produce a hydration mismatch warning. */
function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

export default function Entry() {
  return (
    <SafeHydrate>
      <App />
    </SafeHydrate>
  )
}
