const express = require('express');
const app = express();
const port = process.env.PORT|| 8000;

app.use(express.json());
const itStudent=[
    {id:21, 'fname': 'พัชรพล', 'lname': 'นวลจันทร์', 'tel': '0812345678'},
    {id:33, 'fname': 'แทนรัก', 'lname': 'มังคละคุปต์', 'tel': '0698745630'},
    {id:42, 'fname': 'ชาลิสา', 'lname': 'เทพดนตรี', 'tel': '0987412365'},
    {id:45, 'fname': 'เสฏฐนันท์', 'lname': 'อรรถสิษฐ์','tel': '0875321594'},
    {id:47, 'fname': 'วิรัลยุพา', 'lname': 'ถมรุ ่ง', 'tel': '0785214569'}
];

//api,routing
app.get('/api/getstudent',(req,res)=>{
    res.send(itStudent);
});

app.get('/api/querystu',(req,res)=>{
    const myQueryString = req.query;
    if(Object.keys(myQueryString).length!= 0){
        console.log(myQueryString.id);
        const stuId = itStudent.find(element => element.id == parseInt(myQueryString.id));
        if(stuId){
            res.send(stuId);
        }else{
            res.status(404).send('ไม่พบรหัสนี้');
    }
 }else{
    res.status(404).send('ไม่พบ API ที่เรียก');

 }
});

app.get('/api/querystu',(req,res)=>{
    const stuId = itStudent.find(element => element.id === parseInt(req.body.id));
    if(stuId){
        stuId.fname = req.body.fname;
        stuId.lname = req.body.lname;
        stuId.tel = req.body.tel;
    }else{
        res.status(404).send('ไม่พบรหัสนักศึกษานี้');
    }
    res.send(itStudent);
});

   

app.listen(port,'127.0.0.1',()=>{
    console.log(`Lintening to request on port ${port}`);
});


