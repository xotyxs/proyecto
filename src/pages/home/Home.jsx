import { Link } from 'react-router-dom'
import '../../App.css'
export function Home() {

  return (
    <>

      <div id="site-content">
        <header className="site-header">
          <div className="container">
            <div id="branding">
              <img src="/imagenes/logo.jpeg" className="logo" />
              <h1 className="site-title">
                <Link to="/home"><h1>Nueva era propiedades</h1></Link>
              </h1>
              <small className="site-description">Slogan goes here</small>
            </div>
          </div>
        </header>{" "}
        {/* .site-header */}
        <main className="main-content">
          <div className="hero">
            <div className="hero-half-background" data-bg-image="dummy/hero.jpg" />
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="hero-content">
                    <h2 className="hero-title">
                      Bibendum ante ut sodales consequat erat velit
                    </h2>
                    <p>
                      Curabitur ligula enim, adipiscing eget urna at, laoreet tempus
                      leo. Fusce sollicitudin nulla ut nibh accumsan, quis venenatis
                      nulla commodo. Nunc commodo condimentum congue.
                    </p>
                    <span className="arrow" />
                  </div>
                </div>{" "}
                {/* .col-md-5 */}
                <div className="col-md-5 col-md-offset-2">
                  <div className="request-form">
                    <h2>Consectetur adipisicing</h2>
                    <p>
                      Curabitur ligula enim, adipiscing eget urna laoreet tempus.
                      Fusce sollicitudin nulla accumsan venenatis nulla commodo
                      commodo condimentum congue mauris tincidunt aliquam.{" "}
                    </p>
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
                </div>{" "}
                {/* .col-md-5 */}
              </div>{" "}
              {/* .row */}
            </div>{" "}
            {/* .container */}
          </div>{" "}
          {/* .hero */}
          <div className="fullwidth-block">
            <div className="container">
              <header>
                <h2 className="section-title">Consequat erat velit phasellus</h2>
                <p className="section-desc">
                  {" "}
                  Aliquam malesuada accumsan quam sit amet hendrerit. <br />
                  Aliquam ut eros nec massa tristique pellentesque quis quis diam.
                </p>
              </header>
              <div className="row">
                <div className="col-md-6">
                  <ul className="circle-numbered-feature">
                    <li>
                      <h3>Curabitur ligula enim adipiscing eget</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Labore voluptates beatae doloribus velit laboriosam
                        repellendus, odio similique ea eius esse dolorum fuga earum
                        vero!
                      </p>
                    </li>
                    <li>
                      <h3>Curabitur ligula enim adipiscing eget</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Labore voluptates beatae doloribus velit laboriosam
                        repellendus, odio similique ea eius esse dolorum fuga earum
                        vero!
                      </p>
                    </li>
                    <li>
                      <h3>Curabitur ligula enim adipiscing eget</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Labore voluptates beatae doloribus velit laboriosam
                        repellendus, odio similique ea eius esse dolorum fuga earum
                        vero!
                      </p>
                    </li>
                    <li>
                      <h3>Curabitur ligula enim adipiscing eget</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Labore voluptates beatae doloribus velit laboriosam
                        repellendus, odio similique ea eius esse dolorum fuga earum
                        vero!
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 col-md-offset-1">
                  <figure>
                    <img src="dummy/figure.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* .fullwidth-block */}
          <div className="fullwidth-block" data-bg-color="#2f2e3c">
            <div className="container">
              <header bg-dark="">
                <h2 className="section-title">Consequat erat velit phasellus</h2>
                <p className="section-desc">
                  {" "}
                  Aliquam malesuada accumsan quam sit amet hendrerit. <br /> Aliquam
                  ut eros nec massa tristique pellentesque quis quis diam.
                </p>
              </header>
              <div className="posts-list">
                <div className="post">
                  <div className="post-content">
                    <figure className="featured-image">
                      <img src="dummy/small-thumb-1.jpg" alt="" />
                    </figure>
                    <h2 className="entry-title">
                      <Link to="/ventas">Nullam mi lacus iacullis magna</Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem placeat quas, fugit asperiores adipisci maxime
                    </p>
                    <strong className="price">$279.00</strong>
                  </div>
                </div>
                <div className="post">
                  <div className="post-content">
                    <figure className="featured-image">
                      <img src="dummy/small-thumb-2.jpg" alt="" />
                    </figure>
                    <h2 className="entry-title">
                      <Link to="/ventas">Nullam mi lacus iacullis magna</Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem placeat quas, fugit asperiores adipisci maxime
                    </p>
                    <strong className="price">$279.00</strong>
                  </div>
                </div>
                <div className="post">
                  <div className="post-content">
                    <figure className="featured-image">
                      <img src="dummy/small-thumb-3.jpg" alt="" />
                    </figure>
                    <h2 className="entry-title">
                      <Link to="/ventas">Nullam mi lacus iacullis magna</Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem placeat quas, fugit asperiores adipisci maxime
                    </p>
                    <strong className="price">$279.00</strong>
                  </div>
                </div>
                <div className="post">
                  <div className="post-content">
                    <figure className="featured-image">
                      <img src="dummy/small-thumb-4.jpg" alt="" />
                    </figure>
                    <h2 className="entry-title">
                      <Link to="/ventas">Nullam mi lacus iacullis magna</Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem placeat quas, fugit asperiores adipisci maxime
                    </p>
                    <strong className="price">$279.00</strong>
                  </div>
                </div>
                <div className="post">
                  <div className="post-content">
                    <figure className="featured-image">
                      <img src="dummy/small-thumb-5.jpg" alt="" />
                    </figure>
                    <h2 className="entry-title">
                      <Link to="/ventas">Nullam mi lacus iacullis magna</Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem placeat quas, fugit asperiores adipisci maxime
                    </p>
                    <strong className="price">$279.00</strong>
                  </div>
                </div>
                <div className="post">
                  <div className="post-content">
                    <figure className="featured-image">
                      <img src="dummy/small-thumb-6.jpg" alt="" />
                    </figure>
                    <h2 className="entry-title">
                      <Link to="/ventas">Nullam mi lacus iacullis magna</Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem placeat quas, fugit asperiores adipisci maxime
                    </p>
                    <strong className="price">$279.00</strong>
                  </div>
                </div>
              </div>
              <p className="text-center">
                <Link to="/ventas" className="button">
                  See more houses
                </Link>
              </p>
            </div>{" "}
            {/* .container */}
          </div>{" "}
          {/* .fullwidth-block */}
          <div className="fullwidth-block">
            <div className="container">
              <div className="post-grid">
                <div className="post">
                  <figure className="featured-image">
                    <img src="dummy/large-thumb-1.jpg" alt="" />
                  </figure>
                  <div className="post-detail">
                    <h2 className="entry-title">
                      <Link to="/ventas">
                        Donec bibendum est lobortis molestie auctor lorem
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                      temporibus voluptates id praesentium nihil. Aspernatur, quo.
                      Est laboriosam consectetur atque quo eius. Libero excepturi
                      quam dolorum quia sapiente, saepe velit!
                    </p>
                    <span className="arrow" />
                  </div>{" "}
                  {/* .post-detail */}
                </div>{" "}
                {/* .post */}
                <div className="post">
                  <figure className="featured-image">
                    <img src="dummy/large-thumb-2.jpg" alt="" />
                  </figure>
                  <div className="post-detail">
                    <h2 className="entry-title">
                      <Link to="/ventas">
                        Donec bibendum est lobortis molestie auctor lorem
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                      temporibus voluptates id praesentium nihil. Aspernatur, quo.
                      Est laboriosam consectetur atque quo eius. Libero excepturi
                      quam dolorum quia sapiente, saepe velit!
                    </p>
                    <span className="arrow" />
                  </div>{" "}
                  {/* .post-detail */}
                </div>{" "}
                {/* .post */}
              </div>{" "}
              {/* .post-grid */}
              <div className="cta">
                <header>
                  <h2 className="section-title">Consequat erat velit phasellus</h2>
                  <p className="section-desc">
                    {" "}
                    Aliquam malesuada accumsan quam sit amet hendrerit. <br />{" "}
                    Aliquam ut eros nec massa tristique pellentesque quis quis diam.
                  </p>
                </header>
                <p>
                  <Link to="tel:450325763542" className="tel">
                    (450) 325 763 542
                  </Link>
                </p>
                <p>
                  <Link to="mailto:office@companyname.com" className="email">
                    office@companyname.com
                  </Link>
                </p>
              </div>
            </div>{" "}
            {/* .container */}
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