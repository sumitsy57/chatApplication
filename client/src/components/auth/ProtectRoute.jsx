import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectRoute({ user, redirect = "/login" }) {
  return user ? <Outlet /> : <Navigate to={redirect} replace />;
}
