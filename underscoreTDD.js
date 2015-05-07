
module.exports = {

		 average: function(array){
			combined = 0
			for (i = 0 ; i < array.length ; i++) {
				combined += array[i]
			}
			return (combined / array.length)
		},

	//console.log (average([2,6]))

	 contains: function(array, element){
		for (i = 0 ; i < array.length ; i++)
			if (array[i] === element) {
				return true
			}

		},
	///
	//console.log (contains([1,2,3],3))

	 first: function(array) {
		return (array[0])
	},
	//console.log(first([1,2,3,4,5]))

	 last: function(array) {
		return (array[array.length-1])
	},
	//console.log(last([1,2,3,4,5]))

	max: function(array){
		largest = array[0]
		for (i = 1 ; i < array.length; i++)
			if (array[i] > largest) {
				largest = array [i]
			}
			return largest
		},

	//console.log(max([1,2,17,4,5]))

	 min: function(array){
		smallest = array[0];
		for (i = 1 ; i < array.length; i++)
			if (array[i] < smallest) {
				smallest = array[i];
			}
			return smallest;
		},

	// console.log(min([1,2,17,4,5]));

	 shuffle: function(array) {
		for (i = 0 ; i < array.length - 1 ; i++) {
	//		console.log (i, array.length - 1);
	//		console.log (array);
	var random = Math.floor((Math.random()*array.length - 1) + 1 );
	var temp = array[i];
	array[i] = array[random];
	array[random] = temp;
	}
	return array;
	},
	// console.log (shuffle([1,2,3,4,5,6,7]));

	 sample: function(array, size) {
		if (size === undefined) {
			size = 1;
		}

		var newArr = [];
		for (i = 0 ; newArr.length < size ; i++) {
			var random = Math.floor((Math.random()*array.length - 1) + 1 );
			
			var dup = false;
			for (r = 0 ; r < newArr.length ; r++) {
				if (newArr[r] === array[random]) {
					dup = true;
				}
			}
			if (dup !== true) {
				newArr.push(array[random]);
			}
		}
		return newArr;

	},
	// console.log (sample([1,2,3,4,5,6,7], 5));

	 difference: function(array1, array2) {
		var diff = [];
		for (i = 0 ; i < array1.length ; i++) {
			var duplicate = false;
			for (q = 0 ; q < array2.length ; q++) {
				if ((array1[i]) === array2[q]) {
					duplicate = true;
				}

			}
			if (duplicate === false) {
				diff.push (array1[i]);
			}
		}
		return diff;
	}
}
	//console.log(difference([1, 2, 3, 4, 5], [5, 2, 10]));

	var indexOf = function(array, element) {
		for (i = 0 ; i < array.length ; i++) {
			if (array[i] === element) {
				return [i]
			}
		}
		return (-1)
	};
	//console.log (indexOf([1,2,3], 2));

	var pluck = function (list, name) {
		arr = [];
		for (i = 0 ; i < list.length ; i++) {
			arr.push(list[i].name);
		}
		return (arr);

	};

	var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	//console.log(pluck(stooges, 'name'));

	//******************************
	// lab part II
	//******************************
	var each = function(arr, func) {
		for (item in arr) {
		//	console.log(item)
		func(arr[item]);
	}
	}

	//each([1,2,3], console.log)

	var compact = function(arr){
		var newArr = [];
		for (x in arr){
			if (arr[x] != undefined) {
				newArr.push(arr[x])
			}
		}
		return (newArr)
	}

	// console.log(compact([1, "hello", undefined, 3, undefined]))

	var mapArray = function(arr, func){
		var newArr = [];
		for (x in arr) {
			newArr.push(func(arr[x]))
		}
		return newArr;
	}

	var finished = mapArray(["cats", "before", "dogs"], function(num) {return num.toUpperCase(); })
	//console.log(finished)

	var filter = function(arr, func) {
		var newArr = []
		for (item in arr) {
			if (func(arr[item]) === true) {
	//			console.log (func(arr[item]))
	//			console.log (arr, "arr", item, "item")
	newArr.push(arr[item]);
	//			console.log(newArr, "newArr")
			}
		}
	return newArr
	}




//console.log (filter([1,2,3,4,5,6],function(num){ return num % 2 == 0; }))






