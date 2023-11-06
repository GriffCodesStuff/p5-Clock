let clock;

function setup() {
  createCanvas(600, 600);
  clock = new Clockface();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  clock.showTime();
}

class Clockface {
  constructor(bg = "white", fg = "black") {
    this.bgcolor = bg;
    this.fgcolor = fg;
  }

  showTime() {
    angleMode(DEGREES);
    noFill();
    stroke(this.fgcolor);
    ellipse(0, 0, 400, 400);

    this.drawHand(second() * 6, 180, 2);
    this.drawHand(minute() * 6, 150, 4);
    this.drawHand((hour() % 12) * 30, 100, 4);

    this.drawNumbers();
  }

  drawHand(rotation, length, weight) {
    strokeWeight(weight);
    push();
    rotate(rotation);
    line(0, 0, 0, -length);
    pop();
  }

  drawNumbers() {
    let clockRadius = 180;
    
    for (let i = 1; i <= 12; i++) {
      fill(this.fgcolor);
      textSize(24);
      text(
        i,
        map(cos(i * 30 - 90), -1, 1, -clockRadius + 10, clockRadius - 20),
        map(sin(i * 30 - 90), -1, 1, -clockRadius + 30, clockRadius - 20)
      );
    }
  }
}
