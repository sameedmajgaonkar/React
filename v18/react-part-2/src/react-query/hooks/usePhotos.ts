import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface PhotoQuery {
  pageSize: number;
}

const usePhotos = (query: PhotoQuery) => {
  const fetchPhotos = (pageParam = 1) => {
    return axios.get<Photo[]>("https://jsonplaceholder.typicode.com/photos", {
      params: {
        _start: (pageParam - 1) * query.pageSize,
        _limit: query.pageSize,
      },
    });
  };

  return useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: ({ pageParam }) => fetchPhotos(pageParam),
    initialPageParam: 1,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.data.length > 0 ? allPages.length + 1 : undefined,
  });
};

export default usePhotos;
