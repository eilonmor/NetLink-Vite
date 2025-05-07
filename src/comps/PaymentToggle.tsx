import { useState } from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Payment } from './Payment';

const PaymentToggle = () => {
    const [isPaymentInfoVisible, setIsPaymentInfoVisible] = useState(false);

    const togglePaymentInfo = () => {
        setIsPaymentInfoVisible((prev) => !prev);
    };

    return (
        <MDBRow>
            <MDBCol>
                <div className="collapsible-section">
                    <MDBBtn className="mb-4" size="lg" onClick={togglePaymentInfo}>
                        {isPaymentInfoVisible ? 'Hide Payment Information' : 'Add Payment Information (optional)'}
                    </MDBBtn>
                    {isPaymentInfoVisible && (
                        <Payment />
                    )}
                </div>
            </MDBCol>
        </MDBRow>
    );
};

export default PaymentToggle;