import React from "react";
const { remote } = window.require("electron");

const quitBtn = () => {
    remote.getCurrentWindow().close();
};

const miniMize = () => {
    remote.getCurrentWindow().minimize();
};
const maxiMize = () => {
    const currentWindow = remote.getCurrentWindow();
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize();
    } else {
        currentWindow.maximize();
    }
};

export default function frameBar() {
    return (
        <div className="frame-bar">
            <ul className="menu">
                <li className="burger">
                    <p>&#xE700;</p>
                </li>
            </ul>
            <ul className="frame-bar-buttons">
                <li className="min-btn" onClick={miniMize}>
                    <p>&#xE921;</p>
                </li>
                <li className="max-btn" onClick={maxiMize}>
                    <p>&#xE922;</p>
                </li>
                <li className="quit-btn" onClick={quitBtn}>
                    <p>&#xE8BB;</p>
                </li>
            </ul>
        </div>
    );
}
