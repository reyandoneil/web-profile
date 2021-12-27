import {
  IsPopUp,
  PopupContent
} from '../Action'

const initialState = {
    PopupStatus:false,
    des:''
  };
  
  function Reducer(state = initialState, { type, payload }) {
    switch (type) {
      case IsPopUp:
        return { ...state, PopupStatus:payload };
        case PopupContent:
          console.log(payload,'ini di reducer');
          return { ...state, des:payload };
      default:
        return state; 
    }
  }
  
  export default Reducer;
  