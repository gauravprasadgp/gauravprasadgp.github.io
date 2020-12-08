import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            About Me
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
      <div><img src="https://media1.tenor.com/images/3ca4190df184f2329bb9f0bd06ea0cc2/tenor.gif?itemid=10604183"/></div>
<h1>I'm Gaurav</h1>
<h3>Full Stack Developer</h3>

- 🔭 I’m currently working on <b>Grapido</b> <a href="http://grapido.in" target="_blank">Link</a>
<br></br>
- 💬 Ask me about <b>Angular, Ionic, Node.js</b><br></br>
- Stacks / Framework / Platforms I have worked on 👇: <br></br><br></br>
<p ><img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/angular.svg" alt="angular" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/ionic.svg" alt="ionic" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/aws.svg" alt="amazonwebservices" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bootstrap.svg" alt="bootstrap" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/github-icon.svg" alt="c" width="40" height="40"/> <img src="https://raw.githubusercontent.com/katopz/stack-logo/c7d638af976e535532a844cdb3e0563c1deadcba/css3.svg" alt="css3" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/html-5.svg" alt="html5" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/javascript.svg" alt="javascript" width="40" height="40"/> <img src="https://github.com/remojansen/logo.ts/raw/master/ts.png" alt="typescript" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/mongodb.svg" alt="mongodb" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/mysql.svg" alt="mysql" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/php.svg" alt="php" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/sass.svg" alt="sass" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/nodejs.svg" alt="nodejs" width="40" height="40"/> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/python.svg" alt="python" width="40" height="40"/> <img src="https://raw.githubusercontent.com/katopz/stack-logo/c7d638af976e535532a844cdb3e0563c1deadcba/Nginx_logo.svg" alt="nginx" width="60" height="40"/></p>

      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
