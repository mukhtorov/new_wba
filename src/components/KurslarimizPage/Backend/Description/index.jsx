import React, { useState } from 'react';
import { Wrapper } from './style';

const Description = () => {
  const [active, setAcitve] = useState(1);
  const [showMobile, setShowMobile] = useState(false);
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Header>
          <Wrapper.Header.Title
            onClick={() => setAcitve(1)}
            active={active === 1}
          >
            Kurs haqida
          </Wrapper.Header.Title>
          <Wrapper.Header.Title
            onClick={() => setAcitve(2)}
            active={active === 2}
            ml
          >
            Resurslar
          </Wrapper.Header.Title>
        </Wrapper.Header>
        <Wrapper.DescriptionWrapper hide={showMobile}>
          <Wrapper.Description mt='39'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            morbi orci id urna, egestas ultrices integer scelerisque nisl.
            Semper purus amet, metus sed elit diam aliquet volutpat vivamus. Id
            et morbi dolor nec magna quis vestibulum pretium est. Volutpat, eget
            feugiat sed egestas vitae viverra proin vitae netus. Vulputate
            gravida aenean montes, amet eget massa orci imperdiet. At velit enim
            blandit bibendum praesent dolor pharetra, ligula ante. Elit
            suspendisse amet eu viverra nibh et odio tempus. Id a pellentesque
            sed elit ornare mattis commodo ornare tristique. Urna, ut nisi in
            consectetur convallis nulla velit ante ultrices. Tincidunt enim,
            quis nec urna quis aliquet est magna. Aenean ultricies eget
            elementum sit quis nibh.
          </Wrapper.Description>
          <Wrapper.Description mt='39'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            morbi orci id urna, egestas ultrices integer scelerisque nisl.
            Semper purus amet, metus sed elit diam aliquet volutpat vivamus. Id
            et morbi dolor nec magna quis vestibulum pretium est. Volutpat, eget
            feugiat sed egestas vitae viverra proin vitae netus. Vulputate
            gravida aenean montes, amet eget massa orci imperdiet. At velit enim
            blandit bibendum praesent dolor pharetra, ligula ante. Elit
            suspendisse amet eu viverra nibh et odio tempus. Id a pellentesque
            sed elit ornare mattis commodo ornare tristique. Urna, ut nisi in
            consectetur convallis nulla velit ante ultrices. Tincidunt enim,
            quis nec urna quis aliquet est magna. Aenean ultricies eget
            elementum sit quis nibh.
          </Wrapper.Description>
          <Wrapper.Description mt='39'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            morbi orci id urna, egestas ultrices integer scelerisque nisl.
            Semper purus amet, metus sed elit diam aliquet volutpat vivamus. Id
            et morbi dolor nec magna quis vestibulum pretium est. Volutpat, eget
            feugiat sed egestas vitae viverra proin vitae netus. Vulputate
            gravida aenean montes, amet eget massa orci imperdiet. At velit enim
            blandit bibendum praesent dolor pharetra, ligula ante. Elit
            suspendisse amet eu viverra nibh et odio tempus. Id a pellentesque
            sed elit ornare mattis commodo ornare tristique. Urna, ut nisi in
            consectetur convallis nulla velit ante ultrices. Tincidunt enim,
            quis nec urna quis aliquet est magna. Aenean ultricies eget
            elementum sit quis nibh.
          </Wrapper.Description>
          <Wrapper.Description mt='39'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            morbi orci id urna, egestas ultrices integer scelerisque nisl.
            Semper purus amet, metus sed elit diam aliquet volutpat vivamus. Id
            et morbi dolor nec magna quis vestibulum pretium est. Volutpat, eget
            feugiat sed egestas vitae viverra proin vitae netus. Vulputate
            gravida aenean montes, amet eget massa orci imperdiet. At velit enim
            blandit bibendum praesent dolor pharetra, ligula ante. Elit
            suspendisse amet eu viverra nibh et odio tempus. Id a pellentesque
            sed elit ornare mattis commodo ornare tristique. Urna, ut nisi in
            consectetur convallis nulla velit ante ultrices. Tincidunt enim,
            quis nec urna quis aliquet est magna. Aenean ultricies eget
            elementum sit quis nibh.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Tristique morbi orci id urna, egestas ultrices
            integer scelerisque nisl. Semper purus amet, metus sed elit diam
            aliquet volutpat vivamus. Id et morbi dolor nec magna quis
            vestibulum pretium est. Volutpat, eget feugiat sed egestas vitae
            viverra proin vitae netus. Vulputate gravida aenean montes, amet
            eget massa orci imperdiet. At velit enim blandit bibendum praesent
            dolor pharetra, ligula ante.
          </Wrapper.Description>
        </Wrapper.DescriptionWrapper>
        <Wrapper.Mobile hide={showMobile}>
          <Wrapper.Description showMobile={showMobile} mt='39'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            morbi orci id urna, egestas ultrices integer scelerisque nisl.
            Semper purus amet, metus sed elit diam aliquet volutpat vivamus. Id
            et morbi dolor nec magna quis vestibulum pretium est. Volutpat, eget
            feugiat sed egestas vitae viverra proin vitae netus. Vulputate
            gravida aenean montes, amet eget massa orci imperdiet. At velit enim
            blandit bibendum praesent dolor pharetra, ligula ante.
          </Wrapper.Description>
          <Wrapper.ShowButton onClick={() => setShowMobile(true)}>
            Barchasi {'>'}
          </Wrapper.ShowButton>
        </Wrapper.Mobile>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Description;
