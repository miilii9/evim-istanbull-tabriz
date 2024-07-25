"use client"
import { useEffect } from "react"

export const ReportView = ({ slug }) => {
    useEffect(() => {
        fetch("/api/views", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ slug })
        })
    }, [slug])
    return null
}