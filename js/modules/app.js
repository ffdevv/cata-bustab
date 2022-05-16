/*
    Cata Bustáb - Browser-based character picker
    Copyright (C) 2021  Federico Fogo 

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see https://www.gnu.org/licenses/gpl-3.0
*/

import * as consts from "./consts.js";
import * as misc from "./misc.js";
import * as Unicode from "./unicode.js";

export const state = {
  debug: false,
  loadedChars: false,
  renderedCells: false,
  group: consts.ALL_GROUP_NAME,
  filter: "",
  device: {},
  dragging: {}
};

export const props = {
  groups: {
    all: {
      codes: [
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        174,
        175,
        176,
        177,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        187,
        188,
        189,
        190,
        191,
        192,
        193,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        219,
        220,
        221,
        222,
        223,
        224,
        225,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        235,
        236,
        237,
        238,
        239,
        240,
        241,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250,
        251,
        252,
        253,
        254,
        255,
        256,
        257,
        258,
        259,
        260,
        261,
        262,
        263,
        264,
        265,
        266,
        267,
        268,
        269,
        270,
        271,
        272,
        273,
        274,
        275,
        276,
        277,
        278,
        279,
        280,
        281,
        282,
        283,
        284,
        285,
        286,
        287,
        288,
        289,
        290,
        291,
        292,
        293,
        294,
        295,
        296,
        297,
        298,
        299,
        300,
        301,
        302,
        303,
        304,
        305,
        306,
        307,
        308,
        309,
        310,
        311,
        312,
        313,
        314,
        315,
        316,
        317,
        318,
        319,
        320,
        321,
        322,
        323,
        324,
        325,
        326,
        327,
        328,
        329,
        330,
        331,
        332,
        333,
        334,
        335,
        336,
        337,
        338,
        339,
        340,
        341,
        342,
        343,
        344,
        345,
        346,
        347,
        348,
        349,
        350,
        351,
        352,
        353,
        354,
        355,
        356,
        357,
        358,
        359,
        360,
        361,
        362,
        363,
        364,
        365,
        366,
        367,
        368,
        369,
        370,
        371,
        372,
        373,
        374,
        375,
        376,
        377,
        378,
        379,
        380,
        381,
        382,
        383,
        384,
        385,
        392,
        400,
        402,
        405,
        409,
        410,
        411,
        414,
        416,
        417,
        421,
        423,
        424,
        426,
        427,
        429,
        431,
        432,
        437,
        442,
        443,
        446,
        448,
        449,
        450,
        451,
        461,
        462,
        463,
        464,
        465,
        466,
        467,
        468,
        469,
        470,
        471,
        472,
        473,
        474,
        475,
        476,
        477,
        478,
        479,
        480,
        481,
        482,
        483,
        486,
        487,
        488,
        489,
        490,
        491,
        492,
        493,
        496,
        500,
        501,
        504,
        505,
        506,
        507,
        508,
        509,
        510,
        511,
        512,
        513,
        514,
        515,
        516,
        517,
        518,
        519,
        520,
        521,
        522,
        523,
        524,
        525,
        526,
        527,
        528,
        529,
        530,
        531,
        532,
        533,
        534,
        535,
        536,
        537,
        538,
        539,
        542,
        543,
        545,
        550,
        551,
        552,
        553,
        554,
        555,
        556,
        557,
        558,
        559,
        560,
        561,
        562,
        563,
        564,
        565,
        566,
        567,
        592,
        593,
        594,
        595,
        596,
        597,
        598,
        599,
        600,
        601,
        602,
        603,
        604,
        605,
        606,
        607,
        608,
        609,
        610,
        611,
        612,
        613,
        614,
        615,
        616,
        617,
        618,
        619,
        620,
        621,
        622,
        623,
        624,
        625,
        626,
        627,
        628,
        629,
        630,
        631,
        632,
        633,
        634,
        635,
        636,
        637,
        638,
        639,
        640,
        641,
        642,
        643,
        644,
        645,
        646,
        647,
        648,
        649,
        650,
        651,
        652,
        653,
        654,
        655,
        656,
        657,
        658,
        659,
        660,
        661,
        662,
        663,
        664,
        665,
        666,
        667,
        668,
        669,
        670,
        671,
        672,
        673,
        674,
        675,
        676,
        677,
        678,
        679,
        680,
        681,
        682,
        683,
        684,
        685,
        686,
        687,
        688,
        689,
        690,
        691,
        692,
        693,
        694,
        695,
        696,
        697,
        698,
        699,
        700,
        701,
        702,
        703,
        704,
        705,
        706,
        707,
        708,
        709,
        710,
        711,
        712,
        713,
        714,
        715,
        716,
        717,
        718,
        719,
        720,
        721,
        722,
        723,
        724,
        725,
        726,
        727,
        728,
        729,
        730,
        731,
        732,
        733,
        734,
        735,
        736,
        737,
        738,
        739,
        740,
        741,
        742,
        743,
        744,
        745,
        748,
        749,
        750,
        759,
        768,
        769,
        770,
        771,
        772,
        773,
        774,
        775,
        776,
        777,
        778,
        779,
        780,
        781,
        782,
        783,
        784,
        785,
        786,
        787,
        788,
        789,
        790,
        791,
        792,
        793,
        794,
        795,
        796,
        797,
        798,
        799,
        800,
        801,
        802,
        803,
        804,
        805,
        806,
        807,
        808,
        809,
        810,
        811,
        812,
        813,
        814,
        815,
        816,
        817,
        818,
        819,
        820,
        821,
        822,
        823,
        824,
        825,
        826,
        827,
        828,
        829,
        830,
        831,
        838,
        839,
        844,
        857,
        860,
        861,
        862,
        863,
        864,
        865,
        866,
        894,
        900,
        901,
        902,
        903,
        904,
        905,
        906,
        908,
        910,
        911,
        912,
        913,
        914,
        915,
        916,
        917,
        918,
        919,
        920,
        921,
        922,
        923,
        924,
        925,
        926,
        927,
        928,
        929,
        931,
        932,
        933,
        934,
        935,
        936,
        937,
        938,
        939,
        940,
        941,
        942,
        943,
        944,
        945,
        946,
        947,
        948,
        949,
        950,
        951,
        952,
        953,
        954,
        955,
        956,
        957,
        958,
        959,
        960,
        961,
        962,
        963,
        964,
        965,
        966,
        967,
        968,
        969,
        970,
        971,
        972,
        973,
        974,
        976,
        977,
        978,
        981,
        982,
        984,
        985,
        986,
        987,
        988,
        989,
        990,
        991,
        992,
        993,
        1008,
        1009,
        1012,
        1013,
        1014,
        1024,
        1025,
        1026,
        1027,
        1028,
        1029,
        1030,
        1031,
        1032,
        1033,
        1034,
        1035,
        1036,
        1037,
        1038,
        1039,
        1040,
        1041,
        1042,
        1043,
        1044,
        1045,
        1046,
        1047,
        1048,
        1049,
        1050,
        1051,
        1052,
        1053,
        1054,
        1055,
        1056,
        1057,
        1058,
        1059,
        1060,
        1061,
        1062,
        1063,
        1064,
        1065,
        1066,
        1067,
        1068,
        1069,
        1070,
        1071,
        1072,
        1073,
        1074,
        1075,
        1076,
        1077,
        1078,
        1079,
        1080,
        1081,
        1082,
        1083,
        1084,
        1085,
        1086,
        1087,
        1088,
        1089,
        1090,
        1091,
        1092,
        1093,
        1094,
        1095,
        1096,
        1097,
        1098,
        1099,
        1100,
        1101,
        1102,
        1103,
        1104,
        1105,
        1106,
        1107,
        1108,
        1109,
        1110,
        1111,
        1112,
        1113,
        1114,
        1115,
        1116,
        1117,
        1118,
        1119,
        1122,
        1123,
        1130,
        1131,
        1138,
        1139,
        1140,
        1141,
        1168,
        1169,
        7424,
        7425,
        7428,
        7429,
        7431,
        7434,
        7435,
        7436,
        7437,
        7439,
        7448,
        7451,
        7452,
        7456,
        7457,
        7458,
        7553,
        7556,
        7557,
        7562,
        7565,
        7566,
        7576,
        7587,
        7680,
        7681,
        7682,
        7683,
        7684,
        7685,
        7686,
        7687,
        7688,
        7689,
        7690,
        7691,
        7692,
        7693,
        7694,
        7695,
        7696,
        7697,
        7698,
        7699,
        7700,
        7701,
        7702,
        7703,
        7704,
        7705,
        7706,
        7707,
        7708,
        7709,
        7710,
        7711,
        7712,
        7713,
        7714,
        7715,
        7716,
        7717,
        7718,
        7719,
        7720,
        7721,
        7722,
        7723,
        7724,
        7725,
        7726,
        7727,
        7728,
        7729,
        7730,
        7731,
        7732,
        7733,
        7734,
        7735,
        7736,
        7737,
        7738,
        7739,
        7740,
        7741,
        7742,
        7743,
        7744,
        7745,
        7746,
        7747,
        7748,
        7749,
        7750,
        7751,
        7752,
        7753,
        7754,
        7755,
        7756,
        7757,
        7758,
        7759,
        7760,
        7761,
        7762,
        7763,
        7764,
        7765,
        7766,
        7767,
        7768,
        7769,
        7770,
        7771,
        7772,
        7773,
        7774,
        7775,
        7776,
        7777,
        7778,
        7779,
        7780,
        7781,
        7782,
        7783,
        7784,
        7785,
        7786,
        7787,
        7788,
        7789,
        7790,
        7791,
        7792,
        7793,
        7794,
        7795,
        7796,
        7797,
        7798,
        7799,
        7800,
        7801,
        7802,
        7803,
        7804,
        7805,
        7806,
        7807,
        7808,
        7809,
        7810,
        7811,
        7812,
        7813,
        7814,
        7815,
        7816,
        7817,
        7818,
        7819,
        7820,
        7821,
        7822,
        7823,
        7824,
        7825,
        7826,
        7827,
        7828,
        7829,
        7830,
        7831,
        7832,
        7833,
        7834,
        7835,
        7836,
        7837,
        7838,
        7839,
        7840,
        7841,
        7842,
        7843,
        7844,
        7845,
        7846,
        7847,
        7848,
        7849,
        7850,
        7851,
        7852,
        7853,
        7854,
        7855,
        7856,
        7857,
        7858,
        7859,
        7860,
        7861,
        7862,
        7863,
        7864,
        7865,
        7866,
        7867,
        7868,
        7869,
        7870,
        7871,
        7872,
        7873,
        7874,
        7875,
        7876,
        7877,
        7878,
        7879,
        7880,
        7881,
        7882,
        7883,
        7884,
        7885,
        7886,
        7887,
        7888,
        7889,
        7890,
        7891,
        7892,
        7893,
        7894,
        7895,
        7896,
        7897,
        7898,
        7899,
        7900,
        7901,
        7902,
        7903,
        7904,
        7905,
        7906,
        7907,
        7908,
        7909,
        7910,
        7911,
        7912,
        7913,
        7914,
        7915,
        7916,
        7917,
        7918,
        7919,
        7920,
        7921,
        7922,
        7923,
        7924,
        7925,
        7926,
        7927,
        7928,
        7929,
        8203,
        8208,
        8209,
        8210,
        8211,
        8212,
        8213,
        8214,
        8215,
        8216,
        8217,
        8218,
        8219,
        8220,
        8221,
        8222,
        8223,
        8224,
        8225,
        8226,
        8229,
        8230,
        8240,
        8241,
        8242,
        8243,
        8244,
        8245,
        8246,
        8247,
        8248,
        8249,
        8250,
        8251,
        8252,
        8254,
        8256,
        8259,
        8260,
        8263,
        8267,
        8268,
        8269,
        8270,
        8271,
        8272,
        8273,
        8274,
        8279,
        8287,
        8304,
        8305,
        63213,
        8308,
        8309,
        8310,
        8311,
        8312,
        8313,
        8314,
        8315,
        8316,
        8317,
        8318,
        8319,
        8320,
        8321,
        8322,
        8323,
        8324,
        8325,
        8326,
        8327,
        8328,
        8329,
        8330,
        8331,
        8332,
        8333,
        8334,
        8355,
        8356,
        8359,
        8363,
        8364,
        8377,
        8378,
        8381,
        8400,
        8401,
        8402,
        8406,
        8407,
        8411,
        8412,
        8413,
        8414,
        8415,
        8417,
        8420,
        8421,
        8422,
        8423,
        8424,
        8425,
        8426,
        8427,
        8428,
        8429,
        8430,
        8431,
        8432,
        8450,
        8453,
        8455,
        8458,
        8459,
        8460,
        8461,
        8462,
        8463,
        8464,
        8465,
        8466,
        8467,
        8469,
        8470,
        8471,
        8472,
        8473,
        8474,
        8475,
        8476,
        8477,
        8478,
        8482,
        8484,
        8485,
        8486,
        8487,
        8488,
        8489,
        8491,
        8492,
        8493,
        8494,
        8495,
        8496,
        8497,
        8498,
        8499,
        8500,
        8501,
        8502,
        8503,
        8504,
        8508,
        8509,
        8510,
        8511,
        8512,
        8513,
        8514,
        8515,
        8516,
        8517,
        8518,
        8519,
        8520,
        8521,
        8522,
        8523,
        8531,
        8532,
        8533,
        8534,
        8535,
        8536,
        8537,
        8538,
        8539,
        8540,
        8541,
        8542,
        8722,
        9251,
        9676,
        42791,
        42898,
        59497,
        59498,
        59499,
        59500,
        59501,
        59508,
        59509,
        59510,
        59511,
        59512,
        59513,
        59520,
        59521,
        59522,
        59523,
        59524,
        59525,
        59532,
        59533,
        59534,
        59535,
        59536,
        59537,
        59544,
        59545,
        59546,
        59547,
        59548,
        59549,
        59556,
        59557,
        59558,
        59559,
        59560,
        59561,
        59568,
        59569,
        59593,
        59594,
        59595,
        59596,
        59597,
        59598,
        59599,
        59600,
        59601,
        59604,
        59605,
        59606,
        59607,
        59608,
        59609,
        59610,
        59611,
        59612,
        59613,
        59616,
        59617,
        59618,
        59619,
        59620,
        59621,
        59622,
        59623,
        59624,
        59625,
        59642,
        59643,
        59644,
        59645,
        59652,
        59653,
        59654,
        59655,
        59656,
        59657,
        59664,
        59665,
        59666,
        59667,
        59668,
        59669,
        59678,
        59702,
        59703,
        59704,
        59705,
        59706,
        59707,
        59708,
        59709,
        59712,
        59713,
        59714,
        59715,
        59716,
        59717,
        59718,
        59719,
        59720,
        59721,
        59724,
        59725,
        59726,
        59727,
        59728,
        59729,
        59730,
        59731,
        59732,
        59733,
        59737,
        59738,
        59739,
        59740,
        59741,
        59742,
        59743,
        59744,
        59745,
        59748,
        59749,
        59750,
        59751,
        59752,
        59753,
        59754,
        59755,
        59756,
        59757,
        59760,
        59761,
        59762,
        59763,
        59764,
        59765,
        59766,
        59767,
        59768,
        59769,
        59785,
        59786,
        59787,
        59788,
        59789,
        59796,
        59797,
        59798,
        59799,
        59800,
        59801,
        59808,
        59809,
        59810,
        59811,
        59812,
        59813,
        59821,
        59822,
        59823,
        59824,
        59825,
        59832,
        59833,
        59834,
        59835,
        59836,
        59837,
        59844,
        59845,
        59846,
        59847,
        59848,
        59849,
        59869,
        59870,
        59872,
        59873,
        59874,
        59881,
        59882,
        59884,
        59885,
        59886,
        59893,
        59894,
        59896,
        59897,
        59898,
        59904,
        59905,
        59906,
        59908,
        59909,
        59910,
        59912,
        59916,
        59917,
        59918,
        59919,
        59920,
        59921,
        59922,
        59923,
        59928,
        59929,
        59930,
        59932,
        59933,
        59935,
        59936,
        59937,
        59940,
        59941,
        59942,
        59943,
        59944,
        59945,
        59946,
        59947
      ],
      multicol: { 59937: 2, 59936: 2, 59935: 2 },
      names: {
        59928: "VIRGOLETTA TIPIZZAZIONE APRE",
        59929: "VIRGOLETTA TIPIZZAZIONE CHIUDE",
        59904: "C MEDIOPALATALE",
        59905: "C MAIUSCOLA MEDIOPALATALE",
        59906: "C MAIUSCOLETTO MEDIOPALATALE",
        59908: "G MEDIOPALATALE",
        59909: "G MAIUSCOLA MEDIOPALATALE",
        59910: "G MAIUSCOLETTO MEDIOPALATALE",
        59917: "M NASALE LABIODENTALE",
        59918: "N NASALE VELARE",
        59919: "N NASALE VELARE",
        59921: "R VIBRANTE PALATALE",
        205: "I MAIUSCOLA TONICA",
        59923: "Z FRICATIVA SEMI PALATALE SONORA",
        225: "A TONICA",
        7714: "H MAIUSCOLA FRICATIVA VELARE SONORA",
        7715: "H FRICATIVA VELARE SONORA",
        945: "ALFA VOCALE INDISTINTA",
        263: "C TODOROVIC",
        232: "E MINUSCOLA TONICA APERTA",
        365: "LATINO U BREVE",
        353: "S FRICATIVA PALATALE SORDA",
        207: "I MAIUSCOLA ATONA VOCALICA",
        601: "SHWA VOCALE INDISTINTA",
        7771: "R VIBRANTE PALATALE",
        7776: "S MAIUSCOLA SONORA",
        7777: "S FRICATIVA ALVEOLARE SONORA",
        7779: "S FRICATIVA SEMI PALATALE POST ALVEOLARE SORDA",
        59497: "A MINUSCOLA TONICA",
        59498: "A PALATALE",
        59499: "A MINUSCOLA APERTA TONICA",
        59500: "A MINUSCOLA CHIUSA",
        59501: "A MINUSCOLA CHIUSA TONICA",
        229: "A VELARE",
        275: "LATINO E LUNGA",
        59508: "A MINUSCOLA LUNGA",
        59509: "A TONICA LUNGA",
        59510: "A MINUSCOLA LUNGA APERTA",
        59511: "A MINUSCOLA LUNGA APERTA TONICA",
        59512: "A MINUSCOLA LUNGA CHIUSA",
        59513: "A MINUSCOLA LUNGA CHIUSA TONICA",
        277: "LATINO E BREVE",
        59520: "A MINUSCOLA NASALE",
        59521: "A MINUSCOLA NASALE ACUTA",
        59522: "A MINUSCOLA NASALE APERTA",
        59523: "A MINUSCOLA NASALE APERTA TONICA",
        59524: "A MINUSCOLA NASALE CHIUSA",
        59525: "A MINUSCOLA NASALE CHIUSA TONICA",
        226: "A VELARE",
        59532: "A MINUSCOLA PALATALE",
        59533: "A PALATALE TONICA",
        59534: "A MINUSCOLA PALATALE APERTA",
        59535: "A MINUSCOLA PALATALE APERTA TONICA",
        59536: "A MINUSCOLA PALATALE CHIUSA",
        59537: "A MINUSCOLA PALATALE CHIUSA TONICA",
        7827: "Z FRICATIVA SEMI PALATALE POST ALVEOLARE SONORA",
        59544: "A MINUSCOLA PALATALE LUNGA",
        59545: "A MINUSCOLA PALATALE LUNGA TONICA",
        59546: "A MINUSCOLA PALATALE LUNGA APERTA",
        59547: "A MINUSCOLA PALATALE LUNGA APERTA TONICA",
        59548: "A MINUSCOLA PALATALE LUNGA CHIUSA",
        59549: "A MINUSCOLA PALATALE LUNGA CHIUSA TONICA",
        7841: "A VELARE",
        619: "L LATERALE PALATALE",
        59556: "A MINUSCOLA PALATALE NASALE",
        59557: "A MINUSCOLA PALATALE NASALE TONICA",
        59558: "A MINUSCOLA PALATALE NASALE APERTA",
        59559: "A MINUSCOLA PALATALE NASALE APERTA TONICA",
        59560: "A MINUSCOLA PALATALE NASALE CHIUSA",
        59561: "A MINUSCOLA PALATALE NASALE CHIUSA TONICA",
        59568: "A MINUSCOLA CERCHIO",
        59569: "A MINUSCOLA CERCHIO TONICA",
        201: "E MAIUSCOLA TONICA CHIUSA",
        250: "U TONICA",
        193: "A MAIUSCOLA TONICA",
        194: "A MAIUSCOLA VELARE",
        228: "A PALATALE",
        200: "E MAIUSCOLA TONICA APERTA",
        59593: "E MINUSCOLA TONICA",
        59594: "E CHIUSA",
        59595: "E CHIUSA TONICA",
        59596: "E MOLTO CHIUSA",
        59597: "E MINUSCOLA MOLTO CHIUSA TONICA",
        59598: "E APERTA",
        59599: "E APERTA TONICA",
        59600: "E MOLTO APERTA",
        59601: "E MINUSCOLA MOLTO APERTA TONICA",
        210: "O MAIUSCOLA APERTA",
        211: "O MAIUSCOLA CHIUSA",
        59604: "E MINUSCOLA LUNGA",
        59605: "E MINUSCOLA LUNGA TONICA",
        59606: "E MINUSCOLA LUNGA CHIUSA",
        59607: "E CHIUSA TONICA LUNGA",
        59608: "E MINUSCOLA LUNGA MOLTO CHIUSA",
        59609: "E MINUSCOLA LUNGA MOLTO CHIUSA TONICA",
        59610: "E MINUSCOLA LUNGA APERTA",
        59611: "E APERTA TONICA LUNGA",
        59612: "E MINUSCOLA LUNGA MOLTO APERTA",
        59613: "E MINUSCOLA LUNGA MOLTO APERTA TONICA",
        59616: "E MINUSCOLA NASALE",
        59617: "E MINUSCOLA NASALE TONICA",
        59618: "E MINUSCOLA NASALE CHIUSA",
        59619: "E MINUSCOLA NASALE CHIUSA TONICA",
        59620: "E MINUSCOLA NASALE MOLTO CHIUSA",
        59621: "E MINUSCOLA NASALE MOLTO CHIUSA TONICA",
        59622: "E MINUSCOLA NASALE APERTA",
        59623: "E MINUSCOLA NASALE APERTA TONICA",
        59624: "E MINUSCOLA NASALE MOLTO APERTA",
        59625: "E MINUSCOLA NASALE MOLTO APERTA TONICA",
        237: "I TONICA",
        239: "I MINUSCOLA ATONA VOCALICA",
        241: "N NASALE PALATALE",
        242: "O MINUSCOLA APERTA",
        243: "O MINUSCOLA CHIUSA",
        246: "O TURBATA ATONA",
        59642: "I APERTA",
        59643: "I MINUSCOLA APERTA TONICA",
        59644: "I SEMIVOCALE SEMICONSONANTE",
        59645: "I MINUSCOLA SEMICERCHIO TONICA",
        257: "LATINO A LUNGA",
        259: "LATINO A BREVE",
        59652: "I MINUSCOLA LUNGA",
        59653: "I TONICA LUNGA",
        59654: "I MINUSCOLA LUNGA APERTA",
        59655: "I MINUSCOLA LUNGA APERTA TONICA",
        59656: "I MINUSCOLA LUNGA SEMICERCHIO",
        59657: "I MINUSCOLA LUNGA SEMICERCHIO TONICA",
        269: "C PALATALE",
        59664: "I MINUSCOLA NASALE",
        59665: "I MINUSCOLA NASALE TONICA",
        59666: "I MINUSCOLA NASALE APERTA",
        59667: "I MINUSCOLA NASALE APERTA TONICA",
        59668: "I MINUSCOLA NASALE SEMICERCHIO",
        59669: "I MINUSCOLA NASALE SEMICERCHIO TONICA",
        218: "U MAIUSCOLA TONICA",
        59678: "I MINUSCOLA APERTA SENZA PUNTINO",
        7813: "W SEMI VOCALE ARROTONDATA",
        214: "O MAIUSCOLA TURBATA",
        220: "U MAIUSCOLA TURBATA",
        299: "LATINO I LUNGA",
        301: "LATINO I BREVE",
        59702: "O CHIUSA",
        59703: "O CHIUSA TONICA",
        59704: "O MOLTO CHIUSA",
        59705: "O MINUSCOLA MOLTO CHIUSA TONICA",
        59706: "O APERTA",
        59707: "O APERTA TONICA",
        59708: "O MOLTO APERTA",
        59709: "O MINUSCOLA MOLTO APERTA TONICA",
        59712: "O MINUSCOLA LUNGA",
        59713: "O MINUSCOLA LUNGA TONICA",
        59714: "O MINUSCOLA LUNGA CHIUSA",
        59715: "O CHIUSA TONICA LUNGA",
        59716: "O MINUSCOLA LUNGA MOLTO CHIUSA",
        59717: "O MINUSCOLA LUNGA MOLTO CHIUSA TONICA",
        59718: "O MINUSCOLA LUNGA APERTA",
        59719: "O APERTA TONICA LUNGA",
        59720: "O MINUSCOLA LUNGA MOLTO APERTA",
        59721: "O MINUSCOLA LUNGA MOLTO APERTA TONICA",
        59922: "S FRICATIVA SEMI PALATALE SONORA",
        59724: "O MINUSCOLA NASALE",
        59725: "O MINUSCOLA NASALE TONICA",
        59726: "O MINUSCOLA NASALE CHIUSA",
        59727: "O MINUSCOLA NASALE CHIUSA TONICA",
        59728: "O MINUSCOLA NASALE MOLTO CHIUSA",
        59729: "O MINUSCOLA NASALE MOLTO CHIUSA TONICA",
        59730: "O MINUSCOLA NASALE APERTA",
        59731: "O MINUSCOLA NASALE APERTA TONICA",
        59732: "O MINUSCOLA NASALE MOLTO APERTA",
        59733: "O MINUSCOLA NASALE MOLTO APERTA TONICA",
        966: "FRICATIVA BI LABIALE SORDA",
        59737: "O MINUSCOLA TURBATA CHIUSA",
        59738: "O TURBATA CHIUSA",
        59739: "O TURBATA CHIUSA TONICA",
        59740: "O TURBATA MOLTO CHIUSA",
        59741: "O MINUSCOLA PALATALE MOLTO CHIUSA TONICA",
        59742: "O TURBATA APERTA",
        59743: "O TURBATA APERTA TONICA",
        59744: "O TURBATA MOLTO APERTA",
        59745: "O MINUSCOLA PALATALE MOLTO APERTA TONICA",
        59748: "O MINUSCOLA PALATALE LUNGA",
        59749: "O MINUSCOLA PALATALE LUNGA TONICA",
        59750: "O MINUSCOLA PALATALE LUNGA CHIUSA",
        59751: "O TURBATA CHIUSA TONICA LUNGA",
        59752: "O MINUSCOLA PALATALE LUNGA MOLTO CHIUSA",
        59753: "O MINUSCOLA PALATALE LUNGA MOLTO CHIUSA TONICA",
        59754: "O MINUSCOLA PALATALE LUNGA APERTA",
        59755: "O TURBATA APERTA TONICA LUNGA",
        59756: "O MINUSCOLA PALATALE LUNGA MOLTO APERTA",
        59757: "O MINUSCOLA PALATALE LUNGA MOLTO APERTA TONICA",
        59760: "O MINUSCOLA PALATALE NASALE",
        59761: "O MINUSCOLA PALATALE NASALE TONICA",
        59762: "O MINUSCOLA PALATALE NASALE CHIUSA",
        59763: "O MINUSCOLA PALATALE NASALE CHIUSA TONICA",
        59764: "O MINUSCOLA PALATALE NASALE MOLTO CHIUSA",
        59765: "O MINUSCOLA PALATALE NASALE MOLTO CHIUSA TONICA",
        59766: "O MINUSCOLA PALATALE NASALE APERTA",
        59767: "O MINUSCOLA PALATALE NASALE APERTA TONICA",
        59768: "O MINUSCOLA PALATALE NASALE MOLTO APERTA",
        59769: "O MINUSCOLA PALATALE LUNGA MOLTO APERTA TONICA",
        379: "Z MAIUSCOLA SONORA",
        380: "Z AFFRICATA ALVEOLARE SONORA",
        382: "Z FRICATIVA PALATALE SONORA",
        59785: "U MINUSCOLA TONICA",
        59786: "U APERTA",
        59787: "U MINUSCOLA APERTA TONICA",
        59788: "U SEMIVOCALE SEMICONSONANTE",
        59789: "U MINUSCOLA SEMICERCHIO TONICA",
        233: "E MINUSCOLA TONICA CHIUSA",
        252: "U TURBATA",
        59796: "U MINUSCOLA LUNGA",
        59797: "U TONICA LUNGA",
        59798: "U MINUSCOLA LUNGA APERTA",
        59799: "U MINUSCOLA LUNGA APERTA TONICA",
        59800: "U MINUSCOLA LUNGA SEMICERCHIO",
        59801: "U MINUSCOLA LUNGA SEMICERCHIO TONICA",
        59808: "U MINUSCOLA NASALE",
        59809: "U MINUSCOLA NASALE TONICA",
        59810: "U MINUSCOLA NASALE APERTA",
        59811: "U MINUSCOLA NASALE APERTA TONICA",
        59812: "U MINUSCOLA NASALE SEMICERCHIO",
        59813: "U MINUSCOLA NASALE SEMICERCHIO TONICA",
        59821: "U MINUSCOLA PALATALE TONICA",
        59822: "U TURBATA APERTA",
        59823: "U TURBATA APERTA TONICA",
        59824: "U MINUSCOLA PALATALE SEMICERCHIO",
        59825: "U MINUSCOLA PALATALE SEMICERCHIO TONICA",
        946: "FRICATIVA BI LABIALE SONORA",
        947: "FRICATIVA VELARE SONORA",
        948: "FRICATIVA INTER DENTALE SONORA",
        59832: "U MINUSCOLA PALATALE LUNGA",
        59833: "U TURBATA LUNGA",
        59834: "U MINUSCOLA PALATALE LUNGA APERTA",
        59835: "U TURBATA APERTA TONICA LUNGA",
        59836: "U MINUSCOLA PALATALE LUNGA SEMICERCHIO",
        59837: "U MINUSCOLA PALATALE LUNGA SEMICERCHIO TONICA",
        59844: "U MINUSCOLA PALATALE NASALE",
        59845: "U MINUSCOLA PALATALE NASALE TONICA",
        59846: "U MINUSCOLA PALATALE NASALE APERTA",
        59847: "U MINUSCOLA PALATALE NASALE APERTA TONICA",
        59848: "U MINUSCOLA PALATALE NASALE SEMICERCHIO",
        59849: "U MINUSCOLA PALATALE NASALE SEMICERCHIO TONICA",
        363: "LATINO U LUNGA",
        333: "LATINO O LUNGA",
        977: "FRICATIVA INTER DENTALE SORDA",
        675: "DZ Z AFFRICATA ALVEOLARE SONORA",
        471: "U MAIUSCOLA TURBATA TONICA",
        472: "U MINUSCOLA TURBATA TONICA",
        335: "LATINO O BREVE",
        59869: "A MAIUSCOLA PALATALE CHIUSA",
        59870: "A MAIUSCOLETTO PALATALE CHIUSA",
        59872: "A MINUSCOLA PALATALE APERTA",
        59873: "A MAIUSCOLA PALATALE APERTA",
        59874: "A MAIUSCOLETTO PALATALE APERTA",
        678: "TS Z AFFRICATA ALVEOLARE SORDA",
        487: "G PALATALE",
        59881: "O MAIUSCOLA TURBATA CHIUSA",
        59882: "O MAIUSCOLETTO PALATALE CHIUSA",
        59884: "O MINUSCOLA TURBATA APERTA",
        59885: "O MAIUSCOLA TURBATA APERTA",
        59886: "O MAIUSCOLETTO PALATALE APERTA",
        59893: "U MAIUSCOLA PALATALE CHIUSA",
        59894: "U MAIUSCOLETTO PALATALE CHIUSA",
        59896: "U MINUSCOLA PALATALE APERTA",
        59897: "U MAIUSCOLA PALATALE CHIUSA",
        59898: "U MAIUSCOLETTO PALATALE CHIUSA",
        171: "VIRGOLETTE SERGENTI SERGENTE APRE",
        187: "VIRGOLETTE SERGENTI SERGENTE CHIUDE",
        8249: "VIRGOLETTE VIRGOLETTA ANGOLATA APRE",
        8250: "VIRGOLETTE VIRGOLETTA ANGOLATA CHIUDE",
        8220: "VIRGOLETTE DOPPIE VIRGOLETTA DOPPIA APRE",
        8221: "VIRGOLETTE DOPPIE VIRGOLETTA DOPPIA CHIUDE",
        8222: "VIRGOLETTE DOPPIE VIRGOLETTA DOPPIA CHIUDE BASSO",
        8223: "VIRGOLETTE DOPPIE VIRGOLETTA DOPPIA APRE INVERSO",
        8216: "VIRGOLETTE SINGOLE VIRGOLETTA SINGOLA APRE",
        8217: "VIRGOLETTE SINGOLE VIRGOLETTA SINGOLA CHIUDE",
        8218: "VIRGOLETTE SINGOLE VIRGOLETTA SINGOLA CHIUDE BASSO",
        8219: "VIRGOLETTE SINGOLE VIRGOLETTA SINGOLA APRE INVERSO",
        59932: "FRECCIA DESTRA RIMANDO",
        59930: "SOSTITUTO SILLABA TONICA IN SUFFISSO ATONO",
        8211: "TRATTINO INTERSPAZIO CORTO",
        8212: "TRATTINO INTERSPAZIO MEDIO",
        8213: "TRATTINO INTERSPAZIO LUNGO"
      },
      _names_old: {
        59497: "A MINUSCOLA TONICA",
        59498: "A MINUSCOLA APERTA",
        59499: "A MINUSCOLA APERTA TONICA",
        59500: "A MINUSCOLA CHIUSA",
        59501: "A MINUSCOLA CHIUSA TONICA",
        59508: "A MINUSCOLA LUNGA",
        59509: "A MINUSCOLA LUNGA TONICA",
        59510: "A MINUSCOLA LUNGA APERTA",
        59511: "A MINUSCOLA LUNGA APERTA TONICA",
        59512: "A MINUSCOLA LUNGA CHIUSA",
        59513: "A MINUSCOLA LUNGA CHIUSA TONICA",
        59520: "A MINUSCOLA NASALE",
        59521: "A MINUSCOLA NASALE ACUTA",
        59522: "A MINUSCOLA NASALE APERTA",
        59523: "A MINUSCOLA NASALE APERTA TONICA",
        59524: "A MINUSCOLA NASALE CHIUSA",
        59525: "A MINUSCOLA NASALE CHIUSA TONICA",
        59532: "A MINUSCOLA PALATALE",
        59533: "A MINUSCOLA PALATALE TONICA",
        59534: "A MINUSCOLA PALATALE APERTA",
        59535: "A MINUSCOLA PALATALE APERTA TONICA",
        59536: "A MINUSCOLA PALATALE CHIUSA",
        59537: "A MINUSCOLA PALATALE CHIUSA TONICA",
        59544: "A MINUSCOLA PALATALE LUNGA",
        59545: "A MINUSCOLA PALATALE LUNGA TONICA",
        59546: "A MINUSCOLA PALATALE LUNGA APERTA",
        59547: "A MINUSCOLA PALATALE LUNGA APERTA TONICA",
        59548: "A MINUSCOLA PALATALE LUNGA CHIUSA",
        59549: "A MINUSCOLA PALATALE LUNGA CHIUSA TONICA",
        59556: "A MINUSCOLA PALATALE NASALE",
        59557: "A MINUSCOLA PALATALE NASALE TONICA",
        59558: "A MINUSCOLA PALATALE NASALE APERTA",
        59559: "A MINUSCOLA PALATALE NASALE APERTA TONICA",
        59560: "A MINUSCOLA PALATALE NASALE CHIUSA",
        59561: "A MINUSCOLA PALATALE NASALE CHIUSA TONICA",
        59568: "A MINUSCOLA CERCHIO",
        59569: "A MINUSCOLA CERCHIO TONICA",
        59593: "E MINUSCOLA TONICA",
        59594: "E MINUSCOLA CHIUSA",
        59595: "E MINUSCOLA CHIUSA TONICA",
        59596: "E MINUSCOLA MOLTO CHIUSA",
        59597: "E MINUSCOLA MOLTO CHIUSA TONICA",
        59598: "E MINUSCOLA APERTA",
        59599: "E MINUSCOLA APERTA TONICA",
        59600: "E MINUSCOLA MOLTO APERTA",
        59601: "E MINUSCOLA MOLTO APERTA TONICA",
        59604: "E MINUSCOLA LUNGA",
        59605: "E MINUSCOLA LUNGA TONICA",
        59606: "E MINUSCOLA LUNGA CHIUSA",
        59607: "E MINUSCOLA LUNGA CHIUSA TONICA",
        59608: "E MINUSCOLA LUNGA MOLTO CHIUSA",
        59609: "E MINUSCOLA LUNGA MOLTO CHIUSA TONICA",
        59610: "E MINUSCOLA LUNGA APERTA",
        59611: "E MINUSCOLA LUNGA APERTA TONICA",
        59612: "E MINUSCOLA LUNGA MOLTO APERTA",
        59613: "E MINUSCOLA LUNGA MOLTO APERTA TONICA",
        59616: "E MINUSCOLA NASALE",
        59617: "E MINUSCOLA NASALE TONICA",
        59618: "E MINUSCOLA NASALE CHIUSA",
        59619: "E MINUSCOLA NASALE CHIUSA TONICA",
        59620: "E MINUSCOLA NASALE MOLTO CHIUSA",
        59621: "E MINUSCOLA NASALE MOLTO CHIUSA TONICA",
        59622: "E MINUSCOLA NASALE APERTA",
        59623: "E MINUSCOLA NASALE APERTA TONICA",
        59624: "E MINUSCOLA NASALE MOLTO APERTA",
        59625: "E MINUSCOLA NASALE MOLTO APERTA TONICA",
        59642: "I MINUSCOLA APERTA",
        59643: "I MINUSCOLA APERTA TONICA",
        59644: "I MINUSCOLA SEMICERCHIO",
        59645: "I MINUSCOLA SEMICERCHIO TONICA",
        59652: "I MINUSCOLA LUNGA",
        59653: "I MINUSCOLA LUNGA TONICA",
        59654: "I MINUSCOLA LUNGA APERTA",
        59655: "I MINUSCOLA LUNGA APERTA TONICA",
        59656: "I MINUSCOLA LUNGA SEMICERCHIO",
        59657: "I MINUSCOLA LUNGA SEMICERCHIO TONICA",
        59664: "I MINUSCOLA NASALE",
        59665: "I MINUSCOLA NASALE TONICA",
        59666: "I MINUSCOLA NASALE APERTA",
        59667: "I MINUSCOLA NASALE APERTA TONICA",
        59668: "I MINUSCOLA NASALE SEMICERCHIO",
        59669: "I MINUSCOLA NASALE SEMICERCHIO TONICA",
        59678: "I MINUSCOLA APERTA SENZA PUNTINO",
        59702: "O MINUSCOLA CHIUSA",
        59703: "O MINUSCOLA CHIUSA TONICA",
        59704: "O MINUSCOLA MOLTO CHIUSA",
        59705: "O MINUSCOLA MOLTO CHIUSA TONICA",
        59706: "O MINUSCOLA APERTA",
        59707: "O MINUSCOLA APERTA TONICA",
        59708: "O MINUSCOLA MOLTO APERTA",
        59709: "O MINUSCOLA MOLTO APERTA TONICA",
        59712: "O MINUSCOLA LUNGA",
        59713: "O MINUSCOLA LUNGA TONICA",
        59714: "O MINUSCOLA LUNGA CHIUSA",
        59715: "O MINUSCOLA LUNGA CHIUSA TONICA",
        59716: "O MINUSCOLA LUNGA MOLTO CHIUSA",
        59717: "O MINUSCOLA LUNGA MOLTO CHIUSA TONICA",
        59718: "O MINUSCOLA LUNGA APERTA",
        59719: "O MINUSCOLA LUNGA APERTA TONICA",
        59720: "O MINUSCOLA LUNGA MOLTO APERTA",
        59721: "O MINUSCOLA LUNGA MOLTO APERTA TONICA",
        59724: "O MINUSCOLA NASALE",
        59725: "O MINUSCOLA NASALE TONICA",
        59726: "O MINUSCOLA NASALE CHIUSA",
        59727: "O MINUSCOLA NASALE CHIUSA TONICA",
        59728: "O MINUSCOLA NASALE MOLTO CHIUSA",
        59729: "O MINUSCOLA NASALE MOLTO CHIUSA TONICA",
        59730: "O MINUSCOLA NASALE APERTA",
        59731: "O MINUSCOLA NASALE APERTA TONICA",
        59732: "O MINUSCOLA NASALE MOLTO APERTA",
        59733: "O MINUSCOLA NASALE MOLTO APERTA TONICA",
        59737: "O MINUSCOLA PALATALE TONICA",
        59738: "O MINUSCOLA PALATALE CHIUSA",
        59739: "O MINUSCOLA PALATALE CHIUSA TONICA",
        59740: "O MINUSCOLA PALATALE MOLTO CHIUSA",
        59741: "O MINUSCOLA PALATALE MOLTO CHIUSA TONICA",
        59742: "O MINUSCOLA PALATALE APERTA",
        59743: "O MINUSCOLA PALATALE APERTA TONICA",
        59744: "O MINUSCOLA PALATALE MOLTO APERTA",
        59745: "O MINUSCOLA PALATALE MOLTO APERTA TONICA",
        59748: "O MINUSCOLA PALATALE LUNGA",
        59749: "O MINUSCOLA PALATALE LUNGA TONICA",
        59750: "O MINUSCOLA PALATALE LUNGA CHIUSA",
        59751: "O MINUSCOLA PALATALE LUNGA CHIUSA TONICA",
        59752: "O MINUSCOLA PALATALE LUNGA MOLTO CHIUSA",
        59753: "O MINUSCOLA PALATALE LUNGA MOLTO CHIUSA TONICA",
        59754: "O MINUSCOLA PALATALE LUNGA APERTA",
        59755: "O MINUSCOLA PALATALE LUNGA APERTA TONICA",
        59756: "O MINUSCOLA PALATALE LUNGA MOLTO APERTA",
        59757: "O MINUSCOLA PALATALE LUNGA MOLTO APERTA TONICA",
        59760: "O MINUSCOLA PALATALE NASALE",
        59761: "O MINUSCOLA PALATALE NASALE TONICA",
        59762: "O MINUSCOLA PALATALE NASALE CHIUSA",
        59763: "O MINUSCOLA PALATALE NASALE CHIUSA TONICA",
        59764: "O MINUSCOLA PALATALE NASALE MOLTO CHIUSA",
        59765: "O MINUSCOLA PALATALE NASALE MOLTO CHIUSA TONICA",
        59766: "O MINUSCOLA PALATALE NASALE APERTA",
        59767: "O MINUSCOLA PALATALE NASALE APERTA TONICA",
        59768: "O MINUSCOLA PALATALE NASALE MOLTO APERTA",
        59769: "O MINUSCOLA PALATALE LUNGA MOLTO APERTA TONICA",
        59785: "U MINUSCOLA TONICA",
        59786: "U MINUSCOLA APERTA",
        59787: "U MINUSCOLA APERTA TONICA",
        59788: "U MINUSCOLA SEMICERCHIO",
        59789: "U MINUSCOLA SEMICERCHIO TONICA",
        59796: "U MINUSCOLA LUNGA",
        59797: "U MINUSCOLA LUNGA TONICA",
        59798: "U MINUSCOLA LUNGA APERTA",
        59799: "U MINUSCOLA LUNGA APERTA TONICA",
        59800: "U MINUSCOLA LUNGA SEMICERCHIO",
        59801: "U MINUSCOLA LUNGA SEMICERCHIO TONICA",
        59808: "U MINUSCOLA NASALE",
        59809: "U MINUSCOLA NASALE TONICA",
        59810: "U MINUSCOLA NASALE APERTA",
        59811: "U MINUSCOLA NASALE APERTA TONICA",
        59812: "U MINUSCOLA NASALE SEMICERCHIO",
        59813: "U MINUSCOLA NASALE SEMICERCHIO TONICA",
        59821: "U MINUSCOLA PALATALE TONICA",
        59822: "U MINUSCOLA PALATALE APERTA",
        59823: "U MINUSCOLA PALATALE APERTA TONICA",
        59824: "U MINUSCOLA PALATALE SEMICERCHIO",
        59825: "U MINUSCOLA PALATALE SEMICERCHIO TONICA",
        59832: "U MINUSCOLA PALATALE LUNGA",
        59833: "U MINUSCOLA PALATALE LUNGA TONICA",
        59834: "U MINUSCOLA PALATALE LUNGA APERTA",
        59835: "U MINUSCOLA PALATALE LUNGA APERTA TONICA",
        59836: "U MINUSCOLA PALATALE LUNGA SEMICERCHIO",
        59837: "U MINUSCOLA PALATALE LUNGA SEMICERCHIO TONICA",
        59844: "U MINUSCOLA PALATALE NASALE",
        59845: "U MINUSCOLA PALATALE NASALE TONICA",
        59846: "U MINUSCOLA PALATALE NASALE APERTA",
        59847: "U MINUSCOLA PALATALE NASALE APERTA TONICA",
        59848: "U MINUSCOLA PALATALE NASALE SEMICERCHIO",
        59849: "U MINUSCOLA PALATALE NASALE SEMICERCHIO TONICA",
        59869: "A MAIUSCOLA PALATALE CHIUSA",
        59870: "A MAIUSCOLETTO PALATALE CHIUSA",
        59872: "A MINUSCOLA PALATALE APERTA",
        59873: "A MAIUSCOLA PALATALE APERTA",
        59874: "A MAIUSCOLETTO PALATALE APERTA",
        59881: "O MAIUSCOLA PALATALE CHIUSA",
        59882: "O MAIUSCOLETTO PALATALE CHIUSA",
        59884: "O MINUSCOLA PALATALE APERTA",
        59885: "O MAIUSCOLA PALATALE APERTA",
        59886: "O MAIUSCOLETTO PALATALE APERTA",
        59893: "U MAIUSCOLA PALATALE CHIUSA",
        59894: "U MAIUSCOLETTO PALATALE CHIUSA",
        59896: "U MINUSCOLA PALATALE APERTA",
        59897: "U MAIUSCOLA PALATALE CHIUSA",
        59898: "U MAIUSCOLETTO PALATALE CHIUSA",
        59904: "C MINUSCOLA MEDIOPALATALE",
        59905: "C MAIUSCOLA MEDIOPALATALE",
        59906: "C MAIUSCOLETTO MEDIOPALATALE",
        59908: "G MINUSCOLA MEDIOPALATALE",
        59909: "G MAIUSCOLA MEDIOPALATALE",
        59910: "G MAIUSCOLETTO MEDIOPALATALE"
      }
    },
    redazione: {
      codes: [
        // vocali
        193,
        225,
        194,
        226,
        200,
        232,
        201,
        233,
        205,
        237,
        207,
        239,
        210,
        242,
        211,
        243,
        214,
        246,
        59885,
        59884,
        59881,
        59737,
        218,
        250,
        220,
        252,
        471,
        472,
        // consonanti
        59905,
        59904,
        59909,
        59908,
        7714,
        7715,
        7776,
        7777,
        379,
        380,
        // segni
        171,
        187,
        8220,
        8221,
        8216,
        8217,
        59932,
        8211,
        59930,
        59928,
        59929
      ],
      names: {
        193: "A MAIUSCOLA TONICA",
        225: "A MINUSCOLA TONICA",
        194: "A MAIUSCOLA VELARE",
        226: "A MINUSCOLA VELARE",
        200: "E MAIUSCOLA TONICA APERTA",
        232: "E MINUSCOLA TONICA APERTA",
        201: "E MAIUSCOLA TONICA CHIUSA",
        233: "E MINUSCOLA TONICA CHIUSA",
        205: "I MAIUSCOLA TONICA",
        237: "I MINUSCOLA TONICA",
        207: "I MAIUSCOLA ATONA VOCALICA",
        239: "I MINUSCOLA ATONA VOCALICA",
        210: "O MAIUSCOLA APERTA",
        242: "O MINUSCOLA APERTA",
        211: "O MAIUSCOLA CHIUSA",
        243: "O MINUSCOLA CHIUSA",
        214: "O MAIUSCOLA TURBATA",
        246: "O MINUSCOLA TURBATA",
        59885: "O MAIUSCOLA TURBATA APERTA",
        59884: "O MINUSCOLA TURBATA APERTA",
        59881: "O MAIUSCOLA TURBATA CHIUSA",
        59737: "O MINUSCOLA TURBATA CHIUSA",
        218: "U MAIUSCOLA TONICA",
        250: "U MINUSCOLA TONICA",
        220: "U MAIUSCOLA TURBATA",
        252: "U MINUSCOLA TURBATA",
        471: "U MAIUSCOLA TURBATA TONICA",
        472: "U MINUSCOLA TURBATA TONICA",
        59905: "C MAIUSCOLA MEDIOPALATALE",
        59904: "C MINUSCOLA MEDIOPALATALE",
        59909: "G MAIUSCOLA MEDIOPALATALE",
        59908: "G MINUSCOLA MEDIOPALATALE",
        7714: "H MAIUSCOLA FRICATIVA VELARE SONORA",
        7715: "H MINUSCOLA FRICATIVA VELARE SONORA",
        7776: "S MAIUSCOLA SONORA",
        7777: "S MINUSCOLA SONORA",
        379: "Z MAIUSCOLA SONORA",
        380: "Z MINUSCOLA SONORA",
        59928: "VIRGOLETTA TIPIZZAZIONE APRE",
        59929: "VIRGOLETTA TIPIZZAZIONE CHIUDE",
      }
    },
    latino: {
      codes: [257, 259, 275, 277, 299, 301, 333, 335, 363, 365, 263, 59930],
      names: {
        257: "LATINO A LUNGA",
        259: "LATINO A BREVE",
        275: "LATINO E LUNGA",
        277: "LATINO E BREVE",
        299: "LATINO I LUNGA",
        301: "LATINO I BREVE",
        333: "LATINO O LUNGA",
        335: "LATINO O BREVE",
        363: "LATINO U LUNGA",
        365: "LATINO U BREVE",
        263: "C TODOROVIC"
      }
    },
    fonetico: {
      codes: [
        225,
        59509,
        226,
        228,
        59533,
        59595,
        59607,
        59599,
        59611,
        237,
        59653,
        59644,
        59703,
        59715,
        59707,
        59719,
        246,
        59737,
        59739,
        59751,
        59743,
        59755,
        250,
        59797,
        252,
        472,
        59833,
        59823,
        59835,
        59788,
        59904,
        269,
        59908,
        487,
        7715,
        619,
        59917,
        59918,
        241,
        59921,
        7777,
        59922,
        353,
        380,
        59923,
        382
      ],
      names: {
        225: "A TONICA",
        59509: "A TONICA LUNGA",
        226: "A VELARE",
        228: "A PALATALE",
        59533: "A PALATALE TONICA",
        59595: "E CHIUSA TONICA",
        59607: "E CHIUSA TONICA LUNGA",
        59599: "E APERTA TONICA",
        59611: "E APERTA TONICA LUNGA",
        237: "I TONICA",
        59653: "I TONICA LUNGA",
        59644: "I SEMIVOCALE SEMICONSONANTE",
        59703: "O CHIUSA TONICA",
        59715: "O CHIUSA TONICA LUNGA",
        59707: "O APERTA TONICA",
        59719: "O APERTA TONICA LUNGA",
        246: "O TURBATA ATONA",
        59737: "O TURBATA TONICA",
        59739: "O TURBATA CHIUSA TONICA",
        59751: "O TURBATA CHIUSA TONICA LUNGA",
        59743: "O TURBATA APERTA TONICA",
        59755: "O TURBATA APERTA TONICA LUNGA",
        250: "U TONICA",
        59797: "U TONICA LUNGA",
        252: "U TURBATA ATONA",
        472: "U TURBATA TONICA",
        59833: "U TURBATA LUNGA",
        59823: "U TURBATA APERTA TONICA",
        59835: "U TURBATA APERTA TONICA LUNGA",
        59788: "U SEMIVOCALE SEMICONSONANTE",
        59904: "C MEDIOPALATALE",
        269: "C PALATALE",
        59908: "G MEDIOPALATALE",
        487: "G PALATALE",
        7715: "H FRICATIVA VELARE SONORA",
        619: "L LATERALE PALATALE",
        59917: "M NASALE LABIODENTALE",
        59918: "N NASALE VELARE",
        241: "N NASALE PALATALE",
        59921: "R VIBRANTE PALATALE",
        7777: "S FRICATIVA ALVEOLARE SONORA",
        59922: "S FRICATIVA SEMI PALATALE SONORA",
        353: "S FRICATIVA PALATALE SORDA",
        380: "Z AFFRICATA ALVEOLARE SONORA",
        59923: "Z FRICATIVA SEMI PALATALE SONORA",
        382: "Z FRICATIVA PALATALE SONORA"
      }
    },
    fonetico_dosi: {
      codes: [
        225,
        59509,
        226,
        229,
        7841,
        59498,
        228,
        59533,
        59595,
        59607,
        59594,
        59596,
        59599,
        59611,
        59598,
        59600,
        237,
        59653,
        59642,
        59644,
        59703,
        59715,
        59702,
        59704,
        59707,
        59719,
        59706,
        59708,
        246,
        59739,
        59751,
        59738,
        59740,
        59743,
        59755,
        59742,
        59744,
        250,
        59797,
        59786,
        252,
        59833,
        59823,
        59835,
        59822,
        59788,
        7813,
        601,
        945,
        59904,
        269,
        59908,
        487,
        7715,
        619,
        59917,
        59918,
        59919,
        241,
        7771,
        7777,
        7779,
        353,
        380,
        7827,
        382,
        678,
        675,
        966,
        946,
        977,
        948,
        947
      ],
      names: {
        225: "A TONICA",
        59509: "A TONICA LUNGA",
        226: "A VELARE",
        229: "A VELARE",
        7841: "A VELARE",
        59498: "A PALATALE",
        228: "A PALATALE",
        59533: "A PALATALE TONICA",
        59595: "E CHIUSA TONICA",
        59607: "E CHIUSA TONICA LUNGA",
        59594: "E CHIUSA",
        59596: "E MOLTO CHIUSA",
        59599: "E APERTA TONICA",
        59611: "E APERTA TONICA LUNGA",
        59598: "E APERTA",
        59600: "E MOLTO APERTA",
        237: "I TONICA",
        59653: "I TONICA LUNGA",
        59642: "I APERTA",
        59644: "I SEMIVOCALE SEMICONSONANTE",
        59703: "O CHIUSA TONICA",
        59715: "O CHIUSA TONICA LUNGA",
        59702: "O CHIUSA",
        59704: "O MOLTO CHIUSA",
        59707: "O APERTA TONICA",
        59719: "O APERTA TONICA LUNGA",
        59706: "O APERTA",
        59708: "O MOLTO APERTA",
        246: "O TURBATA ATONA",
        59739: "O TURBATA CHIUSA TONICA",
        59751: "O TURBATA CHIUSA TONICA LUNGA",
        59738: "O TURBATA CHIUSA",
        59740: "O TURBATA MOLTO CHIUSA",
        59743: "O TURBATA APERTA TONICA",
        59755: "O TURBATA APERTA TONICA LUNGA",
        59742: "O TURBATA APERTA",
        59744: "O TURBATA MOLTO APERTA",
        250: "U TONICA",
        59797: "U TONICA LUNGA",
        59786: "U APERTA",
        252: "U TURBATA",
        59833: "U TURBATA LUNGA",
        59823: "U TURBATA APERTA TONICA",
        59835: "U TURBATA APERTA TONICA LUNGA",
        59822: "U TURBATA APERTA",
        59788: "U SEMIVOCALE SEMICONSONANTE",
        7813: "W SEMI VOCALE ARROTONDATA",
        601: "SHWA VOCALE INDISTINTA",
        945: "ALFA VOCALE INDISTINTA",
        59904: "C MEDIOPALATALE",
        269: "C PALATALE",
        59908: "G MEDIOPALATALE",
        487: "G PALATALE",
        7715: "H FRICATIVA VELARE SONORA",
        619: "L LATERALE PALATALE",
        59917: "M NASALE LABIODENTALE",
        59918: "N NASALE VELARE",
        59919: "N NASALE VELARE",
        241: "N NASALE PALATALE",
        7771: "R VIBRANTE PALATALE",
        7777: "S FRICATIVA ALVEOLARE SONORA",
        7779: "S FRICATIVA SEMI PALATALE POST ALVEOLARE SORDA",
        353: "S FRICATIVA PALATALE SORDA",
        380: "Z AFFRICATA ALVEOLARE SONORA",
        7827: "Z FRICATIVA SEMI PALATALE POST ALVEOLARE SONORA",
        382: "Z FRICATIVA PALATALE SONORA",
        678: "TS Z AFFRICATA ALVEOLARE SORDA",
        675: "DZ Z AFFRICATA ALVEOLARE SONORA",
        966: "FRICATIVA BI LABIALE SORDA",
        946: "FRICATIVA BI LABIALE SONORA",
        977: "FRICATIVA INTER DENTALE SORDA",
        948: "FRICATIVA INTER DENTALE SONORA",
        947: "FRICATIVA VELARE SONORA"
      }
    }
  }
};

