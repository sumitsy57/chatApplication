import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import AppLayout from "./components/layout/AppLayout";

// Direct imports (no lazy loading)
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Groups from "./pages/Groups";
import NotFound from "./pages/NotFound";

let user = true;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="chat/:chatId" element={<Chat />} />
            <Route path="groups" element={<Groups />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
