import usePhotos from "./hooks/usePhotos";

const Gallery = () => {
  const pageSize = 10;
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = usePhotos({
    pageSize,
  });
  return (
    <div className="col">
      {data?.pages.map((page) =>
        page.data.map((photo) => (
          <img
            className="row"
            key={photo.id}
            src={photo.url}
            alt={photo.title}
            style={{ display: "block", maxWidth: "100%", objectFit: "cover" }}
          />
        ))
      )}
      <button
        className="btn btn-primary"
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More..."}
      </button>
    </div>
  );
};

export default Gallery;
