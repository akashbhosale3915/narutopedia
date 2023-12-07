import { useCallback, useEffect, useRef, useState } from "react";
import { charactersUrl } from "../constants/constants";
import { useFetch } from "../hooks/useFetch";
import { Character, CharactersResponse } from "../types/character";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState<Character[]>([]);
  const [end, setEnd] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data, loading }: { data: CharactersResponse; loading: boolean } =
    useFetch(charactersUrl(page));

  const loadMore = useCallback(() => {
    if (loading) return;
    setPage((prevPage) => prevPage + 1);
  }, [loading]);

  useEffect(() => {
    let isScrollable;
    if (scrollContainerRef.current) {
      isScrollable =
        scrollContainerRef.current.scrollHeight >
        scrollContainerRef.current.clientHeight;
    }
    if (!isScrollable) loadMore();
  }, [loadMore]);

  useEffect(() => {
    if (data?.characters) {
      if (data?.characters.length === 0) {
        setEnd(true);
      }
      setContent((prevContent) => {
        const uniqueCharacters = data?.characters.filter(
          (newChar) =>
            !prevContent.some((existingChar) => existingChar.id === newChar.id)
        );
        return [...prevContent, ...uniqueCharacters];
      });
    }
  }, [data?.characters, page]);

  if (loading) {
    return (
      <div className='loader'>
        <Loader />
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={content.length}
      next={loadMore}
      hasMore={true}
      loader={
        end ? (
          <h4 className='infinite-loader'>No more characters</h4>
        ) : (
          <h4 className='infinite-loader'>
            <Loader />
          </h4>
        )
      }>
      <div className='main-grid' ref={scrollContainerRef}>
        {content?.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Characters;
