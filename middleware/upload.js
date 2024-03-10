const multer = require("multer");
const path = require("path");
// const upload = multer({
//     dest: "uploads/profile",
// });
// const uploads = multer({
//     dest: "uploads/post",
// });

const uploadProfile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/profile"); // 저장될 파일 경로 설정
        },
        filename: function (req, file, cb) {
            const ext = path.extname(file.originalname); // 확장자를 담는 코드

            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});
const uploadPostPhoto = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/post"); // 저장될 파일 경로 설정
        },
        filename: function (req, file, cb) {
            const ext = path.extname(file.originalname); // 확장자를 담는 코드

            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = { uploadProfile };
