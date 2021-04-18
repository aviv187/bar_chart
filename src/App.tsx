import React, { useState, useEffect } from "react";

import "./App.css";

import BarChart from "./BarChart";

const App: React.FC = () => {
  const [values, setValues] = useState(['10', '20', '30']);
  const [valuesArrLength, setValuesArrLength] = useState(values.length);
  const [maxValue, setMaxValue] = useState(30);
  const [containerHeight, setContainerHeight] = useState(400);
  const [containerWidth, setContainerWidth] = useState(500);
  const [barGap, setBarGap] = useState(5);

  const _updateValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(e.target.value.split(','));
  };

  const _updateValuesArrLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesArrLength(+e.target.value);
  };

  const _updateMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.target.value);
  };

  const _updateContainerHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContainerHeight(+e.target.value);
  };

  const _updateContainerWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContainerWidth(+e.target.value);
  };

  const _updateBarGap = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBarGap(+e.target.value);
  };

  useEffect(() => {
    setValuesArrLength(values.length);
  }, [values]);

  const _changeValueArrey = () => {
    let newValuesArr: string[];

    if (values.length === 1 && values[0] === '') {
      newValuesArr = [createRamdonNum()];
    } else {
      newValuesArr = [...values];
    }

    const dif = Math.abs(values.length - valuesArrLength);

    if (values.length > valuesArrLength) {
      for (let i = 0; i < dif; i++) {
        newValuesArr.pop();
      }
    } else if (values.length < valuesArrLength) {
      for (let i = 0; i < dif; i++) {
        newValuesArr.push(createRamdonNum());
      }
    }

    setValues(newValuesArr);
  };

  const createRamdonNum = () => {
    const random = Math.floor((Math.random() * (maxValue + 1)));
    return random.toString()
  }

  return (
    <div className="App">
      <div className="values">
        Enter the container height:
        <input type="number" value={containerHeight} onChange={_updateContainerHeight} />
        Enter the container width:
        <input type="number" value={containerWidth} onChange={_updateContainerWidth} />
        Enter the bar gap:
        <input type="number" value={barGap} onChange={_updateBarGap} />
        Enter values separated by comma:
        <input type="text" value={values} onChange={_updateValues} />
          Enter the number of values:
        <input type="number" value={valuesArrLength} onChange={_updateValuesArrLength} />
        Enter the max value:
        <input type="number" value={maxValue} onChange={_updateMaxValue} />
        <button onClick={_changeValueArrey}>add/delete values</button>
      </div>
      <BarChart values={values} containerHeight={containerHeight} containerWidth={containerWidth} barGap={barGap} />
    </div>
  );
}

export default App;
