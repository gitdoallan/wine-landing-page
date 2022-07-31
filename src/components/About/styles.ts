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
  height: 100vh;
  filter: brightness(0.8);
  position: absolute;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;


  background: linear-gradient(90deg,black, rgba(2,2,2, 90%), transparent);
  `

export const AboutTitle = styled.h1`
    padding: 0 6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    width: 60%;
    min-width: 600px;
    height: 100%;
    font-size: 3rem;
    text-shadow: 2px 2px 3px ${props => props.theme.colors.purpleLight};
    span {
      font-size: 6rem;
    }
  `

export const Button = styled.button`
    align-self: flex-start;
    border-radius: 2rem;
    padding: 2rem 4rem;
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    font-size: 2rem;
    line-height: .1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
    }
     `



