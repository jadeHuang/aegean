/**
 * Created by renjie.huang on 2019/4/26.
 */

const ErrorCode = require('../const/ErrorCode');

function product(req,res){
	const url = req.url;
	const fun = url.split('/')[2];
	switch (fun){
		case 'add' :
			addProduct(req,res);

		case 'delete':
			deleteProduct(req,res);

	}
}


/**
 * 新增产品SKU
 * @param req
 * @param res
 */
function addProduct(req,res){
	const body = req.body;
	const {productName , productSize , productBrand} = body;
	req.db.tbProduct.insertOne({
		productName,
		productSize,
		productBrand
	})

	res.json(ErrorCode);
}


function deleteProduct(req,res){

}


module.exports = product;