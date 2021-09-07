import React from 'react'
import {useGetOneCallDataQuery} from "../../boilerplate/redux/slices";

export default (props: any) => {
    const queryResult = useGetOneCallDataQuery()
    return (
        <div>Current Forecast</div>
    )
}
