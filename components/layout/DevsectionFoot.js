import React from 'react';
import PropTypes from 'prop-types';

const DevsectionFoot = ({ data, bgColor, fontColor, fontColor2 }) => {
    return (
        <>
            {data && data.length > 0 ? (
                data.map((item) => (
                    <div key={item._id} className="box-video-small">
                        <div className="item-video-small" style={{ backgroundColor: bgColor }}>
                            <div className="video-small-left">
                                <div className="video-small-left-inner">
                                    <div className="video-small-left-1">
                                        <h3>50+</h3>
                                        <p>Diverse Properties</p>
                                    </div>
                                    <div className="video-small-left-2">
                                        <h2 style={{ color: fontColor }}>{item.title || 'Trusted Solutions'}</h2>
                                        <p style={{ color: fontColor2 }}>{item.description || 'Your trusted source for premier real estate and security services, ensuring satisfaction and achieving the highest industry standards.'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="video-small-right">
                                <div className="box-video image-fit">
                                    <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </>
    );
};

DevsectionFoot.propTypes = {
    data: PropTypes.array.isRequired,
    bgColor: PropTypes.string,
    fontColor: PropTypes.string,
    fontColor2: PropTypes.string,
};

DevsectionFoot.defaultProps = {
    bgColor: '#ECF6FA',
    fontColor: '#110B79',
    fontColor2: '#282739',
};

export default DevsectionFoot;
