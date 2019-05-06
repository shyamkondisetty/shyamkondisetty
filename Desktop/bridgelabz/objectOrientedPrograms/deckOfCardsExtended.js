/********************************************************************************
 *  @Purpose        : To Print the deck of cards distributed to 4 players.     
 *  @file           : deckOfCards.js
 *  @overview       : distribute the pack of cards to 4 palyers by 9 cards each
 *                    and the maintain the cards in queue by sorting order
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
     * 
     * @description: we call the method totalCards2D to distribute the cards 
     */
    let totalCards=deckofcardsutil.totalCards2D();
    let finalCards=deckofcardsutil.distributeCards(totalCards);
     /***
     * @param  {*} finalCards
     * @description : this method is used to display the cards that are distributed
     * @returns : 2D array of distributed cards
     */
    let finalCardsSort=deckofcardsutil.sortByRank(finalCards);
    /***
     * @param {*} finalCardsSort
     * @description : we add the cards of each person to each queue
     * @returns : returns the queue of all pleyers in one queue
     */
    let playersQueue=deckofcardsutil.addingPlayerCardsToList(finalCardsSort);
    
    while(!playersQueue.isEmpty()){
        let personqueue=playersQueue.dequeue();
        console.log(personqueue.printQueue());
    }
}
catch(err){
    console.log(err);
}

