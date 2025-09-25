const html = `<!DOCTYPE html>
<html>
<head>
    <title>DMCA Notice</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <pre>If you believe that your work has been copied in a way that constitutes copyright infringement on our website, please provide the following information to ATServer's Copyright Agent and acknowledge the following guidelines:

A physical or electronic signature of the person authorized to act on behalf of the copyright owner.
Identification of where the original copyrighted work is located.
Identification of where the infringing material is located on our website including access credentials by providing a maximum of 10 URLs to a direct download and not an information page in the body of an email.
The full name, mailing address, telephone number, and email address of the copyright owner or an authorized agent.
A statement by the copyright owner or an authorized agent that upon a good faith belief, the disputed use of the material is not authorized by the copyright owner, its agent, or the law.
A statement that under penalty of perjury, the information in the notice is accurate and you are the copyright owner or authorized to act on behalf of the copyright owner.
A scanned physical document that proves you are the copyright owner or authorized to act on behalf of the copyright owner.
A valid email address such as name@copyrightcompany.domain and not one from free email services (gmail, proton, icloud, etc.) to help prove you are the copyright owner or authorized to act on behalf of the copyright owner.
An email in plain text (no rich text such as HTML) sent to dmca (at) atserver (dot) us, sending an email to our hosting providers, domain registrars, or ISPs means your notice will not be processed.
Access to content files, not information pages, may be restricted as only content files might or might not violate someone's copyright.
Personal or attorney notices will not be processed, they must come from a registered US company or dmca agent.

ATServer reserves the right to evaluate the legitimacy of notices received and will ignore and discard notices with invalid, incorrect, or omitted information. Notices may be shared with third parties for transparency purposes.</pre>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
