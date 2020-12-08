import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const ProjectPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            My Projects
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>

      </Segment>
    </Container>
  );
};

export default withLayout(ProjectPage);
