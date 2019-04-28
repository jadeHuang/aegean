/**
 * Created by renjie.huang on 2019/4/26.
 */
const ErrorCode = require('../const/ErrorCode');

function order(req,res){
	const url = req.url;
	const fun = url.split('/')[2];
	switch (fun){
		case 'add' :
			addOrder(req,res);
	}
}


/**
 * 下订单
 * @param req
 * @param res
 */
function addOrder(req,res){
	const body = req.body;
	let {productId, productQuantity , isPay, isPaied , orderDesc , userId} = body;
	req.db.tbOrder.insertOne({
		productId ,
		productQuantity,
		isPay ,
		isPaied ,
		orderDesc,
		userId
	})

	res.json(ErrorCode.SUCCESS);
}


module.exports = order;