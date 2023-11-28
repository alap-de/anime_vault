"use client";

import { fetchAnime } from "@/app/lib/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";

function LoadMore() {
  const [ref, inView] = useInView();
  const [animes, setAnimes] = useState<AnimeProp[]>([]);
  const [page, setPage] = useState(2);
  useEffect(() => {
    if (inView) {
      fetchAnime({ page: page }).then((newAnime) => {
        setAnimes((animes) => [...animes, ...newAnime]);
        setPage((page) => page + 1);
      });
    }
  }, [inView, animes, page]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {animes.map((item: AnimeProp, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
