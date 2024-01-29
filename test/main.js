import zim from "https://zimjs.org/cdn/016/zim";

// Initialization
new Frame(FIT, 780, 1065, white, dark, ready)

function ready() {
  zog("ready from ZIM Frame");
  let gameIndex = 0;
  let gameContainer = new Container().addTo(stage);

  setInterval(() => {
    gameContainer.removeAllChildren(); // Clear previous game elements
    fetchGame(gameIndex++, gameContainer); // Fetch and display new game
  }, 1000);
});

function fetchGame(index, container) {
  fetch("games.json")
    .then((response) => response.json())
    .then((data) => {
      if (index < data.games.length) {
        container.addChild(createGameElements(data.games[index]));
      }
    })
    .catch((error) => console.error("Error loading JSON:", error));
}

function createGameElements(game) {
  let gameElements = new Container();

  // Adding images and labels to game elements
  gameElements.addChild(createImage(game.imageUrl, 780, 1065));
  gameElements.addChild(createImage("./images/PS4 Template V2.png", 780, 1065));
  gameElements.addChild(
    createLabel(game.gameTitle, 460, 185, 455, 80, 100, 70)
  );
  gameElements.addChild(
    createLabel(game.trophyName, 380, 928, 360, 60, 100, 60)
  );
  gameElements.addChild(
    createInfoContainers(game.date, game.username, game.rarity)
  );

  return gameElements;
}

function createImage(file, width, height) {
  return new Pic({ file, width, height }).centerReg();
}

function createLabel(text, x, y, width, height, size, maxSize) {
  return new Label({
    text,
    size,
    color: white,
    labelWidth: width,
    labelHeight: height,
    maxSize,
    align: CENTER,
    valign: CENTER,
  }).loc(x, y);
}

function createInfoContainers(date, username, rarity) {
  const myColor = "rgba(211, 211, 211, 0.1)";
  return new Container().add([
    createInfo(290, 750, "Date", 190, 35, myColor),
    createInfo(290, 800, "Username", 190, 35, myColor),
    createInfo(290, 850, "Rarity", 190, 35, myColor),
    createInfo(520, 750, date, 220, 35, myColor),
    createInfo(520, 800, username, 220, 35, myColor),
    createInfo(520, 850, rarity, 220, 35, myColor),
  ]);
}

function createInfo(x, y, text, width, height, color) {
  let rectangle = new Rectangle({ width, height, color, corner: [50, 20] })
    .centerReg()
    .loc(x, y);
  let label = new Label({
    text,
    size: 25,
    color: white,
    align: CENTER,
    valign: CENTER,
    labelWidth: width,
    labelHeight: height,
    maxSize: 25,
  }).centerReg(rectangle);
  rectangle.addChild(label);
  return rectangle;
}
