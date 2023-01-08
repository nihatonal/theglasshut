import { createContext } from "react";

export const ShareContext = createContext({
  buy: () => { },
  removeItem: () => { },
  shop: [],
  showModal: () => { },
  closeModal: () => { },
  show: null
});
