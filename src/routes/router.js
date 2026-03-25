import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoading from "../components/loading/page";

const HomePage = lazy(() => import("../pages/home"));
const ErrorPage = lazy(() => import("../pages/error"));

export default function Router() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={
          <HomePage />
        }>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}