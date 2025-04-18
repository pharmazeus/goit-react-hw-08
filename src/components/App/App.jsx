import AppBar from "../../components/AppBar/AppBar";
import HomePage from "../../pages/HomePage";
import ContactsPage from "../../pages/ContactsPage";
import LogInPage from "../../pages/LogInPage";
import RegisterPage from "../../pages/RegisterPage";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />
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
    </div>
  );
}
