import styled from "@emotion/styled";
import {
  Cube,
  FaceBottom,
  FaceTop,
  FaceLeft,
  FaceRight,
  FaceFront,
  FaceBack,
} from "./components/CubeParts";
import { useCallback, useEffect, useState } from "react";

type CubeProps = {
  currentPosition: string;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: rgba(100, 22, 50, 1);
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  :disabled {
    background-color: rgba(100, 22, 50, 0.5);
    cursor: not-allowed;
  }
`;

const CubeContainer = styled.div`
  width: 258px;
  height: 258px;
  margin: 129px;
  perspective: 500px;
`;

const ControlledCube = styled(Cube)<CubeProps>`
  transform: ${(props) => props.currentPosition};
  transition: transform 0.2s linear;
`;

const Result = styled.div`
  font-size: 44px;
  margin-top: 24px;
  color: white;
  font-weight: bold;
`;

const INITIAL_NUMBER = 1;

const POSITIONS = [
  "rotate3d(0,1,0,0deg)",
  "rotate3d(1,0,0,-90deg)",
  "rotate3d(0,1,0,90deg)",
  "rotate3d(0,1,0,-90deg)",
  "rotate3d(1,0,0,90deg)",
  "rotate3d(0,1,0,180deg)",
];

function App() {
  const [currentPosition, setCurrentPosition] = useState(
    POSITIONS[INITIAL_NUMBER - 1]
  );
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const setPosition = useCallback((number: number) => {
    setCurrentNumber(number);
    setCurrentPosition(POSITIONS[number]);
  }, []);

  const rollDice = useCallback(() => {
    const number = Math.floor(Math.random() * 6);
    setPosition(number);
  }, [setPosition]);

  const handleRollDice = useCallback(() => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isRolling) {
      console.log("Rolling stopped");
      return;
    }

    const interval = setInterval(() => {
      rollDice();
    }, 200);

    return () => clearInterval(interval);
  }, [isRolling, rollDice]);

  return (
    <Container>
      <CubeContainer>
        <ControlledCube currentPosition={currentPosition}>
          <FaceTop>2</FaceTop>
          <FaceBottom>5</FaceBottom>
          <FaceLeft>3</FaceLeft>
          <FaceRight>4</FaceRight>
          <FaceFront>1</FaceFront>
          <FaceBack>6</FaceBack>
        </ControlledCube>
      </CubeContainer>
      <Button onClick={handleRollDice} disabled={isRolling}>
        Roll dice
      </Button>
      <Result>
        {currentNumber !== null && !isRolling && (
          <>Result: {currentNumber + 1}</>
        )}
      </Result>
    </Container>
  );
}

export default App;
