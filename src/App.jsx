import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Category from "./pages/Category/Category";
import Questions from "./pages/Questions/Questions";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/category/:type"
        element={
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        }
      />

      <Route
        path="/questions/:topic"
        element={
          <ProtectedRoute>
            <Questions />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;