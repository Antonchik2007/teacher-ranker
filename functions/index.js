import axios from 'axios'
import { log } from 'firebase-functions/logger';

const functions = require('firebase-functions')

exports.processData = functions.https.onRequest( async (req, res) => {
    const {login, password} = req.body; //get this from the request

    try {
        const pythonResponse = await axios.post("https://<your-heroku-app-url>/process", {
            login,
            password,
        });
    

    const processedData = {  // this is where the script needs to be called
        login: login,
        status: 'Processed successfully'
    }

    res.status(200).send(processedData)
}catch(error){
    console.log(error.message);
    res.status(500).send({ success: false, error: error.message });
}
})