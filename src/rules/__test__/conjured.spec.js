import {expect, it} from '@jest/globals';
import {Shop} from "../../gilded_rose.js";
import Conjured from "../conjured.js";

it.each`
    sellIn | expectedSellIn | quality | expectedQuality
    ${10}  | ${9}           | ${10}   | ${8}
    ${1}   | ${0}           | ${8}    | ${6} 
    `('Item Conjurado diminui a qualidade duas vezes mais rápido: ' +
    '\n\tsellIn: $sellIn -> $expectedSellIn ' +
    '\n\tquality: $quality -> $expectedQuality',
    ({sellIn, expectedSellIn, quality, expectedQuality}) => {
        const conjured = Conjured.create(sellIn, quality);

        new Shop([conjured]).updateQuality()

        expect(conjured.sellIn).toEqualWithMessage(expectedSellIn, "SellIn");
        expect(conjured.quality).toEqualWithMessage(expectedQuality, "Quality");
    });


it.each`
    sellIn | expectedSellIn | quality | expectedQuality
    ${0}   | ${-1}           | ${10}   | ${6}
    ${-1}  | ${-2}           | ${4}   | ${0}
    `('Item Conjurado quando sellIn for menor ou igual a zero, diminui 4 vezes mais rápido: ' +
    '\n\tsellIn: $sellIn -> $expectedSellIn ' +
    '\n\tquality: $quality -> $expectedQuality',
    ({sellIn, expectedSellIn, quality, expectedQuality}) => {
        const conjured = Conjured.create(sellIn, quality);

        new Shop([conjured]).updateQuality()

        expect(conjured.sellIn).toEqualWithMessage(expectedSellIn, "SellIn");
        expect(conjured.quality).toEqualWithMessage(expectedQuality, "Quality");
    });

it.each`
    sellIn | expectedSellIn | quality | expectedQuality
    ${1}   | ${0}           | ${1}   | ${0}
    ${-1}  | ${-2}          | ${3}   | ${0}
    ${1}   | ${0}           | ${0}   | ${0}
    ${-1}  | ${-2}          | ${0}   | ${0}
    `('Item Conjurado não pode ter qualidade negativa' +
    '\n\tsellIn: $sellIn -> $expectedSellIn ' +
    '\n\tquality: $quality -> $expectedQuality',
    ({sellIn, expectedSellIn, quality, expectedQuality}) => {
        const conjured = Conjured.create(sellIn, quality);

        new Shop([conjured]).updateQuality()

        expect(conjured.sellIn).toEqualWithMessage(expectedSellIn, "SellIn");
        expect(conjured.quality).toEqualWithMessage(expectedQuality, "Quality");
    });