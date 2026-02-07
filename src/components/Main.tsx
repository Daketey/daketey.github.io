import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../assets/styles/Main.scss';

function Main() {

  const asciiArt = `.:.                                 
                         .-=+**#######**+-                         
                     -==+**#%%@@@%%#####**###:                     
                  .====+*#%%%#*##%%%#%%%#####%%+                   
                 --=+++*##%%%%%%%@@@@@@@@@@%%%#%%*                 
               .====+++#%%%%%@@@%%@@@@@@%%%%%%%##%#                
               ==+==+***#%@@@@@@@@@@@@@@@@@@@@%%##%#.              
              -+*+**##*#%%@@@@@%*#@@@@@@@@@@@@@@@%#*#              
             =+=+*+=+***%%%%%%@@@@@@@@@@@%@@@@@@@@@@%#             
             =+=****+++#@@%%%@@@@@@@@@@@@%%%%%@##%@@@%+            
             =+*+***##%##@@@@@@@@@@@@@%#*****#+-+#@@@@+            
            +**+*+**+#@@@@@@@%%%###**+=--::::...:+@@@@*            
            ##*+#%%#*#*+==--......::::::.......  -%@@@%            
           .**+*%##*:...                    ... .-%@@@+            
            +**::::.:.               .:-++++=-. .=@@@@:            
            -##  .::-+*##+=-.     :=+*%%%#**++=:.:%@@@-            
             =%    :=::=*#*-.    .:-*%@%%%*++=:..:%@@+             
              #   :== +@@**#.     .+#%-%@%.=**+=:.#@ .             
              =       .:=++:      .-*#*++++==+==:.*% -             
              .        .:           ::--====-::...=*:              
                                     .:..  ..  .   :=              
                                    ..:-.         .+               
                                      .=+-.       ..               
                     -=     .   ::::--::=**-....  :                
                    -=       ..:-+*=+=-=++++:..                    
                     -:.       .:::--:.:-*+-..                     
                             .--=++===+-++=::.                     
                               .  .:. ...::-:...                   
                              :=++=-..... .::::                    
                                          .:-.                     
                .+%               .:... .:::.  #                   
              .=%@@           .:::::---::-:.   @#                  
              :+@%.        --===++++++=-:      @%=:                
             .:=@*           :+#***+-:..    .:%@*---+@*            
         -.  ..-+#:            .:--::......:*@%#=--=*%@@@%.        
      -==+.  ..:-=*:              .....::-+%@%*====+*@@@%@@@%-     
  .-===+*+:  ...:--==              ..:::-=++*++==++#*@@@@@@@@@@%-  
-==++**+++#. ....::---=.          .::-----=====+=++=@@@@@@@@@@@@@@#
+++++**#####......:::---=:       ::--::--=====----+@@@@@@@@@@%%%%%%`;

  return (
    <div className="container">
      <div className="about-section">
        <div className="ascii-art-wrapper">
          <pre className="ascii-art">{asciiArt}</pre>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Daketey" target="_blank" rel="noreferrer">
              <span className="icon-label">github</span>
              <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/somya-mahapatra/" target="_blank" rel="noreferrer">
              <span className="icon-label">linkedin</span>
              <LinkedInIcon/>
            </a>
            <a href="https://medium.com/@ritul.mahapatra" target="_blank" rel="noreferrer">
              <span className="icon-label">medium</span>
              <ArticleIcon/>
            </a>
            <a href="mailto:ritul.mahapatra@gmail.com" target="_blank" rel="noreferrer">
              <span className="icon-label">email</span>
              <EmailIcon/>
            </a>
          </div>
          <h1 data-text="Somya Mahapatra">Somya Mahapatra</h1>
          <p>Product Security Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Daketey" target="_blank" rel="noreferrer">
              <span className="icon-label">github</span>
              <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/somya-mahapatra/" target="_blank" rel="noreferrer">
              <span className="icon-label">linkedin</span>
              <LinkedInIcon/>
            </a>
            <a href="https://medium.com/@ritul.mahapatra" target="_blank" rel="noreferrer">
              <span className="icon-label">medium</span>
              <ArticleIcon/>
            </a>
            <a href="mailto:ritul.mahapatra@gmail.com" target="_blank" rel="noreferrer">
              <span className="icon-label">email</span>
              <EmailIcon/>
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Main;