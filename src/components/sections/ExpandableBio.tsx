"use client"

import { useState } from "react"

// Shows the short text on a person card. If a longer bio is given, a
// "Read more" link expands it, and "Show less" collapses it again.
export function ExpandableBio({ summary, bio }: { summary?: string; bio?: string }) {
    const [open, setOpen] = useState(false)
    const showFull = open && !!bio
    return (
        <div className="mb-4 text-sm">
            <p className={showFull ? "text-left leading-relaxed" : "text-center"}>
                {showFull ? bio : summary}
            </p>
            {bio && (
                <div className="text-center">
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        className="mt-2 font-medium text-green-700 hover:text-green-800 hover:underline underline-offset-2"
                    >
                        {open ? "Show less" : "Read more"}
                    </button>
                </div>
            )}
        </div>
    )
}
