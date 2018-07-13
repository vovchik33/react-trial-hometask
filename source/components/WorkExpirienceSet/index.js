import React from 'react';
import SectionHeader from "../SectionHeader";

const Star = (props) => {
    return (
        props.isActive?<li/>:<li className="inactive"/>
    )
}

const Mark = (props) => {
    const stars = [];
    for (var i = 0; i < props.maxValue ; i++) {
         stars.push(i<props.realValue);
    }

    return (
        <ul>
            {stars.map((active, index)=> {
                return <Star key={index} isActive={active}/>
            })}
        </ul>
    )
}

const Skill = (props) => {
    return (
        <div className="skill">
            <span>{props.title}</span>
            <Mark realValue={props.stars} maxValue={10}/>
        </div>
    )
}

const Skills = (props) => {

    return (
        <>
            {
                props.data.map((item)=> {
                    return <Skill key={item.name} title={item.name} stars={item.stars}/>
                })
            }
        </>
    )
}

export default class SkillsSet extends React.Component {
    render() {
        const skills = [
            {name:"Химия", stars:7},
            {name:"Физика", stars:9},
            {name:"Ядерная инженерия", stars:2},
            {name:"Метафизика", stars:9},
            {name:"Астронавтика", stars:8}
        ];
        return (
            <section className="skillset">
                <SectionHeader sectionNumber="01" sectionTitle="Набор скилов"/>
                <Skills data={skills}/>
            </section>
        )
    }
}