import React from 'react';
import SectionHeader from "../SectionHeader";

const Work = (props) => {
    return (
        <div className="work">
            <span>{props.title}</span>
        </div>
    )
}

const Works = (props) => {
    return (
        <>
            {
                props.data.map((item) => {
                    return (
                        <div className="workplace">
                            <div className="leftColumn"><span className="period">{item.period}</span><span
                                className="position">{item.position}</span></div>
                            <div className="rightColumn"><span className="location">{item.location}</span><span
                                className="company">{item.company}</span></div>
                        </div>
                    );
                })
            }
        </>
    )
}

export default class WorksExpirienceSet extends React.Component {
    render() {
        const worksData = [
            {company:"SolarCity", location:"Сан-Матео, США", period:"06.2006 — настоящее время", position:"Председатель совета директоров"},
            {company:"SolarCity", location:"Сан-Матео, США", period:"06.2007 — настоящее время", position:"Председатель совета директоров"},
            {company:"SolarCity", location:"Сан-Матео, США", period:"06.2008 — настоящее время", position:"Председатель совета директоров"},
            {company:"Tesla Motors", location:"Пало-Алто, США", period:"02.2004 — настоящее время", position:"Директор и продуктовый архитектор"},
            {company:"SpaceX", location:"Хоторн, США", period:"06.2002 — настоящее время", position:"Директор и ведущий дизайнер"},
            {company:"X.com и PayPal", location:"Сан-Хосе, США", period:"03.1999 — 10.2002", position:"Директор"},
            {company:"Zip2", location:"Калифорния, США", period:"01.1995 — 02.1999", position:"Сооснователь"}
        ];
        return (
            <section className="worksset">
                <SectionHeader sectionNumber="02" sectionTitle="Опыт работы"/>
                <Works data={worksData}/>
            </section>
        )
    }
}