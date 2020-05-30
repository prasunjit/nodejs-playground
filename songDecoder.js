function songDecoder(song){
    var str = '';
    for(var i=0;i<song.length;i++){
      if((song[i] == 'W' && song[i+1] == 'U' && song[i+2] == 'B') 
      || (song[i-1] == 'W' && song[i] == 'U' && song[i+1] == 'B')
      || (song[i-2] == 'W' && song[i-1] == 'U' && song[i] == 'B'))
        str += str[str.length-1] !== ' ' ? ' ' : '';
      else
        str += song[i];
    }
    return str.trim();
}

module.exports.songDecoder = songDecoder;