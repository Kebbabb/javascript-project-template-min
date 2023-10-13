function setup () {
  createCanvas(windowWidth, windowHeight)
}

function draw () {
  background(255, 255, 255)
  fill(150, 200, 255)
  rect(0, 100, windowWidth, windowHeight)
  fill(0, 0, 0)
  rect(0, 70, windowWidth, 1)
  fill(255)
  rect(width / 2 - 200, 350, 400, 60, 10)
  fill(0)
  textSize(27)
  text('Bruger', width / 2 - 190, 390)

  fill(255)
  rect(width / 2 - 200, 420, 400, 60, 10)
  fill(0)
  textSize(27)
  text('Adgangskode', width / 2 - 190, 460)
  fill(255)
  rect(width / 2 - 80, 500, 150, 40, 10)
  fill(0)
  textSize(23)
  text('Login', width / 2 - 70, 530)
  fill(0)
  textAlign(1, 100)
  textSize(32)
  text('Navn på company', 10, 50)
  textAlign(1, 100)
  textSize(17)
  text('lav ny konto', windowWidth - 150, 90)
}

export { setup, draw }
