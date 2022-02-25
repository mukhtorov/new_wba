import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
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
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
`;

export const ImgWrapper = styled.div`
  max-width: 270px;
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

Image.Set3 = styled(Image)`
  object-position: 95% 0;
  margin: 0;
`;
