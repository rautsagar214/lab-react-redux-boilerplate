import React , {useEffect , useState} from 'react'
import { incrementLike , decrementLike } from './Action'
import Reducer from './Reducer'
import {createStore} from "redux"

const store = createStore(Reducer) 

const LikeCounter = () => {

    const [likes, setLikes] = useState(store.getState().likes);

    let handleLike = () =>{
        store.dispatch(incrementLike())
    }

    let handleUnlike = () =>{
        store.dispatch(decrementLike())
    }

    useEffect(()=>{
        const subscribe = store.subscribe(() => {
            setLikes(store.getState().likes);
        })

        return subscribe
    } , [])

    return (
    <>
        <h1>{likes}</h1>
        <button style={{margin:"10px"}} onClick={handleLike} >Like</button>
        <button onClick={handleUnlike}>Unlike</button>
    </>
    )
}

export default LikeCounter