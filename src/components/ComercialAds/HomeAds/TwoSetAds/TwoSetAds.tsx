import React from "react"
import "./TwoSetAds.scss"
import first from "../../../../assets/adsTwo/first.png"
import second from "../../../../assets/adsTwo/second.png"

function TwoSetAds() {
  return (
    <div className="two-set-ads">
      <div className="two-ads">
        <img src={first} alt="" />
      </div>
      <div className="two-ads">
        <img src={second} alt="" />
      </div>
    </div>
  )
}

export default TwoSetAds
