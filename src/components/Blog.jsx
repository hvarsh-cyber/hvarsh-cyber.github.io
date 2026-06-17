import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <p className="section-eyebrow">// changelog</p>
        <h2 className="section-title">Writing</h2>

        {POSTS.length === 0 ? (
          <p className="empty-state">No posts yet — check back soon.</p>
        ) : (
          <div className="post-list">
            {POSTS.map((post) => (
              <Link key={post.slug} to={`/writing/${post.slug}`} className="post-card">
                <span className="post-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="post-read-more">Read more →</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
