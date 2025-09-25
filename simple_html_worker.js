export default {
  async fetch(request, env, ctx) {
    // Static HTML content
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Simple Cloudflare Worker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        p {
            color: #666;
        }
        .highlight {
            background-color: #ff6b35;
            color: white;
            padding: 2px 6px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Hello from Cloudflare Workers!</h1>
        <p>This is a <span class="highlight">super simple</span> Cloudflare Worker serving static HTML.</p>
        <p>Your worker is running at the edge, making it lightning fast! ⚡</p>
        <p>Edit the code to customize this page however you'd like.</p>
    </div>
</body>
</html>`;

    // Return the HTML response with proper headers
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  },
};