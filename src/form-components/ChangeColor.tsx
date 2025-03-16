import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "gray",
    "teal",
    "indigo",
]; // NEED MORE (8)

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {/*Used Copilot suggestion of placing the whole <Form.Check> within the maping function body */}
                {COLORS.map((colorSelect: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        id={`color-${colorSelect}`}
                        key={colorSelect}
                        onChange={(event) => {
                            updateColor(event);
                        }}
                        value={colorSelect}
                        label={colorSelect}
                        checked={color === colorSelect}
                    />
                ))}
            </Form.Group>
            The selected color is{" "}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
        </div>
    );
}
