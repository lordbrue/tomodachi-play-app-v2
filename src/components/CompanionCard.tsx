import React from "react";
import { Companion } from "../types/Companion";
import Link from "next/link";

type Props = {
  companion: Companion;
};

export default function CompanionCard({ companion }: Props) {
  return (
    <Link href={`/companion/${companion.id}`} className="block">
      <div className="flex gap-4 bg-white/5 rounded-lg p-3 hover:shadow-lg transition-shadow">
        <div className="w-36 h-20 flex-shrink-0 overflow-hidden rounded-md">
          <img src={companion.avatar} alt={companion.name} className="w-full h-full object-cover"/>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{companion.name}{companion.age ? `, ${companion.age}` : ""}</h3>
            <span className={`text-sm px-2 py-1 rounded ${companion.available ? "bg-green-600" : "bg-gray-600"}`}>{companion.available ? "Disponível" : "Indisponível"}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{companion.bio}</p>
          <div className="flex gap-2 mt-2 items-center">
            {companion.platforms.slice(0,2).map((p)=>(
              <span key={p} className="text-xs bg-white/6 px-2 py-1 rounded">{p}</span>
            ))}
            <div className="ml-auto text-xs text-muted-foreground">{companion.city}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}