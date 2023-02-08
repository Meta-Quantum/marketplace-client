import "./HomeAds.scss";
import { Carousel } from "react-bootstrap";

function HomeSlideShow(props: any) {
  const { ads, theme } = props;
  return (
    <div className="main-publicity">
      {/* Below there is pause='false' */}
      <Carousel variant={theme === "light" ? "dark" : ""} fade>
        {ads.map((r: any, index: any) => (
          <Carousel.Item interval={7000} className="slide-show-image">
            <img className="ad-image" src={r} alt={r} key={index} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeSlideShow;
