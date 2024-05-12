import { ITable } from "../data/school";

interface ITableProps {
    title: string
    data: ITable
}

export default function Table(props: ITableProps) {

    const { header, body } = props.data;

    return (
        <>
            <h3>{props.title}</h3>
            <table>
                <thead>
                    <tr>
                        {header.map((item, index) => {
                            return <th key={index}>{item}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {body.map((item, index) => {
                        return <tr key={index}>
                            {item.map((child, indexChild) => {
                                return <td key={indexChild}>{child}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}