import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './features/auth/context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoutes';
import PublicRoute from './components/auth/PublicRoutes';
import Layout from './layouts/AuthLayout';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Projects from './pages/projects/projects';
import Signup from './pages/auth/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path ="home" element ={<Home />} />

       </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        
      </Route>
    </Route>
  )
);

export const   App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;