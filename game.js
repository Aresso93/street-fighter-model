class Game{

    constructor(title, releaseDate){

        this.title = title;
        this.releaseDate = releaseDate;

    }


    toStringTitle(){

        return 'Titolo: ' + this.title + '\n';

    }

    toStringReleaseDate(){
        return 'Data di rilascio principale: ' + this.releaseDate + '\n';
    }


}