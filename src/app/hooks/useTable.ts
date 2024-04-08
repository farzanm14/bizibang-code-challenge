import { useState } from "react";
import Endpoints from "../services/edpoints";
import RequestUtil from "../services/requestUtil";
import { Data } from "../models/table";

const UseTableData = () => {
  const [list, setList] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchList = (page: number) => {
    setIsLoading(true);
    return RequestUtil.get({
      url: Endpoints.table.getData(page),
    }).run();
  };
  function appendNewPage() {
    setList((prev) => [...prev, ...list]);
    setIsLoading(false);
  }

  return {
    list,
    isLoading,
    fetchList,
  };
};

export default UseTableData;
