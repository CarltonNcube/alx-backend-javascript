// full_server/server.js
import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 1245;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
