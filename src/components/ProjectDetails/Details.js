import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function Details() {
  const { id } = useParams();
  console.log("8", id);

  const project = useSelector((state) => state.project.project);
  const projects = useSelector((state) => state.project.projects);

  console.log("14", projects);
  const [currentProject, setCurrentProject] = useState();
  console.log("16", currentProject);
  useEffect(() => {
    setCurrentProject(projects[id - 1]);
  }, []);

  return Object.keys(project).length > 0 ? (
    <main id="main">
      <section class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>{project.name} Details</h2>
          </div>
        </div>
      </section>

      <section id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-3">
              <div class="portfolio-details-slider swiper">
                <Carousel autoFocus={true} infiniteLoop={true} autoPlay={true}>
                  {currentProject.imgs.map((img) => {
                    return (
                      <div>
                        <img src={img} />
                        {/* <p className="legend">Legend 1</p> */}
                      </div>
                    );
                  })}
                </Carousel>

                <div class="swiper-pagination"></div>
              </div>
            </div>

            <div class="col-lg-9">
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {project.Category}
                  </li>
                  <li>
                    <strong>Client</strong>: {project.Client}
                  </li>
                  <li>
                    <strong>Project date: </strong>
                    {project.Project_date}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/12JSw02vZNrs3hYYQ5NxCsG3mMz6b3Yad/view?usp=sharing"
                    >
                      {project.Project_URL}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>

              {project.name === "Tonymoly App" && (
                <div class="portfolio-description">
                  <h2>
                    You can resize the window to see the application clearly.
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  ) : currentProject ? (
    <main id="main">
      <section class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>{currentProject.name} Details</h2>
          </div>
        </div>
      </section>

      <section id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-3">
              <div class="portfolio-details-slider swiper">
                <Carousel autoFocus={true} infiniteLoop={true} autoPlay={true}>
                  {currentProject.imgs.map((img) => {
                    return (
                      <div>
                        <img src={img} />
                        {/* <p className="legend">Legend 1</p> */}
                      </div>
                    );
                  })}
                </Carousel>

                <div class="swiper-pagination"></div>
              </div>
            </div>

            <div class="col-lg-9">
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {currentProject.Category}
                  </li>
                  <li>
                    <strong>Client</strong>: {currentProject.Client}
                  </li>
                  <li>
                    <strong>Project date: </strong>
                    {currentProject.Project_date}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/12JSw02vZNrs3hYYQ5NxCsG3mMz6b3Yad/view?usp=sharing"
                    >
                      {currentProject.Project_URL}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>

              {currentProject.name === "Tonymoly App" && (
                <div class="portfolio-description">
                  <h2>resize the window to see the application clearly.</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  ) : (
    <div>Loading...</div>
  );
}

export default Details;
