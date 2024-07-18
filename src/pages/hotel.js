import Header from "../comp/header";
import Footer from "../comp/footer";

function Hotels() {
  return (
    <>
      <Header />

      <main>
        <h2>Property Management System (PMS)</h2>

        <br />
        <div className="card-1">
          MEWs
          <li>
            <a
              href="https://app.mews.com/Commander/Home/SignIn"
              target="_blank"
            >
              <h3>Click here</h3>
            </a>
          </li>
          <img src="img/mews.png" alt="" />
        </div>

        <div className="card-2">
          HotelOS
          <li>
            <a href="https://app.life-house.com/" target="_blank">
              <h3>Click here</h3>
            </a>
          </li>
          <img src="img/OS.png" alt="" />
        </div>
        <br />
        <br />

        <br />
      </main>
      <Footer />
    </>
  );
}

export default Hotels;
