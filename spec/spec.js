var downunder = require("../underscoreTDD.js")


describe("underscoreTest", function(){

	it("should give me true when I put in 100", function() {
		expect(downunder.average([0,100])).toEqual(50)
	}),

	it("should return true when I put in 67 and 67 is in an array", function() {
		expect(downunder.contains([0,100,3,45,67,43,67,8,8],67)).toEqual(true)
	}),
	it("should give me false if arr[0] is 34 and input is 35", function() {
		expect(downunder.first([34,100])).toEqual(34)
	}),

	it("should return largest in array -- 512", function() {
		expect(downunder.max([0,100,34,512,5])).toEqual(512)
	}),

	it("should return smalles in array", function() {
		expect(downunder.min([0,100,3,52,5,-23])).toEqual(-23)
	}),

	it("should return 1", function() {
		expect(downunder.shuffle([1])).toEqual([1])
	}),
	it("example sample toContain ", function() {
		expect(downunder.sample([0])).toEqual([0])
	}),

	it("", function() {
		expect(downunder.difference([2,34,52,30,100],[2,34,52,30])).toEqual([100])
	})
})