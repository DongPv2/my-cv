export interface ITable {
    header: string[];
    body: string[][];
}
export const secondary: ITable = {
    header: ["From date", "To date", "School name", "Graduation type"],
    body: [
        [
            "2014", "2017", "Trường trung học phổ thông Trần Phú Ba Vì", "Good"
        ]
    ]
}
export const university: ITable = {
    header: ["From date", "To date", "Major", "College name", "Degree type", "Graduation type"],
    body: [
        [
            "2017", "2020", "CNTT", "Hanoi University of Industry", "IT Engineer", "Good"
        ]
    ]
}
export const certification: ITable = {
    header: ["Time", "Course title", "Training organization", "Country", "Certificate"],
    body: [
        [
            "7/2019 - 3/2020", "Java BootCamp Training", "DevPro", "VietNam", ""
        ],
        [
            "11/2022 - 6/2023", "English course", "LangMaster", "VietNam", ""
        ]
    ]
}