import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/company_logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <Link className="footer-title" to={"/"}>
            <img src={companyLogo} className=" h-10" alt="logo" />
          </Link>
          <Link className="link link-hover">
            <p className="w-1/2">
              Home Address: First Floor, D242, F-32B, Sector 63 Rd,
              Noida, 201301 Uttar Pradesh
            </p>
          </Link>
          <Link className="link link-hover">
            <p>Phone: +1-585-566-2070</p>
          </Link>
          <Link className="link link-hover">
            <p>Email: info@kusheldigi.com</p>
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link className="link link-hover" to={"/"}>
            Home
          </Link>
          <Link className="link link-hover" to={"/about"}>
            About{" "}
          </Link>
          <Link className="link link-hover" to={"/service"}>
            Service
          </Link>
          <Link className="link link-hover" to={"/portfolio"}>
            Portfolio
          </Link>
          <Link className="link link-hover" to={"/contact"}>
            Contact Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Our Services</h6>
          <Link className="link link-hover">Digital Transformation</Link>
          <Link className="link link-hover">Store Design & Development</Link>
          <Link className="link link-hover">Platform Migration</Link>
          <Link className="link link-hover">Custom Tech Stack Development</Link>
          <Link className="link link-hover">ThirdParty Integration</Link>
          <Link className="link link-hover">App Development</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover">Terms & Conditions</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Refund policy</Link>
          <Link className="link link-hover">NDA Policy</Link>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-t border-base-300 px-10 py-4">
        <div className="flex justify-between items-center w-full flex-wrap gap-4">
          <div className="flex gap-4">
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
          <div className="text-right text-sm">
            <p> @{new Date().getFullYear()} Kusheldigi. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
