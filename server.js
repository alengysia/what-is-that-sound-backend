const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const instrumentsController = require('./controllers/instruments');
const admin = require('firebase-admin');




const { 
   PORT,
   DATABASE_URL, 
   PRIVATE_KEY_ID, 
   PRIVATE_KEY,
   CLIENT_ID } = process.env;

mongoose.connect(DATABASE_URL)

const db = mongoose.connection

db.on("error", (err) => console.log("It's gonna eat the goat?"))
db.on("connected", () => console.log('They DO move in herds'))
db.on("disconnected", () => console.log("I've decided not to endorse your park"))

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json());
app.use(cors());



admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "what-is-that-sound",
    "private_key_id": PRIVATE_KEY_ID,
    "private_key": PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": "firebase-adminsdk-cjgtw@what-is-that-sound.iam.gserviceaccount.com",
    "client_id": CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cjgtw%40what-is-that-sound.iam.gserviceaccount.com"
  }
  )
});

app.use(async function(req, res, next) {
  const token = req.get('Authorization')
  if(token){
    const authUser = await admin.auth().verifyIdToken(token.replace('Bearer', ''))
    req.user = authUser
  }
  next();
})

function isAuthenticated(req, res, next){
  if(req.user) {return next();
  } else {
    res.status(401).json({message: 'unauthorized'})
  }
}


app.get('/', (req, res) => {
    res.send('hello world');
  });


app.use('/instruments', instrumentsController);




app.listen(PORT, () => console.log('Life uh uh uh finds a way'));