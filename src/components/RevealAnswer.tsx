import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <p>Reveal Answer</p>
            <Button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                Reveal Answer
            </Button>{" "}
            Answer: {visible && 42}{" "}
        </div>
    );
}
