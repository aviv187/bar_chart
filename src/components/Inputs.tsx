import SettingsModel from "../models/settings";

import "../css/Inputs.css";

interface inputProps {
  settings: SettingsModel;
  values: string[];
  setValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSettings: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeValueArr: () => void;
}

const InputsComponent: React.FC<inputProps> = props => {
  const settings = props.settings;
  const values = props.values;
  const _updateValues = props.setValues;
  const _updateSettings = props.setSettings;
  const _changeValueArr = props.changeValueArr;


  return <div className="values">
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
        <button onClick={_changeValueArr}>add/delete values</button>
      </td>
    </div>
  </div>
}

export default InputsComponent;
