import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 96px;
  background: #f5faff;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 100%;
  height: 476px;
  display: flex;
  @media (max-width: 1050px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
  }
`;
// ========== Left ==========
Wrapper.Left = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1050px) {
    width: 90%;
  }
`;
Wrapper.Left.Image = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 96px;
`;
Wrapper.Left.Name = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  color: #1b1a18;
  margin-top: 16px;
  @media (max-width: 850px) {
    font-size: 19px;
    line-height: 28px;
  }
`;
Wrapper.Left.Type = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  color: #514d48;
  @media (max-width: 850px) {
    font-size: 16px;
    line-height: 26px;
  }
`;
Wrapper.Left.Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #514d48;
  display: none;
  @media (max-width: 1050px) {
    display: block;
  }
`;
Wrapper.SocialNetwork = styled.div`
  display: flex;
  grid-gap: 16px;
  margin-top: 34px;
`;
Wrapper.Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

// ========== Right ==========
Wrapper.Right = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;
Wrapper.Right.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  color: #1b1a18;
  margin-top: 83px;
  @media (max-width: 1050px) {
    display: none;
  }
`;
Wrapper.Right.Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  color: #514d48;
  width: 95%;
  @media (max-width: 1350px) {
    line-height: 26px;
  }
  @media (max-width: 1050px) {
    display: none;
  }
`;
Wrapper.Right.TagsWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 1rem;
  margin: 35px 0 100px 0;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  @media (max-width: 1250px) {
    width: 95%;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  }
`;
Wrapper.Right.Tag = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #0076f5;
`;
