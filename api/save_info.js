const fs = require('fs');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    try {
      // Read the contents of the log file
      const logData = fs.readFileSync('selected_dates.log', 'utf-8');
      res.status(200).send(logData);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else if (req.method === 'POST') {
    try {
      const { dateinfo } = req.body;
      const logData = `Selected Day: ${dateinfo}\n`;

      // Log selected date to a file
      fs.appendFileSync('selected_dates.log', logData);

      res.status(200).send('Information saved successfully.');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
