import React, { useState, useEffect } from "react";

import "./css/App.css";

import BarChart from "./components/BarChart";
import InputsComponent from "./components/form"
import SettingsModel from "./models/settings"

const App: React.FC = () => {
  const [values, setValues] = useState(['10', '20', '30']);
  const [settings, setSettings] = useState<SettingsModel>({
    valuesArrLength: values.length,
    containerHeight: 400,
    containerWidth: 500,
    barGap: 5,
    maxValue: 30,
  });

  const _updateSettings = (e: React.ChangeEvent<HTMLInputElement>) => {
    let _settings: any = { ...settings };

    const key = e.target.getAttribute('data-type');
    if (key !== null && key in _settings) {
      _settings[key] = +e.target.value;
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
      <InputsComponent settings={settings} values={values} setValues={_updateValues} setSettings={_updateSettings} changeValueArr={_changeValueArrey} />
      <BarChart values={values} containerHeight={settings.containerHeight} containerWidth={settings.containerWidth} barGap={settings.barGap} />
    </div>
  );
}

export default App;

