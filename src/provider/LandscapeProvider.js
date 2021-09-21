import React, {useReducer, useState} from "react"

export const LandscapeContext = React.createContext();

const LandscapeProvider = (props) => {

  const landscapeReducer = (state, action) => {
    switch (action.type) {
      case "ADD_LANDSCAPE":
        return [action.landscape, ...state];
      case "DELETE_LANDSCAPE":
        return state.filter((l) => l.id != action.id);
      case "UPDATE_LANDSCAPE":
        return state.map((l) => {
          if(l.id !== action.id)
            return l
          return action;
        })
      default:
        return state;
    }
  }

  const [landscape, dispatch] = useReducer(landscapeReducer, [
    { id: 1, tree: "Pine", background: "Snowy Mountain"},
    { id: 2, tree: "Cedar", background: "Green Mountain"},
    { id: 3, tree: "Aspen", background: "Cabin in the Meadow"},
    { id: 4, tree: "Happy Little", background: "Cloudy Sky"},
  ]);

  return ( 
    <LandscapeContext.Provider value = {{landscape, dispatch}}>
      {props.children}
    </LandscapeContext.Provider>
  )
}

export default LandscapeProvider;