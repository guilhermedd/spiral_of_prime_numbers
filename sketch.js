let x, y;
let size = 24;
let go = 0;
let help = 1;
let turn = false;
let now = 1;
let curve = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	x = windowWidth / 2;
	y = windowHeight / 2;
	background(random(255), random(255), random(255));
}

function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i == 0 || n == 1) {
			return false;
		}
	}
	return true;
}

function mousePressed() {
	draw();
}

function draw() {

	switch ((curve) % 4) {
		case 0:
			x += size;
			break;
		case 1:
			y -= size;
			break;
		case 2:
			x -= size;
			break;
		case 3:
			y += size;
			break;
	}

	if (go < help) {
		go++;
	} else if (go == help) {
		curve++;
		go = 1;
		if (turn) {
			help++;
			turn = false;
		} else {
			turn = true;
		}
	}
	if (isPrime(now)) {
		fill(0, 200, 100);
	} else {
		fill(0);
	}
	noStroke();
	square(x, y, size);
	now++;
	frameRate(5);
}
