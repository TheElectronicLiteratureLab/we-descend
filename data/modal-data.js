//title, text, link
const modalData = [
	[`PROLOGUE`,
		`<header>
			<h3 class="subTitle">A literary sequence</h3>
			<h3 class="subTitle">providing a brief tour of the Writings</h3>
		</header>

		<div class="catalog container">
			<p><a id="Epigraph"></a><a href="1Epigraph.html">Epigraph</a></p>
			<p><a id="Stormsandhaze"></a><a href="1Stormsandhaze.html">Storms and haze</a></p>
			<p><a id="ScholarsDiary"></a><a href="1ScholarsDiary.html">Scholar's Diary</a></p>
			<p><a id="TheLocustGrove"></a><a href="1TheLocustGrove.html">The Locust Grove</a></p>
			<p><a id="EgderusatMountainHouse"></a><a href="1EgderusatMountainHouse.html">Egderus at Mountain House
			</p>
			<p><a id="nocertaintiesnotruth"></a><a href="1nocertaintiesnotruth.html">no certainties, no truth</a>
			</p>
			<p><a id="archiveunderthreat"></a><a href="1archiveunderthreat.html">archive under threat</a></p>
			<p><a id="adreamoftheGreatCity"></a><a href="1adreamoftheGreatCity.html">a dream of the Great City</a>
			</p>
			<p><a id="SteadfastBone-Snapper"></a><a href="1SteadfastBone-Snapper.html">Steadfast Bone-Snapper</a>
			</p>
			<p><a id="intheKeep"></a><a href="1intheKeep.html">in the Keep</a></p>
			<p><a id="ThePerpetratedWorld"></a><a href="1ThePerpetratedWorld.html">The Perpetrated World</a></p>
			<p><a id="Thescriptorandhisbeloved"></a><a href="1Thescriptorandhisbeloved.html">The scriptor and his beloved</a></p>
			<p><a id="stars"></a><a href="1stars.html">stars</a></p>
			<p><a id="enemy"></a><a href="1enemy.html">enemy</a></p>
			<p><a id="return"></a><a href="1return.html">return</a></p>
			<p><a id="thisroad"></a><a href="1thisroad.html">this road</a></p>
			<p><a id="LANDING"></a><a href="LANDING.html">LANDING</a>
			<p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`AGE of EGDERUS`,
		`<header>
			<h2 class="title">
				<a href="LegomenonforAGEofEGDERUS.html">AGE of EGDERUS</a>
			</h2>
			<h3 class="subTitle">
				Writings from the time during which Egderus flourished.
			</h3>
		</header>
		
		<div class="catalog container">
				<p><a href="onmarch.html#INSURGENT"> INSURGENT</a></p>
				<p><a href="EgderusatMountainHouse.html#EGDERUS"> EGDERUS</a></p>
				<p><a href="WritingsoftheMissionary.html#MISSIONARY">  MISSIONARY</a></p>
				<p><a href="TestimonyofPraetorAric.html#ARIC"> ARIC</a></p>
				<p><a href="SteadfastBone-Snapper.html#BONE-SNAPPER">  BONE-SNAPPER</a></p>
				<p><a href="HistoriansTale.html#HISTORIAN"> HISTORIAN</a></p>
				<p><a href="SuperiusFraterandRobenc.html#SUPERIUS FRATER"> SUPERIUS FRATER</a></p>
				<p><a href="patteran.html#OLD POET"> OLD POET</a></p>
		</div>
		<!-- end of "listing container" div -->`
	],
	[`AGE of the SCHOLAR`,
		`<header>
			<h2 class="title">
				<a href="LegomenonforAGEoftheSCHOLAR.html">AGE of the SCHOLAR</a>
			</h2>
			<h3 class="subTitle">
				Writings that originated from the era during which the Scholar flourished.
			</h3>
		</header>

		<div class="catalog container">
			<p><a href="purpleberries.html#SOLDIER"> SOLDIER</a></p>
			<p><a href="fog.html#EXILE"> EXILE</a></p>
			<p><a href="conspiracy.html#UNKNOWN SCHOLASTIC"> UNKNOWN SCHOLASTIC</a></p>
			<p><a href="TheLocustGrove.html#VOICE from the LOCUST GROVE"> VOICE from the LOCUST GROVE</a></p>
			<p><a href="archiveunderthreat.html#UNKNOWN CURATOR"> UNKNOWN CURATOR</a></p>
			<p><a href="ScholarsDiary.html#SCHOLAR"> SCHOLAR</a></p>
		</div>
		<!-- end of "catalog container" div -->`
	],
	[`APPARATI`,
		`<header>
				<p>
					Various contrivances to help find specific Writings, Authors, and stories contained in the archives, as well as to aid in comprehending the whole:
				</p>
			</header>
			<div class="catalog container">
				<h4>frontMatter</h4>

					<li><a href="index.html">Frontispiece</a></li>
					<li><a href="Dedication.html">Dedication</a></li>
					<li><a href="TITLE.html">TITLE</a> (home)</li>
					<li><a href="PrefacetotheCompleteEdition.html">Preface to the Complete Edition</a></li>
					<li><a href="ForewordtotheArchives.html">Foreword to the Archives</a></li>
					<li><a href="Epigraph.html">Epigraph</a> </li>
					<li><a href="1Epigraph.html#PROLOGUE">PROLOGUE</a> (a 'tour' of the Writings) </li>
					<li><a id="stream-button" class="modal-toggle" data-target="stream-modal" data-subtarget="inventory" href="#">INVENTORY</a> (of Authors)</li>

				<h4>midMatter</h4>

					<li><a href="1Epigraph.html#PROLOGUE">PROLOGUE</strong></a> ('tour' of the Writings)</li>
					<li><a href="LANDING.html">LANDING</a> (resting place where many paths meet)</li>
					<li><a id="stream-button" class="modal-toggle" data-target="stream-modal" data-subtarget="inventory" href="#">INVENTORY</strong></a> (Authors)</li>
					<li><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="SCHOLIA"
			href="#">SCHOLIA</a> (Annotations}</li>
					<li><a class="modal-toggle" data-target="metastream-modal" data-subtarget="metastream" data-metamodal="LEGOMENA"
			href="#">LEGOMENA</a> (Elucidations)</li>
					
				<h4>backMatter</h4>

					<li><a href="AfterwordTransmissionoftheArchives.html">Afterword: Transmission of the Archives</a> (with synopsis of transmission)</li>
					<li><a href="OntheArrangementoftheWritings.html">On the Arrangement of the Writings</a></li>
					<li>APPARATI (this Nota)</li>
					<li><a href="Acknowledgments.html">Acknowledgments</a></li>
					<li><a href="Colophon.html">Colophon</a></li>
					<li><a class="modal-toggle" data-target="stream-modal" data-subtarget="outline" href="#">OUTLINE</a> (site map)</li>

			</div>
			<!-- end of "listing container" div -->`
	],
	[`ARIC`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforARIC.html">ARIC</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Dictations of a career soldier
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="TestimonyofPraetorAric.html">Testimony of Praetor Aric</a></p>
			<p><a href="AricAftermath.html">Aric: Aftermath</a></p>
			<p><a href="PostscriptinAricsownhand.html">Postscript in Aric's own hand</a></p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`BONE-SNAPPER`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforBONE-SNAPPER.html">BONE-SNAPPER</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings pertaining to the Rectifier of the Office of Inquiry<br>
				during the time of <a href="LegomenonforEGDERUS.html">Egderus</a>
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="SteadfastBone-Snapper.html">Steadfast Bone-Snapper</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`BOY`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforBOY.html">BOY</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings attributed to the Young Person<br>
				raised by the so-called <a href="LegomenonforLASTONE.html">Last One</a>
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="return.html">return</a></p>
			<p><a href="makingthisup.html">making this up</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`EGDERUS`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforEGDERUS.html">EGDERUS</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings of the Founder of the Archives
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="EgderusatMountainHouse.html">Egderus at Mountain House</a></p>
			<p><a href="EgderusandtheGoodDoctor.html">Egderus and the Good Doctor</a></p>
			<p><a href="RescuePlot.html">Rescue Plot</a></p>
			<p><a href="FirstSermonofEgderus.html">First Sermon of Egderus</a></p>
			<p><a href="torrential.html">torrential</a></p>
			<p><a href="Thescriptorandhisbeloved.html">The scriptor and his beloved</a></p>
			<p><a href="adreamoftheGreatCity.html">a dream of the Great City</a></p>
			<p><a href="NewYear.html">New Year</a></p>
			<p><a href="EgderusandtheHistorian.html">Egderus and the Historian</a></p>
			<p><a href="Whatcanwedohere.html">What can we do here?</a></p>
			<p><a href="threefoldmission.html">threefold mission</a></p>
			<p><a href="thiswork.html">this work</a></p>
			<p><a href="EgderusLastWritings.html">Egderus' Last Writings</a></p>
			<!--<p><a href="EgderusSecret.html">Egderus' Secret</a> </p>-->
		</div>
		<!-- end of "catalog" div -->`
	],
	[`EXILE`,
		`<header>
			<h2 class="title">
				<a href="LegomenonforEXILE.html">EXILE</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings of an expatriate
			</h3>
		</header>

		<div class="catalog container">
			<p><a href="fog.html">fog</a> </p>
			<p><a href="drawn.html">drawn</a> </p>
			<p><a href="stars.html">stars</a> </p>
			<p><a href="fire.html">fire</a> </p>
			<p><a href="place.html">place</a> </p>
			<p><a href="ManhunterMoon.html">Manhunter Moon</a> </p>
			<p><a href="attack.html">attack</a> </p>
			<p><a href="grandmother.html">grandmother</a> </p>
			<p><a href="flight.html">flight</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`HISTORIAN`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforHISTORIAN.html">HISTORIAN</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings of Egderus' friend
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="HistoriansTale.html">Historian's Tale</a></p>
			<p><a href="HistoriansNotebook.html">Historian's Notebook</a></p>
			<p><a href="allfalldown.html">all fall down</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`INSOMNIAC`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforINSOMNIAC.html">INSOMNIAC</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Midnight Writings
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="awake.html">awake</a></p>
			<p><a href="thedark.html">the dark</a></p>
			<p><a href="passiton.html">pass it on</a></p>
			<p><a href="themoonlitgarden.html">the moonlit garden</a></p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`INSURGENT`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforINSURGENT.html">INSURGENT</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				The Writing of an unkown Partisan
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="onmarch.html">on march</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`LAST ONE`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforLASTONE.html">LAST ONE</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings of the self-styled Last One<br>
				of the Ancients
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="LastOneandBoy.html">Last One and Boy</a></p>
			<p><a href="morningsofcreation.html">mornings of creation</a></p>
			<p><a href="Theyrecomingapart.html">They're coming apart</a></p>
			<p><a href="whattoleavebehind.html">what to leave behind</a></p>
			<p><a href="impatience.html">impatience</a></p>
			<p><a href="theghosts.html">the ghosts</a></p>
			<p><a href="ThePerpetratedWorld.html">The Perpetrated World</a></p>
			<p><a href="Everyartifactisatransmission.html">Every artifact is a transmission</a></p>
			<p><a href="sailaway.html">sail away</a></p>
			<p><a href="transport.html">transport</a></p>
			<p><a href="enemy.html">enemy</a></p>
			<p><a href="anotherlifeform.html">another life form</a></p>
			<p><a href="mirror.html">mirror</a></p>
			<p><a href="LastOneflying.html">Last One flying</a></p>
			<p><a href="deities.html">deities</a></p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`LEGOMENA`,
		`<header>			
			<h2 class="notaName">
				<a id="LEGOMENA">LEGOMENA</a>
			</h2>
			<p>Elucidations pertaining to <a id="indescendingorder">the work of every Author</a>, <a href="indescendingorder.html#note">in descending order</a></p>
		</header>

		<div class="catalog container legomena-cont">
			<h3><a id="LegomenonforUNKNOWNPROVENANCE"></a><a href="LegomenonforUNKNOWNPROVENANCE.html">Legomenon for UNKNOWN PROVENANCE</a></h3>

					<p><a id="LegomenonfortheREMNANT"></a><a href="LegomenonfortheREMNANT.html">Legomenon for The REMNANT</a></p>
					<p><a id="LegomenonforINSOMNIAC"></a><a href="LegomenonforINSOMNIAC.html">Legomenon for INSOMNIAC</a></p>
					<p><a id="LegomenonforROMANTICIMPULSEWRITINGS"></a><a href="LegomenonforROMANTICIMPULSEWRITINGS.html">Legomenon for ROMANTIC IMPULSE WRITINGS</a></p>
					<p><a id="LegomenonforOTHERWRITINGSofUNKNOWNPROVENANCE"></a><a href="LegomenonforOTHERWRITINGSofUNKNOWNPROVENANCE.html">Legomenon for OTHER WRITINGS of UNKNOWN PROVENANCE</a></p>

			<h3><a id="LegomenonforAGEoftheSCHOLAR"></a><a href="LegomenonforAGEoftheSCHOLAR.html">Legomenon for AGE of the SCHOLAR</a></h3>

					<p><a id="LegomenonforSOLDIER"></a><a href="LegomenonforSOLDIER.html">Legomenon for SOLDIER</a></p>
					<p><a id="LegomenonforEXILE"></a><a href="LegomenonforEXILE.html">Legomenon for EXILE</a></p>
					<p><a id="LegomenonforUNKNOWNSCHOLASTIC"></a><a href="LegomenonforUNKNOWNSCHOLASTIC.html">Legomenon for UNKNOWN SCHOLASTIC</a></p>
					<p><a id="LegomenonforVOICEfromtheLOCUSTGROVE"></a><a href="LegomenonforVOICEfromtheLOCUSTGROVE.html">Legomenon for VOICE from the LOCUST GROVE</a></p>
					<p><a id="LegomenonforUNKNOWNCURATOR"></a><a href="LegomenonforUNKNOWNCURATOR.html">Legomenon for UNKNOWN CURATOR</a></p>
					<p><a id="LegomenonforSCHOLAR"></a><a href="LegomenonforSCHOLAR.html">Legomenon for SCHOLAR</a></p>

			<h3><a id="LegomenonforAGEofEGDERUS"></a><a href="LegomenonforAGEofEGDERUS.html">Legomenon for AGE of EGDERUS</a></h3>

					<p><a id="LegomenonforINSURGENT"></a><a href="LegomenonforINSURGENT.html">Legomenon for INSURGENT</a></p>
					<p><a id="LegomenonforEGDERUS"></a><a href="LegomenonforEGDERUS.html">Legomenon for EGDERUS</a></p>
					<p><a id="LegomenonforMISSIONARY"></a><a href="LegomenonforTheMISSIONARY.html">Legomenon for The MISSIONARY</a></p>
					<p><a id="LegomenonforARIC"></a><a href="LegomenonforARIC.html">Legomenon for ARIC</a></p>
					<p><a id="LegomenonforBONE-SNAPPER"></a><a href="LegomenonforBONE-SNAPPER.html">Legomenon for BONE-SNAPPER</a></p>
					<p><a id="LegomenonforHISTORIAN"></a><a href="LegomenonforHISTORIAN.html">Legomenon for HISTORIAN</a></p>
					<p><a id="LegomenonforSUPERIUSFRATER"></a><a href="LegomenonforSUPERIUSFRATER.html">Legomenon for SUPERIUS FRATER</a></p>
					<p><a id="LegomenonforOLDPOET"></a><a href="LegomenonforOLDPOET.html">Legomenon for OLD POET</a></p>

			<h3><a id="LegomenonfortheANCIENTS"></a><a href="LegomenonfortheANCIENTS.html">Legomenon for the ANCIENTS</a></h3>

					<p><a id="LegomenonforBOY"></a><a href="LegomenonforBOY.html">Legomenon for BOY</a></p>
					<p><a id="LegomenonforLASTONE"></a><a href="LegomenonforLASTONE.html">Legomenon for LAST ONE</a></p>
					<p><a id="LegomenonforUNKNOWNANCIENTS"></a><a href="LegomenonforUNKNOWNANCIENTS.html">Legomenon for UNKNOWN ANCIENTS</a></p>

		</div>
		<!-- end of "listing container" div -->`
	],
	[`MISSIONARY`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforTheMISSIONARY.html">MISSIONARY</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings of M,<br>
				possibly the 'Missionary to <a href="LegomenonfortheREMNANT.html">the Remnant</a>'
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="WritingsoftheMissionary.html">Writings of the Missionary</a></p>
			<p><a href="MPart2.html">M Part 2</a></p>
			<p><a href="intheKeep.html">in the Keep</a></p>
			<p><a href="MtheWanderer.html">M the Wanderer</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`OLD POET`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforOLDPOET.html">OLD POET</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Verse by the Author of poems
			</h3>
			<h3 class="subTitle">'<a href="NewYear.html#writingpoemsonthetrunksoftreesandthesidesofmountains">written on the trunks of trees and the sides of mountains</a>'
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="patteran.html">patteran</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`OTHER WRITINGS of UNKNOWN PROVENANCE`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforOTHERWRITINGSofUNKNOWNPROVENANCE.html">OTHER WRITINGS of UNKNOWN PROVENANCE</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Unassignable Writings whose transmission cannot be determined
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a id="HouseHills"></a><a href="HouseHills.html">House, Hills</a></p>
			<p><a id="Hypothesis"></a><a href="Hypothesis.html">Hypothesis </a></p>
			<p><a id="TheKindsofWildernesses"></a><a href="TheKindsofWildernesses.html">The Kinds of Wildernesses</a></p>
			<p><a id="TheLandWhereNoManIs"></a><a href="TheLandWhereNoManIs.html">The Land Where No Man Is</a></p>
			<p><a id="fellowship"></a><a href="fellowship.html">fellowship</a></p>
			<p><a id="thestrengthofthepullofthedark"></a><a href="thestrengthofthepullofthedark.html">the strength of the pull of the dark</a></p>
			<p><a id="thanksgiving"></a><a href="thanksgiving.html">thanksgiving</a></p>
			<p><a id="brusqueandimpatient"></a><a href="brusqueandimpatient.html">brusque and impatient</a></p>
			<p><a id="WhatwillIdo"></a><a href="WhatwillIdo.html">What will I do?</a></p>
			<p><a id="keepingbusy"></a><a href="keepingbusy.html">keeping busy</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`ROMANTIC IMPULSE WRITINGS`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforROMANTICIMPULSEWRITINGS.html">ROMANTIC IMPULSE WRITINGS</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Fanciful Tales about persons in the Archives
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="YoungRobenc.html">Young Robenc</a></p>
			<p><a href="Robencreturns.html">Robenc returns</a></p>
			<p><a href="TheExquisiteSuzu.html">The Exquisite Suzu</a></p>
			<p><a href="TheStarling.html">The Starling</a></p>
			<p><a href="MarkitoScriptor.html">Markito Scriptor</a></p>
			<p><a href="Starlingredux.html">Starling redux</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`SCHOLAR`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforSCHOLAR.html">SCHOLAR</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings by the unnamed Scholar<br>
				who discovered the Archives
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="ScholarsDiary.html">Scholar's Diary</a></p>
			<p><a href="ScholarsDraft.html">Scholar's Draft</a></p>
			<p><a href="ScholarsSummary.html">Scholar's Summary</a></p>
			<p><a href="MoreWritings.html">More Writings!</a></p>
			<p><a href="ScholarsFarewell.html">Scholar's Farewell</a></p>
			<p><a href="ScholarsVision.html">Scholar's Vision</a></p>
			<p><a href="ScholarsConfessio.html">Scholar's Confessio</a></p>
			<p><a href="ScholarsApology.html">Scholar's Apology</a></p>
			<p><a href="ScholarsApologyredux.html">Scholar's Apology redux</a></p>
			<p><a href="hands.html">hands</a></p>
			<p><a href="recovery.html">recovery</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`SCHOLIA`,
		`<header>			
			<h2 class="notaName">
				<a id="SCHOLIA">SCHOLIA</a> (Annotations)
			</h2>
			<p><a id="indescendingorder">Collected here</a>, <a href="indescendingorder.html">in descending order</a> of their primary referents, are Writings by the unknown Scholiast(s) whose annotations can be found throughout the Archives:</p>
		</header>
		
		<div class="catalog container scholia-cont">
			<h3>UNKNOWN PROVENANCE</h3>
			<p>The REMNANT</p>

				<p><a id="JonahatTarshish"></a><a id=""></a><a href="JonahatTarshish.html">Jonah at Tarshish</a></p>
				<p><a id="heavilydamageddocument"></a><a href="heavilydamageddocument.html">heavily damaged document</a></p>
				<p><a id="Writingsfromalleras"></a><a href="Writingsfromalleras.html">Writings from all eras</a></p>

			<p>INSOMNIAC</p>

				<p><a id="unlessyoucansingdontinterruptthemusic"></a><a href="unlessyoucansingdontinterruptthemusic.html">unless you can sing, don't interrupt the music</a></p>
				<p><a id="asthepoemsays"></a><a href="asthepoemsays.html">as the poem says</a></p>

			<p>ROMANTIC IMPULSE WRITINGS</p>

				<p><a id="tokillitthemselves"></a><a href="tokillitthemselves.html">to kill it themselves</a></p>
				<p><a id="thegrandmother"></a><a href="thegrandmother.html">the grandmother</a></p>

			<p>OTHER WRITINGS of UNKNOWN PROVENANCE</p>

				<p><a id="theFraterhimself"></a><a href="theFraterhimself.html">the Frater himself</a></p>
				<p><a id="notthesameassayingitcannotbecorrect"></a><a href="notthesameassayingitcannotbecorrect.html">not the same as saying it cannot be correct</a></p>
				<p><a id="TheScholarisdead"></a><a href="TheScholarisdead.html">The Scholar is dead</a></p>
				<p><a id="theirlessonsandtheirpractices"></a><a href="theirlessonsandtheirpractices.html">their lessons and their practices</a></p>

			<h3>Age of the SCHOLAR</h3>
			<p>VOICE FROM THE LOCUST GROVE</p>

				<p><a id="ManintheMoon"></a><a href="ManintheMoon.html">Man in the Moon</a></p>
				<p><a id="noaccountofmytravels"></a><a href="noaccountofmytravels.html">no account of my travels</a></p>
				<p><a id="RaggedyMan"></a><a href="RaggedyMan.html">Raggedy Man</a></p>
				<p><a id="neglecthasawayofpreservingthings"></a><a href="neglecthasawayofpreservingthings.html">neglect has a way of preserving things</a></p>
				<p><a id="theprimaryTextsinmyScholarsarchives"></a><a href="theprimaryTextsinmyScholarsarchives.html">the primaryTexts in myScholar's archives</a></p>
				<p><a id="onceuponatime"></a><a href="onceuponatime.html">onceuponatime</a></p>
				<p><a id="whathewasbeingputthrough"></a><a href="whathewasbeingputthrough.html">what he was being put through</a></p>
				<p><a id="departinpeaceandquietness"></a><a href="departinpeaceandquietness.html">depart in peace and quietness</a></p>
				<p><a id="alargerstoryembracingall"></a><a href="alargerstoryembracingall.html">a larger story embracing all</a></p>
				<p><a id="aconnectionbetweentwoormoreauthors"></a><a href="aconnectionbetweentwoormoreauthors.html">a connection between two or more authors</a></p>

			<p>SCHOLAR</p>

				<p><a id="asourceIcannotname"></a><a href="asourceIcannotname.html">a source I cannot name</a></p>
				<p><a id="rearrangeexistingevidence"></a><a href="rearrangeexistingevidence.html">rearrange existing evidence</a></p>
				<p><a id="IthinkIknowwheretolook"></a><a href="IthinkIknowwheretolook.html">I think I know where to look</a></p>
				<p><a id="Thedocumentpurportstobe"></a><a href="Thedocumentpurportstobe.html">The document purports to be</a></p>
				<p><a id="albatross"></a><a href="albatross.html">albatross</a></p>
				<p><a id="drivenintothewilderness"></a><a href="drivenintothewilderness.html">driven into the wilderness</a></p>
				<p><a id="overinsistent"></a><a href="overinsistent.html">overinsistent</a></p>
				<p><a id="Threepossibilities"></a><a href="Threepossibilities.html">Three possibilities</a></p>
				<p><a id="anyfinalthoughts"></a><a href="anyfinalthoughts.html">any final thoughts</a></p>
				<p><a id="melancholycontemplation"></a><a href="melancholycontemplation.html">melancholy contemplation</a></p>
				<p><a id="interestingpossibilities"></a><a href="interestingpossibilities.html">interesting possibilities</a></p>
				<p><a id="discoveredthearchives"></a><a href="discoveredthearchives.html">discovered the archives</a></p>
				<p><a id="howthatcametopass"></a><a href="howthatcametopass.html">how that came to pass</a></p>

			<h3>Age of EGDERUS</h3>
			<p>EGDERUS</p>

				<p><a id="ButRobencheseemedtofear"></a><a href="ButRobencheseemedtofear.html">But Robenc he seemed to fear</a></p>
				<p><a id="ItookmyleaveofMountainHouse"></a><a href="ItookmyleaveofMountainHouse.html">I took my leave of Mountain House</a></p>
				<p><a id="Hadhecommittedacrime"></a><a href="Hadhecommittedacrime.html">Had he committed a crime?</a></p>
				<p><a id="IdidnotknowwhyIthoughtthat"></a><a href="IdidnotknowwhyIthoughtthat.html">I did not know why I thought that</a></p>
				<p><a id="nowherewasitwrittendown"></a><a href="nowherewasitwrittendown.html">nowhere was it written down</a></p>
				<p><a id="noexampleofthisscriptorsshorthandhasbeenfound"></a><a href="noexampleofthisscriptorsshorthandhasbeenfound.html">no example of this scriptor's shorthand has been found</a></p>
				<p><a id="myownunderstandingoforthodoxy"></a><a href="myownunderstandingoforthodoxy.html">my own understanding of orthodoxy</a></p>
				<p><a id="ThereasonsforhisremovalfromtheOffice"></a><a href="ThereasonsforhisremovalfromtheOffice.html">The reasons for his removal from the Office</a></p>
				<p><a id="nofurtherinformationhassurvived"></a><a href="nofurtherinformationhassurvived.html">no further information... has survived</a></p>
				<p><a id="itneveroccurredtome"></a><a href="itneveroccurredtome.html">it never occurred to me</a></p>
				<p><a id="knownonlyastheHistorian"></a><a href="knownonlyastheHistorian.html">known only as the Historian</a></p>
				<p><a id="helimped"></a><a href="helimped.html">he limped</a></p>
				<p><a id="Iwascalledbacktomylordsservice"></a><a href="Iwascalledbacktomylordsservice.html">I was called back to my lord's service</a></p>
				<p><a id="somedamagingdocuments"></a><a href="somedamagingdocuments.html">some damaging documents</a></p>
				<p><a id="Wemustbeabletoprove"></a><a href="Wemustbeabletoprove.html">we must be able to prove</a></p>
				<p><a id="somethingtoldme"></a><a href="somethingtoldme.html">something told me</a></p>
				<p><a id="lacuna"></a><a href="lacuna.html">[lacuna]</a></p>
				<p><a id="writingpoemsonthetrunksoftreesandthesidesofmountains"></a><a href="writingpoemsonthetrunksoftreesandthesidesofmountains.html">writing poems on the trunks of trees and the sides of mountains</a></p>
				<p><a id="aneventualitywemaywellhavetoface"></a><a href="aneventualitywemaywellhavetoface.html">an eventuality we may well have to face</a></p>
				<p><a id="lacunaquery"></a><a href="lacunaquery.html">lacuna?</a></p>
				<p><a id="puttingthisincidenttogether"></a><a href="puttingthisincidenttogether.html">putting this incident together</a></p>
				<p><a id="BythetimetheGoodDoctortookover"></a><a href="BythetimetheGoodDoctortookover.html">By the time the Good Doctor took over</a></p>
				<p><a id="Ofmyownconvictions"></a><a href="Ofmyownconvictions.html">Of my own convictions</a></p>
				<p><a id="TheGoodDoctorhimselfdisappeared"></a><a href="TheGoodDoctorhimselfdisappeared.html">The Good Doctor himself disappeared</a></p>
				<p><a id="childrenoftheAncients"></a><a href="childrenoftheAncients.html">children of the Ancients</a></p>
				<p><a id="theRemnantsancestry"></a><a href="theRemnantsancestry.html">the Remnant's ancestry</a></p>
				<p><a id="theannalsoftheGolias"></a><a href="theannalsoftheGolias.html">the annals of the Golias</a></p>
				<p><a id="Iopenmyarmstoitscoldembrace"></a><a href="Iopenmyarmstoitscoldembrace.html">I open my arms to its cold embrace</a></p>
				<p><a id="Iamviolatingmyoath"></a><a href="Iamviolatingmyoath.html">I am violating my oath</a></p>
				<p><a id="myearlyadventuresinleadership"></a><a href="myearlyadventuresinleadership.html">my early adventures in leadership</a></p>
				<p><a id="avolumemadebystitchingtogether"></a><a href="avolumemadebystitchingtogether.html">a volume made by stitching together</a></p>
				<p><a id="acellarbeneaththeentryway"></a><a href="acellarbeneaththeentryway.html">a cellar beneath the entryway</a></p>
				<p><a id="Ipreparedaninventory"></a><a href="Ipreparedaninventory.html">I prepared an inventory</a></p>
				<p><a id="theTreasureoftheAncients"></a><a href="theTreasureoftheAncients.html">the Treasure of the Ancients</a></p>

			<p>[THE] M[ISSIONARY]</p>

				<p><a id="struckdowntheban"></a><a href="struckdowntheban.html">struck down the ban</a></p>
				<p><a id="rippedupfromanoldpath"></a><a href="rippedupfromanoldpath.html">ripped up from an old path</a></p>
				<p><a id="onemorevision"></a><a href="onemorevision.html">one more vision</a></p>
				<p><a id="cannotescapeit"></a><a href="cannotescapeit.html">cannot escape it</a></p>
				<p><a id="ThecharnelgroundoftheWorld"></a><a href="ThecharnelgroundoftheWorld.html">The charnel ground of the World</a></p>

			<p>BONE-SNAPPER </p>

				<p><a id="ridiculoushappenstance"></a><a href="ridiculoushappenstance.html">ridiculous happenstance</a></p>

			<p>ARIC</p>

				<p><a id="centurion"></a><a href="centurion.html">centurion</a></p>
				<p><a id="Istilldonotknowwhathappenedtohim"></a><a href="Istilldonotknowwhathappenedtohim.html">I still do not know what happened to him</a></p>

			<p>HISTORIAN </p>

				<p><a id="Asahistorian"></a><a href="Asahistorian.html">As a historian</a></p>
				<p><a id="Imaynotbethefirstwayfarer"></a><a href="Imaynotbethefirstwayfarer.html">I may not be the first wayfarer</a></p>
				<p><a id="atleastonepage"></a><a href="atleastonepage.html">at least one page</a></p>
				<p><a id="pyrrhonism"></a><a href="pyrrhonism.html">pyrrhonism</a></p>
				<p><a id="Theoldsong"></a><a href="Theoldsong.html">The old song</a></p>

			<p>OLD POET</p>

				<p><a id="asmallpyramidofsharperstones"></a><a href="asmallpyramidofsharperstones.html">a small pyramid of sharper stones</a></p>

			<p>The ANCIENTS</p>
			<p>BOY</p>

				<p><a id="Differentnowofcourse"></a><a href="Differentnowofcourse.html">Different now, of course.</a></p>

			<p>LAST ONE</p>

				<p><a id="insert"></a><a href="insert.html">[insert] >></a></p>
				<p><a id="psalmists"></a><a href="psalmists.html">psalmists</a></p>
				<p><a id="theoriesarealltexts"></a><a href="theoriesarealltexts.html">theories are all texts</a></p>
				<p><a id="memorizethestringofwords"></a><a href="memorizethestringofwords.html">memorize the string of words</a></p>
				<p><a id="slideshows"></a><a href="slideshows.html">slideshows</a></p>
				<p><a id="thedwellingplaceoftheghosts"></a><a href="thedwellingplaceoftheghosts.html">the dwelling place of the ghosts</a></p>
				<p><a id="onestrangesceneafteranother"></a><a href="onestrangesceneafteranother.html">one strange scene after another</a></p>
				<p><a id="WhoamI"></a><a href="WhoamI.html">Who am I?</a></p>
				<p><a id="ourWorld"></a><a href="ourWorld.html">ourWorld</a></p>
				<p><a id="thatfoolishboy"></a><a href="thatfoolishboy.html">that foolish boy</a></p>
				<p><a id="Onimpatienceandtheenemy"></a><a href="Onimpatienceandtheenemy.html">On impatience and the enemy</a></p>

			<p>UNKNOWN ANCIENTS</p>

				<p><a id="Leviticus"></a><a href="Leviticus.html">Leviticus</a>  </p>
				<p><a id="Job"></a><a href="Job.html">Job</a></p>
				<p><a id="Baruch"></a><a href="Baruch.html">Baruch</a></p>
				<p><a id="theexpletivetwitslarynx"></a><a href="theexpletivetwitslarynx.html">the [expletive] twit's larynx</a></p>
				<p><a id="thefullretailprice"></a><a href="thefullretailprice.html">the full retail price</a></p>
				<p><a id="holdingaparliamentlikeintheoldstory"></a><a href="holdingaparliamentlikeintheoldstory.html">holding a parliament, like in the old story</a></p>

			<p>APPARATI</p>

				<p><a id="heretoforeunpublished"></a><a href="heretoforeunpublished.html">heretofore unpublished</a></p>
				<p><a id="boldfacetype"></a><a href="boldfacetype.html">boldface type</a></p>
				<p><a id="movingthetextitself"></a><a href="movingthetextitself.html">moving the text itself</a></p>
				<p><a id="TheLANDING"></a><a href="TheLANDING.html">The LANDING</a></p>
				<p><a id="definitivelyplacedintime"></a><a href="definitivelyplacedintime.html">definitively placed in time</a></p>
				<p><a id="theothertimeBands"></a><a href="theothertimeBands.html">the other timeBands</a></p>
				<p><a id="apotentiallyedifyingpatterninwhichtoreadthem"></a><a href="apotentiallyedifyingpatterninwhichtoreadthem.html">a potentially edifying pattern in which to read them</a></p>
				<p><a id="theotherwandererswhoseWritingsappearintheArchives"></a><a href="theotherwandererswhoseWritingsappearintheArchives.html">the other wanderers whose Writings appear in the Archives</a></p>
				<p><a id="thelastbutoneoftheAncients"></a><a href="thelastbutoneoftheAncients.html">the last but one of the Ancients</a></p>
				<p><a id="alongerallegoricalwork"></a><a href="alongerallegoricalwork.html">a longer allegorical work</a></p>
				<p><a id="amongthemiscellaneaofunplaceableartifacts"></a><a href="amongthemiscellaneaofunplaceableartifacts.html">among the miscellanea of unplaceable artifacts</a></p>
				<p><a id="SermonsofEgderus"></a><a href="SermonsofEgderus.html">Sermons of Egderus</a></p>
				<p><a id="inthesecondclause"></a><a href="inthesecondclause.html">in the second clause</a></p>
				<p><a id="collapseofthecivilizationoftheAncients"></a><a href="collapseofthecivilizationoftheAncients.html">collapse of the civilization of the Ancients</a></p>
				<p><a id="thelastoriginalWritings"></a><a href="thelastoriginalWritings.html">the last 'original' Writings</a></p>
				<p><a id="elucidations"></a><a href="elucidations.html">elucidations</a></p>
				<p><a id="indescendingorder"></a><a href="indescendingorder.html">in descending order</a> </p>

		</div>
		<!-- end of "listing container" div -->`
	],
	[`SOLDIER`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforSOLDIER.html">SOLDIER</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				The Writing of an Unknown Warrior
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="purpleberries.html">purple berries </a></p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`SUPERIUS FRATER`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforSUPERIUSFRATER.html">SUPERIUS FRATER</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings attributed to Egderus' mentor,<br>
				the 8th Superius Frater of Mountain House
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="SuperiusFraterandRobenc.html">Superius Frater and Robenc</a></p>
			<p><a href="SuperiusFratersNotes.html">Superius Frater's Notes</a></p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`The ANCIENTS`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonfortheANCIENTS.html">The ANCIENTS</a> <!--link to timeBand's Legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings from the time of the Ancients.
			</h3>
		</header>
		
		<div class="catalog container">
				<p><a href="return.html#BOY"> BOY</a></p>
				<p><a href="LastOneandBoy.html#LAST ONE"> LAST ONE</a></p>
				<p><a href="Stormsandhaze.html#UNKNOWN ANCIENTS"> UNKNOWN ANCIENTS</a></p>

		</div>
		<!-- end of "catalog container" div -->`
	],
	[`The MISSIONARY`,
		`<h1>The MISSIONARY</h1>
		<h1><a href="LegomenonforTheMISSIONAR.html">The MISSIONARY</a> </h1>h2h2h2h2
		<h3>Writings of M, </h3>
		<h3>possibly the 'Missionary to <a href="LegomenonforTheREMNANT.html"><b>the Remnant</b></a>' </h3>

		<p><a href="WritingsoftheMissionary.html"><b>Writings of The Missionary</a> </p>
		<p><a href="MPart2.html">M Part 2</a> </p>
		<p><a href="intheKeep.html">in the Keep</a> </p>
		<p><a href="MtheWanderer.html">M the Wanderer</a> </b></p>`
	],
	[`The REMNANT`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonfortheREMNANT.html">The REMNANT</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings attributed to those who were left...
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="TheRemnantSay.html">The Remnant Say...</a></p>
			<p><a href="Rhapsody.html">Rhapsody</a></p>
			<p><a href="secrets.html">secrets</a></p>
			<p><a href="whichisatfault.html">which is at fault?</a></p>
			<p><a href="nocertaintiesnotruth.html">no certainties, no truth</a></p>
			<p><a href="promisesandtrust.html">promises and trust</a></p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`timeBands`,
		`<header>			
			<h2 class="title">
				<a href="timeBand.html">timeBands</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Eras from which the Writings originate
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="UNKNOWNPROVENANCE.html">UNKNOWN PROVENANCE</a> </p>
			<p><a href="AGEoftheSCHOLAR.html">Age of the SCHOLAR</a> </p>
			<p><a href="AGEofEGDERUS.html">Age of EGDERUS</a> </p>
			<p><a href="TheANCIENTS.html">The ANCIENTS</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`UNKNOWN ANCIENTS`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforUNKNOWNANCIENTS.html">UNKNOWN ANCIENTS</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings by one or more Authors<br>
				who predate <a href="LegomenonforEGDERUS.html">Egderus Scriptor</a>
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="Stormsandhaze.html">Storms and haze</a></p>
			<p><a href="Catastrophe.html">Catastrophe</a></p>
			<p><a href="Mydespair.html">My despair</a></p>
			<p><a href="NewEcclesiastes.html">New Ecclesiastes</a></p>
			<p><a href="WayfarinStranger.html">Wayfarin' Stranger</a></p>
			<p><a href="Andasforthosethatareleft.html">And as for those that are left</a></p>
			<p><a href="Foryoushallbeinleaguewittthestones.html">For you shall be in league with the stones</a></p>
			<p><a href="Thestarsshoneintheirwatches.html">The stars shone in their watches</a></p>
			<p><a href="Pastoral.html">Pastoral</a></p>
			<p><a href="Fallen.html">Fallen</a></p>
			<p><a href="Nogifts.html">No gifts</a></p>
			<p><a href="whatitis.html">what it is</a></p>
			<p><a href="nothingatall.html">nothing at all</a></p>
			<p><a href="refugee.html">refugee</a></p>
			<p><a href="thisroad.html">this road</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`UNKNOWN CURATOR`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforUNKNOWNCURATOR.html">UNKNOWN CURATOR</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				The Writing of an Unidentified Recipient of the Archives
			</h3>
		</header>
				
		<div class="catalog container">
<p><a href="archiveunderthreat.html">archive under threat</a></p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`UNKNOWN PROVENANCE`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforUNKNOWNPROVENANCE.html">UNKNOWN PROVENANCE</a> <!--link to timeBand's Legomenon-->
			</h2>
			<h3 class="subTitle">
				<a id="definitivelyplacedintime">Writings gathered here</a> cannot be <a href="definitivelyplacedintime.html#note">definititively placed in time</a>.
			</h3>
		</header>
		
		<div class="catalog container">
				<p><a id="TheREMNANT"></a><a href="TheRemnantSay.html#The REMNANT">The REMNANT</a></p>
				<p><a id="INSOMNIAC"></a><a href="awake.html#INSOMNIAC">INSOMNIAC</a></p>
				<p><a id="ROMANTICIMPULSEWRITINGS"></a><a href="YoungRobenc.html#ROMANTIC IMPULSE WRITINGS">ROMANTIC IMPULSE WRITINGS</a></p>
				<p><a id="OTHERWRITINGSofUNKNOWNPROVENANCE"></a><a href="HouseHills.html#OTHER WRITINGS of UNKNOWN PROVENANCE">OTHER WRITINGS of UNKNOWN PROVENANCE</a></p>
			</ul>

		</div>
		<!-- end of "catalog container" div -->`
	],
	[`UNKNOWN SCHOLASTIC`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforUNKNOWNSCHOLASTIC.html">UNKNOWN SCHOLASTIC</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				The Writing of a Temple Scholar
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="conspiracy.html">conspiracy</a> </p>
		</div>
		<!-- end of "catalog" div -->`
	],
	[`VOICE from the LOCUST GROVE`,
		`<header>			
			<h2 class="title">
				<a href="LegomenonforVOICEfromtheLOCUSTGROVE.html">VOICE from the LOCUST GROVE</a> <!--link to Author's legomenon -->
			</h2>
			<h3 class="subTitle">
				Writings of the so-called Locust Grove Author
			</h3>
		</header>
				
		<div class="catalog container">
			<p><a href="TheLocustGrove.html">The Locust Grove</a></p>
			<p><a href="TheRetreatHouse.html">The Retreat House</a></p>
			<p><a href="midnight_pain.html">midnight_pain</a></p>
			<p><a href="TheManintheMoon.html">The Man in the Moon</a></p>
			<p><a href="PeripatikosSoter.html">Peripatikos Soter</a></p>
			<p><a href="onlyIcando.html">only I can do</a> </p>
		</div>
		<!-- end of "catalog" div -->

		<nav class="path"><a href="UNKNOWNSCHOLASTIC.html">Backward</a> <a href="INVENTORY.html#VOICEfromtheLOCUSTGROVE">INVENTORY</a> <a href="UNKNOWNCURATOR.html">Onward</a><!-- next item on Path -->
		</nav>
		<!-- end of "path" navigation -->`
	]
	
];