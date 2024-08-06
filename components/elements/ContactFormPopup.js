'use client';
import { useState, useEffect, useRef } from 'react';
import styles from '/public/assets/css/ContactFormPopup.module.css';

const ContactFormPopup = ({ title, onClose }) => {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef]);

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent} ref={popupRef}>
                <div className="contact__form-wrap">
                    <h2 className="title">Enquire About the Property</h2>
                    <div className="form-grp">
                            <h6>{title}</h6>
                        </div>
                    <p>Fill out the form below to enquire about property. We'll get back to you with the information you need promptly.</p>
                    <form id="contact-form" action="assets/mail.php" method="POST">
                        
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-grp">
                                    <input type="text" name="name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-grp">
                                    <input type="email" name="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-grp">
                                    <input type="number" name="phone" placeholder="Phone" />
                                </div>
                            </div>
                        </div>
                        <div className="form-grp">
                            <textarea name="message" placeholder="Message" />
                        </div>
                        <div className="form-grp checkbox-grp">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                    <p className="ajax-response mb-0" />
                </div>
                <button onClick={onClose} className={styles.closeBtn}><i class="fa fa-times" aria-hidden="true"></i></button>
            </div>
        </div>
    );
};

export default ContactFormPopup;
