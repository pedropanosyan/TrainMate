import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-90 m img-fluid"
                    src="Imagenes/img1.jpg"
                    alt="First slide"
                    style={{margin:'auto', maxHeight:'100vh', borderRadius:'20px'}}
                />
                <Carousel.Caption>
                    <h2>Check your <span style={{color:'#8db5ff'}}>progress</span></h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-90 img-fluid"
                    src="Imagenes/img3.jpeg"
                    alt="Second slide"
                    style={{margin:'auto', borderRadius:'20px', maxHeight:'100vh'}}
                />
                <Carousel.Caption>
                    <h2>View your <span style={{color:'#8db5ff'}}>routines</span></h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-90 img-fluid"
                    src="Imagenes/img3.jpg"
                    alt="Third slide"
                    style={{margin:'auto', maxHeight:'100vh', borderRadius:'20px'}}
                />
                <Carousel.Caption>
                    <h2>Ask the forum & join the <span style={{color:'#8db5ff'}}>community</span></h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;