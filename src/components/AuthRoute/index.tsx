"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/useUserStore";

export default function AuthRoute({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/not-found");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
