import React from "react"
import "./HomeAds.scss"
import img1 from "../../../assets/homePage images/img1.png"
import img2 from "../../../assets/homePage images/img2.png"
import img4 from "../../../assets/homePage images/img4.png"
import img5 from "../../../assets/homePage images/img5.png"
import img6 from "../../../assets/homePage images/img6.png"
import img7 from "../../../assets/homePage images/img7.png"
import HomeSlideShow from "./HomeSlideShow"

function MainAds() {
  const ads = [img1, img2, img4, img5, img6, img7]
  return (
    <div className="all-publicity">
      {/* <HomeHiddenNav /> */}
      <HomeSlideShow ads={ads} />
      <div className="small-publicity">
        <div>
          <img src={img6} alt="" className="home-small-ad" />
        </div>
        <div>
          <img src={img4} alt="" className="home-small-ad" />
        </div>
      </div>
    </div>
  )
}

export default MainAds
