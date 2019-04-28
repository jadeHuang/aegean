/**
 * Created by renjie.huang on 2019/4/26.
 */
const SUCCESS = require('../const/ErrorCode');

function user(req,res){
	const url = req.url;
	const fun = url.split('/')[2];
	switch (fun){
		case 'add' :
			addUser(req,res);

		case 'delete' :
			deleteUser(req,res);
	}
}

/**
 * 新增用户
 * @param req
 * @param res
 */
function addUser(req,res){
	const body = req.body;
	const {userName , birthDay , province, city , detailAddress , cellPhone} = body;
	req.db.tbUser.insertOne({
		userName,
		birthDay,
		province,
		city,
		detailAddress,
		cellPhone
	})

	res.json(SUCCESS.SUCCESS);
}


/**
 * 删除用户
 */
function deleteUser(){

}


module.exports = user;