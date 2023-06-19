const db = require('../Models/Connection');

const getConcessionaire = (req, res) => {
  const itemId = req.params.id;
  const { area } = req.params;
  try {
    db.query('select c.concessionaria, a2.modelo  from concessionaria c inner join alocacao a inner join automoveis a2 where  c.id = a.concessionaria and a2.id = a.automovel and a.automovel = ? and a.area = ?'
    ,[itemId, area], (err, results) => {
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
  getConcessionaire,
};
