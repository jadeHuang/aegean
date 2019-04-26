/**
 * Created by renjie.huang on 2019/4/26.
 */


module.exports = function(req,res,next){
	console.log(req.db);
	// req.tbUser = req.db.collection('user');
	// req.tbOrder = req.db.collection('order');
	// req.tbStock = req.db.collection('stock');
	// req.tbDelivery = req.db.collection('delivery');
	// req.tbProduct = req.db.collection('product');
	next();
}