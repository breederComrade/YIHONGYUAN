var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('user');
var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
module.exports=function(req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, { message: "请完成所有字段" });
        return;
    }
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save(function(err) {
	
        var token;
        if (err) {
            sendJSONresponse(res, 404, err);
        } else {
            token = user.generateJwt();
            sendJSONresponse(res, 200, { 'token': token });
        }
    });
}