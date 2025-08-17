import { IoArrowForwardCircle } from 'react-icons/io5'
import styles from './Enterprises.module.css'

export default function Enterprises() {
  return (
    <div className={styles.sectionBg}>
      <div className={styles.overlay}></div>
      <div
        className={`${styles.cardPosition} containerWidth w-100 px-3 text-white`}
      >
        <h1 className={styles.heading}>Start Building AI Without Limits</h1>
        <p className="fs-5 fs-md-4 mt-3">
          Join thousands of developers and enterprises running AI workloads on
          Vast.
        </p>
        <button
          type="button"
          className="btn btn-info me-3 fs-5 rounded-pill px-4 fw-semibold"
        >
          Search Secure Cloud
        </button>
        <span className="ms-4 fw-semibold fs-5">
          Case Studies <IoArrowForwardCircle className="fs-4" />
        </span>
      </div>
    </div>
  )
}
