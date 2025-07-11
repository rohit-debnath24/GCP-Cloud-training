const express = require('express');
const axios = require('axios')
const app=express();
const PORT = 3000;

app.get('/MainServer', async (req, res) => {
    console.log('this is Main Server')
    const acc= await axios.get('http://localhost:3001/account');
    console.log(acc.data)
 
    const prod= await axios.get('http://localhost:3002/product');
    console.log(prod.data)
    const ord= await axios.get('http://localhost:3003/orders');
    console.log(ord.data)
    const cart= await axios.get('http://localhost:3004/cart');
    console.log(cart.data)
    res.send({
        'data': 'This datas are fetched succesfully is Main server',
        'account': acc.data,
        'product': prod.data,
        'orders': ord.data,
        'cart': cart.data
    })
   
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})