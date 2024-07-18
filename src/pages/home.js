import Header from "../comp/header";
import Footer from "../comp/footer";

function Contact() {
  return (
    <>
      <Header />

      <main >
        <div className="home">
          <img className="imagehome" src="img/home1.svg" alt="err" />
          <h2>Modern Website & Application for Life House Company</h2>
          <p>
            Collecting most of the company's work centers in one place and
            simplifying them for our employees
          </p>
          <br />

          <div className="card">
          <h5>Life House services for Hotels</h5>
            <img  src="img/home2.svg" alt="err" />
            <img src="img/home4.svg" alt="err" />
            <img  src="img/homeService2.svg" alt="err" />
            <img  src="img/home3.svg" alt="err" />
            <img src="img/home6.svg" alt="err" />
          </div>
          <br />
          <br />

          <h4>
            This program was supervised and followed by Eng. Ahmed Rashwan, and
            it is sufficient for use now, We are working on improvements and
            adding more features
          </h4>
        </div>
        <div className="tile">
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
