import React, { useState } from 'react';
import './Productpage.css';

const ProductPage = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showSpecification, setShowSpecification] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleSpecification = () => {
    setShowSpecification(!showSpecification);
  };

  const toggleShipping = () => {
    setShowShipping(!showShipping);
  };

  return (
    <div>
      <div className="section">
        <nav className="breadcrumb">
          HOME &gt; OUR PRODUCTS &gt; ARTIART DEER SPILL PROOF TRAVEL CUP WITH FLIP OVER LID - 2.7
        </nav>
      </div>

      <div className="section">
        <div className="product">
          <img src="https://admin.foxboxrewards.com/public/content/uploads/20221124/Artiart_Deer_Spill_Proof_Suction_Travel_Mug.jpg" alt="Product" className="product-image" />

          <div className="product-details">
            <h2>Artiart DEER Spill Proof Travel Cup With Flip Over Lid - 2.7</h2>
            <h3>ARTIART</h3>

            <div className="product-actions">
              <p>48 GloCoins</p>
              <p>1</p>
              <button className="orange-button">ADD TO CART</button>
              <button className="white-button">WISHLIST</button>
              <div className="share-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="product-description">
          <h3 onClick={toggleDescription}>DESCRIPTION</h3>
          <p className={showDescription ? 'show' : ''}>
          DESIGN : Premium matt finish looks elegant wherever you carry it. Unicolor design goes with whatever surroundings it is kept in. A convenient lid on top has an small and easy to sip spout which makes for easy drinking on the go
TECHNOLOGY : Our Double-wall (food grade PP tube) vacuum Insulation in each and every product keeps your drink at the same temperature for long hours. Finest textured PP casting provides a temperature shield for comfortable gripping, scratch resistant & anti slipping.
CONVENIENT : Designed for ultimate portability & comfort with one touch flip over lid mechanism which ensures spill proof performance. Moderate size rim for smooth flow of liquids in apt volume. Wide mouth ensures ease of filling with ice(if required) and also facilitates cleaning the interior, for hygiene.
INNOVATIVE : Clever grip-pad suction technology reduces spillage occurrences as it will not tip over even if you accidently knock into it. Pick up easily by vertical lift like any other cup and it will detach itself easily and quickly without any effort.
QUALITY : Stay healthy with our BPA free and non-toxic cups as our each and every product is constructed from 100% food grade materials. These premium grade cups won't rust, retain or transfer flavors.
Capacity: 330ml
Hot & Cold- 2 Hours
Item Weight : 280 g
Item Dimensions LxWxH : 20.5 x 8.5 x 8.5 Centimeters
          </p>
          <h3 onClick={toggleSpecification}>SPECIFICATION</h3>
          <p className={showSpecification ? 'show' : ''}>
          DESIGN : Premium matt finish looks elegant wherever you carry it. Unicolor design goes with whatever surroundings it is kept in. A convenient lid on top has an small and easy to sip spout which makes for easy drinking on the go
TECHNOLOGY : Our Double-wall (food grade PP tube) vacuum Insulation in each and every product keeps your drink at the same temperature for long hours. Finest textured PP casting provides a temperature shield for comfortable gripping, scratch resistant & anti slipping.
CONVENIENT : Designed for ultimate portability & comfort with one touch flip over lid mechanism which ensures spill proof performance. Moderate size rim for smooth flow of liquids in apt volume. Wide mouth ensures ease of filling with ice(if required) and also facilitates cleaning the interior, for hygiene.
INNOVATIVE : Clever grip-pad suction technology reduces spillage occurrences as it will not tip over even if you accidently knock into it. Pick up easily by vertical lift like any other cup and it will detach itself easily and quickly without any effort.
QUALITY : Stay healthy with our BPA free and non-toxic cups as our each and every product is constructed from 100% food grade materials. These premium grade cups won't rust, retain or transfer flavors.
Capacity: 330ml
Hot & Cold- 2 Hours
Item Weight : 280 g
Item Dimensions LxWxH : 20.5 x 8.5 x 8.5 Centimeters
Product Code: GLB122

          </p>
          <h3 onClick={toggleShipping}>SHIPPING</h3>
          <p className={showShipping ? 'show' : ''}>
          For Products, Orders would be dispatched within 5 to 7 business days. The In-Transit time typically would be 2-3 business days. Please ensure proper address, pin codes along with mobile number is provided for seamless deliveries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
