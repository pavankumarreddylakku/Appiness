import React, { useEffect, useState,useMemo } from 'react';


const Child1 = ({ changeData}) => {

    const [localDate, setLocal] = useState(new Date().toLocaleTimeString())

    useEffect(()=> {
        console.log(new Date())
        changeData(new Date().toLocaleTimeString())
    },[])

    return (
        <div>
        <span>{localDate}</span><br/>

        <span onClick={e => changeData(new Date().toLocaleTimeString())}>click here to update data</span>



        </div>
    )
}



const Child2 = ({data}) => {


    return (
        <div>

        <span>{data}</span>



        </div>
    )
}

export default ()=> {

    const [data, changeData] = useState(null)
    // const Child3 = useMemo(Child1)

    return(
        <div>

            <Child1 changeData={dt => changeData(dt)} />
            {/* <Child3 changeData={dt => changeData(dt)} /> */}
            <Child2 data={data}/>



        </div>
    )
}