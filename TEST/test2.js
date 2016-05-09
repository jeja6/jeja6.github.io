$(document).ready(function () {
    var iframeElement = document.querySelector('iframe');
    var widget = SC.Widget(iframeElement);
    widget.bind(SC.Widget.Events.READY, function () {
        console.log('Ready');
        widget.bind(SC.Widget.Events.PLAY, function () {
            // get information about currently playing sound
            widget.getCurrentSound(function (sound) {
                console.log(sound.title);
            });
        });
            widget.bind(SC.Widget.Events.FINISH, function () {
            console.log('Finished');
        });
    });
    widget.seekTo(30000);
    widget.toggle();
}());