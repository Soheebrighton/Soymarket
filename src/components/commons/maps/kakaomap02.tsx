import { Dispatch, SetStateAction, useEffect } from "react";
import { IQuery } from "../../../commons/types/generated/types";
declare const window: typeof globalThis & {
  kakao: any;
};

interface IPropsKakaoMap02 {
  address: string;
  dataForFetch?: Pick<IQuery, "fetchUseditem">;
  setLat: Dispatch<SetStateAction<number>>;
  setLng: Dispatch<SetStateAction<number>>;
}
export default function KakaoMap02(props: IPropsKakaoMap02) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=9ba75a77772202896933d3e15db534d1&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        //
        //
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.address ||
            props.dataForFetch?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              props.setLat(coords.La);
              props.setLng(coords.Ma);
              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래장소</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [
    props.address || props.dataForFetch?.fetchUseditem.useditemAddress?.address,
  ]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "200px" }}></div>
    </>
  );
}
