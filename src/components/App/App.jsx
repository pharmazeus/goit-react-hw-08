import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";

import { refreshUser } from "../../redux/auth/operations";
import { selectisRefreshing } from "../../redux/auth/selectors";

import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loader from "../Loader/Loader";

// Lazy imports
const HomePage = lazy(() => import("../../pages/HomePage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const LogInPage = lazy(() => import("../../pages/LogInPage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <strong>Loading data, wait please...</strong>;
  }

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LogInPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="*"
            element={
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  marginTop: 35,
                  color: "#333",
                }}
              >
                😓 404 Not Found 😵
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
