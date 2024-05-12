import * as React from 'react';
import './infomation.scss'
import Image from '../../share/img/avt.jpg'

interface IInformationProps {
}

export default function Information(props: IInformationProps) {

    return <div className='infomation'>
        <div className='box'>
            <h1>PERSONAL INFORMATION</h1>
            <div>
                <div className='box-info'>
                    <strong>Full name</strong>
                    <strong>Phùng Văn Đông</strong>
                    <strong>Date of birth</strong>
                    <span>20/11/1999</span>
                    <strong>Phone number</strong>
                    <a href="tel:0372554742">0372554742</a>
                    <strong>Email</strong>
                    <a href='phungdong3020@gmail.com'>phungdong3020@gmail.com</a>
                    <strong>Contact address</strong>
                    <span>Alley 1, Le Van Thiem Street, Thanh Xuan District, Hanoi</span>
                </div>
                <div className='avt'>
                    <img src={Image} />
                </div>
            </div>
            <h2>SELF-INTRODUCTION</h2>
            <span>
                As an individual with a strong capacity for learning, excellent teamwork skills, and a willingness to take on challenging tasks, I am committed to continuous learning and exploring new opportunities.
                I aspire to have the opportunity to leverage my abilities and apply the knowledge I have acquired to advance my career..
            </span>
        </div>

    </div>
}