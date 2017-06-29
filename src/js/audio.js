var audio = document.body.querySelector('.audio')
var progress = document.body.querySelector('.audio_player')
var time_control = document.body.querySelector('.audio_control_time')

audio.addEventListener('loadeddata', function () {
	progress.max = audio.duration

	time_control.addEventListener('click', function(e) {
		e.preventDefault();
		if (audio.paused) {
			audio.play()
		} else {
			audio.pause()
		}
	})

	audio.addEventListener('timeupdate', function (e) {
		progress.value = audio.currentTime;
	});

});

