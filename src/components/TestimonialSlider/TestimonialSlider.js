import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styles from './TestimonialSlider.module.css'

function NextArrow(props) {
  const { onClick } = props
  return (
    <div
      className={`${styles.slickArrow} ${styles.nextArrow}`}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right"></i>
    </div>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className={`${styles.slickArrow} ${styles.prevArrow}`}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left"></i>
    </div>
  )
}

export default function TestimonialSlider({ testimonials }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // small tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings} className="mx-4">
      {testimonials.map((item, idx) => (
        <div key={idx} className="px-3 h-100">
          <div className={`${styles.testimonialCard} p-4`}>
            <p className="fs-5">{item.text}</p>
            <p className="fw-semibold">{item.author}</p>
          </div>
        </div>
      ))}
    </Slider>
  )
}
