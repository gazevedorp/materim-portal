import Link from "next/link";
import React from "react";

import systems, { SystemProps } from "@/data/systems";
import Header from "@/components/Header";
import AuthRoute from "@/components/AuthRoute";

import "./page.css";

export default async function SystemsPage() {
  const fetchedSystems: SystemProps[] = await fetchSystems();

  return (
    <AuthRoute>
      <Header title="Sistemas" />
      <div className="systems__container">
        {fetchedSystems.map((system) => {
          const Icon = system.icon;
          return (
            <Link key={system.id} href={`/systems/${system.slug}`}>
              <div className="systems__card">
                <Icon style={{ marginRight: 10 }} />
                {system.name}
              </div>
            </Link>
          );
        })}
      </div>
    </AuthRoute>
  );
}

async function fetchSystems(): Promise<SystemProps[]> {
  return new Promise((resolve) => setTimeout(() => resolve(systems), 500));
}
