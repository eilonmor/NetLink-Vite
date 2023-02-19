import { Footer } from "./Footer";
import { Header } from "./Header";
import { useEffect } from "react";
import { useState } from "react";
import smallLogo from '../assets/netlinkSmallLogo.png'
import { useNavigate } from "react-router-dom";

function CreateCountry(){
    let [listOfCountry, setListOfCountrey] = useState(['Israel'])
    useEffect(() =>{
        const getCountryState = async () => {
            const url ='https://restcountries.com/v3.1/all'
            const respon = await fetch(url);
            const data = await respon.json()
            const listOfCountry1 = data.map((country:{ name: {"common": "My Country"} }) =>(
                country.name.common
            ));
            setListOfCountrey(listOfCountry1)
        }
        getCountryState() 
    }, [])


    return(
        <>
            {listOfCountry.sort().map(country => (
                <option>{country}</option>
            ))}
        </>
    )
}       


export function DetailsRegister(){
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div style={{display: 'flex', justifyContent: 'center'}} className="container">
                <main>
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-4" src={smallLogo} alt="" width={72} height={57} />
                        <h2>Register form</h2>
                    </div>
                    <div className="col-md-7 col-lg-8 m-auto">
                        <form className="needs-validation" noValidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName"  required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Company name</label>
                                <input type="text" className="form-control" id="lastName"  required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                <div className="col-sm-6">
                  <label htmlFor="companyName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="companyName"  required />
                  <div className="invalid-feedback">
                    Valid company name is required.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">Username</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="text" className="form-control" id="password" placeholder="Choose your password" required />
                  <div className="invalid-feedback">
                    Please enter your password.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="passwordConfirm" className="form-label">Password</label>
                  <input type="text" className="form-control" id="passwordConfirm" placeholder="repat your password" required />
                  <div className="invalid-feedback">
                    Please repat corectliy your password.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address2" className="form-label">Address<span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className="form-select" id="country" required>
                    <option>Choose...</option>
                    <CreateCountry />
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">State</label>
                  <select className="form-select" id="state" required>
                    <option>Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="same-address" />
                <label className="form-check-label" htmlFor="same-address">i confirm that i have read, understand and agree to the <a href="#">terms</a></label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="save-info" />
                <label className="form-check-label" htmlFor="save-info">I would like to receive offers and publications in my email box</label>
              </div>
              <hr className="my-4" />
              <h4 className="mb-3">Payment <span className="text-muted">(Optional)</span></h4>
              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                  <label className="form-check-label" htmlFor="credit">Credit card</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="paypal">PayPal</label>
                </div>
              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" required />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number"required />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" required />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" required />
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={()=>navigate('pic-info')}>Register</button>
            </form>
          </div>
        </main>
        </div>
        <br />
        <br />
        <br />
        <br />
            <Footer />
        </>
    )
}