import React from 'react';
import { Link } from "react-router-dom";

import './ProductBox.scss';

export interface ProductBoxProps {
    id: number;
    image: string;
    isBig?: boolean;
    price: string;
    description?: string;
}

export const ProductBox = (props: ProductBoxProps) => {
    return (
        <div className={`ProductBox ${props.isBig ? 'ProductBox--big' : 'ProductBox--small'}`}>
            <Link to={`/product/${props.id}`}>
                <div className="ProductBox__thumb ">
                    <img src={props.image} alt={props.description} />
                </div>
                <div className="ProductBox__content">
                    <p>{props.description}</p>
                    <span>{props.price}</span>
                </div>
            </Link>
        </div>
    )
}