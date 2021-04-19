import React, { useState, useEffect } from "react";

import "./App.css";

import BarChart from "./BarChart";

interface SettingsPropery {
  valuesArrLength: number;
  containerHeight: number;
  containerWidth: number;
  barGap: number;
  maxValue: number;
}

const App: React.FC = () => {
  const [values, setValues] = useState(['10', '20', '30']);
  const [settings, setSettings] = useState<SettingsPropery>({
    valuesArrLength: values.length,
    containerHeight: 400,
    containerWidth: 500,
    barGap: 5,
    maxValue: 30,
  });

  const _updateSettings = (e: React.ChangeEvent<HTMLInputElement>) => {
    let _settings = { ...settings };

    // const key = e.target.getAttribute('data-type');
    // if (key !== null && key in _settings) {
    //   _settings[key] = +e.target.value;
    // }

    switch (e.target.getAttribute('data-type')) {
      case 'containerHeight':
        _settings.containerHeight = +e.target.value;
        break;
      case 'containerWidth':
        _settings.containerWidth = +e.target.value;
        break;
      case 'barGap':
        _settings.barGap = +e.target.value;
        break;
      case 'maxValue':
        _settings.maxValue = +e.target.value;
        break;
      case 'valuesArrLength':
        _settings.valuesArrLength = +e.target.value;
        break;
      default:
        break;
    }

    setSettings(_settings);
  }


  const _updateValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(e.target.value.split(','));
  };

  const _changeValueArrey = () => {
    let newValuesArr: string[];

    if (values.length === 1 && values[0] === '') {
      newValuesArr = [createRamdonNum()];
    } else {
      newValuesArr = [...values];
    }

    const dif = Math.abs(values.length - settings.valuesArrLength);

    if (values.length > settings.valuesArrLength) {
      for (let i = 0; i < dif; i++) {
        newValuesArr.pop();
      }
    } else if (values.length < settings.valuesArrLength) {
      for (let i = 0; i < dif; i++) {
        newValuesArr.push(createRamdonNum());
      }
    }

    setValues(newValuesArr);
  };

  const createRamdonNum = () => {
    const random = Math.floor((Math.random() * (settings.maxValue + 1)));
    return random.toString()
  }

  useEffect(() => {
    setSettings(state => {
      let _settings = { ...state };
      _settings['valuesArrLength'] = values.length;

      return _settings;
    });
  }, [values]);

  return (
    <div className="App">
      <div className="values">
        <div>
          <td>
            <tr>Container height:</tr>
            <tr>
              <input type="number" data-type='containerHeight' value={settings.containerHeight} onChange={_updateSettings} />
            </tr>
          </td>
          <td>
            <tr>Container width:</tr>
            <tr>
              <input type="number" data-type='containerWidth' value={settings.containerWidth} onChange={_updateSettings} />
            </tr>
          </td>
          <td >
            <tr>Bar gap:</tr>
            <tr>
              <input type="number" data-type='barGap' value={settings.barGap} onChange={_updateSettings} />
            </tr>
          </td>
        </div>
          Enter values separated by comma:
          <input type="text" value={values} onChange={_updateValues} />
        <div>
          <td>
            <tr>Number of values:</tr>
            <tr>
              <input type="number" data-type='valuesArrLength' value={settings.valuesArrLength} onChange={_updateSettings} />
            </tr>
          </td>
          <td>
            <tr>Max value:</tr>
            <tr>
              <input type="number" data-type='maxValue' value={settings.maxValue} onChange={_updateSettings} />
            </tr>
          </td>
          <td>
            <button onClick={_changeValueArrey}>add/delete values</button>
          </td>
        </div>
      </div>
      <BarChart values={values} containerHeight={settings.containerHeight} containerWidth={settings.containerWidth} barGap={settings.barGap} />
    </div>
  );
}

export default App;
