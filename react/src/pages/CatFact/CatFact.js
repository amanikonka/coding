import React, { useState } from 'react'

export default function CatFact() {

    const [fact, setFact] = useState();
    const getNewFact = () => {

        setFact('Loading...')

        fetch('https://catfact.ninja/fact')
            .then(a => a.json())
            .then(res => {
                setFact(res.fact)
            })
    }


    const [activity, setActivity] = useState();
    const tellMeActivity = () => {

        setActivity('Loading...')

        fetch('https://www.boredapi.com/api/activity')
            .then(a => a.json())
            .then(res => {
                setActivity(res.activity)
            })
    }

    return (
        <div>
            <button onClick={getNewFact}>Get New Fact</button>
            <hr />
            Fact : {fact}



            <br/>
            <br/>
            <hr />
            <br/>
            <br/>
            <button onClick={tellMeActivity}>I am bored</button>
            <hr />
            Activity to do : {activity}

        </div>
    )
}
