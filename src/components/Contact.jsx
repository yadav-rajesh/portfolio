import { useState } from "react";

const initialFormState = { name: "", email: "", message: "" };
const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

function SocialIcon({ name }) {
  const key = name.toLowerCase();

  if (key === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.07 1.53 1.07.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.04-2.77-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.88a9.3 9.3 0 0 1 2.5.35c1.9-1.34 2.75-1.06 2.75-1.06.54 1.4.2 2.44.1 2.7.65.72 1.04 1.64 1.04 2.77 0 3.96-2.34 4.84-4.57 5.1.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.3 10.3 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (key === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5a1.93 1.93 0 1 1 0-3.86 1.93 1.93 0 0 1 0 3.86ZM8.5 10.17H5.38v9.19H8.5v-9.2Zm4.98 0h-2.99v9.19h3.12v-4.83c0-2.69 3.5-2.94 3.5 0v4.83h3.13V13.5c0-4.56-4.99-4.39-6.76-2.15v-1.18Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.8.1 6.76 5.12a.75.75 0 0 0 .9 0l6.76-5.12a.25.25 0 0 0-.15-.45H4.95a.25.25 0 0 0-.15.45Z"
      />
    </svg>
  );
}

export default function Contact({ profile }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        nextErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please add a short message.";
    } else if (formData.message.trim().length < 15) {
      nextErrors.message = "Message should be at least 15 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(false);
    setSubmitError("");

    if (!validate()) {
      return;
    }

    if (!contactEndpoint) {
      setSubmitError(
        "Contact form endpoint is not configured. Add VITE_CONTACT_FORM_ENDPOINT in your deployment environment."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setFormData(initialFormState);
    } catch {
      setSubmitError("Could not send your message. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad section-reveal">
      <h3 className="section-title">Contact</h3>
      <div className="contact-layout">
        <aside className="contact-socials card">
          <h4>Connect</h4>
          <p className="contact-side-note">Reach out directly through any of these platforms.</p>
          <div className="contact-social-list">
            {profile.social.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`contact-social-btn social-${item.name.toLowerCase()}`}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="contact-social-icon">
                  <SocialIcon name={item.name} />
                </span>
                {item.name}
              </a>
            ))}
          </div>
        </aside>

        <form className="contact-form card" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Your full name"
          />
          {errors.name ? <span className="field-error">{errors.name}</span> : null}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="you@example.com"
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Tell me about your project"
          />
          {errors.message ? <span className="field-error">{errors.message}</span> : null}

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitted ? (
            <p className="submit-note">Thanks. Your message has been sent successfully.</p>
          ) : null}

          {submitError ? <p className="submit-note field-error">{submitError}</p> : null}
        </form>
      </div>
    </section>
  );
}
