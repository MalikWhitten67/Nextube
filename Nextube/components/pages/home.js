import { card } from "../video_card.js"

 

export async  function v1080p(){
     document.getElementById('client-viewer').innerHTML = `
      
      <nav class="nav-grid">
       <ul>
       <li>
       <br>
       <img class="logo" src="https://postr.pockethost.io/api/files/3j575lm679lmkqk/ht8o8jpq80deqfl/logo_zPfsuYLkQa.jpg" width="50"></li>
       <li><a id="view_videos_button">Videos</a></li>
       <li>Explore</li>
       <li>Explore</li>
       
       </ul>
      </nav>
     
      <div class="videos-container">
      ${card}
      </div>
     
      
     `
}