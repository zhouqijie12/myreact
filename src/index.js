import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './react-router'


function Example() {
    const [num, setNum] = useState(1);
    useEffect(() => {
        console.log('eeeeeuseEffectuseEffecte')
    })
    return (
        <div>
            <p>{num}</p>
            <button onClick={() => setNum(num + 1)}>加1</button>
        </div>
    )
}

function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers)
    const finalReducers = {}
    for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i]
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key]
        }
    }
    const finalReducerKeys = Object.keys(finalReducers)

    return function combination(state = {}, action) {
        let hasChanged = false
        const nextState = {}
        for (let i = 0; i < finalReducerKeys.length; i++) {
            const key = finalReducerKeys[i]
            const reducer = finalReducers[key]
            const previousStateForKey = state[key]
            const nextStateForKey = reducer(previousStateForKey, action)
            nextState[key] = nextStateForKey
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey
        }
        return hasChanged ? nextState : state
    }
}
function a() {

}
function b() {

}
combineReducers({
    a,
    b
})


ReactDOM.render(
    <div className="todoapp">
        <RouterComponent />
    </div>,
    document.getElementById('root')
);
