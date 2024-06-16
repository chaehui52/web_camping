const review = require("../model/user");

const reviewController = {
    Login: async (req, res) => {
        const {id,pw} = req.body;
        try {
            const result = await review.login(id, pw);
            res.json(result);
        } catch (err) {
            console.log("user: 로그인 컨트롤 오류")
            res.json({ "result": "error" });
        }
    }
};
module.exports = reviewController;