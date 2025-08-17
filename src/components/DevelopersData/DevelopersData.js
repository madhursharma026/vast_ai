import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import {
  IoArrowForwardCircle,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5'
import styles from './DevelopersData.module.css'

export default function DevelopersData() {
  const steps = [
    {
      title: 'Sign Up & Access',
      description:
        'Create your account and instantly access our AI platform with flexible GPU instances.',
    },
    {
      title: 'Launch Your First GPU',
      description:
        'Spin up on-demand GPU instances—or save up to 50% using interruptible and auction pricing.',
    },
    {
      title: 'Build & Scale',
      description:
        'Start building AI applications and scale seamlessly with enterprise-grade security and performance.',
    },
  ]
  return (
    <div className={`py-5 ${styles.sectionBg}`}>
      <div class={`py-5 containerWidth text-white px-4`}>
        <div className="row">
          <div className="col-xl-4 col-md-5 d-flex flex-column justify-content-center">
            <h1 className="responsive-heading">
              Built by Developers, for Developers
            </h1>
            <p className="fs-6 mt-3">Trusted since 2018</p>
          </div>
          <div className="col-xl-8 col-md-7 border-start border-3 mt-md-0 mt-4">
            <div className="row">
              <div className="col-md-6 my-4 px-4 h-100">
                <IoIosCheckmarkCircleOutline className="fs-2 text-success mb-2" />
                <h3>Comprehensive Platform API</h3>
                <p>
                  Programmatically launch GPU instances and automate your AI
                  infrastructure. Our API provides seamless, comprehensive
                  control of all Vast.ai features.
                </p>
                <p>
                  Try The API <IoArrowForwardCircleOutline />
                </p>
              </div>
              <div className="col-md-6 my-4 px-4 h-100">
                <IoIosCheckmarkCircleOutline className="fs-2 text-success mb-2" />
                <h3>Easy-to-use CLI</h3>
                <p>
                  Skip the GUI boilerplate. Our CLI provides quick and easy
                  access to the API, letting you focus on building.
                </p>
                <p>
                  Get Started for $5 <IoArrowForwardCircleOutline />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`py-5 px-sm-4 px-3`}
        style={{
          background:
            'radial-gradient(54% 46%, rgb(255, 46, 0) 0%, rgb(208, 73, 27) 7%, rgb(93, 142, 97) 21%, rgb(0, 198, 154) 33%, rgb(14, 166, 184) 40%, rgb(29, 135, 215) 49%, rgb(40, 113, 237) 57%, rgb(46, 99, 250) 65%, rgb(49, 95, 255) 73%, rgb(48, 93, 250) 76%, rgb(47, 89, 236) 80%, rgb(44, 82, 214) 83%, rgb(41, 73, 182) 87%, rgb(37, 60, 141) 91%, rgb(32, 45, 91) 95%, rgb(26, 28, 34) 98%, rgb(26, 26, 26) 99%, rgb(26, 26, 26) 100%)',
        }}
      >
        <div className={`containerWidth text-white`}>
          <div
            className={`card ${styles.cardPosition} containerWidth w-100 border-black rounded-0 border-2`}
          >
            <div className="card-body p-sm-5 p-3">
              <h1
                className={`${styles.heading}`}
                style={{ fontFamily: 'PT Serif' }}
              >
                Get Started in <i>Minutes</i>
              </h1>

              {steps.map((step, index) => (
                <div
                  className="d-flex align-items-start mt-4 flex-wrap"
                  key={index}
                >
                  {/* Number Badge */}
                  <span
                    className="border rounded-circle d-flex align-items-center justify-content-center me-3 mb-2 fw-bold bg-info text-white"
                    style={{
                      width: '40px',
                      height: '40px',
                      flex: '0 0 auto',
                    }}
                  >
                    {index + 1}
                  </span>

                  {/* Text Section */}
                  <div style={{ flex: '1 1 auto', minWidth: '250px' }}>
                    <h5 className="mb-1 fw-semibold">{step.title}</h5>
                    <p
                      className="mb-0 text-secondary"
                      style={{ fontSize: '16px' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="mt-5">
                <button
                  type="button"
                  className="btn btn-info me-3 fs-5 rounded-pill px-4 fw-semibold"
                >
                  Start Building
                </button>
                <span className="ms-4 fw-semibold fs-5">
                  Docs <IoArrowForwardCircle className="fs-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white px-3">
        <h1 className={`mt-5 ${styles.heading}`}>Need Support?</h1>
        <h4 style={{ fontFamily: 'PT Serif' }}>
          Chat with our 24/7 live support team in our product console.
        </h4>
        <h6 className="ms-4 fw-semibold fs-5">
          Chat Now <IoArrowForwardCircle className="fs-4" />
        </h6>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
