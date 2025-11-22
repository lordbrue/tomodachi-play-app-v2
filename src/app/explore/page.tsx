import React from "react";
import CompanionCard from "../../components/CompanionCard";
import { companions } from "../../data/companions";

export default function ExplorePage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Explore Hosts</h1>
        <p className="text-sm text-muted-foreground mt-1">Encontre quem combinar com seu anime — filtre por plataforma, gênero e disponibilidade.</p>
      </header>

      <section className="space-y-4">
        {companions.map((c) => (
          <CompanionCard key={c.id} companion={c} />
        ))}
      </section>
    </main>
  );
}