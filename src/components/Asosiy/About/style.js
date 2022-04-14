import styled from 'styled-components';

export const Wrapper = styled.div``;
Wrapper.Title = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.06em;
  color: #1b1a18;
  margin-bottom: 24px;
  @media (max-width: 620px) {
    font-size: 33px;
    line-height: 40px;
  }
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 100px;
  }
  @media (max-width: 400px) {
    margin-bottom: 160px;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

Left.Title = styled.div`
  display: flex;
  text-align: start;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  max-width: 450px;
  color: #1b1a18;
  width: 100%;
  margin-bottom: 24px;
  @media (max-width: 515px) {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 28px;
    color: #1b1a18;
  }
  @media (max-width: 800px) {
    margin-top: 21px;
  }
`;

Left.Text = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  max-width: 450px;
  color: #514d48;
  margin-bottom: 16px;
  @media (max-width: 515px) {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #514d48;
  }
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 800px) {
    grid-gap: 20px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 270px;
  flex: 1;
  margin-right: 30px;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  flex: 1;
  height: 500px;
  object-fit: cover;
  object-position: 32% 0;
  background-repeat: no-repeat;
  border-radius: 30px;
  @media (max-width: 800px) {
    height: 282px;
  }
`;
Image.Set1 = styled(Image)`
  object-position: 32% 0;
`;
Image.Set2 = styled(Image)`
  margin-top: 50px;
  object-position: 50% 0px;
`;
Image.Set3 = styled(Image)`
  object-position: 95% 0;
  margin: 0;
`;
export const FunTextWrapper = styled.div`
  position: absolute;
  display: flex;
  top: -20px;
  right: 0;
  height: fit-content;
  @media (max-width: 800px) {
    top: 300px;
  }
  @media (max-width: 515px) {
    top: 250px;
  }
  @media (max-width: 400px) {
    top: 270px;
  }
`;
FunTextWrapper.Line = styled.img`
  position: relative;
  top: 60px;
  @media (max-width: 1430px) {
    width: 115px;
    height: 90px;
  }
  @media (max-width: 800px) {
    top: 0;
    transform: rotateZ(-105deg);
  }
  @media (max-width: 515px) {
    width: 80px;
    height: 50px;
    top: 20px;
  }
`;
FunTextWrapper.Txt = styled.div`
  width: 317px;
  font-family: 'Chilanka';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #514d48;
  margin-left: 20px;
  @media (max-width: 1430px) {
    width: 212px;
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 515px) {
    width: 212px;
    font-size: 14px;
    line-height: 22px;
    margin-top: 40px;
  }
`;
