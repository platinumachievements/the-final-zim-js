window.addEventListener("DOMContentLoaded", (event) => {
  const page = document.getElementById("pageContainer");
  const fullPageFrame = new Frame({
    scaling: FILL,
    width: 1024,
    height: 768,
    color: grey,
    outerColor: purple,
    ready: pageFrame,
  });

  function pageFrame() {
    zog("ready from pageFrame");
    fetchGame();

    //-------------Container Setup------------------------------------>

    const customContainer = new Container(400, 768)
      .addTo()
      .pos({ horizontal: LEFT, vertical: TOP })
      .outline();

    const cardContainer = new Container(400, 768)
      .addTo()
      .pos({ horizontal: CENTER, vertical: TOP })
      .outline();

    const displayContainer = new Container(400, 768)
      .addTo()
      .pos({ horizontal: RIGHT, vertical: TOP })
      .outline();

    const cardHolder = new Container(822, 1122)
      .addTo()
      .sca(0.5)
      .centerReg({ container: cardContainer })
      .outline();

    //---------------End of Containers---------------------------------->

    //------------------Functions------------------------------------>
    let gameData = [];

    function fetchGame() {
      return fetch("games.json")
        .then((response) => response.json())
        .then((data) => {
          gameData = data;
          zog(gameData);
          createGameElements(gameData[0]);
        })
        .catch((error) => {
          console.error("Error loading JSON:", error);
          throw error;
        });
    }

    function createGameElements(game) {
      const backgroundImage = new Pic(game.imageUrl).addTo(cardHolder);
      const templateImage = new Pic("template.png").addTo(cardHolder);
      const gameTitle = new Label({
        text: game.gameTitle,
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
        text: game.trophyName,
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

      let text1 = new Label({
        text: "Username isffff",
        size: 25,
        color: white,
        align: CENTER,
        valign: CENTER,
        labelWidth: 190,
        labelHeight: 35,
        maxSize: 25,
      })
        .addTo(cardHolder)
        .centerReg()
        .loc({ x: 290, y: 750 })
        .outline();

      let text2 = new Label({
        text: "Date",
        size: 25,
        color: white,
        align: CENTER,
        valign: CENTER,
        labelWidth: 190,
        labelHeight: 35,
        maxSize: 25,
      })
        .addTo(cardHolder)
        .centerReg()
        .loc({ x: 290, y: 800 })
        .outline();

      let text3 = new Label({
        text: "Rarity",
        size: 25,
        color: white,
        align: CENTER,
        valign: CENTER,
        labelWidth: 190,
        labelHeight: 35,
        maxSize: 25,
      })
        .addTo(cardHolder)
        .centerReg()
        .loc({ x: 290, y: 850 })
        .outline();

      let text4 = new Label({
        text: "user1",
        size: 25,
        color: white,
        align: CENTER,
        valign: CENTER,
        labelWidth: 220,
        labelHeight: 35,
        maxSize: 25,
      })
        .addTo(cardHolder)
        .centerReg()
        .loc({ x: 520, y: 750 })
        .outline();

      let text5 = new Label({
        text: "10 oct 2023",
        size: 25,
        color: white,
        align: CENTER,
        valign: CENTER,
        labelWidth: 220,
        labelHeight: 35,
        maxSize: 25,
      })
        .addTo(cardHolder)
        .centerReg()
        .loc({ x: 520, y: 800 })
        .outline();

      let text6 = new Label({
        text: "rare",
        size: 25,
        color: white,
        align: CENTER,
        valign: CENTER,
        labelWidth: 220,
        labelHeight: 35,
        maxSize: 25,
      })
        .addTo(cardHolder)
        .centerReg()
        .loc({ x: 520, y: 850 })
        .outline();
    }

    //------------------End of Functions------------------------------------>

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
