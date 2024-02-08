import React, { useEffect } from 'react'
import { getCoursesByRecentlySearched } from "../../../api/coursesApi"
const Course = () => {
    useEffect(() => {
        getCoursesByRecentlySearched()
    }, [])
    return (
        <div>
            <img src="" alt="" />
            <h2>title</h2>
            <p>teacher</p>
            <p>rating</p>
            <p>price</p>
            <p>tag</p>
        </div>
    )
}

export default Course