import { Carousel } from 'react-bootstrap';
import './home.css';

export default function HomeSlideShow(props) {
  const { ads, theme } = props;
  return (
    <div className="main-publicity">
      <Carousel variant={theme === 'light' ? 'dark' : ''} pause='false' fade>
        {ads.map((r, index) => (
          <Carousel.Item interval={7000} className="slide-show-image" >
            <img className="ad-image" src={r} alt={r} key={index} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
