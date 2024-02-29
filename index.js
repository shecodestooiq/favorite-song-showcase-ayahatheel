function displaySongInfo(display) {
    display.preventDefault();

    var songname_js = document.getElementById("form_songname").value;
    document.getElementById("display_songname").textContent = "Song Name: " + songname_js;


    var year_js = document.getElementById("form_year").value;
    document.getElementById("display_year").textContent = "Year: " + year_js;


    var description_js = document.getElementById("form_description").value;
    document.getElementById("display_description").textContent = "Description: " + description_js;


    var form_youtube_link = document.getElementById("form_youtubelink").value;
    var display_video_iframe = document.getElementById("display_youtubeiframe_link");
    display_video_iframe.src = form_youtube_link;

    document.getElementById("form_area").style.display = "none";
    document.getElementById("display_area").style.display = "block";
}

document.getElementById("form_area").addEventListener("submit", displaySongInfo);


module.exports = {
    displaySongInfo: displaySongInfo,
};