import React from "react";
import { ColorPicker } from "material-ui-color";

const noop = () => { };
const palette = {};

console.log(<ColorPicker palette={palette} defaultValue="transparent" onChange={noop} />);
