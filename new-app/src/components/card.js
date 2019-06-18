import React, {Component} from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    width: 23%;
    height: 320px;
    margin: 1%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    color: #262626;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        width: 100%;
        min-height: 120px;
        max-height: 120px;
        object-fit: cover;
    }

    .card-title {
        min-height: 44px;
        max-height: 44px;
        font-size: 18px;
        font-weight: bold;
    }

    .card-country {
        min-height: 18px;
        max-height: 18px;
        font-style: italic;
    }

    .card-descr {
        min-height: 72px;
        max-height: 72px;
        font-style: italic;
    }

    .card-price {
        min-height: 18px;
        max-height: 18px;
        font-style: italic;
    }

    span {
        font-weight: bold;
        color: #767676;
        font-style: normal;
    }
`;

export default class Card extends Component {
    render() {
        const {src, name, alt=name, country='...', description='...', price} = this.props;
        let descr;

        if (description.length > 70) {
            descr = `${description.slice(0, 71)}...`; 
        } else {
            descr = description;
        }

        return (
            <StyledCard>
                <img src={src} alt={alt} width="165" height="90"></img>
                <div className="card-title">{name}</div>
                <div className="card-country"><span>Country:</span> {country}</div>
                <div className="card-descr"><span>Description:</span> {descr}</div>
                <div className="card-price"><span>Price:</span> {price}</div>
            </StyledCard>
        )
    }
}