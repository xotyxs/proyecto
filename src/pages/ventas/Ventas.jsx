import { Link} from 'react-router-dom'
export function Ventas(){
    return(
        <>
  <div id="site-content">
    <header className="site-header">
      <div className="container">
        <div id="branding">
          <img src="images/logo.png" alt="" className="logo" />
          <h1 className="site-title">
            <Link to="/home">Company Name</Link>
          </h1>
          <small className="site-description">Slogan goes here</small>
        </div>
      </div>
    </header>{" "}
    {/* .site-header */}
    <main className="main-content">
      <div className="hero">
        <div className="featured-image" data-bg-image="dummy/home.jpg">
          <Link to="/home" className="button">
            Back to homepage
          </Link>
        </div>
      </div>{" "}
      {/* .hero */}
      <div className="fullwidth-block content">
        <div className="container">
          <p className="leading">
            Pellentesque habitant morvtristique senectus et netus et malesuada
            fames turpis egestas.
          </p>
          <p>
            Donec ornare, eros porttitor posuere vulputate, tortor massa
            sagittis erat, non ornare enim leo sed metus. Pellentesque eu
            pharetra mauris, sed auctor erat. Pellentesque rhoncus dapibus
            tellus, vel fermentum nisl accumsan eget. Sed sit amet congue nibh.
            Donec diam tortor, volutpat sed porta quis, ullamcorper eget magna.
            Nullam sed imperdiet lectus. Curabitur consequat neque quis diam
            ornare congue. Nunc sollicitudin ut felis at mattis. Nullam cursus
            porttitor felis, sit amet cursus dui lobortis at. Sed nec egestas
            lectus, vel consectetur nulla. Aliquam malesuada accumsan quam sit
            amet.{" "}
          </p>
          <div className="house-feature">
            <div className="feature">
              <div className="feature-image">
                <img src="dummy/house-image-1.jpg" alt="" />
              </div>
              <div className="feature-desc">
                <h2>Consequat erat phasellus</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  sunt, laborum? Iste et possimus delectus quaerat distinctio
                  debitis nihil, at voluptatem sit ipsam. Esse aspernatur
                  eveniet odio quod, iure, ullam!
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-image">
                <img src="dummy/house-image-2.jpg" alt="" />
              </div>
              <div className="feature-desc">
                <h2>Consequat erat phasellus</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  sunt, laborum? Iste et possimus delectus quaerat distinctio
                  debitis nihil, at voluptatem sit ipsam. Esse aspernatur
                  eveniet odio quod, iure, ullam!
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-image">
                <img src="dummy/house-image-3.jpg" alt="" />
              </div>
              <div className="feature-desc">
                <h2>Consequat erat phasellus</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  sunt, laborum? Iste et possimus delectus quaerat distinctio
                  debitis nihil, at voluptatem sit ipsam. Esse aspernatur
                  eveniet odio quod, iure, ullam!
                </p>
              </div>
            </div>
          </div>{" "}
          {/* .house-feature */}
          <div className="price-area">
            <div className="row">
              <div className="col-md-4 col-md-offset-1">
                <h2 className="price">
                  Price: <strong>$390.000</strong>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita veniam deleniti distinctio molestiae atque voluptas
                  officia officiis dicta, aperiam, consequuntur, modi suscipit
                  saepe quas ea, nam iste magni ipsa dolore.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita veniam deleniti distinctio molestiae atque voluptas
                  officia officiis dicta, aperiam, consequuntur, modi suscipit
                  saepe quas ea, nam iste magni ipsa dolore.
                </p>
              </div>
              <div className="col-md-5 col-md-offset-1">
                <div className="request-form">
                  <form action="#">
                    <div className="field">
                      <label htmlFor="#">Your name:</label>
                      <input type="text" />
                    </div>{" "}
                    {/* .field */}
                    <div className="field-column row">
                      <div className="col-sm-6">
                        <div className="field">
                          <label htmlFor="">Email:</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="field">
                          <label htmlFor="">Phone:</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* .field-column */}
                    <div className="field">
                      <label htmlFor="#">Street:</label>
                      <input type="text" />
                    </div>{" "}
                    {/* .field */}
                    <div className="field">
                      <label htmlFor="#">City:</label>
                      <input type="text" />
                    </div>{" "}
                    {/* .field */}
                    <input type="submit" defaultValue="Send a request" />
                  </form>
                </div>{" "}
                {/* .request-form */}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* .fullwidth-block */}
    </main>{" "}
    {/* .main-content */}
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="widget">
              <h3 className="widget-title">Contact</h3>
              <strong>Company Name INC</strong>
              <p>325 Avenue Street, New York</p>
              <Link to="tel:450325763542">(450) 325 763 542</Link> <br />
              <Link to="mailto:office@companyname.com">office@companyname.com</Link>
            </div>{" "}
            {/* .widget-title */}
          </div>
          <div className="col-md-4">
            <div className="widget">
              <h3 className="widget-title">Social Media</h3>
              <div className="social-links">
                <Link to="#" className="facebook">
                  <i className="fa fa-facebook" />
                </Link>
                <Link to="#" className="twitter">
                  <i className="fa fa-twitter" />
                </Link>
                <Link to="#" className="google-plus">
                  <i className="fa fa-google-plus" />
                </Link>
                <Link to="#" className="pinterest">
                  <i className="fa fa-pinterest" />
                </Link>
              </div>
            </div>{" "}
            {/* .widget-title */}
          </div>
          <div className="col-md-4">
            <div className="widget">
              <h3 className="widget-title">Join our newsletter</h3>
              <form action="#" className="subscribe">
                <input type="email" placeholder="Enter your email..." />
                <input type="submit" defaultValue="sign up" />
              </form>
            </div>{" "}
            {/* .widget-title */}
          </div>
        </div>{" "}
        {/* .row */}
        <div className="copy">
          <p>
            Copyright 2014 Company name, Designed by Themezy. All rights
            reserved
          </p>
        </div>
      </div>{" "}
      {/* .container */}
    </footer>{" "}
    {/* .site-footer */}
  </div>{" "}
  {/* #site-content */}
</>

        )
}
    