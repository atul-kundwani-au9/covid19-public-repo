import logo from "../images/mask.png";
import ReactPlayer from "react-player";
import { Container, Row, Col, Collapse, CardBody } from "reactstrap";
import { Card, Button } from "react-bootstrap";

import React, { Component } from "react";

export default class Covid extends Component {
  state = {
    isOpen: false,
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false,
    isOpen7: false,
    isOpen8: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  toggle1 = () => {
    this.setState({ isOpen1: !this.state.isOpen1 });
  };
  toggle2 = () => {
    this.setState({ isOpen2: !this.state.isOpen2 });
  };
  toggle3 = () => {
    this.setState({ isOpen3: !this.state.isOpen3 });
  };
  toggle4 = () => {
    this.setState({ isOpen4: !this.state.isOpen4 });
  };
  toggle5 = () => {
    this.setState({ isOpen5: !this.state.isOpen5 });
  };
  toggle6 = () => {
    this.setState({ isOpen6: !this.state.isOpen6 });
  };
  toggle7 = () => {
    this.setState({ isOpen7: !this.state.isOpen7 });
  };
  toggle8 = () => {
    this.setState({ isOpen8: !this.state.isOpen8 });
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h3 className="text-left" >What is COVID-19 ?</h3>
              <ReactPlayer
                width="100%"
                height="400px"
                controls
                url="https://www.youtube.com/watch?v=i0ZabxXmH4Y"
              />
            </Col>
          </Row>

          <div className="card bg-secondary text-white ">
              <img src={logo} alt="logo" width="100%" height="200px" />
          </div>
          <div className="text-left">
            <h1 style={{ fontSize: "25px", fontWeight:"bold"}}>
              How Covid-19 Spreads
            </h1>
            <p style={{fontSize: "18px"}}>
              COVID-19 is thought to spread mainly through close contact from
              person-to-person. Some people without symptoms may be able to
              spread the virus. We are still learning about how the virus
              spreads and the severity of illness it causes.
            </p>
            <h1 style={{ fontSize: "18px", margintopp: "2%" }}>
              Person-to-person spread
            </h1>
            <p>
              <strong>
                The virus is thought to spread mainly from person-to-person.
              </strong>
            </p>
            <ul>
              <li>
                Between people who are in close contact with one another (within
                about 6 feet).
              </li>
              <li>
                Through respiratory droplets produced when an infected person
                coughs, sneezes, or talks.
              </li>
              <li>
                These droplets can land in the mouths or noses of people who are
                nearby or possibly be inhaled into the lungs.
              </li>
              <li>
                COVID-19 may be spread by people who are not showing symptoms.
              </li>
            </ul>
            <h1 style={{ fontSize: "18px", margintopp: "2%" }}>
              The virus spreads easily between people
            </h1>
            <p>
              How easily a virus spreads from person-to-person can vary. Some
              viruses are highly contagious, like measles, while other viruses
              do not spread as easily. Another factor is whether the spread is
              sustained, which means it goes from person-to-person without
              stopping. The virus that causes COVID-19 is spreading very easily
              and sustainably between people. Information from the ongoing
              COVID-19 pandemic suggests that this virus is spreading more
              efficiently than influenza, but not as efficiently as measles,
              which is highly contagious. In general, the more closely a person
              interacts with others and the longer that interaction, the higher
              the risk of COVID-19 spread.
            </p>
            <h1 style={{ fontSize: "18px", margintopp: "2%" }}>
              The virus may be spread in other ways
            </h1>
            <p>
              It may be possible that a person can get COVID-19 by touching a
              surface or object that has the virus on it and then touching their
              own mouth, nose, or possibly their eyes. This is not thought to be
              the main way the virus spreads, but we are still learning more
              about how this virus spreads.
            </p>
          </div>
          <h1 style={{ fontSize: "18px", margintopp: "2%" }}>
            Frequently Asked Questions
          </h1>
          <Button
            color="primary"
            onClick={this.toggle}
            style={{
              marginBottom: "1rem",
              width: "100%",
              textAlign: "left",
            }}
          >
            {" "}
            What is a novel coronavirus?
          </Button>
          <Collapse isOpen={this.state.isOpen}>
            <Card>
              <CardBody>
                A novel coronavirus is a new coronavirus that has not been
                previously identified. The virus causing coronavirus disease
                2019 (COVID-19), is not the same as the coronaviruses that
                commonly circulate among humans and cause mild illness, like the
                common cold.
              </CardBody>
            </Card>
          </Collapse>
          <div>
            <Button
              color="primary"
              onClick={this.toggle1}
              style={{ marginBottom: "1rem", width: "100%", textAlign: "left" }}
            >
              {" "}
              Why is the disease being called coronavirus disease 2019,COVID-19?
            </Button>
            <Collapse isOpen={this.state.isOpen1}>
              <Card>
                <CardBody>
                  On February 11, 2020 the World Health Organization announced
                  an official name for the disease that is causing the 2019
                  novel coronavirus outbreak, first identified in Wuhan China.
                  The new name of this disease is coronavirus disease 2019,
                  abbreviated as COVID-19. In COVID-19, ‘CO’ stands for
                  ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly,
                  this disease was referred to as “2019 novel coronavirus” or
                  “2019-nCoV”.
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <Button
            color="primary"
            onClick={this.toggle2}
            style={{ marginBottom: "1rem", width: "100%", textAlign: "left" }}
          >
            {" "}
            How does the virus spread?
          </Button>
          <Collapse isOpen={this.state.isOpen2}>
            <Card>
              <CardBody>
                The virus that causes COVID-19 is thought to spread mainly from
                person to person, mainly through respiratory droplets produced
                when an infected person coughs, sneezes, or talks. These
                droplets can land in the mouths or noses of people who are
                nearby or possibly be inhaled into the lungs. Spread is more
                likely when people are in close contact with one another (within
                about 6 feet). COVID-19 seems to be spreading easily and
                sustainably in the community (“community spread”) in many
                affected geographic areas. Community spread means people have
                been infected with the virus in an area, including some who are
                not sure how or where they became infected.
              </CardBody>
            </Card>
          </Collapse>
          <Button
            color="primary"
            onClick={this.toggle3}
            style={{ marginBottom: "1rem", width: "100%", textAlign: "left" }}
          >
            {" "}
            Can i get COVID-19 from food (incluiding restaurant take-out,produce
            refrigerated or packed food) or drinking water ?
          </Button>
          <Collapse isOpen={this.state.isOpen3}>
            <Card>
              <CardBody>
                <p>
                  <strong>
                    Currently there is no evidence that people can get COVID-19
                    by eating or handling food.
                  </strong>
                </p>
                <p>
                  It may be possible that people can get COVID-19 by touching a
                  surface or object, such as a food package or dining ware that
                  has the virus on it and then touching their own mouth, nose,
                  or possibly their eyes. However, this is not thought to be the
                  main way the virus spreads. There is also no current evidence
                  that people can get COVID-19 by drinking water. The COVID-19
                  virus has not been detected in drinking water. Conventional
                  water treatment methods that use filtration and disinfection,
                  such as those in most municipal drinking water systems, should
                  remove or kill the virus that causes COVID-19.​
                </p>
              </CardBody>
            </Card>
          </Collapse>
          <Button
            color="primary"
            onClick={this.toggle4}
            style={{ marginBottom: "1rem", width: "100%", textAlign: "left" }}
          >
            {" "}
            Will warm weather stop the outbreak of covid-19?
          </Button>
          <Collapse isOpen={this.state.isOpen4}>
            <Card>
              <CardBody>
                It is not yet known whether weather and temperature affect the
                spread of COVID-19. Some other viruses, like those that cause
                the common cold and flu, spread more during cold weather months
                but that does not mean it is impossible to become sick with
                these viruses during other months. There is much more to learn
                about the transmissibility, severity, and other features
                associated with COVID-19 and investigations are ongoing.
              </CardBody>
            </Card>
          </Collapse>
          <div>
            <Button
              color="primary"
              onClick={this.toggle5}
              style={{ marginBottom: "1rem", width: "100%", textAlign: "left" }}
            >
              {" "}
              What is community spread?
            </Button>
          </div>
          <Collapse isOpen={this.state.isOpen5}>
            <Card>
              <CardBody>
                Community spread means people have been infected with the virus
                in an area, including some who are not sure how or where they
                became infected. Each health department determines community
                spread differently based on local conditions. For information on
                community spread in your area, please visit your health
                department’s website.
              </CardBody>
            </Card>
          </Collapse>
          <Button
            color="primary"
            onClick={this.toggle6}
            style={{ marginBottom: "1rem", width: "100%", textAlign: "left" }}
          >
            {" "}
            Can mosquitoes or ticks spread the virus that causes COVID-19 ?
          </Button>
          <Collapse isOpen={this.state.isOpen6}>
            <Card>
              <CardBody>
                At this time, CDC has no data to suggest that this new
                coronavirus or other similar coronaviruses are spread by
                mosquitoes or ticks. The main way that COVID-19 spreads is from
                person to person.
              </CardBody>
            </Card>
          </Collapse>
          <Button
            color="primary"
            onClick={this.toggle7}
            style={{ marginBottom: "1rem", width: "100%", textAlign: "left" }}
          >
            {" "}
            What should i do if i get sick or someone in my house get sick ?
          </Button>
          <Collapse isOpen={this.state.isOpen7}>
            <Card>
              <CardBody>
                Most people who get COVID-19 will be able to recover at home.
                CDC has directions for people who are recovering at home and
                their caregivers, including:
                <ul>
                  <li>
                    Stay home when you are sick, except to get medical care.
                  </li>
                  <li>
                    Use a separate room and bathroom for sick household members
                    (if possible).
                  </li>
                  <li>
                    Wash your hands often with soap and water for at least 20
                    seconds, especially after blowing your nose, coughing, or
                    sneezing; going to the bathroom; and before eating or
                    preparing food.
                  </li>
                  <li>
                    If soap and water are not readily available, use an
                    alcohol-based hand sanitizer with at least 60% alcohol.
                    Always wash hands with soap and water if hands are visibly
                    dirty.
                  </li>
                  <li>
                    Provide your sick household member with clean disposable
                    facemasks to wear at home, if available, to help prevent
                    spreading COVID-19 to others.
                  </li>
                  <li>
                    Clean the sick room and bathroom, as needed, to avoid
                    unnecessary contact with the sick person.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Collapse>
          <Button
            color="primary"
            onClick={this.toggle8}
            style={{ marginBottom: "1rem", width: "100%", textAlign: "left" }}
          >
            {" "}
            What should i do if i have had close contact with someone who has
            COVID-19 ?
          </Button>
          <Collapse isOpen={this.state.isOpen8}>
            <Card>
              <CardBody>
                <ul>
                  <li>
                    Be alert for symptoms. Watch for fever, cough, shortness of
                    breath, or other symptoms of COVID-19.
                  </li>
                  <li>
                    Take your temperature and follow CDC guidance if you have
                    symptoms.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Collapse>
        </Container>
      </>
    );
  }
}
