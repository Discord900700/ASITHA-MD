
const env2 = require('./config-db')
var GITHUB_AUTH_TOKEN;
var GITHUB_USERNAME;
var SESSION_ID = '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=O74lFagS#aLq-C7j0CCcNvu3iE3G4m5u9y8bMRU9aHmTd7VJvdts';

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

if(process.env.GITHUB_AUTH_TOKEN){
    GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN;
} else {
    GITHUB_AUTH_TOKEN = env2.GITHUB_AUTH_TOKEN;
}

if(process.env.GITHUB_USERNAME){
    GITHUB_USERNAME = process.env.GITHUB_USERNAME;
} else {
    GITHUB_USERNAME = env2.GITHUB_USERNAME;
}

module.exports = {
    SESSION_ID,
    GITHUB_USERNAME,
    GITHUB_AUTH_TOKEN,
    MONGODB: process.env.MONGODB || "mongodb+srv://myrender971:iwS8N2qB3Q8wMw83@cluster0.he9fd.mongodb.net/"
};
