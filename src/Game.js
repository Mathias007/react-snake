import React, { Component } from "react";

import Cells from "./Cells";

import { START, BODY, FOOD, KEYS, ROWS, COLS } from "./const";
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

        this.frame = this.frame.bind(this);
        this.start = this.start.bind(this);
    }

    componentDidMount() {
        this.start();
    }

    start() {
        const board = [];
        const snake = [START];

        board[START] = BODY;

        this.setState(
            {
                board,
                snake,
                direction: KEYS.right,
            },
            () => {
                this.frame();
            }
        );
    }

    frame() {
        const { snake, board, direction } = this.state;

        const head = this.getNextIndex(snake[0], direction);

        board[head] = BODY;
        snake.unshift(head);

        board[snake.pop()] = null;

        this.setState({ board, snake }, () => {
            setTimeout(this.frame, 200);
        });
    }

    getNextIndex(head, direction) {
        let x = head % COLS;
        let y = Math.floor(head / COLS);

        switch (direction) {
            case KEYS.up:
                y = y <= 0 ? ROWS - 1 : y - 1;
                break;

            case KEYS.down:
                y = y >= ROWS ? 0 : y + 1;
                break;

            case KEYS.left:
                x = x <= 0 ? COLS - 1 : x - 1;
                break;

            case KEYS.right:
                x = x >= COLS - 1 ? 0 : x + 1;
                break;

            default:
                return;
        }

        return COLS * y + x;
    }

    render() {
        const { board } = this.state;
        return <Cells board={board} />;
    }
}

export default Game;
