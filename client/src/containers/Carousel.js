import React, { Component } from 'react'
import guideCarousel from '../components/Carousel';
export class Carousel extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <guideCarousel />
        </div>
      </div>
    )
  }
}

export default Carousel
