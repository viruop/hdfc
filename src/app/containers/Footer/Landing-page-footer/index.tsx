import React from "react";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const LandingPageFooter: React.FC = () => {
  return (
    <footer className="landing-page-footer">
      <div className="landing-page-footer-content">
        <div className="grid grid-cols-4 gap-4 text-white  h-3/4">
          <div>
            <img src="/LOGO.png" alt="Logo" className="footer-logo" />
          </div>
          <div>
            <h4 className="text-white">PRODUCTS</h4>
            <ul>
              <li>HomeCare</li>
              <li>Cyberior</li>
              <li>Travel</li>
              <li>Concierge Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">RESOURCES</h4>
            <ul>
              <li>Technical Support</li>
              <li>Licensing</li>
              <li>Acknowledgment</li>
              <li>Account Management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">CONTACT US</h4>
            <ul>
              <li>support@ea.com</li>
              <li>+331 5856 7960</li>
              <li>42 avenue Hudson, 34221 Austria</li>
              <li>
                <XIcon></XIcon>
                <WhatsAppIcon></WhatsAppIcon>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-10 justify-between">
          <p className="text-white">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <p className="text-white">
            Terms & Conditions | Cookies | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
