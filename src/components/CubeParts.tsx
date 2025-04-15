import styled from "@emotion/styled";

export const Cube = styled.div`
  position: relative;
  width: 258px;
  height: 258px;
  transform-style: preserve-3d;
`;

export const Face = styled.div`
  position: absolute;
  width: 258px;
  height: 258px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.5);
  background-color: rgba(100, 22, 50, 1);
  color: white;
  font-size: 126px;
  font-weight: bold;
`;

export const FaceTop = styled(Face)`
  transform: translateY(-130px) rotateX(90deg);
`;

export const FaceBottom = styled(Face)`
  transform: translateY(130px) rotateX(-90deg);
`;

export const FaceLeft = styled(Face)`
  transform: translateX(-130px) rotateY(-90deg);
`;

export const FaceRight = styled(Face)`
  transform: translateX(130px) rotateY(90deg);
`;

export const FaceFront = styled(Face)`
  transform: translateZ(130px);
`;

export const FaceBack = styled(Face)`
  transform: translateZ(-130px) rotateY(180deg);
`;
