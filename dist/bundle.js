/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gui.ts":
/*!********************!*\
  !*** ./src/Gui.ts ***!
  \********************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ \"./src/app.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    class Gui {\n        context;\n        intro = (playground) => {\n            this.context = playground.context;\n            // This is\n            this.context.font = `${app_1.DefaultSettings.width}px Marker Felt`;\n            this.context.fillStyle = '#FFFFFF';\n            this.context.fillText('this is', app_1.DefaultSettings.width * 10 * 0.2, app_1.DefaultSettings.height * 10 * 0.2 - 30);\n            // Snek\n            this.context.font = `${app_1.DefaultSettings.height * 10 * 0.35}px Marker Felt`;\n            this.context.strokeStyle = 'orange';\n            this.context.lineWidth = app_1.DefaultSettings.width * 10 * 0.06;\n            this.context.strokeText('SNEK', app_1.DefaultSettings.width * 10 * 0.1, app_1.DefaultSettings.height * 10 * 0.5);\n            this.context.fillText('SNEK', app_1.DefaultSettings.width * 10 * 0.1, app_1.DefaultSettings.height * 10 * 0.5);\n            // Start\n            this.context.font = `${app_1.DefaultSettings.height * 10 * 0.1}px Marker Felt`;\n            this.context.fillText('Press `P` to play', app_1.DefaultSettings.width * 10 * 0.16, app_1.DefaultSettings.height * 10 * 0.7);\n            // Instructions\n            this.context.font = `${app_1.DefaultSettings.height * 10 * 0.05}px Marker Felt`;\n            this.context.fillText('Use arrow keys to control your snek', app_1.DefaultSettings.width * 10 * 0.1, app_1.DefaultSettings.height * 10 - 60);\n            // Instructions\n            this.context.font = `${app_1.DefaultSettings.height * 10 * 0.05}px Marker Felt`;\n            this.context.fillText('Use m-key to mute/unmute audio', app_1.DefaultSettings.width * 10 * 0.15, app_1.DefaultSettings.height * 10 - 20);\n        };\n        uDead = (points) => {\n            // Snek\n            this.context.font = `${app_1.DefaultSettings.height * 3}px Marker Felt`;\n            this.context.strokeStyle = 'orange';\n            this.context.lineWidth = app_1.DefaultSettings.width * 10 * 0.06;\n            this.context.strokeText('u dead!', app_1.DefaultSettings.width * 10 * 0.1, app_1.DefaultSettings.height * 10 * 0.5);\n            this.context.fillText('u dead!', app_1.DefaultSettings.width * 10 * 0.1, app_1.DefaultSettings.height * 10 * 0.5);\n            this.context.font = `${app_1.DefaultSettings.height * 0.7}px Marker Felt`;\n            this.context.fillText(`Your score: ${points}`, app_1.DefaultSettings.width * 10 * 0.24, app_1.DefaultSettings.height * 10 * 0.67);\n            // Start\n            this.context.fillStyle = '#FFFFFF';\n            this.context.fillText('Press `P` to play again..', app_1.DefaultSettings.width * 10 * 0.18, app_1.DefaultSettings.height * 10 * 0.8);\n        };\n    }\n    exports[\"default\"] = Gui;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://snek/./src/Gui.ts?");

/***/ }),

/***/ "./src/MusicPlayer.ts":
/*!****************************!*\
  !*** ./src/MusicPlayer.ts ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    class MusicPlayer {\n        isPlaying;\n        audioContext;\n        audioElement;\n        track;\n        constructor() {\n            this.isPlaying = false;\n            this.init;\n        }\n        toggle = () => {\n            // check if context is in suspended state (autoplay policy)\n            if (this.audioContext && this.audioContext.state === 'suspended') {\n                this.audioContext.resume();\n            }\n            if (this.isPlaying === false && this.audioElement) {\n                debugger;\n                this.audioElement.play();\n                this.isPlaying = true;\n            }\n            else if (this.isPlaying === true && this.audioElement) {\n                debugger;\n                this.audioElement.pause();\n                this.isPlaying = false;\n            }\n        };\n        init = () => {\n            this.audioContext = new AudioContext();\n            const audioElement = document.querySelector('audio');\n            if (audioElement) {\n                this.audioElement = audioElement;\n                this.track = this.audioContext.createMediaElementSource(this.audioElement);\n            }\n            const gainNode = this.audioContext.createGain();\n            gainNode.gain.value = 1;\n            this.track.connect(gainNode).connect(this.audioContext.destination);\n        };\n    }\n    exports[\"default\"] = MusicPlayer;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://snek/./src/MusicPlayer.ts?");

/***/ }),

