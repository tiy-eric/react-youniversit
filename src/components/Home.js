import React, { Component } from 'react';
import './Home.css';

import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <div>
            
            <div id="main" className="container text-center">

        <Carousel id="carousel-college">
            <Carousel.Item>
                <img src="/assets/images/1_halls.jpg" alt="school halls"/>
                <Carousel.Caption className="caption">
                    {<h2>Welcome to</h2>}
                    <h1>YOUniversity</h1>
                    {/* <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2> */}
                    <h2><i>Your Academic Adventure Starts Here</i></h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/images/2_graduates.jpg" alt="graduates"/>
                <Carousel.Caption className="caption">
                    {<h2>Welcome to</h2>}
                    <h1>YOUniversity</h1>
                    {/* <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2> */}
                    <h2><i>Your Academic Adventure Starts Here</i></h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/images/3_path.jpg" alt="school view"/>
                <Carousel.Caption className="caption">
                    {<h2>Welcome to</h2>}
                    <h1>YOUniversity</h1>
                    {/* <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2> */}
                    <h2><i>Your Academic Adventure Starts Here</i></h2>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img src="/assets/images/4_library" alt="school library"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1> Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
                <img src="/assets/images/5_school.jpg" alt="school"/>
                <Carousel.Caption className="caption">
                    {<h2>Welcome to</h2>}
                    <h1>YOUniversity</h1>
                    {/* <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2> */}
                    <h2><i>Your Academic Adventure Starts Here</i></h2>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>

        </div>
        <div id="marketing" className="container text-center">
            <Grid>
                <Row className="show-grid">
                    <Col lg={4}>
                        <img className="img-circle" src="/assets/graduation.png" alt="Generic placeholder" width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><Button bsStyle="primary" >More Information &raquo;</Button></p>
                    </Col>
                    <Col lg={4}>
                        <img className="img-circle" src="/assets/schoolbuilding.png" alt="Generic placeholder" width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><Button bsStyle="primary" >More Information &raquo;</Button></p>
                    </Col>
                    <Col lg={4}>
                        <img className="img-circle" src="/assets/thoughts.jpg" alt="Generic placeholder" width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><Button bsStyle="primary" >More Information &raquo;</Button></p>
                    </Col>
                </Row>
            </Grid>

        </div> 

    </div>
     
    );
  }
}

export default Home;
