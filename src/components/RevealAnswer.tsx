import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
<<<<<<< HEAD
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
=======
    return <div>Reveal Answer</div>;
>>>>>>> origin/task-forms
}
