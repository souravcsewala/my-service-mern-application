 import Analaytics from "../components/Analaytics";  
 import aboutpic   from "../images/engineer2.jpg"
 import { NavLink } from "react-router-dom";
 import { useAuth } from "../store/auth";
 
const About=()=>{
  const {user}=useAuth();
    return(
       <>
         
         <main>
               <section className="section-hero">
                  <div className="container grid grid-two-cols">
                        <div className="hero-content" >
                        <p>Why Choose Us? </p>
                        <p>Hello {user ? `${user.username} welcome to our website` : `user you are not login plz first login`}</p>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
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
                       <img src={aboutpic} alt="homeimage" height="300px" width="500px" className="aboutpic"/>
                        </div>
                  </div>
               </section>
               <Analaytics/>
              </main>
    
       </>
    )
}
   export default About;