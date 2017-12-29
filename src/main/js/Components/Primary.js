import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class Primary extends Component {
  render() {
    return (
      <Box>
        <Title>BRIAN BALCONI</Title>
        <SubTitle>Not on tour. On sale now!</SubTitle>
        <TicketButton>GET TICKETS</TicketButton>
      </Box>
    );
  }
}

const Box = styled.section`
  background-image: url('/images/hah.jpg');
  position: relative
  display: block;
  margin: auto;
  min-height: 810px;
  height: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center; 
  padding: 0;
  `;


  const Title = styled.h1`
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 3px;
  font-size: 3.5em;
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 500px;`

  const SubTitle = styled.h2`
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.25em;
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 600px;
  `

  const TicketButton = styled.button`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  width: 200px;
  height: 60px;
  margin-top: 660px;
  background: #E3184F;
  font-size: 1.25em;
  border: 2px solid #E3184F;
  `