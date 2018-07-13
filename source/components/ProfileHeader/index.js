import React from 'react';

export default class ProfileHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <div>
                    <h1>Илон Маск</h1>
                    <span>Предприниматель, изобретатель, инженер, инвестор</span>
                    <p>Стремлюсь сократить глобальное потепление за счёт устойчивого производства потребления энергии и снижения «риска исчезновения человека», сделав жизнь многопланетной и создав человеческую колонию на Марсе.</p>
                </div>
                <img src="/react-trial-hometask/images/elon-musk.9a173.png"/>
            </div>
        )
    }
}