import React, { Component } from 'react';
import './Home.css';

import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <div>   
            <Carousel id="carousel-college">

                {/* <Carousel.Item>
                    
                    <img src="/assets/images/1_halls.jpg" alt="school halls"/>
                    
                    <Carousel.Caption className="caption">
                        <h2>Welcome to</h2>
                        <h1>YOUniversity</h1>
                        <h2><i>Your Academic Adventure Starts Here</i></h2>
                    </Carousel.Caption>

                </Carousel.Item> */}


                <Carousel.Item>
                    
                    <img src="/assets/images/2_graduates.jpg" alt="graduates"/>
                    
                    <Carousel.Caption className="caption">
                        <div className="intro">
                            <h2 className = "welcome">Welcome to</h2>
                            <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                            <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                        </div>
                    </Carousel.Caption>
                
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src="/assets/images/3_path.jpg" alt="school view"/>
                    <Carousel.Caption className="caption">
                        <div className="intro">
                            <h2 className = "welcome">Welcome to</h2>
                            <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                            <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/assets/images/5_school.jpg" alt="school"/>
                    <Carousel.Caption className="caption">
                        <div className="intro">
                            <h2 className = "welcome">Welcome to</h2>
                            <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                            <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        <div id="marketing" className="container text-center">
            <Grid>
                <Row className="show-grid">
                    <Col lg={4}>
                        <img className="img-circle" src="/assets/images/apple.png" alt="Generic placeholder" width="140" height="140" />
                        <h2>Financial Aid</h2>
                        <p>The new 2018-2019 FAFSA (including the ready-to-use IRS Data Retrieval Tool) is available! </p>
                        <p>FYI: Some states and schools have limited funds, so don’t delay!</p>
                        <a href="https://fafsa.ed.gov/" target="_blank" className="btn btn-primary" > More Information &raquo;</a>
                    </Col>
                    <Col lg={4}>
                        <img className="img-circle" src="/assets/images/maps.jpg" alt="Generic placeholder" width="140" height="140" />
                        <h2>Top Campuses</h2>
                        <p>Deciding on where and how to further a college education has become increasingly more complicated. Options range from attending a traditional four-year college to pursuing a fully online education.</p>
                        <a href="https://www.bestcollegereviews.org/features/most-beautiful-college-campuses/" target="_blank" className="btn btn-primary" > More Information &raquo;</a>
                    </Col>
                    <Col lg={4}>
                        <img className="img-circle" src="/assets/images/studying.png" alt="Generic placeholder" width="140" height="140" />
                        <h2>Early Admissions</h2>
                        <p>10 pieces of advice from experts about what to do, what not to do, and what to expect regarding Early Admissions.</p>
                        <a href="https://www.usnews.com/education/best-colleges/slideshows/10-things-to-know-about-college-early-admissions-programs " target="_blank" className="btn btn-primary" > More Information &raquo;</a>
                   
                    </Col>
                </Row>
            </Grid>

        </div> 

    </div>
     
    );
  }
}

export default Home;
