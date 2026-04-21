const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    users: 1245,
    revenue: "$8430",
    errors: 12
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
