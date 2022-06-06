import MUIDataTable from "mui-datatables";
import styled from "styled-components";
import { useEffect, useState } from "react";
import backendfacade from "../service/backendfacade";
import { IRowElement } from "../interface/IRowElement";

const columns = ["Domain", "Description", "Snippet"];

const CodeSnippet = styled.code`
  background-color: lightgrey;
`;

export default () => {
  const [listData, setListData] = useState([] as IRowElement[]);

  useEffect(() => {
    const getData = async () => {
      const response = await backendfacade().GetRowElementBySearch();

      setListData(response);
    };

    getData();
  }, []);

  return (
    <MUIDataTable
      options={{
        selectableRows: undefined,
      }}
      title={"Employee List"}
      data={listData}
      columns={columns}
    />
  );
};
