import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MypagePoint from "../../src/components/units/mypage/point/MypagePoint.container";

const MypagePage = () => {
  return <MypagePoint />;
};

export default withAuth(MypagePage);
