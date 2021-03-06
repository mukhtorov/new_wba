import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Wrapper } from './style';

const VideoPlay = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/data/javascript.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Wrapper>
      <Wrapper.Header>
        <Wrapper.Header.Title>
          <Wrapper.BlueText>Frontend</Wrapper.BlueText> Bootcamp
        </Wrapper.Header.Title>
        <Wrapper.Header.Owner>Sardor Mukhtorov</Wrapper.Header.Owner>
      </Wrapper.Header>
      <Wrapper.Container>
        <Wrapper.Container.Left>
          <Wrapper.Container.Left.Iframe
            src={data[id]?.src}
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture'
            allowfullscreen
          />
        </Wrapper.Container.Left>
        <Wrapper.Container.Right>
          {data.map((value) => (
            <Wrapper.Container.Right.Wrapper key={value.id}>
              <Wrapper.Play active={value.id - 1 === id - 1 ? 1 : 0} />
              <Wrapper.Container.Right.TitleWrapper>
                <Wrapper.Container.Right.Title
                  active={value.id - 1 === id - 1 ? 1 : 0}
                  onClick={() =>
                    navigate(`/kurslarimiz/frontent/javascript/${value.id}`)
                  }
                >
                  {value.title}
                </Wrapper.Container.Right.Title>
                <Wrapper.Container.Right.Short
                  active={value.id - 1 === id - 1 ? 1 : 0}
                  onClick={() =>
                    navigate(`/kurslarimiz/frontent/javascript/${value.id + 1}`)
                  }
                >
                  {value.shortTitle}
                </Wrapper.Container.Right.Short>
              </Wrapper.Container.Right.TitleWrapper>
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
