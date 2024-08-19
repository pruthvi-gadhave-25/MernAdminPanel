import React from 'react' ;
import "./Footer.css"

function Footer() {
  return (
    <section id="footer">
    <div id="copyright-bar">
      <div className="row">
        <div className="copyright-content">
          <div className="span4">
            <p>The Mern Admin Limited. 2013 All rights reserved.</p>
          </div>
          <div className="span4 offset4">
            <div className="copyright-list">
              <ul>
                <a href="terms.html">
                  <li>Terms &amp; Conditions</li>
                </a>
                <a href="privacy.html">
                  <li> - Privacy Policy</li>
                </a>
                <a href="#">
                  <li> - Cookie Policy</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Footer