import React from 'react'
import { Chrono } from 'react-chrono'


const items = [
    {
        title: "Summer 2022",
        cardTitle: "PSEG Long Island",
        cardSubtitle: "Project Management Intern",
        cardDetailedText: "During the summer of 2022 I worked as a project management intern. I helped manage a project to replace 1000 power transmission lines, managing timelines and surveys myself."
    },
    {
        title: "Summer 2023",
        cardTitle: "Mack Trucks",
        cardSubtitle: "Manufacturing Engineering Intern",
        cardDetailedText: "The summer of 2023 I worked as a manufacturing engineering intern. I reverse engineered and designed a custom wiring harness for diagnosing truck testing issues. Executed redesign of multiple factory floor stations."
    }
]


export function Timeline() {
    return (
        <Chrono 
            items={items}
            mode="HORIZONTAL"
            itemWidth={150}
            showSingle 
            />

    )
}