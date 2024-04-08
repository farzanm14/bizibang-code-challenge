import { useState } from "react";
import Endpoints from "../services/edpoints";
import RequestUtil from "../services/requestUtil";
import { Data } from "../models/table";

const UseTableData = () => {
  const [list, setList] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchList(page: number) {
    const newList = await apiGetReq(page);
    appendNewPage(newList);
  }
  const apiGetReq = (page: number) => {
    setIsLoading(true);
    return RequestUtil.get({
      url: Endpoints.table.getData(page),
    }).run();
  };
  function appendNewPage(newList: Data[]) {
    setList((prev) => [...prev, ...newList]);
    setIsLoading(false);
  }

  return {
    list,
    isLoading,
    fetchList,
  };
};

export default UseTableData;
