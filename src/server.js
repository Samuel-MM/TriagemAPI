const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/router');
const databases = require('./config/database');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const connectDatabases = async () => {
  try {
    await databases.connectDatabases();
  } catch (error) {
    console.error(error);
  }
}

const startServer = async () => {
  await connectDatabases();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

}
startServer();