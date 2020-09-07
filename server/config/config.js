//=================
// Puerto 
//=================

process.env.PORT = process.env.PORT || 3000;

//=================
// Entorno
//=================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================
// Base de datos
//=================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    urlDB = 'mongodb+srv://samirjhb:JNdch6ehGk4YCO6w@cluster0.7q4vo.mongodb.net/cafe';
}

process.env.URLDB = urlDB;