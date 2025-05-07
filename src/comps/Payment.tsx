import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import InputMask from "react-input-mask";

export function Payment() {
    return (
        <div id="paymentInfoSection">
            <h4 className="mt-4">Payment Information</h4>
            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Name on Card"
                        size="lg"
                        id="nameOnCard"
                        type="text"
                        placeholder="John Doe"
                    />
                </MDBCol>
                <MDBCol md="6">
                    <InputMask
                        mask="9999 9999 9999 9999"
                        placeholder="1234 5678 9012 3456"
                    >
                        {(inputProps) => (
                            <MDBInput
                                {...inputProps}
                                wrapperClass="mb-4"
                                label="Card Number"
                                size="lg"
                                id="cardNumber"
                                type="text"
                            />
                        )}
                    </InputMask>
                </MDBCol>
                <MDBCol md="3">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Expiration Date"
                        size="lg"
                        id="expDate"
                        type="text"
                        placeholder="MM/YY"
                    />
                </MDBCol>
                <MDBCol md="3">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="CVV"
                        size="lg"
                        id="cvv"
                        type="text"
                        placeholder="123"
                    />
                </MDBCol>
            </MDBRow>
            <MDBBtn className="mb-4" size="lg">
                Submit Payment
            </MDBBtn>
        </div>
    );
}