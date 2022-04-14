import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Wrapper } from './style';

const VideoPlay = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch('/data/mobile.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Wrapper>
      <Wrapper.Header>
        <Wrapper.Header.Title>
          <Wrapper.BlueText>Mobile</Wrapper.BlueText> Bootcamp
        </Wrapper.Header.Title>
        <Wrapper.Header.Owner>Zohidjon Akbarov</Wrapper.Header.Owner>
      </Wrapper.Header>
      <Wrapper.Container>
        <Wrapper.Container.Left>
          <Wrapper.Container.Left.Iframe
            src={data[id - 1]?.src}
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture'
            allowfullscreen
          />
        </Wrapper.Container.Left>
        <Wrapper.Container.Right>
          {data.map((value) => (
            <Wrapper.Container.Right.Wrapper key={value.id}>
              <Wrapper.Play active={value.id - 1 === id - 1} />
              <Wrapper.Container.Right.Title.Wrapper>
                <Wrapper.Container.Right.Title
                  active={value.id - 1 === id - 1}
                  onClick={() =>
                    navigate(`/kurslarimiz/mobile/kotlin/${value.id}`)
                  }
                >
                  {value.title}
                </Wrapper.Container.Right.Title>
                <Wrapper.Container.Right.Short
                  active={value.id - 1 === id - 1}
                  onClick={() =>
                    navigate(`/kurslarimiz/mobile/kotlin/${value.id}`)
                  }
                >
                  {value.shortTitle}
                </Wrapper.Container.Right.Short>
              </Wrapper.Container.Right.Title.Wrapper>
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
