import React from 'react'
import { useEffect } from 'react'
import {CardGroup, ListGroup } from "react-bootstrap";

export const Social = (props) => {

    const [todo, setTodo] = React.useState([])

    React.useEffect(() => {
        social()
    }, [])

    const social = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const socialdata = await data.json()
        //console.log(socialdata)(
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

                                    <li > {item.title} </li>
                                ))
                            }

                             </CardGroup>
                           
                    </ul>
            
                </div>
            </div>

        </div>
    )
}
