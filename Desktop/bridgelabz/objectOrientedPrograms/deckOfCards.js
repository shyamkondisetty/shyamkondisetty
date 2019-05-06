/********************************************************************************
 *  @Purpose        : To Print the deck of cards distributed to 4 players.     
 *  @file           : deckOfCards.js
 *  @overview       : distribute the pack of cards to 4 palyers by 9 cards each
 *  @author         : SHYAM K
 *  @version        : v2.2
 *  @since          : 3/4/2019
 ********************************************************************************/


try{
    /***
     * @description : it creates an object of deckof cards class 
     */
    let deckofcards=require('../objectOrientedPrograms/utility/deckOfCardsutil');
    let deckofcardsutil=new deckofcards();
    /***
     * @description: we call the method totalCards2D to distribute the cards 
     */
    let totalCards=deckofcardsutil.totalCards2D();
    let finalCards=deckofcardsutil.distributeCards(totalCards);
    /***
     * @param  {*} finalCards
     * @description : this method is used to display the cards that are distributed
     * @returns : 2D array of distributed cards
     */
    deckofcardsutil.displayDistributedCards(finalCards);
}
catch(err){
    console.log(err);
}
