import Banner from "./banner/Banner.container";
import Header from "./header/Header.container";
import HeaderColor from "./header-color/HeaderColor.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";
import { ReactChild } from "react";

const HIDDEN = ["/auth/register/", "/auth/login/"];
const DISPLAY_BANNER = ["/market/", "/boards/list/"];
const COLOURED_HEADER = ["/"];

interface IPropsLayout {
  children: ReactChild;
}

export default function Layout(props: IPropsLayout) {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  const isDisplayBanner = DISPLAY_BANNER.includes(router.asPath);
  const isColouredHeader = COLOURED_HEADER.includes(router.asPath);

  return (
    <>
      {!isHidden && (
        <>
          {isColouredHeader ? <HeaderColor /> : <Header />}
          {isDisplayBanner && <Banner />}
        </>
      )}
      <div>{props.children}</div>
      {!isHidden && <Footer />}
    </>
  );
}
