import {Item} from "../item.js";

const CONJURED = 'Conjured';

const Conjured = {
    name: CONJURED,
    applyRule: item => {
        if (item.sellIn > 0) {
            item.quality -= 2;
        } else {
            item.quality -= 4;
        }

        item.sellIn--;
        item.quality = Math.max(item.quality, 0);
    },
    create: (sellIn, quality) => new Item(CONJURED, sellIn, quality)
}

export default Conjured;