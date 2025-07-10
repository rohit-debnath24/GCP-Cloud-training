const express = require('express');
const axios = require('axios')
const app=express();
const PORT = 3002;

app.get('/product', async (req, res) => {
    // console.log('this is account')
    // const response= await axios.get('https://localhost:3001/')
    // console.log(response.data)
    res.send({
        'data': 'I am coming from product server',
        'info': 'This is product server'
})
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})