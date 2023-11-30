"use server";

import { BASE_URL } from "@/app/lib/constant";
import { AnimeProp } from "@/components/AnimeCard";

interface FetchAnimeFilters {
  page: number;
  order?: "popularity" | "ranked";
}
const MAX_LIMIT = 8;
export async function fetchAnime({
  page,
  order = "popularity",
}: FetchAnimeFilters) {
  try {
    const searchParams = new URLSearchParams();
    searchParams.set("page", page.toString());
    searchParams.set("order", order);
    searchParams.set("limit", MAX_LIMIT.toString());

    const response = await fetch(
      `${BASE_URL}/api/animes?${searchParams.toString()}`
    );

    const data: AnimeProp[] = await response.json();

    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
