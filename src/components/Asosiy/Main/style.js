import styled from 'styled-components';
import { ReactComponent as line } from '../../../assets/icons/line_main.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  @media (max-width: 1200px) {
    order: 2;
  }
`;

Left.Text = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 4.3vw;
  line-height: 88px;
  letter-spacing: -0.08em;
  color: #1b1a18;
`;

Left.ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  .main-left {
    display: flex;
  }
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  height: 720px;
  @media (max-width: 1200px) {
    order: 1;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 220px;
  flex: 1;
  margin-right: 30px;
`;

export const Image = styled.img`
  width: 100%;
  flex: 1;
  height: 600px;
  object-fit: cover;
  object-position: 32% 0;
  background-repeat: no-repeat;
  border-radius: 30px;
`;

Image.Set1 = styled(Image)`
  object-position: 32% 0;
`;

Image.Set2 = styled(Image)`
  margin-top: 120px;
  object-position: 50% 0px;
`;

Image.Set3 = styled(Image)`
  object-position: 95% 0;
  margin: 0;
`;

export const Line = styled(line)`
  position: relative;
  top: -25px;
  right: -8%;
`;
