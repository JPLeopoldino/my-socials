import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FAFAFA;
`

export const Title = styled(motion.h1)`
  font-size: 4rem;
  color: #0F0F0F;
  font-weight: bold;
  text-align: center;
`

export const Character = styled(motion.span)``

export const Heading = styled.h3`
  font-size: 1.5rem;
  color: #0F0F0F;
  font-weight: bold;
  text-align: center;
`

export const Text = styled.p`
  font-size: 1rem;
  color: #0F0F0F;
  text-align: center;
`

export const Circle = styled(motion.div)`
  position: absolute;
  top: -4rem;
  width: 7rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #CACACA;
  border: 0.4rem solid #FAFAFA;
  border-radius: 100%;
  z-index: 2;
  cursor: pointer;
`;

export const Box = styled.div`
  position: relative;
  margin-top: 1rem;
  padding: 2rem 1.5rem 1rem 1.5rem;
  width: 16rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #CACACA;
  border: 1px solid #AAAAAA;
  border-radius: 20px;
  box-shadow: -2px 5px 10px 0 rgba(0, 0, 0, 0.3);
  z-index: 1;
`
