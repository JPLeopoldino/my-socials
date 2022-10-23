import React from "react";
import * as SC from "./styles";

const Home: React.FC = () => {
  return (
    <SC.Container>
      <SC.Title>Hello World.</SC.Title>
      <SC.Box>
        <SC.Circle />
        <SC.Heading>Lorem ipsum</SC.Heading>
        <SC.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </SC.Text>
      </SC.Box>
    </SC.Container>
  );
};

export default Home;
