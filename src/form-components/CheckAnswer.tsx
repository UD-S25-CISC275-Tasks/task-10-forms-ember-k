import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="shortAnswerResponse">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control
                    as="textarea"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
