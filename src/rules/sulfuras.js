import {Item} from "../item.js";

const SULFURAS = 'Sulfuras, Hand of Ragnaros';

const Sulfuras = {
    name: SULFURAS,
    create: (sellIn, quality) => new Item(SULFURAS, sellIn, quality),
    ruleFunction: (item) => {
        item.quality = 80;
    }
}

export default Sulfuras;