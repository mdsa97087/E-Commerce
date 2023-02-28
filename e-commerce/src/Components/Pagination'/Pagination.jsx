function Pagination({ page, fetchDataPost }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        margin:'40px auto'
      }}
    >
      <button
        type="button"
        class="btn btn-primary"
        disabled={page === 1}
        onClick={() => fetchDataPost(-1)}
      >
        PREVIOUS
      </button>
      <button type="button" class="btn btn-secondary">
        {page}
      </button>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => fetchDataPost(1)}
      >
        NEXT
      </button>
    </div>
  );
}

export default Pagination;
