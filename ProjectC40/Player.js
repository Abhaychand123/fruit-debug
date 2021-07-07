class player {
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.score=0;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCountRef = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index
        database.ref (playerIndex).set({
            name:this.name,
            distance:this.distance,
            score:this.score
        });
    }

    static getPlayerInfo(){
        var PlayerInfoRef = database.ref('players');
        PlayerInfoRef.on("value",(data) => {
            allPlayers = data.val();
        })
    }

}