/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../views/blocks/about/about.js":
/*!**************************************!*\
  !*** ../views/blocks/about/about.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.vip-text').on('click', function () {
    $(this).toggleClass('open');
    $(this).parent('.row').siblings('.vip-hidden').slideToggle(400);
  });
  $('.about__block.qa li button').on('click', function () {
    $(this).toggleClass('open');
    $(this).siblings('.qa_hidden').slideToggle(400);
  });
});

/***/ }),

/***/ "../views/blocks/advantages/advantages.js":
/*!************************************************!*\
  !*** ../views/blocks/advantages/advantages.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var offsetArray = $('.advantages__item');

  for (var i = 0; i < offsetArray.length; i++) {
    offsetArray[i].jsAnim = false;
    offsetArray[i].jsValue = parseInt(offsetArray[i].querySelector('b').textContent.replace(/[^\d]/g, ''));
    offsetArray[i].querySelector('b').textContent = 0;
  }

  $(window).on('scroll resize load', function () {
    var scroll = $(window).scrollTop() + window.innerHeight - 60;

    var _loop = function _loop(_i) {
      if (scroll > $(offsetArray[_i]).offset().top && !offsetArray[_i].jsAnim) {
        offsetArray[_i].jsAnim = false;
        $(offsetArray[_i]).prop('Counter', 0).animate({
          Counter: offsetArray[_i].jsValue
        }, {
          duration: 800,
          easing: 'swing',
          step: function step(now) {
            offsetArray[_i].querySelector('b').textContent = Math.ceil(now).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
          }
        });
      }
    };

    for (var _i = 0; _i < offsetArray.length; _i++) {
      _loop(_i);
    }
  });
});

/***/ }),

/***/ "../views/blocks/prices/prices.js":
/*!****************************************!*\
  !*** ../views/blocks/prices/prices.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.prices__item-title').on('click', function () {
    $(this).toggleClass('open');
    $(this).siblings('.price__item-hidden').slideToggle(400);
  });
});

/***/ }),

/***/ "../views/blocks/shares/shares.js":
/*!****************************************!*\
  !*** ../views/blocks/shares/shares.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.shares__block.bonus .swiper-container', {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: true,
    spaceBetween: 60,
    autoHeight: true,
    navigation: {
      prevEl: '.shares__block.bonus .swiper-button-prev',
      nextEl: '.shares__block.bonus .swiper-button-next'
    }
  });
});

/***/ }),

/***/ "../views/blocks/where/services.js":
/*!*****************************************!*\
  !*** ../views/blocks/where/services.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var windowWidth = window.innerWidth;
  var swiper;
  var inits = false;
  $(window).on('resize load', function () {
    windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      if (!inits) {
        inits = true;
        swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
        swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('#services__list', {
          slidesPerView: 1,
          speed: 400,
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
      }
    } else {
      if (inits) {
        inits = false;
        swiper.destroy();
      }
    }
  });
});

/***/ }),

/***/ "../views/layouts/header/header.js":
/*!*****************************************!*\
  !*** ../views/layouts/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /* Появление меню по кнопке */
  $('.button-burger').on('click', function () {
    var expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
    $(this).toggleClass('open');
    $('.header__nav').toggleClass('open');
    $('html').toggleClass('header__active');
  });
});

/***/ }),

/***/ "../views/layouts/modal/modal.js":
/*!***************************************!*\
  !*** ../views/layouts/modal/modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  //функция close
  var modalClose = function modalClose() {
    $('body, .navbar, .modal').css('padding-right', 0);
    $('.navbar').css('right', 0);
    $('.modal').removeClass('show');
    $('html').removeClass('fixed');
    focusUnlock();
    $('.modal__content').find(':focus').trigger('blur'); //Переход на предыдущий фокус

    $('.modal__content').one('transitionend', function () {
      $(tabMemory).trigger('focus');
    }); //Включить запись фокус

    modalIsOpen = false;
  }; //Focus-lock


  var focusLock = function focusLock() {
    focusElements.prevObject.each(function () {
      $(this).attr('tabindex', '-1');
    });
    focusModalElements.prevObject.each(function () {
      $(this).attr('tabindex', '0');
    });
  }; //Focus-unlock


  var focusUnlock = function focusUnlock() {
    focusElements.prevObject.each(function () {
      $(this).attr('tabindex', '0');
    });
  }; //focusable элементы


  var focusElements = $('a[href], button, input, textarea, select').has('focus'); //focusable элементы в modal

  var focusModalElements = $('.modal__content').find('a[href], button, input, textarea, select').has('focus'); // Инициализация переменных, 1-ый элемент по умолчанию и  модалка не открыта

  var tabMemory = focusElements.prevObject.first();
  var modalIsOpen = false; //При фокусе запоминаем предыдущый элемент, т.к. модалка открывается текущей кнопкой

  $('a[href], button, input, textarea, select').on('focusin', function () {
    if (!modalIsOpen) {
      tabMemory = $(this);
    }
  }); //открытие модального окна

  $('button[data-modal], a[data-modal]').on('click', function () {
    var modalName = $(this).attr('data-modal');
    var body = $('body').width();
    var scrollWidth = window.innerWidth - body; // let headerTop = $('.header').outerHeight();
    //Отменяем запоминание текущего фокуса

    modalIsOpen = true; //Удаление всех tabindex

    focusLock(); //Показ модалки

    $('.modal[data-modal="' + modalName + '"]').addClass('show'); //Фиксируем страницу

    $('html').addClass('fixed');

    if (scrollWidth > 0) {
      $('body, .modal').css('padding-right', scrollWidth);
      $('.navbar').css('right', scrollWidth);
    }
  }); //Отмена по кнопке "Закрыть" и по фону

  $('.modal__btn button, .modal-overlay').on('click', function () {
    modalClose();
  }); //Отмена по Esc

  $(document).on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 27) {
      modalClose();
    }
  });
});

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "../../node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-visible/dist/focus-visible.min */ "../../node_modules/focus-visible/dist/focus-visible.min.js");
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/header/header */ "../views/layouts/header/header.js");
/* harmony import */ var _blocks_advantages_advantages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocks/advantages/advantages */ "../views/blocks/advantages/advantages.js");
/* harmony import */ var _blocks_where_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/where/services */ "../views/blocks/where/services.js");
/* harmony import */ var _blocks_prices_prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/prices/prices */ "../views/blocks/prices/prices.js");
/* harmony import */ var _blocks_about_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/about/about */ "../views/blocks/about/about.js");
/* harmony import */ var _blocks_shares_shares__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/shares/shares */ "../views/blocks/shares/shares.js");
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");
/* harmony import */ var svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! svg4everybody/dist/svg4everybody.min */ "../../node_modules/svg4everybody/dist/svg4everybody.min.js");
/* harmony import */ var svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_9__);
// import $ from 'jquery';
// import 'core-js/stable/array/for-each';
// import 'core-js/stable/array/includes';
// import 'core-js/stable/dom-collections/for-each';

/* полифил для :focus-visible */










$('.nav a').each(function () {
  if (this.href == location.href) {
    $(this).addClass('active');
  }
});
$(function () {
  svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_9___default()();
  $('svg').attr('focusable', 'false');
  Object(_layouts_header_header__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_blocks_advantages_advantages__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_blocks_where_services__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_blocks_prices_prices__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_blocks_about_about__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_blocks_shares_shares__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_8__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map