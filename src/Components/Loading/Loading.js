import React from 'react'
import { CSSProperties } from "react";
import BeatLoader from "react-spinners/ScaleLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-96 w-full'>
            <BeatLoader color={"#660FE0"}  cssOverride={override} size={250} />
        </div>
    )
}

export default Loading