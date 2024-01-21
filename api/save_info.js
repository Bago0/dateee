// api/save_info.js
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    try {
      const { dateinfo } = req.body;

      // Your server-side logic here

      const logData = `Selected Day: ${dateinfo}\n`;
      console.log(logData);

      res.status(200).send('Information saved successfully.');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
