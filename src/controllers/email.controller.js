const Mailjet = require('node-mailjet');
const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC || 'ce50e9702de44f50a6d16d1461c91b86',
  apiSecret: process.env.MJ_APIKEY_PRIVATE || '43105879661fb99426026c7dce24a2d9'
});

/**
 * Send an email using Mailjet
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} text - Plain text content
 * @param {string} html - HTML content
 * @returns {Promise<object>} Mailjet API response
 */
async function sendContactUsEmail(req, res) {
    const { to, toname, variables } = req.body;
    try {
        const response = await mailjet
            .post('send', { version: 'v3.1' })
            .request({
                Messages: [{
                    From: {
                        Email: "mike@charlee.ai",
                        Name: "charlee.ai"
                    },
                    To: [
                        {
                            Email: "mike@charlee.ai",
                            Name: "charlee.ai"
                        }
                    ],
                    TemplateID: 6680649,
                    TemplateLanguage: true,
                    Variables: variables
                }]
            });
        return res.json(response.body);
    } catch (error) {
        console.error('Error sending contact us email:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

async function sendRequestDemoEmail(req, res) {
    const { to, toname, variables } = req.body;
    try {
        const response = await mailjet
            .post('send', { version: 'v3.1' })
            .request({
                Messages: [{
                    From: {
                        Email: "mike@charlee.ai",
                        Name: "charlee.ai"
                    },
                    To: [
                        {
                            Email: "mike@charlee.ai",
                            Name: "charlee.ai"
                        }
                    ],
                    TemplateID: 6680550,
                    TemplateLanguage: true,
                    Variables: variables
                }]
            });

        return res.json({
            success: true,
            messageId: response.body.Messages[0].Id
        });
    } catch (error) {
        console.error('Error sending request demo email:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

async function sendLearnModeEmail(req, res) {
    const { to, toname, variables } = req.body;
    try {
        const response = await mailjet
            .post('send', { version: 'v3.1' })
            .request({
                Messages: [{
                    From: {
                        Email: "mike@charlee.ai",
                        Name: "charlee.ai"
                    },
                    To: [
                        {
                            Email: "mike@charlee.ai",
                            Name: "charlee.ai"
                        }
                    ],
                    TemplateID: 6680624,
                    TemplateLanguage: true,
                    Variables: variables
                }]
            });
        return res.json({
            success: true,
            messageId: response.body.Messages[0].Id
        });
    } catch (error) {
        console.error('Error sending learn mode email:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = { sendContactUsEmail, sendRequestDemoEmail, sendLearnModeEmail };