$(document).ready(function() {

	//setup modal and stream html
	let currentStream = $("body").data("stream");
	for (x=0;x<modalData.length;x++) {
		if (modalData[x][0] == currentStream) {
			$("#stream-button, #stream-tab").html(modalData[x][0]);
			$("#stream").html(modalData[x][1]);
			break;
		}
	}

	$(".modal-toggle").click(function(){
	
		//open targeted modal
		if ($(this).data("target")) {
			let target = $(this).data("target");
			$("#"+target).removeClass("modal-closed");
		}
		
		//open targeted article inside of modal
		if ($(this).data("subtarget")) {
			$(".outline-container, .stream-container, .inventory-container").addClass("hidden");
			let subTarget = $(this).data("subtarget");
			$("."+subTarget+"-container").removeClass("hidden");
		}
	});
	
	//hide all targeted modals and articles
	$(".close-modal").click(function(){
		$(this).parent(".modal").addClass("modal-closed");
		$(this).siblings("article").addClass("hidden");
	});
});