const db = require('../Models/Connection');

const getAllocation = (req, res) => {
  try {
    db.query('SELECT * FROM alocacao', (err, results) => {
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

const getAllocationInnerAuto = (req, res) => {
  const { area } = req.params;
  try {
    db.query(
      'SELECT * FROM automoveis  v INNER JOIN alocacao a ON v.id = a.automovel WHERE a.area = ?',
      [area],
      (err, results) => {
        if (err) {
          console.error('Error while retrieving data from the database: ' + err.stack);
          return res.status(500).json({ error: 'Error while retrieving data.' });
        }
        res.status(200).json(results);
      }
    );
  } catch (error) {
    console.error('Error executing database query:', error);
    return res.status(500).json({ error: 'Error while retrieving data.' });
  }
};

module.exports = {
  getAllocation,
  getAllocationInnerAuto,
};
