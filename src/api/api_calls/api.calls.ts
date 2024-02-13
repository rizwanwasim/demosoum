import { APIRequestContext, APIResponse, expect } from "@playwright/test";

export async function getLocation(
  request: APIRequestContext,
  size?: string,
  pageNumber?: string,
  expectedStatusCode?: number
) {
  const url = `${process.env.API_URL}/product/?page%20number=2&size=3`;

  const response: APIResponse = await request.get(`${url}`, {
    headers: {
      "Accept-Language": "en",
      ContentType: "application/json; charset=utf-8",
      Accept: "application/json",
    },
  });

  if (expectedStatusCode) {
    expect
      .soft(response.status(), `st${expectedStatusCode}`)
      .toBe(expectedStatusCode);
  } else {
    expect.soft(response.status()).toBe(200);
  }
  return response;
}
