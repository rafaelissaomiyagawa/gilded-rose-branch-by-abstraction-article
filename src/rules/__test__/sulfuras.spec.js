import {expect, it} from '@jest/globals';
import {Shop} from "../../gilded_rose.js";
import Sulfuras from "../sulfuras.js";

it.each`
    sellIn | expectedSellIn | quality | expectedQuality
    ${10}  | ${1}          | ${10}   | ${80}
    ${10}  | ${10}          | ${0}    | ${80}
    `('Sulfuras não altera o sellIn e nem o quality' +
    '\n\tsellIn: $sellIn -> $expectedSellIn ' +
    '\n\tquality: $quality -> $expectedQuality',
    ({sellIn, expectedSellIn, quality, expectedQuality}) => {
        const sulfuras = Sulfuras.create(sellIn, quality);

        new Shop([sulfuras]).updateQuality();

        expect(sulfuras.sellIn).toEqualWithMessage(expectedSellIn, "SellIn");
        expect(sulfuras.quality).toEqualWithMessage(expectedQuality, "Quality");
    });