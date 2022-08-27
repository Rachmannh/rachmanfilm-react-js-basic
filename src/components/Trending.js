import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import lightYear from "../assets/images/trending/lightyear.jpg";
import dayShift from "../assets/images/trending/day-shift.jpg";
import grayMan from "../assets/images/trending/the-gray-man.jpg";
import northMan from "../assets/images/trending/the-north-man.jpg";
import topGun from "../assets/images/trending/top-gun.jpg";
import unchartedImg from "../assets/images/trending/uncharted.jpg";

import { DesktopDevice, LinkChain } from "akar-icons";

const trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="main-title text-white">
          <DesktopDevice strokeWidth={2} size={40} /> TRENDING MOVIES
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image
                src={lightYear}
                alt="Lightyear Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    LIGHTYEAR
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    While spending years attempting to return home, marooned
                    Space Ranger Buzz Lightyear encounters an army of ruthless
                    robots commanded by Zurg who are attempting to steal his
                    fuel source.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=BwZs3H_UN3k"
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
              <Image src={dayShift} alt="Day Shift Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    Day Shift
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    A hard-working, blue-collar dad who just wants to provide a
                    good life for his quick-witted 10-year-old daughter. His
                    mundane San Fernando Valley pool cleaning job is a front for
                    his real source of income: hunting and killing vampires.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=GN_IwBptKi4"
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
                src={grayMan}
                alt="The Gray Man Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    THE GRAY MAN
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    When the CIA's most skilled operative-whose true identity is
                    known to none-accidentally uncovers dark agency secrets, a
                    psychopathic former colleague puts a bounty on his head,
                    setting off a global manhunt by international assassins.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=BmllggGO4pM"
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
                src={northMan}
                alt="The North Man Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    THE NORTH MAN
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    From visionary director Robert Eggers comes The Northman, an
                    action-filled epic that follows a young Viking prince on his
                    quest to avenge his father's murder.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=oMSdFM12hOw"
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
                src={topGun}
                alt="Top Gun Maverick Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    TOP GUN MAVERICK
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    After more than thirty years of service as one of the Navy's
                    top aviators, Pete Mitchell is where he belongs, pushing the
                    envelope as a courageous test pilot and dodging the
                    advancement in rank that would ground him.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=giXco2jaZ_4"
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
                src={unchartedImg}
                alt="Uncharted Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="movie-title text-center">
                    UNCHARTED
                  </Card.Title>
                  <Card.Text className="movie-desc text-left">
                    Street-smart Nathan Drake is recruited by seasoned treasure
                    hunter Victor "Sully" Sullivan to recover a fortune amassed
                    by Ferdinand Magellan, and lost 500 years ago by the House
                    of Moncada.
                    <div className="seeMovie mt-3 text-center">
                      <Button
                        variant="primary"
                        href="https://www.youtube.com/watch?v=eHp3MbsCbMg"
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

export default trending;
