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
        <div className="d-flex flex-wrap align-items-center mt-3 gap-3">
          <button
            type="button"
            className="btn btn-info fs-5 rounded-pill px-4 fw-semibold"
          >
            Search Secure Cloud
          </button>

          <span className="fw-semibold fs-5 d-flex align-items-center">
            Case Studies <IoArrowForwardCircle className="fs-4 ms-2" />
          </span>
        </div>
      </div>
    </div>
  )
}
