import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const typedScript = document.createElement("script");
    typedScript.src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12";
    typedScript.async = true;
    typedScript.onload = () => {
      new Typed(".text", {
        strings: ["Civil Engineer"],
        typeSpeed: 10,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    };

    document.body.appendChild(typedScript);

    document
      .getElementById("resume-button")
      .addEventListener("click", function () {
        const imageUrl = this.getAttribute("data-image");
        const imageWindow = window.open("", "_blank", "width=600,height=600");
        imageWindow.document.write(
          `<img src="${imageUrl}" alt="Resume" style="width:100%; height:100%;">`
        );
      });

    // Cleanup script
    return () => {
      typedScript.remove();
      document
        .getElementById("resume-button")
        .removeEventListener("click", function () {});
    };
  }, []);

  return (
    <>
      <header>
        <div className="container-2">
          <div className="A">
            <img src="logo.png" width="80" height="70" alt="Logo" />
            <br />
            <div className="container-text">
              <p>
                <b>Swarup Shailesh Mudholkar</b>
              </p>
            </div>
            <p className="text"></p>
          </div>
          <img src="DS.png" className="rounded-circle rounded-circle-1" alt="Profile" />
        </div>
      </header>
      <img src="bottom.png" className="responsive" alt="Bottom decoration" />

      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#software">Softwares</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>  
          <li>
            <a href="#contact">Contact</a>
          </li>         
        </ul>
      </nav>

      <main>
        <section id="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I am currently a 4th-year student in the Civil Engineering
              department at Yeshwantrao Chavan College of Engineering (YCCE),
              Nagpur. Before this, I completed a diploma in Civil Engineering
              from G.H. Raisoni Polytechnic, Nagpur, where I gained practical
              knowledge and skills in the field. I have also completed my
              schooling from Montfort School, CBSE, Nagpur, which provided me
              with a strong academic foundation. My education has equipped me
              with a solid understanding of civil engineering principles, and I
              am eager to apply my knowledge in real-world projects and
              contribute to the field.
            </p>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src="Render 4.jpg" className="card-img-top" alt="Project 1" />
                  <div className="card-body">
                    <h5 className="card-title">Revit+Luminious 3D model</h5>                      
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src="1.jpeg" className="card-img-top" height="200" alt="Project 2" />
                  <div className="card-body">
                    <h5 className="card-title">Site Drawing</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src="2.jpeg" className="card-img-top"  height="200" alt="Project 3" />
                  <div className="card-body">
                    <h5 className="card-title">Site Work</h5>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


       <section id="skills">
          <div className="container">
            <h2>Skills</h2>
            <ul>
              <li>Attention to Detail</li>
              <li>Site Supervision</li>
              <li>Project Management</li>
              <li>Structural Analysis</li>
              <li>Knowledge of Construction Material and Methods</li>
            </ul>
          </div>
        </section>

        <section id="software">
          <div className="container">
            <h2>Softwares Known</h2>
            <ul>
              <li>Autocad</li>
              <li>Revit Architecture</li>
              <li>Lumion 3D</li>
              <li>Power BI</li>
              <li>Excel (Moderate level)</li>
              <li>SketchUp</li>
              <li>Stadd Pro</li>
            </ul>
          </div>
        </section>

        <section id="resume">
          <div className="container">
            <h2>Resume</h2>
            <button
              type="button"
              className="btn btn-success"
              id="resume-button"
              data-image="resume.png"
            >
              Resume
            </button>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Contact</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="row no-gutters">
                    
                      <center>
                      <img
                        src="phone.jpg"
                        className="rounded-circle"
                        alt="Phone"
                        width="50"
                        height="50"
                      />
                    
                    
                      <img
                        src="wh.jpg"
                        className="rounded-circle"
                        alt="WhatsApp"
                        width="60"
                        height="60"
                      />
                   
                      <img
                        src="email.jpg"
                        className="rounded-circle"
                        alt="Email"
                        width="50"
                        height="50"
                      /></center>
                    
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <u>
                        <b>Contact</b>
                      </u>
                    </h5>
                    <p className="card-text">
                      Phone: +91 7666260873 <br />
                      WhatsApp: +91 7666260873 <br />
                      Email: mudholkarswarup@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <center>
                    <img
                      src="li.jpg"
                      className="rounded-circle"
                      alt="LinkedIn"
                      width="60"
                      height="60"
                    />
                  </center>
                  <div className="card-body">
                    <h5 className="card-title">
                      <u>
                        <b>LinkedIn</b>
                      </u>
                    </h5>
                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHTVGLiMgRHHQAAAZFAa06gU4D4dWHRPBIDrGQrC3DC6r-kgDRAVudRtJzE3lN_E8pamUtjGI6g02hl0Qf1P2sZEgQk6M6xdltNiBJ5NUcP1FkPTDRIJsHm-ONprlIs4WC4xFE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fswarup-mudholkar-bbb836298%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" className="btn btn-primary">
                      Swarup Mudholkar
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="row no-gutters">
                    
                      <center>
                      <img
                        src="i.jpg"
                        className="rounded-circle"
                        alt="Phone"
                        width="50"
                        height="50"
                      />
                    
                    
                      <img
                        src="tw.png"
                        className="rounded-circle"
                        alt="WhatsApp"
                        width="50"
                        height="50"
                      />
                   
                      </center>
                    
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <u>
                        <b>Social</b>
                      </u>
                    </h5>
                    <p className="card-text">
                      Instagram:_swarup_mudholkar_ <br />
                      Twitter: @_Swarup_M <br />
                      
                    </p>
                  </div>
                </div>
              </div>            
          </div>
          </div>
        </section> 
     
    
          </main>
      <div className="container-1">
        <img src="4.jpg" alt="Footer Image" />
        <div className="footer-text">
          &copy; 2024 Swarup Mudholkar. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default App;

