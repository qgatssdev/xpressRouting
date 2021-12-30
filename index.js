let express = require('express');
let app = express();
let path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Routing')));
const router = express.Router();

router.use((req, res, next) => {
  let dateToday = new Date().getDay();
  if (dateToday === 0 || today === 6) return 'CLOSED!';
  next();
});

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/home', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'Contact.html'));
});

app.get('/ourServices', (req, res) => {
  res.sendFile(path.join(__dirname, 'Services.html'));
});
app.listen(3000, () => {
  console.log('started running');
});
