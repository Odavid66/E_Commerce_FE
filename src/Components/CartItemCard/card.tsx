import './card.css'
export const CartItemCard = () => {
    return(
        
            <div className="CartItemCard">
                <img src="" alt="" />
                <div>
                    <h3>Product Name</h3>
                    <p>Product Description</p>
                    <p>$99.99</p>
                </div>
                <div>
                    <button><img src="" alt="" /></button>
                    <div>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
            </div>
        
    )
}