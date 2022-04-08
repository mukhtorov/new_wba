import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 112px;
`;

Wrapper.Container = styled.div`
  display: flex;
  height: 400px;
  padding-top: 48px;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 800px;
  }
`;
Wrapper.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 28px;
  color: #31344b;
  margin-bottom: ${({ mb }) => mb && '24px'};
`;
Wrapper.List = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
`;
Wrapper.Item = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #31344b;
  cursor: pointer;
`;
Wrapper.Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #8fc5ff;
  outline: none;
  padding-left: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #2990ff;
  border-radius: 5px;
  margin-bottom: 16px;
  margin-top: 7px;
  ::placeholder {
    color: #2990ff;
  }
`;
Wrapper.Container.First = styled.div`
  flex: 2;
  @media (max-width: 1000px) {
    order: 4;
    margin-top: 24px;
  }
`;
Wrapper.Container.First.Text = styled.div`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #31344b;
  width: 70%;
`;
Wrapper.SocialNetwork = styled.div`
  display: flex;
  grid-gap: 16px;
  margin-top: 29px;
`;
Wrapper.Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
Wrapper.Container.Main = styled.div`
  display: flex;
  flex: 2;
`;
Wrapper.Container.Second = styled.div`
  flex: 1;
  @media (max-width: 1000px) {
    order: 1;
    float: left;
  }
`;
Wrapper.Container.Third = styled.div`
  flex: 1;
  @media (max-width: 1000px) {
    order: 1;
    float: right;
  }
`;
Wrapper.Container.Fourth = styled.div`
  flex: 2;
  @media (max-width: 1000px) {
    order: 3;
    margin-top: 24px;
  }
`;

export const Container = styled.div`
  padding: 0 8%;
`;
Wrapper.Hr = styled.div`
  border: 1px solid #cfccc9;
`;
Wrapper.BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
Wrapper.BrandParagraph = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #31344b;
  margin-top: 16px;
  margin-bottom: 40px;
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
