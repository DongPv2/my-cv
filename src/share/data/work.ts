import { ITable } from "./school";

export const work_history: ITable = {
    header: ["Company/Organization name", "Position", "Main duties", "Time"],
    body: [
        [
            "Công ty Cổ phần Công nghệ Foxtek Việt Nam", "Programmer", "Full-stack developer", "03/2022"
        ],
        [
            "Công ty Cổ phần Công nghệ Sapo", "Programmer", "Full-stack developer", "07/2020 - 03/2022"
        ],
        [
            "Công ty Cổ phần Công nghệ Sapo", "Intern", "Internship at the company with excellent performance", "05/2020 - 07/2020"
        ]
    ]
}

export interface IJob {
    description: string;
    time: string;
    teamSize: string;
    position: string;
    technologies: string;
    project?: string;
}

export const tktd_mb: IJob = {
    description: "Implementing strategies for the enterprise",
    time: "03/2022 - Today",
    teamSize: "15 members",
    position: "Full-stack developer, project maintenance. Creating interfaces for business personnel to input information as well as import and export documents.",
    technologies: "Java Spring boot, AngularJs, Reactjs, Oracle, Angular Flex-Layout, Scss, ES6, Angular Material UI, ..."
}

export const sapo_blog: IJob = {
    description: "Posting and managing articles to foster interaction, connect, and introduce products to customers",
    time: "06/2021 – 03/2022",
    teamSize: "4 members",
    position: "Full-stack developer. Managing and taking main responsibility for the project, building key components. Handling admin and store front pages, improving SEO scores, speed testing, integrating Facebook connections, ...",
    technologies: "Java Spring boot, NextJs, ReactJs, MariaDB, Ck editor, Scss, ES6, AWS, Bootstrap, Server side, Material UI, ...",
    project: "https://www.sapo.vn/blog"
}

export const sapo_web: IJob = {
    description: "Provide solutions for selling on websites.",
    time: "11/2020 – 02/2022",
    teamSize: "20 members",
    position: `Full-stack developer, project maintenance.
    Helping customers create fast and simple e-commerce websites.
    Creating apps that can be installed on websites`,
    technologies: "Spring boot, C#, Reactjs, Shopify, MariaDB, Kafka, AWS, ES6, integrate Zalo connection, Facebook, Webpack, Babel, Material UI, …",
    project: "https://www.sapo.vn/"
}
export const sapo_hub: IJob = {
    description: "The project supports automatic customer segmentation and management based on location data, behavior, accumulated points... It assists sellers in sending targeted marketing campaigns.",
    time: "07 -11/2020",
    teamSize: "12 members",
    position: `Full-stack developer. Building a module to aggregate customer groups, manage customers, and the lifecycle of customer groups`,
    technologies: "Spring boot, Reactjs, Elasticsearch, Kafka, Rabbit, Ant design, Material UI",
}