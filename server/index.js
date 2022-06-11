const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => {
  console.log(`Server is runiing on this ${port}`);
});
