import {Item} from "../item.js";

const SULFURAS = 'Sulfuras, Hand of Ragnaros';

const Sulfuras = {
    name: SULFURAS,
    applyRule: item => {
        item.quality = 80;
    },
    create: (sellIn, quality) => new Item(SULFURAS, sellIn, quality)
}

export default Sulfuras;