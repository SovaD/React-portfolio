import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Github, Send, ArrowRight } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Contact = () => {
  const { t } = useAppContext();
  const form = useRef();
  const [status, setStatus] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Берем из .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Берем из .env
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Берем из .env
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("error");
          console.error("EmailJS Error:", error);
        },
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
       
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="section-title"
            style={{ textAlign: "left", marginBottom: "40px" }}
          >
            {t.contactTitle}
          </h2>

          <div className="contact-methods">
            <div className="method-item">
              <Mail className="method-icon" />
              <div>
                <span>Email</span>
                <a href="mailto:p.bakasova@gmail.com">p.bakasova@gmail.com</a>
              </div>
            </div>
            <div className="method-item">
              <Phone className="method-icon" />
              <div>
                <span>Whatsapp / Telegram</span>
                <a href="tel:+996555774318">+996 555 774 318</a>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/SovaD" className="social-icon">
              <Github />
            </a>
            <a href="https://t.me/B_Pii" className="social-icon">
              <Send />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-group">
              <input type="text" name="user_name" required placeholder=" " />
              <label>{t.form.name}</label>
              <span className="hint">Как мне к вам обращаться?</span>
            </div>

            <div className="input-group">
              <input type="email" name="user_email" required placeholder=" " />
              <label>{t.form.email}</label>
              <span className="hint">Я отвечу вам именно сюда</span>
            </div>

            <div className="input-group">
              <textarea
                name="message"
                required
                rows="1"
                placeholder=" "
              ></textarea>
              <label>{t.form.message}</label>
              <span className="hint">Опишите вашу идею или проект</span>
            </div>

            <button
              type="submit"
              className={`submit-btn ${status}`}
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                  ? "Sent!"
                  : "Send Message"}
              <ArrowRight size={20} />
            </button>

            {status === "error" && (
              <p className="error-msg">Ошибка! Попробуйте позже.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