export const engine = {
  log: {
    _log: (msg) => {
      console.log(msg);
    },
    error: (msg) => {
      engine.log._log("Error: " + msg);
    },
    debug: (msg) => {
      if (state.debug) {
        return engine.log._log("Debug: " + msg);
      }
    }
  },
  actions: {
    fillFavStars: () => {
      $("a.fav-btn").each(function (idx) {
        engine.actions.toggleFav(this, "refresh");
      });
    },
    displayNumpadShortcutOutput: (c) => {
      let char = misc.toChar(c);
      $("#numpadShortcutOutput").text(char);
    },
    disableNumpadUI: () => {
      $("#numpadModal").remove();
      $("#showNumpadModalBtn").remove();
    },
    showNumpadModal: () => {
      if (state.device.touchScreen) {
        return false;
      }
      $("#numpadModal").modal();
    },
    toggleFav: (a, forceState) => {
      let $a = $(a);
      let strCode = $a.attr("data-char-code");
      let code = parseInt(strCode, 10);
      if (isNaN(code)) {
        engine.log.error(`${strCode} is NaN`);
      }
      if (forceState === undefined) {
        engine.favs.toggle(code);
      } else {
        let isFav = engine.favs.isFav(code);
        if (forceState === true && !isFav) {
          engine.favs.add(code);
        } else if (forceState === false) {
          engine.favs.remove(code);
        } else if (forceState === "refresh") {
          // not changing the favs
        }
      }
      let icn_name = engine.favs.isFav(code) ? "star-fill" : "star";
      $a.empty();
      dom.build.icon(icn_name).appendTo($a);
    },
    enableTooltips: (v) => {
      if (typeof v === "object") {
        return v.tooltip();
      }
      if (typeof v === "string") {
        return $(v).tooltip();
      }
      return $('[data-toggle="tooltip"]').tooltip();
    },
    buildCells: async () => {
      return engine.actions
        .clearCells()
        .then(async () => {
          let groupName = "all";
          let $raster = $("#raster");
          let codes = [];
          if (props.groups[groupName]) {
            codes = props.groups[groupName].codes;
          }
          for (let i = 0; i < codes.length; i++) {
            let code = codes[i];
            let $col = await dom.build.charCell(
              code,
              logic.getCodeColSize(groupName, code)
            );
            $col.appendTo($raster);
          }
          return true;
        })
        .catch((err) => {
          engine.log.error("Build cells promise");
          if (state.debug) {
            console.log(err);
          }
          return false;
        });
    },
    displayCells: async () => {
      let group = state.group,
        filter = state.filter,
        codes = [],
        fav = group === consts.FAVOURITE_GROUP_NAME,
        codeStr,
        code,
        iCode,
        _ret,
        $n;
      if (fav) {
        codes = engine.favs.getCodes();
      } else if (props.groups[group]) {
        codes = props.groups[group].codes;
      }

      // expression used to check if the char match the filter
      function filterMatch(code) {
        return logic.charNameMatchFilter(
          logic.getCharName(code, "", ["group", "all", "unicode"])
        );
      }
      // select what to hide and what to show
      let $displayed = $("#raster").children(":not(.d-none)");
      let $hidden = $("#raster").children(".d-none");
      let $toHide = $displayed.filter((idx, node) => {
        // rx.lastIndex = 0; // reset the rx manually
        $n = $(node);
        codeStr = $n.attr("data-char-code");
        code = parseInt(codeStr, 10);
        iCode = codes.indexOf(code);
        _ret =
          iCode === -1 ||
          (filter !== undefined && filter !== "" && !filterMatch(code));
        $n.css("order", _ret ? -1 : iCode); // hidden has order: -1
        $n.attr("draggable", _ret ? false : fav);
        return _ret;
      });
      let $toShow = $hidden.filter((idx, node) => {
        // rx.lastIndex = 0; // reset the rx manually
        $n = $(node);
        codeStr = $n.attr("data-char-code");
        code = parseInt(codeStr, 10);
        iCode = codes.indexOf(code);
        _ret =
          iCode > -1 &&
          (filter === undefined || filter === "" || filterMatch(code));
        $n.css("order", _ret ? iCode : -1); // hidden has order: -1
        $n.attr("draggable", _ret ? fav : false);
        return _ret;
      });

      // process the selections
      $toHide.addClass("d-none");
      $toShow.removeClass("d-none");
    },
    clearAndDisplayLoader: async () => {
      engine.actions.clearCells().finally(() => {
        let $loader = $("#jsutils #loader #main-loader");
        let $raster = $("#raster");
        $loader.appendTo($raster);
      });
    },
    charInfoModalCopyBtn: async () => {
      let char = $("#char-info-char").text();
      let res = misc.copyToClipboard(char);
      misc.animateCSS($("#charInfoModal #ciapaSuBtn"), "shakeX").finally(() => {
        return res;
      });
    },
    showCharInfo: (a) => {
      let $modalObj = $("#charInfoModal");
      let $modalBody = $("#charInfoModal .modal-body");
      let $a = $(a);
      let strCode = $a.attr("data-char-code");
      let code = parseInt(strCode, 10);
      if (isNaN(code)) {
        engine.log.error(`${strCode} is NaN`);
      }
      let charAttribs = Unicode.getCharAttr(code);
      let char = Unicode.getChar(code);
      let cat = Unicode.categories[Unicode.getCategoryCode(code)];
      let hex = code.toString(16);
      let name = charAttribs ? charAttribs.name : "undefined";
      let $newBody = dom.build.charInfo(char, [
        ["name", name],
        ["category", cat],
        ["hex", hex],
        ["code", code]
      ]);
      $modalBody.empty().append($newBody);
      $modalObj.modal();
    },
    clearTextNotes: () => {
      let $textNotes = $("input#text-notes");
      $textNotes.val("");
    },
    copyTextNotes: (str) => {
      let $textNotes = $("input#text-notes");
      misc.copyToClipboard($textNotes.val());
    },
    appendToTextNotes: (str) => {
      let $textNotes = $("input#text-notes");
      let newVal = $textNotes.val() + str;
      $textNotes.val(newVal);
    },
    cardBtnPress: (btn) => {
      let $btn = $(btn);
      let s = $btn.text();
      misc.copyToClipboard(s);
      engine.actions.appendToTextNotes(s);
    },
    clearCells: async () => {
      let $raster = $("#raster");
      let $children = $raster.children();
      misc.animateCSS($children, "zoomOut").finally($raster.empty);
    }
  },
  drag: {
    events: {
      dragstart: (evt) => {
        let $target = $(evt.target);
        let $raster = $("#raster");
        $target.addClass("drag-target");
        $raster.addClass("dragging");
        state.dragging.target = $target;
      },
      dragend: (evt) => {
        let $target = $(evt.target);
        let $raster = $("#raster");
        $target.removeClass("drag-target");
        $raster.removeClass("dragging");
        state.dragging.target = undefined;
      }
    }
  },
  drop: {
    events: {
      dragenter: (evt) => {
        let $target = $(evt.target);
        $target.addClass("drop-over");
      },
      dragover: (evt) => {
        evt.preventDefault();
      },
      dragleave: (evt) => {
        let $target = $(evt.target);
        $target.removeClass("drop-over");
      },
      drop: (evt) => {
        evt.preventDefault();
        let $target = $(evt.target);
        let charCodeToMove = parseInt(
          state.dragging.target.attr("data-char-code"),
          10
        );
        let charCodeWhereMove = parseInt(
          $target.parent().attr("data-char-code"),
          10
        );
        let mvPre = $target.hasClass("drop-pre");

        engine.favs.remove(charCodeToMove);
        let _t1 = engine.favs.get();
        let idx =
          engine.favs.getCodes().indexOf(charCodeWhereMove) + (mvPre ? 0 : 1);
        let pre = _t1.slice(0, idx);
        let post = _t1.slice(idx);
        engine.favs.set(pre + Unicode.getChar(charCodeToMove) + post);

        engine.drag.events.dragend({ target: $target });
        engine.drop.events.dragleave(evt);

        if (_t1 !== engine.favs.get()) {
          // changes has been made so refresh the display
          engine.actions.displayCells();
        }
      }
    }
  },
  favs: {
    get: () => {
      return storage.get("favs");
    },
    set: (str) => {
      return storage.set("favs", str);
    },
    clear: () => {
      return engine.favs.set("");
    },
    isFav: (c) => {
      let code = misc.toCharCode(c);
      let char = Unicode.getChar(code);
      return engine.favs.get().indexOf(char) > -1;
    },
    toggle: (c) => {
      let code = misc.toCharCode(c);
      let result = engine.favs.isFav(code)
        ? engine.favs.remove(code)
        : engine.favs.add(code);
      return result;
    },
    remove: (c) => {
      let code = misc.toCharCode(c);
      let char = Unicode.getChar(code);
      let favStr = engine.favs.get();
      let idx = favStr.indexOf(char);
      if (idx > -1) {
        let pre = favStr.slice(0, idx);
        let post = favStr.slice(idx + 1);
        engine.favs.set(pre + post);
      }
      return !engine.favs.isFav(code);
    },
    add: (c) => {
      let code = misc.toCharCode(c);
      let char = Unicode.getChar(code);
      engine.favs.set(engine.favs.get() + char);
      return true;
    },
    getCodes: () => {
      return misc.str2Codes(engine.favs.get());
    }
  }
};

