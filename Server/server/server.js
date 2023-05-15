const app = require('./app.js');
const HOST = process.env.HOST ?? '127.0.0.1';
const PORT = process.env.PORT ?? 8085;
const mongoose=require('mongoose');
const url='mongodb://127.0.0.1:27017/Auth';

mongoose.connect(url,{UseNewUrlParser:true, UseUnifiedTopology: true}).then(()=>{
  console.log('connected to mongo DB');
  startServer();
})

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Express Server listening at http://${HOST}:${PORT}\n...`);
    });
  }
  catch (err) {
    console.log(err);
    console.log(err.stack);
  }
};

