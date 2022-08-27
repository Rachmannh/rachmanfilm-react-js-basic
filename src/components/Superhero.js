import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/ant-man.jpg";
import blackWidow from "../assets/images/superhero/black-widow.jpg";
import captainAmerica from "../assets/images/superhero/captain-america.jpg";
import captainMarvel from "../assets/images/superhero/captain-marvel.jpg";
import spidermanImg from "../assets/images/superhero/spiderman.jpg";
import thorImg from "../assets/images/superhero/thor.jpg";

import { DesktopDevice, LinkChain } from "akar-icons";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">
          <DesktopDevice strokeWidth={2} size={40} /> SUPERHERO MOVIES
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Antman Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    ANT MAN
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    Armed with a super-suit with the astonishing ability to
                    shrink in scale but increase in strength, cat burglar Scott
                    Lang must embrace his inner hero and help his mentor, Dr.
                    Hank Pym, pull off a plan that will save the world.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=pWdKf3MneyI"
                        target="_blank"
                      >
                        Watch Trailer <LinkChain strokeWidth={2} size={15} />
                      </Button>
                    </div>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={blackWidow}
                alt="Black Widow Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    BLACK WIDOW
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    Natasha Romanoff confronts the darker parts of her ledger
                    when a dangerous conspiracy with ties to her past arises.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=ybji16u608U"
                        target="_blank"
                      >
                        Watch Trailer <LinkChain strokeWidth={2} size={15} />
                      </Button>
                    </div>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={captainAmerica}
                alt="Captain America Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    CAPTAIN AMERICA
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    Steve Rogers, a rejected military soldier, transforms into
                    Captain America after taking a dose of a "Super-Soldier
                    serum". But being Captain America comes at a price as he
                    attempts to take down a warmonger and a terrorist
                    organization.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=W4DlMggBPvcI"
                        target="_blank"
                      >
                        Watch Trailer <LinkChain strokeWidth={2} size={15} />
                      </Button>
                    </div>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={captainMarvel}
                alt="Captain Marvel Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    CAPTAIN MARVEL
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    Carol Danvers becomes one of the universe's most powerful
                    heroes when Earth is caught in the middle of a galactic war
                    between two alien races.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=Z1BCujX3pw8"
                        target="_blank"
                      >
                        Watch Trailer <LinkChain strokeWidth={2} size={15} />
                      </Button>
                    </div>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImg}
                alt="Spiderman No Way Home Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    SPIDERMAN NO WAY HOME
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    With Spider-Man's identity now revealed, Peter asks Doctor
                    Strange for help. When a spell goes wrong, dangerous foes
                    from other worlds start to appear, forcing Peter to discover
                    what it truly means to be Spider-Man.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=rt-2cxAiPJk"
                        target="_blank"
                      >
                        Watch Trailer <LinkChain strokeWidth={2} size={15} />
                      </Button>
                    </div>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={thorImg} alt="Thor Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    THOR LOVE AND THUNDER
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    Thor enlists the help of Valkyrie, Korg and ex-girlfriend
                    Jane Foster to fight Gorr the God Butcher, who intends to
                    make the gods extinct.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=Go8nTmfrQd8"
                        target="_blank"
                      >
                        Watch Trailer <LinkChain strokeWidth={2} size={15} />
                      </Button>
                    </div>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
