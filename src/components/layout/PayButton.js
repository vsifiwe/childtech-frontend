import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";

function PayButton({ course, user }) {
	let tx_ref = user + "-" + course.id + "-" + Date.now();
	const navigate = useNavigate();
	const config = {
		public_key: "FLWPUBK_TEST-43c5c0e6828d1d0452e44df1cb470658-X",
		tx_ref: tx_ref,
		amount: course.price,
		currency: "RWF",
		payment_options: "card,mobilemoney,ussd",
		customer: {
			email: "childtech@gmail.com",
			phonenumber: "0788427257",
			name: "Manzi Asifiwe",
		},
		customizations: {
			title: course.name,
			description: "Buy course",
			logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
		},
	};

	const handleFlutterPayment = useFlutterwave(config);

	return (
		<button
			value="button"
			class="bg-blue-400 text-base text-white px-4 py-2 rounded hover:bg-blue-700 mt-8"
			id="whoobe-t9t5l"
			onClick={() => {
				handleFlutterPayment({
					callback: (response) => {
						closePaymentModal(); // this will close the modal programmatically
						navigate("/coursepagepaid");
					},
					onClose: () => {},
				});
			}}
		>
			Buy now
		</button>
	);
}

export default PayButton;
