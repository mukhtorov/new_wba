import React, { useState } from 'react';
import FrontendCollapse from './FrontendCollapse';
import MobileCollapse from './MobileCollapse';
import BackendCollapse from './BackendCollapse ';
import { Wrapper } from './style';

const CourseCollapse = () => {
  const [active, setActive] = useState(1);
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Items onClick={() => setActive(1)} active={active === 1}>
          Frontend Development
        </Wrapper.Items>
        <Wrapper.Items onClick={() => setActive(2)} active={active === 2}>
          Backend Development
        </Wrapper.Items>
        <Wrapper.Items onClick={() => setActive(3)} active={active === 3}>
          Mobile Development
        </Wrapper.Items>
      </Wrapper.Container>
      {active === 1 && <FrontendCollapse />}
      {active === 3 && <MobileCollapse />}
      {active === 2 && <BackendCollapse />}
    </Wrapper>
  );
};

export default CourseCollapse;
