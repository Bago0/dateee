// api/save_info.js
const fs = require('fs');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    try {
      // Your server-side logic here for GET requests

      // For demonstration purposes, let's read the content of clicked_days.txt
      const logData = fs.readFileSync('clicked_days.txt', 'utf-8');
      res.status(200).send(logData);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else if (req.method === 'POST') {
    try {
      const { dateinfo } = req.body;

      // Your server-side logic here for POST requests

      const logData = `Selected Day: ${dateinfo}\n`;
      fs.appendFileSync('clicked_days.txt', logData);

      res.status(200).send('Information saved successfully.');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
