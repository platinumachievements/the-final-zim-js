window.addEventListener("DOMContentLoaded", (event) => {
  const page = document.getElementById("pageContainer");
  const fullPageFrame = new Frame({
    scaling: FIT,
    width: 1024,
    height: 768,
    color: grey,
    outerColor: purple,
    ready: pageFrame,
  });

  function pageFrame() {
    zog("ready from pageFrame");
    fetchGame();
    //-------------initialisation------------------------------------>

    //let gameData = [];

    //-------------Container Setup------------------------------------>

    const customContainer = new Container(400, 768)
      .addTo()
      //.mov(100, 100)
      .pos({ horizontal: LEFT, vertical: TOP })
      //.centerReg()
      .outline();

    const cardContainer = new Container(400, 768)
      .addTo()
      //.mov(100, 100)
      .pos({ horizontal: CENTER, vertical: TOP })
      //.centerReg()
      .outline();

    const displayContainer = new Container(400, 768)
      .addTo()
      //.mov(100, 100)
      .pos({ horizontal: RIGHT, vertical: TOP })
      //.centerReg()
      .outline();

    const cardHolder = new Container(822, 1122)
      .addTo()
      .sca(0.5)
      //.mov(100, 100)
      .centerReg({ container: cardContainer })
      //.centerReg()
      .outline();

    //---------------End of Containers---------------------------------->

    //------------------Functions------------------------------------>
    let gameData = [];

    function fetchGame() {
      return fetch("games.json")
        .then((response) => response.json())
        .then((data) => {
          gameData = data;
          createContent();
        })
        .catch((error) => {
          console.error("Error loading JSON:", error);
          throw error;
        });
    }

    function createContent() {
      // Check if gameData is an array and has elements
      if (!Array.isArray(gameData.games) || gameData.games.length === 0) {
        console.error("No game data available or data is not an array");
        return;
      }

      console.log("Creating game elements");
      console.log("Number of games:", gameData.games.length);
    }

    //------------------End of Functions------------------------------------>

    const backgroundImage = new Pic(gameData.games.imageUrl).addTo(cardHolder);
    const templateImage = new Pic("template.png").addTo(cardHolder);
    const gameTitle = new Label({
      text: gameData.games.gameTitle,
      size: 70,
      color: white,
      labelWidth: 455,
      labelHeight: 80,
      maxSize: 100,
      align: CENTER,
      valign: CENTER,
    })
      .addTo(cardHolder)
      .centerReg()
      .loc({ x: 460, y: 185 })
      .outline();

    const trophyName = new Label({
      text: gameData.games.trophyName,
      size: 100,
      color: white,
      labelWidth: 360,
      labelHeight: 60,
      maxSize: 60,
      align: CENTER,
      valign: CENTER,
    })
      .addTo(cardHolder)
      .centerReg()
      .loc({ x: 380, y: 928 })
      .outline();

    const grid = new Grid(cardHolder);

    const circle = new Circle(50, red)
      .center({ container: customContainer })
      .drag({ boundary: customContainer });

    const circle1 = new Circle(50, blue)
      .center({ container: cardContainer })
      .drag({ boundary: cardContainer });

    const circle2 = new Circle(50, green)
      .center({ container: displayContainer })
      .drag({ boundary: displayContainer });

    S.update();
  }
});
