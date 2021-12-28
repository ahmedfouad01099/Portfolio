import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onSelectingProduct } from "../../Store/Project";
import PortfolioImg from "../../img/portfolio/portfolio-3.jpg";

function Portifolio() {
  const projects = useSelector((state) => state.project.projects);
  const dispatch = useDispatch();

  return (
    <div id="portfolio" class="paddsection">
      <div class="container">
        <div class="section-title text-center">
          <h2>My Portfolio</h2>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">
          {projects.map((project) => {
            return (
              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src={project.portifolioImg} class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Tonymoly App</h4>
                  <p>App</p>
                  <Link
                    to="/project/1"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="Web 3"
                    onClick={() => dispatch(onSelectingProduct(project))}
                  >
                    <i class="bx bx-plus"></i>
                  </Link>
                  <a href="/project" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portifolio;
