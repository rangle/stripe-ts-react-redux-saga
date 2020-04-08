import React from "react";
import {Link} from "react-router-dom";

const Footer: React.FC = () => <div className="footer">
    <p className="legal-button">
        <Link to="/contact">Contact</Link>
    </p>
    <p className="legal-button">
        <Link to="/terms" className="button">Terms of Service</Link>
    </p>
    <p className="legal-button">
        <Link to="/privacy" className="button">Privacy Policy</Link>
    </p>
</div>

export default Footer;
