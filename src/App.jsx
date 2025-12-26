import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppLayout from "./ui/AppLayout";

const Marketplace = lazy(() => import("./pages/Marketplace"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/marketplace"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-screen overflow-y-hidden">
                    <div className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin overflow-y-hidden" />
                  </div>
                }
              >
                <Marketplace />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
