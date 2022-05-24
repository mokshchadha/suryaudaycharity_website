import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import "./mission.css";

export const Counter = ({
  finalCount,
  title,
  duration = 1,
  startCount = 0,
}) => {
  return (
    <div className="counter_bg">
      <div className="counter_title">{title}</div>
      <div className="counter">
        <VisibilitySensor>
          {({ isVisible }) => (
            <div>
              {isVisible ? (
                <CountUp
                  end={finalCount}
                  duration={duration}
                  start={startCount}
                />
              ) : (
                <CountUp end={finalCount} duration={duration} start={null} />
              )}
            </div>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
};
