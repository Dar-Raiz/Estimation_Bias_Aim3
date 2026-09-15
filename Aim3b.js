/************** 
 * Aim3B *
 **************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Aim3b';  // from the Builder filename that created this script
let expInfo = {
    'NetID': 'INPUT NET ID HERE',
    'Email': 'INPUT EMAIL HERE',
    'First & Last Name': 'INPUT FIRST & LAST NAME HERE',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
var myBrowser;
var sUsrAg;
var nIdx;

function getBrowserId () {
    var browsers = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"];
    sUsrAg = window.navigator.userAgent,
    nIdx = browsers.length - 1;
    for (nIdx; nIdx > -1 && sUsrAg.indexOf(browsers [nIdx]) === -1; nIdx--);

  return browsers[nIdx];
}

myBrowser = getBrowserId();


// Run 'Before Experiment' code from code_13
respbox_y = 0;

var nCorr = 0;
var nCorr2 = 0;
var nCorr3 = 0;
var practice_round = 0;
var eachResp = 0;
console.log(nCorr);


// Run 'Before Experiment' code from code_18
box_color = "white";
xx1 = 0;
xx2 = 0;
xx3 = 0;
xx4 = 0;
z1 = 0;
z2 = 0;
z3 = 0;
z4 = 0;
y = 0;
shuffle_easy = 0;
shuffle_medium = 0;
shuffle_hard = 0;
whichblock = 0;

// Run 'Before Experiment' code from code_11
/* Syntax Error: Fix Python code */
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(SIMA_instructRoutineBegin());
flowScheduler.add(SIMA_instructRoutineEachFrame());
flowScheduler.add(SIMA_instructRoutineEnd());
flowScheduler.add(SIMARoutineBegin());
flowScheduler.add(SIMARoutineEachFrame());
flowScheduler.add(SIMARoutineEnd());
flowScheduler.add(GADRoutineBegin());
flowScheduler.add(GADRoutineEachFrame());
flowScheduler.add(GADRoutineEnd());
flowScheduler.add(pract_instructRoutineBegin());
flowScheduler.add(pract_instructRoutineEachFrame());
flowScheduler.add(pract_instructRoutineEnd());
flowScheduler.add(pract_confidenceRoutineBegin());
flowScheduler.add(pract_confidenceRoutineEachFrame());
flowScheduler.add(pract_confidenceRoutineEnd());
flowScheduler.add(practice_readyRoutineBegin());
flowScheduler.add(practice_readyRoutineEachFrame());
flowScheduler.add(practice_readyRoutineEnd());
flowScheduler.add(get_ready2RoutineBegin());
flowScheduler.add(get_ready2RoutineEachFrame());
flowScheduler.add(get_ready2RoutineEnd());
const trials_7LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_7LoopBegin(trials_7LoopScheduler));
flowScheduler.add(trials_7LoopScheduler);
flowScheduler.add(trials_7LoopEnd);








flowScheduler.add(end_practiceRoutineBegin());
flowScheduler.add(end_practiceRoutineEachFrame());
flowScheduler.add(end_practiceRoutineEnd());
flowScheduler.add(welcome_1RoutineBegin());
flowScheduler.add(welcome_1RoutineEachFrame());
flowScheduler.add(welcome_1RoutineEnd());
flowScheduler.add(welcome_2RoutineBegin());
flowScheduler.add(welcome_2RoutineEachFrame());
flowScheduler.add(welcome_2RoutineEnd());
flowScheduler.add(welcome_3RoutineBegin());
flowScheduler.add(welcome_3RoutineEachFrame());
flowScheduler.add(welcome_3RoutineEnd());
flowScheduler.add(welcome_4RoutineBegin());
flowScheduler.add(welcome_4RoutineEachFrame());
flowScheduler.add(welcome_4RoutineEnd());
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(welcome2RoutineBegin());
flowScheduler.add(welcome2RoutineEachFrame());
flowScheduler.add(welcome2RoutineEnd());
flowScheduler.add(welcome3RoutineBegin());
flowScheduler.add(welcome3RoutineEachFrame());
flowScheduler.add(welcome3RoutineEnd());
flowScheduler.add(welcome4RoutineBegin());
flowScheduler.add(welcome4RoutineEachFrame());
flowScheduler.add(welcome4RoutineEnd());
flowScheduler.add(easy_baselineRoutineBegin());
flowScheduler.add(easy_baselineRoutineEachFrame());
flowScheduler.add(easy_baselineRoutineEnd());
flowScheduler.add(medium_baselineRoutineBegin());
flowScheduler.add(medium_baselineRoutineEachFrame());
flowScheduler.add(medium_baselineRoutineEnd());
flowScheduler.add(hard_baselineRoutineBegin());
flowScheduler.add(hard_baselineRoutineEachFrame());
flowScheduler.add(hard_baselineRoutineEnd());
flowScheduler.add(ratings_instructions2RoutineBegin());
flowScheduler.add(ratings_instructions2RoutineEachFrame());
flowScheduler.add(ratings_instructions2RoutineEnd());
flowScheduler.add(baseline_anticipationRoutineBegin());
flowScheduler.add(baseline_anticipationRoutineEachFrame());
flowScheduler.add(baseline_anticipationRoutineEnd());
flowScheduler.add(baseline_anxietyRoutineBegin());
flowScheduler.add(baseline_anxietyRoutineEachFrame());
flowScheduler.add(baseline_anxietyRoutineEnd());
flowScheduler.add(baseline_feedbackRoutineBegin());
flowScheduler.add(baseline_feedbackRoutineEachFrame());
flowScheduler.add(baseline_feedbackRoutineEnd());
flowScheduler.add(baseline_motivationRoutineBegin());
flowScheduler.add(baseline_motivationRoutineEachFrame());
flowScheduler.add(baseline_motivationRoutineEnd());
flowScheduler.add(final_instructRoutineBegin());
flowScheduler.add(final_instructRoutineEachFrame());
flowScheduler.add(final_instructRoutineEnd());
const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin(trials_5LoopScheduler));
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);












































































