import { limitState, sortState } from "@/app/states";
import { useRecoilState } from "recoil";

export default () => {
  const [sort,setSort]= useRecoilState(sortState);
  const [limit,setLimit] = useRecoilState(limitState)

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
