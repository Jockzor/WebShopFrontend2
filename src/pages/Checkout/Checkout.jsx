import React, { useContext } from 'react';
import { ShopContext } from '../../components/ShopContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const formFieldsDefaultValue = {
  'first-name': "",
  'last-name': "",
  'email': "",
  'phone-number': "",
  'address': "",
  'postal-code': "",
  'city': '',
  'ccn': ''
}

export const Checkout = () => {
    const { getGroupedcartItemsByProductId, getTotalCartAmount } = useContext(ShopContext);
  const [formFields, setFormFields] = React.useState(formFieldsDefaultValue);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleOnCompletePayment = () => {
    console.log('COMPLETE PAYMENT OBJ', formFields);

    navigate('/completed-order');
  }

  const completeButtonIsDisabled = Object.values(formFields).some(value => value === "") || getTotalCartAmount() <= 0;

  return (
    <div className="container">
      <div className="checkout-container ">
        <div className="outer-container">
          <div className="forms">
            <div className="forms-container">
              <h2>1. Kontaktuppgifter</h2>
              <label htmlFor="first-name">Förnamn:</label>
              <input className='inputCheckout' id="first-name" value={formFields['first-name']} onChange={handleOnChange}/>

              <label htmlFor="last-name">Efternamn:</label>
              <input className='inputCheckout' id="last-name"  value={formFields['last-name']} onChange={handleOnChange}/>

              <label htmlFor="email">E-postadress:</label>
              <input className='inputCheckout' id="email" type="email"  value={formFields['email']} onChange={handleOnChange}/>

              <label htmlFor="phone-number">Telefonnummer:</label>
              <input className='inputCheckout' id="phone-number" type="tel"  value={formFields['phone-number']} onChange={handleOnChange}/>
            </div>

            <div className="forms-container">
              <h2>2. Leveransuppgifter</h2>
              <label htmlFor="address">Address:</label>
              <input className='inputCheckout' id="address"  value={formFields['address']} onChange={handleOnChange}/>

              <label htmlFor="postal-code">Postnummer:</label>
              <input className='inputCheckout' id="postal-code"  value={formFields['postal-code']} onChange={handleOnChange}/>

              <label htmlFor="city">Stad:</label>
              <input className='inputCheckout' id="city"  value={formFields['city']} onChange={handleOnChange}/>
            </div>

            <div className="forms-container">
              <h2>3. Betalningsuppgifter</h2>

              <label htmlFor="ccn">Credit Card Number:</label>
              <input className='inputCheckout' id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" 
                autoComplete="cc-number" maxLength="19" 
                placeholder="xxxx xxxx xxxx xxxx" required 
                value={formFields['ccn']} onChange={handleOnChange}>
                </input>
            </div>
          </div>

          <div className="details">
            <h2>Detaljer</h2>
            <ul className='list'>
              {getGroupedcartItemsByProductId.map((article) => (
                  <li key={article[0]?.productId}  className='list-item'><img className='image' src={'http://localhost:1337' + article[0]?.image?.data?.attributes?.url}/>{article[0]?.title} { article[0]?.price}kr, Antal: {article?.length}</li>
                ))
              }
            </ul>
            <hr className='horizontal-line'></hr>
            <h3>Totalpris: {getTotalCartAmount()}kr</h3>
          </div>
            <button disabled={completeButtonIsDisabled} onClick={handleOnCompletePayment} className='complete-payment'>Slutför beställning</button>
        </div>

      </div>
    </div>
  )
}