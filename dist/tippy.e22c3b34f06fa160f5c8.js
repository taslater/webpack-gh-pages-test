/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/draw-canvas.js":
/*!*******************************!*\
  !*** ./src/js/draw-canvas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawCanvas": () => (/* binding */ drawCanvas)
/* harmony export */ });
function drawCanvas(canvasFrom, ctxTo, center, angle) {
  ctxTo.save();
  ctxTo.translate(center[0], center[1]);
  ctxTo.rotate(angle);
  ctxTo.translate(-0.5 * canvasFrom.width, -0.5 * canvasFrom.height);
  ctxTo.drawImage(canvasFrom, 0, 0);
  ctxTo.restore();
}

/***/ }),

/***/ "./src/pages/tippy/cmaMeanInit.js":
/*!****************************************!*\
  !*** ./src/pages/tippy/cmaMeanInit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cmaMeanInit": () => (/* binding */ cmaMeanInit)
/* harmony export */ });
var cmaMeanInit = Float32Array.from([1.097368597984314, -0.4921252429485321, -2.4285199642181396, 1.9147231578826904, 1.4103649854660034, -1.0730559825897217, 3.633850336074829, 0.969073474407196, 1.72327721118927, 3.862189769744873, -0.5683848857879639, 0.4833804965019226, 1.621141791343689, -1.7951841354370117, 0.28255704045295715, 0.8373199105262756, -1.491740107536316, 1.680241346359253, 4.32080602645874, -6.2230939865112305, 3.8894057273864746, -0.43056386709213257, -1.0381842851638794, 1.206999659538269, -2.442864418029785, -3.2872400283813477, 4.1724443435668945, -1.3102113008499146, 2.0718746185302734, -2.012195348739624, -0.09232735633850098, -2.3299849033355713, -1.3458508253097534, 1.57430899143219, 1.585335373878479, -4.818405628204346, -0.5162748098373413, -0.35466793179512024, 0.6563999056816101, 0.5765581130981445, 3.2163033485412598, -2.673863410949707, -2.775988817214966, 0.3102789521217346, 2.8213186264038086, -2.6345112323760986, 0.41489309072494507, 0.5273040533065796, 2.8084323406219482, -0.22201833128929138, -1.8847272396087646, 2.1349411010742188, 3.9124855995178223, 0.23571348190307617, -0.4009905755519867, -2.32651686668396, -5.905391693115234, -3.277113199234009, -3.1946818828582764, 0.6040287613868713, 1.5398304462432861, -1.7137975692749023, -2.5994322299957275, 0.7596493363380432, 2.0505306720733643, -1.0719929933547974, -0.12434184551239014, -0.21520830690860748, -2.977525234222412, -2.916106700897217, -2.0895442962646484, 0.6780237555503845, -1.1381938457489014, -0.3976782262325287, -8.091259002685547, -0.8609429597854614, 2.272367000579834, -0.44986462593078613, -1.9860502481460571, -2.037736654281616, 1.3788461685180664, -0.946772575378418, -2.512946128845215, 1.2120083570480347, -0.8112329840660095, -0.2584746479988098, -0.8203612565994263, -1.7425763607025146, -2.4738595485687256, 0.20930416882038116, -3.1742286682128906, -0.1539025902748108, 2.706810474395752, -1.630825400352478, 0.03723296895623207, -2.7679619789123535, -1.1558122634887695, -0.16676628589630127, -0.11495263129472733, -0.3647719621658325, -1.2723920345306396, -0.8320516347885132, 0.0584125891327858, -0.20485924184322357, -0.6998800039291382, -0.7748422622680664, 0.03306061774492264, 0.05045829713344574, -0.7898354530334473, -0.3644859194755554, -1.9912363290786743, 0.30128753185272217, 0.4223995506763458, -3.72501277923584, -6.310052394866943, 3.808600425720215, 1.4358415603637695, -2.62609601020813, -2.87255597114563, 2.104060649871826, -3.1228067874908447, 0.46431323885917664, 1.5147188901901245, 1.0571037530899048, 0.053630534559488297, 0.8355461359024048, -2.3932297229766846, -1.0719527006149292, -1.0285042524337769, 4.927562236785889, -4.36212682723999, 1.996174693107605, 2.3710286617279053, -0.3524213433265686, -0.06643331795930862, -0.9069985747337341, 2.0232365131378174, 0.6794627904891968, -3.7015702724456787, -1.2146440744400024, 2.636486291885376, 3.430572748184204, 0.665721595287323, 0.35096776485443115, -4.536441802978516, 1.5776478052139282, 3.518752098083496, 4.304330348968506, 0.34464845061302185, 0.7764376401901245, 0.8761256337165833, 3.0202441215515137, -1.0507209300994873, -0.6082743406295776, -1.6540871858596802, 2.939337968826294, -0.17868749797344208, 2.395843505859375, -0.22536619007587433, -5.117509841918945, 1.9952406883239746, -0.9335593581199646, -0.7380295395851135, 0.8094670176506042, 0.8877607583999634, -1.979039192199707, 1.1599781513214111, -2.73085355758667, 3.2037062644958496, 0.7695357799530029, 1.7714511156082153, -2.932318925857544, -1.0461864471435547, 3.496929407119751, 3.517202138900757, 2.6925926208496094, 0.33698439598083496, -0.7475488185882568, 0.16617265343666077, -0.07216118276119232, -2.731569766998291, 2.3597419261932373, 0.14207404851913452, 0.34206706285476685, 5.10419225692749, 2.5803232192993164, 0.5957708358764648, 0.19110116362571716, 0.9374128580093384, 1.2445136308670044, 3.4148755073547363, -2.150707244873047, -2.19406795501709, -2.1235013008117676, -1.156686544418335, 1.1939444541931152, 3.0110416412353516, -0.7731320261955261, -2.8795650005340576, 2.6769773960113525, 2.0949344635009766, -2.073817491531372, 3.4075050354003906, 1.9652248620986938, -1.1932811737060547, -2.3039934635162354, -2.7437469959259033, -1.7810425758361816, 1.5841933488845825, 2.8032116889953613, 0.25412386655807495, -1.4644629955291748, 4.183811187744141, -0.17973998188972473, 2.7961342334747314, 1.39539635181427, 0.34437960386276245, -1.1173146963119507, 0.40626052021980286, -1.5824397802352905, 0.14563427865505219, -2.399414539337158, 6.656028747558594, 0.8279803395271301, -0.7896231412887573, -2.388155460357666, -0.5894807577133179, -1.5486451387405396, -0.9272681474685669, -2.5805861949920654, 0.18140041828155518, -1.4993616342544556, 0.6692470908164978, -3.4452054500579834, -1.1278798580169678, -5.746531963348389, 0.692906379699707, 0.38156548142433167, 1.763306736946106, -4.294862747192383, 0.6706625819206238, -0.4210456311702728, -2.863720178604126, -0.9124757647514343, 2.075263023376465, -3.9785890579223633, 0.2882373631000519, 0.4847204089164734, -6.575814723968506, -6.198582649230957, 0.43105143308639526, -5.662414073944092, -4.541703701019287, -6.71414041519165, -5.687849044799805, -9.647754669189453, -2.682098865509033, -2.0994865894317627, 2.992748737335205, -6.269527435302734, 2.764437198638916, 5.571993350982666, 0.817680835723877, 3.074885845184326, -2.727198600769043, 9.613213539123535, 4.820910930633545, -4.828794956207275, -6.644251823425293]);

/***/ }),

/***/ "./src/pages/tippy/draw-sim.js":
/*!*************************************!*\
  !*** ./src/pages/tippy/draw-sim.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawTippy": () => (/* binding */ drawTippy),
/* harmony export */   "drawInputBar": () => (/* binding */ drawInputBar),
/* harmony export */   "getWheelCanvas": () => (/* binding */ getWheelCanvas),
/* harmony export */   "getChassisCanvas": () => (/* binding */ getChassisCanvas),
/* harmony export */   "getLidarCanvas": () => (/* binding */ getLidarCanvas)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./src/pages/tippy/globals.js");
/* harmony import */ var _tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tippy.js */ "./src/pages/tippy/tippy.js");
/* harmony import */ var _js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../js/draw-canvas.js */ "./src/js/draw-canvas.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function drawTippy(tippy, terrainPts, scale, center, ctx, chassisCanvas, wheelCanvas, lidarCanvas) {
  var _tippy$drawPositionDa = tippy.drawPositionData,
      wheelPosCurrent = _tippy$drawPositionDa.wheelPosCurrent,
      wheelAngleCurrent = _tippy$drawPositionDa.wheelAngleCurrent,
      chassisPosCurrent = _tippy$drawPositionDa.chassisPosCurrent,
      chassisAngleCurrent = _tippy$drawPositionDa.chassisAngleCurrent;
  ctx.lineWidth = 2;
  var chassisMass = tippy.chassisMass,
      wheelMass = tippy.wheelMass,
      totalMass = chassisMass + wheelMass;
  var massCenter = [(chassisPosCurrent[0] * chassisMass + wheelPosCurrent[0] * wheelMass) / totalMass, // (chassisPosCurrent[1] * chassisMass + wheelPosCurrent[1] * wheelMass) /
  //   totalMass,
  wheelPosCurrent[1]];
  var wheelPosOffset = [wheelPosCurrent[0] - massCenter[0], wheelPosCurrent[1] - massCenter[1]],
      chassisPosOffset = [chassisPosCurrent[0] - massCenter[0], chassisPosCurrent[1] - massCenter[1]];
  var viewLimitsX = [massCenter[0] - 0.5 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.w / scale, massCenter[0] + 0.5 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.w / scale];
  var visibleTerrainIdxMin = (0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.xPosToTerrainIdx)(viewLimitsX[0]),
      visibleTerrainIdxMax = (0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.xPosToTerrainIdx)(viewLimitsX[1]);
  visibleTerrainIdxMin = Math.max(visibleTerrainIdxMin - 1, 0);
  visibleTerrainIdxMax = Math.min(visibleTerrainIdxMax + 1, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1);
  ctx.save();
  ctx.translate(center[0], center[1]);
  var drawBottom = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.h - center[1];

  if (visibleTerrainIdxMax != 1) {
    ctx.beginPath();
    ctx.moveTo(scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(visibleTerrainIdxMin) - massCenter[0]), scale * (terrainPts[visibleTerrainIdxMin] - massCenter[1]));

    for (var i = visibleTerrainIdxMin + 1; i <= visibleTerrainIdxMax; i++) {
      ctx.lineTo(scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(i) - massCenter[0]), scale * (terrainPts[i] - massCenter[1]));
    }

    ctx.lineTo(scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(visibleTerrainIdxMax) - massCenter[0]), drawBottom);
    ctx.lineTo(scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(visibleTerrainIdxMin) - massCenter[0]), drawBottom);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    for (var _i = visibleTerrainIdxMin; _i <= visibleTerrainIdxMax; _i++) {
      var idx = _i - (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) / 2,
          x = scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(_i) - massCenter[0]),
          y = scale * (terrainPts[_i] - massCenter[1]);
      ctx.beginPath();
      ctx.moveTo(x, y);

      if (idx * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval <= -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth || idx * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval >= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth) {
        continue;
      }

      var l = 10;

      if (idx % 4 == 0) {
        l = 40;
      } else if (idx % 2 == 0) {
        l = 20;
      }

      ctx.lineTo(x, y - l);
      ctx.stroke();
    }
  }

  if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth > viewLimitsX[0] && _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth < viewLimitsX[1]) {
    drawWall(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1, terrainPts, massCenter, drawBottom, ctx);
  }

  if (-_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth >= viewLimitsX[0] && -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth <= viewLimitsX[1]) {
    drawWall(0, terrainPts, massCenter, drawBottom, ctx);
  }

  (0,_js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__.drawCanvas)(chassisCanvas, ctx, [scale * chassisPosOffset[0], scale * chassisPosOffset[1]], chassisAngleCurrent);
  (0,_js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__.drawCanvas)(wheelCanvas, ctx, [scale * wheelPosOffset[0], scale * wheelPosOffset[1]], wheelAngleCurrent);
  var reverse = tippy.reverse;

  for (var j = 0; j < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.xOffs.length; j++) {
    var lidarY = tippy.lidarYs[j],
        xOff = reverse * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.xOffs[j];
    (0,_js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__.drawCanvas)(lidarCanvas, ctx, [scale * (wheelPosOffset[0] + xOff), scale * (wheelPosOffset[1] + tippy.wheelR + lidarY)], 0);
  }

  ctx.restore();
}

function drawWall(idx, terrainPts, massCenter, drawBottom, ctx) {
  var mirror = idx == 0 ? -1 : 1,
      wallTopDraw = scale * (terrainPts[idx] - massCenter[1] - _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.wallH),
      wallHDraw = drawBottom - wallTopDraw;
  ctx.fillStyle = "gray";
  ctx.fillRect(scale * (mirror * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth - massCenter[0]), wallTopDraw, scale * mirror * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.wallW, wallHDraw);
}

function drawInputBar(target, ctx) {
  ctx.lineWidth = 3;
  ctx.fillStyle = "red";
  ctx.fillRect(0.5 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.w, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.h - 1.2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barHeight, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barMax * target, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barHeight);
  ctx.beginPath();
  ctx.moveTo(0.5 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.w, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.h - 0.2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barHeight);
  ctx.lineTo(0.5 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.w, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.h - 1.2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barHeight);
  ctx.stroke();
} // function drawCanvas(canvasFrom, ctxTo, center, angle) {
//   ctxTo.save()
//   ctxTo.translate(center[0], center[1])
//   ctxTo.rotate(angle)
//   ctxTo.translate(-0.5 * canvasFrom.width, -0.5 * canvasFrom.height)
//   ctxTo.drawImage(canvasFrom, 0, 0)
//   ctxTo.restore()
// }

function getWheelCanvas(d) {
  var wheelCanvas = document.createElement("canvas"),
      wheelCTX = wheelCanvas.getContext("2d");
  var border = 1;
  wheelCanvas.width = d + 2 * border;
  wheelCanvas.height = d + 2 * border;
  var tireThickness = d * 25 / 400,
      tireR = 0.5 * (d - tireThickness),
      rimThickness = d * 18 / 400,
      rimShapowThickness = d * 15 / 400,
      rimR = tireR - 0.5 * (tireThickness + rimThickness),
      hubR = d * 47 / 400,
      axleCapR = d * 17 / 400,
      lugOffset = d * 33 / 400,
      lugR = d * 10 / 400,
      shadowColor = "rgb(130,130,130)";
  wheelCTX.save();
  wheelCTX.translate(0.5 * wheelCanvas.width, 0.5 * wheelCanvas.height); // tire
  // ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)

  var grd = wheelCTX.createRadialGradient(0, 0, rimR, 0, 0, tireR + tireThickness);
  grd.addColorStop(0, "black");
  grd.addColorStop(0.4, "rgb(40,40,40)");
  grd.addColorStop(0.55, "rgb(65,65,65)");
  grd.addColorStop(0.8, "black");
  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, tireR, 0, Math.PI * 2);
  wheelCTX.lineWidth = tireThickness;
  wheelCTX.strokeStyle = grd;
  wheelCTX.stroke(); // rim shadow

  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, rimR - 0.5 * (rimThickness + rimShapowThickness), 0, Math.PI * 2);
  wheelCTX.lineWidth = rimShapowThickness;
  wheelCTX.strokeStyle = shadowColor;
  wheelCTX.stroke(); // hub shadow

  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, hubR, 0, Math.PI * 2);
  wheelCTX.lineWidth = d * 5 / 400;
  wheelCTX.strokeStyle = shadowColor;
  wheelCTX.stroke();

  for (var _ = 0; _ < 5; _++) {
    spoke();
    wheelCTX.rotate(Math.PI * 2 / 5);
  } // rim


  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, rimR, 0, Math.PI * 2);
  wheelCTX.lineWidth = rimThickness;
  wheelCTX.strokeStyle = "silver";
  wheelCTX.stroke(); // hub

  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, hubR, 0, Math.PI * 2);
  wheelCTX.fillStyle = "silver";
  wheelCTX.fill(); // axle

  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, axleCapR, 0, Math.PI * 2);
  wheelCTX.lineWidth = d * 0.7 / 400;
  wheelCTX.strokeStyle = "black";
  wheelCTX.stroke(); // lugs

  for (var _2 = 0; _2 < 5; _2++) {
    lug();
    wheelCTX.rotate(Math.PI * 2 / 5);
  }

  function halfSpoke(stroke) {
    wheelCTX.beginPath();
    wheelCTX.moveTo(-1, hubR);
    wheelCTX.lineTo(d * 21 / 400, hubR - d * 10 / 400);
    wheelCTX.lineTo(d * 12 / 400, 0.32 * (hubR - d * 10 / 400 + rimR));
    wheelCTX.lineTo(d * 9 / 400, 0.75 * rimR);
    wheelCTX.lineTo(d * 11 / 400, 0.9 * rimR);
    wheelCTX.lineTo(d * 28 / 400, rimR);
    wheelCTX.lineTo(-1, rimR);
    wheelCTX.moveTo(-1, hubR - d * 10 / 400);

    if (stroke) {
      wheelCTX.lineWidth = d * 4 / 400;
      wheelCTX.strokeStyle = shadowColor;
      wheelCTX.stroke();
    } else {
      wheelCTX.fillStyle = "silver";
      wheelCTX.fill();
    }
  }

  function spoke() {
    wheelCTX.save();
    halfSpoke(true);
    wheelCTX.scale(-1, 1);
    halfSpoke(true);
    wheelCTX.restore();
    wheelCTX.save();
    halfSpoke(false);
    wheelCTX.scale(-1, 1);
    halfSpoke(false);
    wheelCTX.restore();
  }

  function lug() {
    wheelCTX.save();
    wheelCTX.translate(0, lugOffset);
    wheelCTX.beginPath();

    for (var i = 0; i < 6; i++) {
      var theta = i * Math.PI / 3,
          coord = [lugR * Math.cos(theta), lugR * Math.sin(theta)];

      if (i == 0) {
        wheelCTX.moveTo.apply(wheelCTX, coord);
      } else {
        wheelCTX.lineTo.apply(wheelCTX, coord);
      }
    }

    wheelCTX.closePath();
    wheelCTX.fillStyle = "rgb(150,150,150)";
    wheelCTX.fill();
    wheelCTX.strokeStyle = "black";
    wheelCTX.lineWidth = d * 0.7 / 400;
    wheelCTX.stroke();
    wheelCTX.restore();
  }

  wheelCTX.restore();
  return wheelCanvas;
}
function getChassisCanvas(chassisVertices, scale) {
  var chassisCanvas = document.createElement("canvas"),
      chassisCTX = chassisCanvas.getContext("2d");
  var border = 1;
  var xLims = [Infinity, -Infinity],
      yLims = [Infinity, -Infinity];

  var _iterator = _createForOfIteratorHelper(chassisVertices),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var xy = _step.value;
      var x = xy[0],
          y = xy[1];
      xLims[0] = Math.min(xLims[0], x);
      xLims[1] = Math.max(xLims[1], x);
      yLims[0] = Math.min(yLims[0], y);
      yLims[1] = Math.max(yLims[1], y);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  chassisCanvas.width = scale * (xLims[1] - xLims[0]) + 2 * border;
  chassisCanvas.height = scale * (yLims[1] - yLims[0]) + 2 * border;
  chassisCTX.translate(0.5 * chassisCanvas.width, 0.5 * chassisCanvas.height);
  chassisCTX.beginPath();
  chassisCTX.moveTo(scale * chassisVertices[0][0], scale * chassisVertices[0][1]);

  for (var i = 1; i < chassisVertices.length; i++) {
    chassisCTX.lineTo(scale * chassisVertices[i][0], scale * chassisVertices[i][1]);
  }

  chassisCTX.closePath();
  chassisCTX.fillStyle = "orange";
  chassisCTX.fill();
  chassisCTX.stroke();
  chassisCTX.font = "25px sans-serif";
  chassisCTX.textAlign = "center"; // chassisCTX.textBaseline = "middle"

  chassisCTX.textBaseline = "bottom";
  chassisCTX.fillStyle = "black";
  chassisCTX.rotate(0.5 * Math.PI);
  chassisCTX.translate(-35, 0);
  chassisCTX.fillText("TIPPY", 0, 0);
  chassisCTX.rotate(1 * Math.PI);
  chassisCTX.fillText("TIPPY", 0, 0);
  return chassisCanvas;
}
function getLidarCanvas() {
  var lidarCanvas = document.createElement("canvas"),
      lidarCTX = lidarCanvas.getContext("2d");
  var border = 1,
      pointR = 5,
      d = 2 * (border + pointR);
  lidarCanvas.width = d;
  lidarCanvas.height = d;
  lidarCTX.translate(0.5 * lidarCanvas.width, 0.5 * lidarCanvas.height);
  lidarCTX.beginPath();
  lidarCTX.arc(0, 0, pointR, 0, 2 * Math.PI);
  lidarCTX.fillStyle = "red";
  lidarCTX.fill();
  return lidarCanvas;
}

/***/ }),

/***/ "./src/pages/tippy/globals.js":
/*!************************************!*\
  !*** ./src/pages/tippy/globals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globals": () => (/* binding */ globals)
/* harmony export */ });
var globals = {
  w: 800,
  h: 400,
  lInputCodes: ["KeyJ", "ArrowLeft"],
  rInputCodes: ["KeyK", "ArrowRight"],
  xOffs: [-0.3, -0.1, 0.1, 0.3],
  ts: 1.0 / 60,
  // sinLim: 0.3,
  sinLim: 0.4,
  // directionStep: 0.02,
  sinStep: 0.03,
  sinDecay: 0.01,
  velLim: 4,
  velDecay: 0.01,
  groundHalfWidth: 100,
  groundFlatCenterHalfWidth: 1,
  groundDetailInterval: 0.2,

  // nTerrainPts: 2 * (this.groundHalfWidth / this.groundDetailInterval) + 1,
  get nTerrainPts() {
    return 2 * (this.groundHalfWidth / this.groundDetailInterval) + 1;
  },

  wallH: 0.9,
  wallW: 0.5,
  // slopeMag: 0.1,
  slopeDecay: 0.9,
  slopeLim: 0.4,
  slopeDiffMag: 0.125,
  slopeDiffDecay: 1.1,
  slopeDiffLim: 0.2,

  get barMax() {
    var lim = this.targetType == "vel" ? this.velLim : this.sinLim;
    return 0.5 * 0.9 * this.w / lim;
  },

  barHeight: 25,

  // scoreDenomEps: 0.01,
  // scoreDenomEps: 0.1,
  get scoreDenomEps() {
    return this.sinLim;
  },

  crashSinLimit: 0.8,
  maxTorque: 1.0,
  nWorkers: 8,
  multiplier: 2,
  epLen: 800,
  twitchinesses: [0, 0.1, 0.05, 0.025, 0.01, 0.005, 0.0025, null],
  cmaSigma: 0.5,
  // targetType: "sin",
  targetType: "vel"
};

/***/ }),

/***/ "./src/pages/tippy/random_normal.js":
/*!******************************************!*\
  !*** ./src/pages/tippy/random_normal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rand_normal": () => (/* binding */ rand_normal)
/* harmony export */ });
function box_muller() {
  var u0 = Math.random();
  var u1 = Math.random(); // let part0 = (-2.0 * u0.ln()).sqrt()

  var part0 = Math.sqrt(-2.0 * Math.log(u0));
  var part1 = 2.0 * Math.PI * u1;
  var z0 = part0 * Math.cos(part1);
  var z1 = part0 * Math.sin(part1);
  return Float32Array.from([z0, z1]);
}

function rand_normal(n) {
  var res = new Float32Array(n);

  for (var i = 0; i < n; i++) {
    var pair = box_muller();
    res[i] = pair[0];

    if (i + 1 >= n) {
      break;
    }

    i++;
    res[i] = pair[1];
  }

  return res;
}

/***/ }),

/***/ "./src/pages/tippy/tippy.js":
/*!**********************************!*\
  !*** ./src/pages/tippy/tippy.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Population": () => (/* binding */ Population),
/* harmony export */   "updateDirection": () => (/* binding */ updateDirection),
/* harmony export */   "generateTerrainPts": () => (/* binding */ generateTerrainPts),
/* harmony export */   "xPosToTerrainIdx": () => (/* binding */ xPosToTerrainIdx),
/* harmony export */   "terrainIdxToXPos": () => (/* binding */ terrainIdxToXPos)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./src/pages/tippy/globals.js");
/* harmony import */ var _random_normal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random_normal.js */ "./src/pages/tippy/random_normal.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Tippy = /*#__PURE__*/function () {
  function Tippy(wheelPosInit, world, b2, population) {
    _classCallCheck(this, Tippy);

    this.population = population;
    console.assert(wheelPosInit.length == 2, "Tippy requires 2d wheelPos"); // this.wheelPosInit = wheelPosInit.slice()

    this.wheelR = 0.25;
    this.wheelPosInit = [wheelPosInit[0], wheelPosInit[1] - this.wheelR];
    var wheelFriction = 0.9,
        wheelDensity = 0.5,
        wheelRestitution = 0.1,
        chassisDensity = 2.0;
    this.chassisH = 1.0;
    this.chassisW = 0.3;
    this.axleOffsetY = 0.1; // create wheel

    {
      var bd = new b2.b2BodyDef();
      bd.set_type(b2.b2_dynamicBody);
      bd.set_position(_construct(b2.b2Vec2, _toConsumableArray(this.wheelPosInit)));
      this.wheelBody = world.CreateBody(bd);
      var shape = new b2.b2CircleShape();
      shape.set_m_radius(this.wheelR);
      var fd = new b2.b2FixtureDef();
      fd.set_shape(shape);
      fd.set_density(wheelDensity);
      fd.set_friction(wheelFriction);
      fd.set_restitution(wheelRestitution);
      var filter = fd.get_filter();
      filter.set_categoryBits(0x0002);
      filter.set_maskBits(0x0001);
      fd.set_filter(filter);
      var fixture = b2.castObject(this.wheelBody.CreateFixture(fd), b2.b2Fixture);
      fixture.partType = "wheel";
      fixture.spot = this;
      this.wheelMass = this.wheelBody.GetMass();
    } // create chassis

    {
      var edgeX = 0.5 * this.chassisW,
          edgeY = 0.5 * this.chassisH,
          cutoutX = 0.2 * this.chassisW,
          cutoutY = 0.35 * this.chassisH;
      this.chassisVertices = [[+edgeX, -edgeY], [-edgeX, -edgeY], [-edgeX, +cutoutY], [-cutoutX, +edgeY], [+cutoutX, +edgeY], [+edgeX, +cutoutY]];
      var b2ChassisVertices = [];

      var _iterator = _createForOfIteratorHelper(this.chassisVertices),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var vertex = _step.value;
          b2ChassisVertices.push(new b2.b2Vec2(vertex[0] + this.wheelPosInit[0], vertex[1] + this.wheelPosInit[1]));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.chassisPosInit = [this.wheelPosInit[0], this.wheelPosInit[1] - 0.5 * this.chassisH + this.axleOffsetY];

      var _bd = new b2.b2BodyDef();

      _bd.set_type(b2.b2_dynamicBody);

      _bd.set_position(_construct(b2.b2Vec2, _toConsumableArray(this.chassisPosInit))); // bd.set_linearDamping(0.1)
      // bd.set_angularDamping(0.1)


      this.chassisBody = world.CreateBody(_bd);

      var _shape = this.b2CreatePolygonShape(b2ChassisVertices, b2);

      var _fd = new b2.b2FixtureDef();

      var _filter = _fd.get_filter();

      _filter.set_categoryBits(0x0002);

      _filter.set_maskBits(0x0001);

      _fd.set_filter(_filter);

      _fd.set_density(chassisDensity);

      _fd.set_shape(_shape); // fd.set_friction(0.3)
      // fd.set_restitution(0.1)


      var _fixture = b2.castObject(this.chassisBody.CreateFixture(_fd), b2.b2Fixture);

      _fixture.partType = "chassis";
      _fixture.spot = this;
      this.chassisMass = this.chassisBody.GetMass();
    } // create joint

    {
      var jd = new b2.b2RevoluteJointDef();
      jd.Initialize(this.wheelBody, this.chassisBody, _construct(b2.b2Vec2, _toConsumableArray(this.wheelPosInit)));
      jd.set_enableMotor(true);
      jd.set_maxMotorTorque(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.maxTorque);
      this.axle = b2.castObject(world.CreateJoint(jd), b2.b2RevoluteJoint);
    }
    this.inputDim = this.getInputs(0).length; // // this.shapes = [this.inputDim, 16, 8, 4]
    // // this.shapes = [this.inputDim, 20, 10, 4]

    this.shapes = [this.inputDim, 12, 8, 1];
    this.n_dim = 0;
    this.weightCount = 0;
    this.biasCount = 0;

    for (var i = 0; i < this.shapes.length - 1; i++) {
      var n = this.shapes[i],
          m = this.shapes[i + 1];
      this.n_dim += (n + 1) * m;
      this.weightCount += n * m;
      this.biasCount += m;
    }

    this.reset(b2);
  }

  _createClass(Tippy, [{
    key: "b2CreatePolygonShape",
    value: function b2CreatePolygonShape(vertices, b2) {
      var shape = new b2.b2PolygonShape();

      var buffer = b2._malloc(vertices.length * 8);

      var offset = 0;

      for (var i = 0; i < vertices.length; i++) {
        b2.HEAPF32[buffer + offset >> 2] = vertices[i].get_x();
        b2.HEAPF32[buffer + (offset + 4) >> 2] = vertices[i].get_y();
        offset += 8;
      }

      var ptr_wrapped = b2.wrapPointer(buffer, b2.b2Vec2);
      shape.Set(ptr_wrapped, vertices.length);
      return shape;
    }
  }, {
    key: "setWts",
    value: function setWts(flatWts) {
      // this.flatWts = new Float32Array(this.n_dim).map(() => Math.random() - 0.5)
      this.flatWts = flatWts;
      var flatWtIdx = 0;
      this.weights = []; // this.weightCount = 0

      for (var i = 0; i < this.shapes.length - 1; i++) {
        var n = this.shapes[i],
            m = this.shapes[i + 1],
            newWeight = Float32Array.from(this.flatWts.slice(flatWtIdx, flatWtIdx + n * m)); // this.weightCount += newWeight.length

        this.weights.push(new Matrix(newWeight, n, m));
        flatWtIdx += n * m;
      }

      this.biases = []; // this.biasCount = 0

      for (var _i = 0; _i < this.shapes.length - 1; _i++) {
        var _n = 1,
            _m = this.shapes[_i + 1],
            newBias = Float32Array.from(this.flatWts.slice(flatWtIdx, flatWtIdx + _n * _m)); // this.biasCount += newBias.length

        this.biases.push(new Matrix(newBias, _n, _m));
        flatWtIdx += _n * _m;
      }
    }
  }, {
    key: "reset",
    value: function reset(b2) {
      this.chassisBody.SetTransform(_construct(b2.b2Vec2, _toConsumableArray(this.chassisPosInit)), 0);
      this.chassisBody.SetLinearVelocity(new b2.b2Vec2(0, 0));
      this.chassisBody.SetAngularVelocity(0);
      this.chassisBody.SetAwake(1);
      this.wheelBody.SetTransform(_construct(b2.b2Vec2, _toConsumableArray(this.wheelPosInit)), 0);
      this.wheelBody.SetLinearVelocity(new b2.b2Vec2(0, 0));
      this.wheelBody.SetAngularVelocity(0);
      this.wheelBody.SetAwake(1);
      this.targetSqErrSum = 0;
      this.targetPrev = null;
      this.prevOutput = 0;
      this.outputDiffSqSum = 0;
      this.prevWheelVelX = 0;
      this.wheelAccX = 0;
      this.prevChassisVelX = 0;
      this.chassisAccX = 0;
      this.driftXSqSum = 0;
      this.crashStepCount = 0;
    }
  }, {
    key: "updateTargetScore",
    value: function updateTargetScore(target, current) {
      var diff = target - current,
          diffSq = diff * diff,
          denom = Math.abs(target) + _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.scoreDenomEps; // this.targetSqErrSum += diffSq / denom

      this.targetSqErrSum += _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.targetType === "vel" ? diffSq : 1e2 * diffSq;
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {
      this.axle.SetMotorSpeed(speed);
    }
  }, {
    key: "getInputs",
    value: function getInputs(target) {
      this.reverse = target != 0 ? Math.sign(target) : 1;
      var inputs;

      if (this.inputDim != null) {
        inputs = new Float32Array(this.inputDim);
      } else {
        inputs = [];
      }

      var i = 0; // elevation

      var wheelPos = this.wheelBody.GetPosition(),
          wheelX = wheelPos.get_x(),
          wheelY = wheelPos.get_y(); //   interpY = interpTerrainY(wheelX, this.population.terrainPts)
      // this.yClearance = interpY - wheelY - this.wheelR
      // inputs[i] = this.yClearance
      // i++

      this.lidarYs = [];

      var _iterator2 = _createForOfIteratorHelper(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.xOffs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var xOff = _step2.value;
          var lidarY = interpTerrainY(wheelX + this.reverse * xOff, this.population.terrainPts) - wheelY - this.wheelR;
          this.lidarYs.push(lidarY);
          inputs[i] = lidarY;
          i++;
        } // chassisSin

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var chassisSin = Math.sin(this.chassisBody.GetAngle());
      inputs[i] = this.reverse * chassisSin;
      i++;

      if (Math.abs(chassisSin) > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.crashSinLimit) {
        this.crashStepCount++;
      } // chassisVelX, chassisVelY


      var chassisVel = this.chassisBody.GetLinearVelocity(),
          chassisVelX = chassisVel.get_x();
      this.chassisAccX = chassisVelX - this.prevChassisVelX;
      this.prevChassisVelX = chassisVelX; // inputs[i] = this.reverse * chassisVel.get_x()
      // i++
      // inputs[i] = chassisVel.get_y()
      // i++
      // chassisAngVel

      if (target == 0) {
        this.driftXSqSum += this.chassisAccX * this.chassisAccX;
      }

      var chassisAngVel = this.chassisBody.GetAngularVelocity();
      inputs[i] = this.reverse * chassisAngVel;
      i++; // wheelVelX, wheelVelY

      var wheelVel = this.wheelBody.GetLinearVelocity(),
          wheelVelX = wheelVel.get_x();
      this.wheelAccX = wheelVelX - this.prevWheelVelX;
      this.prevWheelVelX = wheelVelX;
      inputs[i] = this.reverse * wheelVelX;
      i++;
      inputs[i] = wheelVel.get_y();
      i++; // wheelAngVel

      var wheelAngVel = this.wheelBody.GetAngularVelocity();
      inputs[i] = this.reverse * wheelAngVel;
      i++;
      var axleRxn = this.axle.GetReactionForce(60);
      inputs[i] = 1e-2 * this.reverse * axleRxn.get_x();
      i++;
      inputs[i] = 1e-2 * axleRxn.get_y();
      i++; // target

      inputs[i] = this.reverse * target;
      i++;

      if (this.targetPrev !== null) {
        if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.targetType === "sin") {
          this.updateTargetScore(this.targetPrev, chassisSin);
        } else {
          this.updateTargetScore(this.targetPrev, wheelVelX);
        }
      }

      this.targetPrev = target;
      return inputs;
    }
  }, {
    key: "update",
    value: function update(target) {
      var inputsArray = this.getInputs(target);
      var inputsMatrix = new Matrix(inputsArray, 1, inputsArray.length);
      var outputRaw = inputsMatrix // const speeds = inputs
      .mul(this.weights[0]).add(this.biases[0]) // .relu()
      // .leakyRelu()
      .leakyElu().mul(this.weights[1]).add(this.biases[1]) // .relu()
      // .leakyRelu()
      .leakyElu().mul(this.weights[2]).add(this.biases[2]).data[0]; // const reverse = target != 0 ? Math.sign(target) : 1,

      var output = this.reverse * outputRaw;
      this.setSpeed(output);
      var outputDiff = output - this.prevOutput;
      this.outputDiffSqSum += outputDiff * outputDiff;
      this.prevOutput = output;
    }
  }, {
    key: "drawPositionData",
    get: function get() {
      // return {
      //   wheelPosCurrent: this.wheelBody.GetPosition(),
      //   wheelAngleCurrent: this.wheelBody.GetAngle(),
      //   chassisPosCurrent: this.chassisBody.GetPosition(),
      //   chassisAngleCurrent: this.chassisBody.GetAngle(),
      // }
      var wheelPos = this.wheelBody.GetPosition(),
          chassisPos = this.chassisBody.GetPosition();
      return {
        wheelPosCurrent: [wheelPos.get_x(), wheelPos.get_y()],
        wheelAngleCurrent: this.wheelBody.GetAngle(),
        chassisPosCurrent: [chassisPos.get_x(), chassisPos.get_y()],
        chassisAngleCurrent: this.chassisBody.GetAngle()
      };
    }
  }, {
    key: "corrData",
    get: function get() {
      return [Math.sin(this.chassisBody.GetAngle()), this.wheelAccX, this.chassisAccX];
    } // sleep() {
    //   for (let body of [
    //     this.chassisBody,
    //     this.upperForelegBody,
    //     this.lowerForelegBody,
    //     this.upperHindlegBody,
    //     this.lowerHindlegBody,
    //   ]) {
    //     body.SetAwake(0)
    //     // body.SetEnabled(0)
    //   }
    // }

  }]);

  return Tippy;
}();

var Matrix = /*#__PURE__*/function () {
  function Matrix(data, m, n) {
    _classCallCheck(this, Matrix);

    this.data = data;
    this.m = m;
    this.n = n;
  }

  _createClass(Matrix, [{
    key: "mul",
    value: function mul(other) {
      var a = this.data,
          b = other.data,
          m = this.m,
          n = this.n,
          p = other.n,
          c = new Float32Array(new ArrayBuffer(4 * m * p));

      for (var j = 0; j < p; j++) {
        for (var i = 0; i < m; i++) {
          var sum = 0;

          for (var k = 0; k < n; k++) {
            sum += a[i * n + k] * b[k * p + j];
          }

          c[i * p + j] = sum;
        }
      }

      return new Matrix(c, m, p);
    }
  }, {
    key: "add",
    value: function add(other) {
      var a = this.data,
          b = other.data,
          l = a.length,
          c = new Float32Array(new ArrayBuffer(4 * l));

      for (var i = 0; i < l; i++) {
        c[i] = a[i] + b[i];
      }

      return new Matrix(c, this.m, this.n);
    }
  }, {
    key: "relu",
    value: function relu() {
      var n = this.data.length,
          result = this.data.slice();

      for (var i = 0; i < n; i++) {
        result[i] = Math.max(0, result[i]);
      }

      return new Matrix(result, this.m, this.n);
    }
  }, {
    key: "leakyRelu",
    value: function leakyRelu() {
      var n = this.data.length,
          result = this.data.slice();

      for (var i = 0; i < n; i++) {
        result[i] = Math.max(0.1 * result[i], result[i]);
      }

      return new Matrix(result, this.m, this.n);
    }
  }, {
    key: "elu",
    value: function elu() {
      var n = this.data.length,
          result = this.data.slice();

      for (var i = 0; i < n; i++) {
        if (result[i] < 0) {
          result[i] = Math.expm1(result[i]);
        }
      }

      return new Matrix(result, this.m, this.n);
    }
  }, {
    key: "leakyElu",
    value: function leakyElu() {
      var n = this.data.length,
          result = this.data.slice();

      for (var i = 0; i < n; i++) {
        if (result[i] < 0) {
          result[i] = Math.expm1(result[i]) + 0.1 * result[i];
        }
      }

      return new Matrix(result, this.m, this.n);
    }
  }]);

  return Matrix;
}();

function vectorNorms(vectors) {
  var result = new Float32Array(vectors.length).fill(0);

  for (var i = 0; i < vectors.length; i++) {
    var vector = vectors[i].data;

    var _iterator3 = _createForOfIteratorHelper(vector),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var x = _step3.value;
        result[i] += x * x;
      } // result[i] = Math.sqrt(result[i])

    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    result[i] /= vector.length;
  }

  return result;
}

function rowNormThingy(mat) {
  // m: row count, n: column count
  var rowCount = mat.m,
      colCount = mat.n;
  var sumAll = 0;
  var rowSums = new Float32Array(rowCount).fill(0),
      colSums = new Float32Array(colCount).fill(0); // row idx

  for (var rowIdx = 0; rowIdx < rowCount; rowIdx++) {
    // col idx
    for (var colIdx = 0; colIdx < colCount; colIdx++) {
      var val = mat.data[rowIdx * colCount + colIdx],
          valSq = val * val; // rowSums[rowIdx] += Math.abs(val)

      rowSums[rowIdx] += valSq; // colSums[colIdx] += Math.abs(val)

      colSums[colIdx] += valSq;
      sumAll += valSq;
    }
  }

  sumAll /= rowCount * colCount;
  var sumRows = 0;

  for (var i = 0; i < rowCount; i++) {
    var _val = rowSums[i] / colCount;

    sumRows += _val * _val;
  }

  sumRows /= rowCount;
  var sumCols = 0;

  for (var _i2 = 0; _i2 < colCount; _i2++) {
    var _val2 = colSums[_i2] / rowCount;

    sumCols += _val2 * _val2;
  }

  sumCols /= colCount; // return sumAll + 0.1 * sumRows + 1.0 * sumCols

  return sumAll;
}

var Population = /*#__PURE__*/function () {
  function Population(wheelPosInit, nTippys, terrainPts, b2) {
    _classCallCheck(this, Population);

    this.wheelPosInit = wheelPosInit.slice();
    {
      var gravity = new b2.b2Vec2(0, 9.81);
      this.world = new b2.b2World(gravity);
    }
    this.b2 = b2;
    this.terrainPts = terrainPts; // add ground

    {
      var groundBody = this.world.CreateBody(new b2.b2BodyDef());
      var terrainPtsFiltered = [];
      var yDiffPrev;

      for (var i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts; i++) {
        var yDiffCurr = terrainPts[i + 1] - terrainPts[i],
            sameSlope = yDiffCurr == yDiffPrev;
        yDiffPrev = yDiffCurr;

        if (sameSlope && i != _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) {
          continue;
        }

        terrainPtsFiltered.push([terrainIdxToXPos(i), terrainPts[i]]);
      } // console.log(terrainPtsFiltered.length, globals.nTerrainPts)
      // reversed loop for CCW winding order (Box2D)


      for (var _i3 = terrainPtsFiltered.length - 1; _i3 >= 1; _i3--) {
        var edgeShape = new b2.b2EdgeShape();
        edgeShape.SetTwoSided(new b2.b2Vec2(terrainPtsFiltered[_i3][0], terrainPtsFiltered[_i3][1]), new b2.b2Vec2(terrainPtsFiltered[_i3 - 1][0], terrainPtsFiltered[_i3 - 1][1]));
        var groundFD = new b2.b2FixtureDef();
        groundFD.set_shape(edgeShape);
        groundFD.set_friction(0.9);
        groundFD.set_restitution(0.1);
        var groundFixture = b2.castObject(groundBody.CreateFixture(groundFD), b2.b2Fixture);
      } // add walls


      for (var _i4 = 0, _arr = [0, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1]; _i4 < _arr.length; _i4++) {
        var idx = _arr[_i4];
        var _ref = [terrainIdxToXPos(idx), terrainPts[idx]],
            x = _ref[0],
            y = _ref[1];

        var _edgeShape = new b2.b2EdgeShape();

        _edgeShape.SetTwoSided(new b2.b2Vec2(x, y), new b2.b2Vec2(x, y - _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.wallH));

        var _groundFD = new b2.b2FixtureDef();

        _groundFD.set_shape(_edgeShape);

        _groundFD.set_friction(0.9);

        _groundFD.set_restitution(0.1);

        var _groundFixture = b2.castObject(groundBody.CreateFixture(_groundFD), b2.b2Fixture);
      }
    }
    this.tippys = [];
    this.addTippys(nTippys);
    this.n_dim = this.tippys[0].n_dim;
  }

  _createClass(Population, [{
    key: "reset",
    value: function reset() {
      var _iterator4 = _createForOfIteratorHelper(this.tippys),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var tippy = _step4.value;
          tippy.reset(this.b2);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "addTippys",
    value: function addTippys(nTippys) {
      for (var i = 0; i < nTippys; i++) {
        this.tippys.push(new Tippy(this.wheelPosInit, this.world, this.b2, this));
      }
    }
  }, {
    key: "setWts",
    value: function setWts(flatWts) {
      var flatWtsIdx = 0;

      var _iterator5 = _createForOfIteratorHelper(this.tippys),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var tippy = _step5.value;
          tippy.setWts(flatWts.slice(flatWtsIdx, flatWtsIdx + this.n_dim));
          flatWtsIdx += this.n_dim;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "train",
    value: function train(_ref2) {
      var targets = _ref2.targets,
          solutions = _ref2.solutions;
      // assign solution and target to each tippy
      var nSolutions = solutions.length / this.n_dim;

      if (this.tippys.length < nSolutions * targets.length) {
        this.addTippys(nSolutions * targets.length - this.tippys.length);
      }

      var flatWtsIdx = 0;

      for (var i = 0; i < nSolutions; i++) {
        for (var j = 0; j < targets.length; j++) {
          var tippy = this.tippys[i * targets.length + j];
          tippy.setWts(solutions.slice(flatWtsIdx, flatWtsIdx + this.n_dim));
          tippy.targetIdx = j;
        }

        flatWtsIdx += this.n_dim;
      } // simulate using one target per solution


      this.reset();

      for (var step = 0; step < targets[0].length; step++) {
        var _iterator6 = _createForOfIteratorHelper(this.tippys),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _tippy = _step6.value;

            _tippy.update(targets[_tippy.targetIdx][step]);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        this.world.Step(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.ts, 8, 3);
      } // score solutions after simulation


      var solutionsScores = [];

      for (var _i5 = 0; _i5 < nSolutions; _i5++) {
        var tippy0 = this.tippys[_i5 * targets.length],
            solution = tippy0.flatWts;
        var wtsNorm = 0;

        var _iterator7 = _createForOfIteratorHelper(tippy0.weights),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var wtLayer = _step7.value;

            var _iterator9 = _createForOfIteratorHelper(wtLayer.data),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var wt = _step9.value;
                wtsNorm += wt * wt;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        wtsNorm /= tippy0.weightCount;
        var biasNorm = 0;

        var _iterator8 = _createForOfIteratorHelper(tippy0.biases),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var biasLayer = _step8.value;

            var _iterator10 = _createForOfIteratorHelper(biasLayer.data),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var bias = _step10.value;
                biasNorm += bias * bias;
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        biasNorm /= tippy0.biasCount;
        var taskScores = [];

        for (var _j = 0; _j < targets.length; _j++) {
          var taskTippy = this.tippys[_i5 * targets.length + _j],
              mse = taskTippy.targetSqErrSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.epLen,
              crashedRatio = taskTippy.crashStepCount / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.epLen,
              driftX = taskTippy.driftXSqSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.epLen;
          taskScores.push({
            mse: mse,
            crashedRatio: crashedRatio,
            driftX: driftX
          });
        } // solutionsScores.push({ solution, score })


        solutionsScores.push({
          solution: solution,
          wtsNorm: wtsNorm,
          biasNorm: biasNorm,
          taskScores: taskScores
        });
      }

      return solutionsScores;
    }
  }, {
    key: "update",
    value: function update(targets) {
      for (var i = 0; i < this.tippys.length; i++) {
        var tippy = this.tippys[i];
        tippy.update(targets[i]);
      }

      this.world.Step(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.ts, 8, 3);
    }
  }, {
    key: "draw",
    value: function draw(scale, center) {
      var _iterator11 = _createForOfIteratorHelper(this.tippys),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var tippy = _step11.value;
          tippy.draw(scale, center);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }]);

  return Population;
}();
function updateDirection(ld, rd, _targetSin, _targetVel) {
  // no change if both keys down
  var targetSin = _targetSin,
      targetVel = _targetVel;

  if (ld && rd) {
    return [targetSin, targetVel];
  } // decay sin toward zero


  if (targetSin != 0) {
    if (Math.abs(targetSin) < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinDecay) {
      targetSin = 0;
    } else {
      targetSin -= Math.sign(targetSin) * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinDecay;
    }
  } // change if only one key
  // and limit output


  if (ld) {
    targetSin -= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinStep;

    if (targetSin < -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinLim) {
      targetSin = -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinLim;
    }
  } else if (rd) {
    targetSin += _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinStep;

    if (targetSin > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinLim) {
      targetSin = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinLim;
    }
  } // decay vel toward zero


  if (targetVel != 0) {
    if (Math.abs(targetVel) < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velDecay) {
      targetVel = 0;
    } else {
      targetVel -= Math.sign(targetVel) * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velDecay;
    }
  }

  targetVel += 0.102 * targetSin;

  if (targetVel > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velLim) {
    targetVel = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velLim;
  } else if (targetVel < -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velLim) {
    targetVel = -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velLim;
  } // // update test trigonometry
  // if (targetSin != targetDirectionBefore) {
  //   targetAngle = Math.asin(targetSin)
  //   targetCos = Math.cos(targetAngle)
  // }


  return [targetSin, targetVel];
}
function generateTerrainPts() {
  function terrainLRObject() {
    return {
      slopeDiff: 0,
      slope: 0,
      y: 0,
      x: _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval,
      xIdx: 1,
      // randVals: rand_normal(globals.groundHalfWidth / globals.groundDetailInterval - 1),
      // idx: 0,
      ys: [],
      updateSlope: function updateSlope() {
        if (this.x <= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundFlatCenterHalfWidth) {
          return;
        } // this.slopeDiff += globals.slopeDiffMag * this.randVals[this.idx]


        this.slopeDiff += _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffMag * (0,_random_normal_js__WEBPACK_IMPORTED_MODULE_1__.rand_normal)(1)[0]; // this.idx++

        this.slopeDiff *= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffDecay;

        if (Math.abs(this.slopeDiff) > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffLim) {
          this.slopeDiff = Math.min(Math.max(this.slopeDiff, -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffLim), _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffLim); // console.log("slope diff bump")
        }

        var prevSlope = this.slope;
        this.slope += this.slopeDiff;
        this.slope *= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDecay;

        if (Math.abs(this.slope) > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeLim) {
          this.slope = Math.min(Math.max(this.slope, -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeLim), _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeLim); // console.log("slope bump")
        }

        this.slopeDiff = this.slope - prevSlope;
      },
      update: function update() {
        this.updateSlope();
        this.y += this.slope * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval;
        this.ys.push(this.y); // prevent floating point drift

        this.xIdx++;
        this.x = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval * this.xIdx;
      }
    };
  }

  var leftObj = terrainLRObject(),
      rightObj = terrainLRObject();

  for (var _ = 0; _ < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval; _++) {
    leftObj.update();
    rightObj.update();
  }

  leftObj.ys.reverse();
  return leftObj.ys.concat([0]).concat(rightObj.ys);
}
function xPosToTerrainIdx(x) {
  x = Math.min(Math.max(x, -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth), _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth);
  return Math.round(x / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval) + (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) / 2;
}
function terrainIdxToXPos(idx) {
  return (idx - (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) / 2) * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval;
}

function interpTerrainY(x, terrainPts) {
  x = Math.min(Math.max(x, -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth), _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth);
  var xScaled = x / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval,
      idxOffset = (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) / 2,
      clipped = [Math.floor(xScaled), Math.ceil(xScaled)],
      xs = clipped.map(function (v) {
    return _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval * v;
  }),
      ys = clipped.map(function (v) {
    return terrainPts[v + idxOffset];
  });

  if (xs[1] == xs[0]) {
    return ys[0];
  }

  var slope = (ys[1] - ys[0]) / (xs[1] - xs[0]),
      xDiff = x - xs[0],
      yDiff = slope * xDiff;
  return ys[0] + yDiff;
}

/***/ }),

/***/ "./node_modules/box2d-wasm/dist/es/Box2D.js":
/*!**************************************************!*\
  !*** ./node_modules/box2d-wasm/dist/es/Box2D.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __dirname = "/";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var Box2D = (function() {
  var _scriptDir = "file:///Users/tom/Desktop/code_tests/webpack-tests/webpack-gh-pages-test/node_modules/box2d-wasm/dist/es/Box2D.js";
  
  return (
function(Box2D) {
  Box2D = Box2D || {};


var a;a||(a=typeof Box2D !== 'undefined' ? Box2D : {});var aa,ba;a.ready=new Promise(function(b,c){aa=b;ba=c});var ca={},da;for(da in a)a.hasOwnProperty(da)&&(ca[da]=a[da]);var ea="object"===typeof window,fa="function"===typeof importScripts,ha="",ia,ja,ka,la,ma;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)ha=fa?__webpack_require__(/*! path */ "?5f8c").dirname(ha)+"/":__dirname+"/",ia=function(b,c){la||(la=__webpack_require__(/*! fs */ "?4121"));ma||(ma=__webpack_require__(/*! path */ "?5f8c"));b=ma.normalize(b);return la.readFileSync(b,c?null:"utf8")},ka=function(b){b=ia(b,!0);b.buffer||(b=new Uint8Array(b));b.buffer||na("Assertion failed: undefined");return b},ja=function(b,c,d){la||(la=__webpack_require__(/*! fs */ "?4121"));ma||(ma=__webpack_require__(/*! path */ "?5f8c"));b=ma.normalize(b);la.readFile(b,function(f,
p){f?d(f):c(p.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(b){throw b;}),process.on("unhandledRejection",na),a.inspect=function(){return"[Emscripten Module object]"};else if(ea||fa)fa?ha=self.location.href:"undefined"!==typeof document&&document.currentScript&&(ha=document.currentScript.src),_scriptDir&&(ha=_scriptDir),ha=0!==ha.indexOf("blob:")?ha.substr(0,ha.lastIndexOf("/")+1):"",ia=function(b){var c=new XMLHttpRequest;
c.open("GET",b,!1);c.send(null);return c.responseText},fa&&(ka=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),ja=function(b,c,d){var f=new XMLHttpRequest;f.open("GET",b,!0);f.responseType="arraybuffer";f.onload=function(){200==f.status||0==f.status&&f.response?c(f.response):d()};f.onerror=d;f.send(null)};var oa=a.print||console.log.bind(console),pa=a.printErr||console.warn.bind(console);
for(da in ca)ca.hasOwnProperty(da)&&(a[da]=ca[da]);ca=null;var qa;a.wasmBinary&&(qa=a.wasmBinary);var noExitRuntime=a.noExitRuntime||!0;"object"!==typeof WebAssembly&&na("no native wasm support detected");var ra,sa=!1,ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ua(b,c,d){var f=c+d;for(d=c;b[d]&&!(d>=f);)++d;if(16<d-c&&b.subarray&&ta)return ta.decode(b.subarray(c,d));for(f="";c<d;){var p=b[c++];if(p&128){var W=b[c++]&63;if(192==(p&224))f+=String.fromCharCode((p&31)<<6|W);else{var Ka=b[c++]&63;p=224==(p&240)?(p&15)<<12|W<<6|Ka:(p&7)<<18|W<<12|Ka<<6|b[c++]&63;65536>p?f+=String.fromCharCode(p):(p-=65536,f+=String.fromCharCode(55296|p>>10,56320|p&1023))}}else f+=String.fromCharCode(p)}return f}function va(b){return b?ua(wa,b,void 0):""}
var xa,wa,ya,za,Aa;function Ba(){var b=ra.buffer;xa=b;a.HEAP8=new Int8Array(b);a.HEAP16=new Int16Array(b);a.HEAP32=ya=new Int32Array(b);a.HEAPU8=wa=new Uint8Array(b);a.HEAPU16=new Uint16Array(b);a.HEAPU32=new Uint32Array(b);a.HEAPF32=za=new Float32Array(b);a.HEAPF64=Aa=new Float64Array(b)}var Ca,Da=[],Ea=[],Fa=[],Ga=!1,Ha=0,Ia=null,Ja=null;a.preloadedImages={};a.preloadedAudios={};
function na(b){if(a.onAbort)a.onAbort(b);b+="";pa(b);sa=!0;b=new WebAssembly.RuntimeError("abort("+b+"). Build with -s ASSERTIONS=1 for more info.");ba(b);throw b;}function La(){return Ma.startsWith("data:application/octet-stream;base64,")}var Ma;if(a.locateFile){if(Ma="Box2D.wasm",!La()){var Na=Ma;Ma=a.locateFile?a.locateFile(Na,ha):ha+Na}}else Ma=(new URL(/* asset import */ __webpack_require__(/*! Box2D.wasm */ "./node_modules/box2d-wasm/dist/es/Box2D.wasm"), __webpack_require__.b)).toString();
function Oa(){var b=Ma;try{if(b==Ma&&qa)return new Uint8Array(qa);if(ka)return ka(b);throw"both async and sync fetching of the wasm failed";}catch(c){na(c)}}
function Pa(){if(!qa&&(ea||fa)){if("function"===typeof fetch&&!Ma.startsWith("file://"))return fetch(Ma,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+Ma+"'";return b.arrayBuffer()}).catch(function(){return Oa()});if(ja)return new Promise(function(b,c){ja(Ma,function(d){b(new Uint8Array(d))},c)})}return Promise.resolve().then(function(){return Oa()})}
var Qa={10210:function(b,c){b=a.getCache(a.JSContactListener)[b];if(!b.hasOwnProperty("BeginContact"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::BeginContact.";b.BeginContact(c)},10448:function(b,c){b=a.getCache(a.JSContactListener)[b];if(!b.hasOwnProperty("EndContact"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::EndContact.";b.EndContact(c)},10680:function(b,c,d){b=a.getCache(a.JSContactListener)[b];if(!b.hasOwnProperty("PreSolve"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::PreSolve.";
b.PreSolve(c,d)},10909:function(b,c,d){b=a.getCache(a.JSContactListener)[b];if(!b.hasOwnProperty("PostSolve"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::PostSolve.";b.PostSolve(c,d)},11141:function(b){b=a.getCache(a.JSContactListenerWithoutSolveCallbacks)[b];if(!b.hasOwnProperty("JSContactListener"))throw"a JSImplementation must implement all functions, you forgot JSContactListenerWithoutSolveCallbacks::JSContactListener.";b.JSContactListener()},11434:function(b,
c,d,f,p){b=a.getCache(a.JSRayCastCallback)[b];if(!b.hasOwnProperty("ReportFixture"))throw"a JSImplementation must implement all functions, you forgot JSRayCastCallback::ReportFixture.";return b.ReportFixture(c,d,f,p)},11691:function(b,c){b=a.getCache(a.JSQueryCallback)[b];if(!b.hasOwnProperty("ReportFixture"))throw"a JSImplementation must implement all functions, you forgot JSQueryCallback::ReportFixture.";return b.ReportFixture(c)},11935:function(b,c,d){b=a.getCache(a.JSContactFilter)[b];if(!b.hasOwnProperty("ShouldCollide"))throw"a JSImplementation must implement all functions, you forgot JSContactFilter::ShouldCollide.";
return b.ShouldCollide(c,d)},12182:function(b,c){b=a.getCache(a.JSDestructionListener)[b];if(!b.hasOwnProperty("SayGoodbyeJoint"))throw"a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeJoint.";b.SayGoodbyeJoint(c)},12437:function(b,c){b=a.getCache(a.JSDestructionListener)[b];if(!b.hasOwnProperty("SayGoodbyeFixture"))throw"a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeFixture.";b.SayGoodbyeFixture(c)},12698:function(b,
c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawPolygon"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawPolygon.";b.DrawPolygon(c,d,f)},12917:function(b,c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawSolidPolygon"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidPolygon.";b.DrawSolidPolygon(c,d,f)},13151:function(b,c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawCircle"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawCircle.";
b.DrawCircle(c,d,f)},13367:function(b,c,d,f,p){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawSolidCircle"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidCircle.";b.DrawSolidCircle(c,d,f,p)},13601:function(b,c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawSegment"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawSegment.";b.DrawSegment(c,d,f)},13820:function(b,c){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawTransform"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawTransform.";
b.DrawTransform(c)},14039:function(b,c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawPoint"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawPoint.";b.DrawPoint(c,d,f)}};function Ra(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var d=c.yA;"number"===typeof d?void 0===c.Mv?Ca.get(d)():Ca.get(d)(c.Mv):d(void 0===c.Mv?null:c.Mv)}}}var Sa=[null,[],[]],Ta={},Ua=[];
function Va(b,c,d){Ua.length=0;var f;for(d>>=2;f=wa[c++];)(f=105>f)&&d&1&&d++,Ua.push(f?Aa[d++>>1]:ya[d]),++d;return Qa[b].apply(null,Ua)}
var Wa={f:function(b,c,d,f){na("Assertion failed: "+va(b)+", at: "+[c?va(c):"unknown filename",d,f?va(f):"unknown function"])},d:function(){return 0},h:function(){return 0},j:function(){},n:function(){na()},b:function(b,c){throw"Array index "+b+" out of bounds: [0,"+c+")";},k:function(b,c,d){return Va(b,c,d)},a:Va,m:function(b,c,d){wa.copyWithin(b,c,c+d)},c:function(b){var c=wa.length;b>>>=0;if(2147483648<b)return!1;for(var d=1;4>=d;d*=2){var f=c*(1+.2/d);f=Math.min(f,b+100663296);f=Math.max(b,f);
0<f%65536&&(f+=65536-f%65536);a:{try{ra.grow(Math.min(2147483648,f)-xa.byteLength+65535>>>16);Ba();var p=1;break a}catch(W){}p=void 0}if(p)return!0}return!1},e:function(){return 0},g:function(b,c,d,f){b=Ta.zA(b);c=Ta.xA(b,c,d);ya[f>>2]=c;return 0},l:function(){},i:function(b,c,d,f){for(var p=0,W=0;W<d;W++){for(var Ka=ya[c+8*W>>2],gb=ya[c+(8*W+4)>>2],sb=0;sb<gb;sb++){var tb=wa[Ka+sb],ub=Sa[b];0===tb||10===tb?((1===b?oa:pa)(ua(ub,0)),ub.length=0):ub.push(tb)}p+=gb}ya[f>>2]=p;return 0}};
(function(){function b(p){a.asm=p.exports;ra=a.asm.o;Ba();Ca=a.asm.Xu;Ea.unshift(a.asm.p);Ha--;a.monitorRunDependencies&&a.monitorRunDependencies(Ha);0==Ha&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja&&(p=Ja,Ja=null,p()))}function c(p){b(p.instance)}function d(p){return Pa().then(function(W){return WebAssembly.instantiate(W,f)}).then(p,function(W){pa("failed to asynchronously prepare wasm: "+W);na(W)})}var f={a:Wa};Ha++;a.monitorRunDependencies&&a.monitorRunDependencies(Ha);if(a.instantiateWasm)try{return a.instantiateWasm(f,
b)}catch(p){return pa("Module.instantiateWasm callback failed with error: "+p),!1}(function(){return qa||"function"!==typeof WebAssembly.instantiateStreaming||La()||Ma.startsWith("file://")||"function"!==typeof fetch?d(c):fetch(Ma,{credentials:"same-origin"}).then(function(p){return WebAssembly.instantiateStreaming(p,f).then(c,function(W){pa("wasm streaming compile failed: "+W);pa("falling back to ArrayBuffer instantiation");return d(c)})})})().catch(ba);return{}})();
a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.p).apply(null,arguments)};
var Xa=a._emscripten_bind_b2ContactListener___destroy___0=function(){return(Xa=a._emscripten_bind_b2ContactListener___destroy___0=a.asm.q).apply(null,arguments)},Ya=a._emscripten_bind_b2Shape_GetType_0=function(){return(Ya=a._emscripten_bind_b2Shape_GetType_0=a.asm.r).apply(null,arguments)},Za=a._emscripten_bind_b2Shape_GetChildCount_0=function(){return(Za=a._emscripten_bind_b2Shape_GetChildCount_0=a.asm.s).apply(null,arguments)},$a=a._emscripten_bind_b2Shape_TestPoint_2=function(){return($a=a._emscripten_bind_b2Shape_TestPoint_2=
a.asm.t).apply(null,arguments)},ab=a._emscripten_bind_b2Shape_RayCast_4=function(){return(ab=a._emscripten_bind_b2Shape_RayCast_4=a.asm.u).apply(null,arguments)},bb=a._emscripten_bind_b2Shape_ComputeAABB_3=function(){return(bb=a._emscripten_bind_b2Shape_ComputeAABB_3=a.asm.v).apply(null,arguments)},cb=a._emscripten_bind_b2Shape_ComputeMass_2=function(){return(cb=a._emscripten_bind_b2Shape_ComputeMass_2=a.asm.w).apply(null,arguments)},db=a._emscripten_bind_b2Shape_get_m_type_0=function(){return(db=
a._emscripten_bind_b2Shape_get_m_type_0=a.asm.x).apply(null,arguments)},eb=a._emscripten_bind_b2Shape_set_m_type_1=function(){return(eb=a._emscripten_bind_b2Shape_set_m_type_1=a.asm.y).apply(null,arguments)},fb=a._emscripten_bind_b2Shape_get_m_radius_0=function(){return(fb=a._emscripten_bind_b2Shape_get_m_radius_0=a.asm.z).apply(null,arguments)},hb=a._emscripten_bind_b2Shape_set_m_radius_1=function(){return(hb=a._emscripten_bind_b2Shape_set_m_radius_1=a.asm.A).apply(null,arguments)},ib=a._emscripten_bind_b2Shape___destroy___0=
function(){return(ib=a._emscripten_bind_b2Shape___destroy___0=a.asm.B).apply(null,arguments)},jb=a._emscripten_bind_b2RayCastCallback___destroy___0=function(){return(jb=a._emscripten_bind_b2RayCastCallback___destroy___0=a.asm.C).apply(null,arguments)},kb=a._emscripten_bind_b2QueryCallback___destroy___0=function(){return(kb=a._emscripten_bind_b2QueryCallback___destroy___0=a.asm.D).apply(null,arguments)},lb=a._emscripten_bind_b2JointDef_b2JointDef_0=function(){return(lb=a._emscripten_bind_b2JointDef_b2JointDef_0=
a.asm.E).apply(null,arguments)},mb=a._emscripten_bind_b2JointDef_get_type_0=function(){return(mb=a._emscripten_bind_b2JointDef_get_type_0=a.asm.F).apply(null,arguments)},nb=a._emscripten_bind_b2JointDef_set_type_1=function(){return(nb=a._emscripten_bind_b2JointDef_set_type_1=a.asm.G).apply(null,arguments)},ob=a._emscripten_bind_b2JointDef_get_userData_0=function(){return(ob=a._emscripten_bind_b2JointDef_get_userData_0=a.asm.H).apply(null,arguments)},pb=a._emscripten_bind_b2JointDef_set_userData_1=
function(){return(pb=a._emscripten_bind_b2JointDef_set_userData_1=a.asm.I).apply(null,arguments)},qb=a._emscripten_bind_b2JointDef_get_bodyA_0=function(){return(qb=a._emscripten_bind_b2JointDef_get_bodyA_0=a.asm.J).apply(null,arguments)},rb=a._emscripten_bind_b2JointDef_set_bodyA_1=function(){return(rb=a._emscripten_bind_b2JointDef_set_bodyA_1=a.asm.K).apply(null,arguments)},vb=a._emscripten_bind_b2JointDef_get_bodyB_0=function(){return(vb=a._emscripten_bind_b2JointDef_get_bodyB_0=a.asm.L).apply(null,
arguments)},wb=a._emscripten_bind_b2JointDef_set_bodyB_1=function(){return(wb=a._emscripten_bind_b2JointDef_set_bodyB_1=a.asm.M).apply(null,arguments)},xb=a._emscripten_bind_b2JointDef_get_collideConnected_0=function(){return(xb=a._emscripten_bind_b2JointDef_get_collideConnected_0=a.asm.N).apply(null,arguments)},yb=a._emscripten_bind_b2JointDef_set_collideConnected_1=function(){return(yb=a._emscripten_bind_b2JointDef_set_collideConnected_1=a.asm.O).apply(null,arguments)},zb=a._emscripten_bind_b2JointDef___destroy___0=
function(){return(zb=a._emscripten_bind_b2JointDef___destroy___0=a.asm.P).apply(null,arguments)},Ab=a._emscripten_bind_b2Joint_GetType_0=function(){return(Ab=a._emscripten_bind_b2Joint_GetType_0=a.asm.Q).apply(null,arguments)},Bb=a._emscripten_bind_b2Joint_GetBodyA_0=function(){return(Bb=a._emscripten_bind_b2Joint_GetBodyA_0=a.asm.R).apply(null,arguments)},Cb=a._emscripten_bind_b2Joint_GetBodyB_0=function(){return(Cb=a._emscripten_bind_b2Joint_GetBodyB_0=a.asm.S).apply(null,arguments)},Db=a._emscripten_bind_b2Joint_GetAnchorA_0=
function(){return(Db=a._emscripten_bind_b2Joint_GetAnchorA_0=a.asm.T).apply(null,arguments)},Eb=a._emscripten_bind_b2Joint_GetAnchorB_0=function(){return(Eb=a._emscripten_bind_b2Joint_GetAnchorB_0=a.asm.U).apply(null,arguments)},Fb=a._emscripten_bind_b2Joint_GetReactionForce_1=function(){return(Fb=a._emscripten_bind_b2Joint_GetReactionForce_1=a.asm.V).apply(null,arguments)},Gb=a._emscripten_bind_b2Joint_GetReactionTorque_1=function(){return(Gb=a._emscripten_bind_b2Joint_GetReactionTorque_1=a.asm.W).apply(null,
arguments)},Hb=a._emscripten_bind_b2Joint_GetNext_0=function(){return(Hb=a._emscripten_bind_b2Joint_GetNext_0=a.asm.X).apply(null,arguments)},Ib=a._emscripten_bind_b2Joint_GetUserData_0=function(){return(Ib=a._emscripten_bind_b2Joint_GetUserData_0=a.asm.Y).apply(null,arguments)},Jb=a._emscripten_bind_b2Joint_GetCollideConnected_0=function(){return(Jb=a._emscripten_bind_b2Joint_GetCollideConnected_0=a.asm.Z).apply(null,arguments)},Kb=a._emscripten_bind_b2Joint_Dump_0=function(){return(Kb=a._emscripten_bind_b2Joint_Dump_0=
a.asm._).apply(null,arguments)},Lb=a._emscripten_bind_b2ContactFilter___destroy___0=function(){return(Lb=a._emscripten_bind_b2ContactFilter___destroy___0=a.asm.$).apply(null,arguments)},Mb=a._emscripten_bind_b2DestructionListenerWrapper___destroy___0=function(){return(Mb=a._emscripten_bind_b2DestructionListenerWrapper___destroy___0=a.asm.aa).apply(null,arguments)},Nb=a._emscripten_bind_b2Draw_SetFlags_1=function(){return(Nb=a._emscripten_bind_b2Draw_SetFlags_1=a.asm.ba).apply(null,arguments)},Ob=
a._emscripten_bind_b2Draw_GetFlags_0=function(){return(Ob=a._emscripten_bind_b2Draw_GetFlags_0=a.asm.ca).apply(null,arguments)},Pb=a._emscripten_bind_b2Draw_AppendFlags_1=function(){return(Pb=a._emscripten_bind_b2Draw_AppendFlags_1=a.asm.da).apply(null,arguments)},Qb=a._emscripten_bind_b2Draw_ClearFlags_1=function(){return(Qb=a._emscripten_bind_b2Draw_ClearFlags_1=a.asm.ea).apply(null,arguments)},Rb=a._emscripten_bind_b2Draw___destroy___0=function(){return(Rb=a._emscripten_bind_b2Draw___destroy___0=
a.asm.fa).apply(null,arguments)},Sb=a._emscripten_bind_VoidPtr___destroy___0=function(){return(Sb=a._emscripten_bind_VoidPtr___destroy___0=a.asm.ga).apply(null,arguments)},Tb=a._emscripten_bind_b2Contact_GetManifold_0=function(){return(Tb=a._emscripten_bind_b2Contact_GetManifold_0=a.asm.ha).apply(null,arguments)},Ub=a._emscripten_bind_b2Contact_GetWorldManifold_1=function(){return(Ub=a._emscripten_bind_b2Contact_GetWorldManifold_1=a.asm.ia).apply(null,arguments)},Vb=a._emscripten_bind_b2Contact_IsTouching_0=
function(){return(Vb=a._emscripten_bind_b2Contact_IsTouching_0=a.asm.ja).apply(null,arguments)},Wb=a._emscripten_bind_b2Contact_SetEnabled_1=function(){return(Wb=a._emscripten_bind_b2Contact_SetEnabled_1=a.asm.ka).apply(null,arguments)},Xb=a._emscripten_bind_b2Contact_IsEnabled_0=function(){return(Xb=a._emscripten_bind_b2Contact_IsEnabled_0=a.asm.la).apply(null,arguments)},Yb=a._emscripten_bind_b2Contact_GetNext_0=function(){return(Yb=a._emscripten_bind_b2Contact_GetNext_0=a.asm.ma).apply(null,arguments)},
Zb=a._emscripten_bind_b2Contact_GetFixtureA_0=function(){return(Zb=a._emscripten_bind_b2Contact_GetFixtureA_0=a.asm.na).apply(null,arguments)},$b=a._emscripten_bind_b2Contact_GetChildIndexA_0=function(){return($b=a._emscripten_bind_b2Contact_GetChildIndexA_0=a.asm.oa).apply(null,arguments)},ac=a._emscripten_bind_b2Contact_GetFixtureB_0=function(){return(ac=a._emscripten_bind_b2Contact_GetFixtureB_0=a.asm.pa).apply(null,arguments)},bc=a._emscripten_bind_b2Contact_GetChildIndexB_0=function(){return(bc=
a._emscripten_bind_b2Contact_GetChildIndexB_0=a.asm.qa).apply(null,arguments)},cc=a._emscripten_bind_b2Contact_SetFriction_1=function(){return(cc=a._emscripten_bind_b2Contact_SetFriction_1=a.asm.ra).apply(null,arguments)},dc=a._emscripten_bind_b2Contact_GetFriction_0=function(){return(dc=a._emscripten_bind_b2Contact_GetFriction_0=a.asm.sa).apply(null,arguments)},ec=a._emscripten_bind_b2Contact_ResetFriction_0=function(){return(ec=a._emscripten_bind_b2Contact_ResetFriction_0=a.asm.ta).apply(null,arguments)},
fc=a._emscripten_bind_b2Contact_SetRestitution_1=function(){return(fc=a._emscripten_bind_b2Contact_SetRestitution_1=a.asm.ua).apply(null,arguments)},gc=a._emscripten_bind_b2Contact_GetRestitution_0=function(){return(gc=a._emscripten_bind_b2Contact_GetRestitution_0=a.asm.va).apply(null,arguments)},hc=a._emscripten_bind_b2Contact_ResetRestitution_0=function(){return(hc=a._emscripten_bind_b2Contact_ResetRestitution_0=a.asm.wa).apply(null,arguments)},ic=a._emscripten_bind_b2Contact_SetRestitutionThreshold_1=
function(){return(ic=a._emscripten_bind_b2Contact_SetRestitutionThreshold_1=a.asm.xa).apply(null,arguments)},jc=a._emscripten_bind_b2Contact_GetRestitutionThreshold_0=function(){return(jc=a._emscripten_bind_b2Contact_GetRestitutionThreshold_0=a.asm.ya).apply(null,arguments)},kc=a._emscripten_bind_b2Contact_ResetRestitutionThreshold_0=function(){return(kc=a._emscripten_bind_b2Contact_ResetRestitutionThreshold_0=a.asm.za).apply(null,arguments)},lc=a._emscripten_bind_b2Contact_SetTangentSpeed_1=function(){return(lc=
a._emscripten_bind_b2Contact_SetTangentSpeed_1=a.asm.Aa).apply(null,arguments)},mc=a._emscripten_bind_b2Contact_GetTangentSpeed_0=function(){return(mc=a._emscripten_bind_b2Contact_GetTangentSpeed_0=a.asm.Ba).apply(null,arguments)},nc=a._emscripten_bind_JSContactListener_JSContactListener_0=function(){return(nc=a._emscripten_bind_JSContactListener_JSContactListener_0=a.asm.Ca).apply(null,arguments)},oc=a._emscripten_bind_JSContactListener_BeginContact_1=function(){return(oc=a._emscripten_bind_JSContactListener_BeginContact_1=
a.asm.Da).apply(null,arguments)},pc=a._emscripten_bind_JSContactListener_EndContact_1=function(){return(pc=a._emscripten_bind_JSContactListener_EndContact_1=a.asm.Ea).apply(null,arguments)},qc=a._emscripten_bind_JSContactListener_PreSolve_2=function(){return(qc=a._emscripten_bind_JSContactListener_PreSolve_2=a.asm.Fa).apply(null,arguments)},rc=a._emscripten_bind_JSContactListener_PostSolve_2=function(){return(rc=a._emscripten_bind_JSContactListener_PostSolve_2=a.asm.Ga).apply(null,arguments)},sc=
a._emscripten_bind_JSContactListener___destroy___0=function(){return(sc=a._emscripten_bind_JSContactListener___destroy___0=a.asm.Ha).apply(null,arguments)},tc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_JSContactListener_0=function(){return(tc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_JSContactListener_0=a.asm.Ia).apply(null,arguments)},uc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_BeginContact_1=function(){return(uc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_BeginContact_1=
a.asm.Ja).apply(null,arguments)},vc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_EndContact_1=function(){return(vc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_EndContact_1=a.asm.Ka).apply(null,arguments)},wc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks___destroy___0=function(){return(wc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks___destroy___0=a.asm.La).apply(null,arguments)},xc=a._emscripten_bind_b2World_b2World_1=function(){return(xc=a._emscripten_bind_b2World_b2World_1=
a.asm.Ma).apply(null,arguments)},yc=a._emscripten_bind_b2World_SetDestructionListener_1=function(){return(yc=a._emscripten_bind_b2World_SetDestructionListener_1=a.asm.Na).apply(null,arguments)},zc=a._emscripten_bind_b2World_SetContactFilter_1=function(){return(zc=a._emscripten_bind_b2World_SetContactFilter_1=a.asm.Oa).apply(null,arguments)},Ac=a._emscripten_bind_b2World_SetContactListener_1=function(){return(Ac=a._emscripten_bind_b2World_SetContactListener_1=a.asm.Pa).apply(null,arguments)},Bc=a._emscripten_bind_b2World_SetDebugDraw_1=
function(){return(Bc=a._emscripten_bind_b2World_SetDebugDraw_1=a.asm.Qa).apply(null,arguments)},Cc=a._emscripten_bind_b2World_CreateBody_1=function(){return(Cc=a._emscripten_bind_b2World_CreateBody_1=a.asm.Ra).apply(null,arguments)},Dc=a._emscripten_bind_b2World_DestroyBody_1=function(){return(Dc=a._emscripten_bind_b2World_DestroyBody_1=a.asm.Sa).apply(null,arguments)},Ec=a._emscripten_bind_b2World_CreateJoint_1=function(){return(Ec=a._emscripten_bind_b2World_CreateJoint_1=a.asm.Ta).apply(null,arguments)},
Fc=a._emscripten_bind_b2World_DestroyJoint_1=function(){return(Fc=a._emscripten_bind_b2World_DestroyJoint_1=a.asm.Ua).apply(null,arguments)},Gc=a._emscripten_bind_b2World_Step_3=function(){return(Gc=a._emscripten_bind_b2World_Step_3=a.asm.Va).apply(null,arguments)},Hc=a._emscripten_bind_b2World_ClearForces_0=function(){return(Hc=a._emscripten_bind_b2World_ClearForces_0=a.asm.Wa).apply(null,arguments)},Ic=a._emscripten_bind_b2World_DebugDraw_0=function(){return(Ic=a._emscripten_bind_b2World_DebugDraw_0=
a.asm.Xa).apply(null,arguments)},Jc=a._emscripten_bind_b2World_QueryAABB_2=function(){return(Jc=a._emscripten_bind_b2World_QueryAABB_2=a.asm.Ya).apply(null,arguments)},Kc=a._emscripten_bind_b2World_RayCast_3=function(){return(Kc=a._emscripten_bind_b2World_RayCast_3=a.asm.Za).apply(null,arguments)},Lc=a._emscripten_bind_b2World_GetBodyList_0=function(){return(Lc=a._emscripten_bind_b2World_GetBodyList_0=a.asm._a).apply(null,arguments)},Mc=a._emscripten_bind_b2World_GetJointList_0=function(){return(Mc=
a._emscripten_bind_b2World_GetJointList_0=a.asm.$a).apply(null,arguments)},Nc=a._emscripten_bind_b2World_GetContactList_0=function(){return(Nc=a._emscripten_bind_b2World_GetContactList_0=a.asm.ab).apply(null,arguments)},Oc=a._emscripten_bind_b2World_SetAllowSleeping_1=function(){return(Oc=a._emscripten_bind_b2World_SetAllowSleeping_1=a.asm.bb).apply(null,arguments)},Pc=a._emscripten_bind_b2World_GetAllowSleeping_0=function(){return(Pc=a._emscripten_bind_b2World_GetAllowSleeping_0=a.asm.cb).apply(null,
arguments)},Qc=a._emscripten_bind_b2World_SetWarmStarting_1=function(){return(Qc=a._emscripten_bind_b2World_SetWarmStarting_1=a.asm.db).apply(null,arguments)},Rc=a._emscripten_bind_b2World_GetWarmStarting_0=function(){return(Rc=a._emscripten_bind_b2World_GetWarmStarting_0=a.asm.eb).apply(null,arguments)},Sc=a._emscripten_bind_b2World_SetContinuousPhysics_1=function(){return(Sc=a._emscripten_bind_b2World_SetContinuousPhysics_1=a.asm.fb).apply(null,arguments)},Tc=a._emscripten_bind_b2World_GetContinuousPhysics_0=
function(){return(Tc=a._emscripten_bind_b2World_GetContinuousPhysics_0=a.asm.gb).apply(null,arguments)},Uc=a._emscripten_bind_b2World_SetSubStepping_1=function(){return(Uc=a._emscripten_bind_b2World_SetSubStepping_1=a.asm.hb).apply(null,arguments)},Vc=a._emscripten_bind_b2World_GetSubStepping_0=function(){return(Vc=a._emscripten_bind_b2World_GetSubStepping_0=a.asm.ib).apply(null,arguments)},Wc=a._emscripten_bind_b2World_GetProxyCount_0=function(){return(Wc=a._emscripten_bind_b2World_GetProxyCount_0=
a.asm.jb).apply(null,arguments)},Xc=a._emscripten_bind_b2World_GetBodyCount_0=function(){return(Xc=a._emscripten_bind_b2World_GetBodyCount_0=a.asm.kb).apply(null,arguments)},Yc=a._emscripten_bind_b2World_GetJointCount_0=function(){return(Yc=a._emscripten_bind_b2World_GetJointCount_0=a.asm.lb).apply(null,arguments)},Zc=a._emscripten_bind_b2World_GetContactCount_0=function(){return(Zc=a._emscripten_bind_b2World_GetContactCount_0=a.asm.mb).apply(null,arguments)},$c=a._emscripten_bind_b2World_GetTreeHeight_0=
function(){return($c=a._emscripten_bind_b2World_GetTreeHeight_0=a.asm.nb).apply(null,arguments)},ad=a._emscripten_bind_b2World_GetTreeBalance_0=function(){return(ad=a._emscripten_bind_b2World_GetTreeBalance_0=a.asm.ob).apply(null,arguments)},bd=a._emscripten_bind_b2World_GetTreeQuality_0=function(){return(bd=a._emscripten_bind_b2World_GetTreeQuality_0=a.asm.pb).apply(null,arguments)},cd=a._emscripten_bind_b2World_SetGravity_1=function(){return(cd=a._emscripten_bind_b2World_SetGravity_1=a.asm.qb).apply(null,
arguments)},dd=a._emscripten_bind_b2World_GetGravity_0=function(){return(dd=a._emscripten_bind_b2World_GetGravity_0=a.asm.rb).apply(null,arguments)},ed=a._emscripten_bind_b2World_IsLocked_0=function(){return(ed=a._emscripten_bind_b2World_IsLocked_0=a.asm.sb).apply(null,arguments)},fd=a._emscripten_bind_b2World_SetAutoClearForces_1=function(){return(fd=a._emscripten_bind_b2World_SetAutoClearForces_1=a.asm.tb).apply(null,arguments)},gd=a._emscripten_bind_b2World_GetAutoClearForces_0=function(){return(gd=
a._emscripten_bind_b2World_GetAutoClearForces_0=a.asm.ub).apply(null,arguments)},hd=a._emscripten_bind_b2World_GetProfile_0=function(){return(hd=a._emscripten_bind_b2World_GetProfile_0=a.asm.vb).apply(null,arguments)},jd=a._emscripten_bind_b2World_Dump_0=function(){return(jd=a._emscripten_bind_b2World_Dump_0=a.asm.wb).apply(null,arguments)},kd=a._emscripten_bind_b2World___destroy___0=function(){return(kd=a._emscripten_bind_b2World___destroy___0=a.asm.xb).apply(null,arguments)},ld=a._emscripten_bind_b2FixtureUserData_get_pointer_0=
function(){return(ld=a._emscripten_bind_b2FixtureUserData_get_pointer_0=a.asm.yb).apply(null,arguments)},md=a._emscripten_bind_b2FixtureUserData_set_pointer_1=function(){return(md=a._emscripten_bind_b2FixtureUserData_set_pointer_1=a.asm.zb).apply(null,arguments)},nd=a._emscripten_bind_b2FixtureUserData___destroy___0=function(){return(nd=a._emscripten_bind_b2FixtureUserData___destroy___0=a.asm.Ab).apply(null,arguments)},od=a._emscripten_bind_b2FixtureDef_b2FixtureDef_0=function(){return(od=a._emscripten_bind_b2FixtureDef_b2FixtureDef_0=
a.asm.Bb).apply(null,arguments)},pd=a._emscripten_bind_b2FixtureDef_get_shape_0=function(){return(pd=a._emscripten_bind_b2FixtureDef_get_shape_0=a.asm.Cb).apply(null,arguments)},qd=a._emscripten_bind_b2FixtureDef_set_shape_1=function(){return(qd=a._emscripten_bind_b2FixtureDef_set_shape_1=a.asm.Db).apply(null,arguments)},rd=a._emscripten_bind_b2FixtureDef_get_userData_0=function(){return(rd=a._emscripten_bind_b2FixtureDef_get_userData_0=a.asm.Eb).apply(null,arguments)},sd=a._emscripten_bind_b2FixtureDef_set_userData_1=
function(){return(sd=a._emscripten_bind_b2FixtureDef_set_userData_1=a.asm.Fb).apply(null,arguments)},td=a._emscripten_bind_b2FixtureDef_get_friction_0=function(){return(td=a._emscripten_bind_b2FixtureDef_get_friction_0=a.asm.Gb).apply(null,arguments)},ud=a._emscripten_bind_b2FixtureDef_set_friction_1=function(){return(ud=a._emscripten_bind_b2FixtureDef_set_friction_1=a.asm.Hb).apply(null,arguments)},vd=a._emscripten_bind_b2FixtureDef_get_restitution_0=function(){return(vd=a._emscripten_bind_b2FixtureDef_get_restitution_0=
a.asm.Ib).apply(null,arguments)},wd=a._emscripten_bind_b2FixtureDef_set_restitution_1=function(){return(wd=a._emscripten_bind_b2FixtureDef_set_restitution_1=a.asm.Jb).apply(null,arguments)},xd=a._emscripten_bind_b2FixtureDef_get_restitutionThreshold_0=function(){return(xd=a._emscripten_bind_b2FixtureDef_get_restitutionThreshold_0=a.asm.Kb).apply(null,arguments)},yd=a._emscripten_bind_b2FixtureDef_set_restitutionThreshold_1=function(){return(yd=a._emscripten_bind_b2FixtureDef_set_restitutionThreshold_1=
a.asm.Lb).apply(null,arguments)},zd=a._emscripten_bind_b2FixtureDef_get_density_0=function(){return(zd=a._emscripten_bind_b2FixtureDef_get_density_0=a.asm.Mb).apply(null,arguments)},Ad=a._emscripten_bind_b2FixtureDef_set_density_1=function(){return(Ad=a._emscripten_bind_b2FixtureDef_set_density_1=a.asm.Nb).apply(null,arguments)},Bd=a._emscripten_bind_b2FixtureDef_get_isSensor_0=function(){return(Bd=a._emscripten_bind_b2FixtureDef_get_isSensor_0=a.asm.Ob).apply(null,arguments)},Cd=a._emscripten_bind_b2FixtureDef_set_isSensor_1=
function(){return(Cd=a._emscripten_bind_b2FixtureDef_set_isSensor_1=a.asm.Pb).apply(null,arguments)},Dd=a._emscripten_bind_b2FixtureDef_get_filter_0=function(){return(Dd=a._emscripten_bind_b2FixtureDef_get_filter_0=a.asm.Qb).apply(null,arguments)},Ed=a._emscripten_bind_b2FixtureDef_set_filter_1=function(){return(Ed=a._emscripten_bind_b2FixtureDef_set_filter_1=a.asm.Rb).apply(null,arguments)},Fd=a._emscripten_bind_b2FixtureDef___destroy___0=function(){return(Fd=a._emscripten_bind_b2FixtureDef___destroy___0=
a.asm.Sb).apply(null,arguments)},Gd=a._emscripten_bind_b2Fixture_GetType_0=function(){return(Gd=a._emscripten_bind_b2Fixture_GetType_0=a.asm.Tb).apply(null,arguments)},Hd=a._emscripten_bind_b2Fixture_GetShape_0=function(){return(Hd=a._emscripten_bind_b2Fixture_GetShape_0=a.asm.Ub).apply(null,arguments)},Id=a._emscripten_bind_b2Fixture_SetSensor_1=function(){return(Id=a._emscripten_bind_b2Fixture_SetSensor_1=a.asm.Vb).apply(null,arguments)},Jd=a._emscripten_bind_b2Fixture_IsSensor_0=function(){return(Jd=
a._emscripten_bind_b2Fixture_IsSensor_0=a.asm.Wb).apply(null,arguments)},Kd=a._emscripten_bind_b2Fixture_SetFilterData_1=function(){return(Kd=a._emscripten_bind_b2Fixture_SetFilterData_1=a.asm.Xb).apply(null,arguments)},Ld=a._emscripten_bind_b2Fixture_GetFilterData_0=function(){return(Ld=a._emscripten_bind_b2Fixture_GetFilterData_0=a.asm.Yb).apply(null,arguments)},Md=a._emscripten_bind_b2Fixture_Refilter_0=function(){return(Md=a._emscripten_bind_b2Fixture_Refilter_0=a.asm.Zb).apply(null,arguments)},
Nd=a._emscripten_bind_b2Fixture_GetBody_0=function(){return(Nd=a._emscripten_bind_b2Fixture_GetBody_0=a.asm._b).apply(null,arguments)},Od=a._emscripten_bind_b2Fixture_GetNext_0=function(){return(Od=a._emscripten_bind_b2Fixture_GetNext_0=a.asm.$b).apply(null,arguments)},Pd=a._emscripten_bind_b2Fixture_GetUserData_0=function(){return(Pd=a._emscripten_bind_b2Fixture_GetUserData_0=a.asm.ac).apply(null,arguments)},Qd=a._emscripten_bind_b2Fixture_TestPoint_1=function(){return(Qd=a._emscripten_bind_b2Fixture_TestPoint_1=
a.asm.bc).apply(null,arguments)},Rd=a._emscripten_bind_b2Fixture_RayCast_3=function(){return(Rd=a._emscripten_bind_b2Fixture_RayCast_3=a.asm.cc).apply(null,arguments)},Sd=a._emscripten_bind_b2Fixture_GetMassData_1=function(){return(Sd=a._emscripten_bind_b2Fixture_GetMassData_1=a.asm.dc).apply(null,arguments)},Td=a._emscripten_bind_b2Fixture_SetDensity_1=function(){return(Td=a._emscripten_bind_b2Fixture_SetDensity_1=a.asm.ec).apply(null,arguments)},Ud=a._emscripten_bind_b2Fixture_GetDensity_0=function(){return(Ud=
a._emscripten_bind_b2Fixture_GetDensity_0=a.asm.fc).apply(null,arguments)},Vd=a._emscripten_bind_b2Fixture_GetFriction_0=function(){return(Vd=a._emscripten_bind_b2Fixture_GetFriction_0=a.asm.gc).apply(null,arguments)},Wd=a._emscripten_bind_b2Fixture_SetFriction_1=function(){return(Wd=a._emscripten_bind_b2Fixture_SetFriction_1=a.asm.hc).apply(null,arguments)},Xd=a._emscripten_bind_b2Fixture_GetRestitution_0=function(){return(Xd=a._emscripten_bind_b2Fixture_GetRestitution_0=a.asm.ic).apply(null,arguments)},
Yd=a._emscripten_bind_b2Fixture_SetRestitution_1=function(){return(Yd=a._emscripten_bind_b2Fixture_SetRestitution_1=a.asm.jc).apply(null,arguments)},Zd=a._emscripten_bind_b2Fixture_GetRestitutionThreshold_0=function(){return(Zd=a._emscripten_bind_b2Fixture_GetRestitutionThreshold_0=a.asm.kc).apply(null,arguments)},$d=a._emscripten_bind_b2Fixture_SetRestitutionThreshold_1=function(){return($d=a._emscripten_bind_b2Fixture_SetRestitutionThreshold_1=a.asm.lc).apply(null,arguments)},ae=a._emscripten_bind_b2Fixture_GetAABB_1=
function(){return(ae=a._emscripten_bind_b2Fixture_GetAABB_1=a.asm.mc).apply(null,arguments)},be=a._emscripten_bind_b2Fixture_Dump_1=function(){return(be=a._emscripten_bind_b2Fixture_Dump_1=a.asm.nc).apply(null,arguments)},ce=a._emscripten_bind_b2Fixture___destroy___0=function(){return(ce=a._emscripten_bind_b2Fixture___destroy___0=a.asm.oc).apply(null,arguments)},de=a._emscripten_bind_b2Transform_b2Transform_0=function(){return(de=a._emscripten_bind_b2Transform_b2Transform_0=a.asm.pc).apply(null,arguments)},
ee=a._emscripten_bind_b2Transform_b2Transform_2=function(){return(ee=a._emscripten_bind_b2Transform_b2Transform_2=a.asm.qc).apply(null,arguments)},fe=a._emscripten_bind_b2Transform_SetIdentity_0=function(){return(fe=a._emscripten_bind_b2Transform_SetIdentity_0=a.asm.rc).apply(null,arguments)},ge=a._emscripten_bind_b2Transform_Set_2=function(){return(ge=a._emscripten_bind_b2Transform_Set_2=a.asm.sc).apply(null,arguments)},he=a._emscripten_bind_b2Transform_get_p_0=function(){return(he=a._emscripten_bind_b2Transform_get_p_0=
a.asm.tc).apply(null,arguments)},ie=a._emscripten_bind_b2Transform_set_p_1=function(){return(ie=a._emscripten_bind_b2Transform_set_p_1=a.asm.uc).apply(null,arguments)},je=a._emscripten_bind_b2Transform_get_q_0=function(){return(je=a._emscripten_bind_b2Transform_get_q_0=a.asm.vc).apply(null,arguments)},ke=a._emscripten_bind_b2Transform_set_q_1=function(){return(ke=a._emscripten_bind_b2Transform_set_q_1=a.asm.wc).apply(null,arguments)},le=a._emscripten_bind_b2Transform___destroy___0=function(){return(le=
a._emscripten_bind_b2Transform___destroy___0=a.asm.xc).apply(null,arguments)},me=a._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0=function(){return(me=a._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0=a.asm.yc).apply(null,arguments)},ne=a._emscripten_bind_JSRayCastCallback_ReportFixture_4=function(){return(ne=a._emscripten_bind_JSRayCastCallback_ReportFixture_4=a.asm.zc).apply(null,arguments)},oe=a._emscripten_bind_JSRayCastCallback___destroy___0=function(){return(oe=a._emscripten_bind_JSRayCastCallback___destroy___0=
a.asm.Ac).apply(null,arguments)},pe=a._emscripten_bind_JSQueryCallback_JSQueryCallback_0=function(){return(pe=a._emscripten_bind_JSQueryCallback_JSQueryCallback_0=a.asm.Bc).apply(null,arguments)},qe=a._emscripten_bind_JSQueryCallback_ReportFixture_1=function(){return(qe=a._emscripten_bind_JSQueryCallback_ReportFixture_1=a.asm.Cc).apply(null,arguments)},re=a._emscripten_bind_JSQueryCallback___destroy___0=function(){return(re=a._emscripten_bind_JSQueryCallback___destroy___0=a.asm.Dc).apply(null,arguments)},
se=a._emscripten_bind_b2MassData_b2MassData_0=function(){return(se=a._emscripten_bind_b2MassData_b2MassData_0=a.asm.Ec).apply(null,arguments)},te=a._emscripten_bind_b2MassData_get_mass_0=function(){return(te=a._emscripten_bind_b2MassData_get_mass_0=a.asm.Fc).apply(null,arguments)},ue=a._emscripten_bind_b2MassData_set_mass_1=function(){return(ue=a._emscripten_bind_b2MassData_set_mass_1=a.asm.Gc).apply(null,arguments)},ve=a._emscripten_bind_b2MassData_get_center_0=function(){return(ve=a._emscripten_bind_b2MassData_get_center_0=
a.asm.Hc).apply(null,arguments)},we=a._emscripten_bind_b2MassData_set_center_1=function(){return(we=a._emscripten_bind_b2MassData_set_center_1=a.asm.Ic).apply(null,arguments)},xe=a._emscripten_bind_b2MassData_get_I_0=function(){return(xe=a._emscripten_bind_b2MassData_get_I_0=a.asm.Jc).apply(null,arguments)},ye=a._emscripten_bind_b2MassData_set_I_1=function(){return(ye=a._emscripten_bind_b2MassData_set_I_1=a.asm.Kc).apply(null,arguments)},ze=a._emscripten_bind_b2MassData___destroy___0=function(){return(ze=
a._emscripten_bind_b2MassData___destroy___0=a.asm.Lc).apply(null,arguments)},Ae=a._emscripten_bind_b2Vec2_b2Vec2_0=function(){return(Ae=a._emscripten_bind_b2Vec2_b2Vec2_0=a.asm.Mc).apply(null,arguments)},Be=a._emscripten_bind_b2Vec2_b2Vec2_2=function(){return(Be=a._emscripten_bind_b2Vec2_b2Vec2_2=a.asm.Nc).apply(null,arguments)},Ce=a._emscripten_bind_b2Vec2_SetZero_0=function(){return(Ce=a._emscripten_bind_b2Vec2_SetZero_0=a.asm.Oc).apply(null,arguments)},De=a._emscripten_bind_b2Vec2_Set_2=function(){return(De=
a._emscripten_bind_b2Vec2_Set_2=a.asm.Pc).apply(null,arguments)},Ee=a._emscripten_bind_b2Vec2_op_add_1=function(){return(Ee=a._emscripten_bind_b2Vec2_op_add_1=a.asm.Qc).apply(null,arguments)},Fe=a._emscripten_bind_b2Vec2_op_sub_1=function(){return(Fe=a._emscripten_bind_b2Vec2_op_sub_1=a.asm.Rc).apply(null,arguments)},Ge=a._emscripten_bind_b2Vec2_op_mul_1=function(){return(Ge=a._emscripten_bind_b2Vec2_op_mul_1=a.asm.Sc).apply(null,arguments)},He=a._emscripten_bind_b2Vec2_Length_0=function(){return(He=
a._emscripten_bind_b2Vec2_Length_0=a.asm.Tc).apply(null,arguments)},Ie=a._emscripten_bind_b2Vec2_LengthSquared_0=function(){return(Ie=a._emscripten_bind_b2Vec2_LengthSquared_0=a.asm.Uc).apply(null,arguments)},Je=a._emscripten_bind_b2Vec2_Normalize_0=function(){return(Je=a._emscripten_bind_b2Vec2_Normalize_0=a.asm.Vc).apply(null,arguments)},Ke=a._emscripten_bind_b2Vec2_IsValid_0=function(){return(Ke=a._emscripten_bind_b2Vec2_IsValid_0=a.asm.Wc).apply(null,arguments)},Le=a._emscripten_bind_b2Vec2_Skew_0=
function(){return(Le=a._emscripten_bind_b2Vec2_Skew_0=a.asm.Xc).apply(null,arguments)},Me=a._emscripten_bind_b2Vec2_get_x_0=function(){return(Me=a._emscripten_bind_b2Vec2_get_x_0=a.asm.Yc).apply(null,arguments)},Ne=a._emscripten_bind_b2Vec2_set_x_1=function(){return(Ne=a._emscripten_bind_b2Vec2_set_x_1=a.asm.Zc).apply(null,arguments)},Oe=a._emscripten_bind_b2Vec2_get_y_0=function(){return(Oe=a._emscripten_bind_b2Vec2_get_y_0=a.asm._c).apply(null,arguments)},Pe=a._emscripten_bind_b2Vec2_set_y_1=function(){return(Pe=
a._emscripten_bind_b2Vec2_set_y_1=a.asm.$c).apply(null,arguments)},Qe=a._emscripten_bind_b2Vec2___destroy___0=function(){return(Qe=a._emscripten_bind_b2Vec2___destroy___0=a.asm.ad).apply(null,arguments)},Re=a._emscripten_bind_b2Vec3_b2Vec3_0=function(){return(Re=a._emscripten_bind_b2Vec3_b2Vec3_0=a.asm.bd).apply(null,arguments)},Se=a._emscripten_bind_b2Vec3_b2Vec3_3=function(){return(Se=a._emscripten_bind_b2Vec3_b2Vec3_3=a.asm.cd).apply(null,arguments)},Te=a._emscripten_bind_b2Vec3_SetZero_0=function(){return(Te=
a._emscripten_bind_b2Vec3_SetZero_0=a.asm.dd).apply(null,arguments)},Ue=a._emscripten_bind_b2Vec3_Set_3=function(){return(Ue=a._emscripten_bind_b2Vec3_Set_3=a.asm.ed).apply(null,arguments)},Ve=a._emscripten_bind_b2Vec3_op_add_1=function(){return(Ve=a._emscripten_bind_b2Vec3_op_add_1=a.asm.fd).apply(null,arguments)},We=a._emscripten_bind_b2Vec3_op_sub_1=function(){return(We=a._emscripten_bind_b2Vec3_op_sub_1=a.asm.gd).apply(null,arguments)},Xe=a._emscripten_bind_b2Vec3_op_mul_1=function(){return(Xe=
a._emscripten_bind_b2Vec3_op_mul_1=a.asm.hd).apply(null,arguments)},Ye=a._emscripten_bind_b2Vec3_get_x_0=function(){return(Ye=a._emscripten_bind_b2Vec3_get_x_0=a.asm.id).apply(null,arguments)},Ze=a._emscripten_bind_b2Vec3_set_x_1=function(){return(Ze=a._emscripten_bind_b2Vec3_set_x_1=a.asm.jd).apply(null,arguments)},$e=a._emscripten_bind_b2Vec3_get_y_0=function(){return($e=a._emscripten_bind_b2Vec3_get_y_0=a.asm.kd).apply(null,arguments)},af=a._emscripten_bind_b2Vec3_set_y_1=function(){return(af=
a._emscripten_bind_b2Vec3_set_y_1=a.asm.ld).apply(null,arguments)},bf=a._emscripten_bind_b2Vec3_get_z_0=function(){return(bf=a._emscripten_bind_b2Vec3_get_z_0=a.asm.md).apply(null,arguments)},cf=a._emscripten_bind_b2Vec3_set_z_1=function(){return(cf=a._emscripten_bind_b2Vec3_set_z_1=a.asm.nd).apply(null,arguments)},df=a._emscripten_bind_b2Vec3___destroy___0=function(){return(df=a._emscripten_bind_b2Vec3___destroy___0=a.asm.od).apply(null,arguments)},ef=a._emscripten_bind_b2BodyUserData_get_pointer_0=
function(){return(ef=a._emscripten_bind_b2BodyUserData_get_pointer_0=a.asm.pd).apply(null,arguments)},ff=a._emscripten_bind_b2BodyUserData_set_pointer_1=function(){return(ff=a._emscripten_bind_b2BodyUserData_set_pointer_1=a.asm.qd).apply(null,arguments)},gf=a._emscripten_bind_b2BodyUserData___destroy___0=function(){return(gf=a._emscripten_bind_b2BodyUserData___destroy___0=a.asm.rd).apply(null,arguments)},hf=a._emscripten_bind_b2Body_CreateFixture_1=function(){return(hf=a._emscripten_bind_b2Body_CreateFixture_1=
a.asm.sd).apply(null,arguments)},jf=a._emscripten_bind_b2Body_CreateFixture_2=function(){return(jf=a._emscripten_bind_b2Body_CreateFixture_2=a.asm.td).apply(null,arguments)},kf=a._emscripten_bind_b2Body_DestroyFixture_1=function(){return(kf=a._emscripten_bind_b2Body_DestroyFixture_1=a.asm.ud).apply(null,arguments)},lf=a._emscripten_bind_b2Body_SetTransform_2=function(){return(lf=a._emscripten_bind_b2Body_SetTransform_2=a.asm.vd).apply(null,arguments)},mf=a._emscripten_bind_b2Body_GetTransform_0=function(){return(mf=
a._emscripten_bind_b2Body_GetTransform_0=a.asm.wd).apply(null,arguments)},nf=a._emscripten_bind_b2Body_GetPosition_0=function(){return(nf=a._emscripten_bind_b2Body_GetPosition_0=a.asm.xd).apply(null,arguments)},of=a._emscripten_bind_b2Body_GetAngle_0=function(){return(of=a._emscripten_bind_b2Body_GetAngle_0=a.asm.yd).apply(null,arguments)},pf=a._emscripten_bind_b2Body_GetWorldCenter_0=function(){return(pf=a._emscripten_bind_b2Body_GetWorldCenter_0=a.asm.zd).apply(null,arguments)},qf=a._emscripten_bind_b2Body_GetLocalCenter_0=
function(){return(qf=a._emscripten_bind_b2Body_GetLocalCenter_0=a.asm.Ad).apply(null,arguments)},rf=a._emscripten_bind_b2Body_SetLinearVelocity_1=function(){return(rf=a._emscripten_bind_b2Body_SetLinearVelocity_1=a.asm.Bd).apply(null,arguments)},sf=a._emscripten_bind_b2Body_GetLinearVelocity_0=function(){return(sf=a._emscripten_bind_b2Body_GetLinearVelocity_0=a.asm.Cd).apply(null,arguments)},tf=a._emscripten_bind_b2Body_SetAngularVelocity_1=function(){return(tf=a._emscripten_bind_b2Body_SetAngularVelocity_1=
a.asm.Dd).apply(null,arguments)},uf=a._emscripten_bind_b2Body_GetAngularVelocity_0=function(){return(uf=a._emscripten_bind_b2Body_GetAngularVelocity_0=a.asm.Ed).apply(null,arguments)},vf=a._emscripten_bind_b2Body_ApplyForce_3=function(){return(vf=a._emscripten_bind_b2Body_ApplyForce_3=a.asm.Fd).apply(null,arguments)},wf=a._emscripten_bind_b2Body_ApplyForceToCenter_2=function(){return(wf=a._emscripten_bind_b2Body_ApplyForceToCenter_2=a.asm.Gd).apply(null,arguments)},xf=a._emscripten_bind_b2Body_ApplyTorque_2=
function(){return(xf=a._emscripten_bind_b2Body_ApplyTorque_2=a.asm.Hd).apply(null,arguments)},yf=a._emscripten_bind_b2Body_ApplyLinearImpulse_3=function(){return(yf=a._emscripten_bind_b2Body_ApplyLinearImpulse_3=a.asm.Id).apply(null,arguments)},zf=a._emscripten_bind_b2Body_ApplyAngularImpulse_2=function(){return(zf=a._emscripten_bind_b2Body_ApplyAngularImpulse_2=a.asm.Jd).apply(null,arguments)},Af=a._emscripten_bind_b2Body_GetMass_0=function(){return(Af=a._emscripten_bind_b2Body_GetMass_0=a.asm.Kd).apply(null,
arguments)},Bf=a._emscripten_bind_b2Body_GetInertia_0=function(){return(Bf=a._emscripten_bind_b2Body_GetInertia_0=a.asm.Ld).apply(null,arguments)},Cf=a._emscripten_bind_b2Body_GetMassData_1=function(){return(Cf=a._emscripten_bind_b2Body_GetMassData_1=a.asm.Md).apply(null,arguments)},Df=a._emscripten_bind_b2Body_SetMassData_1=function(){return(Df=a._emscripten_bind_b2Body_SetMassData_1=a.asm.Nd).apply(null,arguments)},Ef=a._emscripten_bind_b2Body_ResetMassData_0=function(){return(Ef=a._emscripten_bind_b2Body_ResetMassData_0=
a.asm.Od).apply(null,arguments)},Ff=a._emscripten_bind_b2Body_GetWorldPoint_1=function(){return(Ff=a._emscripten_bind_b2Body_GetWorldPoint_1=a.asm.Pd).apply(null,arguments)},Gf=a._emscripten_bind_b2Body_GetWorldVector_1=function(){return(Gf=a._emscripten_bind_b2Body_GetWorldVector_1=a.asm.Qd).apply(null,arguments)},Hf=a._emscripten_bind_b2Body_GetLocalPoint_1=function(){return(Hf=a._emscripten_bind_b2Body_GetLocalPoint_1=a.asm.Rd).apply(null,arguments)},If=a._emscripten_bind_b2Body_GetLocalVector_1=
function(){return(If=a._emscripten_bind_b2Body_GetLocalVector_1=a.asm.Sd).apply(null,arguments)},Jf=a._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1=function(){return(Jf=a._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1=a.asm.Td).apply(null,arguments)},Kf=a._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1=function(){return(Kf=a._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1=a.asm.Ud).apply(null,arguments)},Lf=a._emscripten_bind_b2Body_GetLinearDamping_0=function(){return(Lf=
a._emscripten_bind_b2Body_GetLinearDamping_0=a.asm.Vd).apply(null,arguments)},Mf=a._emscripten_bind_b2Body_SetLinearDamping_1=function(){return(Mf=a._emscripten_bind_b2Body_SetLinearDamping_1=a.asm.Wd).apply(null,arguments)},Nf=a._emscripten_bind_b2Body_GetAngularDamping_0=function(){return(Nf=a._emscripten_bind_b2Body_GetAngularDamping_0=a.asm.Xd).apply(null,arguments)},Of=a._emscripten_bind_b2Body_SetAngularDamping_1=function(){return(Of=a._emscripten_bind_b2Body_SetAngularDamping_1=a.asm.Yd).apply(null,
arguments)},Pf=a._emscripten_bind_b2Body_GetGravityScale_0=function(){return(Pf=a._emscripten_bind_b2Body_GetGravityScale_0=a.asm.Zd).apply(null,arguments)},Qf=a._emscripten_bind_b2Body_SetGravityScale_1=function(){return(Qf=a._emscripten_bind_b2Body_SetGravityScale_1=a.asm._d).apply(null,arguments)},Rf=a._emscripten_bind_b2Body_SetType_1=function(){return(Rf=a._emscripten_bind_b2Body_SetType_1=a.asm.$d).apply(null,arguments)},Sf=a._emscripten_bind_b2Body_GetType_0=function(){return(Sf=a._emscripten_bind_b2Body_GetType_0=
a.asm.ae).apply(null,arguments)},Tf=a._emscripten_bind_b2Body_SetBullet_1=function(){return(Tf=a._emscripten_bind_b2Body_SetBullet_1=a.asm.be).apply(null,arguments)},Uf=a._emscripten_bind_b2Body_IsBullet_0=function(){return(Uf=a._emscripten_bind_b2Body_IsBullet_0=a.asm.ce).apply(null,arguments)},Vf=a._emscripten_bind_b2Body_SetSleepingAllowed_1=function(){return(Vf=a._emscripten_bind_b2Body_SetSleepingAllowed_1=a.asm.de).apply(null,arguments)},Wf=a._emscripten_bind_b2Body_IsSleepingAllowed_0=function(){return(Wf=
a._emscripten_bind_b2Body_IsSleepingAllowed_0=a.asm.ee).apply(null,arguments)},Xf=a._emscripten_bind_b2Body_SetAwake_1=function(){return(Xf=a._emscripten_bind_b2Body_SetAwake_1=a.asm.fe).apply(null,arguments)},Yf=a._emscripten_bind_b2Body_IsAwake_0=function(){return(Yf=a._emscripten_bind_b2Body_IsAwake_0=a.asm.ge).apply(null,arguments)},Zf=a._emscripten_bind_b2Body_SetEnabled_1=function(){return(Zf=a._emscripten_bind_b2Body_SetEnabled_1=a.asm.he).apply(null,arguments)},$f=a._emscripten_bind_b2Body_IsEnabled_0=
function(){return($f=a._emscripten_bind_b2Body_IsEnabled_0=a.asm.ie).apply(null,arguments)},ag=a._emscripten_bind_b2Body_SetFixedRotation_1=function(){return(ag=a._emscripten_bind_b2Body_SetFixedRotation_1=a.asm.je).apply(null,arguments)},bg=a._emscripten_bind_b2Body_IsFixedRotation_0=function(){return(bg=a._emscripten_bind_b2Body_IsFixedRotation_0=a.asm.ke).apply(null,arguments)},cg=a._emscripten_bind_b2Body_GetFixtureList_0=function(){return(cg=a._emscripten_bind_b2Body_GetFixtureList_0=a.asm.le).apply(null,
arguments)},dg=a._emscripten_bind_b2Body_GetJointList_0=function(){return(dg=a._emscripten_bind_b2Body_GetJointList_0=a.asm.me).apply(null,arguments)},eg=a._emscripten_bind_b2Body_GetContactList_0=function(){return(eg=a._emscripten_bind_b2Body_GetContactList_0=a.asm.ne).apply(null,arguments)},fg=a._emscripten_bind_b2Body_GetNext_0=function(){return(fg=a._emscripten_bind_b2Body_GetNext_0=a.asm.oe).apply(null,arguments)},gg=a._emscripten_bind_b2Body_GetUserData_0=function(){return(gg=a._emscripten_bind_b2Body_GetUserData_0=
a.asm.pe).apply(null,arguments)},hg=a._emscripten_bind_b2Body_GetWorld_0=function(){return(hg=a._emscripten_bind_b2Body_GetWorld_0=a.asm.qe).apply(null,arguments)},ig=a._emscripten_bind_b2Body_Dump_0=function(){return(ig=a._emscripten_bind_b2Body_Dump_0=a.asm.re).apply(null,arguments)},jg=a._emscripten_bind_b2BodyDef_b2BodyDef_0=function(){return(jg=a._emscripten_bind_b2BodyDef_b2BodyDef_0=a.asm.se).apply(null,arguments)},kg=a._emscripten_bind_b2BodyDef_get_type_0=function(){return(kg=a._emscripten_bind_b2BodyDef_get_type_0=
a.asm.te).apply(null,arguments)},lg=a._emscripten_bind_b2BodyDef_set_type_1=function(){return(lg=a._emscripten_bind_b2BodyDef_set_type_1=a.asm.ue).apply(null,arguments)},mg=a._emscripten_bind_b2BodyDef_get_position_0=function(){return(mg=a._emscripten_bind_b2BodyDef_get_position_0=a.asm.ve).apply(null,arguments)},ng=a._emscripten_bind_b2BodyDef_set_position_1=function(){return(ng=a._emscripten_bind_b2BodyDef_set_position_1=a.asm.we).apply(null,arguments)},og=a._emscripten_bind_b2BodyDef_get_angle_0=
function(){return(og=a._emscripten_bind_b2BodyDef_get_angle_0=a.asm.xe).apply(null,arguments)},pg=a._emscripten_bind_b2BodyDef_set_angle_1=function(){return(pg=a._emscripten_bind_b2BodyDef_set_angle_1=a.asm.ye).apply(null,arguments)},qg=a._emscripten_bind_b2BodyDef_get_linearVelocity_0=function(){return(qg=a._emscripten_bind_b2BodyDef_get_linearVelocity_0=a.asm.ze).apply(null,arguments)},rg=a._emscripten_bind_b2BodyDef_set_linearVelocity_1=function(){return(rg=a._emscripten_bind_b2BodyDef_set_linearVelocity_1=
a.asm.Ae).apply(null,arguments)},sg=a._emscripten_bind_b2BodyDef_get_angularVelocity_0=function(){return(sg=a._emscripten_bind_b2BodyDef_get_angularVelocity_0=a.asm.Be).apply(null,arguments)},tg=a._emscripten_bind_b2BodyDef_set_angularVelocity_1=function(){return(tg=a._emscripten_bind_b2BodyDef_set_angularVelocity_1=a.asm.Ce).apply(null,arguments)},ug=a._emscripten_bind_b2BodyDef_get_linearDamping_0=function(){return(ug=a._emscripten_bind_b2BodyDef_get_linearDamping_0=a.asm.De).apply(null,arguments)},
vg=a._emscripten_bind_b2BodyDef_set_linearDamping_1=function(){return(vg=a._emscripten_bind_b2BodyDef_set_linearDamping_1=a.asm.Ee).apply(null,arguments)},wg=a._emscripten_bind_b2BodyDef_get_angularDamping_0=function(){return(wg=a._emscripten_bind_b2BodyDef_get_angularDamping_0=a.asm.Fe).apply(null,arguments)},xg=a._emscripten_bind_b2BodyDef_set_angularDamping_1=function(){return(xg=a._emscripten_bind_b2BodyDef_set_angularDamping_1=a.asm.Ge).apply(null,arguments)},yg=a._emscripten_bind_b2BodyDef_get_allowSleep_0=
function(){return(yg=a._emscripten_bind_b2BodyDef_get_allowSleep_0=a.asm.He).apply(null,arguments)},zg=a._emscripten_bind_b2BodyDef_set_allowSleep_1=function(){return(zg=a._emscripten_bind_b2BodyDef_set_allowSleep_1=a.asm.Ie).apply(null,arguments)},Ag=a._emscripten_bind_b2BodyDef_get_awake_0=function(){return(Ag=a._emscripten_bind_b2BodyDef_get_awake_0=a.asm.Je).apply(null,arguments)},Bg=a._emscripten_bind_b2BodyDef_set_awake_1=function(){return(Bg=a._emscripten_bind_b2BodyDef_set_awake_1=a.asm.Ke).apply(null,
arguments)},Cg=a._emscripten_bind_b2BodyDef_get_fixedRotation_0=function(){return(Cg=a._emscripten_bind_b2BodyDef_get_fixedRotation_0=a.asm.Le).apply(null,arguments)},Dg=a._emscripten_bind_b2BodyDef_set_fixedRotation_1=function(){return(Dg=a._emscripten_bind_b2BodyDef_set_fixedRotation_1=a.asm.Me).apply(null,arguments)},Eg=a._emscripten_bind_b2BodyDef_get_bullet_0=function(){return(Eg=a._emscripten_bind_b2BodyDef_get_bullet_0=a.asm.Ne).apply(null,arguments)},Fg=a._emscripten_bind_b2BodyDef_set_bullet_1=
function(){return(Fg=a._emscripten_bind_b2BodyDef_set_bullet_1=a.asm.Oe).apply(null,arguments)},Gg=a._emscripten_bind_b2BodyDef_get_userData_0=function(){return(Gg=a._emscripten_bind_b2BodyDef_get_userData_0=a.asm.Pe).apply(null,arguments)},Hg=a._emscripten_bind_b2BodyDef_set_userData_1=function(){return(Hg=a._emscripten_bind_b2BodyDef_set_userData_1=a.asm.Qe).apply(null,arguments)},Ig=a._emscripten_bind_b2BodyDef_get_gravityScale_0=function(){return(Ig=a._emscripten_bind_b2BodyDef_get_gravityScale_0=
a.asm.Re).apply(null,arguments)},Jg=a._emscripten_bind_b2BodyDef_set_gravityScale_1=function(){return(Jg=a._emscripten_bind_b2BodyDef_set_gravityScale_1=a.asm.Se).apply(null,arguments)},Kg=a._emscripten_bind_b2BodyDef___destroy___0=function(){return(Kg=a._emscripten_bind_b2BodyDef___destroy___0=a.asm.Te).apply(null,arguments)},Lg=a._emscripten_bind_b2Filter_b2Filter_0=function(){return(Lg=a._emscripten_bind_b2Filter_b2Filter_0=a.asm.Ue).apply(null,arguments)},Mg=a._emscripten_bind_b2Filter_get_categoryBits_0=
function(){return(Mg=a._emscripten_bind_b2Filter_get_categoryBits_0=a.asm.Ve).apply(null,arguments)},Ng=a._emscripten_bind_b2Filter_set_categoryBits_1=function(){return(Ng=a._emscripten_bind_b2Filter_set_categoryBits_1=a.asm.We).apply(null,arguments)},Og=a._emscripten_bind_b2Filter_get_maskBits_0=function(){return(Og=a._emscripten_bind_b2Filter_get_maskBits_0=a.asm.Xe).apply(null,arguments)},Pg=a._emscripten_bind_b2Filter_set_maskBits_1=function(){return(Pg=a._emscripten_bind_b2Filter_set_maskBits_1=
a.asm.Ye).apply(null,arguments)},Qg=a._emscripten_bind_b2Filter_get_groupIndex_0=function(){return(Qg=a._emscripten_bind_b2Filter_get_groupIndex_0=a.asm.Ze).apply(null,arguments)},Rg=a._emscripten_bind_b2Filter_set_groupIndex_1=function(){return(Rg=a._emscripten_bind_b2Filter_set_groupIndex_1=a.asm._e).apply(null,arguments)},Sg=a._emscripten_bind_b2Filter___destroy___0=function(){return(Sg=a._emscripten_bind_b2Filter___destroy___0=a.asm.$e).apply(null,arguments)},Tg=a._emscripten_bind_b2AABB_b2AABB_0=
function(){return(Tg=a._emscripten_bind_b2AABB_b2AABB_0=a.asm.af).apply(null,arguments)},Ug=a._emscripten_bind_b2AABB_IsValid_0=function(){return(Ug=a._emscripten_bind_b2AABB_IsValid_0=a.asm.bf).apply(null,arguments)},Vg=a._emscripten_bind_b2AABB_GetCenter_0=function(){return(Vg=a._emscripten_bind_b2AABB_GetCenter_0=a.asm.cf).apply(null,arguments)},Wg=a._emscripten_bind_b2AABB_GetExtents_0=function(){return(Wg=a._emscripten_bind_b2AABB_GetExtents_0=a.asm.df).apply(null,arguments)},Xg=a._emscripten_bind_b2AABB_GetPerimeter_0=
function(){return(Xg=a._emscripten_bind_b2AABB_GetPerimeter_0=a.asm.ef).apply(null,arguments)},Yg=a._emscripten_bind_b2AABB_Combine_1=function(){return(Yg=a._emscripten_bind_b2AABB_Combine_1=a.asm.ff).apply(null,arguments)},Zg=a._emscripten_bind_b2AABB_Combine_2=function(){return(Zg=a._emscripten_bind_b2AABB_Combine_2=a.asm.gf).apply(null,arguments)},$g=a._emscripten_bind_b2AABB_Contains_1=function(){return($g=a._emscripten_bind_b2AABB_Contains_1=a.asm.hf).apply(null,arguments)},ah=a._emscripten_bind_b2AABB_RayCast_2=
function(){return(ah=a._emscripten_bind_b2AABB_RayCast_2=a.asm.jf).apply(null,arguments)},bh=a._emscripten_bind_b2AABB_get_lowerBound_0=function(){return(bh=a._emscripten_bind_b2AABB_get_lowerBound_0=a.asm.kf).apply(null,arguments)},ch=a._emscripten_bind_b2AABB_set_lowerBound_1=function(){return(ch=a._emscripten_bind_b2AABB_set_lowerBound_1=a.asm.lf).apply(null,arguments)},dh=a._emscripten_bind_b2AABB_get_upperBound_0=function(){return(dh=a._emscripten_bind_b2AABB_get_upperBound_0=a.asm.mf).apply(null,
arguments)},eh=a._emscripten_bind_b2AABB_set_upperBound_1=function(){return(eh=a._emscripten_bind_b2AABB_set_upperBound_1=a.asm.nf).apply(null,arguments)},fh=a._emscripten_bind_b2AABB___destroy___0=function(){return(fh=a._emscripten_bind_b2AABB___destroy___0=a.asm.of).apply(null,arguments)},gh=a._emscripten_bind_b2CircleShape_b2CircleShape_0=function(){return(gh=a._emscripten_bind_b2CircleShape_b2CircleShape_0=a.asm.pf).apply(null,arguments)},hh=a._emscripten_bind_b2CircleShape_GetType_0=function(){return(hh=
a._emscripten_bind_b2CircleShape_GetType_0=a.asm.qf).apply(null,arguments)},ih=a._emscripten_bind_b2CircleShape_GetChildCount_0=function(){return(ih=a._emscripten_bind_b2CircleShape_GetChildCount_0=a.asm.rf).apply(null,arguments)},jh=a._emscripten_bind_b2CircleShape_TestPoint_2=function(){return(jh=a._emscripten_bind_b2CircleShape_TestPoint_2=a.asm.sf).apply(null,arguments)},kh=a._emscripten_bind_b2CircleShape_RayCast_4=function(){return(kh=a._emscripten_bind_b2CircleShape_RayCast_4=a.asm.tf).apply(null,
arguments)},lh=a._emscripten_bind_b2CircleShape_ComputeAABB_3=function(){return(lh=a._emscripten_bind_b2CircleShape_ComputeAABB_3=a.asm.uf).apply(null,arguments)},mh=a._emscripten_bind_b2CircleShape_ComputeMass_2=function(){return(mh=a._emscripten_bind_b2CircleShape_ComputeMass_2=a.asm.vf).apply(null,arguments)},nh=a._emscripten_bind_b2CircleShape_get_m_p_0=function(){return(nh=a._emscripten_bind_b2CircleShape_get_m_p_0=a.asm.wf).apply(null,arguments)},oh=a._emscripten_bind_b2CircleShape_set_m_p_1=
function(){return(oh=a._emscripten_bind_b2CircleShape_set_m_p_1=a.asm.xf).apply(null,arguments)},ph=a._emscripten_bind_b2CircleShape_get_m_type_0=function(){return(ph=a._emscripten_bind_b2CircleShape_get_m_type_0=a.asm.yf).apply(null,arguments)},qh=a._emscripten_bind_b2CircleShape_set_m_type_1=function(){return(qh=a._emscripten_bind_b2CircleShape_set_m_type_1=a.asm.zf).apply(null,arguments)},rh=a._emscripten_bind_b2CircleShape_get_m_radius_0=function(){return(rh=a._emscripten_bind_b2CircleShape_get_m_radius_0=
a.asm.Af).apply(null,arguments)},sh=a._emscripten_bind_b2CircleShape_set_m_radius_1=function(){return(sh=a._emscripten_bind_b2CircleShape_set_m_radius_1=a.asm.Bf).apply(null,arguments)},th=a._emscripten_bind_b2CircleShape___destroy___0=function(){return(th=a._emscripten_bind_b2CircleShape___destroy___0=a.asm.Cf).apply(null,arguments)},uh=a._emscripten_bind_b2EdgeShape_b2EdgeShape_0=function(){return(uh=a._emscripten_bind_b2EdgeShape_b2EdgeShape_0=a.asm.Df).apply(null,arguments)},vh=a._emscripten_bind_b2EdgeShape_SetOneSided_4=
function(){return(vh=a._emscripten_bind_b2EdgeShape_SetOneSided_4=a.asm.Ef).apply(null,arguments)},wh=a._emscripten_bind_b2EdgeShape_SetTwoSided_2=function(){return(wh=a._emscripten_bind_b2EdgeShape_SetTwoSided_2=a.asm.Ff).apply(null,arguments)},xh=a._emscripten_bind_b2EdgeShape_GetType_0=function(){return(xh=a._emscripten_bind_b2EdgeShape_GetType_0=a.asm.Gf).apply(null,arguments)},yh=a._emscripten_bind_b2EdgeShape_GetChildCount_0=function(){return(yh=a._emscripten_bind_b2EdgeShape_GetChildCount_0=
a.asm.Hf).apply(null,arguments)},zh=a._emscripten_bind_b2EdgeShape_TestPoint_2=function(){return(zh=a._emscripten_bind_b2EdgeShape_TestPoint_2=a.asm.If).apply(null,arguments)},Ah=a._emscripten_bind_b2EdgeShape_RayCast_4=function(){return(Ah=a._emscripten_bind_b2EdgeShape_RayCast_4=a.asm.Jf).apply(null,arguments)},Bh=a._emscripten_bind_b2EdgeShape_ComputeAABB_3=function(){return(Bh=a._emscripten_bind_b2EdgeShape_ComputeAABB_3=a.asm.Kf).apply(null,arguments)},Ch=a._emscripten_bind_b2EdgeShape_ComputeMass_2=
function(){return(Ch=a._emscripten_bind_b2EdgeShape_ComputeMass_2=a.asm.Lf).apply(null,arguments)},Dh=a._emscripten_bind_b2EdgeShape_get_m_vertex1_0=function(){return(Dh=a._emscripten_bind_b2EdgeShape_get_m_vertex1_0=a.asm.Mf).apply(null,arguments)},Eh=a._emscripten_bind_b2EdgeShape_set_m_vertex1_1=function(){return(Eh=a._emscripten_bind_b2EdgeShape_set_m_vertex1_1=a.asm.Nf).apply(null,arguments)},Fh=a._emscripten_bind_b2EdgeShape_get_m_vertex2_0=function(){return(Fh=a._emscripten_bind_b2EdgeShape_get_m_vertex2_0=
a.asm.Of).apply(null,arguments)},Gh=a._emscripten_bind_b2EdgeShape_set_m_vertex2_1=function(){return(Gh=a._emscripten_bind_b2EdgeShape_set_m_vertex2_1=a.asm.Pf).apply(null,arguments)},Hh=a._emscripten_bind_b2EdgeShape_get_m_vertex0_0=function(){return(Hh=a._emscripten_bind_b2EdgeShape_get_m_vertex0_0=a.asm.Qf).apply(null,arguments)},Ih=a._emscripten_bind_b2EdgeShape_set_m_vertex0_1=function(){return(Ih=a._emscripten_bind_b2EdgeShape_set_m_vertex0_1=a.asm.Rf).apply(null,arguments)},Jh=a._emscripten_bind_b2EdgeShape_get_m_vertex3_0=
function(){return(Jh=a._emscripten_bind_b2EdgeShape_get_m_vertex3_0=a.asm.Sf).apply(null,arguments)},Kh=a._emscripten_bind_b2EdgeShape_set_m_vertex3_1=function(){return(Kh=a._emscripten_bind_b2EdgeShape_set_m_vertex3_1=a.asm.Tf).apply(null,arguments)},Lh=a._emscripten_bind_b2EdgeShape_get_m_oneSided_0=function(){return(Lh=a._emscripten_bind_b2EdgeShape_get_m_oneSided_0=a.asm.Uf).apply(null,arguments)},Mh=a._emscripten_bind_b2EdgeShape_set_m_oneSided_1=function(){return(Mh=a._emscripten_bind_b2EdgeShape_set_m_oneSided_1=
a.asm.Vf).apply(null,arguments)},Nh=a._emscripten_bind_b2EdgeShape_get_m_type_0=function(){return(Nh=a._emscripten_bind_b2EdgeShape_get_m_type_0=a.asm.Wf).apply(null,arguments)},Oh=a._emscripten_bind_b2EdgeShape_set_m_type_1=function(){return(Oh=a._emscripten_bind_b2EdgeShape_set_m_type_1=a.asm.Xf).apply(null,arguments)},Ph=a._emscripten_bind_b2EdgeShape_get_m_radius_0=function(){return(Ph=a._emscripten_bind_b2EdgeShape_get_m_radius_0=a.asm.Yf).apply(null,arguments)},Qh=a._emscripten_bind_b2EdgeShape_set_m_radius_1=
function(){return(Qh=a._emscripten_bind_b2EdgeShape_set_m_radius_1=a.asm.Zf).apply(null,arguments)},Rh=a._emscripten_bind_b2EdgeShape___destroy___0=function(){return(Rh=a._emscripten_bind_b2EdgeShape___destroy___0=a.asm._f).apply(null,arguments)},Sh=a._emscripten_bind_b2JointUserData_get_pointer_0=function(){return(Sh=a._emscripten_bind_b2JointUserData_get_pointer_0=a.asm.$f).apply(null,arguments)},Th=a._emscripten_bind_b2JointUserData_set_pointer_1=function(){return(Th=a._emscripten_bind_b2JointUserData_set_pointer_1=
a.asm.ag).apply(null,arguments)},Uh=a._emscripten_bind_b2JointUserData___destroy___0=function(){return(Uh=a._emscripten_bind_b2JointUserData___destroy___0=a.asm.bg).apply(null,arguments)},Vh=a._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0=function(){return(Vh=a._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0=a.asm.cg).apply(null,arguments)},Wh=a._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0=function(){return(Wh=a._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0=a.asm.dg).apply(null,arguments)},Xh=
a._emscripten_bind_b2WeldJoint_GetReferenceAngle_0=function(){return(Xh=a._emscripten_bind_b2WeldJoint_GetReferenceAngle_0=a.asm.eg).apply(null,arguments)},Yh=a._emscripten_bind_b2WeldJoint_SetStiffness_1=function(){return(Yh=a._emscripten_bind_b2WeldJoint_SetStiffness_1=a.asm.fg).apply(null,arguments)},Zh=a._emscripten_bind_b2WeldJoint_GetStiffness_0=function(){return(Zh=a._emscripten_bind_b2WeldJoint_GetStiffness_0=a.asm.gg).apply(null,arguments)},$h=a._emscripten_bind_b2WeldJoint_SetDamping_1=
function(){return($h=a._emscripten_bind_b2WeldJoint_SetDamping_1=a.asm.hg).apply(null,arguments)},ai=a._emscripten_bind_b2WeldJoint_GetDamping_0=function(){return(ai=a._emscripten_bind_b2WeldJoint_GetDamping_0=a.asm.ig).apply(null,arguments)},bi=a._emscripten_bind_b2WeldJoint_Dump_0=function(){return(bi=a._emscripten_bind_b2WeldJoint_Dump_0=a.asm.jg).apply(null,arguments)},ci=a._emscripten_bind_b2WeldJoint_GetType_0=function(){return(ci=a._emscripten_bind_b2WeldJoint_GetType_0=a.asm.kg).apply(null,
arguments)},di=a._emscripten_bind_b2WeldJoint_GetBodyA_0=function(){return(di=a._emscripten_bind_b2WeldJoint_GetBodyA_0=a.asm.lg).apply(null,arguments)},ei=a._emscripten_bind_b2WeldJoint_GetBodyB_0=function(){return(ei=a._emscripten_bind_b2WeldJoint_GetBodyB_0=a.asm.mg).apply(null,arguments)},fi=a._emscripten_bind_b2WeldJoint_GetAnchorA_0=function(){return(fi=a._emscripten_bind_b2WeldJoint_GetAnchorA_0=a.asm.ng).apply(null,arguments)},gi=a._emscripten_bind_b2WeldJoint_GetAnchorB_0=function(){return(gi=
a._emscripten_bind_b2WeldJoint_GetAnchorB_0=a.asm.og).apply(null,arguments)},hi=a._emscripten_bind_b2WeldJoint_GetReactionForce_1=function(){return(hi=a._emscripten_bind_b2WeldJoint_GetReactionForce_1=a.asm.pg).apply(null,arguments)},ii=a._emscripten_bind_b2WeldJoint_GetReactionTorque_1=function(){return(ii=a._emscripten_bind_b2WeldJoint_GetReactionTorque_1=a.asm.qg).apply(null,arguments)},ji=a._emscripten_bind_b2WeldJoint_GetNext_0=function(){return(ji=a._emscripten_bind_b2WeldJoint_GetNext_0=a.asm.rg).apply(null,
arguments)},ki=a._emscripten_bind_b2WeldJoint_GetUserData_0=function(){return(ki=a._emscripten_bind_b2WeldJoint_GetUserData_0=a.asm.sg).apply(null,arguments)},li=a._emscripten_bind_b2WeldJoint_GetCollideConnected_0=function(){return(li=a._emscripten_bind_b2WeldJoint_GetCollideConnected_0=a.asm.tg).apply(null,arguments)},mi=a._emscripten_bind_b2WeldJoint___destroy___0=function(){return(mi=a._emscripten_bind_b2WeldJoint___destroy___0=a.asm.ug).apply(null,arguments)},ni=a._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0=
function(){return(ni=a._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0=a.asm.vg).apply(null,arguments)},oi=a._emscripten_bind_b2WeldJointDef_Initialize_3=function(){return(oi=a._emscripten_bind_b2WeldJointDef_Initialize_3=a.asm.wg).apply(null,arguments)},pi=a._emscripten_bind_b2WeldJointDef_get_localAnchorA_0=function(){return(pi=a._emscripten_bind_b2WeldJointDef_get_localAnchorA_0=a.asm.xg).apply(null,arguments)},qi=a._emscripten_bind_b2WeldJointDef_set_localAnchorA_1=function(){return(qi=a._emscripten_bind_b2WeldJointDef_set_localAnchorA_1=
a.asm.yg).apply(null,arguments)},ri=a._emscripten_bind_b2WeldJointDef_get_localAnchorB_0=function(){return(ri=a._emscripten_bind_b2WeldJointDef_get_localAnchorB_0=a.asm.zg).apply(null,arguments)},si=a._emscripten_bind_b2WeldJointDef_set_localAnchorB_1=function(){return(si=a._emscripten_bind_b2WeldJointDef_set_localAnchorB_1=a.asm.Ag).apply(null,arguments)},ti=a._emscripten_bind_b2WeldJointDef_get_referenceAngle_0=function(){return(ti=a._emscripten_bind_b2WeldJointDef_get_referenceAngle_0=a.asm.Bg).apply(null,
arguments)},ui=a._emscripten_bind_b2WeldJointDef_set_referenceAngle_1=function(){return(ui=a._emscripten_bind_b2WeldJointDef_set_referenceAngle_1=a.asm.Cg).apply(null,arguments)},vi=a._emscripten_bind_b2WeldJointDef_get_stiffness_0=function(){return(vi=a._emscripten_bind_b2WeldJointDef_get_stiffness_0=a.asm.Dg).apply(null,arguments)},wi=a._emscripten_bind_b2WeldJointDef_set_stiffness_1=function(){return(wi=a._emscripten_bind_b2WeldJointDef_set_stiffness_1=a.asm.Eg).apply(null,arguments)},xi=a._emscripten_bind_b2WeldJointDef_get_damping_0=
function(){return(xi=a._emscripten_bind_b2WeldJointDef_get_damping_0=a.asm.Fg).apply(null,arguments)},yi=a._emscripten_bind_b2WeldJointDef_set_damping_1=function(){return(yi=a._emscripten_bind_b2WeldJointDef_set_damping_1=a.asm.Gg).apply(null,arguments)},zi=a._emscripten_bind_b2WeldJointDef_get_type_0=function(){return(zi=a._emscripten_bind_b2WeldJointDef_get_type_0=a.asm.Hg).apply(null,arguments)},Ai=a._emscripten_bind_b2WeldJointDef_set_type_1=function(){return(Ai=a._emscripten_bind_b2WeldJointDef_set_type_1=
a.asm.Ig).apply(null,arguments)},Bi=a._emscripten_bind_b2WeldJointDef_get_userData_0=function(){return(Bi=a._emscripten_bind_b2WeldJointDef_get_userData_0=a.asm.Jg).apply(null,arguments)},Ci=a._emscripten_bind_b2WeldJointDef_set_userData_1=function(){return(Ci=a._emscripten_bind_b2WeldJointDef_set_userData_1=a.asm.Kg).apply(null,arguments)},Di=a._emscripten_bind_b2WeldJointDef_get_bodyA_0=function(){return(Di=a._emscripten_bind_b2WeldJointDef_get_bodyA_0=a.asm.Lg).apply(null,arguments)},Ei=a._emscripten_bind_b2WeldJointDef_set_bodyA_1=
function(){return(Ei=a._emscripten_bind_b2WeldJointDef_set_bodyA_1=a.asm.Mg).apply(null,arguments)},Fi=a._emscripten_bind_b2WeldJointDef_get_bodyB_0=function(){return(Fi=a._emscripten_bind_b2WeldJointDef_get_bodyB_0=a.asm.Ng).apply(null,arguments)},Gi=a._emscripten_bind_b2WeldJointDef_set_bodyB_1=function(){return(Gi=a._emscripten_bind_b2WeldJointDef_set_bodyB_1=a.asm.Og).apply(null,arguments)},Hi=a._emscripten_bind_b2WeldJointDef_get_collideConnected_0=function(){return(Hi=a._emscripten_bind_b2WeldJointDef_get_collideConnected_0=
a.asm.Pg).apply(null,arguments)},Ii=a._emscripten_bind_b2WeldJointDef_set_collideConnected_1=function(){return(Ii=a._emscripten_bind_b2WeldJointDef_set_collideConnected_1=a.asm.Qg).apply(null,arguments)},Ji=a._emscripten_bind_b2WeldJointDef___destroy___0=function(){return(Ji=a._emscripten_bind_b2WeldJointDef___destroy___0=a.asm.Rg).apply(null,arguments)},Ki=a._emscripten_bind_b2ChainShape_b2ChainShape_0=function(){return(Ki=a._emscripten_bind_b2ChainShape_b2ChainShape_0=a.asm.Sg).apply(null,arguments)},
Li=a._emscripten_bind_b2ChainShape_Clear_0=function(){return(Li=a._emscripten_bind_b2ChainShape_Clear_0=a.asm.Tg).apply(null,arguments)},Mi=a._emscripten_bind_b2ChainShape_CreateLoop_2=function(){return(Mi=a._emscripten_bind_b2ChainShape_CreateLoop_2=a.asm.Ug).apply(null,arguments)},Ni=a._emscripten_bind_b2ChainShape_CreateChain_4=function(){return(Ni=a._emscripten_bind_b2ChainShape_CreateChain_4=a.asm.Vg).apply(null,arguments)},Oi=a._emscripten_bind_b2ChainShape_GetChildEdge_2=function(){return(Oi=
a._emscripten_bind_b2ChainShape_GetChildEdge_2=a.asm.Wg).apply(null,arguments)},Pi=a._emscripten_bind_b2ChainShape_GetType_0=function(){return(Pi=a._emscripten_bind_b2ChainShape_GetType_0=a.asm.Xg).apply(null,arguments)},Qi=a._emscripten_bind_b2ChainShape_GetChildCount_0=function(){return(Qi=a._emscripten_bind_b2ChainShape_GetChildCount_0=a.asm.Yg).apply(null,arguments)},Ri=a._emscripten_bind_b2ChainShape_TestPoint_2=function(){return(Ri=a._emscripten_bind_b2ChainShape_TestPoint_2=a.asm.Zg).apply(null,
arguments)},Si=a._emscripten_bind_b2ChainShape_RayCast_4=function(){return(Si=a._emscripten_bind_b2ChainShape_RayCast_4=a.asm._g).apply(null,arguments)},Ti=a._emscripten_bind_b2ChainShape_ComputeAABB_3=function(){return(Ti=a._emscripten_bind_b2ChainShape_ComputeAABB_3=a.asm.$g).apply(null,arguments)},Ui=a._emscripten_bind_b2ChainShape_ComputeMass_2=function(){return(Ui=a._emscripten_bind_b2ChainShape_ComputeMass_2=a.asm.ah).apply(null,arguments)},Vi=a._emscripten_bind_b2ChainShape_get_m_vertices_0=
function(){return(Vi=a._emscripten_bind_b2ChainShape_get_m_vertices_0=a.asm.bh).apply(null,arguments)},Wi=a._emscripten_bind_b2ChainShape_set_m_vertices_1=function(){return(Wi=a._emscripten_bind_b2ChainShape_set_m_vertices_1=a.asm.ch).apply(null,arguments)},Xi=a._emscripten_bind_b2ChainShape_get_m_count_0=function(){return(Xi=a._emscripten_bind_b2ChainShape_get_m_count_0=a.asm.dh).apply(null,arguments)},Yi=a._emscripten_bind_b2ChainShape_set_m_count_1=function(){return(Yi=a._emscripten_bind_b2ChainShape_set_m_count_1=
a.asm.eh).apply(null,arguments)},Zi=a._emscripten_bind_b2ChainShape_get_m_prevVertex_0=function(){return(Zi=a._emscripten_bind_b2ChainShape_get_m_prevVertex_0=a.asm.fh).apply(null,arguments)},$i=a._emscripten_bind_b2ChainShape_set_m_prevVertex_1=function(){return($i=a._emscripten_bind_b2ChainShape_set_m_prevVertex_1=a.asm.gh).apply(null,arguments)},aj=a._emscripten_bind_b2ChainShape_get_m_nextVertex_0=function(){return(aj=a._emscripten_bind_b2ChainShape_get_m_nextVertex_0=a.asm.hh).apply(null,arguments)},
bj=a._emscripten_bind_b2ChainShape_set_m_nextVertex_1=function(){return(bj=a._emscripten_bind_b2ChainShape_set_m_nextVertex_1=a.asm.ih).apply(null,arguments)},cj=a._emscripten_bind_b2ChainShape_get_m_type_0=function(){return(cj=a._emscripten_bind_b2ChainShape_get_m_type_0=a.asm.jh).apply(null,arguments)},dj=a._emscripten_bind_b2ChainShape_set_m_type_1=function(){return(dj=a._emscripten_bind_b2ChainShape_set_m_type_1=a.asm.kh).apply(null,arguments)},ej=a._emscripten_bind_b2ChainShape_get_m_radius_0=
function(){return(ej=a._emscripten_bind_b2ChainShape_get_m_radius_0=a.asm.lh).apply(null,arguments)},fj=a._emscripten_bind_b2ChainShape_set_m_radius_1=function(){return(fj=a._emscripten_bind_b2ChainShape_set_m_radius_1=a.asm.mh).apply(null,arguments)},gj=a._emscripten_bind_b2ChainShape___destroy___0=function(){return(gj=a._emscripten_bind_b2ChainShape___destroy___0=a.asm.nh).apply(null,arguments)},hj=a._emscripten_bind_b2Color_b2Color_0=function(){return(hj=a._emscripten_bind_b2Color_b2Color_0=a.asm.oh).apply(null,
arguments)},ij=a._emscripten_bind_b2Color_b2Color_3=function(){return(ij=a._emscripten_bind_b2Color_b2Color_3=a.asm.ph).apply(null,arguments)},jj=a._emscripten_bind_b2Color_Set_3=function(){return(jj=a._emscripten_bind_b2Color_Set_3=a.asm.qh).apply(null,arguments)},kj=a._emscripten_bind_b2Color_get_r_0=function(){return(kj=a._emscripten_bind_b2Color_get_r_0=a.asm.rh).apply(null,arguments)},lj=a._emscripten_bind_b2Color_set_r_1=function(){return(lj=a._emscripten_bind_b2Color_set_r_1=a.asm.sh).apply(null,
arguments)},mj=a._emscripten_bind_b2Color_get_g_0=function(){return(mj=a._emscripten_bind_b2Color_get_g_0=a.asm.th).apply(null,arguments)},nj=a._emscripten_bind_b2Color_set_g_1=function(){return(nj=a._emscripten_bind_b2Color_set_g_1=a.asm.uh).apply(null,arguments)},oj=a._emscripten_bind_b2Color_get_b_0=function(){return(oj=a._emscripten_bind_b2Color_get_b_0=a.asm.vh).apply(null,arguments)},pj=a._emscripten_bind_b2Color_set_b_1=function(){return(pj=a._emscripten_bind_b2Color_set_b_1=a.asm.wh).apply(null,
arguments)},qj=a._emscripten_bind_b2Color___destroy___0=function(){return(qj=a._emscripten_bind_b2Color___destroy___0=a.asm.xh).apply(null,arguments)},rj=a._emscripten_bind_b2ContactEdge_b2ContactEdge_0=function(){return(rj=a._emscripten_bind_b2ContactEdge_b2ContactEdge_0=a.asm.yh).apply(null,arguments)},sj=a._emscripten_bind_b2ContactEdge_get_other_0=function(){return(sj=a._emscripten_bind_b2ContactEdge_get_other_0=a.asm.zh).apply(null,arguments)},tj=a._emscripten_bind_b2ContactEdge_set_other_1=
function(){return(tj=a._emscripten_bind_b2ContactEdge_set_other_1=a.asm.Ah).apply(null,arguments)},uj=a._emscripten_bind_b2ContactEdge_get_contact_0=function(){return(uj=a._emscripten_bind_b2ContactEdge_get_contact_0=a.asm.Bh).apply(null,arguments)},vj=a._emscripten_bind_b2ContactEdge_set_contact_1=function(){return(vj=a._emscripten_bind_b2ContactEdge_set_contact_1=a.asm.Ch).apply(null,arguments)},wj=a._emscripten_bind_b2ContactEdge_get_prev_0=function(){return(wj=a._emscripten_bind_b2ContactEdge_get_prev_0=
a.asm.Dh).apply(null,arguments)},xj=a._emscripten_bind_b2ContactEdge_set_prev_1=function(){return(xj=a._emscripten_bind_b2ContactEdge_set_prev_1=a.asm.Eh).apply(null,arguments)},yj=a._emscripten_bind_b2ContactEdge_get_next_0=function(){return(yj=a._emscripten_bind_b2ContactEdge_get_next_0=a.asm.Fh).apply(null,arguments)},zj=a._emscripten_bind_b2ContactEdge_set_next_1=function(){return(zj=a._emscripten_bind_b2ContactEdge_set_next_1=a.asm.Gh).apply(null,arguments)},Aj=a._emscripten_bind_b2ContactEdge___destroy___0=
function(){return(Aj=a._emscripten_bind_b2ContactEdge___destroy___0=a.asm.Hh).apply(null,arguments)},Bj=a._emscripten_bind_b2ContactFeature_get_indexA_0=function(){return(Bj=a._emscripten_bind_b2ContactFeature_get_indexA_0=a.asm.Ih).apply(null,arguments)},Cj=a._emscripten_bind_b2ContactFeature_set_indexA_1=function(){return(Cj=a._emscripten_bind_b2ContactFeature_set_indexA_1=a.asm.Jh).apply(null,arguments)},Dj=a._emscripten_bind_b2ContactFeature_get_indexB_0=function(){return(Dj=a._emscripten_bind_b2ContactFeature_get_indexB_0=
a.asm.Kh).apply(null,arguments)},Ej=a._emscripten_bind_b2ContactFeature_set_indexB_1=function(){return(Ej=a._emscripten_bind_b2ContactFeature_set_indexB_1=a.asm.Lh).apply(null,arguments)},Fj=a._emscripten_bind_b2ContactFeature_get_typeA_0=function(){return(Fj=a._emscripten_bind_b2ContactFeature_get_typeA_0=a.asm.Mh).apply(null,arguments)},Gj=a._emscripten_bind_b2ContactFeature_set_typeA_1=function(){return(Gj=a._emscripten_bind_b2ContactFeature_set_typeA_1=a.asm.Nh).apply(null,arguments)},Hj=a._emscripten_bind_b2ContactFeature_get_typeB_0=
function(){return(Hj=a._emscripten_bind_b2ContactFeature_get_typeB_0=a.asm.Oh).apply(null,arguments)},Ij=a._emscripten_bind_b2ContactFeature_set_typeB_1=function(){return(Ij=a._emscripten_bind_b2ContactFeature_set_typeB_1=a.asm.Ph).apply(null,arguments)},Jj=a._emscripten_bind_b2ContactFeature___destroy___0=function(){return(Jj=a._emscripten_bind_b2ContactFeature___destroy___0=a.asm.Qh).apply(null,arguments)},Kj=a._emscripten_bind_JSContactFilter_JSContactFilter_0=function(){return(Kj=a._emscripten_bind_JSContactFilter_JSContactFilter_0=
a.asm.Rh).apply(null,arguments)},Lj=a._emscripten_bind_JSContactFilter_ShouldCollide_2=function(){return(Lj=a._emscripten_bind_JSContactFilter_ShouldCollide_2=a.asm.Sh).apply(null,arguments)},Mj=a._emscripten_bind_JSContactFilter___destroy___0=function(){return(Mj=a._emscripten_bind_JSContactFilter___destroy___0=a.asm.Th).apply(null,arguments)},Nj=a._emscripten_bind_b2ContactID_get_cf_0=function(){return(Nj=a._emscripten_bind_b2ContactID_get_cf_0=a.asm.Uh).apply(null,arguments)},Oj=a._emscripten_bind_b2ContactID_set_cf_1=
function(){return(Oj=a._emscripten_bind_b2ContactID_set_cf_1=a.asm.Vh).apply(null,arguments)},Pj=a._emscripten_bind_b2ContactID_get_key_0=function(){return(Pj=a._emscripten_bind_b2ContactID_get_key_0=a.asm.Wh).apply(null,arguments)},Qj=a._emscripten_bind_b2ContactID_set_key_1=function(){return(Qj=a._emscripten_bind_b2ContactID_set_key_1=a.asm.Xh).apply(null,arguments)},Rj=a._emscripten_bind_b2ContactID___destroy___0=function(){return(Rj=a._emscripten_bind_b2ContactID___destroy___0=a.asm.Yh).apply(null,
arguments)},Sj=a._emscripten_bind_b2ContactImpulse_get_normalImpulses_1=function(){return(Sj=a._emscripten_bind_b2ContactImpulse_get_normalImpulses_1=a.asm.Zh).apply(null,arguments)},Tj=a._emscripten_bind_b2ContactImpulse_set_normalImpulses_2=function(){return(Tj=a._emscripten_bind_b2ContactImpulse_set_normalImpulses_2=a.asm._h).apply(null,arguments)},Uj=a._emscripten_bind_b2ContactImpulse_get_tangentImpulses_1=function(){return(Uj=a._emscripten_bind_b2ContactImpulse_get_tangentImpulses_1=a.asm.$h).apply(null,
arguments)},Vj=a._emscripten_bind_b2ContactImpulse_set_tangentImpulses_2=function(){return(Vj=a._emscripten_bind_b2ContactImpulse_set_tangentImpulses_2=a.asm.ai).apply(null,arguments)},Wj=a._emscripten_bind_b2ContactImpulse_get_count_0=function(){return(Wj=a._emscripten_bind_b2ContactImpulse_get_count_0=a.asm.bi).apply(null,arguments)},Xj=a._emscripten_bind_b2ContactImpulse_set_count_1=function(){return(Xj=a._emscripten_bind_b2ContactImpulse_set_count_1=a.asm.ci).apply(null,arguments)},Yj=a._emscripten_bind_b2ContactImpulse___destroy___0=
function(){return(Yj=a._emscripten_bind_b2ContactImpulse___destroy___0=a.asm.di).apply(null,arguments)},Zj=a._emscripten_bind_b2DestructionListener___destroy___0=function(){return(Zj=a._emscripten_bind_b2DestructionListener___destroy___0=a.asm.ei).apply(null,arguments)},ak=a._emscripten_bind_JSDestructionListener_JSDestructionListener_0=function(){return(ak=a._emscripten_bind_JSDestructionListener_JSDestructionListener_0=a.asm.fi).apply(null,arguments)},bk=a._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1=
function(){return(bk=a._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1=a.asm.gi).apply(null,arguments)},ck=a._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1=function(){return(ck=a._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1=a.asm.hi).apply(null,arguments)},dk=a._emscripten_bind_JSDestructionListener___destroy___0=function(){return(dk=a._emscripten_bind_JSDestructionListener___destroy___0=a.asm.ii).apply(null,arguments)},ek=a._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0=
function(){return(ek=a._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0=a.asm.ji).apply(null,arguments)},fk=a._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0=function(){return(fk=a._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0=a.asm.ki).apply(null,arguments)},gk=a._emscripten_bind_b2DistanceJoint_GetLength_0=function(){return(gk=a._emscripten_bind_b2DistanceJoint_GetLength_0=a.asm.li).apply(null,arguments)},hk=a._emscripten_bind_b2DistanceJoint_SetLength_1=function(){return(hk=a._emscripten_bind_b2DistanceJoint_SetLength_1=
a.asm.mi).apply(null,arguments)},ik=a._emscripten_bind_b2DistanceJoint_GetMinLength_0=function(){return(ik=a._emscripten_bind_b2DistanceJoint_GetMinLength_0=a.asm.ni).apply(null,arguments)},jk=a._emscripten_bind_b2DistanceJoint_SetMinLength_1=function(){return(jk=a._emscripten_bind_b2DistanceJoint_SetMinLength_1=a.asm.oi).apply(null,arguments)},kk=a._emscripten_bind_b2DistanceJoint_GetMaxLength_0=function(){return(kk=a._emscripten_bind_b2DistanceJoint_GetMaxLength_0=a.asm.pi).apply(null,arguments)},
lk=a._emscripten_bind_b2DistanceJoint_SetMaxLength_1=function(){return(lk=a._emscripten_bind_b2DistanceJoint_SetMaxLength_1=a.asm.qi).apply(null,arguments)},mk=a._emscripten_bind_b2DistanceJoint_GetCurrentLength_0=function(){return(mk=a._emscripten_bind_b2DistanceJoint_GetCurrentLength_0=a.asm.ri).apply(null,arguments)},nk=a._emscripten_bind_b2DistanceJoint_SetStiffness_1=function(){return(nk=a._emscripten_bind_b2DistanceJoint_SetStiffness_1=a.asm.si).apply(null,arguments)},ok=a._emscripten_bind_b2DistanceJoint_GetStiffness_0=
function(){return(ok=a._emscripten_bind_b2DistanceJoint_GetStiffness_0=a.asm.ti).apply(null,arguments)},pk=a._emscripten_bind_b2DistanceJoint_SetDamping_1=function(){return(pk=a._emscripten_bind_b2DistanceJoint_SetDamping_1=a.asm.ui).apply(null,arguments)},qk=a._emscripten_bind_b2DistanceJoint_GetDamping_0=function(){return(qk=a._emscripten_bind_b2DistanceJoint_GetDamping_0=a.asm.vi).apply(null,arguments)},rk=a._emscripten_bind_b2DistanceJoint_GetType_0=function(){return(rk=a._emscripten_bind_b2DistanceJoint_GetType_0=
a.asm.wi).apply(null,arguments)},sk=a._emscripten_bind_b2DistanceJoint_GetBodyA_0=function(){return(sk=a._emscripten_bind_b2DistanceJoint_GetBodyA_0=a.asm.xi).apply(null,arguments)},tk=a._emscripten_bind_b2DistanceJoint_GetBodyB_0=function(){return(tk=a._emscripten_bind_b2DistanceJoint_GetBodyB_0=a.asm.yi).apply(null,arguments)},uk=a._emscripten_bind_b2DistanceJoint_GetAnchorA_0=function(){return(uk=a._emscripten_bind_b2DistanceJoint_GetAnchorA_0=a.asm.zi).apply(null,arguments)},vk=a._emscripten_bind_b2DistanceJoint_GetAnchorB_0=
function(){return(vk=a._emscripten_bind_b2DistanceJoint_GetAnchorB_0=a.asm.Ai).apply(null,arguments)},wk=a._emscripten_bind_b2DistanceJoint_GetReactionForce_1=function(){return(wk=a._emscripten_bind_b2DistanceJoint_GetReactionForce_1=a.asm.Bi).apply(null,arguments)},xk=a._emscripten_bind_b2DistanceJoint_GetReactionTorque_1=function(){return(xk=a._emscripten_bind_b2DistanceJoint_GetReactionTorque_1=a.asm.Ci).apply(null,arguments)},yk=a._emscripten_bind_b2DistanceJoint_GetNext_0=function(){return(yk=
a._emscripten_bind_b2DistanceJoint_GetNext_0=a.asm.Di).apply(null,arguments)},zk=a._emscripten_bind_b2DistanceJoint_GetUserData_0=function(){return(zk=a._emscripten_bind_b2DistanceJoint_GetUserData_0=a.asm.Ei).apply(null,arguments)},Ak=a._emscripten_bind_b2DistanceJoint_GetCollideConnected_0=function(){return(Ak=a._emscripten_bind_b2DistanceJoint_GetCollideConnected_0=a.asm.Fi).apply(null,arguments)},Bk=a._emscripten_bind_b2DistanceJoint___destroy___0=function(){return(Bk=a._emscripten_bind_b2DistanceJoint___destroy___0=
a.asm.Gi).apply(null,arguments)},Ck=a._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0=function(){return(Ck=a._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0=a.asm.Hi).apply(null,arguments)},Dk=a._emscripten_bind_b2DistanceJointDef_Initialize_4=function(){return(Dk=a._emscripten_bind_b2DistanceJointDef_Initialize_4=a.asm.Ii).apply(null,arguments)},Ek=a._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0=function(){return(Ek=a._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0=
a.asm.Ji).apply(null,arguments)},Fk=a._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1=function(){return(Fk=a._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1=a.asm.Ki).apply(null,arguments)},Gk=a._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0=function(){return(Gk=a._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0=a.asm.Li).apply(null,arguments)},Hk=a._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1=function(){return(Hk=a._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1=
a.asm.Mi).apply(null,arguments)},Ik=a._emscripten_bind_b2DistanceJointDef_get_length_0=function(){return(Ik=a._emscripten_bind_b2DistanceJointDef_get_length_0=a.asm.Ni).apply(null,arguments)},Jk=a._emscripten_bind_b2DistanceJointDef_set_length_1=function(){return(Jk=a._emscripten_bind_b2DistanceJointDef_set_length_1=a.asm.Oi).apply(null,arguments)},Kk=a._emscripten_bind_b2DistanceJointDef_get_minLength_0=function(){return(Kk=a._emscripten_bind_b2DistanceJointDef_get_minLength_0=a.asm.Pi).apply(null,
arguments)},Lk=a._emscripten_bind_b2DistanceJointDef_set_minLength_1=function(){return(Lk=a._emscripten_bind_b2DistanceJointDef_set_minLength_1=a.asm.Qi).apply(null,arguments)},Mk=a._emscripten_bind_b2DistanceJointDef_get_maxLength_0=function(){return(Mk=a._emscripten_bind_b2DistanceJointDef_get_maxLength_0=a.asm.Ri).apply(null,arguments)},Nk=a._emscripten_bind_b2DistanceJointDef_set_maxLength_1=function(){return(Nk=a._emscripten_bind_b2DistanceJointDef_set_maxLength_1=a.asm.Si).apply(null,arguments)},
Ok=a._emscripten_bind_b2DistanceJointDef_get_stiffness_0=function(){return(Ok=a._emscripten_bind_b2DistanceJointDef_get_stiffness_0=a.asm.Ti).apply(null,arguments)},Pk=a._emscripten_bind_b2DistanceJointDef_set_stiffness_1=function(){return(Pk=a._emscripten_bind_b2DistanceJointDef_set_stiffness_1=a.asm.Ui).apply(null,arguments)},Qk=a._emscripten_bind_b2DistanceJointDef_get_damping_0=function(){return(Qk=a._emscripten_bind_b2DistanceJointDef_get_damping_0=a.asm.Vi).apply(null,arguments)},Rk=a._emscripten_bind_b2DistanceJointDef_set_damping_1=
function(){return(Rk=a._emscripten_bind_b2DistanceJointDef_set_damping_1=a.asm.Wi).apply(null,arguments)},Sk=a._emscripten_bind_b2DistanceJointDef_get_type_0=function(){return(Sk=a._emscripten_bind_b2DistanceJointDef_get_type_0=a.asm.Xi).apply(null,arguments)},Tk=a._emscripten_bind_b2DistanceJointDef_set_type_1=function(){return(Tk=a._emscripten_bind_b2DistanceJointDef_set_type_1=a.asm.Yi).apply(null,arguments)},Uk=a._emscripten_bind_b2DistanceJointDef_get_userData_0=function(){return(Uk=a._emscripten_bind_b2DistanceJointDef_get_userData_0=
a.asm.Zi).apply(null,arguments)},Vk=a._emscripten_bind_b2DistanceJointDef_set_userData_1=function(){return(Vk=a._emscripten_bind_b2DistanceJointDef_set_userData_1=a.asm._i).apply(null,arguments)},Wk=a._emscripten_bind_b2DistanceJointDef_get_bodyA_0=function(){return(Wk=a._emscripten_bind_b2DistanceJointDef_get_bodyA_0=a.asm.$i).apply(null,arguments)},Xk=a._emscripten_bind_b2DistanceJointDef_set_bodyA_1=function(){return(Xk=a._emscripten_bind_b2DistanceJointDef_set_bodyA_1=a.asm.aj).apply(null,arguments)},
Yk=a._emscripten_bind_b2DistanceJointDef_get_bodyB_0=function(){return(Yk=a._emscripten_bind_b2DistanceJointDef_get_bodyB_0=a.asm.bj).apply(null,arguments)},Zk=a._emscripten_bind_b2DistanceJointDef_set_bodyB_1=function(){return(Zk=a._emscripten_bind_b2DistanceJointDef_set_bodyB_1=a.asm.cj).apply(null,arguments)},$k=a._emscripten_bind_b2DistanceJointDef_get_collideConnected_0=function(){return($k=a._emscripten_bind_b2DistanceJointDef_get_collideConnected_0=a.asm.dj).apply(null,arguments)},al=a._emscripten_bind_b2DistanceJointDef_set_collideConnected_1=
function(){return(al=a._emscripten_bind_b2DistanceJointDef_set_collideConnected_1=a.asm.ej).apply(null,arguments)},bl=a._emscripten_bind_b2DistanceJointDef___destroy___0=function(){return(bl=a._emscripten_bind_b2DistanceJointDef___destroy___0=a.asm.fj).apply(null,arguments)},cl=a._emscripten_bind_JSDraw_JSDraw_0=function(){return(cl=a._emscripten_bind_JSDraw_JSDraw_0=a.asm.gj).apply(null,arguments)},dl=a._emscripten_bind_JSDraw_DrawPolygon_3=function(){return(dl=a._emscripten_bind_JSDraw_DrawPolygon_3=
a.asm.hj).apply(null,arguments)},el=a._emscripten_bind_JSDraw_DrawSolidPolygon_3=function(){return(el=a._emscripten_bind_JSDraw_DrawSolidPolygon_3=a.asm.ij).apply(null,arguments)},fl=a._emscripten_bind_JSDraw_DrawCircle_3=function(){return(fl=a._emscripten_bind_JSDraw_DrawCircle_3=a.asm.jj).apply(null,arguments)},gl=a._emscripten_bind_JSDraw_DrawSolidCircle_4=function(){return(gl=a._emscripten_bind_JSDraw_DrawSolidCircle_4=a.asm.kj).apply(null,arguments)},hl=a._emscripten_bind_JSDraw_DrawSegment_3=
function(){return(hl=a._emscripten_bind_JSDraw_DrawSegment_3=a.asm.lj).apply(null,arguments)},il=a._emscripten_bind_JSDraw_DrawTransform_1=function(){return(il=a._emscripten_bind_JSDraw_DrawTransform_1=a.asm.mj).apply(null,arguments)},jl=a._emscripten_bind_JSDraw_DrawPoint_3=function(){return(jl=a._emscripten_bind_JSDraw_DrawPoint_3=a.asm.nj).apply(null,arguments)},kl=a._emscripten_bind_JSDraw___destroy___0=function(){return(kl=a._emscripten_bind_JSDraw___destroy___0=a.asm.oj).apply(null,arguments)},
ll=a._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0=function(){return(ll=a._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0=a.asm.pj).apply(null,arguments)},ml=a._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0=function(){return(ml=a._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0=a.asm.qj).apply(null,arguments)},nl=a._emscripten_bind_b2FrictionJoint_SetMaxForce_1=function(){return(nl=a._emscripten_bind_b2FrictionJoint_SetMaxForce_1=a.asm.rj).apply(null,arguments)},ol=a._emscripten_bind_b2FrictionJoint_GetMaxForce_0=
function(){return(ol=a._emscripten_bind_b2FrictionJoint_GetMaxForce_0=a.asm.sj).apply(null,arguments)},pl=a._emscripten_bind_b2FrictionJoint_SetMaxTorque_1=function(){return(pl=a._emscripten_bind_b2FrictionJoint_SetMaxTorque_1=a.asm.tj).apply(null,arguments)},ql=a._emscripten_bind_b2FrictionJoint_GetMaxTorque_0=function(){return(ql=a._emscripten_bind_b2FrictionJoint_GetMaxTorque_0=a.asm.uj).apply(null,arguments)},rl=a._emscripten_bind_b2FrictionJoint_GetType_0=function(){return(rl=a._emscripten_bind_b2FrictionJoint_GetType_0=
a.asm.vj).apply(null,arguments)},sl=a._emscripten_bind_b2FrictionJoint_GetBodyA_0=function(){return(sl=a._emscripten_bind_b2FrictionJoint_GetBodyA_0=a.asm.wj).apply(null,arguments)},tl=a._emscripten_bind_b2FrictionJoint_GetBodyB_0=function(){return(tl=a._emscripten_bind_b2FrictionJoint_GetBodyB_0=a.asm.xj).apply(null,arguments)},ul=a._emscripten_bind_b2FrictionJoint_GetAnchorA_0=function(){return(ul=a._emscripten_bind_b2FrictionJoint_GetAnchorA_0=a.asm.yj).apply(null,arguments)},vl=a._emscripten_bind_b2FrictionJoint_GetAnchorB_0=
function(){return(vl=a._emscripten_bind_b2FrictionJoint_GetAnchorB_0=a.asm.zj).apply(null,arguments)},wl=a._emscripten_bind_b2FrictionJoint_GetReactionForce_1=function(){return(wl=a._emscripten_bind_b2FrictionJoint_GetReactionForce_1=a.asm.Aj).apply(null,arguments)},xl=a._emscripten_bind_b2FrictionJoint_GetReactionTorque_1=function(){return(xl=a._emscripten_bind_b2FrictionJoint_GetReactionTorque_1=a.asm.Bj).apply(null,arguments)},yl=a._emscripten_bind_b2FrictionJoint_GetNext_0=function(){return(yl=
a._emscripten_bind_b2FrictionJoint_GetNext_0=a.asm.Cj).apply(null,arguments)},zl=a._emscripten_bind_b2FrictionJoint_GetUserData_0=function(){return(zl=a._emscripten_bind_b2FrictionJoint_GetUserData_0=a.asm.Dj).apply(null,arguments)},Al=a._emscripten_bind_b2FrictionJoint_GetCollideConnected_0=function(){return(Al=a._emscripten_bind_b2FrictionJoint_GetCollideConnected_0=a.asm.Ej).apply(null,arguments)},Bl=a._emscripten_bind_b2FrictionJoint___destroy___0=function(){return(Bl=a._emscripten_bind_b2FrictionJoint___destroy___0=
a.asm.Fj).apply(null,arguments)},Cl=a._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0=function(){return(Cl=a._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0=a.asm.Gj).apply(null,arguments)},Dl=a._emscripten_bind_b2FrictionJointDef_Initialize_3=function(){return(Dl=a._emscripten_bind_b2FrictionJointDef_Initialize_3=a.asm.Hj).apply(null,arguments)},El=a._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0=function(){return(El=a._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0=
a.asm.Ij).apply(null,arguments)},Fl=a._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1=function(){return(Fl=a._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1=a.asm.Jj).apply(null,arguments)},Gl=a._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0=function(){return(Gl=a._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0=a.asm.Kj).apply(null,arguments)},Hl=a._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1=function(){return(Hl=a._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1=
a.asm.Lj).apply(null,arguments)},Il=a._emscripten_bind_b2FrictionJointDef_get_maxForce_0=function(){return(Il=a._emscripten_bind_b2FrictionJointDef_get_maxForce_0=a.asm.Mj).apply(null,arguments)},Jl=a._emscripten_bind_b2FrictionJointDef_set_maxForce_1=function(){return(Jl=a._emscripten_bind_b2FrictionJointDef_set_maxForce_1=a.asm.Nj).apply(null,arguments)},Kl=a._emscripten_bind_b2FrictionJointDef_get_maxTorque_0=function(){return(Kl=a._emscripten_bind_b2FrictionJointDef_get_maxTorque_0=a.asm.Oj).apply(null,
arguments)},Ll=a._emscripten_bind_b2FrictionJointDef_set_maxTorque_1=function(){return(Ll=a._emscripten_bind_b2FrictionJointDef_set_maxTorque_1=a.asm.Pj).apply(null,arguments)},Ml=a._emscripten_bind_b2FrictionJointDef_get_type_0=function(){return(Ml=a._emscripten_bind_b2FrictionJointDef_get_type_0=a.asm.Qj).apply(null,arguments)},Nl=a._emscripten_bind_b2FrictionJointDef_set_type_1=function(){return(Nl=a._emscripten_bind_b2FrictionJointDef_set_type_1=a.asm.Rj).apply(null,arguments)},Ol=a._emscripten_bind_b2FrictionJointDef_get_userData_0=
function(){return(Ol=a._emscripten_bind_b2FrictionJointDef_get_userData_0=a.asm.Sj).apply(null,arguments)},Pl=a._emscripten_bind_b2FrictionJointDef_set_userData_1=function(){return(Pl=a._emscripten_bind_b2FrictionJointDef_set_userData_1=a.asm.Tj).apply(null,arguments)},Ql=a._emscripten_bind_b2FrictionJointDef_get_bodyA_0=function(){return(Ql=a._emscripten_bind_b2FrictionJointDef_get_bodyA_0=a.asm.Uj).apply(null,arguments)},Rl=a._emscripten_bind_b2FrictionJointDef_set_bodyA_1=function(){return(Rl=
a._emscripten_bind_b2FrictionJointDef_set_bodyA_1=a.asm.Vj).apply(null,arguments)},Sl=a._emscripten_bind_b2FrictionJointDef_get_bodyB_0=function(){return(Sl=a._emscripten_bind_b2FrictionJointDef_get_bodyB_0=a.asm.Wj).apply(null,arguments)},Tl=a._emscripten_bind_b2FrictionJointDef_set_bodyB_1=function(){return(Tl=a._emscripten_bind_b2FrictionJointDef_set_bodyB_1=a.asm.Xj).apply(null,arguments)},Ul=a._emscripten_bind_b2FrictionJointDef_get_collideConnected_0=function(){return(Ul=a._emscripten_bind_b2FrictionJointDef_get_collideConnected_0=
a.asm.Yj).apply(null,arguments)},Vl=a._emscripten_bind_b2FrictionJointDef_set_collideConnected_1=function(){return(Vl=a._emscripten_bind_b2FrictionJointDef_set_collideConnected_1=a.asm.Zj).apply(null,arguments)},Wl=a._emscripten_bind_b2FrictionJointDef___destroy___0=function(){return(Wl=a._emscripten_bind_b2FrictionJointDef___destroy___0=a.asm._j).apply(null,arguments)},Xl=a._emscripten_bind_b2GearJoint_GetJoint1_0=function(){return(Xl=a._emscripten_bind_b2GearJoint_GetJoint1_0=a.asm.$j).apply(null,
arguments)},Yl=a._emscripten_bind_b2GearJoint_GetJoint2_0=function(){return(Yl=a._emscripten_bind_b2GearJoint_GetJoint2_0=a.asm.ak).apply(null,arguments)},Zl=a._emscripten_bind_b2GearJoint_SetRatio_1=function(){return(Zl=a._emscripten_bind_b2GearJoint_SetRatio_1=a.asm.bk).apply(null,arguments)},$l=a._emscripten_bind_b2GearJoint_GetRatio_0=function(){return($l=a._emscripten_bind_b2GearJoint_GetRatio_0=a.asm.ck).apply(null,arguments)},am=a._emscripten_bind_b2GearJoint_GetType_0=function(){return(am=
a._emscripten_bind_b2GearJoint_GetType_0=a.asm.dk).apply(null,arguments)},bm=a._emscripten_bind_b2GearJoint_GetBodyA_0=function(){return(bm=a._emscripten_bind_b2GearJoint_GetBodyA_0=a.asm.ek).apply(null,arguments)},cm=a._emscripten_bind_b2GearJoint_GetBodyB_0=function(){return(cm=a._emscripten_bind_b2GearJoint_GetBodyB_0=a.asm.fk).apply(null,arguments)},dm=a._emscripten_bind_b2GearJoint_GetAnchorA_0=function(){return(dm=a._emscripten_bind_b2GearJoint_GetAnchorA_0=a.asm.gk).apply(null,arguments)},
em=a._emscripten_bind_b2GearJoint_GetAnchorB_0=function(){return(em=a._emscripten_bind_b2GearJoint_GetAnchorB_0=a.asm.hk).apply(null,arguments)},fm=a._emscripten_bind_b2GearJoint_GetReactionForce_1=function(){return(fm=a._emscripten_bind_b2GearJoint_GetReactionForce_1=a.asm.ik).apply(null,arguments)},gm=a._emscripten_bind_b2GearJoint_GetReactionTorque_1=function(){return(gm=a._emscripten_bind_b2GearJoint_GetReactionTorque_1=a.asm.jk).apply(null,arguments)},hm=a._emscripten_bind_b2GearJoint_GetNext_0=
function(){return(hm=a._emscripten_bind_b2GearJoint_GetNext_0=a.asm.kk).apply(null,arguments)},im=a._emscripten_bind_b2GearJoint_GetUserData_0=function(){return(im=a._emscripten_bind_b2GearJoint_GetUserData_0=a.asm.lk).apply(null,arguments)},jm=a._emscripten_bind_b2GearJoint_GetCollideConnected_0=function(){return(jm=a._emscripten_bind_b2GearJoint_GetCollideConnected_0=a.asm.mk).apply(null,arguments)},km=a._emscripten_bind_b2GearJoint___destroy___0=function(){return(km=a._emscripten_bind_b2GearJoint___destroy___0=
a.asm.nk).apply(null,arguments)},lm=a._emscripten_bind_b2GearJointDef_b2GearJointDef_0=function(){return(lm=a._emscripten_bind_b2GearJointDef_b2GearJointDef_0=a.asm.ok).apply(null,arguments)},mm=a._emscripten_bind_b2GearJointDef_get_joint1_0=function(){return(mm=a._emscripten_bind_b2GearJointDef_get_joint1_0=a.asm.pk).apply(null,arguments)},nm=a._emscripten_bind_b2GearJointDef_set_joint1_1=function(){return(nm=a._emscripten_bind_b2GearJointDef_set_joint1_1=a.asm.qk).apply(null,arguments)},om=a._emscripten_bind_b2GearJointDef_get_joint2_0=
function(){return(om=a._emscripten_bind_b2GearJointDef_get_joint2_0=a.asm.rk).apply(null,arguments)},pm=a._emscripten_bind_b2GearJointDef_set_joint2_1=function(){return(pm=a._emscripten_bind_b2GearJointDef_set_joint2_1=a.asm.sk).apply(null,arguments)},qm=a._emscripten_bind_b2GearJointDef_get_ratio_0=function(){return(qm=a._emscripten_bind_b2GearJointDef_get_ratio_0=a.asm.tk).apply(null,arguments)},rm=a._emscripten_bind_b2GearJointDef_set_ratio_1=function(){return(rm=a._emscripten_bind_b2GearJointDef_set_ratio_1=
a.asm.uk).apply(null,arguments)},sm=a._emscripten_bind_b2GearJointDef_get_type_0=function(){return(sm=a._emscripten_bind_b2GearJointDef_get_type_0=a.asm.vk).apply(null,arguments)},tm=a._emscripten_bind_b2GearJointDef_set_type_1=function(){return(tm=a._emscripten_bind_b2GearJointDef_set_type_1=a.asm.wk).apply(null,arguments)},um=a._emscripten_bind_b2GearJointDef_get_userData_0=function(){return(um=a._emscripten_bind_b2GearJointDef_get_userData_0=a.asm.xk).apply(null,arguments)},wm=a._emscripten_bind_b2GearJointDef_set_userData_1=
function(){return(wm=a._emscripten_bind_b2GearJointDef_set_userData_1=a.asm.yk).apply(null,arguments)},xm=a._emscripten_bind_b2GearJointDef_get_bodyA_0=function(){return(xm=a._emscripten_bind_b2GearJointDef_get_bodyA_0=a.asm.zk).apply(null,arguments)},ym=a._emscripten_bind_b2GearJointDef_set_bodyA_1=function(){return(ym=a._emscripten_bind_b2GearJointDef_set_bodyA_1=a.asm.Ak).apply(null,arguments)},zm=a._emscripten_bind_b2GearJointDef_get_bodyB_0=function(){return(zm=a._emscripten_bind_b2GearJointDef_get_bodyB_0=
a.asm.Bk).apply(null,arguments)},Am=a._emscripten_bind_b2GearJointDef_set_bodyB_1=function(){return(Am=a._emscripten_bind_b2GearJointDef_set_bodyB_1=a.asm.Ck).apply(null,arguments)},Bm=a._emscripten_bind_b2GearJointDef_get_collideConnected_0=function(){return(Bm=a._emscripten_bind_b2GearJointDef_get_collideConnected_0=a.asm.Dk).apply(null,arguments)},Cm=a._emscripten_bind_b2GearJointDef_set_collideConnected_1=function(){return(Cm=a._emscripten_bind_b2GearJointDef_set_collideConnected_1=a.asm.Ek).apply(null,
arguments)},Dm=a._emscripten_bind_b2GearJointDef___destroy___0=function(){return(Dm=a._emscripten_bind_b2GearJointDef___destroy___0=a.asm.Fk).apply(null,arguments)},Em=a._emscripten_bind_b2JointEdge_b2JointEdge_0=function(){return(Em=a._emscripten_bind_b2JointEdge_b2JointEdge_0=a.asm.Gk).apply(null,arguments)},Fm=a._emscripten_bind_b2JointEdge_get_other_0=function(){return(Fm=a._emscripten_bind_b2JointEdge_get_other_0=a.asm.Hk).apply(null,arguments)},Gm=a._emscripten_bind_b2JointEdge_set_other_1=
function(){return(Gm=a._emscripten_bind_b2JointEdge_set_other_1=a.asm.Ik).apply(null,arguments)},Hm=a._emscripten_bind_b2JointEdge_get_joint_0=function(){return(Hm=a._emscripten_bind_b2JointEdge_get_joint_0=a.asm.Jk).apply(null,arguments)},Im=a._emscripten_bind_b2JointEdge_set_joint_1=function(){return(Im=a._emscripten_bind_b2JointEdge_set_joint_1=a.asm.Kk).apply(null,arguments)},Jm=a._emscripten_bind_b2JointEdge_get_prev_0=function(){return(Jm=a._emscripten_bind_b2JointEdge_get_prev_0=a.asm.Lk).apply(null,
arguments)},Km=a._emscripten_bind_b2JointEdge_set_prev_1=function(){return(Km=a._emscripten_bind_b2JointEdge_set_prev_1=a.asm.Mk).apply(null,arguments)},Lm=a._emscripten_bind_b2JointEdge_get_next_0=function(){return(Lm=a._emscripten_bind_b2JointEdge_get_next_0=a.asm.Nk).apply(null,arguments)},Mm=a._emscripten_bind_b2JointEdge_set_next_1=function(){return(Mm=a._emscripten_bind_b2JointEdge_set_next_1=a.asm.Ok).apply(null,arguments)},Nm=a._emscripten_bind_b2JointEdge___destroy___0=function(){return(Nm=
a._emscripten_bind_b2JointEdge___destroy___0=a.asm.Pk).apply(null,arguments)},Om=a._emscripten_bind_b2Manifold_b2Manifold_0=function(){return(Om=a._emscripten_bind_b2Manifold_b2Manifold_0=a.asm.Qk).apply(null,arguments)},Pm=a._emscripten_bind_b2Manifold_get_points_1=function(){return(Pm=a._emscripten_bind_b2Manifold_get_points_1=a.asm.Rk).apply(null,arguments)},Qm=a._emscripten_bind_b2Manifold_set_points_2=function(){return(Qm=a._emscripten_bind_b2Manifold_set_points_2=a.asm.Sk).apply(null,arguments)},
Rm=a._emscripten_bind_b2Manifold_get_localNormal_0=function(){return(Rm=a._emscripten_bind_b2Manifold_get_localNormal_0=a.asm.Tk).apply(null,arguments)},Sm=a._emscripten_bind_b2Manifold_set_localNormal_1=function(){return(Sm=a._emscripten_bind_b2Manifold_set_localNormal_1=a.asm.Uk).apply(null,arguments)},Tm=a._emscripten_bind_b2Manifold_get_localPoint_0=function(){return(Tm=a._emscripten_bind_b2Manifold_get_localPoint_0=a.asm.Vk).apply(null,arguments)},Um=a._emscripten_bind_b2Manifold_set_localPoint_1=
function(){return(Um=a._emscripten_bind_b2Manifold_set_localPoint_1=a.asm.Wk).apply(null,arguments)},Vm=a._emscripten_bind_b2Manifold_get_type_0=function(){return(Vm=a._emscripten_bind_b2Manifold_get_type_0=a.asm.Xk).apply(null,arguments)},Wm=a._emscripten_bind_b2Manifold_set_type_1=function(){return(Wm=a._emscripten_bind_b2Manifold_set_type_1=a.asm.Yk).apply(null,arguments)},Xm=a._emscripten_bind_b2Manifold_get_pointCount_0=function(){return(Xm=a._emscripten_bind_b2Manifold_get_pointCount_0=a.asm.Zk).apply(null,
arguments)},Ym=a._emscripten_bind_b2Manifold_set_pointCount_1=function(){return(Ym=a._emscripten_bind_b2Manifold_set_pointCount_1=a.asm._k).apply(null,arguments)},Zm=a._emscripten_bind_b2Manifold___destroy___0=function(){return(Zm=a._emscripten_bind_b2Manifold___destroy___0=a.asm.$k).apply(null,arguments)},$m=a._emscripten_bind_b2WorldManifold_b2WorldManifold_0=function(){return($m=a._emscripten_bind_b2WorldManifold_b2WorldManifold_0=a.asm.al).apply(null,arguments)},an=a._emscripten_bind_b2WorldManifold_Initialize_5=
function(){return(an=a._emscripten_bind_b2WorldManifold_Initialize_5=a.asm.bl).apply(null,arguments)},bn=a._emscripten_bind_b2WorldManifold_get_normal_0=function(){return(bn=a._emscripten_bind_b2WorldManifold_get_normal_0=a.asm.cl).apply(null,arguments)},cn=a._emscripten_bind_b2WorldManifold_set_normal_1=function(){return(cn=a._emscripten_bind_b2WorldManifold_set_normal_1=a.asm.dl).apply(null,arguments)},dn=a._emscripten_bind_b2WorldManifold_get_points_1=function(){return(dn=a._emscripten_bind_b2WorldManifold_get_points_1=
a.asm.el).apply(null,arguments)},en=a._emscripten_bind_b2WorldManifold_set_points_2=function(){return(en=a._emscripten_bind_b2WorldManifold_set_points_2=a.asm.fl).apply(null,arguments)},fn=a._emscripten_bind_b2WorldManifold_get_separations_1=function(){return(fn=a._emscripten_bind_b2WorldManifold_get_separations_1=a.asm.gl).apply(null,arguments)},gn=a._emscripten_bind_b2WorldManifold_set_separations_2=function(){return(gn=a._emscripten_bind_b2WorldManifold_set_separations_2=a.asm.hl).apply(null,arguments)},
hn=a._emscripten_bind_b2WorldManifold___destroy___0=function(){return(hn=a._emscripten_bind_b2WorldManifold___destroy___0=a.asm.il).apply(null,arguments)},jn=a._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0=function(){return(jn=a._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0=a.asm.jl).apply(null,arguments)},kn=a._emscripten_bind_b2ManifoldPoint_get_localPoint_0=function(){return(kn=a._emscripten_bind_b2ManifoldPoint_get_localPoint_0=a.asm.kl).apply(null,arguments)},ln=a._emscripten_bind_b2ManifoldPoint_set_localPoint_1=
function(){return(ln=a._emscripten_bind_b2ManifoldPoint_set_localPoint_1=a.asm.ll).apply(null,arguments)},mn=a._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0=function(){return(mn=a._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0=a.asm.ml).apply(null,arguments)},nn=a._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1=function(){return(nn=a._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1=a.asm.nl).apply(null,arguments)},on=a._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0=function(){return(on=
a._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0=a.asm.ol).apply(null,arguments)},pn=a._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1=function(){return(pn=a._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1=a.asm.pl).apply(null,arguments)},qn=a._emscripten_bind_b2ManifoldPoint_get_id_0=function(){return(qn=a._emscripten_bind_b2ManifoldPoint_get_id_0=a.asm.ql).apply(null,arguments)},rn=a._emscripten_bind_b2ManifoldPoint_set_id_1=function(){return(rn=a._emscripten_bind_b2ManifoldPoint_set_id_1=
a.asm.rl).apply(null,arguments)},sn=a._emscripten_bind_b2ManifoldPoint___destroy___0=function(){return(sn=a._emscripten_bind_b2ManifoldPoint___destroy___0=a.asm.sl).apply(null,arguments)},tn=a._emscripten_bind_b2Mat22_b2Mat22_0=function(){return(tn=a._emscripten_bind_b2Mat22_b2Mat22_0=a.asm.tl).apply(null,arguments)},un=a._emscripten_bind_b2Mat22_b2Mat22_2=function(){return(un=a._emscripten_bind_b2Mat22_b2Mat22_2=a.asm.ul).apply(null,arguments)},vn=a._emscripten_bind_b2Mat22_b2Mat22_4=function(){return(vn=
a._emscripten_bind_b2Mat22_b2Mat22_4=a.asm.vl).apply(null,arguments)},wn=a._emscripten_bind_b2Mat22_Set_2=function(){return(wn=a._emscripten_bind_b2Mat22_Set_2=a.asm.wl).apply(null,arguments)},xn=a._emscripten_bind_b2Mat22_SetIdentity_0=function(){return(xn=a._emscripten_bind_b2Mat22_SetIdentity_0=a.asm.xl).apply(null,arguments)},yn=a._emscripten_bind_b2Mat22_SetZero_0=function(){return(yn=a._emscripten_bind_b2Mat22_SetZero_0=a.asm.yl).apply(null,arguments)},zn=a._emscripten_bind_b2Mat22_GetInverse_0=
function(){return(zn=a._emscripten_bind_b2Mat22_GetInverse_0=a.asm.zl).apply(null,arguments)},An=a._emscripten_bind_b2Mat22_Solve_1=function(){return(An=a._emscripten_bind_b2Mat22_Solve_1=a.asm.Al).apply(null,arguments)},Bn=a._emscripten_bind_b2Mat22_get_ex_0=function(){return(Bn=a._emscripten_bind_b2Mat22_get_ex_0=a.asm.Bl).apply(null,arguments)},Cn=a._emscripten_bind_b2Mat22_set_ex_1=function(){return(Cn=a._emscripten_bind_b2Mat22_set_ex_1=a.asm.Cl).apply(null,arguments)},Dn=a._emscripten_bind_b2Mat22_get_ey_0=
function(){return(Dn=a._emscripten_bind_b2Mat22_get_ey_0=a.asm.Dl).apply(null,arguments)},En=a._emscripten_bind_b2Mat22_set_ey_1=function(){return(En=a._emscripten_bind_b2Mat22_set_ey_1=a.asm.El).apply(null,arguments)},Fn=a._emscripten_bind_b2Mat22___destroy___0=function(){return(Fn=a._emscripten_bind_b2Mat22___destroy___0=a.asm.Fl).apply(null,arguments)},Gn=a._emscripten_bind_b2Mat33_b2Mat33_0=function(){return(Gn=a._emscripten_bind_b2Mat33_b2Mat33_0=a.asm.Gl).apply(null,arguments)},Hn=a._emscripten_bind_b2Mat33_b2Mat33_3=
function(){return(Hn=a._emscripten_bind_b2Mat33_b2Mat33_3=a.asm.Hl).apply(null,arguments)},In=a._emscripten_bind_b2Mat33_SetZero_0=function(){return(In=a._emscripten_bind_b2Mat33_SetZero_0=a.asm.Il).apply(null,arguments)},Jn=a._emscripten_bind_b2Mat33_Solve33_1=function(){return(Jn=a._emscripten_bind_b2Mat33_Solve33_1=a.asm.Jl).apply(null,arguments)},Kn=a._emscripten_bind_b2Mat33_Solve22_1=function(){return(Kn=a._emscripten_bind_b2Mat33_Solve22_1=a.asm.Kl).apply(null,arguments)},Ln=a._emscripten_bind_b2Mat33_GetInverse22_1=
function(){return(Ln=a._emscripten_bind_b2Mat33_GetInverse22_1=a.asm.Ll).apply(null,arguments)},Mn=a._emscripten_bind_b2Mat33_GetSymInverse33_1=function(){return(Mn=a._emscripten_bind_b2Mat33_GetSymInverse33_1=a.asm.Ml).apply(null,arguments)},Nn=a._emscripten_bind_b2Mat33_get_ex_0=function(){return(Nn=a._emscripten_bind_b2Mat33_get_ex_0=a.asm.Nl).apply(null,arguments)},On=a._emscripten_bind_b2Mat33_set_ex_1=function(){return(On=a._emscripten_bind_b2Mat33_set_ex_1=a.asm.Ol).apply(null,arguments)},
Pn=a._emscripten_bind_b2Mat33_get_ey_0=function(){return(Pn=a._emscripten_bind_b2Mat33_get_ey_0=a.asm.Pl).apply(null,arguments)},Qn=a._emscripten_bind_b2Mat33_set_ey_1=function(){return(Qn=a._emscripten_bind_b2Mat33_set_ey_1=a.asm.Ql).apply(null,arguments)},Rn=a._emscripten_bind_b2Mat33_get_ez_0=function(){return(Rn=a._emscripten_bind_b2Mat33_get_ez_0=a.asm.Rl).apply(null,arguments)},Sn=a._emscripten_bind_b2Mat33_set_ez_1=function(){return(Sn=a._emscripten_bind_b2Mat33_set_ez_1=a.asm.Sl).apply(null,
arguments)},Tn=a._emscripten_bind_b2Mat33___destroy___0=function(){return(Tn=a._emscripten_bind_b2Mat33___destroy___0=a.asm.Tl).apply(null,arguments)},Un=a._emscripten_bind_b2MouseJoint_SetTarget_1=function(){return(Un=a._emscripten_bind_b2MouseJoint_SetTarget_1=a.asm.Ul).apply(null,arguments)},Vn=a._emscripten_bind_b2MouseJoint_GetTarget_0=function(){return(Vn=a._emscripten_bind_b2MouseJoint_GetTarget_0=a.asm.Vl).apply(null,arguments)},Wn=a._emscripten_bind_b2MouseJoint_SetMaxForce_1=function(){return(Wn=
a._emscripten_bind_b2MouseJoint_SetMaxForce_1=a.asm.Wl).apply(null,arguments)},Xn=a._emscripten_bind_b2MouseJoint_GetMaxForce_0=function(){return(Xn=a._emscripten_bind_b2MouseJoint_GetMaxForce_0=a.asm.Xl).apply(null,arguments)},Yn=a._emscripten_bind_b2MouseJoint_SetStiffness_1=function(){return(Yn=a._emscripten_bind_b2MouseJoint_SetStiffness_1=a.asm.Yl).apply(null,arguments)},Zn=a._emscripten_bind_b2MouseJoint_GetStiffness_0=function(){return(Zn=a._emscripten_bind_b2MouseJoint_GetStiffness_0=a.asm.Zl).apply(null,
arguments)},$n=a._emscripten_bind_b2MouseJoint_SetDamping_1=function(){return($n=a._emscripten_bind_b2MouseJoint_SetDamping_1=a.asm._l).apply(null,arguments)},ao=a._emscripten_bind_b2MouseJoint_GetDamping_0=function(){return(ao=a._emscripten_bind_b2MouseJoint_GetDamping_0=a.asm.$l).apply(null,arguments)},bo=a._emscripten_bind_b2MouseJoint_GetType_0=function(){return(bo=a._emscripten_bind_b2MouseJoint_GetType_0=a.asm.am).apply(null,arguments)},co=a._emscripten_bind_b2MouseJoint_GetBodyA_0=function(){return(co=
a._emscripten_bind_b2MouseJoint_GetBodyA_0=a.asm.bm).apply(null,arguments)},eo=a._emscripten_bind_b2MouseJoint_GetBodyB_0=function(){return(eo=a._emscripten_bind_b2MouseJoint_GetBodyB_0=a.asm.cm).apply(null,arguments)},fo=a._emscripten_bind_b2MouseJoint_GetAnchorA_0=function(){return(fo=a._emscripten_bind_b2MouseJoint_GetAnchorA_0=a.asm.dm).apply(null,arguments)},go=a._emscripten_bind_b2MouseJoint_GetAnchorB_0=function(){return(go=a._emscripten_bind_b2MouseJoint_GetAnchorB_0=a.asm.em).apply(null,
arguments)},ho=a._emscripten_bind_b2MouseJoint_GetReactionForce_1=function(){return(ho=a._emscripten_bind_b2MouseJoint_GetReactionForce_1=a.asm.fm).apply(null,arguments)},io=a._emscripten_bind_b2MouseJoint_GetReactionTorque_1=function(){return(io=a._emscripten_bind_b2MouseJoint_GetReactionTorque_1=a.asm.gm).apply(null,arguments)},jo=a._emscripten_bind_b2MouseJoint_GetNext_0=function(){return(jo=a._emscripten_bind_b2MouseJoint_GetNext_0=a.asm.hm).apply(null,arguments)},ko=a._emscripten_bind_b2MouseJoint_GetUserData_0=
function(){return(ko=a._emscripten_bind_b2MouseJoint_GetUserData_0=a.asm.im).apply(null,arguments)},lo=a._emscripten_bind_b2MouseJoint_GetCollideConnected_0=function(){return(lo=a._emscripten_bind_b2MouseJoint_GetCollideConnected_0=a.asm.jm).apply(null,arguments)},mo=a._emscripten_bind_b2MouseJoint___destroy___0=function(){return(mo=a._emscripten_bind_b2MouseJoint___destroy___0=a.asm.km).apply(null,arguments)},no=a._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0=function(){return(no=a._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0=
a.asm.lm).apply(null,arguments)},oo=a._emscripten_bind_b2MouseJointDef_get_target_0=function(){return(oo=a._emscripten_bind_b2MouseJointDef_get_target_0=a.asm.mm).apply(null,arguments)},po=a._emscripten_bind_b2MouseJointDef_set_target_1=function(){return(po=a._emscripten_bind_b2MouseJointDef_set_target_1=a.asm.nm).apply(null,arguments)},qo=a._emscripten_bind_b2MouseJointDef_get_maxForce_0=function(){return(qo=a._emscripten_bind_b2MouseJointDef_get_maxForce_0=a.asm.om).apply(null,arguments)},ro=a._emscripten_bind_b2MouseJointDef_set_maxForce_1=
function(){return(ro=a._emscripten_bind_b2MouseJointDef_set_maxForce_1=a.asm.pm).apply(null,arguments)},so=a._emscripten_bind_b2MouseJointDef_get_stiffness_0=function(){return(so=a._emscripten_bind_b2MouseJointDef_get_stiffness_0=a.asm.qm).apply(null,arguments)},to=a._emscripten_bind_b2MouseJointDef_set_stiffness_1=function(){return(to=a._emscripten_bind_b2MouseJointDef_set_stiffness_1=a.asm.rm).apply(null,arguments)},uo=a._emscripten_bind_b2MouseJointDef_get_damping_0=function(){return(uo=a._emscripten_bind_b2MouseJointDef_get_damping_0=
a.asm.sm).apply(null,arguments)},vo=a._emscripten_bind_b2MouseJointDef_set_damping_1=function(){return(vo=a._emscripten_bind_b2MouseJointDef_set_damping_1=a.asm.tm).apply(null,arguments)},wo=a._emscripten_bind_b2MouseJointDef_get_type_0=function(){return(wo=a._emscripten_bind_b2MouseJointDef_get_type_0=a.asm.um).apply(null,arguments)},xo=a._emscripten_bind_b2MouseJointDef_set_type_1=function(){return(xo=a._emscripten_bind_b2MouseJointDef_set_type_1=a.asm.vm).apply(null,arguments)},yo=a._emscripten_bind_b2MouseJointDef_get_userData_0=
function(){return(yo=a._emscripten_bind_b2MouseJointDef_get_userData_0=a.asm.wm).apply(null,arguments)},zo=a._emscripten_bind_b2MouseJointDef_set_userData_1=function(){return(zo=a._emscripten_bind_b2MouseJointDef_set_userData_1=a.asm.xm).apply(null,arguments)},Ao=a._emscripten_bind_b2MouseJointDef_get_bodyA_0=function(){return(Ao=a._emscripten_bind_b2MouseJointDef_get_bodyA_0=a.asm.ym).apply(null,arguments)},Bo=a._emscripten_bind_b2MouseJointDef_set_bodyA_1=function(){return(Bo=a._emscripten_bind_b2MouseJointDef_set_bodyA_1=
a.asm.zm).apply(null,arguments)},Co=a._emscripten_bind_b2MouseJointDef_get_bodyB_0=function(){return(Co=a._emscripten_bind_b2MouseJointDef_get_bodyB_0=a.asm.Am).apply(null,arguments)},Do=a._emscripten_bind_b2MouseJointDef_set_bodyB_1=function(){return(Do=a._emscripten_bind_b2MouseJointDef_set_bodyB_1=a.asm.Bm).apply(null,arguments)},Eo=a._emscripten_bind_b2MouseJointDef_get_collideConnected_0=function(){return(Eo=a._emscripten_bind_b2MouseJointDef_get_collideConnected_0=a.asm.Cm).apply(null,arguments)},
Fo=a._emscripten_bind_b2MouseJointDef_set_collideConnected_1=function(){return(Fo=a._emscripten_bind_b2MouseJointDef_set_collideConnected_1=a.asm.Dm).apply(null,arguments)},Go=a._emscripten_bind_b2MouseJointDef___destroy___0=function(){return(Go=a._emscripten_bind_b2MouseJointDef___destroy___0=a.asm.Em).apply(null,arguments)},Ho=a._emscripten_bind_b2PolygonShape_b2PolygonShape_0=function(){return(Ho=a._emscripten_bind_b2PolygonShape_b2PolygonShape_0=a.asm.Fm).apply(null,arguments)},Io=a._emscripten_bind_b2PolygonShape_Set_2=
function(){return(Io=a._emscripten_bind_b2PolygonShape_Set_2=a.asm.Gm).apply(null,arguments)},Jo=a._emscripten_bind_b2PolygonShape_SetAsBox_2=function(){return(Jo=a._emscripten_bind_b2PolygonShape_SetAsBox_2=a.asm.Hm).apply(null,arguments)},Ko=a._emscripten_bind_b2PolygonShape_SetAsBox_4=function(){return(Ko=a._emscripten_bind_b2PolygonShape_SetAsBox_4=a.asm.Im).apply(null,arguments)},Lo=a._emscripten_bind_b2PolygonShape_GetType_0=function(){return(Lo=a._emscripten_bind_b2PolygonShape_GetType_0=a.asm.Jm).apply(null,
arguments)},Mo=a._emscripten_bind_b2PolygonShape_GetChildCount_0=function(){return(Mo=a._emscripten_bind_b2PolygonShape_GetChildCount_0=a.asm.Km).apply(null,arguments)},No=a._emscripten_bind_b2PolygonShape_TestPoint_2=function(){return(No=a._emscripten_bind_b2PolygonShape_TestPoint_2=a.asm.Lm).apply(null,arguments)},Oo=a._emscripten_bind_b2PolygonShape_RayCast_4=function(){return(Oo=a._emscripten_bind_b2PolygonShape_RayCast_4=a.asm.Mm).apply(null,arguments)},Po=a._emscripten_bind_b2PolygonShape_ComputeAABB_3=
function(){return(Po=a._emscripten_bind_b2PolygonShape_ComputeAABB_3=a.asm.Nm).apply(null,arguments)},Qo=a._emscripten_bind_b2PolygonShape_ComputeMass_2=function(){return(Qo=a._emscripten_bind_b2PolygonShape_ComputeMass_2=a.asm.Om).apply(null,arguments)},Ro=a._emscripten_bind_b2PolygonShape_get_m_centroid_0=function(){return(Ro=a._emscripten_bind_b2PolygonShape_get_m_centroid_0=a.asm.Pm).apply(null,arguments)},So=a._emscripten_bind_b2PolygonShape_set_m_centroid_1=function(){return(So=a._emscripten_bind_b2PolygonShape_set_m_centroid_1=
a.asm.Qm).apply(null,arguments)},To=a._emscripten_bind_b2PolygonShape_get_m_vertices_1=function(){return(To=a._emscripten_bind_b2PolygonShape_get_m_vertices_1=a.asm.Rm).apply(null,arguments)},Uo=a._emscripten_bind_b2PolygonShape_set_m_vertices_2=function(){return(Uo=a._emscripten_bind_b2PolygonShape_set_m_vertices_2=a.asm.Sm).apply(null,arguments)},Vo=a._emscripten_bind_b2PolygonShape_get_m_normals_1=function(){return(Vo=a._emscripten_bind_b2PolygonShape_get_m_normals_1=a.asm.Tm).apply(null,arguments)},
Wo=a._emscripten_bind_b2PolygonShape_set_m_normals_2=function(){return(Wo=a._emscripten_bind_b2PolygonShape_set_m_normals_2=a.asm.Um).apply(null,arguments)},Xo=a._emscripten_bind_b2PolygonShape_get_m_count_0=function(){return(Xo=a._emscripten_bind_b2PolygonShape_get_m_count_0=a.asm.Vm).apply(null,arguments)},Yo=a._emscripten_bind_b2PolygonShape_set_m_count_1=function(){return(Yo=a._emscripten_bind_b2PolygonShape_set_m_count_1=a.asm.Wm).apply(null,arguments)},Zo=a._emscripten_bind_b2PolygonShape_get_m_type_0=
function(){return(Zo=a._emscripten_bind_b2PolygonShape_get_m_type_0=a.asm.Xm).apply(null,arguments)},$o=a._emscripten_bind_b2PolygonShape_set_m_type_1=function(){return($o=a._emscripten_bind_b2PolygonShape_set_m_type_1=a.asm.Ym).apply(null,arguments)},ap=a._emscripten_bind_b2PolygonShape_get_m_radius_0=function(){return(ap=a._emscripten_bind_b2PolygonShape_get_m_radius_0=a.asm.Zm).apply(null,arguments)},bp=a._emscripten_bind_b2PolygonShape_set_m_radius_1=function(){return(bp=a._emscripten_bind_b2PolygonShape_set_m_radius_1=
a.asm._m).apply(null,arguments)},cp=a._emscripten_bind_b2PolygonShape___destroy___0=function(){return(cp=a._emscripten_bind_b2PolygonShape___destroy___0=a.asm.$m).apply(null,arguments)},dp=a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0=function(){return(dp=a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0=a.asm.an).apply(null,arguments)},ep=a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0=function(){return(ep=a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0=a.asm.bn).apply(null,
arguments)},fp=a._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0=function(){return(fp=a._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0=a.asm.cn).apply(null,arguments)},gp=a._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0=function(){return(gp=a._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0=a.asm.dn).apply(null,arguments)},hp=a._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0=function(){return(hp=a._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0=a.asm.en).apply(null,
arguments)},ip=a._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0=function(){return(ip=a._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0=a.asm.fn).apply(null,arguments)},jp=a._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0=function(){return(jp=a._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0=a.asm.gn).apply(null,arguments)},kp=a._emscripten_bind_b2PrismaticJoint_EnableLimit_1=function(){return(kp=a._emscripten_bind_b2PrismaticJoint_EnableLimit_1=a.asm.hn).apply(null,arguments)},lp=a._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0=
function(){return(lp=a._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0=a.asm.jn).apply(null,arguments)},mp=a._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0=function(){return(mp=a._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0=a.asm.kn).apply(null,arguments)},np=a._emscripten_bind_b2PrismaticJoint_SetLimits_2=function(){return(np=a._emscripten_bind_b2PrismaticJoint_SetLimits_2=a.asm.ln).apply(null,arguments)},op=a._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0=function(){return(op=a._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0=
a.asm.mn).apply(null,arguments)},pp=a._emscripten_bind_b2PrismaticJoint_EnableMotor_1=function(){return(pp=a._emscripten_bind_b2PrismaticJoint_EnableMotor_1=a.asm.nn).apply(null,arguments)},qp=a._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1=function(){return(qp=a._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1=a.asm.on).apply(null,arguments)},rp=a._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0=function(){return(rp=a._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0=a.asm.pn).apply(null,arguments)},
sp=a._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1=function(){return(sp=a._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1=a.asm.qn).apply(null,arguments)},tp=a._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0=function(){return(tp=a._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0=a.asm.rn).apply(null,arguments)},up=a._emscripten_bind_b2PrismaticJoint_GetMotorForce_1=function(){return(up=a._emscripten_bind_b2PrismaticJoint_GetMotorForce_1=a.asm.sn).apply(null,arguments)},vp=a._emscripten_bind_b2PrismaticJoint_GetType_0=
function(){return(vp=a._emscripten_bind_b2PrismaticJoint_GetType_0=a.asm.tn).apply(null,arguments)},wp=a._emscripten_bind_b2PrismaticJoint_GetBodyA_0=function(){return(wp=a._emscripten_bind_b2PrismaticJoint_GetBodyA_0=a.asm.un).apply(null,arguments)},xp=a._emscripten_bind_b2PrismaticJoint_GetBodyB_0=function(){return(xp=a._emscripten_bind_b2PrismaticJoint_GetBodyB_0=a.asm.vn).apply(null,arguments)},yp=a._emscripten_bind_b2PrismaticJoint_GetAnchorA_0=function(){return(yp=a._emscripten_bind_b2PrismaticJoint_GetAnchorA_0=
a.asm.wn).apply(null,arguments)},zp=a._emscripten_bind_b2PrismaticJoint_GetAnchorB_0=function(){return(zp=a._emscripten_bind_b2PrismaticJoint_GetAnchorB_0=a.asm.xn).apply(null,arguments)},Ap=a._emscripten_bind_b2PrismaticJoint_GetReactionForce_1=function(){return(Ap=a._emscripten_bind_b2PrismaticJoint_GetReactionForce_1=a.asm.yn).apply(null,arguments)},Bp=a._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1=function(){return(Bp=a._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1=a.asm.zn).apply(null,
arguments)},Cp=a._emscripten_bind_b2PrismaticJoint_GetNext_0=function(){return(Cp=a._emscripten_bind_b2PrismaticJoint_GetNext_0=a.asm.An).apply(null,arguments)},Dp=a._emscripten_bind_b2PrismaticJoint_GetUserData_0=function(){return(Dp=a._emscripten_bind_b2PrismaticJoint_GetUserData_0=a.asm.Bn).apply(null,arguments)},Ep=a._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0=function(){return(Ep=a._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0=a.asm.Cn).apply(null,arguments)},Fp=a._emscripten_bind_b2PrismaticJoint___destroy___0=
function(){return(Fp=a._emscripten_bind_b2PrismaticJoint___destroy___0=a.asm.Dn).apply(null,arguments)},Gp=a._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0=function(){return(Gp=a._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0=a.asm.En).apply(null,arguments)},Hp=a._emscripten_bind_b2PrismaticJointDef_Initialize_4=function(){return(Hp=a._emscripten_bind_b2PrismaticJointDef_Initialize_4=a.asm.Fn).apply(null,arguments)},Ip=a._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0=
function(){return(Ip=a._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0=a.asm.Gn).apply(null,arguments)},Jp=a._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1=function(){return(Jp=a._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1=a.asm.Hn).apply(null,arguments)},Kp=a._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0=function(){return(Kp=a._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0=a.asm.In).apply(null,arguments)},Lp=a._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1=
function(){return(Lp=a._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1=a.asm.Jn).apply(null,arguments)},Mp=a._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0=function(){return(Mp=a._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0=a.asm.Kn).apply(null,arguments)},Np=a._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1=function(){return(Np=a._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1=a.asm.Ln).apply(null,arguments)},Op=a._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0=
function(){return(Op=a._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0=a.asm.Mn).apply(null,arguments)},Pp=a._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1=function(){return(Pp=a._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1=a.asm.Nn).apply(null,arguments)},Qp=a._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0=function(){return(Qp=a._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0=a.asm.On).apply(null,arguments)},Rp=a._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1=
function(){return(Rp=a._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1=a.asm.Pn).apply(null,arguments)},Sp=a._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0=function(){return(Sp=a._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0=a.asm.Qn).apply(null,arguments)},Tp=a._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1=function(){return(Tp=a._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1=a.asm.Rn).apply(null,arguments)},Up=a._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0=
function(){return(Up=a._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0=a.asm.Sn).apply(null,arguments)},Vp=a._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1=function(){return(Vp=a._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1=a.asm.Tn).apply(null,arguments)},Wp=a._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0=function(){return(Wp=a._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0=a.asm.Un).apply(null,arguments)},Xp=a._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1=
function(){return(Xp=a._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1=a.asm.Vn).apply(null,arguments)},Yp=a._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0=function(){return(Yp=a._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0=a.asm.Wn).apply(null,arguments)},Zp=a._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1=function(){return(Zp=a._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1=a.asm.Xn).apply(null,arguments)},$p=a._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0=
function(){return($p=a._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0=a.asm.Yn).apply(null,arguments)},aq=a._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1=function(){return(aq=a._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1=a.asm.Zn).apply(null,arguments)},bq=a._emscripten_bind_b2PrismaticJointDef_get_type_0=function(){return(bq=a._emscripten_bind_b2PrismaticJointDef_get_type_0=a.asm._n).apply(null,arguments)},cq=a._emscripten_bind_b2PrismaticJointDef_set_type_1=function(){return(cq=
a._emscripten_bind_b2PrismaticJointDef_set_type_1=a.asm.$n).apply(null,arguments)},dq=a._emscripten_bind_b2PrismaticJointDef_get_userData_0=function(){return(dq=a._emscripten_bind_b2PrismaticJointDef_get_userData_0=a.asm.ao).apply(null,arguments)},eq=a._emscripten_bind_b2PrismaticJointDef_set_userData_1=function(){return(eq=a._emscripten_bind_b2PrismaticJointDef_set_userData_1=a.asm.bo).apply(null,arguments)},fq=a._emscripten_bind_b2PrismaticJointDef_get_bodyA_0=function(){return(fq=a._emscripten_bind_b2PrismaticJointDef_get_bodyA_0=
a.asm.co).apply(null,arguments)},gq=a._emscripten_bind_b2PrismaticJointDef_set_bodyA_1=function(){return(gq=a._emscripten_bind_b2PrismaticJointDef_set_bodyA_1=a.asm.eo).apply(null,arguments)},hq=a._emscripten_bind_b2PrismaticJointDef_get_bodyB_0=function(){return(hq=a._emscripten_bind_b2PrismaticJointDef_get_bodyB_0=a.asm.fo).apply(null,arguments)},iq=a._emscripten_bind_b2PrismaticJointDef_set_bodyB_1=function(){return(iq=a._emscripten_bind_b2PrismaticJointDef_set_bodyB_1=a.asm.go).apply(null,arguments)},
jq=a._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0=function(){return(jq=a._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0=a.asm.ho).apply(null,arguments)},kq=a._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1=function(){return(kq=a._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1=a.asm.io).apply(null,arguments)},lq=a._emscripten_bind_b2PrismaticJointDef___destroy___0=function(){return(lq=a._emscripten_bind_b2PrismaticJointDef___destroy___0=a.asm.jo).apply(null,
arguments)},mq=a._emscripten_bind_b2Profile_get_step_0=function(){return(mq=a._emscripten_bind_b2Profile_get_step_0=a.asm.ko).apply(null,arguments)},nq=a._emscripten_bind_b2Profile_set_step_1=function(){return(nq=a._emscripten_bind_b2Profile_set_step_1=a.asm.lo).apply(null,arguments)},oq=a._emscripten_bind_b2Profile_get_collide_0=function(){return(oq=a._emscripten_bind_b2Profile_get_collide_0=a.asm.mo).apply(null,arguments)},pq=a._emscripten_bind_b2Profile_set_collide_1=function(){return(pq=a._emscripten_bind_b2Profile_set_collide_1=
a.asm.no).apply(null,arguments)},qq=a._emscripten_bind_b2Profile_get_solve_0=function(){return(qq=a._emscripten_bind_b2Profile_get_solve_0=a.asm.oo).apply(null,arguments)},rq=a._emscripten_bind_b2Profile_set_solve_1=function(){return(rq=a._emscripten_bind_b2Profile_set_solve_1=a.asm.po).apply(null,arguments)},sq=a._emscripten_bind_b2Profile_get_solveInit_0=function(){return(sq=a._emscripten_bind_b2Profile_get_solveInit_0=a.asm.qo).apply(null,arguments)},tq=a._emscripten_bind_b2Profile_set_solveInit_1=
function(){return(tq=a._emscripten_bind_b2Profile_set_solveInit_1=a.asm.ro).apply(null,arguments)},uq=a._emscripten_bind_b2Profile_get_solveVelocity_0=function(){return(uq=a._emscripten_bind_b2Profile_get_solveVelocity_0=a.asm.so).apply(null,arguments)},vq=a._emscripten_bind_b2Profile_set_solveVelocity_1=function(){return(vq=a._emscripten_bind_b2Profile_set_solveVelocity_1=a.asm.to).apply(null,arguments)},wq=a._emscripten_bind_b2Profile_get_solvePosition_0=function(){return(wq=a._emscripten_bind_b2Profile_get_solvePosition_0=
a.asm.uo).apply(null,arguments)},xq=a._emscripten_bind_b2Profile_set_solvePosition_1=function(){return(xq=a._emscripten_bind_b2Profile_set_solvePosition_1=a.asm.vo).apply(null,arguments)},yq=a._emscripten_bind_b2Profile_get_broadphase_0=function(){return(yq=a._emscripten_bind_b2Profile_get_broadphase_0=a.asm.wo).apply(null,arguments)},zq=a._emscripten_bind_b2Profile_set_broadphase_1=function(){return(zq=a._emscripten_bind_b2Profile_set_broadphase_1=a.asm.xo).apply(null,arguments)},Aq=a._emscripten_bind_b2Profile_get_solveTOI_0=
function(){return(Aq=a._emscripten_bind_b2Profile_get_solveTOI_0=a.asm.yo).apply(null,arguments)},Bq=a._emscripten_bind_b2Profile_set_solveTOI_1=function(){return(Bq=a._emscripten_bind_b2Profile_set_solveTOI_1=a.asm.zo).apply(null,arguments)},Cq=a._emscripten_bind_b2Profile___destroy___0=function(){return(Cq=a._emscripten_bind_b2Profile___destroy___0=a.asm.Ao).apply(null,arguments)},Dq=a._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0=function(){return(Dq=a._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0=
a.asm.Bo).apply(null,arguments)},Eq=a._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0=function(){return(Eq=a._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0=a.asm.Co).apply(null,arguments)},Fq=a._emscripten_bind_b2PulleyJoint_GetLengthA_0=function(){return(Fq=a._emscripten_bind_b2PulleyJoint_GetLengthA_0=a.asm.Do).apply(null,arguments)},Gq=a._emscripten_bind_b2PulleyJoint_GetLengthB_0=function(){return(Gq=a._emscripten_bind_b2PulleyJoint_GetLengthB_0=a.asm.Eo).apply(null,arguments)},Hq=a._emscripten_bind_b2PulleyJoint_GetRatio_0=
function(){return(Hq=a._emscripten_bind_b2PulleyJoint_GetRatio_0=a.asm.Fo).apply(null,arguments)},Iq=a._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0=function(){return(Iq=a._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0=a.asm.Go).apply(null,arguments)},Jq=a._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0=function(){return(Jq=a._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0=a.asm.Ho).apply(null,arguments)},Kq=a._emscripten_bind_b2PulleyJoint_GetType_0=function(){return(Kq=a._emscripten_bind_b2PulleyJoint_GetType_0=
a.asm.Io).apply(null,arguments)},Lq=a._emscripten_bind_b2PulleyJoint_GetBodyA_0=function(){return(Lq=a._emscripten_bind_b2PulleyJoint_GetBodyA_0=a.asm.Jo).apply(null,arguments)},Mq=a._emscripten_bind_b2PulleyJoint_GetBodyB_0=function(){return(Mq=a._emscripten_bind_b2PulleyJoint_GetBodyB_0=a.asm.Ko).apply(null,arguments)},Nq=a._emscripten_bind_b2PulleyJoint_GetAnchorA_0=function(){return(Nq=a._emscripten_bind_b2PulleyJoint_GetAnchorA_0=a.asm.Lo).apply(null,arguments)},Oq=a._emscripten_bind_b2PulleyJoint_GetAnchorB_0=
function(){return(Oq=a._emscripten_bind_b2PulleyJoint_GetAnchorB_0=a.asm.Mo).apply(null,arguments)},Pq=a._emscripten_bind_b2PulleyJoint_GetReactionForce_1=function(){return(Pq=a._emscripten_bind_b2PulleyJoint_GetReactionForce_1=a.asm.No).apply(null,arguments)},Qq=a._emscripten_bind_b2PulleyJoint_GetReactionTorque_1=function(){return(Qq=a._emscripten_bind_b2PulleyJoint_GetReactionTorque_1=a.asm.Oo).apply(null,arguments)},Rq=a._emscripten_bind_b2PulleyJoint_GetNext_0=function(){return(Rq=a._emscripten_bind_b2PulleyJoint_GetNext_0=
a.asm.Po).apply(null,arguments)},Sq=a._emscripten_bind_b2PulleyJoint_GetUserData_0=function(){return(Sq=a._emscripten_bind_b2PulleyJoint_GetUserData_0=a.asm.Qo).apply(null,arguments)},Tq=a._emscripten_bind_b2PulleyJoint_GetCollideConnected_0=function(){return(Tq=a._emscripten_bind_b2PulleyJoint_GetCollideConnected_0=a.asm.Ro).apply(null,arguments)},Uq=a._emscripten_bind_b2PulleyJoint___destroy___0=function(){return(Uq=a._emscripten_bind_b2PulleyJoint___destroy___0=a.asm.So).apply(null,arguments)},
Vq=a._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0=function(){return(Vq=a._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0=a.asm.To).apply(null,arguments)},Wq=a._emscripten_bind_b2PulleyJointDef_Initialize_7=function(){return(Wq=a._emscripten_bind_b2PulleyJointDef_Initialize_7=a.asm.Uo).apply(null,arguments)},Xq=a._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0=function(){return(Xq=a._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0=a.asm.Vo).apply(null,arguments)},Yq=a._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1=
function(){return(Yq=a._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1=a.asm.Wo).apply(null,arguments)},Zq=a._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0=function(){return(Zq=a._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0=a.asm.Xo).apply(null,arguments)},$q=a._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1=function(){return($q=a._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1=a.asm.Yo).apply(null,arguments)},ar=a._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0=
function(){return(ar=a._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0=a.asm.Zo).apply(null,arguments)},br=a._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1=function(){return(br=a._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1=a.asm._o).apply(null,arguments)},cr=a._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0=function(){return(cr=a._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0=a.asm.$o).apply(null,arguments)},dr=a._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1=
function(){return(dr=a._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1=a.asm.ap).apply(null,arguments)},er=a._emscripten_bind_b2PulleyJointDef_get_lengthA_0=function(){return(er=a._emscripten_bind_b2PulleyJointDef_get_lengthA_0=a.asm.bp).apply(null,arguments)},fr=a._emscripten_bind_b2PulleyJointDef_set_lengthA_1=function(){return(fr=a._emscripten_bind_b2PulleyJointDef_set_lengthA_1=a.asm.cp).apply(null,arguments)},gr=a._emscripten_bind_b2PulleyJointDef_get_lengthB_0=function(){return(gr=a._emscripten_bind_b2PulleyJointDef_get_lengthB_0=
a.asm.dp).apply(null,arguments)},hr=a._emscripten_bind_b2PulleyJointDef_set_lengthB_1=function(){return(hr=a._emscripten_bind_b2PulleyJointDef_set_lengthB_1=a.asm.ep).apply(null,arguments)},ir=a._emscripten_bind_b2PulleyJointDef_get_ratio_0=function(){return(ir=a._emscripten_bind_b2PulleyJointDef_get_ratio_0=a.asm.fp).apply(null,arguments)},jr=a._emscripten_bind_b2PulleyJointDef_set_ratio_1=function(){return(jr=a._emscripten_bind_b2PulleyJointDef_set_ratio_1=a.asm.gp).apply(null,arguments)},kr=a._emscripten_bind_b2PulleyJointDef_get_type_0=
function(){return(kr=a._emscripten_bind_b2PulleyJointDef_get_type_0=a.asm.hp).apply(null,arguments)},lr=a._emscripten_bind_b2PulleyJointDef_set_type_1=function(){return(lr=a._emscripten_bind_b2PulleyJointDef_set_type_1=a.asm.ip).apply(null,arguments)},mr=a._emscripten_bind_b2PulleyJointDef_get_userData_0=function(){return(mr=a._emscripten_bind_b2PulleyJointDef_get_userData_0=a.asm.jp).apply(null,arguments)},nr=a._emscripten_bind_b2PulleyJointDef_set_userData_1=function(){return(nr=a._emscripten_bind_b2PulleyJointDef_set_userData_1=
a.asm.kp).apply(null,arguments)},or=a._emscripten_bind_b2PulleyJointDef_get_bodyA_0=function(){return(or=a._emscripten_bind_b2PulleyJointDef_get_bodyA_0=a.asm.lp).apply(null,arguments)},pr=a._emscripten_bind_b2PulleyJointDef_set_bodyA_1=function(){return(pr=a._emscripten_bind_b2PulleyJointDef_set_bodyA_1=a.asm.mp).apply(null,arguments)},qr=a._emscripten_bind_b2PulleyJointDef_get_bodyB_0=function(){return(qr=a._emscripten_bind_b2PulleyJointDef_get_bodyB_0=a.asm.np).apply(null,arguments)},rr=a._emscripten_bind_b2PulleyJointDef_set_bodyB_1=
function(){return(rr=a._emscripten_bind_b2PulleyJointDef_set_bodyB_1=a.asm.op).apply(null,arguments)},sr=a._emscripten_bind_b2PulleyJointDef_get_collideConnected_0=function(){return(sr=a._emscripten_bind_b2PulleyJointDef_get_collideConnected_0=a.asm.pp).apply(null,arguments)},tr=a._emscripten_bind_b2PulleyJointDef_set_collideConnected_1=function(){return(tr=a._emscripten_bind_b2PulleyJointDef_set_collideConnected_1=a.asm.qp).apply(null,arguments)},ur=a._emscripten_bind_b2PulleyJointDef___destroy___0=
function(){return(ur=a._emscripten_bind_b2PulleyJointDef___destroy___0=a.asm.rp).apply(null,arguments)},vr=a._emscripten_bind_b2RayCastInput_get_p1_0=function(){return(vr=a._emscripten_bind_b2RayCastInput_get_p1_0=a.asm.sp).apply(null,arguments)},wr=a._emscripten_bind_b2RayCastInput_set_p1_1=function(){return(wr=a._emscripten_bind_b2RayCastInput_set_p1_1=a.asm.tp).apply(null,arguments)},xr=a._emscripten_bind_b2RayCastInput_get_p2_0=function(){return(xr=a._emscripten_bind_b2RayCastInput_get_p2_0=a.asm.up).apply(null,
arguments)},yr=a._emscripten_bind_b2RayCastInput_set_p2_1=function(){return(yr=a._emscripten_bind_b2RayCastInput_set_p2_1=a.asm.vp).apply(null,arguments)},zr=a._emscripten_bind_b2RayCastInput_get_maxFraction_0=function(){return(zr=a._emscripten_bind_b2RayCastInput_get_maxFraction_0=a.asm.wp).apply(null,arguments)},Ar=a._emscripten_bind_b2RayCastInput_set_maxFraction_1=function(){return(Ar=a._emscripten_bind_b2RayCastInput_set_maxFraction_1=a.asm.xp).apply(null,arguments)},Br=a._emscripten_bind_b2RayCastInput___destroy___0=
function(){return(Br=a._emscripten_bind_b2RayCastInput___destroy___0=a.asm.yp).apply(null,arguments)},Cr=a._emscripten_bind_b2RayCastOutput_get_normal_0=function(){return(Cr=a._emscripten_bind_b2RayCastOutput_get_normal_0=a.asm.zp).apply(null,arguments)},Dr=a._emscripten_bind_b2RayCastOutput_set_normal_1=function(){return(Dr=a._emscripten_bind_b2RayCastOutput_set_normal_1=a.asm.Ap).apply(null,arguments)},Er=a._emscripten_bind_b2RayCastOutput_get_fraction_0=function(){return(Er=a._emscripten_bind_b2RayCastOutput_get_fraction_0=
a.asm.Bp).apply(null,arguments)},Fr=a._emscripten_bind_b2RayCastOutput_set_fraction_1=function(){return(Fr=a._emscripten_bind_b2RayCastOutput_set_fraction_1=a.asm.Cp).apply(null,arguments)},Gr=a._emscripten_bind_b2RayCastOutput___destroy___0=function(){return(Gr=a._emscripten_bind_b2RayCastOutput___destroy___0=a.asm.Dp).apply(null,arguments)},Hr=a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0=function(){return(Hr=a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0=a.asm.Ep).apply(null,arguments)},
Ir=a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0=function(){return(Ir=a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0=a.asm.Fp).apply(null,arguments)},Jr=a._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0=function(){return(Jr=a._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0=a.asm.Gp).apply(null,arguments)},Kr=a._emscripten_bind_b2RevoluteJoint_GetJointAngle_0=function(){return(Kr=a._emscripten_bind_b2RevoluteJoint_GetJointAngle_0=a.asm.Hp).apply(null,arguments)},Lr=a._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0=
function(){return(Lr=a._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0=a.asm.Ip).apply(null,arguments)},Mr=a._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0=function(){return(Mr=a._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0=a.asm.Jp).apply(null,arguments)},Nr=a._emscripten_bind_b2RevoluteJoint_EnableLimit_1=function(){return(Nr=a._emscripten_bind_b2RevoluteJoint_EnableLimit_1=a.asm.Kp).apply(null,arguments)},Or=a._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0=function(){return(Or=a._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0=
a.asm.Lp).apply(null,arguments)},Pr=a._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0=function(){return(Pr=a._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0=a.asm.Mp).apply(null,arguments)},Qr=a._emscripten_bind_b2RevoluteJoint_SetLimits_2=function(){return(Qr=a._emscripten_bind_b2RevoluteJoint_SetLimits_2=a.asm.Np).apply(null,arguments)},Rr=a._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0=function(){return(Rr=a._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0=a.asm.Op).apply(null,arguments)},
Sr=a._emscripten_bind_b2RevoluteJoint_EnableMotor_1=function(){return(Sr=a._emscripten_bind_b2RevoluteJoint_EnableMotor_1=a.asm.Pp).apply(null,arguments)},Tr=a._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1=function(){return(Tr=a._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1=a.asm.Qp).apply(null,arguments)},Ur=a._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0=function(){return(Ur=a._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0=a.asm.Rp).apply(null,arguments)},Vr=a._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1=
function(){return(Vr=a._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1=a.asm.Sp).apply(null,arguments)},Wr=a._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0=function(){return(Wr=a._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0=a.asm.Tp).apply(null,arguments)},Xr=a._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1=function(){return(Xr=a._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1=a.asm.Up).apply(null,arguments)},Yr=a._emscripten_bind_b2RevoluteJoint_GetType_0=function(){return(Yr=
a._emscripten_bind_b2RevoluteJoint_GetType_0=a.asm.Vp).apply(null,arguments)},Zr=a._emscripten_bind_b2RevoluteJoint_GetBodyA_0=function(){return(Zr=a._emscripten_bind_b2RevoluteJoint_GetBodyA_0=a.asm.Wp).apply(null,arguments)},$r=a._emscripten_bind_b2RevoluteJoint_GetBodyB_0=function(){return($r=a._emscripten_bind_b2RevoluteJoint_GetBodyB_0=a.asm.Xp).apply(null,arguments)},as=a._emscripten_bind_b2RevoluteJoint_GetAnchorA_0=function(){return(as=a._emscripten_bind_b2RevoluteJoint_GetAnchorA_0=a.asm.Yp).apply(null,
arguments)},bs=a._emscripten_bind_b2RevoluteJoint_GetAnchorB_0=function(){return(bs=a._emscripten_bind_b2RevoluteJoint_GetAnchorB_0=a.asm.Zp).apply(null,arguments)},cs=a._emscripten_bind_b2RevoluteJoint_GetReactionForce_1=function(){return(cs=a._emscripten_bind_b2RevoluteJoint_GetReactionForce_1=a.asm._p).apply(null,arguments)},ds=a._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1=function(){return(ds=a._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1=a.asm.$p).apply(null,arguments)},es=a._emscripten_bind_b2RevoluteJoint_GetNext_0=
function(){return(es=a._emscripten_bind_b2RevoluteJoint_GetNext_0=a.asm.aq).apply(null,arguments)},gs=a._emscripten_bind_b2RevoluteJoint_GetUserData_0=function(){return(gs=a._emscripten_bind_b2RevoluteJoint_GetUserData_0=a.asm.bq).apply(null,arguments)},hs=a._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0=function(){return(hs=a._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0=a.asm.cq).apply(null,arguments)},is=a._emscripten_bind_b2RevoluteJoint___destroy___0=function(){return(is=a._emscripten_bind_b2RevoluteJoint___destroy___0=
a.asm.dq).apply(null,arguments)},js=a._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0=function(){return(js=a._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0=a.asm.eq).apply(null,arguments)},ks=a._emscripten_bind_b2RevoluteJointDef_Initialize_3=function(){return(ks=a._emscripten_bind_b2RevoluteJointDef_Initialize_3=a.asm.fq).apply(null,arguments)},ls=a._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0=function(){return(ls=a._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0=
a.asm.gq).apply(null,arguments)},ms=a._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1=function(){return(ms=a._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1=a.asm.hq).apply(null,arguments)},ns=a._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0=function(){return(ns=a._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0=a.asm.iq).apply(null,arguments)},ps=a._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1=function(){return(ps=a._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1=
a.asm.jq).apply(null,arguments)},qs=a._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0=function(){return(qs=a._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0=a.asm.kq).apply(null,arguments)},rs=a._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1=function(){return(rs=a._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1=a.asm.lq).apply(null,arguments)},ss=a._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0=function(){return(ss=a._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0=
a.asm.mq).apply(null,arguments)},ts=a._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1=function(){return(ts=a._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1=a.asm.nq).apply(null,arguments)},us=a._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0=function(){return(us=a._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0=a.asm.oq).apply(null,arguments)},vs=a._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1=function(){return(vs=a._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1=
a.asm.pq).apply(null,arguments)},xs=a._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0=function(){return(xs=a._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0=a.asm.qq).apply(null,arguments)},ys=a._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1=function(){return(ys=a._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1=a.asm.rq).apply(null,arguments)},zs=a._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0=function(){return(zs=a._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0=
a.asm.sq).apply(null,arguments)},As=a._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1=function(){return(As=a._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1=a.asm.tq).apply(null,arguments)},Bs=a._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0=function(){return(Bs=a._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0=a.asm.uq).apply(null,arguments)},Cs=a._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1=function(){return(Cs=a._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1=
a.asm.vq).apply(null,arguments)},Ds=a._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0=function(){return(Ds=a._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0=a.asm.wq).apply(null,arguments)},Es=a._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1=function(){return(Es=a._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1=a.asm.xq).apply(null,arguments)},Fs=a._emscripten_bind_b2RevoluteJointDef_get_type_0=function(){return(Fs=a._emscripten_bind_b2RevoluteJointDef_get_type_0=
a.asm.yq).apply(null,arguments)},Gs=a._emscripten_bind_b2RevoluteJointDef_set_type_1=function(){return(Gs=a._emscripten_bind_b2RevoluteJointDef_set_type_1=a.asm.zq).apply(null,arguments)},Hs=a._emscripten_bind_b2RevoluteJointDef_get_userData_0=function(){return(Hs=a._emscripten_bind_b2RevoluteJointDef_get_userData_0=a.asm.Aq).apply(null,arguments)},Is=a._emscripten_bind_b2RevoluteJointDef_set_userData_1=function(){return(Is=a._emscripten_bind_b2RevoluteJointDef_set_userData_1=a.asm.Bq).apply(null,
arguments)},Js=a._emscripten_bind_b2RevoluteJointDef_get_bodyA_0=function(){return(Js=a._emscripten_bind_b2RevoluteJointDef_get_bodyA_0=a.asm.Cq).apply(null,arguments)},Ks=a._emscripten_bind_b2RevoluteJointDef_set_bodyA_1=function(){return(Ks=a._emscripten_bind_b2RevoluteJointDef_set_bodyA_1=a.asm.Dq).apply(null,arguments)},Ls=a._emscripten_bind_b2RevoluteJointDef_get_bodyB_0=function(){return(Ls=a._emscripten_bind_b2RevoluteJointDef_get_bodyB_0=a.asm.Eq).apply(null,arguments)},Ms=a._emscripten_bind_b2RevoluteJointDef_set_bodyB_1=
function(){return(Ms=a._emscripten_bind_b2RevoluteJointDef_set_bodyB_1=a.asm.Fq).apply(null,arguments)},Ns=a._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0=function(){return(Ns=a._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0=a.asm.Gq).apply(null,arguments)},Os=a._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1=function(){return(Os=a._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1=a.asm.Hq).apply(null,arguments)},Ps=a._emscripten_bind_b2RevoluteJointDef___destroy___0=
function(){return(Ps=a._emscripten_bind_b2RevoluteJointDef___destroy___0=a.asm.Iq).apply(null,arguments)},Qs=a._emscripten_bind_b2Rot_b2Rot_0=function(){return(Qs=a._emscripten_bind_b2Rot_b2Rot_0=a.asm.Jq).apply(null,arguments)},Rs=a._emscripten_bind_b2Rot_b2Rot_1=function(){return(Rs=a._emscripten_bind_b2Rot_b2Rot_1=a.asm.Kq).apply(null,arguments)},Ss=a._emscripten_bind_b2Rot_Set_1=function(){return(Ss=a._emscripten_bind_b2Rot_Set_1=a.asm.Lq).apply(null,arguments)},Ts=a._emscripten_bind_b2Rot_SetIdentity_0=
function(){return(Ts=a._emscripten_bind_b2Rot_SetIdentity_0=a.asm.Mq).apply(null,arguments)},Us=a._emscripten_bind_b2Rot_GetAngle_0=function(){return(Us=a._emscripten_bind_b2Rot_GetAngle_0=a.asm.Nq).apply(null,arguments)},Vs=a._emscripten_bind_b2Rot_GetXAxis_0=function(){return(Vs=a._emscripten_bind_b2Rot_GetXAxis_0=a.asm.Oq).apply(null,arguments)},Ws=a._emscripten_bind_b2Rot_GetYAxis_0=function(){return(Ws=a._emscripten_bind_b2Rot_GetYAxis_0=a.asm.Pq).apply(null,arguments)},Xs=a._emscripten_bind_b2Rot_get_s_0=
function(){return(Xs=a._emscripten_bind_b2Rot_get_s_0=a.asm.Qq).apply(null,arguments)},Ys=a._emscripten_bind_b2Rot_set_s_1=function(){return(Ys=a._emscripten_bind_b2Rot_set_s_1=a.asm.Rq).apply(null,arguments)},Zs=a._emscripten_bind_b2Rot_get_c_0=function(){return(Zs=a._emscripten_bind_b2Rot_get_c_0=a.asm.Sq).apply(null,arguments)},$s=a._emscripten_bind_b2Rot_set_c_1=function(){return($s=a._emscripten_bind_b2Rot_set_c_1=a.asm.Tq).apply(null,arguments)},at=a._emscripten_bind_b2Rot___destroy___0=function(){return(at=
a._emscripten_bind_b2Rot___destroy___0=a.asm.Uq).apply(null,arguments)},bt=a._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0=function(){return(bt=a._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0=a.asm.Vq).apply(null,arguments)},ct=a._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0=function(){return(ct=a._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0=a.asm.Wq).apply(null,arguments)},dt=a._emscripten_bind_b2WheelJoint_GetLocalAxisA_0=function(){return(dt=a._emscripten_bind_b2WheelJoint_GetLocalAxisA_0=
a.asm.Xq).apply(null,arguments)},et=a._emscripten_bind_b2WheelJoint_GetJointTranslation_0=function(){return(et=a._emscripten_bind_b2WheelJoint_GetJointTranslation_0=a.asm.Yq).apply(null,arguments)},ft=a._emscripten_bind_b2WheelJoint_GetJointLinearSpeed_0=function(){return(ft=a._emscripten_bind_b2WheelJoint_GetJointLinearSpeed_0=a.asm.Zq).apply(null,arguments)},gt=a._emscripten_bind_b2WheelJoint_GetJointAngle_0=function(){return(gt=a._emscripten_bind_b2WheelJoint_GetJointAngle_0=a.asm._q).apply(null,
arguments)},ht=a._emscripten_bind_b2WheelJoint_GetJointAngularSpeed_0=function(){return(ht=a._emscripten_bind_b2WheelJoint_GetJointAngularSpeed_0=a.asm.$q).apply(null,arguments)},it=a._emscripten_bind_b2WheelJoint_IsLimitEnabled_0=function(){return(it=a._emscripten_bind_b2WheelJoint_IsLimitEnabled_0=a.asm.ar).apply(null,arguments)},jt=a._emscripten_bind_b2WheelJoint_EnableLimit_1=function(){return(jt=a._emscripten_bind_b2WheelJoint_EnableLimit_1=a.asm.br).apply(null,arguments)},kt=a._emscripten_bind_b2WheelJoint_GetLowerLimit_0=
function(){return(kt=a._emscripten_bind_b2WheelJoint_GetLowerLimit_0=a.asm.cr).apply(null,arguments)},lt=a._emscripten_bind_b2WheelJoint_GetUpperLimit_0=function(){return(lt=a._emscripten_bind_b2WheelJoint_GetUpperLimit_0=a.asm.dr).apply(null,arguments)},mt=a._emscripten_bind_b2WheelJoint_SetLimits_2=function(){return(mt=a._emscripten_bind_b2WheelJoint_SetLimits_2=a.asm.er).apply(null,arguments)},nt=a._emscripten_bind_b2WheelJoint_IsMotorEnabled_0=function(){return(nt=a._emscripten_bind_b2WheelJoint_IsMotorEnabled_0=
a.asm.fr).apply(null,arguments)},ot=a._emscripten_bind_b2WheelJoint_EnableMotor_1=function(){return(ot=a._emscripten_bind_b2WheelJoint_EnableMotor_1=a.asm.gr).apply(null,arguments)},pt=a._emscripten_bind_b2WheelJoint_SetMotorSpeed_1=function(){return(pt=a._emscripten_bind_b2WheelJoint_SetMotorSpeed_1=a.asm.hr).apply(null,arguments)},qt=a._emscripten_bind_b2WheelJoint_GetMotorSpeed_0=function(){return(qt=a._emscripten_bind_b2WheelJoint_GetMotorSpeed_0=a.asm.ir).apply(null,arguments)},rt=a._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1=
function(){return(rt=a._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1=a.asm.jr).apply(null,arguments)},st=a._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0=function(){return(st=a._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0=a.asm.kr).apply(null,arguments)},tt=a._emscripten_bind_b2WheelJoint_GetMotorTorque_1=function(){return(tt=a._emscripten_bind_b2WheelJoint_GetMotorTorque_1=a.asm.lr).apply(null,arguments)},ut=a._emscripten_bind_b2WheelJoint_SetStiffness_1=function(){return(ut=a._emscripten_bind_b2WheelJoint_SetStiffness_1=
a.asm.mr).apply(null,arguments)},vt=a._emscripten_bind_b2WheelJoint_GetStiffness_0=function(){return(vt=a._emscripten_bind_b2WheelJoint_GetStiffness_0=a.asm.nr).apply(null,arguments)},wt=a._emscripten_bind_b2WheelJoint_SetDamping_1=function(){return(wt=a._emscripten_bind_b2WheelJoint_SetDamping_1=a.asm.or).apply(null,arguments)},xt=a._emscripten_bind_b2WheelJoint_GetDamping_0=function(){return(xt=a._emscripten_bind_b2WheelJoint_GetDamping_0=a.asm.pr).apply(null,arguments)},yt=a._emscripten_bind_b2WheelJoint_GetType_0=
function(){return(yt=a._emscripten_bind_b2WheelJoint_GetType_0=a.asm.qr).apply(null,arguments)},zt=a._emscripten_bind_b2WheelJoint_GetBodyA_0=function(){return(zt=a._emscripten_bind_b2WheelJoint_GetBodyA_0=a.asm.rr).apply(null,arguments)},At=a._emscripten_bind_b2WheelJoint_GetBodyB_0=function(){return(At=a._emscripten_bind_b2WheelJoint_GetBodyB_0=a.asm.sr).apply(null,arguments)},Bt=a._emscripten_bind_b2WheelJoint_GetAnchorA_0=function(){return(Bt=a._emscripten_bind_b2WheelJoint_GetAnchorA_0=a.asm.tr).apply(null,
arguments)},Ct=a._emscripten_bind_b2WheelJoint_GetAnchorB_0=function(){return(Ct=a._emscripten_bind_b2WheelJoint_GetAnchorB_0=a.asm.ur).apply(null,arguments)},Dt=a._emscripten_bind_b2WheelJoint_GetReactionForce_1=function(){return(Dt=a._emscripten_bind_b2WheelJoint_GetReactionForce_1=a.asm.vr).apply(null,arguments)},Et=a._emscripten_bind_b2WheelJoint_GetReactionTorque_1=function(){return(Et=a._emscripten_bind_b2WheelJoint_GetReactionTorque_1=a.asm.wr).apply(null,arguments)},Ft=a._emscripten_bind_b2WheelJoint_GetNext_0=
function(){return(Ft=a._emscripten_bind_b2WheelJoint_GetNext_0=a.asm.xr).apply(null,arguments)},Gt=a._emscripten_bind_b2WheelJoint_GetUserData_0=function(){return(Gt=a._emscripten_bind_b2WheelJoint_GetUserData_0=a.asm.yr).apply(null,arguments)},Ht=a._emscripten_bind_b2WheelJoint_GetCollideConnected_0=function(){return(Ht=a._emscripten_bind_b2WheelJoint_GetCollideConnected_0=a.asm.zr).apply(null,arguments)},It=a._emscripten_bind_b2WheelJoint___destroy___0=function(){return(It=a._emscripten_bind_b2WheelJoint___destroy___0=
a.asm.Ar).apply(null,arguments)},Jt=a._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0=function(){return(Jt=a._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0=a.asm.Br).apply(null,arguments)},Kt=a._emscripten_bind_b2WheelJointDef_Initialize_4=function(){return(Kt=a._emscripten_bind_b2WheelJointDef_Initialize_4=a.asm.Cr).apply(null,arguments)},Lt=a._emscripten_bind_b2WheelJointDef_get_localAnchorA_0=function(){return(Lt=a._emscripten_bind_b2WheelJointDef_get_localAnchorA_0=a.asm.Dr).apply(null,
arguments)},Mt=a._emscripten_bind_b2WheelJointDef_set_localAnchorA_1=function(){return(Mt=a._emscripten_bind_b2WheelJointDef_set_localAnchorA_1=a.asm.Er).apply(null,arguments)},Nt=a._emscripten_bind_b2WheelJointDef_get_localAnchorB_0=function(){return(Nt=a._emscripten_bind_b2WheelJointDef_get_localAnchorB_0=a.asm.Fr).apply(null,arguments)},Ot=a._emscripten_bind_b2WheelJointDef_set_localAnchorB_1=function(){return(Ot=a._emscripten_bind_b2WheelJointDef_set_localAnchorB_1=a.asm.Gr).apply(null,arguments)},
Pt=a._emscripten_bind_b2WheelJointDef_get_localAxisA_0=function(){return(Pt=a._emscripten_bind_b2WheelJointDef_get_localAxisA_0=a.asm.Hr).apply(null,arguments)},Qt=a._emscripten_bind_b2WheelJointDef_set_localAxisA_1=function(){return(Qt=a._emscripten_bind_b2WheelJointDef_set_localAxisA_1=a.asm.Ir).apply(null,arguments)},Rt=a._emscripten_bind_b2WheelJointDef_get_enableLimit_0=function(){return(Rt=a._emscripten_bind_b2WheelJointDef_get_enableLimit_0=a.asm.Jr).apply(null,arguments)},St=a._emscripten_bind_b2WheelJointDef_set_enableLimit_1=
function(){return(St=a._emscripten_bind_b2WheelJointDef_set_enableLimit_1=a.asm.Kr).apply(null,arguments)},Tt=a._emscripten_bind_b2WheelJointDef_get_lowerTranslation_0=function(){return(Tt=a._emscripten_bind_b2WheelJointDef_get_lowerTranslation_0=a.asm.Lr).apply(null,arguments)},Ut=a._emscripten_bind_b2WheelJointDef_set_lowerTranslation_1=function(){return(Ut=a._emscripten_bind_b2WheelJointDef_set_lowerTranslation_1=a.asm.Mr).apply(null,arguments)},Vt=a._emscripten_bind_b2WheelJointDef_get_upperTranslation_0=
function(){return(Vt=a._emscripten_bind_b2WheelJointDef_get_upperTranslation_0=a.asm.Nr).apply(null,arguments)},Wt=a._emscripten_bind_b2WheelJointDef_set_upperTranslation_1=function(){return(Wt=a._emscripten_bind_b2WheelJointDef_set_upperTranslation_1=a.asm.Or).apply(null,arguments)},Xt=a._emscripten_bind_b2WheelJointDef_get_enableMotor_0=function(){return(Xt=a._emscripten_bind_b2WheelJointDef_get_enableMotor_0=a.asm.Pr).apply(null,arguments)},Yt=a._emscripten_bind_b2WheelJointDef_set_enableMotor_1=
function(){return(Yt=a._emscripten_bind_b2WheelJointDef_set_enableMotor_1=a.asm.Qr).apply(null,arguments)},Zt=a._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0=function(){return(Zt=a._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0=a.asm.Rr).apply(null,arguments)},$t=a._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1=function(){return($t=a._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1=a.asm.Sr).apply(null,arguments)},au=a._emscripten_bind_b2WheelJointDef_get_motorSpeed_0=function(){return(au=
a._emscripten_bind_b2WheelJointDef_get_motorSpeed_0=a.asm.Tr).apply(null,arguments)},bu=a._emscripten_bind_b2WheelJointDef_set_motorSpeed_1=function(){return(bu=a._emscripten_bind_b2WheelJointDef_set_motorSpeed_1=a.asm.Ur).apply(null,arguments)},cu=a._emscripten_bind_b2WheelJointDef_get_stiffness_0=function(){return(cu=a._emscripten_bind_b2WheelJointDef_get_stiffness_0=a.asm.Vr).apply(null,arguments)},du=a._emscripten_bind_b2WheelJointDef_set_stiffness_1=function(){return(du=a._emscripten_bind_b2WheelJointDef_set_stiffness_1=
a.asm.Wr).apply(null,arguments)},eu=a._emscripten_bind_b2WheelJointDef_get_damping_0=function(){return(eu=a._emscripten_bind_b2WheelJointDef_get_damping_0=a.asm.Xr).apply(null,arguments)},fu=a._emscripten_bind_b2WheelJointDef_set_damping_1=function(){return(fu=a._emscripten_bind_b2WheelJointDef_set_damping_1=a.asm.Yr).apply(null,arguments)},gu=a._emscripten_bind_b2WheelJointDef_get_type_0=function(){return(gu=a._emscripten_bind_b2WheelJointDef_get_type_0=a.asm.Zr).apply(null,arguments)},hu=a._emscripten_bind_b2WheelJointDef_set_type_1=
function(){return(hu=a._emscripten_bind_b2WheelJointDef_set_type_1=a.asm._r).apply(null,arguments)},iu=a._emscripten_bind_b2WheelJointDef_get_userData_0=function(){return(iu=a._emscripten_bind_b2WheelJointDef_get_userData_0=a.asm.$r).apply(null,arguments)},ju=a._emscripten_bind_b2WheelJointDef_set_userData_1=function(){return(ju=a._emscripten_bind_b2WheelJointDef_set_userData_1=a.asm.as).apply(null,arguments)},ku=a._emscripten_bind_b2WheelJointDef_get_bodyA_0=function(){return(ku=a._emscripten_bind_b2WheelJointDef_get_bodyA_0=
a.asm.bs).apply(null,arguments)},lu=a._emscripten_bind_b2WheelJointDef_set_bodyA_1=function(){return(lu=a._emscripten_bind_b2WheelJointDef_set_bodyA_1=a.asm.cs).apply(null,arguments)},mu=a._emscripten_bind_b2WheelJointDef_get_bodyB_0=function(){return(mu=a._emscripten_bind_b2WheelJointDef_get_bodyB_0=a.asm.ds).apply(null,arguments)},nu=a._emscripten_bind_b2WheelJointDef_set_bodyB_1=function(){return(nu=a._emscripten_bind_b2WheelJointDef_set_bodyB_1=a.asm.es).apply(null,arguments)},ou=a._emscripten_bind_b2WheelJointDef_get_collideConnected_0=
function(){return(ou=a._emscripten_bind_b2WheelJointDef_get_collideConnected_0=a.asm.fs).apply(null,arguments)},pu=a._emscripten_bind_b2WheelJointDef_set_collideConnected_1=function(){return(pu=a._emscripten_bind_b2WheelJointDef_set_collideConnected_1=a.asm.gs).apply(null,arguments)},qu=a._emscripten_bind_b2WheelJointDef___destroy___0=function(){return(qu=a._emscripten_bind_b2WheelJointDef___destroy___0=a.asm.hs).apply(null,arguments)},ru=a._emscripten_bind_b2MotorJoint_SetLinearOffset_1=function(){return(ru=
a._emscripten_bind_b2MotorJoint_SetLinearOffset_1=a.asm.is).apply(null,arguments)},su=a._emscripten_bind_b2MotorJoint_GetLinearOffset_0=function(){return(su=a._emscripten_bind_b2MotorJoint_GetLinearOffset_0=a.asm.js).apply(null,arguments)},tu=a._emscripten_bind_b2MotorJoint_SetAngularOffset_1=function(){return(tu=a._emscripten_bind_b2MotorJoint_SetAngularOffset_1=a.asm.ks).apply(null,arguments)},uu=a._emscripten_bind_b2MotorJoint_GetAngularOffset_0=function(){return(uu=a._emscripten_bind_b2MotorJoint_GetAngularOffset_0=
a.asm.ls).apply(null,arguments)},vu=a._emscripten_bind_b2MotorJoint_SetMaxForce_1=function(){return(vu=a._emscripten_bind_b2MotorJoint_SetMaxForce_1=a.asm.ms).apply(null,arguments)},wu=a._emscripten_bind_b2MotorJoint_GetMaxForce_0=function(){return(wu=a._emscripten_bind_b2MotorJoint_GetMaxForce_0=a.asm.ns).apply(null,arguments)},xu=a._emscripten_bind_b2MotorJoint_SetMaxTorque_1=function(){return(xu=a._emscripten_bind_b2MotorJoint_SetMaxTorque_1=a.asm.os).apply(null,arguments)},yu=a._emscripten_bind_b2MotorJoint_GetMaxTorque_0=
function(){return(yu=a._emscripten_bind_b2MotorJoint_GetMaxTorque_0=a.asm.ps).apply(null,arguments)},zu=a._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1=function(){return(zu=a._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1=a.asm.qs).apply(null,arguments)},Au=a._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0=function(){return(Au=a._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0=a.asm.rs).apply(null,arguments)},Bu=a._emscripten_bind_b2MotorJoint_GetType_0=function(){return(Bu=a._emscripten_bind_b2MotorJoint_GetType_0=
a.asm.ss).apply(null,arguments)},Cu=a._emscripten_bind_b2MotorJoint_GetBodyA_0=function(){return(Cu=a._emscripten_bind_b2MotorJoint_GetBodyA_0=a.asm.ts).apply(null,arguments)},Du=a._emscripten_bind_b2MotorJoint_GetBodyB_0=function(){return(Du=a._emscripten_bind_b2MotorJoint_GetBodyB_0=a.asm.us).apply(null,arguments)},Eu=a._emscripten_bind_b2MotorJoint_GetAnchorA_0=function(){return(Eu=a._emscripten_bind_b2MotorJoint_GetAnchorA_0=a.asm.vs).apply(null,arguments)},Fu=a._emscripten_bind_b2MotorJoint_GetAnchorB_0=
function(){return(Fu=a._emscripten_bind_b2MotorJoint_GetAnchorB_0=a.asm.ws).apply(null,arguments)},Gu=a._emscripten_bind_b2MotorJoint_GetReactionForce_1=function(){return(Gu=a._emscripten_bind_b2MotorJoint_GetReactionForce_1=a.asm.xs).apply(null,arguments)},Hu=a._emscripten_bind_b2MotorJoint_GetReactionTorque_1=function(){return(Hu=a._emscripten_bind_b2MotorJoint_GetReactionTorque_1=a.asm.ys).apply(null,arguments)},Iu=a._emscripten_bind_b2MotorJoint_GetNext_0=function(){return(Iu=a._emscripten_bind_b2MotorJoint_GetNext_0=
a.asm.zs).apply(null,arguments)},Ju=a._emscripten_bind_b2MotorJoint_GetUserData_0=function(){return(Ju=a._emscripten_bind_b2MotorJoint_GetUserData_0=a.asm.As).apply(null,arguments)},Ku=a._emscripten_bind_b2MotorJoint_GetCollideConnected_0=function(){return(Ku=a._emscripten_bind_b2MotorJoint_GetCollideConnected_0=a.asm.Bs).apply(null,arguments)},Lu=a._emscripten_bind_b2MotorJoint___destroy___0=function(){return(Lu=a._emscripten_bind_b2MotorJoint___destroy___0=a.asm.Cs).apply(null,arguments)},Mu=a._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0=
function(){return(Mu=a._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0=a.asm.Ds).apply(null,arguments)},Nu=a._emscripten_bind_b2MotorJointDef_Initialize_2=function(){return(Nu=a._emscripten_bind_b2MotorJointDef_Initialize_2=a.asm.Es).apply(null,arguments)},Ou=a._emscripten_bind_b2MotorJointDef_get_linearOffset_0=function(){return(Ou=a._emscripten_bind_b2MotorJointDef_get_linearOffset_0=a.asm.Fs).apply(null,arguments)},Pu=a._emscripten_bind_b2MotorJointDef_set_linearOffset_1=function(){return(Pu=
a._emscripten_bind_b2MotorJointDef_set_linearOffset_1=a.asm.Gs).apply(null,arguments)},Qu=a._emscripten_bind_b2MotorJointDef_get_angularOffset_0=function(){return(Qu=a._emscripten_bind_b2MotorJointDef_get_angularOffset_0=a.asm.Hs).apply(null,arguments)},Ru=a._emscripten_bind_b2MotorJointDef_set_angularOffset_1=function(){return(Ru=a._emscripten_bind_b2MotorJointDef_set_angularOffset_1=a.asm.Is).apply(null,arguments)},Su=a._emscripten_bind_b2MotorJointDef_get_maxForce_0=function(){return(Su=a._emscripten_bind_b2MotorJointDef_get_maxForce_0=
a.asm.Js).apply(null,arguments)},Tu=a._emscripten_bind_b2MotorJointDef_set_maxForce_1=function(){return(Tu=a._emscripten_bind_b2MotorJointDef_set_maxForce_1=a.asm.Ks).apply(null,arguments)},Uu=a._emscripten_bind_b2MotorJointDef_get_maxTorque_0=function(){return(Uu=a._emscripten_bind_b2MotorJointDef_get_maxTorque_0=a.asm.Ls).apply(null,arguments)},Vu=a._emscripten_bind_b2MotorJointDef_set_maxTorque_1=function(){return(Vu=a._emscripten_bind_b2MotorJointDef_set_maxTorque_1=a.asm.Ms).apply(null,arguments)},
Wu=a._emscripten_bind_b2MotorJointDef_get_correctionFactor_0=function(){return(Wu=a._emscripten_bind_b2MotorJointDef_get_correctionFactor_0=a.asm.Ns).apply(null,arguments)},Xu=a._emscripten_bind_b2MotorJointDef_set_correctionFactor_1=function(){return(Xu=a._emscripten_bind_b2MotorJointDef_set_correctionFactor_1=a.asm.Os).apply(null,arguments)},Yu=a._emscripten_bind_b2MotorJointDef_get_type_0=function(){return(Yu=a._emscripten_bind_b2MotorJointDef_get_type_0=a.asm.Ps).apply(null,arguments)},Zu=a._emscripten_bind_b2MotorJointDef_set_type_1=
function(){return(Zu=a._emscripten_bind_b2MotorJointDef_set_type_1=a.asm.Qs).apply(null,arguments)},$u=a._emscripten_bind_b2MotorJointDef_get_userData_0=function(){return($u=a._emscripten_bind_b2MotorJointDef_get_userData_0=a.asm.Rs).apply(null,arguments)},av=a._emscripten_bind_b2MotorJointDef_set_userData_1=function(){return(av=a._emscripten_bind_b2MotorJointDef_set_userData_1=a.asm.Ss).apply(null,arguments)},bv=a._emscripten_bind_b2MotorJointDef_get_bodyA_0=function(){return(bv=a._emscripten_bind_b2MotorJointDef_get_bodyA_0=
a.asm.Ts).apply(null,arguments)},cv=a._emscripten_bind_b2MotorJointDef_set_bodyA_1=function(){return(cv=a._emscripten_bind_b2MotorJointDef_set_bodyA_1=a.asm.Us).apply(null,arguments)},dv=a._emscripten_bind_b2MotorJointDef_get_bodyB_0=function(){return(dv=a._emscripten_bind_b2MotorJointDef_get_bodyB_0=a.asm.Vs).apply(null,arguments)},ev=a._emscripten_bind_b2MotorJointDef_set_bodyB_1=function(){return(ev=a._emscripten_bind_b2MotorJointDef_set_bodyB_1=a.asm.Ws).apply(null,arguments)},fv=a._emscripten_bind_b2MotorJointDef_get_collideConnected_0=
function(){return(fv=a._emscripten_bind_b2MotorJointDef_get_collideConnected_0=a.asm.Xs).apply(null,arguments)},gv=a._emscripten_bind_b2MotorJointDef_set_collideConnected_1=function(){return(gv=a._emscripten_bind_b2MotorJointDef_set_collideConnected_1=a.asm.Ys).apply(null,arguments)},hv=a._emscripten_bind_b2MotorJointDef___destroy___0=function(){return(hv=a._emscripten_bind_b2MotorJointDef___destroy___0=a.asm.Zs).apply(null,arguments)},iv=a._emscripten_bind_b2RopeTuning_b2RopeTuning_0=function(){return(iv=
a._emscripten_bind_b2RopeTuning_b2RopeTuning_0=a.asm._s).apply(null,arguments)},jv=a._emscripten_bind_b2RopeTuning_get_stretchingModel_0=function(){return(jv=a._emscripten_bind_b2RopeTuning_get_stretchingModel_0=a.asm.$s).apply(null,arguments)},kv=a._emscripten_bind_b2RopeTuning_set_stretchingModel_1=function(){return(kv=a._emscripten_bind_b2RopeTuning_set_stretchingModel_1=a.asm.at).apply(null,arguments)},lv=a._emscripten_bind_b2RopeTuning_get_bendingModel_0=function(){return(lv=a._emscripten_bind_b2RopeTuning_get_bendingModel_0=
a.asm.bt).apply(null,arguments)},mv=a._emscripten_bind_b2RopeTuning_set_bendingModel_1=function(){return(mv=a._emscripten_bind_b2RopeTuning_set_bendingModel_1=a.asm.ct).apply(null,arguments)},nv=a._emscripten_bind_b2RopeTuning_get_damping_0=function(){return(nv=a._emscripten_bind_b2RopeTuning_get_damping_0=a.asm.dt).apply(null,arguments)},ov=a._emscripten_bind_b2RopeTuning_set_damping_1=function(){return(ov=a._emscripten_bind_b2RopeTuning_set_damping_1=a.asm.et).apply(null,arguments)},pv=a._emscripten_bind_b2RopeTuning_get_stretchStiffness_0=
function(){return(pv=a._emscripten_bind_b2RopeTuning_get_stretchStiffness_0=a.asm.ft).apply(null,arguments)},qv=a._emscripten_bind_b2RopeTuning_set_stretchStiffness_1=function(){return(qv=a._emscripten_bind_b2RopeTuning_set_stretchStiffness_1=a.asm.gt).apply(null,arguments)},rv=a._emscripten_bind_b2RopeTuning_get_stretchHertz_0=function(){return(rv=a._emscripten_bind_b2RopeTuning_get_stretchHertz_0=a.asm.ht).apply(null,arguments)},sv=a._emscripten_bind_b2RopeTuning_set_stretchHertz_1=function(){return(sv=
a._emscripten_bind_b2RopeTuning_set_stretchHertz_1=a.asm.it).apply(null,arguments)},tv=a._emscripten_bind_b2RopeTuning_get_stretchDamping_0=function(){return(tv=a._emscripten_bind_b2RopeTuning_get_stretchDamping_0=a.asm.jt).apply(null,arguments)},uv=a._emscripten_bind_b2RopeTuning_set_stretchDamping_1=function(){return(uv=a._emscripten_bind_b2RopeTuning_set_stretchDamping_1=a.asm.kt).apply(null,arguments)},vv=a._emscripten_bind_b2RopeTuning_get_bendStiffness_0=function(){return(vv=a._emscripten_bind_b2RopeTuning_get_bendStiffness_0=
a.asm.lt).apply(null,arguments)},wv=a._emscripten_bind_b2RopeTuning_set_bendStiffness_1=function(){return(wv=a._emscripten_bind_b2RopeTuning_set_bendStiffness_1=a.asm.mt).apply(null,arguments)},xv=a._emscripten_bind_b2RopeTuning_get_bendHertz_0=function(){return(xv=a._emscripten_bind_b2RopeTuning_get_bendHertz_0=a.asm.nt).apply(null,arguments)},yv=a._emscripten_bind_b2RopeTuning_set_bendHertz_1=function(){return(yv=a._emscripten_bind_b2RopeTuning_set_bendHertz_1=a.asm.ot).apply(null,arguments)},zv=
a._emscripten_bind_b2RopeTuning_get_bendDamping_0=function(){return(zv=a._emscripten_bind_b2RopeTuning_get_bendDamping_0=a.asm.pt).apply(null,arguments)},Av=a._emscripten_bind_b2RopeTuning_set_bendDamping_1=function(){return(Av=a._emscripten_bind_b2RopeTuning_set_bendDamping_1=a.asm.qt).apply(null,arguments)},Bv=a._emscripten_bind_b2RopeTuning_get_isometric_0=function(){return(Bv=a._emscripten_bind_b2RopeTuning_get_isometric_0=a.asm.rt).apply(null,arguments)},Cv=a._emscripten_bind_b2RopeTuning_set_isometric_1=
function(){return(Cv=a._emscripten_bind_b2RopeTuning_set_isometric_1=a.asm.st).apply(null,arguments)},Dv=a._emscripten_bind_b2RopeTuning_get_fixedEffectiveMass_0=function(){return(Dv=a._emscripten_bind_b2RopeTuning_get_fixedEffectiveMass_0=a.asm.tt).apply(null,arguments)},Ev=a._emscripten_bind_b2RopeTuning_set_fixedEffectiveMass_1=function(){return(Ev=a._emscripten_bind_b2RopeTuning_set_fixedEffectiveMass_1=a.asm.ut).apply(null,arguments)},Fv=a._emscripten_bind_b2RopeTuning_get_warmStart_0=function(){return(Fv=
a._emscripten_bind_b2RopeTuning_get_warmStart_0=a.asm.vt).apply(null,arguments)},Gv=a._emscripten_bind_b2RopeTuning_set_warmStart_1=function(){return(Gv=a._emscripten_bind_b2RopeTuning_set_warmStart_1=a.asm.wt).apply(null,arguments)},Hv=a._emscripten_bind_b2RopeTuning___destroy___0=function(){return(Hv=a._emscripten_bind_b2RopeTuning___destroy___0=a.asm.xt).apply(null,arguments)},Iv=a._emscripten_bind_b2RopeDef_b2RopeDef_0=function(){return(Iv=a._emscripten_bind_b2RopeDef_b2RopeDef_0=a.asm.yt).apply(null,
arguments)},Jv=a._emscripten_bind_b2RopeDef_get_position_0=function(){return(Jv=a._emscripten_bind_b2RopeDef_get_position_0=a.asm.zt).apply(null,arguments)},Kv=a._emscripten_bind_b2RopeDef_set_position_1=function(){return(Kv=a._emscripten_bind_b2RopeDef_set_position_1=a.asm.At).apply(null,arguments)},Lv=a._emscripten_bind_b2RopeDef_get_vertices_0=function(){return(Lv=a._emscripten_bind_b2RopeDef_get_vertices_0=a.asm.Bt).apply(null,arguments)},Mv=a._emscripten_bind_b2RopeDef_set_vertices_1=function(){return(Mv=
a._emscripten_bind_b2RopeDef_set_vertices_1=a.asm.Ct).apply(null,arguments)},Nv=a._emscripten_bind_b2RopeDef_get_count_0=function(){return(Nv=a._emscripten_bind_b2RopeDef_get_count_0=a.asm.Dt).apply(null,arguments)},Ov=a._emscripten_bind_b2RopeDef_set_count_1=function(){return(Ov=a._emscripten_bind_b2RopeDef_set_count_1=a.asm.Et).apply(null,arguments)},Pv=a._emscripten_bind_b2RopeDef_get_gravity_0=function(){return(Pv=a._emscripten_bind_b2RopeDef_get_gravity_0=a.asm.Ft).apply(null,arguments)},Qv=
a._emscripten_bind_b2RopeDef_set_gravity_1=function(){return(Qv=a._emscripten_bind_b2RopeDef_set_gravity_1=a.asm.Gt).apply(null,arguments)},Rv=a._emscripten_bind_b2RopeDef_get_tuning_0=function(){return(Rv=a._emscripten_bind_b2RopeDef_get_tuning_0=a.asm.Ht).apply(null,arguments)},Sv=a._emscripten_bind_b2RopeDef_set_tuning_1=function(){return(Sv=a._emscripten_bind_b2RopeDef_set_tuning_1=a.asm.It).apply(null,arguments)},Tv=a._emscripten_bind_b2RopeDef___destroy___0=function(){return(Tv=a._emscripten_bind_b2RopeDef___destroy___0=
a.asm.Jt).apply(null,arguments)},Uv=a._emscripten_bind_b2Rope_b2Rope_0=function(){return(Uv=a._emscripten_bind_b2Rope_b2Rope_0=a.asm.Kt).apply(null,arguments)},Vv=a._emscripten_bind_b2Rope_Create_1=function(){return(Vv=a._emscripten_bind_b2Rope_Create_1=a.asm.Lt).apply(null,arguments)},Wv=a._emscripten_bind_b2Rope_SetTuning_1=function(){return(Wv=a._emscripten_bind_b2Rope_SetTuning_1=a.asm.Mt).apply(null,arguments)},Xv=a._emscripten_bind_b2Rope_Step_3=function(){return(Xv=a._emscripten_bind_b2Rope_Step_3=
a.asm.Nt).apply(null,arguments)},Yv=a._emscripten_bind_b2Rope_Reset_1=function(){return(Yv=a._emscripten_bind_b2Rope_Reset_1=a.asm.Ot).apply(null,arguments)},Zv=a._emscripten_bind_b2Rope_Draw_1=function(){return(Zv=a._emscripten_bind_b2Rope_Draw_1=a.asm.Pt).apply(null,arguments)},$v=a._emscripten_bind_b2Rope___destroy___0=function(){return($v=a._emscripten_bind_b2Rope___destroy___0=a.asm.Qt).apply(null,arguments)},aw=a._emscripten_bind_b2ClipVertex_b2ClipVertex_0=function(){return(aw=a._emscripten_bind_b2ClipVertex_b2ClipVertex_0=
a.asm.Rt).apply(null,arguments)},bw=a._emscripten_bind_b2ClipVertex_get_v_0=function(){return(bw=a._emscripten_bind_b2ClipVertex_get_v_0=a.asm.St).apply(null,arguments)},cw=a._emscripten_bind_b2ClipVertex_set_v_1=function(){return(cw=a._emscripten_bind_b2ClipVertex_set_v_1=a.asm.Tt).apply(null,arguments)},dw=a._emscripten_bind_b2ClipVertex_get_id_0=function(){return(dw=a._emscripten_bind_b2ClipVertex_get_id_0=a.asm.Ut).apply(null,arguments)},ew=a._emscripten_bind_b2ClipVertex_set_id_1=function(){return(ew=
a._emscripten_bind_b2ClipVertex_set_id_1=a.asm.Vt).apply(null,arguments)},fw=a._emscripten_bind_b2ClipVertex___destroy___0=function(){return(fw=a._emscripten_bind_b2ClipVertex___destroy___0=a.asm.Wt).apply(null,arguments)},gw=a._emscripten_enum_b2ShapeType_e_circle=function(){return(gw=a._emscripten_enum_b2ShapeType_e_circle=a.asm.Xt).apply(null,arguments)},hw=a._emscripten_enum_b2ShapeType_e_edge=function(){return(hw=a._emscripten_enum_b2ShapeType_e_edge=a.asm.Yt).apply(null,arguments)},iw=a._emscripten_enum_b2ShapeType_e_polygon=
function(){return(iw=a._emscripten_enum_b2ShapeType_e_polygon=a.asm.Zt).apply(null,arguments)},jw=a._emscripten_enum_b2ShapeType_e_chain=function(){return(jw=a._emscripten_enum_b2ShapeType_e_chain=a.asm._t).apply(null,arguments)},kw=a._emscripten_enum_b2ShapeType_e_typeCount=function(){return(kw=a._emscripten_enum_b2ShapeType_e_typeCount=a.asm.$t).apply(null,arguments)},lw=a._emscripten_enum_b2BodyType_b2_staticBody=function(){return(lw=a._emscripten_enum_b2BodyType_b2_staticBody=a.asm.au).apply(null,
arguments)},mw=a._emscripten_enum_b2BodyType_b2_kinematicBody=function(){return(mw=a._emscripten_enum_b2BodyType_b2_kinematicBody=a.asm.bu).apply(null,arguments)},nw=a._emscripten_enum_b2BodyType_b2_dynamicBody=function(){return(nw=a._emscripten_enum_b2BodyType_b2_dynamicBody=a.asm.cu).apply(null,arguments)},ow=a._emscripten_enum_b2JointType_e_unknownJoint=function(){return(ow=a._emscripten_enum_b2JointType_e_unknownJoint=a.asm.du).apply(null,arguments)},pw=a._emscripten_enum_b2JointType_e_revoluteJoint=
function(){return(pw=a._emscripten_enum_b2JointType_e_revoluteJoint=a.asm.eu).apply(null,arguments)},qw=a._emscripten_enum_b2JointType_e_prismaticJoint=function(){return(qw=a._emscripten_enum_b2JointType_e_prismaticJoint=a.asm.fu).apply(null,arguments)},rw=a._emscripten_enum_b2JointType_e_distanceJoint=function(){return(rw=a._emscripten_enum_b2JointType_e_distanceJoint=a.asm.gu).apply(null,arguments)},sw=a._emscripten_enum_b2JointType_e_pulleyJoint=function(){return(sw=a._emscripten_enum_b2JointType_e_pulleyJoint=
a.asm.hu).apply(null,arguments)},tw=a._emscripten_enum_b2JointType_e_mouseJoint=function(){return(tw=a._emscripten_enum_b2JointType_e_mouseJoint=a.asm.iu).apply(null,arguments)},uw=a._emscripten_enum_b2JointType_e_gearJoint=function(){return(uw=a._emscripten_enum_b2JointType_e_gearJoint=a.asm.ju).apply(null,arguments)},vw=a._emscripten_enum_b2JointType_e_wheelJoint=function(){return(vw=a._emscripten_enum_b2JointType_e_wheelJoint=a.asm.ku).apply(null,arguments)},ww=a._emscripten_enum_b2JointType_e_weldJoint=
function(){return(ww=a._emscripten_enum_b2JointType_e_weldJoint=a.asm.lu).apply(null,arguments)},xw=a._emscripten_enum_b2JointType_e_frictionJoint=function(){return(xw=a._emscripten_enum_b2JointType_e_frictionJoint=a.asm.mu).apply(null,arguments)},yw=a._emscripten_enum_b2JointType_e_ropeJoint=function(){return(yw=a._emscripten_enum_b2JointType_e_ropeJoint=a.asm.nu).apply(null,arguments)},zw=a._emscripten_enum_b2JointType_e_motorJoint=function(){return(zw=a._emscripten_enum_b2JointType_e_motorJoint=
a.asm.ou).apply(null,arguments)},Aw=a._emscripten_enum_b2ContactFeatureType_e_vertex=function(){return(Aw=a._emscripten_enum_b2ContactFeatureType_e_vertex=a.asm.pu).apply(null,arguments)},Bw=a._emscripten_enum_b2ContactFeatureType_e_face=function(){return(Bw=a._emscripten_enum_b2ContactFeatureType_e_face=a.asm.qu).apply(null,arguments)},Cw=a._emscripten_enum_b2DrawFlag_e_shapeBit=function(){return(Cw=a._emscripten_enum_b2DrawFlag_e_shapeBit=a.asm.ru).apply(null,arguments)},Dw=a._emscripten_enum_b2DrawFlag_e_jointBit=
function(){return(Dw=a._emscripten_enum_b2DrawFlag_e_jointBit=a.asm.su).apply(null,arguments)},Ew=a._emscripten_enum_b2DrawFlag_e_aabbBit=function(){return(Ew=a._emscripten_enum_b2DrawFlag_e_aabbBit=a.asm.tu).apply(null,arguments)},Fw=a._emscripten_enum_b2DrawFlag_e_pairBit=function(){return(Fw=a._emscripten_enum_b2DrawFlag_e_pairBit=a.asm.uu).apply(null,arguments)},Gw=a._emscripten_enum_b2DrawFlag_e_centerOfMassBit=function(){return(Gw=a._emscripten_enum_b2DrawFlag_e_centerOfMassBit=a.asm.vu).apply(null,
arguments)},Hw=a._emscripten_enum_b2ManifoldType_e_circles=function(){return(Hw=a._emscripten_enum_b2ManifoldType_e_circles=a.asm.wu).apply(null,arguments)},Iw=a._emscripten_enum_b2ManifoldType_e_faceA=function(){return(Iw=a._emscripten_enum_b2ManifoldType_e_faceA=a.asm.xu).apply(null,arguments)},Jw=a._emscripten_enum_b2ManifoldType_e_faceB=function(){return(Jw=a._emscripten_enum_b2ManifoldType_e_faceB=a.asm.yu).apply(null,arguments)},Kw=a._emscripten_enum_b2PointState_b2_nullState=function(){return(Kw=
a._emscripten_enum_b2PointState_b2_nullState=a.asm.zu).apply(null,arguments)},Lw=a._emscripten_enum_b2PointState_b2_addState=function(){return(Lw=a._emscripten_enum_b2PointState_b2_addState=a.asm.Au).apply(null,arguments)},Mw=a._emscripten_enum_b2PointState_b2_persistState=function(){return(Mw=a._emscripten_enum_b2PointState_b2_persistState=a.asm.Bu).apply(null,arguments)},Nw=a._emscripten_enum_b2PointState_b2_removeState=function(){return(Nw=a._emscripten_enum_b2PointState_b2_removeState=a.asm.Cu).apply(null,
arguments)},Ow=a._emscripten_enum_b2StretchingModel_b2_pbdStretchingModel=function(){return(Ow=a._emscripten_enum_b2StretchingModel_b2_pbdStretchingModel=a.asm.Du).apply(null,arguments)},Pw=a._emscripten_enum_b2StretchingModel_b2_xpbdStretchingModel=function(){return(Pw=a._emscripten_enum_b2StretchingModel_b2_xpbdStretchingModel=a.asm.Eu).apply(null,arguments)},Qw=a._emscripten_enum_b2BendingModel_b2_springAngleBendingModel=function(){return(Qw=a._emscripten_enum_b2BendingModel_b2_springAngleBendingModel=
a.asm.Fu).apply(null,arguments)},Rw=a._emscripten_enum_b2BendingModel_b2_pbdAngleBendingModel=function(){return(Rw=a._emscripten_enum_b2BendingModel_b2_pbdAngleBendingModel=a.asm.Gu).apply(null,arguments)},Sw=a._emscripten_enum_b2BendingModel_b2_xpbdAngleBendingModel=function(){return(Sw=a._emscripten_enum_b2BendingModel_b2_xpbdAngleBendingModel=a.asm.Hu).apply(null,arguments)},Tw=a._emscripten_enum_b2BendingModel_b2_pbdDistanceBendingModel=function(){return(Tw=a._emscripten_enum_b2BendingModel_b2_pbdDistanceBendingModel=
a.asm.Iu).apply(null,arguments)},Uw=a._emscripten_enum_b2BendingModel_b2_pbdHeightBendingModel=function(){return(Uw=a._emscripten_enum_b2BendingModel_b2_pbdHeightBendingModel=a.asm.Ju).apply(null,arguments)},Vw=a._emscripten_bind_b2RopeDef_get_masses_0=function(){return(Vw=a._emscripten_bind_b2RopeDef_get_masses_0=a.asm.Ku).apply(null,arguments)},Ww=a._emscripten_bind_b2RopeDef_set_masses_1=function(){return(Ww=a._emscripten_bind_b2RopeDef_set_masses_1=a.asm.Lu).apply(null,arguments)},Xw=a._emscripten_bind_b2GetPointStates_4=
function(){return(Xw=a._emscripten_bind_b2GetPointStates_4=a.asm.Mu).apply(null,arguments)},Yw=a._emscripten_bind_b2CollideCircles_5=function(){return(Yw=a._emscripten_bind_b2CollideCircles_5=a.asm.Nu).apply(null,arguments)},Zw=a._emscripten_bind_b2CollidePolygonAndCircle_5=function(){return(Zw=a._emscripten_bind_b2CollidePolygonAndCircle_5=a.asm.Ou).apply(null,arguments)},$w=a._emscripten_bind_b2CollidePolygons_5=function(){return($w=a._emscripten_bind_b2CollidePolygons_5=a.asm.Pu).apply(null,arguments)},
ax=a._emscripten_bind_b2CollideEdgeAndCircle_5=function(){return(ax=a._emscripten_bind_b2CollideEdgeAndCircle_5=a.asm.Qu).apply(null,arguments)},bx=a._emscripten_bind_b2CollideEdgeAndPolygon_5=function(){return(bx=a._emscripten_bind_b2CollideEdgeAndPolygon_5=a.asm.Ru).apply(null,arguments)},cx=a._emscripten_bind_b2ClipSegmentToLine_5=function(){return(cx=a._emscripten_bind_b2ClipSegmentToLine_5=a.asm.Su).apply(null,arguments)},dx=a._emscripten_bind_b2TestOverlap_6=function(){return(dx=a._emscripten_bind_b2TestOverlap_6=
a.asm.Tu).apply(null,arguments)},ex=a._emscripten_bind_b2TestOverlap_2=function(){return(ex=a._emscripten_bind_b2TestOverlap_2=a.asm.Uu).apply(null,arguments)},fx=a._emscripten_bind_b2LinearStiffness_6=function(){return(fx=a._emscripten_bind_b2LinearStiffness_6=a.asm.Vu).apply(null,arguments)},gx=a._emscripten_bind_b2AngularStiffness_6=function(){return(gx=a._emscripten_bind_b2AngularStiffness_6=a.asm.Wu).apply(null,arguments)};a._malloc=function(){return(a._malloc=a.asm.Yu).apply(null,arguments)};
a._free=function(){return(a._free=a.asm.Zu).apply(null,arguments)};var hx;Ja=function ix(){hx||jx();hx||(Ja=ix)};
function jx(){function b(){if(!hx&&(hx=!0,a.calledRun=!0,!sa)){Ga=!0;Ra(Ea);aa(a);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();Fa.unshift(c)}Ra(Fa)}}if(!(0<Ha)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)Da.unshift(a.preRun.shift());Ra(Da);0<Ha||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},
1);b()},1)):b())}}a.run=jx;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();jx();function e(){}e.prototype=Object.create(e.prototype);e.prototype.constructor=e;e.prototype.av=e;e.bv={};a.WrapperObject=e;function g(b){return(b||e).bv}a.getCache=g;function h(b,c){var d=g(c),f=d[b];if(f)return f;f=Object.create((c||e).prototype);f.$u=b;return d[b]=f}a.wrapPointer=h;a.castObject=function(b,c){return h(b.$u,c)};a.NULL=h(0);
a.destroy=function(b){if(!b.__destroy__)throw"Error: Cannot destroy object. (Did you create it yourself?)";b.__destroy__();delete g(b.av)[b.$u]};a.compare=function(b,c){return b.$u===c.$u};a.getPointer=function(b){return b.$u};a.getClass=function(b){return b.av};var kx=0,lx=0,mx=[],nx=0;function ox(){if(nx){for(var b=0;b<mx.length;b++)a._free(mx[b]);mx.length=0;a._free(kx);kx=0;lx+=nx;nx=0}kx||(lx+=128,(kx=a._malloc(lx))||na("Assertion failed: undefined"))}
function px(){throw"cannot construct a b2ContactListener, no constructor in IDL";}px.prototype=Object.create(e.prototype);px.prototype.constructor=px;px.prototype.av=px;px.bv={};a.b2ContactListener=px;px.prototype.__destroy__=px.prototype.cv=function(){Xa(this.$u)};function k(){throw"cannot construct a b2Shape, no constructor in IDL";}k.prototype=Object.create(e.prototype);k.prototype.constructor=k;k.prototype.av=k;k.bv={};a.b2Shape=k;k.prototype.GetType=function(){return Ya(this.$u)};
k.prototype.GetChildCount=function(){return Za(this.$u)};k.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!$a(d,b,c)};k.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!ab(p,b,c,d,f)};
k.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);bb(f,b,c,d)};k.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);cb(d,b,c)};k.prototype.get_m_type=k.prototype.uv=function(){return db(this.$u)};k.prototype.set_m_type=k.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);eb(c,b)};
Object.defineProperty(k.prototype,"m_type",{get:k.prototype.uv,set:k.prototype.xv});k.prototype.get_m_radius=k.prototype.tv=function(){return fb(this.$u)};k.prototype.set_m_radius=k.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);hb(c,b)};Object.defineProperty(k.prototype,"m_radius",{get:k.prototype.tv,set:k.prototype.wv});k.prototype.__destroy__=k.prototype.cv=function(){ib(this.$u)};function qx(){throw"cannot construct a b2RayCastCallback, no constructor in IDL";}
qx.prototype=Object.create(e.prototype);qx.prototype.constructor=qx;qx.prototype.av=qx;qx.bv={};a.b2RayCastCallback=qx;qx.prototype.__destroy__=qx.prototype.cv=function(){jb(this.$u)};function rx(){throw"cannot construct a b2QueryCallback, no constructor in IDL";}rx.prototype=Object.create(e.prototype);rx.prototype.constructor=rx;rx.prototype.av=rx;rx.bv={};a.b2QueryCallback=rx;rx.prototype.__destroy__=rx.prototype.cv=function(){kb(this.$u)};function l(){this.$u=lb();g(l)[this.$u]=this}
l.prototype=Object.create(e.prototype);l.prototype.constructor=l;l.prototype.av=l;l.bv={};a.b2JointDef=l;l.prototype.get_type=l.prototype.dv=function(){return mb(this.$u)};l.prototype.set_type=l.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nb(c,b)};Object.defineProperty(l.prototype,"type",{get:l.prototype.dv,set:l.prototype.fv});l.prototype.get_userData=l.prototype.ev=function(){return h(ob(this.$u),m)};
l.prototype.set_userData=l.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pb(c,b)};Object.defineProperty(l.prototype,"userData",{get:l.prototype.ev,set:l.prototype.gv});l.prototype.get_bodyA=l.prototype.hv=function(){return h(qb(this.$u),n)};l.prototype.set_bodyA=l.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rb(c,b)};Object.defineProperty(l.prototype,"bodyA",{get:l.prototype.hv,set:l.prototype.lv});
l.prototype.get_bodyB=l.prototype.jv=function(){return h(vb(this.$u),n)};l.prototype.set_bodyB=l.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wb(c,b)};Object.defineProperty(l.prototype,"bodyB",{get:l.prototype.jv,set:l.prototype.mv});l.prototype.get_collideConnected=l.prototype.kv=function(){return!!xb(this.$u)};l.prototype.set_collideConnected=l.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yb(c,b)};
Object.defineProperty(l.prototype,"collideConnected",{get:l.prototype.kv,set:l.prototype.nv});l.prototype.__destroy__=l.prototype.cv=function(){zb(this.$u)};function q(){throw"cannot construct a b2Joint, no constructor in IDL";}q.prototype=Object.create(e.prototype);q.prototype.constructor=q;q.prototype.av=q;q.bv={};a.b2Joint=q;q.prototype.GetType=function(){return Ab(this.$u)};q.prototype.GetBodyA=function(){return h(Bb(this.$u),n)};q.prototype.GetBodyB=function(){return h(Cb(this.$u),n)};
q.prototype.GetAnchorA=function(){return h(Db(this.$u),r)};q.prototype.GetAnchorB=function(){return h(Eb(this.$u),r)};q.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Fb(c,b),r)};q.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Gb(c,b)};q.prototype.GetNext=function(){return h(Hb(this.$u),q)};q.prototype.GetUserData=function(){return h(Ib(this.$u),m)};q.prototype.GetCollideConnected=function(){return!!Jb(this.$u)};
q.prototype.Dump=function(){Kb(this.$u)};function sx(){throw"cannot construct a b2ContactFilter, no constructor in IDL";}sx.prototype=Object.create(e.prototype);sx.prototype.constructor=sx;sx.prototype.av=sx;sx.bv={};a.b2ContactFilter=sx;sx.prototype.__destroy__=sx.prototype.cv=function(){Lb(this.$u)};function tx(){throw"cannot construct a b2DestructionListenerWrapper, no constructor in IDL";}tx.prototype=Object.create(e.prototype);tx.prototype.constructor=tx;tx.prototype.av=tx;tx.bv={};
a.b2DestructionListenerWrapper=tx;tx.prototype.__destroy__=tx.prototype.cv=function(){Mb(this.$u)};function ux(){throw"cannot construct a b2Draw, no constructor in IDL";}ux.prototype=Object.create(e.prototype);ux.prototype.constructor=ux;ux.prototype.av=ux;ux.bv={};a.b2Draw=ux;ux.prototype.SetFlags=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Nb(c,b)};ux.prototype.GetFlags=function(){return Ob(this.$u)};
ux.prototype.AppendFlags=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pb(c,b)};ux.prototype.ClearFlags=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qb(c,b)};ux.prototype.__destroy__=ux.prototype.cv=function(){Rb(this.$u)};function vx(){throw"cannot construct a VoidPtr, no constructor in IDL";}vx.prototype=Object.create(e.prototype);vx.prototype.constructor=vx;vx.prototype.av=vx;vx.bv={};a.VoidPtr=vx;vx.prototype.__destroy__=vx.prototype.cv=function(){Sb(this.$u)};
function wx(){throw"cannot construct a b2Contact, no constructor in IDL";}wx.prototype=Object.create(e.prototype);wx.prototype.constructor=wx;wx.prototype.av=wx;wx.bv={};a.b2Contact=wx;wx.prototype.GetManifold=function(){return h(Tb(this.$u),t)};wx.prototype.GetWorldManifold=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ub(c,b)};wx.prototype.IsTouching=function(){return!!Vb(this.$u)};wx.prototype.SetEnabled=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wb(c,b)};
wx.prototype.IsEnabled=function(){return!!Xb(this.$u)};wx.prototype.GetNext=function(){return h(Yb(this.$u),wx)};wx.prototype.GetFixtureA=function(){return h(Zb(this.$u),u)};wx.prototype.GetChildIndexA=function(){return $b(this.$u)};wx.prototype.GetFixtureB=function(){return h(ac(this.$u),u)};wx.prototype.GetChildIndexB=function(){return bc(this.$u)};wx.prototype.SetFriction=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cc(c,b)};wx.prototype.GetFriction=function(){return dc(this.$u)};
wx.prototype.ResetFriction=function(){ec(this.$u)};wx.prototype.SetRestitution=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fc(c,b)};wx.prototype.GetRestitution=function(){return gc(this.$u)};wx.prototype.ResetRestitution=function(){hc(this.$u)};wx.prototype.SetRestitutionThreshold=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ic(c,b)};wx.prototype.GetRestitutionThreshold=function(){return jc(this.$u)};wx.prototype.ResetRestitutionThreshold=function(){kc(this.$u)};
wx.prototype.SetTangentSpeed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lc(c,b)};wx.prototype.GetTangentSpeed=function(){return mc(this.$u)};function xx(){this.$u=nc();g(xx)[this.$u]=this}xx.prototype=Object.create(px.prototype);xx.prototype.constructor=xx;xx.prototype.av=xx;xx.bv={};a.JSContactListener=xx;xx.prototype.BeginContact=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);oc(c,b)};
xx.prototype.EndContact=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pc(c,b)};xx.prototype.PreSolve=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);qc(d,b,c)};xx.prototype.PostSolve=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);rc(d,b,c)};xx.prototype.__destroy__=xx.prototype.cv=function(){sc(this.$u)};
function yx(){throw"cannot construct a JSContactListenerWithoutSolveCallbacks, no constructor in IDL";}yx.prototype=Object.create(px.prototype);yx.prototype.constructor=yx;yx.prototype.av=yx;yx.bv={};a.JSContactListenerWithoutSolveCallbacks=yx;yx.prototype.JSContactListener=function(){tc(this.$u)};yx.prototype.BeginContact=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);uc(c,b)};yx.prototype.EndContact=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vc(c,b)};
yx.prototype.__destroy__=yx.prototype.cv=function(){wc(this.$u)};function v(b){b&&"object"===typeof b&&(b=b.$u);this.$u=xc(b);g(v)[this.$u]=this}v.prototype=Object.create(e.prototype);v.prototype.constructor=v;v.prototype.av=v;v.bv={};a.b2World=v;v.prototype.SetDestructionListener=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yc(c,b)};v.prototype.SetContactFilter=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zc(c,b)};
v.prototype.SetContactListener=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ac(c,b)};v.prototype.SetDebugDraw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Bc(c,b)};v.prototype.CreateBody=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Cc(c,b),n)};v.prototype.DestroyBody=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Dc(c,b)};v.prototype.CreateJoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Ec(c,b),q)};
v.prototype.DestroyJoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fc(c,b)};v.prototype.Step=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Gc(f,b,c,d)};v.prototype.ClearForces=function(){Hc(this.$u)};v.prototype.DebugDraw=function(){Ic(this.$u)};v.prototype.QueryAABB=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Jc(d,b,c)};
v.prototype.RayCast=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Kc(f,b,c,d)};v.prototype.GetBodyList=function(){return h(Lc(this.$u),n)};v.prototype.GetJointList=function(){return h(Mc(this.$u),q)};v.prototype.GetContactList=function(){return h(Nc(this.$u),wx)};v.prototype.SetAllowSleeping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Oc(c,b)};v.prototype.GetAllowSleeping=function(){return!!Pc(this.$u)};
v.prototype.SetWarmStarting=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qc(c,b)};v.prototype.GetWarmStarting=function(){return!!Rc(this.$u)};v.prototype.SetContinuousPhysics=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sc(c,b)};v.prototype.GetContinuousPhysics=function(){return!!Tc(this.$u)};v.prototype.SetSubStepping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Uc(c,b)};v.prototype.GetSubStepping=function(){return!!Vc(this.$u)};
v.prototype.GetProxyCount=function(){return Wc(this.$u)};v.prototype.GetBodyCount=function(){return Xc(this.$u)};v.prototype.GetJointCount=function(){return Yc(this.$u)};v.prototype.GetContactCount=function(){return Zc(this.$u)};v.prototype.GetTreeHeight=function(){return $c(this.$u)};v.prototype.GetTreeBalance=function(){return ad(this.$u)};v.prototype.GetTreeQuality=function(){return bd(this.$u)};v.prototype.SetGravity=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cd(c,b)};
v.prototype.GetGravity=function(){return h(dd(this.$u),r)};v.prototype.IsLocked=function(){return!!ed(this.$u)};v.prototype.SetAutoClearForces=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fd(c,b)};v.prototype.GetAutoClearForces=function(){return!!gd(this.$u)};v.prototype.GetProfile=function(){return h(hd(this.$u),w)};v.prototype.Dump=function(){jd(this.$u)};v.prototype.__destroy__=v.prototype.cv=function(){kd(this.$u)};
function zx(){throw"cannot construct a b2FixtureUserData, no constructor in IDL";}zx.prototype=Object.create(e.prototype);zx.prototype.constructor=zx;zx.prototype.av=zx;zx.bv={};a.b2FixtureUserData=zx;zx.prototype.get_pointer=zx.prototype.Ev=function(){return ld(this.$u)};zx.prototype.set_pointer=zx.prototype.Kv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);md(c,b)};Object.defineProperty(zx.prototype,"pointer",{get:zx.prototype.Ev,set:zx.prototype.Kv});
zx.prototype.__destroy__=zx.prototype.cv=function(){nd(this.$u)};function x(){this.$u=od();g(x)[this.$u]=this}x.prototype=Object.create(e.prototype);x.prototype.constructor=x;x.prototype.av=x;x.bv={};a.b2FixtureDef=x;x.prototype.get_shape=x.prototype.cy=function(){return h(pd(this.$u),k)};x.prototype.set_shape=x.prototype.aA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qd(c,b)};Object.defineProperty(x.prototype,"shape",{get:x.prototype.cy,set:x.prototype.aA});
x.prototype.get_userData=x.prototype.ev=function(){return h(rd(this.$u),zx)};x.prototype.set_userData=x.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);sd(c,b)};Object.defineProperty(x.prototype,"userData",{get:x.prototype.ev,set:x.prototype.gv});x.prototype.get_friction=x.prototype.cx=function(){return td(this.$u)};x.prototype.set_friction=x.prototype.$y=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ud(c,b)};
Object.defineProperty(x.prototype,"friction",{get:x.prototype.cx,set:x.prototype.$y});x.prototype.get_restitution=x.prototype.Zx=function(){return vd(this.$u)};x.prototype.set_restitution=x.prototype.Xz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wd(c,b)};Object.defineProperty(x.prototype,"restitution",{get:x.prototype.Zx,set:x.prototype.Xz});x.prototype.get_restitutionThreshold=x.prototype.$x=function(){return xd(this.$u)};
x.prototype.set_restitutionThreshold=x.prototype.Yz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yd(c,b)};Object.defineProperty(x.prototype,"restitutionThreshold",{get:x.prototype.$x,set:x.prototype.Yz});x.prototype.get_density=x.prototype.Xw=function(){return zd(this.$u)};x.prototype.set_density=x.prototype.Uy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ad(c,b)};Object.defineProperty(x.prototype,"density",{get:x.prototype.Xw,set:x.prototype.Uy});
x.prototype.get_isSensor=x.prototype.lx=function(){return!!Bd(this.$u)};x.prototype.set_isSensor=x.prototype.iz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cd(c,b)};Object.defineProperty(x.prototype,"isSensor",{get:x.prototype.lx,set:x.prototype.iz});x.prototype.get_filter=x.prototype.Zw=function(){return h(Dd(this.$u),Ax)};x.prototype.set_filter=x.prototype.Wy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ed(c,b)};
Object.defineProperty(x.prototype,"filter",{get:x.prototype.Zw,set:x.prototype.Wy});x.prototype.__destroy__=x.prototype.cv=function(){Fd(this.$u)};function u(){throw"cannot construct a b2Fixture, no constructor in IDL";}u.prototype=Object.create(e.prototype);u.prototype.constructor=u;u.prototype.av=u;u.bv={};a.b2Fixture=u;u.prototype.GetType=function(){return Gd(this.$u)};u.prototype.GetShape=function(){return h(Hd(this.$u),k)};
u.prototype.SetSensor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Id(c,b)};u.prototype.IsSensor=function(){return!!Jd(this.$u)};u.prototype.SetFilterData=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Kd(c,b)};u.prototype.GetFilterData=function(){return h(Ld(this.$u),Ax)};u.prototype.Refilter=function(){Md(this.$u)};u.prototype.GetBody=function(){return h(Nd(this.$u),n)};u.prototype.GetNext=function(){return h(Od(this.$u),u)};
u.prototype.GetUserData=function(){return h(Pd(this.$u),zx)};u.prototype.TestPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return!!Qd(c,b)};u.prototype.RayCast=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);return!!Rd(f,b,c,d)};u.prototype.GetMassData=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sd(c,b)};
u.prototype.SetDensity=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Td(c,b)};u.prototype.GetDensity=function(){return Ud(this.$u)};u.prototype.GetFriction=function(){return Vd(this.$u)};u.prototype.SetFriction=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wd(c,b)};u.prototype.GetRestitution=function(){return Xd(this.$u)};u.prototype.SetRestitution=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yd(c,b)};u.prototype.GetRestitutionThreshold=function(){return Zd(this.$u)};
u.prototype.SetRestitutionThreshold=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$d(c,b)};u.prototype.GetAABB=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(ae(c,b),Bx)};u.prototype.Dump=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);be(c,b)};u.prototype.__destroy__=u.prototype.cv=function(){ce(this.$u)};
function Cx(b,c){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);this.$u=void 0===b?de():void 0===c?_emscripten_bind_b2Transform_b2Transform_1(b):ee(b,c);g(Cx)[this.$u]=this}Cx.prototype=Object.create(e.prototype);Cx.prototype.constructor=Cx;Cx.prototype.av=Cx;Cx.bv={};a.b2Transform=Cx;Cx.prototype.SetIdentity=function(){fe(this.$u)};Cx.prototype.Set=Cx.prototype.Set=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);ge(d,b,c)};
Cx.prototype.get_p=Cx.prototype.Tx=function(){return h(he(this.$u),r)};Cx.prototype.set_p=Cx.prototype.Rz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ie(c,b)};Object.defineProperty(Cx.prototype,"p",{get:Cx.prototype.Tx,set:Cx.prototype.Rz});Cx.prototype.get_q=Cx.prototype.Xx=function(){return h(je(this.$u),Dx)};Cx.prototype.set_q=Cx.prototype.Vz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ke(c,b)};Object.defineProperty(Cx.prototype,"q",{get:Cx.prototype.Xx,set:Cx.prototype.Vz});
Cx.prototype.__destroy__=Cx.prototype.cv=function(){le(this.$u)};function Ex(){this.$u=me();g(Ex)[this.$u]=this}Ex.prototype=Object.create(qx.prototype);Ex.prototype.constructor=Ex;Ex.prototype.av=Ex;Ex.bv={};a.JSRayCastCallback=Ex;Ex.prototype.ReportFixture=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return ne(p,b,c,d,f)};Ex.prototype.__destroy__=Ex.prototype.cv=function(){oe(this.$u)};
function Fx(){this.$u=pe();g(Fx)[this.$u]=this}Fx.prototype=Object.create(rx.prototype);Fx.prototype.constructor=Fx;Fx.prototype.av=Fx;Fx.bv={};a.JSQueryCallback=Fx;Fx.prototype.ReportFixture=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return!!qe(c,b)};Fx.prototype.__destroy__=Fx.prototype.cv=function(){re(this.$u)};function Gx(){this.$u=se();g(Gx)[this.$u]=this}Gx.prototype=Object.create(e.prototype);Gx.prototype.constructor=Gx;Gx.prototype.av=Gx;Gx.bv={};a.b2MassData=Gx;
Gx.prototype.get_mass=Gx.prototype.Lx=function(){return te(this.$u)};Gx.prototype.set_mass=Gx.prototype.Jz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ue(c,b)};Object.defineProperty(Gx.prototype,"mass",{get:Gx.prototype.Lx,set:Gx.prototype.Jz});Gx.prototype.get_center=Gx.prototype.Sw=function(){return h(ve(this.$u),r)};Gx.prototype.set_center=Gx.prototype.Py=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);we(c,b)};
Object.defineProperty(Gx.prototype,"center",{get:Gx.prototype.Sw,set:Gx.prototype.Py});Gx.prototype.get_I=Gx.prototype.Cw=function(){return xe(this.$u)};Gx.prototype.set_I=Gx.prototype.zy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ye(c,b)};Object.defineProperty(Gx.prototype,"I",{get:Gx.prototype.Cw,set:Gx.prototype.zy});Gx.prototype.__destroy__=Gx.prototype.cv=function(){ze(this.$u)};
function r(b,c){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);this.$u=void 0===b?Ae():void 0===c?_emscripten_bind_b2Vec2_b2Vec2_1(b):Be(b,c);g(r)[this.$u]=this}r.prototype=Object.create(e.prototype);r.prototype.constructor=r;r.prototype.av=r;r.bv={};a.b2Vec2=r;r.prototype.SetZero=function(){Ce(this.$u)};r.prototype.Set=r.prototype.Set=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);De(d,b,c)};
r.prototype.op_add=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ee(c,b)};r.prototype.op_sub=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fe(c,b)};r.prototype.op_mul=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ge(c,b)};r.prototype.Length=function(){return He(this.$u)};r.prototype.LengthSquared=function(){return Ie(this.$u)};r.prototype.Normalize=function(){return Je(this.$u)};r.prototype.IsValid=function(){return!!Ke(this.$u)};
r.prototype.Skew=function(){return h(Le(this.$u),r)};r.prototype.get_x=r.prototype.fw=function(){return Me(this.$u)};r.prototype.set_x=r.prototype.Aw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ne(c,b)};Object.defineProperty(r.prototype,"x",{get:r.prototype.fw,set:r.prototype.Aw});r.prototype.get_y=r.prototype.gw=function(){return Oe(this.$u)};r.prototype.set_y=r.prototype.Bw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pe(c,b)};
Object.defineProperty(r.prototype,"y",{get:r.prototype.gw,set:r.prototype.Bw});r.prototype.__destroy__=r.prototype.cv=function(){Qe(this.$u)};function y(b,c,d){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);this.$u=void 0===b?Re():void 0===c?_emscripten_bind_b2Vec3_b2Vec3_1(b):void 0===d?_emscripten_bind_b2Vec3_b2Vec3_2(b,c):Se(b,c,d);g(y)[this.$u]=this}y.prototype=Object.create(e.prototype);y.prototype.constructor=y;y.prototype.av=y;y.bv={};
a.b2Vec3=y;y.prototype.SetZero=function(){Te(this.$u)};y.prototype.Set=y.prototype.Set=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Ue(f,b,c,d)};y.prototype.op_add=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ve(c,b)};y.prototype.op_sub=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);We(c,b)};y.prototype.op_mul=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xe(c,b)};
y.prototype.get_x=y.prototype.fw=function(){return Ye(this.$u)};y.prototype.set_x=y.prototype.Aw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ze(c,b)};Object.defineProperty(y.prototype,"x",{get:y.prototype.fw,set:y.prototype.Aw});y.prototype.get_y=y.prototype.gw=function(){return $e(this.$u)};y.prototype.set_y=y.prototype.Bw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);af(c,b)};Object.defineProperty(y.prototype,"y",{get:y.prototype.gw,set:y.prototype.Bw});
y.prototype.get_z=y.prototype.yy=function(){return bf(this.$u)};y.prototype.set_z=y.prototype.wA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cf(c,b)};Object.defineProperty(y.prototype,"z",{get:y.prototype.yy,set:y.prototype.wA});y.prototype.__destroy__=y.prototype.cv=function(){df(this.$u)};function Hx(){throw"cannot construct a b2BodyUserData, no constructor in IDL";}Hx.prototype=Object.create(e.prototype);Hx.prototype.constructor=Hx;Hx.prototype.av=Hx;Hx.bv={};a.b2BodyUserData=Hx;
Hx.prototype.get_pointer=Hx.prototype.Ev=function(){return ef(this.$u)};Hx.prototype.set_pointer=Hx.prototype.Kv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ff(c,b)};Object.defineProperty(Hx.prototype,"pointer",{get:Hx.prototype.Ev,set:Hx.prototype.Kv});Hx.prototype.__destroy__=Hx.prototype.cv=function(){gf(this.$u)};function n(){throw"cannot construct a b2Body, no constructor in IDL";}n.prototype=Object.create(e.prototype);n.prototype.constructor=n;n.prototype.av=n;n.bv={};
a.b2Body=n;n.prototype.CreateFixture=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return void 0===c?h(hf(d,b),u):h(jf(d,b,c),u)};n.prototype.DestroyFixture=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);kf(c,b)};n.prototype.SetTransform=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);lf(d,b,c)};n.prototype.GetTransform=function(){return h(mf(this.$u),Cx)};
n.prototype.GetPosition=function(){return h(nf(this.$u),r)};n.prototype.GetAngle=function(){return of(this.$u)};n.prototype.GetWorldCenter=function(){return h(pf(this.$u),r)};n.prototype.GetLocalCenter=function(){return h(qf(this.$u),r)};n.prototype.SetLinearVelocity=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rf(c,b)};n.prototype.GetLinearVelocity=function(){return h(sf(this.$u),r)};n.prototype.SetAngularVelocity=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tf(c,b)};
n.prototype.GetAngularVelocity=function(){return uf(this.$u)};n.prototype.ApplyForce=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);vf(f,b,c,d)};n.prototype.ApplyForceToCenter=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);wf(d,b,c)};n.prototype.ApplyTorque=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);xf(d,b,c)};
n.prototype.ApplyLinearImpulse=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);yf(f,b,c,d)};n.prototype.ApplyAngularImpulse=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);zf(d,b,c)};n.prototype.GetMass=function(){return Af(this.$u)};n.prototype.GetInertia=function(){return Bf(this.$u)};
n.prototype.GetMassData=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cf(c,b)};n.prototype.SetMassData=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Df(c,b)};n.prototype.ResetMassData=function(){Ef(this.$u)};n.prototype.GetWorldPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Ff(c,b),r)};n.prototype.GetWorldVector=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Gf(c,b),r)};
n.prototype.GetLocalPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Hf(c,b),r)};n.prototype.GetLocalVector=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(If(c,b),r)};n.prototype.GetLinearVelocityFromWorldPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Jf(c,b),r)};n.prototype.GetLinearVelocityFromLocalPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Kf(c,b),r)};n.prototype.GetLinearDamping=function(){return Lf(this.$u)};
n.prototype.SetLinearDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mf(c,b)};n.prototype.GetAngularDamping=function(){return Nf(this.$u)};n.prototype.SetAngularDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Of(c,b)};n.prototype.GetGravityScale=function(){return Pf(this.$u)};n.prototype.SetGravityScale=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qf(c,b)};n.prototype.SetType=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rf(c,b)};
n.prototype.GetType=function(){return Sf(this.$u)};n.prototype.SetBullet=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tf(c,b)};n.prototype.IsBullet=function(){return!!Uf(this.$u)};n.prototype.SetSleepingAllowed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vf(c,b)};n.prototype.IsSleepingAllowed=function(){return!!Wf(this.$u)};n.prototype.SetAwake=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xf(c,b)};n.prototype.IsAwake=function(){return!!Yf(this.$u)};
n.prototype.SetEnabled=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zf(c,b)};n.prototype.IsEnabled=function(){return!!$f(this.$u)};n.prototype.SetFixedRotation=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ag(c,b)};n.prototype.IsFixedRotation=function(){return!!bg(this.$u)};n.prototype.GetFixtureList=function(){return h(cg(this.$u),u)};n.prototype.GetJointList=function(){return h(dg(this.$u),z)};n.prototype.GetContactList=function(){return h(eg(this.$u),A)};
n.prototype.GetNext=function(){return h(fg(this.$u),n)};n.prototype.GetUserData=function(){return h(gg(this.$u),Hx)};n.prototype.GetWorld=function(){return h(hg(this.$u),v)};n.prototype.Dump=function(){ig(this.$u)};function B(){this.$u=jg();g(B)[this.$u]=this}B.prototype=Object.create(e.prototype);B.prototype.constructor=B;B.prototype.av=B;B.bv={};a.b2BodyDef=B;B.prototype.get_type=B.prototype.dv=function(){return kg(this.$u)};
B.prototype.set_type=B.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lg(c,b)};Object.defineProperty(B.prototype,"type",{get:B.prototype.dv,set:B.prototype.fv});B.prototype.get_position=B.prototype.bw=function(){return h(mg(this.$u),r)};B.prototype.set_position=B.prototype.ww=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ng(c,b)};Object.defineProperty(B.prototype,"position",{get:B.prototype.bw,set:B.prototype.ww});B.prototype.get_angle=B.prototype.Ew=function(){return og(this.$u)};
B.prototype.set_angle=B.prototype.By=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pg(c,b)};Object.defineProperty(B.prototype,"angle",{get:B.prototype.Ew,set:B.prototype.By});B.prototype.get_linearVelocity=B.prototype.wx=function(){return h(qg(this.$u),r)};B.prototype.set_linearVelocity=B.prototype.uz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rg(c,b)};Object.defineProperty(B.prototype,"linearVelocity",{get:B.prototype.wx,set:B.prototype.uz});
B.prototype.get_angularVelocity=B.prototype.Hw=function(){return sg(this.$u)};B.prototype.set_angularVelocity=B.prototype.Ey=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tg(c,b)};Object.defineProperty(B.prototype,"angularVelocity",{get:B.prototype.Hw,set:B.prototype.Ey});B.prototype.get_linearDamping=B.prototype.ux=function(){return ug(this.$u)};B.prototype.set_linearDamping=B.prototype.rz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vg(c,b)};
Object.defineProperty(B.prototype,"linearDamping",{get:B.prototype.ux,set:B.prototype.rz});B.prototype.get_angularDamping=B.prototype.Fw=function(){return wg(this.$u)};B.prototype.set_angularDamping=B.prototype.Cy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xg(c,b)};Object.defineProperty(B.prototype,"angularDamping",{get:B.prototype.Fw,set:B.prototype.Cy});B.prototype.get_allowSleep=B.prototype.Dw=function(){return!!yg(this.$u)};
B.prototype.set_allowSleep=B.prototype.Ay=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zg(c,b)};Object.defineProperty(B.prototype,"allowSleep",{get:B.prototype.Dw,set:B.prototype.Ay});B.prototype.get_awake=B.prototype.Iw=function(){return!!Ag(this.$u)};B.prototype.set_awake=B.prototype.Fy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Bg(c,b)};Object.defineProperty(B.prototype,"awake",{get:B.prototype.Iw,set:B.prototype.Fy});B.prototype.get_fixedRotation=B.prototype.ax=function(){return!!Cg(this.$u)};
B.prototype.set_fixedRotation=B.prototype.Yy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Dg(c,b)};Object.defineProperty(B.prototype,"fixedRotation",{get:B.prototype.ax,set:B.prototype.Yy});B.prototype.get_bullet=B.prototype.Pw=function(){return!!Eg(this.$u)};B.prototype.set_bullet=B.prototype.My=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fg(c,b)};Object.defineProperty(B.prototype,"bullet",{get:B.prototype.Pw,set:B.prototype.My});
B.prototype.get_userData=B.prototype.ev=function(){return h(Gg(this.$u),Hx)};B.prototype.set_userData=B.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Hg(c,b)};Object.defineProperty(B.prototype,"userData",{get:B.prototype.ev,set:B.prototype.gv});B.prototype.get_gravityScale=B.prototype.fx=function(){return Ig(this.$u)};B.prototype.set_gravityScale=B.prototype.cz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Jg(c,b)};
Object.defineProperty(B.prototype,"gravityScale",{get:B.prototype.fx,set:B.prototype.cz});B.prototype.__destroy__=B.prototype.cv=function(){Kg(this.$u)};function Ax(){this.$u=Lg();g(Ax)[this.$u]=this}Ax.prototype=Object.create(e.prototype);Ax.prototype.constructor=Ax;Ax.prototype.av=Ax;Ax.bv={};a.b2Filter=Ax;Ax.prototype.get_categoryBits=Ax.prototype.Rw=function(){return Mg(this.$u)};Ax.prototype.set_categoryBits=Ax.prototype.Oy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ng(c,b)};
Object.defineProperty(Ax.prototype,"categoryBits",{get:Ax.prototype.Rw,set:Ax.prototype.Oy});Ax.prototype.get_maskBits=Ax.prototype.Kx=function(){return Og(this.$u)};Ax.prototype.set_maskBits=Ax.prototype.Iz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pg(c,b)};Object.defineProperty(Ax.prototype,"maskBits",{get:Ax.prototype.Kx,set:Ax.prototype.Iz});Ax.prototype.get_groupIndex=Ax.prototype.ix=function(){return Qg(this.$u)};
Ax.prototype.set_groupIndex=Ax.prototype.fz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rg(c,b)};Object.defineProperty(Ax.prototype,"groupIndex",{get:Ax.prototype.ix,set:Ax.prototype.fz});Ax.prototype.__destroy__=Ax.prototype.cv=function(){Sg(this.$u)};function Bx(){this.$u=Tg();g(Bx)[this.$u]=this}Bx.prototype=Object.create(e.prototype);Bx.prototype.constructor=Bx;Bx.prototype.av=Bx;Bx.bv={};a.b2AABB=Bx;Bx.prototype.IsValid=function(){return!!Ug(this.$u)};
Bx.prototype.GetCenter=function(){return h(Vg(this.$u),r)};Bx.prototype.GetExtents=function(){return h(Wg(this.$u),r)};Bx.prototype.GetPerimeter=function(){return Xg(this.$u)};Bx.prototype.Combine=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);void 0===c?Yg(d,b):Zg(d,b,c)};Bx.prototype.Contains=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return!!$g(c,b)};
Bx.prototype.RayCast=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!ah(d,b,c)};Bx.prototype.get_lowerBound=Bx.prototype.zx=function(){return h(bh(this.$u),r)};Bx.prototype.set_lowerBound=Bx.prototype.xz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ch(c,b)};Object.defineProperty(Bx.prototype,"lowerBound",{get:Bx.prototype.zx,set:Bx.prototype.xz});Bx.prototype.get_upperBound=Bx.prototype.uy=function(){return h(dh(this.$u),r)};
Bx.prototype.set_upperBound=Bx.prototype.sA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);eh(c,b)};Object.defineProperty(Bx.prototype,"upperBound",{get:Bx.prototype.uy,set:Bx.prototype.sA});Bx.prototype.__destroy__=Bx.prototype.cv=function(){fh(this.$u)};function C(){this.$u=gh();g(C)[this.$u]=this}C.prototype=Object.create(k.prototype);C.prototype.constructor=C;C.prototype.av=C;C.bv={};a.b2CircleShape=C;C.prototype.GetType=function(){return hh(this.$u)};C.prototype.GetChildCount=function(){return ih(this.$u)};
C.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!jh(d,b,c)};C.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!kh(p,b,c,d,f)};
C.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);lh(f,b,c,d)};C.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);mh(d,b,c)};C.prototype.get_m_p=C.prototype.Ex=function(){return h(nh(this.$u),r)};C.prototype.set_m_p=C.prototype.Cz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);oh(c,b)};
Object.defineProperty(C.prototype,"m_p",{get:C.prototype.Ex,set:C.prototype.Cz});C.prototype.get_m_type=C.prototype.uv=function(){return ph(this.$u)};C.prototype.set_m_type=C.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qh(c,b)};Object.defineProperty(C.prototype,"m_type",{get:C.prototype.uv,set:C.prototype.xv});C.prototype.get_m_radius=C.prototype.tv=function(){return rh(this.$u)};
C.prototype.set_m_radius=C.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);sh(c,b)};Object.defineProperty(C.prototype,"m_radius",{get:C.prototype.tv,set:C.prototype.wv});C.prototype.__destroy__=C.prototype.cv=function(){th(this.$u)};function D(){this.$u=uh();g(D)[this.$u]=this}D.prototype=Object.create(k.prototype);D.prototype.constructor=D;D.prototype.av=D;D.bv={};a.b2EdgeShape=D;
D.prototype.SetOneSided=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);vh(p,b,c,d,f)};D.prototype.SetTwoSided=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);wh(d,b,c)};D.prototype.GetType=function(){return xh(this.$u)};D.prototype.GetChildCount=function(){return yh(this.$u)};
D.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!zh(d,b,c)};D.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!Ah(p,b,c,d,f)};
D.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Bh(f,b,c,d)};D.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Ch(d,b,c)};D.prototype.get_m_vertex1=D.prototype.Hx=function(){return h(Dh(this.$u),r)};D.prototype.set_m_vertex1=D.prototype.Fz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Eh(c,b)};
Object.defineProperty(D.prototype,"m_vertex1",{get:D.prototype.Hx,set:D.prototype.Fz});D.prototype.get_m_vertex2=D.prototype.Ix=function(){return h(Fh(this.$u),r)};D.prototype.set_m_vertex2=D.prototype.Gz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gh(c,b)};Object.defineProperty(D.prototype,"m_vertex2",{get:D.prototype.Ix,set:D.prototype.Gz});D.prototype.get_m_vertex0=D.prototype.Gx=function(){return h(Hh(this.$u),r)};
D.prototype.set_m_vertex0=D.prototype.Ez=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ih(c,b)};Object.defineProperty(D.prototype,"m_vertex0",{get:D.prototype.Gx,set:D.prototype.Ez});D.prototype.get_m_vertex3=D.prototype.Jx=function(){return h(Jh(this.$u),r)};D.prototype.set_m_vertex3=D.prototype.Hz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Kh(c,b)};Object.defineProperty(D.prototype,"m_vertex3",{get:D.prototype.Jx,set:D.prototype.Hz});
D.prototype.get_m_oneSided=D.prototype.Dx=function(){return!!Lh(this.$u)};D.prototype.set_m_oneSided=D.prototype.Bz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mh(c,b)};Object.defineProperty(D.prototype,"m_oneSided",{get:D.prototype.Dx,set:D.prototype.Bz});D.prototype.get_m_type=D.prototype.uv=function(){return Nh(this.$u)};D.prototype.set_m_type=D.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Oh(c,b)};
Object.defineProperty(D.prototype,"m_type",{get:D.prototype.uv,set:D.prototype.xv});D.prototype.get_m_radius=D.prototype.tv=function(){return Ph(this.$u)};D.prototype.set_m_radius=D.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qh(c,b)};Object.defineProperty(D.prototype,"m_radius",{get:D.prototype.tv,set:D.prototype.wv});D.prototype.__destroy__=D.prototype.cv=function(){Rh(this.$u)};function m(){throw"cannot construct a b2JointUserData, no constructor in IDL";}
m.prototype=Object.create(e.prototype);m.prototype.constructor=m;m.prototype.av=m;m.bv={};a.b2JointUserData=m;m.prototype.get_pointer=m.prototype.Ev=function(){return Sh(this.$u)};m.prototype.set_pointer=m.prototype.Kv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Th(c,b)};Object.defineProperty(m.prototype,"pointer",{get:m.prototype.Ev,set:m.prototype.Kv});m.prototype.__destroy__=m.prototype.cv=function(){Uh(this.$u)};
function Ix(){throw"cannot construct a b2WeldJoint, no constructor in IDL";}Ix.prototype=Object.create(q.prototype);Ix.prototype.constructor=Ix;Ix.prototype.av=Ix;Ix.bv={};a.b2WeldJoint=Ix;Ix.prototype.GetLocalAnchorA=function(){return h(Vh(this.$u),r)};Ix.prototype.GetLocalAnchorB=function(){return h(Wh(this.$u),r)};Ix.prototype.GetReferenceAngle=function(){return Xh(this.$u)};Ix.prototype.SetStiffness=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yh(c,b)};
Ix.prototype.GetStiffness=function(){return Zh(this.$u)};Ix.prototype.SetDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$h(c,b)};Ix.prototype.GetDamping=function(){return ai(this.$u)};Ix.prototype.Dump=function(){bi(this.$u)};Ix.prototype.GetType=function(){return ci(this.$u)};Ix.prototype.GetBodyA=function(){return h(di(this.$u),n)};Ix.prototype.GetBodyB=function(){return h(ei(this.$u),n)};Ix.prototype.GetAnchorA=function(){return h(fi(this.$u),r)};
Ix.prototype.GetAnchorB=function(){return h(gi(this.$u),r)};Ix.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(hi(c,b),r)};Ix.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return ii(c,b)};Ix.prototype.GetNext=function(){return h(ji(this.$u),q)};Ix.prototype.GetUserData=function(){return h(ki(this.$u),m)};Ix.prototype.GetCollideConnected=function(){return!!li(this.$u)};Ix.prototype.__destroy__=Ix.prototype.cv=function(){mi(this.$u)};
function E(){this.$u=ni();g(E)[this.$u]=this}E.prototype=Object.create(l.prototype);E.prototype.constructor=E;E.prototype.av=E;E.bv={};a.b2WeldJointDef=E;E.prototype.Initialize=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);oi(f,b,c,d)};E.prototype.get_localAnchorA=E.prototype.ov=function(){return h(pi(this.$u),r)};
E.prototype.set_localAnchorA=E.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qi(c,b)};Object.defineProperty(E.prototype,"localAnchorA",{get:E.prototype.ov,set:E.prototype.qv});E.prototype.get_localAnchorB=E.prototype.pv=function(){return h(ri(this.$u),r)};E.prototype.set_localAnchorB=E.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);si(c,b)};Object.defineProperty(E.prototype,"localAnchorB",{get:E.prototype.pv,set:E.prototype.rv});
E.prototype.get_referenceAngle=E.prototype.Fv=function(){return ti(this.$u)};E.prototype.set_referenceAngle=E.prototype.Lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ui(c,b)};Object.defineProperty(E.prototype,"referenceAngle",{get:E.prototype.Fv,set:E.prototype.Lv});E.prototype.get_stiffness=E.prototype.yv=function(){return vi(this.$u)};E.prototype.set_stiffness=E.prototype.zv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wi(c,b)};
Object.defineProperty(E.prototype,"stiffness",{get:E.prototype.yv,set:E.prototype.zv});E.prototype.get_damping=E.prototype.sv=function(){return xi(this.$u)};E.prototype.set_damping=E.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yi(c,b)};Object.defineProperty(E.prototype,"damping",{get:E.prototype.sv,set:E.prototype.vv});E.prototype.get_type=E.prototype.dv=function(){return zi(this.$u)};
E.prototype.set_type=E.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ai(c,b)};Object.defineProperty(E.prototype,"type",{get:E.prototype.dv,set:E.prototype.fv});E.prototype.get_userData=E.prototype.ev=function(){return h(Bi(this.$u),m)};E.prototype.set_userData=E.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ci(c,b)};Object.defineProperty(E.prototype,"userData",{get:E.prototype.ev,set:E.prototype.gv});
E.prototype.get_bodyA=E.prototype.hv=function(){return h(Di(this.$u),n)};E.prototype.set_bodyA=E.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ei(c,b)};Object.defineProperty(E.prototype,"bodyA",{get:E.prototype.hv,set:E.prototype.lv});E.prototype.get_bodyB=E.prototype.jv=function(){return h(Fi(this.$u),n)};E.prototype.set_bodyB=E.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gi(c,b)};
Object.defineProperty(E.prototype,"bodyB",{get:E.prototype.jv,set:E.prototype.mv});E.prototype.get_collideConnected=E.prototype.kv=function(){return!!Hi(this.$u)};E.prototype.set_collideConnected=E.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ii(c,b)};Object.defineProperty(E.prototype,"collideConnected",{get:E.prototype.kv,set:E.prototype.nv});E.prototype.__destroy__=E.prototype.cv=function(){Ji(this.$u)};function F(){this.$u=Ki();g(F)[this.$u]=this}F.prototype=Object.create(k.prototype);
F.prototype.constructor=F;F.prototype.av=F;F.bv={};a.b2ChainShape=F;F.prototype.Clear=function(){Li(this.$u)};F.prototype.CreateLoop=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Mi(d,b,c)};F.prototype.CreateChain=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);Ni(p,b,c,d,f)};
F.prototype.GetChildEdge=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Oi(d,b,c)};F.prototype.GetType=function(){return Pi(this.$u)};F.prototype.GetChildCount=function(){return Qi(this.$u)};F.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!Ri(d,b,c)};
F.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!Si(p,b,c,d,f)};F.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Ti(f,b,c,d)};F.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Ui(d,b,c)};
F.prototype.get_m_vertices=F.prototype.Vv=function(){return h(Vi(this.$u),r)};F.prototype.set_m_vertices=F.prototype.pw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wi(c,b)};Object.defineProperty(F.prototype,"m_vertices",{get:F.prototype.Vv,set:F.prototype.pw});F.prototype.get_m_count=F.prototype.Uv=function(){return Xi(this.$u)};F.prototype.set_m_count=F.prototype.ow=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yi(c,b)};
Object.defineProperty(F.prototype,"m_count",{get:F.prototype.Uv,set:F.prototype.ow});F.prototype.get_m_prevVertex=F.prototype.Fx=function(){return h(Zi(this.$u),r)};F.prototype.set_m_prevVertex=F.prototype.Dz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$i(c,b)};Object.defineProperty(F.prototype,"m_prevVertex",{get:F.prototype.Fx,set:F.prototype.Dz});F.prototype.get_m_nextVertex=F.prototype.Bx=function(){return h(aj(this.$u),r)};
F.prototype.set_m_nextVertex=F.prototype.zz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);bj(c,b)};Object.defineProperty(F.prototype,"m_nextVertex",{get:F.prototype.Bx,set:F.prototype.zz});F.prototype.get_m_type=F.prototype.uv=function(){return cj(this.$u)};F.prototype.set_m_type=F.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);dj(c,b)};Object.defineProperty(F.prototype,"m_type",{get:F.prototype.uv,set:F.prototype.xv});
F.prototype.get_m_radius=F.prototype.tv=function(){return ej(this.$u)};F.prototype.set_m_radius=F.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fj(c,b)};Object.defineProperty(F.prototype,"m_radius",{get:F.prototype.tv,set:F.prototype.wv});F.prototype.__destroy__=F.prototype.cv=function(){gj(this.$u)};
function Jx(b,c,d){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);this.$u=void 0===b?hj():void 0===c?_emscripten_bind_b2Color_b2Color_1(b):void 0===d?_emscripten_bind_b2Color_b2Color_2(b,c):ij(b,c,d);g(Jx)[this.$u]=this}Jx.prototype=Object.create(e.prototype);Jx.prototype.constructor=Jx;Jx.prototype.av=Jx;Jx.bv={};a.b2Color=Jx;
Jx.prototype.Set=Jx.prototype.Set=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);jj(f,b,c,d)};Jx.prototype.get_r=Jx.prototype.Yx=function(){return kj(this.$u)};Jx.prototype.set_r=Jx.prototype.Wz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lj(c,b)};Object.defineProperty(Jx.prototype,"r",{get:Jx.prototype.Yx,set:Jx.prototype.Wz});Jx.prototype.get_g=Jx.prototype.dx=function(){return mj(this.$u)};
Jx.prototype.set_g=Jx.prototype.az=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nj(c,b)};Object.defineProperty(Jx.prototype,"g",{get:Jx.prototype.dx,set:Jx.prototype.az});Jx.prototype.get_b=Jx.prototype.Jw=function(){return oj(this.$u)};Jx.prototype.set_b=Jx.prototype.Gy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pj(c,b)};Object.defineProperty(Jx.prototype,"b",{get:Jx.prototype.Jw,set:Jx.prototype.Gy});Jx.prototype.__destroy__=Jx.prototype.cv=function(){qj(this.$u)};
function A(){this.$u=rj();g(A)[this.$u]=this}A.prototype=Object.create(e.prototype);A.prototype.constructor=A;A.prototype.av=A;A.bv={};a.b2ContactEdge=A;A.prototype.get_other=A.prototype.$v=function(){return h(sj(this.$u),n)};A.prototype.set_other=A.prototype.uw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tj(c,b)};Object.defineProperty(A.prototype,"other",{get:A.prototype.$v,set:A.prototype.uw});A.prototype.get_contact=A.prototype.Vw=function(){return h(uj(this.$u),wx)};
A.prototype.set_contact=A.prototype.Sy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vj(c,b)};Object.defineProperty(A.prototype,"contact",{get:A.prototype.Vw,set:A.prototype.Sy});A.prototype.get_prev=A.prototype.cw=function(){return h(wj(this.$u),A)};A.prototype.set_prev=A.prototype.xw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xj(c,b)};Object.defineProperty(A.prototype,"prev",{get:A.prototype.cw,set:A.prototype.xw});
A.prototype.get_next=A.prototype.Yv=function(){return h(yj(this.$u),A)};A.prototype.set_next=A.prototype.sw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zj(c,b)};Object.defineProperty(A.prototype,"next",{get:A.prototype.Yv,set:A.prototype.sw});A.prototype.__destroy__=A.prototype.cv=function(){Aj(this.$u)};function G(){throw"cannot construct a b2ContactFeature, no constructor in IDL";}G.prototype=Object.create(e.prototype);G.prototype.constructor=G;G.prototype.av=G;G.bv={};
a.b2ContactFeature=G;G.prototype.get_indexA=G.prototype.jx=function(){return Bj(this.$u)};G.prototype.set_indexA=G.prototype.gz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cj(c,b)};Object.defineProperty(G.prototype,"indexA",{get:G.prototype.jx,set:G.prototype.gz});G.prototype.get_indexB=G.prototype.kx=function(){return Dj(this.$u)};G.prototype.set_indexB=G.prototype.hz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ej(c,b)};
Object.defineProperty(G.prototype,"indexB",{get:G.prototype.kx,set:G.prototype.hz});G.prototype.get_typeA=G.prototype.ry=function(){return Fj(this.$u)};G.prototype.set_typeA=G.prototype.pA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gj(c,b)};Object.defineProperty(G.prototype,"typeA",{get:G.prototype.ry,set:G.prototype.pA});G.prototype.get_typeB=G.prototype.sy=function(){return Hj(this.$u)};
G.prototype.set_typeB=G.prototype.qA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ij(c,b)};Object.defineProperty(G.prototype,"typeB",{get:G.prototype.sy,set:G.prototype.qA});G.prototype.__destroy__=G.prototype.cv=function(){Jj(this.$u)};function Kx(){this.$u=Kj();g(Kx)[this.$u]=this}Kx.prototype=Object.create(sx.prototype);Kx.prototype.constructor=Kx;Kx.prototype.av=Kx;Kx.bv={};a.JSContactFilter=Kx;
Kx.prototype.ShouldCollide=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!Lj(d,b,c)};Kx.prototype.__destroy__=Kx.prototype.cv=function(){Mj(this.$u)};function Lx(){throw"cannot construct a b2ContactID, no constructor in IDL";}Lx.prototype=Object.create(e.prototype);Lx.prototype.constructor=Lx;Lx.prototype.av=Lx;Lx.bv={};a.b2ContactID=Lx;Lx.prototype.get_cf=Lx.prototype.Tw=function(){return h(Nj(this.$u),G)};
Lx.prototype.set_cf=Lx.prototype.Qy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Oj(c,b)};Object.defineProperty(Lx.prototype,"cf",{get:Lx.prototype.Tw,set:Lx.prototype.Qy});Lx.prototype.get_key=Lx.prototype.qx=function(){return Pj(this.$u)};Lx.prototype.set_key=Lx.prototype.nz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qj(c,b)};Object.defineProperty(Lx.prototype,"key",{get:Lx.prototype.qx,set:Lx.prototype.nz});Lx.prototype.__destroy__=Lx.prototype.cv=function(){Rj(this.$u)};
function Mx(){throw"cannot construct a b2ContactImpulse, no constructor in IDL";}Mx.prototype=Object.create(e.prototype);Mx.prototype.constructor=Mx;Mx.prototype.av=Mx;Mx.bv={};a.b2ContactImpulse=Mx;Mx.prototype.get_normalImpulses=Mx.prototype.Sx=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Sj(c,b)};Mx.prototype.set_normalImpulses=Mx.prototype.Qz=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Tj(d,b,c)};
Object.defineProperty(Mx.prototype,"normalImpulses",{get:Mx.prototype.Sx,set:Mx.prototype.Qz});Mx.prototype.get_tangentImpulses=Mx.prototype.oy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Uj(c,b)};Mx.prototype.set_tangentImpulses=Mx.prototype.mA=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Vj(d,b,c)};Object.defineProperty(Mx.prototype,"tangentImpulses",{get:Mx.prototype.oy,set:Mx.prototype.mA});
Mx.prototype.get_count=Mx.prototype.Nv=function(){return Wj(this.$u)};Mx.prototype.set_count=Mx.prototype.hw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xj(c,b)};Object.defineProperty(Mx.prototype,"count",{get:Mx.prototype.Nv,set:Mx.prototype.hw});Mx.prototype.__destroy__=Mx.prototype.cv=function(){Yj(this.$u)};function Nx(){throw"cannot construct a b2DestructionListener, no constructor in IDL";}Nx.prototype=Object.create(e.prototype);Nx.prototype.constructor=Nx;Nx.prototype.av=Nx;
Nx.bv={};a.b2DestructionListener=Nx;Nx.prototype.__destroy__=Nx.prototype.cv=function(){Zj(this.$u)};function Ox(){this.$u=ak();g(Ox)[this.$u]=this}Ox.prototype=Object.create(tx.prototype);Ox.prototype.constructor=Ox;Ox.prototype.av=Ox;Ox.bv={};a.JSDestructionListener=Ox;Ox.prototype.SayGoodbyeJoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);bk(c,b)};Ox.prototype.SayGoodbyeFixture=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ck(c,b)};
Ox.prototype.__destroy__=Ox.prototype.cv=function(){dk(this.$u)};function Px(){throw"cannot construct a b2DistanceJoint, no constructor in IDL";}Px.prototype=Object.create(q.prototype);Px.prototype.constructor=Px;Px.prototype.av=Px;Px.bv={};a.b2DistanceJoint=Px;Px.prototype.GetLocalAnchorA=function(){return h(ek(this.$u),r)};Px.prototype.GetLocalAnchorB=function(){return h(fk(this.$u),r)};Px.prototype.GetLength=function(){return gk(this.$u)};
Px.prototype.SetLength=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);hk(c,b)};Px.prototype.GetMinLength=function(){return ik(this.$u)};Px.prototype.SetMinLength=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);jk(c,b)};Px.prototype.GetMaxLength=function(){return kk(this.$u)};Px.prototype.SetMaxLength=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lk(c,b)};Px.prototype.GetCurrentLength=function(){return mk(this.$u)};
Px.prototype.SetStiffness=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nk(c,b)};Px.prototype.GetStiffness=function(){return ok(this.$u)};Px.prototype.SetDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pk(c,b)};Px.prototype.GetDamping=function(){return qk(this.$u)};Px.prototype.GetType=function(){return rk(this.$u)};Px.prototype.GetBodyA=function(){return h(sk(this.$u),n)};Px.prototype.GetBodyB=function(){return h(tk(this.$u),n)};
Px.prototype.GetAnchorA=function(){return h(uk(this.$u),r)};Px.prototype.GetAnchorB=function(){return h(vk(this.$u),r)};Px.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(wk(c,b),r)};Px.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return xk(c,b)};Px.prototype.GetNext=function(){return h(yk(this.$u),q)};Px.prototype.GetUserData=function(){return h(zk(this.$u),m)};Px.prototype.GetCollideConnected=function(){return!!Ak(this.$u)};
Px.prototype.__destroy__=Px.prototype.cv=function(){Bk(this.$u)};function H(){this.$u=Ck();g(H)[this.$u]=this}H.prototype=Object.create(l.prototype);H.prototype.constructor=H;H.prototype.av=H;H.bv={};a.b2DistanceJointDef=H;H.prototype.Initialize=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);Dk(p,b,c,d,f)};
H.prototype.get_localAnchorA=H.prototype.ov=function(){return h(Ek(this.$u),r)};H.prototype.set_localAnchorA=H.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fk(c,b)};Object.defineProperty(H.prototype,"localAnchorA",{get:H.prototype.ov,set:H.prototype.qv});H.prototype.get_localAnchorB=H.prototype.pv=function(){return h(Gk(this.$u),r)};H.prototype.set_localAnchorB=H.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Hk(c,b)};
Object.defineProperty(H.prototype,"localAnchorB",{get:H.prototype.pv,set:H.prototype.rv});H.prototype.get_length=H.prototype.rx=function(){return Ik(this.$u)};H.prototype.set_length=H.prototype.oz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Jk(c,b)};Object.defineProperty(H.prototype,"length",{get:H.prototype.rx,set:H.prototype.oz});H.prototype.get_minLength=H.prototype.Qx=function(){return Kk(this.$u)};
H.prototype.set_minLength=H.prototype.Oz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Lk(c,b)};Object.defineProperty(H.prototype,"minLength",{get:H.prototype.Qx,set:H.prototype.Oz});H.prototype.get_maxLength=H.prototype.Ox=function(){return Mk(this.$u)};H.prototype.set_maxLength=H.prototype.Mz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Nk(c,b)};Object.defineProperty(H.prototype,"maxLength",{get:H.prototype.Ox,set:H.prototype.Mz});
H.prototype.get_stiffness=H.prototype.yv=function(){return Ok(this.$u)};H.prototype.set_stiffness=H.prototype.zv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pk(c,b)};Object.defineProperty(H.prototype,"stiffness",{get:H.prototype.yv,set:H.prototype.zv});H.prototype.get_damping=H.prototype.sv=function(){return Qk(this.$u)};H.prototype.set_damping=H.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rk(c,b)};
Object.defineProperty(H.prototype,"damping",{get:H.prototype.sv,set:H.prototype.vv});H.prototype.get_type=H.prototype.dv=function(){return Sk(this.$u)};H.prototype.set_type=H.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tk(c,b)};Object.defineProperty(H.prototype,"type",{get:H.prototype.dv,set:H.prototype.fv});H.prototype.get_userData=H.prototype.ev=function(){return h(Uk(this.$u),m)};
H.prototype.set_userData=H.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vk(c,b)};Object.defineProperty(H.prototype,"userData",{get:H.prototype.ev,set:H.prototype.gv});H.prototype.get_bodyA=H.prototype.hv=function(){return h(Wk(this.$u),n)};H.prototype.set_bodyA=H.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xk(c,b)};Object.defineProperty(H.prototype,"bodyA",{get:H.prototype.hv,set:H.prototype.lv});
H.prototype.get_bodyB=H.prototype.jv=function(){return h(Yk(this.$u),n)};H.prototype.set_bodyB=H.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zk(c,b)};Object.defineProperty(H.prototype,"bodyB",{get:H.prototype.jv,set:H.prototype.mv});H.prototype.get_collideConnected=H.prototype.kv=function(){return!!$k(this.$u)};H.prototype.set_collideConnected=H.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);al(c,b)};
Object.defineProperty(H.prototype,"collideConnected",{get:H.prototype.kv,set:H.prototype.nv});H.prototype.__destroy__=H.prototype.cv=function(){bl(this.$u)};function Qx(){this.$u=cl();g(Qx)[this.$u]=this}Qx.prototype=Object.create(ux.prototype);Qx.prototype.constructor=Qx;Qx.prototype.av=Qx;Qx.bv={};a.JSDraw=Qx;Qx.prototype.DrawPolygon=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);dl(f,b,c,d)};
Qx.prototype.DrawSolidPolygon=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);el(f,b,c,d)};Qx.prototype.DrawCircle=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);fl(f,b,c,d)};
Qx.prototype.DrawSolidCircle=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);gl(p,b,c,d,f)};Qx.prototype.DrawSegment=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);hl(f,b,c,d)};Qx.prototype.DrawTransform=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);il(c,b)};
Qx.prototype.DrawPoint=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);jl(f,b,c,d)};Qx.prototype.__destroy__=Qx.prototype.cv=function(){kl(this.$u)};function Rx(){throw"cannot construct a b2FrictionJoint, no constructor in IDL";}Rx.prototype=Object.create(q.prototype);Rx.prototype.constructor=Rx;Rx.prototype.av=Rx;Rx.bv={};a.b2FrictionJoint=Rx;Rx.prototype.GetLocalAnchorA=function(){return h(ll(this.$u),r)};
Rx.prototype.GetLocalAnchorB=function(){return h(ml(this.$u),r)};Rx.prototype.SetMaxForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nl(c,b)};Rx.prototype.GetMaxForce=function(){return ol(this.$u)};Rx.prototype.SetMaxTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pl(c,b)};Rx.prototype.GetMaxTorque=function(){return ql(this.$u)};Rx.prototype.GetType=function(){return rl(this.$u)};Rx.prototype.GetBodyA=function(){return h(sl(this.$u),n)};
Rx.prototype.GetBodyB=function(){return h(tl(this.$u),n)};Rx.prototype.GetAnchorA=function(){return h(ul(this.$u),r)};Rx.prototype.GetAnchorB=function(){return h(vl(this.$u),r)};Rx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(wl(c,b),r)};Rx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return xl(c,b)};Rx.prototype.GetNext=function(){return h(yl(this.$u),q)};
Rx.prototype.GetUserData=function(){return h(zl(this.$u),m)};Rx.prototype.GetCollideConnected=function(){return!!Al(this.$u)};Rx.prototype.__destroy__=Rx.prototype.cv=function(){Bl(this.$u)};function I(){this.$u=Cl();g(I)[this.$u]=this}I.prototype=Object.create(l.prototype);I.prototype.constructor=I;I.prototype.av=I;I.bv={};a.b2FrictionJointDef=I;
I.prototype.Initialize=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Dl(f,b,c,d)};I.prototype.get_localAnchorA=I.prototype.ov=function(){return h(El(this.$u),r)};I.prototype.set_localAnchorA=I.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fl(c,b)};Object.defineProperty(I.prototype,"localAnchorA",{get:I.prototype.ov,set:I.prototype.qv});
I.prototype.get_localAnchorB=I.prototype.pv=function(){return h(Gl(this.$u),r)};I.prototype.set_localAnchorB=I.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Hl(c,b)};Object.defineProperty(I.prototype,"localAnchorB",{get:I.prototype.pv,set:I.prototype.rv});I.prototype.get_maxForce=I.prototype.Cv=function(){return Il(this.$u)};I.prototype.set_maxForce=I.prototype.Iv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Jl(c,b)};
Object.defineProperty(I.prototype,"maxForce",{get:I.prototype.Cv,set:I.prototype.Iv});I.prototype.get_maxTorque=I.prototype.Xv=function(){return Kl(this.$u)};I.prototype.set_maxTorque=I.prototype.rw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ll(c,b)};Object.defineProperty(I.prototype,"maxTorque",{get:I.prototype.Xv,set:I.prototype.rw});I.prototype.get_type=I.prototype.dv=function(){return Ml(this.$u)};
I.prototype.set_type=I.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Nl(c,b)};Object.defineProperty(I.prototype,"type",{get:I.prototype.dv,set:I.prototype.fv});I.prototype.get_userData=I.prototype.ev=function(){return h(Ol(this.$u),m)};I.prototype.set_userData=I.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pl(c,b)};Object.defineProperty(I.prototype,"userData",{get:I.prototype.ev,set:I.prototype.gv});
I.prototype.get_bodyA=I.prototype.hv=function(){return h(Ql(this.$u),n)};I.prototype.set_bodyA=I.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rl(c,b)};Object.defineProperty(I.prototype,"bodyA",{get:I.prototype.hv,set:I.prototype.lv});I.prototype.get_bodyB=I.prototype.jv=function(){return h(Sl(this.$u),n)};I.prototype.set_bodyB=I.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tl(c,b)};
Object.defineProperty(I.prototype,"bodyB",{get:I.prototype.jv,set:I.prototype.mv});I.prototype.get_collideConnected=I.prototype.kv=function(){return!!Ul(this.$u)};I.prototype.set_collideConnected=I.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vl(c,b)};Object.defineProperty(I.prototype,"collideConnected",{get:I.prototype.kv,set:I.prototype.nv});I.prototype.__destroy__=I.prototype.cv=function(){Wl(this.$u)};
function Sx(){throw"cannot construct a b2GearJoint, no constructor in IDL";}Sx.prototype=Object.create(q.prototype);Sx.prototype.constructor=Sx;Sx.prototype.av=Sx;Sx.bv={};a.b2GearJoint=Sx;Sx.prototype.GetJoint1=function(){return h(Xl(this.$u),q)};Sx.prototype.GetJoint2=function(){return h(Yl(this.$u),q)};Sx.prototype.SetRatio=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zl(c,b)};Sx.prototype.GetRatio=function(){return $l(this.$u)};Sx.prototype.GetType=function(){return am(this.$u)};
Sx.prototype.GetBodyA=function(){return h(bm(this.$u),n)};Sx.prototype.GetBodyB=function(){return h(cm(this.$u),n)};Sx.prototype.GetAnchorA=function(){return h(dm(this.$u),r)};Sx.prototype.GetAnchorB=function(){return h(em(this.$u),r)};Sx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(fm(c,b),r)};Sx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return gm(c,b)};
Sx.prototype.GetNext=function(){return h(hm(this.$u),q)};Sx.prototype.GetUserData=function(){return h(im(this.$u),m)};Sx.prototype.GetCollideConnected=function(){return!!jm(this.$u)};Sx.prototype.__destroy__=Sx.prototype.cv=function(){km(this.$u)};function J(){this.$u=lm();g(J)[this.$u]=this}J.prototype=Object.create(l.prototype);J.prototype.constructor=J;J.prototype.av=J;J.bv={};a.b2GearJointDef=J;J.prototype.get_joint1=J.prototype.ox=function(){return h(mm(this.$u),q)};
J.prototype.set_joint1=J.prototype.lz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nm(c,b)};Object.defineProperty(J.prototype,"joint1",{get:J.prototype.ox,set:J.prototype.lz});J.prototype.get_joint2=J.prototype.px=function(){return h(om(this.$u),q)};J.prototype.set_joint2=J.prototype.mz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pm(c,b)};Object.defineProperty(J.prototype,"joint2",{get:J.prototype.px,set:J.prototype.mz});J.prototype.get_ratio=J.prototype.dw=function(){return qm(this.$u)};
J.prototype.set_ratio=J.prototype.yw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rm(c,b)};Object.defineProperty(J.prototype,"ratio",{get:J.prototype.dw,set:J.prototype.yw});J.prototype.get_type=J.prototype.dv=function(){return sm(this.$u)};J.prototype.set_type=J.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tm(c,b)};Object.defineProperty(J.prototype,"type",{get:J.prototype.dv,set:J.prototype.fv});
J.prototype.get_userData=J.prototype.ev=function(){return h(um(this.$u),m)};J.prototype.set_userData=J.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wm(c,b)};Object.defineProperty(J.prototype,"userData",{get:J.prototype.ev,set:J.prototype.gv});J.prototype.get_bodyA=J.prototype.hv=function(){return h(xm(this.$u),n)};J.prototype.set_bodyA=J.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ym(c,b)};
Object.defineProperty(J.prototype,"bodyA",{get:J.prototype.hv,set:J.prototype.lv});J.prototype.get_bodyB=J.prototype.jv=function(){return h(zm(this.$u),n)};J.prototype.set_bodyB=J.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Am(c,b)};Object.defineProperty(J.prototype,"bodyB",{get:J.prototype.jv,set:J.prototype.mv});J.prototype.get_collideConnected=J.prototype.kv=function(){return!!Bm(this.$u)};
J.prototype.set_collideConnected=J.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cm(c,b)};Object.defineProperty(J.prototype,"collideConnected",{get:J.prototype.kv,set:J.prototype.nv});J.prototype.__destroy__=J.prototype.cv=function(){Dm(this.$u)};function z(){this.$u=Em();g(z)[this.$u]=this}z.prototype=Object.create(e.prototype);z.prototype.constructor=z;z.prototype.av=z;z.bv={};a.b2JointEdge=z;z.prototype.get_other=z.prototype.$v=function(){return h(Fm(this.$u),n)};
z.prototype.set_other=z.prototype.uw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gm(c,b)};Object.defineProperty(z.prototype,"other",{get:z.prototype.$v,set:z.prototype.uw});z.prototype.get_joint=z.prototype.nx=function(){return h(Hm(this.$u),q)};z.prototype.set_joint=z.prototype.kz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Im(c,b)};Object.defineProperty(z.prototype,"joint",{get:z.prototype.nx,set:z.prototype.kz});
z.prototype.get_prev=z.prototype.cw=function(){return h(Jm(this.$u),z)};z.prototype.set_prev=z.prototype.xw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Km(c,b)};Object.defineProperty(z.prototype,"prev",{get:z.prototype.cw,set:z.prototype.xw});z.prototype.get_next=z.prototype.Yv=function(){return h(Lm(this.$u),z)};z.prototype.set_next=z.prototype.sw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mm(c,b)};Object.defineProperty(z.prototype,"next",{get:z.prototype.Yv,set:z.prototype.sw});
z.prototype.__destroy__=z.prototype.cv=function(){Nm(this.$u)};function t(){this.$u=Om();g(t)[this.$u]=this}t.prototype=Object.create(e.prototype);t.prototype.constructor=t;t.prototype.av=t;t.bv={};a.b2Manifold=t;t.prototype.get_points=t.prototype.aw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Pm(c,b),K)};t.prototype.set_points=t.prototype.vw=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Qm(d,b,c)};
Object.defineProperty(t.prototype,"points",{get:t.prototype.aw,set:t.prototype.vw});t.prototype.get_localNormal=t.prototype.xx=function(){return h(Rm(this.$u),r)};t.prototype.set_localNormal=t.prototype.vz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sm(c,b)};Object.defineProperty(t.prototype,"localNormal",{get:t.prototype.xx,set:t.prototype.vz});t.prototype.get_localPoint=t.prototype.Sv=function(){return h(Tm(this.$u),r)};
t.prototype.set_localPoint=t.prototype.mw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Um(c,b)};Object.defineProperty(t.prototype,"localPoint",{get:t.prototype.Sv,set:t.prototype.mw});t.prototype.get_type=t.prototype.dv=function(){return Vm(this.$u)};t.prototype.set_type=t.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wm(c,b)};Object.defineProperty(t.prototype,"type",{get:t.prototype.dv,set:t.prototype.fv});t.prototype.get_pointCount=t.prototype.Wx=function(){return Xm(this.$u)};
t.prototype.set_pointCount=t.prototype.Uz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ym(c,b)};Object.defineProperty(t.prototype,"pointCount",{get:t.prototype.Wx,set:t.prototype.Uz});t.prototype.__destroy__=t.prototype.cv=function(){Zm(this.$u)};function Tx(){this.$u=$m();g(Tx)[this.$u]=this}Tx.prototype=Object.create(e.prototype);Tx.prototype.constructor=Tx;Tx.prototype.av=Tx;Tx.bv={};a.b2WorldManifold=Tx;
Tx.prototype.Initialize=function(b,c,d,f,p){var W=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);p&&"object"===typeof p&&(p=p.$u);an(W,b,c,d,f,p)};Tx.prototype.get_normal=Tx.prototype.Zv=function(){return h(bn(this.$u),r)};Tx.prototype.set_normal=Tx.prototype.tw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cn(c,b)};Object.defineProperty(Tx.prototype,"normal",{get:Tx.prototype.Zv,set:Tx.prototype.tw});
Tx.prototype.get_points=Tx.prototype.aw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(dn(c,b),r)};Tx.prototype.set_points=Tx.prototype.vw=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);en(d,b,c)};Object.defineProperty(Tx.prototype,"points",{get:Tx.prototype.aw,set:Tx.prototype.vw});Tx.prototype.get_separations=Tx.prototype.by=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return fn(c,b)};
Tx.prototype.set_separations=Tx.prototype.$z=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);gn(d,b,c)};Object.defineProperty(Tx.prototype,"separations",{get:Tx.prototype.by,set:Tx.prototype.$z});Tx.prototype.__destroy__=Tx.prototype.cv=function(){hn(this.$u)};function K(){this.$u=jn();g(K)[this.$u]=this}K.prototype=Object.create(e.prototype);K.prototype.constructor=K;K.prototype.av=K;K.bv={};a.b2ManifoldPoint=K;
K.prototype.get_localPoint=K.prototype.Sv=function(){return h(kn(this.$u),r)};K.prototype.set_localPoint=K.prototype.mw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ln(c,b)};Object.defineProperty(K.prototype,"localPoint",{get:K.prototype.Sv,set:K.prototype.mw});K.prototype.get_normalImpulse=K.prototype.Rx=function(){return mn(this.$u)};K.prototype.set_normalImpulse=K.prototype.Pz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nn(c,b)};
Object.defineProperty(K.prototype,"normalImpulse",{get:K.prototype.Rx,set:K.prototype.Pz});K.prototype.get_tangentImpulse=K.prototype.ny=function(){return on(this.$u)};K.prototype.set_tangentImpulse=K.prototype.lA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pn(c,b)};Object.defineProperty(K.prototype,"tangentImpulse",{get:K.prototype.ny,set:K.prototype.lA});K.prototype.get_id=K.prototype.Qv=function(){return h(qn(this.$u),Lx)};
K.prototype.set_id=K.prototype.kw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rn(c,b)};Object.defineProperty(K.prototype,"id",{get:K.prototype.Qv,set:K.prototype.kw});K.prototype.__destroy__=K.prototype.cv=function(){sn(this.$u)};
function Ux(b,c,d,f){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);this.$u=void 0===b?tn():void 0===c?_emscripten_bind_b2Mat22_b2Mat22_1(b):void 0===d?un(b,c):void 0===f?_emscripten_bind_b2Mat22_b2Mat22_3(b,c,d):vn(b,c,d,f);g(Ux)[this.$u]=this}Ux.prototype=Object.create(e.prototype);Ux.prototype.constructor=Ux;Ux.prototype.av=Ux;Ux.bv={};a.b2Mat22=Ux;
Ux.prototype.Set=Ux.prototype.Set=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);wn(d,b,c)};Ux.prototype.SetIdentity=function(){xn(this.$u)};Ux.prototype.SetZero=function(){yn(this.$u)};Ux.prototype.GetInverse=function(){return h(zn(this.$u),Ux)};Ux.prototype.Solve=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(An(c,b),r)};Ux.prototype.get_ex=Ux.prototype.Ov=function(){return h(Bn(this.$u),r)};
Ux.prototype.set_ex=Ux.prototype.iw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cn(c,b)};Object.defineProperty(Ux.prototype,"ex",{get:Ux.prototype.Ov,set:Ux.prototype.iw});Ux.prototype.get_ey=Ux.prototype.Pv=function(){return h(Dn(this.$u),r)};Ux.prototype.set_ey=Ux.prototype.jw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);En(c,b)};Object.defineProperty(Ux.prototype,"ey",{get:Ux.prototype.Pv,set:Ux.prototype.jw});Ux.prototype.__destroy__=Ux.prototype.cv=function(){Fn(this.$u)};
function L(b,c,d){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);this.$u=void 0===b?Gn():void 0===c?_emscripten_bind_b2Mat33_b2Mat33_1(b):void 0===d?_emscripten_bind_b2Mat33_b2Mat33_2(b,c):Hn(b,c,d);g(L)[this.$u]=this}L.prototype=Object.create(e.prototype);L.prototype.constructor=L;L.prototype.av=L;L.bv={};a.b2Mat33=L;L.prototype.SetZero=function(){In(this.$u)};
L.prototype.Solve33=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Jn(c,b),y)};L.prototype.Solve22=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Kn(c,b),r)};L.prototype.GetInverse22=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ln(c,b)};L.prototype.GetSymInverse33=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mn(c,b)};L.prototype.get_ex=L.prototype.Ov=function(){return h(Nn(this.$u),y)};
L.prototype.set_ex=L.prototype.iw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);On(c,b)};Object.defineProperty(L.prototype,"ex",{get:L.prototype.Ov,set:L.prototype.iw});L.prototype.get_ey=L.prototype.Pv=function(){return h(Pn(this.$u),y)};L.prototype.set_ey=L.prototype.jw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qn(c,b)};Object.defineProperty(L.prototype,"ey",{get:L.prototype.Pv,set:L.prototype.jw});L.prototype.get_ez=L.prototype.Yw=function(){return h(Rn(this.$u),y)};
L.prototype.set_ez=L.prototype.Vy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sn(c,b)};Object.defineProperty(L.prototype,"ez",{get:L.prototype.Yw,set:L.prototype.Vy});L.prototype.__destroy__=L.prototype.cv=function(){Tn(this.$u)};function Vx(){throw"cannot construct a b2MouseJoint, no constructor in IDL";}Vx.prototype=Object.create(q.prototype);Vx.prototype.constructor=Vx;Vx.prototype.av=Vx;Vx.bv={};a.b2MouseJoint=Vx;
Vx.prototype.SetTarget=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Un(c,b)};Vx.prototype.GetTarget=function(){return h(Vn(this.$u),r)};Vx.prototype.SetMaxForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wn(c,b)};Vx.prototype.GetMaxForce=function(){return Xn(this.$u)};Vx.prototype.SetStiffness=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yn(c,b)};Vx.prototype.GetStiffness=function(){return Zn(this.$u)};
Vx.prototype.SetDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$n(c,b)};Vx.prototype.GetDamping=function(){return ao(this.$u)};Vx.prototype.GetType=function(){return bo(this.$u)};Vx.prototype.GetBodyA=function(){return h(co(this.$u),n)};Vx.prototype.GetBodyB=function(){return h(eo(this.$u),n)};Vx.prototype.GetAnchorA=function(){return h(fo(this.$u),r)};Vx.prototype.GetAnchorB=function(){return h(go(this.$u),r)};
Vx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(ho(c,b),r)};Vx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return io(c,b)};Vx.prototype.GetNext=function(){return h(jo(this.$u),q)};Vx.prototype.GetUserData=function(){return h(ko(this.$u),m)};Vx.prototype.GetCollideConnected=function(){return!!lo(this.$u)};Vx.prototype.__destroy__=Vx.prototype.cv=function(){mo(this.$u)};
function M(){this.$u=no();g(M)[this.$u]=this}M.prototype=Object.create(l.prototype);M.prototype.constructor=M;M.prototype.av=M;M.bv={};a.b2MouseJointDef=M;M.prototype.get_target=M.prototype.py=function(){return h(oo(this.$u),r)};M.prototype.set_target=M.prototype.nA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);po(c,b)};Object.defineProperty(M.prototype,"target",{get:M.prototype.py,set:M.prototype.nA});M.prototype.get_maxForce=M.prototype.Cv=function(){return qo(this.$u)};
M.prototype.set_maxForce=M.prototype.Iv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ro(c,b)};Object.defineProperty(M.prototype,"maxForce",{get:M.prototype.Cv,set:M.prototype.Iv});M.prototype.get_stiffness=M.prototype.yv=function(){return so(this.$u)};M.prototype.set_stiffness=M.prototype.zv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);to(c,b)};Object.defineProperty(M.prototype,"stiffness",{get:M.prototype.yv,set:M.prototype.zv});
M.prototype.get_damping=M.prototype.sv=function(){return uo(this.$u)};M.prototype.set_damping=M.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vo(c,b)};Object.defineProperty(M.prototype,"damping",{get:M.prototype.sv,set:M.prototype.vv});M.prototype.get_type=M.prototype.dv=function(){return wo(this.$u)};M.prototype.set_type=M.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xo(c,b)};Object.defineProperty(M.prototype,"type",{get:M.prototype.dv,set:M.prototype.fv});
M.prototype.get_userData=M.prototype.ev=function(){return h(yo(this.$u),m)};M.prototype.set_userData=M.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zo(c,b)};Object.defineProperty(M.prototype,"userData",{get:M.prototype.ev,set:M.prototype.gv});M.prototype.get_bodyA=M.prototype.hv=function(){return h(Ao(this.$u),n)};M.prototype.set_bodyA=M.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Bo(c,b)};
Object.defineProperty(M.prototype,"bodyA",{get:M.prototype.hv,set:M.prototype.lv});M.prototype.get_bodyB=M.prototype.jv=function(){return h(Co(this.$u),n)};M.prototype.set_bodyB=M.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Do(c,b)};Object.defineProperty(M.prototype,"bodyB",{get:M.prototype.jv,set:M.prototype.mv});M.prototype.get_collideConnected=M.prototype.kv=function(){return!!Eo(this.$u)};
M.prototype.set_collideConnected=M.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fo(c,b)};Object.defineProperty(M.prototype,"collideConnected",{get:M.prototype.kv,set:M.prototype.nv});M.prototype.__destroy__=M.prototype.cv=function(){Go(this.$u)};function N(){this.$u=Ho();g(N)[this.$u]=this}N.prototype=Object.create(k.prototype);N.prototype.constructor=N;N.prototype.av=N;N.bv={};a.b2PolygonShape=N;
N.prototype.Set=N.prototype.Set=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Io(d,b,c)};N.prototype.SetAsBox=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);void 0===d?Jo(p,b,c):void 0===f?_emscripten_bind_b2PolygonShape_SetAsBox_3(p,b,c,d):Ko(p,b,c,d,f)};N.prototype.GetType=function(){return Lo(this.$u)};N.prototype.GetChildCount=function(){return Mo(this.$u)};
N.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!No(d,b,c)};N.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!Oo(p,b,c,d,f)};
N.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Po(f,b,c,d)};N.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Qo(d,b,c)};N.prototype.get_m_centroid=N.prototype.Ax=function(){return h(Ro(this.$u),r)};N.prototype.set_m_centroid=N.prototype.yz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);So(c,b)};
Object.defineProperty(N.prototype,"m_centroid",{get:N.prototype.Ax,set:N.prototype.yz});N.prototype.get_m_vertices=N.prototype.Vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(To(c,b),r)};N.prototype.set_m_vertices=N.prototype.pw=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Uo(d,b,c)};Object.defineProperty(N.prototype,"m_vertices",{get:N.prototype.Vv,set:N.prototype.pw});
N.prototype.get_m_normals=N.prototype.Cx=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Vo(c,b),r)};N.prototype.set_m_normals=N.prototype.Az=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Wo(d,b,c)};Object.defineProperty(N.prototype,"m_normals",{get:N.prototype.Cx,set:N.prototype.Az});N.prototype.get_m_count=N.prototype.Uv=function(){return Xo(this.$u)};
N.prototype.set_m_count=N.prototype.ow=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yo(c,b)};Object.defineProperty(N.prototype,"m_count",{get:N.prototype.Uv,set:N.prototype.ow});N.prototype.get_m_type=N.prototype.uv=function(){return Zo(this.$u)};N.prototype.set_m_type=N.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$o(c,b)};Object.defineProperty(N.prototype,"m_type",{get:N.prototype.uv,set:N.prototype.xv});N.prototype.get_m_radius=N.prototype.tv=function(){return ap(this.$u)};
N.prototype.set_m_radius=N.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);bp(c,b)};Object.defineProperty(N.prototype,"m_radius",{get:N.prototype.tv,set:N.prototype.wv});N.prototype.__destroy__=N.prototype.cv=function(){cp(this.$u)};function O(){throw"cannot construct a b2PrismaticJoint, no constructor in IDL";}O.prototype=Object.create(q.prototype);O.prototype.constructor=O;O.prototype.av=O;O.bv={};a.b2PrismaticJoint=O;
O.prototype.GetLocalAnchorA=function(){return h(dp(this.$u),r)};O.prototype.GetLocalAnchorB=function(){return h(ep(this.$u),r)};O.prototype.GetLocalAxisA=function(){return h(fp(this.$u),r)};O.prototype.GetReferenceAngle=function(){return gp(this.$u)};O.prototype.GetJointTranslation=function(){return hp(this.$u)};O.prototype.GetJointSpeed=function(){return ip(this.$u)};O.prototype.IsLimitEnabled=function(){return!!jp(this.$u)};
O.prototype.EnableLimit=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);kp(c,b)};O.prototype.GetLowerLimit=function(){return lp(this.$u)};O.prototype.GetUpperLimit=function(){return mp(this.$u)};O.prototype.SetLimits=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);np(d,b,c)};O.prototype.IsMotorEnabled=function(){return!!op(this.$u)};O.prototype.EnableMotor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pp(c,b)};
O.prototype.SetMotorSpeed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qp(c,b)};O.prototype.GetMotorSpeed=function(){return rp(this.$u)};O.prototype.SetMaxMotorForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);sp(c,b)};O.prototype.GetMaxMotorForce=function(){return tp(this.$u)};O.prototype.GetMotorForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return up(c,b)};O.prototype.GetType=function(){return vp(this.$u)};
O.prototype.GetBodyA=function(){return h(wp(this.$u),n)};O.prototype.GetBodyB=function(){return h(xp(this.$u),n)};O.prototype.GetAnchorA=function(){return h(yp(this.$u),r)};O.prototype.GetAnchorB=function(){return h(zp(this.$u),r)};O.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Ap(c,b),r)};O.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Bp(c,b)};O.prototype.GetNext=function(){return h(Cp(this.$u),q)};
O.prototype.GetUserData=function(){return h(Dp(this.$u),m)};O.prototype.GetCollideConnected=function(){return!!Ep(this.$u)};O.prototype.__destroy__=O.prototype.cv=function(){Fp(this.$u)};function P(){this.$u=Gp();g(P)[this.$u]=this}P.prototype=Object.create(l.prototype);P.prototype.constructor=P;P.prototype.av=P;P.bv={};a.b2PrismaticJointDef=P;
P.prototype.Initialize=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);Hp(p,b,c,d,f)};P.prototype.get_localAnchorA=P.prototype.ov=function(){return h(Ip(this.$u),r)};P.prototype.set_localAnchorA=P.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Jp(c,b)};Object.defineProperty(P.prototype,"localAnchorA",{get:P.prototype.ov,set:P.prototype.qv});
P.prototype.get_localAnchorB=P.prototype.pv=function(){return h(Kp(this.$u),r)};P.prototype.set_localAnchorB=P.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Lp(c,b)};Object.defineProperty(P.prototype,"localAnchorB",{get:P.prototype.pv,set:P.prototype.rv});P.prototype.get_localAxisA=P.prototype.Rv=function(){return h(Mp(this.$u),r)};P.prototype.set_localAxisA=P.prototype.lw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Np(c,b)};
Object.defineProperty(P.prototype,"localAxisA",{get:P.prototype.Rv,set:P.prototype.lw});P.prototype.get_referenceAngle=P.prototype.Fv=function(){return Op(this.$u)};P.prototype.set_referenceAngle=P.prototype.Lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pp(c,b)};Object.defineProperty(P.prototype,"referenceAngle",{get:P.prototype.Fv,set:P.prototype.Lv});P.prototype.get_enableLimit=P.prototype.Av=function(){return!!Qp(this.$u)};
P.prototype.set_enableLimit=P.prototype.Gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rp(c,b)};Object.defineProperty(P.prototype,"enableLimit",{get:P.prototype.Av,set:P.prototype.Gv});P.prototype.get_lowerTranslation=P.prototype.Tv=function(){return Sp(this.$u)};P.prototype.set_lowerTranslation=P.prototype.nw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tp(c,b)};Object.defineProperty(P.prototype,"lowerTranslation",{get:P.prototype.Tv,set:P.prototype.nw});
P.prototype.get_upperTranslation=P.prototype.ew=function(){return Up(this.$u)};P.prototype.set_upperTranslation=P.prototype.zw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vp(c,b)};Object.defineProperty(P.prototype,"upperTranslation",{get:P.prototype.ew,set:P.prototype.zw});P.prototype.get_enableMotor=P.prototype.Bv=function(){return!!Wp(this.$u)};P.prototype.set_enableMotor=P.prototype.Hv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xp(c,b)};
Object.defineProperty(P.prototype,"enableMotor",{get:P.prototype.Bv,set:P.prototype.Hv});P.prototype.get_maxMotorForce=P.prototype.Px=function(){return Yp(this.$u)};P.prototype.set_maxMotorForce=P.prototype.Nz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zp(c,b)};Object.defineProperty(P.prototype,"maxMotorForce",{get:P.prototype.Px,set:P.prototype.Nz});P.prototype.get_motorSpeed=P.prototype.Dv=function(){return $p(this.$u)};
P.prototype.set_motorSpeed=P.prototype.Jv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);aq(c,b)};Object.defineProperty(P.prototype,"motorSpeed",{get:P.prototype.Dv,set:P.prototype.Jv});P.prototype.get_type=P.prototype.dv=function(){return bq(this.$u)};P.prototype.set_type=P.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cq(c,b)};Object.defineProperty(P.prototype,"type",{get:P.prototype.dv,set:P.prototype.fv});
P.prototype.get_userData=P.prototype.ev=function(){return h(dq(this.$u),m)};P.prototype.set_userData=P.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);eq(c,b)};Object.defineProperty(P.prototype,"userData",{get:P.prototype.ev,set:P.prototype.gv});P.prototype.get_bodyA=P.prototype.hv=function(){return h(fq(this.$u),n)};P.prototype.set_bodyA=P.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);gq(c,b)};
Object.defineProperty(P.prototype,"bodyA",{get:P.prototype.hv,set:P.prototype.lv});P.prototype.get_bodyB=P.prototype.jv=function(){return h(hq(this.$u),n)};P.prototype.set_bodyB=P.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);iq(c,b)};Object.defineProperty(P.prototype,"bodyB",{get:P.prototype.jv,set:P.prototype.mv});P.prototype.get_collideConnected=P.prototype.kv=function(){return!!jq(this.$u)};
P.prototype.set_collideConnected=P.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);kq(c,b)};Object.defineProperty(P.prototype,"collideConnected",{get:P.prototype.kv,set:P.prototype.nv});P.prototype.__destroy__=P.prototype.cv=function(){lq(this.$u)};function w(){throw"cannot construct a b2Profile, no constructor in IDL";}w.prototype=Object.create(e.prototype);w.prototype.constructor=w;w.prototype.av=w;w.bv={};a.b2Profile=w;w.prototype.get_step=w.prototype.iy=function(){return mq(this.$u)};
w.prototype.set_step=w.prototype.gA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nq(c,b)};Object.defineProperty(w.prototype,"step",{get:w.prototype.iy,set:w.prototype.gA});w.prototype.get_collide=w.prototype.Uw=function(){return oq(this.$u)};w.prototype.set_collide=w.prototype.Ry=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pq(c,b)};Object.defineProperty(w.prototype,"collide",{get:w.prototype.Uw,set:w.prototype.Ry});w.prototype.get_solve=w.prototype.dy=function(){return qq(this.$u)};
w.prototype.set_solve=w.prototype.bA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rq(c,b)};Object.defineProperty(w.prototype,"solve",{get:w.prototype.dy,set:w.prototype.bA});w.prototype.get_solveInit=w.prototype.ey=function(){return sq(this.$u)};w.prototype.set_solveInit=w.prototype.cA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tq(c,b)};Object.defineProperty(w.prototype,"solveInit",{get:w.prototype.ey,set:w.prototype.cA});
w.prototype.get_solveVelocity=w.prototype.hy=function(){return uq(this.$u)};w.prototype.set_solveVelocity=w.prototype.fA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vq(c,b)};Object.defineProperty(w.prototype,"solveVelocity",{get:w.prototype.hy,set:w.prototype.fA});w.prototype.get_solvePosition=w.prototype.fy=function(){return wq(this.$u)};w.prototype.set_solvePosition=w.prototype.dA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xq(c,b)};
Object.defineProperty(w.prototype,"solvePosition",{get:w.prototype.fy,set:w.prototype.dA});w.prototype.get_broadphase=w.prototype.Ow=function(){return yq(this.$u)};w.prototype.set_broadphase=w.prototype.Ly=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zq(c,b)};Object.defineProperty(w.prototype,"broadphase",{get:w.prototype.Ow,set:w.prototype.Ly});w.prototype.get_solveTOI=w.prototype.gy=function(){return Aq(this.$u)};
w.prototype.set_solveTOI=w.prototype.eA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Bq(c,b)};Object.defineProperty(w.prototype,"solveTOI",{get:w.prototype.gy,set:w.prototype.eA});w.prototype.__destroy__=w.prototype.cv=function(){Cq(this.$u)};function Wx(){throw"cannot construct a b2PulleyJoint, no constructor in IDL";}Wx.prototype=Object.create(q.prototype);Wx.prototype.constructor=Wx;Wx.prototype.av=Wx;Wx.bv={};a.b2PulleyJoint=Wx;
Wx.prototype.GetGroundAnchorA=function(){return h(Dq(this.$u),r)};Wx.prototype.GetGroundAnchorB=function(){return h(Eq(this.$u),r)};Wx.prototype.GetLengthA=function(){return Fq(this.$u)};Wx.prototype.GetLengthB=function(){return Gq(this.$u)};Wx.prototype.GetRatio=function(){return Hq(this.$u)};Wx.prototype.GetCurrentLengthA=function(){return Iq(this.$u)};Wx.prototype.GetCurrentLengthB=function(){return Jq(this.$u)};Wx.prototype.GetType=function(){return Kq(this.$u)};
Wx.prototype.GetBodyA=function(){return h(Lq(this.$u),n)};Wx.prototype.GetBodyB=function(){return h(Mq(this.$u),n)};Wx.prototype.GetAnchorA=function(){return h(Nq(this.$u),r)};Wx.prototype.GetAnchorB=function(){return h(Oq(this.$u),r)};Wx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Pq(c,b),r)};Wx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Qq(c,b)};
Wx.prototype.GetNext=function(){return h(Rq(this.$u),q)};Wx.prototype.GetUserData=function(){return h(Sq(this.$u),m)};Wx.prototype.GetCollideConnected=function(){return!!Tq(this.$u)};Wx.prototype.__destroy__=Wx.prototype.cv=function(){Uq(this.$u)};function Q(){this.$u=Vq();g(Q)[this.$u]=this}Q.prototype=Object.create(l.prototype);Q.prototype.constructor=Q;Q.prototype.av=Q;Q.bv={};a.b2PulleyJointDef=Q;
Q.prototype.Initialize=function(b,c,d,f,p,W,Ka){var gb=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);p&&"object"===typeof p&&(p=p.$u);W&&"object"===typeof W&&(W=W.$u);Ka&&"object"===typeof Ka&&(Ka=Ka.$u);Wq(gb,b,c,d,f,p,W,Ka)};Q.prototype.get_groundAnchorA=Q.prototype.gx=function(){return h(Xq(this.$u),r)};
Q.prototype.set_groundAnchorA=Q.prototype.dz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yq(c,b)};Object.defineProperty(Q.prototype,"groundAnchorA",{get:Q.prototype.gx,set:Q.prototype.dz});Q.prototype.get_groundAnchorB=Q.prototype.hx=function(){return h(Zq(this.$u),r)};Q.prototype.set_groundAnchorB=Q.prototype.ez=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$q(c,b)};Object.defineProperty(Q.prototype,"groundAnchorB",{get:Q.prototype.hx,set:Q.prototype.ez});
Q.prototype.get_localAnchorA=Q.prototype.ov=function(){return h(ar(this.$u),r)};Q.prototype.set_localAnchorA=Q.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);br(c,b)};Object.defineProperty(Q.prototype,"localAnchorA",{get:Q.prototype.ov,set:Q.prototype.qv});Q.prototype.get_localAnchorB=Q.prototype.pv=function(){return h(cr(this.$u),r)};Q.prototype.set_localAnchorB=Q.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);dr(c,b)};
Object.defineProperty(Q.prototype,"localAnchorB",{get:Q.prototype.pv,set:Q.prototype.rv});Q.prototype.get_lengthA=Q.prototype.sx=function(){return er(this.$u)};Q.prototype.set_lengthA=Q.prototype.pz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fr(c,b)};Object.defineProperty(Q.prototype,"lengthA",{get:Q.prototype.sx,set:Q.prototype.pz});Q.prototype.get_lengthB=Q.prototype.tx=function(){return gr(this.$u)};
Q.prototype.set_lengthB=Q.prototype.qz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);hr(c,b)};Object.defineProperty(Q.prototype,"lengthB",{get:Q.prototype.tx,set:Q.prototype.qz});Q.prototype.get_ratio=Q.prototype.dw=function(){return ir(this.$u)};Q.prototype.set_ratio=Q.prototype.yw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);jr(c,b)};Object.defineProperty(Q.prototype,"ratio",{get:Q.prototype.dw,set:Q.prototype.yw});Q.prototype.get_type=Q.prototype.dv=function(){return kr(this.$u)};
Q.prototype.set_type=Q.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lr(c,b)};Object.defineProperty(Q.prototype,"type",{get:Q.prototype.dv,set:Q.prototype.fv});Q.prototype.get_userData=Q.prototype.ev=function(){return h(mr(this.$u),m)};Q.prototype.set_userData=Q.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nr(c,b)};Object.defineProperty(Q.prototype,"userData",{get:Q.prototype.ev,set:Q.prototype.gv});
Q.prototype.get_bodyA=Q.prototype.hv=function(){return h(or(this.$u),n)};Q.prototype.set_bodyA=Q.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pr(c,b)};Object.defineProperty(Q.prototype,"bodyA",{get:Q.prototype.hv,set:Q.prototype.lv});Q.prototype.get_bodyB=Q.prototype.jv=function(){return h(qr(this.$u),n)};Q.prototype.set_bodyB=Q.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rr(c,b)};
Object.defineProperty(Q.prototype,"bodyB",{get:Q.prototype.jv,set:Q.prototype.mv});Q.prototype.get_collideConnected=Q.prototype.kv=function(){return!!sr(this.$u)};Q.prototype.set_collideConnected=Q.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tr(c,b)};Object.defineProperty(Q.prototype,"collideConnected",{get:Q.prototype.kv,set:Q.prototype.nv});Q.prototype.__destroy__=Q.prototype.cv=function(){ur(this.$u)};
function Xx(){throw"cannot construct a b2RayCastInput, no constructor in IDL";}Xx.prototype=Object.create(e.prototype);Xx.prototype.constructor=Xx;Xx.prototype.av=Xx;Xx.bv={};a.b2RayCastInput=Xx;Xx.prototype.get_p1=Xx.prototype.Ux=function(){return h(vr(this.$u),r)};Xx.prototype.set_p1=Xx.prototype.Sz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wr(c,b)};Object.defineProperty(Xx.prototype,"p1",{get:Xx.prototype.Ux,set:Xx.prototype.Sz});
Xx.prototype.get_p2=Xx.prototype.Vx=function(){return h(xr(this.$u),r)};Xx.prototype.set_p2=Xx.prototype.Tz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yr(c,b)};Object.defineProperty(Xx.prototype,"p2",{get:Xx.prototype.Vx,set:Xx.prototype.Tz});Xx.prototype.get_maxFraction=Xx.prototype.Nx=function(){return zr(this.$u)};Xx.prototype.set_maxFraction=Xx.prototype.Lz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ar(c,b)};
Object.defineProperty(Xx.prototype,"maxFraction",{get:Xx.prototype.Nx,set:Xx.prototype.Lz});Xx.prototype.__destroy__=Xx.prototype.cv=function(){Br(this.$u)};function Yx(){throw"cannot construct a b2RayCastOutput, no constructor in IDL";}Yx.prototype=Object.create(e.prototype);Yx.prototype.constructor=Yx;Yx.prototype.av=Yx;Yx.bv={};a.b2RayCastOutput=Yx;Yx.prototype.get_normal=Yx.prototype.Zv=function(){return h(Cr(this.$u),r)};
Yx.prototype.set_normal=Yx.prototype.tw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Dr(c,b)};Object.defineProperty(Yx.prototype,"normal",{get:Yx.prototype.Zv,set:Yx.prototype.tw});Yx.prototype.get_fraction=Yx.prototype.bx=function(){return Er(this.$u)};Yx.prototype.set_fraction=Yx.prototype.Zy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fr(c,b)};Object.defineProperty(Yx.prototype,"fraction",{get:Yx.prototype.bx,set:Yx.prototype.Zy});
Yx.prototype.__destroy__=Yx.prototype.cv=function(){Gr(this.$u)};function R(){throw"cannot construct a b2RevoluteJoint, no constructor in IDL";}R.prototype=Object.create(q.prototype);R.prototype.constructor=R;R.prototype.av=R;R.bv={};a.b2RevoluteJoint=R;R.prototype.GetLocalAnchorA=function(){return h(Hr(this.$u),r)};R.prototype.GetLocalAnchorB=function(){return h(Ir(this.$u),r)};R.prototype.GetReferenceAngle=function(){return Jr(this.$u)};R.prototype.GetJointAngle=function(){return Kr(this.$u)};
R.prototype.GetJointSpeed=function(){return Lr(this.$u)};R.prototype.IsLimitEnabled=function(){return!!Mr(this.$u)};R.prototype.EnableLimit=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Nr(c,b)};R.prototype.GetLowerLimit=function(){return Or(this.$u)};R.prototype.GetUpperLimit=function(){return Pr(this.$u)};R.prototype.SetLimits=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Qr(d,b,c)};R.prototype.IsMotorEnabled=function(){return!!Rr(this.$u)};
R.prototype.EnableMotor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sr(c,b)};R.prototype.SetMotorSpeed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tr(c,b)};R.prototype.GetMotorSpeed=function(){return Ur(this.$u)};R.prototype.SetMaxMotorTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vr(c,b)};R.prototype.GetMaxMotorTorque=function(){return Wr(this.$u)};R.prototype.GetMotorTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Xr(c,b)};
R.prototype.GetType=function(){return Yr(this.$u)};R.prototype.GetBodyA=function(){return h(Zr(this.$u),n)};R.prototype.GetBodyB=function(){return h($r(this.$u),n)};R.prototype.GetAnchorA=function(){return h(as(this.$u),r)};R.prototype.GetAnchorB=function(){return h(bs(this.$u),r)};R.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(cs(c,b),r)};R.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return ds(c,b)};
R.prototype.GetNext=function(){return h(es(this.$u),q)};R.prototype.GetUserData=function(){return h(gs(this.$u),m)};R.prototype.GetCollideConnected=function(){return!!hs(this.$u)};R.prototype.__destroy__=R.prototype.cv=function(){is(this.$u)};function S(){this.$u=js();g(S)[this.$u]=this}S.prototype=Object.create(l.prototype);S.prototype.constructor=S;S.prototype.av=S;S.bv={};a.b2RevoluteJointDef=S;
S.prototype.Initialize=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);ks(f,b,c,d)};S.prototype.get_localAnchorA=S.prototype.ov=function(){return h(ls(this.$u),r)};S.prototype.set_localAnchorA=S.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ms(c,b)};Object.defineProperty(S.prototype,"localAnchorA",{get:S.prototype.ov,set:S.prototype.qv});
S.prototype.get_localAnchorB=S.prototype.pv=function(){return h(ns(this.$u),r)};S.prototype.set_localAnchorB=S.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ps(c,b)};Object.defineProperty(S.prototype,"localAnchorB",{get:S.prototype.pv,set:S.prototype.rv});S.prototype.get_referenceAngle=S.prototype.Fv=function(){return qs(this.$u)};S.prototype.set_referenceAngle=S.prototype.Lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rs(c,b)};
Object.defineProperty(S.prototype,"referenceAngle",{get:S.prototype.Fv,set:S.prototype.Lv});S.prototype.get_enableLimit=S.prototype.Av=function(){return!!ss(this.$u)};S.prototype.set_enableLimit=S.prototype.Gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ts(c,b)};Object.defineProperty(S.prototype,"enableLimit",{get:S.prototype.Av,set:S.prototype.Gv});S.prototype.get_lowerAngle=S.prototype.yx=function(){return us(this.$u)};
S.prototype.set_lowerAngle=S.prototype.wz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vs(c,b)};Object.defineProperty(S.prototype,"lowerAngle",{get:S.prototype.yx,set:S.prototype.wz});S.prototype.get_upperAngle=S.prototype.ty=function(){return xs(this.$u)};S.prototype.set_upperAngle=S.prototype.rA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ys(c,b)};Object.defineProperty(S.prototype,"upperAngle",{get:S.prototype.ty,set:S.prototype.rA});
S.prototype.get_enableMotor=S.prototype.Bv=function(){return!!zs(this.$u)};S.prototype.set_enableMotor=S.prototype.Hv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);As(c,b)};Object.defineProperty(S.prototype,"enableMotor",{get:S.prototype.Bv,set:S.prototype.Hv});S.prototype.get_motorSpeed=S.prototype.Dv=function(){return Bs(this.$u)};S.prototype.set_motorSpeed=S.prototype.Jv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cs(c,b)};
Object.defineProperty(S.prototype,"motorSpeed",{get:S.prototype.Dv,set:S.prototype.Jv});S.prototype.get_maxMotorTorque=S.prototype.Wv=function(){return Ds(this.$u)};S.prototype.set_maxMotorTorque=S.prototype.qw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Es(c,b)};Object.defineProperty(S.prototype,"maxMotorTorque",{get:S.prototype.Wv,set:S.prototype.qw});S.prototype.get_type=S.prototype.dv=function(){return Fs(this.$u)};
S.prototype.set_type=S.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gs(c,b)};Object.defineProperty(S.prototype,"type",{get:S.prototype.dv,set:S.prototype.fv});S.prototype.get_userData=S.prototype.ev=function(){return h(Hs(this.$u),m)};S.prototype.set_userData=S.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Is(c,b)};Object.defineProperty(S.prototype,"userData",{get:S.prototype.ev,set:S.prototype.gv});
S.prototype.get_bodyA=S.prototype.hv=function(){return h(Js(this.$u),n)};S.prototype.set_bodyA=S.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ks(c,b)};Object.defineProperty(S.prototype,"bodyA",{get:S.prototype.hv,set:S.prototype.lv});S.prototype.get_bodyB=S.prototype.jv=function(){return h(Ls(this.$u),n)};S.prototype.set_bodyB=S.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ms(c,b)};
Object.defineProperty(S.prototype,"bodyB",{get:S.prototype.jv,set:S.prototype.mv});S.prototype.get_collideConnected=S.prototype.kv=function(){return!!Ns(this.$u)};S.prototype.set_collideConnected=S.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Os(c,b)};Object.defineProperty(S.prototype,"collideConnected",{get:S.prototype.kv,set:S.prototype.nv});S.prototype.__destroy__=S.prototype.cv=function(){Ps(this.$u)};
function Dx(b){b&&"object"===typeof b&&(b=b.$u);this.$u=void 0===b?Qs():Rs(b);g(Dx)[this.$u]=this}Dx.prototype=Object.create(e.prototype);Dx.prototype.constructor=Dx;Dx.prototype.av=Dx;Dx.bv={};a.b2Rot=Dx;Dx.prototype.Set=Dx.prototype.Set=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ss(c,b)};Dx.prototype.SetIdentity=function(){Ts(this.$u)};Dx.prototype.GetAngle=function(){return Us(this.$u)};Dx.prototype.GetXAxis=function(){return h(Vs(this.$u),r)};
Dx.prototype.GetYAxis=function(){return h(Ws(this.$u),r)};Dx.prototype.get_s=Dx.prototype.ay=function(){return Xs(this.$u)};Dx.prototype.set_s=Dx.prototype.Zz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ys(c,b)};Object.defineProperty(Dx.prototype,"s",{get:Dx.prototype.ay,set:Dx.prototype.Zz});Dx.prototype.get_c=Dx.prototype.Qw=function(){return Zs(this.$u)};Dx.prototype.set_c=Dx.prototype.Ny=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$s(c,b)};
Object.defineProperty(Dx.prototype,"c",{get:Dx.prototype.Qw,set:Dx.prototype.Ny});Dx.prototype.__destroy__=Dx.prototype.cv=function(){at(this.$u)};function T(){throw"cannot construct a b2WheelJoint, no constructor in IDL";}T.prototype=Object.create(q.prototype);T.prototype.constructor=T;T.prototype.av=T;T.bv={};a.b2WheelJoint=T;T.prototype.GetLocalAnchorA=function(){return h(bt(this.$u),r)};T.prototype.GetLocalAnchorB=function(){return h(ct(this.$u),r)};
T.prototype.GetLocalAxisA=function(){return h(dt(this.$u),r)};T.prototype.GetJointTranslation=function(){return et(this.$u)};T.prototype.GetJointLinearSpeed=function(){return ft(this.$u)};T.prototype.GetJointAngle=function(){return gt(this.$u)};T.prototype.GetJointAngularSpeed=function(){return ht(this.$u)};T.prototype.IsLimitEnabled=function(){return!!it(this.$u)};T.prototype.EnableLimit=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);jt(c,b)};T.prototype.GetLowerLimit=function(){return kt(this.$u)};
T.prototype.GetUpperLimit=function(){return lt(this.$u)};T.prototype.SetLimits=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);mt(d,b,c)};T.prototype.IsMotorEnabled=function(){return!!nt(this.$u)};T.prototype.EnableMotor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ot(c,b)};T.prototype.SetMotorSpeed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pt(c,b)};T.prototype.GetMotorSpeed=function(){return qt(this.$u)};
T.prototype.SetMaxMotorTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rt(c,b)};T.prototype.GetMaxMotorTorque=function(){return st(this.$u)};T.prototype.GetMotorTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return tt(c,b)};T.prototype.SetStiffness=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ut(c,b)};T.prototype.GetStiffness=function(){return vt(this.$u)};T.prototype.SetDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wt(c,b)};
T.prototype.GetDamping=function(){return xt(this.$u)};T.prototype.GetType=function(){return yt(this.$u)};T.prototype.GetBodyA=function(){return h(zt(this.$u),n)};T.prototype.GetBodyB=function(){return h(At(this.$u),n)};T.prototype.GetAnchorA=function(){return h(Bt(this.$u),r)};T.prototype.GetAnchorB=function(){return h(Ct(this.$u),r)};T.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Dt(c,b),r)};
T.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Et(c,b)};T.prototype.GetNext=function(){return h(Ft(this.$u),q)};T.prototype.GetUserData=function(){return h(Gt(this.$u),m)};T.prototype.GetCollideConnected=function(){return!!Ht(this.$u)};T.prototype.__destroy__=T.prototype.cv=function(){It(this.$u)};function U(){this.$u=Jt();g(U)[this.$u]=this}U.prototype=Object.create(l.prototype);U.prototype.constructor=U;U.prototype.av=U;U.bv={};
a.b2WheelJointDef=U;U.prototype.Initialize=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);Kt(p,b,c,d,f)};U.prototype.get_localAnchorA=U.prototype.ov=function(){return h(Lt(this.$u),r)};U.prototype.set_localAnchorA=U.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mt(c,b)};Object.defineProperty(U.prototype,"localAnchorA",{get:U.prototype.ov,set:U.prototype.qv});
U.prototype.get_localAnchorB=U.prototype.pv=function(){return h(Nt(this.$u),r)};U.prototype.set_localAnchorB=U.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ot(c,b)};Object.defineProperty(U.prototype,"localAnchorB",{get:U.prototype.pv,set:U.prototype.rv});U.prototype.get_localAxisA=U.prototype.Rv=function(){return h(Pt(this.$u),r)};U.prototype.set_localAxisA=U.prototype.lw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qt(c,b)};
Object.defineProperty(U.prototype,"localAxisA",{get:U.prototype.Rv,set:U.prototype.lw});U.prototype.get_enableLimit=U.prototype.Av=function(){return!!Rt(this.$u)};U.prototype.set_enableLimit=U.prototype.Gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);St(c,b)};Object.defineProperty(U.prototype,"enableLimit",{get:U.prototype.Av,set:U.prototype.Gv});U.prototype.get_lowerTranslation=U.prototype.Tv=function(){return Tt(this.$u)};
U.prototype.set_lowerTranslation=U.prototype.nw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ut(c,b)};Object.defineProperty(U.prototype,"lowerTranslation",{get:U.prototype.Tv,set:U.prototype.nw});U.prototype.get_upperTranslation=U.prototype.ew=function(){return Vt(this.$u)};U.prototype.set_upperTranslation=U.prototype.zw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wt(c,b)};Object.defineProperty(U.prototype,"upperTranslation",{get:U.prototype.ew,set:U.prototype.zw});
U.prototype.get_enableMotor=U.prototype.Bv=function(){return!!Xt(this.$u)};U.prototype.set_enableMotor=U.prototype.Hv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yt(c,b)};Object.defineProperty(U.prototype,"enableMotor",{get:U.prototype.Bv,set:U.prototype.Hv});U.prototype.get_maxMotorTorque=U.prototype.Wv=function(){return Zt(this.$u)};U.prototype.set_maxMotorTorque=U.prototype.qw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$t(c,b)};
Object.defineProperty(U.prototype,"maxMotorTorque",{get:U.prototype.Wv,set:U.prototype.qw});U.prototype.get_motorSpeed=U.prototype.Dv=function(){return au(this.$u)};U.prototype.set_motorSpeed=U.prototype.Jv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);bu(c,b)};Object.defineProperty(U.prototype,"motorSpeed",{get:U.prototype.Dv,set:U.prototype.Jv});U.prototype.get_stiffness=U.prototype.yv=function(){return cu(this.$u)};
U.prototype.set_stiffness=U.prototype.zv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);du(c,b)};Object.defineProperty(U.prototype,"stiffness",{get:U.prototype.yv,set:U.prototype.zv});U.prototype.get_damping=U.prototype.sv=function(){return eu(this.$u)};U.prototype.set_damping=U.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fu(c,b)};Object.defineProperty(U.prototype,"damping",{get:U.prototype.sv,set:U.prototype.vv});U.prototype.get_type=U.prototype.dv=function(){return gu(this.$u)};
U.prototype.set_type=U.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);hu(c,b)};Object.defineProperty(U.prototype,"type",{get:U.prototype.dv,set:U.prototype.fv});U.prototype.get_userData=U.prototype.ev=function(){return h(iu(this.$u),m)};U.prototype.set_userData=U.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ju(c,b)};Object.defineProperty(U.prototype,"userData",{get:U.prototype.ev,set:U.prototype.gv});
U.prototype.get_bodyA=U.prototype.hv=function(){return h(ku(this.$u),n)};U.prototype.set_bodyA=U.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lu(c,b)};Object.defineProperty(U.prototype,"bodyA",{get:U.prototype.hv,set:U.prototype.lv});U.prototype.get_bodyB=U.prototype.jv=function(){return h(mu(this.$u),n)};U.prototype.set_bodyB=U.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nu(c,b)};
Object.defineProperty(U.prototype,"bodyB",{get:U.prototype.jv,set:U.prototype.mv});U.prototype.get_collideConnected=U.prototype.kv=function(){return!!ou(this.$u)};U.prototype.set_collideConnected=U.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pu(c,b)};Object.defineProperty(U.prototype,"collideConnected",{get:U.prototype.kv,set:U.prototype.nv});U.prototype.__destroy__=U.prototype.cv=function(){qu(this.$u)};
function Zx(){throw"cannot construct a b2MotorJoint, no constructor in IDL";}Zx.prototype=Object.create(q.prototype);Zx.prototype.constructor=Zx;Zx.prototype.av=Zx;Zx.bv={};a.b2MotorJoint=Zx;Zx.prototype.SetLinearOffset=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ru(c,b)};Zx.prototype.GetLinearOffset=function(){return h(su(this.$u),r)};Zx.prototype.SetAngularOffset=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tu(c,b)};Zx.prototype.GetAngularOffset=function(){return uu(this.$u)};
Zx.prototype.SetMaxForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vu(c,b)};Zx.prototype.GetMaxForce=function(){return wu(this.$u)};Zx.prototype.SetMaxTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xu(c,b)};Zx.prototype.GetMaxTorque=function(){return yu(this.$u)};Zx.prototype.SetCorrectionFactor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zu(c,b)};Zx.prototype.GetCorrectionFactor=function(){return Au(this.$u)};Zx.prototype.GetType=function(){return Bu(this.$u)};
Zx.prototype.GetBodyA=function(){return h(Cu(this.$u),n)};Zx.prototype.GetBodyB=function(){return h(Du(this.$u),n)};Zx.prototype.GetAnchorA=function(){return h(Eu(this.$u),r)};Zx.prototype.GetAnchorB=function(){return h(Fu(this.$u),r)};Zx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Gu(c,b),r)};Zx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Hu(c,b)};
Zx.prototype.GetNext=function(){return h(Iu(this.$u),q)};Zx.prototype.GetUserData=function(){return h(Ju(this.$u),m)};Zx.prototype.GetCollideConnected=function(){return!!Ku(this.$u)};Zx.prototype.__destroy__=Zx.prototype.cv=function(){Lu(this.$u)};function V(){this.$u=Mu();g(V)[this.$u]=this}V.prototype=Object.create(l.prototype);V.prototype.constructor=V;V.prototype.av=V;V.bv={};a.b2MotorJointDef=V;
V.prototype.Initialize=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Nu(d,b,c)};V.prototype.get_linearOffset=V.prototype.vx=function(){return h(Ou(this.$u),r)};V.prototype.set_linearOffset=V.prototype.sz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pu(c,b)};Object.defineProperty(V.prototype,"linearOffset",{get:V.prototype.vx,set:V.prototype.sz});V.prototype.get_angularOffset=V.prototype.Gw=function(){return Qu(this.$u)};
V.prototype.set_angularOffset=V.prototype.Dy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ru(c,b)};Object.defineProperty(V.prototype,"angularOffset",{get:V.prototype.Gw,set:V.prototype.Dy});V.prototype.get_maxForce=V.prototype.Cv=function(){return Su(this.$u)};V.prototype.set_maxForce=V.prototype.Iv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tu(c,b)};Object.defineProperty(V.prototype,"maxForce",{get:V.prototype.Cv,set:V.prototype.Iv});
V.prototype.get_maxTorque=V.prototype.Xv=function(){return Uu(this.$u)};V.prototype.set_maxTorque=V.prototype.rw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vu(c,b)};Object.defineProperty(V.prototype,"maxTorque",{get:V.prototype.Xv,set:V.prototype.rw});V.prototype.get_correctionFactor=V.prototype.Ww=function(){return Wu(this.$u)};V.prototype.set_correctionFactor=V.prototype.Ty=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xu(c,b)};
Object.defineProperty(V.prototype,"correctionFactor",{get:V.prototype.Ww,set:V.prototype.Ty});V.prototype.get_type=V.prototype.dv=function(){return Yu(this.$u)};V.prototype.set_type=V.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zu(c,b)};Object.defineProperty(V.prototype,"type",{get:V.prototype.dv,set:V.prototype.fv});V.prototype.get_userData=V.prototype.ev=function(){return h($u(this.$u),m)};
V.prototype.set_userData=V.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);av(c,b)};Object.defineProperty(V.prototype,"userData",{get:V.prototype.ev,set:V.prototype.gv});V.prototype.get_bodyA=V.prototype.hv=function(){return h(bv(this.$u),n)};V.prototype.set_bodyA=V.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cv(c,b)};Object.defineProperty(V.prototype,"bodyA",{get:V.prototype.hv,set:V.prototype.lv});
V.prototype.get_bodyB=V.prototype.jv=function(){return h(dv(this.$u),n)};V.prototype.set_bodyB=V.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ev(c,b)};Object.defineProperty(V.prototype,"bodyB",{get:V.prototype.jv,set:V.prototype.mv});V.prototype.get_collideConnected=V.prototype.kv=function(){return!!fv(this.$u)};V.prototype.set_collideConnected=V.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);gv(c,b)};
Object.defineProperty(V.prototype,"collideConnected",{get:V.prototype.kv,set:V.prototype.nv});V.prototype.__destroy__=V.prototype.cv=function(){hv(this.$u)};function X(){this.$u=iv();g(X)[this.$u]=this}X.prototype=Object.create(e.prototype);X.prototype.constructor=X;X.prototype.av=X;X.bv={};a.b2RopeTuning=X;X.prototype.get_stretchingModel=X.prototype.my=function(){return jv(this.$u)};X.prototype.set_stretchingModel=X.prototype.kA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);kv(c,b)};
Object.defineProperty(X.prototype,"stretchingModel",{get:X.prototype.my,set:X.prototype.kA});X.prototype.get_bendingModel=X.prototype.Nw=function(){return lv(this.$u)};X.prototype.set_bendingModel=X.prototype.Ky=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);mv(c,b)};Object.defineProperty(X.prototype,"bendingModel",{get:X.prototype.Nw,set:X.prototype.Ky});X.prototype.get_damping=X.prototype.sv=function(){return nv(this.$u)};
X.prototype.set_damping=X.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ov(c,b)};Object.defineProperty(X.prototype,"damping",{get:X.prototype.sv,set:X.prototype.vv});X.prototype.get_stretchStiffness=X.prototype.ly=function(){return pv(this.$u)};X.prototype.set_stretchStiffness=X.prototype.jA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qv(c,b)};Object.defineProperty(X.prototype,"stretchStiffness",{get:X.prototype.ly,set:X.prototype.jA});
X.prototype.get_stretchHertz=X.prototype.ky=function(){return rv(this.$u)};X.prototype.set_stretchHertz=X.prototype.iA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);sv(c,b)};Object.defineProperty(X.prototype,"stretchHertz",{get:X.prototype.ky,set:X.prototype.iA});X.prototype.get_stretchDamping=X.prototype.jy=function(){return tv(this.$u)};X.prototype.set_stretchDamping=X.prototype.hA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);uv(c,b)};
Object.defineProperty(X.prototype,"stretchDamping",{get:X.prototype.jy,set:X.prototype.hA});X.prototype.get_bendStiffness=X.prototype.Mw=function(){return vv(this.$u)};X.prototype.set_bendStiffness=X.prototype.Jy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wv(c,b)};Object.defineProperty(X.prototype,"bendStiffness",{get:X.prototype.Mw,set:X.prototype.Jy});X.prototype.get_bendHertz=X.prototype.Lw=function(){return xv(this.$u)};
X.prototype.set_bendHertz=X.prototype.Iy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yv(c,b)};Object.defineProperty(X.prototype,"bendHertz",{get:X.prototype.Lw,set:X.prototype.Iy});X.prototype.get_bendDamping=X.prototype.Kw=function(){return zv(this.$u)};X.prototype.set_bendDamping=X.prototype.Hy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Av(c,b)};Object.defineProperty(X.prototype,"bendDamping",{get:X.prototype.Kw,set:X.prototype.Hy});
X.prototype.get_isometric=X.prototype.mx=function(){return!!Bv(this.$u)};X.prototype.set_isometric=X.prototype.jz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cv(c,b)};Object.defineProperty(X.prototype,"isometric",{get:X.prototype.mx,set:X.prototype.jz});X.prototype.get_fixedEffectiveMass=X.prototype.$w=function(){return!!Dv(this.$u)};X.prototype.set_fixedEffectiveMass=X.prototype.Xy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ev(c,b)};
Object.defineProperty(X.prototype,"fixedEffectiveMass",{get:X.prototype.$w,set:X.prototype.Xy});X.prototype.get_warmStart=X.prototype.xy=function(){return!!Fv(this.$u)};X.prototype.set_warmStart=X.prototype.vA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gv(c,b)};Object.defineProperty(X.prototype,"warmStart",{get:X.prototype.xy,set:X.prototype.vA});X.prototype.__destroy__=X.prototype.cv=function(){Hv(this.$u)};function Y(){this.$u=Iv();g(Y)[this.$u]=this}Y.prototype=Object.create(e.prototype);
Y.prototype.constructor=Y;Y.prototype.av=Y;Y.bv={};a.b2RopeDef=Y;Y.prototype.get_position=Y.prototype.bw=function(){return h(Jv(this.$u),r)};Y.prototype.set_position=Y.prototype.ww=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Kv(c,b)};Object.defineProperty(Y.prototype,"position",{get:Y.prototype.bw,set:Y.prototype.ww});Y.prototype.get_vertices=Y.prototype.wy=function(){return h(Lv(this.$u),r)};
Y.prototype.set_vertices=Y.prototype.uA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mv(c,b)};Object.defineProperty(Y.prototype,"vertices",{get:Y.prototype.wy,set:Y.prototype.uA});Y.prototype.get_count=Y.prototype.Nv=function(){return Nv(this.$u)};Y.prototype.set_count=Y.prototype.hw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ov(c,b)};Object.defineProperty(Y.prototype,"count",{get:Y.prototype.Nv,set:Y.prototype.hw});
Y.prototype.get_gravity=Y.prototype.ex=function(){return h(Pv(this.$u),r)};Y.prototype.set_gravity=Y.prototype.bz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qv(c,b)};Object.defineProperty(Y.prototype,"gravity",{get:Y.prototype.ex,set:Y.prototype.bz});Y.prototype.get_tuning=Y.prototype.qy=function(){return h(Rv(this.$u),X)};Y.prototype.set_tuning=Y.prototype.oA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sv(c,b)};
Object.defineProperty(Y.prototype,"tuning",{get:Y.prototype.qy,set:Y.prototype.oA});Y.prototype.__destroy__=Y.prototype.cv=function(){Tv(this.$u)};function $x(){this.$u=Uv();g($x)[this.$u]=this}$x.prototype=Object.create(e.prototype);$x.prototype.constructor=$x;$x.prototype.av=$x;$x.bv={};a.b2Rope=$x;$x.prototype.Create=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vv(c,b)};$x.prototype.SetTuning=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wv(c,b)};
$x.prototype.Step=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Xv(f,b,c,d)};$x.prototype.Reset=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yv(c,b)};$x.prototype.Draw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zv(c,b)};$x.prototype.__destroy__=$x.prototype.cv=function(){$v(this.$u)};function ay(){this.$u=aw();g(ay)[this.$u]=this}ay.prototype=Object.create(e.prototype);
ay.prototype.constructor=ay;ay.prototype.av=ay;ay.bv={};a.b2ClipVertex=ay;ay.prototype.get_v=ay.prototype.vy=function(){return h(bw(this.$u),r)};ay.prototype.set_v=ay.prototype.tA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cw(c,b)};Object.defineProperty(ay.prototype,"v",{get:ay.prototype.vy,set:ay.prototype.tA});ay.prototype.get_id=ay.prototype.Qv=function(){return h(dw(this.$u),Lx)};
ay.prototype.set_id=ay.prototype.kw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ew(c,b)};Object.defineProperty(ay.prototype,"id",{get:ay.prototype.Qv,set:ay.prototype.kw});ay.prototype.__destroy__=ay.prototype.cv=function(){fw(this.$u)};
(function(){function b(){a.b2Shape.e_circle=gw();a.b2Shape.e_edge=hw();a.b2Shape.e_polygon=iw();a.b2Shape.e_chain=jw();a.b2Shape.e_typeCount=kw();a.b2_staticBody=lw();a.b2_kinematicBody=mw();a.b2_dynamicBody=nw();a.e_unknownJoint=ow();a.e_revoluteJoint=pw();a.e_prismaticJoint=qw();a.e_distanceJoint=rw();a.e_pulleyJoint=sw();a.e_mouseJoint=tw();a.e_gearJoint=uw();a.e_wheelJoint=vw();a.e_weldJoint=ww();a.e_frictionJoint=xw();a.e_ropeJoint=yw();a.e_motorJoint=zw();a.b2ContactFeature.e_vertex=Aw();a.b2ContactFeature.e_face=
Bw();a.b2Draw.e_shapeBit=Cw();a.b2Draw.e_jointBit=Dw();a.b2Draw.e_aabbBit=Ew();a.b2Draw.e_pairBit=Fw();a.b2Draw.e_centerOfMassBit=Gw();a.b2Manifold.e_circles=Hw();a.b2Manifold.e_faceA=Iw();a.b2Manifold.e_faceB=Jw();a.b2_nullState=Kw();a.b2_addState=Lw();a.b2_persistState=Mw();a.b2_removeState=Nw();a.b2_pbdStretchingModel=Ow();a.b2_xpbdStretchingModel=Pw();a.b2_springAngleBendingModel=Qw();a.b2_pbdAngleBendingModel=Rw();a.b2_xpbdAngleBendingModel=Sw();a.b2_pbdDistanceBendingModel=Tw();a.b2_pbdHeightBendingModel=
Uw()}Ga?b():Da.unshift(b)})();Y.prototype.get_masses=Y.prototype.Mx=function(){return h(Vw(this.$u),r)};Y.prototype.set_masses=Y.prototype.Kz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ww(c,b)};Object.defineProperty(Y.prototype,"masses",{get:Y.prototype.Mx,set:Y.prototype.Kz});const Z=b=>"object"===typeof b?b.$u:b;a.b2GetPointStates=(b,c,d,f)=>{Xw(Z(b),Z(c),Z(d),Z(f))};a.b2CollideCircles=(b,c,d,f,p)=>{Yw(Z(b),Z(c),Z(d),Z(f),Z(p))};
a.b2CollidePolygonAndCircle=(b,c,d,f,p)=>{Zw(Z(b),Z(c),Z(d),Z(f),Z(p))};a.b2CollidePolygons=(b,c,d,f,p)=>{$w(Z(b),Z(c),Z(d),Z(f),Z(p))};a.b2CollideEdgeAndCircle=(b,c,d,f,p)=>{ax(Z(b),Z(c),Z(d),Z(f),Z(p))};a.b2CollideEdgeAndPolygon=(b,c,d,f,p)=>{bx(Z(b),Z(c),Z(d),Z(f),Z(p))};a.b2ClipSegmentToLine=(b,c,d,f,p)=>cx(Z(b),Z(c),Z(d),f,p);a.b2TestOverlap=(b,c,d,f,p,W)=>void 0===d?!!ex(Z(b),Z(c)):!!dx(Z(b),c,Z(d),f,Z(p),Z(W));a.reifyArray=(b,c,d,f)=>Array.from({length:c},(p,W)=>h(b+W*d,f));
a.pointsToVec2Array=b=>{const c=new Float32Array(2*b.length);for(let f=0;f<b.length;f++){const {x:p,y:W}=b[f];c[2*f]=p;c[2*f+1]=W}const d=a._malloc(c.byteLength);za.set(c,d>>2);return[h(d,r),()=>a._free(d)]};a.tuplesToVec2Array=b=>{const c=new Float32Array(2*b.length);for(let f=0;f<b.length;f++){const [p,W]=b[f];c[2*f]=p;c[2*f+1]=W}const d=a._malloc(c.byteLength);za.set(c,d>>2);return[h(d,r),()=>a._free(d)]};
a.toFloatArray=b=>{b=new Float32Array(b);const c=a._malloc(b.byteLength);za.set(b,c>>2);return[h(c),()=>a._free(c)]};a.sizeof=b=>{const c=new b;b=new b;const d=b.$u-c.$u;b.cv();c.cv();return d};a.allocateArray=(b,c,d=1)=>{c=new ArrayBuffer(c*d);const f=a._malloc(c.byteLength);wa.set(c,f);return[h(f,b),()=>a._free(f)]};a.b2LinearStiffness=(b,c,d,f,p,W)=>{fx(Z(b),Z(c),d,f,Z(p),Z(W))};a.b2AngularStiffness=(b,c,d,f,p,W)=>{gx(Z(b),Z(c),d,f,Z(p),Z(W))};


  return Box2D.ready
}
);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box2D);

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/tippy/index.css":
/*!***********************************!*\
  !*** ./src/pages/tippy/index.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/box2d-wasm/dist/es/Box2D.wasm":
/*!****************************************************!*\
  !*** ./node_modules/box2d-wasm/dist/es/Box2D.wasm ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Box2D.wasm";

/***/ }),

/***/ "?4121":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5f8c":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"src_pages_tippy_workers_simulation-worker_js":"069d716a197c18255e15","src_pages_tippy_workers_training-worker_js":"0238ac30283295a2eabb"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"tippy": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/pages/tippy/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var box2d_wasm_dist_es_Box2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! box2d-wasm/dist/es/Box2D */ "./node_modules/box2d-wasm/dist/es/Box2D.js");
/* harmony import */ var _tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tippy.js */ "./src/pages/tippy/tippy.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.js */ "./src/pages/tippy/globals.js");
/* harmony import */ var _draw_sim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw-sim.js */ "./src/pages/tippy/draw-sim.js");
/* harmony import */ var _cmaMeanInit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmaMeanInit.js */ "./src/pages/tippy/cmaMeanInit.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

__webpack_require__(/*! ../../main.css */ "./src/main.css");

__webpack_require__(/*! ./index.css */ "./src/pages/tippy/index.css");





 // // https://stackoverflow.com/questions/62954570/javascript-feature-detect-module-support-for-web-workers

var population;
var trainingWorker,
    trainingWorkerInitialized = false,
    n_dim,
    solutionScoreDetailed = [],
    solutionsScoresReceived = 0,
    trainingPaused = false;
var simulationWorkers = [],
    trainingRecord = [];
var trainingRecordInitialized = false;

function initSimWorkers(terrainPts) {
  for (var i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.nWorkers; i++) {
    var worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_tippy_workers_simulation-worker_js"), __webpack_require__.b));
    worker.postMessage(["terrainPts", terrainPts]);

    worker.onmessage = function (e) {
      var _e$data = _slicedToArray(e.data, 2),
          info = _e$data[0],
          msg = _e$data[1];

      if (info == "solutionsScores") {
        var _solutionScoreDetaile;

        (_solutionScoreDetaile = solutionScoreDetailed).push.apply(_solutionScoreDetaile, _toConsumableArray(msg));

        solutionsScoresReceived++;

        if (solutionsScoresReceived == _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.nWorkers && !trainingPaused) {
          sendScores();
        }
      }
    };

    simulationWorkers.push(worker);
  }
}

function sendScores() {
  console.log("sending scores");
  trainingWorker.postMessage(["solutionsScores", // processScores(solutionScoreDetailed, trainingRecord, chart),
  processScores(solutionScoreDetailed, trainingRecord, null)]);
  solutionScoreDetailed = [];
  solutionsScoresReceived = 0;
}

function getTaskStr(i) {
  return "task_".concat(i.toString().padStart(2, "0"), "_");
}

var trainingEp = 0;

function pushChartData(chart, datasetIdx, keyStr, value) {
  var ds = chart.data.datasets[datasetIdx];

  if (ds.label == keyStr) {
    ds.data.push({
      x: trainingEp,
      y: value
    });
  }
}

function processScores(solutionScoreDetailed, trainingRecord, chart) {
  var solutionsScores = []; // if (!trainingRecordInitialized) {
  //   const info = solutionScoreDetailed[0]
  //   for (let i = 0; i < info.taskScores.length; i++) {
  //     const taskStr = getTaskStr(i),
  //       taskScore = info.taskScores[i]
  //     for (let key of Object.keys(taskScore)) {
  //       const keyStr = taskStr + key
  //       trainingRecord[keyStr] = []
  //     }
  //   }
  //   trainingRecord["biasNorm"] = []
  //   trainingRecord["wtsNorm"] = []
  //   trainingRecord["episode"] = []
  //   const datasets = []
  //   for (let key of Object.keys(trainingRecord)) {
  //     if (key == "episode") {
  //       continue
  //     }
  //     datasets.push({
  //       label: key,
  //       data: [],
  //       backgroundColor: randRGB(),
  //     })
  //   }
  //   chart.data.datasets = datasets
  // }
  // trainingRecordInitialized = true

  var _iterator = _createForOfIteratorHelper(solutionScoreDetailed),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var info = _step.value;
      // let datasetIdx = 0
      var solution = info.solution;
      var score = 0;

      for (var i = 0; i < info.taskScores.length; i++) {
        // const taskStr = getTaskStr(i),
        //   taskScore = info.taskScores[i]
        var taskScore = info.taskScores[i]; // for (let key of Object.keys(taskScore)) {
        //   const keyStr = taskStr + key,
        //     value = taskScore[key]
        //   trainingRecord[keyStr].push(value)
        //   pushChartData(chart, datasetIdx, keyStr, value)
        //   datasetIdx++
        // }

        score += taskScore.mse;
        score += 1e2 * taskScore.crashedRatio;
        score += 1e5 * taskScore.driftX;
      }

      score += 1e-9 * info.biasNorm;
      score += 1e1 * info.wtsNorm; // trainingRecord["biasNorm"].push(info.biasNorm)
      // pushChartData(chart, datasetIdx, "biasNorm", info.biasNorm)
      // datasetIdx++
      // trainingRecord["wtsNorm"].push(info.wtsNorm)
      // pushChartData(chart, datasetIdx, "wtsNorm", info.wtsNorm)

      solutionsScores.push({
        solution: solution,
        score: score
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  trainingEp++; // console.log(trainingRecord)
  // chart.update()

  return solutionsScores;
}

var terrainPts = (0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.generateTerrainPts)();
initSimWorkers(terrainPts);
var tippyCanvas = document.getElementById("tippy-canvas"),
    tippyCTX = tippyCanvas.getContext("2d");
tippyCanvas.width = _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.w;
tippyCanvas.height = _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.h; // const chartCanvas = document.getElementById("chart-canvas"),
//   chartCTX = chartCanvas.getContext("2d"),
//   chart = getChart(chartCTX)

var scale = 220;
var wheelCanvas, chassisCanvas;
var lidarCanvas = (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.getLidarCanvas)();
var leftDown = false,
    rightDown = false; // targetSin = 0,
// targetAngle = 0,
// targetCos = 1

var trainBtn = document.getElementById("train-btn");
trainBtn.training = false;

function initTrainBtn() {
  trainBtn.addEventListener("click", function (e) {
    trainBtn.training = !trainBtn.training;
    trainBtn.innerHTML = trainBtn.training ? "Pause training" : "Resume training";

    if (trainBtn.training && !trainingWorkerInitialized) {
      console.log("Training begins!"); // trainingWorker = new Worker("./workers/training-worker.js")

      trainingWorker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_tippy_workers_training-worker_js"), __webpack_require__.b));
      trainingWorker.postMessage(["init_info", {
        n_dim: n_dim,
        terrainPts: terrainPts
      }]);

      trainingWorker.onmessage = function (e) {
        var _e$data2 = _slicedToArray(e.data, 2),
            info = _e$data2[0],
            msg = _e$data2[1];

        if (info === "targetsSolutions") {
          for (var i = 0; i < msg.length; i++) {
            simulationWorkers[i].postMessage([info, msg[i]]);
          }
        } else if (info === "cmaMeanWts") {
          var cmaMeanWts = msg.slice();
          console.log(cmaMeanWts);
          population.setWts(cmaMeanWts);
        }
      };

      trainingWorkerInitialized = true;
    } else if (trainBtn.training && trainingPaused) {
      console.log("training resumed");
      trainingPaused = false;

      if (solutionsScoresReceived == _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.nWorkers) {
        sendScores();
      }
    } else if (!trainBtn.training && trainingWorkerInitialized) {
      console.log("training paused");
      trainingPaused = true;
    }
  });
}

document.addEventListener("keydown", function (e) {
  handleLR(e.code, true);
}, false);
document.addEventListener("keyup", function (event) {
  handleLR(event.code, false);
}, false);

function handleLR(code, down) {
  if (_globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.lInputCodes.includes(code)) {
    leftDown = down;
  } else if (_globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.rInputCodes.includes(code)) {
    rightDown = down;
  }
}

(0,box2d_wasm_dist_es_Box2D__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (b2) {
  population = new _tippy_js__WEBPACK_IMPORTED_MODULE_1__.Population([0, 0], 1, terrainPts, b2);
  n_dim = population.n_dim;
  initTrainBtn();
  var tippy = population.tippys[0];
  wheelCanvas = (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.getWheelCanvas)(scale * 2 * tippy.wheelR);
  chassisCanvas = (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.getChassisCanvas)(tippy.chassisVertices, scale);
  population.setWts( // new Float32Array(population.n_dim).map(() => 1.0 * (Math.random() - 0.5))
  _cmaMeanInit_js__WEBPACK_IMPORTED_MODULE_4__.cmaMeanInit.slice());
  var step = 0;
  var targetSin = 0,
      targetVel = 0; // const epTargets = generateEpisodeTargets(0.025)

  var corrRecord = [];

  function b2Loop() {
    tippyCTX.clearRect(0, 0, _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.w, _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.h);
    var tippy = population.tippys[0];
    (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.drawTippy)(tippy, terrainPts, scale, [0.5 * _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.w, 0.65 * _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.h], tippyCTX, chassisCanvas, wheelCanvas, lidarCanvas); // const targetSin = epTargets[step]

    var target = _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.targetType == "vel" ? targetVel : targetSin;
    (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.drawInputBar)(target, tippyCTX);

    var _updateDirection = (0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.updateDirection)(leftDown, rightDown, targetSin, targetVel);

    var _updateDirection2 = _slicedToArray(_updateDirection, 2);

    targetSin = _updateDirection2[0];
    targetVel = _updateDirection2[1];
    population.update([_globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.targetType === "sin" ? targetSin : targetVel]); // corrRecord.push(tippy.corrData)
    // step++
    // if (step >= epLen) {

    if (tippy.crashStepCount > 20) {
      population.reset();
      step = 0;
      targetSin = 0;
      targetVel = 0; // console.log(corrRecord)
    } // if (step < epLen) {


    if (true) {
      requestAnimationFrame(b2Loop);
    }
  }

  requestAnimationFrame(b2Loop);
});
})();

/******/ })()
;