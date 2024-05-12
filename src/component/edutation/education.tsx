import * as React from 'react';
import { ITable, certification, secondary, university } from '../../share/data/school';
import './education.scss';
import Table from '../../share/component/table';
interface IEducationProps { }

export default function Education(props: IEducationProps) {
    return <div className='education'>
        <div>
            <h1>EDUCATION & TRAINING</h1>
            <Table title='Secondary school' data={secondary} />
            <Table title='University education' data={university} />
            <Table title='Certification programs' data={certification} />
        </div>
    </div>
}
