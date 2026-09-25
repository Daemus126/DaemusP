export const Header = () => {

     function scrollAboutMe() {
        document.getElementById('scrollAboutMe').scrollIntoView({
          behavior: 'smooth'
        });
        console.log("clcikScroll")
      };

        function scrollCProj() {
        document.getElementById('scrollPick').scrollIntoView({
          behavior: 'smooth'
        });
      };

        function scrollOldWork() {
        document.getElementById('scrollPick').scrollIntoView({
          behavior: 'smooth'
        });
      };

        function scrollPrevQual() {
        document.getElementById('scrollPick').scrollIntoView({
          behavior: 'smooth'
        });
      };
      
        function scrollContact() {
        document.getElementById('scrollPick').scrollIntoView({
          behavior: 'smooth'
        });
      };
    
    return (
        <>
            <div className="site-banner">

                <header className="site-header">
                    <div className="header-format">
                        <div className="navbar">
                            <nav >
                                <ul>
                                    <li><a href="#" onClick={scrollAboutMe()}>About Me</a></li>
                                    <li><a href="#" onClick={scrollCProj()}>Current projects</a></li>
                                    <li><a href="#" onClick={scrollOldWork()}>Older Work</a></li>
                                    <li><a href="#" onClick={scrollPrevQual()}>Prevous Qualifications</a></li>
                                    <li><a href="#" onClick={scrollContact()}>Contact Me </a></li>
                                </ul>

                            </nav>
                        </div>

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
        </>
    );


}

