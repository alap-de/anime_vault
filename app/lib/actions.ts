"use server";

import { AnimeProp } from "@/components/AnimeCard";
interface FetchAnimeFilters {
  page: number;
  order?: "popularity" | "ranked";
}
const MAX_LIMIT = 8;
const BASE_URL = "https://shikimori.one";
export async function fetchAnime({
  page,
  order = "popularity",
}: FetchAnimeFilters) {
  console.log("page: ", page);
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
