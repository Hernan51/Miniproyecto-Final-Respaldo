const express = require('express');
const app = express();
const firebaseApiService = require('./firebaseApiService');

app.get('/api/data', async (req, res) => {
  try {
    // Llama al método del servicio para obtener los datos de Firebase
    const data = await firebaseApiService.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de Firebase' });
  }
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
