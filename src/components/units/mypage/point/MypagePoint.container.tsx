import MypagePointUI from "./MypagePoint.presenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_USER_LOGGED_IN,
  FETCH_POINT_TRANSACTIONS,
} from "./MypagePoint.queries";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";

export default function MypagePoint() {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const { data: dataForPoint } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS);

  const [isAllTrans, setIsAllTrans] = useState<boolean>(true);
  const [isOrders, setIsOrders] = useState<boolean>(false);
  const [isTopUp, setIsTopUp] = useState<boolean>(false);
  const [isSelling, setIsSelling] = useState<boolean>(false);

  const onClickEditUser = () => {
    router.push("/mypage/profile");
  };

  const onClickAllTrans = () => {
    setIsAllTrans(true);
    setIsOrders(false);
    setIsTopUp(false);
    setIsSelling(false);
  };

  const onClickTopUp = () => {
    setIsAllTrans(false);
    setIsOrders(false);
    setIsTopUp(true);
    setIsSelling(false);
  };

  const onClickOrders = () => {
    setIsAllTrans(false);
    setIsOrders(true);
    setIsTopUp(false);
    setIsSelling(false);
  };

  const onClickSelling = () => {
    setIsAllTrans(false);
    setIsOrders(false);
    setIsTopUp(false);
    setIsSelling(true);
  };

  return (
    <MypagePointUI
      data={data}
      dataForPoint={dataForPoint}
      onClickEditUser={onClickEditUser}
      onClickOrders={onClickOrders}
      onClickAllTrans={onClickAllTrans}
      onClickTopUp={onClickTopUp}
      onClickSelling={onClickSelling}
      isAllTrans={isAllTrans}
      isOrders={isOrders}
      isTopUp={isTopUp}
      isSelling={isSelling}
    />
  );
}
