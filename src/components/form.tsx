import React from "react";
import SettingsModel from "../models/settings";

import "../css/Input.css";
import "../css/form.css";

interface inputProps {
  settings: SettingsModel;
  values: string[];
  setValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSettings: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeValueArr: () => void;
}

const InputsComponent: React.FC<inputProps> = (props) => {
  const settings = props.settings;
  const values = props.values;
  const _updateValues = props.setValues;
  const _updateSettings = props.setSettings;
  const _changeValueArr = props.changeValueArr;

  return (
    <div className="values">
      <div className="row">
        <div>
          <div className="label">Container height:</div>
          <div className="value">
            <input
              type="number"
              data-type="containerHeight"
              value={settings.containerHeight}
              onChange={_updateSettings}
            />
          </div>
        </div>
        <div>
          <div className="label">Container width:</div>
          <div className="value">
            <input
              type="number"
              data-type="containerWidth"
              value={settings.containerWidth}
              onChange={_updateSettings}
            />
          </div>
        </div>
        <div>
          <div className="label">Bar gap:</div>
          <div className="value">
            <input
              type="number"
              data-type="barGap"
              value={settings.barGap}
              onChange={_updateSettings}
            />
          </div>
        </div>
      </div>
      <div className="label">Enter values separated by comma:</div>
      <div className="value">
        <input type="text" value={values} onChange={_updateValues} />
      </div>
      <div className="row">
        <div>
          <div className="label">Number of values:</div>
          <div className="value">
            <input
              type="number"
              data-type="valuesArrLength"
              value={settings.valuesArrLength}
              onChange={_updateSettings}
            />
          </div>
        </div>
        <div>
          <div className="label">Max value:</div>
          <div className="value">
            <input
              type="number"
              data-type="maxValue"
              value={settings.maxValue}
              onChange={_updateSettings}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button
            className={
              settings.valuesArrLength === values.length ? "disabled" : ""
            }
            onClick={_changeValueArr}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputsComponent;
