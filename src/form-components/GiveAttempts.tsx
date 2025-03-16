import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Attempts Remaining: {attempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(
                        parseInt(requestedAttempts) ?
                            parseInt(requestedAttempts) + attempts
                        :   attempts,
                    );
                }}
            >
                Gain
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts < 1 ? true : false}
            >
                Use
            </Button>
        </div>
    );
}
