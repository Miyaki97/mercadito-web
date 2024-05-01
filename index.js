import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path'

const app = express()

const __dirname = import.meta.dirname

app.use(express.static(path.join(__dirname, 'public')))

app.use('/css', express.static(path.join(__dirname ,'/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname ,'/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname ,'/node_modules/jquery/dist')))


app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home')
})

const PORT = process.env.PORT || 5055
app.listen(PORT, console.log(`Puerto funcionando en http://localhost:${PORT}`))