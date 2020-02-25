import math
class Vec:
	def __init__(self, x, y):
		self.x = x
		self.y = y

	def __repr__(self):
		return f"Vec x: {self.x}, y: {self.y}"

	def plus(self, vec):
		return Vec(self.x + vec.x, self.y + vec.y)

	def minus(self, vec):
		return Vec(self.x - vec.x, self.y - vec.y)

	@property
	def length(self):
		return math.sqrt(self.x ** 2 + self.y ** 2)

	@staticmethod
	def distance(coordsA, coordsB):
		return math.sqrt(
			(coordsB[0] - coordsA[0]) ** 2 +
			(coordsB[1] - coordsA[1]) ** 2
		)

print(Vec(1, 2).plus(Vec(2, 3)))
print(Vec(1, 2).minus(Vec(2, 3)))
print(Vec(3, 4).length)
print(Vec.distance([0, 0], [12, 5]))
