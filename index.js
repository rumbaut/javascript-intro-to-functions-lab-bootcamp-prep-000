function shout(string){
  return string.toUpperCase();
};
function whisper(message){
  return message.toLowerCase();
}
function logShout(message){
  console.log(shout(message));
}
function logWhisper(message){
  console.log(whisper(message));
}
