export default (date) => {
  const now = new Date();
  const nowTime = now.getTime();
  const dateTime = date.getTime();

  if (nowTime > dateTime) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  let delta = Math.abs(dateTime - nowTime) / 1000;

  const days = Math.floor(delta / (60 * 60 * 24));

  delta -= days * 60 * 60 * 24;

  const hours = Math.floor(delta / (60 * 60)) % 24;

  delta -= hours * 60 * 60;

  const minutes = Math.floor(delta / 60) % 60;

  delta -= minutes * 60;

  const seconds = Math.floor(delta % 60);

  return {
    days,
    hours,
    minutes,
    seconds
  };
};
