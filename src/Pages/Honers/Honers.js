import React from 'react';
import './Honers.styles.css';
const Honers=() =>{
  return (
    <section className='honers'>
            <div className="blog-page">
        {/* Sidebar */}

        {/* Main content */}
        <main className="content">
            <h2>Latest articles</h2>

            <div className="articles">
            <div className="article-card">
                <div className="date">21 April 2022</div>
                <h3>Hello world: how I built this site</h3>
                <p>
                I originally built this portfolio site back in 2018, and since then it's
                evolved quite a bit. Recently I migrated from Create React App to
                Next.js and made some major upgrades in the process.
                </p>
                <div className="meta">
                <span>Read article</span>
                <span>00:05:03:99</span>
                </div>
            </div>

            <div className="featured-article">
                <div className="featured-date">01 May 2022</div>
                <h3>You (probably) don't need CSS-in-JS</h3>
                <p>
                Vanilla CSS is good now actually. Here's a couple nifty techniques for
                dynamically styling React components with CSS custom properties.
                </p>
                <div className="meta">
                <span>Read article</span>
                <span>00:07:53:60</span>
                </div>
            </div>
            </div>

            <div className="coming-soon">
            <p>Coming soon...</p>
            </div>
        </main>
        </div>


    </section>
  )
}

export default Honers;