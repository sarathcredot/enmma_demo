import Link from "next/link";
import { getImageUrl } from "@/util/image-url-helper";
import { format } from 'date-fns'

export default function BlogCard1({ blog }) {
  return (
    <>
      <div className="col-md-6">
        <div className="blog__post-two shine-animate-item">
          <div className="blog__post-thumb-two">
            <Link href={`/blog/${blog.id}`} className="shine-animate">
              <img src={getImageUrl(blog.img)} alt="" />
            </Link>
          </div>
          <div className="blog__post-content-two">
            <div className="blog-post-meta">
              <ul className="list-wrap">
                <li>
                  <Link href="/blog" className="blog__post-tag-two">
                    {blog.category}
                  </Link>
                </li>
                <li>
                  <i className="fas fa-calendar-alt" />
                  {format(blog.date, 'MMMM dd, yyyy')}
                </li>
              </ul>
            </div>
            <h2 className="title">
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}