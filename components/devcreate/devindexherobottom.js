'use client'
export default function DevIndexherobottom({ data }) {
    return (
        <div className="container dev_indexcontainer">
            {data.map((item) => (
                <div key={item._id} className=" row dev_index_comp">
                    <div className="col-lg-6 div_index01">
                        <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} width={350} height={65} alt={item.title} />
                    </div>
                    <div className="col-lg-6 about__list-box-two">
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
