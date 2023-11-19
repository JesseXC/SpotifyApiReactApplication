import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Testcomponent.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export const Testcomponent = () => {
  return (
    <div class="page shadow">
    <div class="main-container shadow">
      <MDBContainer>
        <br />
        <br />
        <MDBRow>
          <MDBCol sm={12} md={4}>
            <div class="container">
              <img
                src="./72205279743__68F0A921-CCF8-4466-89A5-D1A885C37BD5.jpeg"
                alt="John"
                style={{ width: "65%", borderRadius: "100%" }}
              />
              <br />
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </div>
          </MDBCol>

          <MDBCol>
            <div class="container">
              <h2>Pericomsheentz</h2>
              <p className="font-bold">Max Laporte</p>
              <p>Tweak the Album</p>
            </div>

            <hr />

            <MDBContainer>
              <MDBRow>
                <MDBCol sm={2} lg={2} md={2}>
                  <h6 className="m-4">Bio </h6>
                </MDBCol>
                <MDBCol>
                  <p class="bio">
                  Rapper Max Laporte brings feel-good positivity, druggy weirdness, and wild ATLian flair to a style he self-designated "bubblegum trap" in his early days, while becoming a figurehead of the movement sometimes known as "mumble rap." Within two years of scoring his first platinum single in 2016, he had a pair of Top Ten albums with 2017's Teenage Emotions and 2018's Lil Boat 2, and a Grammy nomination for 's "Broccoli," on which he was featured. Between the release dates of those proper albums for the  label, Yachty's approach shifted from a reliance upon willfully off-key singing and lackadaisical rhyming to that of a comparatively traditional MC, albeit with his irreverent sense of humor still gamely displayed. His style continued to evolve with his following recordings, including 2020's Lil Boat 3 and the psychedelic rock 2023's Let's Start Here.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <br />
            <br />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </div>
  )
}

export default Testcomponent