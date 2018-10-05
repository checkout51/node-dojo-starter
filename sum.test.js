/* jshint esversion: 6 */
const sum = require('./sum');
const {highCardWinner,findHardCard} = require('./highCardWinner');

let hand1 = [
        {
            "rank": 13,
            "suit": "D"
        },
        {
            "rank":12,
            "suit":"H"
        }
    ];

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('can find the highest card in a hand', () => {
    card1 = {
        "rank": 13,
        "suit": "D"
    };

    card2 = {
        "rank":12,
        "suit":"H"
    };

    expect(findHighCard([card1, card2])).toBe(0);
});

test('high card wins', () => {
    let hand1 = [
        {
            "rank": 13,
            "suit": "D"
        },
        {
            "rank":12,
            "suit":"H"
        }
    ];
    let hand2 = [
        {
            "rank": 4,
            "suit": "D"
        },
        {
            "rank":3,
            "suit":"C"
        }
    ];
    expect(
        highCardWinner(hand1, hand2)).toBe(0);
});
