import React from "react";
import * as SC from "./styles";

const Home: React.FC = () => {
  const title = "Hello World."

  const sentenceAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08
      }
    }
  }

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <SC.Container
      initial={{ opacity: "0%", scale: "80%" }}
      animate={{ opacity: "100%", scale: "100%" }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <SC.Title
        variants={sentenceAnimation}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, index) => {
          return (
            <SC.Character key={index} variants={letterAnimation}>
              {char}
            </SC.Character>
          );
        })}
      </SC.Title>
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
