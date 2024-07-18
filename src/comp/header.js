import React from "react";

const Header = () => {
  return (
    <>
      <header className="hide-when-mobile">
      <a className="main-link" href="/">
              <h1>Life House</h1>
            </a>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/hotels">
              Hotels
            </a>
            <ul className="sub-ul">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1od8EeWqR4nfha-AXsWM5Cy7pereaLno773d5b2nW5a4/edit?gid=0#gid=0"
                  target="_blank"
                >
                  Hotels Summary
                </a>
              </li>
              <li>
                <a href="https://life-house.my.salesforce.com/" target="_blank">
                  SalesForce
                </a>
              </li>
              <li>
                <a
                  href="https://app.mews.com/Commander/Home/SignIn"
                  target="_blank"
                >
                  MEWS
                </a>
              </li>
              <li className="mini-projects">
                <a href="">Devices Support&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="https://yamen.jamfcloud.com/"> Jamf</a>
                  </li>
                  <li>
                    <a href="https://goldenott.net/">Panel.X</a>
                  </li>
                  <li>
                    <a href="https://lifehouse.hexnodemdm.com/login/?next=/devicedetails/1291/#/">Hexnode</a>
                  </li>
                  <li>
                    <a href="https://account.ui.com/login?redirect=https%3A%2F%2Funifi.ui.com%2Fconsoles">UniFi</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/qa">
              QA Management
            </a>
            <ul className="sub-ul">
              <li>
                <a href="https://app.dev.life-house.com/" target="_blank">
                  Dev Portal
                </a>
              </li>
              <li>
                <a
                  href="https://booking-engine-widget-dev.webflow.io/"
                  target="_blank"
                >
                  BEW
                </a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/enrolled">
              Enrolled
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="http://localhost:1415">Our Managment</a>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <a className="main-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </header>

      <header className="show-when-mobile">
        <h1>Life House</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              Hotels <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1od8EeWqR4nfha-AXsWM5Cy7pereaLno773d5b2nW5a4/edit?gid=0#gid=0"
                  target="_blank"
                >
                  Hotels Summary
                </a>
              </li>
              <li>
                <a href="https://life-house.my.salesforce.com/" target="_blank">
                  SalesForce
                </a>
              </li>
              <li>
                <a
                  href="https://app.mews.com/Commander/Home/SignIn"
                  target="_blank"
                >
                  MEWS
                </a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                Devices Support <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="https://yamen.jamfcloud.com/"> Jamf</a>
                  </li>
                  <li>
                    <a href="https://goldenott.net/">Panel.X</a>
                  </li>
                  <li>
                    <a href="https://lifehouse.hexnodemdm.com/login/?next=/devicedetails/1291/#/">Hexnode</a>
                  </li>
                  <li>
                    <a href="https://account.ui.com/login?redirect=https%3A%2F%2Funifi.ui.com%2Fconsoles">UniFi</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              QA Management <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="https://app.dev.life-house.com/" target="_blank">
                  Dev Portal
                </a>
              </li>
              <li>
                <a
                  href="https://booking-engine-widget-dev.webflow.io/"
                  target="_blank"
                >
                  BEW
                </a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              Enrolled <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="http://localhost:1415">Our Managment</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
