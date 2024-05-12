import Table from "../../share/component/table"
import Tag from "../../share/component/tag/tag"
import { IJob, sapo_blog, sapo_hub, sapo_web, tktd_mb, work_history } from "../../share/data/work"
import "./work.scss"

interface IWorkProps { }

export default function Work(props: IWorkProps) {
    return <div className="work">
        <div className="box">
            <h1>WORK EXPERIENCE</h1>
            <Table title='Work history' data={work_history} />
            <h3>Details of projects participated in</h3>
            <WorkDetail title="Business Process Management (Onsite MB bank)" job={tktd_mb} />
            <WorkDetail title="Sapo Blog" job={sapo_blog} />
            <WorkDetail title="Sapo Web" job={sapo_web} />
            <WorkDetail title="Sapo Hub" job={sapo_hub} />
        </div>
    </div>
}

interface IWorkDetailProps {
    title: string,
    job: IJob
}

function WorkDetail(props: IWorkDetailProps) {
    const { title, job } = props;
    return <>
        <h4>{title}</h4>
        <div className="line">

        </div>
        <div className="job-detail">
            <strong>Project description</strong>
            <div>{job.description}</div>
            <strong>Time</strong>
            <div>{job.time}</div>
            <strong>Teamsize</strong>
            <div>{job.teamSize}</div>
            {job.project && <strong>Project</strong>}
            {job.project && <div>{job.project}</div>}
            <strong>Position</strong>
            <div>{job.position}</div>
            <strong>Technologies used</strong>
            <div><Tag tags={job.technologies} /></div>
        </div>
    </>
}