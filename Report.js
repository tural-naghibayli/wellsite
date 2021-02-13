console.log("Connected to Report.js");

//For Drilling

$("#Drilling").click(function(){
  console.log("Clicked 2");
  $("#report").text( " Drill _____\"  hole section from ____m to ____ m.\n"+
  "- _____ gpm =  ____ psi.\n"+
  "- ___ RPM = __ k trq, ____K WOB , ____m/hr ROP, ECD ____ sg, MW = ____ sg.\n"+
  "- Break-over torque after connection ____ kip-ft.\n"+
  "- Back-flow volume = ____ bbl.\n"+
  "- ____ cavings, ____ downhole losses.\n"+
  "- Flow line temp = ____ deg C \n"+
  "- Recorded string weight every 3 stands: SWU ____ k, SWD ____ k at ____ m.\n"+
  "- ____ annulus pressure = ____ psi at ____ PM.\n\n"+

  "*Measuring MW at shakers and pit room every 30 min.\n"+
  "*___ annulus is under constant monitoring.\n"

);
});



//ToolBoxTalk

$("#ToolBoxTalk").click(function(){
  console.log("Clicked 2");
  $("#report").text(
        "Held TBT with crew and discussed potential risks.\n"+
        "Well monitored over trip tank."
    //WRITE your text template
);
});

//RIGUP

$("#RigUp").click(function(){
  console.log("Clicked 2");
  $("#report").text(

  "Held TBT with all involved regarding rigging up Weatherford equipment.\n\n"+
  "Rigged up Weatherford equipment as per Weatherford rep instruction.\n"+
"- Picked up Weatherford Overdrive from TFM to Rig floor.\n"+
"- Made up DDM and torque to __klbs as per Weatherford rep instruction.\n"+
"- Picked up ___\" water bushing and made up to ___\" TIW.\n"+
"- Monitoring well over trip tank.\n"



);
});

//Cic prior to

$("#CircPriorToPullBHA").click(function(){
  console.log("Clicked 2");
  $("#report").text(

        "Circulated hole clean and reciprocated __ B/Up.\n \n"+

"- _____gpm ____psi with ___rpm.\n"+
"- Ave ECD ___sg."
    //WRITE your text template

);
});

$("#MakeUpBHA").click(function(){
  console.log("Clicked 2");
  $("#report").text(

        "P/U and M/U ___\" BHA to __ m. \n \n"+

        "- P/U & M/U ___\" EWR-M5 collar c/w ILS.\n"+
        "- Plugged in LWD tools and programmed time delay. \n"+
        "Monitored well on trip tank - static."
    //WRITE your text template

);
});


$("#Drill-1").click(function(){
  console.log("Clicked 2");
  $("#report").text(

        "Performed D1 Drill at ___m. \n "+
        "Well was secured at __sec.\n"+
        "Conducted AAR with crew."
    //WRITE your text template

);
});


$("#Make-upShoetrack").click(function(){
  console.log("Clicked 2");
  $("#report").text(

"MU Primary ___ \" Guide Shoe and Intermediate Joints.\n"+
"- PU and MU __ x ____\”, __wt__#, __grd__, __conn.__ intermediate joints c/w __centralizer__.\n"+
"- Picked up and made up ____\”, __wt__#,__grd__, __conn__ float collar assembly c/w __centralizer__.\n"+
"- Confirmed float collar integrity and valves were holding.\n"+
"- Backerlocked and made up shoe track joints to ____ ft.lbs torque (__conn__).\n"+
"- Broke circulation to check float valves were functional.\n\n"+
"Note:\n"+
"- Monitored well over active system, correct displacement observed."
    //WRITE your text template

);
});



$("#lineTest").click(function(){
  console.log("Clicked 2");
  $("#report").text(

        "Offline:\n"+
"- Connected cement hose to cement head,attached snatch block.\n"+
"- Pressure tested line to ___/___psi for 5/5 mins – good test.\n"+
"- Held comprehensive TBT for Cement Job."
    //WRITE your text template

);
});

