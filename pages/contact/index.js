import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import NavBar from "../../components/NavBar";

export default function Contact() {
  return (
    <div>
      <NavBar activeSection="Contact" />
      <div className="contact" id="contactme">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/mqkwgovb" method="POST">
          <input
            name="name"
            type="text"
            className="feedback-input scroll"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className="feedback-input scroll"
            placeholder="Email"
          />
          <textarea
            name="text"
            className="feedback-input scroll"
            placeholder="Comment"
          ></textarea>
          <input type="submit" value="SUBMIT" className="scroll" />
        </form>

        <div className="icons">
          <ul>
            <li>
              <a
                className="social-icon social-icon--facebook"
                href="https://www.facebook.com/kaustubh.dwivedi.94/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="fab" />
                <div className="tooltip">facebook</div>
              </a>
            </li>
            <li>
              <a
                className="social-icon social-icon--twitter"
                href="https://twitter.com/onlykingKD/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="fab" />
                <div className="tooltip">twitter</div>
              </a>
            </li>
            <li>
              <a
                className="social-icon social-icon--github"
                href="https://github.com/onlykingKD/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="fab" />
                <div className="tooltip">GitHub</div>
              </a>
            </li>
            <li>
              <a
                className="social-icon social-icon--linkedin"
                href="https://linkedin.com/in/kaustubhdwivedi1729/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="fab" />
                <div className="tooltip">linkedin</div>
              </a>
            </li>
            <li>
              <a
                className="social-icon social-icon--instagram"
                href="https://instagram.com/onlykingkd/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="fab" />
                <div className="tooltip">instagram</div>
              </a>
            </li>
            <li>
              <a
                className="social-icon social-icon--envelope"
                href="mailto:kaustubhdwivedi1729@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className="fab" />
                <div className="tooltip">mail</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
