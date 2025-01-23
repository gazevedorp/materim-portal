"use client"
import React from "react";
import { useParams } from "next/navigation";

import AuthRoute from "@/components/AuthRoute";
import Header from "@/components/Header";
import systems from "@/data/systems";

export default function System() {
  const params = useParams();
  const system = systems.find((system) => system.slug === params.slug);

  return (
    <AuthRoute>
      <Header title={system?.name || "Sistema não encontrado"} />
    </AuthRoute>
  );
}
