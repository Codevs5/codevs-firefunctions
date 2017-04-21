const functions = require('firebase-functions');
const admin = require('firebase-admin');
const getModifiedTag = require('./utils/tags.js').getModifiedTag;
const isCreateOp = require('./utils/tags.js').isCreateOp;

admin.initializeApp(functions.config().firebase);


exports.addOrDeleteTag = functions.database.ref('/entries/info/{entryId}/tags/{tagId}')
    .onWrite(e => {
        const tagId = e.params.tagId;
        const entryId = e.params.entryId;
        if(e.data.exists()){
          let newTag = {};
          newTag[entryId] = true;
          return admin.database().ref(`/tags/${tagId}`).update(newTag);
        }else{
          return admin.database().ref(`/tags/${tagId}/${entryId}`).remove();
        }
    });
