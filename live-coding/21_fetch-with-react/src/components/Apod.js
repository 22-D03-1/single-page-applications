import { useEffect, useState } from "react"

export default function Apod({date}) {

    const [ picture, setPicture ] = useState("")

    useEffect(()=> {
        const apiKey = "EoYtedjwbk4WhsYN09QEBFsaffFSX9iMi6j45gP3"
        /* const getPicture = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            const result = await response.json()

            setPicture(result)
        }
        getPicture() */

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
            .then((res) => res.json())
            .then((json) => {
                setPicture(json)
            })
    },[date])


    return (
        <div>
            <img src={picture.hdurl}></img>
            <h3>{picture.title}</h3>
            <p>{picture.explanation}</p>
        </div>
    )
}