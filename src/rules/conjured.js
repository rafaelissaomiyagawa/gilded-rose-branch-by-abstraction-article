import {Item} from "../item.js";

const CONJURED = 'Conjured';

const Conjured = {
    name: CONJURED,
    create: (sellIn, quality) => new Item(CONJURED, sellIn, quality),
    ruleFunction: (item) => {
        if (item.sellIn > 0) {
            item.quality -= 2;
        } else {
            item.quality -= 4;
        }

        item.quality = Math.max(item.quality, 0);
        item.sellIn -= 1;
    }
}

export default Conjured;