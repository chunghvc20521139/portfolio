import React from 'react'

export default function portfolio() {
  return (
    <>
        <div className="hero">
          <nav>
              <h2 className="logo">Portfo<span>lio</span></h2>
              <ul>
                  <li><a href="https://www.facebook.com/">Home</a></li>
                  <li><a href="https://www.facebook.com/">About Me</a></li>
                  <li><a href="https://www.facebook.com/">Services</a></li>
                  <li><a href="https://www.facebook.com/">Skills</a></li>
                  <li><a href="https://www.facebook.com/">Contact</a></li>
              </ul>
              <a href="https://www.facebook.com/" className="btn">Subscribe</a>
          </nav>

          <div className="content">
              <h4>Hello, my name is</h4>
              <h1>Van <span>Chung</span></h1>
              <h3>I'm a Web Developer and this man is not me.</h3>
              <div className="newsletter">
                  <form>
                      <input type="email" name="email" id="mail" placeholder="Enter your email"/>
                      <input type="submit" name="submit" value="Lets Start"/>
                  </form>
              </div>
          </div>
      </div>

      {/* <!--About section start--> */}
      <section className="about">
          <div className="main">
              <img src="img\main-img1.png" alt=""/>
              <div className="about-text">
                  <h2>About me</h2>
                  <h5>Developer <span>& designer</span></h5>
                  <p>I am a student of University of Information technology. I want to become a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device. <br/>And again, this man is not me.</p>
                  <button type="button">Let's Talk</button>
              </div>
          </div>
      </section>

      {/* <!--service section start--> */}
      <div className="service">
          <div className="title">
              <h2>Services</h2>
          </div>

          <div className="box">
              <div className="card">
                  <i className="fas fa-bars"></i>
                  <h5>Web Development</h5>
                  <div className="pra">
                      <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                      <p>
                          <a className="button" href="https://www.facebook.com/">Read More</a>
                      </p>
                  </div>
              </div>

              <div className="card">
                  <i className="far fa-user"></i>
                  <h5>Web Development</h5>
                  <div className="pra">
                      <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                      <p>
                          <a className="button" href="https://www.facebook.com/">Read More</a>
                      </p>
                  </div>
              </div>

              <div className="card">
                  <i className="far fa-bell"></i>
                  <h5>Web Development</h5>
                  <div className="pra">
                      <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                      <p>
                          <a className="button" href="https://www.facebook.com/">Read More</a>
                      </p>
                  </div>
              </div>
          </div>
      </div>

      {/* <!--Contact Me--> */}
      <div class="contact-me">
          <p>Let Me Get You A Beautiful Website.</p>
          <a href="https://www.facebook.com/" class="button-two">Hire Me</a>
      </div>

      {/* <!--footer start--> */}
      <footer>
          <p>Van Chung</p>
          <p>For more HTML, CSS and coding tutorial - please click on the link below to subscribe my channel:</p>
          <div class="social">
              <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
              <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
          </div>
          <p class="end">CopyRight by Van Chung</p>
      </footer>
    </>
  )
}