export const dom = {
  build: {
    charCell: async (c, size = 1) => {
      let char = misc.toChar(c);
      let code = misc.toCharCode(c);
      let name = logic.getCharName(code, "<unnamed>", [
        // "group",
        "all",
        "unicode"
      ]);

      let $ret = dom.build._charCell.container(size, code, name);

      // let $drop_post =
      dom.build._charCell.dropArea().addClass("drop-pre").appendTo($ret);

      // let $drop_post =
      dom.build._charCell.dropArea().addClass("drop-post").appendTo($ret);

      // let $card =
      dom.build._charCell.card(code, name, char).appendTo($ret);

      return $ret;
    },
    _charCell: {
      container: (size, code, name) => {
        let $ret = $(`<div></div>`)
          .addClass(`col-${size * 4}`)
          .addClass(`col-sm-${size * 3}`)
          .addClass(`col-md-${size * 2}`)
          .addClass(`col-xl-${size}`)
          .addClass(`px-md-2`)
          .addClass(`px-xl-1`)
          .addClass(`py-1`)
          .addClass(`text-center`)
          .addClass(`char-cell`)
          .attr("data-char-code", code)
          .attr("data-char-name", name);
        return $ret;
      },
      dropArea: () => {
        let $ret = $(`<div></div>`).addClass("drop-area");
        return $ret;
      },
      card: (code, name, char) => {
        let $ret = $("<div></div>").addClass("card");
        // let $body =
        dom.build._charCell._card.body(code, name, char).appendTo($ret);
        return $ret;
      },
      _card: {
        body: (code, name, char) => {
          let $ret = $("<div></div>")
            .addClass("card-body")
            .addClass("pt-1")
            .addClass("pb-4")
            .addClass("px-xl-2");
          // let $links =
          dom.build._charCell._card._body.links(code).appendTo($ret);
          // let $btn =
          dom.build._charCell._card._body.btn(name, char).appendTo($ret);
          return $ret;
        },
        _body: {
          links: (code) => {
            let $ret = $("<div></div>").addClass("d-flex").addClass("p-0");
            // let $info =
            dom.build._charCell._card._body._links.info(code).appendTo($ret);
            // let $fav =
            dom.build._charCell._card._body._links.fav(code).appendTo($ret);
            return $ret;
          },
          _links: {
            info: (code) => {
              let $ret = $(`<a></a>`)
                .addClass("align-self-center")
                .addClass("info-link")
                .attr("data-char-code", code)
                .attr("href", "")
                .attr("data-toggle", "tooltip")
                .attr("title", consts.CHAR_CELL_LINK_INFO_TITLE);
              listeners.showCharInfo($ret);
              // let $icon =
              dom.build
                .icon(consts.CHAR_CELL_LINK_INFO_ICON_NAME)
                .appendTo($ret);
              return $ret;
            },
            fav: (code) => {
              let $ret = $(`<a></a>`)
                .addClass("align-self-center")
                .addClass("fav-btn")
                .addClass("ml-auto")
                .attr("data-char-code", code)
                .attr("href", "")
                .attr("data-toggle", "tooltip")
                .attr("title", consts.CHAR_CELL_LINK_FAVOURITE_TITLE);
              listeners.toggleFav($ret);
              // let $icon =
              dom.build
                .icon(engine.favs.isFav(code) ? "star-fill" : "star")
                .appendTo($ret);
              return $ret;
            }
          },
          btn: (name, char) => {
            let $ret = $(`<button></button>`)
              .addClass("btn")
              .addClass("btn-light")
              .addClass("btn-lg")
              .addClass("char-btn")
              .addClass("px-0")
              .attr("type", "button")
              .attr("data-toggle", "tooltip")
              .attr("data-placement", "bottom")
              .attr("title", name)
              .text(char);
            listeners.cardBtnPress($ret);
            return $ret;
          }
        }
      }
    },
    charInfo: (c, attrList) => {
      let $container = $("<div></div>");
      $container.append(dom.build._charInfo.charRow(c));
      for (var i = 0; i < attrList.length; i++) {
        $container.append(
          dom.build._charInfo.attrRow(attrList[i][0], attrList[i][1])
        );
      }
      return $container;
    },
    _charInfo: {
      attrRow: (k, v) => {
        let $attrRow = $(`<div class="row"></div>`);
        // let $attrColKey =
        $(`<div class="col-3 text-right text-muted"></div>`)
          .text(k)
          .appendTo($attrRow);
        // let $attrColVal =
        $(`<div class="col-9 text-left"></div>`).text(v).appendTo($attrRow);
        return $attrRow;
      },
      charRow: (c) => {
        let char = misc.toChar(c);
        let $charRow = $(`<div class="row"></div>`);
        let $charCol = $(`<div class="col-12 text-center"></div>`).appendTo(
          $charRow
        );
        // let $charH =
        $(`<h1 id="char-info-char"></h1>`).text(char).appendTo($charCol);
        return $charRow;
      }
    },
    icon: (p) => {
      let $svg = $("#jsutils #icons #" + p).clone();
      $svg.attr("id", "");
      return $svg;
    }
  }
};

