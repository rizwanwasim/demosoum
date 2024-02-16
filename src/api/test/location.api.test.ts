import { expect, test } from "@playwright/test";
import { getLocation } from "../api_calls/location.api.calls";
import { ApiResponseSchema } from "../api_calls/location.domain";

test("API Test: Verify Location GET Request", async ({ request }) => {
  const response = await getLocation(request);
  const resJson = await response.json();
  expect(() => ApiResponseSchema.parse(resJson)).not.toThrow();
});
