import React, { Component } from "react";

import Cells from "./Cells";

import "./style.css";

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [],
            snake: [],
            direction: null,
            gameOver: false,
        };
    }

    render() {
        return <Cells />;
    }
}

export default Game;
