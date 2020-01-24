import React from "react";

const zoom = () => {
    document.querySelector(".inner-box").style.zoom = "150%";
};

export default function main() {
    return (
        <div className="container-main">
            <div className="wrapper">
                <div id="1">test</div>
            </div>
        </div>
    );
}
