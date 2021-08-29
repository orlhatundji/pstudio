import React from 'react'
import Slide from 'react-reveal/Slide';

// components
import Button from '../../common/button'

// styles
import { Wrapper } from './style'

// Assets
import { ReactComponent as HeartIcon } from '../../assets/images/heart.svg'
import { ReactComponent as CartIcon } from '../../assets/images/shopping-cart-red.svg'

// data
import products from './data'

const buttonStyle = {
    background: '#FFF5F8',
    color: '#FF000',
    fontSize: '14px',
    fontWeight: '700',
    width: '80%',
    padding: '12px 21px'
}

const Products = () => (
    <Wrapper className="app-section">
        <center>Amazing Products</center>
        
        <div className="products">
            {products.map((product) => (
                <Slide bottom>
                    <div className="product-item">
                        <img src={product.imageUrl} alt={product.title} />     
                        <span className="product-item-title">{product.title}</span>
                        <span className="product-price">{product.price}</span>
                        <div className="btn-reaction">
                            <Button title="Shop Now" style={buttonStyle}><CartIcon /></Button>
                            <div className="heart-bg"><HeartIcon /></div>.
                        </div>
                    </div>
                </Slide>
            ))}
        </div>
        
    </Wrapper>
)

export default Products

