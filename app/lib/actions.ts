"use server";

import { BASE_URL } from "@/app/lib/constant";
import { AnimeProp } from "@/components/AnimeCard";

interface FetchAnimeFilters {
  page: number;
  order?: "popularity" | "ranked";
}
const MAX_LIMIT = 8;
const query = `
query getAnimes($page: Int, $order: OrderEnum, $limit: Int) {
  animes(page: $page, order: $order, limit: $limit) {
    id
    name
    kind
    score
    episodes
    episodesAired
    poster { mainUrl }
  }
}
`;

export async function fetchAnime({
  page,
  order = "popularity",
}: FetchAnimeFilters) {
  try {
    const response = await fetch(`${BASE_URL}/api/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { page, order, limit: MAX_LIMIT },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: AnimeProp[] = (await response.json()).data.animes;

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
