import React from "react";

function Footer() {
  return (
    <div id="footer" class="text-center">
      <div class="container">
        <div class="socials-media text-center">
          <ul class="list-unstyled">
            <li>
              <a href="#">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <p>&copy; Copyrights Folio. All rights reserved.</p>

        <div class="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
