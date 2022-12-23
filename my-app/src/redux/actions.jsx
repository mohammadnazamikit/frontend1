export const Loading = " Loading";
export const Search = "Search";
export const SET_USER_INFO = "setUserInfo";
export const dataInState = null;
export const searching = null;

export const setDataInState = (data) => ({
  type: dataInState,
  payload: data,
});

export const setSearchWord = (searchword) => ({
  type: searching,
  payload: searchword,
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

      const response = await fetch(url);
      const data = await response.json();
      dispatch(setSearchWord(data));
    } catch (error) {
      console.log("this is a error", error);
    }
  };
};
