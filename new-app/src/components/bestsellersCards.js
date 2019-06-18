import React, {Component} from 'react';
import Card from './card';
import BdService from '../services/bdService';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default class BestsellersCards extends Component {
    //создаем сервис
    BdService = new BdService();
    //создаем состояние, в котором отслеживаем посты и ошибки
    state = {
        cards: [],
        error: false
    } //вместо конструктора (class fields)
    
    //life cycle hooks
    //как только компонент построился
    componentDidMount() {
        this.updateCards();
    }

    updateCards() {
        this.BdService.getAllBestsellers()
            .then(this.onCardsLoaded)
            .catch(this.onError)
    }

    onCardsLoaded = (cards) => {
        this.setState({
            // posts: posts,
            // было раньше
            // теперь, если cвойство и значение совпадают, то можно писать 1 раз
            cards,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, url, description='...', price, country='...'} = item;

            return (
                <Card
                    key={name}
                    src={url}
                    name={name}
                    price={price}
                    country={country}
                    description={description}
                />
            )

        })
    }

    render() {
        const {error, cards} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(cards);

        return (
            <Block>
                {items}
            </Block>
        )
    }
}