flowScheduler.add(final_ratingsRoutineBegin());
flowScheduler.add(final_ratingsRoutineEachFrame());
flowScheduler.add(final_ratingsRoutineEnd());
flowScheduler.add(easy_postRoutineBegin());
flowScheduler.add(easy_postRoutineEachFrame());
flowScheduler.add(easy_postRoutineEnd());
flowScheduler.add(medium_postRoutineBegin());
flowScheduler.add(medium_postRoutineEachFrame());
flowScheduler.add(medium_postRoutineEnd());
flowScheduler.add(hard_postRoutineBegin());
flowScheduler.add(hard_postRoutineEachFrame());
flowScheduler.add(hard_postRoutineEnd());
flowScheduler.add(relief_postRoutineBegin());
flowScheduler.add(relief_postRoutineEachFrame());
flowScheduler.add(relief_postRoutineEnd());
flowScheduler.add(anxiety_postRoutineBegin());
flowScheduler.add(anxiety_postRoutineEachFrame());
flowScheduler.add(anxiety_postRoutineEnd());
flowScheduler.add(motivation_postRoutineBegin());
flowScheduler.add(motivation_postRoutineEachFrame());
flowScheduler.add(motivation_postRoutineEnd());
flowScheduler.add(post_feedbackRoutineBegin());
flowScheduler.add(post_feedbackRoutineEachFrame());
flowScheduler.add(post_feedbackRoutineEnd());
flowScheduler.add(feedback_enjoyRoutineBegin());
flowScheduler.add(feedback_enjoyRoutineEachFrame());
flowScheduler.add(feedback_enjoyRoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice_Test.xlsx', 'path': 'practice_Test.xlsx'},
    {'name': 'test_file.xlsx', 'path': 'test_file.xlsx'},
    {'name': 'test_file.xlsx', 'path': 'test_file.xlsx'},
    {'name': 'test_file.xlsx', 'path': 'test_file.xlsx'},
    {'name': 'test_file.xlsx', 'path': 'test_file.xlsx'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'checkmark.png', 'path': 'checkmark.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'noresponse.png', 'path': 'noresponse.png'},
    {'name': 'poundkey.png', 'path': 'poundkey.png'},
    {'name': 'practice_Test.xlsx', 'path': 'practice_Test.xlsx'},
    {'name': 'test_file.xlsx', 'path': 'test_file.xlsx'},
    {'name': 'X_mark.png', 'path': 'X_mark.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://rutgers.ca1.qualtrics.com/jfe/form/SV_8dJMqlzoWgPgQUm', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["First & Last Name"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var text_6;
var key_resp_4;
var SIMA_instructClock;
var text_13;
var SIMA_slider_3;
var SIMAClock;
var text_76;
var SIMA_slider;
var high_anxiety_3;
var low_anxiety_3;
var GADClock;
var text_96;
var GAD_slider;
var high_anxiety_6;
var low_anxiety_6;
var pract_instructClock;
var text_9;
var key_resp_7;
var pract_confidenceClock;
var practiceroundtext;
var text_22;
var confscale_numbers_5;
var confresp_6;
var anykey;
var example;
var practice_readyClock;
var text_68;
var key_resp_20;
var get_ready2Clock;
var fixation_3;
var text_10;
var practice_startClock;
var CorrResp;
var text_33;
var text_35;
var text_36;
var text_a;
var text_b;
var Test3response2;
var practice_highlightClock;
var polygon;
var text_37;
var text_39;
var text_44;
var text_a_8;
var text_b_8;
var conf_practClock;
var text_97;
var text_98;
var text_99;
var confscale_numbers_6;
var confresp_7;
var text_69;
var practice_feedbackClock;
var polygon_10;
var text_34;
var text_38;
var text_45;
var image;
var text_47;
var text_b_9;
var text_a_9;
var repeat_instructionsClock;
var text_11;
var key_resp_8;
var end_practiceClock;
var text_64;
var contpart2_2;
var welcome_1Clock;
var presst;
var welcometo;
var blocks12;
var key_resp_2;
var welcome_2Clock;
var welcometo_3;
var key_resp_9;
var presst_3;
var blocks12_2;
var trials10;
var welcome_3Clock;
var welcometo_4;
var key_resp_16;
var presst_4;
var blocks12_3;
var trials10_2;
var confidence;
var welcome_4Clock;
var welcometo_5;
var reflect;
var confidence_2;
var blocks12_4;
var pressp;
var key_resp_18;
var trials10_3;
var welcomeClock;
var key_resp_11;
var presst_t;
var pointa;
var Exampleproblems;
var welcome2Clock;
var press_t;
var key_resp_12;
var easy;
var pointa_2;
var Exampleproblems_2;
var welcome3Clock;
var easy_2;
var medium;
var key_resp_13;
var press_t_2;
var pointa_3;
var Exampleproblems_3;
var welcome4Clock;
var hard;
var key_resp_14;
var medium_2;
var easy_3;
var pointa_4;
var Exampleproblems_4;
var pressp_2;
var easy_baselineClock;
var text_70;
var percent_slider_easy;
var easy_4;
var text_74;
var medium_baselineClock;
var text_60;
var medium_3;
var percent_slider_medium;
var text_92;
var hard_baselineClock;
var text_62;
var hard_4;
var percent_slider_hard;
var text_93;
var ratings_instructions2Clock;
var text_58;
var anticipation_slider_2;
var text_65;
var baseline_anticipationClock;
var text_57;
var anticipation_slider;
var high_anxiety_2;
var low_anxiety_2;
var moderate_anxiety_2;
var baseline_anxietyClock;
var text_56;
var baseline_anxiety_slider;
var high_anxiety;
var low_anxiety;
var moderate_anxiety;
var baseline_feedbackClock;
var text_81;
var feedback_slider;
var low_anxiety_7;
var high_anxiety_7;
var moderate_anxiety_6;
var baseline_motivationClock;
var text_63;
var pre_motivation_slider;
var high_motivation_2;
var low_motivation_2;
var final_instructClock;
var text_7;
var key_resp_17;
var finalnotes;
var new_code1Clock;
var block_gen1;
var block_gen2;
var block_gen3;
var block_gen4;
var easy_blocks;
var shuffle_easy;
var medium_blocks;
var shuffle_medium;
var hard_blocks;
var shuffle_hard;
var z1;
var z2;
var z3;
var z4;
var trialnum;
var blocknum12;
var blocknum4;
var blocknum_rating;
var blocknum_rating4;
var cueClock;
var text_2;
var text_3;
var key_resp_3;
var get_readyClock;
var fixation;
var task_startClock;
var text_23;
var text_24;
var text_25;
var text_a_5;
var text_b_5;
var Study1Response_2;
var error_msg1Clock;
var highlightClock;
var text_26;
var polygon_4;
var text_27;
var text_28;
var text_a_6;
var text_b_6;
var error_text_2;
var text_67;
var attn_check_setup2Clock;
var attn_hut2;
var attn_check2Clock;
var text_88;
var text_90;
var text_91;
var confscale_numbers_4;
var confresp_5;
var text_66;
var confidence_judgementClock;
var text_78;
var text_79;
var text_80;
var confscale_numbers_2;
var confresp_2;
var text_48;
var feedbackClock;
var polygon_5;
var text_29;
var text_30;
var text_31;
var image_3;
var text_32;
var text_b_7;
var text_a_7;
var penalty_boxClock;
var text_4;
var text_12;
var text_14;
var text_21;
var intertrial1Clock;
var fixation_2;
var pause_reflectClock;
var text_46;
var slider;
var accuracy_ratingClock;
var text_42;
var acc_slider;
var text_53;
var guess_amountClock;
var text_41;
var guess_slider;
var text_52;
var anxiety_ratingClock;
var text_40;
var anxiety_slider;
var text_51;
var low_anxiety_4;
var high_anxiety_4;
var moderate_anxiety_3;
var motivation_ratingClock;
var text_43;
var motivation_slider;
var text_49;
var high_motivation_3;
var low_motivation_3;
var pauseClock;
var key_resp_10;
var text_8;
var new_code2Clock;
var error_msg2Clock;
var new_code3Clock;
var error_msg3Clock;
var attn_check_setupClock;
var attn_hut;
var attn_checkClock;
var text_84;
var text_85;
var text_87;
var confscale_numbers_3;
var confresp_3;
var text_59;
var attn_check_restartClock;
var new_code4Clock;
var error_msg4Clock;
var final_ratingsClock;
var text_50;
var slider_3;
var easy_postClock;
var text_71;
var easy_5;
var percent_slider_easy2;
var medium_postClock;
var text_72;
var medium_4;
var percent_slider_medium2;
var hard_postClock;
var text_73;
var hard_5;
var percent_slider_hard2;
var relief_postClock;
var text_75;
var relief_slider;
var low_relief;
var high_relief;
var moderate_relief;
var anxiety_postClock;
var text_61;
var post_anxiety_slider;
var low_anxiety_5;
var high_anxiety_5;
var moderate_anxiety_4;
var motivation_postClock;
var text_77;
var post_motivation_slider;
var high_motivation;
var low_motivation;
var post_feedbackClock;
var text_82;
var post_feedback_slider;
var low_anxiety_8;
var high_anxiety_8;
var moderate_anxiety_7;
var feedback_enjoyClock;
var text_83;
var feedback_preference;
var yes_fbk;
var text_86;
var no_fbk;
var endClock;
var text_19;
var key_resp_6;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Introduction\n\nFor this experiment, you will be solving math multiplication problems in your head.\n\nTo maintain the integrity of our experiment we respectfully ask please DO NOT USE a cell phone or calculator to cheat. Please just try your best. We want you to try and do everything in your head. \n\n\nPress ‘t’ to continue to the next page\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SIMA_instruct"
  SIMA_instructClock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'We will also ask you to report your feelings and emotions related to math using a slider like the one below. Click on the slider to start! ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.058,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  SIMA_slider_3 = new visual.Slider({
    win: psychoJS.window, name: 'SIMA_slider_3',
    startValue: undefined,
    size: [1.25, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, 4, 5, 6, 7, 8, 9, "10"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "SIMA"
  SIMAClock = new util.Clock();
  text_76 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_76',
    text: 'On a scale from 1 to 10, how math anxious are you?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  SIMA_slider = new visual.Slider({
    win: psychoJS.window, name: 'SIMA_slider',
    startValue: undefined,
    size: [1.25, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, 4, 5, 6, 7, 8, 9, "10"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  high_anxiety_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_anxiety_3',
    text: 'Very\nAnxious',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  low_anxiety_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_anxiety_3',
    text: 'Not\nAnxious',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "GAD"
  GADClock = new util.Clock();
  text_96 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_96',
    text: 'Outside of math, how anxious of a person are you? (generally) ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  GAD_slider = new visual.Slider({
    win: psychoJS.window, name: 'GAD_slider',
    startValue: undefined,
    size: [1.25, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, 4, 5, 6, 7, 8, 9, "10"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  high_anxiety_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_anxiety_6',
    text: 'Very\nAnxious',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  low_anxiety_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_anxiety_6',
    text: 'Not\nAnxious',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "pract_instruct"
  pract_instructClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Practice Round\n\nNext, you will do a simple practice round consisting of 4 multiplication problems. You must get at least 3 multiplication problems correct in order to advance to the main task.\n \nYou will see a multiplication problem presented at the top of the screen with two possible choices underneath it. Your job is to pick the correct response. You will have 4 seconds to make each response before moving onto the next trial.\n\nExample\n\n  8 x 1 =\n\n  a) 8\n  b) 1\n\nTo pick response a) press the ‘1’ key. \nTo pick response b) press the ‘2’ key.\n\nPress ‘1’ or ‘2’ to move forward\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.036,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  psychoJS.experiment.addData("Browser", myBrowser)
  
  // Initialize components for Routine "pract_confidence"
  pract_confidenceClock = new util.Clock();
  practiceroundtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'practiceroundtext',
    text: 'Practice Round\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.036,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'After each problem, you will see a confidence scale, like the one below. \n\nUsing this scale, we want you to rate how confident you are that your answer is correct, ranging from 1 (low confidence/guessing) to 7 (high confidence/certain).\n  ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.036,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  confscale_numbers_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confscale_numbers_5',
    text: '\n     (1)      (2)      (3)      (4)      (5)      (6)      (7)\n(guessing)                                               (certain)\n\n\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], draggable: false, height: 0.04,  wrapWidth: 2, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  confresp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  anykey = new visual.TextStim({
    win: psychoJS.window,
    name: 'anykey',
    text: "Press a key between '1' and '7' to move forward!",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.275)], draggable: false, height: 0.036,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  example = new visual.TextStim({
    win: psychoJS.window,
    name: 'example',
    text: 'Confidence Scale Example:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.036,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "practice_ready"
  practice_readyClock = new util.Clock();
  text_68 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_68',
    text: "Get ready!\n\nPress 't' to start the practice round!",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "get_ready2"
  get_ready2Clock = new util.Clock();
  fixation_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_3',
    text: 'Get ready!\n\n+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 10], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "practice_start"
  practice_startClock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  CorrResp = 1;
  
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_35',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_36',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_a = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_a',
    text: 'a)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_b',
    text: 'b)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  Test3response2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_highlight"
  practice_highlightClock = new util.Clock();
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [0.7, 0.15][0], height: [0.7, 0.15][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('white'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_37',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_39 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_39',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_44',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_a_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_a_8',
    text: 'a)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_b_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_b_8',
    text: 'b)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "conf_pract"
  conf_practClock = new util.Clock();
  text_97 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_97',
    text: 'How confident are you in your answer?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_98 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_98',
    text: 'Guessing',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.2)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_99 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_99',
    text: 'Certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.2)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  confscale_numbers_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confscale_numbers_6',
    text: '(1)   (2)   (3)   (4)   (5)   (6)   (7)\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: 2, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  confresp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_69 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_69',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.075], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "practice_feedback"
  practice_feedbackClock = new util.Clock();
  polygon_10 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_10', 
    width: [0.7, 0.15][0], height: [0.7, 0.15][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('white'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_34',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_38 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_38',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_45',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  text_47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_47',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  text_b_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_b_9',
    text: 'b)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_a_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_a_9',
    text: 'a)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "repeat_instructions"
  repeat_instructionsClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Please Try Again\n\nYou got less than 3 correct responses during the practice round. In order to advance to the main task, you need to get at least 3 correct responses during the practice round. \n\nRemember, to pick response a) press the ‘1’ key. To pick response b) press the ‘2’ key.\n\n\nPress ‘t’ to restart the practice round.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_practice"
  end_practiceClock = new util.Clock();
  text_64 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_64',
    text: 'You passed the practice task!\n\nPress ‘t’ to advance to the main task instructions\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  contpart2_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "welcome_1"
  welcome_1Clock = new util.Clock();
  presst = new visual.TextStim({
    win: psychoJS.window,
    name: 'presst',
    text: "Press 't' to continue\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.43)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcometo = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcometo',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blocks12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blocks12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "welcome_2"
  welcome_2Clock = new util.Clock();
  welcometo_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcometo_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  presst_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'presst_3',
    text: "Press 't' to continue\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.43)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  blocks12_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blocks12_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  trials10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trials10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "welcome_3"
  welcome_3Clock = new util.Clock();
  welcometo_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcometo_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  presst_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'presst_4',
    text: "Press 't' to continue\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.43)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  blocks12_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blocks12_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  trials10_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trials10_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  confidence = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.075)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "welcome_4"
  welcome_4Clock = new util.Clock();
  welcometo_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcometo_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  reflect = new visual.TextStim({
    win: psychoJS.window,
    name: 'reflect',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.28)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  confidence_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.075)], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  blocks12_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blocks12_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  pressp = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressp',
    text: "Press 'p' to continue\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.43)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('cyan'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trials10_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trials10_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  presst_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'presst_t',
    text: "Press 't' to reveal the problem type 1\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  pointa = new visual.TextStim({
    win: psychoJS.window,
    name: 'pointa',
    text: 'You will encounter three levels of math difficulty in this experiment.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Exampleproblems = new visual.TextStim({
    win: psychoJS.window,
    name: 'Exampleproblems',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "welcome2"
  welcome2Clock = new util.Clock();
  press_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'press_t',
    text: "Press 't' to reveal the problem type 2\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  easy = new visual.TextStim({
    win: psychoJS.window,
    name: 'easy',
    text: 'Easy Example\n   8 x 8 =\n\n  a) 64\n  b) 56\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  pointa_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pointa_2',
    text: 'You will encounter three levels of math difficulty in this experiment.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  Exampleproblems_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Exampleproblems_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "welcome3"
  welcome3Clock = new util.Clock();
  easy_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'easy_2',
    text: 'Easy Example\n   8 x 8 =\n\n  a) 64\n  b) 56\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  medium = new visual.TextStim({
    win: psychoJS.window,
    name: 'medium',
    text: 'Medium Example\n  12 x 7 =\n\n  a) 84\n  b) 94\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  press_t_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'press_t_2',
    text: "Press 't' to reveal the problem type 3\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  pointa_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pointa_3',
    text: 'You will encounter three levels of math difficulty in this experiment.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  Exampleproblems_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Exampleproblems_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "welcome4"
  welcome4Clock = new util.Clock();
  hard = new visual.TextStim({
    win: psychoJS.window,
    name: 'hard',
    text: 'Hard Example\n  82 x 6 =\n\n  a) 486\n  b) 492\n',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  medium_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'medium_2',
    text: 'Medium Example\n  12 x 7 =\n\n  a) 84\n  b) 94\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  easy_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'easy_3',
    text: 'Easy Example\n   8 x 8 =\n\n  a) 64\n  b) 56\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  pointa_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pointa_4',
    text: 'You will encounter three levels of math difficulty in this experiment.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  Exampleproblems_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Exampleproblems_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  pressp_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressp_2',
    text: "Press 'p' to continue\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('cyan'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "easy_baseline"
  easy_baselineClock = new util.Clock();
  text_70 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_70',
    text: 'In percent, how well do you think you will do on the easy math problems?\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  percent_slider_easy = new visual.Slider({
    win: psychoJS.window, name: 'percent_slider_easy',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, (- 0.25)], ori: 0.0, units: psychoJS.window.units,
    labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"], fontSize: 0.035, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  easy_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'easy_4',
    text: 'Easy Example\n  8 x 8 =\n  a) 64\n  b) 56',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_74 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_74',
    text: 'Click on the slider! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.14)], draggable: false, height: 0.0633,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "medium_baseline"
  medium_baselineClock = new util.Clock();
  text_60 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_60',
    text: 'In percent, how well do you think you will do on the medium math problems?\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  medium_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'medium_3',
    text: 'Medium Example\n  12 x 7 =\n  a) 84\n  b) 94\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  percent_slider_medium = new visual.Slider({
    win: psychoJS.window, name: 'percent_slider_medium',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, (- 0.25)], ori: 0.0, units: psychoJS.window.units,
    labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"], fontSize: 0.035, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_92 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_92',
    text: 'Click on the slider! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.14)], draggable: false, height: 0.0633,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "hard_baseline"
  hard_baselineClock = new util.Clock();
  text_62 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_62',
    text: 'In percent, how well do you think you will do on the hard math problems?\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  hard_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'hard_4',
    text: 'Hard Example\n  82 x 6 =\n  a) 486\n  b) 492\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  percent_slider_hard = new visual.Slider({
    win: psychoJS.window, name: 'percent_slider_hard',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, (- 0.25)], ori: 0.0, units: psychoJS.window.units,
    labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"], fontSize: 0.035, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_93 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_93',
    text: 'Click on the slider! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.14)], draggable: false, height: 0.0633,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "ratings_instructions2"
  ratings_instructions2Clock = new util.Clock();
  text_58 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_58',
    text: 'Next, we want some baseline measurements.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  anticipation_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'anticipation_slider_2',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, "4", 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_65 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_65',
    text: 'Click on the slider to start the baseline measurements!',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.065,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "baseline_anticipation"
  baseline_anticipationClock = new util.Clock();
  text_57 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_57',
    text: 'How anxious do you feel about doing the upcoming math task?\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  anticipation_slider = new visual.Slider({
    win: psychoJS.window, name: 'anticipation_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, "4", 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  high_anxiety_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_anxiety_2',
    text: 'High\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  low_anxiety_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_anxiety_2',
    text: 'No\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  moderate_anxiety_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'moderate_anxiety_2',
    text: 'Moderate',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "baseline_anxiety"
  baseline_anxietyClock = new util.Clock();
  text_56 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_56',
    text: 'How anxious do you feel right now?\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  baseline_anxiety_slider = new visual.Slider({
    win: psychoJS.window, name: 'baseline_anxiety_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, 4, 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  high_anxiety = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_anxiety',
    text: 'High\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  low_anxiety = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_anxiety',
    text: 'No\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  moderate_anxiety = new visual.TextStim({
    win: psychoJS.window,
    name: 'moderate_anxiety',
    text: 'Moderate',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "baseline_feedback"
  baseline_feedbackClock = new util.Clock();
  text_81 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_81',
    text: 'How anxious do you feel about receiving feedback about your math performance? ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  feedback_slider = new visual.Slider({
    win: psychoJS.window, name: 'feedback_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, "4", 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  low_anxiety_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_anxiety_7',
    text: 'No\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  high_anxiety_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_anxiety_7',
    text: 'High\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  moderate_anxiety_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'moderate_anxiety_6',
    text: 'Moderate',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "baseline_motivation"
  baseline_motivationClock = new util.Clock();
  text_63 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_63',
    text: 'How motivated do you feel about doing the upcoming math task?\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pre_motivation_slider = new visual.Slider({
    win: psychoJS.window, name: 'pre_motivation_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", 2, 3, 4, 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  high_motivation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_motivation_2',
    text: 'High\nMotivation',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  low_motivation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_motivation_2',
    text: 'Low\nMotivation',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "final_instruct"
  final_instructClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  finalnotes = new visual.TextStim({
    win: psychoJS.window,
    name: 'finalnotes',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.055,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "new_code1"
  new_code1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_18
  block_gen1 = [1, 2, 3];
  block_gen2 = [1, 2, 3];
  block_gen3 = [1, 2, 3];
  block_gen4 = [1, 2, 3];
  easy_blocks = [1, 1, 0, 0];
  shuffle_easy = util.shuffle(easy_blocks);
  medium_blocks = [1, 1, 0, 0];
  shuffle_medium = util.shuffle(medium_blocks);
  hard_blocks = [1, 1, 0, 0];
  shuffle_hard = util.shuffle(hard_blocks);
  z1 = util.shuffle(block_gen1);
  z2 = util.shuffle(block_gen2);
  z3 = util.shuffle(block_gen3);
  z4 = util.shuffle(block_gen4);
  trialnum = 0;
  blocknum12 = 0;
  blocknum4 = 0;
  blocknum_rating = 0;
  blocknum_rating4 = 0;
  
  // Initialize components for Routine "cue"
  cueClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "get_ready"
  get_readyClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: 'Get ready!\n\n+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "task_start"
  task_startClock = new util.Clock();
  // Run 'Begin Experiment' code from code_10
  CorrResp = 1;
  
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_a_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_a_5',
    text: 'a)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_b_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_b_5',
    text: 'b)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  Study1Response_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "error_msg1"
  error_msg1Clock = new util.Clock();
  // Initialize components for Routine "highlight"
  highlightClock = new util.Clock();
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  polygon_4 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_4', 
    width: [0.7, 0.15][0], height: [0.7, 0.15][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('white'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_a_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_a_6',
    text: 'a)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_b_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_b_6',
    text: 'b)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  error_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'error_text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.175], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_67 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_67',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "attn_check_setup2"
  attn_check_setup2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_16
  attn_hut2 = 0;
  
  // Initialize components for Routine "attn_check2"
  attn_check2Clock = new util.Clock();
  text_88 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_88',
    text: "Press 'p' if you're paying attention.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('cyan'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_90 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_90',
    text: 'Guessing',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.2)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_91 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_91',
    text: 'Certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.2)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  confscale_numbers_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confscale_numbers_4',
    text: '(1)   (2)   (3)   (4)   (5)   (6)   (7)\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: 2, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  confresp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_66 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_66',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.075], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "confidence_judgement"
  confidence_judgementClock = new util.Clock();
  text_78 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_78',
    text: 'How confident are you in your answer?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_79 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_79',
    text: 'Guessing',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.2)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_80 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_80',
    text: 'Certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.2)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  confscale_numbers_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confscale_numbers_2',
    text: '(1)   (2)   (3)   (4)   (5)   (6)   (7)\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: 2, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  confresp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_48 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_48',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.075], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  polygon_5 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_5', 
    width: [0.7, 0.15][0], height: [0.7, 0.15][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 3.0, 
    lineColor: new util.Color('white'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  text_b_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_b_7',
    text: 'b)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), (- 0.1)], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_a_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_a_7',
    text: 'a)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), 0.05], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "penalty_box"
  penalty_boxClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "intertrial1"
  intertrial1Clock = new util.Clock();
  fixation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_2',
    text: '+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "pause_reflect"
  pause_reflectClock = new util.Clock();
  text_46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_46',
    text: 'Pause & Reflect\n\nTake a moment to pause and reflect on the 10 multiplication problems you just completed. We want you to report 1) how many problems you got correct, 2) how often you guessed, 3) how anxious you feel, and 4) how motivated you feel. \n\n Please be honest about your reflection. Your honest reflections are necessary for this research project. If you are unsure, you can estimate.   \n\nClick anywhere on the test slider to start!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.045,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [0.75, 0.075], pos: [0, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "accuracy_rating"
  accuracy_ratingClock = new util.Clock();
  text_42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_42',
    text: 'How many problems did you get correct? \n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.1,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  acc_slider = new visual.Slider({
    win: psychoJS.window, name: 'acc_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_53 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_53',
    text: 'Click on the slider! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.23)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "guess_amount"
  guess_amountClock = new util.Clock();
  text_41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_41',
    text: 'How many times did you guess on a problem?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.1,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  guess_slider = new visual.Slider({
    win: psychoJS.window, name: 'guess_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_52 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_52',
    text: 'Click on the slider! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.23)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "anxiety_rating"
  anxiety_ratingClock = new util.Clock();
  text_40 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_40',
    text: 'How anxious do you feel right now?\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  anxiety_slider = new visual.Slider({
    win: psychoJS.window, name: 'anxiety_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, "4", 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_51 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_51',
    text: 'Click on the slider! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.23)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  low_anxiety_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_anxiety_4',
    text: 'No\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  high_anxiety_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_anxiety_4',
    text: 'High\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  moderate_anxiety_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'moderate_anxiety_3',
    text: 'Moderate',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "motivation_rating"
  motivation_ratingClock = new util.Clock();
  text_43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_43',
    text: 'How motivated do you feel right now?\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.19], draggable: false, height: 0.1,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  motivation_slider = new visual.Slider({
    win: psychoJS.window, name: 'motivation_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", 2, 3, 4, 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  text_49 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_49',
    text: 'Click on the slider! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.23)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  high_motivation_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_motivation_3',
    text: 'High\nMotivation',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  low_motivation_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_motivation_3',
    text: 'Low\nMotivation',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: "Press 't' to move onto the next set of problems. ",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "new_code2"
  new_code2Clock = new util.Clock();
  // Initialize components for Routine "error_msg2"
  error_msg2Clock = new util.Clock();
  // Initialize components for Routine "new_code3"
  new_code3Clock = new util.Clock();
  // Initialize components for Routine "error_msg3"
  error_msg3Clock = new util.Clock();
  // Initialize components for Routine "attn_check_setup"
  attn_check_setupClock = new util.Clock();
  // Run 'Begin Experiment' code from code_12
  attn_hut = 0;
  
  // Initialize components for Routine "attn_check"
  attn_checkClock = new util.Clock();
  text_84 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_84',
    text: "Press 'p' if you're paying attention.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('cyan'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_85 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_85',
    text: 'Guessing',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.2)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_87 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_87',
    text: 'Certain',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.2)], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  confscale_numbers_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confscale_numbers_3',
    text: '(1)   (2)   (3)   (4)   (5)   (6)   (7)\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.1,  wrapWidth: 2, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  confresp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_59 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_59',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.075], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "attn_check_restart"
  attn_check_restartClock = new util.Clock();
  // Initialize components for Routine "new_code4"
  new_code4Clock = new util.Clock();
  // Initialize components for Routine "error_msg4"
  error_msg4Clock = new util.Clock();
  // Initialize components for Routine "final_ratings"
  final_ratingsClock = new util.Clock();
  text_50 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_50',
    text: 'You are now done with the math problems. We have a few more slider questions and a survey left.\n\nClick on the slider to move forward',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_3 = new visual.Slider({
    win: psychoJS.window, name: 'slider_3',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "easy_post"
  easy_postClock = new util.Clock();
  text_71 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_71',
    text: 'Overall, how well do you think did on the easy math problems?\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  easy_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'easy_5',
    text: 'Easy Example\n  8 x 8 =\n  a) 64\n  b) 56',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  percent_slider_easy2 = new visual.Slider({
    win: psychoJS.window, name: 'percent_slider_easy2',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, (- 0.25)], ori: 0.0, units: psychoJS.window.units,
    labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"], fontSize: 0.035, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "medium_post"
  medium_postClock = new util.Clock();
  text_72 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_72',
    text: 'Overall, how well do you think did on the medium math problems?\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  medium_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'medium_4',
    text: 'Medium Example\n  12 x 7 =\n  a) 84\n  b) 94\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  percent_slider_medium2 = new visual.Slider({
    win: psychoJS.window, name: 'percent_slider_medium2',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, (- 0.25)], ori: 0.0, units: psychoJS.window.units,
    labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"], fontSize: 0.035, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "hard_post"
  hard_postClock = new util.Clock();
  text_73 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_73',
    text: 'Overall, how well do you think did on the hard math problems?\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  hard_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'hard_5',
    text: 'Hard Example\n  82 x 6 =\n  a) 486\n  b) 492\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  percent_slider_hard2 = new visual.Slider({
    win: psychoJS.window, name: 'percent_slider_hard2',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, (- 0.25)], ori: 0.0, units: psychoJS.window.units,
    labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"], fontSize: 0.035, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "relief_post"
  relief_postClock = new util.Clock();
  text_75 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_75',
    text: 'Now that the math is over, how relieved do you feel? \n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  relief_slider = new visual.Slider({
    win: psychoJS.window, name: 'relief_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, "4", 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  low_relief = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_relief',
    text: 'No\nRelief',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  high_relief = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_relief',
    text: 'High\nRelief',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  moderate_relief = new visual.TextStim({
    win: psychoJS.window,
    name: 'moderate_relief',
    text: 'Moderate',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "anxiety_post"
  anxiety_postClock = new util.Clock();
  text_61 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_61',
    text: 'Overall, how anxious did you feel during the task? \n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  post_anxiety_slider = new visual.Slider({
    win: psychoJS.window, name: 'post_anxiety_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, "4", 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  low_anxiety_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_anxiety_5',
    text: 'No\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  high_anxiety_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_anxiety_5',
    text: 'High\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  moderate_anxiety_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'moderate_anxiety_4',
    text: 'Moderate',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "motivation_post"
  motivation_postClock = new util.Clock();
  text_77 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_77',
    text: 'Overall, how motivated were you while completing math problems? \n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  post_motivation_slider = new visual.Slider({
    win: psychoJS.window, name: 'post_motivation_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", 2, 3, 4, 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  high_motivation = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_motivation',
    text: 'High\nMotivation',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  low_motivation = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_motivation',
    text: 'Low\nMotivation',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "post_feedback"
  post_feedbackClock = new util.Clock();
  text_82 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_82',
    text: 'How anxious did you feel when receiving feedback about your math performance? ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  post_feedback_slider = new visual.Slider({
    win: psychoJS.window, name: 'post_feedback_slider',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, "4", 5, 6, "7"], fontSize: 0.075, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  low_anxiety_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_anxiety_8',
    text: 'No\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  high_anxiety_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_anxiety_8',
    text: 'High\nAnxiety',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  moderate_anxiety_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'moderate_anxiety_7',
    text: 'Moderate',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "feedback_enjoy"
  feedback_enjoyClock = new util.Clock();
  text_83 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_83',
    text: 'How much did you prefer receiving feedback over no feedback? ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.075,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  feedback_preference = new visual.Slider({
    win: psychoJS.window, name: 'feedback_preference',
    startValue: undefined,
    size: [1.15, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", 3, "4", 5, 6, "7"], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  yes_fbk = new visual.TextStim({
    win: psychoJS.window,
    name: 'yes_fbk',
    text: 'Prefer \nfeedback',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.58, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_86 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_86',
    text: 'No preference',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.01, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  no_fbk = new visual.TextStim({
    win: psychoJS.window,
    name: 'no_fbk',
    text: 'Prefer \nno feedback',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.58), (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: "That was the end of the experiment.\n\nPress 't' to launch the Survey portion. \n\nYOU MUST COMPLETE THE SURVEY TO GET YOUR RPOINTS.\nEMAIL dar257@psychology.rutgers.edu if you have any issues!!",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var introMaxDurationReached;
var _key_resp_4_allKeys;
var introMaxDuration;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    introClock.reset();
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(text_6);
    introComponents.push(key_resp_4);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // if text_6 is active this frame...
    if (text_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({
        keyList: typeof 't' === 'string' ? ['t'] : 't', 
        waitRelease: false
      });
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SIMA_instructMaxDurationReached;
var SIMA_instructMaxDuration;
var SIMA_instructComponents;
function SIMA_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SIMA_instruct' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SIMA_instructClock.reset();
    routineTimer.reset();
    SIMA_instructMaxDurationReached = false;
    // update component parameters for each repeat
    SIMA_slider_3.reset()
    psychoJS.experiment.addData('SIMA_instruct.started', globalClock.getTime());
    SIMA_instructMaxDuration = null
    // keep track of which components have finished
    SIMA_instructComponents = [];
    SIMA_instructComponents.push(text_13);
    SIMA_instructComponents.push(SIMA_slider_3);
    
    for (const thisComponent of SIMA_instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SIMA_instructRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SIMA_instruct' ---
    // get current time
    t = SIMA_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    
    // if text_13 is active this frame...
    if (text_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SIMA_slider_3* updates
    if (t >= 0.0 && SIMA_slider_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SIMA_slider_3.tStart = t;  // (not accounting for frame time here)
      SIMA_slider_3.frameNStart = frameN;  // exact frame index
      
      SIMA_slider_3.setAutoDraw(true);
    }
    
    
    // if SIMA_slider_3 is active this frame...
    if (SIMA_slider_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check SIMA_slider_3 for response to end Routine
    if (SIMA_slider_3.getRating() !== undefined && SIMA_slider_3.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SIMA_instructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SIMA_instructRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SIMA_instruct' ---
    for (const thisComponent of SIMA_instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SIMA_instruct.stopped', globalClock.getTime());
    psychoJS.experiment.addData('SIMA_slider_3.response', SIMA_slider_3.getRating());
    psychoJS.experiment.addData('SIMA_slider_3.rt', SIMA_slider_3.getRT());
    // the Routine "SIMA_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SIMAMaxDurationReached;
var SIMAMaxDuration;
var SIMAComponents;
function SIMARoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SIMA' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SIMAClock.reset();
    routineTimer.reset();
    SIMAMaxDurationReached = false;
    // update component parameters for each repeat
    SIMA_slider.reset()
    psychoJS.experiment.addData('SIMA.started', globalClock.getTime());
    SIMAMaxDuration = null
    // keep track of which components have finished
    SIMAComponents = [];
    SIMAComponents.push(text_76);
    SIMAComponents.push(SIMA_slider);
    SIMAComponents.push(high_anxiety_3);
    SIMAComponents.push(low_anxiety_3);
    
    for (const thisComponent of SIMAComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SIMARoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SIMA' ---
    // get current time
    t = SIMAClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_76* updates
    if (t >= 0.0 && text_76.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_76.tStart = t;  // (not accounting for frame time here)
      text_76.frameNStart = frameN;  // exact frame index
      
      text_76.setAutoDraw(true);
    }
    
    
    // if text_76 is active this frame...
    if (text_76.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SIMA_slider* updates
    if (t >= 0.0 && SIMA_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SIMA_slider.tStart = t;  // (not accounting for frame time here)
      SIMA_slider.frameNStart = frameN;  // exact frame index
      
      SIMA_slider.setAutoDraw(true);
    }
    
    
    // if SIMA_slider is active this frame...
    if (SIMA_slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check SIMA_slider for response to end Routine
    if (SIMA_slider.getRating() !== undefined && SIMA_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *high_anxiety_3* updates
    if (t >= 0.0 && high_anxiety_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      high_anxiety_3.tStart = t;  // (not accounting for frame time here)
      high_anxiety_3.frameNStart = frameN;  // exact frame index
      
      high_anxiety_3.setAutoDraw(true);
    }
    
    
    // if high_anxiety_3 is active this frame...
    if (high_anxiety_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *low_anxiety_3* updates
    if (t >= 0.0 && low_anxiety_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      low_anxiety_3.tStart = t;  // (not accounting for frame time here)
      low_anxiety_3.frameNStart = frameN;  // exact frame index
      
      low_anxiety_3.setAutoDraw(true);
    }
    
    
    // if low_anxiety_3 is active this frame...
    if (low_anxiety_3.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SIMAComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SIMARoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SIMA' ---
    for (const thisComponent of SIMAComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SIMA.stopped', globalClock.getTime());
    psychoJS.experiment.addData('SIMA_slider.response', SIMA_slider.getRating());
    psychoJS.experiment.addData('SIMA_slider.rt', SIMA_slider.getRT());
    // the Routine "SIMA" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GADMaxDurationReached;
var GADMaxDuration;
var GADComponents;
function GADRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GAD' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    GADClock.reset();
    routineTimer.reset();
    GADMaxDurationReached = false;
    // update component parameters for each repeat
    GAD_slider.reset()
    psychoJS.experiment.addData('GAD.started', globalClock.getTime());
    GADMaxDuration = null
    // keep track of which components have finished
    GADComponents = [];
    GADComponents.push(text_96);
    GADComponents.push(GAD_slider);
    GADComponents.push(high_anxiety_6);
    GADComponents.push(low_anxiety_6);
    
    for (const thisComponent of GADComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GADRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GAD' ---
    // get current time
    t = GADClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_96* updates
    if (t >= 0.0 && text_96.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_96.tStart = t;  // (not accounting for frame time here)
      text_96.frameNStart = frameN;  // exact frame index
      
      text_96.setAutoDraw(true);
    }
    
    
    // if text_96 is active this frame...
    if (text_96.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *GAD_slider* updates
    if (t >= 0.0 && GAD_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GAD_slider.tStart = t;  // (not accounting for frame time here)
      GAD_slider.frameNStart = frameN;  // exact frame index
      
      GAD_slider.setAutoDraw(true);
    }
    
    
    // if GAD_slider is active this frame...
    if (GAD_slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check GAD_slider for response to end Routine
    if (GAD_slider.getRating() !== undefined && GAD_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *high_anxiety_6* updates
    if (t >= 0.0 && high_anxiety_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      high_anxiety_6.tStart = t;  // (not accounting for frame time here)
      high_anxiety_6.frameNStart = frameN;  // exact frame index
      
      high_anxiety_6.setAutoDraw(true);
    }
    
    
    // if high_anxiety_6 is active this frame...
    if (high_anxiety_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *low_anxiety_6* updates
    if (t >= 0.0 && low_anxiety_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      low_anxiety_6.tStart = t;  // (not accounting for frame time here)
      low_anxiety_6.frameNStart = frameN;  // exact frame index
      
      low_anxiety_6.setAutoDraw(true);
    }
    
    
    // if low_anxiety_6 is active this frame...
    if (low_anxiety_6.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GADComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GADRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GAD' ---
    for (const thisComponent of GADComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('GAD.stopped', globalClock.getTime());
    psychoJS.experiment.addData('GAD_slider.response', GAD_slider.getRating());
    psychoJS.experiment.addData('GAD_slider.rt', GAD_slider.getRT());
    // the Routine "GAD" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pract_instructMaxDurationReached;
var _key_resp_7_allKeys;
var pract_instructMaxDuration;
var pract_instructComponents;
function pract_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pract_instruct' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    pract_instructClock.reset();
    routineTimer.reset();
    pract_instructMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    psychoJS.experiment.addData('pract_instruct.started', globalClock.getTime());
    pract_instructMaxDuration = null
    // keep track of which components have finished
    pract_instructComponents = [];
    pract_instructComponents.push(text_9);
    pract_instructComponents.push(key_resp_7);
    
    for (const thisComponent of pract_instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pract_instructRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pract_instruct' ---
    // get current time
    t = pract_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // if text_9 is active this frame...
    if (text_9.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    // if key_resp_7 is active this frame...
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({
        keyList: typeof ['1','2'] === 'string' ? [['1','2']] : ['1','2'], 
        waitRelease: false
      });
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pract_instructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pract_instructRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pract_instruct' ---
    for (const thisComponent of pract_instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pract_instruct.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "pract_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pract_confidenceMaxDurationReached;
var _confresp_6_allKeys;
var pract_confidenceMaxDuration;
var pract_confidenceComponents;
function pract_confidenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pract_confidence' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    pract_confidenceClock.reset();
    routineTimer.reset();
    pract_confidenceMaxDurationReached = false;
    // update component parameters for each repeat
    confresp_6.keys = undefined;
    confresp_6.rt = undefined;
    _confresp_6_allKeys = [];
    psychoJS.experiment.addData('pract_confidence.started', globalClock.getTime());
    pract_confidenceMaxDuration = null
    // keep track of which components have finished
    pract_confidenceComponents = [];
    pract_confidenceComponents.push(practiceroundtext);
    pract_confidenceComponents.push(text_22);
    pract_confidenceComponents.push(confscale_numbers_5);
    pract_confidenceComponents.push(confresp_6);
    pract_confidenceComponents.push(anykey);
    pract_confidenceComponents.push(example);
    
    for (const thisComponent of pract_confidenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pract_confidenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pract_confidence' ---
    // get current time
    t = pract_confidenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practiceroundtext* updates
    if (t >= 0.0 && practiceroundtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceroundtext.tStart = t;  // (not accounting for frame time here)
      practiceroundtext.frameNStart = frameN;  // exact frame index
      
      practiceroundtext.setAutoDraw(true);
    }
    
    
    // if practiceroundtext is active this frame...
    if (practiceroundtext.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }
    
    
    // if text_22 is active this frame...
    if (text_22.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *confscale_numbers_5* updates
    if (t >= 0.0 && confscale_numbers_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confscale_numbers_5.tStart = t;  // (not accounting for frame time here)
      confscale_numbers_5.frameNStart = frameN;  // exact frame index
      
      confscale_numbers_5.setAutoDraw(true);
    }
    
    
    // if confscale_numbers_5 is active this frame...
    if (confscale_numbers_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *confresp_6* updates
    if (t >= 0.0 && confresp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confresp_6.tStart = t;  // (not accounting for frame time here)
      confresp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { confresp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { confresp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { confresp_6.clearEvents(); });
    }
    
    // if confresp_6 is active this frame...
    if (confresp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = confresp_6.getKeys({
        keyList: typeof ['1','2','3','4','5','6','7'] === 'string' ? [['1','2','3','4','5','6','7']] : ['1','2','3','4','5','6','7'], 
        waitRelease: false
      });
      _confresp_6_allKeys = _confresp_6_allKeys.concat(theseKeys);
      if (_confresp_6_allKeys.length > 0) {
        confresp_6.keys = _confresp_6_allKeys[_confresp_6_allKeys.length - 1].name;  // just the last key pressed
        confresp_6.rt = _confresp_6_allKeys[_confresp_6_allKeys.length - 1].rt;
        confresp_6.duration = _confresp_6_allKeys[_confresp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *anykey* updates
    if (t >= 0.0 && anykey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      anykey.tStart = t;  // (not accounting for frame time here)
      anykey.frameNStart = frameN;  // exact frame index
      
      anykey.setAutoDraw(true);
    }
    
    
    // if anykey is active this frame...
    if (anykey.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *example* updates
    if (t >= 0.0 && example.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      example.tStart = t;  // (not accounting for frame time here)
      example.frameNStart = frameN;  // exact frame index
      
      example.setAutoDraw(true);
    }
    
    
    // if example is active this frame...
    if (example.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pract_confidenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pract_confidenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pract_confidence' ---
    for (const thisComponent of pract_confidenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pract_confidence.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(confresp_6.corr, level);
    }
    psychoJS.experiment.addData('confresp_6.keys', confresp_6.keys);
    if (typeof confresp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('confresp_6.rt', confresp_6.rt);
        psychoJS.experiment.addData('confresp_6.duration', confresp_6.duration);
        routineTimer.reset();
        }
    
    confresp_6.stop();
    // the Routine "pract_confidence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_readyMaxDurationReached;
var _key_resp_20_allKeys;
var practice_readyMaxDuration;
var practice_readyComponents;
function practice_readyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_ready' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_readyClock.reset();
    routineTimer.reset();
    practice_readyMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_20.keys = undefined;
    key_resp_20.rt = undefined;
    _key_resp_20_allKeys = [];
    psychoJS.experiment.addData('practice_ready.started', globalClock.getTime());
    practice_readyMaxDuration = null
    // keep track of which components have finished
    practice_readyComponents = [];
    practice_readyComponents.push(text_68);
    practice_readyComponents.push(key_resp_20);
    
    for (const thisComponent of practice_readyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_readyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_ready' ---
    // get current time
    t = practice_readyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_68* updates
    if (t >= 0.0 && text_68.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_68.tStart = t;  // (not accounting for frame time here)
      text_68.frameNStart = frameN;  // exact frame index
      
      text_68.setAutoDraw(true);
    }
    
    
    // if text_68 is active this frame...
    if (text_68.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_20* updates
    if (t >= 0.0 && key_resp_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_20.tStart = t;  // (not accounting for frame time here)
      key_resp_20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.clearEvents(); });
    }
    
    // if key_resp_20 is active this frame...
    if (key_resp_20.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_20.getKeys({
        keyList: typeof 't' === 'string' ? ['t'] : 't', 
        waitRelease: false
      });
      _key_resp_20_allKeys = _key_resp_20_allKeys.concat(theseKeys);
      if (_key_resp_20_allKeys.length > 0) {
        key_resp_20.keys = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].name;  // just the last key pressed
        key_resp_20.rt = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].rt;
        key_resp_20.duration = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_readyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_readyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_ready' ---
    for (const thisComponent of practice_readyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_ready.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_20.corr, level);
    }
    psychoJS.experiment.addData('key_resp_20.keys', key_resp_20.keys);
    if (typeof key_resp_20.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_20.rt', key_resp_20.rt);
        psychoJS.experiment.addData('key_resp_20.duration', key_resp_20.duration);
        routineTimer.reset();
        }
    
    key_resp_20.stop();
    // the Routine "practice_ready" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var get_ready2MaxDurationReached;
var get_ready2MaxDuration;
var get_ready2Components;
function get_ready2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'get_ready2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    get_ready2Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    get_ready2MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('get_ready2.started', globalClock.getTime());
    get_ready2MaxDuration = null
    // keep track of which components have finished
    get_ready2Components = [];
    get_ready2Components.push(fixation_3);
    get_ready2Components.push(text_10);
    
    for (const thisComponent of get_ready2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function get_ready2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'get_ready2' ---
    // get current time
    t = get_ready2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_3* updates
    if (t >= 0.0 && fixation_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_3.tStart = t;  // (not accounting for frame time here)
      fixation_3.frameNStart = frameN;  // exact frame index
      
      fixation_3.setAutoDraw(true);
    }
    
    
    // if fixation_3 is active this frame...
    if (fixation_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_3.tStop = t;  // not accounting for scr refresh
      fixation_3.frameNStop = frameN;  // exact frame index
      // update status
      fixation_3.status = PsychoJS.Status.FINISHED;
      fixation_3.setAutoDraw(false);
    }
    
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    
    // if text_10 is active this frame...
    if (text_10.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_10.tStop = t;  // not accounting for scr refresh
      text_10.frameNStop = frameN;  // exact frame index
      // update status
      text_10.status = PsychoJS.Status.FINISHED;
      text_10.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of get_ready2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function get_ready2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'get_ready2' ---
    for (const thisComponent of get_ready2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('get_ready2.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (get_ready2MaxDurationReached) {
        get_ready2Clock.add(get_ready2MaxDuration);
    } else {
        get_ready2Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_7;
function trials_7LoopBegin(trials_7LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_7 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_7'
    });
    psychoJS.experiment.addLoop(trials_7); // add the loop to the experiment
    currentLoop = trials_7;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_7 of trials_7) {
      snapshot = trials_7.getSnapshot();
      trials_7LoopScheduler.add(importConditions(snapshot));
      const trials_6LoopScheduler = new Scheduler(psychoJS);
      trials_7LoopScheduler.add(trials_6LoopBegin(trials_6LoopScheduler, snapshot));
      trials_7LoopScheduler.add(trials_6LoopScheduler);
      trials_7LoopScheduler.add(trials_6LoopEnd);
      trials_7LoopScheduler.add(repeat_instructionsRoutineBegin(snapshot));
      trials_7LoopScheduler.add(repeat_instructionsRoutineEachFrame());
      trials_7LoopScheduler.add(repeat_instructionsRoutineEnd(snapshot));
      trials_7LoopScheduler.add(trials_7LoopEndIteration(trials_7LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_6;
function trials_6LoopBegin(trials_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_Test.xlsx',
      seed: undefined, name: 'trials_6'
    });
    psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
    currentLoop = trials_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_6 of trials_6) {
      snapshot = trials_6.getSnapshot();
      trials_6LoopScheduler.add(importConditions(snapshot));
      trials_6LoopScheduler.add(practice_startRoutineBegin(snapshot));
      trials_6LoopScheduler.add(practice_startRoutineEachFrame());
      trials_6LoopScheduler.add(practice_startRoutineEnd(snapshot));
      trials_6LoopScheduler.add(practice_highlightRoutineBegin(snapshot));
      trials_6LoopScheduler.add(practice_highlightRoutineEachFrame());
      trials_6LoopScheduler.add(practice_highlightRoutineEnd(snapshot));
      trials_6LoopScheduler.add(conf_practRoutineBegin(snapshot));
      trials_6LoopScheduler.add(conf_practRoutineEachFrame());
      trials_6LoopScheduler.add(conf_practRoutineEnd(snapshot));
      trials_6LoopScheduler.add(practice_feedbackRoutineBegin(snapshot));
      trials_6LoopScheduler.add(practice_feedbackRoutineEachFrame());
      trials_6LoopScheduler.add(practice_feedbackRoutineEnd(snapshot));
      trials_6LoopScheduler.add(trials_6LoopEndIteration(trials_6LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_7LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_7);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_7LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_5 of trials_5) {
      snapshot = trials_5.getSnapshot();
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(new_code1RoutineBegin(snapshot));
      trials_5LoopScheduler.add(new_code1RoutineEachFrame());
      trials_5LoopScheduler.add(new_code1RoutineEnd(snapshot));
      trials_5LoopScheduler.add(cueRoutineBegin(snapshot));
      trials_5LoopScheduler.add(cueRoutineEachFrame());
      trials_5LoopScheduler.add(cueRoutineEnd(snapshot));
      trials_5LoopScheduler.add(get_readyRoutineBegin(snapshot));
      trials_5LoopScheduler.add(get_readyRoutineEachFrame());
      trials_5LoopScheduler.add(get_readyRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      trials_5LoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      trials_5LoopScheduler.add(trialsLoopScheduler);
      trials_5LoopScheduler.add(trialsLoopEnd);
      trials_5LoopScheduler.add(pause_reflectRoutineBegin(snapshot));
      trials_5LoopScheduler.add(pause_reflectRoutineEachFrame());
      trials_5LoopScheduler.add(pause_reflectRoutineEnd(snapshot));
      trials_5LoopScheduler.add(accuracy_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(accuracy_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(accuracy_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(guess_amountRoutineBegin(snapshot));
      trials_5LoopScheduler.add(guess_amountRoutineEachFrame());
      trials_5LoopScheduler.add(guess_amountRoutineEnd(snapshot));
      trials_5LoopScheduler.add(anxiety_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(anxiety_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(anxiety_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(motivation_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(motivation_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(motivation_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(pauseRoutineBegin(snapshot));
      trials_5LoopScheduler.add(pauseRoutineEachFrame());
      trials_5LoopScheduler.add(pauseRoutineEnd(snapshot));
      trials_5LoopScheduler.add(new_code2RoutineBegin(snapshot));
      trials_5LoopScheduler.add(new_code2RoutineEachFrame());
      trials_5LoopScheduler.add(new_code2RoutineEnd(snapshot));
      trials_5LoopScheduler.add(cueRoutineBegin(snapshot));
      trials_5LoopScheduler.add(cueRoutineEachFrame());
      trials_5LoopScheduler.add(cueRoutineEnd(snapshot));
      trials_5LoopScheduler.add(get_readyRoutineBegin(snapshot));
      trials_5LoopScheduler.add(get_readyRoutineEachFrame());
      trials_5LoopScheduler.add(get_readyRoutineEnd(snapshot));
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      trials_5LoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      trials_5LoopScheduler.add(trials_2LoopScheduler);
      trials_5LoopScheduler.add(trials_2LoopEnd);
      trials_5LoopScheduler.add(pause_reflectRoutineBegin(snapshot));
      trials_5LoopScheduler.add(pause_reflectRoutineEachFrame());
      trials_5LoopScheduler.add(pause_reflectRoutineEnd(snapshot));
      trials_5LoopScheduler.add(accuracy_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(accuracy_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(accuracy_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(guess_amountRoutineBegin(snapshot));
      trials_5LoopScheduler.add(guess_amountRoutineEachFrame());
      trials_5LoopScheduler.add(guess_amountRoutineEnd(snapshot));
      trials_5LoopScheduler.add(anxiety_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(anxiety_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(anxiety_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(motivation_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(motivation_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(motivation_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(new_code3RoutineBegin(snapshot));
      trials_5LoopScheduler.add(new_code3RoutineEachFrame());
      trials_5LoopScheduler.add(new_code3RoutineEnd(snapshot));
      trials_5LoopScheduler.add(cueRoutineBegin(snapshot));
      trials_5LoopScheduler.add(cueRoutineEachFrame());
      trials_5LoopScheduler.add(cueRoutineEnd(snapshot));
      trials_5LoopScheduler.add(get_readyRoutineBegin(snapshot));
      trials_5LoopScheduler.add(get_readyRoutineEachFrame());
      trials_5LoopScheduler.add(get_readyRoutineEnd(snapshot));
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      trials_5LoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      trials_5LoopScheduler.add(trials_3LoopScheduler);
      trials_5LoopScheduler.add(trials_3LoopEnd);
      trials_5LoopScheduler.add(attn_check_restartRoutineBegin(snapshot));
      trials_5LoopScheduler.add(attn_check_restartRoutineEachFrame());
      trials_5LoopScheduler.add(attn_check_restartRoutineEnd(snapshot));
      trials_5LoopScheduler.add(pause_reflectRoutineBegin(snapshot));
      trials_5LoopScheduler.add(pause_reflectRoutineEachFrame());
      trials_5LoopScheduler.add(pause_reflectRoutineEnd(snapshot));
      trials_5LoopScheduler.add(accuracy_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(accuracy_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(accuracy_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(guess_amountRoutineBegin(snapshot));
      trials_5LoopScheduler.add(guess_amountRoutineEachFrame());
      trials_5LoopScheduler.add(guess_amountRoutineEnd(snapshot));
      trials_5LoopScheduler.add(anxiety_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(anxiety_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(anxiety_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(motivation_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(motivation_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(motivation_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(pauseRoutineBegin(snapshot));
      trials_5LoopScheduler.add(pauseRoutineEachFrame());
      trials_5LoopScheduler.add(pauseRoutineEnd(snapshot));
      trials_5LoopScheduler.add(new_code4RoutineBegin(snapshot));
      trials_5LoopScheduler.add(new_code4RoutineEachFrame());
      trials_5LoopScheduler.add(new_code4RoutineEnd(snapshot));
      trials_5LoopScheduler.add(cueRoutineBegin(snapshot));
      trials_5LoopScheduler.add(cueRoutineEachFrame());
      trials_5LoopScheduler.add(cueRoutineEnd(snapshot));
      trials_5LoopScheduler.add(get_readyRoutineBegin(snapshot));
      trials_5LoopScheduler.add(get_readyRoutineEachFrame());
      trials_5LoopScheduler.add(get_readyRoutineEnd(snapshot));
      const trials_4LoopScheduler = new Scheduler(psychoJS);
      trials_5LoopScheduler.add(trials_4LoopBegin(trials_4LoopScheduler, snapshot));
      trials_5LoopScheduler.add(trials_4LoopScheduler);
      trials_5LoopScheduler.add(trials_4LoopEnd);
      trials_5LoopScheduler.add(pause_reflectRoutineBegin(snapshot));
      trials_5LoopScheduler.add(pause_reflectRoutineEachFrame());
      trials_5LoopScheduler.add(pause_reflectRoutineEnd(snapshot));
      trials_5LoopScheduler.add(accuracy_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(accuracy_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(accuracy_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(guess_amountRoutineBegin(snapshot));
      trials_5LoopScheduler.add(guess_amountRoutineEachFrame());
      trials_5LoopScheduler.add(guess_amountRoutineEnd(snapshot));
      trials_5LoopScheduler.add(anxiety_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(anxiety_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(anxiety_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(motivation_ratingRoutineBegin(snapshot));
      trials_5LoopScheduler.add(motivation_ratingRoutineEachFrame());
      trials_5LoopScheduler.add(motivation_ratingRoutineEnd(snapshot));
      trials_5LoopScheduler.add(trials_5LoopEndIteration(trials_5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'test_file.xlsx', useRows),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(task_startRoutineBegin(snapshot));
      trialsLoopScheduler.add(task_startRoutineEachFrame());
      trialsLoopScheduler.add(task_startRoutineEnd(snapshot));
      trialsLoopScheduler.add(error_msg1RoutineBegin(snapshot));
      trialsLoopScheduler.add(error_msg1RoutineEachFrame());
      trialsLoopScheduler.add(error_msg1RoutineEnd(snapshot));
      trialsLoopScheduler.add(highlightRoutineBegin(snapshot));
      trialsLoopScheduler.add(highlightRoutineEachFrame());
      trialsLoopScheduler.add(highlightRoutineEnd(snapshot));
      trialsLoopScheduler.add(attn_check_setup2RoutineBegin(snapshot));
      trialsLoopScheduler.add(attn_check_setup2RoutineEachFrame());
      trialsLoopScheduler.add(attn_check_setup2RoutineEnd(snapshot));
      trialsLoopScheduler.add(attn_check2RoutineBegin(snapshot));
      trialsLoopScheduler.add(attn_check2RoutineEachFrame());
      trialsLoopScheduler.add(attn_check2RoutineEnd(snapshot));
      trialsLoopScheduler.add(confidence_judgementRoutineBegin(snapshot));
      trialsLoopScheduler.add(confidence_judgementRoutineEachFrame());
      trialsLoopScheduler.add(confidence_judgementRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(penalty_boxRoutineBegin(snapshot));
      trialsLoopScheduler.add(penalty_boxRoutineEachFrame());
      trialsLoopScheduler.add(penalty_boxRoutineEnd(snapshot));
      trialsLoopScheduler.add(intertrial1RoutineBegin(snapshot));
      trialsLoopScheduler.add(intertrial1RoutineEachFrame());
      trialsLoopScheduler.add(intertrial1RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'test_file.xlsx', useRows2),
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(task_startRoutineBegin(snapshot));
      trials_2LoopScheduler.add(task_startRoutineEachFrame());
      trials_2LoopScheduler.add(task_startRoutineEnd(snapshot));
      trials_2LoopScheduler.add(error_msg2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(error_msg2RoutineEachFrame());
      trials_2LoopScheduler.add(error_msg2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(highlightRoutineBegin(snapshot));
      trials_2LoopScheduler.add(highlightRoutineEachFrame());
      trials_2LoopScheduler.add(highlightRoutineEnd(snapshot));
      trials_2LoopScheduler.add(confidence_judgementRoutineBegin(snapshot));
      trials_2LoopScheduler.add(confidence_judgementRoutineEachFrame());
      trials_2LoopScheduler.add(confidence_judgementRoutineEnd(snapshot));
      trials_2LoopScheduler.add(feedbackRoutineBegin(snapshot));
      trials_2LoopScheduler.add(feedbackRoutineEachFrame());
      trials_2LoopScheduler.add(feedbackRoutineEnd(snapshot));
      trials_2LoopScheduler.add(penalty_boxRoutineBegin(snapshot));
      trials_2LoopScheduler.add(penalty_boxRoutineEachFrame());
      trials_2LoopScheduler.add(penalty_boxRoutineEnd(snapshot));
      trials_2LoopScheduler.add(intertrial1RoutineBegin(snapshot));
      trials_2LoopScheduler.add(intertrial1RoutineEachFrame());
      trials_2LoopScheduler.add(intertrial1RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'test_file.xlsx', useRows3),
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(task_startRoutineBegin(snapshot));
      trials_3LoopScheduler.add(task_startRoutineEachFrame());
      trials_3LoopScheduler.add(task_startRoutineEnd(snapshot));
      trials_3LoopScheduler.add(error_msg3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(error_msg3RoutineEachFrame());
      trials_3LoopScheduler.add(error_msg3RoutineEnd(snapshot));
      trials_3LoopScheduler.add(highlightRoutineBegin(snapshot));
      trials_3LoopScheduler.add(highlightRoutineEachFrame());
      trials_3LoopScheduler.add(highlightRoutineEnd(snapshot));
      trials_3LoopScheduler.add(attn_check_setupRoutineBegin(snapshot));
      trials_3LoopScheduler.add(attn_check_setupRoutineEachFrame());
      trials_3LoopScheduler.add(attn_check_setupRoutineEnd(snapshot));
      trials_3LoopScheduler.add(attn_checkRoutineBegin(snapshot));
      trials_3LoopScheduler.add(attn_checkRoutineEachFrame());
      trials_3LoopScheduler.add(attn_checkRoutineEnd(snapshot));
      trials_3LoopScheduler.add(confidence_judgementRoutineBegin(snapshot));
      trials_3LoopScheduler.add(confidence_judgementRoutineEachFrame());
      trials_3LoopScheduler.add(confidence_judgementRoutineEnd(snapshot));
      trials_3LoopScheduler.add(feedbackRoutineBegin(snapshot));
      trials_3LoopScheduler.add(feedbackRoutineEachFrame());
      trials_3LoopScheduler.add(feedbackRoutineEnd(snapshot));
      trials_3LoopScheduler.add(penalty_boxRoutineBegin(snapshot));
      trials_3LoopScheduler.add(penalty_boxRoutineEachFrame());
      trials_3LoopScheduler.add(penalty_boxRoutineEnd(snapshot));
      trials_3LoopScheduler.add(intertrial1RoutineBegin(snapshot));
      trials_3LoopScheduler.add(intertrial1RoutineEachFrame());
      trials_3LoopScheduler.add(intertrial1RoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'test_file.xlsx', useRows4),
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(task_startRoutineBegin(snapshot));
      trials_4LoopScheduler.add(task_startRoutineEachFrame());
      trials_4LoopScheduler.add(task_startRoutineEnd(snapshot));
      trials_4LoopScheduler.add(error_msg4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(error_msg4RoutineEachFrame());
      trials_4LoopScheduler.add(error_msg4RoutineEnd(snapshot));
      trials_4LoopScheduler.add(highlightRoutineBegin(snapshot));
      trials_4LoopScheduler.add(highlightRoutineEachFrame());
      trials_4LoopScheduler.add(highlightRoutineEnd(snapshot));
      trials_4LoopScheduler.add(confidence_judgementRoutineBegin(snapshot));
      trials_4LoopScheduler.add(confidence_judgementRoutineEachFrame());
      trials_4LoopScheduler.add(confidence_judgementRoutineEnd(snapshot));
      trials_4LoopScheduler.add(feedbackRoutineBegin(snapshot));
      trials_4LoopScheduler.add(feedbackRoutineEachFrame());
      trials_4LoopScheduler.add(feedbackRoutineEnd(snapshot));
      trials_4LoopScheduler.add(penalty_boxRoutineBegin(snapshot));
      trials_4LoopScheduler.add(penalty_boxRoutineEachFrame());
      trials_4LoopScheduler.add(penalty_boxRoutineEnd(snapshot));
      trials_4LoopScheduler.add(intertrial1RoutineBegin(snapshot));
      trials_4LoopScheduler.add(intertrial1RoutineEachFrame());
      trials_4LoopScheduler.add(intertrial1RoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice_startMaxDurationReached;
var selectbox_color;
var response_record;
var topside;
var botside;
var x;
var y;
var r1reversed;
var _Test3response2_allKeys;
var practice_startMaxDuration;
var practice_startComponents;
function practice_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_startClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    practice_startMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    selectbox_color = "white";
    response_record = "";
    CorrResp = 1;
    topside = R1Word1;
    botside = R1Word2;
    x = ["a) "];
    y = ["b) "];
    if ((Math.random() > 0.5)) {
        topside = R1Word1;
        botside = R1Word2;
        r1reversed = false;
        CorrResp = 1;
        x = "a) ";
        y = "b) ";
    } else {
        topside = R1Word2;
        botside = R1Word1;
        r1reversed = true;
        CorrResp = 2;
        x = "b) ";
        y = "a) ";
    }
    psychoJS.experiment.addData("r1reversed", r1reversed);
    psychoJS.experiment.addData("CorrResp", CorrResp);
    psychoJS.experiment.addData("topside", topside);
    psychoJS.experiment.addData("botside", botside);
    console.log(r1reversed);
    console.log(topside);
    
    text_33.setText(targetword);
    text_35.setText(topside);
    text_36.setText(botside);
    Test3response2.keys = undefined;
    Test3response2.rt = undefined;
    _Test3response2_allKeys = [];
    psychoJS.experiment.addData('practice_start.started', globalClock.getTime());
    practice_startMaxDuration = null
    // keep track of which components have finished
    practice_startComponents = [];
    practice_startComponents.push(text_33);
    practice_startComponents.push(text_35);
    practice_startComponents.push(text_36);
    practice_startComponents.push(text_a);
    practice_startComponents.push(text_b);
    practice_startComponents.push(Test3response2);
    
    for (const thisComponent of practice_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var respbox_y;
var keys;
var fbkimage_y;
function practice_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_start' ---
    // get current time
    t = practice_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_33* updates
    if (t >= 0.0 && text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_33.tStart = t;  // (not accounting for frame time here)
      text_33.frameNStart = frameN;  // exact frame index
      
      text_33.setAutoDraw(true);
    }
    
    
    // if text_33 is active this frame...
    if (text_33.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_33.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_33.tStop = t;  // not accounting for scr refresh
      text_33.frameNStop = frameN;  // exact frame index
      // update status
      text_33.status = PsychoJS.Status.FINISHED;
      text_33.setAutoDraw(false);
    }
    
    
    // *text_35* updates
    if (t >= 0.0 && text_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_35.tStart = t;  // (not accounting for frame time here)
      text_35.frameNStart = frameN;  // exact frame index
      
      text_35.setAutoDraw(true);
    }
    
    
    // if text_35 is active this frame...
    if (text_35.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_35.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_35.tStop = t;  // not accounting for scr refresh
      text_35.frameNStop = frameN;  // exact frame index
      // update status
      text_35.status = PsychoJS.Status.FINISHED;
      text_35.setAutoDraw(false);
    }
    
    
    // *text_36* updates
    if (t >= 0.0 && text_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_36.tStart = t;  // (not accounting for frame time here)
      text_36.frameNStart = frameN;  // exact frame index
      
      text_36.setAutoDraw(true);
    }
    
    
    // if text_36 is active this frame...
    if (text_36.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_36.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_36.tStop = t;  // not accounting for scr refresh
      text_36.frameNStop = frameN;  // exact frame index
      // update status
      text_36.status = PsychoJS.Status.FINISHED;
      text_36.setAutoDraw(false);
    }
    
    
    // *text_a* updates
    if (t >= 0.0 && text_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_a.tStart = t;  // (not accounting for frame time here)
      text_a.frameNStart = frameN;  // exact frame index
      
      text_a.setAutoDraw(true);
    }
    
    
    // if text_a is active this frame...
    if (text_a.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_a.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_a.tStop = t;  // not accounting for scr refresh
      text_a.frameNStop = frameN;  // exact frame index
      // update status
      text_a.status = PsychoJS.Status.FINISHED;
      text_a.setAutoDraw(false);
    }
    
    
    // *text_b* updates
    if (t >= 0.0 && text_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_b.tStart = t;  // (not accounting for frame time here)
      text_b.frameNStart = frameN;  // exact frame index
      
      text_b.setAutoDraw(true);
    }
    
    
    // if text_b is active this frame...
    if (text_b.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_b.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_b.tStop = t;  // not accounting for scr refresh
      text_b.frameNStop = frameN;  // exact frame index
      // update status
      text_b.status = PsychoJS.Status.FINISHED;
      text_b.setAutoDraw(false);
    }
    
    
    // *Test3response2* updates
    if (t >= 0.0 && Test3response2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test3response2.tStart = t;  // (not accounting for frame time here)
      Test3response2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Test3response2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Test3response2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Test3response2.clearEvents(); });
    }
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Test3response2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Test3response2.tStop = t;  // not accounting for scr refresh
      Test3response2.frameNStop = frameN;  // exact frame index
      // update status
      Test3response2.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (Test3response2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        Test3response2.tStop = t;  // not accounting for scr refresh
        Test3response2.frameNStop = frameN;  // exact frame index
        // update status
        Test3response2.status = PsychoJS.Status.FINISHED;
        Test3response2.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if Test3response2 is active this frame...
      if (Test3response2.status === PsychoJS.Status.STARTED) {
        let theseKeys = Test3response2.getKeys({
          keyList: typeof ['1','2'] === 'string' ? [['1','2']] : ['1','2'], 
          waitRelease: false
        });
        _Test3response2_allKeys = _Test3response2_allKeys.concat(theseKeys);
        if (_Test3response2_allKeys.length > 0) {
          Test3response2.keys = _Test3response2_allKeys[_Test3response2_allKeys.length - 1].name;  // just the last key pressed
          Test3response2.rt = _Test3response2_allKeys[_Test3response2_allKeys.length - 1].rt;
          Test3response2.duration = _Test3response2_allKeys[_Test3response2_allKeys.length - 1].duration;
          // was this correct?
          if (Test3response2.keys == CorrResp) {
              Test3response2.corr = 1;
          } else {
              Test3response2.corr = 0;
          }
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // Run 'Each Frame' code from code_13
      var _pj;
      function _pj_snippets(container) {
          function in_es6(left, right) {
              if (((right instanceof Array) || ((typeof right) === "string"))) {
                  return (right.indexOf(left) > (- 1));
              } else {
                  if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                      return right.has(left);
                  } else {
                      return (left in right);
                  }
              }
          }
          container["in_es6"] = in_es6;
          return container;
      }
      _pj = {};
      _pj_snippets(_pj);
      respbox_y = 0;
      keys = psychoJS.eventManager.getKeys();
      if (_pj.in_es6("1", keys)) {
          respbox_y = 0.05;
          fbkimage_y = 0.05;
      } else {
          if (_pj.in_es6("2", keys)) {
              respbox_y = (- 0.1);
              fbkimage_y = (- 0.1);
          }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of practice_startComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var box_color;
var fbkimagefile;
var errormsg;
function practice_startRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'practice_start' ---
      for (const thisComponent of practice_startComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('practice_start.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (Test3response2.keys === undefined) {
        if (['None','none',undefined].includes(CorrResp)) {
           Test3response2.corr = 1;  // correct non-response
        } else {
           Test3response2.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(Test3response2.corr, level);
      }
      psychoJS.experiment.addData('Test3response2.keys', Test3response2.keys);
      psychoJS.experiment.addData('Test3response2.corr', Test3response2.corr);
      if (typeof Test3response2.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('Test3response2.rt', Test3response2.rt);
          psychoJS.experiment.addData('Test3response2.duration', Test3response2.duration);
          routineTimer.reset();
          }
      
      Test3response2.stop();
      // Run 'End Routine' code from code_13
      if ((Test3response2.corr === 1)) {
          box_color = "green";
          fbkimagefile = "checkmark.png";
      } else {
          if ((Test3response2.corr === 0)) {
              fbkimagefile = "X_mark.png";
              box_color = "red";
          }
      }
      y = 0;
      errormsg = "";
      if (Test3response2.rt) {
          y = (4 - Test3response2.rt);
      } else {
          fbkimagefile = "X_mark.png";
          errormsg = "please respond faster";
          respbox_y = 4;
          fbkimage_y = 0;
          y = 1;
      }
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (practice_startMaxDurationReached) {
          practice_startClock.add(practice_startMaxDuration);
      } else {
          practice_startClock.add(4.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var practice_highlightMaxDurationReached;
var practice_highlightMaxDuration;
var practice_highlightComponents;
function practice_highlightRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'practice_highlight' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      practice_highlightClock.reset();
      routineTimer.reset();
      practice_highlightMaxDurationReached = false;
      // update component parameters for each repeat
      polygon.setPos([(- 0.05), respbox_y]);
      text_37.setText(targetword);
      text_39.setText(topside);
      text_44.setText(botside);
      psychoJS.experiment.addData('practice_highlight.started', globalClock.getTime());
      practice_highlightMaxDuration = null
      // keep track of which components have finished
      practice_highlightComponents = [];
      practice_highlightComponents.push(polygon);
      practice_highlightComponents.push(text_37);
      practice_highlightComponents.push(text_39);
      practice_highlightComponents.push(text_44);
      practice_highlightComponents.push(text_a_8);
      practice_highlightComponents.push(text_b_8);
      
      for (const thisComponent of practice_highlightComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function practice_highlightRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'practice_highlight' ---
      // get current time
      t = practice_highlightClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *polygon* updates
      if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        polygon.tStart = t;  // (not accounting for frame time here)
        polygon.frameNStart = frameN;  // exact frame index
        
        polygon.setAutoDraw(true);
      }
      
      
      // if polygon is active this frame...
      if (polygon.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        polygon.tStop = t;  // not accounting for scr refresh
        polygon.frameNStop = frameN;  // exact frame index
        // update status
        polygon.status = PsychoJS.Status.FINISHED;
        polygon.setAutoDraw(false);
      }
      
      
      // *text_37* updates
      if (t >= 0.0 && text_37.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_37.tStart = t;  // (not accounting for frame time here)
        text_37.frameNStart = frameN;  // exact frame index
        
        text_37.setAutoDraw(true);
      }
      
      
      // if text_37 is active this frame...
      if (text_37.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_37.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_37.tStop = t;  // not accounting for scr refresh
        text_37.frameNStop = frameN;  // exact frame index
        // update status
        text_37.status = PsychoJS.Status.FINISHED;
        text_37.setAutoDraw(false);
      }
      
      
      // *text_39* updates
      if (t >= 0.0 && text_39.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_39.tStart = t;  // (not accounting for frame time here)
        text_39.frameNStart = frameN;  // exact frame index
        
        text_39.setAutoDraw(true);
      }
      
      
      // if text_39 is active this frame...
      if (text_39.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_39.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_39.tStop = t;  // not accounting for scr refresh
        text_39.frameNStop = frameN;  // exact frame index
        // update status
        text_39.status = PsychoJS.Status.FINISHED;
        text_39.setAutoDraw(false);
      }
      
      
      // *text_44* updates
      if (t >= 0.0 && text_44.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_44.tStart = t;  // (not accounting for frame time here)
        text_44.frameNStart = frameN;  // exact frame index
        
        text_44.setAutoDraw(true);
      }
      
      
      // if text_44 is active this frame...
      if (text_44.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_44.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_44.tStop = t;  // not accounting for scr refresh
        text_44.frameNStop = frameN;  // exact frame index
        // update status
        text_44.status = PsychoJS.Status.FINISHED;
        text_44.setAutoDraw(false);
      }
      
      
      // *text_a_8* updates
      if (t >= 0.0 && text_a_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_a_8.tStart = t;  // (not accounting for frame time here)
        text_a_8.frameNStart = frameN;  // exact frame index
        
        text_a_8.setAutoDraw(true);
      }
      
      
      // if text_a_8 is active this frame...
      if (text_a_8.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_a_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_a_8.tStop = t;  // not accounting for scr refresh
        text_a_8.frameNStop = frameN;  // exact frame index
        // update status
        text_a_8.status = PsychoJS.Status.FINISHED;
        text_a_8.setAutoDraw(false);
      }
      
      
      // *text_b_8* updates
      if (t >= 0.0 && text_b_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_b_8.tStart = t;  // (not accounting for frame time here)
        text_b_8.frameNStart = frameN;  // exact frame index
        
        text_b_8.setAutoDraw(true);
      }
      
      
      // if text_b_8 is active this frame...
      if (text_b_8.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_b_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_b_8.tStop = t;  // not accounting for scr refresh
        text_b_8.frameNStop = frameN;  // exact frame index
        // update status
        text_b_8.status = PsychoJS.Status.FINISHED;
        text_b_8.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of practice_highlightComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function practice_highlightRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'practice_highlight' ---
      for (const thisComponent of practice_highlightComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('practice_highlight.stopped', globalClock.getTime());
      // the Routine "practice_highlight" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var conf_practMaxDurationReached;
var _confresp_7_allKeys;
var conf_practMaxDuration;
var conf_practComponents;
function conf_practRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'conf_pract' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      conf_practClock.reset();
      routineTimer.reset();
      conf_practMaxDurationReached = false;
      // update component parameters for each repeat
      confresp_7.keys = undefined;
      confresp_7.rt = undefined;
      _confresp_7_allKeys = [];
      text_69.setText('Press a key');
      psychoJS.experiment.addData('conf_pract.started', globalClock.getTime());
      conf_practMaxDuration = null
      // keep track of which components have finished
      conf_practComponents = [];
      conf_practComponents.push(text_97);
      conf_practComponents.push(text_98);
      conf_practComponents.push(text_99);
      conf_practComponents.push(confscale_numbers_6);
      conf_practComponents.push(confresp_7);
      conf_practComponents.push(text_69);
      
      for (const thisComponent of conf_practComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function conf_practRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'conf_pract' ---
      // get current time
      t = conf_practClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_97* updates
      if (t >= 0.0 && text_97.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_97.tStart = t;  // (not accounting for frame time here)
        text_97.frameNStart = frameN;  // exact frame index
        
        text_97.setAutoDraw(true);
      }
      
      
      // if text_97 is active this frame...
      if (text_97.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_98* updates
      if (t >= 0.0 && text_98.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_98.tStart = t;  // (not accounting for frame time here)
        text_98.frameNStart = frameN;  // exact frame index
        
        text_98.setAutoDraw(true);
      }
      
      
      // if text_98 is active this frame...
      if (text_98.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_99* updates
      if (t >= 0.0 && text_99.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_99.tStart = t;  // (not accounting for frame time here)
        text_99.frameNStart = frameN;  // exact frame index
        
        text_99.setAutoDraw(true);
      }
      
      
      // if text_99 is active this frame...
      if (text_99.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *confscale_numbers_6* updates
      if (t >= 0.0 && confscale_numbers_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        confscale_numbers_6.tStart = t;  // (not accounting for frame time here)
        confscale_numbers_6.frameNStart = frameN;  // exact frame index
        
        confscale_numbers_6.setAutoDraw(true);
      }
      
      
      // if confscale_numbers_6 is active this frame...
      if (confscale_numbers_6.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *confresp_7* updates
      if (t >= 0.0 && confresp_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        confresp_7.tStart = t;  // (not accounting for frame time here)
        confresp_7.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { confresp_7.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { confresp_7.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { confresp_7.clearEvents(); });
      }
      
      // if confresp_7 is active this frame...
      if (confresp_7.status === PsychoJS.Status.STARTED) {
        let theseKeys = confresp_7.getKeys({
          keyList: typeof ['1','2','3','4','5','6','7'] === 'string' ? [['1','2','3','4','5','6','7']] : ['1','2','3','4','5','6','7'], 
          waitRelease: false
        });
        _confresp_7_allKeys = _confresp_7_allKeys.concat(theseKeys);
        if (_confresp_7_allKeys.length > 0) {
          confresp_7.keys = _confresp_7_allKeys[_confresp_7_allKeys.length - 1].name;  // just the last key pressed
          confresp_7.rt = _confresp_7_allKeys[_confresp_7_allKeys.length - 1].rt;
          confresp_7.duration = _confresp_7_allKeys[_confresp_7_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *text_69* updates
      if (t >= 3 && text_69.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_69.tStart = t;  // (not accounting for frame time here)
        text_69.frameNStart = frameN;  // exact frame index
        
        text_69.setAutoDraw(true);
      }
      
      
      // if text_69 is active this frame...
      if (text_69.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of conf_practComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function conf_practRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'conf_pract' ---
      for (const thisComponent of conf_practComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('conf_pract.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(confresp_7.corr, level);
      }
      psychoJS.experiment.addData('confresp_7.keys', confresp_7.keys);
      if (typeof confresp_7.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('confresp_7.rt', confresp_7.rt);
          psychoJS.experiment.addData('confresp_7.duration', confresp_7.duration);
          routineTimer.reset();
          }
      
      confresp_7.stop();
      // the Routine "conf_pract" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var practice_feedbackMaxDurationReached;
var practice_feedbackMaxDuration;
var practice_feedbackComponents;
function practice_feedbackRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'practice_feedback' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      practice_feedbackClock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      practice_feedbackMaxDurationReached = false;
      // update component parameters for each repeat
      polygon_10.setPos([(- 0.05), respbox_y]);
      polygon_10.setLineColor(new util.Color(box_color));
      text_34.setText(targetword);
      text_38.setText(topside);
      text_45.setText(botside);
      image.setPos([0.45, fbkimage_y]);
      image.setImage(fbkimagefile);
      text_47.setPos([0, 0.175]);
      text_47.setText(errormsg);
      psychoJS.experiment.addData('practice_feedback.started', globalClock.getTime());
      practice_feedbackMaxDuration = null
      // keep track of which components have finished
      practice_feedbackComponents = [];
      practice_feedbackComponents.push(polygon_10);
      practice_feedbackComponents.push(text_34);
      practice_feedbackComponents.push(text_38);
      practice_feedbackComponents.push(text_45);
      practice_feedbackComponents.push(image);
      practice_feedbackComponents.push(text_47);
      practice_feedbackComponents.push(text_b_9);
      practice_feedbackComponents.push(text_a_9);
      
      for (const thisComponent of practice_feedbackComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function practice_feedbackRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'practice_feedback' ---
      // get current time
      t = practice_feedbackClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *polygon_10* updates
      if (t >= 0.0 && polygon_10.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        polygon_10.tStart = t;  // (not accounting for frame time here)
        polygon_10.frameNStart = frameN;  // exact frame index
        
        polygon_10.setAutoDraw(true);
      }
      
      
      // if polygon_10 is active this frame...
      if (polygon_10.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (polygon_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        polygon_10.tStop = t;  // not accounting for scr refresh
        polygon_10.frameNStop = frameN;  // exact frame index
        // update status
        polygon_10.status = PsychoJS.Status.FINISHED;
        polygon_10.setAutoDraw(false);
      }
      
      
      // *text_34* updates
      if (t >= 0.0 && text_34.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_34.tStart = t;  // (not accounting for frame time here)
        text_34.frameNStart = frameN;  // exact frame index
        
        text_34.setAutoDraw(true);
      }
      
      
      // if text_34 is active this frame...
      if (text_34.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_34.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_34.tStop = t;  // not accounting for scr refresh
        text_34.frameNStop = frameN;  // exact frame index
        // update status
        text_34.status = PsychoJS.Status.FINISHED;
        text_34.setAutoDraw(false);
      }
      
      
      // *text_38* updates
      if (t >= 0.0 && text_38.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_38.tStart = t;  // (not accounting for frame time here)
        text_38.frameNStart = frameN;  // exact frame index
        
        text_38.setAutoDraw(true);
      }
      
      
      // if text_38 is active this frame...
      if (text_38.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_38.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_38.tStop = t;  // not accounting for scr refresh
        text_38.frameNStop = frameN;  // exact frame index
        // update status
        text_38.status = PsychoJS.Status.FINISHED;
        text_38.setAutoDraw(false);
      }
      
      
      // *text_45* updates
      if (t >= 0.0 && text_45.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_45.tStart = t;  // (not accounting for frame time here)
        text_45.frameNStart = frameN;  // exact frame index
        
        text_45.setAutoDraw(true);
      }
      
      
      // if text_45 is active this frame...
      if (text_45.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_45.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_45.tStop = t;  // not accounting for scr refresh
        text_45.frameNStop = frameN;  // exact frame index
        // update status
        text_45.status = PsychoJS.Status.FINISHED;
        text_45.setAutoDraw(false);
      }
      
      
      // *image* updates
      if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image.tStart = t;  // (not accounting for frame time here)
        image.frameNStart = frameN;  // exact frame index
        
        image.setAutoDraw(true);
      }
      
      
      // if image is active this frame...
      if (image.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        image.tStop = t;  // not accounting for scr refresh
        image.frameNStop = frameN;  // exact frame index
        // update status
        image.status = PsychoJS.Status.FINISHED;
        image.setAutoDraw(false);
      }
      
      
      // *text_47* updates
      if (t >= 0.0 && text_47.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_47.tStart = t;  // (not accounting for frame time here)
        text_47.frameNStart = frameN;  // exact frame index
        
        text_47.setAutoDraw(true);
      }
      
      
      // if text_47 is active this frame...
      if (text_47.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_47.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_47.tStop = t;  // not accounting for scr refresh
        text_47.frameNStop = frameN;  // exact frame index
        // update status
        text_47.status = PsychoJS.Status.FINISHED;
        text_47.setAutoDraw(false);
      }
      
      
      // *text_b_9* updates
      if (t >= 0.0 && text_b_9.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_b_9.tStart = t;  // (not accounting for frame time here)
        text_b_9.frameNStart = frameN;  // exact frame index
        
        text_b_9.setAutoDraw(true);
      }
      
      
      // if text_b_9 is active this frame...
      if (text_b_9.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_b_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_b_9.tStop = t;  // not accounting for scr refresh
        text_b_9.frameNStop = frameN;  // exact frame index
        // update status
        text_b_9.status = PsychoJS.Status.FINISHED;
        text_b_9.setAutoDraw(false);
      }
      
      
      // *text_a_9* updates
      if (t >= 0.0 && text_a_9.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_a_9.tStart = t;  // (not accounting for frame time here)
        text_a_9.frameNStart = frameN;  // exact frame index
        
        text_a_9.setAutoDraw(true);
      }
      
      
      // if text_a_9 is active this frame...
      if (text_a_9.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_a_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_a_9.tStop = t;  // not accounting for scr refresh
        text_a_9.frameNStop = frameN;  // exact frame index
        // update status
        text_a_9.status = PsychoJS.Status.FINISHED;
        text_a_9.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of practice_feedbackComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function practice_feedbackRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'practice_feedback' ---
      for (const thisComponent of practice_feedbackComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('practice_feedback.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (practice_feedbackMaxDurationReached) {
          practice_feedbackClock.add(practice_feedbackMaxDuration);
      } else {
          practice_feedbackClock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var repeat_instructionsMaxDurationReached;
var practice_round;
var eachResp;
var _key_resp_8_allKeys;
var repeat_instructionsMaxDuration;
var repeat_instructionsComponents;
function repeat_instructionsRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'repeat_instructions' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      repeat_instructionsClock.reset();
      routineTimer.reset();
      repeat_instructionsMaxDurationReached = false;
      // update component parameters for each repeat
      console.log(nCorr)
      practice_round = practice_round + 1;
      eachResp = 0;
      console.log(nCorr)
      console.log(nCorr2)
      console.log(nCorr3)
      
      
      
      if (practice_round === 1) {
        for (eachResp=0; eachResp<psychoJS.experiment._trialsData.length; eachResp++){
          if ('Test3response2.corr' in psychoJS.experiment._trialsData[eachResp]) {
          nCorr += psychoJS.experiment._trialsData[eachResp]['Test3response2.corr'];
          }
        }
      }else if (practice_round === 2) {
        for (eachResp=0; eachResp<psychoJS.experiment._trialsData.length; eachResp++){
          if ('Test3response2.corr' in psychoJS.experiment._trialsData[eachResp]) {
          nCorr2 += psychoJS.experiment._trialsData[eachResp]['Test3response2.corr'];
          }
        }
          nCorr2 = nCorr2 - nCorr;
      } else{
        for (eachResp=0; eachResp<psychoJS.experiment._trialsData.length; eachResp++){
          if ('Test3response2.corr' in psychoJS.experiment._trialsData[eachResp]) {
          nCorr3 += psychoJS.experiment._trialsData[eachResp]['Test3response2.corr'];
          }
        }
          nCorr3 = nCorr3 - (nCorr + nCorr2);
      }
      
      if (practice_round === 1) {
      if (nCorr > 2) {
          trials_7.finished = true;
          } 
      } else if (practice_round === 2) {
          if (nCorr2 > 2) {
          trials_7.finished = true;
          } 
          } else { 
              trials_7.finished = false;
              }
      key_resp_8.keys = undefined;
      key_resp_8.rt = undefined;
      _key_resp_8_allKeys = [];
      psychoJS.experiment.addData('repeat_instructions.started', globalClock.getTime());
      repeat_instructionsMaxDuration = null
      // keep track of which components have finished
      repeat_instructionsComponents = [];
      repeat_instructionsComponents.push(text_11);
      repeat_instructionsComponents.push(key_resp_8);
      
      for (const thisComponent of repeat_instructionsComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function repeat_instructionsRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'repeat_instructions' ---
      // get current time
      t = repeat_instructionsClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_11* updates
      if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_11.tStart = t;  // (not accounting for frame time here)
        text_11.frameNStart = frameN;  // exact frame index
        
        text_11.setAutoDraw(true);
      }
      
      
      // if text_11 is active this frame...
      if (text_11.status === PsychoJS.Status.STARTED) {
      }
      
      console.log(practice_round)
      console.log(nCorr)
      console.log(nCorr2)
      console.log(nCorr3)
      
      
      if (practice_round === 1) {
      if (nCorr > 2) {
          console.log("true")
          continueRoutine = false; // until we're told otherwise
          } else {
              console.log("false")
              continueRoutine = true;
              }
          }
      
      if (practice_round === 2) {
      if (nCorr2 > 2) {
          console.log("true")
          continueRoutine = false; // until we're told otherwise
          } else {
              console.log("false")
              continueRoutine = true;
              }
          }
      
      if (practice_round === 3) {
      if (nCorr3 > 2) {
          console.log("true")
          continueRoutine = false; // until we're told otherwise
          } else {
              console.log("false")
              continueRoutine = true;
              }
          }
      
      
      // *key_resp_8* updates
      if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_8.tStart = t;  // (not accounting for frame time here)
        key_resp_8.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
      }
      
      // if key_resp_8 is active this frame...
      if (key_resp_8.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_8.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
        if (_key_resp_8_allKeys.length > 0) {
          key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
          key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
          key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of repeat_instructionsComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function repeat_instructionsRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'repeat_instructions' ---
      for (const thisComponent of repeat_instructionsComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('repeat_instructions.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_8.corr, level);
      }
      psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
      if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
          psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
          routineTimer.reset();
          }
      
      key_resp_8.stop();
      // the Routine "repeat_instructions" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var end_practiceMaxDurationReached;
var _contpart2_2_allKeys;
var end_practiceMaxDuration;
var end_practiceComponents;
function end_practiceRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'end_practice' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      end_practiceClock.reset();
      routineTimer.reset();
      end_practiceMaxDurationReached = false;
      // update component parameters for each repeat
      contpart2_2.keys = undefined;
      contpart2_2.rt = undefined;
      _contpart2_2_allKeys = [];
      psychoJS.experiment.addData('end_practice.started', globalClock.getTime());
      end_practiceMaxDuration = null
      // keep track of which components have finished
      end_practiceComponents = [];
      end_practiceComponents.push(text_64);
      end_practiceComponents.push(contpart2_2);
      
      for (const thisComponent of end_practiceComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function end_practiceRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'end_practice' ---
      // get current time
      t = end_practiceClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_64* updates
      if (t >= 0.0 && text_64.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_64.tStart = t;  // (not accounting for frame time here)
        text_64.frameNStart = frameN;  // exact frame index
        
        text_64.setAutoDraw(true);
      }
      
      
      // if text_64 is active this frame...
      if (text_64.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *contpart2_2* updates
      if (t >= 0.0 && contpart2_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        contpart2_2.tStart = t;  // (not accounting for frame time here)
        contpart2_2.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { contpart2_2.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { contpart2_2.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { contpart2_2.clearEvents(); });
      }
      
      // if contpart2_2 is active this frame...
      if (contpart2_2.status === PsychoJS.Status.STARTED) {
        let theseKeys = contpart2_2.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _contpart2_2_allKeys = _contpart2_2_allKeys.concat(theseKeys);
        if (_contpart2_2_allKeys.length > 0) {
          contpart2_2.keys = _contpart2_2_allKeys[_contpart2_2_allKeys.length - 1].name;  // just the last key pressed
          contpart2_2.rt = _contpart2_2_allKeys[_contpart2_2_allKeys.length - 1].rt;
          contpart2_2.duration = _contpart2_2_allKeys[_contpart2_2_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of end_practiceComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function end_practiceRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'end_practice' ---
      for (const thisComponent of end_practiceComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('end_practice.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(contpart2_2.corr, level);
      }
      psychoJS.experiment.addData('contpart2_2.keys', contpart2_2.keys);
      if (typeof contpart2_2.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('contpart2_2.rt', contpart2_2.rt);
          psychoJS.experiment.addData('contpart2_2.duration', contpart2_2.duration);
          routineTimer.reset();
          }
      
      contpart2_2.stop();
      // the Routine "end_practice" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var welcome_1MaxDurationReached;
var _key_resp_2_allKeys;
var welcome_1MaxDuration;
var welcome_1Components;
function welcome_1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'welcome_1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      welcome_1Clock.reset();
      routineTimer.reset();
      welcome_1MaxDurationReached = false;
      // update component parameters for each repeat
      welcometo.setText('Welcome to the main experiment!\n\n\n');
      blocks12.setText('1) You are about to complete 12 blocks of math multiplication problems with varying levels of difficulty (e.g. easy, medium, and hard).\n\n\n');
      key_resp_2.keys = undefined;
      key_resp_2.rt = undefined;
      _key_resp_2_allKeys = [];
      psychoJS.experiment.addData('welcome_1.started', globalClock.getTime());
      welcome_1MaxDuration = null
      // keep track of which components have finished
      welcome_1Components = [];
      welcome_1Components.push(presst);
      welcome_1Components.push(welcometo);
      welcome_1Components.push(blocks12);
      welcome_1Components.push(key_resp_2);
      
      for (const thisComponent of welcome_1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function welcome_1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'welcome_1' ---
      // get current time
      t = welcome_1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *presst* updates
      if (t >= 0.0 && presst.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        presst.tStart = t;  // (not accounting for frame time here)
        presst.frameNStart = frameN;  // exact frame index
        
        presst.setAutoDraw(true);
      }
      
      
      // if presst is active this frame...
      if (presst.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *welcometo* updates
      if (t >= 0.0 && welcometo.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        welcometo.tStart = t;  // (not accounting for frame time here)
        welcometo.frameNStart = frameN;  // exact frame index
        
        welcometo.setAutoDraw(true);
      }
      
      
      // if welcometo is active this frame...
      if (welcometo.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *blocks12* updates
      if (t >= 0.0 && blocks12.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        blocks12.tStart = t;  // (not accounting for frame time here)
        blocks12.frameNStart = frameN;  // exact frame index
        
        blocks12.setAutoDraw(true);
      }
      
      
      // if blocks12 is active this frame...
      if (blocks12.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_2* updates
      if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_2.tStart = t;  // (not accounting for frame time here)
        key_resp_2.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
      }
      
      // if key_resp_2 is active this frame...
      if (key_resp_2.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_2.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
        if (_key_resp_2_allKeys.length > 0) {
          key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
          key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
          key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of welcome_1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function welcome_1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'welcome_1' ---
      for (const thisComponent of welcome_1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('welcome_1.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_2.corr, level);
      }
      psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
      if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
          psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
          routineTimer.reset();
          }
      
      key_resp_2.stop();
      // the Routine "welcome_1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var welcome_2MaxDurationReached;
var _key_resp_9_allKeys;
var welcome_2MaxDuration;
var welcome_2Components;
function welcome_2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'welcome_2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      welcome_2Clock.reset();
      routineTimer.reset();
      welcome_2MaxDurationReached = false;
      // update component parameters for each repeat
      welcometo_3.setText('Welcome to the main experiment!\n\n\n');
      key_resp_9.keys = undefined;
      key_resp_9.rt = undefined;
      _key_resp_9_allKeys = [];
      blocks12_2.setText('1) You are about to complete 12 blocks of math multiplication problems with varying levels of difficulty (e.g. easy, medium, and hard).\n\n\n');
      trials10.setText('2) There are 10 multiplication problems per block. You will have 4 seconds to complete each multiplication problem. Some blocks will have feedback, while others will not. ');
      psychoJS.experiment.addData('welcome_2.started', globalClock.getTime());
      welcome_2MaxDuration = null
      // keep track of which components have finished
      welcome_2Components = [];
      welcome_2Components.push(welcometo_3);
      welcome_2Components.push(key_resp_9);
      welcome_2Components.push(presst_3);
      welcome_2Components.push(blocks12_2);
      welcome_2Components.push(trials10);
      
      for (const thisComponent of welcome_2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function welcome_2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'welcome_2' ---
      // get current time
      t = welcome_2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *welcometo_3* updates
      if (t >= 0.0 && welcometo_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        welcometo_3.tStart = t;  // (not accounting for frame time here)
        welcometo_3.frameNStart = frameN;  // exact frame index
        
        welcometo_3.setAutoDraw(true);
      }
      
      
      // if welcometo_3 is active this frame...
      if (welcometo_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_9* updates
      if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_9.tStart = t;  // (not accounting for frame time here)
        key_resp_9.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
      }
      
      // if key_resp_9 is active this frame...
      if (key_resp_9.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_9.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
        if (_key_resp_9_allKeys.length > 0) {
          key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
          key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
          key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *presst_3* updates
      if (t >= 0.0 && presst_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        presst_3.tStart = t;  // (not accounting for frame time here)
        presst_3.frameNStart = frameN;  // exact frame index
        
        presst_3.setAutoDraw(true);
      }
      
      
      // if presst_3 is active this frame...
      if (presst_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *blocks12_2* updates
      if (t >= 0.0 && blocks12_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        blocks12_2.tStart = t;  // (not accounting for frame time here)
        blocks12_2.frameNStart = frameN;  // exact frame index
        
        blocks12_2.setAutoDraw(true);
      }
      
      
      // if blocks12_2 is active this frame...
      if (blocks12_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *trials10* updates
      if (t >= 0.0 && trials10.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        trials10.tStart = t;  // (not accounting for frame time here)
        trials10.frameNStart = frameN;  // exact frame index
        
        trials10.setAutoDraw(true);
      }
      
      
      // if trials10 is active this frame...
      if (trials10.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of welcome_2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function welcome_2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'welcome_2' ---
      for (const thisComponent of welcome_2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('welcome_2.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_9.corr, level);
      }
      psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
      if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
          psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
          routineTimer.reset();
          }
      
      key_resp_9.stop();
      // the Routine "welcome_2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var welcome_3MaxDurationReached;
var _key_resp_16_allKeys;
var welcome_3MaxDuration;
var welcome_3Components;
function welcome_3RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'welcome_3' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      welcome_3Clock.reset();
      routineTimer.reset();
      welcome_3MaxDurationReached = false;
      // update component parameters for each repeat
      welcometo_4.setText('Welcome to the main experiment!\n\n\n');
      key_resp_16.keys = undefined;
      key_resp_16.rt = undefined;
      _key_resp_16_allKeys = [];
      blocks12_3.setText('1) You are about to complete 12 blocks of math multiplication problems with varying levels of difficulty (e.g. easy, medium, and hard).\n\n\n');
      trials10_2.setText('2) There are 10 multiplication problems per block. You will have 4 seconds to complete each multiplication problem. Some blocks will have feedback, while others will not. ');
      confidence.setText('3) After each problem, you will rate your confidence using a key press, from 1 (low) to 7 (high). ');
      psychoJS.experiment.addData('welcome_3.started', globalClock.getTime());
      welcome_3MaxDuration = null
      // keep track of which components have finished
      welcome_3Components = [];
      welcome_3Components.push(welcometo_4);
      welcome_3Components.push(key_resp_16);
      welcome_3Components.push(presst_4);
      welcome_3Components.push(blocks12_3);
      welcome_3Components.push(trials10_2);
      welcome_3Components.push(confidence);
      
      for (const thisComponent of welcome_3Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function welcome_3RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'welcome_3' ---
      // get current time
      t = welcome_3Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *welcometo_4* updates
      if (t >= 0.0 && welcometo_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        welcometo_4.tStart = t;  // (not accounting for frame time here)
        welcometo_4.frameNStart = frameN;  // exact frame index
        
        welcometo_4.setAutoDraw(true);
      }
      
      
      // if welcometo_4 is active this frame...
      if (welcometo_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_16* updates
      if (t >= 0.0 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_16.tStart = t;  // (not accounting for frame time here)
        key_resp_16.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
      }
      
      // if key_resp_16 is active this frame...
      if (key_resp_16.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_16.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
        if (_key_resp_16_allKeys.length > 0) {
          key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
          key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
          key_resp_16.duration = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *presst_4* updates
      if (t >= 0.0 && presst_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        presst_4.tStart = t;  // (not accounting for frame time here)
        presst_4.frameNStart = frameN;  // exact frame index
        
        presst_4.setAutoDraw(true);
      }
      
      
      // if presst_4 is active this frame...
      if (presst_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *blocks12_3* updates
      if (t >= 0.0 && blocks12_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        blocks12_3.tStart = t;  // (not accounting for frame time here)
        blocks12_3.frameNStart = frameN;  // exact frame index
        
        blocks12_3.setAutoDraw(true);
      }
      
      
      // if blocks12_3 is active this frame...
      if (blocks12_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *trials10_2* updates
      if (t >= 0.0 && trials10_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        trials10_2.tStart = t;  // (not accounting for frame time here)
        trials10_2.frameNStart = frameN;  // exact frame index
        
        trials10_2.setAutoDraw(true);
      }
      
      
      // if trials10_2 is active this frame...
      if (trials10_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *confidence* updates
      if (t >= 0.0 && confidence.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        confidence.tStart = t;  // (not accounting for frame time here)
        confidence.frameNStart = frameN;  // exact frame index
        
        confidence.setAutoDraw(true);
      }
      
      
      // if confidence is active this frame...
      if (confidence.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of welcome_3Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function welcome_3RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'welcome_3' ---
      for (const thisComponent of welcome_3Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('welcome_3.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_16.corr, level);
      }
      psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
      if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
          psychoJS.experiment.addData('key_resp_16.duration', key_resp_16.duration);
          routineTimer.reset();
          }
      
      key_resp_16.stop();
      // the Routine "welcome_3" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var welcome_4MaxDurationReached;
var _key_resp_18_allKeys;
var welcome_4MaxDuration;
var welcome_4Components;
function welcome_4RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'welcome_4' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      welcome_4Clock.reset();
      routineTimer.reset();
      welcome_4MaxDurationReached = false;
      // update component parameters for each repeat
      welcometo_5.setText('Welcome to the main experiment!\n\n\n');
      reflect.setText('4) At the end of each block, you will report how many times you correctly answered or guessed on a problem, as well as your levels of anxiety and motivation.\n');
      confidence_2.setText('3) After each problem, you will rate your confidence using a key press, from 1 (low) to 7 (high). ');
      blocks12_4.setText('1) You are about to complete 12 blocks of math multiplication problems with varying levels of difficulty (e.g. easy, medium, and hard).\n\n\n');
      key_resp_18.keys = undefined;
      key_resp_18.rt = undefined;
      _key_resp_18_allKeys = [];
      trials10_3.setText('2) There are 10 multiplication problems per block. You will have 4 seconds to complete each multiplication problem. Some blocks will have feedback, while others will not. ');
      psychoJS.experiment.addData('welcome_4.started', globalClock.getTime());
      welcome_4MaxDuration = null
      // keep track of which components have finished
      welcome_4Components = [];
      welcome_4Components.push(welcometo_5);
      welcome_4Components.push(reflect);
      welcome_4Components.push(confidence_2);
      welcome_4Components.push(blocks12_4);
      welcome_4Components.push(pressp);
      welcome_4Components.push(key_resp_18);
      welcome_4Components.push(trials10_3);
      
      for (const thisComponent of welcome_4Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function welcome_4RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'welcome_4' ---
      // get current time
      t = welcome_4Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *welcometo_5* updates
      if (t >= 0.0 && welcometo_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        welcometo_5.tStart = t;  // (not accounting for frame time here)
        welcometo_5.frameNStart = frameN;  // exact frame index
        
        welcometo_5.setAutoDraw(true);
      }
      
      
      // if welcometo_5 is active this frame...
      if (welcometo_5.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *reflect* updates
      if (t >= 0.0 && reflect.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        reflect.tStart = t;  // (not accounting for frame time here)
        reflect.frameNStart = frameN;  // exact frame index
        
        reflect.setAutoDraw(true);
      }
      
      
      // if reflect is active this frame...
      if (reflect.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *confidence_2* updates
      if (t >= 0.0 && confidence_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        confidence_2.tStart = t;  // (not accounting for frame time here)
        confidence_2.frameNStart = frameN;  // exact frame index
        
        confidence_2.setAutoDraw(true);
      }
      
      
      // if confidence_2 is active this frame...
      if (confidence_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *blocks12_4* updates
      if (t >= 0.0 && blocks12_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        blocks12_4.tStart = t;  // (not accounting for frame time here)
        blocks12_4.frameNStart = frameN;  // exact frame index
        
        blocks12_4.setAutoDraw(true);
      }
      
      
      // if blocks12_4 is active this frame...
      if (blocks12_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *pressp* updates
      if (t >= 0.0 && pressp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        pressp.tStart = t;  // (not accounting for frame time here)
        pressp.frameNStart = frameN;  // exact frame index
        
        pressp.setAutoDraw(true);
      }
      
      
      // if pressp is active this frame...
      if (pressp.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_18* updates
      if (t >= 0.0 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_18.tStart = t;  // (not accounting for frame time here)
        key_resp_18.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
      }
      
      // if key_resp_18 is active this frame...
      if (key_resp_18.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_18.getKeys({
          keyList: typeof 'p' === 'string' ? ['p'] : 'p', 
          waitRelease: false
        });
        _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
        if (_key_resp_18_allKeys.length > 0) {
          key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
          key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
          key_resp_18.duration = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *trials10_3* updates
      if (t >= 0.0 && trials10_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        trials10_3.tStart = t;  // (not accounting for frame time here)
        trials10_3.frameNStart = frameN;  // exact frame index
        
        trials10_3.setAutoDraw(true);
      }
      
      
      // if trials10_3 is active this frame...
      if (trials10_3.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of welcome_4Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function welcome_4RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'welcome_4' ---
      for (const thisComponent of welcome_4Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('welcome_4.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_18.corr, level);
      }
      psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
      if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
          psychoJS.experiment.addData('key_resp_18.duration', key_resp_18.duration);
          routineTimer.reset();
          }
      
      key_resp_18.stop();
      // the Routine "welcome_4" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var welcomeMaxDurationReached;
var _key_resp_11_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'welcome' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      welcomeClock.reset();
      routineTimer.reset();
      welcomeMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_11.keys = undefined;
      key_resp_11.rt = undefined;
      _key_resp_11_allKeys = [];
      Exampleproblems.setText('Example Problems:');
      psychoJS.experiment.addData('welcome.started', globalClock.getTime());
      welcomeMaxDuration = null
      // keep track of which components have finished
      welcomeComponents = [];
      welcomeComponents.push(key_resp_11);
      welcomeComponents.push(presst_t);
      welcomeComponents.push(pointa);
      welcomeComponents.push(Exampleproblems);
      
      for (const thisComponent of welcomeComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function welcomeRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'welcome' ---
      // get current time
      t = welcomeClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *key_resp_11* updates
      if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_11.tStart = t;  // (not accounting for frame time here)
        key_resp_11.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
      }
      
      // if key_resp_11 is active this frame...
      if (key_resp_11.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_11.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
        if (_key_resp_11_allKeys.length > 0) {
          key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
          key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
          key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *presst_t* updates
      if (t >= 0.0 && presst_t.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        presst_t.tStart = t;  // (not accounting for frame time here)
        presst_t.frameNStart = frameN;  // exact frame index
        
        presst_t.setAutoDraw(true);
      }
      
      
      // if presst_t is active this frame...
      if (presst_t.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *pointa* updates
      if (t >= 0.0 && pointa.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        pointa.tStart = t;  // (not accounting for frame time here)
        pointa.frameNStart = frameN;  // exact frame index
        
        pointa.setAutoDraw(true);
      }
      
      
      // if pointa is active this frame...
      if (pointa.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *Exampleproblems* updates
      if (t >= 0.0 && Exampleproblems.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        Exampleproblems.tStart = t;  // (not accounting for frame time here)
        Exampleproblems.frameNStart = frameN;  // exact frame index
        
        Exampleproblems.setAutoDraw(true);
      }
      
      
      // if Exampleproblems is active this frame...
      if (Exampleproblems.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of welcomeComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function welcomeRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'welcome' ---
      for (const thisComponent of welcomeComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_11.corr, level);
      }
      psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
      if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
          psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
          routineTimer.reset();
          }
      
      key_resp_11.stop();
      // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var welcome2MaxDurationReached;
var _key_resp_12_allKeys;
var welcome2MaxDuration;
var welcome2Components;
function welcome2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'welcome2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      welcome2Clock.reset();
      routineTimer.reset();
      welcome2MaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_12.keys = undefined;
      key_resp_12.rt = undefined;
      _key_resp_12_allKeys = [];
      Exampleproblems_2.setText('Example Problems:');
      psychoJS.experiment.addData('welcome2.started', globalClock.getTime());
      welcome2MaxDuration = null
      // keep track of which components have finished
      welcome2Components = [];
      welcome2Components.push(press_t);
      welcome2Components.push(key_resp_12);
      welcome2Components.push(easy);
      welcome2Components.push(pointa_2);
      welcome2Components.push(Exampleproblems_2);
      
      for (const thisComponent of welcome2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function welcome2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'welcome2' ---
      // get current time
      t = welcome2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *press_t* updates
      if (t >= 0.0 && press_t.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        press_t.tStart = t;  // (not accounting for frame time here)
        press_t.frameNStart = frameN;  // exact frame index
        
        press_t.setAutoDraw(true);
      }
      
      
      // if press_t is active this frame...
      if (press_t.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_12* updates
      if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_12.tStart = t;  // (not accounting for frame time here)
        key_resp_12.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
      }
      
      // if key_resp_12 is active this frame...
      if (key_resp_12.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_12.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
        if (_key_resp_12_allKeys.length > 0) {
          key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
          key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
          key_resp_12.duration = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *easy* updates
      if (t >= 0.0 && easy.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        easy.tStart = t;  // (not accounting for frame time here)
        easy.frameNStart = frameN;  // exact frame index
        
        easy.setAutoDraw(true);
      }
      
      
      // if easy is active this frame...
      if (easy.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *pointa_2* updates
      if (t >= 0.0 && pointa_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        pointa_2.tStart = t;  // (not accounting for frame time here)
        pointa_2.frameNStart = frameN;  // exact frame index
        
        pointa_2.setAutoDraw(true);
      }
      
      
      // if pointa_2 is active this frame...
      if (pointa_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *Exampleproblems_2* updates
      if (t >= 0.0 && Exampleproblems_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        Exampleproblems_2.tStart = t;  // (not accounting for frame time here)
        Exampleproblems_2.frameNStart = frameN;  // exact frame index
        
        Exampleproblems_2.setAutoDraw(true);
      }
      
      
      // if Exampleproblems_2 is active this frame...
      if (Exampleproblems_2.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of welcome2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function welcome2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'welcome2' ---
      for (const thisComponent of welcome2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('welcome2.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_12.corr, level);
      }
      psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
      if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
          psychoJS.experiment.addData('key_resp_12.duration', key_resp_12.duration);
          routineTimer.reset();
          }
      
      key_resp_12.stop();
      // the Routine "welcome2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var welcome3MaxDurationReached;
var _key_resp_13_allKeys;
var welcome3MaxDuration;
var welcome3Components;
function welcome3RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'welcome3' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      welcome3Clock.reset();
      routineTimer.reset();
      welcome3MaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_13.keys = undefined;
      key_resp_13.rt = undefined;
      _key_resp_13_allKeys = [];
      Exampleproblems_3.setText('Example Problems:');
      psychoJS.experiment.addData('welcome3.started', globalClock.getTime());
      welcome3MaxDuration = null
      // keep track of which components have finished
      welcome3Components = [];
      welcome3Components.push(easy_2);
      welcome3Components.push(medium);
      welcome3Components.push(key_resp_13);
      welcome3Components.push(press_t_2);
      welcome3Components.push(pointa_3);
      welcome3Components.push(Exampleproblems_3);
      
      for (const thisComponent of welcome3Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function welcome3RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'welcome3' ---
      // get current time
      t = welcome3Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *easy_2* updates
      if (t >= 0.0 && easy_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        easy_2.tStart = t;  // (not accounting for frame time here)
        easy_2.frameNStart = frameN;  // exact frame index
        
        easy_2.setAutoDraw(true);
      }
      
      
      // if easy_2 is active this frame...
      if (easy_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *medium* updates
      if (t >= 0.0 && medium.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        medium.tStart = t;  // (not accounting for frame time here)
        medium.frameNStart = frameN;  // exact frame index
        
        medium.setAutoDraw(true);
      }
      
      
      // if medium is active this frame...
      if (medium.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_13* updates
      if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_13.tStart = t;  // (not accounting for frame time here)
        key_resp_13.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
      }
      
      // if key_resp_13 is active this frame...
      if (key_resp_13.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_13.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
        if (_key_resp_13_allKeys.length > 0) {
          key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
          key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
          key_resp_13.duration = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *press_t_2* updates
      if (t >= 0.0 && press_t_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        press_t_2.tStart = t;  // (not accounting for frame time here)
        press_t_2.frameNStart = frameN;  // exact frame index
        
        press_t_2.setAutoDraw(true);
      }
      
      
      // if press_t_2 is active this frame...
      if (press_t_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *pointa_3* updates
      if (t >= 0.0 && pointa_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        pointa_3.tStart = t;  // (not accounting for frame time here)
        pointa_3.frameNStart = frameN;  // exact frame index
        
        pointa_3.setAutoDraw(true);
      }
      
      
      // if pointa_3 is active this frame...
      if (pointa_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *Exampleproblems_3* updates
      if (t >= 0.0 && Exampleproblems_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        Exampleproblems_3.tStart = t;  // (not accounting for frame time here)
        Exampleproblems_3.frameNStart = frameN;  // exact frame index
        
        Exampleproblems_3.setAutoDraw(true);
      }
      
      
      // if Exampleproblems_3 is active this frame...
      if (Exampleproblems_3.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of welcome3Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function welcome3RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'welcome3' ---
      for (const thisComponent of welcome3Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('welcome3.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_13.corr, level);
      }
      psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
      if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
          psychoJS.experiment.addData('key_resp_13.duration', key_resp_13.duration);
          routineTimer.reset();
          }
      
      key_resp_13.stop();
      // the Routine "welcome3" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var welcome4MaxDurationReached;
var _key_resp_14_allKeys;
var welcome4MaxDuration;
var welcome4Components;
function welcome4RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'welcome4' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      welcome4Clock.reset();
      routineTimer.reset();
      welcome4MaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_14.keys = undefined;
      key_resp_14.rt = undefined;
      _key_resp_14_allKeys = [];
      Exampleproblems_4.setText('Example Problems:');
      psychoJS.experiment.addData('welcome4.started', globalClock.getTime());
      welcome4MaxDuration = null
      // keep track of which components have finished
      welcome4Components = [];
      welcome4Components.push(hard);
      welcome4Components.push(key_resp_14);
      welcome4Components.push(medium_2);
      welcome4Components.push(easy_3);
      welcome4Components.push(pointa_4);
      welcome4Components.push(Exampleproblems_4);
      welcome4Components.push(pressp_2);
      
      for (const thisComponent of welcome4Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function welcome4RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'welcome4' ---
      // get current time
      t = welcome4Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *hard* updates
      if (t >= 0.0 && hard.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        hard.tStart = t;  // (not accounting for frame time here)
        hard.frameNStart = frameN;  // exact frame index
        
        hard.setAutoDraw(true);
      }
      
      
      // if hard is active this frame...
      if (hard.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_14* updates
      if (t >= 0.0 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_14.tStart = t;  // (not accounting for frame time here)
        key_resp_14.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
      }
      
      // if key_resp_14 is active this frame...
      if (key_resp_14.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_14.getKeys({
          keyList: typeof 'p' === 'string' ? ['p'] : 'p', 
          waitRelease: false
        });
        _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
        if (_key_resp_14_allKeys.length > 0) {
          key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
          key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
          key_resp_14.duration = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *medium_2* updates
      if (t >= 0.0 && medium_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        medium_2.tStart = t;  // (not accounting for frame time here)
        medium_2.frameNStart = frameN;  // exact frame index
        
        medium_2.setAutoDraw(true);
      }
      
      
      // if medium_2 is active this frame...
      if (medium_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *easy_3* updates
      if (t >= 0.0 && easy_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        easy_3.tStart = t;  // (not accounting for frame time here)
        easy_3.frameNStart = frameN;  // exact frame index
        
        easy_3.setAutoDraw(true);
      }
      
      
      // if easy_3 is active this frame...
      if (easy_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *pointa_4* updates
      if (t >= 0.0 && pointa_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        pointa_4.tStart = t;  // (not accounting for frame time here)
        pointa_4.frameNStart = frameN;  // exact frame index
        
        pointa_4.setAutoDraw(true);
      }
      
      
      // if pointa_4 is active this frame...
      if (pointa_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *Exampleproblems_4* updates
      if (t >= 0.0 && Exampleproblems_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        Exampleproblems_4.tStart = t;  // (not accounting for frame time here)
        Exampleproblems_4.frameNStart = frameN;  // exact frame index
        
        Exampleproblems_4.setAutoDraw(true);
      }
      
      
      // if Exampleproblems_4 is active this frame...
      if (Exampleproblems_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *pressp_2* updates
      if (t >= 0.0 && pressp_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        pressp_2.tStart = t;  // (not accounting for frame time here)
        pressp_2.frameNStart = frameN;  // exact frame index
        
        pressp_2.setAutoDraw(true);
      }
      
      
      // if pressp_2 is active this frame...
      if (pressp_2.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of welcome4Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function welcome4RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'welcome4' ---
      for (const thisComponent of welcome4Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('welcome4.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_14.corr, level);
      }
      psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
      if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
          psychoJS.experiment.addData('key_resp_14.duration', key_resp_14.duration);
          routineTimer.reset();
          }
      
      key_resp_14.stop();
      // the Routine "welcome4" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var easy_baselineMaxDurationReached;
var easy_baselineMaxDuration;
var easy_baselineComponents;
function easy_baselineRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'easy_baseline' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      easy_baselineClock.reset();
      routineTimer.reset();
      easy_baselineMaxDurationReached = false;
      // update component parameters for each repeat
      percent_slider_easy.reset()
      psychoJS.experiment.addData('easy_baseline.started', globalClock.getTime());
      easy_baselineMaxDuration = null
      // keep track of which components have finished
      easy_baselineComponents = [];
      easy_baselineComponents.push(text_70);
      easy_baselineComponents.push(percent_slider_easy);
      easy_baselineComponents.push(easy_4);
      easy_baselineComponents.push(text_74);
      
      for (const thisComponent of easy_baselineComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function easy_baselineRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'easy_baseline' ---
      // get current time
      t = easy_baselineClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_70* updates
      if (t >= 0.0 && text_70.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_70.tStart = t;  // (not accounting for frame time here)
        text_70.frameNStart = frameN;  // exact frame index
        
        text_70.setAutoDraw(true);
      }
      
      
      // if text_70 is active this frame...
      if (text_70.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *percent_slider_easy* updates
      if (t >= 0.0 && percent_slider_easy.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        percent_slider_easy.tStart = t;  // (not accounting for frame time here)
        percent_slider_easy.frameNStart = frameN;  // exact frame index
        
        percent_slider_easy.setAutoDraw(true);
      }
      
      
      // if percent_slider_easy is active this frame...
      if (percent_slider_easy.status === PsychoJS.Status.STARTED) {
      }
      
      
      // Check percent_slider_easy for response to end Routine
      if (percent_slider_easy.getRating() !== undefined && percent_slider_easy.status === PsychoJS.Status.STARTED) {
        continueRoutine = false; }
      
      // *easy_4* updates
      if (t >= 0.0 && easy_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        easy_4.tStart = t;  // (not accounting for frame time here)
        easy_4.frameNStart = frameN;  // exact frame index
        
        easy_4.setAutoDraw(true);
      }
      
      
      // if easy_4 is active this frame...
      if (easy_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_74* updates
      if (t >= 10 && text_74.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_74.tStart = t;  // (not accounting for frame time here)
        text_74.frameNStart = frameN;  // exact frame index
        
        text_74.setAutoDraw(true);
      }
      
      
      // if text_74 is active this frame...
      if (text_74.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of easy_baselineComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function easy_baselineRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'easy_baseline' ---
      for (const thisComponent of easy_baselineComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('easy_baseline.stopped', globalClock.getTime());
      psychoJS.experiment.addData('percent_slider_easy.response', percent_slider_easy.getRating());
      psychoJS.experiment.addData('percent_slider_easy.rt', percent_slider_easy.getRT());
      // the Routine "easy_baseline" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var medium_baselineMaxDurationReached;
var medium_baselineMaxDuration;
var medium_baselineComponents;
function medium_baselineRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'medium_baseline' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      medium_baselineClock.reset();
      routineTimer.reset();
      medium_baselineMaxDurationReached = false;
      // update component parameters for each repeat
      percent_slider_medium.reset()
      psychoJS.experiment.addData('medium_baseline.started', globalClock.getTime());
      medium_baselineMaxDuration = null
      // keep track of which components have finished
      medium_baselineComponents = [];
      medium_baselineComponents.push(text_60);
      medium_baselineComponents.push(medium_3);
      medium_baselineComponents.push(percent_slider_medium);
      medium_baselineComponents.push(text_92);
      
      for (const thisComponent of medium_baselineComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function medium_baselineRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'medium_baseline' ---
      // get current time
      t = medium_baselineClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_60* updates
      if (t >= 0.0 && text_60.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_60.tStart = t;  // (not accounting for frame time here)
        text_60.frameNStart = frameN;  // exact frame index
        
        text_60.setAutoDraw(true);
      }
      
      
      // if text_60 is active this frame...
      if (text_60.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *medium_3* updates
      if (t >= 0.0 && medium_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        medium_3.tStart = t;  // (not accounting for frame time here)
        medium_3.frameNStart = frameN;  // exact frame index
        
        medium_3.setAutoDraw(true);
      }
      
      
      // if medium_3 is active this frame...
      if (medium_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *percent_slider_medium* updates
      if (t >= 0.0 && percent_slider_medium.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        percent_slider_medium.tStart = t;  // (not accounting for frame time here)
        percent_slider_medium.frameNStart = frameN;  // exact frame index
        
        percent_slider_medium.setAutoDraw(true);
      }
      
      
      // if percent_slider_medium is active this frame...
      if (percent_slider_medium.status === PsychoJS.Status.STARTED) {
      }
      
      
      // Check percent_slider_medium for response to end Routine
      if (percent_slider_medium.getRating() !== undefined && percent_slider_medium.status === PsychoJS.Status.STARTED) {
        continueRoutine = false; }
      
      // *text_92* updates
      if (t >= 10 && text_92.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_92.tStart = t;  // (not accounting for frame time here)
        text_92.frameNStart = frameN;  // exact frame index
        
        text_92.setAutoDraw(true);
      }
      
      
      // if text_92 is active this frame...
      if (text_92.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of medium_baselineComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function medium_baselineRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'medium_baseline' ---
      for (const thisComponent of medium_baselineComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('medium_baseline.stopped', globalClock.getTime());
      psychoJS.experiment.addData('percent_slider_medium.response', percent_slider_medium.getRating());
      psychoJS.experiment.addData('percent_slider_medium.rt', percent_slider_medium.getRT());
      // the Routine "medium_baseline" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var hard_baselineMaxDurationReached;
var hard_baselineMaxDuration;
var hard_baselineComponents;
function hard_baselineRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'hard_baseline' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      hard_baselineClock.reset();
      routineTimer.reset();
      hard_baselineMaxDurationReached = false;
      // update component parameters for each repeat
      percent_slider_hard.reset()
      psychoJS.experiment.addData('hard_baseline.started', globalClock.getTime());
      hard_baselineMaxDuration = null
      // keep track of which components have finished
      hard_baselineComponents = [];
      hard_baselineComponents.push(text_62);
      hard_baselineComponents.push(hard_4);
      hard_baselineComponents.push(percent_slider_hard);
      hard_baselineComponents.push(text_93);
      
      for (const thisComponent of hard_baselineComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function hard_baselineRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'hard_baseline' ---
      // get current time
      t = hard_baselineClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_62* updates
      if (t >= 0.0 && text_62.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_62.tStart = t;  // (not accounting for frame time here)
        text_62.frameNStart = frameN;  // exact frame index
        
        text_62.setAutoDraw(true);
      }
      
      
      // if text_62 is active this frame...
      if (text_62.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *hard_4* updates
      if (t >= 0.0 && hard_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        hard_4.tStart = t;  // (not accounting for frame time here)
        hard_4.frameNStart = frameN;  // exact frame index
        
        hard_4.setAutoDraw(true);
      }
      
      
      // if hard_4 is active this frame...
      if (hard_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *percent_slider_hard* updates
      if (t >= 0.0 && percent_slider_hard.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        percent_slider_hard.tStart = t;  // (not accounting for frame time here)
        percent_slider_hard.frameNStart = frameN;  // exact frame index
        
        percent_slider_hard.setAutoDraw(true);
      }
      
      
      // if percent_slider_hard is active this frame...
      if (percent_slider_hard.status === PsychoJS.Status.STARTED) {
      }
      
      
      // Check percent_slider_hard for response to end Routine
      if (percent_slider_hard.getRating() !== undefined && percent_slider_hard.status === PsychoJS.Status.STARTED) {
        continueRoutine = false; }
      
      // *text_93* updates
      if (t >= 10 && text_93.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_93.tStart = t;  // (not accounting for frame time here)
        text_93.frameNStart = frameN;  // exact frame index
        
        text_93.setAutoDraw(true);
      }
      
      
      // if text_93 is active this frame...
      if (text_93.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of hard_baselineComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function hard_baselineRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'hard_baseline' ---
      for (const thisComponent of hard_baselineComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('hard_baseline.stopped', globalClock.getTime());
      psychoJS.experiment.addData('percent_slider_hard.response', percent_slider_hard.getRating());
      psychoJS.experiment.addData('percent_slider_hard.rt', percent_slider_hard.getRT());
      // the Routine "hard_baseline" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var ratings_instructions2MaxDurationReached;
var ratings_instructions2MaxDuration;
var ratings_instructions2Components;
function ratings_instructions2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'ratings_instructions2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      ratings_instructions2Clock.reset();
      routineTimer.reset();
      ratings_instructions2MaxDurationReached = false;
      // update component parameters for each repeat
      anticipation_slider_2.reset()
      psychoJS.experiment.addData('ratings_instructions2.started', globalClock.getTime());
      ratings_instructions2MaxDuration = null
      // keep track of which components have finished
      ratings_instructions2Components = [];
      ratings_instructions2Components.push(text_58);
      ratings_instructions2Components.push(anticipation_slider_2);
      ratings_instructions2Components.push(text_65);
      
      for (const thisComponent of ratings_instructions2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function ratings_instructions2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'ratings_instructions2' ---
      // get current time
      t = ratings_instructions2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_58* updates
      if (t >= 0.0 && text_58.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_58.tStart = t;  // (not accounting for frame time here)
        text_58.frameNStart = frameN;  // exact frame index
        
        text_58.setAutoDraw(true);
      }
      
      
      // if text_58 is active this frame...
      if (text_58.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *anticipation_slider_2* updates
      if (t >= 0.0 && anticipation_slider_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        anticipation_slider_2.tStart = t;  // (not accounting for frame time here)
        anticipation_slider_2.frameNStart = frameN;  // exact frame index
        
        anticipation_slider_2.setAutoDraw(true);
      }
      
      
      // if anticipation_slider_2 is active this frame...
      if (anticipation_slider_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // Check anticipation_slider_2 for response to end Routine
      if (anticipation_slider_2.getRating() !== undefined && anticipation_slider_2.status === PsychoJS.Status.STARTED) {
        continueRoutine = false; }
      
      // *text_65* updates
      if (t >= 0.0 && text_65.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_65.tStart = t;  // (not accounting for frame time here)
        text_65.frameNStart = frameN;  // exact frame index
        
        text_65.setAutoDraw(true);
      }
      
      
      // if text_65 is active this frame...
      if (text_65.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of ratings_instructions2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function ratings_instructions2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'ratings_instructions2' ---
      for (const thisComponent of ratings_instructions2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('ratings_instructions2.stopped', globalClock.getTime());
      psychoJS.experiment.addData('anticipation_slider_2.response', anticipation_slider_2.getRating());
      psychoJS.experiment.addData('anticipation_slider_2.rt', anticipation_slider_2.getRT());
      // the Routine "ratings_instructions2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var baseline_anticipationMaxDurationReached;
var baseline_anticipationMaxDuration;
var baseline_anticipationComponents;
function baseline_anticipationRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'baseline_anticipation' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      baseline_anticipationClock.reset();
      routineTimer.reset();
      baseline_anticipationMaxDurationReached = false;
      // update component parameters for each repeat
      anticipation_slider.reset()
      psychoJS.experiment.addData('baseline_anticipation.started', globalClock.getTime());
      baseline_anticipationMaxDuration = null
      // keep track of which components have finished
      baseline_anticipationComponents = [];
      baseline_anticipationComponents.push(text_57);
      baseline_anticipationComponents.push(anticipation_slider);
      baseline_anticipationComponents.push(high_anxiety_2);
      baseline_anticipationComponents.push(low_anxiety_2);
      baseline_anticipationComponents.push(moderate_anxiety_2);
      
      for (const thisComponent of baseline_anticipationComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function baseline_anticipationRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'baseline_anticipation' ---
      // get current time
      t = baseline_anticipationClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_57* updates
      if (t >= 0.0 && text_57.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_57.tStart = t;  // (not accounting for frame time here)
        text_57.frameNStart = frameN;  // exact frame index
        
        text_57.setAutoDraw(true);
      }
      
      
      // if text_57 is active this frame...
      if (text_57.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *anticipation_slider* updates
      if (t >= 0.0 && anticipation_slider.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        anticipation_slider.tStart = t;  // (not accounting for frame time here)
        anticipation_slider.frameNStart = frameN;  // exact frame index
        
        anticipation_slider.setAutoDraw(true);
      }
      
      
      // if anticipation_slider is active this frame...
      if (anticipation_slider.status === PsychoJS.Status.STARTED) {
      }
      
      
      // Check anticipation_slider for response to end Routine
      if (anticipation_slider.getRating() !== undefined && anticipation_slider.status === PsychoJS.Status.STARTED) {
        continueRoutine = false; }
      
      // *high_anxiety_2* updates
      if (t >= 0.0 && high_anxiety_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        high_anxiety_2.tStart = t;  // (not accounting for frame time here)
        high_anxiety_2.frameNStart = frameN;  // exact frame index
        
        high_anxiety_2.setAutoDraw(true);
      }
      
      
      // if high_anxiety_2 is active this frame...
      if (high_anxiety_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *low_anxiety_2* updates
      if (t >= 0.0 && low_anxiety_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        low_anxiety_2.tStart = t;  // (not accounting for frame time here)
        low_anxiety_2.frameNStart = frameN;  // exact frame index
        
        low_anxiety_2.setAutoDraw(true);
      }
      
      
      // if low_anxiety_2 is active this frame...
      if (low_anxiety_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *moderate_anxiety_2* updates
      if (t >= 0.0 && moderate_anxiety_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        moderate_anxiety_2.tStart = t;  // (not accounting for frame time here)
        moderate_anxiety_2.frameNStart = frameN;  // exact frame index
        
        moderate_anxiety_2.setAutoDraw(true);
      }
      
      
      // if moderate_anxiety_2 is active this frame...
      if (moderate_anxiety_2.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of baseline_anticipationComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function baseline_anticipationRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'baseline_anticipation' ---
      for (const thisComponent of baseline_anticipationComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('baseline_anticipation.stopped', globalClock.getTime());
      psychoJS.experiment.addData('anticipation_slider.response', anticipation_slider.getRating());
      psychoJS.experiment.addData('anticipation_slider.rt', anticipation_slider.getRT());
      // the Routine "baseline_anticipation" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var baseline_anxietyMaxDurationReached;
var baseline_anxietyMaxDuration;
var baseline_anxietyComponents;
function baseline_anxietyRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'baseline_anxiety' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      baseline_anxietyClock.reset();
      routineTimer.reset();
      baseline_anxietyMaxDurationReached = false;
      // update component parameters for each repeat
      baseline_anxiety_slider.reset()
      psychoJS.experiment.addData('baseline_anxiety.started', globalClock.getTime());
      baseline_anxietyMaxDuration = null
      // keep track of which components have finished
      baseline_anxietyComponents = [];
      baseline_anxietyComponents.push(text_56);
      baseline_anxietyComponents.push(baseline_anxiety_slider);
      baseline_anxietyComponents.push(high_anxiety);
      baseline_anxietyComponents.push(low_anxiety);
      baseline_anxietyComponents.push(moderate_anxiety);
      
      for (const thisComponent of baseline_anxietyComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function baseline_anxietyRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'baseline_anxiety' ---
      // get current time
      t = baseline_anxietyClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_56* updates
      if (t >= 0.0 && text_56.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_56.tStart = t;  // (not accounting for frame time here)
        text_56.frameNStart = frameN;  // exact frame index
        
        text_56.setAutoDraw(true);
      }
      
      
      // if text_56 is active this frame...
      if (text_56.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *baseline_anxiety_slider* updates
      if (t >= 0.0 && baseline_anxiety_slider.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        baseline_anxiety_slider.tStart = t;  // (not accounting for frame time here)
        baseline_anxiety_slider.frameNStart = frameN;  // exact frame index
        
        baseline_anxiety_slider.setAutoDraw(true);
      }
      
      
      // if baseline_anxiety_slider is active this frame...
      if (baseline_anxiety_slider.status === PsychoJS.Status.STARTED) {
      }
      
      
      // Check baseline_anxiety_slider for response to end Routine
      if (baseline_anxiety_slider.getRating() !== undefined && baseline_anxiety_slider.status === PsychoJS.Status.STARTED) {
        continueRoutine = false; }
      
      // *high_anxiety* updates
      if (t >= 0.0 && high_anxiety.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        high_anxiety.tStart = t;  // (not accounting for frame time here)
        high_anxiety.frameNStart = frameN;  // exact frame index
        
        high_anxiety.setAutoDraw(true);
      }
      
      
      // if high_anxiety is active this frame...
      if (high_anxiety.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *low_anxiety* updates
      if (t >= 0.0 && low_anxiety.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        low_anxiety.tStart = t;  // (not accounting for frame time here)
        low_anxiety.frameNStart = frameN;  // exact frame index
        
        low_anxiety.setAutoDraw(true);
      }
      
      
      // if low_anxiety is active this frame...
      if (low_anxiety.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *moderate_anxiety* updates
      if (t >= 0.0 && moderate_anxiety.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        moderate_anxiety.tStart = t;  // (not accounting for frame time here)
        moderate_anxiety.frameNStart = frameN;  // exact frame index
        
        moderate_anxiety.setAutoDraw(true);
      }
      
      
      // if moderate_anxiety is active this frame...
      if (moderate_anxiety.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of baseline_anxietyComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function baseline_anxietyRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'baseline_anxiety' ---
      for (const thisComponent of baseline_anxietyComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('baseline_anxiety.stopped', globalClock.getTime());
      psychoJS.experiment.addData('baseline_anxiety_slider.response', baseline_anxiety_slider.getRating());
      psychoJS.experiment.addData('baseline_anxiety_slider.rt', baseline_anxiety_slider.getRT());
      // the Routine "baseline_anxiety" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var baseline_feedbackMaxDurationReached;
var baseline_feedbackMaxDuration;
var baseline_feedbackComponents;
function baseline_feedbackRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'baseline_feedback' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      baseline_feedbackClock.reset();
      routineTimer.reset();
      baseline_feedbackMaxDurationReached = false;
      // update component parameters for each repeat
      feedback_slider.reset()
      psychoJS.experiment.addData('baseline_feedback.started', globalClock.getTime());
      baseline_feedbackMaxDuration = null
      // keep track of which components have finished
      baseline_feedbackComponents = [];
      baseline_feedbackComponents.push(text_81);
      baseline_feedbackComponents.push(feedback_slider);
      baseline_feedbackComponents.push(low_anxiety_7);
      baseline_feedbackComponents.push(high_anxiety_7);
      baseline_feedbackComponents.push(moderate_anxiety_6);
      
      for (const thisComponent of baseline_feedbackComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function baseline_feedbackRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'baseline_feedback' ---
      // get current time
      t = baseline_feedbackClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_81* updates
      if (t >= 0.0 && text_81.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_81.tStart = t;  // (not accounting for frame time here)
        text_81.frameNStart = frameN;  // exact frame index
        
        text_81.setAutoDraw(true);
      }
      
      
      // if text_81 is active this frame...
      if (text_81.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *feedback_slider* updates
      if (t >= 0.0 && feedback_slider.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        feedback_slider.tStart = t;  // (not accounting for frame time here)
        feedback_slider.frameNStart = frameN;  // exact frame index
        
        feedback_slider.setAutoDraw(true);
      }
      
      
      // if feedback_slider is active this frame...
      if (feedback_slider.status === PsychoJS.Status.STARTED) {
      }
      
      
      // Check feedback_slider for response to end Routine
      if (feedback_slider.getRating() !== undefined && feedback_slider.status === PsychoJS.Status.STARTED) {
        continueRoutine = false; }
      
      // *low_anxiety_7* updates
      if (t >= 0.0 && low_anxiety_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        low_anxiety_7.tStart = t;  // (not accounting for frame time here)
        low_anxiety_7.frameNStart = frameN;  // exact frame index
        
        low_anxiety_7.setAutoDraw(true);
      }
      
      
      // if low_anxiety_7 is active this frame...
      if (low_anxiety_7.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *high_anxiety_7* updates
      if (t >= 0.0 && high_anxiety_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        high_anxiety_7.tStart = t;  // (not accounting for frame time here)
        high_anxiety_7.frameNStart = frameN;  // exact frame index
        
        high_anxiety_7.setAutoDraw(true);
      }
      
      
      // if high_anxiety_7 is active this frame...
      if (high_anxiety_7.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *moderate_anxiety_6* updates
      if (t >= 0.0 && moderate_anxiety_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        moderate_anxiety_6.tStart = t;  // (not accounting for frame time here)
        moderate_anxiety_6.frameNStart = frameN;  // exact frame index
        
        moderate_anxiety_6.setAutoDraw(true);
      }
      
      
      // if moderate_anxiety_6 is active this frame...
      if (moderate_anxiety_6.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of baseline_feedbackComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function baseline_feedbackRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'baseline_feedback' ---
      for (const thisComponent of baseline_feedbackComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('baseline_feedback.stopped', globalClock.getTime());
      psychoJS.experiment.addData('feedback_slider.response', feedback_slider.getRating());
      psychoJS.experiment.addData('feedback_slider.rt', feedback_slider.getRT());
      // the Routine "baseline_feedback" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var baseline_motivationMaxDurationReached;
var baseline_motivationMaxDuration;
var baseline_motivationComponents;
function baseline_motivationRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'baseline_motivation' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      baseline_motivationClock.reset();
      routineTimer.reset();
      baseline_motivationMaxDurationReached = false;
      // update component parameters for each repeat
      pre_motivation_slider.reset()
      psychoJS.experiment.addData('baseline_motivation.started', globalClock.getTime());
      baseline_motivationMaxDuration = null
      // keep track of which components have finished
      baseline_motivationComponents = [];
      baseline_motivationComponents.push(text_63);
      baseline_motivationComponents.push(pre_motivation_slider);
      baseline_motivationComponents.push(high_motivation_2);
      baseline_motivationComponents.push(low_motivation_2);
      
      for (const thisComponent of baseline_motivationComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function baseline_motivationRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'baseline_motivation' ---
      // get current time
      t = baseline_motivationClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_63* updates
      if (t >= 0.0 && text_63.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_63.tStart = t;  // (not accounting for frame time here)
        text_63.frameNStart = frameN;  // exact frame index
        
        text_63.setAutoDraw(true);
      }
      
      
      // if text_63 is active this frame...
      if (text_63.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *pre_motivation_slider* updates
      if (t >= 0.0 && pre_motivation_slider.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        pre_motivation_slider.tStart = t;  // (not accounting for frame time here)
        pre_motivation_slider.frameNStart = frameN;  // exact frame index
        
        pre_motivation_slider.setAutoDraw(true);
      }
      
      
      // if pre_motivation_slider is active this frame...
      if (pre_motivation_slider.status === PsychoJS.Status.STARTED) {
      }
      
      
      // Check pre_motivation_slider for response to end Routine
      if (pre_motivation_slider.getRating() !== undefined && pre_motivation_slider.status === PsychoJS.Status.STARTED) {
        continueRoutine = false; }
      
      // *high_motivation_2* updates
      if (t >= 0.0 && high_motivation_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        high_motivation_2.tStart = t;  // (not accounting for frame time here)
        high_motivation_2.frameNStart = frameN;  // exact frame index
        
        high_motivation_2.setAutoDraw(true);
      }
      
      
      // if high_motivation_2 is active this frame...
      if (high_motivation_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *low_motivation_2* updates
      if (t >= 0.0 && low_motivation_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        low_motivation_2.tStart = t;  // (not accounting for frame time here)
        low_motivation_2.frameNStart = frameN;  // exact frame index
        
        low_motivation_2.setAutoDraw(true);
      }
      
      
      // if low_motivation_2 is active this frame...
      if (low_motivation_2.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of baseline_motivationComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function baseline_motivationRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'baseline_motivation' ---
      for (const thisComponent of baseline_motivationComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('baseline_motivation.stopped', globalClock.getTime());
      psychoJS.experiment.addData('pre_motivation_slider.response', pre_motivation_slider.getRating());
      psychoJS.experiment.addData('pre_motivation_slider.rt', pre_motivation_slider.getRT());
      // the Routine "baseline_motivation" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var final_instructMaxDurationReached;
var _key_resp_17_allKeys;
var final_instructMaxDuration;
var final_instructComponents;
function final_instructRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'final_instruct' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      final_instructClock.reset();
      routineTimer.reset();
      final_instructMaxDurationReached = false;
      // update component parameters for each repeat
      text_7.setText("Please try your best and please be honest. Your effort and honesty will benefit science. Failure to do the experiment properly may result in no R-points being granted.  \n\n1) This part takes less than 20-minutes. There is also a Qualtrics survey afterwards. \n\n2) Try avoid missing trials, but its okay to miss a few here and there. There will be a 3 second penalty box for missed trials.\n\nPress 't' to begin the experiment!");
      key_resp_17.keys = undefined;
      key_resp_17.rt = undefined;
      _key_resp_17_allKeys = [];
      finalnotes.setText('Final notes');
      psychoJS.experiment.addData('final_instruct.started', globalClock.getTime());
      final_instructMaxDuration = null
      // keep track of which components have finished
      final_instructComponents = [];
      final_instructComponents.push(text_7);
      final_instructComponents.push(key_resp_17);
      final_instructComponents.push(finalnotes);
      
      for (const thisComponent of final_instructComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function final_instructRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'final_instruct' ---
      // get current time
      t = final_instructClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_7* updates
      if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_7.tStart = t;  // (not accounting for frame time here)
        text_7.frameNStart = frameN;  // exact frame index
        
        text_7.setAutoDraw(true);
      }
      
      
      // if text_7 is active this frame...
      if (text_7.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_17* updates
      if (t >= 0.0 && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_17.tStart = t;  // (not accounting for frame time here)
        key_resp_17.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_17.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_17.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_17.clearEvents(); });
      }
      
      // if key_resp_17 is active this frame...
      if (key_resp_17.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_17.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
        if (_key_resp_17_allKeys.length > 0) {
          key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
          key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
          key_resp_17.duration = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *finalnotes* updates
      if (t >= 0.0 && finalnotes.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        finalnotes.tStart = t;  // (not accounting for frame time here)
        finalnotes.frameNStart = frameN;  // exact frame index
        
        finalnotes.setAutoDraw(true);
      }
      
      
      // if finalnotes is active this frame...
      if (finalnotes.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of final_instructComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function final_instructRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'final_instruct' ---
      for (const thisComponent of final_instructComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('final_instruct.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_17.corr, level);
      }
      psychoJS.experiment.addData('key_resp_17.keys', key_resp_17.keys);
      if (typeof key_resp_17.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_17.rt', key_resp_17.rt);
          psychoJS.experiment.addData('key_resp_17.duration', key_resp_17.duration);
          routineTimer.reset();
          }
      
      key_resp_17.stop();
      // the Routine "final_instruct" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var new_code1MaxDurationReached;
var xx1;
var condition;
var useRows;
var whichblock;
var new_code1MaxDuration;
var new_code1Components;
function new_code1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'new_code1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      new_code1Clock.reset();
      routineTimer.reset();
      new_code1MaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_18
      xx1 = block_gen1.pop();
      condition = " ";
      console.log(xx1);
      if ((xx1 === 1)) {
          useRows = "0:10";
          whichblock = easy_blocks.pop();
          condition = "Easy";
      }
      if ((xx1 === 2)) {
          useRows = "40:50";
          whichblock = medium_blocks.pop();
          condition = "Medium";
      }
      if ((xx1 === 3)) {
          useRows = "80:90";
          whichblock = hard_blocks.pop();
          condition = "Hard";
      }
      
      psychoJS.experiment.addData('new_code1.started', globalClock.getTime());
      new_code1MaxDuration = null
      // keep track of which components have finished
      new_code1Components = [];
      
      for (const thisComponent of new_code1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function new_code1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'new_code1' ---
      // get current time
      t = new_code1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of new_code1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function new_code1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'new_code1' ---
      for (const thisComponent of new_code1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('new_code1.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_18
      trialnum = (trialnum + 1);
      blocknum12 = (blocknum12 + 1);
      blocknum4 = (blocknum4 + 1);
      
      // the Routine "new_code1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var cueMaxDurationReached;
var _key_resp_3_allKeys;
var cueMaxDuration;
var cueComponents;
function cueRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'cue' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      cueClock.reset();
      routineTimer.reset();
      cueMaxDurationReached = false;
      // update component parameters for each repeat
      text_2.setText(`The next block will be ${condition} math problems`);
      text_3.setText('Press t to start!');
      key_resp_3.keys = undefined;
      key_resp_3.rt = undefined;
      _key_resp_3_allKeys = [];
      psychoJS.experiment.addData('cue.started', globalClock.getTime());
      cueMaxDuration = null
      // keep track of which components have finished
      cueComponents = [];
      cueComponents.push(text_2);
      cueComponents.push(text_3);
      cueComponents.push(key_resp_3);
      
      for (const thisComponent of cueComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function cueRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'cue' ---
      // get current time
      t = cueClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_2* updates
      if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_2.tStart = t;  // (not accounting for frame time here)
        text_2.frameNStart = frameN;  // exact frame index
        
        text_2.setAutoDraw(true);
      }
      
      
      // if text_2 is active this frame...
      if (text_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_3* updates
      if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_3.tStart = t;  // (not accounting for frame time here)
        text_3.frameNStart = frameN;  // exact frame index
        
        text_3.setAutoDraw(true);
      }
      
      
      // if text_3 is active this frame...
      if (text_3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_3* updates
      if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_3.tStart = t;  // (not accounting for frame time here)
        key_resp_3.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
      }
      
      // if key_resp_3 is active this frame...
      if (key_resp_3.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_3.getKeys({
          keyList: typeof 't' === 'string' ? ['t'] : 't', 
          waitRelease: false
        });
        _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
        if (_key_resp_3_allKeys.length > 0) {
          key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
          key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
          key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of cueComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function cueRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'cue' ---
      for (const thisComponent of cueComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('cue.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_3.corr, level);
      }
      psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
      if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
          psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
          routineTimer.reset();
          }
      
      key_resp_3.stop();
      // the Routine "cue" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var get_readyMaxDurationReached;
var get_readyMaxDuration;
var get_readyComponents;
function get_readyRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'get_ready' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      get_readyClock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      get_readyMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('get_ready.started', globalClock.getTime());
      get_readyMaxDuration = null
      // keep track of which components have finished
      get_readyComponents = [];
      get_readyComponents.push(fixation);
      
      for (const thisComponent of get_readyComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function get_readyRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'get_ready' ---
      // get current time
      t = get_readyClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *fixation* updates
      if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        fixation.tStart = t;  // (not accounting for frame time here)
        fixation.frameNStart = frameN;  // exact frame index
        
        fixation.setAutoDraw(true);
      }
      
      
      // if fixation is active this frame...
      if (fixation.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        fixation.tStop = t;  // not accounting for scr refresh
        fixation.frameNStop = frameN;  // exact frame index
        // update status
        fixation.status = PsychoJS.Status.FINISHED;
        fixation.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of get_readyComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function get_readyRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'get_ready' ---
      for (const thisComponent of get_readyComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('get_ready.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (get_readyMaxDurationReached) {
          get_readyClock.add(get_readyMaxDuration);
      } else {
          get_readyClock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var task_startMaxDurationReached;
var _Study1Response_2_allKeys;
var task_startMaxDuration;
var task_startComponents;
function task_startRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'task_start' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      task_startClock.reset(routineTimer.getTime());
      routineTimer.add(4.000000);
      task_startMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_10
      selectbox_color = "white";
      response_record = "";
      CorrResp = 1;
      topside = R1Word1;
      botside = R1Word2;
      condition = cond;
      x = ["a) "];
      y = ["b) "];
      if ((Math.random() > 0.5)) {
          topside = R1Word1;
          botside = R1Word2;
          r1reversed = false;
          CorrResp = 1;
          x = "a) ";
          y = "b) ";
      } else {
          topside = R1Word2;
          botside = R1Word1;
          r1reversed = true;
          CorrResp = 2;
          x = "b) ";
          y = "a) ";
      }
      psychoJS.experiment.addData("r1reversed", r1reversed);
      psychoJS.experiment.addData("CorrResp", CorrResp);
      psychoJS.experiment.addData("topside", topside);
      psychoJS.experiment.addData("botside", botside);
      psychoJS.experiment.addData("trialnum", trialnum);
      psychoJS.experiment.addData("blocknum4", blocknum4);
      psychoJS.experiment.addData("blocknum12", blocknum12);
      console.log(r1reversed);
      console.log(topside);
      
      text_23.setText(targetword);
      text_24.setText(topside);
      text_25.setText(botside);
      Study1Response_2.keys = undefined;
      Study1Response_2.rt = undefined;
      _Study1Response_2_allKeys = [];
      psychoJS.experiment.addData('task_start.started', globalClock.getTime());
      task_startMaxDuration = null
      // keep track of which components have finished
      task_startComponents = [];
      task_startComponents.push(text_23);
      task_startComponents.push(text_24);
      task_startComponents.push(text_25);
      task_startComponents.push(text_a_5);
      task_startComponents.push(text_b_5);
      task_startComponents.push(Study1Response_2);
      
      for (const thisComponent of task_startComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function task_startRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'task_start' ---
      // get current time
      t = task_startClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_23* updates
      if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_23.tStart = t;  // (not accounting for frame time here)
        text_23.frameNStart = frameN;  // exact frame index
        
        text_23.setAutoDraw(true);
      }
      
      
      // if text_23 is active this frame...
      if (text_23.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_23.tStop = t;  // not accounting for scr refresh
        text_23.frameNStop = frameN;  // exact frame index
        // update status
        text_23.status = PsychoJS.Status.FINISHED;
        text_23.setAutoDraw(false);
      }
      
      
      // *text_24* updates
      if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_24.tStart = t;  // (not accounting for frame time here)
        text_24.frameNStart = frameN;  // exact frame index
        
        text_24.setAutoDraw(true);
      }
      
      
      // if text_24 is active this frame...
      if (text_24.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_24.tStop = t;  // not accounting for scr refresh
        text_24.frameNStop = frameN;  // exact frame index
        // update status
        text_24.status = PsychoJS.Status.FINISHED;
        text_24.setAutoDraw(false);
      }
      
      
      // *text_25* updates
      if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_25.tStart = t;  // (not accounting for frame time here)
        text_25.frameNStart = frameN;  // exact frame index
        
        text_25.setAutoDraw(true);
      }
      
      
      // if text_25 is active this frame...
      if (text_25.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_25.tStop = t;  // not accounting for scr refresh
        text_25.frameNStop = frameN;  // exact frame index
        // update status
        text_25.status = PsychoJS.Status.FINISHED;
        text_25.setAutoDraw(false);
      }
      
      
      // *text_a_5* updates
      if (t >= 0.0 && text_a_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_a_5.tStart = t;  // (not accounting for frame time here)
        text_a_5.frameNStart = frameN;  // exact frame index
        
        text_a_5.setAutoDraw(true);
      }
      
      
      // if text_a_5 is active this frame...
      if (text_a_5.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_a_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_a_5.tStop = t;  // not accounting for scr refresh
        text_a_5.frameNStop = frameN;  // exact frame index
        // update status
        text_a_5.status = PsychoJS.Status.FINISHED;
        text_a_5.setAutoDraw(false);
      }
      
      
      // *text_b_5* updates
      if (t >= 0.0 && text_b_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_b_5.tStart = t;  // (not accounting for frame time here)
        text_b_5.frameNStart = frameN;  // exact frame index
        
        text_b_5.setAutoDraw(true);
      }
      
      
      // if text_b_5 is active this frame...
      if (text_b_5.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_b_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_b_5.tStop = t;  // not accounting for scr refresh
        text_b_5.frameNStop = frameN;  // exact frame index
        // update status
        text_b_5.status = PsychoJS.Status.FINISHED;
        text_b_5.setAutoDraw(false);
      }
      
      
      // *Study1Response_2* updates
      if (t >= 0.0 && Study1Response_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        Study1Response_2.tStart = t;  // (not accounting for frame time here)
        Study1Response_2.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { Study1Response_2.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { Study1Response_2.start(); }); // start on screen flip
      }
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (Study1Response_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        Study1Response_2.tStop = t;  // not accounting for scr refresh
        Study1Response_2.frameNStop = frameN;  // exact frame index
        // update status
        Study1Response_2.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (Study1Response_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          Study1Response_2.tStop = t;  // not accounting for scr refresh
          Study1Response_2.frameNStop = frameN;  // exact frame index
          // update status
          Study1Response_2.status = PsychoJS.Status.FINISHED;
          Study1Response_2.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if Study1Response_2 is active this frame...
        if (Study1Response_2.status === PsychoJS.Status.STARTED) {
          let theseKeys = Study1Response_2.getKeys({
            keyList: typeof ['1','2'] === 'string' ? [['1','2']] : ['1','2'], 
            waitRelease: false
          });
          _Study1Response_2_allKeys = _Study1Response_2_allKeys.concat(theseKeys);
          if (_Study1Response_2_allKeys.length > 0) {
            Study1Response_2.keys = _Study1Response_2_allKeys[_Study1Response_2_allKeys.length - 1].name;  // just the last key pressed
            Study1Response_2.rt = _Study1Response_2_allKeys[_Study1Response_2_allKeys.length - 1].rt;
            Study1Response_2.duration = _Study1Response_2_allKeys[_Study1Response_2_allKeys.length - 1].duration;
            // was this correct?
            if (Study1Response_2.keys == CorrResp) {
                Study1Response_2.corr = 1;
            } else {
                Study1Response_2.corr = 0;
            }
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // Run 'Each Frame' code from code_11
        var _pj;
        function _pj_snippets(container) {
            function in_es6(left, right) {
                if (((right instanceof Array) || ((typeof right) === "string"))) {
                    return (right.indexOf(left) > (- 1));
                } else {
                    if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                        return right.has(left);
                    } else {
                        return (left in right);
                    }
                }
            }
            container["in_es6"] = in_es6;
            return container;
        }
        _pj = {};
        _pj_snippets(_pj);
        respbox_y = 0;
        keys = psychoJS.eventManager.getKeys();
        if (_pj.in_es6("1", keys)) {
            respbox_y = 0.05;
            fbkimage_y = 0.05;
        } else {
            if (_pj.in_es6("2", keys)) {
                respbox_y = (- 0.1);
                fbkimage_y = (- 0.1);
            }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of task_startComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
var responseiscorrect3;
var skip_routine;
var group_name;
var group_name2;
function task_startRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'task_start' ---
        for (const thisComponent of task_startComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('task_start.stopped', globalClock.getTime());
        // was no response the correct answer?!
        if (Study1Response_2.keys === undefined) {
          if (['None','none',undefined].includes(CorrResp)) {
             Study1Response_2.corr = 1;  // correct non-response
          } else {
             Study1Response_2.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(Study1Response_2.corr, level);
        }
        psychoJS.experiment.addData('Study1Response_2.keys', Study1Response_2.keys);
        psychoJS.experiment.addData('Study1Response_2.corr', Study1Response_2.corr);
        if (typeof Study1Response_2.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('Study1Response_2.rt', Study1Response_2.rt);
            psychoJS.experiment.addData('Study1Response_2.duration', Study1Response_2.duration);
            routineTimer.reset();
            }
        
        Study1Response_2.stop();
        // Run 'End Routine' code from code_11
        if ((whichblock === 0)) {
            box_color = "white";
        }
        if (((Study1Response_2.corr === 1) && (whichblock === 1))) {
            responseiscorrect3 = true;
            box_color = "green";
            fbkimagefile = "checkmark.png";
        } else {
            if (((Study1Response_2.corr === 0) && (whichblock === 1))) {
                responseiscorrect3 = false;
                fbkimagefile = "X_mark.png";
                box_color = "red";
            }
        }
        if (((Study1Response_2.corr === 1) && (whichblock === 0))) {
            responseiscorrect3 = true;
            box_color = "white";
            fbkimagefile = "checkmark.png";
        } else {
            if (((Study1Response_2.corr === 0) && (whichblock === 0))) {
                responseiscorrect3 = false;
                box_color = "white";
                fbkimagefile = "X_mark.png";
            }
        }
        skip_routine = false;
        y = 0;
        errormsg = "";
        if (Study1Response_2.rt) {
            y = (4 - Study1Response_2.rt);
            skip_routine = false;
        } else {
            fbkimagefile = "X_mark.png";
            errormsg = "missed trial";
            respbox_y = 4;
            fbkimage_y = 0;
            y = 1;
            skip_routine = true;
        }
        group_name = " ";
        group_name2 = " ";
        if ((whichblock === 1)) {
            group_name = "Feedback";
            group_name2 = "Feedback";
        }
        if ((whichblock === 0)) {
            group_name = "No Feedback";
            group_name2 = "No Feedback";
        }
        psychoJS.experiment.addData("whichblock", whichblock);
        psychoJS.experiment.addData("group_name", group_name);
        
        if (routineForceEnded) {
            routineTimer.reset();} else if (task_startMaxDurationReached) {
            task_startClock.add(task_startMaxDuration);
        } else {
            task_startClock.add(4.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var error_msg1MaxDurationReached;
var error_msg1MaxDuration;
var error_msg1Components;
function error_msg1RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'error_msg1' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        error_msg1Clock.reset();
        routineTimer.reset();
        error_msg1MaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('error_msg1.started', globalClock.getTime());
        error_msg1MaxDuration = null
        // keep track of which components have finished
        error_msg1Components = [];
        
        for (const thisComponent of error_msg1Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function error_msg1RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'error_msg1' ---
        // get current time
        t = error_msg1Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of error_msg1Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
var errormsg2;
function error_msg1RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'error_msg1' ---
        for (const thisComponent of error_msg1Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('error_msg1.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_20
        if ((((Study1Response_2.rt < 1) && (xx1 === 2)) || ((Study1Response_2.rt < 1) && (xx1 === 3)))) {
            errormsg2 = "SLOW DOWN, TOO FAST!";
        } else {
            errormsg2 = " ";
        }
        
        // the Routine "error_msg1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var highlightMaxDurationReached;
var highlightMaxDuration;
var highlightComponents;
function highlightRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'highlight' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        highlightClock.reset();
        routineTimer.reset();
        highlightMaxDurationReached = false;
        // update component parameters for each repeat
        text_26.setText(targetword);
        polygon_4.setPos([(- 0.05), respbox_y]);
        text_27.setText(topside);
        text_28.setText(botside);
        error_text_2.setText(errormsg2);
        text_67.setPos([0, 0.175]);
        text_67.setText(errormsg);
        psychoJS.experiment.addData('highlight.started', globalClock.getTime());
        highlightMaxDuration = null
        // keep track of which components have finished
        highlightComponents = [];
        highlightComponents.push(text_26);
        highlightComponents.push(polygon_4);
        highlightComponents.push(text_27);
        highlightComponents.push(text_28);
        highlightComponents.push(text_a_6);
        highlightComponents.push(text_b_6);
        highlightComponents.push(error_text_2);
        highlightComponents.push(text_67);
        
        for (const thisComponent of highlightComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function highlightRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'highlight' ---
        // get current time
        t = highlightClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_26* updates
        if (t >= 0.0 && text_26.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_26.tStart = t;  // (not accounting for frame time here)
          text_26.frameNStart = frameN;  // exact frame index
          
          text_26.setAutoDraw(true);
        }
        
        
        // if text_26 is active this frame...
        if (text_26.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_26.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_26.tStop = t;  // not accounting for scr refresh
          text_26.frameNStop = frameN;  // exact frame index
          // update status
          text_26.status = PsychoJS.Status.FINISHED;
          text_26.setAutoDraw(false);
        }
        
        
        // *polygon_4* updates
        if (t >= 0.0 && polygon_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          polygon_4.tStart = t;  // (not accounting for frame time here)
          polygon_4.frameNStart = frameN;  // exact frame index
          
          polygon_4.setAutoDraw(true);
        }
        
        
        // if polygon_4 is active this frame...
        if (polygon_4.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (polygon_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          polygon_4.tStop = t;  // not accounting for scr refresh
          polygon_4.frameNStop = frameN;  // exact frame index
          // update status
          polygon_4.status = PsychoJS.Status.FINISHED;
          polygon_4.setAutoDraw(false);
        }
        
        
        // *text_27* updates
        if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_27.tStart = t;  // (not accounting for frame time here)
          text_27.frameNStart = frameN;  // exact frame index
          
          text_27.setAutoDraw(true);
        }
        
        
        // if text_27 is active this frame...
        if (text_27.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_27.tStop = t;  // not accounting for scr refresh
          text_27.frameNStop = frameN;  // exact frame index
          // update status
          text_27.status = PsychoJS.Status.FINISHED;
          text_27.setAutoDraw(false);
        }
        
        
        // *text_28* updates
        if (t >= 0.0 && text_28.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_28.tStart = t;  // (not accounting for frame time here)
          text_28.frameNStart = frameN;  // exact frame index
          
          text_28.setAutoDraw(true);
        }
        
        
        // if text_28 is active this frame...
        if (text_28.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_28.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_28.tStop = t;  // not accounting for scr refresh
          text_28.frameNStop = frameN;  // exact frame index
          // update status
          text_28.status = PsychoJS.Status.FINISHED;
          text_28.setAutoDraw(false);
        }
        
        
        // *text_a_6* updates
        if (t >= 0.0 && text_a_6.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_a_6.tStart = t;  // (not accounting for frame time here)
          text_a_6.frameNStart = frameN;  // exact frame index
          
          text_a_6.setAutoDraw(true);
        }
        
        
        // if text_a_6 is active this frame...
        if (text_a_6.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_a_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_a_6.tStop = t;  // not accounting for scr refresh
          text_a_6.frameNStop = frameN;  // exact frame index
          // update status
          text_a_6.status = PsychoJS.Status.FINISHED;
          text_a_6.setAutoDraw(false);
        }
        
        
        // *text_b_6* updates
        if (t >= 0.0 && text_b_6.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_b_6.tStart = t;  // (not accounting for frame time here)
          text_b_6.frameNStart = frameN;  // exact frame index
          
          text_b_6.setAutoDraw(true);
        }
        
        
        // if text_b_6 is active this frame...
        if (text_b_6.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_b_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_b_6.tStop = t;  // not accounting for scr refresh
          text_b_6.frameNStop = frameN;  // exact frame index
          // update status
          text_b_6.status = PsychoJS.Status.FINISHED;
          text_b_6.setAutoDraw(false);
        }
        
        
        // *error_text_2* updates
        if (t >= 0 && error_text_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          error_text_2.tStart = t;  // (not accounting for frame time here)
          error_text_2.frameNStart = frameN;  // exact frame index
          
          error_text_2.setAutoDraw(true);
        }
        
        
        // if error_text_2 is active this frame...
        if (error_text_2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (error_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          error_text_2.tStop = t;  // not accounting for scr refresh
          error_text_2.frameNStop = frameN;  // exact frame index
          // update status
          error_text_2.status = PsychoJS.Status.FINISHED;
          error_text_2.setAutoDraw(false);
        }
        
        
        // *text_67* updates
        if (t >= 0.0 && text_67.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_67.tStart = t;  // (not accounting for frame time here)
          text_67.frameNStart = frameN;  // exact frame index
          
          text_67.setAutoDraw(true);
        }
        
        
        // if text_67 is active this frame...
        if (text_67.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + y - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_67.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_67.tStop = t;  // not accounting for scr refresh
          text_67.frameNStop = frameN;  // exact frame index
          // update status
          text_67.status = PsychoJS.Status.FINISHED;
          text_67.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of highlightComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function highlightRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'highlight' ---
        for (const thisComponent of highlightComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('highlight.stopped', globalClock.getTime());
        // the Routine "highlight" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var attn_check_setup2MaxDurationReached;
var attn_check_setup2MaxDuration;
var attn_check_setup2Components;
function attn_check_setup2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'attn_check_setup2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        attn_check_setup2Clock.reset();
        routineTimer.reset();
        attn_check_setup2MaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('attn_check_setup2.started', globalClock.getTime());
        attn_check_setup2MaxDuration = null
        // keep track of which components have finished
        attn_check_setup2Components = [];
        
        for (const thisComponent of attn_check_setup2Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function attn_check_setup2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'attn_check_setup2' ---
        // get current time
        t = attn_check_setup2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of attn_check_setup2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function attn_check_setup2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'attn_check_setup2' ---
        for (const thisComponent of attn_check_setup2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('attn_check_setup2.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_16
        attn_hut2 = (attn_hut2 + 1);
        
        // the Routine "attn_check_setup2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var attn_check2MaxDurationReached;
var _confresp_5_allKeys;
var attn_check2MaxDuration;
var attn_check2Components;
function attn_check2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'attn_check2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        attn_check2Clock.reset();
        routineTimer.reset();
        attn_check2MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_17
        if ((attn_hut2 === 1)) {
            continueRoutine = true;
        } else {
            continueRoutine = false;
        }
        
        confresp_5.keys = undefined;
        confresp_5.rt = undefined;
        _confresp_5_allKeys = [];
        text_66.setText('Press a key');
        psychoJS.experiment.addData('attn_check2.started', globalClock.getTime());
        attn_check2MaxDuration = null
        // keep track of which components have finished
        attn_check2Components = [];
        attn_check2Components.push(text_88);
        attn_check2Components.push(text_90);
        attn_check2Components.push(text_91);
        attn_check2Components.push(confscale_numbers_4);
        attn_check2Components.push(confresp_5);
        attn_check2Components.push(text_66);
        
        for (const thisComponent of attn_check2Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function attn_check2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'attn_check2' ---
        // get current time
        t = attn_check2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_88* updates
        if (t >= 0.0 && text_88.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_88.tStart = t;  // (not accounting for frame time here)
          text_88.frameNStart = frameN;  // exact frame index
          
          text_88.setAutoDraw(true);
        }
        
        
        // if text_88 is active this frame...
        if (text_88.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *text_90* updates
        if (t >= 0.0 && text_90.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_90.tStart = t;  // (not accounting for frame time here)
          text_90.frameNStart = frameN;  // exact frame index
          
          text_90.setAutoDraw(true);
        }
        
        
        // if text_90 is active this frame...
        if (text_90.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *text_91* updates
        if (t >= 0.0 && text_91.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_91.tStart = t;  // (not accounting for frame time here)
          text_91.frameNStart = frameN;  // exact frame index
          
          text_91.setAutoDraw(true);
        }
        
        
        // if text_91 is active this frame...
        if (text_91.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *confscale_numbers_4* updates
        if (t >= 0.0 && confscale_numbers_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          confscale_numbers_4.tStart = t;  // (not accounting for frame time here)
          confscale_numbers_4.frameNStart = frameN;  // exact frame index
          
          confscale_numbers_4.setAutoDraw(true);
        }
        
        
        // if confscale_numbers_4 is active this frame...
        if (confscale_numbers_4.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *confresp_5* updates
        if (t >= 0.0 && confresp_5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          confresp_5.tStart = t;  // (not accounting for frame time here)
          confresp_5.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { confresp_5.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { confresp_5.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { confresp_5.clearEvents(); });
        }
        
        // if confresp_5 is active this frame...
        if (confresp_5.status === PsychoJS.Status.STARTED) {
          let theseKeys = confresp_5.getKeys({
            keyList: typeof ['1','2','3','4','5','6','7','p'] === 'string' ? [['1','2','3','4','5','6','7','p']] : ['1','2','3','4','5','6','7','p'], 
            waitRelease: false
          });
          _confresp_5_allKeys = _confresp_5_allKeys.concat(theseKeys);
          if (_confresp_5_allKeys.length > 0) {
            confresp_5.keys = _confresp_5_allKeys[_confresp_5_allKeys.length - 1].name;  // just the last key pressed
            confresp_5.rt = _confresp_5_allKeys[_confresp_5_allKeys.length - 1].rt;
            confresp_5.duration = _confresp_5_allKeys[_confresp_5_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        
        // *text_66* updates
        if (t >= 3 && text_66.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_66.tStart = t;  // (not accounting for frame time here)
          text_66.frameNStart = frameN;  // exact frame index
          
          text_66.setAutoDraw(true);
        }
        
        
        // if text_66 is active this frame...
        if (text_66.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of attn_check2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function attn_check2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'attn_check2' ---
        for (const thisComponent of attn_check2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('attn_check2.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(confresp_5.corr, level);
        }
        psychoJS.experiment.addData('confresp_5.keys', confresp_5.keys);
        if (typeof confresp_5.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('confresp_5.rt', confresp_5.rt);
            psychoJS.experiment.addData('confresp_5.duration', confresp_5.duration);
            routineTimer.reset();
            }
        
        confresp_5.stop();
        // the Routine "attn_check2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var confidence_judgementMaxDurationReached;
var skip_time;
var end_time1;
var start_time1;
var start_time2;
var start_time3;
var start_time4;
var _confresp_2_allKeys;
var confidence_judgementMaxDuration;
var confidence_judgementComponents;
function confidence_judgementRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'confidence_judgement' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        confidence_judgementClock.reset();
        routineTimer.reset();
        confidence_judgementMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_4
        skip_time = 0;
        end_time1 = 0;
        start_time1 = 0;
        start_time2 = 0;
        start_time3 = 0;
        start_time4 = 0;
        if ((skip_routine === true)) {
            continueRoutine = true;
            skip_time = 3;
            end_time1 = 1;
            start_time1 = 0;
            start_time2 = 1;
            start_time3 = 2;
            start_time4 = 3;
        } else {
            continueRoutine = true;
            skip_time = 0;
            start_time1 = 0;
            end_time1 = 0;
            start_time2 = 0;
            start_time3 = 0;
            start_time3 = 0;
        }
        
        confresp_2.keys = undefined;
        confresp_2.rt = undefined;
        _confresp_2_allKeys = [];
        text_48.setText('Press a key');
        psychoJS.experiment.addData('confidence_judgement.started', globalClock.getTime());
        confidence_judgementMaxDuration = null
        // keep track of which components have finished
        confidence_judgementComponents = [];
        confidence_judgementComponents.push(text_78);
        confidence_judgementComponents.push(text_79);
        confidence_judgementComponents.push(text_80);
        confidence_judgementComponents.push(confscale_numbers_2);
        confidence_judgementComponents.push(confresp_2);
        confidence_judgementComponents.push(text_48);
        
        for (const thisComponent of confidence_judgementComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function confidence_judgementRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'confidence_judgement' ---
        // get current time
        t = confidence_judgementClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_78* updates
        if (t >= 0.0 && text_78.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_78.tStart = t;  // (not accounting for frame time here)
          text_78.frameNStart = frameN;  // exact frame index
          
          text_78.setAutoDraw(true);
        }
        
        
        // if text_78 is active this frame...
        if (text_78.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *text_79* updates
        if (t >= 0.0 && text_79.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_79.tStart = t;  // (not accounting for frame time here)
          text_79.frameNStart = frameN;  // exact frame index
          
          text_79.setAutoDraw(true);
        }
        
        
        // if text_79 is active this frame...
        if (text_79.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *text_80* updates
        if (t >= 0.0 && text_80.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_80.tStart = t;  // (not accounting for frame time here)
          text_80.frameNStart = frameN;  // exact frame index
          
          text_80.setAutoDraw(true);
        }
        
        
        // if text_80 is active this frame...
        if (text_80.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *confscale_numbers_2* updates
        if (t >= 0.0 && confscale_numbers_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          confscale_numbers_2.tStart = t;  // (not accounting for frame time here)
          confscale_numbers_2.frameNStart = frameN;  // exact frame index
          
          confscale_numbers_2.setAutoDraw(true);
        }
        
        
        // if confscale_numbers_2 is active this frame...
        if (confscale_numbers_2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *confresp_2* updates
        if (t >= 0.0 && confresp_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          confresp_2.tStart = t;  // (not accounting for frame time here)
          confresp_2.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { confresp_2.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { confresp_2.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { confresp_2.clearEvents(); });
        }
        
        // if confresp_2 is active this frame...
        if (confresp_2.status === PsychoJS.Status.STARTED) {
          let theseKeys = confresp_2.getKeys({
            keyList: typeof ['1','2','3','4','5','6','7'] === 'string' ? [['1','2','3','4','5','6','7']] : ['1','2','3','4','5','6','7'], 
            waitRelease: false
          });
          _confresp_2_allKeys = _confresp_2_allKeys.concat(theseKeys);
          if (_confresp_2_allKeys.length > 0) {
            confresp_2.keys = _confresp_2_allKeys[_confresp_2_allKeys.length - 1].name;  // just the last key pressed
            confresp_2.rt = _confresp_2_allKeys[_confresp_2_allKeys.length - 1].rt;
            confresp_2.duration = _confresp_2_allKeys[_confresp_2_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        
        // *text_48* updates
        if (t >= 3 && text_48.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_48.tStart = t;  // (not accounting for frame time here)
          text_48.frameNStart = frameN;  // exact frame index
          
          text_48.setAutoDraw(true);
        }
        
        
        // if text_48 is active this frame...
        if (text_48.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of confidence_judgementComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function confidence_judgementRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'confidence_judgement' ---
        for (const thisComponent of confidence_judgementComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('confidence_judgement.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(confresp_2.corr, level);
        }
        psychoJS.experiment.addData('confresp_2.keys', confresp_2.keys);
        if (typeof confresp_2.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('confresp_2.rt', confresp_2.rt);
            psychoJS.experiment.addData('confresp_2.duration', confresp_2.duration);
            routineTimer.reset();
            }
        
        confresp_2.stop();
        // the Routine "confidence_judgement" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'feedback' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        feedbackClock.reset();
        routineTimer.reset();
        feedbackMaxDurationReached = false;
        // update component parameters for each repeat
        polygon_5.setPos([(- 0.05), respbox_y]);
        polygon_5.setLineColor(new util.Color(box_color));
        text_29.setText(targetword);
        text_30.setText(topside);
        text_31.setText(botside);
        image_3.setPos([0.45, fbkimage_y]);
        image_3.setImage(fbkimagefile);
        text_32.setPos([0, 0.175]);
        text_32.setText(errormsg);
        psychoJS.experiment.addData('feedback.started', globalClock.getTime());
        feedbackMaxDuration = null
        // keep track of which components have finished
        feedbackComponents = [];
        feedbackComponents.push(polygon_5);
        feedbackComponents.push(text_29);
        feedbackComponents.push(text_30);
        feedbackComponents.push(text_31);
        feedbackComponents.push(image_3);
        feedbackComponents.push(text_32);
        feedbackComponents.push(text_b_7);
        feedbackComponents.push(text_a_7);
        
        for (const thisComponent of feedbackComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function feedbackRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'feedback' ---
        // get current time
        t = feedbackClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *polygon_5* updates
        if (t >= 0.0 && polygon_5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          polygon_5.tStart = t;  // (not accounting for frame time here)
          polygon_5.frameNStart = frameN;  // exact frame index
          
          polygon_5.setAutoDraw(true);
        }
        
        
        // if polygon_5 is active this frame...
        if (polygon_5.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (polygon_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          polygon_5.tStop = t;  // not accounting for scr refresh
          polygon_5.frameNStop = frameN;  // exact frame index
          // update status
          polygon_5.status = PsychoJS.Status.FINISHED;
          polygon_5.setAutoDraw(false);
        }
        
        
        // *text_29* updates
        if (t >= 0.0 && text_29.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_29.tStart = t;  // (not accounting for frame time here)
          text_29.frameNStart = frameN;  // exact frame index
          
          text_29.setAutoDraw(true);
        }
        
        
        // if text_29 is active this frame...
        if (text_29.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_29.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_29.tStop = t;  // not accounting for scr refresh
          text_29.frameNStop = frameN;  // exact frame index
          // update status
          text_29.status = PsychoJS.Status.FINISHED;
          text_29.setAutoDraw(false);
        }
        
        
        // *text_30* updates
        if (t >= 0.0 && text_30.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_30.tStart = t;  // (not accounting for frame time here)
          text_30.frameNStart = frameN;  // exact frame index
          
          text_30.setAutoDraw(true);
        }
        
        
        // if text_30 is active this frame...
        if (text_30.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_30.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_30.tStop = t;  // not accounting for scr refresh
          text_30.frameNStop = frameN;  // exact frame index
          // update status
          text_30.status = PsychoJS.Status.FINISHED;
          text_30.setAutoDraw(false);
        }
        
        
        // *text_31* updates
        if (t >= 0.0 && text_31.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_31.tStart = t;  // (not accounting for frame time here)
          text_31.frameNStart = frameN;  // exact frame index
          
          text_31.setAutoDraw(true);
        }
        
        
        // if text_31 is active this frame...
        if (text_31.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_31.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_31.tStop = t;  // not accounting for scr refresh
          text_31.frameNStop = frameN;  // exact frame index
          // update status
          text_31.status = PsychoJS.Status.FINISHED;
          text_31.setAutoDraw(false);
        }
        
        
        // *image_3* updates
        if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          image_3.tStart = t;  // (not accounting for frame time here)
          image_3.frameNStart = frameN;  // exact frame index
          
          image_3.setAutoDraw(true);
        }
        
        
        // if image_3 is active this frame...
        if (image_3.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + whichblock - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          image_3.tStop = t;  // not accounting for scr refresh
          image_3.frameNStop = frameN;  // exact frame index
          // update status
          image_3.status = PsychoJS.Status.FINISHED;
          image_3.setAutoDraw(false);
        }
        
        
        // *text_32* updates
        if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_32.tStart = t;  // (not accounting for frame time here)
          text_32.frameNStart = frameN;  // exact frame index
          
          text_32.setAutoDraw(true);
        }
        
        
        // if text_32 is active this frame...
        if (text_32.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_32.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_32.tStop = t;  // not accounting for scr refresh
          text_32.frameNStop = frameN;  // exact frame index
          // update status
          text_32.status = PsychoJS.Status.FINISHED;
          text_32.setAutoDraw(false);
        }
        
        
        // *text_b_7* updates
        if (t >= 0.0 && text_b_7.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_b_7.tStart = t;  // (not accounting for frame time here)
          text_b_7.frameNStart = frameN;  // exact frame index
          
          text_b_7.setAutoDraw(true);
        }
        
        
        // if text_b_7 is active this frame...
        if (text_b_7.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_b_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_b_7.tStop = t;  // not accounting for scr refresh
          text_b_7.frameNStop = frameN;  // exact frame index
          // update status
          text_b_7.status = PsychoJS.Status.FINISHED;
          text_b_7.setAutoDraw(false);
        }
        
        
        // *text_a_7* updates
        if (t >= 0.0 && text_a_7.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_a_7.tStart = t;  // (not accounting for frame time here)
          text_a_7.frameNStart = frameN;  // exact frame index
          
          text_a_7.setAutoDraw(true);
        }
        
        
        // if text_a_7 is active this frame...
        if (text_a_7.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_a_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_a_7.tStop = t;  // not accounting for scr refresh
          text_a_7.frameNStop = frameN;  // exact frame index
          // update status
          text_a_7.status = PsychoJS.Status.FINISHED;
          text_a_7.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of feedbackComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function feedbackRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'feedback' ---
        for (const thisComponent of feedbackComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
        // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var penalty_boxMaxDurationReached;
var penalty_boxMaxDuration;
var penalty_boxComponents;
function penalty_boxRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'penalty_box' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        penalty_boxClock.reset();
        routineTimer.reset();
        penalty_boxMaxDurationReached = false;
        // update component parameters for each repeat
        text_4.setText('Three second penalty for missing the trial\n\n');
        text_12.setText('1');
        text_14.setText('2');
        text_21.setText('3');
        psychoJS.experiment.addData('penalty_box.started', globalClock.getTime());
        penalty_boxMaxDuration = null
        // keep track of which components have finished
        penalty_boxComponents = [];
        penalty_boxComponents.push(text_4);
        penalty_boxComponents.push(text_12);
        penalty_boxComponents.push(text_14);
        penalty_boxComponents.push(text_21);
        
        for (const thisComponent of penalty_boxComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function penalty_boxRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'penalty_box' ---
        // get current time
        t = penalty_boxClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_4* updates
        if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_4.tStart = t;  // (not accounting for frame time here)
          text_4.frameNStart = frameN;  // exact frame index
          
          text_4.setAutoDraw(true);
        }
        
        
        // if text_4 is active this frame...
        if (text_4.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + skip_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_4.tStop = t;  // not accounting for scr refresh
          text_4.frameNStop = frameN;  // exact frame index
          // update status
          text_4.status = PsychoJS.Status.FINISHED;
          text_4.setAutoDraw(false);
        }
        
        
        // *text_12* updates
        if (t >= start_time1 && text_12.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_12.tStart = t;  // (not accounting for frame time here)
          text_12.frameNStart = frameN;  // exact frame index
          
          text_12.setAutoDraw(true);
        }
        
        
        // if text_12 is active this frame...
        if (text_12.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = start_time1 + end_time1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_12.tStop = t;  // not accounting for scr refresh
          text_12.frameNStop = frameN;  // exact frame index
          // update status
          text_12.status = PsychoJS.Status.FINISHED;
          text_12.setAutoDraw(false);
        }
        
        
        // *text_14* updates
        if (t >= start_time2 && text_14.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_14.tStart = t;  // (not accounting for frame time here)
          text_14.frameNStart = frameN;  // exact frame index
          
          text_14.setAutoDraw(true);
        }
        
        
        // if text_14 is active this frame...
        if (text_14.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = start_time2 + end_time1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_14.tStop = t;  // not accounting for scr refresh
          text_14.frameNStop = frameN;  // exact frame index
          // update status
          text_14.status = PsychoJS.Status.FINISHED;
          text_14.setAutoDraw(false);
        }
        
        
        // *text_21* updates
        if (t >= start_time3 && text_21.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_21.tStart = t;  // (not accounting for frame time here)
          text_21.frameNStart = frameN;  // exact frame index
          
          text_21.setAutoDraw(true);
        }
        
        
        // if text_21 is active this frame...
        if (text_21.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = start_time3 + end_time1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_21.tStop = t;  // not accounting for scr refresh
          text_21.frameNStop = frameN;  // exact frame index
          // update status
          text_21.status = PsychoJS.Status.FINISHED;
          text_21.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of penalty_boxComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function penalty_boxRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'penalty_box' ---
        for (const thisComponent of penalty_boxComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('penalty_box.stopped', globalClock.getTime());
        // the Routine "penalty_box" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var intertrial1MaxDurationReached;
var intertrial1MaxDuration;
var intertrial1Components;
function intertrial1RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'intertrial1' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        intertrial1Clock.reset(routineTimer.getTime());
        routineTimer.add(0.500000);
        intertrial1MaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('intertrial1.started', globalClock.getTime());
        intertrial1MaxDuration = null
        // keep track of which components have finished
        intertrial1Components = [];
        intertrial1Components.push(fixation_2);
        
        for (const thisComponent of intertrial1Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function intertrial1RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'intertrial1' ---
        // get current time
        t = intertrial1Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *fixation_2* updates
        if (t >= 0.0 && fixation_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          fixation_2.tStart = t;  // (not accounting for frame time here)
          fixation_2.frameNStart = frameN;  // exact frame index
          
          fixation_2.setAutoDraw(true);
        }
        
        
        // if fixation_2 is active this frame...
        if (fixation_2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          fixation_2.tStop = t;  // not accounting for scr refresh
          fixation_2.frameNStop = frameN;  // exact frame index
          // update status
          fixation_2.status = PsychoJS.Status.FINISHED;
          fixation_2.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of intertrial1Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function intertrial1RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'intertrial1' ---
        for (const thisComponent of intertrial1Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('intertrial1.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (intertrial1MaxDurationReached) {
            intertrial1Clock.add(intertrial1MaxDuration);
        } else {
            intertrial1Clock.add(0.500000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var pause_reflectMaxDurationReached;
var pause_reflectMaxDuration;
var pause_reflectComponents;
function pause_reflectRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'pause_reflect' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        pause_reflectClock.reset();
        routineTimer.reset();
        pause_reflectMaxDurationReached = false;
        // update component parameters for each repeat
        slider.reset()
        psychoJS.experiment.addData('pause_reflect.started', globalClock.getTime());
        pause_reflectMaxDuration = null
        // keep track of which components have finished
        pause_reflectComponents = [];
        pause_reflectComponents.push(text_46);
        pause_reflectComponents.push(slider);
        
        for (const thisComponent of pause_reflectComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function pause_reflectRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'pause_reflect' ---
        // get current time
        t = pause_reflectClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_46* updates
        if (t >= 0.0 && text_46.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_46.tStart = t;  // (not accounting for frame time here)
          text_46.frameNStart = frameN;  // exact frame index
          
          text_46.setAutoDraw(true);
        }
        
        
        // if text_46 is active this frame...
        if (text_46.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *slider* updates
        if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          slider.tStart = t;  // (not accounting for frame time here)
          slider.frameNStart = frameN;  // exact frame index
          
          slider.setAutoDraw(true);
        }
        
        
        // if slider is active this frame...
        if (slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check slider for response to end Routine
        if (slider.getRating() !== undefined && slider.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of pause_reflectComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function pause_reflectRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'pause_reflect' ---
        for (const thisComponent of pause_reflectComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('pause_reflect.stopped', globalClock.getTime());
        psychoJS.experiment.addData('slider.response', slider.getRating());
        psychoJS.experiment.addData('slider.rt', slider.getRT());
        // the Routine "pause_reflect" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var accuracy_ratingMaxDurationReached;
var accuracy_ratingMaxDuration;
var accuracy_ratingComponents;
function accuracy_ratingRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'accuracy_rating' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        accuracy_ratingClock.reset();
        routineTimer.reset();
        accuracy_ratingMaxDurationReached = false;
        // update component parameters for each repeat
        acc_slider.reset()
        psychoJS.experiment.addData('accuracy_rating.started', globalClock.getTime());
        accuracy_ratingMaxDuration = null
        // keep track of which components have finished
        accuracy_ratingComponents = [];
        accuracy_ratingComponents.push(text_42);
        accuracy_ratingComponents.push(acc_slider);
        accuracy_ratingComponents.push(text_53);
        
        for (const thisComponent of accuracy_ratingComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function accuracy_ratingRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'accuracy_rating' ---
        // get current time
        t = accuracy_ratingClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_42* updates
        if (t >= 0.0 && text_42.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_42.tStart = t;  // (not accounting for frame time here)
          text_42.frameNStart = frameN;  // exact frame index
          
          text_42.setAutoDraw(true);
        }
        
        
        // if text_42 is active this frame...
        if (text_42.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *acc_slider* updates
        if (t >= 0.0 && acc_slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          acc_slider.tStart = t;  // (not accounting for frame time here)
          acc_slider.frameNStart = frameN;  // exact frame index
          
          acc_slider.setAutoDraw(true);
        }
        
        
        // if acc_slider is active this frame...
        if (acc_slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check acc_slider for response to end Routine
        if (acc_slider.getRating() !== undefined && acc_slider.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        
        // *text_53* updates
        if (t >= 15 && text_53.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_53.tStart = t;  // (not accounting for frame time here)
          text_53.frameNStart = frameN;  // exact frame index
          
          text_53.setAutoDraw(true);
        }
        
        
        // if text_53 is active this frame...
        if (text_53.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of accuracy_ratingComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function accuracy_ratingRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'accuracy_rating' ---
        for (const thisComponent of accuracy_ratingComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('accuracy_rating.stopped', globalClock.getTime());
        psychoJS.experiment.addData('acc_slider.response', acc_slider.getRating());
        psychoJS.experiment.addData('acc_slider.rt', acc_slider.getRT());
        // Run 'End Routine' code from code_8
        blocknum_rating = (blocknum_rating + 1);
        blocknum_rating4 = (blocknum_rating4 + 1);
        psychoJS.experiment.addData("blocknum_rating4", blocknum_rating4);
        psychoJS.experiment.addData("blocknum4", blocknum4);
        psychoJS.experiment.addData("blocknum_rating", blocknum_rating);
        psychoJS.experiment.addData("group_name2", group_name2);
        psychoJS.experiment.addData("condition", condition);
        
        // the Routine "accuracy_rating" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var guess_amountMaxDurationReached;
var guess_amountMaxDuration;
var guess_amountComponents;
function guess_amountRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'guess_amount' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        guess_amountClock.reset();
        routineTimer.reset();
        guess_amountMaxDurationReached = false;
        // update component parameters for each repeat
        guess_slider.reset()
        psychoJS.experiment.addData('guess_amount.started', globalClock.getTime());
        guess_amountMaxDuration = null
        // keep track of which components have finished
        guess_amountComponents = [];
        guess_amountComponents.push(text_41);
        guess_amountComponents.push(guess_slider);
        guess_amountComponents.push(text_52);
        
        for (const thisComponent of guess_amountComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function guess_amountRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'guess_amount' ---
        // get current time
        t = guess_amountClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_41* updates
        if (t >= 0.0 && text_41.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_41.tStart = t;  // (not accounting for frame time here)
          text_41.frameNStart = frameN;  // exact frame index
          
          text_41.setAutoDraw(true);
        }
        
        
        // if text_41 is active this frame...
        if (text_41.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *guess_slider* updates
        if (t >= 0.0 && guess_slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          guess_slider.tStart = t;  // (not accounting for frame time here)
          guess_slider.frameNStart = frameN;  // exact frame index
          
          guess_slider.setAutoDraw(true);
        }
        
        
        // if guess_slider is active this frame...
        if (guess_slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check guess_slider for response to end Routine
        if (guess_slider.getRating() !== undefined && guess_slider.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        
        // *text_52* updates
        if (t >= 15 && text_52.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_52.tStart = t;  // (not accounting for frame time here)
          text_52.frameNStart = frameN;  // exact frame index
          
          text_52.setAutoDraw(true);
        }
        
        
        // if text_52 is active this frame...
        if (text_52.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of guess_amountComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function guess_amountRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'guess_amount' ---
        for (const thisComponent of guess_amountComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('guess_amount.stopped', globalClock.getTime());
        psychoJS.experiment.addData('guess_slider.response', guess_slider.getRating());
        psychoJS.experiment.addData('guess_slider.rt', guess_slider.getRT());
        // the Routine "guess_amount" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var anxiety_ratingMaxDurationReached;
var anxiety_ratingMaxDuration;
var anxiety_ratingComponents;
function anxiety_ratingRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'anxiety_rating' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        anxiety_ratingClock.reset();
        routineTimer.reset();
        anxiety_ratingMaxDurationReached = false;
        // update component parameters for each repeat
        anxiety_slider.reset()
        psychoJS.experiment.addData('anxiety_rating.started', globalClock.getTime());
        anxiety_ratingMaxDuration = null
        // keep track of which components have finished
        anxiety_ratingComponents = [];
        anxiety_ratingComponents.push(text_40);
        anxiety_ratingComponents.push(anxiety_slider);
        anxiety_ratingComponents.push(text_51);
        anxiety_ratingComponents.push(low_anxiety_4);
        anxiety_ratingComponents.push(high_anxiety_4);
        anxiety_ratingComponents.push(moderate_anxiety_3);
        
        for (const thisComponent of anxiety_ratingComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function anxiety_ratingRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'anxiety_rating' ---
        // get current time
        t = anxiety_ratingClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_40* updates
        if (t >= 0.0 && text_40.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_40.tStart = t;  // (not accounting for frame time here)
          text_40.frameNStart = frameN;  // exact frame index
          
          text_40.setAutoDraw(true);
        }
        
        
        // if text_40 is active this frame...
        if (text_40.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *anxiety_slider* updates
        if (t >= 0.0 && anxiety_slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          anxiety_slider.tStart = t;  // (not accounting for frame time here)
          anxiety_slider.frameNStart = frameN;  // exact frame index
          
          anxiety_slider.setAutoDraw(true);
        }
        
        
        // if anxiety_slider is active this frame...
        if (anxiety_slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check anxiety_slider for response to end Routine
        if (anxiety_slider.getRating() !== undefined && anxiety_slider.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        
        // *text_51* updates
        if (t >= 15 && text_51.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_51.tStart = t;  // (not accounting for frame time here)
          text_51.frameNStart = frameN;  // exact frame index
          
          text_51.setAutoDraw(true);
        }
        
        
        // if text_51 is active this frame...
        if (text_51.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *low_anxiety_4* updates
        if (t >= 0.0 && low_anxiety_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          low_anxiety_4.tStart = t;  // (not accounting for frame time here)
          low_anxiety_4.frameNStart = frameN;  // exact frame index
          
          low_anxiety_4.setAutoDraw(true);
        }
        
        
        // if low_anxiety_4 is active this frame...
        if (low_anxiety_4.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *high_anxiety_4* updates
        if (t >= 0.0 && high_anxiety_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          high_anxiety_4.tStart = t;  // (not accounting for frame time here)
          high_anxiety_4.frameNStart = frameN;  // exact frame index
          
          high_anxiety_4.setAutoDraw(true);
        }
        
        
        // if high_anxiety_4 is active this frame...
        if (high_anxiety_4.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *moderate_anxiety_3* updates
        if (t >= 0.0 && moderate_anxiety_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          moderate_anxiety_3.tStart = t;  // (not accounting for frame time here)
          moderate_anxiety_3.frameNStart = frameN;  // exact frame index
          
          moderate_anxiety_3.setAutoDraw(true);
        }
        
        
        // if moderate_anxiety_3 is active this frame...
        if (moderate_anxiety_3.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of anxiety_ratingComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function anxiety_ratingRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'anxiety_rating' ---
        for (const thisComponent of anxiety_ratingComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('anxiety_rating.stopped', globalClock.getTime());
        psychoJS.experiment.addData('anxiety_slider.response', anxiety_slider.getRating());
        psychoJS.experiment.addData('anxiety_slider.rt', anxiety_slider.getRT());
        // the Routine "anxiety_rating" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var motivation_ratingMaxDurationReached;
var motivation_ratingMaxDuration;
var motivation_ratingComponents;
function motivation_ratingRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'motivation_rating' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        motivation_ratingClock.reset();
        routineTimer.reset();
        motivation_ratingMaxDurationReached = false;
        // update component parameters for each repeat
        motivation_slider.reset()
        psychoJS.experiment.addData('motivation_rating.started', globalClock.getTime());
        motivation_ratingMaxDuration = null
        // keep track of which components have finished
        motivation_ratingComponents = [];
        motivation_ratingComponents.push(text_43);
        motivation_ratingComponents.push(motivation_slider);
        motivation_ratingComponents.push(text_49);
        motivation_ratingComponents.push(high_motivation_3);
        motivation_ratingComponents.push(low_motivation_3);
        
        for (const thisComponent of motivation_ratingComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function motivation_ratingRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'motivation_rating' ---
        // get current time
        t = motivation_ratingClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_43* updates
        if (t >= 0.0 && text_43.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_43.tStart = t;  // (not accounting for frame time here)
          text_43.frameNStart = frameN;  // exact frame index
          
          text_43.setAutoDraw(true);
        }
        
        
        // if text_43 is active this frame...
        if (text_43.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *motivation_slider* updates
        if (t >= 0.0 && motivation_slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          motivation_slider.tStart = t;  // (not accounting for frame time here)
          motivation_slider.frameNStart = frameN;  // exact frame index
          
          motivation_slider.setAutoDraw(true);
        }
        
        
        // if motivation_slider is active this frame...
        if (motivation_slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check motivation_slider for response to end Routine
        if (motivation_slider.getRating() !== undefined && motivation_slider.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        
        // *text_49* updates
        if (t >= 15 && text_49.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_49.tStart = t;  // (not accounting for frame time here)
          text_49.frameNStart = frameN;  // exact frame index
          
          text_49.setAutoDraw(true);
        }
        
        
        // if text_49 is active this frame...
        if (text_49.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *high_motivation_3* updates
        if (t >= 0.0 && high_motivation_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          high_motivation_3.tStart = t;  // (not accounting for frame time here)
          high_motivation_3.frameNStart = frameN;  // exact frame index
          
          high_motivation_3.setAutoDraw(true);
        }
        
        
        // if high_motivation_3 is active this frame...
        if (high_motivation_3.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *low_motivation_3* updates
        if (t >= 0.0 && low_motivation_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          low_motivation_3.tStart = t;  // (not accounting for frame time here)
          low_motivation_3.frameNStart = frameN;  // exact frame index
          
          low_motivation_3.setAutoDraw(true);
        }
        
        
        // if low_motivation_3 is active this frame...
        if (low_motivation_3.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of motivation_ratingComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function motivation_ratingRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'motivation_rating' ---
        for (const thisComponent of motivation_ratingComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('motivation_rating.stopped', globalClock.getTime());
        psychoJS.experiment.addData('motivation_slider.response', motivation_slider.getRating());
        psychoJS.experiment.addData('motivation_slider.rt', motivation_slider.getRT());
        // the Routine "motivation_rating" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var pauseMaxDurationReached;
var _key_resp_10_allKeys;
var pauseMaxDuration;
var pauseComponents;
function pauseRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'pause' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        pauseClock.reset();
        routineTimer.reset();
        pauseMaxDurationReached = false;
        // update component parameters for each repeat
        key_resp_10.keys = undefined;
        key_resp_10.rt = undefined;
        _key_resp_10_allKeys = [];
        psychoJS.experiment.addData('pause.started', globalClock.getTime());
        pauseMaxDuration = null
        // keep track of which components have finished
        pauseComponents = [];
        pauseComponents.push(key_resp_10);
        pauseComponents.push(text_8);
        
        for (const thisComponent of pauseComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function pauseRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'pause' ---
        // get current time
        t = pauseClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *key_resp_10* updates
        if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          key_resp_10.tStart = t;  // (not accounting for frame time here)
          key_resp_10.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
        }
        
        // if key_resp_10 is active this frame...
        if (key_resp_10.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_10.getKeys({
            keyList: typeof 't' === 'string' ? ['t'] : 't', 
            waitRelease: false
          });
          _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
          if (_key_resp_10_allKeys.length > 0) {
            key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
            key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        
        // *text_8* updates
        if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_8.tStart = t;  // (not accounting for frame time here)
          text_8.frameNStart = frameN;  // exact frame index
          
          text_8.setAutoDraw(true);
        }
        
        
        // if text_8 is active this frame...
        if (text_8.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of pauseComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function pauseRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'pause' ---
        for (const thisComponent of pauseComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('pause.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_10.corr, level);
        }
        psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
        if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
            psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
            routineTimer.reset();
            }
        
        key_resp_10.stop();
        // the Routine "pause" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var new_code2MaxDurationReached;
var xx2;
var useRows2;
var new_code2MaxDuration;
var new_code2Components;
function new_code2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'new_code2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        new_code2Clock.reset();
        routineTimer.reset();
        new_code2MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_2
        xx2 = block_gen2.pop();
        console.log(xx2);
        if ((xx2 === 1)) {
            useRows2 = "10:20";
            whichblock = easy_blocks.pop();
            condition = "Easy";
        }
        if ((xx2 === 2)) {
            useRows2 = "50:60";
            whichblock = medium_blocks.pop();
            condition = "Medium";
        }
        if ((xx2 === 3)) {
            useRows2 = "90:100";
            whichblock = hard_blocks.pop();
            condition = "Hard";
        }
        
        psychoJS.experiment.addData('new_code2.started', globalClock.getTime());
        new_code2MaxDuration = null
        // keep track of which components have finished
        new_code2Components = [];
        
        for (const thisComponent of new_code2Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function new_code2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'new_code2' ---
        // get current time
        t = new_code2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of new_code2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function new_code2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'new_code2' ---
        for (const thisComponent of new_code2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('new_code2.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_2
        trialnum = (trialnum + 1);
        blocknum12 = (blocknum12 + 1);
        blocknum4 = (blocknum4 + 1);
        
        // the Routine "new_code2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var error_msg2MaxDurationReached;
var error_msg2MaxDuration;
var error_msg2Components;
function error_msg2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'error_msg2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        error_msg2Clock.reset();
        routineTimer.reset();
        error_msg2MaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('error_msg2.started', globalClock.getTime());
        error_msg2MaxDuration = null
        // keep track of which components have finished
        error_msg2Components = [];
        
        for (const thisComponent of error_msg2Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function error_msg2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'error_msg2' ---
        // get current time
        t = error_msg2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of error_msg2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function error_msg2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'error_msg2' ---
        for (const thisComponent of error_msg2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('error_msg2.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_19
        if ((((Study1Response_2.rt < 1) && (xx2 === 2)) || ((Study1Response_2.rt < 1) && (xx2 === 3)))) {
            errormsg2 = "SLOW DOWN, TOO FAST!";
        } else {
            errormsg2 = " ";
        }
        
        // the Routine "error_msg2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var new_code3MaxDurationReached;
var xx3;
var useRows3;
var new_code3MaxDuration;
var new_code3Components;
function new_code3RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'new_code3' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        new_code3Clock.reset();
        routineTimer.reset();
        new_code3MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_5
        xx3 = block_gen3.pop();
        console.log(xx3);
        if ((xx3 === 1)) {
            useRows3 = "20:30";
            whichblock = easy_blocks.pop();
            condition = "Easy";
        }
        if ((xx3 === 2)) {
            useRows3 = "60:70";
            whichblock = medium_blocks.pop();
            condition = "Medium";
        }
        if ((xx3 === 3)) {
            useRows3 = "100:110";
            whichblock = hard_blocks.pop();
            condition = "Hard";
        }
        
        psychoJS.experiment.addData('new_code3.started', globalClock.getTime());
        new_code3MaxDuration = null
        // keep track of which components have finished
        new_code3Components = [];
        
        for (const thisComponent of new_code3Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function new_code3RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'new_code3' ---
        // get current time
        t = new_code3Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of new_code3Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function new_code3RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'new_code3' ---
        for (const thisComponent of new_code3Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('new_code3.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_5
        trialnum = (trialnum + 1);
        blocknum12 = (blocknum12 + 1);
        blocknum4 = (blocknum4 + 1);
        
        // the Routine "new_code3" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var error_msg3MaxDurationReached;
var error_msg3MaxDuration;
var error_msg3Components;
function error_msg3RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'error_msg3' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        error_msg3Clock.reset();
        routineTimer.reset();
        error_msg3MaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('error_msg3.started', globalClock.getTime());
        error_msg3MaxDuration = null
        // keep track of which components have finished
        error_msg3Components = [];
        
        for (const thisComponent of error_msg3Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function error_msg3RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'error_msg3' ---
        // get current time
        t = error_msg3Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of error_msg3Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function error_msg3RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'error_msg3' ---
        for (const thisComponent of error_msg3Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('error_msg3.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_21
        if ((((Study1Response_2.rt < 1) && (xx3 === 2)) || ((Study1Response_2.rt < 1) && (xx3 === 3)))) {
            errormsg2 = "SLOW DOWN, TOO FAST!";
        } else {
            errormsg2 = " ";
        }
        
        // the Routine "error_msg3" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var attn_check_setupMaxDurationReached;
var attn_check_setupMaxDuration;
var attn_check_setupComponents;
function attn_check_setupRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'attn_check_setup' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        attn_check_setupClock.reset();
        routineTimer.reset();
        attn_check_setupMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('attn_check_setup.started', globalClock.getTime());
        attn_check_setupMaxDuration = null
        // keep track of which components have finished
        attn_check_setupComponents = [];
        
        for (const thisComponent of attn_check_setupComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function attn_check_setupRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'attn_check_setup' ---
        // get current time
        t = attn_check_setupClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of attn_check_setupComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function attn_check_setupRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'attn_check_setup' ---
        for (const thisComponent of attn_check_setupComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('attn_check_setup.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_12
        attn_hut = (attn_hut + 1);
        
        // the Routine "attn_check_setup" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var attn_checkMaxDurationReached;
var _confresp_3_allKeys;
var attn_checkMaxDuration;
var attn_checkComponents;
function attn_checkRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'attn_check' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        attn_checkClock.reset();
        routineTimer.reset();
        attn_checkMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_14
        if ((attn_hut === 7)) {
            continueRoutine = true;
        } else {
            continueRoutine = false;
        }
        
        confresp_3.keys = undefined;
        confresp_3.rt = undefined;
        _confresp_3_allKeys = [];
        text_59.setText('Press a key');
        psychoJS.experiment.addData('attn_check.started', globalClock.getTime());
        attn_checkMaxDuration = null
        // keep track of which components have finished
        attn_checkComponents = [];
        attn_checkComponents.push(text_84);
        attn_checkComponents.push(text_85);
        attn_checkComponents.push(text_87);
        attn_checkComponents.push(confscale_numbers_3);
        attn_checkComponents.push(confresp_3);
        attn_checkComponents.push(text_59);
        
        for (const thisComponent of attn_checkComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function attn_checkRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'attn_check' ---
        // get current time
        t = attn_checkClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_84* updates
        if (t >= 0.0 && text_84.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_84.tStart = t;  // (not accounting for frame time here)
          text_84.frameNStart = frameN;  // exact frame index
          
          text_84.setAutoDraw(true);
        }
        
        
        // if text_84 is active this frame...
        if (text_84.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *text_85* updates
        if (t >= 0.0 && text_85.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_85.tStart = t;  // (not accounting for frame time here)
          text_85.frameNStart = frameN;  // exact frame index
          
          text_85.setAutoDraw(true);
        }
        
        
        // if text_85 is active this frame...
        if (text_85.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *text_87* updates
        if (t >= 0.0 && text_87.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_87.tStart = t;  // (not accounting for frame time here)
          text_87.frameNStart = frameN;  // exact frame index
          
          text_87.setAutoDraw(true);
        }
        
        
        // if text_87 is active this frame...
        if (text_87.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *confscale_numbers_3* updates
        if (t >= 0.0 && confscale_numbers_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          confscale_numbers_3.tStart = t;  // (not accounting for frame time here)
          confscale_numbers_3.frameNStart = frameN;  // exact frame index
          
          confscale_numbers_3.setAutoDraw(true);
        }
        
        
        // if confscale_numbers_3 is active this frame...
        if (confscale_numbers_3.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *confresp_3* updates
        if (t >= 0.0 && confresp_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          confresp_3.tStart = t;  // (not accounting for frame time here)
          confresp_3.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { confresp_3.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { confresp_3.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { confresp_3.clearEvents(); });
        }
        
        // if confresp_3 is active this frame...
        if (confresp_3.status === PsychoJS.Status.STARTED) {
          let theseKeys = confresp_3.getKeys({
            keyList: typeof ['1','2','3','4','5','6','7','p'] === 'string' ? [['1','2','3','4','5','6','7','p']] : ['1','2','3','4','5','6','7','p'], 
            waitRelease: false
          });
          _confresp_3_allKeys = _confresp_3_allKeys.concat(theseKeys);
          if (_confresp_3_allKeys.length > 0) {
            confresp_3.keys = _confresp_3_allKeys[_confresp_3_allKeys.length - 1].name;  // just the last key pressed
            confresp_3.rt = _confresp_3_allKeys[_confresp_3_allKeys.length - 1].rt;
            confresp_3.duration = _confresp_3_allKeys[_confresp_3_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        
        // *text_59* updates
        if (t >= 3 && text_59.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_59.tStart = t;  // (not accounting for frame time here)
          text_59.frameNStart = frameN;  // exact frame index
          
          text_59.setAutoDraw(true);
        }
        
        
        // if text_59 is active this frame...
        if (text_59.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of attn_checkComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function attn_checkRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'attn_check' ---
        for (const thisComponent of attn_checkComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('attn_check.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(confresp_3.corr, level);
        }
        psychoJS.experiment.addData('confresp_3.keys', confresp_3.keys);
        if (typeof confresp_3.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('confresp_3.rt', confresp_3.rt);
            psychoJS.experiment.addData('confresp_3.duration', confresp_3.duration);
            routineTimer.reset();
            }
        
        confresp_3.stop();
        // the Routine "attn_check" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var attn_check_restartMaxDurationReached;
var attn_check_restartMaxDuration;
var attn_check_restartComponents;
function attn_check_restartRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'attn_check_restart' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        attn_check_restartClock.reset();
        routineTimer.reset();
        attn_check_restartMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_15
        attn_hut = 0;
        
        psychoJS.experiment.addData('attn_check_restart.started', globalClock.getTime());
        attn_check_restartMaxDuration = null
        // keep track of which components have finished
        attn_check_restartComponents = [];
        
        for (const thisComponent of attn_check_restartComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function attn_check_restartRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'attn_check_restart' ---
        // get current time
        t = attn_check_restartClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of attn_check_restartComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function attn_check_restartRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'attn_check_restart' ---
        for (const thisComponent of attn_check_restartComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('attn_check_restart.stopped', globalClock.getTime());
        // the Routine "attn_check_restart" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var new_code4MaxDurationReached;
var xx4;
var useRows4;
var new_code4MaxDuration;
var new_code4Components;
function new_code4RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'new_code4' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        new_code4Clock.reset();
        routineTimer.reset();
        new_code4MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from code_6
        xx4 = block_gen4.pop();
        console.log(xx4);
        if ((xx4 === 1)) {
            useRows4 = "30:40";
            whichblock = easy_blocks.pop();
            condition = "Easy";
        }
        if ((xx4 === 2)) {
            useRows4 = "70:80";
            whichblock = medium_blocks.pop();
            condition = "Medium";
        }
        if ((xx4 === 3)) {
            useRows4 = "110:120";
            whichblock = hard_blocks.pop();
            condition = "Hard";
        }
        
        psychoJS.experiment.addData('new_code4.started', globalClock.getTime());
        new_code4MaxDuration = null
        // keep track of which components have finished
        new_code4Components = [];
        
        for (const thisComponent of new_code4Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function new_code4RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'new_code4' ---
        // get current time
        t = new_code4Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of new_code4Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function new_code4RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'new_code4' ---
        for (const thisComponent of new_code4Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('new_code4.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_6
        trialnum = (trialnum + 1);
        blocknum12 = (blocknum12 + 1);
        blocknum4 = (blocknum4 + 1);
        // the Routine "new_code4" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var error_msg4MaxDurationReached;
var error_msg4MaxDuration;
var error_msg4Components;
function error_msg4RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'error_msg4' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        error_msg4Clock.reset();
        routineTimer.reset();
        error_msg4MaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('error_msg4.started', globalClock.getTime());
        error_msg4MaxDuration = null
        // keep track of which components have finished
        error_msg4Components = [];
        
        for (const thisComponent of error_msg4Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function error_msg4RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'error_msg4' ---
        // get current time
        t = error_msg4Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of error_msg4Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function error_msg4RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'error_msg4' ---
        for (const thisComponent of error_msg4Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('error_msg4.stopped', globalClock.getTime());
        // Run 'End Routine' code from code_22
        if ((((Study1Response_2.rt < 1) && (xx4 === 2)) || ((Study1Response_2.rt < 1) && (xx4 === 3)))) {
            errormsg2 = "SLOW DOWN, TOO FAST!";
        } else {
            errormsg2 = " ";
        }
        
        // the Routine "error_msg4" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var final_ratingsMaxDurationReached;
var final_ratingsMaxDuration;
var final_ratingsComponents;
function final_ratingsRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'final_ratings' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        final_ratingsClock.reset();
        routineTimer.reset();
        final_ratingsMaxDurationReached = false;
        // update component parameters for each repeat
        slider_3.reset()
        psychoJS.experiment.addData('final_ratings.started', globalClock.getTime());
        final_ratingsMaxDuration = null
        // keep track of which components have finished
        final_ratingsComponents = [];
        final_ratingsComponents.push(text_50);
        final_ratingsComponents.push(slider_3);
        
        for (const thisComponent of final_ratingsComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function final_ratingsRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'final_ratings' ---
        // get current time
        t = final_ratingsClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_50* updates
        if (t >= 0.0 && text_50.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_50.tStart = t;  // (not accounting for frame time here)
          text_50.frameNStart = frameN;  // exact frame index
          
          text_50.setAutoDraw(true);
        }
        
        
        // if text_50 is active this frame...
        if (text_50.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *slider_3* updates
        if (t >= 0.0 && slider_3.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          slider_3.tStart = t;  // (not accounting for frame time here)
          slider_3.frameNStart = frameN;  // exact frame index
          
          slider_3.setAutoDraw(true);
        }
        
        
        // if slider_3 is active this frame...
        if (slider_3.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check slider_3 for response to end Routine
        if (slider_3.getRating() !== undefined && slider_3.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of final_ratingsComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function final_ratingsRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'final_ratings' ---
        for (const thisComponent of final_ratingsComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('final_ratings.stopped', globalClock.getTime());
        psychoJS.experiment.addData('slider_3.response', slider_3.getRating());
        psychoJS.experiment.addData('slider_3.rt', slider_3.getRT());
        // the Routine "final_ratings" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var easy_postMaxDurationReached;
var easy_postMaxDuration;
var easy_postComponents;
function easy_postRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'easy_post' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        easy_postClock.reset();
        routineTimer.reset();
        easy_postMaxDurationReached = false;
        // update component parameters for each repeat
        percent_slider_easy2.reset()
        psychoJS.experiment.addData('easy_post.started', globalClock.getTime());
        easy_postMaxDuration = null
        // keep track of which components have finished
        easy_postComponents = [];
        easy_postComponents.push(text_71);
        easy_postComponents.push(easy_5);
        easy_postComponents.push(percent_slider_easy2);
        
        for (const thisComponent of easy_postComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function easy_postRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'easy_post' ---
        // get current time
        t = easy_postClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_71* updates
        if (t >= 0.0 && text_71.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_71.tStart = t;  // (not accounting for frame time here)
          text_71.frameNStart = frameN;  // exact frame index
          
          text_71.setAutoDraw(true);
        }
        
        
        // if text_71 is active this frame...
        if (text_71.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *easy_5* updates
        if (t >= 0.0 && easy_5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          easy_5.tStart = t;  // (not accounting for frame time here)
          easy_5.frameNStart = frameN;  // exact frame index
          
          easy_5.setAutoDraw(true);
        }
        
        
        // if easy_5 is active this frame...
        if (easy_5.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *percent_slider_easy2* updates
        if (t >= 0.0 && percent_slider_easy2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          percent_slider_easy2.tStart = t;  // (not accounting for frame time here)
          percent_slider_easy2.frameNStart = frameN;  // exact frame index
          
          percent_slider_easy2.setAutoDraw(true);
        }
        
        
        // if percent_slider_easy2 is active this frame...
        if (percent_slider_easy2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check percent_slider_easy2 for response to end Routine
        if (percent_slider_easy2.getRating() !== undefined && percent_slider_easy2.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of easy_postComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function easy_postRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'easy_post' ---
        for (const thisComponent of easy_postComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('easy_post.stopped', globalClock.getTime());
        psychoJS.experiment.addData('percent_slider_easy2.response', percent_slider_easy2.getRating());
        psychoJS.experiment.addData('percent_slider_easy2.rt', percent_slider_easy2.getRT());
        // the Routine "easy_post" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var medium_postMaxDurationReached;
var medium_postMaxDuration;
var medium_postComponents;
function medium_postRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'medium_post' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        medium_postClock.reset();
        routineTimer.reset();
        medium_postMaxDurationReached = false;
        // update component parameters for each repeat
        percent_slider_medium2.reset()
        psychoJS.experiment.addData('medium_post.started', globalClock.getTime());
        medium_postMaxDuration = null
        // keep track of which components have finished
        medium_postComponents = [];
        medium_postComponents.push(text_72);
        medium_postComponents.push(medium_4);
        medium_postComponents.push(percent_slider_medium2);
        
        for (const thisComponent of medium_postComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function medium_postRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'medium_post' ---
        // get current time
        t = medium_postClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_72* updates
        if (t >= 0.0 && text_72.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_72.tStart = t;  // (not accounting for frame time here)
          text_72.frameNStart = frameN;  // exact frame index
          
          text_72.setAutoDraw(true);
        }
        
        
        // if text_72 is active this frame...
        if (text_72.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *medium_4* updates
        if (t >= 0.0 && medium_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          medium_4.tStart = t;  // (not accounting for frame time here)
          medium_4.frameNStart = frameN;  // exact frame index
          
          medium_4.setAutoDraw(true);
        }
        
        
        // if medium_4 is active this frame...
        if (medium_4.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *percent_slider_medium2* updates
        if (t >= 0.0 && percent_slider_medium2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          percent_slider_medium2.tStart = t;  // (not accounting for frame time here)
          percent_slider_medium2.frameNStart = frameN;  // exact frame index
          
          percent_slider_medium2.setAutoDraw(true);
        }
        
        
        // if percent_slider_medium2 is active this frame...
        if (percent_slider_medium2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check percent_slider_medium2 for response to end Routine
        if (percent_slider_medium2.getRating() !== undefined && percent_slider_medium2.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of medium_postComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function medium_postRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'medium_post' ---
        for (const thisComponent of medium_postComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('medium_post.stopped', globalClock.getTime());
        psychoJS.experiment.addData('percent_slider_medium2.response', percent_slider_medium2.getRating());
        psychoJS.experiment.addData('percent_slider_medium2.rt', percent_slider_medium2.getRT());
        // the Routine "medium_post" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var hard_postMaxDurationReached;
var hard_postMaxDuration;
var hard_postComponents;
function hard_postRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'hard_post' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        hard_postClock.reset();
        routineTimer.reset();
        hard_postMaxDurationReached = false;
        // update component parameters for each repeat
        percent_slider_hard2.reset()
        psychoJS.experiment.addData('hard_post.started', globalClock.getTime());
        hard_postMaxDuration = null
        // keep track of which components have finished
        hard_postComponents = [];
        hard_postComponents.push(text_73);
        hard_postComponents.push(hard_5);
        hard_postComponents.push(percent_slider_hard2);
        
        for (const thisComponent of hard_postComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function hard_postRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'hard_post' ---
        // get current time
        t = hard_postClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_73* updates
        if (t >= 0.0 && text_73.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_73.tStart = t;  // (not accounting for frame time here)
          text_73.frameNStart = frameN;  // exact frame index
          
          text_73.setAutoDraw(true);
        }
        
        
        // if text_73 is active this frame...
        if (text_73.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *hard_5* updates
        if (t >= 0.0 && hard_5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          hard_5.tStart = t;  // (not accounting for frame time here)
          hard_5.frameNStart = frameN;  // exact frame index
          
          hard_5.setAutoDraw(true);
        }
        
        
        // if hard_5 is active this frame...
        if (hard_5.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *percent_slider_hard2* updates
        if (t >= 0.0 && percent_slider_hard2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          percent_slider_hard2.tStart = t;  // (not accounting for frame time here)
          percent_slider_hard2.frameNStart = frameN;  // exact frame index
          
          percent_slider_hard2.setAutoDraw(true);
        }
        
        
        // if percent_slider_hard2 is active this frame...
        if (percent_slider_hard2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check percent_slider_hard2 for response to end Routine
        if (percent_slider_hard2.getRating() !== undefined && percent_slider_hard2.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of hard_postComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function hard_postRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'hard_post' ---
        for (const thisComponent of hard_postComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('hard_post.stopped', globalClock.getTime());
        psychoJS.experiment.addData('percent_slider_hard2.response', percent_slider_hard2.getRating());
        psychoJS.experiment.addData('percent_slider_hard2.rt', percent_slider_hard2.getRT());
        // the Routine "hard_post" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var relief_postMaxDurationReached;
var relief_postMaxDuration;
var relief_postComponents;
function relief_postRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'relief_post' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        relief_postClock.reset();
        routineTimer.reset();
        relief_postMaxDurationReached = false;
        // update component parameters for each repeat
        relief_slider.reset()
        psychoJS.experiment.addData('relief_post.started', globalClock.getTime());
        relief_postMaxDuration = null
        // keep track of which components have finished
        relief_postComponents = [];
        relief_postComponents.push(text_75);
        relief_postComponents.push(relief_slider);
        relief_postComponents.push(low_relief);
        relief_postComponents.push(high_relief);
        relief_postComponents.push(moderate_relief);
        
        for (const thisComponent of relief_postComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function relief_postRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'relief_post' ---
        // get current time
        t = relief_postClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_75* updates
        if (t >= 0.0 && text_75.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_75.tStart = t;  // (not accounting for frame time here)
          text_75.frameNStart = frameN;  // exact frame index
          
          text_75.setAutoDraw(true);
        }
        
        
        // if text_75 is active this frame...
        if (text_75.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *relief_slider* updates
        if (t >= 0.0 && relief_slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          relief_slider.tStart = t;  // (not accounting for frame time here)
          relief_slider.frameNStart = frameN;  // exact frame index
          
          relief_slider.setAutoDraw(true);
        }
        
        
        // if relief_slider is active this frame...
        if (relief_slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check relief_slider for response to end Routine
        if (relief_slider.getRating() !== undefined && relief_slider.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        
        // *low_relief* updates
        if (t >= 0.0 && low_relief.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          low_relief.tStart = t;  // (not accounting for frame time here)
          low_relief.frameNStart = frameN;  // exact frame index
          
          low_relief.setAutoDraw(true);
        }
        
        
        // if low_relief is active this frame...
        if (low_relief.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *high_relief* updates
        if (t >= 0.0 && high_relief.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          high_relief.tStart = t;  // (not accounting for frame time here)
          high_relief.frameNStart = frameN;  // exact frame index
          
          high_relief.setAutoDraw(true);
        }
        
        
        // if high_relief is active this frame...
        if (high_relief.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *moderate_relief* updates
        if (t >= 0.0 && moderate_relief.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          moderate_relief.tStart = t;  // (not accounting for frame time here)
          moderate_relief.frameNStart = frameN;  // exact frame index
          
          moderate_relief.setAutoDraw(true);
        }
        
        
        // if moderate_relief is active this frame...
        if (moderate_relief.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of relief_postComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function relief_postRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'relief_post' ---
        for (const thisComponent of relief_postComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('relief_post.stopped', globalClock.getTime());
        psychoJS.experiment.addData('relief_slider.response', relief_slider.getRating());
        psychoJS.experiment.addData('relief_slider.rt', relief_slider.getRT());
        // the Routine "relief_post" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var anxiety_postMaxDurationReached;
var anxiety_postMaxDuration;
var anxiety_postComponents;
function anxiety_postRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'anxiety_post' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        anxiety_postClock.reset();
        routineTimer.reset();
        anxiety_postMaxDurationReached = false;
        // update component parameters for each repeat
        post_anxiety_slider.reset()
        psychoJS.experiment.addData('anxiety_post.started', globalClock.getTime());
        anxiety_postMaxDuration = null
        // keep track of which components have finished
        anxiety_postComponents = [];
        anxiety_postComponents.push(text_61);
        anxiety_postComponents.push(post_anxiety_slider);
        anxiety_postComponents.push(low_anxiety_5);
        anxiety_postComponents.push(high_anxiety_5);
        anxiety_postComponents.push(moderate_anxiety_4);
        
        for (const thisComponent of anxiety_postComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function anxiety_postRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'anxiety_post' ---
        // get current time
        t = anxiety_postClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_61* updates
        if (t >= 0.0 && text_61.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_61.tStart = t;  // (not accounting for frame time here)
          text_61.frameNStart = frameN;  // exact frame index
          
          text_61.setAutoDraw(true);
        }
        
        
        // if text_61 is active this frame...
        if (text_61.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *post_anxiety_slider* updates
        if (t >= 0.0 && post_anxiety_slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          post_anxiety_slider.tStart = t;  // (not accounting for frame time here)
          post_anxiety_slider.frameNStart = frameN;  // exact frame index
          
          post_anxiety_slider.setAutoDraw(true);
        }
        
        
        // if post_anxiety_slider is active this frame...
        if (post_anxiety_slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check post_anxiety_slider for response to end Routine
        if (post_anxiety_slider.getRating() !== undefined && post_anxiety_slider.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        
        // *low_anxiety_5* updates
        if (t >= 0.0 && low_anxiety_5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          low_anxiety_5.tStart = t;  // (not accounting for frame time here)
          low_anxiety_5.frameNStart = frameN;  // exact frame index
          
          low_anxiety_5.setAutoDraw(true);
        }
        
        
        // if low_anxiety_5 is active this frame...
        if (low_anxiety_5.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *high_anxiety_5* updates
        if (t >= 0.0 && high_anxiety_5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          high_anxiety_5.tStart = t;  // (not accounting for frame time here)
          high_anxiety_5.frameNStart = frameN;  // exact frame index
          
          high_anxiety_5.setAutoDraw(true);
        }
        
        
        // if high_anxiety_5 is active this frame...
        if (high_anxiety_5.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *moderate_anxiety_4* updates
        if (t >= 0.0 && moderate_anxiety_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          moderate_anxiety_4.tStart = t;  // (not accounting for frame time here)
          moderate_anxiety_4.frameNStart = frameN;  // exact frame index
          
          moderate_anxiety_4.setAutoDraw(true);
        }
        
        
        // if moderate_anxiety_4 is active this frame...
        if (moderate_anxiety_4.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of anxiety_postComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function anxiety_postRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'anxiety_post' ---
        for (const thisComponent of anxiety_postComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('anxiety_post.stopped', globalClock.getTime());
        psychoJS.experiment.addData('post_anxiety_slider.response', post_anxiety_slider.getRating());
        psychoJS.experiment.addData('post_anxiety_slider.rt', post_anxiety_slider.getRT());
        // the Routine "anxiety_post" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var motivation_postMaxDurationReached;
var motivation_postMaxDuration;
var motivation_postComponents;
function motivation_postRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'motivation_post' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        motivation_postClock.reset();
        routineTimer.reset();
        motivation_postMaxDurationReached = false;
        // update component parameters for each repeat
        post_motivation_slider.reset()
        psychoJS.experiment.addData('motivation_post.started', globalClock.getTime());
        motivation_postMaxDuration = null
        // keep track of which components have finished
        motivation_postComponents = [];
        motivation_postComponents.push(text_77);
        motivation_postComponents.push(post_motivation_slider);
        motivation_postComponents.push(high_motivation);
        motivation_postComponents.push(low_motivation);
        
        for (const thisComponent of motivation_postComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function motivation_postRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'motivation_post' ---
        // get current time
        t = motivation_postClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_77* updates
        if (t >= 0.0 && text_77.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_77.tStart = t;  // (not accounting for frame time here)
          text_77.frameNStart = frameN;  // exact frame index
          
          text_77.setAutoDraw(true);
        }
        
        
        // if text_77 is active this frame...
        if (text_77.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *post_motivation_slider* updates
        if (t >= 0.0 && post_motivation_slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          post_motivation_slider.tStart = t;  // (not accounting for frame time here)
          post_motivation_slider.frameNStart = frameN;  // exact frame index
          
          post_motivation_slider.setAutoDraw(true);
        }
        
        
        // if post_motivation_slider is active this frame...
        if (post_motivation_slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check post_motivation_slider for response to end Routine
        if (post_motivation_slider.getRating() !== undefined && post_motivation_slider.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        
        // *high_motivation* updates
        if (t >= 0.0 && high_motivation.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          high_motivation.tStart = t;  // (not accounting for frame time here)
          high_motivation.frameNStart = frameN;  // exact frame index
          
          high_motivation.setAutoDraw(true);
        }
        
        
        // if high_motivation is active this frame...
        if (high_motivation.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *low_motivation* updates
        if (t >= 0.0 && low_motivation.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          low_motivation.tStart = t;  // (not accounting for frame time here)
          low_motivation.frameNStart = frameN;  // exact frame index
          
          low_motivation.setAutoDraw(true);
        }
        
        
        // if low_motivation is active this frame...
        if (low_motivation.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of motivation_postComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function motivation_postRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'motivation_post' ---
        for (const thisComponent of motivation_postComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('motivation_post.stopped', globalClock.getTime());
        psychoJS.experiment.addData('post_motivation_slider.response', post_motivation_slider.getRating());
        psychoJS.experiment.addData('post_motivation_slider.rt', post_motivation_slider.getRT());
        // the Routine "motivation_post" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var post_feedbackMaxDurationReached;
var post_feedbackMaxDuration;
var post_feedbackComponents;
function post_feedbackRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'post_feedback' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        post_feedbackClock.reset();
        routineTimer.reset();
        post_feedbackMaxDurationReached = false;
        // update component parameters for each repeat
        post_feedback_slider.reset()
        psychoJS.experiment.addData('post_feedback.started', globalClock.getTime());
        post_feedbackMaxDuration = null
        // keep track of which components have finished
        post_feedbackComponents = [];
        post_feedbackComponents.push(text_82);
        post_feedbackComponents.push(post_feedback_slider);
        post_feedbackComponents.push(low_anxiety_8);
        post_feedbackComponents.push(high_anxiety_8);
        post_feedbackComponents.push(moderate_anxiety_7);
        
        for (const thisComponent of post_feedbackComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function post_feedbackRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'post_feedback' ---
        // get current time
        t = post_feedbackClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_82* updates
        if (t >= 0.0 && text_82.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_82.tStart = t;  // (not accounting for frame time here)
          text_82.frameNStart = frameN;  // exact frame index
          
          text_82.setAutoDraw(true);
        }
        
        
        // if text_82 is active this frame...
        if (text_82.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *post_feedback_slider* updates
        if (t >= 0.0 && post_feedback_slider.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          post_feedback_slider.tStart = t;  // (not accounting for frame time here)
          post_feedback_slider.frameNStart = frameN;  // exact frame index
          
          post_feedback_slider.setAutoDraw(true);
        }
        
        
        // if post_feedback_slider is active this frame...
        if (post_feedback_slider.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check post_feedback_slider for response to end Routine
        if (post_feedback_slider.getRating() !== undefined && post_feedback_slider.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        
        // *low_anxiety_8* updates
        if (t >= 0.0 && low_anxiety_8.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          low_anxiety_8.tStart = t;  // (not accounting for frame time here)
          low_anxiety_8.frameNStart = frameN;  // exact frame index
          
          low_anxiety_8.setAutoDraw(true);
        }
        
        
        // if low_anxiety_8 is active this frame...
        if (low_anxiety_8.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *high_anxiety_8* updates
        if (t >= 0.0 && high_anxiety_8.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          high_anxiety_8.tStart = t;  // (not accounting for frame time here)
          high_anxiety_8.frameNStart = frameN;  // exact frame index
          
          high_anxiety_8.setAutoDraw(true);
        }
        
        
        // if high_anxiety_8 is active this frame...
        if (high_anxiety_8.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *moderate_anxiety_7* updates
        if (t >= 0.0 && moderate_anxiety_7.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          moderate_anxiety_7.tStart = t;  // (not accounting for frame time here)
          moderate_anxiety_7.frameNStart = frameN;  // exact frame index
          
          moderate_anxiety_7.setAutoDraw(true);
        }
        
        
        // if moderate_anxiety_7 is active this frame...
        if (moderate_anxiety_7.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of post_feedbackComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function post_feedbackRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'post_feedback' ---
        for (const thisComponent of post_feedbackComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('post_feedback.stopped', globalClock.getTime());
        psychoJS.experiment.addData('post_feedback_slider.response', post_feedback_slider.getRating());
        psychoJS.experiment.addData('post_feedback_slider.rt', post_feedback_slider.getRT());
        // the Routine "post_feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var feedback_enjoyMaxDurationReached;
var feedback_enjoyMaxDuration;
var feedback_enjoyComponents;
function feedback_enjoyRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'feedback_enjoy' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        feedback_enjoyClock.reset();
        routineTimer.reset();
        feedback_enjoyMaxDurationReached = false;
        // update component parameters for each repeat
        feedback_preference.reset()
        psychoJS.experiment.addData('feedback_enjoy.started', globalClock.getTime());
        feedback_enjoyMaxDuration = null
        // keep track of which components have finished
        feedback_enjoyComponents = [];
        feedback_enjoyComponents.push(text_83);
        feedback_enjoyComponents.push(feedback_preference);
        feedback_enjoyComponents.push(yes_fbk);
        feedback_enjoyComponents.push(text_86);
        feedback_enjoyComponents.push(no_fbk);
        
        for (const thisComponent of feedback_enjoyComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function feedback_enjoyRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'feedback_enjoy' ---
        // get current time
        t = feedback_enjoyClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_83* updates
        if (t >= 0.0 && text_83.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_83.tStart = t;  // (not accounting for frame time here)
          text_83.frameNStart = frameN;  // exact frame index
          
          text_83.setAutoDraw(true);
        }
        
        
        // if text_83 is active this frame...
        if (text_83.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *feedback_preference* updates
        if (t >= 0.0 && feedback_preference.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          feedback_preference.tStart = t;  // (not accounting for frame time here)
          feedback_preference.frameNStart = frameN;  // exact frame index
          
          feedback_preference.setAutoDraw(true);
        }
        
        
        // if feedback_preference is active this frame...
        if (feedback_preference.status === PsychoJS.Status.STARTED) {
        }
        
        
        // Check feedback_preference for response to end Routine
        if (feedback_preference.getRating() !== undefined && feedback_preference.status === PsychoJS.Status.STARTED) {
          continueRoutine = false; }
        
        // *yes_fbk* updates
        if (t >= 0.0 && yes_fbk.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          yes_fbk.tStart = t;  // (not accounting for frame time here)
          yes_fbk.frameNStart = frameN;  // exact frame index
          
          yes_fbk.setAutoDraw(true);
        }
        
        
        // if yes_fbk is active this frame...
        if (yes_fbk.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *text_86* updates
        if (t >= 0.0 && text_86.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_86.tStart = t;  // (not accounting for frame time here)
          text_86.frameNStart = frameN;  // exact frame index
          
          text_86.setAutoDraw(true);
        }
        
        
        // if text_86 is active this frame...
        if (text_86.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *no_fbk* updates
        if (t >= 0.0 && no_fbk.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          no_fbk.tStart = t;  // (not accounting for frame time here)
          no_fbk.frameNStart = frameN;  // exact frame index
          
          no_fbk.setAutoDraw(true);
        }
        
        
        // if no_fbk is active this frame...
        if (no_fbk.status === PsychoJS.Status.STARTED) {
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of feedback_enjoyComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function feedback_enjoyRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'feedback_enjoy' ---
        for (const thisComponent of feedback_enjoyComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('feedback_enjoy.stopped', globalClock.getTime());
        psychoJS.experiment.addData('feedback_preference.response', feedback_preference.getRating());
        psychoJS.experiment.addData('feedback_preference.rt', feedback_preference.getRT());
        // the Routine "feedback_enjoy" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var endMaxDurationReached;
var _key_resp_6_allKeys;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'end' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        endClock.reset();
        routineTimer.reset();
        endMaxDurationReached = false;
        // update component parameters for each repeat
        key_resp_6.keys = undefined;
        key_resp_6.rt = undefined;
        _key_resp_6_allKeys = [];
        psychoJS.experiment.addData('end.started', globalClock.getTime());
        endMaxDuration = null
        // keep track of which components have finished
        endComponents = [];
        endComponents.push(text_19);
        endComponents.push(key_resp_6);
        
        for (const thisComponent of endComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function endRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'end' ---
        // get current time
        t = endClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_19* updates
        if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_19.tStart = t;  // (not accounting for frame time here)
          text_19.frameNStart = frameN;  // exact frame index
          
          text_19.setAutoDraw(true);
        }
        
        
        // if text_19 is active this frame...
        if (text_19.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *key_resp_6* updates
        if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          key_resp_6.tStart = t;  // (not accounting for frame time here)
          key_resp_6.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
        }
        
        // if key_resp_6 is active this frame...
        if (key_resp_6.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_6.getKeys({
            keyList: typeof 't' === 'string' ? ['t'] : 't', 
            waitRelease: false
          });
          _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
          if (_key_resp_6_allKeys.length > 0) {
            key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
            key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of endComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function endRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'end' ---
        for (const thisComponent of endComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('end.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_6.corr, level);
        }
        psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
        if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
            psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
            routineTimer.reset();
            }
        
        key_resp_6.stop();
        // the Routine "end" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
function importConditions(currentLoop) {
      return async function () {
        psychoJS.importAttributes(currentLoop.getCurrentTrial());
        return Scheduler.Event.NEXT;
        };
    }
    
    
async function quitPsychoJS(message, isCompleted) {
      // Check for and save orphaned data
      if (psychoJS.experiment.isEntryEmpty()) {
        psychoJS.experiment.nextEntry();
      }
      
      
      psychoJS.window.close();
      psychoJS.quit({message: message, isCompleted: isCompleted});
      
      return Scheduler.Event.QUIT;
    }
