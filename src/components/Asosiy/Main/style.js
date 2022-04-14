import styled from 'styled-components';
import { ReactComponent as line } from '../../../assets/icons/line_main.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1300px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 200px;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  position: relative;
`;

Left.Text = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 4.3vw;
  line-height: 88px;
  letter-spacing: -0.08em;
  color: #1b1a18;
  @media (max-width: 1300px) {
    font-size: 3em;
    line-height: 60px;
  }
  @media (max-width: 500px) {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    line-height: 40px;
    letter-spacing: -0.06em;
    margin-top: 34px;
  }
`;

Left.ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  .main-left {
    display: flex;
  }
  @media (max-width: 1300px) {
    .nav {
      width: 50%;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  height: 720px;
  @media (max-width: 1300px) {
    grid-gap: 20px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 220px;
  flex: 1;
  margin-right: 30px;
  @media (max-width: 1300px) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  flex: 1;
  height: 600px;
  object-fit: cover;
  object-position: 32% 0;
  background-repeat: no-repeat;
  border-radius: 30px;
  @media (max-width: 800px) {
    height: 328px;
  }
`;

Image.Set1 = styled(Image)`
  object-position: 32% 0;
`;

Image.Set2 = styled(Image)`
  margin-top: 120px;
  object-position: 50% 0px;
  @media (max-width: 800px) {
    margin-top: 60px;
  }
`;

Image.Set3 = styled(Image)`
  object-position: 95% 0;
  margin: 0;
`;

export const Line = styled(line)`
  position: relative;
  top: -100px;
  right: 0;
  @media (max-width: 800px) {
    transform: rotateY(180deg);
    width: 70px;
    height: 70px;
    top: -50px;
    order: 1;
  }
`;
export const FunTextWrapper = styled.div`
  position: absolute;
  bottom: -80px;
  right: 100px;
  display: flex;
  @media (max-width: 1300px) {
    bottom: -225px;
    right: 100px;
  }
  @media (max-width: 800px) {
    right: 20%;
    left: 20%;
    margin-bottom: 90px;
  }
`;
export const FunText = styled.div`
  font-family: Italic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  width: 200px;
  letter-spacing: 0.02em;
  color: #514d48;
  @media (max-width: 800px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    width: 269px;
    order: 2;
  }
`;
