import React from "react";
import Press from "../../public/press.png";
import Henk from "../../public/henk.png";
import Sidetrack from "../../public/sidetrack.png";

function Portfolio() {
  return (
    <div className="Portfolio">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>
        <div class="carousel-inner">
          <div class="item active">
            <a
              href="http://www.pressconstructions.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              data-toggle="tooltip"
              title="Click to open Website in New Window!"
            >
              {" "}
              <div id="caption">
                <h4>Website for a Builder</h4>
                <br />
                HTML | CSS | Javascript | Facebook API ( messenger chatbot) |
                Python
              </div>
              <img src={Press} alt="website" id="builder-link" />
            </a>
          </div>
          <div class="item">
            <a
              href="https://henkdeweerdphotography.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-toggle="tooltip"
              title="Click to open Website in New Window!"
            >
              <div id="caption">
                <h4>E-commerce Style Website for a Photographer</h4>
                <br />
                HTML | CSS | Javascript | Django | Python | Stripe Payment |
                User registration and Security
              </div>
              <img src={Henk} alt="website" id="photographer-link" />
            </a>
          </div>
          <div class="item">
            <a
              href="https://blueag8.github.io/Sidetrack/index.html"
              target="_blank"
              rel="noopener noreferrer"
              data-toggle="tooltip"
              title="Click to View Website in New Window!"
            >
              <div id="caption">
                <h4>Basic HTML Website for a Band/Duet</h4>
                <br />
                HTML | CSS | Javascript
              </div>
              <img src={Sidetrack} alt="website" id="img-link" />
            </a>
          </div>
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="github">
        <a
          href="https://github.com/blueag8"
          data-toggle="tooltip"
          title="Click to go to my github repositories!"
        >
          <i class="fa fa-github-square" />
        </a>
        <br />
        <div>Please see Github for more of my projects</div>
      </div>
    </div>
  );
}

export default Portfolio;
