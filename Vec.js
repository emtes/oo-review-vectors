class Vec {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	plus(vec){
		return new Vec(this.x + vec.x, this.y + vec.y)
	}

	minus(vec){
		return new Vec(this.x - vec.x, this.y - vec.y)
	}
  
	// see Pythagorean Theorem for distance formula,, from (0, 0)
	get length(){
		return Math.sqrt(this.x ** 2 + this.y ** 2)
	}

	static distance(coordsA, coordsB) {
		return Math.sqrt(
			(coordsB[0] - coordsA[0]) ** 2 +
			(coordsB[1] - coordsA[1]) ** 2
		)
	}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
console.log(Vec.distance([0, 0], [12, 5]));
