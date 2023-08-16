$(document).ready(function() {

//set starting level at which the player enters the map
//1 is highest up, 4 is lowest into the earth
//1 = Age of Unknown Provenance
//2 = Age of The Scholar
//3 = Age of Egderus
//4 = Age of The Ancients
var currentLevel = 1;

//Adjust level based on imported variable
// alert(currentStream);
var ageUnknown = [`TheREMNANT`,`INSOMNIAC`,`ROMANTICIMPULSEWRITINGS`,`OTHERWRITINGSofUNKNOWNPROVENANCE`];
var ageScholar = [`SOLDIER`,`EXILE`,`UNKNOWNSCHOLASTIC`,`VOICEfromtheLOCUSTGROVE`,`UNKNOWNCURATOR`,`SCHOLAR`];
var ageEgderus = [`INSURGENT`,`EGDERUS`,`MISSIONARY`,`ARIC`,`BONE-SNAPPER`,`HISTORIAN`,`SUPERIUSFRATER`,`OLDPOET`];
var ageAncient = [`BOY`,`LASTONE`,`UNKNOWNANCIENTS`];

if (ageUnknown.includes(currentStream)) {
	currentLevel = 1;
} else if (ageScholar.includes(currentStream)) {
	currentLevel = 2;
} else if (ageEgderus.includes(currentStream)) {
	currentLevel = 3;
} else if (ageAncient.includes(currentStream)) {
	currentLevel = 4;
}


//textures!
const unknownTexture = "";
const scholarTexture = "";
const edgerusTexture = "";
const ancientsTexture = "";

//preload images
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

preload([unknownTexture, scholarTexture, edgerusTexture, ancientsTexture]);

$(".preload").append(`<img src="${unknownTexture}">`)
$(".preload").append(`<img src="${scholarTexture}">`)
$(".preload").append(`<img src="${edgerusTexture}">`)
$(".preload").append(`<img src="${ancientsTexture}">`)

//descend button functionality
$("#descend-button").on("click", function(){
	//add 1, but don't let currentLevel exceed 4
	if (currentLevel < 4){currentLevel++}else{currentLevel = 4};
	//run main function to trigger change
	traverse();
})

//connect ascend button
$("#ascend-button").on("click", function(){
	//add 1, but don't let currentLevel exceed 4
	if (currentLevel > 1){currentLevel--}else{currentLevel = 1};
	//run main function to trigger change
	traverse();
})

const traverse = () => {

	//set state for highest level with unknown provenance map on top
	if (currentLevel == 1) {

		//change title
		$("h2").html("UNKNOWN PROVENANCE")

		//remove any existing classes and re-add grid styling
		$("#unknown-grid, #scholar-grid, #egderus-grid, #ancients-grid").removeClass().addClass("map-grid");
		
		//set positioning
		$("#unknown-grid").addClass("position-1");
		$("#scholar-grid").addClass("position-2");
		$("#egderus-grid").addClass("position-3");
		$("#ancients-grid").addClass("position-4");

		//change body's color to match
		$("#map-modal").removeClass("age2").removeClass("age3").removeClass("age4").addClass("age1");
		// $("map-modal").css("background-color", "var(--sand3)")
		// $("body").css("background-image", "url(" + unknownTexture + ")")

		//gray out ascend button because you can't go any higher
		$("#ascend-button").css("filter", "brightness(0.6)")

		//normal descend button
		$("#descend-button").css("filter", "brightness(1)")
	}

	//set state for second level with scholar map on top
	else if(currentLevel == 2) {

		//remove any existing classes and re-add grid styling
		$("#unknown-grid, #scholar-grid, #egderus-grid, #ancients-grid").removeClass().addClass("map-grid");
		
		//change title
		$("h2").html("AGE of the SCHOLAR")

		//set positioning
		$("#unknown-grid").addClass("position-offscreen");
		$("#scholar-grid").addClass("position-1");
		$("#egderus-grid").addClass("position-2");
		$("#ancients-grid").addClass("position-3");

		//change body's color to match
		$("#map-modal").removeClass("age1").removeClass("age3").removeClass("age4").addClass("age2");
		// $("body").css("background-color", "var(--scholar-color)")
		// $("body").css("background-image", "url(" + scholarTexture + ")")

		//normal ascend button
		$("#ascend-button").css("filter", "brightness(1)")

		//normal descend button
		$("#descend-button").css("filter", "brightness(1)")
	}

	//set state for third level with Egderus map on top
	else if(currentLevel == 3) {

		//remove any existing classes and re-add grid styling
		$("#unknown-grid, #scholar-grid, #egderus-grid, #ancients-grid").removeClass().addClass("map-grid");
		
		//change title
		$("h2").html("AGE of EGDERUS")

		//set positioning
		$("#unknown-grid").addClass("position-offscreen");
		$("#scholar-grid").addClass("position-offscreen");
		$("#egderus-grid").addClass("position-1");
		$("#ancients-grid").addClass("position-2");

		//change body's color to match
		$("#map-modal").removeClass("age1").removeClass("age2").removeClass("age4").addClass("age3");
		// $("body").css("background-color", "var(--egderus-color)")
		// $("body").css("background-image", "url(" + edgerusTexture + ")")

		//normal ascend button
		$("#ascend-button").css("filter", "brightness(1)")

		//normal descend button
		$("#descend-button").css("filter", "brightness(1)")
	}

	//set state for base level with only Ancients grid showing
	else if(currentLevel == 4) {

		//remove any existing classes and re-add grid styling
		$("#unknown-grid, #scholar-grid, #egderus-grid, #ancients-grid").removeClass().addClass("map-grid");
		
		//change title
		$("h2").html("AGE of the ANCIENTS")

		//set positioning
		$("#unknown-grid").addClass("position-offscreen");
		$("#scholar-grid").addClass("position-offscreen");
		$("#egderus-grid").addClass("position-offscreen");
		$("#ancients-grid").addClass("position-1");

		//change body's color to match
		$("#map-modal").removeClass("age1").removeClass("age2").removeClass("age3").addClass("age4");
		// $("body").css("background-color", "var(--ancients-color)")
		// $("body").css("background-image", "url(" + ancientsTexture + ")")

		//normal ascend button
		$("#ascend-button").css("filter", "brightness(1)")

		//gray out descend button because you can't go any lower
		$("#descend-button").css("filter", "brightness(0.6)")

	}

}


//traverse() should run here each time the page is loaded to adjust to the right place
traverse();

});