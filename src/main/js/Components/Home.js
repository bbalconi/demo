import React, { Component } from 'react';
import styled, { css } from 'styled-components';



export default class Home extends Component {
  render() {
    return (
      <Image src='images/hah.jpg'/>
    );
  }
}

const Image = styled.img`
  float: right;`;