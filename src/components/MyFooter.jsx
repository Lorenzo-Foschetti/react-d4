import { Button, Col, Row } from "react-bootstrap"

const MyFooter =() => {
return(
    <footer className="bg-dark" data-bs-theme="dark">
   <Row className=" justify-content-center mt-5"> 
     <Col className="col-6"> 
        <div className="row">
          <div className="col mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"
        >
          <div className="Col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Audio and Subtitles</a>
                </p>
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Media Center</a>
                </p>
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Privacy</a>
                </p>
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Contact us</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Audio Description</a>
                </p>
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Investor Relations</a>
                </p>
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Legal Notices</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Help Center</a>
                </p>
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Jobs</a>
                </p>
                <p>
                  <a href="#1" className="footer link text-body-tertiary ancorstyle">Cookie Preferences</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#1" className=" footer-link text-body-tertiary ancorstyle"  >Gift Cards</a>
                </p>
                <p>
                  <a href="#1" className=" text-body-tertiary ancorstyle" >Terms of Use</a>
                </p>
                <p>
                  <a href="#1" className=" text-body-tertiary ancorstyle">Corporate Information</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2">
            <Button
              type="button dark"
              className="btn btn-sm btn-dark footer-button border-light-subtle rounded-0 mt-3 text-body-tertiary"
            >
              Service Code
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2 mt-2 copyright text-body-tertiary ancorstyle">
            © 1997-2023 Netflix, Inc.
          </div>
        </div>
        </Col>
      </Row>
  </footer>
)
}
export default MyFooter