import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  CountdownContainer,
  TimeContainer,
  Time,
  Count,
  Label,
  Flex
} from './elements';

import {
  calculateTimeDifference,
  leadZeros,
  isInRange,
  delayedDate,
  delay
} from '../../utils';

export const Countdown = ({ date, startDate, onDeadline }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showContent, setShowContent] = useState(
    isInRange(startDate, delayedDate(date))
  );

  const hideDelayedContent = (time) => {
    setTimeout(() => {
      setShowContent(false);
    }, time);
  };

  useEffect(() => {
    setShowContent(isInRange(startDate, delayedDate(date)));
    const { days, hours, minutes, seconds } = calculateTimeDifference(date);

    setTime({ days, hours, minutes, seconds });

    let interval;

    if (days + hours + minutes + seconds > 0) {
      interval = setInterval(() => {
        const newTime = calculateTimeDifference(date);

        setTime(newTime);

        const { days, hours, minutes, seconds } = newTime;

        if (days + hours + minutes + seconds === 0) {
          hideDelayedContent(delay);
          clearInterval(interval);
          onDeadline()
        } else if (!showContent) {
          setShowContent(isInRange(startDate, delayedDate(date)));
        }
      }, 1000);
    } else if (showContent) {
      hideDelayedContent(delayedDate(date).getTime() - Date.now());
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Flex width={1}>
      {showContent && (
        <CountdownContainer
          fontSize={['medium']}
          minHeight={[134, 84, 64]}
          p={[null, 'small']}
          fontFamily="Gotham.bold"
          flexDirection={['column-reverse', 'row']}
          justifyContent={['space-around', 'center']}
        >
          <TimeContainer
            justifyContent="center"
            fontSize={['largeCounter']}
          >
            <Time>
              <Count>{leadZeros(time.days)}</Count>
              <Label fontSize={[10, 8, 10]}>days</Label>
            </Time>

            <Time>
              <Count>{leadZeros(time.hours)}</Count>
              <Label fontSize={[10, 8, 10]}>hours</Label>
            </Time>

            <Time>
              <Count>{leadZeros(time.minutes)}</Count>
              <Label fontSize={[10, 8, 10]}>minutes</Label>
            </Time>

            <Time>
              <Count>{leadZeros(time.seconds)}</Count>
              <Label fontSize={[10, 8, 10]}>seconds</Label>
            </Time>
          </TimeContainer>
        </CountdownContainer>
      )}
    </Flex>
  );
};

Countdown.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  onDeadline: PropTypes.func
};

Countdown.defaultProps = {
  onDeadline: (x) => x
}

export default Countdown;
