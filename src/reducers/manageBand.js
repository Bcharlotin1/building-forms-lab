export default function manageBand(
  state = {
  bands: [],
},
 action
 ){
  
  switch (action.type) {
    case "ADD_BAND":
      console.log({ bands: [...state.bands, action.payload.text] });

      return { bands: [...state.bands, action.payload.text] };

    default:
      return state;
  }
};
