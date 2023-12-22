var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var multiparty = require('multiparty');
var fs = require('fs');
var uuid = require('uuid');
var UserImg = db.user_img;

// Для изменения изображения выполняется удаление предыдущего. Т. о. 
// у пользоваетеля всегда одно изображение (ну а че, это вам не In***gram)
exports.addUserImg = async (req, res) => {
    
    var form = new multiparty.Form();
    
    await form.parse(req, async (err, fields, files) => {
        if (!err) {
            try {
        
                const existingImage = await UserImg.findOne({
                    where: {
                        user_id: fields.user_id[0]
                    }
                });

                
                if (existingImage) {
                    const existingImagePath = './files/' + existingImage.link;
                    await fs.unlink(existingImagePath);
                    await existingImage.destroy();
                }

                var mimeType = files.file[0].headers['content-type']; 
                expansion = mimeType.split('/')[1]; 

                var newName = uuid.v4() + "." + expansion; 
                var link = './files/' + newName;

                await fs.rename(files.file[0].path, link);

                var user_id = fields.user_id[0];
                UserImg.create({
                    user_id: user_id,
                    link: newName,
                    mime_type: mimeType
                }).then(object => {
                    globalFunctions.sendResult(res, object);
                }).catch(err => {
                    globalFunctions.sendError(res, err);
                });
            } catch (error) {
                globalFunctions.sendError(res, error);
            }
        } else {
            globalFunctions.sendError(res, err);
        }
    });
};

//Получить изображение
exports.getUserImgById = async (req, res) => {
    try {
      const userImg = await UserImg.findOne({
        where: {
          user_id: req.params.userId
        }
      });
  
      if (userImg) {
        const imagePath = './files/' + userImg.link;
        
        res.sendFile(imagePath);
      } else {
       
        res.status(404).send('Изображение пользователя не найдено');
      }
    } catch (error) {
      globalFunctions.sendError(res, error);
    }
  };
  


