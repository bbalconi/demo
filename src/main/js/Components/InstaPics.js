import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class InstaPics extends Component {
  render() {
    return (
      <Wrapper>
        <Image src="/images/concert1.jpeg"/>
        <Image src="/images/concert2.jpeg"/>
        <Image src="/images/concert3.jpg"/>
        <Image src="/images/concert4.jpeg"/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;`

const Image = styled.img`
margin-right: 10px;
margin-bottom: 10px;`