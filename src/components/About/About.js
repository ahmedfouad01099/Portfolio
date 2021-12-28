import React from "react";

function About() {
  return (
    <div id="about" class="paddsection">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4 ">
            <div class="div-img-bg">
              <div class="about-img">
                <img
                  src="assets/img/teamwork.jpg"
                  class="img-responsive"
                  alt="me"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="about-descr">
              <p class="p-heading">
                I'm Skilled in React.js, node.js, express.js, mongo database,
                redux, JSON Web Token (JWT), Socket.io, rest APIs, Graphql, and
                Next.js. Strong professional with a junior focused in Computer
                and Information Sciences and Support Services from Mansoura
                University School of computer & information science.{" "}
              </p>
              {/* <p class="separator">
                To an English person, it will seem like simplified English, as a
                skeptical Cambridge friend of mine told me what Occidental is.
                The European languages are members of the same family.English
                person.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
