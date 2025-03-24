import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.css"
import "./css/ticket.css"
import "./css/chat.css"
import "./css/dashboard.css"
import "./css/navbar.css"
import "./css/footer.css"
import "./css/login.css"

import App from './App'
import Home from './pages/Home.jsx'
import Plans from './pages/Plans.jsx'
import Chat from './pages/Chat.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/login/Register.jsx'
import ResetPassword from './pages/login/ResetPassword.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/plans", element: <Plans /> },
      { path: "/chat", element: <Chat /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/reset-password", element: <ResetPassword /> },
      {path:"*",
        element: <NotFound />
      }
    ]
  }]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)