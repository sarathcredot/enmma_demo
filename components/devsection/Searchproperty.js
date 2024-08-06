'use client';
import Link from "next/link"
import { useState } from 'react';
import ContactFormPopup from '@/components/elements/ContactFormPopup';
export default function Searchproperty() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupTitle, setPopupTitle] = useState('');

    const handleEnquireClick = (title) => {
        setPopupTitle(title);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (

 <div className="container dev-bottom">
 
 
 <div className=" search-row-dev  ">
 <div className="search__widget-dev" >
   
    <div className="search-cardtop-dev col-xl-12">
     <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
    </div>
    <div className="search-cardbottom-dev">
        <h6 id="property-title">Apartment One bedroom</h6>
        <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
        <div className="search-icon">
            <span>1725 sqft</span>
            <span>3 Bed</span>
            <span>1 Hall</span>
            <span>2 bath</span>
        </div>
        <div className="dev-search-foot"><h4>180 KWD</h4>
        <button
            className="search-dev-button"
            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
        >
            ENQUIRE
        </button></div>
    </div>

     

 </div>
 <div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>

<div className="search__widget-dev" >
   
   <div className="search-cardtop-dev col-xl-12">
    <img src="/assets/img/images/serach_property.jpg" alt="" /><span className="spandev">Residential</span>
   </div>
   <div className="search-cardbottom-dev">
       <h6 id="property-title">Apartment One bedroom</h6>
       <Link  className='location-dev'href="">Jleeb Al-Shiyoukh, (Al Farwaniya - 1071)</Link>
       <div className="search-icon">
           <span>1725 sqft</span>
           <span>3 Bed</span>
           <span>1 Hall</span>
           <span>2 bath</span>
       </div>
       <div className="dev-search-foot"><h4>180 KWD</h4>
       <button 
                            className="search-dev-button" 
                            onClick={() => handleEnquireClick(document.getElementById('property-title').innerText)}
                        >
                            ENQUIRE
                        </button></div>
   </div>

    

</div>
 </div>
 {isPopupOpen && <ContactFormPopup title={popupTitle} onClose={closePopup} />}
 </div>
    );
};
