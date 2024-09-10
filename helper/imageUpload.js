const multer = require('multer');

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      cb(null, 'assets/images/userImg');
    },
    filename:  (req, file, cb) => {
      let fileName = '';
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      if(file.originalname){
        fileName = `${file.originalname.replace(/ /g,'_')}-${uniqueSuffix}`
      }
      cb(null,fileName);
    }
});
  
exports.upload  = multer({ storage:storage })