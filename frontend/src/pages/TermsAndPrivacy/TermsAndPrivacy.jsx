import React from "react";
import "./TermsAndPrivacy.css";

const TermsAndPrivacy = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Use & Privacy Policy</h1>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our food delivery platform, you agree to be
          bound by these Terms of Use and our Privacy Policy. If you do not
          agree, please do not use our services.
        </p>
      </section>

      <section>
        <h2>2. User Account</h2>
        <p>
          You must provide accurate and complete information while creating an
          account. You are responsible for maintaining the confidentiality of
          your login credentials and all activities under your account.
        </p>
      </section>

      <section>
        <h2>3. Orders & Payments</h2>
        <p>
          All orders placed through our platform are subject to availability.
          Prices, offers, and delivery times may change without prior notice.
          Payments must be completed before order confirmation.
        </p>
      </section>

      <section>
        <h2>4. Cancellations & Refunds</h2>
        <p>
          Orders once confirmed may not be canceled after preparation has
          started. Refunds, if applicable, will be processed according to our
          refund policy and original payment method.
        </p>
      </section>

      <section>
        <h2>5. User Conduct</h2>
        <p>
          Users agree not to misuse the platform, provide false information, or
          engage in fraudulent, abusive, or illegal activities.
        </p>
      </section>

      <section>
        <h2>6. Privacy Policy</h2>
        <p>
          We respect your privacy. Personal information such as name, email,
          phone number, and address is collected only to process orders and
          improve our services.
        </p>
      </section>

      <section>
        <h2>7. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal
          data. However, no online platform can guarantee complete security.
        </p>
      </section>

      <section>
        <h2>8. Third-Party Services</h2>
        <p>
          Our platform may use third-party services for payment processing,
          analytics, or delivery. We are not responsible for their privacy
          practices.
        </p>
      </section>

      <section>
        <h2>9. Changes to Policy</h2>
        <p>
          We reserve the right to update these Terms and Privacy Policy at any
          time. Continued use of the platform means acceptance of the updated
          terms.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions regarding these Terms or Privacy Policy,
          please contact us at <strong>support@tomatodelivery.com</strong>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndPrivacy;
