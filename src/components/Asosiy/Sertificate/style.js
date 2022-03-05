import styled, { css, keyframes } from 'styled-components';

const rotate_vert_center = keyframes`
0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 500px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.06em;
  color: #1b1a18;
  margin-top: 188px;
  margin-bottom: 24px;
`;
export const Left = styled.div`
  flex: 1;
`;
Left.Img = styled.img`
  height: 100%;
  width: 100%;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
  position: relative;
  z-index: 1;
  ${({ isWorkAnimation }) =>
    isWorkAnimation &&
    `
      .Back {
        transform: rotateY(0deg);
      }
      .Front {
        transform: rotateY(-180deg);
      }
      
      `}
  animation: ${({ isWorkAnimation }) =>
    isWorkAnimation &&
    css`
      ${rotate_vert_center}
    `} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
`;
Right.Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background: #f5faff;
  flex-direction: column;
  transform: rotateY(180deg);
`;
Right.BackInput = styled.input`
  outline: none;
  border: 1px solid #8fc5ff;
  height: 50px;
  width: 50%;
  padding-left: 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #2990ff;
  border-radius: 5px;
  background: transparent;
  margin-top: 7px;
  margin-bottom: 24px;
  ::placeholder {
    color: #2990ff;
  }
`;
Right.Front = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f5faff;
  transform: rotateY(0deg);
`;
Right.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  color: #1b1a18;
  margin-bottom: 16px;
`;
Right.Desc = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #514d48;
  width: 60%;
  text-align: center;
  margin-bottom: 25px;
`;
