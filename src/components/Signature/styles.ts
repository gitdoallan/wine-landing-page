import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 18px;
  grid-row-gap: 18px;
  height: 100vh;
  max-height: 700px;

  .child-1 {
    padding: 10px;
    padding-top: 50px;
    grid-area: 1 / 2 / 2 / 3;
    color: ${({ theme }) => theme.fontColors.primary};

    .top {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-right: 20px;
      color: ${({ theme }) => theme.fontColors.grayLight};
    }

    .title {
      color: ${({ theme }) => theme.fontColors.primary};
      display: flex;
      flex-direction: column;
      p {
        font-size: 1.1rem;
        line-height: 1.1rem;
        font-weight: 500;
        :last-child {
          font-weight: 600;
          line-height: 1.4rem;
          font-size: 1.4rem;
        }
      }
    }

    .sub {
      padding: 10px;
      color: ${({ theme }) => theme.colors.red};
    }
  }

  .child-2 {
    grid-area: 1 / 1 / 4 / 2;
    position: relative;
    display: flex;
    align-items: center;

    img {
      position: absolute;
      :nth-child(1) {
        right: 100px;
        left: 0;
        margin: auto;
        transform: scale(0.8);
      }

      :nth-child(2) {
        right: 0;
        left: 0;
        margin: auto;
        z-index: 1;
      }

      :nth-child(3) {
        right: 0;
        left: 100px;
        margin: auto;
        transform: scale(0.8);
      }
    }
  }

  .child-3 {
    padding-bottom: 50px;
    grid-area: 2 / 2 / 4 / 3;
    display: flex;
    gap: 16px;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: px;
    grid-row-gap: 0px;
    max-height: 1300px;
    height: 2000px;

    .child-1 {
      grid-area: 1 / 1 / 2 / 2;
      height: 100px;
      max-height: 100px;
    }

    .child-2 {
      grid-area: 2 / 1 / 6 / 2;
      height: 500px;

      img {
        position: absolute;
        :nth-child(1) {
          right: calc(100vw * 0.3);
          left: calc(100vw * 0.3 - 150px);
          margin: auto;
          transform: scale(0.6);
        }

        :nth-child(2) {
          right: 0;
          left: 0;
          margin: auto;
          z-index: 1;
          transform: scale(0.8);
        }

        :nth-child(3) {
          right: calc(100vw * 0.3 - 150px);
          left: calc(100vw * 0.3);
          margin: auto;
          transform: scale(0.6);
        }
      }
    }

    .child-3 {
      grid-area: 6 / 1 / 8 / 2;
      display: flex;
      gap: 16px;
      flex-direction: column;
      align-items: center;
      margin-bottom: 700px;
    }
  }
`;
