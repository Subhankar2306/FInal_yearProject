import React from 'react'

function BlogSection() {
  return (
    <section className="blog-section">
        <h2 className="section-title">Latest Blogs</h2>
        <div className="blogs">
          <article className="blog-card">
            <h3>Top 5 Cars for Long Drives</h3>
            <p>Explore the best cars to take on long drives for comfort and style.</p>
          </article>
          <article className="blog-card">
            <h3>Why Rent a Car for Your Next Road Trip?</h3>
            <p>Learn why renting a car can be the most convenient choice for your travels.</p>
          </article>
          <article className="blog-card">
            <h3>Choosing the Right Car Rental Plan</h3>
            <p>Find out how to pick a car rental plan that meets your needs and budget.</p>
          </article>
        </div>
      </section>
  )
}

export default BlogSection