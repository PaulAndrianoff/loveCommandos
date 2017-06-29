var video_container = {}
video_container.video = document.querySelector(".video-js");
video_container.span = document.querySelector(".info");
video_container.sound = document.querySelector(".video_sound");
video_container.state = document.querySelector(".video_state");
video_container.play = document.querySelector(".video_play");
video_container.pause = document.querySelector(".video_pause");
video_container.time_line = document.querySelector(".time_line_video");
video_container.progressBar = document.querySelector(".time_line_video_container");
video_container.circle = document.querySelector(".time_pos");

video_container.video_time; // currentTime
video_container.total_time; // Video duration

console.log(video_container);
/******************************************

  Info appartition

*******************************************/

video_container.video.addEventListener("playing", function()
{
  video_container.total_time = video_container.video.duration;

  if(video_container.total_time - video_container.video.currentTime >= 5)
  {
    video_container.span.classList.remove("width");
    setTimeout(function(){
      video_container.span.innerHTML = "I";
    }, 25);
  }
  count();
});

function show()
{
  if(video_container.total_time - video_container.video.currentTime <= 5)
  {
    video_container.span.classList.add("width");
    setTimeout(function(){
      video_container.span.innerHTML = "Titre de la video";
    }, 25);
  }
  count()
}

function count()
{
  video_container.video_time = setInterval(show, 1000);
}


/******************************************

  Video controlers

*******************************************/

//Mute / unmute the video
video_container.sound.addEventListener("click", function()
{
  if(video_container.video.muted == true)
  {
    video_container.video.muted = false;
    video_container.sound.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
  }
  else {
    video_container.video.muted = true;
    video_container.sound.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
  }
});

//Play / pause the video
video_container.state.addEventListener("click", function()
{
  if(video_container.video.paused == true)
  {
    video_container.video.play();
    permut();
  }
  else {
    video_container.video.pause();
    permut();
  }
});

function permut(){
	if(video_container.play.className == "video_play active"){
		video_container.play.className = "video_play hide";
		video_container.pause.className = "video_pause active";
	} else {
		video_container.play.className = "video_play active";
		video_container.pause.className = "video_pause hide";
	}
}


video_container.video.addEventListener("timeupdate", update);

//time_line

function update() {
	var duration = parseInt(video_container.total_time);    // Durée totale
	var time     = parseInt(video_container.video.currentTime); // Temps écoulé
	var fraction = time / duration;
  var percent  = fraction * 100;

  video_container.time_line.style.width = percent + "%";
}

video_container.progressBar.addEventListener("click", function(){
	clickProgress(this, event);
});

//Get element position
function getPosition(element){
	var top = 0, left = 0;

	do {
		top  += element.offsetTop;
		left += element.offsetLeft;
	} while (element = element.offsetParent);

	return { x: left, y: top };
}

// get Mouse position
function getMousePosition(event) {
	return {
		x: event.pageX,
		y: event.pageY
	};
}

//Moveforward or backward the progressBar
function clickProgress(control, event) {
	var parent = getPosition(control);    // La position absolue de la progressBar
	var target = getMousePosition(event); // L'endroit de la progressBar où on a cliqué

	var x = target.x - parent.x;
	var wrapperWidth = document.querySelector('.time_line_video_container').offsetWidth;
  //
	var percent = Math.ceil((x / wrapperWidth) * 100);
	var duration = video_container.video.duration;
  //
	video_container.video.currentTime = (duration * percent) / 100;
  console.log(x);
}
