import { Col, Container, Row, Button } from "react-bootstrap";
import { ArrowRight } from "akar-icons";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center text-center align-item-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAK PAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
              <Button variant="success" href="#trending">
                Lihat Semua List <ArrowRight strokeWidth={2} size={20} />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
