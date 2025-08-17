import { IoArrowForwardCircle } from 'react-icons/io5'
import styles from './CertifiedData.module.css'

export default function CertifiedData() {
  return (
    <div className={styles.sectionBg}>
      <div
        className={`card ${styles.cardPosition} containerWidth border-black rounded-0 border-2`}
      >
        <div className="card-body p-sm-5 p-3">
          <p className="fs-4">
            SOC2 Certified{' '}
            <img
              src="https://vast.ai/_next/image?url=%2Faicpa-soc-2-logo.png&w=48&q=75"
              alt="#ImgNotFound"
            />
          </p>
          <h1 className={styles.heading}>
            <i>Trusted</i> by Enterprise AI Innovators
          </h1>
          <p className="fs-4">
            Vast.ai prioritizes data security and regulatory compliance, serving
            diverse clients from AI startups to Fortune 500 companies. We are
            SOC2 certified, ensuring rigorous standards for security,
            availability, and confidentiality. We're committed to protecting
            your data and helping you understand how our cloud based GPUs align
            with your compliance requirements. For detailed information, view
            our full compliance policy.
          </p>
          <div className="d-flex flex-wrap align-items-center mt-3 gap-3">
            <button
              type="button"
              className="btn btn-info fs-5 rounded-pill px-4 fw-semibold"
            >
              Search Secure Cloud
            </button>

            <span className="fw-semibold fs-5 d-flex align-items-center">
              Trust Center <IoArrowForwardCircle className="fs-4 ms-2" />
            </span>

            <span className="fw-semibold fs-5 d-flex align-items-center">
              About Vast Enterprise{' '}
              <IoArrowForwardCircle className="fs-4 ms-2" />
            </span>

            <span className="fw-semibold fs-5 d-flex align-items-center">
              Contact Sales <IoArrowForwardCircle className="fs-4 ms-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