export const logic = {
  keyCode2NumpadShortcutOutput: (
    keyCode,
    numpadLayout = consts.DEFAULT_NUMPAD_LAYOUT,
    fallback
  ) => {
    let keyCodeName = consts.NUMPAD_KEYCODES_NAMES[keyCode];
    if (fallback === undefined) {
      fallback = consts.NUMPAD_REAL_LAYOUT[keyCodeName];
    }
    return numpadLayout[keyCodeName] || fallback;
  },
  checkRenderization: () => {
    return logic.checkCellsBuilt("number") && logic.checkCellsBuilt("type");
  },
  checkCellsBuilt: (by = "number") => {
    if (by === "number") {
      // checks if the number of the cells built match
      return (
        $("#raster>.char-cell").length ===
        props.groups[consts.ALL_GROUP_NAME].codes.length
      );
    }
    if (by === "type") {
      // checks that all the cells built are char-cells
      return $("#raster").children().length === $("#raster>.char-cell").length;
    }
  },
  getCodeColSize: (group, code) => {
    return props.groups[group].multicol[code] || 1;
  },
  getFilterRx: (op = "OR") => {
    let f = state.filter;
    let ws = f.split(" ").filter(function (x) {
      return x !== undefined && x !== "";
    });
    if (op === "OR") {
      let g = ws.join("|");
      return new RegExp("\\b(" + g + ")\\b", "gi");
    }
  },
  getFilterWords: () => {
    return misc.nonEmptyWords(state.filter);
  },
  getCharNames: (c, fallback = consts.DEFAULT_CHAR_FALLBACK) => {
    c = misc.toCharCode(c);
    let group = props.groups[state.group];
    let groupName = group ? group.names[c] || fallback : fallback,
      allGroupName = props.groups.all.names[c] || fallback,
      unicodeName = Unicode.getName(c, fallback);
    return { group: groupName, all: allGroupName, unicode: unicodeName };
  },
  getCharName: (
    c,
    fallback = consts.DEFAULT_CHAR_FALLBACK,
    mro = ["group", "all", "unicode"]
  ) => {
    let level;
    let names = logic.getCharNames(c, fallback);
    for (let i = 0; i < mro.length; i++) {
      level = mro[i];
      if (names[level] !== fallback) {
        return names[level];
      }
    }
    return fallback;
  },
  charNameMatchFilter: (str) => {
    function match(nameWord, filterWord) {
      // single char match ===
      // multi chars match startsWith
      if (filterWord.length === 1) {
        return nameWord === filterWord;
      }
      return nameWord.startsWith(filterWord);
    }
    str = str.toUpperCase();
    let f = state.filter.toUpperCase();
    let nws = misc.nonEmptyWords(str);
    let fws = misc.nonEmptyWords(f);
    for (var i = 0; i < fws.length; i++) {
      // no matches
      if (
        nws.every(function (nw) {
          return !match(nw, fws[i]);
        })
      ) {
        return false;
      }
    }
    return true;
  }
};

