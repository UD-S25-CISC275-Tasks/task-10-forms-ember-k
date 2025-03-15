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
                type="switch"
                id="is-edit-mode"
                label="Enable Edit Mode?"
                checked={isEditMode}
                onChange={updateMode}
            />
            {isEditMode && (
                <Form.Group controlId="formUserName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="I am a student"
                        checked={isStudent}
                        onChange={updateStudentStatus}
                    />
                </Form.Group>
            )}
            <div>
                {name} {isStudent ? "is" : "is not"} a student.
            </div>
        </div>
    );
}
/*
The EditMode component has two states controlled by a switch: the default state shows text 
indicating the user’s name and whether they are a student, and then the alternate state is 
an editable form for editing the user’s name and whether they are a student.

    You will need state to handle the component being in “edit mode”, the user’s name, and 
    whether or not the user is a student.

HINT: If you can’t figure out why you are failing a test, read the test code. The tests 
are the most specific form of description.

HINT: If an element is rendered not visible, then a test looking for it will fail. If a 
test fails, check to see if the elements you have written are rendered in the Javascript.
 */
