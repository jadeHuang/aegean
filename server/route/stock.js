/**
 * Created by renjie.huang on 2019/4/26.
 */


function stock(req,res){
	const url = req.url;
	const fun = url.split('/')[2];

	switch (fun){
		case 'add' :
			addStock(req,res);
			break;
	}
}


/**
 * 增加库存
 */
function addStock(req,res){
	
}


module.exports = stock;