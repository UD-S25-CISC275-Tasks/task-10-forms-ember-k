import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "Thanksgiving"
    | "April Fools' Day";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("April Fools' Day");

    const HOLIDAY_EMOJI: Record<Holiday, string> = {
        Christmas: "🎄",
        "April Fools' Day": "🃏😂",
        Easter: "🥚🐇",
        Halloween: "🎃",
        Thanksgiving: "🦃 ",
    };

    const HOLIDAY_DATE_TRANSITION: Record<Holiday, Holiday> = {
        Christmas: "April Fools' Day",
        "April Fools' Day": "Easter",
        Easter: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
    };
    const HOLIDAY_ALPHABET_TRANSITION: Record<Holiday, Holiday> = {
        Christmas: "Easter",
        "April Fools' Day": "Christmas",
        Easter: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "April Fools' Day",
    };
    return (
        <div>
            Cycle Holiday
            <p>Current Holiday: {HOLIDAY_EMOJI[holiday]}</p>
            <Button
                onClick={() => {
                    setHoliday(HOLIDAY_ALPHABET_TRANSITION[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <p></p>
            <Button
                onClick={() => {
                    setHoliday(HOLIDAY_DATE_TRANSITION[holiday]);
                }}
            >
                Advance By Year
            </Button>
        </div>
    );
}
