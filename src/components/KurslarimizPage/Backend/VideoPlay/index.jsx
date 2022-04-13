import React, { useEffect, useState } from 'react';
import { data } from '../../../../mock/frontend';
import { Wrapper } from './style';

const VideoPlay = () => {
  const [choosenVideo, setChoosenVideo] = useState(0);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('/frontend.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  return (
    <Wrapper>
      <Wrapper.Header>
        <Wrapper.Header.Title>
          <Wrapper.BlueText>Backend</Wrapper.BlueText> Bootcamp
        </Wrapper.Header.Title>
        <Wrapper.Header.Owner>Hamza Kuranbayev</Wrapper.Header.Owner>
      </Wrapper.Header>
      <Wrapper.Container>
        <Wrapper.Container.Left>
          <Wrapper.Container.Left.Iframe
            src={data[choosenVideo].src}
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture'
            allowfullscreen
          />
        </Wrapper.Container.Left>
        <Wrapper.Container.Right>
          {data.map((value) => (
            <Wrapper.Container.Right.Wrapper key={value.id}>
              <Wrapper.Play active={value.id - 1 === choosenVideo} />
              <Wrapper.Container.Right.Title
                active={value.id - 1 === choosenVideo}
                onClick={() => setChoosenVideo(value.id - 1)}
              >
                {value.title}
              </Wrapper.Container.Right.Title>
              <Wrapper.Container.Right.Short
                active={value.id - 1 === choosenVideo}
                onClick={() => setChoosenVideo(value.id - 1)}
              >
                {value.shortTitle}
              </Wrapper.Container.Right.Short>
              <Wrapper.Container.Right.Time>
                {value.time}
              </Wrapper.Container.Right.Time>
            </Wrapper.Container.Right.Wrapper>
          ))}
        </Wrapper.Container.Right>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default VideoPlay;
