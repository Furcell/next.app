export default () => {
  const onSortChange = (e: any) => {
    setSort(e.target.value);
    localStorage.setItem("sort", e.target.value);
  };

  const onLimitChange = (e: any) => {
    setLimit(e.target.value);
    sessionStorage.setItem("limit", e.target.value);
  };

  return (
    <>
      <select value={sort} onChange={onSortChange}>
        <option>asc</option>
        <option>desc</option>
      </select>
      <input type="number" value={limit} onChange={onLimitChange} />
    </>
  );
};
