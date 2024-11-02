import {expect, it} from '@jest/globals';
import {Shop} from "../gilded_rose.js";
import {Item} from "../item.js";

it.each`
    sellIn | expectedSellIn | quality | expectedQuality
    ${10}  | ${10}          | ${10}   | ${80}
    ${10}  | ${10}          | ${0}    | ${80}
    `('Sulfuras não altera o sellIn e nem o quality' +
    '\n\tsellIn: $sellIn -> $expectedSellIn ' +
    '\n\tquality: $quality -> $expectedQuality',
    ({sellIn, expectedSellIn, quality, expectedQuality}) => {
        const sulfuras = new Item('Sulfuras, Hand of Ragnaros', sellIn, quality);

        new Shop([sulfuras]).updateQuality();

        expect(sulfuras.sellIn).toEqualWithMessage(expectedSellIn, "SellIn");
        expect(sulfuras.quality).toEqualWithMessage(expectedQuality, "Quality");
    });