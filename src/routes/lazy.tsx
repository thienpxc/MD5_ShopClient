
import { lazy, Suspense } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lazyFnDelay = (importFunc:any) => {
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 1000);
    });
  });
  //const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={<>Loading ....</>}>
      <LazyComponent />
    </Suspense>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lazyFn = (importFunc: any) => {

  const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={<>Loading ....</>}>
      <LazyComponent />
    </Suspense>
  );
};
