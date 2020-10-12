import React, { lazy, Suspense } from 'react'

export function DefaultLoader() {
  return (
    <div>
      Loading...
    </div>
  )
}

export const asyncLoaderComponent = (Component, fallback) => (props) => {
  return ( 
    <Suspense fallback={fallback}> 
      <Component {...props} />
    </Suspense>
  )
}

export default function asyncLoader(importFunc, loader) {
  const loaderComponent = loader || <DefaultLoader />
  return asyncLoaderComponent(lazy(importFunc), loaderComponent)
}
