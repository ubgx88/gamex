const games = [
    { name: "Slope", image: "image/slope.png", description: "Endless Runner", link: "/slope.html", category: "Arcade,Action" },
    { name: "3 Pandas In Japan", image: "image/3-pandas-in-japan.png", description: "developed by Flash Team", link: "/3-pandas-in-japan.html", category: "Adventure" },
    { name: "Retro Bowl", image: "image/retro-bowl.png", description: "Simulation Game", link: "/retro-bowl.html", category: "Sports" },
    { name: "Run 3", image: "image/run-3.png", description: "Coolmath Games classic", link: "/run-3.html", category: "Action" },
    { name: "Adam And Eve 7", image: "image/adam-and-eve-7.png", description: "adventure game", link: "/adam-and-eve-7.html", category: "Adventure" },
    { name: "Boxing Random", image: "image/boxing-random.png", description: "MultiPlayer", link: "/boxing-random.html", category: "Sports,Fighting" },
    { name: "3D Bowling", image: "image/3d-bowling.png", description: "bowling skills practice", link: "/3d-bowling.html", category: "Sports" },
    { name: "Cookie Clicker 2", image: "image/cookie-clicker-2.png", description: "Clicker Games", link: "/cookie-clicker-2.html", category: "Simulation" },
    { name: "Drive Mad", image: "image/drive-mad.png", description: "driving game", link: "/g-switch-4.html", category: "Racing,Sports" },
    { name: "G-Switch 4", image: "image/g-switch-4.png", description: "Action", link: "/g-switch-4.html", category: "Adventure,Sports" },
    { name: "Iron Snout", image: "image/iron-snout.png", description: "Fighting", link: "/iron-snout.html", category: "Adventure,Fighting" },
    { name: "Little Alchemy 2", image: "image/little-alchemy-2.png", description: "soccer game", link: "/little-alchemy-2.html", category: "Sports" },
    { name: "Mr Bullet", image: "image/mr-bullet.png", description: "Physics", link: "/mr-bullet.html", category: "Shooting,Action" },
    { name: "Vex 8", image: "image/vex-8.png", description: "Vex Stick Figure", link: "/vex-8.html", category: "Adventure,Action" },
    { name: "Papa Cherry Saga", image: "image/papa-cherry-saga.png", description: "Puzzle", link: "/papa-cherry-saga.html", category: "Puzzle" },
    { name: "Rooftop Snipers", image: "image/rooftop-snipers.png", description: "Puzzle", link: "/rooftop-snipers.html", category: "Action,Shooting" },
    { name: "Stick Merge 2", image: "image/stick-merge-2.png", description: "Action", link: "/stick-merge-2.html", category: "Action,Shooting" },
    { name: "Rusher Crusher", image: "image/rusher-crusher.png", description: "Action Driving", link: "/rusher-crusher.html", category: "Action" },
    { name: "Tag Unblocked", image: "image/tag.png", description: "Multiplayer Tag Game", link: "/tag-unblocked.html", category: "Action" },
    { name: "Ball Sort Halloween", image: "image/ball-sort-halloween.png", description: "", link: "/ball-sort-halloween.html", category: "Strategy,Puzzle" },
    { name: "Subway Surfers", image: "image/subway-surfers.png", description: "Endless Runner", link: "/subway-surfers.html", category: "Action,Arcade,Adventure" },
    { name: "Super Mario", image: "image/super-mario-wonder.png", description: "Platform, Action, Adventure", link: "/super-mario-wonder.html", category: "Arcade,Adventure" },
    { name: "Blumgi Slime", image: "image/blumgi-slime.png", description: "physics game", link: "/blumgi-slime.html", category: "Adventure,Puzzle" },
    { name: "Bouncy Woods", image: "image/bouncy-woods.png", description: "physics game", link: "/bouncy-woods.html", category: "Adventure,Puzzle" },
    { name: "Chicken Merge", image: "image/chicken-merge.png", description: "physics game", link: "/chicken-merge.html", category: "Action,Strategy" },
    { name: "Crazy Cars", image: "image/crazy-cars.png", description: "Car Games", link: "/crazy-cars.html", category: "Action,Sports,Arcade" },
    { name: "Fruit Ninja", image: "image/fruit-ninja.png", description: "Fruit Games", link: "/fruit-ninja.html", category: "Action,Puzzle,Arcade" },
    { name: "Hanger", image: "image/hanger.png", description: "Adventure", link: "/hanger.html", category: "Action,Adventure,Arcade" },
    { name: "Head Soccer 2023", image: "image/head-soccer-2023.png", description: "soccer games", link: "/head-soccer-2023.html", category: "Sports,Strategy,Arcade" },
    { name: "Infinite Soccer", image: "image/infinite-soccer.png", description: "soccer games", link: "/infinite-soccer.html", category: "Sports,Strategy,Arcade" },
    { name: "Marbles Sorting", image: "image/marbles-sorting.png", description: "Adventure", link: "/marbles-sorting.html", category: "Action,Shooting,Arcade" },
    { name: "Monkey Mart", image: "image/monkey-mart.png", description: "Adventure", link: "/monkey-mart.html", category: "Adventure,Shooting,Arcade" },
    { name: "Pou", image: "image/pou.png", description: "Arcade", link: "/pou.html", category: "Adventure,Arcade" },
];

/*createGameCard*/

function createGameCard(game) {
    return `
        <div class="game-card">
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <a href="${game.link}" class="play-button">Play</a>
            </div>
        </div>
    `;
}

/*renderGames*/

function renderGames() {
    const gameGrid = document.getElementById('gameGrid');
    if (!gameGrid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
        categoryTitle.textContent = category || 'All Games';
    }

    const filteredGames = category
        ? games.filter(game => game.category.split(',').includes(category))
        : games;

    gameGrid.innerHTML = filteredGames.map(createGameCard).join('');
}

function renderOtherGames() {
    const otherGamesList = document.getElementById('otherGamesList');
    if (!otherGamesList) return;

    const shuffledGames = games.sort(() => 0.5 - Math.random());
    const otherGames = shuffledGames.slice(0, 4);
    otherGamesList.innerHTML = otherGames.map(createGameCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    renderOtherGames();
});