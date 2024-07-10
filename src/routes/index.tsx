
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazyFn, lazyFnDelay } from './lazy';

const RoterSetup = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={lazyFnDelay(() => import("@pages/home/Home"))}
          />
          <Route
            path="*"
            element={lazyFnDelay(() => import("@pages/not-fond/404"))}
          />
          <Route
            path="/manager"
            element={lazyFnDelay(() => import("@pages/admin/Admin"))}
          >
            <Route
              path="category"
              element={lazyFn(() => import("@pages/admin/pages/category-manager/CategoryManager"))}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
    
};

export default RoterSetup;