export const Loading = " Loading";
export const Search = "Search";
export const SET_USER_INFO = "setUserInfo";
export const SIGN_UP_DATA = "SIGN_UP_DATA";
export const searching = "searching";
export const Liking = "Liking";
export const ITEMS = "ITEMS";
export const ITEM_CLICKED = "ITEM_CLICKED";
export const EMAIL = "EMAIL";

export const setEmail = (data) => ({
  type: EMAIL,
  payload: data,
});

export const setItemClick = (data) => ({
  type: ITEM_CLICKED,
  payload: data,
});

export const setItems = (data) => ({
  type: ITEMS,
  payload: data,
});

export const setLiking = (data) => ({
  type: Liking,
  payload: data,
});

export const setDataInState = (data) => ({
  type: SIGN_UP_DATA,
  payload: data,
});

export const setSearchWord = (searchWord) => ({
  type: searching,
  payload: searchWord,
});

export const setLoading = (isLoading) => ({
  type: Loading,
  payload: isLoading,
});

export const setUserInfo = (user) => ({
  type: SET_USER_INFO,
  payload: user,
});

export const setSearch = (query) => ({
  type: Search,
  payload: query,
});

export const LogInWithThunk = (email, password) => {
  const baseURL = process.env.REACT_APP_SERVER_URL;
  const options = {
    method: "PUT",
    Headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };
  const baseEndpoint = `${baseURL}/user/login`;
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const data = await response.json();
        dispatch(setUserInfo(data));
      } else {
        console.log("error logging in");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchWordWithThunk = (searchWord) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: searching,
        payload: searchWord,
      });
      const url = "http://localhost:3005/items/search";
      const options = {
        method: "GET",
        Credential: "include",
        body: JSON.stringify({ word: searchWord }),
      };

      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(setSearchWord(data));
    } catch (error) {
      console.log("this is a error", error);
    }
  };
};

export const LikingWithThunk = (data) => {
  return async (dispatch, getState) => {
    try {
      const url = "";
      const options = {
        method: "PUT",
        Credential: "include",
        body: JSON.stringify({ like: "1" }),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(setLiking(data));
    } catch (error) {
      console.log("this is a error", error);
    }
  };
};

export const getItemsWithThunk = () => {
  const url = "http://localhost:3005/items/";
  const options = {
    method: "GET",
  };
  return async (dispatch, getState) => {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      dispatch(setItems(data));
      console.log(response);
      console.log(data);
    } else {
      dispatch(setItems("error happened"));
      console.log(ITEMS);
      console.log("this is a error happened while getting item with thunk");
    }
  };
};

export const get_Item_Id_With_Thunk = (id) => {
  const url = `http://localhost:3005/items/${id}`;
  console.log(url);
  const options = {
    method: "GET",
  };
  return async (dispatch, getState) => {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      dispatch(setItemClick(data));
    } else {
      dispatch(setItemClick("error happened in get by id"));
    }
  };
};

export const signingUp_With_Thunk = (obj) => {
  const URL = `http://localhost:3005/signin/register`;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };
  return async (dispatch, getState) => {
    const response = await fetch(URL, options);
    if (response.ok) {
      const data = await response.json();
      dispatch(setEmail(data.email));
      console.log(EMAIL);
    }
  };
};

export const SignIn_With_Thunk = (obj) => {
  const url = "http://localhost:3005/signin/login";

  const options = {
    method: "PUT",
    Credential: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return async (dispatch, getState) => {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      dispatch(setDataInState(data));
      dispatch(setEmail(data.email));
    } else {
      console.log("error");
    }
  };
};
