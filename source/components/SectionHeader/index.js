import React from 'react';

export default class SectionHeader extends React.Component {
    render() {
        return (
            <section className="sectionHeading">
                <h1>
                    <span className="sectionNumber">{this.props.sectionNumber}.</span>
                    <span className="sectionName">{this.props.sectionTitle}</span>
                </h1>
            </section>
        )
    }
}