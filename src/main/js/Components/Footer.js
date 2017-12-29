import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <img src="/images/AppStore.png"/>
        <img src="/images/GooglePlay.png"/>
        <FanProtect>
        <br/><i className="material-icons" style={{fontSize: 36}}>verified_user</i>
        <Text>FanProtect™<br/><br/></Text>
        <Text confidence>Buy and sell with confidence.<br/>Customer service all the way to your seat.<br/>Every order is 100% guaranteed.<br/><br/>© Sellout, Inc.</Text>
        </FanProtect>
        <Link href="default.asp" target="_blank">Terms</Link><Link href="default.asp" target="_blank">Privacy</Link><Link href="default.asp" target="_blank">Site Map</Link>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
margin-top 40px;`

const FanProtect = styled.div`
margin-top: 40px;
color: #0074cf;`

const Text = styled.text`
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 1.25em;
font-weight: bold;
color: black;

${props => props.confidence && css`
font-size: 1em;
font-weight: normal;
`}`

const Link = styled.a`
color: black;
margin-right: 25px;`