$("#CementJob").click(function(){
  console.log("Clicked 2");
  $("#report").text(

        "Spacer : \n \n"+
        "Lined up & pumped ___bbls of ___sg spacer using rig pumps at __bpm, ___psi.\n"+
        "- Released lower Bottom plug - confirmed by (green LED light / flag) on Cement Head.\n"+
        "- Pumped ___bbls of ___sg spacer at __bpm, __psi.\n"+
        "- ___bbl/No losses observed.\n \n \n"+

        "Cement : \n \n"+
        "Mixed & pumped cement slurry.\n"+
        "- Lined up to cement unit, closed IBOP and applied 500 psi above.\n"+
        "- Released upper Bottom plug - confirmed by (green LED light / flag) on Cement Head.\n"+
        "- Mixed & pumped ___ bbls of ___ sg lead slurry at ___ bpm, ____psi.\n"+
        "- Mixed & pumped __ bbls of ___ sg tail slurry at ___ bpm, ___ psi. \n"+
        "- Pumped __ bbls of sea water from cementunit to flush cement line to rig floor.\n"+
        "- Closed Lo-torq valve, bled 500 psi above TIW & lined up to rig pumps."

    //WRITE your text template
);
});




$("#Displacement").click(function(){
  console.log("Clicked 2");
  $("#report").text(

    "Displaced cement with ___sg OBM using rig pumps.\n \n"+
    "- Displaced cement with ___ sg OBM at 8bpm, ___ psi.\n"+
    "- Released top plug - confirmed by (green LED light / flag).\n"+
    "- 1st Bottom plug landed & sheared at ___psi after ___bbl (___ strk) pumped.\n"+
    "- 2nd Middle plug landed & sheared at ___psi after ___bbl (___ strk) pumped.\n"+
    "- Continuedwith  __ bpm, ___ psi till ~___ bbl. (___ strk) of displacement."
    //WRITE your text template
);
});


$("#Drillshoetrack").click(function(){
  console.log("Clicked 2");
  $("#report").text(


"Drilled ___\" casing wiper plugs and float collar from ___m to ___m.\n\n"+
"- ___ gpm, ___ psi, ___ rpm, ___ klbs WOB, ___ kft-lbs torque.\n"+
"- Observed pack off indications while drilling .\n"+
"- Varied parameters / wiped through drilled interval as required.\n"+
"- Observed wiper plug rubber returns over shakers.\n"+
"___________________________________________________________\n\n"+
"Drilled ___\" casing shoetrack cement from ___m to ___m.\n\n"+
"- ___ gpm, ___ psi, ___ rpm, ___ klbs WOB, ___ kft-lb torque.\n"+
"- Varied parameters as per DD, to reduce vibration.\n"


    //WRITE your text template



);
});


$("#DailySafety").click(function(){
  console.log("Clicked 2");
  $("#report").text(
    "FOR DWG:\n"+
    "TRIC / TOFS - __/__ Active Monitoring: __. IRIS: Positive - __, Unsafe Act - __, Unsafe Conditions - __\n"+
    "No accident/ Incident, No damage to equipment, No damage to the environment"
    //WRITE your text template

);
});



$("#Runcasing").click(function(){
  console.log("Clicked 2");
  $("#report").text(

    "RIH ____\" liner from ___m to ___m.\n"+
  "- MU joints to optimum torque : _____kftlbs\n"+
  "- Running speed ___ m/sec.\n"+
  "- Fill casing every ___joints.\n"+
  "- Broke circulation every ___ joints.\n"+
  "- Monitored well over trip tank, correct displacement observed.\n"+
  "- No downhole losses observed.\n"

);
});



//Trip in hole

$("#tripInHole").click(function(){
  console.log("Clicked 2");
  $("#report").text(

    "RIH with ____ BHA from ____m to ____m.\n"+
    "Correct displacement noted on trip tank."
    //WRITE your text template

);
});



$("#pullOutOfHole").click(function(){
  console.log("Clicked 2");
  $("#report").text(
"POOH with ____ BHA from ____m to ____m.\n"+
"Correct displacement noted on trip tank."
    //WRITE your text template

);
});



$("#URactivation").click(function(){
  console.log("Clicked 2");
  $("#report").text(

  "___\" UR activation.\n"+
"- Dropped __\" activation ball.\n"+
"- Position string at ___m (reamer arms at ___m - ___ m below the shoe)\n"+
"- Start pumping with ___gpm for ___min and then ___gpm for ____min and observed pressure spike to ____psi.\n"+
"- Increased pump rate to ____ gpm and observed ___psi pressure drop – confirming that UR activated.\n"

);
});


//BOP bopTest

