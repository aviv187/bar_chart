import React, { useEffect, useState } from "react";
import "../css/BarChart.css";

interface BarChartProps {
  values: string[];
  containerHeight: number;
  containerWidth: number;
  barGap: number;
}

const BarChart: React.FC<BarChartProps> = (props) => {
  const barValues = props.values;
  const containerHeight = props.containerHeight;
  const containerW = props.containerWidth;
  const barGap = props.barGap;

  const [maxH, setMaxH] = useState(100);
  const [barWidth, setBarWidth] = useState(0);

  let containerWidth = containerW;
  // container minimom with depend on the nadGap and the number of valus
  let containerMinWidth = (1 + barGap) * barValues.length - barGap;

  // set the container width to be bigger if it has too manny elements
  if (containerMinWidth > containerW) {
    containerWidth = containerMinWidth;
  } else {
    containerWidth = containerW;
  }

  // set a single bar height and width
  useEffect(() => {
    let _max = 0;

    // make the max to be the largest value in the arr
    barValues.forEach((barValue) => {
      if (+barValue > _max) _max = +barValue;
    });

    setMaxH(_max);
    setBarWidth(
      (containerWidth - (barValues.length - 1) * barGap) / barValues.length
    );
  }, [barValues, containerWidth, barGap, setMaxH, setBarWidth]);

  return (
    <div
      className="barChartContainer"
      style={{
        width: containerWidth + "px",
        height: containerHeight + "px"
      }}
    >
      {barValues.map((barValue, index) => (
        <div
          key={`bar_${index}`}
          className="bar"
          style={{
            transform: `translateX(${index * (barWidth + barGap) + barWidth / 2
              }px)
                        translateY(${(+barValue * (containerHeight / maxH)) / 2
              }px)
                        scale(${barWidth}, ${+barValue * (containerHeight / maxH)
              })`
          }}
        />
      ))}
    </div>
  );
};

export default BarChart;
