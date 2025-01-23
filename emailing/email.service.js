// process.env.MJ_APIKEY_PUBLIC || '6edd76af32d8ff1e1b4f5fd9a49de716',
        // process.env.MJ_APIKEY_PRIVATE || '6b66973381b5967aa1882f468a4ec8bc'


const Mailjet = require('node-mailjet');
const mailjet = new Mailjet({
        apiKey: process.env.MJ_APIKEY_PUBLIC || 'ce50e9702de44f50a6d16d1461c91b86',
        apiSecret: process.env.MJ_APIKEY_PRIVATE || '43105879661fb99426026c7dce24a2d9'
        });
    
    module.exports = {
        sendEmail,
        sendTemplateEmail
    };
    
    /**
     * Send a custom email using Mailjet
     * @param {Object} options Email options
     * @param {string} options.to Recipient email
     * @param {string} options.toName Recipient name
     * @param {string} options.subject Email subject
     * @param {string} options.text Plain text content
     * @param {string} options.html HTML content
     * @param {Array} options.attachments Array of attachment objects
     */
    async function sendEmail({ to, toName, subject, text, html, attachments = [] }) {
        try {
            const response = await mailjet
                .post('send', { version: 'v3.1' })
                .request({
                    Messages: [{
                        From: {
                            Email: "mike@charlee.ai",
                            Name: "charlee.ai"
                            // Email: 'stelianrosca618@outlook.com',
                            // Name: 'stelian'
                        },
                        To: [{
                            Email: "mike@charlee.ai",
                            Name: "charlee.ai"
                        },{
                            Email: 'stelianrosca618@outlook.com',
                            Name: 'stelian'
                        }],
                        Cc: [
                            {
                                Email: to,
                                Name: toName
                            }
                        ],
                        Bcc: [
                            {
                                Email: to,
                                Name: toName
                            }
                        ],
                        Subject: subject,
                        TextPart: text,
                        HTMLPart: html,
                        Attachments: attachments
                    }]
                });
    
            return {
                success: true,
                messageId: response.body.Messages[0].Id
            };
        } catch (error) {
            console.error('Mailjet error:', error);
            throw {
                success: false,
                error: error.message,
                statusCode: error.statusCode
            };
        }
    }
    
    /**
     * Send a template-based email using Mailjet
     * @param {Object} options Email options
     * @param {string} options.to Recipient email
     * @param {string} options.toName Recipient name
     * @param {number} options.templateId Mailjet template ID
     * @param {Object} options.variables Template variables
     */
    async function sendTemplateEmail({ to, toName, templateId, variables }) {
        try {
            const response = await mailjet
                .post('send', { version: 'v3.1' })
                .request({
                    Messages: [{
                        From: {
                            Email: "mike@charlee.ai",
                            Name: "charlee.ai"
                        },
                        To: [{
                            Email: to,
                            Name: toName
                        }],
                        TemplateID: templateId,
                        TemplateLanguage: true,
                        Variables: variables
                    }]
                });
    
            return {
                success: true,
                messageId: response.body.Messages[0].Id
            };
        } catch (error) {
            console.error('Mailjet template error:', error);
            throw {
                success: false,
                error: error.message,
                statusCode: error.statusCode
            };
        }
    }