$("#bopTest").click(function(){
  console.log("Clicked 2");
  $("#report").text(

"Prepared for BOP pressure test.\n \n"+
"- PU test tool from derrick and changed seals on BOP test tool.\n"+
"- RIH with test tool to above land of point.\n"+
"- MU pup joint, SES and TIW assembly.\n"+
"- RIH and installed test tool in well head profile.\n"+
" *Monitored B annulus.\n"+
"- Make up lo-torque, swivel and anaconda to test assembly.\n"+
"- Lined up to cement unit and flushed surface lines.\n"+
"- Performed surface line test to 300/8000psi for 5/5min, test medium OBM.\n"+
"\n"+
"Pressure testing BOP\n\n"+
"- Test 1. Close Annular BOP and pressure tested Annular to 300/___psi for 5/5min.\n"+
"- Test 2. Close UPR and pressure tested UPR , upper TIW, auto HCR valves to 300/___psi for 5/5min.\n"+
"- Test 3. Pressure tested against UPR, manual HCR valves, manual IBOP to 300/___psi for 5/5min.\n"+
"- Test 4. Pressure tested against UPR, choke valves 18 & 23, auto IBOP to 300/___psi for 5/5min.\n"+
"- Test 5. Pressure tested against LPR to 300/___psi for 5/5min.\n"+
"- Test 6. Close lower TIW and stand pipe valve 1 and pressure test Kelly hose to 300/___psi for 5/5min.\n"+
"- Break out anaconda hose from SES. Disconnected DDM, back out test assembly from test tool and pull to rig floor.\n"+
"- Lined up cement unit to pump through North HCR.\n"+
"- Test 7. Shut BSR from control room and pressure tested BSR to 300/5000psi for 5/5min.\n"+
"- RIH and screwed into the test tool. Closed B annulus valves and low-torque.\n"+
"* Monitored well through the B annulus during the test.\n"


);
});




$("#makeUpShoeTrack").click(function(){
  console.log("Clicked 2");
  $("#report").text(

        "....will be updated"
    //WRITE your text template

);
});



$("#takeSCRs").click(function(){
  console.log("Clicked 2");
  $("#report").text(

"Took SCRs at ___ m\n\n"+
"MP	   __spm   __spm\n"+
"#__	  __ psi	 __ psi\n"+
"#__	  __ psi	 __ psi"
    //WRITE your text template

);
});

$("#pressureTest").click(function(){
  console.log("Clicked 2");
  $("#report").text(

    "Pressure tested ___\" casing against ___.\n\n"+

"- Lined up cement unit to North choke and STPP.\n"+
"- Closed ___ and pressure tested ___\" casing to 300 / ____ psi for 5 / 30 mins, good test.\n"+
"- Initial pressure - ____ psi.\n"+
"- Pressure after 15 mins - ____ psi.\n"+
"- Final pressure - ___ psi.\n"+
"- Observed non-linear pressure decay of ~___ psi / min over final 15 mins.\n"+
"- Volume pumped / returned - ___ bbl. /___ bbl.\n"


    //WRITE your text template

);
});



$("#CircPriorToCement").click(function(){
  console.log("Clicked 2");
  $("#report").text(

        "Circulated and conditioned mud prior to cement job. \n"+
        "- ___ bpm, __ psi, ___sg mud.\n"+
        "- Confirmed ___sg, YP___ mud IN / OUT.\n"+
        "Note:\n"+
        "- ___bbl / No losses observed.\n"

    //WRITE your text template

);
});


$("#Circulate").click(function(){
  console.log("Clicked 2");
  $("#report").text(

        "Circulated __ B/Up.\n \n"+

"- _____gpm ____psi with ___rpm.\n"+
"- Ave ECD ___sg."
    //WRITE your text template

);
});


$("#PerformFIT").click(function(){
  console.log("Clicked 2");
  $("#report").text(

    "Performed FIT to ___ sg EMW at ___\" casing shoe.\n \n"+

"- Circulated and pumped ESD data. minESD: ___sg , aveESD: ___sg, maxESD: ___sg.\n"+
"- Closed in well on UPR.\n"+
"- __ \"casing shoe at ___m MD / ___m TVD.\n"+
"- MW in/out = ___sg OBM. \n"+
"- FIT performed to ___ sg at ___\" shoe with total surface pressure of ___ psi (including __psi hydrostatic pressure).\n"+
"- Volume pumped / returned = ___ bbl\n"+
"- Opened UPR and lined up for drilling.\n"+
"- Flow checked well - static.\n"+
"- Sent test results to onshore for review & approval.\n"+
"- Meanwhile circulated.\n"

  //WRITE your text template

);
});


//FOR COPY button
