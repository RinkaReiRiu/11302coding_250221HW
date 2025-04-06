let circles = []; // List of circle objects

function setup() {
  createCanvas(windowWidth,windowHeight); // make a full-screen canva

  // Initialize circles with random positions, sizes, and velocities
  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
      vx: random(-3, 3),
      vy: random(-3, 3)
    });
  }
}

function draw() {
  background(220);
/*
  // Draw a simple pattern using lines
  stroke(0); // Set line color to black
  strokeWeight(2); // Set line thickness

  // Draw a grid pattern
  for (let x = 0; x <= width; x += 50) {
    line(x, 0, x, height); // Vertical lines
  }

  for (let y = 0; y <= height; y += 50) {
    line(0, y, width, y); // Horizontal lines
  }

  // Draw a diagonal cross pattern
  line(0, 0, width, height); // Diagonal from top-left to bottom-right
  line(width, 0, 0, height); // Diagonal from top-right to bottom-left
*/
/*
  // Define a list of points
  let points = [
    { x: 100, y: 100 },
    { x: 200, y: 50 },
    { x: 300, y: 100 },
    { x: 350, y: 200 },
    { x: 300, y: 300 },
    { x: 200, y: 350 },
    { x: 100, y: 300 },
    { x: 50, y: 200 }
  ];

  // Draw lines connecting the points
  stroke(0); // Set line color to black
  strokeWeight(2); // Set line thickness

  for (let i = 0; i < points.length; i++) {
    let nextIndex = (i + 1) % points.length; // Get the next point index, wrapping around to the start
    line(points[i].x, points[i].y, points[nextIndex].x, points[nextIndex].y);
  }
*/
  // Update and draw each circle
  for (let circle of circles) {
    // Update position
    circle.x += circle.vx;
    circle.y += circle.vy;

    // Check for collision with edges and reverse velocity if needed
    if (circle.x - circle.size / 2 < 0 || circle.x + circle.size / 2 > width) {
      circle.vx *= -1;
    }
    if (circle.y - circle.size / 2 < 0 || circle.y + circle.size / 2 > height) {
      circle.vy *= -1;
    }

    // Draw the circle
    ellipse(circle.x, circle.y, circle.size);
  }
}