export const storage = {
  get: (k) => {
    return window.localStorage[consts.LOCAL_STORAGE_PREFIX + k];
  },
  set: (k, v) => {
    window.localStorage[consts.LOCAL_STORAGE_PREFIX + k] = v;
  },
  init: () => {
    for (var i = 0; i < consts.LOCAL_STORAGE_FIELDS.length; i++) {
      let tup = consts.LOCAL_STORAGE_FIELDS[i];
      if (storage.get(tup[0]) === undefined) {
        storage.set(tup[0], tup[1]);
      }
    }
  }
};

export const listeners = {
  // global
  numpadDisplayOptionsBtns: (numpadLayout = consts.DEFAULT_NUMPAD_LAYOUT) => {
    let $btn, keyCode, char;
    let $btns = $(".numpad-button-graphic:not(.disabled)[data-keycode]");
    $("#numpadDisplayNumbers").on("click", function () {
      for (let index = 0; index < $btns.length; index++) {
        $btn = $($btns[index]);
        keyCode = parseInt($btn.attr("data-keycode"), 10);
        char = misc.toChar(
          consts.NUMPAD_REAL_LAYOUT[consts.NUMPAD_KEYCODES_NAMES[keyCode]]
        );
        $btn.text(char);
      }
    });
    $("#numpadDisplayChars").on("click", function () {
      for (let index = 0; index < $btns.length; index++) {
        $btn = $($btns[index]);
        keyCode = parseInt($btn.attr("data-keycode"), 10);
        char = misc.toChar(
          logic.keyCode2NumpadShortcutOutput(keyCode, numpadLayout)
        );
        $btn.text(char);
      }
    });
  },
  numpadPointableBtns: (numpadLayout = consts.DEFAULT_NUMPAD_LAYOUT) => {
    let $btns = $(".numpad-button-graphic:not(.disabled)[data-keycode]");
    $btns.on("mouseover", function (event) {
      let tgt = $(event.originalEvent.target);
      let keyCode = parseInt(tgt.attr("data-keycode"), 10);
      let charToDisplay = logic.keyCode2NumpadShortcutOutput(
        keyCode,
        numpadLayout
      );
      engine.actions.displayNumpadShortcutOutput(charToDisplay);
    });
  },
  showNumpadModalBtn: () => {
    $("#showNumpadModalBtn").on("click", function (event) {
      event.preventDefault();
      engine.actions.showNumpadModal();
    });
  },
  clearTextNotesBtn: () => {
    $("#clearTextNotesBtn").on("click", function (event) {
      event.preventDefault();
      engine.actions.clearTextNotes();
    });
  },
  copyTextNotesBtn: () => {
    $("#copyTextNotesBtn").on("click", function (event) {
      event.preventDefault();
      engine.actions.copyTextNotes();
    });
  },
  groupDropdown: () => {
    $("#groupDropdown")
      .children("[data-group-name]")
      .on("click", function (event) {
        event.preventDefault();
        state.group = $(this).attr("data-group-name");
        let name = $(this).attr("data-group-display-name") || state.group;
        $("#groupDropdownBtn").text(name);
        engine.actions.displayCells();
      });
  },
  closeTooltipsOnMouseLeave: () => {
    $("body").on("mouseleave", '[data-toggle="tooltip"]', function () {
      $(this).tooltip("hide");
    });
  },
  charInfoModalCopyBtn: () => {
    $("#ciapaSuBtn").on("click", function (event) {
      event.preventDefault();
      engine.actions.charInfoModalCopyBtn(event);
    });
  },
  filterTextBox: () => {
    $("#filterTextbox").on("keyup reset focusout", function () {
      state.filter = $(this).val();
      engine.actions.displayCells();
    });
  },
  dragAndDrop: () => {
    document.addEventListener("dragstart", function (event) {
      if (event.target.classList.contains("char-cell")) {
        engine.drag.events.dragstart(event);
      }
    });
    document.addEventListener("dragend", function (event) {
      if (event.target.classList.contains("char-cell")) {
        engine.drag.events.dragend(event);
      }
    });
    document.addEventListener("dragenter", function (event) {
      if (event.target.classList.contains("drop-area")) {
        engine.drop.events.dragenter(event);
      }
    });
    document.addEventListener("dragover", function (event) {
      if (event.target.classList.contains("drop-area")) {
        engine.drop.events.dragover(event);
      }
    });
    document.addEventListener("dragleave", function (event) {
      if (event.target.classList.contains("drop-area")) {
        engine.drop.events.dragleave(event);
      }
    });
    document.addEventListener("drop", function (event) {
      if (event.target.classList.contains("drop-area")) {
        engine.drop.events.drop(event);
      }
    });
  },

  // targetted
  showCharInfo: ($obj) => {
    return $obj.on("click", function (event) {
      event.preventDefault();
      engine.actions.showCharInfo(this);
    });
  },
  toggleFav: ($obj) => {
    return $obj.on("click", function (event) {
      event.preventDefault();
      engine.actions.toggleFav(this);
    });
  },
  cardBtnPress: ($obj) => {
    return $obj.on("click", function () {
      engine.actions.cardBtnPress(this);
    });
  },
  comboCtrlNumpad: (
    $obj,
    callback,
    numpadLayout = consts.DEFAULT_NUMPAD_LAYOUT
  ) => {
    return $obj.on("keydown", function (event) {
      if (
        event.originalEvent.ctrlKey &&
        !(
          // Do not trigger for these combos
          (
            event.originalEvent.keyCode === 67 || // CTRL+C
            event.originalEvent.keyCode === 86 || // CTRL+V
            event.originalEvent.keyCode === 88 || // CTRL+X
            event.originalEvent.keyCode === 65
          ) // CTRL+A
        )
      ) {
        event.preventDefault();
        let keyCode = event.originalEvent.keyCode;
        let keyCodeName = consts.NUMPAD_KEYCODES_NAMES[keyCode];
        let charCode = numpadLayout[keyCodeName];
        if (keyCodeName !== undefined && charCode !== undefined) {
          engine.log.debug(
            "ctrl + numpad combo triggering callback(" + charCode + ")"
          );
          callback(charCode);
        }
      }
    });
  }
};

