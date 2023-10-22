"use client";
import { SessionProvider } from "next-auth/react";
import CustomLayout from "@/components/layout/customLayout";

export default function AuthSession({ children }) {
  return (
    <SessionProvider>
      <CustomLayout>{children}</CustomLayout>
    </SessionProvider>
  );
}
