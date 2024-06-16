const camp = require("../model/camp");

const campController = {
    SearchCamping: async (req, res) => {
        const {campName, city, town, checkIn, checkOut, subsidiaryFacilities} = req.bpdy;
        try {
            const result = await camp.searchCamping(campName, city, town, checkIn, checkOut, subsidiaryFacilities);
            res.json(result);
        } catch (err) {
            console.log("post: 게시글 목록 조회 컨트롤러 오류")
            res.json({ "result": "error" });
        }
    }
};
module.exports = campController;