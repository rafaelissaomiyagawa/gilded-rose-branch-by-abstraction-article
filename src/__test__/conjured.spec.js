import {it} from '@jest/globals';

it.each`
    sellIn | expectedSellIn | quality | expectedQuality
    ${10}  | ${9}           | ${10}   | ${8}
    ${1}   | ${0}           | ${8}    | ${0}
    `('Item Conjurado diminui a qualidade duas vezes mais rápido',
    ({sellIn, expectedSellIn, quality, expectedQuality}) => {
    });