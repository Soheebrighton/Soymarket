import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMypagePointUI {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  dataForPoint?: Pick<IQuery, "fetchPointTransactions">;
  isAllTrans: boolean;
  isOrders: boolean;
  isTopUp: boolean;
  isSelling: boolean;
  onClickOrders: () => void;

  onClickEditUser: () => void;
  onClickAllTrans: () => void;
  onClickTopUp: () => void;
  onClickSelling: () => void;
}

export interface IPropsDisplay {
  isAllTrans?: boolean;
  isTopUp?: boolean;
  isOrders?: boolean;
  isSelling?: boolean;
}

export interface IPropsStatus {
  status?: string;
}
