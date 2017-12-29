import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Primary from './Primary';
import Secondary from './Secondary';
import NearYou from './NearYou';
import JustAnnounced from './JustAnnounced';
import SoHot from './SoHot';
import WhySellOut from './WhySellOut';
import Footer from './Footer';
import InstaPics from './InstaPics';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Primary />
        <Secondary />
        <SubTitle>happening near you</SubTitle>
        <NearYou />
        <SubTitle>just announced</SubTitle>
        <JustAnnounced />
        <SubTitle>why sellout?</SubTitle>
        <WhySellOut />
        <SubTitle>so hot right now.</SubTitle>
        <SoHot />
        <SubTitle insta>latest fan moments</SubTitle>
        <SubTitle instared>#sellingout</SubTitle>
        <InstaPics />
        <SubTitle we>We </SubTitle>
        <SubTitle icon><i className="material-icons" style={{fontSize: 50}}>favorite</i></SubTitle>
        <SubTitle promoters> promoters.</SubTitle>
        <SubTitle believe>We believe that the event experience begins at ticketing.</SubTitle>
        <SubTitle reimagine>Reimagine your industry effect and maximize your revenue by making smarter booking decisions as a Sellout Pro.<br/><br/>
        From fan behavior analytics to easy-to-use transactional features and data - Sellout Pro is the best platform for today's event promoters.</SubTitle>
        <CenterButton>
          <PartnerButton>BECOME A PARTNER</PartnerButton>
        </CenterButton>
        <Footer />
      </div>
    );
  }
}

const SubTitle = styled.h1`
  padding-top: 30px;
  margin-left: 30px;
  font-weight: bold;
  color: black;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  ${props => props.insta && css`
    font-size: 2.5em;
  `}

  ${props => props.instared && css`
  font-size: 1.75em;
  color: red;
  padding-top: 0px;
`}

  ${props => props.we && css`
  font-size: 2.5em;
  padding: 0;
  margin-bottom: 0px;
  `}

  ${props => props.promoters && css`
  font-size: 2.5em;
  padding: 0;
  margin-top: 0px;
  `}

  ${props => props.icon && css`
  color:red;
  padding: 0;
  margin-top: 0px;
  margin-bottom: 0px;`}

  ${props => props.believe && css`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 1.25em;`}

  ${props => props.reimagine && css`
  font-weight: normal;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 1em;`}
`

  const PartnerButton = styled.button`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  width: 250px;
  height: 60px;
  margin-top: 60px;
  margin-bottom: 60px;
  background: #E3184F;
  font-size: 1.25em;
  border: 2px solid #E3184F;
  `

  const CenterButton = styled.div`
  text-align: center;
  border-bottom: 1px solid lightgrey;`