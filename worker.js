export default {
  async fetch(request, env, ctx) {
    try {
      // Import the HTML file as a string
      const html = await import('./index.html?raw');
      
      return new Response(html.default, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
      });
    } catch (error) {
      // Fallback if index.html is not found
      return new Response('Error: index.html file not found', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  },
};