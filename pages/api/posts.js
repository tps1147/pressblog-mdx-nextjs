import { getPosts } from '../../scripts/utils';
const axios = require('axios'); 

export default function handler(req, res) {
  const { page } = req.query;

  const posts = getPosts(page);

  res.status(200).json(posts);
}

export const sendEmail = async (values) => {
  try {
    const send2go = {
        "api_key": "api-EB6A258432B111ED9D86F23C91C88F4E",
        "to": [`Company <${req.body.receivingEmail}>`],
        "cc": [`Site ppl <create@siteppl.com>`],
        "sender": "Site ppl <leads@siteppl.com>",
        "subject": "New Lead for Trident/Reclaim",
        "text_body": "Lead details:",
        "html_body":  `<html>Lead Info: <br/>
        Name: ${req.body.firstName} ${req.body.lastName} <br/>
        Email: ${req.body.email} <br/>
        Phone: ${req.body.phone} <br/>
        Message: <br/> ${req.body.message} <br/>
        </html>`,
        // "attachments": [
        //     {
        //         "filename": "test.pdf",
        //         "fileblob": "--base64-data--",
        //         "mimetype": "application/pdf"
        //     },
        //     {
        //         "filename": "test.txt",
        //         "fileblob": "--base64-data--",
        //         "mimetype": "text/plain"
        //     }
        // ]
    }
// const data = {
//     from: `Site ppl - New lead <Siteppl@restoreitpro.com>`,
//     to: req.body.receivingEmail,
//     subject: 'New Lead',
//     text: 'text',
//     html: 
//     `<html>Lead Info: <br/>
//     Name: ${req.body.firstName} ${req.body.lastName} <br/>
//     Email: ${req.body.email} <br/>
//     Phone: ${req.body.phone} <br/>
//     Message: <br/> ${req.body.message} <br/>
//     </html>`,
// };
axios.post('https://api.smtp2go.com/v3/email/send', send2go).then((response) => {
    console.log('response', response)
}).catch((error) => {
    console.log('axios error', error)
})
// mg.messages().send(data, function (error, body) {
//     if ( error ) {
//         console.log(error);
//     }
//     console.log(body);
// })
} catch (error) {
    console.log(error)
}
}
