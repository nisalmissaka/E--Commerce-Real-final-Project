import React, { useState } from 'react'; 
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            category: "Shipping",
            question: "How long does delivery take?",
            answer: "Standard delivery takes 3-5 business days. Express delivery options are available at checkout for faster arrival."
        },
        {
            category: "Payments",
            question: "What payment methods are available?",
            answer: "We accept all major credit/debit cards and Cash on Delivery for most areas."
        },
        {
            category: "Returns",
            question: "What is your return policy?",
            answer: "You can return any item within 7 days of delivery. Items must be unused and in their original packaging with tags."
        },
        {
            category: "Orders",
            question: "Can I track my order in real-time?",
            answer: "Yes! Once your order is shipped, you will receive a tracking ID via email and SMS to monitor your package."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='faq-wrapper'>
            <div className='faq-header'>
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about our products and services</p>
            </div>

            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                      
                        <div className="faq-question-section">
                            <div>
                                <span className="faq-badge">{item.category}</span>
                                <h3 className="faq-question-text">{item.question}</h3>
                            </div>
                            <div className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>
                                {activeIndex === index ? '−' : '+'}
                            </div>
                        </div>
                     
                        <div className={`faq-answer-section ${activeIndex === index ? 'show' : ''}`}>
                            <div className="faq-answer-inner">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;