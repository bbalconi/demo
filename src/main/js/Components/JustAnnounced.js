import React, { Component } from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';

export default class JustAnnounced extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <Container>
        <Slider {...settings}>
          <div><img src="/images/levon.jpeg" />
            <Text date>WEDNESDAY JANUARY 31st<br /></Text>
            <Text artist>levon helm<br /></Text>
            <Text>Fly Me To The Moon Saloon<br /></Text>
            <Text>Telluride, CO<br /></Text>
          </div>
          <div><img src="/images/dead.jpeg" />
            <Text date>TUESDAY FEBRUARY 13th<br /></Text>
            <Text artist>the grateful dead<br /></Text>
            <Text>Red Rocks Ampitheater<br /></Text>
            <Text>Morrison, CO<br /></Text></div>
          <div><img src="/images/gary.jpeg" />
            <Text date>SATURDAY JULY 14th<br /></Text>
            <Text artist>gary clark jr.<br /></Text>
            <Text>The Capitol Theater<br /></Text>
            <Text>Port Chester, NY<br /></Text></div>
        </Slider>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 auto;
  padding: 40px;
  width: 80%;
  color: #333;
}`

const Text = styled.text`
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 1em;
font-weight: 350;

${props => props.date && css`
    font-weight: bold;
    font-size: .75em;
    color: #ea6720;
  `}

${props => props.artist && css`
  font-weight: bold;
  font-size: 1.33em;
`}

`