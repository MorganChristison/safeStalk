function addFriendRmv () {
  $(".FriendRequestAdd").remove();
  $(".pam").remove();
  $("._51sy").remove();
}

function likeButtonsRmv () {
  $(".UFILikeSentence").remove();
  $(".UFILikeLink").remove();
  $("._42nr").remove();
  $("._5gl-").remove();
}

function cleanUp(){
  addFriendRmv();
  likeButtonsRmv();
}

setInterval(cleanUp, 500);
