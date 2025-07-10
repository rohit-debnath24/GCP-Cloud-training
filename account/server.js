const express = require('express');
const axios = require('axios')
const app=express();
const PORT = 3001;

app.get('/account', async (req, res) => {
    console.log('this is account')
    const response= await axios.get('http://localhost:3002/product')
    console.log(response.data)
    res.send({
        'data':response.data
    })
    // res.send({
    //     'info': 'This is account server'
    // })
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})