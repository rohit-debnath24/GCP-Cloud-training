const express = require('express');
const axios = require('axios')
const app=express();
const PORT = 3002;

app.get('/product', async (req, res) => {
    // console.log('this is account')
    // const response= await axios.get('https://localhost:3001/')
    // console.log(response.data)
//     res.send({
//         'data': 'This is product server',
//         'info': 'I am coming from product server'
// })
res.send(
    [
  {
    "productId": "P1001",
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with 2.4GHz connection",
    "price": 899,
    "stock": 120,
    "category": "Accessories"
  },
  {
    "productId": "P1002",
    "name": "Mechanical Keyboard",
    "description": "RGB backlit keyboard with blue switches",
    "price": 2499,
    "stock": 50,
    "category": "Accessories"
  }
]

)
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})