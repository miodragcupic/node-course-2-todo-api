//const MongoClient = require('mongodb'). MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // find one and update

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5c5c32f554c8120460b26975")
  }, {
    $set: {
      completed: false
    }
  }, {
      returnOriginal: false
  }).then((result) => {
      console.log(result);
  });


  //db.close();
});
