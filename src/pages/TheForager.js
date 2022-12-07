import React from "react";

const TheForager = () => {
  return (
    <>
      <div className="banner-container">
        <img src={process.env.PUBLIC_URL + "/assets/Forager Banner.png"} className="banner" />
        <div className="banner-text" style={{ right: 80, top: 250 }}>
          <h3>The Forager Zine</h3>
          <h5>UX & UI</h5>
        </div>
      </div>
      <div className="section-container">
        <div className="row" style={{ gap: 40 }}>
          <div className="column" style={{ gap: 40 }}>
            <h2>About</h2>
            <p>The Forager is an environmental zine on Brown & RISD's campuses that celebrates the intersection of environmental themes and literary communications.</p>
            <p>We believe storytelling through various mediums such as journalistic pieces, poems, illustrations, or short stories (and, of course, many more!) is a fundamental pillar of environmentalism and environmental justice. Our intention is to create a welcoming space for those curious and passionate about the environment to share their ideas with the College Hill community.</p>
            <p>I co-founded the club, led the design process of the website, established The Forager's brand, and implemented the online publication.</p>
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/Forager About.png"} className="forager" />
        </div>
      </div>
      <div className="blue-section-container">
        <h2>Goals</h2>
        <div className="row" style={{ gap: 20 }}>
          <div className="column">
            <h5>ENGAGEMENT</h5>
            <ul className="list-wrapper">
              <li className="list">Website highlights key features such as recent articles and illustrations</li>
              <li className="list">Links to The Forager's Instagram and email are easy to find</li>
              <li className="list">Illustrations and color scheme adhere to The Forager's biweekly themes</li>
              <li className="list">Audience can easily hop around the website to explore different sections</li>
            </ul>
          </div>
          <div className="column">
            <h5>USABILITY</h5>
            <ul className="list-wrapper">
              <li className="list">Having the links/tabs to other pages within the site easily found and accessibility at all times</li>
              <li className="list">Hierarchy amongst font sizes and colors to indicate differences in page content</li>
              <li className="list">Keeping the page format consistent with the upload of new articles and illustrations</li>
              <li className="list">Individual pages have a logical flow in their content</li>
            </ul>
          </div>
          <div className="column">
            <h5>ACCESSIBILITY</h5>
            <ul className="list-wrapper">
              <li className="list">Large text such that audiences with impaired vision can still meaningfully engage with the publication</li>
              <li className="list">Alternative text for images for a screenreader</li>
              <li className="list">Providing enough contrast between the page background and the text and illustrations</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-container">
        <h2>Publication</h2>
        <p><a href="https://www.theforagerzine.com/" target={"_blank"} className="link" style={{ letterSpacing: 0, fontSize: 18 }}>The Forager</a> website aims to engage readers by making the website easy to use and accessible.</p>
        <div className="grid">
        <img src={process.env.PUBLIC_URL + "/assets/Forager 2.png"} className="forager-image"/>
        <img src={process.env.PUBLIC_URL + "/assets/Forager 1.png"} className="forager-image"/>
        <img src={process.env.PUBLIC_URL + "/assets/Forager 4.png" }className="forager-image"/>
        <img src={process.env.PUBLIC_URL + "/assets/Forager 3.png" }className="forager-image"/>
        <img src={process.env.PUBLIC_URL + "/assets/Forager 5.png"} className="forager-image"/>
        <img src={process.env.PUBLIC_URL + "/assets/Forager 6.png"} className="forager-image"/>
        </div>
      </div>
    </>
  );
};

export default TheForager;