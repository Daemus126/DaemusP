import { useState } from 'react'
import './App.css'

import { Footer } from './components/Footer'
import works from './data/work'
import WorkCards from './components/WorkCards'


const selectedWorksKey = "programme-builder-selected-works";

  function getIntitialSelectedWorks() {
  const saveSelectedIds = localStorage.getItem(selectedWorksKey);
  if (saveSelectedIds) {
    return JSON.parse(saveSelectedIds);
  }
  return [];
}



function App() {
  const [count, setCount] = useState(0)
  const [selectedIds, setSelectedIds] = useState(getIntitialSelectedWorks());

  function scrollAboutMe() {
        document.getElementById('scrollAboutMe').scrollIntoView({
          behavior: 'smooth'
        });
        console.log("clcikScroll")
      };

        function scrollCProj() {
        document.getElementById('scrollCProj').scrollIntoView({
          behavior: 'smooth'
        });
      };

        function scrollOldWork() {
        document.getElementById('scrollOldWork').scrollIntoView({
          behavior: 'smooth'
        });
      };

        function scrollPrevQual() {
        document.getElementById('scrollPrevQual').scrollIntoView({
          behavior: 'smooth'
        });
      };

         function scrollGallery() {
        document.getElementById('scrollGallery').scrollIntoView({
          behavior: 'smooth'
        });
      };
      
        function scrollContact() {
        document.getElementById('scrollContact').scrollIntoView({
          behavior: 'smooth'
        });
      };
    

       function handleToggleSelect(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  const currentwork = works.filter((work) => work.year === 2026);
    const oldwork = works.filter((work) => work.year < 2026);

  return (
    <>

     <div className="navbar">
                            <nav >
                                <ul className='navul'>
                                    <li><a href="#" onClick={() => {scrollAboutMe()}}>About Me</a></li>
                                    <li><a href="#" onClick={() =>{scrollCProj()}}>Current projects</a></li>
                                    <li><a href="#" onClick={() =>{scrollOldWork()}}>Older Work</a></li>
                                    <li><a href="#" onClick={() =>{scrollPrevQual()}}>Prevous Qualifications</a></li>
                                    <li><a href="#" onClick={() =>{scrollGallery()}}>Gallery</a></li>
                                    <li><a href="#" onClick={() =>{scrollContact()}}>Contact Me </a></li>
                                </ul>
                            </nav>
                        </div>

       <div className="site-banner">

                <header className="site-header">
                    <div className="header-format">
                       

                        <div className="highlight-Border">
                            <p className="eyebrow">Portfoliio</p>
                            <h1>Val The Clown</h1>
                            <h2> Software devloper and Game dev</h2>
                            <p> A page to highlight work I have done, from game art to live websites, if you have any questions please follow the contact Me routes,
                                I hope you enjoy my work.  </p>
                        </div>
                    </div>
                </header>
            </div>


      <div className="break"></div>
      <div className='section-heading'></div>
      <div className="textMargin">

        <div className='AboutMe' id='scrollAboutMe'>
          <h2>About Me </h2>
          <p> My name is Daemus, I am a developer based in Sussex.  My biggest passion is building, regardless of the materials.
            My aim is to work in game design and eventualy publish my own 2D point and click horror game, that resamble games that have inspired me like FranBow and SallyFace.
            I have always been intrested in horror, I think its a perfect medium to express conversations that offten are neglected and or not talked about. plus, who doesn't like to be scared sometimes.
            Currently I work in Software devlopment, mostly building websites and working with databases.
          </p>
          <div className="break"></div>
        </div>

        <div className="project-Section" id='scrollCProj'>
          <div className="projectHead">
            <h2>Current Work</h2>
            <div className="project-Reel">

<div className="work-grid">
              {currentwork.map((work) =>
                <WorkCards
                  key={work}
                  id={work.id}
                  title={work.title}
                  year={work.year}
                  published={work.published}
                  role={work.role}
                  summary={work.summary}
                  techniques={work.techniques}
                  poster={work.poster}
                  posteralt={work.posteralt}
                  isSelected={selectedIds.includes(work.id)}
                  onToggleSelect={handleToggleSelect}
                />
              )
              }
</div>
            </div>
          </div>
        </div>

        <div className="oldProjects" id='scrollOldWork'>
          <h2>Old Projects</h2>
          <div className="project-Reel">
            <div className="work-grid">
              {oldwork.map((work) =>
                <WorkCards
                  key={work}
                  id={work.id}
                  title={work.title}
                  year={work.year}
                  published={work.published}
                  role={work.role}
                  summary={work.summary}
                  techniques={work.techniques}
                  poster={work.poster}
                  posteralt={work.posteralt}
                  isSelected={selectedIds.includes(work.id)}
                  onToggleSelect={handleToggleSelect}
                />
              )
              }
</div>
          </div>
        </div>

        <div className="prevQuals" id='scrollPrevQual'>
        <div className="prevQualsElement"> 
          <h2>Previous Qualifications</h2>
           <div className="prevQuals-aign">
          <h3>BA Psycology & Philosophy </h3>
           <p> 2.1 Reading University 2021-2023 </p>
            <h3>Certificate in UX design</h3>
           <p> The Design Institute 2023-2024 </p>
           <h3>Certificate in Software Development </h3>
           <p> Creative Proccess Digital 2026 </p>
           </div> </div>
            <div className="prevQualsElement"> <h2>Previous Positions</h2>
             <h3>UX Designer </h3>
           <p> MonterpointTechnologies LTS 2023-2024 </p>
            <h3>Scrum Product Owner</h3>
           <p> MonterpointTechnologies LTS 2024-Current</p>
           <h3>FreeLance Developer</h3>
           <p> Current</p>
            
            </div>
        </div>

        <div className="gallery" id='scrollGallery'>
          <h2>Gallery</h2>
          <div className="project-Reel">
          </div>
        </div>

       


      </div>
      <Footer />
    </>
  )
}

export default App
