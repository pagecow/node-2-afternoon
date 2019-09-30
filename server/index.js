 const express = require('express');
 const app = express();
 const cors = require('cors');
 const ctrl= require('./Controllers/messages_controller');
 app.use(cors());
 app.use(express.json());
 app.use(express.static(__dirname + '/../public/build'));

 app.post('/api/messages', ctrl.create);
 app.get('/api/messages', ctrl.read);
 app.put('/api/messages/:id', ctrl.update);
 app.delete('/api/messages/:id', ctrl.delete);

 app.listen(3001, () => console.log('The server is running on port 3001.'))