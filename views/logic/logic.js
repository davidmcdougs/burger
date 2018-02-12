console.log("logic.js loaded")
$(document).on('click','.uneatenButton', function(){
	console.log("on click event started");
	var name = this.id;
	   $.post("/toeaten", name)
      .done(function(data) {
       console.log(data);
   });
});