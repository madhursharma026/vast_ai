// import TestimonialSlider from '../TestimonialSlider/TestimonialSlider'
import dynamic from 'next/dynamic'
import styles from './Pricing.module.css'
const TestimonialSlider = dynamic(
  () => import('../TestimonialSlider/TestimonialSlider'),
  { ssr: false } // only render on client
)

export default function Pricing() {
  const testimonials = [
    {
      text: '“Vast.ai is simpler and cheaper than alternatives; which helps us iterate quickly on big models.”',
      author: 'Postdoctoral Researcher, Leading University',
    },
    {
      text: '“Vast.ai was by far the cheapest. The user interface is super easy. It let us quickly spin up 45 GPU instances—no hoops, no hidden costs.”',
      author: 'Engineering Lead, Private Capital Firm',
    },
    {
      text: '“I can’t even spin up more than 2 GPUs on AWS. With Vast, I can fire up 48 or 64 GPUs on demand–no questions asked.”',
      author: 'Data Director, BioTech Firm',
    },
    {
      text: '“Great customer service, fast and responsive, and solved my issue quickly on a Sunday morning.”',
      author: 'Researcher',
    },
    {
      text: '“I can’t even spin up more than 2 GPUs on AWS. With Vast, I can fire up 48 or 64 GPUs on demand–no questions asked.”',
      author: 'Data Director, BioTech Firm',
    },
    {
      text: '“Vast.ai was by far the cheapest. The user interface is super easy. It let us quickly spin up 45 GPU instances—no hoops, no hidden costs.”',
      author: 'Engineering Lead, Private Capital Firm',
    },
  ]

  return (
    <>
      <div className={`containerWidth px-4 mt-5 py-4 ${styles.sectionBorder}`}>
        <div className="row px-md-0 px-2">
          <div className="col-lg-5">
            <p className="responsive-heading lh-1 fw-semibold">
              Unmatched Pricing on 10,000+ GPUs
            </p>
            <p className="mt-4 fs-5">
              Pick the right GPU for your workload, from budget options to
              high-performance clusters.
            </p>
            <div className="d-flex flex-column flex-md-row">
              <button
                type="button"
                className="btn btn-dark rounded-pill px-4 me-md-3 mb-2 mb-md-0"
              >
                On-Demand Pricing
              </button>
              <button
                type="button"
                className="btn btn-primary rounded-pill px-4"
              >
                Contact Sales
              </button>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-4">
            <div className={styles.tableWrapper}>
              <table className="table text-center align-middle">
                <thead>
                  <tr>
                    <th scope="col" className="d-md-table-cell d-none">
                      <span className="fs-5">GPU Type</span>
                    </th>
                    <th scope="col">
                      <span className="fs-5">Vast.ai</span>
                    </th>
                    <th scope="col">
                      <span className="fs-5">AWS</span>
                    </th>
                    <th scope="col">
                      <span className="fs-5">CoreWeave</span>
                    </th>
                    <th scope="col">
                      <span className="fs-5">Lamda</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-group-divider fw-semibold border-2 border-black">
                  <tr>
                    <td className="d-md-table-cell d-none text-decoration-underline">
                      RTX 5090
                    </td>
                    <td className="text-primary">$0.37/hr</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td className="d-md-table-cell d-none text-decoration-underline">
                      H200
                    </td>
                    <td className="text-primary">$2.59/hr</td>
                    <td>$10.60/hr</td>
                    <td>$6.31/hr</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td className="d-md-table-cell d-none text-decoration-underline">
                      H100
                    </td>
                    <td className="text-primary">$1.65/hr</td>
                    <td>$12.30/hr</td>
                    <td>$6.16/hr</td>
                    <td>$2.29/hr</td>
                  </tr>
                  <tr>
                    <td className="d-md-table-cell d-none text-decoration-underline">
                      RTX 4090
                    </td>
                    <td className="text-primary">$0.39/hr</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td className="d-md-table-cell d-none text-decoration-underline">
                      RTX 3090
                    </td>
                    <td className="text-primary">$0.14/hr</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="responsive-heading lh-1 fw-semibold mt-5">
          The Future of AI Compute - Scalable on Demand GPUs
        </p>
        <p className="mt-4 fs-4">
          No minimum contracts, pay-as-you-go, start with a single GPU and scale
          up anytime.
        </p>
      </div>

      <div className="containerWidth px-4 mt-5 py-4">
        <div className="row mb-5">
          <div className="col-md-6 mt-md-0 mt-5">
            <div
              className={`h-100 d-flex flex-column justify-content-between ${styles.card}`}
            >
              <div>
                <h2 className="lh-1 fw-semibold">GPU Cloud</h2>
                <p className="fs-5 mt-3">
                  40 Secure Datacenters and 10,000+ GPUS are waiting.
                </p>
              </div>
              <p className="fs-5 mt-3 text-primary text-decoration-underline mb-0">
                Spin up a GPU in minutes{' '}
                <i className="fa fa-arrow-circle-right"></i>
              </p>
            </div>
          </div>

          <div className="col-md-6 mt-md-0 mt-5">
            <div
              className={`h-100 d-flex flex-column justify-content-between ${styles.card}`}
            >
              <div>
                <h2 className="lh-1 fw-semibold">
                  Enterprise or Complex Needs
                </h2>
                <p className="fs-5 mt-3">
                  Build without constraints. Get a dedicated cluster,
                  personalized support and SLAs.
                </p>
              </div>
              <p className="fs-5 mt-3 text-primary text-decoration-underline mb-0">
                Talk to us today about your vision{' '}
                <i className="fa fa-arrow-circle-right"></i>
              </p>
            </div>
          </div>
        </div>

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </>
  )
}
