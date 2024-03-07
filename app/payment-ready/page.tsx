"use client";
import axios from "axios";

export default function PaymentReady() {

    const payment = async () => {
        // try {
        //     const response = await axios.post(
        //         "https://open-api.kakaopay.com/online/v1/payment/ready",
        //         {
        //             "cid": "TC0ONETIME",
        //             "partner_order_id": "partner_order_id",
        //             "partner_user_id": "partner_user_id",
        //             "item_name": "초코파이",
        //             "quantity": "1",
        //             "total_amount": "2200",
        //             "vat_amount": "200",
        //             "tax_free_amount": "0",
        //             "approval_url": "http://localhost:3000",
        //             "fail_url": "http://localhost:3000/payment-fail",
        //             "cancel_url": "http://localhost:3000/payment-cancel"
        //         },
        //         {
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "Authorization": "SECRET_KEY DEVD194324797E1AA50D3114E5143C2AA1609D4C",
        //             },
        //         }
        //     );
        // }
        // catch (error) {
        //     console.error(error);
        // }
    }

    return (
    <div>
        <h1>Payment Ready</h1>
        <button onClick={payment}>Let's Go Payment</button>
    </div>
    )
}