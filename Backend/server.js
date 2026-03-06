const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT=process.env.PORT||5000;
console.log('PORT:', PORT);
const app = express();

app.use(cors());
app.use(express.json());

const moodREST_API=require("./routes/mood");
app.use("/mood",moodREST_API);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})