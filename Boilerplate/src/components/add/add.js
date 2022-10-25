import Button from "../button/button";
import { useState, useEffect } from "react";

const Add = () => {
    const [number, setNumber] = useState(0)

    // useEffect(() => {
    //     console.log('DidMount and DidUpdate')
    // })

    // useEffect(() => {
    //     //Fetch data
    //     console.log('ComponentDidMount')
    // },[])

    // useEffect(() => {
    //     console.log('didMount och specifik update')
    //     //körs endast på den deklarerade[number]
    // }, [number])

    useEffect(() => {
        console.log('didMount')
        return () => {
            console.log('willUnmount')
        }
    }, [])

    const increase = () => {
        setNumber(number => number + 1)
    }

    return(
        <div>
            <h3>{number}</h3>
            <Button btnText = 'Increase' click = {increase} />
        </div>
    )
}

export default Add;