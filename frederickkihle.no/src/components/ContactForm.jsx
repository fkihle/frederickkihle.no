import emailjs from '@emailjs/browser';
import { useState } from "react";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMassage] = useState(null);
    const [myCategory, setMyCategory] = useState("commercial");

    const handleChange = (event) => {
        setMyCategory(event.target.value)
    }

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.EMAILJS_SERVICE_ID,
                process.env.EMAILJS_TEMPLATE_ID,
                e.target,
                process.env.EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStateMassage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMassage(null);
                    }, 5000); // Hide message after 5 seconds
                },
                (error) => {
                    setStateMassage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMassage(null);
                    }, 5000); // Hide message after 5 seconds
                }
            );

            // Clear the form after sending the email
            e.target.reset();
    };

    const formLabelStyle = "block text-gray-700 font-bold mb-2";
    const formInputStyle = "w-full p-2 border rounded-md outline-none ring-1 ring-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500";

    return (
        <form onSubmit={sendEmail} className="max-w-lg mx-auto p-4 border rounded-md shadow-md bg-white">
            <div className="mb-4">
                <label className={formLabelStyle} htmlFor="user_name">Name</label>
                <input 
                    type="text" 
                    name="user_name" 
                    required 
                    className={formInputStyle}
                />
            </div>
            <div className="mb-4">
                <label className={formLabelStyle} htmlFor="user_email">Email</label>
                <input 
                    type="email" 
                    name="user_email" 
                    required 
                    className={formInputStyle}
                />
            </div>
            <div className="mb-4">
                <label className={formLabelStyle} htmlFor="user_category">Category</label>
                <select value={myCategory} onChange={handleChange} className={formInputStyle}>
                    <option value="commercial">Commercial</option>
                    <option value="portrait">Portrait</option>
                    <option value="product">Product</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="mb-4">
                <label className={formLabelStyle} htmlFor="user_tel">Phone</label>
                <input 
                    type="tel" 
                    name="user_tel" 
                    className={formInputStyle}
                />
            </div>
            <div className="mb-4">
                <label className={formLabelStyle} htmlFor="user_message">Message</label>
                <textarea 
                    name="user_message" 
                    className={formInputStyle}
                />
            </div>
            <div className="mb-4">
                <input 
                    type="submit" 
                    value={isSubmitting ? "Sending..." : "Send"} 
                    disabled={isSubmitting} 
                    className={`w-full p-2 bg-teal-500 text-white rounded-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-teal-600"}`}
                />
            </div>
            {stateMessage && (
                <p className="text-center text-green-500">
                    {stateMessage}
                </p>
            )}
        </form>
    );
};

export default ContactForm;