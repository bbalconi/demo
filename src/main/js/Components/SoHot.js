import React, { Component } from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';

export default class SoHot extends Component {
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
          <div><img src="/images/missy.jpeg" />
            <Text date>THURSDAY JUNE 14th<br /></Text>
            <Text artist>missy elliott<br /></Text>
            <Text>Coachella<br /></Text>
            <Text>Coachella, CA<br /></Text>
          </div>
          <div><img src="/images/beyonce.jpeg" />
            <Text date>MONDAY AUGUST 6th<br /></Text>
            <Text artist>beyonce<br /></Text>
            <Text>Radio City Music Hall<br /></Text>
            <Text>New York, NY<br /></Text></div>
          <div><img src="/images/luis.jpeg" />
            <Text date>THURSDAY AUGUST 30th<br /></Text>
            <Text artist>luis fonsi<br /></Text>
            <Text>Raymond James Stadium<br /></Text>
            <Text>Tampa, FL<br /></Text></div>
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