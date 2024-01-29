window.addEventListener("DOMContentLoaded", (event) => {
  const topBarArea = document.getElementById("topContainer");
  const topContainerFrame = new Frame({
    scaling: "topContainer",
    width: topBarArea.clientWidth,
    height: topBarArea.clientHeight,
    color: grey,
    outerColor: purple,
    ready: topFrame,
  });

  const customizerArea = document.getElementById("customizer");
  const customizerFrame = new Frame({
    scaling: "customizer",
    width: customizerArea.clientWidth,
    height: customizerArea.clientHeight,
    color: green,
    outerColor: blue,
    ready: customFrame,
  });

  const cardDisplayArea = document.getElementById("cardDisplay");
  const cardDisplay = new Frame({
    scaling: "cardDisplay",
    width: cardDisplayArea.clientWidth,
    height: cardDisplayArea.clientHeight,
    color: red,
    outerColor: yellow,
    assets: ["game1.png"],
    ready: cardFrame,
  });

  function topFrame() {
    zog("ready from ZIM Frame1");

    let cardContainer = createCardContainer("game1.png", cardDisplay.stage);
    //cardContainer.pos(cardDisplay.width / 2, cardDisplay.height / 2, CENTER);
  }

  function customFrame(F2, S2, W2, H2) {
    zog("ready from ZIM Frame2");

    let cardContainer = createCardContainer("game1.png", cardDisplay.stage);
    //cardContainer.pos(cardDisplay.width / 2, cardDisplay.height / 2, CENTER);
  }

  function cardFrame(F3, S3, W3, H3) {
    zog("ready from ZIM Frame3");

    let cardContainer = createCardContainer("game1.png", cardDisplay.stage);
    //cardContainer.pos(cardDisplay.width / 2, cardDisplay.height / 2, CENTER);
  }
});

function createCardContainer(file, stage) {
  const container = new Pic({ file }).center();

  // Add the container to the frame
  container.addTo(stage);

  return container;
}