/***/ "./src/Playground.ts":
/*!***************************!*\
  !*** ./src/Playground.ts ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ \"./src/app.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    class Playground {\n        canvas;\n        context;\n        applePosition;\n        points;\n        record;\n        constructor() {\n            this.canvas = document.createElement('canvas');\n            this.context = this.canvas.getContext('2d');\n            this.canvas.width = app_1.DefaultSettings.width * 10;\n            this.canvas.height = app_1.DefaultSettings.height * 10;\n            this.canvas.id = 'Snek';\n            this.applePosition = { X: 0, Y: 0 };\n            this.points = 0;\n            this.record = 0;\n        }\n        randomPosition = (min, max) => {\n            return Math.round(Math.random() * (max - min) + min);\n        };\n        repositionApple = () => {\n            const apple_X = this.randomPosition(0, (app_1.DefaultSettings.width * 10) / app_1.DefaultSettings.snekSize - 1);\n            const apple_Y = this.randomPosition(0, (app_1.DefaultSettings.height * 10) / app_1.DefaultSettings.snekSize - 1);\n            this.applePosition = {\n                X: apple_X,\n                Y: apple_Y\n            };\n        };\n        drawApple = () => {\n            this.context.fillStyle = '#AA0000';\n            this.context.fillRect(this.applePosition.X * app_1.DefaultSettings.snekSize, this.applePosition.Y * app_1.DefaultSettings.snekSize, app_1.DefaultSettings.snekSize, app_1.DefaultSettings.snekSize);\n        };\n        showPoints = () => {\n            this.context.font = `${app_1.DefaultSettings.width / 2.2}px Marker Felt`;\n            this.context.fillStyle = '#FFFFFF';\n            this.context.fillText(`Points: ${this.points}`, 15, 50);\n        };\n        clear = () => {\n            this.context.clearRect(0, 0, app_1.DefaultSettings.width * 10, app_1.DefaultSettings.width * 10);\n        };\n        init = () => {\n            document.body.appendChild(this.canvas);\n            this.repositionApple();\n            this.drawApple();\n        };\n    }\n    exports[\"default\"] = Playground;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://snek/./src/Playground.ts?");

/***/ }),

