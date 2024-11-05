import rulesByItemName from "./rules/rulesByItemName.js";


export class Shop {
    constructor(items = []) {
        this.items = items;
    }
    
    updateQuality() {
        for (const item of this.items) {
            if (rulesByItemName.has(item.name)) {
                const rule = rulesByItemName.get(item.name);
                rule(item);
            } else {
                // Itens antigos
                this.legacyCode(item);
            }
        }

        return this.items;
    }

    legacyCode(item) {
        if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
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
