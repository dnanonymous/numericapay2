const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();
// Ruta base para probar
app.get('/', (req, res) => {
    res.send('🟢 API funcionando correctamente');
  });
  



app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authroutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));