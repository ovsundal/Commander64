import { IRowElement } from "../interface/IRowElement";

interface IBackendFacade {
  GetRowElementBySearch: () => Promise<IRowElement[]>;
}

const BACKEND_URL = "https://localhost:5001/";

export default () => {
  return {
    GetRowElementBySearch: async () => {
      const response = await fetch(BACKEND_URL + "RowElementBySearch");
      return response.json();
    },
  } as unknown as IBackendFacade;
};
