import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditMode(event.target.checked);
    }

    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                label="Enable Edit Mode?"
                inline
                type="switch"
                id="is-edit-mode"
                checked={isEditMode}
                onChange={updateMode}
            />
            {/*CHatGPT helped with CSS inline styling */}
            {isEditMode && (
                <Form.Group
                    controlId="formUserName"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={updateName}
                        style={{
                            width: "30%",
                        }}
                    />
                    <Form.Check
                        inline
                        type="checkbox"
                        id="is-student-check"
                        label="I am a student"
                        checked={isStudent}
                        onChange={updateStudentStatus}
                        style={{ marginLeft: "5px" }}
                    />
                </Form.Group>
            )}
            <div>
                {name} {isStudent ? "is" : "is not"} a student.
            </div>
        </div>
    );
}
