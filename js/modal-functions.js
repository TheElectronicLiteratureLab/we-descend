//get stream
let currentStream = document.body.getAttribute('data-stream');
let streamBtn = document.getElementById('stream-button');
let topModal;
let secondaryModal;

$(document).ready(function() {
	//setup modal and stream html
	for (x=0;x<modalData.length;x++) {
		if (modalData[x][0] == currentStream) {
			$("#stream-button, #stream-tab").html(modalData[x][0]);
			$("#stream").html(modalData[x][1]);
			break;
		}
	}
	
	//remove inventory and outline if in prologue stream
	if (currentStream == "PROLOGUE") {
		$("#outline-tab, #inventory-tab, .stream-tab-pipe").css("display","none");
	}
	
	
	$(`#inventory`).html(`<header>
			<h3 class="subTitle">
				<a id="indescendingorder">Writings by Author</a>
			<h3>
			<h3 class="subTitle"><a href="indescendingorder.html">in descending order</a>:</h3>
		</header>
		
		<div class="catalog container">
			<!--<p><a id="UNKNOWNPROVENANCE"></a><strong>===<a href="UNKNOWNPROVENANCE.html">UNKNOWN PROVENANCE</a>===</p>-->
			<p><a id="TheREMNANT"></a><a href="TheRemnantSay.html#The REMNANT">The REMNANT</a></p>
			<p><a id="INSOMNIAC"></a><a href="awake.html#INSOMNIAC">INSOMNIAC</a></p>
			<p><a id="ROMANTICIMPULSEWRITINGS"></a><a href="YoungRobenc.html#ROMANTIC IMPULSE WRITINGS">ROMANTIC IMPULSE WRITINGS</a></p>
			<p><a id="OTHERWRITINGSofUNKNOWNPROVENANCE"></a><a href="HouseHills.html#OTHER WRITINGS of UNKNOWN PROVENANCE">OTHER WRITINGS of UNKNOWN PROVENANCE</a></p>
			<!--<p><a id="AGEoftheSCHOLAR"></a>===<a href="AGEoftheSCHOLAR.html">AGE of the SCHOLAR</a>===</p>-->
			<p><a id="SOLDIER"></a><a href="purpleberries.html#SOLDIER">SOLDIER</a></p>
			<p><a id="EXILE"></a><a href="fog.html#EXILE">EXILE</a></p>
			<p><a id="UNKNOWNSCHOLASTIC"></a><a href="conspiracy.html#UNKNOWN SCHOLASTIC">UNKNOWN SCHOLASTIC</a></p>
			<p><a id="VOICEfromtheLOCUSTGROVE"></a><a href="TheLocustGrove.html#VOICE from the LOCUST GROVE">VOICE from the LOCUST GROVE</a></p>
			<p><a id="UNKNOWNCURATOR"></a><a href="archiveunderthreat.html#UNKNOWN CURATOR">UNKNOWN CURATOR</a></p>
			<p><a id="SCHOLAR"></a><a href="ScholarsDiary.html#SCHOLAR">SCHOLAR</a></p>
			<!--<p><a id="AGEofEGDERUS"></a>===<a href="AGEofEGDERUS.html">AGE of EGDERUS</a>== </p>-->
			<p><a id="INSURGENT"></a><a href="onmarch.html#INSURGENT">INSURGENT</a></p>
			<p><a id="EGDERUS"></a><a href="EgderusatMountainHouse.html#EGDERUS">EGDERUS</a></p>
			<p><a id="MISSIONARY"></a><a href="WritingsoftheMissionary.html#MISSIONARY">MISSIONARY</a></p>
			<p><a id="ARIC"></a><a href="TestimonyofPraetorAric.html#ARIC">ARIC</a></p>
			<p><a id="BONE-SNAPPER"></a><a href="SteadfastBone-Snapper.html#BONE-SNAPPER">BONE-SNAPPER</a></p>
			<p><a id="HISTORIAN"></a><a href="HistoriansTale.html#HISTORIAN">HISTORIAN</a></p>
			<p><a id="SUPERIUSFRATER"></a><a href="SuperiusFraterandRobenc.html#SUPERIUS FRATER">SUPERIUS FRATER</a></p>
			<p><a id="OLDPOET"></a><a href="patteran.html#OLD POET">OLD POET</a></p>
			<!--<p><a id="TheANCIENTS"></a>===<a href="TheANCIENTS.html">The ANCIENTS</a>===</p>-->
			<p><a id="BOY"></a><a href="return.html#BOY">BOY</a></p>
			<p><a id="LASTONE"></a><a href="LastOneandBoy.html#LAST ONE">LAST ONE</a></p>
			<p><a id="UNKNOWNANCIENTS"></a><a href="Stormsandhaze.html#UNKNOWN ANCIENTS">UNKNOWN ANCIENTS</a></p>
		</div>
		<!-- end of "catalog container" div -->`);
		
	$(`#outline`).html(`<header>
		<h3 class="subTitle">
			All the Writings contained in the Complete Edition.
		</h3>
	</header>
	
	<div class="listing container">
		<h4><a id="indescendingorder">PRIMARY WRITINGS</a> (<a href="indescendingorder.html">in descending order</a>)</h4>
		<ul>
			<li><strong><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="UNKNOWN PROVENANCE"
			href="#">UNKNOWN PROVENANCE</a> 
			<ul>
				<li><a href="TheRemnantSay.html#The REMNANT">The REMNANT</a>
				<ul>
					<li><a href="TheRemnantSay.html">The Remnant Say...</a></li>
					<li><a href="Rhapsody.html">Rhapsody</a></li>
					<li><a href="secrets.html">	secrets</a></li>
					<li><a href="whichisatfault.html">which is at fault?</a></li>
					<li><a href="nocertaintiesnotruth.html">no certainties, no truth</a></li>
					<li><a href="promisesandtrust.html">promises and trust</a></li>
				</ul>
			</li>
				<li><a href="awake.html#INSOMNIAC">INSOMNIAC</a> 
				<ul>
					<li><a href="awake.html">awake</a></li>
					<li><a href="thedark.html">the dark</a></li>
					<li><a href="passiton.html">pass it on</a></li>
					<li><a href="themoonlitgarden.html">the moonlit garden</a></li>
				</ul>
			</li>
				<li><a href="YoungRobenc.html#ROMANTIC IMPULSE WRITINGS">ROMANTIC IMPULSE WRITINGS</a>
				<ul>
					<li><a href="YoungRobenc.html">Young Robenc</a></li>
					<li><a href="Robencreturns.html">Robenc Returns</a></li>
					<li><a href="TheExquisiteSuzu.html">The Exquisite Suzu</a></li>
					<li><a href="TheStarling.html">	The Starling</a></li>
					<li><a href="MarkitoScriptor.html">	Markito Scriptor</a></li>
					<li><a href="Starlingredux.html">Starling redux</a></li>
				</ul>
			</li>
				<li><a href="HouseHills.html#OTHER WRITINGS of UNKNOWN PROVENANCE">OTHER WRITINGS of UNKNOWN PROVENANCE</a> 
				<ul>
					<li><a href="HouseHills.html">House, Hills</a></li>
					<li><a href="Hypothesis.html">Hypothesis</a></li>
					<li><a href="TheKindsofWildernesses.html">The Kinds of Wildernesses</a></li>
					<li><a href="TheLandWhereNoManIs.html">The Land Where No Man Is</a></li>
					<li><a href="fellowship.html">fellowship</a></li>
					<li><a href="thestrengthofthepullofthedark.html">the strength of the pull of the dark</a></li>
					<li><a href="thanksgiving.html">thanksgiving</a></li>
					<li><a href="brusqueandimpatient.html">brusque and impatient</a></li>
					<li><a href="WhatwillIdo.html">What will I do?</a></li>
					<li><a href="keepingbusy.html">keeping busy</a></li>
				</ul>
				</li>
			</ul>
			</li>
			<li><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="AGE of the SCHOLAR"
			href="#">AGE of the SCHOLAR</a> 
			<ul>
				<li><a href="purpleberries.html#SOLDIER">SOLDIER</a> 
				<ul>
					<li><a href="purpleberries.html">purple berries</a></li>
			</ul>
			</li>
				<li><a href="fog.html#EXILE">EXILE</a> 
				<ul>
					<li><a href="fog.html">fog</a></li>
					<li><a href="drawn.html">drawn</a></li>
					<li><a href="stars.html">stars</a></li>
					<li><a href="fire.html">fire</a></li>
					<li><a href="place.html">place</a></li>
					<li><a href="ManhunterMoon.html">Manhunter Moon</a></li>
					<li><a href="attack.html">attack</a></li>
					<li><a href="grandmother.html">grandmother</a></li>
					<li><a href="flight.html">flight</a></li>
			</ul>
			</li>
				<li><a href="conspiracy.html#UNKNOWN SCHOLASTIC">UNKNOWN SCHOLASTIC</a> 
				<ul>
					<li><a href="conspiracy.html">conspiracy</a></li>
			</ul>
			</li>
				<li><a href="TheLocustGrove.html#VOICE from the LOCUST GROVE">VOICE from the LOCUST GROVE</a> 
				<ul>
					<li><a href="TheLocustGrove.html">The Locust Grove</a></li>
					<li><a href="TheRetreatHouse.html">The Retreat House</a></li>
					<li><a href="midnight_pain.html">midnight_pain</a></li>
					<li><a href="TheManintheMoon.html">The Man in the Moon</a></li>
					<li><a href="PeripatikosSoter.html">Peripatikos Soter</a></li>
					<li><a href="onlyIcando.html">only I can do</a></li>
			</ul>
			</li>
				<li><a href="archiveunderthreat.html#UNKNOWN CURATOR">UNKNOWN CURATOR</a> 
				<ul>
					<li><a href="archiveunderthreat.html">archive under threat</a></li>
			</ul>
			</li>
				<li><a href="ScholarsDiary.html#SCHOLAR">SCHOLAR</a> 
				<ul>
					<li><a href="ScholarsDiary.html">Scholar's Diary</a></li>
					<li><a href="ScholarsDraft.html">Scholar's Draft</a></li>
					<li><a href="ScholarsSummary.html">Scholar's Summary</a></li>
					<li><a href="MoreWritings.html">More Writings!</a></li>
					<li><a href="ScholarsFarewell.html">Scholar's Farewell</a></li>
					<li><a href="ScholarsVision.html">Scholar's Vision</a></li>
					<li><a href="ScholarsConfessio.html">Scholar's Confessio</a></li>
					<li><a href="ScholarsApology.html">Scholar's Apology</a></li>
					<li><a href="ScholarsApologyredux.html">Scholar's Apology redux</a></li>
					<li><a href="hands.html">hands</a></li>
					<li><a href="recovery.html">recovery</a></li>
			</ul>
			</li>
		</ul>
		</li>
			<li><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="AGE of EGDERUS"
			href="#">AGE of EGDERUS</a> 
			<ul>
				<li><a href="onmarch.html#INSURGENT">INSURGENT</a> 
				<ul>
					<li><a href="onmarch.html">on march</a></li>
			</ul>
			</li>
				<li><a href="EgderusatMountainHouse.html#EGDERUS">EGDERUS</a> 
				<ul>
					<li><a href="EgderusatMountainHouse.html">Egderus at Mountain House</a></li>
					<li><a href="EgderusandtheGoodDoctor.html">Egderus and the Good Doctor</a></li>
					<li><a href="RescuePlot.html">Rescue Plot</a></li>
					<li><a href="FirstSermonofEgderus.html">First Sermon of Egderus</a></li>
					<li><a href="torrential.html">torrential</a></li>
					<li><a href="Thescriptorandhisbeloved.html">The scriptor and his beloved</a></li>
					<li><a href="adreamoftheGreatCity.html">a dream of the Great City</a></li>
					<li><a href="NewYear.html">New Year</a></li>
					<li><a href="EgderusandtheHistorian.html">Egderus and the Historian</a></li>
					<li><a href="Whatcanwedohere.html">What can we do here?</a></li>
					<li><a href="threefoldmission.html">threefold mission</a></li>
					<li><a href="thiswork.html">this work</a></li>
					<li><a href="EgderusLastWritings.html">Egderus' Last Writings</a></li>
					<li><a href="EgderusSecret.html">Egderus' Secret</a></li>
			</ul>
			</li>
				<li><a href="WritingsoftheMissionary.html#MISSIONARY">MISSIONARY</a> 
				<ul>
					<li><a href="WritingsoftheMissionary.html">Writings of the Missionary</a></li>
					<li><a href="MPart2.html">M Part 2</a></li>
					<li><a href="intheKeep.html">in the Keep</a></li>
					<li><a href="MtheWanderer.html">M the Wanderer</a></li>
			</ul>
			</li>
				<li><a href="TestimonyofPraetorAric.html#ARIC">ARIC</a> 
				<ul>
					<li><a href="TestimonyofPraetorAric.html">Testimony of Praetor Aric</a></li>
					<li><a href="AricAftermath.html">Aric: Aftermath</a></li>
					<li><a href="PostscriptinAricsownhand.html">Postscript in Aric's own hand</a></li>
			</ul>
			</li>
				<li><a href="SteadfastBone-Snapper.html#BONE-SNAPPER">BONE-SNAPPER</a> 
				<ul>
					<li><a href="SteadfastBone-Snapper.html">Steadfast Bone-Snapper</a></li>
			</ul>
			</li>
				<li><a href="HistoriansTale.html#HISTORIAN">HISTORIAN</a> 
				<ul>
					<li><a href="HistoriansTale.html">Historian's Tale</a></li>
					<li><a href="HistoriansNotebook.html">Historian's Notebook</a></li>
					<li><a href="allfalldown.html">all fall down</a></li>
			</ul>
			</li>
				<li><a href="SuperiusFraterandRobenc.html#SUPERIUS FRATER">SUPERIUS FRATER</a> 
				<ul>
					<li><a href="SuperiusFraterandRobenc.html">Superius Frater and Robenc</a></li>
					<li><a href="SuperiusFratersNotes.html">Superius Frater's Notes</a></li>
			</ul>
			</li>
				<li><a href="patteran.html#OLD POET">OLD POET</a>
				<ul>
					<li><a href="patteran.html">patteran</a></li></ul></li>
			</ul>
			</li>
			<li><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="The ANCIENTS"
			href="#">The ANCIENTS</a>
			<ul>
				<li><a href="return.html#BOY">BOY</a> 
				<ul>
					<li><a href="return.html">return</a></li>
					<li><a href="makingthisup.html">making this up</a></li>
			</ul>
			</li>
				<li><a href="LastOneandBoy.html#LAST ONE">LAST ONE</a> 
				<ul>
					<li><a href="LastOneandBoy.html">Last One and Boy</a></li>
					<li><a href="morningsofcreation.html">mornings of creation</a></li>
					<li><a href="Theyrecomingapart.html">They're coming apart</a></li>
					<li><a href="whattoleavebehind.html">what to leave behind</a></li>
					<li><a href="impatience.html">impatience</a></li>
					<li><a href="theghosts.html">the ghosts</a></li>
					<li><a href="ThePerpetratedWorld.html">The Perpetrated World</a></li>
					<li><a href="Everyartifactisatransmission.html">Every artifact is a transmission</a></li>
					<li><a href="sailaway.html">sail away</a></li>
					<li><a href="transport.html">transport</a></li>
					<li><a href="enemy.html">enemy</a></li>
					<li><a href="anotherlifeform.html">another life form</a></li>
					<li><a href="mirror.html">mirror</a></li>
					<li><a href="LastOneflying.html">Last One Flying</a></li>
					<li><a href="deities.html">deities</a></li>
			</ul>
			</li>
				<li><a href="Stormsandhaze.html#UNKNOWN ANCIENTS">UNKNOWN ANCIENTS</a> 
				<ul>
					<li><a href="Stormsandhaze.html">Storms and haze</a></li>
					<li><a href="Catastrophe.html">Catastrophe</a></li>
					<li><a href="Mydespair.html">My despair</a></li>
					<li><a href="NewEcclesiastes.html">New Ecclesiastes</a></li>
					<li><a href="WayfarinStranger.html">Wayfarin' Stranger</a></li>
					<li><a href="Andasforthosethatareleft.html">And as for those that are left</a></li>
					<li><a href="Foryoushallbeinleaguewittthestones.html">For you shall be in league with the stones</a></li>
					<li><a href="Thestarsshoneintheirwatches.html">The stars shone in their watches</a></li>
					<li><a href="Pastoral.html">Pastoral</a></li>
					<li><a href="Fallen.html">Fallen</a></li>
					<li><a href="Nogifts.html">No gifts</a></li>
					<li><a href="whatitis.html">what it is</a></li>
					<li><a href="nothingatall.html">nothing at all</a></li>
					<li><a href="refugee.html">refugee</a></li>
					<li><a href="thisroad.html">this road</a></strong></li>
					</ul>
					</li>
				</ul>
				</li>
			</ul>
		<h4>SECONDARY WRITINGS <strong></h4>
			<ul><li><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="LEGOMENA"
			href="#">LEGOMENA</strong></a> (Elucidations) 
				<ul>
					<li><strong><a href="LegomenonforUNKNOWNPROVENANCE.html">Legomenon for UNKNOWN PROVENANCE</a> 
					<ul>
						<li><a href="LegomenonfortheREMNANT.html">Legomenon for the REMNANT</a></li>
						<li><a href="LegomenonforINSOMNIAC.html">Legomenon for INSOMNIAC</a></li>
						<li><a href="LegomenonforROMANTICIMPULSEWRITINGS.html">Legomenon for ROMANTIC IMPULSE WRITINGS</a></li>
						<li><a href="LegomenonforOTHERWRITINGSofUNKNOWNPROVENANCE.html">Legomenon for OTHER WRITINGS of UNKNOWN PROVENANCE</a></li>
					</ul></li>
					<li><a href="LegomenonforAGEoftheSCHOLAR.html">Legomenon for Age of the SCHOLAR</a> 
					<ul>
						<li><a href="LegomenonforSOLDIER.html">Legomenon for SOLDIER</a></li>
						<li><a href="LegomenonforEXILE.html">Legomenon for EXILE</a></li>
						<li><a href="LegomenonforUNKNOWNSCHOLASTIC.html">Legomenon for UNKNOWN SCHOLASTIC</a></li>
						<li><a href="LegomenonforVOICEfromtheLOCUSTGROVE.html">Legomenon for VOICE from the LOCUST GROVE</a></li>
						<li><a href="LegomenonforUNKNOWNCURATOR.html">Legomenon for UNKNOWN CURATOR</a></li>
						<li><a href="LegomenonforSCHOLAR.html">Legomenon for SCHOLAR</a></li>
					</ul></li>
					<li><a href="LegomenonforAGEofEGDERUS.html">Legomenon for Age of EGDERUS</a> 
					<ul>
						<li><a href="LegomenonforINSURGENT.html">Legomenon for INSURGENT</a></li>
						<li><a href="LegomenonforEGDERUS.html">Legomenon for EGDERUS</a></li>
						<li><a href="LegomenonforTheMISSIONARY.html">Legomenon for The MISSIONARY</a></li>
						<li><a href="LegomenonforARIC.html">Legomenon for ARIC</a></li>
						<li><a href="LegomenonforBONE-SNAPPER.html">Legomeonon for BONE-SNAPPER</a></li>
						<li><a href="LegomenonforHISTORIAN.html">Legomenon for HISTORIAN</a></li>
						<li><a href="LegomenonforSUPERIUSFRATER.html">Legomenon for SUPERIUS FRATER</a></li>
						<li><a href="LegomenonforOLDPOET.html">Legomenon for OLD POET</a></li>
					</ul></li>
					<li><a href="LegomenonfortheANCIENTS.html">Legomenon for the ANCIENTS</a> 
					<ul>
						<li><a href="LegomenonforBOY.html">Legomenon for BOY</a></li>
						<li><a href="LegomenonforLASTONE.html">Legomenon for LAST ONE</a></li>
						<li><a href="LegomenonforUNKNOWNANCIENTS.html">Legomenon for UNKNOWN ANCIENTS</strong></a> <strong></li>
					</ul></li>
				</ul></li>
					<li><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="SCHOLIA"
			href="#">SCHOLIA</strong></a> (Annotations) 
					<ul>
						<li>UNKNOWN PROVENANCE <strong>
						<ul>
							<li><a href="JonahatTarshish.html">Jonah at Tarshish</a></li>
							<li><a href="heavilydamageddocument.html">heavily damaged document</a></li>
							<li><a href="Writingsfromalleras.html">Writings from all eras</a></li>
							<li><a href="unlessyoucansingdontinterruptthemusic.html">unless you can sing, don't interrupt the music</a></li>
							<li><a href="asthepoemsays.html">	as the poem says</a></li>
							<li><a href="tokillitthemselves.html">	to kill it themselves</a></li>
							<li><a href="thegrandmother.html">	the grandmother</a></li>
							<li><a href="theFraterhimself.html">	the Frater himself</a></li>
							<li><a href="notthesameassayingitcannotbecorrect.html">	not the same as saying it cannot be correct</a></li>
							<li><a href="TheScholarisdead.html">	The Scholar is dead</a></li>
							<li><a href="theirlessonsandtheirpractices.html">their lessons and their practices</a> </strong></li>
						</ul></li>
						<li>Age of the SCHOLAR <strong>
						<ul>
							<li><a href="ManintheMoon.html">Man in the Moon</a></li>
							<li><a href="noaccountofmytravels.html">no account of my travels</a></li>
							<li><a href="RaggedyMan.html">Raggedy Man</a></li>
							<li><a href="neglecthasawayofpreservingthings.html">neglect has a way of preserving things</a></li>
							<li><a href="theprimaryTextsinmyScholarsarchives.html">the primaryTexts in myScholar's archives</a></li>
							<li><a href="onceuponatime.html">onceuponatime</a></li>
							<li><a href="whathewasbeingputthrough.html">what he was being put through</a></li>
							<li><a href="alargerstoryembracingall.html">a larger story embracing all</a></li>
							<li><a href="aconnectionbetweentwoormoreauthors.html">a connection between two or more authors</a></li>
							<li><a href="asourceIcannotname.html"> a source I cannot name</a></li>
							<li><a href="rearrangeexistingevidence.html">rearrange existing evidence</a></li>
							<li><a href="IthinkIknowwheretolook.html">I think I know where to look</a></li>
							<li><a href="Thedocumentpurportstobe.html">The document purports to be</a></li>
							<li><a href="albatross.html">albatross</a></li>
							<li><a href="drivenintothewilderness.html">driven into the wilderness</a></li>
							<li><a href="Threepossibilities.html">	Three possibilities</a></li>
							<li><a href="overinsistent.html">overinsistent</a></li>
							<li><a href="anyfinalthoughts.html">	any final thoughts</a></li>
							<li><a href="melancholycontemplation.html">	melancholy contemplation</a></li>
							<li><a href="interestingpossibilities.html">	interesting possibilities</a></li>
							<li><a href="discoveredthearchives.html">	discovered the archives</a></li>
							<li><a href="howthatcametopass.html">how that came to pass</a> </strong></li>
						</ul></li>
						<li>Age of EGDERUS <strong>
						<ul>
							<li><a href="ButRobencheseemedtofear.html">But Robenc he seemed to fear</a></li>
							<li><a href="ItookmyleaveofMountainHouse.html">I took my leae of Mountain House</a></li>
							<li><a href="Hadhecommittedacrime.html">Had he committed a crime?</a></li>
							<li><a href="IdidnotknowwhyIthoughtthat.html">I did not know why I thought that</a></li>
							<li><a href="nowherewasitwrittendown.html">nowhere was it written down</a></li>
							<li><a href="noexampleofthisscriptorsshorthandhasbeenfound.html">no example of this scriptor's shorthand has been found</a></li>
							<li><a href="myownunderstandingoforthodoxy.html">my own understanding of orthodoxy</a></li>
							<li><a href="ThereasonsforhisremovalfromtheOffice.html">The Reasons for his removal from the Office</a></li>
							<li><a href="nofurtherinformationhassurvived.html">no further information... has survived</a></li>
							<li><a href="itneveroccurredtome.html">it never occurred to me</a></li>
							<li><a href="knownonlyastheHistorian.html">known only as the Historian</a></li>
							<li><a href="helimped.html">he limped</a></li>
							<li><a href="Iwascalledbacktomylordsservice.html">I was called back to my lord's service</a></li>
							<li><a href="somedamagingdocuments.html">some damaging documents</a></li>
							<li><a href="Wemustbeabletoprove.html">we must be able to prove</a></li>
							<li><a href="somethingtoldme.html">something told me</a></li>
							<li><a href="lacuna.html">[lacuna]</a></li>
							<li><a href="writingpoemsonthetrunksoftreesandthesidesofmountains.html">writing poems on the trunks of trees and sides of mountains</a></li>
							<li><a href="aneventualitywemaywellhavetoface.html">an eventuality we may well have to face</a></li>
							<li><a href="lacunaquery.html">lacuna?</a></li>
							<li><a href="puttingthisincidenttogether.html">putting this incident together</a></li>
							<li><a href="BythetimetheGoodDoctortookover.html">By the time the Good Doctor took over</a></li>
							<li><a href="Ofmyownconvictions.html">Of my own convictions</a></li>
							<li><a href="TheGoodDoctorhimselfdisappeared.html">The Good Doctor himself disappeared</a></li>
							<li><a href="childrenoftheAncients.html">children of the Ancients</a></li>
							<li><a href="theRemnantsancestry.html">the Remnant's ancestry</a></li>
							<li><a href="theannalsoftheGolias.html">the annals of the Golias</a></li>
							<li><a href="Iopenmyarmstoitscoldembrace.html">I open my arms to its cold embrace</a></li>
							<li><a href="Iamviolatingmyoath.html">I am violating my oath</a></li>
							<li><a href="myearlyadventuresinleadership.html">my early adventures in leadership</a></li>
							<li><a href="avolumemadebystitchingtogether.html">a volume made by stitching together</a></li>
							<li><a href="acellarbeneaththeentryway.html">a cellar beneath the entryway</a></li>
							<li><a href="Ipreparedaninventory.html">I prepared an inventory</a></li>
							<li><a href="theTreasureoftheAncients.html">the Treasure of the Ancients</a></li>
							<li><a href="struckdowntheban.html">struck down the ban</a></li>
							<li><a href="rippedupfromanoldpath.html">ripped up from an old path</a></li>
							<li><a href="onemorevision.html">one more vision</a></li>
							<li><a href="cannotescapeit.html">cannot escape it</a></li>
							<li><a href="ThecharnelgroundoftheWorld.html">The charnel ground of the World</a></li>
							<li><a href="ridiculoushappenstance.html">ridiculous happenstance</a></li>
							<li><a href="centurion.html">centurion</a></li>
							<li><a href="Istilldonotknowwhathappenedtohim.html">I still do not know what happened to him</a></li>
							<li><a href="Asahistorian.html">As a historian</a></li>
							<li><a href="Imaynotbethefirstwayfarer.html">I may not be the first wayfarer</a></li>
							<li><a href="atleastonepage.html">at least one page</a></li>
							<li><a href="pyrrhonism.html">pyrrhonism</a></li>
							<li><a href="Theoldsong.html">The old song</a></li>
							<li><a href="asmallpyramidofsharperstones.html">a small pyramid of sharper stones</a> </strong></li>
						</ul></li>
						<li>The ANCIENTS<strong>
						<ul>
							<li><a href="Differentnowofcourse.html">Different now, of course</a></li>
							<li><a href="insert.html">[insert] >></a></li>
							<li><a href="psalmists.html">psalmists</a></li>
							<li><a href="theoriesarealltexts.html">theories are all texts</a></li>
							<li><a href="memorizethestringofwords.html">memorize a string of words</a></li>
							<li><a href="slideshows.html">slideshows</a></li>
							<li><a href="thedwellingplaceoftheghosts.html">the dwelling place of the ghosts</a></li>
							<li><a href="onestrangesceneafteranother.html">one strange scene after another</a></li>
							<li><a href="WhoamI.html">Who am I?</a></li>
							<li><a href="ourWorld.html">ourWorld</a></li>
							<li><a href="thatfoolishboy.html">that foolish boy</a></li>
							<li><a href="Onimpatienceandtheenemy.html">On impatience and the enemy</a></li>
							<li><a href="Leviticus.html">	Leviticus</a></li>
							<li><a href="Job.html">	Job</a></li>
							<li><a href="Baruch.html">	Baruch</a></li>
							<li><a href="theexpletivetwitslarynx.html">	the [expletive] twit's larynx</a></li>
							<li><a href="thefullretailprice.html">	the full retail price</a></li>
							<li><a href="holdingaparliamentlikeintheoldstory.html">	holding a parliament, like in the old story</a> </strong></li>
						</ul></li>
						<li>APPARATUS<strong>
						<ul>
							<li><a href="movingthetextitself.html">moving the text itself</a></li>
							<li><a href="heretoforeunpublished.html">heretofore unpublished</a></li>
							<li><a href="boldfacetype.html">boldface type</a></li>
							<li><a href="TheLANDING.html">The LANDING</strong></a></li>
							<li><a href="definitivelyplacedintime.html">definitively placed in time</a></li>
							<li><a href="theothertimeBands.html">the other timeBands</a></li>
							<li><a href="apotentiallyedifyingpatterninwhichtoreadthem.html">a potentially edifying pattern in which to read them</a></li>
							<li><a href="theotherwandererswhoseWritingsappearintheArchives.html">the other wanderers whose Writings appear in the Archives</a></li>
							<li><a href="thelastbutoneoftheAncients.html">the last but one of the Ancients</a></li>
							<li><a href="alongerallegoricalwork.html">a longer allegorical work</a></li>
							<li><a href="amongthemiscellaneaofunplaceableartifacts.html">among the miscellanea of unplaceable artifacts</a></li>
							<li><a href="SermonsofEgderus.html">Sermons of Egderus</a></li>
							<li><a href="inthesecondclause.html">in the second clause</a></li>
							<li><a href="collapseofthecivilizationoftheAncients.html">collapse of the civilization of the Ancients</a></li>
							<li><a href="thelastoriginalWritings.html">last 'original' Writings</a></li>
							<li><a href="elucidations.html">elucidations</a></li>
							<li><a href="indescendingorder.html">in descending order</strong></a> </strong><strong>
						</li></ul>
					</li></ul>
				</li></ul>
			<h4>TERTIARY WRITINGS <strong></h4>
				<ul>
					<li>APPARATI</strong> (Finding Aids + Supplementay Writings) 
					<ul>
						<li>frontMatter 
						<ul>
							<li><strong><a href="index.html">Frontispiece</a></li>
							<li><a href="Dedication.html">Dedication</a></li>
							<li><a href="TITLE.html">TITLE</strong></a> (home) <strong></li>
							<li><a href="PrefacetotheCompleteEdition.html">Preface to the Complete Edition</a></li>
							<li><a href="ForewordtotheArchives.html">Foreword to the Archives</a></li>
							<li><a href="Epigraph.html">Epigraph</a> </strong></li>
					</ul></li>
						<li>midMatter 
						<ul>
							<li><strong><a href="1Epigraph.html#PROLOGUE">PROLOGUE</strong></a> ('tour' of the Writings)<strong></li>
							<li><a href="LANDING.html">LANDING</strong></a> (resting place where many paths meet) <strong></li>
							<li><a id="stream-button" class="modal-toggle" data-target="stream-modal" data-subtarget="inventory" href="#">INVENTORY</strong></a> (Authors) <strong></li>
							<li><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="SCHOLIA"
			href="#">SCHOLIA</a> (Annotations}</li>
							<li><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="LEGOMENA"
			href="#">LEGOMENA</a> (Elucidations)</li>
						</ul>
						<li>backMatter
						<ul>
							<li><strong><a href="AfterwordTransmissionoftheArchives.html">Afterword: Transmission of the Archives</strong></a> (with synopsis of transmission)<strong></li>
							<li><a href="OntheArrangementoftheWritings.html">On the Arrangement of the Writings</a></li>
							<li><a href="Acknowledgments.html">Acknowledgments</a></li>
							<li><a href="Colophon.html">Colophon</a> </strong></li>
							<li>OUTLINE (this Nota)</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<!-- end of "inscription" section -->`);
	
	
	
	$(`#map-modal`).html(`<div id="map-container">
			<h2>UNKNOWN PROVENANCE</h2>
			<main>
				<section class="map-grid position-1" id="unknown-grid">
					<a href="YoungRobenc.html#ROMANTIC IMPULSE WRITINGS">
						<h3>ROMANTIC IMPULSE WRITINGS</h3>
					</a>
					<a href="TheRemnantSay.html#The REMNANT">
						<h3>THE REMNANT</h3>
					</a>
					<a href="awake.html#INSOMNIAC">
						<h3>INSOMNIAC</h3>
					</a>
					<a href="HouseHills.html#OTHER WRITINGS of UNKNOWN PROVENANCE">
						<h3>OTHER WRITINGS of UNKNOWN PROVENANCE</h3>
					</a>
				</section>

				<section class="map-grid position-2" id="scholar-grid">
					<a href="purpleberries.html#SOLDIER">
						<h3>SOLDIER</h3>
					</a>
					<a href="conspiracy.html#UNKNOWN SCHOLASTIC">
						<h3>UNKNOWN SCHOLASTIC</h3>
					</a>
					<a href="fog.html#EXILE">
						<h3>EXILE</h3>
					</a>
					<a href="TheLocustGrove.html#VOICE from the LOCUST GROVE">
						<h3>VOICE from the LOCUST GROVE</h3>
					</a>
					<a href="archiveunderthreat.html#UNKNOWN CURATOR">
						<h3>UNKNOWN CURATOR</h3>
					</a>
					<a href="ScholarsDiary.html#SCHOLAR">
						<h3>SCHOLAR</h3>
					</a>
				</section>

				<section class="map-grid position-3" id="egderus-grid">
					<a href="onmarch.html#INSURGENT">
						<h3>INSURGENT</h3>
					</a>
					<a href="EgderusatMountainHouse.html#EGDERUS">
						<h3>EGDERUS</h3>
					</a>
					<a href="WritingsoftheMissionary.html#MISSIONARY">
						<h3>MISSIONARY</h3>
					</a>
					<a href="TestimonyofPraetorAric.html#ARIC">
						<h3>ARIC</h3>
					</a>
					<a href="SteadfastBone-Snapper.html#BONE-SNAPPER">
						<h3>BONE-SNAPPER</h3>
					</a>
					<a href="HistoriansTale.html#HISTORIAN">
						<h3>HISTORIAN</h3>
					</a>
					<a href="SuperiusFraterandRobenc.html#SUPERIUS FRATER">
						<h3>SUPERIUS FRATER</h3>
					</a>
					<a href="patteran.html#OLD POET">
						<h3>OLD POET</h3>
					</a>
				</section>

				<section class="map-grid position-4" id="ancients-grid">
					<a href="Stormsandhaze.html#UNKNOWN ANCIENTS">
						<h3>UNKNOWN ANCIENTS</h3>
					</a>
					<a href="return.html#BOY">
						<h3>BOY</h3>
					</a>
					<a href="LastOneandBoy.html#LAST ONE">
						<h3>LAST ONE</h3>
					</a>
				</section>

			</main>

			<div class="button-array">
				<button id="ascend-button">
					<span>ASCEND</span>
				</button>
				<div class="decorative-diamond"></div>
				<button id="descend-button">
					<span>DESCEND</span>
				</button>
			</div>
		</div>
		
		<button class="close-modal">Close</button>`);
		
		

	$(".modal-toggle").click(function(){
	
		//open targeted modal
		if ($(this).data("target")) {
			let target = $(this).data("target");
			$("#"+target).removeClass("modal-closed");
			secondaryModal = topModal;
			topModal = target;
		}
		
		//open targeted article inside of modal
		if ($(this).data("subtarget")) {
			let subTarget = $(this).data("subtarget");
				if (subTarget != "metastream") {
					$(".outline-container, .stream-container, .inventory-container").addClass("hidden");
				}
			
			$("."+subTarget+"-container").removeClass("hidden");
			
			$(".modal-toggle.selected").removeClass("selected");
			$("#"+subTarget+"-tab").addClass("selected");
		}

		//load metastream modal
		if ($(this).data("metamodal")) {
			for (x=0;x<modalData.length;x++) {
				if (modalData[x][0] == $(this).data("metamodal")) {
					$("#metastream").html(modalData[x][1]);
					break;
				}
			}

		}
		checkPage();


	});
	
	//hide all targeted modals and articles
	$(".close-modal").click(function(){
		closeModal();
	});
	
	$(document).keyup(function(e) {
		if (e.key === "Escape") { // escape key maps to keycode `27`
			closeModal();
		}
	});

	function closeModal() {
		$("#"+topModal).addClass("modal-closed");
		$("#"+topModal+".modal article").addClass("hidden");
		$("#"+topModal+".modal-toggle.selected").removeClass("selected");
		topModal = secondaryModal;
	}

	function checkHash() {
		let hash = window.location.hash.slice(1).replaceAll(`%20`, ` `);
		for (x=0;x<modalData.length;x++) {
			if (modalData[x][0] == hash) {
				streamBtn.click();
				break;
			}
		}
	}

	function checkPage() {
		let title = $("title").text().trim();
		let catalog = $("#stream").children(".catalog.container").children(':contains("' + title + '")');

		if (catalog.text() == '') {
			catalog = $("#metastream").children(".catalog.container").children(':contains("' + title + '")');
		}

		let selectLexia = catalog.filter(function () {
			return $(this).text().trim() == title;
			});

		selectLexia.addClass("current-stream-page");
	}

	checkHash();

	$("#mobile-menu").click(function(){
		$("#navigator").fadeToggle(800).css('display', 'flex');
	});
});