export const init = async () => {
  engine.log.debug("Initializing localStorage");
  storage.init();

  if (!state.loadedChars) {
    engine.log.debug("Loading unicode chars data");
    try {
      state.loadedChars = await Unicode.loadCharData();
      engine.log.debug(state.loadedChars ? "ok" : "non loaded");
    } catch (e) {
      console.log(e);
      engine.log.error("Couldn't load Unicode Character DB");
      return false;
    }
  } else {
    engine.log.debug("Unicode chars data already loaded");
  }

  if (!logic.checkRenderization()) {
    // non pre rendered
    engine.log.debug("Not prerendered: building char cells");
    engine.log.debug((await engine.actions.buildCells()) ? "ok" : "non built");
  } else {
    engine.log.debug("Prerendered: initializing listeners on char cells");
    // fill stars on favourites
    engine.actions.fillFavStars();
    // pre rendered -> init listeners
    listeners.showCharInfo($(".char-cell a.info-link"));
    listeners.toggleFav($(".char-cell a.fav-btn"));
    listeners.cardBtnPress($(".char-cell button.char-btn"));
  }

  // init global listeners
  engine.log.debug("Initializing global listeners");
  listeners.clearTextNotesBtn();
  listeners.copyTextNotesBtn();
  listeners.groupDropdown();
  listeners.charInfoModalCopyBtn();
  listeners.filterTextBox();

  // keyboard device only (NOT TOUCH)
  state.device.touchScreen = misc.deviceIsTouch();
  if (!state.device.touchScreen) {
    engine.log.debug(
      "Device not touch: initializing tooltips and drag and drop functions"
    );
    listeners.dragAndDrop();
    listeners.closeTooltipsOnMouseLeave();
    let tooltips = engine.actions.enableTooltips();
    engine.log.debug("tooltips: " + tooltips.length);

    // numpad combo
    engine.log.debug("Initializing numpad combo handling");
    listeners.comboCtrlNumpad($("#text-notes"), function (charCode) {
      $("#text-notes").val($("#text-notes").val() + misc.toChar(charCode));
    });
    engine.log.debug("Initializing numpad modal graphics");
    listeners.showNumpadModalBtn();
    listeners.numpadPointableBtns();
    listeners.numpadDisplayOptionsBtns();
  } else {
    engine.actions.disableNumpadUI();
  }

  return true;
};
