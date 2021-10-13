import { ApiCallback } from "../interfaces/ApiHandlerInterfaces";
import { ApiResponse } from "../interfaces/ApiResponseInterfaces";

export class ResponseBuilder {
  public static jsonResponse(
    body,
    statusCode: number,
    callback: ApiCallback | null = null
  ): ApiResponse | void {
    const response: ApiResponse = {
      body: this.buildBody(body),
      headers: this.getHeaders(),
      statusCode,
    };

    if (callback != null) {
      callback(undefined, response);
    } else {
      return response;
    }
  }

  public static jsonErrorResponse(
    errorMsg: string,
    statusError: number,
    callback: ApiCallback | null = null
  ): ApiResponse | void {
    return this.jsonResponse({ error: errorMsg }, statusError, callback);
  }

  private static buildBody(contents) {
    return  contents !== "" ? JSON.stringify(contents): "";
  }

  private static getHeaders() {
    return {
      "Access-Control-Allow-Origin": "*",
    };
  }
}
