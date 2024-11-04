require('dotenv').config();

// Print out value of API key stored in .env file
let endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en'
console.log(process.env.API_KEY)
const apiKey = process.env.API_KEY;
console.log(apiKey);
console.log(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`);

async function getImage(query) {
    try {
        // Create a fetch request to the Giphy API, using the query provided
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`);
        // Parse the JSON data from the response
        const data = await response.json();
        // Save the URL of a single gif image
        const imageUrl = data.data[0].images.original.url;
        // Print the image URL to the console
        console.log(imageUrl);
        // Return the image URL
        return imageUrl;
    } catch (error) {
        // Log any errors that occur
        console.error('Error fetching the image:', error);
    }
}

// Example usage
getImage("cats");