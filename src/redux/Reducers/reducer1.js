import logo from "../../images/download.jpg";
const initialState = {
  currentCountry: [],
  dropdown: [],
  currentallCountry: [],
  isopen: false,
  toggle: false,
  countrycode: "worldwide",
  flag: logo,
  news: [],
};

const Reducer1 = (state = initialState, action) => {
  // console.log(action.payload2)
  const { type, payload, payload2, payload9 } = action;
  switch (type) {
    case "SET_ALL_COUNTRY":
      return { ...state, currentallCountry: payload, dropdown: payload2 };
    case "SET_CURRENT_COUNTRY":
      return { ...state, currentCountry: payload };
    case "UPDATE":
      return { ...state, countrycode: payload, flag: payload2 };

    case "NEWS":
      return { ...state, news: payload9 };

    default:
      return state;
  }
};

export default Reducer1;
