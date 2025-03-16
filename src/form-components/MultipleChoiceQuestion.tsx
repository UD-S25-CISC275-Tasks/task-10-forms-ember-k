import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    function updateSelectedAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group
                controlId="answersDropdown"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Form.Label>What is the answer?</Form.Label>
                <Form.Select
                    value={selected}
                    onChange={updateSelectedAnswer}
                    style={{
                        width: "10%",
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <div>{selected === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
