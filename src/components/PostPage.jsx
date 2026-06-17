import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getPostBySlug } from '../data/posts';

function PostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="post-page">
        <div className="container">
          <p className="post-not-found">Post not found.</p>
          <Link to="/" className="post-back-link">← Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="post-page">
      <nav className="navbar">
        <div className="container nav-inner">
          <span className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>hvarsh-cyber</span>
        </div>
      </nav>

      <article className="container post-article">
        <Link to="/#blog" className="post-back-link">← Back to writing</Link>
        <div className="post-meta-row">
          <span className="post-date">{post.date}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>

        <div className="post-content">
          {post.content.map((block, i) => {
            if (block.type === 'h3') {
              return <h3 key={i}>{block.text}</h3>;
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="post-list-items">
                  {block.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}
        </div>

        <Link to="/#blog" className="post-back-link post-back-bottom">← Back to writing</Link>
      </article>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-status">
            <span className="status-dot" />
            Open to internships & graduate roles in Australia
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PostPage;
