const express = require('express');
const cors = require('cors');
const app = express();
const port = 8001;
app.use(cors());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views/');
const tolemshot_rus_router = require('./src/routes/tolemshot_rus');
const avr_rus_router = require('./src/routes/avr');
const avr_rus_scan_router = require('./src/routes/avr_rus_scan');
const blank_zakazov_router = require('./src/routes/pdfmerger');
const dogovor = require('./src/routes/dogovor');
app.get('/tolemshot_rus', tolemshot_rus_router);
app.get('/avr_rus_print', avr_rus_router);
app.get('/avr_rus_scan', avr_rus_scan_router);
app.get('/blank_zakazov', blank_zakazov_router);
app.post('/dogovor', dogovor);
app.get('/dogovor', dogovor)
app.listen(port, () => console.log(`Port listen in  ${port}`));
