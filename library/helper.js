const helper = {
	findObject : function(arrayData, find, value){
	  var local_index = arrayData.findIndex(x => x[find] == value);
	  return arrayData[local_index];
	},
	findObjectIndex : function(arrayData, find, value){
	  var local_index = arrayData.findIndex(x => x[find] == value);
	  return local_index;
	}
}

module.exports = helper;