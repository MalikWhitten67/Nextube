export var sheet = document.createElement('style')

sheet.innerText  = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.logo{
    position:relative; 
    top:15pt;
    left:15pt;
 
    border-radius:50%
}
body{
    margin:0;
    padding:20px;
    font-size:2vh;
    background-color:#1e1e1e;
    color:white;
    font-family: 'Roboto', sans-serif;
    font-weight:550
}
.videos-container{
    display:flex;
    flex-wrap:wrap;
    gap:2rem;
}
li{
     display:inline; 
     margin:0;
     margin-left:5%;
}
#view_videos_button:hover{
    cursor:pointer;
}

.card{
    position:relative; 
    left:7%;
    top:8vw;
    width:fit-content;
    color:black;
    align-text:start;

    max-height:50%;
}

.card-body{
    position:relative; 
    align-text:start;
    color:white;

    border-radius: 5px;
}
.card-image{
    width:100%;
    border-radius:5px
}
.creator-profile-image{
    width:40px;
    position:relative; 
    top:12pt;
    border-radius:50%;
}
.card-title{
    position:relative;
    top:-2.5vw;
    left:19%;
    word-wrap: break-word;
    max-width:80%;
}
.search_bar{
    
    
   
}

`

document.head.appendChild(sheet)
