import { useState } from "react";
import react from "../assets/react.svg";

function State3() {
    const [black, setBlack] = useState(false)
    const [like, setLike] = useState(false)
    return (
        <>
            <div style={{
                background: black ? "black" : "white",
                color: black ? "white" : "black",
                height: "100px",
            }}>

                <h1 style={{ textAlign: "center" }}>Wellcome to Toggle Theme!!</h1>
                <button
                    onClick={() => {
                        !black ? console.log("Dark") : console.log("White")
                        setBlack(!black)
                    }}
                >
                    Toggle Theme!!
                </button>
                <button
                    onClick={() => {
                        like ? console.log("Unlike Post") : console.log("Like Post")
                        setLike(!like)
                    }}
                >
                    <img src={react} alt="Hero" style={{ height: "40px", width: "40px" }} />
                    {like ? "❤️" : "🤍"}
                </button>
            </div>
        </>
    )
}
export default State3;

