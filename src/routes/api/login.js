module.exports = function(req, res) {
    if (!req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, { message: '请输入邮箱和密码!' });
        return;
    }
    passport.authenticate('local', function(err, user, info) {
        var token;
        if (err) {
            sendJSONresponse(err, 404, err);
            return;
        }
        if (user) {
            token = user.generateJwt();
            sendJSONresponse(res, 200, { token: token });
        } else {
            sendJSONresponse(res, 401, info);
        }

    })(req,res);
};
