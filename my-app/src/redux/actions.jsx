export const Loading = " Loading";
export const Search = "Search";
export const SET_USER_INFO = "setUserInfo";
export const dataInState = null;
export const searching = null;
export const Liking = null;
export const items = [];

export const setItems = (data) => ({
  type: items,
  payload: data,
});

export const setLiking = (data) => ({
  type: Liking,
  payload: data,
});

export const setDataInState = (data) => ({
  type: dataInState,
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
      const url = "";
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
  return async (dispatch, getState) => {
    try {
      const url = "http://localhost:3005/items";
      const options = {
        method: "GET",
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setItems(data);
      console.log(items);
    } catch (error) {
      console.log("this is a error happened while getting item with thunk");
    }
  };
};
