/* jshint esversion: 6 */
function highCardWinner(hand1,hand2) {
  var hand1HighCard = findHardCard(hand1);
  var hand2HighCard = findHardCard(hand2);

  return 0;
}

function findHighCard(hand) {
    let highCard = {
        'rank': 0,
        'suit': null
    };

    for (const card of hand) {
        if (card.rank > highCard.rank) {
            highCard = card;
        }
    }

    return highCard;
}
module.exports = {highCardWinner, findHardCard};

