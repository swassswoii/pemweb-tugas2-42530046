const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

app.get('/', (req, res) => {
    res.redirect('/menu');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
