import React,{useRef,useEffect} from 'react'

const UseRef = () => {
    const ref = useRef(null)
    useEffect(() => {
       ref.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}

export default UseRef
