import "./skill.scss"
import { other, technical } from "../../share/data/skill";
import Tag from "../../share/component/tag/tag";
interface SkillProps {
}

export default function Skill(props: SkillProps) {
    return (
        <div className="skill">
            <div className="box">
                <h1>SKILLS</h1>
                <div>
                    <Table title="Technical skills" skill={technical} />
                    <Table title="Other skills" skill={other} />
                </div>
            </div>
        </div>
    );
}

interface ITableProps {
    title: string;
    skill: any;
}

function Table(props: ITableProps) {

    return (
        <>
            <h3>
                {props.title}
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Skill name</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(props.skill).map(function (key, index) {
                            return <tr>
                                <td><strong>{key}</strong></td>
                                <td><Tag tags={props.skill[key]} /></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    );
}