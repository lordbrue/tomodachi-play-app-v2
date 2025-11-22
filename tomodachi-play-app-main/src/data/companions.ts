import { Companion } from "../types/Companion";

export const companions: Companion[] = [
  {
    id: "c1",
    name: "Aiko",
    age: 22,
    city: "São Paulo",
    bio: "Otaku de coração. Amo Shonen e romances dramáticos. Vamos maratonar!",
    platforms: ["Crunchyroll", "Netflix"],
    genres: ["Shonen", "Romance"],
    avatar: "/images/companions/aiko/avatar.jpg",
    images: ["/images/companions/aiko/1.jpg","/images/companions/aiko/2.jpg"],
    sessionTypes: ["text","voice","video"],
    priceText: null,
    priceVoice: null,
    priceVideo: null,
    available: true
  },
  {
    id: "c2",
    name: "Ren",
    age: 25,
    city: "Rio de Janeiro",
    bio: "Fã de isekai e teorias. Adoro comentar cenas e analisar arcos.",
    platforms: ["HiDive", "Prime Video"],
    genres: ["Isekai", "Mystery"],
    avatar: "/images/companions/ren/avatar.jpg",
    images: ["/images/companions/ren/1.jpg","/images/companions/ren/2.jpg"],
    sessionTypes: ["text","voice","video"],
    priceText: null,
    priceVoice: null,
    priceVideo: null,
    available: false
  },
  {
    id: "c3",
    name: "Mika",
    age: 20,
    city: "Belo Horizonte",
    bio: "Cosplayer e editora de AMVs, adoro animes com trilha sonora forte.",
    platforms: ["Netflix","Disney+"],
    genres: ["Slice of Life","Music"],
    avatar: "/images/companions/mika/avatar.jpg",
    images: ["/images/companions/mika/1.jpg"],
    sessionTypes: ["text","voice"],
    priceText: null,
    priceVoice: null,
    priceVideo: null,
    available: true
  }
];