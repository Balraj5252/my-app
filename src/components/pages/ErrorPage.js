import React from 'react';
import { useNavigate } from "react-router-dom";

export const ErrorPage = ()=> {
    const navigate = useNavigate();
            return (
                <div className="not-found-container">
                    <h1>Oops!</h1>
                    <h4>Something went wrong!</h4>
                    <p>500 - Internal Server error</p>
                    <button type="button" className="btn btn-dark"
                            onClick={() => navigate("/my-app")}>
                        GO BACK
                    </button>
                </div>
            );
}