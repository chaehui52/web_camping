const review = require("../model/user");

const reviewController = {
    ReviewBefore: async (req, res) => {
        try {
            const result = await review.reviewBefore();
            res.json(result);
        } catch (err) {
            console.log("post: 게시글 목록 조회 컨트롤러 오류")
            res.json({ "result": "error" });
        }
    },
};
module.exports = reviewController;