import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1, setDie1] = useState<number>(2);
    const [die2, setDie2] = useState<number>(5);
    let resultMessage = "";
    if (die1 === die2) {
        if (die1 === 1) {
            resultMessage = "You Lose!";
        } else {
            resultMessage = "You Win!";
        }
    }
    return (
        <div>
            <p>Two Dice</p>
            <Button
                onClick={() => {
                    setDie1(d6());
                }}
            >
                Roll Left
            </Button>
            <p>
                {" "}
                Left Die Roll: <span data-testid="left-die">{die1}</span>
            </p>
            <Button
                onClick={() => {
                    setDie2(d6());
                }}
            >
                Roll Right
            </Button>
            <p>
                Right Die Roll: <span data-testid="right-die">{die2}</span>
            </p>
            <p>{resultMessage}</p>
        </div>
    );
}
