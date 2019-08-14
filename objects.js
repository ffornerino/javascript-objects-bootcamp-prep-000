var playlist = new Object({Maluna: 'HP'});
//object['Post Malone'] = 'Goodbyes';

function updatePlaylist (object, key, value){
  object[key] = value;
  return object;
}
 function removeFromPlaylist(object, key){
   delete object.key;
 }