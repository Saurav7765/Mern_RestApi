import { config as conf } from 'dotenv';
conf();  

  // eslint-disable-next-line no-undef
const username = process.env.username;
  // eslint-disable-next-line no-undef
const password = process.env.password;
  // eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;  


const encodedUsername = encodeURIComponent(username);
const encodedPassword = encodeURIComponent(password);


const connectionStr = `mongodb+srv://${encodedUsername}:${encodedPassword}@cluster0.ptlqe.mongodb.net/eLib?retryWrites=true&w=majority&appName=Cluster0`;



const _config = {
    port: port,
    connectionString: connectionStr, 
     // eslint-disable-next-line no-undef
    env:process.env.NODE_ENV, 
};



export const config = Object.freeze(_config);

