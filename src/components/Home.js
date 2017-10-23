import React, { Component } from 'react';
import './Home.css';

import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <div id="main_carousel" class="carousel-slide row" data-ride="carousel">   
            <Carousel id="carousel-college">

            <Carousel.Item className="carousel-image">
                <img src="https://odysseyonline-img.rbl.ms/simage/https%3A%2F%2Faz616578.vo.msecnd.net%2Ffiles%2F2017%2F02%2F04%2F636218478989693811-1085073741_university-washington-quad-campus-cherry-trees.jpg/2000%2C2000/L0V%2FrbAygwrKpzVt/img.jpg" alt="college campus with pretty trees"/>
                <Carousel.Caption className="caption">
                    <div className="intro">
                        <h2 className = "welcome">1</h2>
                        <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                        <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
                <img src="https://bsbproduction.s3.amazonaws.com/portals/12871/images/cap%20images/college_walk.jpg" alt="graduates"/>
                <Carousel.Caption className="caption">
                    <div className="intro">
                        <h2 className = "welcome">2</h2>
                        <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                        <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
                <img src="http://dumontjanks.com/images/projects/carousel/bates/a.jpg" alt="college campus"/>
                <Carousel.Caption className="caption">
                    <div className="intro">
                        <h2 className = "welcome">3</h2>
                        <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                        <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
                <img src="https://s-i.huffpost.com/gen/1435637/images/o-COLLEGE-TOUR-facebook.jpg" alt="college campus tour"/>
                <Carousel.Caption className="caption">
                    <div className="intro">
                        <h2 className = "welcome">4</h2>
                        <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                        <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
                <img src="http://www.cal.msu.edu/application/files/4414/6300/0491/CAL_website_generic12.jpg" alt="college campus with pretty trees"/>
                <Carousel.Caption className="caption">
                    <div className="intro">
                        <h2 className = "welcome">5</h2>
                        <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                        <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
                <img src="https://s-i.huffpost.com/gen/1787038/images/o-COLLEGE-STUDENT-CAMPUS-facebook.jpg" alt="students on campus"/>
                <Carousel.Caption className="caption">
                    <div className="intro">
                        <h2 className = "welcome">6</h2>
                        <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                        <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
                <img src="https://s-i.huffpost.com/gen/3277092/images/o-GRADUATION-CEREMONY-facebook.jpg" alt="graduates celebrating"/>
                <Carousel.Caption className="caption">
                    <div className="intro">
                        <h2 className = "welcome">7</h2>
                        <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                        <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
                <img src="https://s-i.huffpost.com/gen/1363663/images/o-COLLEGE-facebook.jpg" alt="happy students"/>
                <Carousel.Caption className="caption">
                    <div className="intro">
                        <h2 className = "welcome">8</h2>
                        <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                        <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
                <img src="https://az616578.vo.msecnd.net/files/2016/10/03/636110659932685174782629361_CollegePlan.jpg" alt="students in class"/>
                <Carousel.Caption className="caption">
                    <div className="intro">
                        <h2 className = "welcome">9</h2>
                        <h1 className="bigLogoText">YOU<div className="logoText">niversity</div></h1>
                        <h2 className="subtitle"><i>Your Academic Adventure Starts Here</i></h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
                
                
            </Carousel>



        <div id="marketing" className="container text-center">
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={4} lg={4} md={4}>
                        <img className="img-circle" src="/assets/images/apple.png" alt="Generic placeholder" width="140" height="140" />
                        <h2>Financial Aid</h2>
                        <p>The new 2018-2019 FAFSA (including the ready-to-use IRS Data Retrieval Tool) is available! </p>
                        <p>FYI: Some states and schools have limited funds, so don’t delay!</p>
                        <a href="https://fafsa.ed.gov/" target="_blank" className="btn btn-primary" > More Information &raquo;</a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} md={4}>
                        <img className="img-circle" src="/assets/images/maps.jpg" alt="Generic placeholder" width="140" height="140" />
                        <h2>Top Campuses</h2>
                        <p>Deciding on where and how to further a college education has become increasingly more complicated. Options range from attending a traditional four-year college to pursuing a fully online education.</p>
                        <a href="https://www.bestcollegereviews.org/features/most-beautiful-college-campuses/" target="_blank" className="btn btn-primary" > More Information &raquo;</a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} md={4}>
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
