const multer = require(`multer`);
const path = require(`path`);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./foto`);
  },

  filename: (req, file, cb) => {
    cb(null, `foto-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const acceptedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    if (!acceptedTypes.includes(file.mimetype)) {
        return cb(new Error(`Invalid file type (${file.mimetype})`));
    }

    const fileSize = req.headers['content-length'];
    const maxSize = 1 * 1024 * 1024; // 1 MB
    if (fileSize > maxSize) {
        return cb(new Error('File size is too large'));
    }

    cb(null, true);
},
});
module.exports = upload;
