import Conjured from "./conjured.js";
import Sulfuras from "./sulfuras.js";


const rulesByItemName = new Map();

rulesByItemName.set(Conjured.name, Conjured.ruleFunction);
rulesByItemName.set(Sulfuras.name, Sulfuras.ruleFunction);

export default rulesByItemName;