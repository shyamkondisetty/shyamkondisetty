try{    
    let deckofcardsutil=require('../objectOrientedPrograms/utility/deckOfCardsutil');
    let totalCards=deckofcardsutil.totalCards2D();
    let finalCards=deckofcardsutil.distributeCards(totalCards);
    let finalCardsSort=deckofcardsutil.sortByRank(finalCards);
    let playersQueue=deckofcardsutil.addingPlayerCardsToList(finalCardsSort);
    
    while(!playersQueue.isEmpty()){
        let personqueue=playersQueue.dequeue();
        console.log(personqueue.printQueue());
    }
}
catch(err){
    console.log(err);
}

