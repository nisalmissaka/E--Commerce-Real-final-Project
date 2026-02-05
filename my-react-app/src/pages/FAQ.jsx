import React, { useState } from 'react'; 

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
        <div className='faq-container' style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <div className='faq-header' style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about our products and services</p>
            </div>

            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                        style={{ borderBottom: '1px solid #ddd', padding: '15px', cursor: 'pointer' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <small style={{ color: 'blue', fontWeight: 'bold' }}>{item.category}</small>
                                <h3 style={{ margin: '5px 0' }}>{item.question}</h3>
                            </div>
                            <span style={{ fontSize: '20px' }}>{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        
                       
                        {activeIndex === index && (
                            <div style={{ marginTop: '10px', color: '#555', background: '#f9f9f9', padding: '10px' }}>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;