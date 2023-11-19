import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div>
        <footer className="footer-section mobile-show desktop-show">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget company-intro-widget">
              <a href="index.html" className="site-logo"><img alt="" src="/group2.svg" /></a>
              <p>Select your car and location, tell us what's wrong, and we'll

give you an instant fixed price in seconds. Your mechanic will come to whichever address suits you best, at the date and time of your choice.</p>

<img alt="" src="/group-142.svg" />

            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6" style={{marginTop:'40px'}}>
            <div className="widget course-links-widget">
              <h5 className="widget-title">SERVICES</h5>
              <ul className="courses-link-list">
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Exterior Detailing</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Interior Detailing</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Paint Correction</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Engine Repair</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Electrical Repair</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Break Service</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6" style={{marginTop:'40px'}}>
            <div className="widget latest-news-widget">
              <h5 className="widget-title">INFORMATION</h5>
              <ul className="small-post-list">
                <li>
                  <div className="small-post-item">
                    <h6 className="small-post-title"><a href="#">hello@mymechanicmate.com</a></h6>
                  </div>
                </li>
                <li>
                  <div className="small-post-item">
                    <h6 className="small-post-title"><a href="#">+013749 232-53</a></h6>
                  </div>
                </li>
                <li>
                  <div className="small-post-item">
                    <h6 className="small-post-title"><a href="#">99 Roving, Luton City</a></h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6" style={{marginTop:'40px'}}>
            <div className="widget newsletter-widget">
              <h5 className="widget-title">Subscribe Our Blogs</h5>
              <div className="footer-newsletter">
                <form className="news-letter-form">
                  <input type="email" name="news-email" id="news-email" placeholder="Your E-Mail Here"/>
                  <input style={{backgroundColor:'#721cff'}} type="submit" value="SUBSCRIBE NOW"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    
  </footer>
    </div>
  )
}

