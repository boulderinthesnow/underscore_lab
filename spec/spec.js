var downunder = require("../underscoreTDD.js")


describe("underscoreTest", function(){

	it("should give me true when I put in 100", function() {
		expect(downunder.average([0,100])).toEqual(50)
	})

})