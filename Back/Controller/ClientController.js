const db = require('../Models/Connection');

const getClients = (req, res) => {
  try {
    db.query('SELECT * FROM clientes', (err, results) => {
      if (err) {
        console.error('Error while retrieving data from the database: ' + err.stack);
        return res.status(500).json({ error: 'Error while retrieving data.' });
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error('Error executing database query:', error);
    return res.status(500).json({ error: 'Error while retrieving data.' });
  }
};

module.exports = {
  getClients,
};
