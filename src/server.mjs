import mongoose from 'mongoose';
import { app } from './app.mjs';
import config from './config/index.mjs';

async function main() {
  try {
    await mongoose.connect(config.database_url);
    console.log('Connection established!');
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
