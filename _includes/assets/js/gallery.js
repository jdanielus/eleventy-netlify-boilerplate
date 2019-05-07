function getImgs(setId) {

    var URL = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8a746e0fe4becf4a2d06753db2081ff7&photoset_id=" + setId + "&user_id=98226741%40N00&format=json&nojsoncallback=1"

  $.getJSON(URL, function(data){
    $.each(data.photoset.photo, function(i, item){
      // Creating the image URL. Info: http://www.flickr.com/services/api/misc.urls.html
      var img_src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_b.jpg";
      var img_thumb = $("<img/>").attr("src", img_src).css({
        margin : '8px',
        width: '100%',

      })
      $(img_thumb).appendTo("#flickr-images");
    });
  });
}
