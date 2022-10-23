import React from "react";
import * as SC from "./styles";

const Home: React.FC = () => {
  return (
    <SC.Container
      initial={{ opacity: "0%", scale: "80%" }}
      animate={{ opacity: "100%", scale: "100%" }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <SC.Title>Hello World.</SC.Title>
      <SC.Box>
        <SC.Circle
          whileHover={{
            scale: 1.5,
            borderRadius: "30%"
          }}
          transition={{ duration: 0.3, bounce: 1, ease: "easeOut" }}
        />
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
