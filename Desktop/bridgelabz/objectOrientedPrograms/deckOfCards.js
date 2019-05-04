/********************************************************************************
 *  @Purpose        : To Print the deck of cards distributed to 4 players.     
 *  @file           : deckOfCards.js
 *  @overview       : distribute the pack of cards to 4 palyers by 9 cards each
 *  @author         : SHYAM K
 *  @version        : v2.2
 *  @since          : 3/4/2019
 ********************************************************************************/


try{
    let deckofcardsutil=require('../objectOrientedPrograms/utility/deckOfCardsutil');
    let totalCards=deckofcardsutil.totalCards2D();
    let finalCards=deckofcardsutil.distributeCards(totalCards);
    deckofcardsutil.displayDistributedCards(finalCards);
}
catch(err){
    console.log(err);
}
