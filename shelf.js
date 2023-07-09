class Shelf{

    constructor(content = []){

        this.content = content;

    }


    addGame(game){
        this.content = push(game);
    }




    // listByTitle(){

    //     this.content.sort(function(a, b){

    //         if (a.game < b.game) {
    //             return -1;
    //         }

    //         if (a.game > b.game) {
    //             return 1;
    //         }
    //         return 0;
    //     })
    // }

    listByTitle() {
        this.content.sort(function(a, b) {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
      
          if (titleA < titleB) {
            return -1;
          }
      
          if (titleA > titleB) {
            return 1;
          }
      
          return 0;
        });
      }
      
      listByReleaseDate() {
        this.content.sort(function(a, b) {
      
          if (a.releaseDate < b.releaseDate) {
            return -1;
          }
      
          if (a.releaseDate > b.releaseDate) {
            return 1;
          }
      
          return 0;
        });
      }
    

}