import { test } from "@playwright/test";
import { getLocation } from "../api_calls/api.calls";

test("API Test: Verify Location GET Request", async ({ request }) => {
  // Define the API endpoint URL
  //   const apiUrl = `${process.env.API_URL}/product/?page%20number=2&size=3`;
  const response = await getLocation(request);
  const resJson = await response.json();
  console.log(resJson);
});
