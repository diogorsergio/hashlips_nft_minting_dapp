import styled from 'styled-components';
import {
  fontSize,
  display,
  height,
  width,
  fontFamily,
  minWidth,
  color
} from 'styled-system';

export const Box = styled.div`
  width: 100%;
`;

export const Flex = styled(Box)`
  width: 100%;
  display: flex;
`;

export const CountdownContainer = styled(Flex)`
  ${display};
  width: 100%;
  ${height};
  ${fontFamily};
  ${fontSize};
  box-sizing: content-box;
  margin: 10px;

  @media screen and (min-width: 580px) and (max-width: 650px) {
    flex-direction: column-reverse;
    height: 100px;
  }
`;

export const TimeContainer = styled(Flex)`
  text-align: center;
`;

export const CountElement = styled(Flex)`
  ${fontSize};
  text-align: center;
  flex-direction: column;
  justify-content: center;
  ${width};
  ${minWidth};
  ${color};
`;

export const Count = ({ ...rest }) => (
  <CountElement
    fontSize={['10vw', '1em']}
    minWidth={['15vw', 62, 66]}
    color="light.tertiary"
    {...rest}
  />
);

export const Label = styled(Box)`
  ${fontSize};
`;

export const Time = styled(Flex)`
  text-align: center;
  flex-direction: column;
`;
