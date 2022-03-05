import styled from 'styled-components';
import { ReactComponent as AboutLine } from '../../../assets/icons/about_line.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.06em;
  color: #1b1a18;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 8%;
`;

Left.Title = styled.div`
  display: flex;
  text-align: start;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  /* max-width: 450px; */
  color: #1b1a18;
  width: 100%;
  margin-bottom: 24px;
`;

Left.Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  /* max-width: 450px; */
  color: #514d48;
  margin-bottom: 16px;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  /* background: red; */
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
  flex: 1;
  margin-right: 30px;
`;

export const Image = styled.img`
  width: 100%;
  flex: 1;
  height: 500px;
  object-fit: cover;
  object-position: 32% 0;
  background-repeat: no-repeat;
  border-radius: 30px;
`;

Image.Set1 = styled(Image)`
  object-position: 32% 0;
`;

Image.Set2 = styled(Image)`
  margin-top: 50px;
  object-position: 50% 0px;
`;

export const FunTextWrapper = styled.div`
  position: absolute;
  display: flex;
  @media (min-width: 1520px) {
    top: 13%;
    left: 35%;
  }
  @media (max-width: 1520px) {
    bottom: 5%;
    left: 35%;
  }
  @media (max-width: 1220px) {
    bottom: 0;
    left: 35%;
  }
  @media (max-width: 1157px) {
    bottom: -10%;
    left: 35%;
  }
`;
FunTextWrapper.Line = styled(AboutLine)`
  @media (max-width: 1520px) {
    transform: rotate(-100deg);
  }
`;
FunTextWrapper.Text = styled.div`
  font-family: Chilanka;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #514d48;
  margin-left: 10px;
  @media (max-width: 1100px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
