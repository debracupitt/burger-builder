import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      idToken: null,
      userId: null,
      error: null,
      loading: false,
      authRedirect: "/"
    });
  });

  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          idToken: null,
          userId: null,
          error: null,
          loading: false,
          authRedirect: "/"
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "some-id"
        }
      )
    ).toEqual({
      idToken: "some-token",
      userId: "some-id",
      error: null,
      loading: false,
      authRedirect: "/"
    });
  });
});
