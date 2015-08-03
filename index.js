//https://github.com/aui/artTemplate

var template = require('art-template');
var fs = require('fs')
var path = require('path')
var util = require('util')
module.exports = function(content, file, opt){
	var _dataPath = opt.dataFile
	var dataPath = path.join(file.dirname,_dataPath)

	var _data = util._extend({charset:file.charset.replace('utf','utf-')},opt._data || {})

	var render = template.compile(content)
	var data
	try{
		data = require(dataPath).data
	}catch(e){
		data = {}
	}
	util._extend(data,_data)
  return render(data);
};
