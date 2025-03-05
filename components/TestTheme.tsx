"use client"
import React from 'react';
import {useTheme} from "next-themes";

const TestTheme = () => {
    const { theme } = useTheme();

    return (
        <div className="p-4 space-y-4">
            <div>
                <strong>Current Theme:</strong> {theme}
            </div>

            <div className="bg-cream-300 dark:bg-strawberry-900 p-4 text-black dark:text-white">
                Themed Background Test
                <br />
                Light: Cream Background
                <br />
                Dark: Strawberry Background
            </div>

            <div className="text-strawberry-700 dark:text-strawberry-200">
                Themed Text Test
                <br />
                Light: Darker Strawberry
                <br />
                Dark: Lighter Strawberry
            </div>
        </div>
    );
};

export default TestTheme;