//require modules
const path = require('path');
const express = require('express');
const app  = express();
//require custom modules
const indexRoutes = require('./routes/index.routes');
//for showing static frontend files
app.use(express.static(path.join(__dirname,'public')));
//middleware for catching / index route
app.use('/',indexRoutes);
//listening on port 3000 (locally) or process.env.PORT;
const PORT = 3000 || process.env.PORT;
app.listen(PORT,()=>{
  console.log(`Server Started on PORT : ${PORT}`);
});
