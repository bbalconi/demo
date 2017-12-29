import React, { Component } from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';

export default class NearYou extends Component {
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
          <div><img src="/images/greensky.jpeg" />
            <Text date>WEDNESDAY JANUARY 24th<br /></Text>
            <Text artist>greensky bluegrass<br /></Text>
            <Text>The Wilma<br /></Text>
            <Text>Missoula, MT<br /></Text>
          </div>
          <div><img src="/images/nicky.jpeg" />
            <Text date>TUESDAY FEBRUARY 6th<br /></Text>
            <Text artist>andre nickatina<br /></Text>
            <Text>Cats Paw<br /></Text>
            <Text>Bozeman, MT<br /></Text></div>
          <div><img src="/images/california.jpeg" />
            <Text date>SATURDAY JULY 14th<br /></Text>
            <Text artist>california honeydrops<br /></Text>
            <Text>NW String Summit<br /></Text>
            <Text>Hornings Hideout, OR<br /></Text></div>
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