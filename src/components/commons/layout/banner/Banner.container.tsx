import * as A from "./Banner.styles";
import { Carousel } from "antd";

export default function Banner() {
  return (
    <A.Banner>
      <Carousel autoplay dots={false}>
        <div>
          <A.contentStyle>
            <A.Wrapper>
              <img src="/images/carousel.png" />
            </A.Wrapper>
          </A.contentStyle>
        </div>
        <div>
          <A.contentStyle>
            <A.Wrapper>
              <img src="/images/carousel_zero.png" />
            </A.Wrapper>
          </A.contentStyle>
        </div>
      </Carousel>
    </A.Banner>
  );
}
