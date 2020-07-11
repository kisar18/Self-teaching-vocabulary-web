if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var button = document.getElementsByClassName('b-add')[0]
    button.addEventListener('click', addNewSong)
}

function addNewSong(event) {
    var button = event.target
    var newSong = button.parentElement.parentElement
    var newSongName = newSong.getElementsByClassName('name-input')[0].value
    var newSongAlbum = newSong.getElementsByClassName('album-input')[0].value

    
    var songRow = document.createElement('div')
    songRow.classList.add('song-row')
    var songs = document.getElementsByClassName('Songs')[0]
    var songRowContent = `
        <div class="song-row">
            <span class="song-name song-column">${newSongName}</span>
            <span class="song-album song-column">${newSongAlbum}</span>
            <span class="song-button song-column">
                <button class="b-vocabulary">Vocabulary</button>
            </span>
        </div>`

    songRow.innerHTML = songRowContent
    songs.append(songRow)
}
