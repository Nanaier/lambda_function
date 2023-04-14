import { v4 } from "uuid";
import axios from "axios";

// Define the URL to fetch data from
const FETCH_URL = "https://jsonplaceholder.typicode.com/posts";

// Define the function that will retrieve, return and log out the data
async function getPosts(event: any, context: any) {
  // Make the API call and store the response
  const responce = await axios.get(FETCH_URL);

  // Log the data to the console
  console.log("Got data:");
  console.log(responce.data);

  // Return the data in the desired format along with a unique ID generated using UUID
  return {
    statusCode: 200,
    body: JSON.stringify(responce.data) + v4(),
  };
}

export { getPosts };
