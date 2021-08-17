import React, {useState} from 'react'
import { useEffect } from 'react'
import {CardGroup, ListGroup } from "react-bootstrap";

export const Social = () => {

    const [todo, setTodo] = React.useState([])

    React.useEffect(() => {
        social()
    }, [])

    const social = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const socialdata = await data.json()
        console.log(socialdata)
        setTodo(socialdata)
        }

        
    return (
        <div>
            <div class="container center">
                <div class="row">
                    <ul>

                             <CardGroup> <h1>Api</h1>
                             {
                                  todo.map(item => (
                                      <div className="card"  key={item.id}>
                                          <h2 className="card-text">{item.title}</h2>
                                         

                                            <li key={item.id}> {item.title}</li>
                                      </div>

                                   
                                ))
                            }

                             </CardGroup>
                           
                    </ul>
            
                </div>
            </div>

        </div>
    )
}
