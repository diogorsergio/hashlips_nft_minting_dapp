import React, { useState } from "react";
import MintPage from "./MintPage";
import Countdown from "./components/Countdown";
import GatePage from "./components/GatePage";

const now = new Date();
// Target Date is in UTC format
const targetDate = new Date("2021-12-20T08:37:00.000Z");

export const App = () => {
  const isBefore = targetDate.getTime() - now.getTime();
  console.log(isBefore)
  const [show, setShow] = useState(!(isBefore > 0));

  if (show) {
    return (
      <MintPage />
    )
  }

  return (
    <GatePage>
      <Countdown date={targetDate} startDate={now} onDeadline={() => setShow(true)} />
    </GatePage>
  )
}

export default App;
