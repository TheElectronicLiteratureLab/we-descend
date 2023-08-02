//Tim Down
//edited Sep 20, 2016 at 9:22
//https://stackoverflow.com/questions/3410464/how-to-find-indices-of-all-occurrences-of-one-string-in-another-in-javascript
function getIndicesOf(searchStr, str, caseSensitive) {
	var searchStrLen = searchStr.length;
	if (searchStrLen == 0) {
		return [];
	}
	var startIndex = 0, index, indices = [];
	if (!caseSensitive) {
		str = str.toLowerCase();
		searchStr = searchStr.toLowerCase();
	}
	while ((index = str.indexOf(searchStr, startIndex)) > -1) {
		indices.push(index);
		startIndex = index + searchStrLen;
	}
	return indices;
}

let searchString = "";
let startPosition = endPosition = currentPosition = searchResult = searchText = null;
let preEllipses = postEllipses = null;
let foundResultFlag = 0;
let searchCount = 0;

$(document).ready(function() {
	$("#search-form").submit(function( event ) {
		event.preventDefault();
		
		//grab search term and clear search area
		searchString = $("#searchterm").val().toLowerCase();
		$("#output-area").empty();
		foundResultFlag = 0;
		searchCount = 0;
		
		//check for search term length
		if (searchString.length >= 3) {

			for (x=0; x < searchData.length; x++) {
				//clear variables for each pass
				var indices = null;
				startPosition = endPosition = currentPosition = searchResult = searchText = null;
				preEllipses = postEllipses = null;
			
				//search the text for user's search term
				searchTitle = searchData[x][0].toLowerCase();
				searchText = searchData[x][1].toLowerCase();
			
				//search for strings in both titles and content
				titleIndices = getIndicesOf(searchString, searchTitle);
				contentIndices = getIndicesOf(searchString, searchText);
			
				//string exists in content
				if (contentIndices != null) {
					for (z=0; z < contentIndices.length; z++) {
						foundResultFlag = 1;
			
						startPosition = contentIndices[z];
		
						//calculate beginning and end of string
						endPosition = startPosition + searchString.length;
			
						//grab text around search result
						finalStartPosition = startPosition - 40;
						finalEndPosition = endPosition + 40;
			
						//find words to cut at
						while (searchText[finalStartPosition] != " " && finalStartPosition > 0) {
							finalStartPosition--;
						}
			
						while (searchText[finalEndPosition] != " " && finalEndPosition < searchText.length) {
							finalEndPosition++;
						}
			
						//prevent leaving string
						if (finalStartPosition < 0) {
							finalStartPosition = 0;
						}
						if (finalEndPosition > searchText.length) {
							finalEndPosition = searchText.length;
						}
			
						//format output
						let searchResult = searchData[x][1].substring(finalStartPosition, startPosition)+"<mark class='search-highlight'>"+searchData[x][1].substring(startPosition, endPosition)+"</mark>"+searchData[x][1].substring(endPosition, finalEndPosition);
			
						//append elipses if needed
						if (finalStartPosition > 0 && searchResult[0] == " ") {
							searchResult = "..."+searchResult.substring(1,searchResult.length);
						}
						if (searchResult[searchResult.length] != ".") {
							searchResult = searchResult+"...";
						}
			
						//print findings
						$("#output-area").append("<h3><a href='"+searchData[x][2]+"'>"+searchData[x][0]+"</a></h3><p>"+searchResult+"</p>");
						searchCount++;
					}//end of contentIndices for loop
				}//end of contentIndices if conditional
			
			
			
			
			
			
			
			
			
				//string exists in title
				if (titleIndices != null) {
					for (z=0; z < titleIndices.length; z++) {
						foundResultFlag = 1;
			
						startPositionTitle = titleIndices[z];
		
						//TITLE
						//calculate beginning and end of string
						endPositionTitle = startPositionTitle + searchString.length;
			
						//grab text around search result
						finalStartPositionTitle = startPositionTitle - 40;
						finalEndPositionTitle = endPositionTitle + 40;
			
						//find words to cut at
						while (searchTitle[finalStartPositionTitle] != " " && finalStartPositionTitle > 0) {
							finalStartPositionTitle--;
						}
			
						while (searchTitle[finalEndPositionTitle] != " " && finalEndPositionTitle < searchTitle.length) {
							finalEndPositionTitle++;
						}
			
						//prevent leaving string
						if (finalStartPositionTitle < 0) {
							finalStartPositionTitle = 0;
						}
						if (finalEndPositionTitle > searchTitle.length) {
							finalEndPositionTitle = searchTitle.length;
						}
					
						//TEXT
						//grab text around search result
						finalEndPositionText = 40;
			
						//find words to cut at
						while (searchText[finalEndPositionText] != " " && finalEndPositionText < searchText.length) {
							finalEndPositionText++;
						}
			
						//prevent leaving string
						if (finalEndPositionText > searchText.length) {
							finalEndPositionText = searchText.length;
						}
			
						//format output
						let searchResultTitle = searchData[x][0].substring(finalStartPositionTitle, startPositionTitle)+"<mark class='search-highlight'>"+searchData[x][0].substring(startPositionTitle, endPositionTitle)+"</mark>"+searchData[x][0].substring(endPositionTitle, finalEndPositionTitle);
						let searchResultText = searchData[x][1].substring(0, finalEndPositionText);
			
						//append elipses if needed
						if (searchResultText[0] == " ") {
							searchResultText = "..."+searchResultText.substring(1,searchResultText.length);
						}
						else if (searchResultText[searchResultText.length] != ".") {
							searchResultText = searchResultText+"...";
						}
			
						//print findings
						$("#output-area").append("<h3><a href='"+searchData[x][2]+"'>"+searchResultTitle+"</a></h3><p>"+searchResultText+"</p>");
						searchCount++;
					}//end of contentIndices for loop
				}//end of contentIndices if conditional

			}//end of for loop

			//alert user if nothing was found
			if (foundResultFlag == 0) {
				if ($("#output-result-count").hasClass("search-active") == true) {
					$("#output-result-count").removeClass("search-active");
				}
		
				$("#output-area").empty();
				$("#output-area").append("<p>Your string could not be found in the archives.</p>");
			}
			else {
				if ($("#output-result-count").hasClass("search-active") == false) {
					$("#output-result-count").addClass("search-active");
				}
				
				$("#output-result-count span").empty();
				$("#output-result-count span").append(searchCount);
			}
		
		}//end of search term length check
		else {
			$("#output-area").empty();
			$("#output-area").append("<p>Please enter a search term that is three or more characters.</p>");
		}
		
		

	});
});