'use client'
import Link from 'next/link'
import { useEffect, useState, useRef} from 'react'

const Banner3 = ({ title, paragraph, bgColor, fontColor, fontColor2 }) => {
    const [value, setValue] = useState(25000);

    const handleResize = () => {
        // Handle resize logic
    };

    useEffect(() => {
        // Initial setup
        handleResize();

        // Attach event listener
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleChange = e => {
        setValue(Math.ceil(e.target.value / 5) * 5);
    };


    const [isOpen, setIsOpen] = useState(false);
    const [selectedBedrooms, setSelectedBedrooms] = useState([]);
    const [selectedBathrooms, setSelectedBathrooms] = useState([]);
    const [customBedroom, setCustomBedroom] = useState('');
    const [customBathroom, setCustomBathroom] = useState('');
    const dropdownRef = useRef(null);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleBedroomChange = (e) => {
        const value = e.target.value;
        setSelectedBedrooms(prev => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };
    const handleBathroomChange = (e) => {
        const value = e.target.value;
        setSelectedBathrooms(prev => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <>
            <section className="banner__area-one banner__bg-four z-9" style={{ backgroundColor: bgColor }} >
                <div className="container" style={{ color: fontColor }} >
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content-two">
                                <h2 className="title " style={{ color: fontColor }} data-aos="fade-up" data-aos-delay={100}>{title}</h2>
                                <p data-aos="fade-up" style={{ color: fontColor2 }} data-aos-delay={300}>{paragraph}</p>
                                {/* <Link href="/contact" className="btn border-btn" data-aos="fade-up" data-aos-delay={600}>Get Started</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-social banner-social-two">
                    <h5 className="title">Follow us</h5>
                    <ul className="list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                    </ul>
                </div> */}
                <div className="banner__shape-two">

                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" className="heartbeat" />
                </div>
                <div className="breadcrumb__shape">
                    <img src="/assets/img/images/bannerlogo.png" alt="" className='img-fluid' />

                    {/* <img src="/assets/img/images/breadcrumb_shape04.png" alt="" /> */}
                    {/* <img src="/assets/img/images/breadcrumb_shape05.png" alt="" className="alltuchtopdown" /> */}
                </div>
                <div className="box-search-small container dev-bottom" >
                    <div className=" search__form-wrap" >

                        <form id="contact-form" action="assets/mail.php" method="POST">

                            
                            <input  className='form-grp'type="text" name="name" placeholder="Property ID / Name" />

                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Property Type</option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>
                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Governorate</option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>
                                <select className='form-grp' name="list" id="pet-select">
                                    <option value=""><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.36842 0H12.6316V1.34211H8.36842V0ZM19.6579 18.9474C19.6579 19.1053 19.5789 19.2632 19.4211 19.4211C19.2632 19.5789 19.1053 19.6579 18.9474 19.6579H16.1053V21H18.9474C19.5263 21 20.0132 20.8026 20.4079 20.4079C20.8026 20.0132 21 19.5263 21 18.9474V16.1053H19.6579V18.9474ZM18.9474 0H16.1053V1.34211H18.9474C19.1053 1.34211 19.2632 1.42105 19.4211 1.57895C19.5789 1.73684 19.6579 1.89474 19.6579 2.05263V4.89474H21V2.05263C21 1.47368 20.8026 0.986843 20.4079 0.592106C20.0132 0.197369 19.5263 0 18.9474 0ZM1.34211 2.05263C1.34211 1.89474 1.42105 1.73684 1.57895 1.57895C1.73684 1.42105 1.89474 1.34211 2.05263 1.34211H4.89474V0H2.05263C1.47368 0 0.986842 0.197369 0.592105 0.592106C0.197368 0.986843 0 1.47368 0 2.05263V4.89474H1.34211V2.05263ZM19.6579 8.36842H21V12.6316H19.6579V8.36842ZM16.1053 9.78947V5.60526C16.1053 5.39474 16.0395 5.22369 15.9079 5.09211C15.7763 4.96053 15.6053 4.89474 15.3947 4.89474H11.2105V6.31579H13.7368L10.0263 10.0263C9.71053 9.86842 9.39474 9.78947 9.07895 9.78947H2.05263C1.84211 9.78947 1.60526 9.84211 1.34211 9.94737V8.36842H0V18.9474C0 19.5263 0.197368 20.0132 0.592105 20.4079C0.986842 20.8026 1.47368 21 2.05263 21H12.6316V19.6579H11.0526C11.1579 19.3947 11.2105 19.1579 11.2105 18.9474V11.9211C11.2105 11.6053 11.1316 11.2895 10.9737 10.9737L14.6842 7.26316V9.78947H16.1053ZM2.05263 19.6579C1.89474 19.6579 1.73684 19.5789 1.57895 19.4211C1.42105 19.2632 1.34211 19.1053 1.34211 18.9474V11.9211C1.34211 11.7105 1.42105 11.5395 1.57895 11.4079C1.73684 11.2763 1.89474 11.2105 2.05263 11.2105H9.07895C9.28947 11.2105 9.46053 11.2763 9.5921 11.4079C9.72368 11.5395 9.78947 11.7105 9.78947 11.9211V18.9474C9.78947 19.1053 9.72368 19.2632 9.5921 19.4211C9.46053 19.5789 9.28947 19.6579 9.07895 19.6579H2.05263Z" fill="#110B79"/>
</svg>
Area (sqft)</option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>


                                <div className='form-grp custom-dropdown' ref={dropdownRef}>
                                    <label onClick={toggleDropdown} className="w-100">
                                        Bedrooms & Bathrooms
                                    </label>
                                    {isOpen && (
                                        <ul className="custom-dropdown-options">
                                            <li>
                                                <div className="row checkbxcontainer">
                                                    <div className="col-sm-12 radio-container small-container">
                                                        <label>Bedrooms</label>
                                                        <span id="bedrooms">
                                                            {['Studio', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((bedroom, index) => (
                                                                <label key={index} className="checkcontainer">
                                                                    <input
                                                                        value={bedroom}
                                                                        id={`bedrooms_${index}`}
                                                                        type="checkbox"
                                                                        name="bedrooms[]"
                                                                        onChange={handleBedroomChange}
                                                                        checked={selectedBedrooms.includes(bedroom)}
                                                                    />
                                                                    <span className="radiobtn">{bedroom}</span>
                                                                </label>
                                                            ))}
                                                        </span>
                                                        <div>
                                                            <label className="label-close-span">Or enter number of bedrooms:</label>
                                                            <input
                                                                type="number"
                                                                id="custom_bedroom_input"
                                                                className="form-control w-100 mb-2"
                                                                value={customBedroom}
                                                                onChange={(e) => setCustomBedroom(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 radio-container small-container">
                                                        <label className="label-close-span">Bathrooms</label>
                                                        <span id="bathrooms">
                                                            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((bathroom, index) => (
                                                                <label key={index} className="checkcontainer">
                                                                    <input
                                                                        value={bathroom}
                                                                        id={`bathrooms_${index}`}
                                                                        type="checkbox"
                                                                        name="bathrooms[]"
                                                                        onChange={handleBathroomChange}
                                                                        checked={selectedBathrooms.includes(bathroom)}
                                                                    />
                                                                    <span className="radiobtn">{bathroom}</span>
                                                                </label>
                                                            ))}
                                                        </span>
                                                        <div>
                                                            <label className="label-close-span">Or enter number of bathrooms:</label>
                                                            <input
                                                                type="number"
                                                                id="custom_bathroom_input"
                                                                value={customBathroom}
                                                                className="form-control w-100 mb-2"
                                                                onChange={(e) => setCustomBathroom(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                </div>

                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Area Range </option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>

                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Price Range</option>
                                    <option value="AAA">AAA</option>
                                    <option value="BBBB">BBBB</option>
                                    <option value="CCCC">CCCC</option>
                                    <option value="DDDD">DDDD</option>
                                    <option value="SSSSS">SSSSS</option>
                                    <option value="FFFFF">FFFFF</option>
                                </select>
                                
                                <select className='form-grp' name="list" id="pet-select">
                                    <option value="">Price Range</option>
                                    <div className="range-slider-wrap">
                                    <div className="range-top">
                                        <p>Limits of balance:</p>
                                        <span>$<strong id="rangeValue">{value}</strong></span>
                                    </div>
                                    <input className="range" type="range"
                                        min="1"
                                        max="50000"
                                        value={value}
                                        onChange={e => handleChange(e)} />
                                </div>
                                </select>
                            <button type="submit" className=" btn " style={{width:'350px', height:'50px'}}>Search property </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};

Banner3.defaultProps = {
    bgColor: '#FFFFFF',
    fontColor: '#110B79',
    fontColor2: '#282739',
};

export default Banner3;
