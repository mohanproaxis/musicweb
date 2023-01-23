let audio =  new Audio('song.mp3');
// audio.play();
let masterplay = document.getElementById("masterplay");
let preplay = document.getElementById("preplay");
let nextplay = document.getElementById("nextplay");
let gif = document.querySelector('.player .gif img')

masterplay.addEventListener('click', ()=>{
    
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        gif.style.opacity = 1;
        masterplay.classList.add("bi-pause-circle");
        masterplay.classList.remove("bi-play-circle");

    }
    else{
        audio.pause();
        gif.style.opacity = 0;
        masterplay.classList.add("bi-play-circle");
        masterplay.classList.remove("bi-pause-circle");

    }
})


let songsposter = document.getElementsByClassName('songsposter')[0];
let arrowleft = document.getElementById('arrowleft');
let arrowright = document.getElementById('arrowright');

arrowleft.addEventListener('click', ()=>{
      songsposter.scrollLeft -= 1000;
})
arrowright.addEventListener('click', ()=>{
      songsposter.scrollLeft += 1000;
})





const songs = [
    {
       id : 1,
       songname : ` <h5>Dhoke Pyar Ke <br>
       <div class="subtitle">Vardhan Puri</div> 
      </h5>`,
       poster : 'song poster/poster1.jpg'
   
    },
    {
       id : 2,
       songname : ` <h5>Dhaagon Se Baandhaa <br>
       <div class="subtitle">Arijit Shing</div> 
      </h5>`,
       poster : 'song poster/poster2.jpg'
   
    },
    {
       id : 3,
       songname : ` <h5>Kesariya <br>
       <div class="subtitle">Arijit Shing</div> 
      </h5>`,
       poster : 'song poster/poster3.jpg'
   
    },
    {
       id : 4,
       songname : ` <h5>Heeriye <br>
       <div class="subtitle">Dj Nick</div> 
      </h5>`,
       poster : 'song poster/poster4.jpg'
   
    },
    {
       id : 5,
       songname : ` <h5>Raataan Lambiyan <br>
       <div class="subtitle">Jubin Nautiyal</div> 
      </h5>`,
       poster : 'song poster/poster5.jpg'
   
    },
    {
       id : 6,
       songname : ` <h5>Number LIkh<br>
       <div class="subtitle">Tony Kakkar</div> 
      </h5>`,
       poster : 'song poster/poster6.jpg'
   
    },
    {
       id : 7,
       songname : ` <h5>Main Teri Ho Gayi <br>
       <div class="subtitle">Millind Gabba</div> 
      </h5>`,
       poster : 'song poster/poster7.jpg'
   
    },
    {
       id : 8,
       songname : ` <h5>Main Khiladi Tu Anadi<br>
       <div class="subtitle">Dj Baichun</div> 
      </h5>`,
       poster : 'song poster/poster8.jpg'
   
    },
    {
       id : 9,
       songname : ` <h5>Lut Gaye <br>
       <div class="subtitle">Jubin Nautiyal</div> 
      </h5>`,
       poster : 'song poster/poster9.jpg'
   
    },
    {
       id : 10,
       songname : ` <h5>Gur Nalo IShq Mitha<br>
       <div class="subtitle">Honey Shing</div> 
      </h5>`,
       poster : 'song poster/poster10.jpg'
   
    },
    {
       id : 11,
       songname : ` <h5> Chandigarh Main<br>
       <div class="subtitle">Harry,Badshah,Lisha,Ashneer</div> 
      </h5>`,
       poster : 'song poster/poster11.jpg'
   
    },
    {
       id : 12,
       songname : ` <h5>Teri Ankhya Ka Yo Kajal <br>
       <div class="subtitle">Dj Raj </div> 
      </h5>`,
       poster : 'song poster/poster12.jpg'
   
    },
    {
       id : 13,
       songname : ` <h5> Dil Ko Karar Aya <br>
       <div class="subtitle">Neha Kakkar</div> 
      </h5>`,
       poster : 'song poster/poster13.jpg'
   
    },
    {
       id : 14,
       songname : ` <h5>Dil Galti <br>
       <div class="subtitle">Jubin Nautiyal</div> 
      </h5>`,
       poster : 'song poster/poster14.jpg'
   
    },
    {
       id : 15,
       songname : ` <h5>Barish<br>
       <div class="subtitle">Payal Dev,Stebin Ben</div> 
      </h5>`,
       poster : 'song poster/poster15.jpg'
   
    },
    {
       id : 16,
       songname : ` <h5>Tera Rang Balle Balle<br>
       <div class="subtitle">DJ RI8</div> 
      </h5>`,
       poster : 'song poster/poster16.jpg'
   
    },
    {
       id : 17,
       songname : ` <h5>Bedi Jalyile <br>
       <div class="subtitle">Dj Remix</div> 
      </h5>`,
       poster : 'song poster/poster17.jpg'
   
    },
    {
       id : 18,
       songname : ` <h5> Meri Zindagi Hai Tu<br>
       <div class="subtitle">Jubin Nautiyal,Niti Mohan</div> 
      </h5>`,
       poster : 'song poster/poster18.jpg'
   
    },
    {
       id : 19,
       songname : ` <h5>Taron Ke Sahar Mai <br>
       <div class="subtitle">Neha Kakkar,Jubin</div> 
      </h5>`,
       poster : 'song poster/poster19.jpg'
   
    },
    {
       id : 20,
       songname : ` <h5>Humko Tumse Pyar Hai <br>
       <div class="subtitle">Dj Remix</div> 
      </h5>`,
       poster : 'song poster/poster20.jpg'
   
    },
    {
       id : 21,
       songname : ` <h5>Buzz <br>
       <div class="subtitle">Dj</div> 
      </h5>`,
       poster : 'song poster/poster21.jpg'
   
    },
    {
       id : 22,
       songname : ` <h5>Jaani Tera Naa <br>
       <div class="subtitle">Remix</div> 
      </h5>`,
       poster : 'song poster/poster22.jpg'
   
    },
    {
       id : 23,
       songname : ` <h5>Daru Badnam <br>
       <div class="subtitle">Dj Anshul</div> 
      </h5>`,
       poster : 'song poster/poster23.jpg'
   
    },
    {
       id : 24,
       songname : ` <h5>Namo Namo <br>
       <div class="subtitle">Amit Trivedi</div> 
      </h5>`,
       poster : 'song poster/poster24.jpg'
   
    },
    {
       id : 25,
       songname : ` <h5>Kabhi Aar Kabhi Par  <br>
       <div class="subtitle">Dj KD</div> 
      </h5>`,
       poster : 'song poster/poster25.jpg'
   
    },
    {
       id : 26,
       songname : ` <h5>Tere Jaisa Yaar Kanha <br>
       <div class="subtitle">Dj Pop</div> 
      </h5>`,
       poster : 'song poster/poster26.jpg'
   
    },
    {
       id : 27,
       songname : ` <h5>Shada <br>
       <div class="subtitle">Dj Rahul</div> 
      </h5>`,
       poster : 'song poster/poster27.jpg'
   
    },
    {
       id : 28,
       songname : ` <h5>Sauda Khara Khara <br>
       <div class="subtitle">Diljit, Dhavni</div> 
      </h5>`,
       poster : 'song poster/poster28.jpg'
   
    },
    {
       id : 29,
       songname : ` <h5> Halki Si Barish <br>
       <div class="subtitle"> Saaj Bhatt</div> 
      </h5>`,
       poster : 'song poster/poster29.jpg'
   
    },
    {
       id : 30,
       songname : ` <h5>Dhol Bajega<br>
       <div class="subtitle">Parmish Verma</div> 
      </h5>`,
       poster : 'song poster/poster30.jpg'
   
    },
    {
       id : 31,
       songname : ` <h5>Hauli Hauli<br>
       <div class="subtitle">Garry Sandhu, Neha Kakkar </div> 
      </h5>`,
       poster : 'song poster/poster31.jpg'
   
    },
    {
       id : 32,
       songname : ` <h5> Yeh Baby <br>
       <div class="subtitle"> Garry Sandhu</div> 
      </h5>`,
       poster : 'song poster/poster32.jpg'
   
    },
    {
       id : 33,
       songname : ` <h5>Dil Tod Ke <br>
       <div class="subtitle">B Praak</div> 
      </h5>`,
       poster : 'song poster/poster33.jpg'
   
    },
   ]



   Array.from(document.getElementsByClassName('songplay')).forEach((element , index)=>{
     element.getElementsByTagName('img')[0].src = songs[index].poster;
     element.getElementsByTagName('h5')[0].innerHTML = songs[index].songname;
 })


 const allplay = ()=>{
 
   Array.from(document.getElementsByClassName('playlist')).forEach((el)=>{
      
      el.classList.remove("bi-pause-circle");
      el.classList.add("bi-play-circle");
   })
 }
 
 

 let index = 0;
 let img = document.getElementById('playerimage');
 let playlist = document.getElementsByClassName('playlist');
 let detail = document.getElementById('detail');
 
   Array.from(playlist).forEach((e)=>{
    e.addEventListener('click', (el)=>{
     index = el.target.id;
     audio.src = `newsongs/song${index}.mp3`;
     img.src = `song poster/poster${index}.jpg`;
     audio.play();
     
     let songtitle = songs.filter((ell)=>{
      return ell.id == index;

     });
      songtitle.forEach(ess=>{
         let {songname} = ess;
         detail.innerHTML = songname;  
      })
         audio.play();
         gif.style.opacity = 1;
         masterplay.classList.add("bi-pause-circle");
         masterplay.classList.remove("bi-play-circle");
       
         allplay();
         el.target.classList.add("bi-pause-circle")
         el.target.classList.remove("bi-play-circle")
         

    })
    
 })

 let currenttime =document.getElementById('currenttime');
 let endtime =document.getElementById('endtime');
 let seekbar =document.getElementById('seekbar');

 audio.addEventListener('timeupdate',()=>{
 let currtime = audio.currentTime;
 let duration = audio.duration;


let min1 = Math.floor(duration/60);
let sec1 = Math.floor(duration % 60);
 
  let Time = `${min1}:${sec1}`
  endtime.innerText = Time;

  let min2 = Math.floor(currtime/60);
  let sec2 = Math.floor(currtime%60);
   
 let Time2 = `${min2}:0${sec2}`
 let Time3 = `${min2}:${sec2}`

 if(sec2<10){
   currenttime.innerText = Time2;

 }
 else{

    currenttime.innerText = Time3;
 }

 let progress = parseInt((audio.currentTime/audio.duration)*100);
 seekbar.value = progress;

seekbar.addEventListener('change',()=>{
   audio.currentTime = (progress/100)*audio.duration;
   
})

 } )




 let volumeup = document.getElementById("volumeup");
//  let volumedown = document.getElementsByClassName("bi bi-volume-down");
//  let volumemute = document.getElementsByClassName("bi bi-volume-mute");
 let voulbar = document.getElementById('voulbar'); 
voulbar.addEventListener('change', ()=>{
   if(voulbar.value == 0){
      volumeup.classList.add("bi-volume-mute")
      volumeup.classList.remove("bi-volume-up")
      volumeup.classList.remove("bi-volume-down")
   }
   if(voulbar.value <50||voulbar.value>0){
      volumeup.classList.remove("bi-volume-mute")
      volumeup.classList.remove( "bi-volume-up")
      volumeup.classList.add("bi-volume-down")
   }
   if(voulbar.value >50){
      volumeup.classList.remove("bi-volume-mute")
      volumeup.classList.add("bi-volume-up")
      volumeup.classList.remove("bi-volume-down")
   }

  audio.volume = voulbar.value/100;



})




