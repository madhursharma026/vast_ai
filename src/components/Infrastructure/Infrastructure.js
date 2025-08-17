import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

export default function Infrastructure() {
  return (
    <div className="bg-dark py-5">
      <div class={`py-5 containerWidth text-white px-4`}>
        <div className="row">
          <div className="col-xl-4 col-md-5 d-flex flex-column justify-content-center">
            <h1 className="responsive-heading">
              AI Infrastructure, Tailored for the Enterprise
            </h1>
            <button
              type="button"
              style={{ maxWidth: '250px' }}
              className="btn btn-primary mt-4 px-4 rounded-pill fw-semibold"
            >
              Contact Sales Team
            </button>
          </div>
          <div className="col-xl-8 col-md-7 border-start border-3 mt-md-0 mt-4">
            <div className="row">
              <div className="col-md-6 my-4 px-4 h-100">
                <IoIosCheckmarkCircleOutline className="fs-2 text-success mb-2" />
                <h3>Security & Compliance</h3>
                <p>
                  ISO 27001 certified data centers, enterprise‑grade security,
                  and customized compliance needs.
                </p>
              </div>
              <div className="col-md-6 my-4 px-4 h-100">
                <IoIosCheckmarkCircleOutline className="fs-2 text-success mb-2" />
                <h3>Off Platform Supply</h3>
                <p>
                  Source additional GPU rentals that are not currently listed
                  for customized contract terms.
                </p>
              </div>
              <div className="col-md-6 my-4 px-4 h-100">
                <IoIosCheckmarkCircleOutline className="fs-2 text-success mb-2" />
                <h3>Large‑Scale Procurement in One Place</h3>
                <p>
                  Secure purchase orders, volume discounts, and SLAs for 100 -
                  10,000 + GPUs—all managed through the same console.
                </p>
              </div>
              <div className="col-md-6 my-4 px-4 h-100">
                <IoIosCheckmarkCircleOutline className="fs-2 text-success mb-2" />
                <h3>24/7 White‑Glove Support</h3>
                <p>
                  Real‑time assistance from senior engineers whenever you need
                  it along with custom solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
