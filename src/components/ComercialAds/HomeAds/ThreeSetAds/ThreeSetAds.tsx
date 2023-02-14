import React from "react"
import "./ThreeSetAds.scss"
import first from "../../../../assets/adsThree/first.png"
import second from "../../../../assets/adsThree/second.png"
import third from "../../../../assets/adsThree/third.png"

const ThreeSetAds = () => {
  return (
    <div className="three-set-ads">
      <div className="three-ads">
        <img src={first} alt="" />
      </div>
      <div className="three-ads">
        <img src={second} alt="" />
      </div>
      <div className="three-ads">
        <img src={third} alt="" />
      </div>
    </div>
  )
}

export default ThreeSetAds
