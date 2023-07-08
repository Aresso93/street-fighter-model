const game1 = new Game('Smash Bros Ultimate', new Date(2018, 11, 7));
 
const game2 = new Game('Soulcalibur VI', new Date(2018, 9, 19));
 
const game3 = new Game('Guilty Gear Strive', new Date(2021, 5, 11));

const game4 = new Game('Mortal Kombat 11', new Date(2019, 3, 23));

const game5 = new Game('Tekken 7', new Date(2015, 1, 18));

const game6 = new Game('Street Fighter 6', new Date(2023, 5, 2));


const shelf1 = new Shelf([game1, game2, game3, game4, game5, game6]);

console.log(shelf1);

function renderPage(){

    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    for (let i = 0; i < shelf1.content.length; i++) {
        const h3Element = document.createElement('h3');
        const node = document.createTextNode('Scheda del gioco: ')
        h3Element.appendChild(node);
        mainContainer.appendChild(h3Element);
    

    const game = shelf1.content[i];

    const divElement = document.createElement('div');
    divElement.classList.add('game-div');
    const spanTitle = document.createElement('span');
    const textNodeTitle = document.createTextNode(game.toStringTitle());
    spanTitle.appendChild(textNodeTitle);
    divElement.appendChild(spanTitle);
    const spanReleaseDate = document.createElement('span');
    const textNodeReleaseDate = document.createTextNode(game.toStringReleaseDate());
    spanReleaseDate.appendChild(textNodeReleaseDate);
    divElement.appendChild(spanReleaseDate);
    mainContainer.appendChild(divElement);
    }


}

renderPage();