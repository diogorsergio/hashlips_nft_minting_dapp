import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(rgb(225, 246, 100), rgb(254, 176, 254));
`

const Title = styled.h1`
  font-size: 24px;
  margin: 10px;
`

const Description = styled.p`
  font-size: 18px;
`

const Link = styled.a`
  font-size: 14px;
  margin: 10px;
`

const Img = styled.img`
  width: 200px;
  margin: 20px;
`

const Gate = ({ children }) => {
  return (
    <Wrapper>
      <Img alt="Halfie Right NFT" src="/halfies.gif" />
      <Title>Release title</Title>
      <Description>Some description</Description>
      <div>
        {children}
      </div>
      <div>
        <Link href="https://www.google.com">www.google.com</Link>
        <Link href="https://etherscan.io/">https://etherscan.io/</Link>
      </div>
      <Img alt="Halfie NFT Logo" src="/logo192.png" />
    </Wrapper>
  );
}

Gate.propTypes = {
  children: PropTypes.any
};

export default Gate;
