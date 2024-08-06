const DevsectionFoot = ({ title, paragraph, bgColor, fontColor, fontColor2 }) => {
    return (
        <div className="box-video-small" >
            <div1 className="item-video-small" style={{ backgroundColor: bgColor}}>
                <div className="video-small-left">
                    <div className="video-small-left-inner">
                        <div className="video-small-left-1">
                            <h3>50+</h3>
                            <p>Diverse Properties</p>
                        </div>
                        <div className="video-small-left-2">
                            <h2 style={{  color: fontColor }}>{title}</h2>
                            <p style={{  color: fontColor2 }}>{paragraph}</p>
                        </div>
                    </div>
                </div>
                <div className="video-small-right">
                    <div className="box-video image-fit">
                        <img src="/assets/img/project/h3_project_img0106.jpg" />
                    </div>
                </div>
            </div1>
        </div>
    );
};

DevsectionFoot.defaultProps = {
    bgColor: '#ECF6FA',
    fontColor: '#110B79',
    fontColor2: '#282739',
    title:'Trusted Solutions',
    paragraph:'Your trusted source for premier real estate and security services, ensuring satisfaction and achieving the highest industry standards.',
};

export default DevsectionFoot;
