'use client'
export default function DevIndexherobottom({ data }) {
    return (
        <div className="container px-4 py-3">
            {data.map((item) => (
                <div key={item._id} className="row dev_index_comp">
                    <div className="col-lg-6 div_index01">
                        <img src={`http://localhost:4001/media/${item.bannerImage}`} width={350} height={65} alt={item.title} />
                    </div>
                    <div className="col-lg-6 about__list-box-two">
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
