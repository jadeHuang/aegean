/**
 * Created by renjie.huang on 2019/4/26.
 */

var _db;

module.exports.init = function(db){
	_db = db;
}
module.exports.tbUser = function(){
	return _db.collection('user');
}