import { useEffect, useState } from "react";
import UseTableData from "../../hooks/useTable";
import StickyHeadTable from "../../components/Table";

export default function DataTablePage() {
  const { list, isLoading, fetchList } = UseTableData();
  const [page, setpage] = useState(0);

  useEffect(() => {
    fetchList(page);
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <StickyHeadTable list={list} page={page} setPage={setpage} />
  );
}
