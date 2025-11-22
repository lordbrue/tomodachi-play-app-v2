import React from "react";
import { companions } from "../../../data/companions";

export default function CompanionProfile({ params }: any) {
  const id = params?.id;
  const companion = companions.find(c=>c.id === id);
  if(!companion) return <div className="p-6">Perfil não encontrado</div>;
  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="flex gap-6">
        <div className="w-60 h-60 rounded-md overflow-hidden">
          <img src={companion.avatar} alt={companion.name} className="w-full h-full object-cover"/>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{companion.name}</h1>
          <p className="text-sm text-muted-foreground mt-2">{companion.bio}</p>
          <div className="mt-4 flex gap-2">
            {companion.platforms.map(p=> <span key={p} className="text-xs bg-white/6 px-2 py-1 rounded">{p}</span>)}
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">Modalidades</h3>
            <ul className="list-disc ml-5">
              {companion.sessionTypes.map(s=> <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="mt-6">
            <button className="px-4 py-2 bg-primary rounded text-white">Agendar Sessão</button>
          </div>
        </div>
      </div>
    </main>
  )
}