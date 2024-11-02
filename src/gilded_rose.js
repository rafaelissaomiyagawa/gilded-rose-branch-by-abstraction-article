import ruleFunctionByItem from "./rules/ruleFunctionByItem.js";

export class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (const item of this.items) {
            if (ruleFunctionByItem.has(item.name)) {
                const ruleFunction = ruleFunctionByItem.get(item.name);
                ruleFunction(item);
            } else {
                this.legacyCode(item);
            }
        }

        return this.items;
    }

    legacyCode(item) {
        if (item.name !== 'Aged Brie' &&
            item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
                if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                    item.quality = item.quality - 1;
                }
            }
        } else {
            if (item.quality < 50) {
                item.quality = item.quality + 1;
                if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.sellIn < 11) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }
                    if (item.sellIn < 6) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }
                }
            }
        }
        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.sellIn = item.sellIn - 1;
        }
        if (item.sellIn < 0) {
            if (item.name !== 'Aged Brie') {
                if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.quality > 0) {
                        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                            item.quality = item.quality - 1;
                        }
                    }
                } else {
                    item.quality = item.quality - item.quality;
                }
            } else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                }
            }
        }
    }
}
