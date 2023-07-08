class Shelf{

    constructor(content = []){

        this.content = content;

    }


    addGame(game){
        this.content = push(game);
    }




    listByTitle(){

        this.content.sort(function(a, b){

            if (a.game < b.game) {
                return -1;
            }

            if (a.game > b.game) {
                return 1;
            }
            return 0;
        })
    }


}