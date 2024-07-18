import Header from "../comp/header";
import Footer from "../comp/footer";

function Contact() {
  return (
    <>
      <Header />

      <main>
        <h2>If you have a question or have suggestions, please contact us</h2>
        <li>
          <a
            href="mailto:abdul.hegazy@life-house.com?subject=Hello from Bard&body=I'm interested in learning more about email links.
"
            target="_blank"
          >
            <h3>Email me here</h3>
          </a>
        </li>
        <div>
        <img className="contact-img" src="img/contact1.svg" alt="" />
      <h6>We work on developing it daily</h6>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
