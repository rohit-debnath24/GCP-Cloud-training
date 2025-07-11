const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();

app.use('/account',createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: {
        '^/account':""
    }
}))