/***/ "./src/Snek.ts":
/*!*********************!*\
  !*** ./src/Snek.ts ***!
  \*********************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ \"./src/app.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.Direction = void 0;\n    var Direction;\n    (function (Direction) {\n        Direction[Direction[\"Up\"] = 0] = \"Up\";\n        Direction[Direction[\"Down\"] = 1] = \"Down\";\n        Direction[Direction[\"Left\"] = 2] = \"Left\";\n        Direction[Direction[\"Right\"] = 3] = \"Right\";\n    })(Direction = exports.Direction || (exports.Direction = {}));\n    class Snek {\n        head;\n        tail;\n        direction;\n        previousDirection;\n        isAlive;\n        speed;\n        constructor() {\n            this.tail = [];\n            this.head = { X: 0, Y: 0 };\n            this.direction = Direction.Down;\n            this.isAlive = true;\n            this.speed = app_1.DefaultSettings.gameLoop;\n        }\n        killSnek = () => {\n            this.isAlive = false;\n        };\n        pushToTail = (current) => {\n            this.tail.push(JSON.parse(JSON.stringify(current)));\n        };\n        rotateTail = () => {\n            this.tail.shift();\n            this.tail.push(JSON.parse(JSON.stringify(this.head)));\n        };\n        move = (playground) => {\n            playground.clear();\n            playground.showPoints();\n            if (this.direction !== this.previousDirection) {\n                this.previousDirection = this.direction;\n            }\n            this.rotateTail();\n            switch (this.direction) {\n                case Direction.Down:\n                    this.head.Y += 1;\n                    break;\n                case Direction.Up:\n                    this.head.Y -= 1;\n                    break;\n                case Direction.Right:\n                    this.head.X += 1;\n                    break;\n                case Direction.Left:\n                    this.head.X -= 1;\n                    break;\n            }\n            // Check if snek eats itself\n            if (this.tail.some((value) => value.X === this.head.X && value.Y === this.head.Y)) {\n                this.killSnek();\n            }\n            // Check if Snek is within boundry\n            if (this.head.X < 0 ||\n                this.head.X >= (app_1.DefaultSettings.width * 10) / app_1.DefaultSettings.snekSize ||\n                this.head.Y < 0 ||\n                this.head.Y >= (app_1.DefaultSettings.height * 10) / app_1.DefaultSettings.snekSize) {\n                this.killSnek();\n            }\n            // Check if Snek eats apple\n            if (this.head.X === playground.applePosition.X &&\n                this.head.Y === playground.applePosition.Y) {\n                playground.repositionApple();\n                playground.points += 1;\n                const speed = this.speed * 0.03;\n                this.speed -= speed;\n                this.pushToTail(this.head);\n            }\n            this.drawSnek(playground);\n            playground.drawApple();\n        };\n        snekBlock = (color, position, playground) => {\n            let context = playground.context;\n            context.fillStyle = color;\n            context.fillRect(position.X * app_1.DefaultSettings.snekSize, position.Y * app_1.DefaultSettings.snekSize, app_1.DefaultSettings.snekSize, app_1.DefaultSettings.snekSize);\n        };\n        drawSnek = (playground) => {\n            // Draw head of snek\n            this.snekBlock('#000000', this.head, playground);\n            // Draw tail of snek\n            this.tail.forEach((position) => {\n                this.snekBlock('#444444', position, playground);\n            });\n        };\n        init = (playground) => {\n            this.drawSnek(playground);\n        };\n    }\n    exports[\"default\"] = Snek;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://snek/./src/Snek.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Gui */ \"./src/Gui.ts\"), __webpack_require__(/*! ./Playground */ \"./src/Playground.ts\"), __webpack_require__(/*! ./Snek */ \"./src/Snek.ts\"), __webpack_require__(/*! ./MusicPlayer */ \"./src/MusicPlayer.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Gui_1, Playground_1, Snek_1, MusicPlayer_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.DefaultSettings = void 0;\n    Gui_1 = __importDefault(Gui_1);\n    Playground_1 = __importDefault(Playground_1);\n    Snek_1 = __importStar(Snek_1);\n    MusicPlayer_1 = __importDefault(MusicPlayer_1);\n    var DefaultSettings;\n    (function (DefaultSettings) {\n        DefaultSettings[DefaultSettings[\"width\"] = 64] = \"width\";\n        DefaultSettings[DefaultSettings[\"height\"] = 64] = \"height\";\n        DefaultSettings[DefaultSettings[\"speed\"] = 32] = \"speed\";\n        DefaultSettings[DefaultSettings[\"gameLoop\"] = 120] = \"gameLoop\";\n        DefaultSettings[DefaultSettings[\"snekSize\"] = 32] = \"snekSize\";\n    })(DefaultSettings = exports.DefaultSettings || (exports.DefaultSettings = {}));\n    class Game {\n        playground;\n        snek;\n        gui;\n        timer;\n        points;\n        isRunning;\n        gameSpeed;\n        musicPlayer;\n        keyPressed;\n        constructor() {\n            this.playground = new Playground_1.default();\n            this.snek = new Snek_1.default();\n            this.gui = new Gui_1.default();\n            this.timer = Date.now();\n            this.points = 0;\n            this.isRunning = false;\n            this.gameSpeed = this.snek.speed;\n            this.controls();\n            this.musicPlayer = new MusicPlayer_1.default();\n        }\n        reset = () => {\n            this.isRunning = !this.isRunning;\n            console.log('running', this.isRunning);\n            if (this.isRunning) {\n                console.log('start?');\n                this.musicPlayer.init();\n                this.musicPlayer.toggle();\n            }\n            if (!this.snek.isAlive) {\n                this.snek.direction = Snek_1.Direction.Down;\n                this.playground.points = 0;\n                this.snek.head = { X: 0, Y: 0 };\n                this.snek.tail = [];\n                this.snek.speed = DefaultSettings.gameLoop;\n                this.snek.isAlive = true;\n                this.isRunning = true;\n            }\n        };\n        run = (timer) => {\n            requestAnimationFrame(() => {\n                const verifyTimer = Date.now();\n                const diff = verifyTimer - timer;\n                if (this.isRunning && this.snek.isAlive) {\n                    if (diff >= this.snek.speed) {\n                        this.snek.move(this.playground);\n                        timer = Date.now();\n                    }\n                }\n                else {\n                    if (this.snek.isAlive) {\n                        this.gui.intro(this.playground);\n                    }\n                    else {\n                        this.gui.uDead(this.playground.points);\n                    }\n                }\n                this.run(timer);\n            });\n        };\n        controls = () => {\n            document.addEventListener('keydown', (e) => {\n                this.keyPressed = e.code;\n                console.log('key pressed', e.code);\n                switch (e.code) {\n                    case 'KeyM':\n                        this.musicPlayer.toggle();\n                        break;\n                    case 'KeyP':\n                        this.reset();\n                        break;\n                    case 'ArrowDown':\n                        if (this.snek.previousDirection == Snek_1.Direction.Up)\n                            return;\n                        this.snek.direction = Snek_1.Direction.Down;\n                        break;\n                    case 'ArrowUp':\n                        if (this.snek.previousDirection == Snek_1.Direction.Down)\n                            return;\n                        this.snek.direction = Snek_1.Direction.Up;\n                        break;\n                    case 'ArrowRight':\n                        if (this.snek.previousDirection == Snek_1.Direction.Left)\n                            return;\n                        this.snek.direction = Snek_1.Direction.Right;\n                        break;\n                    case 'ArrowLeft':\n                        if (this.snek.previousDirection == Snek_1.Direction.Right)\n                            return;\n                        this.snek.direction = Snek_1.Direction.Left;\n                        break;\n                }\n            });\n        };\n        init = () => {\n            this.playground.init();\n            this.snek.init(this.playground);\n            this.run(this.timer);\n        };\n    }\n    exports[\"default\"] = Game;\n    const game = new Game();\n    game.init();\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://snek/./src/app.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;