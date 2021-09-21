import React, { useContext } from 'react';
import { Button, Card, Icon, Image, } from "semantic-ui-react"
import { LandscapeContext } from '../provider/LandscapeProvider';
import { UserContext } from "../provider/UserProvider";

const LandscapeList = () => {
  const { landscape, dispatch } = useContext(LandscapeContext)
  return (
    <>
      <h1>Landscapes</h1>
      <Button
      onClick={()=> {
        dispatch({
          type: "ADD_LANDSCAPE",
          landscape: { id: Math.random(), tree: "Oak", background: "Clear lake"},
        });
      }}
      >
        Add
      </Button>
      {landscape.map ((l) => {
        return (
          <Card key={l.id}>
            <Image src="https://randomross-o4wfrok3w.now.sh" fluid/>
            <Card.Content>
              <p>{l.tree}</p>
              <p>{l.background}</p>
              <Button
                onClick={()=> dispatch({ type: "DELETE_LANDSCAPE", id: l.id })}
              >
              Delete
              </Button>
            </Card.Content>
          </Card>
        )
      })}
    </>
  )
}

export default LandscapeList;