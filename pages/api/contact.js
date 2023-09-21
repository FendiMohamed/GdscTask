const { storeContactSubmission } = require('../../controllers/contactController');

export default async function handler(req, res) {
    try {
      storeContactSubmission(req.body);

      res.status(200).json({ message: 'Form data received and stored successfully.'});
    } catch (error) {
  
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing the form data.' });
    }

}
