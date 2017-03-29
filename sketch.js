function setup() {
	createCanvas(600, 400);
	p1 = new Pacman(300, 200);
}

function draw() {
	background(0);
	p1.display();
	p1.move();
	p1.boundary();
}

function Pacman(x, y) {
	this.x = x;
	this.y = y;
	this.radB = 30;
	this.radT = 305;
	this.rotation = 0;
	this.display = function() {
		fill(255, 255, 0);
		//ellipse(this.x, this.y, 40, 40);
		arc(this.x, this.y, 40, 40, radians(this.radB + this.rotation), radians(this.radT + this.rotation), PIE);
	};
	this.move = function() {
		if (keyIsDown(UP_ARROW)) {
			this.y = this.y -= 5;
		}
		if (keyIsDown(DOWN_ARROW)) {
			this.y = this.y += 5;
		}
		if (keyIsDown(RIGHT_ARROW)) {
			this.x = this.x += 5;
		}
		if (keyIsDown(LEFT_ARROW)) {
			this.x = this.x -= 5;
		}
	};
	this.boundary = function() {
		if (this.x > width) {
			this.x = 0;
		}
		if (this.x < 0) {
			this.x = width;
		}
		if (this.y > height) {
			this.y = 0;
		}
		if (this.y < 0) {
			this.y = height;
		}
	}
}