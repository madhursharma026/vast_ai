import Link from 'next/link'
import { IoArrowForwardOutline } from 'react-icons/io5'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container py-5">
        <div className="row gy-4">
          {/* Left Section */}
          <div className="col-12 col-xxl-5">
            <div className="row">
              <div className="col-3">
                <img
                  src="https://vast.ai/logo-footer.svg"
                  alt="Vast.ai Logo"
                  width="80"
                />
              </div>
              <div className="col-9">
                <h5 className="fw-bold">Subscribe for our product updates.</h5>
                <div className={`${styles.subscribeBox} mt-2`}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.input}
                  />
                  <IoArrowForwardOutline className={styles.arrowIcon} />
                </div>
                <div className="mt-4 text-secondary small">
                  © 2025 Vast.ai. All rights reserved.
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-xxl-7 row">
            <div className="col-xxl col-md-4 col-6">
              <h5 className="mt-4">Products</h5>
              <Link href="#" className="text-black text-decoration-none">
                GPU Cloud
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Clusters
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Hosting
              </Link>
              <br />
            </div>
            <div className="col-xxl col-md-4 col-6">
              <h5 className="mt-4">Resources</h5>

              <Link href="#" className="text-black text-decoration-none">
                Enterprise
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Pricing
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Use Cases
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Docs
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                FAQs
              </Link>
              <br />
            </div>
            <div className="col-xxl col-md-4 col-6">
              <h5 className="mt-4">Community</h5>

              <Link href="#" className="text-black text-decoration-none">
                Discord
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                GitHub
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Twitter
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                YouTube
              </Link>
              <br />
            </div>
            <div className="col-xxl col-md-4 col-6">
              <h5 className="mt-4">Legal</h5>

              <Link href="#" className="text-black text-decoration-none">
                Terms of Service
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Privacy Policy
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Compliance
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Vulnerability Disclosure
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Data Processing
              </Link>
              <br />
            </div>
            <div className="col-xxl col-md-4 col-6">
              <h5 className="mt-4">Contact</h5>

              <Link href="#" className="text-black text-decoration-none">
                Get in Touch
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Contact Sales
              </Link>
              <br />
              <Link href="#" className="text-black text-decoration-none">
                Investor Inquiries
              </Link>
              <br />
            </div>
            <div className="col-xxl col-md-4 col-6 mt-xxl-0 mt-4">
              <img
                src="https://vast.ai/_next/image?url=%2Faicpa-soc-2-logo.png&w=96&q=75"
                alt="#ImgNotFound"
                width={'80px'}
              />
            </div>
          </div>
        </div>

        <img
          src="https://vast.ai/vastai-text.svg"
          alt="#ImgNotFound"
          className="w-100 mt-5 pt-5 px-4"
        />
      </div>
    </footer>
  )
}
