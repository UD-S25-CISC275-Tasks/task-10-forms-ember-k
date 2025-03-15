import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
<<<<<<< HEAD
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <div>
            Start Attempt
            <p>Quiz Attempts Remaining: {attempts}</p>
            <Button
                onClick={() => {
                    setProgress(true);
                    setAttempts(attempts - 1);
                }}
                disabled={progress || attempts < 1}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={progress}
            >
                Mulligan
            </Button>
        </div>
    );
=======
    return <div>Start Attempt</div>;
>>>>>>> origin/task-forms
}
