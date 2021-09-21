import React, {useState} from "react"

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [state, setState] = useState({
    email: "BobRoss@gmail.com",
    firstName: "Bob",
    lastName: "Ross",
    avatar:"https://yt3.ggpht.com/ytc/AKedOLT2y4hkt_FsZMoIkho6Vn8jFfGacOYxi2XkvuXL=s900-c-k-c0x00ffffff-no-rj",
    updateUser: (user) => setState({...state, ...user})
  })

  return ( 
    <UserContext.Provider value = {state}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider