import { Button, Container, Image, Row, Col } from 'react-bootstrap';

const HomePage = () => {
	return (
    <>
        <Container>
            <Container>
                <Row>
                    <Image src="src/img/sushi.png" fluid />
                    <Col>
                        <h2>Catch Your Craving</h2>
                        <Button variant="primary">Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
		<div className="HomePage d-flex flex-column justify-content-between">
			<section className="discover">
                <div className="d-flex flex-row justify-content-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h2>Find Your Food</h2>
                        <Button variant="primary">Discover</Button>
                    </div>
                    <Image className="" src="src/img/fooditems.png" />
                </div>
                <i>1</i>
			</section>
			<section className="build">
                <div className="d-flex flex-row justify-content-evenly m-5">
                    <Image src="src/img/foodbox.png" fluid />
                    <div className="d-flex flex-column justify-content-center align-items-center m-5">
                        <h2>Build Your Box</h2>
                        <Button variant="primary">Build</Button>
                    </div>
                </div>
                <i>1</i>
			</section>
			<section className="order">
                <div className="d-flex flex-row justify-content-evenly m-5">
                    <div className="d-flex flex-column justify-content-center align-items-center m-5">
                        <h2>Order Your Way</h2>
                        <Button variant="primary">Get Started</Button>
                    </div>
                    <Image src="src/img/order.png" fluid />
                </div>
                <i>1</i>
			</section>
		</div>
        </>
	);
};

export default HomePage;
