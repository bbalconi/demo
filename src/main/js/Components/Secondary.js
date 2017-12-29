import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class Secondary extends Component {
  render() {
    return (
      <BlackBox>
        <TextWrap>
        <Text header>Let’s get personal.<br/><br/></Text>
        <Link href="default.asp" target="_blank">Sign up </Link><Text>or</Text><Link href="default.asp" target="_blank"> Log in </Link><Text>so we can show you hand picked events just for you.</Text>
        </TextWrap>
      </BlackBox>
    );
  }
}

const BlackBox = styled.div`
margin: 0 auto;
display: block;
position: relative;
min-height: 200px;
height: auto;
width: 80%;
border: 1px solid black;
border-radius: 10px;
background: black;
top: 60px;
margin-bottom: 60px;
`
const Text = styled.text`
font-family: 'Roboto', sans-serif;
font-size: 1.5em;
color: #f2f1f2;

${props => props.header && css`
    font-weight: bold;
  `}`

const TextWrap = styled.div`
position:relative;
margin-left: 135px;
top: 35px;`

const Link = styled.a`
text-decoration: none;
font-family: 'Roboto', sans-serif;
font-size: 1.5em;
color: #cd3362;
`