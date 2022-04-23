import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70%;
  margin: auto;
`;
Wrapper.Container = styled.div`
  display: flex;
`;
Wrapper.Items = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  cursor: pointer;
  background: ${({ active }) => active && 'var(--colorBlue)'};
  color: ${({ active }) => (active ? '#fff' : '#000')};
`;
