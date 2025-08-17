import { Button } from 'react-bootstrap'
import styles from './Section1.module.css'

export default function Section1() {
  return (
    <div className={styles.section1Bg}>
      <br className="d-lg-block d-none" />
      <br className="d-lg-block d-none" />
      <br className="d-md-block d-none" />
      <br />
      <br />
      <br />
      <br />
      <div className="containerWidth px-4 py-4">
        <h1 className={styles.section1Title}>Instant GPUs.</h1>
        <h1 className={`${styles.section1Title}`}>Transparent Pricing.</h1>
        <p className={`${styles.section1Text} mt-5`}>
          Deploy high-performance GPU instances in seconds and save up to 80%
          vs. traditional clouds - with 24/7 expert support.
        </p>
        <Button variant="primary" className="px-4 rounded-pill fw-semibold">
          Get Started
        </Button>
        <Button
          variant="outline-light"
          className="px-4 rounded-pill ms-3 fw-semibold"
        >
          Book Now
        </Button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br className="d-md-block d-none" />
      <br className="d-lg-block d-none" />
      <br className="d-lg-block d-none" />
    </div>
  )
}
