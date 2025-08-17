import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    'Docs',
    'Pricing',
    'Hosting',
    'Products ▾',
    'Enterprise',
    'Use Cases ▾',
    'Company ▾',
  ]

  return (
    <nav
      className={`${
        styles.header
      } navbar navbar-expand-xl fixed-top navbar-dark ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      <div className="containerWidth w-100 d-flex align-items-center justify-content-between px-4 py-2">
        {/* Logo */}
        <Link href="/">
          <img
            src="https://vast.ai/vast_logo.svg"
            alt="Vast.ai Logo"
            width={130}
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={`${styles.contact} fs-6 text-white d-sm-inline d-none`}
          >
            Contact Sales <IoArrowForwardCircleOutline className="fs-4" />
          </span>
          <span className={`mx-3 fs-6 text-white`}>
            Console <IoArrowForwardCircleOutline className="fs-4" />
          </span>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-5 gap-lg-3 pt-2 gap-2 align-items-lg-center">
            {menuItems.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link className={`nav-link ${styles.link}`} href="#">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav ms-auto gap-lg-3 pt-2 gap-2 align-items-lg-center">
            <li className="nav-item">
              <Link className={`nav-link ${styles.contact}`} href="#">
                Contact Sales <IoArrowForwardCircleOutline className="fs-4" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} href="#">
                Console <IoArrowForwardCircleOutline className="fs-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
