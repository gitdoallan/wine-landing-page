import styled from 'styled-components';

export const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const AboutVideoContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  height: calc(100vh);
  border: 1px solid red;
  filter: brightness(0.2);
  position: absolute;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
