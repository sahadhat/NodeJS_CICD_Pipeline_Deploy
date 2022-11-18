const app = require('./app');
const port = 5000 || process.env.PORT;
app.listen(port, (req, res)=>{
    console.log(`Node running on port number: ${port}`)
})