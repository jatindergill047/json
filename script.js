$('#subBtn').on('click', function(event) {
    event.preventDefault();
    var artist = $('#artist').val();
    var title = $('#songTitle').val();
    console.log(artist);
    console.log(title);
    fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
    
    .then(function(response) {
        console.log('Response  is ',response);
        return response.json();
    })
.then(function(data) {
    var ly = document.getElementById('lyrics');
    ly.innerHTML = data.lyrics;
    console.log(data);
})
});