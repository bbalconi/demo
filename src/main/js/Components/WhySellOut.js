import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class WhySellOut extends Component {
  render() {
    return (
      <Box>
        <Flex>
          <Container>
            <Title>CRASH<br />PADS</Title>
            <Power>powered by <strong>airbnb</strong></Power>
            <Image src="/images/airbnb.png" />
            <SubTitle>Traveling to an event?<br />Crash with fellow fans.</SubTitle>
            <TicketButton>LEARN MORE</TicketButton>
          </Container><Container>
            <BottomSplit><Verty>
              <Avatar src="/images/dentist.jpg" />
              <Name>Brian B</Name>
              <Location>Bozeman, MT</Location>
              </Verty><Verty>
              <TalkBox><TalkText ital>"Hey! We've got an Airbnb room avails for
              any Sza fans traveling to the Des Moines show."</TalkText></TalkBox>
              </Verty>
            </BottomSplit>
          </Container>
        </Flex>
      </Box>
    );
  }
}

const Flex = styled.div`
display:flex;
flex-direction: column;`

const Container = styled.div`
flex: 1;`

const BottomSplit = styled.div`
display: flex;
flex-direction: row;
`

const Verty = styled.div`
flex: 1;`

const TalkBox = styled.div`
height: 150px;
width: 350px;
background: #514c55;
border-radius: 10px;
border: 1px solid #514c55;
margin-top: 100px;
margin-left: 0px;`

const Box = styled.div`
  background-image: url('/images/moon.jpeg');
  position: relative;
  display: block;
  margin: auto;
  min-height: 1100px;
  height: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: initial;
  text-align: center; 
  padding: 0;
  `;


const Title = styled.h1`
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 800; 
  font-size: 5em;
  color: #fe3159;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 300px;
  `

const Image = styled.img`
  position: relative;
  display: block;
  margin: 0 auto;
  top: 550px;`

const Power = styled.h3`
  font-weight: normal;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.8em;
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 525px;
  `

const SubTitle = styled.h2`
  font-weight: normal;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.25em;
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 575px;
  `
  const TalkText = styled.h3`
  font-style: italic;
  font-weight: normal;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  color: white;
  width: 100%;
  position: relative;
  bottom: 0;`

  const Name = styled.h2`
  font-weight: relative;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.25em;
  color: white;
  width: 100%;
  position: relative;
  margin-left: 20%;
  margin-bottom: 0px;
  `

  const Location = styled.h2`
  font-weight: normal;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1em;
  color: white;
  width: 100%;
  position: relative;
  margin-left: 20%;
  margin-top: 0px;`

const TicketButton = styled.button`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  width: 200px;
  height: 60px;
  margin: 0 auto;
  margin-top: 600px;
  background: #E3184F;
  font-size: 1.25em;
  border: 2px solid #E3184F;
  `

const Avatar = styled.img`
  border-radius: 50%;
  margin: 0 auto;
  border: 5px solid white;
  margin-top: 100px;
  margin-left: 40%;`