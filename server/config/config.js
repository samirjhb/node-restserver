//=================
// Puerto 
//=================

process.env.PORT = process.env.PORT || 3000;

//=================
// Entorno
//=================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================
// Vencimiento del token
//=================
//60 SEGUNDOS 
//60 MIN
//24 HR
//30 DIAS

process.env.CADUCIDAD_TOKEN = '48h';

//=================
// SEED
//=================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//=================
// Base de datos
//=================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;



//=================
// Google Client ID
//=================

process.env.CLIENT_ID = process.env.CLIENT_ID || '68752292602-4nub6v3g69962semqbn7jtcrckk64pqc.apps.googleusercontent.com';