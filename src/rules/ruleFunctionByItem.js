import Conjured from "./conjured.js";
import Sulfuras from "./sulfuras.js";

const ruleFunctionByItem = new Map();

ruleFunctionByItem.set(Conjured.name, Conjured.applyRule);
ruleFunctionByItem.set(Sulfuras.name, Sulfuras.applyRule);

export default ruleFunctionByItem;