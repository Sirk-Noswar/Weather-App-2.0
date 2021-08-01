import React from 'react'
import {useGetOneCallDataQuery} from "../../boilerplate/redux/reducers";

export default (props: any) => {
    const queryResult = useGetOneCallDataQuery()
    return (
        <div>Current Forecast</div>
    )
}
