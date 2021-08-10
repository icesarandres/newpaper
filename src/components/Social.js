import React from 'react'
import { useEffect } from 'react'

export const Social = () => {

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
                        {
                            todo.map(item => (

                                <li key={item.id}> {item.title} - {item.author}</li>
                            ))
                        }
                    </ul>
            
                </div>
            </div>
            

        </div>
    )
}
