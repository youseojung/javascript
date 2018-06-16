const exp = require('express');
const app = exp();

app.use('/',(req,res,next)=>{
res.sendFile('./index.html',{root:__dirname});

});
app.listen(8081, function(){
    console.log('8081포트로 서버시작');
})