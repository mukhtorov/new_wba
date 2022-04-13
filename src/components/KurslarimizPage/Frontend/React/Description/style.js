import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 84%;
  margin: auto;
  margin-top: 15px;
`;
Wrapper.Container = styled.div`
  width: 65%;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;
Wrapper.Header = styled.div`
  display: flex;
  border-bottom: 1px solid #cfccc9;
`;
Wrapper.Header.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  color: ${({ active }) => (active ? '#0076F5' : '#8fc5ff')};
  margin-left: ${({ ml }) => ml && '50px'};
  cursor: pointer;
  padding-bottom: 14px;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #0076f5;
    `}
`;
Wrapper.DescriptionWrapper = styled.div`
  display: block;
  @media (max-width: 800px) {
    display: ${({ hide }) => (hide ? 'block' : 'none')};
  }
`;
Wrapper.Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  color: #514d48;
  margin-top: ${({ mt }) => mt && `${mt}px`};
`;
Wrapper.Mobile = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: ${({ hide }) => (hide ? 'none' : 'block')};
  }
`;
Wrapper.ShowButton = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #0076f5;
`;
