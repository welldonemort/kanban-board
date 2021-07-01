import React from 'react';
import './Footer.css';

const Footer = ({ dataMock }) => {
    const backlogTasksCount = dataMock[0].issues.length;
    const finishedTasksCount = dataMock[3].issues.length;

    return (
        <div className="footer">
            <div className="footer__tasks-count">
                <p className="tasks-count__text margin-from-count">
                    Active tasks: {backlogTasksCount}
                </p>
                <p className="tasks-count__text">
                    Finished tasks: {finishedTasksCount}
                </p>
            </div>
            <div className="tasks-creator">
                Kanban board by welldonemort, 2021
            </div>
        </div>
    );
}

export default Footer;