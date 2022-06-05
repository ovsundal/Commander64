import { IRowElement } from "../interface/IRowElement";

interface IBackendFacade {
  GetRowElementBySearch: () => Promise<IRowElement[]>;
}

const BACKEND_URL = "http://localhost:5001/";

export default () => {
  return {
    GetRowElementBySearch: async () => {
      const response = await fetch(
        BACKEND_URL + "RowElementBySearchController"
      );
      console.log(response);
    },
  } as unknown as IBackendFacade;
};
