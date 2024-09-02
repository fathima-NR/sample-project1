import React from 'react';
import './blog.css';

function Blog() {
  // Array containing the details for each card
  const blogPosts = [
    {
      title: "How Interior Design Caters to Different Guest Preferences",
      text: "7 Modern Villa Interior Design Ideas Modern..",
      imgSrc: "src/assets/pexels-photo-1643383.jpeg",
      btnText: "Read more",
      link: "#"
    },
    {
      title: "Top 10 Must-Have Features in Dubai Hotel Interior Design",
      text: "Tips for Reducing Office Fit-Out Costs Without..",
      imgSrc: "src/assets/pexels-photo-1643383.jpeg",
      btnText: "Read more",
      link: "#"
    },
    {
      title: "Guide to Modern Villa Interior Design in Dubai",
      text: "Tips for Reducing Office Fit-Out Costs Without...",
      imgSrc: "src/assets/pexels-photo-1643383.jpeg",
      btnText: "Read more",
      link: "#"
    },
    {
      title: "The Future of Commercial Interior Design",
      text: "Tips for Reducing Office Fit-Out Costs Without...",
      imgSrc: "src/assets/pexels-photo-1643383.jpeg",
      btnText: "Read more",
      link: "#"
    },
    {
      title: "How Interior Design Enhances the Dining Experience?",
      text: "Tips for Reducing Office Fit-Out Costs Without..",
      imgSrc: "src/assets/pexels-photo-1643383.jpeg",
      btnText: "Read more",
      link: "#"
    },
    {
      title: "Reducing Office Fit-Out Costs Without Compromising Quality",
      text: "Tips for Reducing Office Fit-Out Costs Without...",
      imgSrc: "src/assets/pexels-photo-1643383.jpeg",
      btnText: "Read more",
      link: "#"
    }
  ];

  return (
    <div style={{ backgroundColor: "#242424", paddingBottom: "50px" }}>
      <div className='blog-image'>
        <img className='img-fluid' src="src/assets/Hospitality-scaled.jpg" alt="" />
        <div className="blog-caption">Blog</div>
      </div>
      <div className="row pt-5">
        {blogPosts.map((post, index) => (
          <div className="col-sm-4" key={index}>
            <div className="card card1 text-white" style={{ backgroundColor: "#1c1c1c" }}>
              <img className="card-img-top" src={post.imgSrc} alt="Card image" style={{ width: '100%' }} />
              <div className="card-body">
                <h4 className="text-start pb-2">{post.title}</h4>
                <p className="card-text">{post.text}</p>
                <a href={post.link} className="btn btn1" style={{ backgroundColor: "#cd9a61" }}>{post.btnText}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
