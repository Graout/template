import React from "react";
const { remote } = window.require("electron");
const { dialog } = remote;

const openimg = () => {
    let mainWindow = remote.getCurrentWindow();
    dialog
        .showOpenDialog(mainWindow, {
            properties: ["openFile"],
            filters: [{ name: "Images", extensions: ["jpg", "png", "gif"] }]
        })
        .then(result => {
            if (!result.canceled) {
                console.log(result.filePaths[0]);
                document.querySelector(".img").src = result.filePaths[0];
            }
        })
        .catch(err => {
            console.log(err);
        });
};

export default function main() {
    return (
        <div className="container-main">
            <div onClick={openimg} className="wrapper">
                <img src="" className="img" alt="test" />
            </div>
        </div>
    );
}
