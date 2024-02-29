import homeimg from "../images/home.jpg"
import homeimg2 from "../images/home2.jpg"
import Analaytics from "../components/Analaytics"
const Home=()=>{
     return(
        <>
              <main>
               <section className="section-hero">
                  <div className="container grid grid-two-cols">
                        <div className="hero-content">
                        <p>We are the World Best Software service Company</p>
              <h2>Welcome to Engineer Wala Sourav Site</h2>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Sourav Site,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
                  <div className="btn btn-group">
                  <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
                  </div>
                        </div>
                        <div className="hero-image">
                       <img src={homeimg} alt="homeimage" height="300px" width="500px"/>
                        </div>
                  </div>
               </section>
              </main>
                  <Analaytics/>
              <div className="container grid grid-two-cols">
              <div className="hero-image">
                       <img src={homeimg2} alt="homeimage" height="300px" width="500px"/>
                        </div>
              <div className="hero-content">
            <p>We are here to help you</p>
            <h2>Get Started Today</h2>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
          </div>
        </>
     )
}
    export default Home;