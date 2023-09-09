module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/components/Box.tsx":
/*!********************************!*\
  !*** ./src/components/Box.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(({
  shadow,
  cursor,
  transition,
  theme
}) => ({
  boxShadow: theme.shadows[shadow],
  cursor,
  transition
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"]));
Box.defaultProps = {
  shadow: 0,
  cursor: "unset"
};
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./src/components/Card.tsx":
/*!*********************************!*\
  !*** ./src/components/Card.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Box */ "./src/components/Box.tsx");




const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_3__["default"])`
  background-color: ${Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTheme"])("colors.body.paper")};
  box-shadow: ${props => Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTheme"])(`shadows.${props.boxShadow}`, `shadows.${props.elevation}`)};

  :hover {
    box-shadow: ${props => props.hoverEffect && Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTheme"])("shadows.large")};
  }

  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["border"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["color"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"]}
`;
Card.defaultProps = {
  boxShadow: "small",
  borderRadius: 8,
  hoverEffect: false
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/CategorySectionCreator.tsx":
/*!***************************************************!*\
  !*** ./src/components/CategorySectionCreator.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box */ "./src/components/Box.tsx");
/* harmony import */ var _CategorySectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategorySectionHeader */ "./src/components/CategorySectionHeader.tsx");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./src/components/Container.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\CategorySectionCreator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CategorySectionCreator = ({
  iconName,
  seeMoreLink,
  title,
  children
}) => {
  return __jsx(_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mb: "3.75rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pb: "1rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, title && __jsx(_CategorySectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    seeMoreLink: seeMoreLink,
    iconName: iconName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), children));
};

/* harmony default export */ __webpack_exports__["default"] = (CategorySectionCreator);

/***/ }),

/***/ "./src/components/CategorySectionHeader.tsx":
/*!**************************************************!*\
  !*** ./src/components/CategorySectionHeader.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlexBox */ "./src/components/FlexBox.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\CategorySectionHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const CategorySectionHeader = ({
  title,
  seeMoreLink
}) => {
  return __jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justifyContent: "space-between",
    alignItems: "center",
    mb: "1.5rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), seeMoreLink && __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: seeMoreLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    alignItems: "center",
    ml: "0.5rem",
    color: "text.muted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "View all")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CategorySectionHeader);

/***/ }),

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/constants */ "./src/utils/constants.ts");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  max-width: ${utils_constants__WEBPACK_IMPORTED_MODULE_2__["layoutConstant"].containerWidth};
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 1199px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["color"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["position"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]}
`;
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/FlexBox.tsx":
/*!************************************!*\
  !*** ./src/components/FlexBox.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ "./src/components/Box.tsx");



const FlexBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_2__["default"])`
  display: flex;
  flex-direction: row;

  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["color"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["border"]}
`;
/* harmony default export */ __webpack_exports__["default"] = (FlexBox);

/***/ }),

/***/ "./src/components/HomePage/Advise.tsx":
/*!********************************************!*\
  !*** ./src/components/HomePage/Advise.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/Card */ "./src/components/Card.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategorySectionCreator */ "./src/components/CategorySectionCreator.tsx");
/* harmony import */ var _Googlemaps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Googlemaps */ "./src/components/HomePage/Googlemaps.tsx");
/* harmony import */ var _homepagecss_HomePage_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepagecss/HomePage.style */ "./src/components/HomePage/homepagecss/HomePage.style.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\Advise.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Advise = ({
  className
}) => {
  return __jsx(_CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_homepagecss_HomePage_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }, __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: "card-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "T\u01AF V\u1EA4N MI\u1EC4N PH\xCD"), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Vui l\xF2ng \u0111\u1EC3 l\u1EA1i th\xF4ng tin \u0111\u1EC3 \u0111\u01B0\u1EE3c t\u01B0 v\u1EA5n mi\u1EC5n ph\xED")), __jsx("div", {
    className: "input-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Input 1",
    className: "text-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }), __jsx("input", {
    type: "text",
    placeholder: "Input 2",
    className: "text-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "textarea-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("textarea", {
    placeholder: "Input 3",
    rows: 5,
    className: "textarea",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "textarea-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("textarea", {
    placeholder: "Input 4",
    rows: 5,
    className: "textarea",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "textarea-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("textarea", {
    placeholder: "Input 5",
    rows: 5,
    className: "textarea",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "submit-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "submit-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Submit"))), __jsx("div", {
    className: "right-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(_Googlemaps__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Advise);

/***/ }),

/***/ "./src/components/HomePage/BestSeller.tsx":
/*!************************************************!*\
  !*** ./src/components/HomePage/BestSeller.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/Box */ "./src/components/Box.tsx");
/* harmony import */ var _CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategorySectionCreator */ "./src/components/CategorySectionCreator.tsx");
/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/Card */ "./src/components/Card.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\BestSeller.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function BestSeller() {
  return __jsx(_CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iconName: "light",
    title: "Mua nhi\u1EC1u nh\u1EA5t ",
    seeMoreLink: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_component_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mt: "-0.25rem",
    mb: "-0.25rem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      flexWrap: "wrap"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      width: "50%",
      display: "flex",
      flexWrap: "wrap",
      marginRight: "-10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flexBasis: "calc(50% - 20px)",
      margin: "5px",
      height: "189px",
      width: "226px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Card 1"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flexBasis: "calc(50% - 20px)",
      margin: "5px",
      height: "189px",
      width: "226px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Card 2"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flexBasis: "calc(50% - 20px)",
      margin: "5px",
      height: "189px",
      width: "226px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Card 3"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flexBasis: "calc(50% - 20px)",
      margin: "5px",
      height: "189px",
      width: "226px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Card 4")), __jsx("div", {
    style: {
      width: "50%",
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "-10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flexBasis: "calc((100% / 3) - 20px)",
      margin: "10px",
      height: "392px",
      width: "245px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Card 5"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flexBasis: "calc((100% / 3) - 20px)",
      margin: "10px",
      height: "392px",
      width: "245px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Card 6"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flexBasis: "calc((100% / 3) - 20px)",
      margin: "10px",
      height: "392px",
      width: "245px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Card 7")))));
}

/* harmony default export */ __webpack_exports__["default"] = (BestSeller);

/***/ }),

/***/ "./src/components/HomePage/ButtonSearch.tsx":
/*!**************************************************!*\
  !*** ./src/components/HomePage/ButtonSearch.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/Box */ "./src/components/Box.tsx");
/* harmony import */ var _CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategorySectionCreator */ "./src/components/CategorySectionCreator.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\ButtonSearch.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ButtonSearch() {
  return __jsx(_CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_component_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mt: "-0.25rem",
    mb: "-0.25rem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("button", {
    style: {
      width: "169px",
      height: "43px",
      background: "#01ABEC",
      color: "white",
      border: "none",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Button 1"), __jsx("button", {
    style: {
      marginLeft: "33px",
      width: "169px",
      height: "43px",
      background: "#01ABEC",
      color: "white",
      border: "none",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Button 2"), __jsx("button", {
    style: {
      marginLeft: "33px",
      width: "169px",
      height: "43px",
      background: "#01ABEC",
      color: "white",
      border: "none",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Button 3"), __jsx("div", {
    style: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "flex-end"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search...",
    style: {
      width: "383px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("button", {
    style: {
      width: "169px",
      height: "43px",
      background: "#01ABEC",
      color: "white",
      border: "none",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Search")))));
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonSearch);

/***/ }),

/***/ "./src/components/HomePage/Distribution.tsx":
/*!**************************************************!*\
  !*** ./src/components/HomePage/Distribution.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/Box */ "./src/components/Box.tsx");
/* harmony import */ var _CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategorySectionCreator */ "./src/components/CategorySectionCreator.tsx");
/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/Card */ "./src/components/Card.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\Distribution.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Distribution() {
  return __jsx(_CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iconName: "light",
    seeMoreLink: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_component_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mt: "-0.25rem",
    mb: "-0.25rem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      padding: "10px",
      width: "40%",
      marginLeft: "17px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, " K\xEAnh ph\xE2n ph\u1ED1i ch\xEDnh"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "H\u01A1n 100 \u0111\u1EA1i l\xFD ph\xE2n ph\u1ED1i t\u1EA1i t\u1EA5t c\u1EA3 c\xE1c t\u1EC9nh th\xE0nh ph\u1ED1, giao h\xE0ng t\u1EADn n\u01A1i b\u1EA3o h\xE0nh v\xE0 h\u1EADu m\xE3i chu \u0111\xE1o"), __jsx("div", {
    style: {
      display: "flex",
      gap: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("button", {
    style: {
      width: "136px",
      height: "48px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "Get Started"), __jsx("button", {
    style: {
      width: "136px",
      height: "48px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "Learn More"))), __jsx("div", {
    style: {
      flex: 1,
      padding: "10px",
      width: "55%",
      marginLeft: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      flexWrap: "wrap"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "285px",
      height: "200px",
      padding: "10px",
      marginRight: "15px",
      marginBottom: "15px",
      marginTop: "-15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "Card 1"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "285px",
      height: "200px",
      padding: "10px",
      marginRight: "15px",
      marginBottom: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Card 2"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "285px",
      height: "200px",
      padding: "10px",
      marginRight: "15px",
      marginBottom: "15px",
      marginTop: "-15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Card 3"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "285px",
      height: "200px",
      padding: "10px",
      marginRight: "15px",
      marginBottom: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Card 4"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Distribution);

/***/ }),

/***/ "./src/components/HomePage/Googlemaps.tsx":
/*!************************************************!*\
  !*** ./src/components/HomePage/Googlemaps.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-google-maps/api */ "@react-google-maps/api");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\Googlemaps.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const containerStyle = {
  width: "100%",
  height: "100%"
};
const center = {
  lat: 21.0285,
  lng: 105.8542
};

function Googlemap() {
  const {
    isLoaded,
    loadError
  } = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["useLoadScript"])({
    googleMapsApiKey: "YOUR_API_KEY"
  });
  if (loadError) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "\u0110\xE3 x\u1EA3y ra l\u1ED7i khi t\u1EA3i b\u1EA3n \u0111\u1ED3");
  if (!isLoaded) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "\u0110ang t\u1EA3i b\u1EA3n \u0111\u1ED3...");
  return __jsx("div", {
    style: {
      width: "100%",
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    mapContainerStyle: containerStyle,
    center: center,
    zoom: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Googlemap);

/***/ }),

/***/ "./src/components/HomePage/Section1.tsx":
/*!**********************************************!*\
  !*** ./src/components/HomePage/Section1.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_carousel_cards_CarouselCard1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/carousel-cards/CarouselCard1 */ "./src/components/carousel-cards/CarouselCard1.tsx");
/* harmony import */ var _component_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/Container */ "./src/components/Container.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\Section1.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import Box from "@component/Box";
 // import Carousel from "@component/carousel/Carousel";




const Section1 = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_component_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pb: "2rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_component_carousel_cards_CarouselCard1__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Section1);

/***/ }),

/***/ "./src/components/HomePage/Section11.tsx":
/*!***********************************************!*\
  !*** ./src/components/HomePage/Section11.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/Card */ "./src/components/Card.tsx");
/* harmony import */ var _CategorySectionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CategorySectionCreator */ "./src/components/CategorySectionCreator.tsx");
/* harmony import */ var _component_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/Box */ "./src/components/Box.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\Section11.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import HoverBox from "@component/HoverBox";
// import LazyImage from "@component/LazyImage";

 // import Link from "next/link";
// Styled-components cho container

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  gap: 25px;
`;
const CardItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_component_Card__WEBPACK_IMPORTED_MODULE_2__["default"])`
  width: 291px;
  height: 408px;
`;

function Section11() {
  return __jsx(_CategorySectionCreator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    iconName: "gift",
    title: "S\u1EA3n Ph\u1EA9m N\u1ED5i B\u1EADt ",
    seeMoreLink: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_component_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      width: "100%"
    },
    my: "-0.25rem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Card 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Card 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Card 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Card 1")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Section11);

/***/ }),

/***/ "./src/components/HomePage/Section13.tsx":
/*!***********************************************!*\
  !*** ./src/components/HomePage/Section13.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/Card */ "./src/components/Card.tsx");
/* harmony import */ var _CategorySectionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CategorySectionCreator */ "./src/components/CategorySectionCreator.tsx");
/* harmony import */ var _component_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/Box */ "./src/components/Box.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\Section13.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Styled-components cho container

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  gap: 25px;
`;
const CardItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_component_Card__WEBPACK_IMPORTED_MODULE_2__["default"])`
  width: 223px;
  height: 307px;
`;

function Section13() {
  return __jsx(_CategorySectionCreator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    iconName: "gift",
    title: "Khuy\u1EBFn M\xE3i ",
    seeMoreLink: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_component_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      width: "100%"
    },
    my: "-0.25rem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Card 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Card 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Card 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Card 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Card 1")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Section13);

/***/ }),

/***/ "./src/components/HomePage/Section5.tsx":
/*!**********************************************!*\
  !*** ./src/components/HomePage/Section5.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/Card */ "./src/components/Card.tsx");
/* harmony import */ var _CategorySectionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CategorySectionCreator */ "./src/components/CategorySectionCreator.tsx");
/* harmony import */ var _component_logo_logo1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/logo/logo1 */ "./src/components/logo/logo1.tsx");
/* harmony import */ var _component_logo_logo2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @component/logo/logo2 */ "./src/components/logo/logo2.tsx");
/* harmony import */ var _component_logo_logo4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @component/logo/logo4 */ "./src/components/logo/logo4.tsx");
/* harmony import */ var _component_logo_logo5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @component/logo/logo5 */ "./src/components/logo/logo5.tsx");
/* harmony import */ var _component_logo_logo6__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @component/logo/logo6 */ "./src/components/logo/logo6.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\Section5.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // Styled-components cho thẻ card

const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  height: 264px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Căn chỉnh các phần tử theo chiều ngang giữa thẻ card */
  align-items: center; /* Căn chỉnh các phần tử theo chiều dọc giữa thẻ card */
`;
const CardItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 189px;
  height: 168px;
  // border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  max-width: 100%;
  max-height: 80px;
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  text-align: center;
`;

function Section5() {
  return __jsx(_CategorySectionCreator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      marginBottom: "35px",
      width: "100%",
      height: "264px",
      borderRadius: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(CardWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_component_logo_logo1__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Text 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_component_logo_logo2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "Text 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_component_logo_logo1__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "Text 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_component_logo_logo4__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "Text 4")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_component_logo_logo5__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "Text 5")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_component_logo_logo6__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "Text 6"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Section5);

/***/ }),

/***/ "./src/components/HomePage/ShopSystem.tsx":
/*!************************************************!*\
  !*** ./src/components/HomePage/ShopSystem.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/Box */ "./src/components/Box.tsx");
/* harmony import */ var _CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategorySectionCreator */ "./src/components/CategorySectionCreator.tsx");
/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/Card */ "./src/components/Card.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\ShopSystem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ShopSystem() {
  return __jsx(_CategorySectionCreator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iconName: "light",
    seeMoreLink: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_component_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mt: "-0.25rem",
    mb: "-0.25rem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("h1", {
    style: {
      marginLeft: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "H\u1EC7 Th\u1ED1ng C\u1EEDa H\xE0ng"), __jsx("div", {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flex: "1",
      padding: "10px",
      width: "387px",
      height: "674px",
      marginRight: "30px" // Khoảng cách bên phải giữa các thẻ Card

    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Card 1"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flex: "1",
      padding: "10px",
      width: "387px",
      height: "674px",
      marginRight: "30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Card 2"), __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flex: "1",
      padding: "10px",
      width: "387px",
      height: "674px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Card 3")))));
}

/* harmony default export */ __webpack_exports__["default"] = (ShopSystem);

/***/ }),

/***/ "./src/components/HomePage/Summary.tsx":
/*!*********************************************!*\
  !*** ./src/components/HomePage/Summary.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/Card */ "./src/components/Card.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\HomePage\\Summary.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Styled-components cho thẻ card

const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  height: 264px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center; 
`;
const CardItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 189px;
  height: 168px;
  border: 1px solid #ccc;
  margin: 7.5px; 
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`; // Styled-components cho logo

const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  max-width: 100%;
  max-height: 80px;
`; // Styled-components cho văn bản

const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  text-align: center;
`;

function CustomCard() {
  return __jsx(_component_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      marginBottom: "35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(CardWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(Logo, {
    src: "/path/to/logo1.png",
    alt: "Logo 1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Text 1")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(Logo, {
    src: "/path/to/logo2.png",
    alt: "Logo 2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Text 2")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(Logo, {
    src: "/path/to/logo3.png",
    alt: "Logo 3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Text 3")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(Logo, {
    src: "/path/to/logo4.png",
    alt: "Logo 4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Text 4")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(Logo, {
    src: "/path/to/logo5.png",
    alt: "Logo 5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Text 5")), __jsx(CardItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(Logo, {
    src: "/path/to/logo6.png",
    alt: "Logo 6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "Text 6")))));
}

/* harmony default export */ __webpack_exports__["default"] = (CustomCard);

/***/ }),

/***/ "./src/components/HomePage/homepagecss/HomePage.style.tsx":
/*!****************************************************************!*\
  !*** ./src/components/HomePage/homepagecss/HomePage.style.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledHome = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
/* CSS cho component Advise */
.card-container {
  width: 100%;
  height: 644px;
  border-radius: 30px;
  padding: 1rem;
}

.card-content {
  display: flex;
  height: 100%;
}

.left-column {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.title {
  margin-right: 1rem;
}

.input-row {
   justify-content: space-between;
}

.text-input {
  flex: 1;
  margin-right: 1rem;
  width: 219px;
  height: 48px;
}

.textarea {
  width: 462px;
  height: 48px;
  margin-top: 1rem;
}

.submit-button {
  width: 462px;
  height: 48px;
  margin-top: 1rem;
}

.right-column {
  flex: 1;
}

`;
/* harmony default export */ __webpack_exports__["default"] = (StyledHome);

/***/ }),

/***/ "./src/components/Image.tsx":
/*!**********************************!*\
  !*** ./src/components/Image.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["border"]}
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"]}
`;
Image.defaultProps = {
  display: "block"
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/carousel-cards/CarouselCard1.tsx":
/*!*********************************************************!*\
  !*** ./src/components/carousel-cards/CarouselCard1.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CarouselCardStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselCardStyle */ "./src/components/carousel-cards/CarouselCardStyle.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\carousel-cards\\CarouselCard1.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function CarouselCard1() {
  return __jsx(_CarouselCardStyle__WEBPACK_IMPORTED_MODULE_1__["StyledCarouselCard1"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "banner-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/assets/images/header/kyoto.png",
    alt: "Slider Header",
    className: "banner-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, " ", __jsx("h1", {
    className: "banner-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "KYOTO - N\xD4NG NGHI\u1EC6P ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 61
    }
  }), " C\xD4NG NGH\u1EC6"), " "), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, " ", __jsx("h4", {
    className: "banner-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Gi\u1EA3i ph\xE1p c\xF4ng ngh\u1EC7 hi\u1EC7n \u0111\u1EA1i cho n\xF4ng nghi\u1EC7p g\xF3p ph\u1EA7n gia t\u0103ng n\u0103ng", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 108
    }
  }), " su\u1EA5t t\u1ED1i \u01B0u ho\xE1 s\u1EE9c lao \u0111\u1ED9ng mang l\u1EA1i hi\u1EC7u qu\u1EA3 cao cho l\u0129nh v\u1EF1c N\xF4ng - ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 185
    }
  }), " Ng\u01B0 - C\u01A1 Vi\u1EC7t Nam"), " "), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, " ", __jsx("button", {
    className: "banner-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "\u0110\u0103ng K\xFD"), __jsx("button", {
    className: "banner-button-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Xem Th\xEAm"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CarouselCard1);

/***/ }),

/***/ "./src/components/carousel-cards/CarouselCardStyle.tsx":
/*!*************************************************************!*\
  !*** ./src/components/carousel-cards/CarouselCardStyle.tsx ***!
  \*************************************************************/
/*! exports provided: StyledCarouselCard1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCarouselCard1", function() { return StyledCarouselCard1; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledCarouselCard1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  .image-header {
    width: 100%;
  }
  /* Banner.css */
  .banner-container {
    position: relative;
    width: 100%;
  }

  .banner-image {
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color: rgba(0, 173, 239, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
  }

  .content {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .banner-text {
    color: white;
    margin-left: 75px;
    position: relative;
    z-index: 2; 
  }

  .banner-button {
    background-color: #ffcf01;
    width: 136px;
    height: 48px;
    color: white;
    margin-left: 75px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius :5px;
    margin-top: 10px;  
  }
  .banner-button-1 {
    background-color: rgba(0, 173, 239, 0.2);
    color: white;
    width: 136px;
    height: 48px;
    margin-left: 40px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    border-radius :5px;
    border: 2px solid white;  
  }

  .banner-button:hover {
    background-color: #0079b6;
  }
  text-align: left;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;

  // .title {
  //   font-size: 50px;
  //   margin-top: 0px;
  //   margin-bottom: 1.35rem;
  //   line-height: 1.2;
  // }

  // .image-holder {
  //   position: relative;
  //   //   width: 50%;
  //   img {
  //     width: 100%;
  //   }
  // }

  // @media only screen and (max-width: 900px) {
  //   margin-left: 0px;
  //   padding-left: 0px;

  //   .title {
  //     font-size: 32px;
  //   }
  // }

  // @media only screen and (max-width: 425px) {
  //   .title {
  //     font-size: 16px;
  //   }
  //   .title + * {
  //     font-size: 13px;
  //   }
  //   .button-link {
  //     padding: 0.66rem 0.95rem;
  //     font-size: 13px;
  //   }
  // }
`;

/***/ }),

/***/ "./src/components/footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/Footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\footer\\Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  position: relative;
  display: block;
  padding: 0.3rem 0rem;
  color: ${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTheme"])("colors.gray.500")};
  cursor: pointer;
  border-radius: 4px;
  :hover {
    color: ${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTheme"])("colors.gray.100")};
  }
`;

const Footer = () => {
  return __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      backgroundColor: "#00ADEF",
      height: "596px",
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      flex: "60%",
      display: "flex",
      backgroundColor: "#00ADEF"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      flex: "25%",
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "Item 1"), __jsx("div", {
    style: {
      flex: "25%",
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "Item 2"), __jsx("div", {
    style: {
      flex: "25%",
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Item 3"), __jsx("div", {
    style: {
      flex: "25%",
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Item 4")), __jsx("div", {
    style: {
      flex: "40%",
      backgroundColor: "#00ADEF",
      color: "white",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "\xA9 2023 Your Company Name")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/Image */ "./src/components/Image.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Container */ "./src/components/Container.tsx");
/* harmony import */ var _FlexBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FlexBox */ "./src/components/FlexBox.tsx");
/* harmony import */ var _HeaderStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderStyle */ "./src/components/header/HeaderStyle.tsx");
/* harmony import */ var _component_topbar_TopbarHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @component/topbar/TopbarHeader */ "./src/components/topbar/TopbarHeader.tsx");
/* harmony import */ var _component_navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @component/navbar/Navbar */ "./src/components/navbar/Navbar.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\header\\Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Header = ({
  className
}) => {
  return __jsx(_HeaderStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navbarStyleLogoKyoto",
    style: {
      flex: "1",
      display: "flex"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "logo",
    alignItems: "center",
    mr: "1rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }, __jsx(_component_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: "/assets/images/logokyoto.svg",
    alt: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: "navbarStyleText-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    justifyContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(_component_topbar_TopbarHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "navbarStyleText",
    style: {
      flex: "1"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(_FlexBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    justifyContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_component_navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/header/HeaderStyle.tsx":
/*!***********************************************!*\
  !*** ./src/components/header/HeaderStyle.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");



const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`
  position: relative;
  z-index: 1;
  height: 178px;
  background: ${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTheme"])("colors.body.paper")};

  .logo {
    img {
      display: block;
    }
  }
  .icon-holder {
    span {
      font-size: 12px;
      line-height: 1;
      margin-bottom: 4px;
    }
    h4 {
      margin: 0px;
      font-size: 14px;
      line-height: 1;
      font-weight: 600;
    }
    div {
      margin-left: 6px;
    }
  }

  .user {
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    height: ${utils_constants__WEBPACK_IMPORTED_MODULE_1__["layoutConstant"].mobileHeaderHeight};

    .logo,
    .icon-holder,
    .category-holder {
      display: none;
    }
    .header-right {
      display: none !important;
    }
  }
  .navbarStyleText-1 {
    margin-top: 45px;
    margin-left: 57px
  }
  .navbarStyleText {
    margin-top: -5px
  }

  .logo{
    margin-top: 10px
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledHeader);

/***/ }),

/***/ "./src/components/layout/AppLayout.tsx":
/*!*********************************************!*\
  !*** ./src/components/layout/AppLayout.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_footer_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/footer/Footer */ "./src/components/footer/Footer.tsx");
/* harmony import */ var _component_header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/header/Header */ "./src/components/header/Header.tsx");
/* harmony import */ var _component_sticky_Sticky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/sticky/Sticky */ "./src/components/sticky/Sticky.tsx");
/* harmony import */ var _component_topbar_Topbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/topbar/Topbar */ "./src/components/topbar/Topbar.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AppLayoutStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppLayoutStyle */ "./src/components/layout/AppLayoutStyle.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\layout\\AppLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








const AppLayout = ({
  children,
  navbar,
  title = "React Next.js Ecommerce Template"
}) => __jsx(_AppLayoutStyle__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}, title), __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
})), __jsx(_component_topbar_Topbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}), __jsx(_component_sticky_Sticky__WEBPACK_IMPORTED_MODULE_2__["default"], {
  fixedOn: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx(_component_header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
})), navbar && __jsx("div", {
  className: "section-after-sticky",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 16
  }
}, navbar), !navbar ? __jsx("div", {
  className: "section-after-sticky",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}, children) : children, __jsx(_component_footer_Footer__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./src/components/layout/AppLayoutStyle.tsx":
/*!**************************************************!*\
  !*** ./src/components/layout/AppLayoutStyle.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");


const StyledAppLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  .header-container {
    box-shadow: ${Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getTheme"])("shadows.regular")};
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledAppLayout);

/***/ }),

/***/ "./src/components/logo/logo1.tsx":
/*!***************************************!*\
  !*** ./src/components/logo/logo1.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\logo\\logo1.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon1() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    fill: "none",
    viewBox: "0 0 60 60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("rect", {
    width: "60",
    height: "60",
    fill: "#189DD8",
    rx: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M19 41.344a.344.344 0 00-.344.343v.26a2.15 2.15 0 01-2.146 2.147h-.26a.344.344 0 00-.344.343 1.72 1.72 0 01-1.718 1.72 1.72 1.72 0 01-1.72-1.72.344.344 0 00-.343-.343h-.26a2.15 2.15 0 01-2.146-2.147v-.26a.344.344 0 10-.688 0v.26a2.838 2.838 0 002.775 2.834 2.41 2.41 0 002.382 2.063 2.41 2.41 0 002.381-2.063 2.838 2.838 0 002.775-2.834v-.26a.344.344 0 00-.344-.343zM34.812 41.344a.344.344 0 00-.343.343v.26a2.15 2.15 0 01-2.147 2.147h-.26a.344.344 0 00-.343.343 1.72 1.72 0 01-1.72 1.72 1.72 1.72 0 01-1.718-1.72.344.344 0 00-.344-.343h-.259a2.15 2.15 0 01-2.147-2.147v-.26a.344.344 0 10-.687 0v.26a2.838 2.838 0 002.774 2.834A2.41 2.41 0 0030 46.844a2.41 2.41 0 002.382-2.063 2.838 2.838 0 002.774-2.834v-.26a.344.344 0 00-.344-.343zM50.625 41.344a.344.344 0 00-.344.343v.26a2.15 2.15 0 01-2.147 2.147h-.26a.344.344 0 00-.343.343 1.72 1.72 0 01-1.719 1.72 1.72 1.72 0 01-1.718-1.72.344.344 0 00-.344-.343h-.26a2.15 2.15 0 01-2.146-2.147v-.26a.344.344 0 10-.688 0v.26a2.838 2.838 0 002.775 2.834 2.41 2.41 0 002.382 2.063 2.41 2.41 0 002.381-2.063 2.838 2.838 0 002.775-2.834v-.26a.344.344 0 00-.344-.343zM50.969 24.844h-11.54c-.763 0-1.533-.064-2.286-.19l-2.282-.38a.503.503 0 00-.535.274 4.813 4.813 0 01-8.652 0 .503.503 0 00-.535-.273l-2.282.38c-.753.125-1.523.189-2.287.189H9.031c-.601 0-1.084.516-1.026 1.13.05.534.52.932 1.056.932h4.914l1.031 2.063h-4.944a.344.344 0 100 .687h39.876a.344.344 0 000-.687h-4.944l1.03-2.063h4.915c.537 0 1.007-.398 1.056-.932a1.032 1.032 0 00-1.026-1.13zm-21.313 4.125H15.775l-1.031-2.063H25.67a2.816 2.816 0 002.429 1.375h1.556v.688zm14.57 0H30.343v-.688H31.9a2.816 2.816 0 002.429-1.375h10.927l-1.03 2.063zM11.438 39.969a.344.344 0 00.342-.313l.687-7.562a.344.344 0 00-.684-.063l-.688 7.563a.344.344 0 00.343.375zM16.937 39.969c.01 0 .021 0 .032-.002a.344.344 0 00.31-.373l-.687-7.563a.344.344 0 10-.685.062l.688 7.563a.344.344 0 00.342.313z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M14.531 41.688v-11a.344.344 0 10-.687 0v11a.344.344 0 00.687 0zM27.25 39.969a.344.344 0 00.342-.313l.688-7.562a.344.344 0 00-.685-.063l-.687 7.563a.344.344 0 00.342.375zM32.75 39.969c.01 0 .02 0 .031-.002a.344.344 0 00.311-.373l-.687-7.563a.344.344 0 10-.685.062l.688 7.563a.344.344 0 00.342.313zM30.344 41.688v-11a.344.344 0 10-.688 0v11a.344.344 0 10.688 0zM43.063 39.969a.344.344 0 00.342-.313l.687-7.562a.344.344 0 10-.684-.063l-.688 7.563a.344.344 0 00.343.375zM48.562 39.969c.01 0 .021 0 .032-.002a.344.344 0 00.31-.373l-.687-7.563a.343.343 0 10-.684.063l.687 7.562a.344.344 0 00.342.313zM46.156 41.688v-11a.344.344 0 10-.687 0v11a.344.344 0 00.687 0zM21.75 23.469h3.902A4.476 4.476 0 0030 26.907a4.476 4.476 0 004.348-3.438h3.902a1.032 1.032 0 000-2.063h-3.902a4.483 4.483 0 00-2.127-2.845.859.859 0 00-.01-.065l-.087-.527h2.688a.344.344 0 100-.688H32.01l-.148-.886a1.403 1.403 0 00-1.389-1.176h-.13V13.5a.344.344 0 10-.687 0v1.719h-.13c-.69 0-1.275.495-1.388 1.176l-.148.886h-2.802a.344.344 0 100 .688h2.688l-.088.526a.858.858 0 00-.009.066 4.482 4.482 0 00-2.128 2.845H21.75a1.032 1.032 0 000 2.063zm10.56-1.255l.482-.12h5.458a.344.344 0 110 .687h-5.458l-.483-.12a2.112 2.112 0 000-.447zm-.419 1.565a2.316 2.316 0 01-4.032-.452l.59-.148c.277.578.869.977 1.551.977.682 0 1.274-.4 1.551-.977l.59.148c-.066.16-.15.312-.25.452zm-2.922-1.341a1.03 1.03 0 112.063 0 1.03 1.03 0 11-2.063 0zm-.503-3.83l.065-.39.042-.25.114-.687.129-.773a.718.718 0 01.71-.602h.948c.354 0 .652.253.71.602l.13.773.113.688.042.248.065.391a.629.629 0 01-.623.736h-1.822a.63.63 0 01-.623-.736zM30 20.118c.964 0 1.793.59 2.142 1.43l-.59.148A1.722 1.722 0 0030 20.719c-.682 0-1.274.4-1.551.977l-.591-.148A2.323 2.323 0 0130 20.118zm-8.25 1.976h5.458l.483.12a2.112 2.112 0 000 .447l-.483.12H21.75a.344.344 0 110-.687z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Icon1);

/***/ }),

/***/ "./src/components/logo/logo2.tsx":
/*!***************************************!*\
  !*** ./src/components/logo/logo2.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\logo\\logo2.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Logo2() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "61",
    height: "60",
    fill: "none",
    viewBox: "0 0 61 60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "url(#pattern0)",
    d: "M0.36 0H60.36V60H0.36z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("pattern", {
    id: "pattern0",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("use", {
    transform: "scale(.00417)",
    xlinkHref: "#image0_17_49980",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx("image", {
    id: "image0_17_49980",
    width: "240",
    height: "240",
    xlinkHref: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo2);

/***/ }),

/***/ "./src/components/logo/logo4.tsx":
/*!***************************************!*\
  !*** ./src/components/logo/logo4.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\logo\\logo4.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Logo4() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "61",
    height: "63",
    fill: "none",
    viewBox: "0 0 61 63",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "url(#pattern0)",
    d: "M0.68 0H60.68V62.222H0.68z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("pattern", {
    id: "pattern0",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("use", {
    transform: "matrix(.00432 0 0 .00417 -.019 0)",
    xlinkHref: "#image0_17_49993",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx("image", {
    id: "image0_17_49993",
    width: "240",
    height: "240",
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAHpRSURBVHgB7V0HeFRl051N7z2kkNClSRMLIAqIKCAidrHrZ/f77b33hr2iIvb2oaiIoiAKovQqvUMgISG992T/c957b7JZUjbJbtjgHZ+Vzda7977zzsyZmTMWaSOJ+XRrV6myDrOI5yCpru6Mh3rjFiJWCbJarGEWsXiJKaa0L8nDLcdikQNWq+RbPDy2WsT6p2eV58791/bYKG0gFnGR9Jizw7fwYOUwq9XjYg+r9XyrSISYYsq/R/ZCuf6qslZ/l1jV5+fVN1gqxAXidAWO/2hb72qx/sdSbbnOKtYwMcWUf7nAeOXBw/xePKqfSLu6z15xojhNgeM+2D7Caqm6Fx85QUwxxZQGxPq1l5flueQre68XJ0irFTj+w52JVmvV67C254gpppjioFg/FQ95rLUW2UNaIbEfb78XyrveVF5TTGmuWK4Qq2Vb7IfbHpVWSIsscOxHW7rgyz+Ccz9KTDHFlFaJ1WJZZ7FUn9MSa9xsBY5/f9sYq6f1IwTmCWKKKaY4RaCIWRarTDpwbe/FzXlfs1zouI+231btaf3NVF5TTHGuQKciqy3yd+z07Y80530OK3DsR9ses1ZXvyammGKKC6X6Seqao692yIVWH1htfVxMMcWUthEPy+NpV/d6oqmXNanAsR9tvU+q5XkxxRRT2lY85P60q3u/0NhLGlXg2OlbT8FLfoOH7immmGJKWwtCYzk17ZreCxp6QYMKrFJF1Ra+sYuYYooph0UsYsmtrrYOPnhd7z31Pd8wiFVt+UBM5TXFlMMq7CeweFi+auj5ehU4dvq2/+KfU8UUU0xxA7EOiftg8x31PXOIC61XWW2B6vuJKaaY4i5SbPGr7pt6ad8k2wcPtcBWy6Om8ppiittJgLXUY6r9g3UscOdpW7uWechuMcUUU9xTqq2npF3XZ6HxZx0LXI7ksZhiiinuK56WOlVaNRa4w/Rt3TzEuktMMcUUtxag0iNSr+71F+/XWGAPi/UhMcUUU9qBWM4z7tW60FYZLaaYYor7S7X1yqNnbPLhXaXAHT/YxJxvFzHFFFPcXljckVPgOY73lQJXWbwuE1NMMaXdSJVFI4/UXWjrUDHFFFPajVisVhUHW/SmhT1iiimmtCuB9e3t4VHlMUhMMcWUdifVYh3mUW2pNhXYFFPaoXiIRz9YYY9eYoopprQ7qbZWd/QSC9JHVjmiJMTHQ6L8PKW0UiSjpFIqrEfYDzTFFCUex3uJ1RorR4iEQXGfGhIj5x8VUufx6mqrpJdUSWFFlaQWV0oabunF2t/7CyokubBSduWVS2ZZlZhiSrsRizUQCixRrhsy2rby85mdpVuYjyxJK5Y1B0skyt9LArwsEhXgJd4Wi3QP9pYeYb4Nvj+/vFqWHCiSb3bky5z9hWKKKW4usXShg+QIkBNj/ZXyfrY1V+5dcrDR14YrF9tLoqHYsXC1u4b7yFEhPtIl1EfGdQlWt5fWZsrLa7PEFFPcWbzkCJGuIao0VOYmNW05c2Bpc8rLZUd+ufbA3trnuod4yzfjOsnN/SLkjX+ypaLajJ9NcV85YhQ4tahS/ZsQXPuTvOA2xyFKCPP2kGDfuuQjGYiDD+BWVFlXQXflV8iClEK5pFeYxMJC7y90yWB1U0xxihwxCpysK9qYhCA5OtxPBkT7Sb8IX/H0aDzATwOAtTW3VNZllsmilCJZitjZUNooPw8xQ2FT3FmOGAUuqdIs6ZhOWkhPQGp5eonshUU9UFQhZRVW5Q57QaH9vAFs+XpKIkCtPqG+MgpKz9vtgyIlD+/bX6i51p2DfWQtFNsUU9xVjhgFTtNd6DVQ2v/+mSp7kR4KBgId7OMlwKvED4rradGscXlVtRTg5dlIFJdCqUPgYveL9JMJXYLkNGwA/SI0Tr9Q31bNPzfFFJfLEaHARwF4Oqu7lvsd3MFfll7QrTlvl4KyakkrqZCM0ir5K7lIfKHs5/UMVUotkiemmOKuYomdvtWpMOsgLPqJsGQTu4dIW0likLf6l27zztwyBUzZV2CVV9Te9/SENYZxZW44Aq60Dyx1DNJJ/Bwfr1qry8/LK29ZcQdj8h055fLjnnxZnFYippjiCnGaArN88ZHjouWy3mHq70woUHJB2yC4+xDnztpTIPMBQpW3Mu3TB7nkflH+clmvEPGxWBQIxsluvrpiU/HrA8aq8L3wzKW4shquOtFwH3VOKATF3kZK6pNtuWKKKc4Upyhwz1Af+XxsgrJgq4HiPrs6U1VD/dulb7ivXNwzRMZ2DlbnZsH+Irnst2SpFlNMcY60WoGPR8z5NZTXD2bn8ZUZMm1TjphSV+Chy3unxMsZXYJlFTa4S6HEdM9NMaW10iqYtROsyuena8p73pz9pvI2IKwVueaPA/LXgWI5LsZfZo5PrHGvTTGlNdKqVfT1WG0hXvlbiixLN4GapoT5aArR7blndakB30wxpaXS4jTSud2DpWuot3y1PU+BR6Y4Lh9vzpGr+obLzDMS5X878hQAloLEdEpxhXKtt+eWtxqMa0hC4M+HIjHuD6+pY6CXJGAT6cB/A70lEM8FAKzbVVAuC/cXy4IDLb+uLJTxR36d6H60v6d0CPCq6QpjE4nKArCTBq/x97bUAIOl+P25uB1Ejv6f9FLZlF0mO42adVMOkRYr8CVHaWjzq+vMjp3mypvrcyQLuee7jomUu4+Jqvc1ywECrsYC/hTIdVIr0fwAKOt1R4fLTf0jJNTXs8nXkyT8+qMj5Et8912LG+7sYnHMUUDth8YFyFEAMlk73hU5eTaWNFXC2hwhir8hs0zm7i+QpaklLq9P5ybTXkggWqzAvcJ9VNWTWezffKH1YbsiyQTuGhypXOnN2aUyc2cBrJSnQq8JDg6JDZCbB0TIn8lF8syKDNmQ2/yyTpIc0NL3jfCT3LIq+d/OPJUTp4XLKa2SItzfCiuXgedqXHy89sUTO6iGDg8s5jv+TqvzmTzem/qFy3k9Qg+J5Zn/XptRAiteIQX4/Cx8bmZJlRCzSyF5Ar6D8F1JRbUqW61PUbgxsG/7BOAFg6J85VicizO6BKkbZUNWqXwAL2bGjnxxhvA3nNs1RCbCqzwR55xCr4jWf9nBYpmF67IG3+mO0mIFDsdOvj3PdG2aI5V2bjGViem2b8drCvaLd5E8CUU15LSOgVCSEJnUPURGJgQqd5s9yo5umkFwhz8ek6A++90N2cpbyq9oGv3eiM3kvF/2y/RTOsrknlBSfM7Ni1KlDMd/bJSffDlOwz5255TL19sLAc6VyDZsLilUTicYLpa38hh4MyQO1n1EfKCc3ilQxiEt9/rJcTIyLlD+i+NqibBT7dSOAXItNqJjov0l0FvbiP5OLZb04kqJRVjRF5vIgKgI5Y1ws31pXabTNg1nSYvTSGsv6q527Ak/7RNTHJNnh3aQqxH7njBjdx0lpOtJZLob3ND7FqfBba5bvkm0//WTYmVofIB631VzU2RzXuPWmFbyi9M7wsX1hSucB1c4TZorLGR56+RYmYhNhCWmV/2eIh+fliAn4Tiunp8ic/cdnlYt/rbXcFwnwnXv9vF2KWnGrkHiB9a7X9IzrMZ74Cb6G37Ll8Bz7NN7x0b5y+V9QmU4NouEIK29lN6Tuyhyiy0wXR+CEaY4LuVV9S80cnRNnpssv0zsJA8d3wGKUSQHSyprnt+HRXPOr/vl1v6R8sDxUTL/vC5y51+p8nUDi6hvGAtrElUv9Jv/ZMuzqzOkRceLa3wDLFwerPZlfcLk3VHxEu7nIYVwiwvKq+T4aD+44NXKYhqGndVoJRVVUojcmaviSCqRsQE6EmnHY51e3CtUzukWIt1DNeKHJABj0zYVyOxd+bKtEZBsdWaJrP6rRIF9F2EjuwxhBa3/lcCAbsS5OdwhZIs1kA3xZhqkeVJa1fCC5kJ4eGm6TB0dL9dAWZ5dk3nIa97YkCULYQm/Hp8gLw+Pk3IoyXd7Cuq85lK4vI+e0EGC4RLy86ZvaV1unkd8z9KD4g03+iIbssCZZ3Rq8r2MI4uh2UU2yszHyvB3UaWm+Lav5e9RcbENTWoJ/i5GnF5cXV3ntUfpijgO1pSfVVBZ13Lyewdhg5kIpR0WEyBsRKN1fX9TtsxNKmp2pSBj+5cRgszYmS93DYqUi3CeF5zdWd7ekCOv/nP4gNwWu9Cfjemoem/jPtwmpjgmBuo8auYe2dYAfjBvYmfpjMU54MudKuasT/oA5PphQidlfS6dlywr9Rz8HVhY9w6OkpTCSrlp4YGax50lVJYEWHU/oHC+3rW2j6htEFJQ/j6eCqCjMMb0BxgVgI2EzSLB2AB8gYb7e9eCXgEe2t8B3q4raiHusAjpsC+35skfSHeWVDnHKzgV+MRzw2OUEZsP9/vBZemHxRq32AJn6RSsJIjLMcsCmyXeloYdv7nJhXJ3dJRCXhuyEltyyuRKKC7R5Q9PxUb6/V6AU1Vyx8AItYhYFeeKxfRrG8W8wSofrXWJGRKgbwZUeG1jsKgGE6PHm3tAoFfdnDLbRL/emeeSstXfsRmcMSsJIU+0Avr6RPjKtfMPyLrstkWrW6zARfpJYWyQk22yVjRHvBs569tztHOpuL0awZ1Y+fY4EOsnAYy9dFKMfL8nX7xh/t5cl97uU3sFcKULKivF3YU84kyxbcb6f/i4KPkFLvUTK9Ll3Y1tV1LcYt9lu56TJD2rKc0TH4+GT3tBM6zFNORClyDtwVDmocHR6jGmQUxpW+F1OOm7vWrjfAz4w1O4hfo0XTDjDGmxApfq6yw6sG0O9EiSxqqUjBLKYE/HLs1ti9IA/lRLfLC3bMookz0FZmHN4RAjdFmBDZS55TlndpJoP9frRosVmCg0xdeJJXNHupRVOg6gBPs6dvFZ2fT2xmx1f05SgZhy+IRKPOmX/fLq2iw1ZODtkfHiammx/5ujg1gdzFyww0IyvaakWE+oejZjazXyyy3tCLscIEykv6cUwn0nSmtUjPFffnYBjqlcTwmxBLLY5mcw9VNcWSXFWA5V5hA5JVPWZkokrO8VSAcy8+DKCR8t1r7MUk2Bo3xNF9pRKXcghZFbrr2mMaTaXrrpUym257YMTLy2b7j0jPAVZwqVXSm/TX62An8T/CxFTpc58eJyLR9ck/dlEUjloXnfjZll0hUhAj/LthyV30GvprDq0BwwNxoyjxaXV0lRlbXNmxOeWZ0hpwObYBkm++RdReDQYgUu1A/I34U5vCNNSvRr6N1I2GFYsYhmxE8dsbhpCY1Ntbni7wJygQCV3xUJk9Zv8KwBv+ioUHGWUOm5UbBazCq1BSZa0QkbLGpfqx7HRjNzd57M3ut4Go0K+8a6LHkWueKreofJG+uzxRXSchdaZ2vsFGhWYzVX/BrRF8PC+Hg6boEHRvjJltwjM5VHpfKxOBdn8fViDtlTwprxnlUZzQ9PZiK1RwUe0THQ/RSYQjL1hBBTgZsrtgUK9sLWO4qj2GAkQphAWNBdLlBgWpGt2aVSVl03Jqd7H4gNJgDfayDqtLMkA/BnxZWX8xRuXVapdNXLJg+nlFQ03wXm+Vt5sFj6R/opptIqF3jxrVJgdiOZ9dDNF69GLIoRq3VwEFtgXzZldyvSR/XF219szZOkgjIZHBNQp+e3Am5nLkCr/axvrnE/yaRRpQowbGNNVfcMf5SLl2NtfKDsVZa6YRctrKdY5Iq+YWozIonBsFh/8dI9kL255XJJ7+bYStdIQVXLYljO3Do+hoQHvrLVBZtsqxQ4E6kkTkIwpXni3YSF4qKOczA06WEAWDktXxyBdu76XylFklpSIQ8e30FZkdsXpUpHZBvuHBwlH27OlQuPCpG34RJ6QIEfwGtmIEad0DVEeWQk1M9CLD6pe7BsyS5TDQtMr3QL9lGKzPWyBVaVVWNk76AFr4bS8/NYLskFOTDaT0L0Y8oua1lc7y6y9iBc76PD5eSOAS5R4FahFzm6WxFjVmM1SwKa8I/T4UY7Ciz1CNfQ4525LbfAAXbf9dOeghqqH1rfvw8UQQkr5bud+dI30kcNhePcqI+25cmi5ELVrkcLO/HnfQop/gHvv2xeiixPLZFUKO/ti9KUMvPx51ZmyMPL02VnXrkM+3aP5JRWKtaPWwZGyvKMUrmkb22fLvGASP/2vbYW6pVxgyKdi/Ib0ioFztV3Rx8v54IMR6qU6SkV3yYAKg5dczSNZLTVtRTE8rZYDqkM87I7PlbdMa6dsi5TPtmiTZcgvxYV7ZPteTK+a7D8sCtfKq3aoDgqMxsxrjk6TDoEaJ4E3//kkA7yxoZsCQaAFOLroSzzTzbI7rndQ2Rxai1Y9A8UuqsNxvL7vkK5AhvD2T/tkw9tKIy/xkbynl5/TMSaN1uhF8Fm/Vk4xiy9AKkU12JFWskhDSO7sbFwoqW9VLUwgGW9xD6EN2M6BYsrxCkKzBydKU2LkQduivCNbmeEgzEwObT2tYLaKKiezbfIJmfJxU+FZCHHiYjlWGudhAXOzh/GtEZ12ZiEwDpVeedBqTlnqkTPVgTom0IXrBV2DJXo3zHQJv9MpS60AYv25JfLcXqINmcvrPr8FDm2gx9c+Uj5HEr74iqNqGA43NNXsLm8sSZTbv8rTXqH1rV2N/xxQD6C6//M6ky54y+NpO8OeAWXz09W3sGzK7Xe6/uXHJTxs5NkxMw9NRuCISUVLUegOHeam50r8KJW+SepRdrFiQ0yXWhHxFjsPk2UWeXChXbEqyH5W58wX5mf3HL61/ry+D3CfGQdwKRBUBYexYoLu2mzn3D81/UPF/ZipCPWfW90PEAqTeH6RPnJX+d3ld0AnSb3CJFxXTSLw6wYq5EMV3jG+ETlihNt/+CUeBlgg6Hsx8ZAmpya8wDT76VvCn/gN45GOoZUOM9AcQfg+wx+L41kL0KegwKTfXMgjrsAxoW5aG6WV8ItPxobxYtQ4DIdjPoBG8KMcYmyHCgx6XEePD5KPtmaq1o0N8Pyv785R27oF15zLEWtgJA36oR4J+C4nN0p1ro0UrF2MMFeZjGHI1JS7ViZpFG9FIYFmNtI+qI34l8uUE5BbKnU5w1c2SdcnkScGuAdriht2S4X6uOhLCqPKRtglRVvY4klAbf1WVnKle+DWwJcZpbXcki6Bw49Gop7Cm7FZL2EgnLa4zX4/LVQnHBgJ9wYeAxc2KzrTrTx5qpsmDnIYT0bSpdbVinD4v3lA1hIw6NhhdfXcJHJ5rkpSwslTp2VpD6Tmw+JCFjOuBjuMokQan977W8ut6lTt9azd1a0gq3vjxTNTR8CD2bmbufWq7fSAmvxRJifWU7piJQ52OJaZXQkwY1uTIENTrL9Bc5lBw2Gsr54cqyKJbcqhbDClbYI/6uu1tJCXl5a7GxQ5HDm07rM0jqeA+PrAPwdqDN1HEjXFjJjQuIAmVDmdeklCrxinvWavhE17+WY2P7RfjV//9+ASABfFTIOLi5jaCL534xLUM/dtzRNVbd9D+Uc/u1ueR3KSsU15NK5yYqN43zE2Bxvc0lPjQ6XqTJS63YK0ojm+dj8pELV0dXBicAsNxKGIqTJdba06igNepJ4sxrLISmvdiyX6GjqpL+eA96Z33K3rLGctCpfPEpaJFRsoznCng+LI1gNJkluD1Qs+6YY5oMndq0Ffryh8G+PipOUgih8ZrVym8nIQct5MY7z8RNilAL+dGZnpLPqno+xiM+P6aBtBgY+99ukLkhdZQF085I7gLhzM/p4dEdFHcvPeWd0nDhTyKE+HOFBGOL83DLn1UW3SoGNlkI/04N2SModbCc0yO/i/T0bjZn66RZqaysYUfxd5DxRIULhmbW0gpmKVh9XVkc7wJQWn4UShnQGat3ZrjrwiqPDD/mcTvicF4bH1nlsWDxc3Pj6yfqqWkl4TQ9gFDaSQZH+svCA80YRtUr1ShWTYLX0DvMTU5qW4mrHOo0K9B06oQl0n/ElMwHZ5S0vdvD3cs/wp6jCeVbKGVLSyuPZlauFOQOinJsPbrWjTwvRFweV+p9eNY8ZaCs7a4ydqwZwsGrlgnzc6DQz+mT5j9GNU9zMHY9Jf3qodT5Xd1l57m2pSpsSdRxV1jrHxp/Euzz25rSm8XgOAitIwnkyCl6aUuCMUs2z8WwiX0wQa30rR374umECgXFpuJvhKoVVrVNgoxmiV5hz67pbffkO4mR3F6lJiBtVRnShjEvgq6PUBAo8bZ/3MJ4/9GJF2n+WvpaNFIyXR9P5VHeVq/qEyaAYP5VeWAxQZd7+ui5Vtt4W6NfI7yO1LCf77co58sbbLE0rkZPjA8WdpLUOAUEstjDGOjkX7LT9l3xA7iy0egaVsVEJpW0M2v3mVJPx7b76+5r6LG5CYQg0CYxEweVlIQOnAwxB/pODtNjwTQs9b3+hTENqZEd+OS60ZuEbm3zRQQ9ed7Ry9CZLJGfvzledREwTcVi7facRJdgFnUYNSUZJBSxwkBxpwn7taCeT3bVagcsrWxfct5Vorq92v7jaPY55cJS/XHhUsIxODJLLe4ep2568cpmtT1tozNU+OkIHsHJaVyDPEOj6hS0bEFZD6O7tWSenWh+Je83jeD03M3sOZ4rB/UwL7Ke/V/sOjQ+6oZbGUG8P5eW5kiC+ygkhOT/Dz8nkCU5QYJPUvaWyJrNE3WRpugyDNSZB+CggobcOilTP21tgLlpOzWNnkJFi2Zp9+Fxoboo5FdaaphZnyo97W1fwwHPFMLohgnhuELbbozYlgs/VWkhbsvi88tbzVLM6LMzfzSxwmZtYs/YuS4Eh8EZrwsqh10bGiS2GdeuACLmxX0QdcIfWc0LnQJVr5eIwij6ySzQeKA4hy3EzNLetRHlcleJWBPHsKe7q7WYgVnGVqcDOFE4C/N+ufKXAYXq8xKKFB46LPuS1fPw5u1xmfaKQ8GJtgHe5ngHIwN9E5rOLqezV6rG0oipJxWu0LIGGhlP/c/FvQTsJldxdAtzNhTaELoi7xJZHgjDvGOyrXWxa2ieWZ8hN/cPrVCyxPe6TbXkS5euhXL8wLI4g3Kf7yG4mH7h+EdgEwnA/Gq5bDNzvaNz3a2GsqBQf1p0KTovP+VhM+bCqqgi5ayMfnYfHWCddhs2dz7P+OausWm0KbJUs/Zeuk2Ig0c5OnDhNgQlamArsPOHcnTCbeOzdTdnq1g/g1YAIX7l9cKRM6h4in0GBZyc1f+gYU1QRfl4KdSYDJvt4I6Dk/DvcV4sbSSYXFaDVCUdhIzBIBjhxoEuIj/RtBWjEzYDpMiozNyv2zbL0kvXRVHRuAvQMmHLPL9M2BOb6c/T3UFjwQvIDlp62NW1sS6RUx4v6hfnKRiexczhNgVV+9l8ab7lCqlUnz6GAx8bsUnVbnl4sc87qIlNHxcmEn/Y1u02NSnBA7yZrTYNMjbUnugzAJ1SP0Yk4xwR6qs2BSDP/JoDD19NTMLwAdjexlr5neOsrlLgpcLYUu7nUfSi4wWXFjqWskirFAGLgAka9doH+NzurVP+ztZbri4PMydVdUN76MMJoSfzt3C6K3CG9VNu0fkAar6Wslc5TYJOVw6nCgnzbGl97YT88PewQWMjvz0iUl9dkylc786WthYv9YKnzgCKOFg3TK9Y4NMBIRXEDYEjhqW8ABPPY4kivgJsCvQYjR61e66NtGIle3uq+s4t+6mvWMB5nJSIrCo3qQ8Mz7RxUC2Ax7ZUYpP22HqFRMn1TTot6jlutwFWm2+wSSSmulCEeGgm8fS8q3V+i0lwE3+zIl5OQenplRJyyHj+30QxfV4kaLap7E85sfufGEOyjhQNB+B/ZPwylVn/71c4aDgZ2EGSj9IEeWiqJm4bKSfvUk99G6EEub74nwKfuZsGkIP2S+AaIL/g7W0oY0Po0kv7FAR6mBXaGEFke1zkI1lfrHd13Vc8GX7s4uUhu/StVURr9OqmLUuLFM3bD5WvfTI6uEG3m8OGb3DhlWAe5vM+hXVGkELr37zRpqbS+kENX4IXnd230dbZuhRpX0Yjl5msrEQRW6AOzjNey6stoVmCjQmNNCkZDgtGMwBZbRxoR+N3VehqF303ghBVclQ56GvYTCO0HmhEroBUgVYyFhRkBnhIf4C3dw30UQGXLwUyqWGPYWQhAJE68Y4xHEvcFKcXy+j/a0Cw2oD+1Il1ePClWrj86TKa4cJiWKc2Xc7qGKOVdmVaicv1ReiaBpAUk9WuNp9FqBTZ6V3+F68bFxnpjXy5Si6ja2sboYwI8NJeD7gfdF8bRfCxYuTOearG356aF5gg3po3ZZbI+s1Rd6LnJhTUDsYbCGk8brY2qvB0Wd049qPPn2/MUL9Q1R0cArXbdMC1Tmi8PHB+l0PT/Lkp1L04simHRnl+ZIdvy2r6sL0DvaiKzhGbdLA5tGsQ7jAYERwA4YineYqn5fEUrg/d68LP0DSbABjRujLiOVrnMqlVMscD9YEmlHCiqPGQ8J63x7QMjFYUrLS8ZF+c0kjL6ZFuuPDGkg5zaMVC+32POCnYHIasJw6LPtuY6XXkpTkOhmzMO05mi3GtlbKxHTBqLikt2RXYq8f4WWOW7Fh+UtU30/v66t0Ap8MgEU4HdRa7to42FedMdh5vZirfJLNsiIZcyq6uOjvBR3UnHdPBXlKlUXLrBz63KkOmbkWJwIAe5j6NNgF4fF22Ou3EHGR7rL/1wLUkO6ArrS3Ga2pGKdLQTD1Lr33WOVfe1c23LW9EbVqUArYafbwwoC4cfHoRUhD+UNi7QSzoH+xxC5sa3Lj1YLHMBbnwKt6u5ZYekbhkQbVIcuYNcpQ9le22d60BFp+WBnTmA+d8gnH7A2uG5iGnZQEBmSc4PYpVVawCoJHzWUOSFo7BRtHTgtymtl06Ie8/sFqLGwewtcF36yml54DuBsK1Jd5yfyeDGcpUQl7qgR4icr4MIlGWA8P+3PV8RfLtaDLCMTBcEp/L0Ej3V5QPQylW/3aDj6YzfbCrw4ZM7j9F6ur/a7trqOKflgZMKK2Vb/uHnZ4r285Ir+oTWAEBMbc3ZXSDT4Y4uaQPFPdxi1T0iL7Ow5rAJDQYzAYx7f97nWjDRaXngJ4d2UG1jh1NY5kbWP5YY0g3lOI33N2X/q3KiGbrV9TXH3Rw2IYE7izU4V9nV0moFZn6SIxtjEXOxpI90JbR6JW2c0mHRO7+bVvbDjTntvia4pZKtc0rHBprjbg6X0H0mUeFPu12fymu1ApO7yOAv4gS4+Wd3kXc3ZsuLbVzO99rJsQpIu/a3lH8tjQxlnc4/fHSEawZKm9K4TOgUpFzozxGyFbVBo49T/aw0Tq3DMfeJMNMYh0u255Wr6zD5qDAJNFs821yu7Ks1LLzhosINe3Fq+QUpVjgikrW7FwEBrvkSMv7p7VZGy5W9BHh4qHwt87SkgmHZoh8WIAsdfLwOfQ9rrv3wHuPzOgS0r0qSE5Hkb2rgsy0DBdFrKmYqEOzyJnb2z7fnyt3HRMmN/SMUDmBK2wiv58lI4c1tZYNCc8Tpq56FBBzi9NoI5053o7DTh0UYRL7JhtnekiRGieTETsHSK7J1Li5xBm6YGk9VpUrLkeI3u7S6prH9zoFRkllcpWqkTXG93KWnjliA01bidAU2dp6HlqYrVgm2ANbXOliuKyPzyA21FjryGkOMGNhd5Xoo7l2wikaJJC3jfgcT/JF+Hrh5SWSARknDoWbsldB4rTyx8/tIhK82WcFW4KDI88Nj5KQ4f3lmdaZLCwr+7dIx0Fsu6BEqe/Ir5A8nTh9sSpyuwBzyfLmw06ZS5vxLkWB7oWvFJoM05MpfXJOppskXuogQn0rN72Mag3b4yt6hcla3EFUVNA+u3UewDgvbcIH9W2RsYqBinHx9Xaa0pThdgZP0lsKpo+NlqphCuVGfT/v48nSZleTa1ALjZc5LMmYmMa32LgCVO2H9T+8SpG4p2Eh+318oC1IKZUdOuewrrJT2wOrorkKv6MYBETivFfLtrrblJXO6Au/R3TSW9LE5va2ke5hPk6DQ4ZLTOgfJweIKlyqvQQZHlkeDTzoSqKAxL+j35ELJQMx8cc9Q6RjEarUwdbMVsjjmVlTVYXQkvWt+Ze34V057yLfxHpjvZ5mowVjCf4lRqFoAu7CH7y+r0viha5hSrBwUJzXkdfl4H7msObwtGMdPANSWxZJi2+jCMtUyq/33kKrWqrycymqNVaVQZ6uk8NhSiqrUbGVnbFznAbDl2ntmRbq09ZwDpyvwgeJK7QQVlsvF85KlrcRdY+BhOtrMljIKY+AxHQOlU4h3vWi8n0UjVCNxmsGuyNcRdQ/x9qxh9ucC5me1dqAXFzt5lwv1lUeFJLJPRsdoCzaESI8WE8G3FzE2LmMUDXU6FdY0Bah/KTYaktlz4Hg6wkLuO/w3ixsbHiOVLgs3GB59sS1P2lpcknvZBiS6V5iv/HJmJ2kr6RbmnoULxqbCi3tB9xB5elhMHd4rR8Ser5hKlqb/rfiOS2stSQnJ0fF3LjmH9R7iYizOHDxOg2hrUQ3r2ZQV4mahKFwNildPbcqg7fRBH1Ih1TMcjETx/mp0qUaX5Kun/RQTij7vVVnkSg2spNXlxEPG8CyN7RHqU+8mRbB0U3aZ/IFQYHNWmRrJ6muXpiQYH8wWTn1EDY+PHNZkl1QbpKdHzbAxzXPxlAQAgoYH05QY51KzvhmHpYDIJQq8r6Bcjon2A2r67+7y5wI6OS4Q56NCuof4yKsjYrUm/ZUZsjq9RKy6G6ih7XA7ibjbuJ2OKpirhd/PSRGKGfAwSI8QrW+6d7iP9I3wVcPNSXqgGDw7BSkvYjnOJ72c+QDqslupSAQCORnSIKrn/kHkn8pP5aayn9M9VCKh/KHiqVpAP9yaI4dDXKJh7Gud1E3knr8Pyp8tRDxZRRTk5Xg979MndpAzuwSr2KkxPqq2lCFwn8kF/P2OfIVCp8Il4yD0PQWHv2urPclOAHK82XeTcUB6Pyj0WABzvM9byjEV8gSs4exWjCclEGikQ+kpxEB56UafEOMnMX4+cmbX4JopkSyZfGpVhhQfpuFvltjpW53+zeQ1/ujUjvLwsoMyfXPLktrdgn1k8QVd5UgSdqf87zBMT/g3COf4sv/7iROiVT6cCshB6T/vyZc1mY3PIeIEiDBY1mM7+MMAeCmK3/GdghsMdQh+fYVU4ExszJucNOOopeISC7wpS/tRdH1aKgY5OS9Ee+3jvQiJfbrBjBX5O0zldZ0UIRb9GNbw9+QiVRHF0OXm/hHqRgCKIcsK3KisHeF60yVnEUwHP88GWy8LsQb/wOcRTSdIRc9yDTIrbVUm6Yi4RIFZs1uNHx0bWJvWeejYaAWEOCI8QW9uyNbQbMSPty9qOXP94RLWOlOBOVKSCtzWCf5/q3DtkH6Xru+QGH8Z2zlQjo32lxFA/nkzJJ3ZEij9soMlkgZUOQNrNpnAGIxPGp5bObm7LE8rkRsWur6ntzXiEgUm6MHZPsfakKsxbugS4lie1lBggj/dQp070bytxBiNYvHUgKpFB0oafG13nJdBAGX8dEvAvKVR60whyEX+LHPYtuPC/DA9N8N7I+DFFsvzugWrqjQyfTbUMWTUE5Cr293FZTDxSuxs5yJtYtT+phVXqMKCITN2qedPwW5It2cFXkeGxiEdAuTnvfnyydhE6RKsncAdeWUyMSKk3gFf7i79IrXNi+hyEgAYe7fLQyxyVa9QVUzRqwW9u0ReMwGssEDEyOEydcRihdJyTeG5iAuR4zxQVFGzGWhketUu5+ZyN+H5N8Kx0YlBMhLrryEFDtPTSNll7t8u4zIFTtN3L879yS8vw0KrlKGxHmqxURkv7RumvnzdH6nSHy7OsyfFIEbMU27MIN1y5xrsEohX3CnucES6If4vgELFYnP63a4mnDs8R6UMhNXl5kban81Z5WqTo4QodhEO2xaFdjKvqRoX/GuHbYdgM4zEc+F4rKu3p8O5y/qEs2rJIMExobZdTURjc7FJFFdX611PVco74EaRi+PO4OvbmVfA8816/UE23NuG8O/LeobJrQMj1N+zdrs/Ob7LFHiHXhN9TJSvbAVSV6JbCZLOGYOlTwDsv+6S7mqIlyFFepFBDF9XVKG/hyCQtBth/pf5ygMAPoLx95ac2rTRUGxW08bEq3m2U1ZlyvStzp1jZMzUDdKLFCJ8tEIG282AG4TKb+qdTaH4O9xf62riUPGWzqIylJxWvQDWi1af/cwEgQpLtSqnKqPHGethb36Fyt+2tXCO14lxAYoA/4+U2jTnR2M6qlQUyfGv/z1FthxmhNkRcZkCb9CpXXrq7uFB3SLXxxJhO539oK60icFeklqsuTCdkFJqKhXgTjIgUh8NCteZeeDSak1B+8Ot/mp8giKemzwrSTblOP831Sm4aEVln9aq6KUqqYjWssKJBQ3jEoJkTKcgSagHz2C9cTasMeuXu8AD6etACWYW3HjO1NqYUaqUeQNAJFd7Wzv0834aXOlVWKc1G6j+z8TZ+xS/dnsQlylwkq6wcf7aV+Tqi+roSF/VKfNrUqEixFuLGLgvFnZJtTbZkJ0xFFqoFL0xoktI+wKyTo7XFPjvg8WKZJ1Ct/lT7PBM+F/0S7LbF3PQfaanxPBlZFSAWuzMkwZgA94NhWO4sw7XLhnXmaWztFr1TZGglWfF0rRT4uU4HdhbklosHwNEYpjAOHwQvLTjYwJkDL6DI1R34vP+ySxReVwiwblOLlFchs/koV6FMI7ewtMrM6Q/DM0wWGUW2+RUtB+qCJcpMAcXMw42wJxUXaFZE8v61ASkmMZiJx+I5wOwuwfC1WPa5QF92DFduq2pmhVPDHbPLqOGZGynYPXvBt1rYC74rRFxKh4+7+d9bq+8jAWv6BUmpyQGKpdyH1zdefsK5EMo3WpYrJwyxxWKCkLAKA7X+9w5+1VJ6YvAOx5ZelA252rnQXNjNUCJtMB94ZGdBQD0pZNilQfw54Fi1UP9R3IxjGTrY21iCUaUQIaU4zv4yQ0LUoWVrcuwubQnGmKXFitvzCpV7hbdsRQbUKsAC5oIarU+nSGvkjftpKXpbnMAYjgDCAv1cY/SSEeElvYYLIg/EGcV6jv5OUhbcMjV9I05suRg28d8jgpz19f2CZdxXYKVZfxka648uuSgbMpteMNhSEQ2iihsuMvSSutVsASEEcnYtDjcmreHj49GaOFdo8C2QmvOmzFdcWR8oJzTPVjeGRWvintISvAeNpLWuNm9wzSPbg4+KxrhwfH43b+d3UU9Zhic9iIuVWCjN5hxIGfgUsKBlt49MFJOxe7OZDo5pW3lar1HlW4XlZuv6dGOXGjSilJ+tKnFpfJywbFm1h1lLFzXW4C8Dgaow9LD83/Z32D1GwkL2UjQF6EQrbORM2XeminB+lpIFyMHTpK912BRGUvnY2PbnN3wptAbuf+ZEzoh/VYhn23LlSmrs+ROeGYXdA+V2wZFyjX9wlXjgqIlaoEi9wrX1hNzwQRQ50zqLFbYj/c2ZssHmw9PU0JLxbUKrLNC9EF8sUx3h0MR2xKVLVaVWl7qRiEyyMkO+XDPRkigQqEpmVRgN20VrE/+g8VFF+xHWJATYmrHfL66LrNOp5E7CC3ukyd0kE7YID/ekiPXzD+gUkn2QqVlfHop8tahQLSZ408uLFcKlgRrGYjHSKgQ3UD32TJgATcvTFW1ymx9vACutJGJqE/4PQTCyPN1Gzb7V06OxSZQLLOwuVz0635JgAt8Pc7zigu7tUiR++qgKTnbCPqdMGO3tFdxqQIbcS8Hbf1cVqjKKzvB3bp9R5pytLiDk2mSvaWxsLgvIK3CVsRr+4ZLQrB2aBuwQ/bFjt8epu0Z09gZrzFtprFSaUUEM3a4T06xNxYwi/6ZSnl7fba8s3H/IXFfLJSErit7mPvAraRFXoRYle2NpE49ITZUWd2Vqsa4GEqUKSszGg4Pvt+dr26OyPubcxW7yBnwZrKwqW/DGmAYdQuUecrwWAVuPYfvo+Kyy2v5Bd1UqerUTY6l5Iip8HW7jwCSP5cq8Eo93jPSROmIe23TDzyJL63JkCeHxgDY8pTrsKveBVeJRR9h+lBfY9oegRV3V2CDVvQVfR6sn54yY9xW5QYVTwQP/9s/Qv5vQIT8mVIsw77dowpn6pO3T4lTmxFruf/cXyTH0JuIENX7On1TruyGdxWIz+uK60mL9vSwDhIHC/zxllx5fGXrQgVueF/AdWazvgWn7VxsjCOwaaRiXSzDcTNX/ee5XZX1vX1xmgyEh/fo0A5yHl7HxvpZTbQSsshmZzvI8ToiLlVgJvJZtWMAA/vhdvUJrwUJqJRUXgoLCoy0IZP8UXr6yVhgXZAL3p3vvjvmLVAMlSraUguw+Oh10Otz2o4brCEZGOGnaIdYwHHR3GRZnHpojHsM4tpMhDA8fioufw832eXYiL+CsnCO8Wmwilcj/cIadWXFOAkC+Ea2DkregPPQWgWOwTHOHJ+oGEVYisq00/OrM6UEQOdN2Hw84dksgSKzKOb3SV3k0605cs6PSTK5d5i8OzpehiCOfX1ddr3hAIWufhqOl8utvQ/hcTllRjJziTXKWIl8n4dCpe0lBPFOtB73ZpRUKIWlGC5RVID7DuviQifvMxf+6//UgiDuEvFeg5DkKbian8I6PguPx97NJGnc1JHxMipRYw8ZMXOP6sKhpWJ55/mIXa+A0jLkoSv9F5Tn7+QiCWeOGCkilr4yY0AQ641/Wj8JotwqihyOmEgW1kw8cJIRHSNUz+9PcJ+ZWuqH7/RHpoJo+TU490w7jflhr3y/K1++hvIz+3EhwDh7LmyuPf7G/tis3kBq79ZFqe1aiV2en1mfXqqsKRd5oZ6Qrw/smIUTP3WDtvi5mxuv2ZOnXYCuQe6LRL86PEZxOL0O17kxcKathZxS72CR3js4Su7AQr1/2cFDlJdA1jykUIbG6t1TFk152GrHAosNl/SQS+GaVuLBn3cXSJdAH7kSynw0cIlU/NYHkGbq/+VOGT87CcqVr9z01rKD5sBzG/j1Lnl5TZZU4HhYAJKFNfE3LHEMlJlpLspmuPPeCFNYt83v7A2wk3HtsG92y+9JhbIUsfHVdsybLDYZgue/3Zmv2CRfGh4j7VlcboG36jXRTAUZqaQIPw/5hxxGO2tr/corrHIF0Ed2IBmVN0Si9+pFD3FB7smvxbh3OKzQ/wBcfbG97VkJGxIFpo1NUAyLp8MyJdXTDfUYgCyiuexY4hn/DBaaVDQM3dmbwGaLUihyBwCPBH7+BhL83qZsVUV3TLSvDIZi8f3PnRhT0xjA7qhLoPCj4dK2VO5Equj/4Ir/he9Tuehl6cpiXtOXnVt+shqWnnUEp3cOkqUHigCelap5USv0ump2ujGNxzTmo8g5c6rFS2vr9mPfDayFwOjFvcKUZ/jKP+1zhpTLtSJdR6KJKhuFGZ1gTfcCBGHllb0w1ZKhxy7kLyYDAhdRJxtyAC+Yic74PHaUsNRvLV6zJK3tCySuRszF/CZd5+dWNb9hnwudaRJSzJJd8pekAnkHqPA/2a0DWKi8s5BH3QGg5roFBw6xunx+6sg4OQrg015ssKxMen9DtnKRZ8D9ZHzMXDDb7Yg6L8Xf67NK5Sikis7tGiJ3ndNFfc5iKM9+eEgcEeMFt7Yn4uKjYAVbW8t8dtdgVS9O8PM+KG5HXGMyY/B4qLhMM3HaBGNjllQxN0xAi5vIIOAtn52eoD7nOeTdJ/60Xz4cE4914in3Lj5Y4y5znd305wGZe1YXuefYKNmKcz6nPXXM6OJyBeaFp/TAxf9pt3aCTkb6oqK6WqYjcc5aWVVaiUUVi11+DXbRk/X64QidOIwXky7bc0Aa++GC9gz3O4SviIvmFeyyX+9oG9oa1s4yhcFCExLVNQSYNCQ3w3I9ghwslYtpERaucFHy9ifSNa/DIixtwabEIeszz+ikPuMhuMz2ZGuTOgfLFIBZGQCkKrExekLxpgB0uue4KBVbMtVXrntAPKcfAZS7ATHm61B49mVvxvWcCc+JRG9DcB3Z0sjXMf59H9dzJUKmJJtS0XB2Rvkeil8UM75tIOXzICzuTbDAtKSMYalcpMC5/7ho1VNOL+H63w/IZb1DFcvGNjzPFB6P4/OteerfaB8vNYvK2zNLXZ+ZZyTKR6fEy/V/ptbk49muyo1qHoCwF06KlQ0IA9pb26pLSO3sZfcVR8k6XNhb/kqTVRd1c/h9bDe7EIn7qaPiVCE9hbnH3Vgg3H235ZRLMi7w6YlBMh67NsGONxGHPrvG9fQ1jB2pKA8iBvyogWl0tCRTsWhu+ysVeeDajYUWcCGsGFF6Li5j0fyARTYkNqDmdbSEjy89KBtzHaud7oTP/QGW9wfgCU/aVX1xw7sPsfAlPUNVbXNsEF3iIrWBcPGzp5e8yJ9tzVM5XeIVXOgvwz0+OSFQnXdWxnXSsYjZyOkuTi1RHUQsGaX1ZaxKPnCmk7piwyboFOnXMPhIz4qpId4Y426Dx7BUv648NzxP9AqoqMfh+nPSBwnXmbGgpf9ie67a8Fn+eQI2/QeXpONa5NSQKrI6txKG4vudBapt80M8thUb0DULUhEi1C7787Fpvok1xnzzxJ/2qVLf9iJtEliyoKMLLnAKdv2z5+xT8TDnBbM3lA3kxvlirpQuEuMZbpKcGEAk8h24dyE+noqvaEP2oSmZRbjob2P3/3B0R7kF7hRTBB9ucW1JnIGYF1U172KTRI3WgGTlF/1Sq7xcrB2hHPx7Mh6/Fb+DivUb8p1fbsuTx1ekN7qw+P5v8bkz4Eo+b7eBkbLnc7iVbA9kCSP5lT9FnvUkLPqjcC1YzurNHDGQZ16rXyZ1VnHwmbP3yVZsHpcgVNgFV/v3fUXy+36N05oUq0R6rz06TAZDudiwobqIcH0YK38PwIsdSuwPpjIWlGtTDUhIEIxrGY+QiGk21iIzvo6Gi0vP7OZ+EerccEwt+ar+gifB8xQJpR2DjYRpJMp6fM8EbJC80fOiZSXGYmya1VRQjm3BF16MDaBvhI9cNT9FPjmto7wBD+TmRbVcV99iM2J55f8hnHkA7jQ9gPYibaLAm7GzkbOZED7bw5Y30zWck9R0bMJd/NLfkhXyeOuAcJcrcIKOtOaVNK+45CG4zVQ2VhGtspkd9eXpHVXR/11/pyoklcRsfM2HWIyXIOZjOHH17ykNHgs3BXbSPF+P9zF1VLwiagvz9VJN/QSGrqBS4roQcSZoeMnP+2QSFv97yKOSdofdYQSxpiGnyrJQKsdweB2sR2bjOyOYVfCqyFrx8NJ0bKxldaxagwIlLqisVCN4GhIWhrAM9cQ4f1VGSYVmmDEHrjPLHi+DF8ENjkIyunsGR8vELqW4/ik1hT8W/MfxqjwiIuikLXoMLjg9nrlndZZHEDI8ZYNbcPzqyfGByHGHy1qAYt/sah8Mom3S5mNMLOwb4dqaZnIYEcyIIWrq4kFnfvpYkNxmtJ7djFjyQqQuvkcKwxYVvQdINuu9X4HCfrm9duHQGp+GuIzhAt3Cbg20Vb4xPFb1Vt8NkKY+oRUbCld07r4C5Sb+B6mVVCCvXNREzq+HS8l0yl1QClpjppLuR2jwy75C5XqznHIz0klfjU1UeMV12EgGfLVLLkB48z4UfC3cUnvlZYgxrlPgIQQO3MQvwjkY2ylQGhJu+KSI5XF1/2yHUjqmtZ4E5rD2ou5yNJDoy39Nlg/gmREhZ+g0qqPWREJv7DGcB4YALDfgzdtTG+UyDBsCh7tdiPde1jtcnQdbMQA/jr9x10F59tImFniHXkHVI9xHocqulDK9LdHV87j89CqrjEbAq3KbUXV0Yx/BAqRScrcXXRg73qkj2W82kMqYAYVn3TLJEOzrd5kKSgj1Vou8vIFmiafwfWzduw/uIa0RY+AYLNC7/jqocq4zxnVUr+O7yW11/q/7VD6bKbLrj46QHCg100cfIc3kSK3x7XBFCUIxxiW1EoEiQ96FNzAMrnsVjuOd0Cx5S8/9M61126Bw6cwRNNjIkmx+p8EuybBrIlDwq+ESLzxfK6W8Ba5zL/z+Uv1cs4/5CWxGxrTEFKDkkYGeivGTl4rHxgwI2yQJ5rGxZqneecVrcBdc62nwMN5DTHwG4mF3lzaxwBt1JLpbsOuLMZibJIPNwWLXUYLSqvQK1byJe4+JlmOiGu8hJXL61bhEdf8GoKcpOl0LrdHnY7WUx+RfkutltKAcrXsueeV1nz8LYcmNiBkZu3Lx0Vo+AKDq+HqOh8qbWVylYsliLPbzgEUM7MCUC8AeNRjMQ37ZW6hAwwldg2Tlhd1VTHrDHwdk6Hd7gIpnH6K8bIZffF5XeQJhgZel1tKOTghQRH3/mX9AhuMzvG0q7zgG5Yp5yfIuMIvzu9emEa/sEyqX9wpX3U6/TOxc71QENojMAAI+HorFDYvspd8hdGBzhtFn7atvrMZXdoRy06tgmo616TzMp4fGyLKMEhVKvD4iVrG/GPITvI5pm3LkGMT1jyGHPAGeDxs/2Pm04vxuCgh0J2kTC8z8Lz2sXuGubwvsB/dqbWaJFLmAJbEDQCAWE1yFOMlYYJO6B8uvcE3XNuJZ/N+ASBXDMqZdm1X7OqZFjHh4dwMsHSxDJTBDBV1kM2eK73sYC2sKrCvRW8Na8rgYH36Lhf6SjSVjrpZW/H0szum8ITdKRHkN4j0WSTyDeJBFM9+MTxBfBI/3/p3WaFOAqmOHR/E8UlA3w6qtOlgss3WsohDIJBsdUouNOnZvZYmNmb5sSmEFVaYNbSvjb1rUz6BUqyd3V4psbBjcKMjesjC5sMZi0yKfPadYToSivYYU1/guGpjFmJ0tq7cNjFD13EG+HtJRMYRWK1eawpGtLA9lGHNctJ88BKW8e2lt+MHHR8JLuLF/RM1jPBYCqrfj3Ibj2FjV5g7SJhaYKGQyrA5dQFfK2IQgtbDWOdFN5+dNRO70m/GJ8s8l3ZVy8DEqxMImEv9l+iZC5V0J4M427j0u0k9uQC54N1xb+yohW2FFEstKX7YDp+7GoiOqS+ZEWksWlBibyhLEvOf3CJVlAPSo/JRL5ibLaT8kqTrgBUhh5ZVUI26uUqWJV8FSEjj6ZEyCytUPn7m7jvIyt/waLNXlPesW3tBNZaMDu4aYEzaEPNic5EegipmEBL0IJ14vj6WrT2XO1Cvz/GEumSZi5dVgKBRZKw10fjTyvLSE/J5bB0aptJKtLCEi/s1ueQ4bGUtGZyG1x43gNaQTqbyFOv1PsJ+HcukpRMdn7SpQSnnrojSFshtEDBQ+/sBSDYlmw/9ZQON7fb5DRn+/V/7BhsdS0hFxAeIO0iYWmHGHAQqsAQhBUGUjTgzZAfOxiDZklTebYJxu7Am46D2w8E6E23x8bEBNzvHbZswgMqhV4wM8VeUXKViZT43BfVvGCQp3fVYs3X9stPSGW+soVxcX439t0hZEjd85NV6lyiY3MgSd3305gBb7uUrndgtWYBgR2VsGRBzibibC4nCaA/nH6F4KEFzmdHsjlXI/XGnS3ZL25zsgraSVmXJSjLIuJ3+7R3bV4wl8dlqCWsgP01WGsjHvzUXO4o3xcLd/x/WkG/2wnn5JUxzgWt4+D2BSdKB2XQzyhmwoLlsCjbiVr6XHxPTUswCQFtpQvXK20bc4zhexgbHyLcYmr8zf7Q9vgUU0LMvl9XkaXsF8pMEeWZ4utyK0eB7xMItTPMitrU++YAFHuo5dcOohN9AnhnaQv9Jq+bBU3A1AjF5Llr7REBi7HkDXcrjTrP5alHr4Z3a5XIG5CImychEuTC6SUcjlXUgk0O51BJ/SsfMWYSFl6yeReWKiq0R6STbOv8lZPBzuDcnRPOrpaqJScFH74jkuYFuO41BcwBB9AWi0qY1zIDMl8RMsEXfd/+3IV4AVUVgqL/ti31mnEbGtSD/U4hOU4chTylPLM+pU+PwXlpfn5XEsssYqf+gWM1f60uq61peuN+lf+N7uNnRDXHT0DIyh4pQONo0jVVCSIBw/KY4ehsvIePhzxMAfbM6VKVAQg5PbXniGOIWPNwJunMzHeJ0sKpPgurJ179XhHnI8rCfrkpmHT9QLPsh6EaXHmMwB060tqtKuY77uQo9JDITXVKI2mZM7BshbOpjHOcC81mxO4KZF4HCBrtxX4Tc+NqyDUsqnkCN/Z6PWxnklEPJb+kfKayfHycvrMmXSz/tVnFwFYCRMv/ZHAUydiOM2atdX4rzdQzcav+0phATGFBCGNlRgVZutky3uYyiTUiwjcJzMYWcc5h51lyswTwAVbQ7yhUxLsGA+AYsqEeBCzxBf6YJ/6VqxY4lgDwnSWsgrroTvPUPvVqFQ6Tn5vb4J9yxSMMaL7EOMllJUpVJRRGnTSyvqZV806FjmId77vpEY8b5jIxUdLhfB7KTa152KC88YegPc/Pc2NZyrpoJTEVnQMMMmJ2ko59T12nuj/GstEofAcRHznBPlZfFMsA0cz+MtmZ+ipuz9B8cwGRvpHcg3234+rRqt3A6b3mvWID8JC8V2vauA8t6M+JIpr1VppSoOJkhFfmXmbqnAeTiHwbpXsB/WPlIvevGDBmfpUydZimlsXsfFBKgGfiL1/N0LUjTLxhCDcT/LKZnLZoMCc9Z8ze3wJJ7FxhagaqGjlAIb8uYGnPO9+aqu+8QOAfIaLOzDOE6603Sr6UIvgrs+DJafoYjhljPWZrqOXWVUbm6Iy3E7D+fphTVZsl+P6VmzTgWejGvBGV6HU1yuwOwcIYh1A6ziDQMixNnCk2w/vVCbeF+tFLfYyTxUcXpf8sashhsOTokLRLwWqeLN19fVpoaCYS2eY84WC/waoLuNicHu8YJd7MvH+Zl0G4nJ2A4zfxpu7La8sjpuv72bP39/kbx8UqycSk8I6Z1/bEA1eiXz4H52RraA9cXjfkxSlpbu6Y1Y3MyhvgrreB9CiA82Mf9bomrBRwJ1XgMv5LROwfI2FIlpGlp+dvtwtGekvskwlq/Srwe9I8bwPFaS5D2wpEwBkCyfpWLz8QsRxzPXzCF57Dmm+0p5Cr9zN7wBosUkykuvJ+NApTdqoC8ODFM0RxfrMfyv2AjI8EHaWlsp0EkM+DjP7afbtFj6q3EBiJNDa67Fd7vz5QF4QZfDpf9km2OpNVeJyxWYMQbrSwlOHBXu3DQSXR5KWxagD47RduuMkvrTVCwqeOHkGLUYmP+0je1pxbhA2LnU2DEb1peNILaT5g3ra7h+DCHH/rhXLWiGJacjRXO6BNX5rGIbpJdu/bsAowbAUk6YnXRIi+HJAIxI+3vC/3Yr68X4kRVhlIfg7rMC6/Tv9yDdE6ZKHln1NQvx9bjEIHkbHgFbCxXAp5Pz0wpzPM5ovciC7j3LOW+HBe8f7iefbMqVgVG+aoNnfQBzx8sPatZ3cvcQhZGwHvx15GvZQMFzxjj4BFjOsdhcxsQHykX43Sd9s6fe88jXj5uVJP8blwBrGyDz4TWNgYW9HN7HgHqAzmAbLCFeB94WwlJvgFdBj2XqRi2VZsyz4vpjGm9KG9TeNyRtAmIRgeZN9opTxVDgthQi6bQiqzLqR7ofHKylhh5dWje+ZbqDLusWWO431jfee3r/YM36Pm1Xk0vrO/Wfui4bF9NtiM/2QwkMq035AykXKpUtPezjQHOpvLYNFLZC5WGu9eKjQuSyefsVVzJR8jfgJvJzmM9nf+2z2IDeHx0nn27NU+wcb42Kk39ggb302IexNBFfbgb7CiolVu/l5me8AYt2FuLZl/Hvj3BFn0cca6TgSPL/5ErtN0/GJjFlTYZmibFxTfwpSd1nSo4tl8REOBCPFtIA3vg8Ob8YVjCWZQqNIdF52EhJ0cOQgu2TTDNF2IBhtOSss+cGawCCnWy8GPJ8vYyNjy42QyLKG4j76SHchuMhB/iqzMNDm9R+GNPdRHrAvdzaQHfQlVh052Hxsxtomk0tNuO017DI1WsaqGc2hJzI52JhkP3iLxsS+DNhORg3/tRAXTiR1PugyHSvaUEvnZdSR3mp3OOAGNsq7ymwYHRBJ3bRLCQ3gyuBihNhpTLdBev7ABR2SLSGKHPxntEtRFlVxvC3IiT6DRsFGyiYD38UVtpwJwnuxAF9TsF3GRTBFDad0HqysosyEtZ5LhR5ADbGRMTA/+ihCeufj0f8+iBiXW4OrLvmfYJib+EzaBEpBoUPFY/NHJzLzLJJKqwhPCa64lb8x7DmRKDt/p61QMtPuF4ME/LKa72VBBsF/hLP8TOYZzcwBXpW9E7Y7fTO6Ph6C0/aQtq1Ale1Mc9yJFJMHeAiH6jHenH3v0NH25+1Q43v0ws22GDelLv/EBSG8oRdO+A5cClJy9pY6ean27VOpP12g7nI13UDFt/FvybXfD9b/r6Ea0mleX90R7iCmkIsQyrn+dVZKlb/B0pK93DqaI2hUvFhAVRiyuV5gDrMh/YL81Upm9FwVafZgHIEith1xFww492oetoKWeDBoe9UzmOi/GVTdu1gs2sBtg3s4KtST9ctPKDIHyYip33jn6mKzI75eL7GmHr55klxCi2/HBsX3e14u1pmpo4umZui2hz/r3+4/J5cm6p6Cwo4G/ljW+wg1o4Bhi4zlfRim1w4SzCn4Dzwfe8DZDsc0q4VmIUEId7OJ7vr0kB+17ioKfUo4SsnxkoMlOLF1XXjW6Z5GBsy/mtooLQhbABgix75wWw/g/HY6Xh8RgvICvrAorMQ4kVY6F35tZ4D3Vzuf7OQX35kyUF5DHH0HXqHD1HcObs1cjhmDTZCkT87raOaYfUQ0k/D9SKG+XAdSedan/D42XRQoMfg/l6HLjWi5Xwdj4ttgetswpLFcOdZeHLOHK2OmvlrMlPSSr5xSpxyxdfrzCX8fSR8oHdBTO9lpJBeWXtomMIw7koo8Q2IW0l5/JIeu1IBj4v1r/PaKrs20Wk65/Qldiwy9ChYyDISoODQGH9pa2nXCrwaF5wdTqd2DBRnCKt+iFqyJdE2njSEFoIX8fROdYEiphNOAhLLCiD7NrSvxmm1znThmhLGd5Rn7Cz40Fg/1S7Z0LiThoSo8idjE2Q6lHCaXcqKv+NZxInPw4Vm/vW+xQdVJdOVuoV5DB4A00EvAsi6B8+xDJZUsjvyKhS75f14LTcFsqfYV0dRFiQXqxbSbyYkKiU1SP5theWWJN5j11I/XMef99SfluPGQjT7LcTi/9XLG43fw+vE1sjLf9MKYnj9iDgzpKDFJN3vfUgzGdZ1C1B6bgSPYsNik8h1sOIZOorN+vmnV2TI1XiMvdm2bjHP19dAnHvpI2VshTzZlGM7tP1cJfdkinNQyIhIBgo2BLCogCDLfqQhZrSgl/PzUzvKqYgz6ZZzFCoBMtYhs5Hetq56FiwT0wcGxSqV5E4sIlY3vWy369N15cIh6JLkwBSA0iqtWMU2FqOw6H9JC6p+ntKt4zMN8DTTerCAhnQy9yKeoyV+Xk+tfAIluHr+AfnxzE6KN4qMGen64LlnVmeotj7ylJHMj/RA9puLQVjIOHjW7sJ6e4W54Y1Eyu39Uzqq1MwCm1pvQ4i8021l1RnJB5ieu+Dn/aqO2uAkOx9/s0FkPkC3Xdnl8hiuGXPKH+CadsA1pLdxQpy/ArOM382CIvJk8zFykLFc1KisoitO13xC52DFh23Iz8AfrseGwPJU/l7O+Tom0l/O6q7VHfh5tb09bNcKvB2IIgGRt4AQjoNVHKdbxp14vDlti1wkVN4FyJGysIFX8FUs5MuwQE4C0MMOnRraG4BLVODTYDV4ESchNqWSvmDnOvMxdgbxsfc3OkYuwPk/47Fo+N2PLMuooaglndBNCw5Ic6Q7wDYe/xnf760zk6kbFjabCQyw6QOdDuhFLGY2MNgr8aSf96nNagFiRqP8kO99F7+J7jOr1QobYAqxZR2tT/g5l81PbvQ1LMOdop9bdgQx//y3nmq6B8r7BOJvutu/IX9NuRW/gWgx0XIymXCzYbfYB6d0rPO5t+E6syb8PFy/mXYhC8/Wj9hQBsOi2iowWS+3Yl3xmp+SEFQz/odCyqEd2W0/NtYzaNL/PS7tWJRrg9iQLtWqtBIF9gxFrva3/UWOzckJ0gr1K2Blr/7jgAJduGPPxAVkOeZYKDarc2ipOkEpCH4wD8pJfm/BsjI3WlJhlbuxIEps+n+fGRojA5D7Jk/TqgzHGEhYIcX4eyKQ3nOQakkM9FEVamd11RDe0irHQbsf4LrOx7F+vK12AbJq6m2ALZMRx3HyqbHJ8V8yixC4Yl6XUw+exf1MuL20Sgwd7MssV0BpmDdlsczjKzJcVszAMkZ+P7uVWNl2I64RNySCyJyVRG/pfJyrznDvSXR3L1JwV2LjIgPl67g+ZP58Ab+FXUq2XgLpiXxwfVmU8ik2sTK7cxsGAO46AH/v2FVaDcR1Z+MFN/lfgZ5/hfP7FH7/0wg5Nh+GcS3tXoEN4QXYxfI/XIczcbG5C7PaiHD/pgZoWgkaUQGpxGyn+9POhfuLw56BXrJu9nRYRqKgichtJsFd5u6sSNcAxHyJ2MiWkpQu792DtZa+V9Y5zjdMT51uWjJypyxWoJs3HpsHFyktBF03uoXXIYXig1SJ6vapR3HYKkf6V05XMJ4nMQabEq5BGmt7TrlcByT2dHw+eaf4GioxaWiYC52DhflXsqbEjD1X1VPrzU8lle9chC6urERi2euVfcLlKCjof4FA79JDEaobObiYvmKpLjdw8lMzpj4bbvGmnDJ5GcDilThXbIR4q56SR9a4c4AbY3F7BlCec7YOfrUtvw4XGVlRec0vgGfCIWzEYejRVLVtQqRGjhgFNoQXYhcWaABWLPOIE6B8ZyQGqfpa24XGfs9vxndS3UjPwc2a1sBcWPbLsmuHpZMWbAaToBwEztjaasx8uunP1Dqf/TEQW37udQtSW7S4ueF8jMXBckCOnOmJVA1d6xPgyrK5gcyNoxEuXN4zTJHrkcDc9numnRKvaHt+tKnB5rPHw3Kci+Ond/IqNhY27N87OFoYurFdjxaKSvwYLPVcbCSLkpkyilEECcsO02BytoZSOd/FLdkOCGOoRBZNNkvQ4/kGv5muMYswWEnGLjO2Uc6z2VyNAfMUEirmQ/nurccK8zXX9Y2QnfllstnGAHDcDEFMpts2ZR/+AWlHnAJTWGjxHWJVoozhcPNGQYEJDNnusizI4GJmx4rRJN6QsBuKF+sHuJflWENEXg0CCpKt2U5kuLZ3uJwNN/5DLLgf97Z8pCiXGL+TqaPZ+C1pOrMnG92741+yXbDo4co+YQpp5TEyb0sc4BIoNmNB+82DsZ6fh0fNJAWi3URe6SqeRz5qxOBqTjPc6WdgfcnQwZDhcSj0J0Cei5tJkhCJzYf82fQk6A2xs6gLlIvfXYLPKm4l6QK7gWaMTZQz4G2wp5k8WlfgfJCY74ddBXIl0GQjbifhOycuPg0Pg5gHNzgykxBH4dzigHqsML0stiIutnmcfc7stWbv8rrDVH1lK0ekAhvCXZTTDQk6MR9LLuH+Ub6wvoFqIkIILgZbw4yRHI4IXztnTyEse5C66G/+ky1bcrSdmJ1UryCezsVmcR3isQonuVUkRCD/8s/43jAoBS1/FWJYNhZwojxLGG9HqoRWhH25PMYZev8wPYEhWIgW/MspC+o5bApsCyRHNJFfMnecBGt8DpSYoI0REz8LMIvN9Ufj+z5iHtQBvmQi9ySLG9kxANbKVw0qIyc4a5rJI02lCUTuntfg9MRAVSfNqZPN9VSIMv9yVmekuqrVtEVWaDEcOgvKTDDuTSDN/EQObnsQYOIrI+JkA47jseUZqpGBnVFL4VXwEpGy+Jo+Wq2zrTCvG47fw03NEGYd2E3G8s+laYfHK7GVdo1COyKkO2W30l2ISUnPaggXDNM+7CZprmxFLrEEO3MhPuOHPbUpq8k9Q1Qzw+2LUp3eBUUhKs3yvQgsuGpL7eezrvj6fhGq3JJWbsKPe2ueYx6XtcT0GH6BR0CKWHoSQ7/ZrfKrr50UB8ucJzvyy1VsZwjRaZZDMsZk8UZyExxjxAOu7R2qermNhv/6hNQ6vBmAEkOdiV1CABB6KTDS0cYUThb8EZ7JI0gZHQtg6e1RcVKA42UHlfEZTOMRBDOmZ/A7x8IT8EXMkGxTrcbpE6TgMVKDhnBm0mmJdWsMinU327Y89HDKEa/AFKYzeDsGloR1siztY0N+S8EXgklcsMxjGmGTYs/oeSh7RkPCkZ9XYcEzx0zaXe7yrHOucEDxewNI+XlNXfeczQPjOwWr6QVrMmtjMwJvt2FD2Y6wgnN92ej+IFIs30FZvsDxk72EI2sYGz68tC7PE2l1ZjkQBlBRWA/38vrsZp9TutFGuon0QcykvuFAjy0RedIBMV3Eyirm2pky4unrFeYjHwPs48ynF4AOf4gNpT+u/bfjElUP8EvY8GyvEY/5N5x/gn+2CpypT4eoc7y6F+Lj1YqmdSfKv0KBDbEllGuNXKbzCdsWbrDRPUa3vk3JuXBVGYtx4RDlJYE659s+jB3/r9QiVSa4u4HCD8ZvjIP/OlDrvrGclP23nO/LCfW2MhX52jdGxqkRJPQ23sZnsyXyBijzbcdEqhlKzFP/kVIkzRXGsvfCFZ8JZXDGuSVSTIX5DK4wpyM0Zo3pibwDqxvj76naNm0Hlj+LGH8LNqzbZ2sTEp8YEq1cZE6MGPy/3TVTMm3l250FqquK3oaRDswt0TjDbCVLLw31dg/9/XcpsDOkL3Z3ulp0RY0FxrjvgqNCHLK+cWpIV5QaIXOGPkyL3NAEea6GJaOC8sb6WuYgbQEUfg9LBz9G3Gs7h3g84nFaBsbkK9LrVkSxpJCeAhvyWbXE3DYn/d0M5Jz8X5w79D7AHbq+n8GV/AFxtiNuLNM1LwHoYtueM/ux+VkklJsCJbwLsWxqA33XfN3EBnibSejAenWmEtlBtBsYBcncaV17hbLAJVLhCCwVfW5lpiJHWI7zxspJEgcYse3+wvIGKZeYJ3YHMdsJmynX67W4X9gUSPwHSlAfc2R98vDxWmcSrayx8ImETgVIpMaGAJBhk8BoIOffntFJlpzfVVUL0dp9ivQUyeKfs/keFiNQqbcBkU5XjfGHpjb4PWzI5+c/BsumaGvO64rUSwe1qEfN3KuGaTNWZrUTF35T8ize62zlNYTx6Y1/HlDxa1ALyhMfw28dGucvlyGkeQ3n6im41mM7B8qaC7rJQvxuEhCsh0dCOl3OdqLQG9oIvGSoTZ1zgY6S+9WjxH4+7qE6pgVuhkTgonHA1m4onMHR3BEu1sW9tdj3myasLy3ruVBGxp3TGpjdRIZH3qhkrJxiFdhbI7VeYnY0nfdL3aYIDuOirMoskUy7GmqjGN82Lv0BMS1vqjkemxGtcsQQT8TfBSoVQ86u6/D4tEb4usio8aLNBuQK4TEzFv7vgIhDaIWakjRY7VdWZymyvNuBQLP3d9nBYpVL/lrv7eW5YVVV15DaGPdvnPdj6yHFd2crZypwM+S0zsGKyXHK6lqw50LEsyx3vBMxWWPwDRWGDekpiHObomDh4roQLrktKjwbOdx74Vrm2igpUWSSj4+euUeeGhYjK23SYaSdfYXcTrAerFhi8Qf7V8kkQsXj7T6CVktFMUuwdPNvWHu64v/bkdfo72CnXVvQGPE7tsMq2qPDDclVyDKcDiBvCIAqGk8yit6/OE1tiFTaHkE+ahPlpsjPtN8QiY5P7lk7LylYB6qK27jvvDliKnAz5A7kjrkQDMCHo0KZvuFC+2pH44X7U4Z1UEDTrYtSm1z8RoprZ065vDs6XjKRBhlEHivEur/vL1IW5nIsVrb/cTLgFiw8Voe9bdNvzAb46bDypMPtH+Gnmi8e0N130uSszChR38Fj4bgS3joFe0soALH6RrgaQhaOe5bUbmBEddlg39wxqw0KPmYOQoiJUMQvducpJk1OFWxKgTkjigUsX+/IVWAYOavZAcXjuwnXiGg8C2A2I8Rg7vt5xL4r7WrUSatDAgHiFKk6IUFDUl7pHjOETQV2UFiB0xnu1s9YUEYOkcUgYUBBH1/U+DxZLnpWg7H17ptmkM4bVUSn/bBXvZ9tiw8cG62aIzhqhF06VFIWa3BsaG55LeDDtNRDAMsI1izGhvMhgC9WarHYhKWZBK/UQPFv9tS0+u1TyHfDmwuVYblNSeUZsGRk2pwOdHs8jmc1wJ9j8RqS2iUGealaaW4YTNmx7Y6p083YlIYo2huRHGxUy6CYZKNkPpjNFzy+FwGOLQCIV6xXwvyGxxm6zE9uGCk/DpvIe9jAPtiao9zgZ7Fhkl6YAwBYmMJz/4MN8FifbNOnaHJWEhWYOf0cu/GxxniY7MPMB22IqcAOSqDOhbQzt5ZA7bweTSPPfN1N/TSqnedWNy+WS9XZHb2hJF/DwvN2Nhbltf3C5baFqTJjt/a9xsSDA4W1i4q13awQIyXrCCx+Vmpx6PVqLGbyWW3Fc4Oj/FWTg6MVjSPiA+vEoyReZxEJZ0a9NiJOpdC4+FlrzaqoZ1ekq3pu8m6xuYBNHt8jFGDvLqlbWWDz+AkdlJIMivGTHkD42aZI157kCsbGQuvLoWKNKTCzAmzEMKiL2VH1NEA2NmYYGABDkz7YvAZBwXtG+KhNj33WtkwnqmQVnghHnPL57Xl1QcFonSK31D0MsKnAjooRBkXrkw6I/JLdkIhnY0KitTA/D7ll3oF684+NyV4oPb83yo9UrdpjBghlK2E6WHXQhi+Li5UkAqtgMV/XXWvGfVRo5ou5sZBRo7QZ8Z2vZ100ttyuBYfMGCywIFjEDq1TYJWvmp+i8rJUYJIVcBPZo1P7sIDjgu7BNVauqz69kptduJ/HId/F39RQoQg3rNXppUCtLarslC2HfD25wMgkyiFmxC+Mz2cYwVTec0NjFFsIa5sp7F4j+TuFZACFdt/XQf+Mg8VtR2XcmJgK7KDQarBiisOu2f1yOtzHedj1G7O+VHJ2xrwJK9WY9Wjqezn8e21mw50vwXYpDTJX/HRW7YhOKk46FmsaFh1ZNUiezmFrHFXCYdu0OmSatJ3GYC9svVyUUjcONaqRmOlRDfepJTIBCnksLDvrrjlpgyyOryPW7ojzsAfnj+dLAUh4PWPNl//JlqEd/CQDx2C0/PFjrXZ6Sks6Ch5AYw0iazLrxrT/Rex7Dn7fV9hM2JhBd51zmwyCA54fjqNlg8Vf+nuKbBS2Z7iP4jW3lQC9giOjxHSh251cuyBVPhwTr5SXwpgpCrt1Zj0jWE7Ajn+3Pri7KR7oxoRN/pwP/E0z3nND/3DZklWq2hlpnek1MJdJS+QPhSL5HkGvQDzXAUrWFeAO0eq/4U5e8Ev93F19EafO21uX0rao3KosebxNDnzrmjJsON6wahXyORSHcTJj4R5Q0E1w3RPh7m9BTPwyQKSRiFtX4DjXQZ9IxhCOY+O3/x/c4Jm76irq7rwK1WzRnA6vWBwbR6N8vo3sGr4yig0WcNMH4bd0wibH0IOja2w311IbcKoL4nHDMhtyrE6xm1xgWuB2JwRjOAWAKR7Smt6C29nY4d9D3MZGgQN6wT8t21unxKuZyJN/3S+FrWibWwMX+KQmSPuK7bqEvsPi5zjU1Rd1U4g1SdvoKqdi0e3BhrIzt0yW4DG6kOyBJVjWPdRXFYowdVJQz/Fy8uMTQ6Pl0RW1xRvvbspWRR9eVmk0hXaGHQmgrZwWWPscz9cpiNeXQGnswSa6ts2dYPkBrsuHiMXXXxKqGvTpZWwFiMaOLJK1b9RpbG3DCF+9aIND4PogVl63pO7YHoOxdEdO29Pn1CemAjdTyrGIPgeiSeDjciC5NyAPy7pmDuIiCssWRrbf0TL9mlSoWuVaI0RtOUCblK7FDdA+5JfXVgxxMRL0Oe5/u6RriDbcjMALrWQc6VNhQej6MgXGmupom+mFJJMvaGCzIXRDyiFWR5UxVwxXmMX+jRV8OFv8LI0XIBN95gZgtWhMHoybDT5nhgm0roxpGadzM4gO8FTny3azCMJ5YSkmieZJW2wfunQJ00a37i0yLXC7Fioy6VqpyKTwIak7rTGFJG+VWCTdg1s/C4oVRAQ+OQCsIVaMUj0HS2U0FiPTIKnFTYNmVHq6kkyP7Mhv2qqQIoibE0nd6SZ/ub35DKAtEXY89YpoeEA8j+mLsQmK1N4W6OLvCoUCk8nEqGvmY/SSgvA4jTqHvC3Ti2AYtxMvODUhSJHY2wrfzfh9hRv0ARtiKnArpQC7Oos4eGOhPL0xdhKxsIDupaNVRA1+PjYD8i4RPW5IgQ3XPcIGra5PGGMGYYES4M0r11xnWqC9DsRztgA0NwkWgRCgI1CXhnQXmTvSmomyOyInx/nLyfFaDjjGr+HCiqMB9HF428Qf9zULWX8b6a/JvUKVAnMzY0NIUWWVnITrNnNP3c2JlESUVemmAh+RYhQCUOg+U4HP0TmEWyOcZTsJAM7bjdDTUqn6IS/7j+7yTUgMUu2CHGod7u1ZkxqhGIPSJ85OanBIm73kY6NiUYQtR/Y+XZG1oWMRarNZBY/h95TW/V6GCyTz6w53dc3B0ppRNaMbwQKWpBdLbkWVbL2sh5rrbBsvFyu3WRssXsr7HByvg1UkQDAmNGgUOsiLA2AegPt3/V03/jUUeGkrr6czxVRgFwmVdi12anIIk3sqt7zlaQeOWmHZJMekbMmr3839B9/V08bFfOnkOPlhdz7cvWLkh6ukAIuaC5zeNvPRM8YlqC4nRxV4f0GlUtT6Brtx83hYz4dzjCcrwPw9PNTUQE5jXOaAxWJLJQeTDQZ+cACewZ/7i2Xm7lrEma5tVlnD55Bu85jv9ki/KE3JWCHmiw2H8W8g7vt7W+q0Bgbo1pbVbF/qZbCdg3B+AfCxpZANKxvtaGJHdwpUcfHCFFOB/xVC3ujpQEHJVfzgsvSWfoxyyVkxdEa3YNmytv6U1AYoCufzGFKJRGqXYC/x9wlUF5kNF0RWiSZzIdMdff2fup/Fiqr0BoanzU8ulAuh8A1NZjSE1smwUKTgPQpW9DYAfUxf0SZShYjj8n4JrCTjUXoEe+GG09OwJQi0FZZfLm1iOkV+pbXG26HijowLAIhYrthIMh0ofRwCd50NDpwy+cXWulRLikIYmxMJECqtLc8qOFtMBXahsCifxQNX9w1X/E3LWhE7zYNLfiesMOfh1gdG05LejeeNaqWzf9ovjxwfpeLCSqgLyydJ8Md1XABvoBguZAiU6j7kqgkOke+Yi5RFHhwabl/xxL+NKiRHZX9xhbr9caBlRSy20i/KV51PR2XWhE5qKBxbCb1xY+XVfjUWtQwxbLGi4t1utxmRGYVeE7uVrrGbhDG6o9YZ9t2utgHtHBVTgV0sbKCficU07dSONQwcLZGvduYpBea8nvqKGUiZQyoYcj+RXobu61VI+zCNlACUeRisUZ8IP+kT7qMQbc7xYX6Y3MrrskoVD/ReWKvPTk+QYYj15tZTOcY0Vg8o+U6b38ANg0OuGWuTuXJjTpncdHSE7ID7SZSXzBUf68SBHGDGOm4OBSfF7WVHhcqxsKzksyICzhRVKGL1Dzbl1p3OCEse6ev4UuVs397AA9gEwlwvKWWJtPN3s9XwIuTxidhzyJnhhVDZ+R5mD0ioYH+dbuwfqUo+Z+1uOVWwK8Rk5HCxcAQmFwqnxn9yWsd62R0cEVrAj7fkqCb8+oTADLuNTrNxo9mxtG5yd/nj3K6qb9gPceDcfUVyy5+p0v/LnTLhp30KPedYmdGJAfLuqHgV421uwE3+EN/PIeG28hZQXFq41UDIibx74/dxogWbG+gR/G7DtcVuqm04Hy8M03ipHxmizVaaMjxGWT0eb5CXZw1LhiGToXBvNUB0NwbA1u+TOsPiJqoCGw5BJ8UsFZC/Zwq+63gobTZCA24UZKcc8PUuufr3FLnZ5lyeqlvYflDyd+zoZVnCyTnG8xBGlLlZb7BpgdtApm/OgRX0hhKFy8eIif+DxVPcglkcb2MRX90nXC2ohfW4pbMBWj18QgfF81wIF5kxK63JQ/ACyDxBC9MDFvi0TuFqhi6ViLzKjBvJ//TC2sw63Tv2wsc5uYGA03YdTKPFJz0Qp9RTVJyIY2MhBQsmWEDxNBT7j+Ri/O4DKu1E9g8WkZBs/3coBScd8O8kWGE2OrAryRC69QX43oY8l2eh/ET8ObuKpauvn+wt38BbYW80wau++L0TsDmQ3YSSis/hNEIWtuyzSZ9xRCyFNeL2fM/G8POX17a8JNZVYipwG8kTK9ORp/VUVoKjTzi3qLCZTeFUoE9hBR8Eyrvox6JDyheJ2lKB6SpSKZk3ZosdC004P2gvlI6xMoEYEtJz8kNzO6Teh5v8FJThXp2CltMc/g+u7yebc+UapM22w3UmgR4nBlL5OHhsIZR3LzaIe6C8HA/6+jptUHcYFIyjbwicUbE4g9jb00O59YbQ+n6xreG4k4rPUtKpG7IV2k+C+gugjM/B8rJve/bOfGxMGnEB+457hHrLQKDM+xBivLdBc+15nIP14dzcxGxlAI6J4CAnObQFC0lzxRI7fav78oUcgfI6LB+VeAXczOsBlBxsZmM4+22XXdBN0fJMr2ee09NQ4D4ApAyqmBMQz5J7eR8UqD7LGgtLRECrOXzOXPB0dz/Qv/98WPpIhAg/7ipQLJKToJTG5EM2YhiTDU5DbprECBS2EjImZh529u5CxbJJut0obHJEojkN8UaAf2TlbIwh5JwuIfLACVFqzArJFr7Ee9k8QbrZUR2DVLkrx7NyQyNV0LykokNSepwTTKqd3/D+K/6oC14Zc6NP+na3NjzPzcRU4MMgVLJr4JZxR2dM1tydnXEw47ehWFT2isdWvp/O6iQTZ+9rcKwpZxZd3DNMTkkMlGExAVKO5PAVv6XUDLim0L3uGeIjqxqY/3MulLQzXN1X17nGreQmFwnrOtXBWmuGFRzpcio2FlLKfrolV5HS89wOhJvPGVKs6GI9C/mxDXdY1ayf1Vl5R2TttL0WZ3cNkamnxCnFJw+1O4qpwIdJGK8xHuSCYQtfUjPb034+s5NsB+J7x+KDhzzHCQRUykuglIZQITkL6bROGqEbY9PPsJA5VPwKWKkAb08F7PB118Ly/RcbBAsdGENfPj+l3mOg5SXtzBvrm56k0BzhfF9WY01tRqOEseEcAFI8CladzSU94f6SPZT16hzMXoX87cWwtK/A4o78bo9KIz3OyQ79tckOT62qS4pPil1ycQ+fucct3WeKiUIfJiHh+qM6R/PCs7uoQV/NEQJT52Mxjkk49H1PrUiHdQ1Sg84NefOkWEXuRrR4/Ky9MvL7PbIPgBF5vRiHzoOickLhfBzLZCg6WTaHwCKNgcLbjxcx5Fukgjgf+FGdLK+1wt7lW6FMHA9bn/KeiWMhIDbBrj2R373ygu4yG5aUg803Is4f+T1+IxUPGyOPb8sl3ZWrbHAfeAKM4/tI80vltFfeuxDX8/n3N+S4rfJSjujphO4unD3MWt9TOwXKpb3CpAKo7XIH5/CSWYITCh8HSMXcpK0rfRBWKBqxJhXxc72ySc1DAhBDgOiq3uFqxOiohCDEmMUqLpwAsImW7+MteSrNRMI5FnmQNmjqhixpaDBhFmJ4zs+9DN9FVktyhjW3/Znzqv6D7x6FlNDn2/JkS96h7CODAcx9PT4RgFeVmqxIMdBius6xQPnPRNhApXsemxX/ZWUXNxnybPGcHMMRNtikpmDznLu/UE1yHAJvZPysJDWe1RC+d+qoONXN9R/ExG7MKmu60O4gXDAzz0hU/76zPgvWwHHyu5lY1AFAcyf9vE/KbVYaXcrF53VV7i17dq+DW0z0mqkdEsv9tLdQodL/NzBCVYr9ir/vXJym3MwbgCJfe3SEIjB4YHH6IcRujf0Oosa0botSi2RZWimQ8vqXlxeU9pgoXxkEgKk30lKcTLgyo+HNi0p6LVJoJ8H1HYCY9v1T42UvNou7lhyUIOS3vz+js6wA8v3o8nRVqfYGrO0x0f7wdDLUFI0cO6yAJAMsc30S3spUuyaR32DJmQ8mn9fcZlR/HQ4xFdhNhIv/Q+RSuXA2wDKzlM8R102hr1hwHDTOUSe2cjWs2oPHRcvoH/aqz2IRCZcx9fyWgeHIb0bCepbKi2uyakZvToH1orV9eEma/NpCHi9Wf7Fz5wSkZir0emdDFGmch4cq79yYpXE0O4KAc0Oie0/Oqiv0mHwGYn1knRQQSLlvcKSc1yNUAVgs/GCsz7Gy6lwAD9ikz3FmY8QvkzrLgn1Fct+yuhgCcQniE9Og1I+uaHn9eluJqcBuJFSwewZHyc0DIpoFbnWF6/rrpC7yLhbtq3YNCu+NiJMeSNec9VNSTSvg88M6yDndQ+VB5HJZ0shB1vccG6XypLTWZLFo6ehVVwo3uXfh2rIM8ka4tsxjM7d8LTwG5oB57MOhtASpuGd8gPj18+25cj82MXY5nTlHG4b25klxMiTeX07/IalOSulYvOYnKDbP/Zgf9rrlObAXMwZ2I6F+MW4rwx0WX1wAa0LStZ1NMGUwftuPHOVzw2Mku7hK1TYbwtQQ+5LZKmeQt72JBf4QLA8J059CHKhoXzPL5PLfkmUeYkOyWn58aoLcBECJEw7S25CBkc0X/+kbpmY5s1KqxKZijQrFPC8tKJWU+vUi0kGlOF/kl+YkhS+ArJNilrQ3N2IjvArhAalzyCL5PbACpuAugWdyFuJl2yIWoumfj00Qf2yi437c5zask02JqcBuKCRdU+AWkOlLe2t1wUuboHHZBkVPLaiUKVjYB5EiWp+luYskrWNzwxNDOqhWPoJkLPa/bVCUinNJLXMTQCu6nKQCugrf98GpHVXnD0sYWeY4sw07cFjyeBVi3UEd/GQkQK0ZNrS9VO64AG/5BcfG3/rkkGhFCfscQoBZe/LlPngRnEjIjYobF6un/L00PiyWlx4LD+N1WPA7F6Ud0hk2e0In6YZY/AVY8t+SW9891VZiutBuLER1vx2vgVvfwPKwp7ip8stroYBPwaI+CTDHNhVD0GYaYuy7Edt+tT1fRiJXyljXli2EykOw6GF8Dyly2PRPhXe0iIGMjo/AXe0DcIox5K8NAEB9wnwUa0Z9FDw/Ig1EDudZewplwbld5K5FqfITPoe1yz8g981zwUHdl85LVvS4BP8ojIPZpvsyvBAyedwMF3uFTREKwwO+tr4wY+rIODkb6SSWlz67OkPak5gW2I2F5OjsI6aVmdQjRM7qGqLytY3FZixhpHVikT/FsNycvJcPpXlheKxksS3OZk4QyxvJDUVGx8m/Jqs65a9OT1BcWVTeMgcbL+4F+HMm0lEcEsaaZxaKlNq9l3OF2anElBVLHg8U1VXiGH9vuQIutFGmeTvyseyYIqLMnC1TRdfALY7085DZUPSfcaNHcT+sL2ckP7MmU/2eJ4fFyKdbc9Wx94ZC/w+b0YcAt16xqxx7GO+7Ahaf86NucdNqq8bEVGA3F9YEsySQXUBndAlSbXer4R6mNhKjbQC4sxYuOGl4WOu8LK1ExddUbvI9PQ5LS2rYFemahXpvVLwkIu7lFPvhcQHyNv7+cHOu3NqE8hI8K6iw1iSKGJe+ui5TTUQkR9aXW/Pq5FfZG0z3fMKPe9U0CdLv2ltpziTiiBYi11TiK5GzJqMkZx9xTApBvY+hmM8BiDtQWKkaNpjqCcFnP6dvWn/Ce2DsO31TrgyK9JUvgVZ/hPz2S3aNCkScOTOK6bKL56bUScO1FzErsdqJcPHdBYViv+vPSKfcOiCi0deTBWMicsNnAAxbcG7Xmkqp15FnfmRpujwE0IcLmNIl1FvFyewiuu/YaLkX3/N8EzOMvxqTIEsu6CZLL+iqUjzkm+Z3/L6vWMXN65EK22OXBjOmHlDpN2eXqxplQ6L9vGQgXG96F0/BhSeARpf8vr/T5HooLps4GBawu4o9y0+szFRWtp/OA8bzcxk2IDYlzJrYWaWSRiYEyDdndJLp2IzqU16mi7Zhw5j8S3KzO8PcRUwL3I6ElpWAEq0wyx+JxhK1bshwUBmYH+4PK/QgFDOnrFJxZ9ESU8EeOr6DosJlYQdTMZxffOX8A01S4HAgOJHtkd/tVeWX6Yhlx3YOVkrwERTnJVjCn/doFEIkGOgJF3ZnXoXyAgiSLYdHkE3aH2wuLKJgGek8bEqX9QqTUngGn8OCsyprBOL0V9dnyym4z7wyU0VsH7wHivfEigyJ9vVQ0zG+wevpqpMmh6mkz2FtGQez0opkCq/ZxLwEwkgowA1iD5D7SxBLu4IOt63EtMDtTIwOppU61xarhhqrQ2bJ5bUAdKYiJ/rS8Dh5Y4RWZkik9fRZe2UolOQOuNpnwVqzfnhjduMslT5wbe8eHKmUonuIN1xvbxVn0/WeAaCNo0c4R2l2UqGycm/BHZ+OlBQVnpJXVqUI9vYANWc+l1aWrYlsyr8UFvRWuLTkoH4SCjoOmxSLMZ5ZmaHSaqztZqUVmzimj46Th3QmzAuOCqk5Pv62t4E0X47NgITtb9owefC5uZM6yeUA6hbtL1K0uu5c5+yImArcDoWL7iwoMWcykZCO6CqJzRuTNzdkyZBvdiu3la+nJeTnjP0hSSkPe4zvGBjZ5HffMkhz3TkXmGj3J7C4CUFeinKG3sD5sMjrEVvvQu76ZCj186syABxlKqJ0Cq0ex5YYBRS0+vQKyOyxKrNEm36A9/2DXDY/+25sArw/Hb/1iROitWMAMh2FdNIPSP0wrs7UgTB2GrFaizHzadicFtvUlbPRn89x4PkHsNIXIefdGE1texFTgduxPL4iXZ6AFeoIJZiPlMst/RuPi6mwtLLTYI1Z7cV2ucHRfsqqcdj2xb1C1WMn6ATm9kILdh0QW04ivBz5Vrqjb8LFZdy5EBadxf/nwhp+qpPYsTk/H4oaglxsYYWmLHS3GTNnlFZJOVzuvnB1v9udrxrwmeohIHVBN82icpg4ga4LgcBPwSYwAMd6FFx+kiCcO2efLCJyvPCAAr64KRGcY6xLbyJDJ0o4Gp/P5zjsjXI3YupHlrt/iaSjYipwOxcO0zb6Vdlx9ADcYd8miPOmbclRbvgfUBZWH3FxJxeWq8eoFLOQbzVcbVuhS0zOKrJkcBbUy+sy1PxiWkzG0T2AZHOgmkEMwB5j5ntDocgGBxjLH7vr3gLTVHSjGauzeIW56W935slYuM6kg82BhXyVbZeIZd9A6ol10Dm6YvL30j0ejM3mN1hWzhNm+aMxbI2bxP04F6wTN8bb8PmGeKfbq5gKfAQIFYHKtxHgFMee/jqxc5P9uVSA+4H2koWCDBbfAq398vSOSpHoagd6eyhrzB5allZSiICvBPj1CHKnJDdnQcgIKC8HdS9IKVbg1jq4z0ZcSeYPgkuh+KwsPe1FBYzQZxyxoT5BP06OZ6UlX6sXX5you9zcoB5fniHpsO5n4zdyIiIbOB4+LlrWXtRd0cROnpss5/+qMZtQcbnR8LnbcC6Yk+a5aQnzSXsQU4GPEOHiPO3HJHl3fY70Roz5/Rkazaoj72OxBhV5AYCdBwZHy8+ILVlG+d8FB8QC0GrR+V1lDjYFNseTl5pFFRfqnFsEpMi51Q0x8Nk9guXL7Zr7TITcB64zmUFCoHDGrCLGwB0DNaWlhSVfM2UGLDiHs9GNJsc1EWhDyJ9175KDEoENgQUm6y/pIcfFaO1+VGpaV0NxV17YXaWHGN/ehlh5AtzpJW40y8jZYrJSHmHyxKp0SSooVx04JNA7u1OwSsU01mtLoSI/CrSXt4tgSc/pHixvnxKvHv8NrnZ/KFZMYhDysR6KWL4vwLNcWFXGr0wHscxxORTFID4nHQ/loG55M/QJihyyXQ1lvpTk6lD+LP1xutFzk4rkozEdlTJ+DVfXB6EAO6VIeDD5qDDFpsHHz5uTXaOUZPEgGyZzxXwfLTWHlbHqqsqNRqC4Ssxa6CNUEvXRnxfpfMccGcIJCYuSix3Oe3aEdTwpLlDO6hYsoxO0wV5eNvE1FZGjNhfBfebIEk5BILskhXOYSCjA6ia6ycPhlu/WWyMNPjCOcbnw11rXlgrIGD7Sz0vCYbVJj8tYmLXPZJycbcNZTaCNQNrYLkGqqisTiksu6C925Kkpif8WMRX4CBeSsLOe+Jzute70KqRXWIG0AekZWsZcLHhOLczgvGAYzOySykNm7LJXmYDRkA5+Miw+ULoj3xsffGicTaJ4jlUh+kyqHFZKkTt6kV1xSBSUtDPez1i7W6i3xCItRHeaCsr3U2n/wo2UsobSUsEvBEI9vltwTYxMS/wp4uRf4f6729SEthBTgf8lYkzXY9EDKWmCfRqHP0iWzjiSkwMZqxp9ubZjSgOh1NHIAcfpFpNzhcL9temH1XgfLTbfxccz4Uobdp881JzPS6vJnl+mnzh3iJVmRLVte4CptCNiAuQ8HPeJ2Dj4N0syl6SWqEkVR3J864hY4qZvy8FpDhNT/lXSH5aRVpCFFIwjOQCcVpbNDzEAmUhVw3SUMY40DCmhYF/nYJ55MPOsEMvHRlCh66qxMVBKYHF5jxMTh9gwa26Bx/DNrgKkgnLbBVtGW4gXlJewoanA/zKhtRNxjKzOXliYwdwu1ZmteyG+2hRCTjwkdhWlW2G60OHYHPxxY3cR00kheH0o/g7wsbnvXf/GQC+AFvaPfUXyK+LfXQVHXhqolZJGcsDcfwFYZ4oTJZ+jWAo1C5jkxNxqsJcFrr2Xsv6U1KJKtxqm7XZisWbSAv+De4PEFFMOsxQgn1xQaVpZh8Uquz3wv71iiimmtDuxiMdmD6uHbBdTTDGl3YnFUr3eA7jDXDHFFFPanVi9PNd5pFzZh3QF+8UUU0xpN2IRSUm9oucWhfcBif5OTDHFlHYjVrH8xn+VAlurrD+IKaaY0n7E0/It/6mpTDcrskwxpX2Icp//0ysRrrO1pgTGaql+Q0wxxRS3F+U+Q3l5v0aBPcT7A/WcKaaY4tbi4SEv1Nw37hz4T4/9ALPmiSmmmOK2YhHr9weu7rXV+LtOFbnFanlaTDHFFLcVa1X1I7Z/11HgA9f0+hv/fCammGKKG4rl47Trj95k+8ghfVwelZY7LWLJFVNMMcWdxCoe1U/YP3iIAh+4oVemVFufEFNMMcV9xEMeSLu6z177hxtkAI+ZvnUunjxdTDHFlMMta9Ku6X1sfU80yJHi4Vd9PRQ4S0wxxZTDKXvFw3peQ082qMCpl/ZNEmv1ubjb+KxJU0wxxVXCSqvb6nOdDWmUpSz12r6LoMT3iimmmHI45LED1/T+sbEXNEkzmHZt33es1daHxBRTTGk7AZCMuPeppl5mEQcldtrWe6DuU8QUU0xxrVB5r+vzuCMvdViBKTHTtt5q8ZDXxRRTTHGNWK33pF3b5yVHX94sBaZ0fH/7oGrP6h+tIoliiimmOEtSpcpyTdr1vX5pzpuaTbWfcn3PdVYP6wjcbdYXmWKKKQ2IRRYiVXRic5VXe2srJPaDzfeJxeNW3I0XU0wxpVnCkuVqa/WUg9f2eU5aKK1SYErsR1u6SJU8LhbLlWKKKaY4JFaL5XuP6qo7kKpNklZIqxXYkA7Tt3XzsFY/aiqyKaY0Jpafpar6xbTr+/wpThCnKbAhtMiWasvDALkm8E8xxZR/udBVtkrVNA/xmH7gmt7bxInidAW2lY4fbDq1WjwnWy0yBn92EVNM+ZeIxSJZ1WKdaamSryJDq5dsuvDocnGBuFSBbSXhg509rB7Vva1iPR63gbDQoQgEEsRiDRKrcHy8c4bPmmJK20ilZlmtlRaLJdNqlZ34d1d1deVGi6dlWWP1y86U/wc9iK617JRPuwAAAABJRU5ErkJggg==",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo4);

/***/ }),

/***/ "./src/components/logo/logo5.tsx":
/*!***************************************!*\
  !*** ./src/components/logo/logo5.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\logo\\logo5.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Logo5() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "61",
    height: "63",
    fill: "none",
    viewBox: "0 0 61 63",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "url(#pattern0)",
    d: "M0.84 0H60.84V62.222H0.84z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("pattern", {
    id: "pattern0",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("use", {
    transform: "matrix(.00432 0 0 .00417 -.019 0)",
    xlinkHref: "#image0_17_49998",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx("image", {
    id: "image0_17_49998",
    width: "240",
    height: "240",
    xlinkHref: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo5);

/***/ }),

/***/ "./src/components/logo/logo6.tsx":
/*!***************************************!*\
  !*** ./src/components/logo/logo6.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\logo\\logo6.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Logo6() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "60",
    height: "60",
    fill: "none",
    viewBox: "0 0 60 60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "url(#pattern0)",
    d: "M0 0H60V60H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("pattern", {
    id: "pattern0",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("use", {
    transform: "scale(.00417)",
    xlinkHref: "#image0_17_50003",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx("image", {
    id: "image0_17_50003",
    width: "240",
    height: "240",
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAHZaSURBVHgB7V0FfBTn9r0bdzeCu0uxQlugSqFC3fvq7au+uru+6nv196+7UeqUQguUUqB4obhrQoQIcd//Od/MJJtlk6xlN6Fz+psmWdZm5rvf9XMt4iOkvbehm1WsYyx1gcNErD3wEI9EsUqU1WKNs4glSEyYaCfAWq6xWC2FYpES/LlXxHLAEiBr6qRukcUatC3rit7rxQewSCsh/fvlEXV5kaOlznIehPN8nHCcmDDx98FOiNe8QGvNxxlXDZwjrQSvC3D6e5v6Wevkavx6hSm0Jkwo7IMsTIeGfirr8v47xYvwmgCnv7PpKHzJB60iE8WECRNNwPK+WKqfy7pikFdMbI8FmL6tpS7gPxDeM8SECRPOwWr5QALrHvFUI3skwGnvbLwT/u19pqlswoRbyLNYAl7cd0WfJ8RNuCXAHd5e39UaEPABQnETxIQJE57iVwmwXuGONnZZgDu+u/HYOqt8CV83QUyYMOEt7LJaAs7LvqLPEldeFODKkzu8u/mBWqvMMYXXhAmvo6vFWrc4/Z0tN7jyIqcFOO29TQ9brXWPiwkTJloNdVL7atq7mx5y9vlOCTCFV+qsj4gJEyZaH1bro0rmnECLPnDau5vvEGvdc2LChAkfI+CurCv7NCt7zQow0kTH4MdcMWHChD9QV1drHZdzTf9FTT2hSQFWBRpWywKrVTqKCRMm/ARLdnWQjMi7tG+Go39t2geus3xvCq8JE/6GNTW41vpxU//qUIB1B3qwmDBhwv+wytEd3l5/q6N/OsiEpuks1oD1iISFiwkTJtoELGIptAQHDc28pOdu28cP0sCWWsuTpvCaMNG2wH6Duuqag2qmG2ngju9sGlor1lViwoSJNglrQN3Y7MsHLDb+bqSBay1yq5gwYaLNIqAu8C7bv+s1cOpbG7tbAmS7mDBhom0jILR71uXdd6pfjccsgfKgmDBhou2jrvJ641dNgK1Wi8VqMRk1TJhoB0BE+uqBU9eF8HclwJ3e3jDZZNUwYaJ9gLKadyDgCP6uBLgmMPBcMWHCRPuBRc7iD8OENqlxTJhoT7DI2epHCnK/AWbu14SJdofAusDOAUFW6S4mTJhod6gNrB0TUGsxzWcTJtolrNZBARaRfmLChIn2B6v0DRCLxUwfHQIIsrTanDoTbRUBAd2CoIbTxES7x/DEUJncPVou6hMrrYH7F+fIl9uKxEQbAmQXAixJYm7e7QqXQEiTIxuPU57UJUoGJYZJa+HRw1MkwGadHKiqlYX7yqW4uk5M+A1BlrR3NlrFRLvBhb1j5YVxbcNo2lNSLSd9v0v2V9SKCb+gJEhMtBt0jgqWWw5LVIJz2S8ZjbRfILQjlKLU1jXsx4FQmYFOMH9HqOdZsJ2LhOAFwXgzRy51MN4rGOZaNcy2UakRcju+ywtHpMmlczPEhF8QZApwG0MgJKd/fIjEhBwseZf0jVNC/PbaAgnE33HB2nNCAzVpCwly7AtRQEMCLUo4Q/GcIPwdyb+DtL8bPxeP4c3DQwIbCT8FNwzPjcBrbD9nYrco+e6kLlJltUp+eY2U11glt7xWKurqpLSyTrYVVckve0vFROvANKHbEM7qGSN3Qqt1jQmRtowyaP6qWqsU12gWQCg2hMSwQKXFHeGbrUXy75X7leVgwquoMDVwGwC17R2HJcnVA+OlqKpO3libLxvyqw56HhVuUnjTgkLzubZOlHDV4JdKbM2OYkxVELwyaEqlJauseH6dlODvamvjvbyCz6mBNoVpbv9vTSE1LEhp6BT8jMV5ndErRs7GMaFjpDy6PEembjEj2d6EqYH9jDGp4fLyhA7KNF6ZUy6Xzs445IJCZ3SPkXtHJalzXLqvTG78PcvUxt5BhSnAfgK17q3DEuXaQQlK6/7nzzx5a32+1B2id6NTZLA63wv7xkLr18kra/LlpdV5YsIjmALsD4xNC5f/HJUm3eDrLskqk7sXZsumA1Xyd8CkTlHy2BEpShtvyKuUS+dkmNrYfZgC7EtQ694yNFGuG5wgNVC1L6/Ol+f+3C9/N9A3vhs+/+Xw+emvvwZt/OzKv9918AJMAW4NRCPaNC49Qg6Hpo1lTkZEBZf4GDXPX/sr5Jq5mbLrb655BseHyjsndFTXhFr4rBl7TG3sGkwB9jYGJ4bJO8elq0VpDwZyH12a67GvG4kob0f4lIxIRyMvGwWNFmQTma6scf7NQ4M8q6MtrKyVjJIaWVtQKe6An/7giGS5bmiC+vs1+MUv/ZVvlmg6B1OAvQkK7S+ndUW6xyJfbyuS3vBxD4fWJX7dWyr3Lsp2WeuO6xAh/RNCZTSi1QPxMyU8SCKCnSiv8jEoxL9nlsp/VuW5pUV57aZN7ixdojVtfB0slBWwVEw0C1OAvYl/j02Ry/rHy9KscukHYaPPuwhBqhdW5qmfzuLw1DC5oHesTO4WU1+RxRxvZlmN7EKwK6O8RoqRatqB30v1jBNzu5V4DouyQqGVAz1sL6yFuVBb2/LSCMQHDksKk/EdI6R3XKh67BVo0VcgyMW1ri8t5sP/NSReggMD5NNNB+TF1XmmWd00TAH2FihoX53UWQYlaB1BG/Mq5AGYywv3OS+4xH3Dk+QmpFuIpRD6mbtLZXVuuawvrIS52rbNysNTwuXBkckyAr6/Jz4ttfH/kBsfAauDmv2TTYXy0YZC2V9lNk3YwRRgTxAAD25MWhg0RqJM6BSpHmNO9/kV++WtDQXiKu4anohcaZLS4E+uyJWl2eUHPYdliz1jQ5Q53RnmZgzM6bhwLVDGemVGeEPxWBPFWqou2hZlTjrjVTVWrcILmrkU2p7FJpsLqmQtNqq1+Y393xsRZb9/VLLHganzesXK7bgmFOh9pdUydXORfLLlgKmRG2AKsDvoEBEo/+gXL5f1i5P4ME14aCJ/DC0xa3eJlLlhOnKRLj6nu+yFxhk7bftBQa7JnaPwmXEyElopOqR5H5hBrEoIWTXepMzFaBnFO1zvTgrUu5NgkTdZvklQS87cWSxvrC+oF65zIXwvjU+TLRDyU37cpTY2d2EryMQXEOLXkXraXPj3yJ03A1OAnQU135Tu0XJ+31g5Ik0LTDEC+x6E9oP1hZJdUSOe4Lkj0uTifrFy07x9Mm17Q73w6d2i5ekjU+vTUdwo1iK48we09J7iailiYwEENh/fxdl6ZU8RDP+6OwJ0KdD8p3aPkmOwuVC4MiC89yNQN0vvPmLl1V1wCd5emy8Pwp3wFOdAkK8fFK/iC8RmRL5fw3v/nlEm+8o8u/7tFKYAtwT6dcfBPL50QLzycyug2ZZlV6jgyhKYuLVeEBrqtuXn9VTvNXqqNiCSn/X44alybu8Ypb3eWlcg70HD5VW2TT+QWvK+kUmSFBYkF8zaI/N13/8rRJbHIpJ+2vTdsiynXLyB4Qia8X6c0jVKReTrcN2+2VYss3aVyNyMEpj4f5slbQqwI1B4zoS2PbVnTL223QZz7dsdxfLmunyPzEFHGI8F/gUW+lPLcuSVNQUqz/vlpM5yGDaP36DNroVWLmwHAZzu8MlnTOmm/O9jvt6JqHm1jMX1+xrBvbl7SuSiX7zb+J8C9+WYTlFyQZ8YOVy/T/nwzX/LKJWpMLO5wZbXHtLL22wntMURiJ6e2SNGTu2hpW+KIahfbSmST7EYXEkDuQpqWeL7nSXqJwNZFN43/8qXh5d7bnr6Cjtg0t/xe5a8fXy63DokQe5cnA1Tv0wWQRuPgYDxmnpz88uBsH6x9YA6esKkP6FzpFwEF+cMbLw8KMxL4GrM3FMs8/aU4fmHnpltamDg2PRIuWM4hUZLAS3JLpOfIEyfQXC9rW0dYSXMZzbJH/X1DumPXOrcM7sp/27CNzulPYJmMyvSRk7dpq7fP/rEyrNHpcl9f2SrmEFroycsgcldo+W0HtEyKKmB6I+b8O/QzrP3lB4UOW+nMDUwe1VfP6aDWmjvws/8aluRrPRhBdDI5HDpEBkkH+oL+ya9pPDyOe2XZ+on+KJHwC04G1rwXZzXdPz99BFWmYhgly8EeBssgVcR3OLB4BpjGNTOx+Lz6RLdPSJZ8sprZT6EeQ6OBQiCZbdT7fy3FuBw5EkeGp2s0iBnzNjtl/wiG/qJmVjk6ZHByvSbjVTU9qL2m+vkJvj4mBQZnhwGARYpQODtr7xKGZ4SLr4G7+n7GwvVEYHYwqiUCBU5H98xUrGF8CBo8azMrZBf4Kuvyq1U/nt7wN9agFlfnAbt9+DiHL8VBxzTJVLlfFmxdb7uC28+UKX88faM/eU10MKR9X8vyCyVYRDoUTiW5fqnxpk0Qr/he/Ag+sSFyJCkcDm5W5QMg8l/Pkz983Vi/LX5FbIJZvYMbKzbD1TLxsK2aXL/rQU4LVIrDNjix4IAll6uQLSUrI6TkPMlrh+coI5DCSt0oR2c5D8BtgcLQXhMQxCMGA5hHpoUKsd3iZIhiaEyqFeYnNVLE2hq6O0wzZkV2ADB/hNuVlUboE8xo9AiqmLJH+Cuz8jsX/nagp67u1gtkHNh1vXVixVaA9Qo03cUyb/0muvWBHO2jCms0oV2YCtOj/AUK/eXq+O9jZqfPhABxaH4/qM7hMth+MnpFzwMMCimhBnnxmISf0S5TQGWxmTovsSAeE1If8/UUlRvb9Q0wZWD4pstXfQUuZU18tnWIrkVkffWximIBFOAs2BS5yGtM05vr2wPWAezmcenuoZOh7tFi4m+Pd2B4QhAGnUCzCK8t6FAnlq+X3zZcvL3DmLpJcW1Vv8I8Ejdz91tE7A6r3esipyyJe+jTQfE2/jplC6N/v4OAacnV3ifziYMGxDTYd2iGziuF8L3nKLn2H2RnvM2MktrcJTIz3tK6h/rAy19ONKP18LluWFIoiSGBcmtC7LEV/hbC7Ch5ar8VHrXHxo4t6xGNtgESC7RgygUXl8E1ihIrfU5u4qq5MgODRp3h07c1ysmxKeputbEZtw7Hh9vPqAICc7FBvzw0hyfbVB/bwHWrVR/xSIGI1CyxKY++CTkKYcjMr4MvlXfmGBoYse3h91Ctga20TnU8Lv2R1CgHNTYH27H5pEQHthqEW92VvWEhkqPCFZpmVV52kY1RPeLDyVwCZG0nvlvWlGsXfcFTA0s4rMuHltQC/Hz2U9r4PReWhR6FPyqjyb5xlc8GZHvk/Xod2thYEKIEuB1evVT37i2PTrGXfyEIORjVSlyctdoU4B9AUM7+UWA47VFvCqnQYAfX7ZfZuwoUZQ43oItNU6lbmrQbOd831vm+8ZXyyjVorM01Un90ye+9SLs/gTNZhbhnIksQh9s0JuLWj89+bcWYIOR0R8EiL31AWbZ5VqXEQNXbFr3BdbBlN2ExTU23TfFImOQhrlzQbZi89iEvGu/Q1SAiU/gC1OAz+odI/9e0fpc139rAQ62tF6qpiWQDofYqgewbhgcr3pqfYFFUWWqdNNXn0d8Cf+QedP1BZWqmKO9RqJbAs+R53VJvzh5ZkXrp5T+5gIsfkPv2BCVf87RB5kNSAhVN/6wT7dKa2LpuT0a/f05ot33/5EtrYVRCJB9PqmznNY9Wi3uvcVaxJuBraKqQ6Ij6CC8j3zwv4YmqhbK1mxDJdqtADPqym6XLjA9OyJimxoWqDiTo3XqGSbWVyHS+cKfjWlJufOzOuh05CMnt3Lwpjn0QiBnpe7/8lw48Z6N6GU+Dom7w5vlCn7LLFPR6Ck9ouVubBR7dH+YpYpttb7YU5ATnAJ8Wb9YU4BtQV6qTkitqLElWPCn94yp/zcGR7KhzfiTjfgcb8JwPsP6NyNY0wOvO65LlByZHlnPtewvE46mexI2m+W6ABs+YRw2n9sPS6x/Dg/uR0ZqKKQFkyHCIKNDkon+faADMrrEiCCeeP3fQ5LD6j+ztVBYWYP7Fqaqltbkammz3odoJJqgn08Sg0mIRseEZLfqOmvTAszAzvCkUJUbHRwfJsNTwhpFaHlhXlqVJx9sLFRUp/a4sn+8PHZ4sqJ0MfAn8q4/7CyROfABLxsYJ5cPiBdfo5vu/+4o1gQpSWe2ZN3t0CTv1gqToVJFous0WtgsaMAiG37p1vjMpjCxS6Sa3EAkRxza3tvnCGZReVyBNfhiK45RbVNXsRsE9oSuUXIUBHaMjaYkSmASc9QG86br86pkIf2pFiqI3oEvkldeI/87Nl39/QKCCs/bXEyadkQCPmeP+A5dYjQBztbNSRbEH/f1TiVkLZmzVTYCWQmBrLa6lwZjqeOJPmb8ID8VN11S3fSKPXQ1MPH9jmJ5YmyqnAEtfMgLMAnSH4GmvHpggzZcrXewrIPAzocf1dxMIQo6X3sqLlYe8psfri+U73YWq3/7Fj9Xf7ldkcbdPiJJduN9pm7TaFtzyjUBIu3Kah9SrHTVNfAapHPU1Hq7wJIv8MTiHHlgTIr4Eg8tyZEt66okB3loYwzLoQrm3EmAyFExR7RiMMvvAkzhe/vodBnXKVINu+ak+lUQWmf9BjIT/jClqwpmUdv2hj/JC3Y6zORHluXILkQ9SbbGCQFfn9RFHhuTKjP3lKj3/1NvcSN1LPN3vgKDbURpdW29lcEG8nU+2EQmd4lWN720Vru+83Atsn1AVXsSPpeteKxQWo37S27nRDj4bZUm1xsgX/g1AxPk4dHJcuL3u6Q14HcBfubwVCW8PNnHluco1gRXwGgyhZfRZnbwpMC3YlCGAaxJ3aIOikDzMGpVtyGYsxZCfCKi0Z1X+W6IlpED3lFULYMSNU30/bZieWVNvrQ2epwcXE9kQHy08YDMsOmuaS10nhyMyHOYoszN1UnYY0MDDlkB7hcTIif3jFa0TeGBrTdN0q9zKi+EIJ3eO0a1tN2zONtl4SVY5UO8CuGl2UIhvOX3LJnw1Q5Zgkggp/gZx14I7HoyKVQ3fM7Lf+XXDyYjvWuSnoZqTZDGhz4spyoE61FiX5Gqsd3NH91X7HnmHOMJiG3s0XPBPWMOTT+Y6+kj5L5pPm+EVXXp7NYjKPSbBk6DGXk3fFIKnLv9qGMR7CJ96HJElivsgj/klTr9p5ZDUz/sKpbH4A9eOyRBXhrXQQWWPkRU+8XV+VInrbPQI7EjZ+paKFk3py/tGycndW79vHQnbB6r9zeY6jcMTVAtcK2NhFBNVxyODfePfVoqKTG89TdLf4Du2Tvr82E6p8izK/fXZxtaA34TYM4Zorl7y/x9Lpuu3OFuG5ao/IsD0KzXz9sn7uDMHtEyXp8qOAPBrsuQUkrFAr8TGwtnIF31S4b8VeB9v5Rms1HEEanXY/uSsbHaZmPyNVPkZGxSb6/TKGvaSk00g6i47ci5w9wNbrypkPQhFBsuN5tUrFdaEczXd8DvYXh+n9hQ+XJ7kXLJWA57aX8tEBsbor3P1lZuaPCbAF81KB7arlq+2Frk0uuuQbT5dpgmFGIGfv45x/UNIBmBr88ndpIBDvKfrBEuhV92KoR71hnd5LGlOfK/td5rDaNPxOIKIwW2BZbCWTN2i69RUFHnt881fODEMPc1MKltmFeODQ6QKAhUHNZDZFCABOsbImteoiGMYUGWRsUsLHZhTzQfD/BSLfysvVoMIbe8TmUVuB4Zdf4EltzO4taNq/hFgMemhasT/Wij6yTfdw9PUoGPu3/fJz/uLnUrB/rMEWkOhZdvNamrRlq2D6Z0ByyIh2AGcYAWg2TeQIcILYCUBZ93RFI4fO8u4g/M21sqR3eKFF9jzu4SuRg+IXPBXaPc84G5dmac2kWCAxsLIO9feU2dMmFt1wUH0lXA7y+2K/Yx+KyawmLEUMgTXY5YRUcSxHeOqp+MSKyGFTU0pWEdrdPJCTmQ/KXVrR+QJPwiwMd21BbON9tc074sLaQwzYTf+u0u9yKnfWJDZDKi0+Q3IklZI2A9PIJg2gAI1jk2ZZoMRmzOr1L+sqdIjtS0TikWRZheGsl5t4Zf6Au8OD6t/vffM0vlq62en5czYMxjiL5xUsjSotxbfjRVKbwXz9qrYh3MiJUjJVdSY3VpQ990cW9lyVFjcm3x9wgbxhK6Oa/D+vr5tK5qlOw0WIvl+DDGMJjhsHc/svTCnIsQz0iAVbAeASzGVObta716aL8I8NBk7cSXZLu2aA2KmTIPJs711/0uR2XFfKgAgnUz/PLnEXz4R584xZLBHf/5cWny275Sj+taw3RzjmZkJ31g9ffbi2VuRqn4CrYCvPNAtRoO5guMRQCLKby4UE1oRiSHqUYOV28nc/2M4s/x8JotxuY1ESnE47/d2ei+2hfXREBgB6eHybj0BouFJvKPiJuwQrBA7yijZUgi+HEdIuSaQQ283q8hQ/JEK/UG+0WA0yMCZW1epcu9kkbENq/c/dxhnp6uCWqCtvWAXifMBfbUylx13DQ4Ue4blSTXwv9+1kNTurOeg+XndI/Vfi+rOfT6Yh1hq06gPxD+604Ed9iUkhoe7PIYkzKdgeG8XjHiCep0H/ifCIbuRqSY8QlqYGOdsRXy0VHJkgBfnQJeAgFN13P4tuY3N6ULEPT8ERvxndj88/H9SBncCe7SnSMT5Z+DE+TlNfmt0tTgcwHmRSLR2fxM13dPIx9e5MGs3AVZ5epCxjsIoGyHOfbL7oNN81fW5MnJXSPlStzo/0O00ZMbkapbEVnQwCN1E2zqiZ3FXyI8Du6MrUZuTaTrDQzsfc7Wy1gj3WjKZgCQgakXx3cQb+C2JrqxRiFNOSq1wUymic1uN6YA95TUqI0nFyYyK+gWwQWyJXYncQEPukzPH5UmJyDe8NV277sqPhfgJH13+yvX/fTMAQ93stuwS759fEf1eyneaxd235l7SuWNtflNCtIPMJceGB3u8Y0I0wMvubjZ3IZau1+0KWwsqFJBrG4xwTh8x8xBMH20Zr/mPlHbbTngWqrl9TUF8sOOEqG7GgzHJ0SPPIfaWVUhNp1rttxghMEP9uax6UrQHlnSMIeZ5jkDV7Y+dSHuV7GLBTCjEeDqq7ts0cGtUzPlcwFO1BP6FXWuC2Gwl1gkf4SWfWBRtvxzSILydwYkhsGc0pgif9ldLNtZYomgle3sGw7ffgAR6RHQmp4IsGGelVZZJVoPoPgDz8E16BHtnyziKs6C0n9PcaOYg9fMW9eNpnwq7on9RhqNTSE6JKje6uuBtRGJ+8VgF6035ozphjFYxWBoOP8Nm0ky3ENu0n3jwxr1nc/LPESaGYwoX60bSjTGi7vYO0hhzYAgc7wnh1nx56AeYYo5gmDqYU1ehexCkOcv/FyHXZq+11APZ/vE6+fAkZsX9vGt5rPFCyvzVADHHyjBtWVPNmFoT1cwDv7nfSOTPGISYT44JJACF6wEzQhaRUNrc2N1d7QNTWwqaq7zdxDB/hWBtmW55a3W1O+3Qo4SN/xYo5m/1smwJXdH3ughCJrsg9/y2LJc1cBggI99s6NYHQS18UD4Z6TcGYEABosFSHVztjQImtHL6y6isHtz3fXUGSneRHDjxVWt1y9qj3eP6yhjbOYTvYHPf8mHnz/njO6K9/oDfQ5UpwjXrycFbBgsIZXvhcBQEEN0Vcn0UoANYX+1vlaqoDH4K0kNKh1YcNSs2/WSRyoXVsgxTcS89Z/YwJlKdATmfN+ASZ9fWYMotCakjyDwxcBVFKxNKz4rPjjw0BPgGjd2T2NXrHTSF5mJ/F1nPVUzGMfhWDgnfLezSfPLMM1m2gSy2PLGIVYDEkPk/N5xymdkKqjCg92fbY899I2AYzcLfMhra3zvaF3zsbjBl5+/Cr7vRFg8RiVax2j3N8T/wA14Y73rxUC26Azzd+l5PVU9/W0LsqRYvxbHIWX08aRO8j1y/5y4cHm/ONkEX/3y2RlyDP7tWJwDp0gy58th4WSg/Eqva+D6OQbxBUanz9PrzFlHcPHsvV53mdpEQ39/aKPIFsjMM8saNHaFExqYFVWG8Bpg+9qFvWLlmVXO5+SY2/tlbwkOrb71OuyspINx90bE4TwpRD11RgoG9UYm+W7kZoxeo2tshrxGxmgVjYer4bnMsrDcsKnpje6YsEE6b5cRzGul2I7TIMkec/KndI9WB9N72w5USpT+xYzrEwwNT7L2yRBcfv9N+RXyxRarnNRFW2evTuigApw3zs+SxfDxJ3yzU8VUGDMx8t/seBs/bYdHm7892oQA/wdh9mEtFNXf/HtDw4IzhRxGMbk93PG5DOzX88+8Me4KcDRM6DKYUx30lMqTY33LimGgRG+ptNUSvgQ3MPqLqR5wY53VM1ZGw6oK1CdFGUT9ju4xN6awAK0GOsxu17ClbuImb1thpUznw/Q/8LymUleMj7CyjB9tGIhsZODBQhlWad08LFFGINay0IuVWX4TYPuhW/QRSEFijx7RIYrpnmhJ9mZO6arMGHaG/MQ2wcNTGt0cYs5u95vX95RoPpJRDukOqOV4rjSd9//Z+sz9TYEtbhytgqCplHmxpz7C5tIYfqlix7Q0Fi7OCiaLaFKo+0twcHKYOuxBi4G1MfR76fM6shSYJiKnGF0Ibsb0exm4pAltZDnKdf4uBhyL9Q2vrLpW9XHT0i7G44X4ha8lPVNNE9kRrkGrrnQ6RnlX5PwmwKF20shZPY4aBuiLGAIcFti0BJMTy2BY7BgZLE8iYHX17Ex5fnyqMnEoNM9DYBbluF9znFmirfTUMPcvmzaRoFau7B+nUbz6CT/vKvHZKBdHmLunRGng6FDXbehfkLMf8NGWRo9V6gLia17t5vAOcswk72MjRCS0PisIvV3z7vMVZJTBhbvh/DQ1CoUCehtyutxJSZj2z0HxclK3KMWDNXrqdmWu0vz1NH9sVNq4m5Q3mjG4WQ3DRhMMf3i7j8nNaboa5Pe8bjTtskp9l4umD94DMY9hCAxSA/eLc30J8j4WVDu+l7zGsSGN+3oZsEvAphsf2rhZgfcxyiZlFBOktSYauV+mlPjvRtltdGCAql/gR7P+mQSJm/Mq5fescslwcA2Z7rLitX/AZF6E53yyudDr0WifC3BRlftCFNSEBiYHVhyCQQ/+tk+mwYSm38LHfj+zm9y3OFt+zyxXNDZEoTKH3LuIBn9zSqR7l81o3jfWHvuZucn4Ep9N7NSojfBjLCpvtUo6A6NRgNF8Bo9aaulzhNuHJsp5fTW/nZOSKaBRHuRumwPN8RIIHXnH03VLjrcxwm4TX7C3VG5blH1QbKQSr/t+Z7GsguXXGlRGPhdgQwvaatNQJy+8YXbX2WjSI1K0CN/07UVKeAmayhRg5o1fOKpx0GFpVpmcpgsN/bKJnSKkL3K/vPn7saB2F1crJsvtONgkPgYRSNLVHtclWgU4tO8ubiHC3yHXNgCj5S4tPFi15hF0SVzhBOMGyo1gc0Gl7NdJ8Wp1n7RYf8/6v2uMvzVBpC9r68fycU7yuHlYgkzpESPn/LhH1hdUqOfZWmzUxpsv6a1iK+Rc4/plmST7g0/AGuJr553RTe79I1um6iQVfyAaPRHZkJdtAl8kfH8ASqXUS8LsNycsNsT9xWybQ37x6A7q78eWHxwQ2lZYJTNwwY2618EJYXIiLqgxSoSUPDFNfA/D1DH+fT2S+d9vh8aEP+4up7GhIYwgOhehpx01riLBronDGD/ja7BgZvoObaGnIPLlDqnfxb9keC2vOjejTAlhekyQLMg+2EIL0a2/EzpHyScndJQfEUP4a3+FTEOEmcdrf+Wr+voXkFFZu79S1sM1unROhrrHgxNDZSSni2DdnN8nVuXAX/BS8YzffOAYDwTYMEXIaskL9ObaAoc3chsu4lM2fZj8zNmJ3Q6qqsmH5mUFT7QNI6Xx/RjRnrrpgKzVfVV278R5QAWjfX/tGvC7e6ujxlUozQMNFQerIM7H3FT83OTwQNWRRSSpoKDrsQD2h9OoCdPLIoMsFocpJKNsklHxUAf/Th+3o16jfi5SU8x8hAfqrwkKUD6xkZbkBngshJgHsY+84/B/yU/O5/C9OsBCWK+vF6M4iH3CtDQ3X9xLBiV6L+/vcwFmYUQ17JskDyOwyRC2W6BJeXFeXNVYSPs4oCvlDTkKmiZc30m5C/Ki8wYl6N+FPhlNG3Ynkeyd+ULF0oCgSPfoYDkBSfsILABPA51hWBFsSzRGpFAjqw6YFlxz9VyVItFeY2xk7kRe18M66fOJZ6NMaUbi0tQLhxqs1sy+HKEPWwvWj256Oam7abnWoCM6Mj1CHc6C5jwDsjTVqZG/3nagSaIB6i6ut/BA7/nqfjGh8yrqGjXUuxp8oEl8DSLN1GBktSywiewlYzfnpAaCxfqbLuol+dg0mFqy5VDixMKBMG1O7x4t320rljc3aMR1fM/3j09Xwksz2lGhQ62HEnxC50g5P8K3xRO2Q87I0bwR/iOJ/ShwFL4gXbjqJxxaGj/eGrhmbqb66eqg9d/2lqkosKOsAjc15n6ZA1ZzoxxsirSAuIb4XEebn/YeWp64TN8wK6ob/nYVw6Bxj+kcIef11O75Dzu81xfsFwHmhbfNpbq6QOad1b3+d5qgjsxQ3sRZ8H+Za+Wi3AiNs4mjS3ADbh6epKhdHz1cq4IajAv8OXZOCuxxHSNkAHxlRmYZDBsPrT1KLzXcVlClfGB2L1HRuJsQMKLQ5MJyZPobJY28LkGWhoKIlsaL1r/OorW6GX6brVnJxRQH85V5SRZB7C+vUUO3m1qYVr0hgNdT0/zNL2IGj6pr+Ny6JoevjYZ1w/rhCP37pbhojc3YXayOtgCa7b1ig6EggqB5D66wYvmkEWnn+mLN9CdbvEdh5BcB5pSEaA/8SBaLH2imm4mLlBHCxxHYshcQQ5sauz41EjVziN0mskgvd5uPn/NtSt+O7qylYJhSyqlwr4TJWNAskvd1Q//a83s2+vsT+PdPr/RtRdi5vWKVAHfSGzriXIiH0KXpAXcmNDDgIHOd9zTM8F31fl170Hzla3nPQx36ywFqJjM3TW6Yyn8O0HxnYyPkWuH958iUVJuUItfa01hzX28/mKyRBHfPrMiVn/d4l/vMLwJcCBMmOcD9j35ocU6z0ceToSEZEWRDA4NQjsDihR0HqqR7bIjM3Vki+50UxhLdXNdaGz2rQRyo5iL5tnLIKKAxNrDjukS6zQ7pLoyAUG89VuFKPfQgRK/9RcVLw8N2T+Df30NYWW7JlXA6XLbXkBUh15mRW3+F0eZhGofWByd0UlbgM9gwf9rtnXlUfhFgdxP4zuJ3Xaudhgtq35VkLJ6njkxTSXZiIExJo6Hb+Pf3sAEYWv6GXzNlmT7JsEB/zJOUboS+Ch473D+NDERMiPYd2PPMwx9gJRRrot0Z9k1ea1pJhr/rqJ6b5j7vMW+ZqqCy83kMf5mugZE//mpSZ+ls0/NN9+GLjQfkvqU5ynI6CuuWwdMj4VrxNpJZlMMA2FP+BrIhn03sqLIcq7FeZuM7komDR28oihuGJKiJJO9ibU35Ybdq9PcUfhFgox2Q7BTsRfV2kMTI4Y7QCck262waRF5Z43xjhp0mt/13o+zPtrPJCGDFq8fcy0EuQ4LfHVI/b2F/ZZ2syquUYZ9uE3/jhyld3Kotn7e3xONeYEdYlF0m58XEypNLc6ULTPV/9I+T2PCAerdnAZTDgp/KpBv+7ZFRKXJityh5HT79vaOqZe7uUgmw6mWXdu2x5P1iAQjdJvrFx8MVa7cCnKszErLuVBNgTfPdMjRBCrEjc5I7dz7uzj0dMGBcNTDOpZrSW3HhVu6vEFdBf/nFcY0ZG4sbmdDugUGbBD82MiTA+Dk7MEa6esgu4inWYRMpwj2OcSMecnSnKLV+vA3DWjsMVpkui4qZ8mNoTXYSRWKdhlg07ivb0Sx83aUDtHX51LJc+Wan4yDbGn0dpkZ65/77ZRWV6towWRF8a48xOHH3iGSnXs8KKmdAU53m2fUwXVblui7Awxy0qpXoudcwD3J5w7Eghqf6dqiYPfw1WsUWs+AH5mPBu1PZxu/emt//pO4NfGGcp8yjGJZLXmWN7IYCIk9aPmxz+r9soOEEhuVYY83FZkYmh6lqLyK71DvjZP0iwBkl2pdnAGkldmEW9NPkMCqc6F+mRwSriXCM/jFUvx0pnE46KfolP+9VaSFHuBf+xxm9Y+SZ5bny2eYi+fTEjnIyfOGTvUzgFh/qgRMsmgl416Ic8Qdspw5wNvOTK3zfl0wzsi/ck+U5FSq6y8KOaidyrOzqYYeZL6DqqatappOlC8BzYFVb7/QIpTQ4loU+Psnrx8BfZpurwUVOSqWPN3snleQXAc6pJ/XWhMDZetahukZktVRTr7lnSTaS5lFycb84eXdjoTyPKCCJ3N5bXyDTdx4c+SPdCYMOr67OV+wJnWAmHQ7tyDEaDy/JURMk2DVk0M50jzZSH66bb2U2UZSqZs7Bl2CHV+co3y8D8nHTxzS2QRbgODuhwW02FDuqWO1vrX3QtnWQB2v1STdrtBeGQolQoTBek4jXRPC5Fi2dFOzAGttZVC3nztyj3n9YUmi9cuJ8pXsWZbXvZoa9ugZ2NfpomK/NdS/RB3l5dZ48dHiy8mHX5WmmMwNZjnKufXQ/8MK+sQcV+l81MF4Vc+wpCTwodRHthv9l67dzOsXtTUwEUDW9PAKNYg69KKPZMkW9gkq0/GagkxVUrWGduAKjLtzZOFYSrjvvCwUs3CZ/bEsHy2KWmGBNyAhHg8vcAQOYfH/eR47ooeDaCi+nM3y77YDi1mKemx/3BHK/H2wqlBsGxcvZyH+f3StGDocyeBZWzzQXh/s5gl8EuFy/aR0i3AuiJIQ1fyOm7ypWApzYjJAxivjgyOR6X4e77vvQ0juwc9Kc6x0fIsfgJrw0rkP9vKSFGaWKsOz24UnN1vw2BUYy6UeRhYK0sk1RlXoDtrQyRq21UUGlCuyLq+W+hVnibxjBPOaEtxe1rFnZKEBuKUcwWgNtWwht/yZFDilw2ExxQB9ByueQKcPYW9lqeGLXaFVxdxPShzugbKaf2kU+hcl7+4Is2XtZH7VRzNldIZ9Dm1KLX4ENhR1dR8CaS8C9zddbHElrvF20ZoZ7FufIa0gznYH3vnpwvDw5NlUNRyuv9UwT+0WAM/VUTZSLjbVleg420MkAkiMNz534X0MS5frBCYp1kQRj/0HS3ZF25s59x/BE+ddQbcGwfvgj7KYUYHvGS2dRiAXC3fv2hdnKjDbqk5sqO7SFq89vCfF+7k/m4p2sz2OOdXJCQ4Qe/Sd/2htrCp3yUV1FDASPAsx6eINpgwP5eM8Nq+YM/DsPCucnGwpVI8O1WFO284M3242M4XNfxveORlrqRqxBMpJ66kb5LZexB7vtMBfpVPP1bbKl4vdS/Xn2cs6ChXeOT5cuuBFMtJPovblSRgrHv2Hq5GOHfmRMikyCqfneRq1mum+ce8OpiVgsEPreBpiOCLM5J9VAYPPdQ+zUvX1NdIRdY4jB0kjYlwsa5YBfQqP810+tjAZ+hgZ6Y71WKefs1A3jUnRFQPOkrpGNmDi4LqJwfuHwPcJ0P7aRmY0Xq/EoNhc3SpVUOjavnzuqIYXItNXSc6MOeg6F+p5RjbMnBv9aU6lON6YKNQm/CTAnJIxIcS2VUqObG4kt5A0PVB9cljM+LRLJ9hTVHPDM8v3y8po8p9sCuchKoe6eG5cqX07upF5HTieNoM61u8E68M5Jwa1qPjuDn/WAHt2DAqRG6skG6piDZ7FNg+nJCXwVVu9qufN6aTXpuXoJVayLMYUTsZme6ITvrjqOahrOhTBM64paayMGSsVSWVtX//2oHW03eGudVt1VYmOWs3GDlgTJI7IQnCVlU2ZZ8ymi+DDv5a/9JsAcL0lfwhUhMOqVO7QQ/DLcCttqmMk9o1W+7qq5mbLMDWbKj7cUSjZe/wKEOE5PIY3FBjRrr2sVVYX6jfc0jVRb17itkUPC2FWVjMUxICEE7oFF0qGlGCUNhXYhcb4jBkjSBMWGtmxNHMC15wJlP/daBAbn47wN/83oS6608eeoKYNsrAr7RntDgA2Sc2ersdbmV8ols/ZKqf5Z2iRBq5q3ZOtOqOmCONwlUT8O8Q/meEm9620Y7ld+hee5YL8JcI6+SyWHOT83plAPDjjLaMk1M1ani+FuynyzJz7HLxklcvL0SvntzG4SDoG4Bj6PqwKcq583ScY9Td/QEjkWpt0kBEbiHAhnpZobFCCOPI6zezdP5UN+MAb0OIWPhTfWAApZoJoiwTp2Z4tpWoJxPZwl3Oda+SWj9ctQc+A2pYR7TzxUWWafOFWT3QsZCGZFvJFK8psAbz+gCVIfnMy2IueEKk8XYGdjXxyixaZ+bwivAb7H5oIqlZNm5JFF7a4w7Rt14Bww9lW6d7pqMotrZAOCKAy6ROtDqOnTcdE0FS5oidaFjCm2rCnbYSJuhtvz+eYiKSKripVjYQKdErxgVXoYpHy/bti0uPEo6hloogdGaq5E50jvlXWqEaChgfX+PwssOAI0SveHl+YcXDEVhQ15MPK1XXTtSJL3DghIcQ4SXQxGrSlv5dWMYFtdDh6SLHE+Np4XxqepWoOZO12vDHQEvwnwmnztBHojGPTTbudfx86RZCfTT/Q1vCm8xDk9YpTw8gaH4aa/NC5Npkzf43QRglEH7gkYpOPn0xJh7XgCBCk9unF3FymD5meWKX8sE5FUlu5x89iJyGh2RQOTY5Xu84Xo/bUM/rBONw0CR1eFxQt9scmykmhSHLR9Fy2QQ57tOXADyHnMslIKO6PanL4YgTfqjzQcg0OkLWqubnywHsjs5MSQM5qeVw2Ik1i8J92jTvieMaGBeu7XoqrjnK1Rv+23ffKZnofl+7IyzFFm4dNJncSb4DqkME/qFiU3woJ7dU2+eAK/CbBBL9oj1rVobg6CHmEtFCik6aYPN8lzf/Ke8JLC9gUILEtB70cO9f0TOynW/W9P6ez0JvEhotgrsiskFWkJbjBq0BcHRYdrFUKMlMbpKRUuSpaUJoU3XpiMpEbq2oTitzirHCmLSlmTWymroIkpvK77fg2Bvy1FjstUqdUOg+ZmD/FxMN2bm6tE05ibFSuS+JObh+Icgzm+T/+3bNxL8i0bI0qaA4Xr65O6KO1lC64jg/ObVEG21LIMTBn5XvrE+QjYBeCyPDA6SR5BHtYQ4PGwhhSV0vpCtSFxRMpxnaNUcQ9ztRtg7pLlJJ58a9DKdCEY3CrE+5Fx0pmUIk3/V1fnyevIBTMuseqCnjCl3c9kGPCbANMcZpCgn4uMiLVibbGT496RWlj/6eW5srPYO8LLmcHvT+ykFsQ52BSMOTi8McYO7owQezJdXps6EKA0L6vRuI1tK65qMpoeqU8k6BARqAJa9GfJAMmumogmWDC49ilo+6C1D+AekXWE2pb+MGcEzc0sVcf9kqOEmQUpFMb88jqV4+bc54JWmIV7fKfIg4SX+BVWAK/E+RA29ge/uLplutbR+rRAWhlkxjRcUQaVliDAyWIOCiwF+M/ccgTsylQAkD4xH6cAMyXJzSCqiZp4WkhleOOPNxbKb9hYVuB9DXpjg+C/qj37wMQ6RBTHpoW7NG+XiyutmSj0mTBxz0WAhkPMXvbQPDFAv4gN/sQ/ft6rBoOl6FFTEn1vK6yW+0YlOS3E7oKaRBGZVzZOk/G79IoJlu4QJk7W48zbbrBsWjJfXQEDYmwgofakoLBElQX7f+Z5x5drCQlNFHpc0DdOJn23S47sGCF3IjU3e1dJPQVwUzCi5cG6Jcd7SF/8tuHaYYsHkHqUUQe/h0E7zPVI4ofNiOnkYNNbtb9SrevdJVXKBdlk13TD1xlWy19euHZ+FeA1+8tVt0Z/pD3+3O8cL3ABzJahSUEOhV4l1XEjeFHvXeydTh++5zQIJs2e86B5V+kXvdwmr/gKcsql2LWfgFm25NweauI9zbGmyMo5iE2j09GAUJMae0mtyjNiq9/POBxtBNy96ZOOxsZH7q8jEWRJslvcFLYsaE0G1+hvZcLMZFSVZiQ3APrNhdCSDMjYpn4Y+KKGpmnP4BeL+amtSXkzAN+3e1SI5gt3aSho+B3amKye5A1rzeaMiGaq79gUc+XsDDWd8t2JHeX4b3e6lJ/nc0/6YbdiKO0ZE6LOn7EWltluhQB+u6NIReUZOiiGsObiWmbgmrYU96iqqVYu0BAEx64eEC/puJZUBgG4z7xW1Myewq8CPC+jTK4fkoicW5TTAswRn4EBkQ6HbN86LLGeatYbi8k2uPH40hxZkN2QP7YtDCDY+UQf7BMEPW7B97h5aKIy77L0mcK2xVRGDrQpkPXyUSyg2+Fnf7GlSEanhClO6yORmxwBAbLVqjzPL7aWKK6l7bAE/kJwcF+Ze4GyMgi30vDNdLqxRW54EvuZQ2E9RaquLR7EJviKr6/Nl1/3lEqum4R/TSG5iZQOz5/dYhTCR5bmymNjUuTV8R3kEgh0UzAC57V1jd/nFRuLLQmmMRv5afYu2VeuYhYqco511x+bGd2ZhDAtCh+uP56m+8JxwYEOc+7MDgToWv85B4SL7sCvArwcfgEv/FgSaa92btSEEfxKsCEDII7Fe1zQJ1YVGHyx1fMuD96EqRBGCi8Jyhh8cATbYhEGf9irSgE9t09MPXu/I5z6wy7VqsgFcGaPaER7g1RMYD42tZEwgzn689mxafLo6NT6mUxcAItxzVbDdP0dGm91XoXXp921BA6G+21fqTr+K/nKEjoRGw5H1lAzs/mDxRUfYkN7aVW+lEFKqNlIgE4L4IedJW4t3Hi9Umvq5gO4ttoGyHO/6/fs+mvw1voCNT7nHFz7q6Dx3l7v+J4ZVWcGJxrZNhicUukuvWXQABXFl9jEW0IdZy/Bp7WdOMLz5KaejxjB+TCbSer+AjaZG7DBv3x0B1WJeM/ibPEEfhVgVvKwCJz5VJpr2U6kWAyNxjGZq/MatPbTet3qHYs8uyAG/otoczeYUwY/tCPQVO/qIIrOiew8CJpQjDZR+LiwyQ5yI7RzNs6jk26e27IyFuAaPLA4V7WbvTKhgwomUcPO2lWqrlVJjW8FtiXQjfkOkVoeCSGBanoFN5/LIUDH66a2bZT2/lHJcvfCbJcb2hl04/W7eUGWvPJXvsRBoBl5JyZg/TA+sLOoRh5alq0mK9w3IknR1yxxUHVn0ZPjeXpzDO8zvyMjyxsLrKqbiO/H2dQMAj73Z64K5HGDpaDfDT95xo5ieWdDoRTATfpwYmcVYPt0c4HKgJzeUyuSYazg38tyVcMGh3Im4Rze3lCg6HZmnNpFKZx2LcDEp5sK5Shc8Iv7xTo15nKhXoXDIVFfb9d4h+hT8gawq8gbZsmTqnEhSt6B1m1KeAkGdcbAzOJnN/W59n6S4bezmIw5RntK1XgsgKePTJXj4Mcd//VOWefj+cGegBQzxub1TwgwG0DswcaNZ45IU5bGbhfnEhfrbZ0kXhgKM5aBRXt20yUQwkeWZMur2PweHJ0sp0w/uMggyUHdtVEvYItXYIqzf/e1NQWKLYQamhuH8plhVfBgnOG77UWKcfLaQQlqcDmJGxhPYEDVCFjxNQ/8kQOLxCplLAZCPn5kkue0Sn4XYPIi8eROhLnpjADvhdYjDcxp2OWWnNNDZiKCeFI3ra2LZpunYJP9FVh8s7BLPrC0+UDYiwhW0Ud+ZmyKXPhLhriCU7pGN5k/ZDUVWQvf2+Ad1kVWGdE0ZL6Ulo7GNNHYRyOJ4G6kijjE3Bhe7UmpH6lymkIAPvrygXHyKMxJZ0GRM/K75F/+7/g0VXxSro88YXqHgcXDIdA8cuBq0UQ1cra2CAu2SJmd60FSRd57RY8TrPm1Ezpqvv3Cs7sr4U10wL5xpF6NZ4BuE/dounoU4k+goFi//QPWU2u4O34XYO5IH8CsuAlmpaOL7Qg0k/eV1sql/WPlmkFaTS4DV9keVjmdDKFilxAv9I1OFLHzuzLafNmAOPnwuI5yHyLfe53UKqkt1Nn2iXUvyc/3HYWgF8fBdIkOkVHJYcq/dgcU5A2wALYhOEV3hYGyNTgqnUj5RYU0X2wT72L3UaQeBVQxCbg3FNgKvWQ0XN8HGTjK4lxnbFbGEPYJ6QevKZbi5tlN9qDvat8hRo1PxUDTnY0cpIZlzjtTL5QxItPMQLBIxCheMYpS+iCtt9lBGokWI9d6u88DG5iGSCsbnLkDLvqpZQFml8mjy3MQ+S1QBG2csOCNwNWP0Obk7WUe+c1j0uXiX/Y2Of9oIjQkm8vvhQ/DgeNkZegHs87ZPPDuFp7TnAazBRcEu6LYr3oSzH7bOUNc4KzKmg23I6ukRk2jYAiB+Ur64EY3E4UgJlRLITFdxjRKd+SV6RsazQv/sPlM+uI0HRdmkri8XLXY2cMgLmwKe4tcM5/JTUUrgWuE39ego/0IVspn8KdZm026YZqsFTZVXYMSDy4USobEV9oIz0NLctRrGF/RWFNargxrCTTTg6yi5j+zACQem8pyZDEeOTxFbUI7kDe+8bdM8RRtQoBZJP8DzOIpONkjsVgWOjkvyOCUumOB91q+bv59n1qQDDDMPK2rnI3cr73p8zB8q2t1zX/DkAo5d+ZeVX3E7zPz1K5yFl6zsQXfdWlOmayDIAx0QGrAov81zST5Ofp0CDQrp06MSg6vN+syoX24oPnaBUh9sODEG2DzfLfYYJXKYu0yP3MIfl43OEHlS5k24jygb22m7tFPZRDH0fDwCgjPFy7yQVEBF1fUKZoj9uNSeH9CDOSuPxqCQCROj4Vwk3jBEPAEB5qeufQtNhvI3Ca6m5pqdaU5zWFmpGViVSBTXBwiQLObgwBI5eSQf2tQw69bsT42F3p+f9qEABOPIi92PBYkfZuJ3+6Swqrm84g9YR5yt52FRbMo23OGe1vchg2BN+6fg+Llq8md5Zyf9jb6Plf2j1c1vpwwz4jyN/CDL5i1VxZjIXw6uZP856hUOQ2auDmaVJqAl8/NPKiIfh98p2dX7oePHKU4lAxzlYvpkj5xcmHfODV7h6AlQnb/2btLZTp8rNYqpNgFjc3DtvCAQnwkzPQJsEROwHflcd+oavk/5FK/h2Axn0yBMlI0tvhhZ5HL35XlkizYoIVRolei/epgusVMbCYUYKNW3H6SotEZZdAS87pyygar+zrqs34ZL6CJz045loqyFzpWb8KPRXoxphlKYba8LsV6ZBEPrZ7t2Mg25FdJf1wD0jOl43Nm4zsy7cb19cIq59KnTaHNCDCjtU8jdcJE/OPQcDc50Kq82DTnOJ3wsTFavfODy5wPhLiCRxDAooBQq1JAr5iTUV8zS423EzeGfMoMjPI5zx+ZJhfB5OZ8HAr1aOzIzbUZUoC5iJk35jlRiFmx8z9EPA0/mudbifwDfdrXjk5Xz+HG8iG07AzkU//MK/d5HtgANw4eL0Jg+b3OgNBcjFgAydrIDXXtnExZCUtgAqLpxvkxyHRp/zg5B3ny/yEVtMEFDUSqnGzYybTWGbRigirWgSAZeVg+h1RDtXaXJ1mvWturN2w4MyzNdoOlP03zuI9ew78QmxrXLZk9rx0cr/Lk98IqsK3B53dSJAv4j1F4Kog/OvRQs7sOGQEmmIhnpdHZMF8pJBQQY6c+EyH7x7A4NsH0YHCF0b4vtx5o1fI9ppC4HG6lb46Id1PPGYibybRTfwSevt6iaeWJXSIdCrDhe9kWCxhBlqlbRTUIGAJM4TwL0faXEbRhNw+j3v9bm+83oW0KiqwN3+s9ZAHYAHAX8qTT4X7csyBbPtxc2CiIRFYVmtV3DEuSK+c57wMyMr++sFbW52luB+mVLoEl9N2OhsIQ5mAZIOLGa/SMZ9i5EUm6Js2wC3jO2lUiP+FgIIp5YDbb0BT+CeexEYE7rXssqD7VdCksoRuGJqic86MBySqwypqeK7BB/TKlm5r9HBUWoNZGL6wLtp7yvj0If5vvv6mgQpVteoo2JcDEbQuzFKcVbw75dZmIj1M7mOYrsm74rhFatPC5lZ7tXs7gWQgoxcXwt3/bW6rqi7fZMA6uhi9LAWZvKr8vN5ihLUz8c1TbS9FeaeP7cud/HjlhBpwuQZpqbb5vGgfcBctL31hXoEZnfjW5CwI2yfD1yxvFAyjM9I0n94iWmEXO0ylxw2N7IDUeBZi1GLw+357cGfekDBq3Ts6EZo/RCz6MDXKvXVmp0dRfYve5NcrUtqqZRz3govB5CXrDilWvsorH768hN5ysl1UG6BbZcLgSc8/s1vAZoRa5clC8+p3FH6xt/yOrXD7feqD+fBl0C3WHm9gObU6AmVa6GwnvlbmV8o9+sapgnwRkb8DkOhWJ8SGqFtjS5HT71oBRzEEhZv/yndhtbT/7BGhbjqlcrQ+uYrVUdBPtelW1zmvP/x6Vpnbum2a2feG1BTe4637NlB9O7SLPHpEiU+wKJN6FkFMLXw5t9dJq5zvGSE7HCRqsbCKjCK0ZRngv6KsVSzBKzfJI21rxGjsf2Jiosd9OA58MZXFyd8ckef1tAo1nItDKDSJXj1iTGoetlmylJGEhNTdTnLug+bdik7efO337MKRLobWVK9jEADRX0OYE2IBtOaKBgdBq6Z20qKYzRR9NYQp8j+9dvHi2QszA0+k6CwfztWzh44ZiVFmxKKClzSWkBVKCgfDNaJ5NwzVYmON514otWN5JPi4yadDUZKCH+wo3IHdJ4OyxHP4xx9mwpPI8pOXYlGGAc3OpiVgo4YwA19MI42cVU3bwr22DY4UQJkZ966BBueGRMvjDTYXyAjbAHLvBwYYJbZTkkh7pTvikdFGY9zXmCB9MEs8AVY1SMC2hPwJf/WE6j0Sgj2msvvEhihL5//4qUGW1FF6yWN66wPOy3zYrwI5ww/x9svrCnkiRuN+6Rp6oN45Nl9MRvaYmzat0vmvGVogNFg7WNhPv64XzjIzTjPumibx0lZNM/Mfrk/emepjfZhXWYXrKiTOfusPvam7ESEZxtaoxZpCMDRO7PCBEYFvl6bCaHjs8VfF2GYPXGVlfCdOaC9kZVtJo/fueCg15e2Gi2rwZHDsXJvPjCHrG1bdTWmQxvvNZM/eoMkYi286ENoZ3GxTFjJa7UpfN5g1GsUkiyDlZ7EganBSu/G9O8+BP+2otrlVOYDxiYoScNX237O+nTc2sk0OkkMNZjEjVTJmvt7k/2e2a/ppvMhmLYRBMo7NcpNyx18TUZqxQWqU3VvBxdp+01OvZEhnceAgwleFCN3tGuZAuggtC9kgjMssUx58QHPYHFyEtRr+O2o3iw+eweok8U8d0ilIHQZ/1k40HVJ7XVZB76zzkyKciFTcV14rthmzO4DR7VizxGnSMYGS9+Zx5tM2GY1RLUYh5LjF2rgonAY5JjYDW07RzqV1BRrpOnme4JHw98+oURFokvWFRkdeLOV3yfNlSHLHzjCmkAAdMgQZHGvELYgA/YgPcBt9/D1JJRTCvHx2dog0Lx3s/jZTp8whMMhD2SnvlxHIHo3Qi+DX73S/wP6WHxlLJiitDCF1l0aAQs1rHKNY3dvDL+sXVNzZwFqyj9yxvwQUO0XtLSdmyAvlEV+PNDPjdOzJJLumnbVTZWECfIhKcgPxlnUUbXH1kR8dzdZnvXAMh+wLmJwtTmBtlZw01JYkSnkd+2lWLgOSFE7/bKc8ckarmGrFi7OhODW2Wg5NDVblmc4jUQ8qsT2f6hkLMlExuEw31JIkYqvut9t1ILLpgoYxR58000ocTHRPXGXOsaCGw2m9PbbUKfrHOeR8+m64SU2Z87IllOYrXjBF4jldhK+NQrNcL+oXKKXDZuFGwdmAu3AdjMEHP9syJ5Q6i9J04v8K9NArNW3b/3AXf4yMsamokmmAzTu0qN87bp3pcnYWa1oBF8NxRqXI98n8cE8N5OgSF+PVj0uW0niVyD8z0LAcN9oYG5o0dBwEhTxMDdofZVFb95WLgiikULm6+JzUnzUn2x14DPzTAiUmF1A6sthIbLu03oSGoJUlk9xIisCd1iZIHl+a6tOHxuRf+vFf9ztTM8Z21lkNep7HJEWozbQ7ReuCJxRd3LMyWzyZ1UpvvjgOO88jkK2ODwR8OKvpYhZXjoGb+221F8tGmAwfVM7NU1+hUMsznGGja/okhUhBUqzZZVmE9fWSasjAYSON5fTGpoYeYY4TeQuCO85zoPhR6keygXQnwJn2nvqBvjFtBLN501uj+tFsLYHGXJGXK60d3kM8nd5L7kIB3pQOItKpr98dqpngvrZ/0tVX5igiOFCps6h+Q0Lg+utKmn/dKmFQk4DPmJHOnn5dRqkogtyC4Mnevc+Yzua+o4ViBxPP7GOcwDO7GbR6Ob+FCJHk9NfMnWNzkpToDGnkMNpw7F2Wp5nxXwZgDg5M0M79BCug8mPmsPNvnxJQCcljRZz3lh93yyvg0lZVwhJuHJAr3q2kw/QdAyxkzgLmxUTMvdlC5x/dm/fdoXLfIoEBJjgxU86p4DXjsvKR3s/xiDHrxPX7LLFX0RZyntR4b8B/4LPsNnCyYRFm15/l8S9o7G70TdvQBeAOWndtT/X7K97uapD91hBsHJcj9o5PlscU58j87pgYGtqZN7lzPvtFcD7ABBjC+0F9Df+q7rcXy6trG/gxTBncM1zi67luUI9OxcZCd4n/QzvwMaksK9nvrCxWxmjsMmvx8Moew8WA6/FRGTS/oEyetAX7XzzYWypXQ9Oxw4jl4kg04Nj1SURA9vSK32Wg0La8V5/VU999W87szIZK+6jk/7pHler6dg9ubq8QiiT0bQrhxkKqoCglclkmSZ5vfJZM+LjbebCfHpBg0TZGwsiZhI/IwFVrRrgSYIB/Td4gA82I667vyos05vZuqZx7z5XaHNKyKvA4CSWH+GD7gnQubDvF3UQUEXSQVGunhJbmKZaEpsFzuybEpasGz64VR3neQAuFN54LkOSzKci9QZcvZxTQWZ+wOT/W8SbwlcFbuOJ1L2RMhZnBqOQST41aPmLaj2efy3J6Gu8JaYjX3qKZhOoIiqIdgHqhuPB9JDTbDY0XVGhE+rznLcG1zsxwXQ5+cr8qGX8shdmxL5WuzvTC7yB6fntBJjukcKffD2nvX837vinZlQhMr95fLR9BYl7PRAIv3TOymzfXgcod9Eb4bCytYXNBUmpMbwcnQ6svP6yEXIzqYEhqk0lb2FDYGSyUDPDfj379soauGVDMrkV+djQ3keloBeveM0ibF1W4Lbycb4X0Hmp8jZNydWewqLuwTq4SYbCS2UWFXwbrh72E1XIzgXx8I6OZmLCpaW/aMGd4AI+X29QatCWPecEW1d/Smfyc8OwAX9glNRElZnE7T9bSeDcEiLmKjusYWDJa8DsGlecRo4S2/75M5LQzFYtUO/Rz6MxO7Rcms07qq97HF+8d1VJ/7HPy2L51siWMqg9zBLAyw7UM1fHF3YHwPCpIvhdcAhZi0OFsQl6AQn9gp0q33ma4X1LCrqSVwbRg+qXGoyRWIFEc6OfTd33h8ea6qAnsYwdOwAM+/c5vRwLwZ/xqSoDiIqCU5WJsBh8OhQe0Jyhnp+9ev+2RsR42JkkLMESoMkFDjMupqzI5lQ8Gtv2c5ZWon6cwVr/2Vr0yqm+HD/oAI9XkzNVP9gRFJih/5ldV58t/Vzmuc5xBg4vk9uqQxRc+MHa4HgYh78T3IK01L5GhEh30tvAbIRPImtH9yWLC8NCFdxn+1Q1HyuII/9fJTRqYZqW0ORyF49o5OsO8MuBGzK4kmt21boXocG2mxPn60slofwSJaRRrz+EZFWrn+b9zc66za3+T+MkxzIw7l7NAzmvHTsPGzn9wRNbKr8LsAUzjvGpEMQYxRCfLt2NF7xIWq9A6RUVyjCsENpkAWHpA69ssdRepgUQKjy+waseJmddGpaGiavrAyzyUTNSVC07ac1/MyhJjK0sgVv7OmQG4Ymigb8ivlqRUtB7kMMJ1xkl5jy2hzuT6enQtiRa7r9c2cwPAvfA82U0SGBvhNeA1cic3yJZjPt2FTefXoNEVu4Aq4oFmVNSwpzOnXcOoG64w54jXUblQl1werz0Kgke2LZfhv1NRkuGRJZWdYcxHBrWOEcpNggGtuRolsRHqJ9LLGFE5DxDkMzlOnwK8CzI4dVugYeUsKHG/m4nNIk6PxMHWODpFu0UHaDB4ErmiG8sYYBRO2lVEE628/QaR0nRtsB0Z9cpaeJ+R7nwpTmsUDjyAQxS6jS2e7Rl53jp4b5kJlRHqb/r1W5VTUz1dyBe8ep2kg5i1vx/txodBNp4FiuOuhdguXAR5uRo4Wa5X+ohAbC8d4T1vYvr/xO3+y62cKXJoZ24vlpB7RTvOa2YIjRtRImGbYPW2xHBvfAht3iFo21M6EbqrSjW4Yn8tRrEH6/eY5sDuMAbJYWGEU8q5RGqVQXLhz3F3UyJwCuQIWxfr9lfIrlIz93KoAscidhyXIddC+TPftLPVM+xJ+E+BwXKSrEYii8D62FKmdtQXK/CVVKFkRxiDFwEPtZBDcWjVWNAg3OlgmwN/idXlBj4BS0BhUuqhvrKpiurhfvJoQ4Kp5kqqX2e23KYC3JV+j2ezKe3JBno3Fze6cyQiQcWIDiy0IR3zFLYHuRW9sJt9tLaonN+d32oCNTi0Ui9ZIwZ/hEK5/H5kmDyzKVtVVvGDjcH25QPfi+5yIjYnVXjf/tk+NZuExDrEHzhkuwGKcs7tUpkAgWWJI4r7rcK+ex7XmOFhyIO9m+gRW0VeIxnPK3jxoGm6u92BTmTJjt0vntUXf1JqqXrPH3dD2d4/wLMftLEoq63A9aus7kLiJ8+8sWIY7cB3ZLkhrKKu8Wg0zawqM3byMmMxIBP62Icd/6ZwMr/R1+0WAKaiPjkqRQbhh+RBOmhKzpnRVrYIEd/BZO0vURDdGH21PlALP/OF9yOkaJXUU4MdYyoZ/m6ybq+wlPv6bnS6lAlL0ErcKm4aDZJ0kjk3dLflo9qBPz92dhQp0AZhGYuSZxGasn3YV10H4KajsD7Y1nWmZ0GSMxmYzAtd0c2GloubhdaE5yZJAFjJwwQ0Nbxj7wVgCyfVJzkfz8mMIKpvhH8b3y8N7kvOKWIX7QC17JyLoyVWBMjAkFJ8TLAts6rTP7hUrPyCifCEiyq5q4bV6aWyHFqZO0hR9dmWuw1pkR6jVu6zYQEKeM95X29oJPsbCGsOXte9AcofcrhOUAGurD0sNk7G4Dmx3ZMFPXU3DVE26UZle0L6ET/PAFL5HILjs36Tptho3Lj4sADt4qBJSVkZ9htzYXifoYfle5KtiX6htLlXRt0DoXjy6g1pg58x03ssg4z61JIMxpBClSbXifK1w5D5osvdc4J2+EgGeJ8akKn/tYjuzm8JH63mvCzdxMDTvz2d0UywkY3SKmraGLzcdkHNwb1297jwXliyyo8tbQ+laG4x+p0YEyGB9xGpXuHpj9e4qA9TWrJNmB9Trf+Wp2MnDo1OUFXY7AqufbvE4feW7PPC5PWJUJRRJyVhilllaq8jL6Tu8tjpfXl6T5/JEuatnZ8ofyNuyBtkQYOPnOJjZfPwCHJ85WYDfQ6c4KdInAPS04WbuFO38paK59MDIZGUOOlqQ7kQez9Wb1rfC/KIA+4rMwCUEaONE2LboTJuggVy91DC8hYAS3zPWJmUYoT+dBO90Z1nKqAam633OtEr4N38GOUjZ0I0jKwZrz23jBiyhJCNHuC6MZIFJh/YkMX4Ynp/mwFKgQmJj/7fZ5aoLqQh/syPqQr0qbsuBaqFhR9ZQNZ0ywbW52E2hVQWYOVQ2M1/UN07OhAlGf4G77HFdouR4+F+LIWw3/pZVn9x2FQwCqM4f3fTmDX4YgnM7tCVJ6Tin5xFowZ/3lDrV95uEKDQ3FMPs7hrdoOWuH5yIGx6gyNubAxu5aRlwYdwwd6/XBO04bEi7sEA489hbc49bAxfDNyfbxmRce2e5uiuUqWtVlW3NwdU0kjdh+MA0fUkTxDGjvB+se+a3ZqikGzTxUR0iVazCCBhyc3oIrsznurYt1c3zyBDvRL9bTYBty/yIBZml8hsS/xwBSjwEQXhrvWs+pSMU4AIaNJ9sDaMP9hUiotTEtyBA8+4JHeV/x3RwKr1Bf7FRmZ3dTkt2iTx83gtN5IDHQvO8f0InJOhFbl2QJcv2e4fuNlURrYeokTJtHfMztXNmWsgVsn0KB5sInMFMDvFuplOLZZD0b+njM13HmKTh71ILqhJLu5I85nd53yx6ND4WPyOgxoMYEcRD1OrsD+bolc6wxgbEh8ukrtH1rYEG8rB+liDtuR4xjp/3lChht0WxlwkJW0WAbYX3f9AWbPtiLTAn01Ej3fDrPkVJ6g0wSLC9RItiDtSJ5EilcuS07fITLuB8pBvGI7o6Geb6T3uarsRiGx3TBlsKGoJLHfWo9D0Ls1XwibW4tyP6yRayeXZBGppFbNpmccB1OL8Ze9wr0nCEw/T65t+daHdkgLC1/GOSka9A3ILMmcy/OwoQcjL9XkSoJ7hYmcUcf4yTWokbdufols+RKaOQAAhiiKURCyib9BnIMx5jAC8efzfXbWQLmssswdyFAOvsvVWyOb9KNTywKIXWZHOsRLV13g05eV2AeRM+O7GTXuiep1I9tyFHe6feeeNq83xz4GekIaUxUy9JPKWb1ijeDUGDGxBBJdvBdfP2yR/IK784IV3+mLr9IMJ43rw3j01XlDOELSdUF10QPtikBa/OR2Dmpynd5B1o9Tt+3yffIFJOjuDXEDDjJsHIb2uwR/aP13zxrYVNXzc2Bjw9NlVmY+NYleN9AjyahAwY0v+uqbLKnqgambHL8Sa1saBC6yt2AYwWxzo5L8l+IqEzoGvEaLTtYHbbqHPtgYaoM81ebcSKVoVlCCwfzyhrPl3UEgIDvFvy6XUBfgwpCAZ/XtCF9yqYtK0hvMTRHbUbST5fBo5G48bOgZbtAQEmNzMbxaklnl6eK08dkao2kofsyhlJfUrh5XgQdonst+ndVDOI9zcIw3b4PBdCiN8+rqO8fmxHOR9uwbAkLWDDaQT3L84+iIXQG0jRSzz3NDNv6J/94+TplRqP9t1wU1gBdsuCbLke+dtvt+G7jU6SX2GN8N+5aCMCA6VLtDaJgFHjo6DlmZ0ZlhKG9F2FfLejWFlMbyM/fzSuC/mM/8yrgJsQoQaGfbS96QgqzUjSy9DcdDaNR+FJaWGg2y+4RwM+2qKEIFBPJdmyfLKggz0C1VafJVZchnEvneVGawleryOb0EEzndbC/6OGfAgC3RrCS83JiYZ8z/mIfN6s+9bM1T4M/5pC9eI4beg30z8cLEUzd6zN7s3ZNhwlugLm8KPLNMGm32sU9TDaaO+zsNJmyo+7ZRr8u/HIRxvRVg6dbg3hJcJ10y63CWEIxYImnYtxfRlBJa3LiV0iFcvIgpwy5WNeMSBBRXHZUnfnyCSxBmjP/T9YILOwGUXCn6OW/Q6WBTuyjoYZzNrmq3DdTtGHdf+RXQbhtDSrhXL1NGBLvF+2oOYLbeH5FEwWmbA3V/XkchRqdV39Qb+2LQsvMTJNc4fW5Xln7rNXBTgmOFCZclxI3NXpBzNEf9HMvV5Pe9yhU7K8AK3Dn6TLWZNboRgRfoGmmYlFSM0xTjflOLSsGrv1Y9C4RheIQYEzFcGhTYVVSmPTRKTJfb9e6bPbQZM9z+Wm+fukw7ub5EqYzHy3TyZ2lCEJztfzugKDBL6pWUtMzTnilZrcOUou00n8SDbAUSRkh2CEPCms4dYzQLPUhqWCLoA957jV5u+wFgStwg3twgCTt83Ltga6FY8ilcoNf26G8/RNzcGrAnxq9yhVYE+hun5oghKsp5blusSc4Qz4vtfDx2VgiZHOl3VNe9+Shib8h5BG4oX6L/6NWpLm74vIN1PDXDEgTg2JZiUXibkNX45CTtOfwSua4HUQmJYqihisemNdvhKi6ad2kbOaoHnxBC1xEdO/MwJuBLuqmPfcioDSETpLoyEbNOGYyuAMJl5HTu+j9UDwd+ZSWU30NiwZkrexNJWb2MLMBgF3thLKFdTVtW3N6Q647o6Bu0Fl8Ovp3eRLpBctuHZXz87wmkLzqg9MM5ZfbBHC6M8jEszfX/FyzlJVYEGz0we6YNYe6Qozl1Si7GKyNUv42WTxv29UkippfGL5flXpdT7ylDcPS1JDmhnEuBga1Nb0ZfnhpwhaMSK9AcGYgsrmw/4sUB+aqGleluS9ioBWCvKZ/1vneYrMHk35lMxxU4C5G/PbsuKHB/2s/67KV73IBAepGb4XR8YMQc6aWo++LcneXv4rT15bk6e0LwsPLp29VzV40O83ijIo9NUtbCjG8HIXhlA4NTS8rYNrc3BiKIJskYr3iqTuBtUsr99XsPCeX7XfLeqkpuA1AaYJy5v7wEItcEIN8O/lzrfdOQOakl/pPFRsgDDas15DXpatfjfjYCDHwCtYjCd1jZSr4Od+iyDTWuTmWEjyINI9MfAR1+VXOtwJ2TyRWdZy8KUfgi7cqMhKyA4oFliQlod+P1vWPOGLsgU1IcH0SXYTAeb/rt4v92CnJ7XO6T1btgLoLnCQN6uYBsWFqlm61dDMZNoMsWidORFIwdDV7YLNoaRa8y8ZpLQPBNrD4F7OLGuD1WJeBAWWTKJk7FS966kN8RUK7HLkgH/ZXSqrEDdZmuPdEbgGvCbAt0B4yF74zY4imTm0mzK7vtnuvcIDaro3jklXJjAFg91LBp6AtmEkmUEtRqFtc8yPYxOhxubCu2xOBlIBDdqW5WwMdD2L1zsjsAaYa70CvqUxS4cjRVn5RTBYx8+jeR4EQXhmpeeb2G59kxmKHX1LE1SqdBFIi3o13ANn8pk36hMlnMWxEO5ipI84GrOghao2TvLbfcA1tynQ0rb8X1LHkmaXBVWcRU1GTgYA2Z3F1GVfbN7Dkhv4xwxGUQ4yWwYLdGWeb2ZZeUWA70R6hrlXzq3tjhOjhvxoo8eEXfWgb0YKmVEQnE+xSGnmsuoqAtpjqS6sdy7MkS8mdZRnj0yVid/vqg/40IdlZJoR6G9O6qJoXmkCXvJzhtw+IlFZDscih8tyy98ySlQKZHeR1iZGsMOHXUqcWHdYSric0T1GTTAw3tueNIAa/fQf98gnyBWzMYKZzac8FOLlWdo5Dk4Ok2nbm6bh4Wc/tLR15iU7C7ZfcpOdu9u1Qpam4mJcS0ekNU3UF6JSStqkP5r+9M9Dgxw1+VskXKeXVY9BIcSGaMO8OVWSroSrBR10r17EWmQBx7JW0rAtwWMB/hCCxens5Fd+FSbkYXpd8u9ujgSxRxedRI43klPt7of5xknq7x7fUUW9T/hup1q4TG+8ua5QboBmIZ2rrSndTa/aKdKFchJesx7fd970UjmvV6wiGWcv8UV6w0Bz4E5Lgm7S4TTV08t62dNm7FbX5iZ8lwHwNa/97WCCPGexWW+pHJnc+oyTnsK4/3NdvP9NEc8PppU0voO0FhQ1TlWdGjWTCcuCJcsFiDOUQwEYFLIsvWQPNYs56M7wq3LM6BDkzOmW+Ut4CY8FmMLLYodz9UDHEXraptQLpNW2kwaegGZ5DakQ5jxfHtehvlxw6qTOcsK3O5VwvARf+LiOEcqU/grRaUa/SZDHpgZO+RsEQaKwr7dh6zCmILK5nY3qXDBpeG/bNAob/HfivZbBAd10wLn8Ha/F2bgmD41KUcQFpKFl0C3XzVzxz7uK5WxYC4yej0xpnXSVp9hTXCND9e8218VS0li9nv3F8Wn1j1FLDtK7dsi0Mt1JInltzKhVzQx2VPPMcldPg2b//C1T5p/ZTX3fY77eUT+qxdfwignNvkcjSllWrS1Qjq90FxROXhiWzOXAN70cYXeaqcqnPCJVzVdlmoNFFrfCfH8YuTVOGuSN4Wzh707pIu/DhJ3w9U55EiY1waDN2QgwTWuCQpS5T/Kyz9ztvRpm3lOmsxj55TT3H0/t6vIwNQOspqIAs1H8nN5xTtcN+xJz4YYMSQpVlDI73Iy00iKyBcsYeb2Wwo1wl4K3NcBI8n8Q4SczCOccv7rG+1kHZ+D1UkpO5aNZMgX50A82udawzEXJCQo36VVVX+D1T6zIVWkedgq9CrOFVDAzthWp0j7iiA7hileYhRhMEzHaxyFc5J/6EXlZbgbvIch0hh6Znb3bOwl0V8BzYI21u8PUiHn7tJm6XODUbs5Emn2N1QjcHNs5Up5Y5rofzgBRJoRi3Fc71N9tvSSSeHdDgVyKtXfT0CT5EGvVGxQ5rsIrAtzFpjOEJ0Fzh2mdZ8amQiO2PMSYQYp/9I1Tk9cZQPgrp0IeXZ5bv+NyYPJ70KhkPfgSpvFtv2fVv/bquZkyY0o3eQRamIOdGYF+Gfnfc7DQSdFDQZkOrfohfGb+/p0XpqK7Awbe6Evdi7w0zf6x07a79HqmXl9DnpazlDId1ESzPZOzmJZklovVwgkWYfIdsgA940Nk0d4y4Ty4CdjsZmdo13RKz2jFe0Uizn5J4XItzHw2m7NVj+kq0tauzalQwZ2jOkXIb3guA0UdYFndMyr5oM8nyR77YHmN5+x1fZNMi9RG1JS1o3ywwSLzAK4HJ3B8tNl3BPEGPLbDGOHtgcjz02NS6x9jAInUr5fAtCBVCn1ZCukwLAoOm+Lw6ksRMHoROdRNF/dW5OvUKKwzPn/mXjlx+i7FTnkkFtxrEzrInDO6K+H997L98q/5+xqxOdKnpIlNH+StYzsoqhPu3NfOy1S0NR/iAt84OEE1UD+/0rt5aVdB1hHWUDNinxTmXOeNLd5HZJ+L5mJcV3t+Lk7iY5smGzJIuk4LZTSi5qSufRxux5UQ0CLsAvTHKbxsxzsyPVxePDpdFultipxfmxQZKM9i450A9+VsbKqshe6Ka3o6zHcGdNY54PJi+pDFIrR23sf3crUmnJYXj+wS748yaW18v0NTCH29MCrUHXisgR+FjzcQwaFLkX/kZHfOe6Hvd/7Pe1UX0tm9Y1QOtilw9CJ54+5blKtGfhLMz3IUiQFq4meQz20qGc6d+zEsWA5NphCz2YDJcxYcsAWMi/oAQv5/ZPkvWmhgDcxMaioGzeZluqapKLzPIGfNWUvJSH1Q2xnBvPNhcZDIbzoWFIWVnFzHIHhHpk3moplZuXZwotTpfbfkIZsNy+QO5HVP6Rpd/xnHpUeqNMwB3EQOXOPkRQr+LzDbWVnUKzZUHoG2H46U1hTdjH8XG8vN8PH5fd5Y73r60AhUbSjwToG/L2H094YE+icm4RVSO2q9b0/prM1+RUTYPoDBYBRTOSROZzN1ULBF0sKCJBlaaGCy1o6XgZt/LF5r+BFPQuivgOZmZdEtNiZzc2BRBvO6V87NkBk2EcsFZ3ZXxGNszDd6e/2FETBXp0/pIi9CqJ5Z5V6lFqvRGO1/+c88uRzXKNqPAa1PsWEf0VEjQzgHvv0CNwJNdyGNd+uwJDkHAb4F+9pOoMoZsBKLQwU8ndToJiq8cudZMncj8pxs+ubITSNC+u6xHVXQhnnWawfHy4Uwya6Db3zNwAS1e49FimfngSplVnZkGeaIBt/qGVwQRqAnQzt0dYJ9gUl4Lmr6mWv2N+zkDBxReFlC6W/hJWil1ECjje7gelO6AW5oHG95CbTsu+v8x4+1HfeOJaMU3pexGS1wM0o8OkW7Fkuz/W8huQrWPhPrcn1TeWUPr23dvPgMpKio77Ea8dhUaE9qXx4s6qavNHXbAXkRO9WN8/ZJ34+3yIk/7FJ+LdkM6YON1xc2NfGdMO+4GTw1JqXFz79lmNb9xHpkmnJ83TnYJIwZvI8t82+FkgGmuqhl2CHkbiqI53MNrIw4WDxMLb28yuc7P/Li1bIE95yxC5Ih/NvN+AI5qY9EWvAPZC+q2mFDw4gUrbhmY6F3O+6cRWDUaTc+Il7CSuxCnWBOk1ydI4A+RlSOGpGM//Nwk8+DX8wo50Ls1PR3Km26Wjg1nfk05nhpNvPf2KzQDz4XB5WxvHF9Ez4SteztEFQuKprP/PuzEzvLMQiWGXOEnWGl9BWGYNcmQz8pSn91sy80A+e1t6hGTWjgqNH/IfJOC8Tig5pi+s7r4MtfxPQd7gmLeNytY5iI+IRKOcKP9mdFk7tgXcL+8lp53g+bKFDjdefpAQSOKEh3IcE9qXOUaif8CYEVjgQ1xoo4ApsfmD+kFr37sIaxGXf+kaW08UOjUyQlrHHMjb2qTA9Ry3IhTUH0msLLvznCkVHo6+ZktikOZVoT1wzSGgl4PUaluF8e+QWsmZsQeSYzInPnbPBo7XN94698pTX/0T8erorGTlLuAT3M/aM06yq3ov1FoFk2yj7w3zJ8X1tgwOsCzGZxo6ySNawUyLsWZauFxakM45rx/d5ACmIJtDODV0fq1DeFiB4/hFwyZ/c8frjmI9P0pKDOQ3CKZZJfQmMzAMKRjYbJfNIPu6XHR1tkRZ5/fBNHYICN1LR/Ir/6oT6dPdhDFoppO4rkxO93KQuDdeCLYIrSginzclEBMwGvrMxTGp9W0ju4V2fM2O1R8cJl0ODdY9rehAlnwSIOYpof6X5bJXxJAaL/yvrWT0/opObtXAChZr3yK+M7NEt7etP8LPX8/45Pq/cRv8AFYnMEA1+MNC87t6cSVHL+Xjc3U9VAvwm/+3os4L+oFSC8bXFywbk9tdnHV+E7f6QH1AwmTU+wuVCbXj9zZ7GcpxOrs+CFEwONXmJ3QcF9STcPb0IwkoUdjObT0vKk/lexqti0NJZX+76KyVNwI+M686fp32r5h++xmJjm6BUfIg+OTlb+7J2InpI07r1j01VdsyPwgrA/lzf4zuENpjSrr1QpIbQYa4vJNHnCt7tUpdH8s7rLmLRwVdwwZfru+vGgbQ3skyVHNqP27GLZi2sypXtM/VhTT8Drdjk2hlvmayk35uVJNLA0u0xxc8/C/Sh0Mg6wpVAjPvhUtxLItMJA5A/YEMZP2+GVaP67x6Wre2xU2xVVta8A1lnYjBX/+Rb/ku236miV51btV9U+ZH5k8TcF7LC/CuTaIfHy7BEpcttCx2WWnNhAzUQmjZ+Qz+VN5iAwEslxWBQLN+g//npmN6Wl6T/fCgFvS8XujhCiJgU2CNHXMH85rHsk/GBvfXd2Vn0Ni4WjbJi+m6JzdFHA2WxQASuonFw3Vm1mENv4Kqpr1bxfNqtXWjlSJkhV0bG3lp093+D93tvgvSDTC2NT64kZ9uG+cnOoqGlfGtiY++yFAWUeoVUFmBYWJ/P9fFo3efTwFFmQUSaPLs+RwcmhcgFywgy9v9kEdxQDWt+f2lVehiltFHj8rHcKGYEqjjl56I8ceWdjgbSXDIRtxc48XA8K8CT48d7cfFhKarRJUjjO6BEtR6VHypm9nGuAYAfQfHw3Dqn+fKv3ivRJgv/8kakqq/ADNgUWP3DuMFFc1XayBC2BRUkTkFn5EVaNv121Vp9OyCDUlXMyZPrJXeSDiR1VpRYbEGad1lXNyQ0PssgWmJNqSnqwxmfMANZgvTGcqRbS5UzVTRXWVE/sqPmN7M19a4N/2rjcARWfLVsE65dJxke/9T2cx45i7y8GbgzG5sDqtx5xIaoMMgrXmrOPuZ+UV2lcy5nFNSoVuKe0yqPpA/aglXQpNmwyffJ3Nj7cpJv6xrTB4pr2Y0Jz0yU+3+xf7Uv4ZLzomrxKeWZFnjyIKPLb8H85aOw8RI1/gWa+Z8TBnS2KXwja9k8spnAEwh4/PFUCsfjP7hurNAqDXGScJGlde0IptEyMXRPDnYty5MtJnVQF25NLc1u1WyoLqZqsrBqfuRrkubptWIL8E9mBSGwYHFNyDzISH9jQLUUGtS8uaNIrnaBPipy913/pIwM+mw/8+rp86R4brHp3X4VZPGtXidyyYJ8KBJAuNRoXhlzj3PlJS3oYtMTRXRoitP+Z0EFrVVxToChb97RDxsMyqOAYaSzAFKa7EAtggwInJNyEzY5TJGbsKpL5+9pfYYMBBik/Ro5+QudIWZVdIR9sLlD82/bmuDGGs7aduMB0Qzil8AnEY9oCfCbAxOOIHDNgc1avWHU0B9bZfrU2XxZnlctz8Js+2HhAcVH5o2naW2CTerSDrpVPEAjheBj69pwDzAgyD/pXV8zOUBHr9gaypFB4P4OZSSbLpmBMYyiuavuFHHEw/68coHVduTI6tTXhUwGm8B0DH7hPbIj0iw9VTQrG/BzmdDkN7skjUmVzQZVM+GZH/etIFdvW2RmcAbVMdKjjzB0XhdF1xWtzXs9oVfTxPWIHDOLtLG4/Fgeb2zlPaRYyCM0Jry3agw/MqRvkTbvNye44X8CnAmxgM7Tr5iZ4g0k2TjocMkT8n879fCgIL8EUkjPzfzYWVCJaXyk/7y2Tr0/qrMjjz0bMoL3gevi8vGMPLs1p8bnRQf5rhXQFCQi2XT9Emzwydav/g1cG2tzVe/WvfNkFbfPAyGTpE+MfloPWQrGLuU5GqecgmMdRoe7MxPUH2KhBulV2ojmTYokOdZ2ZxB/g4IJ0aF/O/aptQ/qkzQkw6T5ZdknmCA7ebovsi54i2oXIqzHx4e7hidLWMQqBR07PID7e4Fy1FkMCZW08rsFA65WD4uqH6bUltEnpYD70+ZX50hc54fsdpJnaO6JDnPdctiJdQQpdDi9nkKutgRvsxchjk7iBhTds7meF1fL9zjeRVLUlleYAHI7HqjQOrG9r8IsP7AxIADe+Y4Qq6VubV+EXxj9vo0wv2I8LsYgrgwuew8I5FtFpVp8lhQbJ62vz/VYBRIHtFxciJ3aNlmHQuIZpz/GgCzNL5VkIr6vMGsVtOIdExlWmPtftr2xz2pdoswJMXPWrVob5xNhUWZJTIZsL2186xRY5epNFdIhrfp9q4pi5V43zuAzpJR4k7WNTPQkLOMepCAEyg2A/v6pWuFdQLpieIUlkS4FAFl2QYpbWAc1aei69oE3jEFTkTGGakczND0pqmApBYn32wrLG2t2Sy4g2PtT77aM1l+DyuRnSFtGmBZhlmJf+kiHfIZXy8cSObhGityUU6wvcnUn0bOY47afdKkXDRoWxqeEyLMm3I1YooGRUWZNbLsuxoe7geNcACqFI18hgiYgLaDSShjxlYYEWCQ8KOGjgGMfPhuPfhiaHq8KVtojL4BpwoNwXTgbk/IE2LcAEqXfuXZStBme/f3xHOfentkWP4wpK9Fxnzxi20WnBLEPjGWBhElMr5BCzfZyPsXsoDK+ZsatYHUlh0IyRQdIBRyyiub3jqDGDpLWUGs1n1qXz8Ba4KbCfu62BFscNwzRyCPKRt1V4hVbWF6D/xyAO/WHOF2qPFVldIoLlF70F0l8gjzH5xhg4sk9r8d/4OH112wkJNMXZocTX2furxr+VV1ultK5ONebzPSpw2Pfoc24Wm44q8Dzj39ga2hbv5ZtQGKf2iFHEFB+33fhLRZvXwAbYekYrjM3l/zehgxrX2d6EeHdZtZqkeMOQeOkeE6oKOygQ7AaqtBMoQ5goEGV2BochCOzrtS1g4nP5PuSoUj/xPP5e0Q7ZHv2JC3vHKuGl6dyGhVeh3WhgAxzhwjphUplePifD4zGRJkzYgqbzb2d0U+2V7SDmUtEm88DN4Z7F2YoQjuNSOH2wQ3i7MSJMtHHEIM7AfHY4AhEPLMxuFwHTdlnmxImHr63Ol4GJYfKdPkLUhAlP8fSRqWotsRDl5wz/9/o6g3Zbp8iZu7zQilgMu+aYZPf5lU20LsIQFjdGkLRV3Ds8Sc2Q/nzTARVvaS9odz6wPa4fmCD3jEyUIORcXvDPgCmPwaj0CFgT3ZAGItkbF3xcaICK1HI+FJkll+dWtKuWQlt0iQqRJed2V+SDnK7x044i/KxqE33OobjWbJy5alC8rEA++sJf9ran4GhFuxdggnnVzyZ1VtqY0+vv+SOnTfsvFFCO6pzUNVoOSwlzutNoyb5yuWdhlmws8s8cHgO8zpHwFzc6WRnH53NONAtZbCcpZpXUyBqkkebtLZUVueWyOs+3As3JHqwt4CD43xEUveLXTMVd3o5waAgwQa4iTq8/v0+sSs/8e8V+eW+j/6cRGhgKgR3bIUJNkhgKLRupU8kwh0rS+vmZ2ryobQeqFW+0AQbpKOSsPT5XZ5Ukb/Z//VT8wDlM7FEmb/Tra50jFDQE+CMEH+n6cMMa2yFcEdBzTrIBUssuzipTQ9OWZpWr4eStkWXgWuEUj2ugdVkV9wriKU+vzG03zKY2OHQE2MB5vWIVHzIXjaqiWZ4r32xvPaK4phANASX5GYeY0beK0/teWZLMSYwrcsrlsgHxkl9RI2On7XDqPVlYP22yZml8Cl+NLkNmme+oaGjqk120d3yoOoeznCQZMASYQn/v4sZN/jG4ThRkEvOTidTeGuGkjcVwIVZmV8hGmNyb3LQ+omAxjMemcSZyvBM7R0lwoEVW470fW5rb5vnEm8GhJ8AEtcT12F1JSUNsK6xS3U1TfcCiPw6L5OahScosM8xFTmCYubdEft5VAjOxofLokxM6ySgI+Mip25z2u24anCD3jdJaLDNhgn6/vUje31SoSBBaA2SNHJ2iactL+scrIeY0Ps6qIkvIQicGcrPJf9Zp3Zwags366MOStc8bCcuDA7RjbZg8i3Ri/w0wt9l2uhsCzXlcrB4zxrOwWYTMLiSqZ0vq4fj+A/AzTGf/oMAyizG3nUSam8GhKcAGuPOz/PIcaGXWB3Mo9rzMUvkBi37V/kqv1FTzM4Yn0TyOlNN6RCtNS1OMWoMjVTlipinhumZgvCK8fwRa6Y31LZujhvnKn/chT3n90IT6FNo+fMaO0paFmN0/7DxSHUf4H9d0U80VfG5iREOenRvRa2vzYe6Xyk9TuqlqMfYq/76vVDYiKFXsYL4Rebz/O74DAlnBihN8nRuBK5rZnBZxXMdI6QXt3x/CGBXsfAKFQs9JivyeX20tVo0hhwgObQE2wEV+YqcouWRArPSOa0hn0DzjGNJcCDLLGclb3FTbHTtrEiCcIcEWScIO3wnmLNvs4m20AyPGH8G0/QS+9z4n5jNRmy05p6faXO5dlCVfN2Hqk3b3gr4xcjk0IMdZUosZqY7jOkbJqT2ipD8WdvfoENXwQNTiPChg6sAplTXj4BllmzWskcbvts/dj3NakVOhOLpX4nrV6tdnAjTkc+PSGuXgOUitolbThqSLpSbk6NNKaMjnV+bJqxB+b4CUtb1iQ5SGTWczB65JiE23E8+HVkKp0taVypU6RMtJSywd3tlUYBVrnPxN0B8CzKlyHCzdKTJYTSpwFVwg9D1zsGBXwSTejEXCAeVNEfU1h+PTI+Xlo9OwEQQp/5gmdpkeCY2AMJLhwvCfqUmeQQDr3TY0jYIbyNDkUDXnOIKbG84jWN9E2J/MfuFvsTE1NZzdhEfYSw3MCEo3+RsjjtpCFxKajaGBlvoZRlXQKGwDNDRzLgTX27s5tdglfeNkCASBpmYcNBdlgJ9LYeZQsXXw+aZ6cU6RiUMB1q0U4DX4bZCYMGGifcEi8+h+bRQTJky0RxTBTrTuFhMmTLRDWFYF1AXICjFhwkT7g6V2SUBYjeUPMWHCRLtDbVDdZhXv/7ulkkyYOASwM+vKft1VrqRO6r4UEyZMtBtYAixz+FMJsKVOPhUTJky0G1jrrJ/wpxLgmgDLCotY2k7vnQkTJpoE/N4MmM+/8nclwPuv7FcMmX5fTJgw0eZRJ9Yfjd/rWzqslpq3xIQJE20elgD5t/F7vQBnXTFoPczo2WLChIk2DMv7WZf332n81bip0lr7uJgwYaLNIiBAnmn0t+0f+64aMN9itXwnJkyYaIOwfph5ed9GvQsH0RpYA+tuMSPSJky0LUCxZkNaH7Z//CABpn2NHNNTYsKEiTaDOql7ydb3NdDkJNm0dzfOE6tMEBMmTPgVFovM2ndFv0mO/q1JZjBLaN2leKF3SIxMmDDhLnZZLdZrm/rHJgV430UDdtVJzTliwoQJ/6HWco4j09lAs9yc2VcMmosfD4kJEyZ8jzrLjVnX9F3W3FNaJNfNurLf41JnfVRMmDDhQ1gfybq672stPcspduysq/s/YgqxCRM+AmQt68r+TsmbRVxA2lsb74TIPysmTJhoBVjqxGq9N+uqfk7LmEsCTKS9u2WCxVr7kVWks5gwYcJLsGTX1dadmXNN/0UuvUrcQNp7G7rBwZ6GX0eICRMmPINF5lUHWi7Ou7RvhrgItwTYQNpbGx5Blvl2vEuUmDBhwiWokmVr7WP7rhrwX3ETHgkwQW1srZMn8GUuEhMmTDgFi9X6qYRb72O9hXgAjwXYQOrb6wdBiO+ARr5UTJgw4RhW6w/WQOtT2ZcPWCxegNcE2IDmH8tDEOZTEehKEhMm/uagqWwNsLxlran7X/bV/XaIF+F1AbZF+jsbJtZZ5UJoZTZFdBMTJv4mgGDtt0rdVAR7v4zqGPTH1pN6t8p81VYVYFvQxA4US/c6i3WcSOAAi1hjoaE7WawSZdWCYGFiwkT7QQWkB0EoqbBYLPutVtkKYdppFeufAcHBizMv6emTmWP/D0mKabDvM4L2AAAAAElFTkSuQmCC",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo6);

/***/ }),

/***/ "./src/components/navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/navbar/Navbar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\navbar\\Navbar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// NavBar.tsx


function NavBar() {
  return __jsx("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "navBar",
    style: {
      display: "flex",
      listStyle: "none",
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "liStyle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("li", {
    style: {
      marginRight: "120px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "Trang ch\u1EE7")), __jsx("li", {
    style: {
      marginRight: "120px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/bao-hanh",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "B\u1EA3o h\xE0nh")), __jsx("li", {
    style: {
      marginRight: "120px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/he-thong-dai-ly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "H\u1EC7 th\u1ED1ng \u0111\u1EA1i l\xFD")), __jsx("li", {
    style: {
      marginRight: "120px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/tin-tuc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Tin t\u1EE9c")), __jsx("li", {
    style: {
      marginRight: "120px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/tuyen-dung",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Tuy\u1EC3n d\u1EE5ng")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/lien-he",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Li\xEAn h\u1EC7"))));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/sticky/SickyStyle.tsx":
/*!**********************************************!*\
  !*** ./src/components/sticky/SickyStyle.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.ts");


const StyledSticky = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: ${props => props.fixed ? "fixed" : "relative"};
  top: ${props => props.fixedOn}px;
  right: 0;
  left: 0;

  // box-shadow: ${props => props.fixed ? Object(utils_utils__WEBPACK_IMPORTED_MODULE_1__["getTheme"])("shadows.small") : "unset"};

  transition: all 250ms ease-in-out;
  z-index: 99;

  & + .section-after-sticky {
    padding-top: ${props => props.fixed ? `${props.componentHeight}px` : "inherit"};
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledSticky);

/***/ }),

/***/ "./src/components/sticky/Sticky.tsx":
/*!******************************************!*\
  !*** ./src/components/sticky/Sticky.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SickyStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SickyStyle */ "./src/components/sticky/SickyStyle.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\sticky\\Sticky.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Sticky = ({
  fixedOn,
  containerRef,
  children,
  notifyPosition,
  notifyOnScroll,
  onSticky
}) => {
  const {
    0: fixed,
    1: setFixed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: parentHeight,
    1: setParentHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const positionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const scrollListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!window) return;
    let distance = window.pageYOffset - positionRef.current;

    if (containerRef !== null && containerRef !== void 0 && containerRef.current) {
      var _containerRef$current;

      let containerDistance = containerRef.current.offsetTop + ((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetHeight) - window.pageYOffset;

      if (notifyPosition && notifyOnScroll) {
        notifyOnScroll(distance <= notifyPosition && containerDistance > notifyPosition);
      }

      return setFixed(distance <= fixedOn && containerDistance > fixedOn);
    }

    if (notifyPosition && notifyOnScroll) {
      notifyOnScroll(distance >= notifyPosition);
    }

    let isFixed = distance >= fixedOn;
    setFixed(isFixed);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!window) return;
    window.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", scrollListener);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _elementRef$current2;

    if (!positionRef.current) {
      var _elementRef$current;

      positionRef.current = (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.offsetTop;
    }

    setParentHeight(((_elementRef$current2 = elementRef.current) === null || _elementRef$current2 === void 0 ? void 0 : _elementRef$current2.offsetHeight) || 0);
  }, [elementRef.current, children]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (onSticky) onSticky(fixed);
  }, [fixed]);
  return __jsx(_SickyStyle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    componentPosition: positionRef.current,
    componentHeight: parentHeight,
    fixedOn: fixedOn,
    fixed: fixed,
    ref: elementRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    isFixed: fixed
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sticky);

/***/ }),

/***/ "./src/components/topbar/Topbar.style.tsx":
/*!************************************************!*\
  !*** ./src/components/topbar/Topbar.style.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledTopbar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background-color :#00ADEF;
  color: white;
  height: 40px;
  font-size: 12px;

  .topbar-left {
    .logo {
      display: none;
      img {
        display: block;
        height: 36px;
      }
    }
    span {
      margin-left: 10px;
    }
    @media only screen and (max-width: 900px) {
      .logo {
        display: block;
      }
      *:not(.logo) {
        display: none;
      }
    }
  }

  .topbar-right {
    .link {
      padding-right: 30px;
      color: white;
    }
    .dropdown-handler {
      cursor: pointer;
      img {
        height: 14px;
        border-radius: 4px;
      }
      span {
        margin-right: 0.25rem;
        margin-left: 0.5rem;
      }
    }
    @media only screen and (max-width: 900px) {
      .link {
        display: none;
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledTopbar);

/***/ }),

/***/ "./src/components/topbar/Topbar.tsx":
/*!******************************************!*\
  !*** ./src/components/topbar/Topbar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Topbar_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Topbar.style */ "./src/components/topbar/Topbar.style.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\topbar\\Topbar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Topbar() {
  return __jsx(_Topbar_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./src/components/topbar/TopbarHeader.tsx":
/*!************************************************!*\
  !*** ./src/components/topbar/TopbarHeader.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\components\\topbar\\TopbarHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TopbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  color: #fff;
  padding: 10px 0;
`;
const TopbarList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopbarItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li`
  color: #00adef;
  margin-right: 15px;
  cursor: pointer;

  &:last-child {
    color: red;
    margin-right: 0;
  }
`;
const LanguageSelector = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.select`
  background-color: transparent;
  color: red;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

function TopbarHeader() {
  return __jsx(TopbarWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(TopbarList, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(TopbarItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "8:00 \u0111\u1EBFn 17:30 th\u1EE9 2 \u0111\u1EBFn th\u1EE9 7"), __jsx(TopbarItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "0377 222 777"), __jsx(TopbarItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "63 C\u1EEDa H\xE0ng", __jsx(LanguageSelector, {
    style: {
      marginLeft: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "vi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Ti\u1EBFng Vi\u1EC7t"), __jsx("option", {
    value: "en",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "English"), __jsx("option", {
    value: "fr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "France"))), __jsx(TopbarItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "\u0110\u0103ng nh\u1EADp/\u0110\u0103ng k\xFD")));
}

/* harmony default export */ __webpack_exports__["default"] = (TopbarHeader);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_HomePage_Section1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/HomePage/Section1 */ "./src/components/HomePage/Section1.tsx");
/* harmony import */ var _component_HomePage_Section11__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/HomePage/Section11 */ "./src/components/HomePage/Section11.tsx");
/* harmony import */ var _component_HomePage_Section13__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/HomePage/Section13 */ "./src/components/HomePage/Section13.tsx");
/* harmony import */ var _component_HomePage_Section5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @component/HomePage/Section5 */ "./src/components/HomePage/Section5.tsx");
/* harmony import */ var _components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/AppLayout */ "./src/components/layout/AppLayout.tsx");
/* harmony import */ var _component_HomePage_ButtonSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @component/HomePage/ButtonSearch */ "./src/components/HomePage/ButtonSearch.tsx");
/* harmony import */ var _component_HomePage_BestSeller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @component/HomePage/BestSeller */ "./src/components/HomePage/BestSeller.tsx");
/* harmony import */ var _component_HomePage_Distribution__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @component/HomePage/Distribution */ "./src/components/HomePage/Distribution.tsx");
/* harmony import */ var _component_HomePage_ShopSystem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @component/HomePage/ShopSystem */ "./src/components/HomePage/ShopSystem.tsx");
/* harmony import */ var _component_HomePage_Advise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @component/HomePage/Advise */ "./src/components/HomePage/Advise.tsx");
/* harmony import */ var _component_HomePage_Summary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @component/HomePage/Summary */ "./src/components/HomePage/Summary.tsx");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const IndexPage = () => {
  return __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_component_HomePage_Section1__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_component_HomePage_Section5__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_component_HomePage_ButtonSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_component_HomePage_Section13__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_component_HomePage_BestSeller__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_component_HomePage_Section11__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_component_HomePage_Distribution__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_component_HomePage_ShopSystem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_component_HomePage_Advise__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_component_HomePage_Summary__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

IndexPage.layout = _components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: deviceSize, layoutConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceSize", function() { return deviceSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutConstant", function() { return layoutConstant; });
const deviceSize = {
  xs: 425,
  sm: 768,
  md: 1024,
  lg: 1440
};
const layoutConstant = {
  grocerySidenavWidth: "280px",
  containerWidth: "1200px",
  mobileNavHeight: "64px",
  headerHeight: "80px",
  mobileHeaderHeight: "64px"
};

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: getTheme, convertHexToRGB, getDateDifference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHexToRGB", function() { return convertHexToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateDifference", function() { return getDateDifference; });
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



const getTheme = (query, fallback) => Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__["themeGet"])(query, fallback);
const convertHexToRGB = hex => {
  // check if it's a rgba
  if (hex.match("rgba")) {
    let triplet = hex.slice(5).split(",").slice(0, -1).join(",");
    return triplet;
  }

  let c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");

    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = "0x" + c.join("");
    return [c >> 16 & 255, c >> 8 & 255, c & 255].join(",");
  }
};
const getDateDifference = date => {
  let diff = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMinutes"])(new Date(), new Date(date));
  if (diff < 60) return diff + " minutes ago";
  diff = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["ceil"])(diff / 60);
  if (diff < 24) return `${diff} hour${diff === 0 ? "" : "s"} ago`;
  diff = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["ceil"])(diff / 24);
  if (diff < 30) return `${diff} day${diff === 0 ? "" : "s"} ago`;
  diff = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["ceil"])(diff / 30);
  if (diff < 12) return `${diff} month${diff === 0 ? "" : "s"} ago`;
  diff = diff / 12;
  return `${diff.toFixed(1)} year${Object(lodash__WEBPACK_IMPORTED_MODULE_2__["ceil"])(diff) === 0 ? "" : "s"} ago`;
};

/***/ }),

/***/ "@react-google-maps/api":
/*!*****************************************!*\
  !*** external "@react-google-maps/api" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVNlY3Rpb25DcmVhdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVNlY3Rpb25IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmxleEJveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UvQWR2aXNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lUGFnZS9CZXN0U2VsbGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lUGFnZS9CdXR0b25TZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWVQYWdlL0Rpc3RyaWJ1dGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UvR29vZ2xlbWFwcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UvU2VjdGlvbjEudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWVQYWdlL1NlY3Rpb24xMS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UvU2VjdGlvbjEzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lUGFnZS9TZWN0aW9uNS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UvU2hvcFN5c3RlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UvU3VtbWFyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UvaG9tZXBhZ2Vjc3MvSG9tZVBhZ2Uuc3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC1jYXJkcy9DYXJvdXNlbENhcmQxLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC1jYXJkcy9DYXJvdXNlbENhcmRTdHlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvQXBwTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvQXBwTGF5b3V0U3R5bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28vbG9nbzEudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28vbG9nbzIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28vbG9nbzQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28vbG9nbzUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28vbG9nbzYudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0aWNreS9TaWNreVN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGlja3kvU3RpY2t5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b3BiYXIvVG9wYmFyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b3BiYXIvVG9wYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b3BiYXIvVG9wYmFySGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1zeXN0ZW1cIiJdLCJuYW1lcyI6WyJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkJveCIsInN0eWxlZCIsImRpdiIsInNoYWRvdyIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0aGVtZSIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJjb21wb3NlIiwibGF5b3V0Iiwic3BhY2UiLCJjb2xvciIsInBvc2l0aW9uIiwiZmxleGJveCIsImZsZXgiLCJib3JkZXIiLCJkZWZhdWx0UHJvcHMiLCJDYXJkIiwiZ2V0VGhlbWUiLCJlbGV2YXRpb24iLCJob3ZlckVmZmVjdCIsImJvcmRlclJhZGl1cyIsIkNhdGVnb3J5U2VjdGlvbkNyZWF0b3IiLCJpY29uTmFtZSIsInNlZU1vcmVMaW5rIiwidGl0bGUiLCJDYXRlZ29yeVNlY3Rpb25IZWFkZXIiLCJDb250YWluZXIiLCJsYXlvdXRDb25zdGFudCIsImNvbnRhaW5lcldpZHRoIiwiRmxleEJveCIsIkFkdmlzZSIsImNsYXNzTmFtZSIsIkJlc3RTZWxsZXIiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiZmxleEJhc2lzIiwibWFyZ2luIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsIkJ1dHRvblNlYXJjaCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmQiLCJmbGV4R3JvdyIsIkRpc3RyaWJ1dGlvbiIsInBhZGRpbmciLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJjb250YWluZXJTdHlsZSIsImNlbnRlciIsImxhdCIsImxuZyIsIkdvb2dsZW1hcCIsImlzTG9hZGVkIiwibG9hZEVycm9yIiwidXNlTG9hZFNjcmlwdCIsImdvb2dsZU1hcHNBcGlLZXkiLCJTZWN0aW9uMSIsIkNhcmRJdGVtIiwiU2VjdGlvbjExIiwiU2VjdGlvbjEzIiwiQ2FyZFdyYXBwZXIiLCJMb2dvIiwiaW1nIiwiVGV4dCIsIlNlY3Rpb241IiwiU2hvcFN5c3RlbSIsIkN1c3RvbUNhcmQiLCJ0ZXh0QWxpZ24iLCJTdHlsZWRIb21lIiwiSW1hZ2UiLCJDYXJvdXNlbENhcmQxIiwiU3R5bGVkQ2Fyb3VzZWxDYXJkMSIsIlN0eWxlZExpbmsiLCJhIiwiRm9vdGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZmxleERpcmVjdGlvbiIsIkhlYWRlciIsIlN0eWxlZEhlYWRlciIsImhlYWRlciIsIm1vYmlsZUhlYWRlckhlaWdodCIsIkFwcExheW91dCIsIm5hdmJhciIsIlN0eWxlZEFwcExheW91dCIsIkljb24xIiwiTG9nbzIiLCJMb2dvNCIsIkxvZ281IiwiTG9nbzYiLCJOYXZCYXIiLCJsaXN0U3R5bGUiLCJTdHlsZWRTdGlja3kiLCJmaXhlZCIsImZpeGVkT24iLCJjb21wb25lbnRIZWlnaHQiLCJTdGlja3kiLCJjb250YWluZXJSZWYiLCJub3RpZnlQb3NpdGlvbiIsIm5vdGlmeU9uU2Nyb2xsIiwib25TdGlja3kiLCJzZXRGaXhlZCIsInVzZVN0YXRlIiwicGFyZW50SGVpZ2h0Iiwic2V0UGFyZW50SGVpZ2h0IiwiZWxlbWVudFJlZiIsInVzZVJlZiIsInBvc2l0aW9uUmVmIiwic2Nyb2xsTGlzdGVuZXIiLCJ1c2VDYWxsYmFjayIsImRpc3RhbmNlIiwicGFnZVlPZmZzZXQiLCJjdXJyZW50IiwiY29udGFpbmVyRGlzdGFuY2UiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJpc0ZpeGVkIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9uZUVsZW1lbnQiLCJTdHlsZWRUb3BiYXIiLCJUb3BiYXIiLCJUb3BiYXJXcmFwcGVyIiwiVG9wYmFyTGlzdCIsInVsIiwiVG9wYmFySXRlbSIsImxpIiwiTGFuZ3VhZ2VTZWxlY3RvciIsInNlbGVjdCIsIlRvcGJhckhlYWRlciIsIkluZGV4UGFnZSIsImRldmljZVNpemUiLCJ4cyIsInNtIiwibWQiLCJsZyIsImdyb2NlcnlTaWRlbmF2V2lkdGgiLCJtb2JpbGVOYXZIZWlnaHQiLCJoZWFkZXJIZWlnaHQiLCJmYWxsYmFjayIsInRoZW1lR2V0IiwiY29udmVydEhleFRvUkdCIiwiaGV4IiwibWF0Y2giLCJ0cmlwbGV0Iiwic2xpY2UiLCJzcGxpdCIsImpvaW4iLCJjIiwidGVzdCIsInN1YnN0cmluZyIsImxlbmd0aCIsImdldERhdGVEaWZmZXJlbmNlIiwiZGF0ZSIsImRpZmYiLCJkaWZmZXJlbmNlSW5NaW51dGVzIiwiY2VpbCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFD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QWEsRUFBYixHQUFrQixHQUFJLE1BQTdDO0FBRWZBLE1BQUksR0FBR0EsSUFBSSxHQUFHLEVBQWQ7QUFDQSxTQUFRLEdBQUVBLElBQUksQ0FBQ0csT0FBTCxDQUFhLENBQWIsQ0FBZ0IsUUFBT0QsbURBQUksQ0FBQ0YsSUFBRCxDQUFKLEtBQWUsQ0FBZixHQUFtQixFQUFuQixHQUF3QixHQUFJLE1BQTdEO0FBQ0QsQ0FmTSxDOzs7Ozs7Ozs7OztBQzNCUCxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgYm9yZGVyLFxyXG4gIEJvcmRlclByb3BzLFxyXG4gIGNvbG9yLFxyXG4gIENvbG9yUHJvcHMsXHJcbiAgY29tcG9zZSxcclxuICBmbGV4LFxyXG4gIGZsZXhib3gsXHJcbiAgRmxleGJveFByb3BzLFxyXG4gIEZsZXhQcm9wcyxcclxuICBsYXlvdXQsXHJcbiAgTGF5b3V0UHJvcHMsXHJcbiAgcG9zaXRpb24sXHJcbiAgUG9zaXRpb25Qcm9wcyxcclxuICBzcGFjZSxcclxuICBTcGFjZVByb3BzLFxyXG4gIFR5cG9ncmFwaHlQcm9wcyxcclxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxudHlwZSBCb3hQcm9wcyA9IHtcclxuICBzaGFkb3c/OiBudW1iZXI7XHJcbiAgY3Vyc29yPzogc3RyaW5nO1xyXG4gIHRyYW5zaXRpb24/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2PFxyXG4gIEJveFByb3BzICZcclxuICAgIExheW91dFByb3BzICZcclxuICAgIENvbG9yUHJvcHMgJlxyXG4gICAgUG9zaXRpb25Qcm9wcyAmXHJcbiAgICBTcGFjZVByb3BzICZcclxuICAgIEZsZXhQcm9wcyAmXHJcbiAgICBCb3JkZXJQcm9wcyAmXHJcbiAgICBGbGV4Ym94UHJvcHMgJlxyXG4gICAgVHlwb2dyYXBoeVByb3BzXHJcbj4oXHJcbiAgKHsgc2hhZG93LCBjdXJzb3IsIHRyYW5zaXRpb24sIHRoZW1lIH0pID0+ICh7XHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3Nbc2hhZG93XSxcclxuICAgIGN1cnNvcixcclxuICAgIHRyYW5zaXRpb24sXHJcbiAgfSksXHJcbiAgY29tcG9zZShsYXlvdXQsIHNwYWNlLCBjb2xvciwgcG9zaXRpb24sIGZsZXhib3gsIGZsZXgsIGJvcmRlciwpXHJcbik7XHJcblxyXG5Cb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIHNoYWRvdzogMCxcclxuICBjdXJzb3I6IFwidW5zZXRcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveDtcclxuIiwiaW1wb3J0IHsgc2hhZG93T3B0aW9ucyB9IGZyb20gXCJpbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgYm9yZGVyLFxyXG4gIEJvcmRlclByb3BzLFxyXG4gIGNvbG9yLFxyXG4gIENvbG9yUHJvcHMsXHJcbiAgbGF5b3V0LFxyXG4gIExheW91dFByb3BzLFxyXG4gIHNwYWNlLFxyXG4gIFNwYWNlUHJvcHMsXHJcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFByb3BzIHtcclxuICBlbGV2YXRpb24/OiBudW1iZXI7XHJcbiAgYm94U2hhZG93Pzogc2hhZG93T3B0aW9ucztcclxuICBob3ZlckVmZmVjdD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KTxcclxuICBDb2xvclByb3BzICYgU3BhY2VQcm9wcyAmIExheW91dFByb3BzICYgQm9yZGVyUHJvcHMgJiBDYXJkUHJvcHNcclxuPmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2dldFRoZW1lKFwiY29sb3JzLmJvZHkucGFwZXJcIil9O1xyXG4gIGJveC1zaGFkb3c6ICR7KHByb3BzKSA9PlxyXG4gICAgZ2V0VGhlbWUoYHNoYWRvd3MuJHtwcm9wcy5ib3hTaGFkb3d9YCwgYHNoYWRvd3MuJHtwcm9wcy5lbGV2YXRpb259YCl9O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogJHsocHJvcHMpID0+IHByb3BzLmhvdmVyRWZmZWN0ICYmIGdldFRoZW1lKFwic2hhZG93cy5sYXJnZVwiKX07XHJcbiAgfVxyXG5cclxuICAke2JvcmRlcn1cclxuICAke2NvbG9yfVxyXG4gICR7c3BhY2V9XHJcbiAgJHtsYXlvdXR9XHJcbmA7XHJcblxyXG5DYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBib3hTaGFkb3c6IFwic21hbGxcIixcclxuICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgaG92ZXJFZmZlY3Q6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTZWN0aW9uSGVhZGVyIGZyb20gXCIuL0NhdGVnb3J5U2VjdGlvbkhlYWRlclwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeVNlY3Rpb25DcmVhdG9yUHJvcHMge1xyXG4gIGljb25OYW1lPzogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIHNlZU1vcmVMaW5rPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDYXRlZ29yeVNlY3Rpb25DcmVhdG9yOiBSZWFjdC5GQzxDYXRlZ29yeVNlY3Rpb25DcmVhdG9yUHJvcHM+ID0gKHtcclxuICBpY29uTmFtZSxcclxuICBzZWVNb3JlTGluayxcclxuICB0aXRsZSxcclxuICBjaGlsZHJlbixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG1iPVwiMy43NXJlbVwiPlxyXG4gICAgICA8Q29udGFpbmVyIHBiPVwiMXJlbVwiPlxyXG4gICAgICAgIHt0aXRsZSAmJiAoXHJcbiAgICAgICAgICA8Q2F0ZWdvcnlTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgc2VlTW9yZUxpbms9e3NlZU1vcmVMaW5rfVxyXG4gICAgICAgICAgICBpY29uTmFtZT17aWNvbk5hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvcjtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGbGV4Qm94IGZyb20gXCIuL0ZsZXhCb3hcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5U2VjdGlvbkhlYWRlclByb3BzIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBzZWVNb3JlTGluaz86IHN0cmluZztcclxuICBpY29uTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcnlTZWN0aW9uSGVhZGVyOiBSZWFjdC5GQzxDYXRlZ29yeVNlY3Rpb25IZWFkZXJQcm9wcz4gPSAoe1xyXG4gIHRpdGxlLFxyXG4gIHNlZU1vcmVMaW5rLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4Qm94IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj1cIjEuNXJlbVwiPlxyXG4gICAgICA8RmxleEJveCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvRmxleEJveD5cclxuXHJcbiAgICAgIHtzZWVNb3JlTGluayAmJiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17c2VlTW9yZUxpbmt9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxGbGV4Qm94IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtbD1cIjAuNXJlbVwiIGNvbG9yPVwidGV4dC5tdXRlZFwiPlxyXG4gICAgICAgICAgICAgIDxoMyA+VmlldyBhbGw8L2gzPlxyXG4gICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC9GbGV4Qm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVNlY3Rpb25IZWFkZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgY29sb3IsXHJcbiAgQ29sb3JQcm9wcyxcclxuICBmbGV4Ym94LFxyXG4gIEZsZXhib3hQcm9wcyxcclxuICBsYXlvdXQsXHJcbiAgTGF5b3V0UHJvcHMsXHJcbiAgcG9zaXRpb24sXHJcbiAgUG9zaXRpb25Qcm9wcyxcclxuICBzcGFjZSxcclxuICBTcGFjZVByb3BzLFxyXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcbmltcG9ydCB7IGxheW91dENvbnN0YW50IH0gZnJvbSBcInV0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxcclxuICBMYXlvdXRQcm9wcyAmIENvbG9yUHJvcHMgJiBQb3NpdGlvblByb3BzICYgU3BhY2VQcm9wcyAmIEZsZXhib3hQcm9wc1xyXG4+YFxyXG4gIG1heC13aWR0aDogJHtsYXlvdXRDb25zdGFudC5jb250YWluZXJXaWR0aH07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAke2NvbG9yfVxyXG4gICR7cG9zaXRpb259XHJcbiAgJHtmbGV4Ym94fVxyXG4gICR7bGF5b3V0fVxyXG4gICR7c3BhY2V9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgYm9yZGVyLFxyXG4gIEJvcmRlclByb3BzLFxyXG4gIGNvbG9yLFxyXG4gIENvbG9yUHJvcHMsXHJcbiAgZmxleGJveCxcclxuICBGbGV4Ym94UHJvcHMsXHJcbiAgbGF5b3V0LFxyXG4gIExheW91dFByb3BzLFxyXG4gIHNwYWNlLFxyXG4gIFNwYWNlUHJvcHMsXHJcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcclxuXHJcbmNvbnN0IEZsZXhCb3ggPSBzdHlsZWQoQm94KTxcclxuICBGbGV4Ym94UHJvcHMgJiBMYXlvdXRQcm9wcyAmIFNwYWNlUHJvcHMgJiBDb2xvclByb3BzICYgQm9yZGVyUHJvcHNcclxuPmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICR7bGF5b3V0fVxyXG4gICR7Y29sb3J9XHJcbiAgJHtmbGV4Ym94fVxyXG4gICR7c3BhY2V9XHJcbiAgJHtib3JkZXJ9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbGV4Qm94O1xyXG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiQGNvbXBvbmVudC9DYXJkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhdGVnb3J5U2VjdGlvbkNyZWF0b3IgZnJvbSBcIi4uL0NhdGVnb3J5U2VjdGlvbkNyZWF0b3JcIjtcclxuaW1wb3J0IEdvb2dsZW1hcCBmcm9tIFwiLi9Hb29nbGVtYXBzXCI7XHJcbmltcG9ydCBTdHlsZWRIb21lIGZyb20gXCIuL2hvbWVwYWdlY3NzL0hvbWVQYWdlLnN0eWxlXCI7XHJcbnR5cGUgSGVhZGVyUHJvcHMgPSB7XHJcbiAgaXNGaXhlZD86IGJvb2xlYW47XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59O1xyXG5jb25zdCBBZHZpc2U6IFJlYWN0LkZDPEhlYWRlclByb3BzPiA9ICh7ICBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2F0ZWdvcnlTZWN0aW9uQ3JlYXRvcj5cclxuICAgICAgICAgPFN0eWxlZEhvbWUgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lclwiPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Uxq8gVuG6pE4gTUnhu4ROIFBIw408L2gxPlxyXG4gICAgICAgICAgICAgIDxoND5WdWkgbMOybmcgxJHhu4MgbOG6oWkgdGjDtG5nIHRpbiDEkeG7gyDEkcaw4bujYyB0xrAgduG6pW4gbWnhu4VuIHBow608L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yb3dcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIklucHV0IDFcIiBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIklucHV0IDJcIiBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dGFyZWEtcm93XCI+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiSW5wdXQgM1wiIHJvd3M9ezV9IGNsYXNzTmFtZT1cInRleHRhcmVhXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dGFyZWEtcm93XCI+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiSW5wdXQgNFwiIHJvd3M9ezV9IGNsYXNzTmFtZT1cInRleHRhcmVhXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dGFyZWEtcm93XCI+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiSW5wdXQgNVwiIHJvd3M9ezV9IGNsYXNzTmFtZT1cInRleHRhcmVhXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxHb29nbGVtYXAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvU3R5bGVkSG9tZT5cclxuICAgIDwvQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHZpc2U7XHJcbiIsImltcG9ydCBCb3ggZnJvbSBcIkBjb21wb25lbnQvQm94XCI7XHJcbmltcG9ydCBDYXRlZ29yeVNlY3Rpb25DcmVhdG9yIGZyb20gXCIuLi9DYXRlZ29yeVNlY3Rpb25DcmVhdG9yXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAY29tcG9uZW50L0NhcmRcIjtcclxuXHJcbmZ1bmN0aW9uIEJlc3RTZWxsZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXRlZ29yeVNlY3Rpb25DcmVhdG9yXHJcbiAgICAgIGljb25OYW1lPVwibGlnaHRcIlxyXG4gICAgICB0aXRsZT1cIk11YSBuaGnhu4F1IG5o4bqldCBcIlxyXG4gICAgICBzZWVNb3JlTGluaz1cIiNcIlxyXG4gICAgPlxyXG4gICAgICA8Qm94IG10PVwiLTAuMjVyZW1cIiBtYj1cIi0wLjI1cmVtXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCItMTBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IFwiY2FsYyg1MCUgLSAyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4OXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMjZweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYXJkIDFcclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IFwiY2FsYyg1MCUgLSAyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4OXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMjZweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYXJkIDJcclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IFwiY2FsYyg1MCUgLSAyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4OXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMjZweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYXJkIDNcclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IFwiY2FsYyg1MCUgLSAyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4OXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMjZweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYXJkIDRcclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTEwcHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmxleEJhc2lzOiBcImNhbGMoKDEwMCUgLyAzKSAtIDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM5MnB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyNDVweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYXJkIDVcclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6IFwiY2FsYygoMTAwJSAvIDMpIC0gMjBweClcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzkycHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0NXB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhcmQgNlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZsZXhCYXNpczogXCJjYWxjKCgxMDAlIC8gMykgLSAyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzOTJweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjQ1cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FyZCA3XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZXN0U2VsbGVyO1xyXG4iLCJpbXBvcnQgQm94IGZyb20gXCJAY29tcG9uZW50L0JveFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvciBmcm9tIFwiLi4vQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvclwiO1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uU2VhcmNoKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2F0ZWdvcnlTZWN0aW9uQ3JlYXRvcj5cclxuICAgICAgPEJveCBtdD1cIi0wLjI1cmVtXCIgbWI9XCItMC4yNXJlbVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjE2OXB4XCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQzcHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMUFCRUNcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLCBcclxuICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLCBcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXMgOiBcIjVweFwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJ1dHRvbiAxXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjMzcHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxNjlweFwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0M3B4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMDFBQkVDXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIiwgXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIiwgXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzIDogXCI1cHhcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCdXR0b24gMlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIzM3B4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTY5cHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDNweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzAxQUJFQ1wiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsIFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsIFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cyA6IFwiNXB4XCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQnV0dG9uIDNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzODNweFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTY5cHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0M3B4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMUFCRUNcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIiwgXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXMgOiBcIjVweFwiXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25TZWFyY2g7XHJcbiIsImltcG9ydCBCb3ggZnJvbSBcIkBjb21wb25lbnQvQm94XCI7XHJcbmltcG9ydCBDYXRlZ29yeVNlY3Rpb25DcmVhdG9yIGZyb20gXCIuLi9DYXRlZ29yeVNlY3Rpb25DcmVhdG9yXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAY29tcG9uZW50L0NhcmRcIjtcclxuXHJcbmZ1bmN0aW9uIERpc3RyaWJ1dGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhdGVnb3J5U2VjdGlvbkNyZWF0b3IgaWNvbk5hbWU9XCJsaWdodFwiIHNlZU1vcmVMaW5rPVwiI1wiPlxyXG4gICAgICA8Qm94IG10PVwiLTAuMjVyZW1cIiBtYj1cIi0wLjI1cmVtXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiwgd2lkdGg6IFwiNDAlXCIsIG1hcmdpbkxlZnQ6IFwiMTdweFwiIH19PlxyXG4gICAgICAgICAgICA8aDE+IEvDqm5oIHBow6JuIHBo4buRaSBjaMOtbmg8L2gxPlxyXG4gICAgICAgICAgICA8aDU+SMahbiAxMDAgxJHhuqFpIGzDvSBwaMOibiBwaOG7kWkgdOG6oWkgdOG6pXQgY+G6oyBjw6FjIHThu4luaCB0aMOgbmggcGjhu5EsIGdpYW8gaMOgbmcgdOG6rW4gbsahaSBi4bqjbyBow6BuaCB2w6AgaOG6rXUgbcOjaSBjaHUgxJHDoW88L2g1PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEzNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0OHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTM2cHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQ4cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNTUlXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIyNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cclxuICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjg1cHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYXJkIDFcclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI4NXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYXJkIDJcclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI4NXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTE1cHhcIiwgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhcmQgM1xyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjg1cHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhcmQgNFxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NhdGVnb3J5U2VjdGlvbkNyZWF0b3I+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzdHJpYnV0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdvb2dsZU1hcCwgTWFya2VyLCB1c2VMb2FkU2NyaXB0IH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcclxuaW1wb3J0IHsgZnVuY3Rpb25zIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XHJcbiAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIGhlaWdodDogXCIxMDAlXCIsXHJcbn07XHJcblxyXG5jb25zdCBjZW50ZXIgPSB7XHJcbiAgbGF0OiAgMjEuMDI4NSAsIFxyXG4gIGxuZzogMTA1Ljg1NDIgLCBcclxufTtcclxuXHJcbmZ1bmN0aW9uIEdvb2dsZW1hcCgpICB7XHJcbiAgY29uc3QgeyBpc0xvYWRlZCwgbG9hZEVycm9yIH0gPSB1c2VMb2FkU2NyaXB0KHtcclxuICAgIGdvb2dsZU1hcHNBcGlLZXk6IFwiWU9VUl9BUElfS0VZXCIsIFxyXG4gIH0pO1xyXG5cclxuICBpZiAobG9hZEVycm9yKSByZXR1cm4gPGRpdj7EkMOjIHjhuqN5IHJhIGzhu5dpIGtoaSB04bqjaSBi4bqjbiDEkeG7kzwvZGl2PjtcclxuICBpZiAoIWlzTG9hZGVkKSByZXR1cm4gPGRpdj7EkGFuZyB04bqjaSBi4bqjbiDEkeG7ky4uLjwvZGl2PjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxyXG4gICAgICA8R29vZ2xlTWFwIG1hcENvbnRhaW5lclN0eWxlPXtjb250YWluZXJTdHlsZX0gY2VudGVyPXtjZW50ZXJ9IHpvb209ezE1fT5cclxuICBcclxuICAgICAgPC9Hb29nbGVNYXA+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlbWFwO1xyXG4iLCIvLyBpbXBvcnQgQm94IGZyb20gXCJAY29tcG9uZW50L0JveFwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWxDYXJkMSBmcm9tIFwiQGNvbXBvbmVudC9jYXJvdXNlbC1jYXJkcy9DYXJvdXNlbENhcmQxXCI7XHJcbi8vIGltcG9ydCBDYXJvdXNlbCBmcm9tIFwiQGNvbXBvbmVudC9jYXJvdXNlbC9DYXJvdXNlbFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAY29tcG9uZW50L0NvbnRhaW5lclwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTZWN0aW9uMTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPENvbnRhaW5lciBwYj1cIjJyZW1cIj5cclxuICAgICAgICA8Q2Fyb3VzZWxDYXJkMSAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24xO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAY29tcG9uZW50L0NhcmRcIjtcclxuaW1wb3J0IENhdGVnb3J5U2VjdGlvbkNyZWF0b3IgZnJvbSBcIi4uL0NhdGVnb3J5U2VjdGlvbkNyZWF0b3JcIjtcclxuLy8gaW1wb3J0IEhvdmVyQm94IGZyb20gXCJAY29tcG9uZW50L0hvdmVyQm94XCI7XHJcbi8vIGltcG9ydCBMYXp5SW1hZ2UgZnJvbSBcIkBjb21wb25lbnQvTGF6eUltYWdlXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBjb21wb25lbnQvQm94XCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gU3R5bGVkLWNvbXBvbmVudHMgY2hvIGNvbnRhaW5lclxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyNXB4O1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IENhcmRJdGVtID0gc3R5bGVkKENhcmQpYFxyXG4gIHdpZHRoOiAyOTFweDtcclxuICBoZWlnaHQ6IDQwOHB4O1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2VjdGlvbjExKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2F0ZWdvcnlTZWN0aW9uQ3JlYXRvclxyXG4gICAgICBpY29uTmFtZT1cImdpZnRcIlxyXG4gICAgICB0aXRsZT1cIlPhuqNuIFBo4bqpbSBO4buVaSBC4bqtdCBcIlxyXG4gICAgICBzZWVNb3JlTGluaz1cIiNcIlxyXG4gICAgPlxyXG4gICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBteT1cIi0wLjI1cmVtXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIHsvKiBUaOG6uyBjYXJkIDEgKi99XHJcbiAgICAgICAgICA8Q2FyZEl0ZW0+XHJcbiAgICAgICAgICAgIDxwPkNhcmQgMTwvcD5cclxuICAgICAgICAgIDwvQ2FyZEl0ZW0+XHJcblxyXG4gICAgICAgICAgey8qIFRo4bq7IGNhcmQgMiAqL31cclxuICAgICAgICAgIDxDYXJkSXRlbT5cclxuICAgICAgICAgICAgPHA+Q2FyZCAxPC9wPlxyXG4gICAgICAgICAgPC9DYXJkSXRlbT5cclxuXHJcbiAgICAgICAgICB7LyogVGjhursgY2FyZCAzICovfVxyXG4gICAgICAgICAgPENhcmRJdGVtPlxyXG4gICAgICAgICAgICA8cD5DYXJkIDE8L3A+XHJcbiAgICAgICAgICA8L0NhcmRJdGVtPlxyXG5cclxuICAgICAgICAgIHsvKiBUaOG6uyBjYXJkIDQgKi99XHJcbiAgICAgICAgICA8Q2FyZEl0ZW0+XHJcbiAgICAgICAgICAgIDxwPkNhcmQgMTwvcD5cclxuICAgICAgICAgIDwvQ2FyZEl0ZW0+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9DYXRlZ29yeVNlY3Rpb25DcmVhdG9yPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24xMTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQGNvbXBvbmVudC9DYXJkXCI7XHJcbmltcG9ydCBDYXRlZ29yeVNlY3Rpb25DcmVhdG9yIGZyb20gXCIuLi9DYXRlZ29yeVNlY3Rpb25DcmVhdG9yXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBjb21wb25lbnQvQm94XCI7XHJcbi8vIFN0eWxlZC1jb21wb25lbnRzIGNobyBjb250YWluZXJcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjVweDtcclxuYDtcclxuXHJcblxyXG5jb25zdCBDYXJkSXRlbSA9IHN0eWxlZChDYXJkKWBcclxuICB3aWR0aDogMjIzcHg7XHJcbiAgaGVpZ2h0OiAzMDdweDtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNlY3Rpb24xMygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhdGVnb3J5U2VjdGlvbkNyZWF0b3IgaWNvbk5hbWU9XCJnaWZ0XCIgdGl0bGU9XCJLaHV54bq/biBNw6NpIFwiIHNlZU1vcmVMaW5rPVwiI1wiPlxyXG4gICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBteT1cIi0wLjI1cmVtXCI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIHsvKiBUaOG6uyBjYXJkIDEgKi99XHJcbiAgICAgICAgPENhcmRJdGVtPlxyXG4gICAgICAgICAgPHA+Q2FyZCAxPC9wPlxyXG4gICAgICAgIDwvQ2FyZEl0ZW0+XHJcblxyXG4gICAgICAgIHsvKiBUaOG6uyBjYXJkIDIgKi99XHJcbiAgICAgICAgPENhcmRJdGVtPlxyXG4gICAgICAgICAgPHA+Q2FyZCAxPC9wPlxyXG4gICAgICAgIDwvQ2FyZEl0ZW0+XHJcblxyXG4gICAgICAgIHsvKiBUaOG6uyBjYXJkIDMgKi99XHJcbiAgICAgICAgPENhcmRJdGVtPlxyXG4gICAgICAgICAgPHA+Q2FyZCAxPC9wPlxyXG4gICAgICAgIDwvQ2FyZEl0ZW0+XHJcblxyXG4gICAgICAgIHsvKiBUaOG6uyBjYXJkIDQgKi99XHJcbiAgICAgICAgPENhcmRJdGVtPlxyXG4gICAgICAgICAgPHA+Q2FyZCAxPC9wPlxyXG4gICAgICAgIDwvQ2FyZEl0ZW0+XHJcblxyXG4gICAgICAgIHsvKiBUaOG6uyBjYXJkIDUgKi99XHJcblxyXG4gICAgICAgIDxDYXJkSXRlbT5cclxuICAgICAgICAgIDxwPkNhcmQgMTwvcD5cclxuICAgICAgICA8L0NhcmRJdGVtPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uMTM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBjb21wb25lbnQvQ2FyZFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvciBmcm9tIFwiLi4vQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvclwiO1xyXG5pbXBvcnQgSWNvbjEgZnJvbSBcIkBjb21wb25lbnQvbG9nby9sb2dvMVwiO1xyXG5pbXBvcnQgTG9nbzIgZnJvbSBcIkBjb21wb25lbnQvbG9nby9sb2dvMlwiO1xyXG5pbXBvcnQgTG9nbzQgZnJvbSBcIkBjb21wb25lbnQvbG9nby9sb2dvNFwiO1xyXG5pbXBvcnQgTG9nbzUgZnJvbSBcIkBjb21wb25lbnQvbG9nby9sb2dvNVwiO1xyXG5pbXBvcnQgTG9nbzYgZnJvbSBcIkBjb21wb25lbnQvbG9nby9sb2dvNlwiO1xyXG4vLyBTdHlsZWQtY29tcG9uZW50cyBjaG8gdGjhursgY2FyZFxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ8SDbiBjaOG7iW5oIGPDoWMgcGjhuqduIHThu60gdGhlbyBjaGnhu4F1IG5nYW5nIGdp4buvYSB0aOG6uyBjYXJkICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ8SDbiBjaOG7iW5oIGPDoWMgcGjhuqduIHThu60gdGhlbyBjaGnhu4F1IGThu41jIGdp4buvYSB0aOG6uyBjYXJkICovXHJcbmA7XHJcblxyXG5cclxuY29uc3QgQ2FyZEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxODlweDtcclxuICBoZWlnaHQ6IDE2OHB4O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmltZ2BcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogODBweDtcclxuYDtcclxuXHJcblxyXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gU2VjdGlvbjUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXRlZ29yeVNlY3Rpb25DcmVhdG9yPlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzVweFwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjI2NHB4XCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgIDxDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgPENhcmRJdGVtPlxyXG4gICAgICAgICAgICAgIDxJY29uMSAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0PlRleHQgMTwvVGV4dD5cclxuICAgICAgICAgICAgPC9DYXJkSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkSXRlbT5cclxuICAgICAgICAgICAgICA8TG9nbzIgLz5cclxuICAgICAgICAgICAgICA8VGV4dD5UZXh0IDE8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEljb24xIC8+XHJcbiAgICAgICAgICAgICAgPFRleHQ+VGV4dCAxPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0NhcmRJdGVtPlxyXG5cclxuICAgICAgICAgICAgPENhcmRJdGVtPlxyXG4gICAgICAgICAgICAgIDxMb2dvNCAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0PlRleHQgNDwvVGV4dD5cclxuICAgICAgICAgICAgPC9DYXJkSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkSXRlbT5cclxuICAgICAgICAgICAgICA8TG9nbzUgLz5cclxuICAgICAgICAgICAgICA8VGV4dD5UZXh0IDU8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExvZ282IC8+XHJcbiAgICAgICAgICAgICAgPFRleHQ+VGV4dCA2PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0NhcmRJdGVtPlxyXG4gICAgICAgICAgPC9DYXJkV3JhcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9DYXRlZ29yeVNlY3Rpb25DcmVhdG9yPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb241O1xyXG4iLCJpbXBvcnQgQm94IGZyb20gXCJAY29tcG9uZW50L0JveFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvciBmcm9tIFwiLi4vQ2F0ZWdvcnlTZWN0aW9uQ3JlYXRvclwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQGNvbXBvbmVudC9DYXJkXCI7XHJcblxyXG5mdW5jdGlvbiBTaG9wU3lzdGVtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2F0ZWdvcnlTZWN0aW9uQ3JlYXRvciBpY29uTmFtZT1cImxpZ2h0XCIgc2VlTW9yZUxpbms9XCIjXCI+XHJcbiAgICAgIDxCb3ggbXQ9XCItMC4yNXJlbVwiIG1iPVwiLTAuMjVyZW1cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjI1cHhcIn19Pkjhu4cgVGjhu5FuZyBD4butYSBIw6BuZzwvaDE+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiBcIjFcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzg3cHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI2NzRweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMzBweFwiLCAvLyBLaG/huqNuZyBjw6FjaCBiw6puIHBo4bqjaSBnaeG7r2EgY8OhYyB0aOG6uyBDYXJkXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhcmQgMVxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzODdweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjY3NHB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhcmQgMlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzODdweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjY3NHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhcmQgM1xyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NhdGVnb3J5U2VjdGlvbkNyZWF0b3I+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcFN5c3RlbTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQGNvbXBvbmVudC9DYXJkXCI7XHJcbi8vIFN0eWxlZC1jb21wb25lbnRzIGNobyB0aOG6uyBjYXJkXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI2NHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuYDtcclxuXHJcblxyXG5jb25zdCBDYXJkSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE4OXB4O1xyXG4gIGhlaWdodDogMTY4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW46IDcuNXB4OyBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuLy8gU3R5bGVkLWNvbXBvbmVudHMgY2hvIGxvZ29cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDgwcHg7XHJcbmA7XHJcblxyXG4vLyBTdHlsZWQtY29tcG9uZW50cyBjaG8gdsSDbiBi4bqjblxyXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gQ3VzdG9tQ2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMzVweFwifX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ24gOiBcImNlbnRlclwifX0gPlxyXG4gICAgICA8Q2FyZFdyYXBwZXIgPlxyXG4gICAgICAgIHsvKiBQaOG6p24gdOG7rSAxICovfVxyXG4gICAgICAgIDxDYXJkSXRlbT5cclxuICAgICAgICAgIDxMb2dvIHNyYz1cIi9wYXRoL3RvL2xvZ28xLnBuZ1wiIGFsdD1cIkxvZ28gMVwiIC8+XHJcbiAgICAgICAgICA8VGV4dD5UZXh0IDE8L1RleHQ+XHJcbiAgICAgICAgPC9DYXJkSXRlbT5cclxuXHJcbiAgICAgICAgey8qIFBo4bqnbiB04butIDIgKi99XHJcbiAgICAgICAgPENhcmRJdGVtPlxyXG4gICAgICAgICAgPExvZ28gc3JjPVwiL3BhdGgvdG8vbG9nbzIucG5nXCIgYWx0PVwiTG9nbyAyXCIgLz5cclxuICAgICAgICAgIDxUZXh0PlRleHQgMjwvVGV4dD5cclxuICAgICAgICA8L0NhcmRJdGVtPlxyXG5cclxuICAgICAgICB7LyogUGjhuqduIHThu60gMyAqL31cclxuICAgICAgICA8Q2FyZEl0ZW0+XHJcbiAgICAgICAgICA8TG9nbyBzcmM9XCIvcGF0aC90by9sb2dvMy5wbmdcIiBhbHQ9XCJMb2dvIDNcIiAvPlxyXG4gICAgICAgICAgPFRleHQ+VGV4dCAzPC9UZXh0PlxyXG4gICAgICAgIDwvQ2FyZEl0ZW0+XHJcblxyXG4gICAgICAgIHsvKiBQaOG6p24gdOG7rSA0ICovfVxyXG4gICAgICAgIDxDYXJkSXRlbT5cclxuICAgICAgICAgIDxMb2dvIHNyYz1cIi9wYXRoL3RvL2xvZ280LnBuZ1wiIGFsdD1cIkxvZ28gNFwiIC8+XHJcbiAgICAgICAgICA8VGV4dD5UZXh0IDQ8L1RleHQ+XHJcbiAgICAgICAgPC9DYXJkSXRlbT5cclxuXHJcbiAgICAgICAgey8qIFBo4bqnbiB04butIDUgKi99XHJcbiAgICAgICAgPENhcmRJdGVtPlxyXG4gICAgICAgICAgPExvZ28gc3JjPVwiL3BhdGgvdG8vbG9nbzUucG5nXCIgYWx0PVwiTG9nbyA1XCIgLz5cclxuICAgICAgICAgIDxUZXh0PlRleHQgNTwvVGV4dD5cclxuICAgICAgICA8L0NhcmRJdGVtPlxyXG5cclxuICAgICAgICB7LyogUGjhuqduIHThu60gNiAqL31cclxuICAgICAgICA8Q2FyZEl0ZW0+XHJcbiAgICAgICAgICA8TG9nbyBzcmM9XCIvcGF0aC90by9sb2dvNi5wbmdcIiBhbHQ9XCJMb2dvIDZcIiAvPlxyXG4gICAgICAgICAgPFRleHQ+VGV4dCA2PC9UZXh0PlxyXG4gICAgICAgIDwvQ2FyZEl0ZW0+XHJcbiAgICAgIDwvQ2FyZFdyYXBwZXI+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21DYXJkO1xyXG4iLCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmNvbnN0IFN0eWxlZEhvbWUgPSBzdHlsZWQuZGl2YFxyXG4vKiBDU1MgY2hvIGNvbXBvbmVudCBBZHZpc2UgKi9cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbHVtbiB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1yb3cge1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50ZXh0LWlucHV0IHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB3aWR0aDogMjE5cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4udGV4dGFyZWEge1xyXG4gIHdpZHRoOiA0NjJweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIHdpZHRoOiA0NjJweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnJpZ2h0LWNvbHVtbiB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkSG9tZTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGJvcmRlcixcclxuICBCb3JkZXJQcm9wcyxcclxuICBsYXlvdXQsXHJcbiAgTGF5b3V0UHJvcHMsXHJcbiAgc3BhY2UsXHJcbiAgU3BhY2VQcm9wcyxcclxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nPFNwYWNlUHJvcHMgJiBCb3JkZXJQcm9wcyAmIExheW91dFByb3BzPmBcclxuICAke3NwYWNlfVxyXG4gICR7Ym9yZGVyfVxyXG4gICR7bGF5b3V0fVxyXG5gO1xyXG5cclxuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdHlsZWRDYXJvdXNlbENhcmQxIH0gZnJvbSBcIi4vQ2Fyb3VzZWxDYXJkU3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIENhcm91c2VsQ2FyZDEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDYXJvdXNlbENhcmQxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIva3lvdG8ucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlNsaWRlciBIZWFkZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFubmVyLWltYWdlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJhbm5lci10ZXh0XCI+S1lPVE8gLSBOw5RORyBOR0hJ4buGUCA8YnIvPiBDw5RORyBOR0jhu4Y8L2gxPntcIiBcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmFubmVyLXRleHRcIj5HaeG6o2kgcGjDoXAgY8O0bmcgbmdo4buHIGhp4buHbiDEkeG6oWkgY2hvIG7DtG5nIG5naGnhu4dwIGfDs3AgcGjhuqduIGdpYSB0xINuZyBuxINuZzxici8+IHN14bqldCB04buRaSDGsHUgaG/DoSBz4bupYyBsYW8gxJHhu5luZyBtYW5nIGzhuqFpIGhp4buHdSBxdeG6oyBjYW8gY2hvIGzEqW5oIHbhu7FjIE7DtG5nIC0gPGJyLz4gTmfGsCAtIEPGoSBWaeG7h3QgTmFtPC9oND57XCIgXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiYW5uZXItYnV0dG9uXCI+xJDEg25nIEvDvTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhbm5lci1idXR0b24tMVwiPlhlbSBUaMOqbTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZENhcm91c2VsQ2FyZDE+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxDYXJkMTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRDYXJvdXNlbENhcmQxID0gc3R5bGVkLmRpdmBcclxuICAuaW1hZ2UtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAvKiBCYW5uZXIuY3NzICovXHJcbiAgLmJhbm5lci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5OSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE3MywgMjM5LCAwLjIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lci10ZXh0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjsgXHJcbiAgfVxyXG5cclxuICAuYmFubmVyLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZjAxO1xyXG4gICAgd2lkdGg6IDEzNnB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzIDo1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyAgXHJcbiAgfVxyXG4gIC5iYW5uZXItYnV0dG9uLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNzMsIDIzOSwgMC4yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMzZweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXMgOjVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlOyAgXHJcbiAgfVxyXG5cclxuICAuYmFubmVyLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OWI2O1xyXG4gIH1cclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC8vIC50aXRsZSB7XHJcbiAgLy8gICBmb250LXNpemU6IDUwcHg7XHJcbiAgLy8gICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgLy8gICBtYXJnaW4tYm90dG9tOiAxLjM1cmVtO1xyXG4gIC8vICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAvLyB9XHJcblxyXG4gIC8vIC5pbWFnZS1ob2xkZXIge1xyXG4gIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vICAgLy8gICB3aWR0aDogNTAlO1xyXG4gIC8vICAgaW1nIHtcclxuICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLy8gICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcblxyXG4gIC8vICAgLnRpdGxlIHtcclxuICAvLyAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC8vICAgLnRpdGxlIHtcclxuICAvLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLnRpdGxlICsgKiB7XHJcbiAgLy8gICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAvLyAgIH1cclxuICAvLyAgIC5idXR0b24tbGluayB7XHJcbiAgLy8gICAgIHBhZGRpbmc6IDAuNjZyZW0gMC45NXJlbTtcclxuICAvLyAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgQm94IGZyb20gXCIuLi9Cb3hcIjtcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYWBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMC4zcmVtIDByZW07XHJcbiAgY29sb3I6ICR7Z2V0VGhlbWUoXCJjb2xvcnMuZ3JheS41MDBcIil9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke2dldFRoZW1lKFwiY29sb3JzLmdyYXkuMTAwXCIpfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMEFERUZcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTk2cHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiBcIjYwJVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwQURFRlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmbGV4OiBcIjI1JVwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBJdGVtIDFcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmbGV4OiBcIjI1JVwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBJdGVtIDJcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmbGV4OiBcIjI1JVwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBJdGVtIDNcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmbGV4OiBcIjI1JVwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBJdGVtIDRcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmxleDogXCI0MCVcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDBBREVGXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICZjb3B5OyAyMDIzIFlvdXIgQ29tcGFueSBOYW1lXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIkBjb21wb25lbnQvSW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9Db250YWluZXJcIjtcclxuaW1wb3J0IEZsZXhCb3ggZnJvbSBcIi4uL0ZsZXhCb3hcIjtcclxuaW1wb3J0IFN0eWxlZEhlYWRlciBmcm9tIFwiLi9IZWFkZXJTdHlsZVwiO1xyXG5pbXBvcnQgVG9wYmFySGVhZGVyIGZyb20gXCJAY29tcG9uZW50L3RvcGJhci9Ub3BiYXJIZWFkZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQGNvbXBvbmVudC9uYXZiYXIvTmF2YmFyXCI7XHJcbnR5cGUgSGVhZGVyUHJvcHMgPSB7XHJcbiAgaXNGaXhlZD86IGJvb2xlYW47XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAoeyAgY2xhc3NOYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEhlYWRlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhclN0eWxlTG9nb0t5b3RvXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogXCIxXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxGbGV4Qm94IGNsYXNzTmFtZT1cImxvZ29cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbXI9XCIxcmVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nb2t5b3RvLnN2Z1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyU3R5bGVUZXh0LTFcIiAgPlxyXG4gICAgICAgICAgICAgIDxGbGV4Qm94IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VG9wYmFySGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgPC9GbGV4Qm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyU3R5bGVUZXh0XCIgc3R5bGU9e3sgZmxleDogXCIxXCIgfX0+XHJcbiAgICAgICAgICAgIDxGbGV4Qm94IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8L0ZsZXhCb3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1N0eWxlZEhlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBsYXlvdXRDb25zdGFudCB9IGZyb20gXCJ1dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgaGVpZ2h0OiAxNzhweDtcclxuICBiYWNrZ3JvdW5kOiAke2dldFRoZW1lKFwiY29sb3JzLmJvZHkucGFwZXJcIil9O1xyXG5cclxuICAubG9nbyB7XHJcbiAgICBpbWcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgLmljb24taG9sZGVyIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIGhlaWdodDogJHtsYXlvdXRDb25zdGFudC5tb2JpbGVIZWFkZXJIZWlnaHR9O1xyXG5cclxuICAgIC5sb2dvLFxyXG4gICAgLmljb24taG9sZGVyLFxyXG4gICAgLmNhdGVnb3J5LWhvbGRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXJpZ2h0IHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAubmF2YmFyU3R5bGVUZXh0LTEge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1N3B4XHJcbiAgfVxyXG4gIC5uYXZiYXJTdHlsZVRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweFxyXG4gIH1cclxuXHJcbiAgLmxvZ297XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkSGVhZGVyO1xyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCJAY29tcG9uZW50L2Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQGNvbXBvbmVudC9oZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBTdGlja3kgZnJvbSBcIkBjb21wb25lbnQvc3RpY2t5L1N0aWNreVwiO1xyXG5pbXBvcnQgVG9wYmFyIGZyb20gXCJAY29tcG9uZW50L3RvcGJhci9Ub3BiYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdHlsZWRBcHBMYXlvdXQgZnJvbSBcIi4vQXBwTGF5b3V0U3R5bGVcIjtcclxuIHR5cGUgUHJvcHMgPSB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbmF2YmFyPzogUmVhY3QuUmVhY3RDaGlsZDtcclxufTtcclxuXHJcbmNvbnN0IEFwcExheW91dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBuYXZiYXIsXHJcbiAgdGl0bGUgPSBcIlJlYWN0IE5leHQuanMgRWNvbW1lcmNlIFRlbXBsYXRlXCIsXHJcbn0pID0+IChcclxuICA8U3R5bGVkQXBwTGF5b3V0PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxUb3BiYXIgLz5cclxuXHJcbiAgICA8U3RpY2t5IGZpeGVkT249ezB9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICA8L1N0aWNreT5cclxuXHJcbiAgICB7bmF2YmFyICYmIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1hZnRlci1zdGlja3lcIj57bmF2YmFyfTwvZGl2Pn1cclxuICAgIHshbmF2YmFyID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tYWZ0ZXItc3RpY2t5XCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgY2hpbGRyZW5cclxuICAgICl9XHJcblxyXG4gICAgPEZvb3RlciAvPlxyXG4gIDwvU3R5bGVkQXBwTGF5b3V0PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xyXG5cclxuY29uc3QgU3R5bGVkQXBwTGF5b3V0ID0gc3R5bGVkLmRpdmBcclxuICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBib3gtc2hhZG93OiAke2dldFRoZW1lKFwic2hhZG93cy5yZWd1bGFyXCIpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRBcHBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb24xKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjYwXCJcclxuICAgICAgaGVpZ2h0PVwiNjBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjAgNjBcIlxyXG4gICAgPlxyXG4gICAgICA8cmVjdCB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiBmaWxsPVwiIzE4OUREOFwiIHJ4PVwiMTJcIj48L3JlY3Q+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgICAgIGQ9XCJNMTkgNDEuMzQ0YS4zNDQuMzQ0IDAgMDAtLjM0NC4zNDN2LjI2YTIuMTUgMi4xNSAwIDAxLTIuMTQ2IDIuMTQ3aC0uMjZhLjM0NC4zNDQgMCAwMC0uMzQ0LjM0MyAxLjcyIDEuNzIgMCAwMS0xLjcxOCAxLjcyIDEuNzIgMS43MiAwIDAxLTEuNzItMS43Mi4zNDQuMzQ0IDAgMDAtLjM0My0uMzQzaC0uMjZhMi4xNSAyLjE1IDAgMDEtMi4xNDYtMi4xNDd2LS4yNmEuMzQ0LjM0NCAwIDEwLS42ODggMHYuMjZhMi44MzggMi44MzggMCAwMDIuNzc1IDIuODM0IDIuNDEgMi40MSAwIDAwMi4zODIgMi4wNjMgMi40MSAyLjQxIDAgMDAyLjM4MS0yLjA2MyAyLjgzOCAyLjgzOCAwIDAwMi43NzUtMi44MzR2LS4yNmEuMzQ0LjM0NCAwIDAwLS4zNDQtLjM0M3pNMzQuODEyIDQxLjM0NGEuMzQ0LjM0NCAwIDAwLS4zNDMuMzQzdi4yNmEyLjE1IDIuMTUgMCAwMS0yLjE0NyAyLjE0N2gtLjI2YS4zNDQuMzQ0IDAgMDAtLjM0My4zNDMgMS43MiAxLjcyIDAgMDEtMS43MiAxLjcyIDEuNzIgMS43MiAwIDAxLTEuNzE4LTEuNzIuMzQ0LjM0NCAwIDAwLS4zNDQtLjM0M2gtLjI1OWEyLjE1IDIuMTUgMCAwMS0yLjE0Ny0yLjE0N3YtLjI2YS4zNDQuMzQ0IDAgMTAtLjY4NyAwdi4yNmEyLjgzOCAyLjgzOCAwIDAwMi43NzQgMi44MzRBMi40MSAyLjQxIDAgMDAzMCA0Ni44NDRhMi40MSAyLjQxIDAgMDAyLjM4Mi0yLjA2MyAyLjgzOCAyLjgzOCAwIDAwMi43NzQtMi44MzR2LS4yNmEuMzQ0LjM0NCAwIDAwLS4zNDQtLjM0M3pNNTAuNjI1IDQxLjM0NGEuMzQ0LjM0NCAwIDAwLS4zNDQuMzQzdi4yNmEyLjE1IDIuMTUgMCAwMS0yLjE0NyAyLjE0N2gtLjI2YS4zNDQuMzQ0IDAgMDAtLjM0My4zNDMgMS43MiAxLjcyIDAgMDEtMS43MTkgMS43MiAxLjcyIDEuNzIgMCAwMS0xLjcxOC0xLjcyLjM0NC4zNDQgMCAwMC0uMzQ0LS4zNDNoLS4yNmEyLjE1IDIuMTUgMCAwMS0yLjE0Ni0yLjE0N3YtLjI2YS4zNDQuMzQ0IDAgMTAtLjY4OCAwdi4yNmEyLjgzOCAyLjgzOCAwIDAwMi43NzUgMi44MzQgMi40MSAyLjQxIDAgMDAyLjM4MiAyLjA2MyAyLjQxIDIuNDEgMCAwMDIuMzgxLTIuMDYzIDIuODM4IDIuODM4IDAgMDAyLjc3NS0yLjgzNHYtLjI2YS4zNDQuMzQ0IDAgMDAtLjM0NC0uMzQzek01MC45NjkgMjQuODQ0aC0xMS41NGMtLjc2MyAwLTEuNTMzLS4wNjQtMi4yODYtLjE5bC0yLjI4Mi0uMzhhLjUwMy41MDMgMCAwMC0uNTM1LjI3NCA0LjgxMyA0LjgxMyAwIDAxLTguNjUyIDAgLjUwMy41MDMgMCAwMC0uNTM1LS4yNzNsLTIuMjgyLjM4Yy0uNzUzLjEyNS0xLjUyMy4xODktMi4yODcuMTg5SDkuMDMxYy0uNjAxIDAtMS4wODQuNTE2LTEuMDI2IDEuMTMuMDUuNTM0LjUyLjkzMiAxLjA1Ni45MzJoNC45MTRsMS4wMzEgMi4wNjNoLTQuOTQ0YS4zNDQuMzQ0IDAgMTAwIC42ODdoMzkuODc2YS4zNDQuMzQ0IDAgMDAwLS42ODdoLTQuOTQ0bDEuMDMtMi4wNjNoNC45MTVjLjUzNyAwIDEuMDA3LS4zOTggMS4wNTYtLjkzMmExLjAzMiAxLjAzMiAwIDAwLTEuMDI2LTEuMTN6bS0yMS4zMTMgNC4xMjVIMTUuNzc1bC0xLjAzMS0yLjA2M0gyNS42N2EyLjgxNiAyLjgxNiAwIDAwMi40MjkgMS4zNzVoMS41NTZ2LjY4OHptMTQuNTcgMEgzMC4zNDN2LS42ODhIMzEuOWEyLjgxNiAyLjgxNiAwIDAwMi40MjktMS4zNzVoMTAuOTI3bC0xLjAzIDIuMDYzek0xMS40MzggMzkuOTY5YS4zNDQuMzQ0IDAgMDAuMzQyLS4zMTNsLjY4Ny03LjU2MmEuMzQ0LjM0NCAwIDAwLS42ODQtLjA2M2wtLjY4OCA3LjU2M2EuMzQ0LjM0NCAwIDAwLjM0My4zNzV6TTE2LjkzNyAzOS45NjljLjAxIDAgLjAyMSAwIC4wMzItLjAwMmEuMzQ0LjM0NCAwIDAwLjMxLS4zNzNsLS42ODctNy41NjNhLjM0NC4zNDQgMCAxMC0uNjg1LjA2MmwuNjg4IDcuNTYzYS4zNDQuMzQ0IDAgMDAuMzQyLjMxM3pcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICBkPVwiTTE0LjUzMSA0MS42ODh2LTExYS4zNDQuMzQ0IDAgMTAtLjY4NyAwdjExYS4zNDQuMzQ0IDAgMDAuNjg3IDB6TTI3LjI1IDM5Ljk2OWEuMzQ0LjM0NCAwIDAwLjM0Mi0uMzEzbC42ODgtNy41NjJhLjM0NC4zNDQgMCAwMC0uNjg1LS4wNjNsLS42ODcgNy41NjNhLjM0NC4zNDQgMCAwMC4zNDIuMzc1ek0zMi43NSAzOS45NjljLjAxIDAgLjAyIDAgLjAzMS0uMDAyYS4zNDQuMzQ0IDAgMDAuMzExLS4zNzNsLS42ODctNy41NjNhLjM0NC4zNDQgMCAxMC0uNjg1LjA2MmwuNjg4IDcuNTYzYS4zNDQuMzQ0IDAgMDAuMzQyLjMxM3pNMzAuMzQ0IDQxLjY4OHYtMTFhLjM0NC4zNDQgMCAxMC0uNjg4IDB2MTFhLjM0NC4zNDQgMCAxMC42ODggMHpNNDMuMDYzIDM5Ljk2OWEuMzQ0LjM0NCAwIDAwLjM0Mi0uMzEzbC42ODctNy41NjJhLjM0NC4zNDQgMCAxMC0uNjg0LS4wNjNsLS42ODggNy41NjNhLjM0NC4zNDQgMCAwMC4zNDMuMzc1ek00OC41NjIgMzkuOTY5Yy4wMSAwIC4wMjEgMCAuMDMyLS4wMDJhLjM0NC4zNDQgMCAwMC4zMS0uMzczbC0uNjg3LTcuNTYzYS4zNDMuMzQzIDAgMTAtLjY4NC4wNjNsLjY4NyA3LjU2MmEuMzQ0LjM0NCAwIDAwLjM0Mi4zMTN6TTQ2LjE1NiA0MS42ODh2LTExYS4zNDQuMzQ0IDAgMTAtLjY4NyAwdjExYS4zNDQuMzQ0IDAgMDAuNjg3IDB6TTIxLjc1IDIzLjQ2OWgzLjkwMkE0LjQ3NiA0LjQ3NiAwIDAwMzAgMjYuOTA3YTQuNDc2IDQuNDc2IDAgMDA0LjM0OC0zLjQzOGgzLjkwMmExLjAzMiAxLjAzMiAwIDAwMC0yLjA2M2gtMy45MDJhNC40ODMgNC40ODMgMCAwMC0yLjEyNy0yLjg0NS44NTkuODU5IDAgMDAtLjAxLS4wNjVsLS4wODctLjUyN2gyLjY4OGEuMzQ0LjM0NCAwIDEwMC0uNjg4SDMyLjAxbC0uMTQ4LS44ODZhMS40MDMgMS40MDMgMCAwMC0xLjM4OS0xLjE3NmgtLjEzVjEzLjVhLjM0NC4zNDQgMCAxMC0uNjg3IDB2MS43MTloLS4xM2MtLjY5IDAtMS4yNzUuNDk1LTEuMzg4IDEuMTc2bC0uMTQ4Ljg4NmgtMi44MDJhLjM0NC4zNDQgMCAxMDAgLjY4OGgyLjY4OGwtLjA4OC41MjZhLjg1OC44NTggMCAwMC0uMDA5LjA2NiA0LjQ4MiA0LjQ4MiAwIDAwLTIuMTI4IDIuODQ1SDIxLjc1YTEuMDMyIDEuMDMyIDAgMDAwIDIuMDYzem0xMC41Ni0xLjI1NWwuNDgyLS4xMmg1LjQ1OGEuMzQ0LjM0NCAwIDExMCAuNjg3aC01LjQ1OGwtLjQ4My0uMTJhMi4xMTIgMi4xMTIgMCAwMDAtLjQ0N3ptLS40MTkgMS41NjVhMi4zMTYgMi4zMTYgMCAwMS00LjAzMi0uNDUybC41OS0uMTQ4Yy4yNzcuNTc4Ljg2OS45NzcgMS41NTEuOTc3LjY4MiAwIDEuMjc0LS40IDEuNTUxLS45NzdsLjU5LjE0OGMtLjA2Ni4xNi0uMTUuMzEyLS4yNS40NTJ6bS0yLjkyMi0xLjM0MWExLjAzIDEuMDMgMCAxMTIuMDYzIDAgMS4wMyAxLjAzIDAgMTEtMi4wNjMgMHptLS41MDMtMy44M2wuMDY1LS4zOS4wNDItLjI1LjExNC0uNjg3LjEyOS0uNzczYS43MTguNzE4IDAgMDEuNzEtLjYwMmguOTQ4Yy4zNTQgMCAuNjUyLjI1My43MS42MDJsLjEzLjc3My4xMTMuNjg4LjA0Mi4yNDguMDY1LjM5MWEuNjI5LjYyOSAwIDAxLS42MjMuNzM2aC0xLjgyMmEuNjMuNjMgMCAwMS0uNjIzLS43MzZ6TTMwIDIwLjExOGMuOTY0IDAgMS43OTMuNTkgMi4xNDIgMS40M2wtLjU5LjE0OEExLjcyMiAxLjcyMiAwIDAwMzAgMjAuNzE5Yy0uNjgyIDAtMS4yNzQuNC0xLjU1MS45NzdsLS41OTEtLjE0OEEyLjMyMyAyLjMyMyAwIDAxMzAgMjAuMTE4em0tOC4yNSAxLjk3Nmg1LjQ1OGwuNDgzLjEyYTIuMTEyIDIuMTEyIDAgMDAwIC40NDdsLS40ODMuMTJIMjEuNzVhLjM0NC4zNDQgMCAxMTAtLjY4N3pcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjE7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTG9nbzIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgd2lkdGg9XCI2MVwiXHJcbiAgICAgIGhlaWdodD1cIjYwXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDYxIDYwXCJcclxuICAgID5cclxuICAgICAgPHBhdGggZmlsbD1cInVybCgjcGF0dGVybjApXCIgZD1cIk0wLjM2IDBINjAuMzZWNjBIMC4zNnpcIj48L3BhdGg+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxwYXR0ZXJuXHJcbiAgICAgICAgICBpZD1cInBhdHRlcm4wXCJcclxuICAgICAgICAgIHdpZHRoPVwiMVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxXCJcclxuICAgICAgICAgIHBhdHRlcm5Db250ZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHVzZSB0cmFuc2Zvcm09XCJzY2FsZSguMDA0MTcpXCIgeGxpbmtIcmVmPVwiI2ltYWdlMF8xN180OTk4MFwiPjwvdXNlPlxyXG4gICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICA8aW1hZ2VcclxuICAgICAgICAgIGlkPVwiaW1hZ2UwXzE3XzQ5OTgwXCJcclxuICAgICAgICAgIHdpZHRoPVwiMjQwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjI0MFwiXHJcbiAgICAgICAgICB4bGlua0hyZWY9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVBBQUFBRHdDQVlBQUFBK1ZlbVNBQUFBQ1hCSVdYTUFBQllsQUFBV0pRRkpVaVR3QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFHRERTVVJCVkhnQjdWMEZmRlQzMHAxTlFvUWtKTVJKU0FqQm5lSlcydUl0VmlxMGZmVlNkM2QzMTFkNWJhSFVDM1VvVHBIaVVOdzlCR0pFaUJBbHlYNXpMbXkvTk55OS83bWIzUmg3M284SGhXU3plKytkLzh5Y21UbGpvUnBDOUpSOXNSV1dzbjRlVmt0bksxa1RyRlpMR3lKcnBJVXNYbGFyTlpnczVFVnV1RkZmWUtVeWk4V1NZeVVxSm92MWlNVktPZnpmVzhxcFlsMUZvMGE3TXE1dXZZOXFBQlp5RVo2MVdqMCttYnByTVAveEVxcXdYTVMvTnlNMzNEaHprTWlPYW9HWHRXSmE4bzJkL2lRWHdla0czUHpyZmEzTHk4cXZwd3E2blQ5QU1Mbmh4aGtQU3pvYjJoOVdqNG9YMDY3dmtFaE9oTk1NT09MelhRTTlQU3ozY3poOEVibmhoaHQyWUpucTVlMzUwaEVuaGRqVk51Q3d5YnVpdmNueVRnVlpKNUliYnJnaGhHVXFlVlE4VjEyUFhDMERqcHE4K3dGK2dTZmRvYkliYmpnQ1N3YVRZRytuVDJyM0tqa0lod3k0MmVjN1dsZzlQS1l5RTNjdXVlR0dHOVVDczljTHJaYUtteHp4eHFZTk9HYktyaUhsVnByS2Y0d2xOOXh3d3lsZ1EweTJXTXZIcHR6WWFhT1o3L013ODhXUmszZmV4Y1lMU3R4dHZHNjQ0VVJ3S0IxVFlmSGNFUFg1emdmTmZKL1lnS08rMlAyTWhTenZreHR1dU9FNldDeHZzS044WFBybElnT0c4VktGOVZseXd3MDNYQTUybEM4MW03TG5TZG5YS2hBMVpjK0RaSzE0Zzl4d3c0MGFoWWVGN2ttNW9iMWgxR3Rvd0ZGVGRwNWp0Vm9XOEJjMUlqZmNjS09tVWNLUjc2aTBtem9zc2ZjRmRnMDQ2b3VkOFZSaFdjeC9qQ2MzM0hDalZtQ3gwakdycDdXSHZSS1QzUnpZYXZYNGxOekc2NFlidFFxcmhacXlJNTFxNzk5MURUaHE4dTQ3TEZicmNITEREVGZxQXM1cE5ublh2WHIvY0ZvSXJZWE9Wc3RPTGt6NWtodHV1RkZYa0Z0VzV0c2g4NWI0MU1wL2Vib0h0bHFlZGh1dkcyN1VPUVI1ZVJXL1cvVXYvK1dCNHlidlRpZ2w2MzV5d3cwMzZpWXFyT2RWWnFYL0pXTnpndHpOR3ZVWnZsdzREUEgxSXM5VGNaV1BCLzdPZzN5OUxGUmFicVhDOGdvcXFUajViMlVWVmtvdExDTTM2aGs4TGMvdy95K3gvZWMvSGppQ3ZhK0gyL3ZXV1VUNmVWRzNNQjlxNnVOSnpRTWJVWFAvUnZ4bkQrb1E2cXNaYmpqL3U4V0IyVEtybFNpanFJeHlTOHZweVBFVGJOVGxsRkp3Z3RJTHl1aEFYaWtsNXBWUlN1RUpjcVB1d012RDJ2WEk5UjIyYW4rMi9hV0h4Zm9rT3FyZHFGM0FHSHRHK0ZLSEVGOXEzY1NiZWtiNVVseUFOelh4TmpWM0lnYU1QcUt4bC9hclRiQ1A3dGZrbFZiUTNwd1MycGRUU3R1eVNtakhzV0phbVZaRWJ0UU9UbGpwQ3Y1Tk0rQi96dXlveWJzT2tydnVXK09BWngwWTVVY0RZL3lwRnh0dXkwQnZhdVRwTXExQnA2R2NRL0RObWNXYVFTODhmSnkyWjVlNlBYVU53VUtXbk5RYjJvYnc2V3ZWbnBUb3lUdEhWSkJsSHJuaGNqUnA1RUdkUTMzbzNHaC9HdEVpZ05vMjlhRzZiNjR5YkRoYVJLdlpNLzk1NUxqYlE3c1lIbVFabmpLcDNVSXRoSzRnanl2SUhUKzdEQWgvQjBZMnByRUpnVFEwTnNCbDRYQnRvMGVFbi9icjlxNGhXZzY5TXJXUTVpVWRwM25zb1l2TDNjK1hNMUZSVVRHT2YxdW9IZjRjUHUvbTM5cVNHMDVEWXc2RCszRm9mSFg3cGpRb3VqRUZOR3FZUml0QmFabVYva2pNbzVtSitUUTNxWURjY0FyUzBpYTFiMmFKL0d4WFM0c0hIU0EzbklKK2tYNDBpa1BqSzlvR04xaFBXeDBjWnFaNzZaRUNlbjlMdHZabk54eUhoOFVyemhMOStlNExLeXpXWDhrTmh3RkRIY21oOGVYdGdtaEFWR055UXdhRTJOL3N6cUZmRCtTVEd3N0FZcjNPcThLajRpeXlOaFFhcFdZQnc3MnBVMU82dVZPSTI5czZnQUhOR211L0h1dDFnajdmZW96bWNLN3M5c3B5V0t3ZTdTMVJrL2RNNTVUNFVuSkREQmpyUFYxRDZhcjI3akRabVlEeExqNWNRUC9kNmc2dkplRFU5MnMyNEYzcitNKzl5QTBsWUt5UG5CVkcxM1lJSmsrUDJvMWFTc3NxS0wyNG5ES0x5aWlGR2Q5VWZ1QnpUbFRROFpJS3lpbXQrTmZYbFhETjFvZmZyeWNUYTU2bjJyWENmRDNKdDVHRmdwbGNhOE9sTEYvK3Q4akdqYWhGWUNPSE9ycWNpUlBNV0UvYm0rdk9rMVd3MEc0WThHSCtZM055d3k1c0hoZmhjazAzV2VTVWxOTzI3Qkxha1YxTUIzSkthUmYvU3N3OXdjYnJ1ajdtU0Y4dlNnajJwbzRoUGhRWDZFV2RtL3BTOTNCZmFsekRUSG81bjBOVGQyVFRoeHhlcHhhNSs3WjFjQVFHakNQT3ZadFhCMmhydktOYlNJM211R3ZUQzJsVFpqR3RTaTNTT3AzcTBzQkJxMEJ2YXNPRzNUL2FqN3FIK1ZLZnlKb2g3T0NGUCtHd2Vzck9ISExqWHlpREFic3I3RG9ZeE9USzIyZEhVV3lBYS9YODl1V1UwS0xrQWxweXVKRFdaeFpwZmNmMUJUalUra1g0MGNqNEFPb1Y3cWQxbGJrU01PU1gxaDZsM3hPUGt4c240VGJnS29EQnZqczR5cVhsb0pWcGhiUThwWkIrMjU5UEIvTkxxYUdnUFJ2d2tHaC9HdDB5UU92SWNoVisycGRMcjIvSWN1Zkg1RGJnZndCeTU2NnVUZW1oSHVIa0NuNXFHNGZEUCszUDA4aVpuSHJrWlIwRkRzSUw0Z0xvR2liOEVvSzh5ZGxBcFBMdXhrejZlUHN4T3BQaE5tQkdxeWFONktOem82bHJtSE9WaFBDUS9iZ25oMlluRldoZTkwd0Z3dXVyMmdmUkphMmFPSjI5MzhrRTM3VUxrODlZYjN6R0d6Q1k1V2Q3czlkMTRvTzFQK2NFVGQyWlRkUFo0OWFubk5iVkNHUVcrNElXZ2ZSQWoxQ25jd3ZQckRsS241NkIzdmlNTldBOFFPOXpydHZQaWJrdXZPemJHN05vUldyTmV0czRydDgyQy9DaVVCOFBDdlR4SkM4K2pJS1lZUExUS2ZzVWNhMDRsdzhWU09wa01NTmR6TDhuNTVmUm9ZS2E5V0FUV2diU2JaMURxRXU0ODZLZVpjd3JQTEE4N1l6eXhtZWtBWStNOWFmM3o0bDJXbWtJaHZzV2t5cXVDcE85MlNCajJVQzdoUHBTRzg0bjQ1dDRVOXNRYndyejhhSW9mK2RWQURFQ21IUzhsTEpLS21ocnhza3lWbnJSeVRxMHE5Q2ZTMUgzblJWS1owYzc1eUNGOFQ3UDN2aVBRMmNHVTMxR0dUQzZrUjdwR1VhM2RRa2haOEJWaGh2TW5yUTNzN2g5K0ZkUC90VXh4SmVDZkdxdlpSTnB3TGJzWXRxUVhreC9wUnluelZrbFRrOE5VTFo3cW1jNGRZMXdqa2Qra3dtdXR6Z2FhdWc0WXd3WVluQS9qR3p1RktKcWYwNHBQYnd5M1dtRzY4VU1PT1IwenVkNmFvOHdQK29WNmJvU2pMT3dKdTFrdzhrY3JzbXVPZW84OVkySnJZUG9RU2ZseUl1U2p0TURLOUlwclFGM2NaMFJCdHlXdzg1djJIaXIrMURBNjd5MlBwT203S3crV1lLQmY5U2F4eWNFMGdnbWR1cnpVRVIyY1RrdE9IeWNGckRCekhKUzZIcER1NmIwZU85UTh2ZjJwT29BSWZYRnN3ODMyTHk0d1Jzd3lCSjBWUGw2VmM5QWZ0aVRTeS8vblVFWi9MQldCd09pL0doQ1FoTWF4NzhhNGlSVFZ0RkpZLzZPeTJmcmpoWlRkWUFEOXdIT2p5OXJFMFRWUVM3bjlIY3NUYUUvanpROE5aQUdiY0M0K1ErZUZVYlZBYVJVSDEyVlhpMW1HWVo2WmRzZ3VyRmpVNG9PT0hOV0xSL01MYVYzdDJUUm40Y0tLS3ZVOFlOdmJJc0FlcXB2UkxVanFCZlhIcVVQdHpXc1VsT0ROZUNIT1krNnIzdjFqQmQxeGJlWURIR1VzRG1MOCsySjdHa3ZZdU05aytlRzRaVWhidmZ1WnNmYkgwTTRsTDZUeWNmYnVsV1BnR3hvNUZhRE0yQXd6YS8wajZRcjJqa2VkcVZ5T2VYT3Bha09rMVFJazNGNERJcDJ5K3RVQlZwSjM5MlVSWW41amhueXVQaEFlckpQZUxXODhVY2NGYnp3ZHlZMUJEUW9BMFkvODdRUk1acEl1cVA0NDJBK001ZHBEbm5kYmx6dWVZb2Zyb0cxWUxpNW5Kdm5sVlhRTWZaMng4c3JxSkRmZjk2SkNrM090WngvWVpnLzBNdENUWmlOeDB4ekl3dldzWGhTaEo5WGpjLzVBakJrZUVKSFBISzBmeU42bzM4RURZa0xJRWZ4QS8vOCs1YWxVWDFIZ3pGZ2VONGZSalYzdUxNS0toQXZNRW4xbVFQdGVESCtYdlFZMXpBdmJ0MkVYSW5qYkpDN3NrdG9XMVl4N2M4N1FTbnN4YlllSy9tbm84cFJ3SmpqQXh0UlBMUDFZT3hqQTA4MmplQ1hxd1VNcW1QSWQzVUpaYWJhOFRRSlAvdmVlbTdFRGNLQTRYbW5uaGROdytJZE81SHg4Rnc3N3dqdHpEVTMydWZIRC9lZFhVUG8xczRoTHZGaUtmeStNQ3U4SmFPWWxxUVUxa29wcEROSEZaMUNmT2djamlwNmNXcmdpdm5va2pLcnhqVjh2dU1ZRlprVWdPL1kxSWVtRG85eCtIMzl4RVo4VnowMjRucHZ3S2ludmpZd2lpNXgwUHNoejcxMVVZcnA4aEQyR1gxOGJqU0ZOM1plS3lQQzlvMFpSYlRvY0lFbWdsNFgxMysyd2NLMVNEKzZrT3ZYZmZuMzZwYm5LZ01IMUl0ck0yaEdvam1aV1JqdjlGR3hGTi9FTVNPR3RPMURLOUtwUHFMZUcvQi9CemR6T0hUOWVsY09QYkhxS0oyd3lpOUJKT2VOci9lUG9oSHhqdWRmbFlHaEFrMGZlVmN1TFUwdHFGZlRTNkdjVDUvRGZNTmxiWnZRNEdqSGVZZXFRTTM5N1UzbXdtcE83K25GZnBHYTRLQWorSUIvM3NzYjZoK3g1Umt3L3M1bnFaN2lzWjVoZEQzWFZoM0JtNXgzUGI4dWc4eVl5Nld0bXRDWHc1dFRKeWZPRFh0dytIK0VXZS9kT1NXMGgvUGJLQ1pvSW4wOXRiRFZuNzFiWmpVYlIxd0poTHM3T1FmL2FWOGVUZCticCtYbjBNeHE2bHU5N3FuT25IdGp1d1U2dlBENkV1QStManhTZ00xOW10YTBXZlE5eFoyc3FtZEwyZXF0QjY1T2s4WkR5OVBvR3o3bHBVQWY5VXQ5STJpQ0UwaXFHUWZ5S0l5Wlh6eGthL2xobWNYaDRvMmRtOXJONGFwRDh0UVdNSmh3YVpzZ211aUU2L1VOUjBrdmNGZ05obDJLVy9oUWY3WmZCRG1DMTlkbjBqdWI2MCtkdUY1NjRMdVpPSHFFV1YrektPYUg0STRsS2ZUamZubU8xVFhVaDM0OFAvYWZFOW9SRkRKNy9BVVRORGR5cmgzRGJDOWFBMkdVZHk5TDFXUmpMMjhUVENjNGxJYTNEZkwycEFXSGp0UHJ6SWkzWkVaNFNQTUFHc3ZoT2hqblBibjFRejhyaVErYnVmd1o0SlhSd0FLUDZpZ3dmSEloUno3b3M1WktFYTFuMHUvbzhUSWEzc0o4bW9NUzRHRysxdHRkT0VMcFROUTdEOXlOSDRhNTQxdVFXZVR6emI5OHptSGFrQ1h2ejcyTlBlTWpQY0xJeDBHaUJxTHFIMjg3Umg5dHk5WnkyeTdNbU02ZkVFLy80Nzk3ZHUxUnpldk9HZGRDZTI4VDV4Nm1VZzVKbitFNjhvUlcvKys1RUVZbUY1elFTanIxdFlzSW4vTys3cUYwUlZ2SG0ydXdVQndwanhuVmpVRVJqZW5Ma1RHbUt3UTQ2TWYra2VUU09XaG5vVjRaTUI2RUJSZkdhMm9UWmdEandVUUtabG9sZ05lQXpNNFY3UndqUklDdmQrYlE2Mnh3bFhQWTVSZkZremNmQmdOL1BLZ1JaNHY1cy9qeno3Sk55K0R6L1h4QnJDWTlnK1lMK0pzWDEyZG9kZG9uZTBWUXNLOEgvWGR6TnIzR1pFdFpKZUlOWHgvS2VXY1VoK2JSWEpORzdSWi9GOEN2SGVqMS8vbG9mbGs1SGVkcmtjOFJ3VEgyL0tnclp4YVZheis3cUFiMjl6cGpPT0VkSnB2ZTVNOHZEYWpQNG9OdkdrZFFnU2FmR1lnYmpKMlZWT2RUbDNwandGZ0ZNcHU5bGRsNkg4TFhpOWhBTmdzOUw0d0FkY1Z1RGhKVktFdTl3WG5VNnZSL2t5RmRtWlNheHdaNzcxK3BOSTFKSHp6RTc1NGQ5YzkvQjdCaC96NDZWaHQyR1BYN29aT2tESCs5clljNmpSOG8vQm5lQkNIZVgxd1hiaG5nUmJFY1prZHpLYXU2WW5IUXB6N0toODBPOWpwcitUT2dCcjB4czVUZmgvTWZqKzVzVko4T2lhYllRTWZLUHFpTFgvOW5DcVVVeW94cmRGd0EvZmZjWnFaTFhvbWNzZ3o3UFpFS3l1cXVpZFFiQS82QXkwVm1hNzBWSEhaZHdzYTdTamh3M3BJZktKeldqalFGd011L3hDSGVWN3YxdHdjODBTdU03dXdhU3EyKzNFT0Y3TzFXWE55U0N0Z0xqdUJRRGZoZ0VIOCtMc2Y4aDhQOHhWeFdzcEYwWDdFbmg3VE4xZTJDcUh1RW4zWWc0WG1xaWVFSU9Qa1ZiTXpyK1RENjg4anhhbzhIVmdXbXMyN3ZFa0xOSEpBRk1qdm5lMW5ySUUzdjJ5eSszSkZEajY2dXV6WGlla0ZpM2QvOTVGNGlzN2o3cnpTYUw1d0JSWTc1NndWeEZPbEFZOFl2VE5iY3NDaFplOWp0NFM0MjNnejJvbDh4KzQxaGgxdjV3Y1h5cm8xc25EQldNTkVvYlgzSHJQUDkvTjhQc2ZIT1BwaFAwWHlvM01pZi9SQjczUS81NnhjZktkUWFGaUlhdTM0YkRwYWN4ZkhQUjNzcUZwWmZ3VkZERnliMTBMYTZOL2RFdFgzekJ2YWtzNW5zQ3Vmb3FuMkl1YTBPSVBzdzJBQWhPMGtURGtpcFpDYTJScGtrdHJBVEN0TlVVQitwaTZqekJnelM2dVB6b3Nrc1FQYWdOVStDa2MzOTZhc1J6YlZHZnpNQWcvem9pblI2bmZNeTVKTkdRR2tqalIrRTM5a29yMlZqNk1OR2dVMEdDWUhlZER1ejZuaS9hQ2Q4NEpUeHprczhUcDM1NFlrTDhOWTgrMjljZm5xa1J6aGR4a1JRWmVORlhyLzdXS20yVmREVmFNSkdBMzJ1TVMwRHRVT2xOWWZ2ZWFYSW9SM3ZHRVBrQWhXUGpJSnk2aDNabU1OY2VTcUFISDhNR3pFaWhHUkIxeHBJS1VmcXhLZ0UvSEVnbjdKSzZsNU52azZIMEpnQm5YdWgrYndYMHE1dmJKUjExYUE1QTdtb1dWMW90RHhldnlCRnZDVndKdWUzdlNKUGxpakFGeDB2TzFreXdtZkxMaXluVVg4YzBsS0VoNW4xbnJrL2o3cEgrbEZqVHcrTm5SN1RNdUMwMmVaUHQyYlRXMXl2dEhWdXdSczl5N1hxWnY0MXY2Y3VNZThFMTA0emFSYVg1d3FxTVZTQmEvRURINlRZakdnR0dFUzVlMmtxL1Nac3dYeHpZQlJkYVhMY2RNK3hFbzNVcW11ZGNuWGFnTjhkRktWNUhETXdNMkV5c1UwVGV1L3NabVFXNzdQSGZaMFBpWEtydVVzM0lqYUFudXNicnNuQ2ZybzltNDI1akY0NDFYQlF3YStGcnF5WmZOSmp1dWdHRHFuSHpUeEVGN0JoSXR4T1l5OFh5YVRWRWM3NU1LdThOdjMwdkI0RzhIU3ZjQnFURUVoejJkTS96WjY3YW82SWtjSmdYeThLNDJnRHV0SG8rbXJINFdzbkRvMHhXdGlaLyt5b3lEMUMxRi8zNXpJUGtGc3Q5aGE1UHlJUk04Q2RtTFFnbWVZY2xtbHlmVFUweG5TZEdKTnFUNjg1U25VSmRUYUV4aHFPaDNxYTY3U0NkN3R1WVRLVkNyekF4UWxONkgwbXhzd3NzOGJwZS91aUZQcUNpU3BIVHIwTTl0Wit6SVFpaEVPakF4am5Oc0UrZFBiUEIrbjhGb0hhNjBPKzU3V0JrZlF6ZStFQU5yRDcrR0VHQXgzaDcwbGJNa3RvSEh1QkEza243TDQvREVHVWM2UjNkWWVtYlB3QnRKdzVnTXhLb1I4Y0NMNE9TbzB3TXV3YlhzNmsyYTk4Y0h6RGhvY2FOZkxzclZrbGhFbENoTTErUXZZV3hCcFNBMFExK0I2OHZpTWVDMHgrZm5FRjlXdm1SNDJFaHdtK2FnZ2ZrTnY0R2tuRUFwYnhaeDdMcVVDUUNkRThTUHhpN1d0ZEtpM1ZTUThNVC9MYjZEaXRwaWtGdk5ib1AyUjF1MzdoZnZUcjJEZ3lBN3p1TmZPVCtZRTNYOXpIZ3cwUzd2WktZNGYzTEV2Vm1GRkl5bzZmblVTenhzUnA1WW8vT05kOWpTTVBNS3lvQ1M5TU9rN0R1QXl5SkttQXJtT2lyRVFZb21yaDZNam0ybUt4RDdkazBZdlZVS0RvejBZNUxOcWZSc1Q3VSt0Z09kbUVHdk9uMjdMcEF3NzNIUUYyVm4wL3lseFY0R1ROWDlhRWdhckQzUEh4cGhqOVkweVk5ZnZwUUowSnBldWtCMzZlYzduK0psc1g3K0t3RWkxMEt1QmgrSldOeGNmRW9EcHFvNWZOT2VMUUt0Q3g3RmtuRDR2UlBHemw0WGg0NEFzNUNsaVNVa0JMa2d2cEtRNTkxNlFWMFlDWXh2ODBkUVJ4bUZ0WWFpVUxQMTlvd3p4bVFoZ09EOWo4d3dYVTByOFJYZDR1bU5CS3ZDYmRzVVo5aE8xL3NjZjZna3RhdjNETnVveHp6a2crWEZYZUM0ZlYyWmhXWXZiYXpHQ0NEY2RLS3JUck5KUkpSdW1BQk80cnJ1dnZIRkdvakF5dG1jbnNyVWV6SjVZQ2tVVlFJMDl0Y0tJdW9NNHByVUhZMjJ5bkRoamNPVW5xM01mVzZXVG14RjJSWEVBVCtFU1hOZzNZZ09qaHUrSE42ZE9oMGJvZUJCc2l3Q1lmNGJ5eE1UOFV3ZnlBN3M4dG9hN011bS9tdWpXdXdRbzI3SUZzMEZPWlRUOWlZbmZSemN4NHIrSTY4N3FKQ1RUODFOamppRmpualBzZDVBZisyYjh6cU0vMEEzUVBsK21XQ0I1a2ZQNy9udE5NSXd2TkVwSTR6RVl6d2JmQnhPR0QrNHY3TFBsWnZ6SlhZRmFGQlN0VFhiay8yZ3pxbEFIandrT1Yzd3l3SmVGTkFlTWN3dDVNZWxOdHdDVE01UncybXcyWEx1ZERhUEdFbG5TZWdkRkExd2tZeFhtYlRmeXVpRU5vNUwyMmY3TjFRYzA0S0NObThObG1jM1R4SEJOaktaemozcnNrVlF2RmYrTjhHZ3UzelJKREtremZsMHRYekQ5Q2czNDhxSkdIS3VCUXdqMjQyaVF4bWNPZStLSTVoK2tuRXhOa3VCWlRoc3IyWDZGTWw1aG43b0Irc1grRTFqMVgyNmhUSVRRYU5rYVlFQ3FEZXVRbFhHYVJHTmgzSTJPMUdWc3AwSUh6Q0JOS1prd1hEOHNIbkwvZXpZWmlGS0tqTWYvSFBYbjBMWk5HdzVnSkJlbUQ4Qm9UTjhQNTg1ZXg0Vlp3bU5xSXkwZ0gyT05ORnRTemtjLzlkRUdjZGxCTitqT0ZYdCtRU2RzNVpJVUhRNTBWOVUrd3U2ZzdyejlhelBtMjgzSTRoUFp6azA1T0h5SHNON3JPQ0x2eEdjTjl2RFJTVHZvK1VIcERsSVc2T0JoekNSRGhJSVdZcWRnV2dkZWV6Njk5T1I4dzB0UXFuQm43UW43dmpxWWx6a0tkTVdDY21KOHp0VzhHcjY3UHBLVXA2aER1SVRhb1MwMkU1ZkFtRDY0MDF6N1hOY1NYRFNpV2VpdENxMlg4ZnFHRytEbm5rNXV5aXJVY0w5VFBVeHU1NjhBRUVacEpvSFN4Z2V2TThKcXpFNDlyaktrUmNPMSs1SjhOako5MW1MYm85SDJEMmMxalQ0YW1FZVI4K0xuT0ptTHdlbmpkV1p4L2RtcnFvNDFPMmdNNm5NWTQ4RDdtbWpUaXRueVlTUEovdklkeS9ycHpUQ2lhZGczem81LzQwRHBlVm51RVZwMHhZQkJYWnVaR1ozSHU4aHlIUGlxZ3dlSGxBWkVreFF3T04rLzh5NXpJR1U3dXI0YkhVTEJCSnhkSW5OdVlpSHAxUTVhbXdHR0Q5dER6UTNtSVF6amt1N2JwSWZRZGQyZTJmSDVTdm1FUE1nVDk1b3lMSTI4UEQ4N1ZqWHVEMGJvNGo2L2JlUGI0azdqTWxNbGhkbUplS1oxdzh2T0hzdFgzVEhhbGMzN2ZnUTNOSHRtRnY4ZTF3OWR0TjBGd29lelZJOVNQNG9RYVdKanhsWlIvMWpIM2dOeFdPbVFCYjQxQmt0cGNaVm9uREhnOEc5bWp2ZVFEK3RuODROMjBPRlY1Y3NNelRSNFNUZjdDZVZBTURWek9PWjBaWUFNRU9xQXNCZ1Zsa0NTVHVBUzA0NWg5Rm5zSFA4QmdlTEZHRklhTFVCUVBPQ1JlVmh0NGo4ZVpETU55dEt1Z3Fpa29jV0cyR1VxVFhjSWdXeE5JZDNjTHBaczdoV2dxR2gzWlcvbDVXU2lyK0tTZWRIV3hoZG43My9sQURQSDF0SHM0d3dqT2p6L0pBa3ZsYkZEbng2RjNIclBUa3A1dzNKbVJITGIvdWo5Zkc2VTB3anErMWhOTmhOSm9ncW5OMm5DZE1PREpRMkswbXl6RkUydXdxMGg5cytlT2pUY000eW9EclhJZ1NrcUVEeTdxdDFpYWRtTW4rNnMrY0ZOdjVIejBTeWJESksrTG1kd0ZYUHBaeUNjNmxwL0JnSXM0UEVPVGhSN1FUZlg2d0NqNkl6R2ZKdS9NVWI0K2F0R2ZuQmROTGRsem9VOThJM3QyS0V6aVlVVjNXRzlOYmJJSjNZRXdtNDJxWGJDMzl2T3IwK3VNMmphTWJYL09DVzNuY1lBZFVnbk5MY2lMcGVVWkdQRXNUaSswWmd4QkR6dEdDVEdJTVowUFNTT2d0SVRta1lFbStxVTFWVXpGNjdvS3RXN0FLQnY5eDBSZktsam4rNWVyODFNd3JxUGpaZlU5R05ybDdNRXlpbVIxVmhCRlh6TERlYjdCNi8vRjVhZkw1aDV4U0FZbm5kL0hGRGF3ZnZ3UW5jczVtUjgvVVBEQ1ZjK0F3Znh2VjNLTkY4cWF5UVgyalF6azJtdWNSbUFpYWpXSG4yTm1KV2sxWXRTZ1Y2UVVhU0ZtMVRBWEpNMVpIQW1BT2NhdjFreCtwZkoxY25RN0l4cGdRS1poRmpqR1RpVUFlWEVQamc0VzhudVROS3pnd01QT0pRdzBTQWIyRVJxWDhvR3lWakZldW9FUHR0RmNmZ3YxbFRVUzRYVnJ5d3ZYdWdGL01TekdWRHNieWlJcXBjWjJRZDcwNlJBWklRYjVsRXVZK0RrZzNOV0RnWCtVUWpDYmF3OXZNcmwyLzRwMGg4SlFpTVdqWnZzS2UxWmJyUkh0aWVleE1hT1pvbkxhY0hYN0lLMFY4N0ZWOWc4MEdPOVBvMks1cEJWQXIzTDk5aUVtNXlwSEE2Z3ZZNm9LalNiMmdQdlRqWTNyR3M2YjRTbkwrUEtiYmNvQThONi9aNExRYUNLb0pYdjlvYzBEYU02aGZHWjUxZGNQcjdtVjJXeHB6M3pmeU1iYVpKZVJ2aFl1RHlhOHpQUWpnTjMvZnErOHpPVXMxR29oQ3hmSVRGMTJHdGNCVmEyTXZ1eXR2aDdabktSNGc4c3R1NFJlMHRZZzBNWk9PeUVlSmpUVXYrV0FxaUVrY083c0hFS3JMMDJneWNPYW45WW9nT2trL095RVNpa0JEQ3RYMFowRjQ0VTQzcFVjRFdEK3VES0c4MEV4YjJ3THJTY2N3eFFTTmhqdjY4TnptOUhhaVFuYU1JZ2pRTjMrd1dYcG11Q0NIanB5cVBzZDMwTnB3ODNLOUVKNllZMmEwQVM4T2NmLzhCejFBQXRZK3dVbXlLbmVVWDUwWG96enRMR2xxRlVEUnQxWENtZ1V2YlZKYlJoM2RBc1JId3JUK1VENFNMZ3YxdC96cFBHaXQxZ1BDSjh1NU5CMDltSHpqQ1NZV01qblBORW4zSkNVd2VkYU5LR2xwbVFCcVB6VEEzeDlRVlk5d1Y1M2NhVnlHd2J5MytLUStxdmh6Y25LaGd1WjNRN2Y3cU5odnlXS3cwQzhGMHh5T1dySTMrN05vWkcvSDlJNjBmUUEwdXNyanFKOGhNTU1IMjNQRmhzY3luTjNkbEVMUkR5eDVxZ212QytGbWVmWldhZzFBNTZRRUtpcFBVZ0JIV2ZWdzRXSFNxb1ZqZGQ2ZkpXODF2czFsNG5BM3RwN0xZVDJac1BLSG14Yzg4YkUwVHRNaGttdkJVZ2xqQ0IremV5NkR4TnArTXg2SFVFeC9vMDBRMGROZS9yKy95ZFljQkQ5TVRaT0UreDdoY3R3by81STBxNHR2QzgrUi84ZkQ5QVB1ODExUE1HUTU0Nk9NOTBtdVkydjE4UTU5Z2RRK25KdS91WWdlUW53em1XcGRnK0VxcmlyV3hnMTh6UE9jZkcrUGpPeEVMd1hSMGsxM1dKWmF3WjhWeGY1b21aY3lDbmIxUk10Yi9hWGkzbkQ0QXFFT2VvN25JLzJ0N015RkMxNFpyU1pBSVRMcUh2UEd0ZUN1aHJrMGpiQXVEN2VtazNEZjAya0R0L3RvM3U1VHQyT2pkOG1OUDhSaDdSaFZWajhFVnhpUVg5MVZSbGFrRm53YnJkd1dldDluU2toWEpMN1ZxVFJ5K3N5eWN5NGN6ZCtlT0dOUVI1Nm01Z25SbSsxMGZXN2hFbk9aM3JMU295NFR2ZjhsU3I2V29Ubjc1K3JEcVhmMzVwbHF0SEUyZTJxS3RTS0FmZmxoN2FEaWFhTmp6ZG5VN2JpSWs3Z2NzTGdXRmtiNW10TU1ra05EamZrY2pzcytlRjg4OFlMUGF6NTQxdUlOTDZRaDAzazBsWlhObHBvSW04NzVlR243Y3ZWaGduR3preWlaempNQTFOZFZiRnpUS3RBWmtiL3ZkRVFuTVBGSE80K3VmcW9zcjN3QTM1d0IvNTBRUHYrek1JeVdwMVNTR3NFQzg4UkFTMi9wS1VwYjZ3U3FJT2dBY1Q4SmNBMSsyaUxiSHdSdFcrVngwUWY5cWZiNWVPUUlPZDZoNnNQWldlaFZneDRVaWU1M2pKdXFvVGRlMHg0U3NQbzN0OGlJNWxHTThsakx5VFhIam8yTGpOVFNqRGFhZG9XUFdQSkdEeUVlS0R4QzIyVTlrb3FmMmNVYVVMbkEzOCtxUDMzWEE2TkwrTTZMb2c4UEpoTGt2OWRVNzIzV3lodHp5d1c5VmIzWnRiNTZyYkJHbEVXeG5sNVA0NUFJRUR3Tkplc1ZJWU00MTB5SWQ1MGxHVmt4R2owNlNVMGpIYzN5MWZSUEN0NGJ0Q0lZOFlMVDNUeG51aktxSEVEeHMwZDIxTCtBVDloNzZ0YVhuME5QMmpTRXg5R0orRWw4SHJQOXRlWEljVVFoUm5QaTNEdEkyWStFVFo3R1lTWGE5TC8zM0JYQ3J5ZERYZ2ZFN2dVdHAvWjlIYzVMSHovN0pQdmUyZWxvWFo0ZnFoWmZxZ1lyZ2RwOUNLL3p4bk1UbC9aSVppbTgrRjUrK0pVdW9TdkcwTHFCM3VHYVI3OEdxNmJHMzErekFJL3pzYnhzb2tkUlhpOXkvam53T3RWQmE3YTU1ejNSL3FwYTdQb3RycFgyQTdiaFErcUt4WGxJaGl2R1M4OHJsV1RHcEg5QldyY2dLOHlNVXFXWFZST1ArMDM3bkNKNER6dnp1NnlrLzRkNGNwS2RGbE5IOVdjbWdlYy9yQ2c5SUd3MWd4Yk80L0QyOHJyVXFvaUYxSTZYRGUrY0pZNXc2ME1yRjhaeDRiL0huL0dzYWQrbGtlbDlrN1VWb3Y0d2NiOHF4RytZN0p1RWtjSzJBRFJlL3ArK25oYk5uVU04ZFphTnZGNmVERGZHQmhKcS9pd1FSai80TEkweWpkUWE4VDJ5RVhqNWNLRXlJblJNNjRIaUFoTUhTYXI3K002WWh4VWd2czRUVkoxVHByeHdyaEdOenE0TmRNc2F0eUF6V3o0bThFUG0yb3IzVVJoTFJrRzkrMHVHYnQ2RHg4STlzSmNyRFhabHllckc4ZWRFaEF3Q3BubmN5NDY1SmRFK25LMzdHRXpBc2lqeFVjS3RCWko0QVVtOVd6WEJwc21vSE5saENkN2h0TUF6cWNSSnIrMFBvTnVZME5lZGxGTHVyMXJLT1d5VjF4OCtMaldDWWRlN1VVWG5jeHp2MlVQUFpUTFFZc05XaURCZDVpWnhWNlNXcUNSYUhwQXQ5WWRuV1hHOFFwekhSS2pRMmNZaGp1TWdOZVp2RVBPU0k5dElWZjVxQTVxMUlDSDhNTmhodHpBVWpBam9CZjRHdUZDNTdmWThKSUYrU3BhL2V6bHZSQjhlMTlJa0VEUDZUZUQwZ3FrVUI5aHIzdnRuOG1tMVQ1c3dFbVBmQXRLbDhnNWQxL1Ztbjdqc3RSWkVTY0pRdnpzTlpjbTBQVjhqVUo4UFF4MWpVRUNvb1lPMXZxem5jZlltTVBvWHI0T013N2tjNDE0TDczQzE2OEhHMCtyVTVLdm1NS0JVZUp6NG5EOHovd2o5T3JmOXBscm14cUs5UDZEUk1OOHNSNGU3aEd1RWFFcVpQUG4vV1NiN0g3ZHhuVmhQNFVibnA4b3IvRzNEL1dwa1pKU2pScnd4YTNrcHhLbVdGUmg2dmt0QXNUZWQ1cWcyUndlREJJNGVrQzU2UGwxTWtsUkROZi9mRUdjWFkxbXZKK1J2eVhhWGNOaWhHQWZENjFoQU1hdzY4bzI5TjdnWnRvMFVidW1QcnE3ZnhCRnY5dy9ranB3RFR2UG9Hc0xKQ0RlRjdxazdtTEc5dzRtdkxBcEFpV2xvVEVCTkdOMExEWGhkQVU1YXJ1djkxTC9uMDRTWnd2R3gydXFJc0I3VEE0T09NVmM2OEdzRVQrMUpwMlNkRnBjMFUzMWlqQzNmaGRwVTU2Nk5vekY2aGNxdExFMlpSZlR5bFI1aWpPeWhlczdzMnJNZ01QWlcyTFNSWXB2QmN6elhjTE9GeXh0bHVCaHpvWDBIaTcwUzBOZ1hVcCtZYitTdlJVdDY5S0thUHdmU2JUVDVKQURTQ2c4L0ZzdWIwMFA5UWpUVG5lTFNmbm1uaHo2Nm4wK1cwdnJ3NXpQNHZmSG1mR0ZXZ2cyUmZUazBQdjljNkpvRlplUjBLbWw5V056TGcwVjBBL1lPRTd3TlprOE5PWWZiNU40cXJTMjEwN0xxeGtqUnRoNkUwY29lbHN2T3ZEN3VxZWIrdjdqbGoyL1J0YXdNMG1RdDc2M1NkNG1pNzNQM3RWY09xZENqUm53a0xnQXNXQTRUbkRzdkRFQ1FrZkpRN0NibVZnVkVRYmd0ZTZ3ODBBOHpqbWhoTFN5RFRyWWUxOHpEK1JwSTR1cGhmTHhQSXkxWVdjVFBEcU1wSkduNHc5RWF3NS84ZjdhQnYyN2x4dXRrUGg4UzlnNHNaOFlmMzZQU3pHUmZwNzBNVE8vZUwrM0x2bi8rZXNPN08wWFh4UlBydytLMHNKNER3LzZWNTBXM3orR0Q2bS83Y3d4YTRmY0tKbTRJR2FLMzltZ2Z3QmpNVnFDb0lOdHpwSGo5TGRnMXJnVEh3cXFzQmZLSG1iSXJGRng1cGVNbTBHTkdUQmFKNlg0ZW9jNnRMeGF1THYzalEyeUUvTlZPMTFjU3c4WGlLZE1vUFp2ejNpeFpmQm1Ob0l5WVh0VFBEU3UrQ0gvaWIxNXZ5am5OUWJnL1MyOU9KNXVQMFVFNFNGRFBqbU5DVDc4RzBZd3B6RGpDaVBFVW03OEhUeXFqVXpzeFE4NWN2dXF4RnhWMlZjODVGRHp0TmVmakpsa2JKeVU0Q04rUDF0MGxvdmh2VDhpRVA5SGQ5a253aktRcXBNS05mbXZkOGxUbjVGeHJnMmphOFNBUVRhZGJXSkFXclhqQnNRSitrNVZBR002SzBtOUwyZHNmSUNtNmw4VjBFaDZTTmd2L1FRL1NGMGk5THZMZm1EamVFVDRPaDVjOGNRcTBwV1hKR2h6dXE3Q1UzMGk2Q24rT2RnOGlOM0NXTUY2NDZudXNKbE0xc0J3cjJWbTlydEthMUxhQm5uVGQzWThwMTRwQ2RPQUlPbm0yaEVrZ0lDaHROa0RlNVQxVWhnSUgwaklJc3dpSDh4UnB5MzkrVG1OVTBSMk13N0loL2VIeFFXNlZMMnlSZ3g0UURNL2NmaU0rcDBxWEwycm15ejMvVURZY2ZWVWIzM3ZLKzNvdWJaZEVOMXA1ejBoZDVRZUFuaHdGb3lMMC9ZSVcxeWJPbWxBZWVqTFUzWFZiZXpoUUFyTzRzTVROV1Y0b2hMMnV1K2VHbzJFUVg4enNybmR3Zm1CWEdINGdXdklWWHV5WVhOM0xFdWxIWGJXYzZMWkEzM2JLdXhrNDV0c1I3OVoybi84aGFBTWhNdCtxV0s2Q21IOVJ1R3VaQngyWjBVNHRpeGVnaG94NFBFbXlLdnBBdTNmWWMzVmVZV1VlZFlJSEowOEN0Ly92NjNxQXdBUDl2MEc3WlkzTFU0UmhjMFg4VFZhY0dFOGRReHovR1lqYk1XNlVmUksvNWZKbGdlV3Aya2RTVGV6RjhUdkdCdDhqZXU3ME42QzlsUGxVYm56NDA0eStwQlh4ZTlnWkgvak9yenRBSHR6WUtTU2N6Z25GbXgxM0drZUdndk5yLzR6eGU1aGlGMVFFUUwxaXpjMzZkZDFCd2g2bW9GcDdEa2wrZXYxN2RWazF1eERzazJJd0xCWTE0WFJOYktMc21lRVBJZGJxU0FieGtIcXhFK3Q0UEdqVUFUYzNnd242c2I1QWtXSS96S1JvemZEQzVZV3VhTmtweXdJb01kTWlQcFZCZ3dSelNBZ1Z5Q01aMGJ2R1ZOUldHeisyb0FJclFVVFFMTUhEQUxpZDdaSkpoeHlnNFhENmhBUCtHcG9jMDJ2dS9MQmxWSndzazFTYnhjUlNqaHZENHFrcXhZbUc3NDJqQStEQ28vMk92M0FoQmRlT2FkUStmMWZNeGVCZXJjUjhIemhRRERxaWtOTitBbGgvLzBscllMb0dhSGdnRm00M0FPai9DSGRlaThKbjg4WGRMamdzZmxCNEgzaFpmVG1jRkY3bEhqdmE5b0dVUjg3ZWVyOTdQRWs0VGMwcTgwYUx4NUVHTmZnSHc5bzJ3ci91eTJiMW1VVW1SWnJSODh3cmptV3duMTdhZ1lZNU5aMVRCQ0NOTEs5ZjdNamNuMDVaWHErNyttZkNXMlNUOWhKSjRaeUJEQlJRSFIrdERWYms4T3RDcWtYL21hUGpJQWFFMjhjNWUzSkw2VTkyYkw1YndnMkpqU1JOekNaZ2NzTnVGdVkzUHZhSXp0c2dNY1lLMWhFaFpZL2lmSFlZN0xmM0tDdUd5T2N2TWRPNkF6aldpZ1FuSWNrN2YxQ0FRSUFQZE1ZaGV3MWJiL1djTEUzMzdFT3JxckFnZkRnaWpUdGMxL0Mzclo3eEVsaE9RRFZBN09EK2dCNm9QV0dCRkRTKzl4T0x2dDgveWhsYWVrRWUvVjM3TlJpSlFjTjZ0U1Nab3lMVzZ0Nzl2OUlsSWZSUTJOZFUwNXl1UUVQTTBHakwxT0V6eEFrOHhTUVliOGVVRjlZMUE4SDZIaFBHUDZQZ3JveFJ2UDAxcDhleWo4aDJ0V0VoKzIrN25Manhack9QdFAzYTZSU3ZyT1YyRThCa2tVamZqdWtYWVA3K2YxaGdncmhuNk40dW0rRTd2VFFHM3g5OUhZUlFSTWJLMWhWbUxZM2ozSjBoQTNCSUxjVUhEWXpENnFmRHh3a2c2T05uOTBWYWZLMUtuMGlYRE1qN0hJRDdpdDg0K2tGSjVTQ2RaSldUTnpZR1lJYmRMZEI3cXNDd201N1VyaFh6MU1MdzkvTTVSb3owaitvcHo2ek5xTkdkdEp1WlJJTVUwWWd2RkNxRzFJTkFrYWJYTkxaaW9IUEFZSk5EN2QxVm11YUlWWDRmT2ZwWGh4SCswVUNmYTVmbU13cUZCeUNRMk9OUS9KTkdmS21qc0V1RXJ4enFRRWovL1VVbG8rV0M4S2FYcEhxSEFkVE1hV0tuc2RHWEtQUm14Wko1VVBrUjBIdSs1U2RuQlVORUhzVmswbzl3MzNwMlQ2eVBsNXNGVVQ3NG1vVEo3MnpBSjJzb2I4a2FnTUsxZEU3SHM2bEtiM2NGTG4zRHpwRUkvcWNIeFNFd2hqdks5YkorVzhTdEVQQzZEWmxxc3RBWStLTUhRYlk5VFhDM21nY1pxMWNrQWU3MUlBN21aRE5XYUc0RUFoQjlPWnpxMEtTbDJBMnQ3Rk9ydlVYMTJ4VjUybkhZQjl0S1ZkVjRDSC9STEZuRnEyV0g1OFhMYXJ4ZnJBNW0yNWJtbG9qWHRjZTh0bEFNS0J3d2UrSHRLRUFSMkV2TjRWT3RkN253NGhvUzhYRGp1L1RtMWJDbGdaVjZBdjhKa2lUb2puU2lsZEVBOHRNRERmMGpIUitHTzFTQSs1ckl1NWZwVmlWMGtmdzRlRjNKZHNLTDdEVG4vcSs0Q0c5cmF2K0NXOXJQelFDeWg4U1FnZ2syTXZyWFZOMmNBUllWb1k1YUF4aE9PS043VEhFNlp6dTJGTzZrTFRLL200blZicE13R1pqVmFta3F4VVJoQkdXbXpEZy9wSE83Nnh6cVFHZkpXU2dqL0dOVEZROEdCTFI3R1hKQmRvdUhpTUVlM3ZTU0owU0FVSXExWFlHR044bE91d2tIdXF2RlAyeGw3WU9FaW45dzNnbEpGaHRBQ3RKVU52ZW5pWHJRcXFNbSsyRXR2YVVMakFacEdLa0VZWW42clJIRG9zUDFIVEJqSUR0SGhzejFLbEpWOFVhVTdUclNxT2tMbUhPNzhoeW1RR2o1Qk1kS0t2L1NwWWtTejU4VlJFM1BkZ2JEUGhlTUp0N1MwZDlyNEN1cDBJRGlkb2dMdzk2cUljNnIzdTdEaHV2RFRpc3hyRW5OdE1QRE1DVDZSbWtQYjBwYjArTFNMbnoxOFRUM3dkK1RnOUI5TGRJOEx3TVU1Ui9TdG1OYjhtUUhXZ3QyQUUwYWVSY2szT1pBWGNXTG1BR1ZDY2hCTkFseTZzazliMEw3WVJYS3dUZk8wSm5tUm1paDNsSnhnL0N2WGJtakN0akF4OWliOVJ4NDdVQmg5VXRTMUsxVlRkU3dDSCt4NDRlR3J5dzNzenZCWUxhNmZ4RCt0ZGVNa3kvU3JEaEVqdWZteXZ1bldTdEs0RE5qTkgremlXeVhHakE4bkJobTBLcnFXMncrakNBWU52bUxQV0Y3SzRUMXVNQTJaOW5IRDZmeXpWalBTT2NmL2c0NTNMMjUzdTFjYnhXeHFXTnpLSnl1bldwVEpDOEx1R1JsZW5hd1NQRmNEc0dDUys4V3VjQTdTaVl6OTNFNFh5YXpqYUc0YzNWZVRENnhvOEx5a2s5Rk5IZjFreDVTdEUxVE83WUpIQ1pBVXNZWXh0MkhUTXV2ZlFXek1OdUZPUmx5R2RhNkxDYmtzWFNGOW94d2srMkdqUFBLR3VFSzFwSlgxeDN0RnFsbXRvQ1ptT3ZYSGhFL041Qlp0bkxheisyczhMazdHajF2WitwTTFqUU1xZ1JoU3QyVHVQZzJDY1lNZXdaYVd6QTY0L0tEYmh0a0RjNUV5NHo0UGJCc3BNR0YxRWw2dFkyV1AyaDF3bU1zSE5UL1J2eDUyRjFMalJDeDNzY3lDMDFiRDZKNUFkSTFmcTVtdk93YWJXMEhOb1pnSVl6ZEtQTGhVdkErdHVwSm9DUU9xcWpWSEpGR3pVYnZkS09lc3R3Z1JyR3BrejFjeE1YWVB6OEhURngrTFpvVWw4TXVLbk1nQ1VONGUwRWg4Rm1RUmd6ekU1ZXRGbHhFN0VxbzZuT2FmNkxRcW5qWERiNktIOWo3L3ZJYXBsUVhsMEdOa1M4djFtbWVORy9tZjNjOUZ1ZFFRTm9RWGNKTWI3L1dDK3FoM1pOMWNheVYrQ0JWU1ZNRUZsN2hIbHdxL3JpZ1NPRUUwZ1lNek1DcEdVa0JOWkJnVWljM3R3dlRuNVY2V200blg3dXhRcmRybXNWdFV3b2IrNHhLVzVYVndISkdra28zY2RndUgxNWl2NUIyaytoNW9JbzdwQU9oOUU5VkIxK1M0aFBUQk9GS2NMeFhjTEpKTWxtQ1ROd2lRRkhOemFSL3lvZTRHaC85V3VWc2dGS2xuVHJyUWZkSWJqd2VoMDBhWHp3YkREdytqaDRWRW9NbjVoWTExSFhBU042UjlCSDNvcWpLWHMxMmcxY1o4N1hxYW1lSjVBV1dxSFR3Tk9keVNmVkE1NGlGQmdNVXdnT1pCV3I1NzZCRUQ5UFpZM2FERnhpd0diR3o1SVV2Y090QlRtRGhNYnZiNGNJMnlxbzRmWFQ2YUJSbmR5cXhoTkkyR3pLTkxkUHVLN2psd1A1dXJPNmxRRVNLOGJPODRFZFdLdDBETEdiWUtuWmRwM2R6T2lyamdsUXQyU21DbllLdDIrcXlvUGxTcVB4VHN5RFhXTEFacVJQVXd1TlQ2NXdnUWZPRVp4KzlpUmI5dVlhR3hFMk5lZ2RtSDhyRFA4Q2hmREE1SjNWWDZWUzF3QldlcXBBc2JHalFVNnJ4MlVnaEcydWlPb1NjL1hEOTQ0Q0xtYjdNZlVocnVvSzIyc2lGV3JtNzd3dzJpVUczRHBZZnNJVWxSa2JueVFjbDB5V3RMTHpudllvU0l5RVlQMFRmS2RCNk0wSFA1TTF4bDVqdFlOTHpPbzZmdDZyWnRURERDU1I3TTNZcWxSSTdaVVJKUlVNU2ZpcmwzNVZSbHFCbklrT0YwaENTZUVTQXc3MWxiL0I5RUxqUW5velFlZEtScEU2ZkdtbEU3WkF0MHBGWU5tN2Nhc05HaGk2aFJxUFVhSnhKREcvL3RWOUpVQlBlNUxpc3hrMStleXo0OGxVWE1peGtuSnRBVnRWU05JNXJJdFZ3YitSY1ZTWlkySnF6TmV6anVmQS9rSWRYSlFPTTRxTkwxNms0RENRbktCUk9vMGxld1ZiQnZWby85MEs0cXVIb3ZDL0tjUDhNRUI5d3J3azR5VmcvbDcySDJDSUFHYnIzTS9XZ2xMaU1SMEJ3UUJCNzdIRWUwWW9IRWwraVl6RUFzTDg2bmdJSFNMMHdGbnNPVThvR2dBQ0JhOTF0RWg5OFNBdVh4WEhCSVlmb0pQN1pKVWFmMThMeGJxUFZha05NM3kyWWJ2aWdGTjFwbVhxTU1QdEJLR3dYaGtyUnVDQml3WE9VKy81cVl3Y0V6Skh6dFQ4ZGcySkpYeUh4WUx1blZBZnRRRkx1b0NhZUovK090a0N3OWNMd2RLT3F6ckhqTDNGd1FZYVB0dXdJOXM0d29oVWxHVDA4dGx3QVJlaWwwcEZORlkvUCttQytyVy9vQmVoVUdqRXpSbzdiNkNoVmoxd29TQnZhQ3dJZ2JJRm5sU1BPRkNGNzREZXladFNZUHp6VkhtWHBQKzJQdU5BcnJGQmVIc1pIL0JGT29ZZ3FaM3FSWE9oUG1yRFR6T3hiTTRJdWNJOE9NQ3JqdWZBallTRmFtZkp4VWc4dVI2cHBQcnBnWnpMKytrY0lLcWN5U2hxZ0k1VHNiQnZ1TDRDb25PbFpZN2YyMHlkZkZMaWdRdDBucWRBSC9ValhsQ3V2aCtCbnVyWGtTNnVhK3pFbVdDWEdMQkYrS29uU0MwKzUwcVVLaGpvSm5ZTU1iL2MrT0UwZW1nTzVqYnM4Tm1HZElPb3FMSGlnQzkzOElETFBTRW5rc3pDbVViblY5Y04yRmxvNUNUN3RmZkFsQ29NMFJXN21ZKzdTTk81UHNGYlVVWXBLWGZNZ0F0UHVDNnk4WFptMkZ2WFNTdzMzS2dPUEtnR1ZqTTJFTlJwQTNiV2dWcG9KeVR6OUtqNUJ5WEVSSk5MZllhWFFmcWphcDd4Y2REYitYaTU3bjZXTzVHM3NEb3hVSENKQVZ1RlVXS2dsM29Qaml1aHlrWHNGZWRWakdoK2lmMExFTlhZZVVYOHVnd2pOWXhpUmVyaUtQWFJ4SVdMdEF1Y3FNOWQ3c1RuMmlXZnVFaklRRXJtZkNXUU9OSXluYnhLUlpLaE9LOW5qUEdLb2V3Y0F6SUY5VVIvcjRZZElqWnA1RWxlQm5sdWhtS0FKVmpuWUQwbXFOa0g2Undha2xKbHNMZHptR29wNlNyNUxGSzR4SUN6aEcxbGtoRFd5SnZaRUNabzlzZ3NkcXcwb1dlTUlZcWZsNlFReUl0czRGNjRjNmp4QVZlZ0dHRFJ1eThTaHJteHpzRW82VG1YcERXU0VsR1EwQ0hsT3RHYjEyb09MRG14Y2s1STJoM1ZOMEJ2WDVLZ1JLamJicWtTU3p1ZzZMRSt5OFRLMWZxSVZvcDVWNVVLaVY0ampHVHdQbFNueDFqeS9JUUxlcE16QkQ5ZldoNDZXdXljeGhIQUpRWmNMQXloMFIzbHJmRENKd1NoUzZTL29GMU9Semd2UmpEcGRGREhHTnNvWmt4VnM2SGRJNXl2MEYrWG9Ob0J0RjRoUmFzM3VKQWhtQmdLMFRuSWl3VGVyb25BYzZxYWIzdzlhaWN0Y29rQlp4VExRMmlWZHRZMmdWeXM1T0xwN2FPVkNJenBEVXFnbDlmb3dtMVg2RlAzaTJqWUhyaTM0dk1acVRqQ21QUU1hcGVnL1RST1o0aEVvdFBWVkJCQzV4YWJEL3Z0SWJ1NGp1ZkF4MHk4UVQ5RlViOUE0TTJiQ3p5cFhsaUxpeDZnWUM3MzJaRnE2V0lnMEEyQmdRcURFN3R6bUsvVHhjM3FDckJDTThIZ1lEeFdVbUVvSmRUWmpsckh6bVBHaDJJRUc2RmV0MVNxSVBTVmlFWmtLb2duTS9jenI2U09HL0RoQW5tTXIycjhsd3hiSndoR3pleEo5NmdHeGRjYzFRLzN1aGtNcFJmeW9iTmFFU1plMWQ3eHpmZDFHZVBpamFXRXRtUVVHZmFnMi9QZWV4VzZaL1pVWURZTGRNZGlBNnV2dStadm9tMVFKU05sQmk0eDRHUVRRdGRoaW5HdkZJRUJTMFRrZDlvWmNjUENiU05BcmxTdk1iK1hRbWdOaThhTmNHNHoxMnhzcjIxYzBkNVlTdmRYeFZLMFhqb0dqSWp1Z0lMWnQ3ZUwrcWpBQThjSU5LcU9LTmpzcmlaV0NSV1gxWEVXMnN5VVVhUVQ1RG9sR3RSN2pwWHFocldkRkh0dlFGNnMwVm1kY1Y2c3NRR3FOSzk2UmZrcDkvN1VONXhuWjM5VVpheFViTkRvbzJQQTI0K3B2V2dubmRBYmQxdmxPY0dmSkFpNEVKVmtUbE1USFhZYk1wMm55T0lTQXphemFxSzE0dUp0Rk1qUG9DR2twZUxCZ1NFZTBqbEZ1NFNvVDA0OUlnMnlLRVprRkZRclZXc243K3V1WGpsYW4zQnJweEREZjRjVXJ4R3BCT25mSmpxR01DY3huMVRvcExNTmM1VkFPTEJqaU14ejdsWWNCRzJFUW82NVRzeC9BWmZWZ2FVTHIxUWVNTDJvVE9UUnU0ZXJiOFJHblpPdko1ZDBBaFgxdTRWMmRpZjFVU3hkKysyZ2NiZzRpRDFXL3diaWhRZnlZVFpZRVpWTVY2eWlHV3RIaW5lVFl2MHNXR3M5OFVGSkJjT2U2bWhscEJlY1VENkRFdUVBd05scUxDNHpZT25jYXpOQitDdng2S0lGYURvN2RGREtVdTB5eHZvVnZSczRXcUg5L08yZVhPV05mN0pYR0RVRXZEd3cwdkRmVVlmLzlZQ3hKejFYNXdCQUhYNkRnb2l5bDRwc0UwUnYzUVNMNC9jb25tVVVVczRTMXZhekM1M1h4QUc0eklCVmd1azJTUGJPU1BiWDlCVjRzdFYyOHErQnpkVGZPMHVIZk9uS1hyK253UU5nYi90OFpXQ1R2R1FUZlYzR1hWMUNxSzJpdVdYNjdsemRiamdiRUQ2MzFPbmdXaXZZUDN5Mm5kVXJ5d1ViS3p1R3FBblFiUXFOTCtraVAyQ1hrM2RodWM0RDU4bmZxQ3FNM0MwaE1RUXNJSm9COUZqSm9URnFSdmkzZy9yZVkyeUNzUmYrY2tlTzBncy9kRmFZcVhVMGRRbDQzM2QyTmM3bHMvaWFUOTF0SEQ1ZjJWYS9yRFpORVhZRHczUld2K0w1VTlXQUczdDVVQytCQjE2dk9BZ1NBdVgzN204VEM5RWxjSmtCNzh5V0c3Q0t4dCtXcFRaZzVFRmRCYWZwRXAyTmd0M1pDMFlybEFML1N0VVBvNjlvRzJ6WWlnZDlwOGs3akplQWc0VDdlbmlNcUtXdkxnSHY5N3NSL0w0VlRlVWZiY3MyN0dWdXpvZkFoSVRURjZoai83SnErVHAyWitsMVlDMUxWa2R0M2NOOHlGc3dncWphM3RFalV0NVpsMVZjVDBnc1ZkaFJHYXJtL2sxTVJraUlyTDZDVUhqQklYMVBla0c4ZWhuMDV6cmhNQjdpR3hVaDhDZjhBS3VXZnJYak1PeTVQaEZVbi9CYzd3aWw0RHJJekNrN2pQY2xYZG02Q1hub3RNTitKZGdmZGFHZEJlb0xEaDlYZlNzTkVxUmRlUCtxQlFCZHcyVDVMMFFCdG1jN3I0UUV1TXlBWVhCcHdvNnNRVEhxQ3lsWjREMVNzSkVkbmxSdk1reGl3Ti9zMUEvbmJ1clkxSERHRjlmaStiVVpwTUxsSEVZKzNxTitrRm9QbkJWS2w3ZFRkNU85dVNIVGNCQWdpc3R4RTl1ZTN2eUJiNWwxU0cyRUY3YzUvVDFnUmVsQ1JTTU5jTFlnZGRvdWlQNDZDMHRSVzdOTGxHb2tadUhTbUcxcGl2b2lBaUN5VkEwZGtwb2UydkJVWVNpTWFabk8rMEllM2xZeEJwZGFYS1pMcUFYN2VOTE5uWTFyb0QvdXo2UDVTZW9IOGk2dURjTTQ2akllNHZmMzRGbnFnK1lIWnVHbjd6TXVwVTFrN3h1dHMvYm14MzI1ZEVRaDM0dk5rZkZOVGcrZjV5YXA2OGJSL28yVUM5T0E1UW9DRmU5Qm12b2NkSUVldUVzTmVMdHdhemt3UE03NE5GeVJvalpncUIxMkU1QlowKzBRS2hOYUI2cStsZDdhbUtYNzk3ZXlBYXR1NUdNcmoxS09ZSThIakVOaUlMV0JKM3VHMGYyQzk0YlE4NDBOV1laZkF3THNIanZOTFBhdWMyVmMxMUcvYlhQV1FmVkJPYUNaTEc5ZG92RGtYVUxsRFBUQ0krcjNaUmF1TmVBc3VRR3I4Z2dzQkpPTVlWM1lxb255YXhhd0I5YkxxVy9vR0VLTkZkTlJxQW5yZVdFWTczM2RqRDFuQ3RkQ3I1eC94SEJTeVFaNDRWOUd4ZFlaZGhxZmI5ckk1blJITjNWMGdCVWoxeTlJMWo2dkVmQVo5U2FJd0R5ckdvSGdRZlVHSi9COTh3VDU3N2dXNnNNYXI3VmZrZitPaWxlL2pnMzdjdXVaQjE1L3RFaXNnNnhhaUYzS2llc2lRVjR6aGkrb3FyTUt4dnVIVHBjVUh0TFJMZFUzNURYTzYvUUFNcXVUb2lhNEliT0lYbG1mU1JMMDUvcm16eGZFVXI5d09jdnBDcUJHdS9EQ2VCb2NJeHZBZUoydmo2cC8rU3pPR3k5cm81OURTN3p2VU9aTjlCUXdKT3d6SkpoVXZlekFFc0h6MWlWRTVvSHpPZkxhWXNLaFNlRlNBOGJHOXAxQzFpM1V6NU1TbWhoN20xa0gxYmtOakxDUFlHRCsrejM2dWRsZFhkUWVCczBGUCs4N1BRejNZaWIxTFVWSEV2RGZyZG1paHhTQUIvNTFiQnk5MGkreXhyMHhyaVdZOFY4dWlCUC9iSHl1LzIwM0xwdEJoZVYvdzZKMS8rM2JYVG1pTnR5NzdJVGVIMndSR0QrVG5WNENFWWg1Q2hKdEFCOXMwa0grVlVkZHM1SFM1WVhIMllma2NmOElCWXU4TXIyUXlnVGg1NjFkUXBSZjgzZEdrVzRvM0thcHQ2aXg0L0hWUjNYRDhHNThlRHdtWUpMZjNKaEo3d2lOR0VDK3QyQmNDN3FGR1c5WHI1eUI0ZDdiTFlUV1RXekY1Snk4U3d6R2k4K2x3bDM4Mm5vSEFnejM3VTNaeXUrSDU5Yjcva1VjT2t0RTdLNXNxMDZ6a0s3OW1XenNnUWRFeVB2WUZ5UTVQLzhGWEc3QVd6Sk5FRm14eGdZTWcxa2t1QkM5SW1UTTRHZGI5VDNGUXdJRHhIdDV3MDRvZlRkN2gvNENodk4xZnRqZk1tSEVrRTE5dGw4RXJiOHNnVjVrejlnaTBMa2VPWjZOQWwxaE1OeEhlb2FiYWl5Ukd1K2xyWVBzRW5UdmI4cFM1czJBUFpiK28yM0hWTitxR1g3dlNFRy9nQ0NQUHIrbHV2Um93L3FqcmxucTduSUR0amNJb0ljQnpScHpTY2I0TFUwUkZQZDl2VHhFL2NWem1SWGNwUlBpZHd2M3BmRUNjdUx6SGNmczltbC9jRTR6VWRqNXBra2pCaEMyVFdMUHVQclNCSm81Sms3THZYdUh5d2ZLYllDY1VTLyt2cHY1KzJlT2pxTlZFeE9ZWVE0MVpiaW9xYi82ZDZiSWVIRTk3QTF2L001bHRtLzJxTnNtcjJzZnJIdGQ5eDRycFJXQ25ubnBDT2Z2KzQzVE5ieUhqc0loL2hRdWg2bm1raDFGalFnei9aVjhuTWEwVkljdHdCZ21zNHh1NVByTWsxMVpxb2ZzaHZaTlJZYUJNUFovUTJOTysvdkhlNGZUWWp0c2RXWGN0enlORm95UFArMzlZRFA4bC95NkY4NUpVcjRHSHY3OVRQckF1MGFZMUl5R2dvVk54UUkvQngxd3FSeEc3a2JmZDFHWnhnaWpBd2lFRC9JK05FNjA1RFFCTmU5V3dUN1ZhdC9Fejd0amNRb3RURmFUUGREU0JpR245L2tnMmZxU2dOakQ1b1hidStxblI2OXRWRGZLb01Cd25pQTlRaWkvV05IRE1MUzVYRkhscjJUWDVMOUFqUmp3bkVOeUE1N0FaU0FqQXdhci9lditYTHEyZzdHSERXRlNiRGhmNUFVS0puRUd2N2ZibUMzdlhvWDRRbi90SlA0WjcydzJQZ1NTMkZpZTVYejQ3Y0ZScC8xYkI2NFJ2alV3aW03aGgxd1ZnL3lhbUU5LzgrSDB6YkFZYWhzaXJ5MVdCb3hSRzYyTElwZGpDNzlYZkM1SnpvazlTZDl4Q2NwZVJQTGtxcU1pNGdyZVUrODFFcm5VTXl0UkhmSmV3dUY3bEVBK1o4bGg5WUYwclFsTnMza3V5bitCR3VtZVIxdGJvYkNjaEc0cWxYRDZqM3ZWYkRSd1cxZFp1R1R2OUFjWkpza3p2MmRHK2dzN0F3dGp1Q3oxOXRreWk4SkRQT1QzUkhwTldHYXFEVUNuRzFITHlCbUhSTVlMZkhwZXROMjUydzgzWi9NaHFyNmZNTnhiN1hqZng1YW5rd1RTRHJlUHQyVXIzMHQ3WWZza1NGZEpQdTBvYXNTQUVXcHRFdW9BTmVJNDU1b094c0pvNnpPTFJEUEMvWVc2VTJpWHM5ZWM4WEpmMllEQmMyc3phSk1kb2dLczZUdURaRVlNSGZ0MzJldjNtWDZBRmliS0RxcWFBbkxNZ1Q4ZjFNZzNDYkFtOUkwQmtYUytuVDd6di9oZ2YzRzlPdlFGdmh3V28vdjNhUHBZSW1pekJYa200U1NXY2pxZ1VzMjR1YU9jbVo5NUlKL0tuZHYrL0MvVTJQemFIQlBscFBHQ0xwa2Y5K2FSQk5KVDkvazFSM1gvZmdpWHRtN29vTDVocUhsZnMvQ0kzVkFRZ3dvZnNCRkxGZnp4T2xjdlNxR3I1aDhSU2NPNEV1dTQ3bjN4N01OMHlaekRZcWtrNkcxL2VtNFVYV1ZIcFJLamdqY3RTU0VKME9IV3dZNW9uWlFBdkwrN3VyUUlmQ3Bnc2tmR3k5bG5NOCs5STZneEE1N09ZYWFraGd1MDRadWw4cHpUK1BWeUJJdlB3R3hMdlBEbTdCSjYzMDYrKzNBUDJjQTlObExnUWJmM2tGL0NSanh6Ykp4SWlONkdQOWxMRGYvOUVGMDU5d2pOT1ZoekhobWg4dktVUXUzempKdVZwRlVUcEFCUjl1dm9XQnFkb005NzRQcGNQdStJcURxQjYzNTNOMzNqZS9YdkROR0JNcEc5YjN3VHRlUVNYbXVSZ3BBYjNTSkEzTlFDTWZoWlNRM0VnSEd6ekJTelZXRUtqb0tQdDhwTzM1ZUVZZkNIVzdOMUg0Z2dMbTFOWlViWlM5QkFnZTgzTXVMT1hIcjRaYlQ1SHVkRnpJcmV3S1FSUXV1blZxYlRocVBPVlhhd0FlMnY4R285cHgyZ1MrY2VObVc0QURZcnpPQkRxck9kRW92cStsUUdVaGd3MTc0NlEvZjQvazhFM2hKNHNJY3NDbnRyZ3pvMXNLY2Nvb2MvdVV4WjRlSWQxNTRCNCs5OGxtb0lHWHdpMmV0L3JZbzRmc0MvM1oxRGhRYnprMWkzY1MyWGkzd1VBd2hoWExwSXlqMUJPeFQ5dVNYc2RUQ0FvZmNldFRVc1hJcFpJaWlaNExCQ0xnWFJPMytkZnQwZ2IwL3RaK1N3eHpiYkg0dlhocTd3ZHhqVjR6UmlBNGUzMnZvWnZnUVJKdGUxUUxBZVVydS9IOGlqTDNmbDBqM0xVdWtMcnJQRGFBc2RFQjlIUGZvTHpsV0Q3R3lMaEp6UmhiUGtZZmd6dmNMcEhEdmxtcEcvSGFKc2dVVHJEY3luVEJBTXVPQTkzYnNzemZCcmNPaStQRURkS212RFUyc3lURWtzTzRJYVhkQ0RYQXE3VVNWN1ZMRi9DR1NXVVk1akU0MlRqTjQ5elY1NEhwK0lxckFORCsvbjI0L3BxbXlnclhEWHNXTDZYcEIvUTRabExJZWVQNTJ2NzIzaFhkN2duQmpoL1N0ODhoOTI0RWJqZS9EcnQwcGtWNDl3eU9SNlVoUWZPS0crSHY5cStEL09LUWNFeW5OTHl6WFYwTjI1em1rdXdPZDdjMkNrNGJBRDN1ZWxzK1hHQzZHODYrMDA0K0NaT0NSNEhZMjU3aUxMZmQ4VzVOTDNkcFBQYWVOenJrNXpYZjNYQmt2VTVGMnU5ZkZWOERDSE0vZDFsODI2d3RoNlQ5OXZhSFF3QkxUK1NSb1MzdG1VcFUzS3FBQi92dlNpZUdxakl4ZURjdGlGczVOb3E5Qno0aUdhUGlwV2QvRGNCdHhzTkhOTUZ4SnpkUW1UT05WNWdPdXpScHNKOW5Ea2M5V0NaTEh4OW83d3BSbGpXdGg5clhOK1RTUUozdVlEOGdwQnlJdjNoZFRFQ0xpUDZFVVBFbTVnZUlKcjIxTjJ5a0w4NnFER1ZkUysycGxMMGhNRFJqbEprUXRyWG5pYnVnRWV1SU5QNDE2QzBUeTh2K3NYSnVzZUhKaGYvWHBZYzNFT2k0ZmovSm1KOUlmQlRpQzgxbnRuTjZOWm5POTFiT3BZRTBkTkF5VzZHYVBqNk1WK0VZYkcrek9IK29oRXBNYUw3WVpmRDIrdSsyL0p4OHUwZzBDQ2RzSGVJdU1GSkxudlZaenlTSTIzdE55MXRkL0txSEVEVGlzcUU2bHIySUFTanNxN1lud3RTZEJVQU1XT3AvcUVrd1Q3ODA3UWczWnlva2gvTDQxY2tSb3gyUEtibHFRcVN4NDlPSnorYzBJOGwxK2FVZWZndW1uSUdLSERaOGVJWVcrRGdRMUVLczl5YWU3TzVXbmlYbmhjeis4NVdnbnkwVGVVZTVhbWlBNEMxSisvSHRHY0pNRHJUVlBJL29UeSs1blFSdFpKQ0dDQm15TXBrU09vVVJMTEJweWtVaklMSGkrUERXQ3RBZXNLd2ZCVXZtRGpFdFFYR1QzS0o4cXNkdGVHVnNZZXJsVmErSDhEZE5RdVFkU000cExDM0VQSHhROG84dXMvRXd2b25GaC91MFFQQUlWSzVQK0lGckw1d0V2TXI1bUh3UjQ4bVgySHgzMTNjRE9OYjFBZFhEaE1KLzJaUWpOTU5LTGdOWTBPUlhTblFWZE1na2Q3aGlsSFUyMTQ0SzgwMnF0UXlyaUJvOEN4TGVYS0cvY3VUUk12dWE4dWFqd0h0dUZuSm5jR05KUE5VMHB5WVRPdkNlOHdnbXVyKzRYaTgrOE5qS0tKZGhRWUQvTE5SNE5EaW9tVkdaaTRlb1FONFRwaFJ3OU84OW43OCtrN3JuM3ZjWUVzaXoxMDRZTUVEKzYxSFp1S2h4NCs1V2pvbFhVWmhrcVVWWUVkemIrTnRpOGE4TkdXYkhyaGIxbkhGa0x3NVpja2lMNzJkL2E4dC82VmF2ZzFxR25QSDk5Q1BMaS9FclZ6THIvVkZHck5nRWMwRDZBdlI4U0l2MTR5ZGhjZjJJaFc4czJUekx2RFM1ejN5MEVxRlBTNTRlVm1NYWxpYi8vTllYNnRpMDEwS2RrQUE1azhQTVpVVFJnSEJqU2ZrSWFnMGNLTW9hZ0FJejJMNjdkRDR2eHBkR3dneFRTUnZ5OVVHSjdoa0htanlkV1pLczg3azQzc1pvV1JTVityTXZMWVF3NmJjVWg1ejlCRGNJT0oxVGYvbVh0RU9jbmtUTlNhQWFOMHUrcmlCSW9WUGlSU0wvd2sxdzd2NkNvckhVeGhiL0dFblJiS3FtaktJZStNTWJGMmhjeTFNZ2tiOFNFSHd0M0xXZ2ZSQXoxQ0haTE0yWnBWck5XQ0QvRFAzWjlUUW5rY1hXek5MREUwYkdoWUoyQ2NrSzk5dUg4akpueDhxRytrcjFLa1hRL1kzUGNtSDZ5U1dkNnFnSjd5bEdIUmRqLzNWajRNSmpEakw5VlNmbzlaNTRsUzRrb2dRSUQzdGVaU21VTUFjTy83L1hpQWFoSzFac0RBVmZ6Z3ZqRllQdnYyT2JQTlR5a0UwbjA4TFBUWHhTMTExMjNvNGI1bHFmU0RzSHdESmNSZitZUzM5OXJZSkgvNzRoUmFrbXErL29mM2ZUVS9mRGQzRFhHYTloVWFSZklyTldRRWVubG9CSkV6RkhteWlzcnBmM3cvVUNweFJLeDhCTmVNUHpndjJtNW9qcmxtZEd4SitZVTd1Y0x3Ukc4WlFTa3BHd0h2bmgwbDVtcUFlemxTVUJGaXpvWkxEQmczQllvWUc5a3pMREpnblBIUUlyOW9LeXlkNEkyZXo3bnJaa1Z6UDVvajBFQWhlVkRSbjMwQnYrYldZN0s2THZxWWZ6emZ1SzdyaU1xR0RTQ01MbW5WaEc3cEZFd2RRczJyYkxnYUlPSysybmFNNWg0cDBBWTRIQUdFNFkyMHBjMGE3MWxodmpSN1hBdVNvaDhicjZvUlpBQVRpRCtQalNNcGt2ajErazZ2V2U4TE9KMkY3czRYYzg3WUZ0cDZpMnVZL0xpUmYwMUlDS1I3dWRnUFFiWkFKbkJzQzZ1UWZxSzljbHlDak9HRFBTWUVlU3ZWL25IQ0JuTEkyMHVnVHVuQkJvTzl0RkkyR1NIcUxHWlhCekZaWms4OUEwUWF2T2pHak9LVGJZNG1BSk9BSVA2WHUzTnBlWEtoZGdpRis1MXM0Nnd0NExwOHh0NzJ0UTFaMnNHMG0vTndSMGJrdEdWb0k1dlRSQU92dHBvUC9Ddm1IekZWZXZwdVpLeTJJRTRDaFB0ekJEMzVQNCtKTTZ3VVZBVkVDWFljYzQxc2poR2M2b0Z4TVdHOHo2MDlTcXNodmNyaDV1clVJbTMvN2lGbWZNdjQ4VHc3MnYrMGh2YjVmSHAyQ1pON20wZFhwbW05dTBiQUE0OXd0N1BRaSswNVZrb1h6RXdVaDRONEdLY09pZEcwbSswQm4rL1dSU2xhNzNKMU1UUW1nTVltQkdpQ0J6akVYQTI4OXptSDhtbmVvUUxUQXcxNkdNSWhNMXBIb3cwVU1kQ0o5aURYalU4SUJ3Q2c3enliSXpocHlyR2Q3d09JS3hYdTVqVG1zVjZ5Y0J6QUl2SGhNOVd2NndvNDFZQm44Nm0xaUwzR0I1dXphTmtsTGJVYmduRHl1YjdoZEhPbms4VFNSMXV6dFFzTzdlYWJ1RmE0THJOSTgyWUlTNlhJNWJyd2tGOFRsUXFHK0RtTEpzU0x2ZGRpWm5mL0krejBzZUZoRGdYdlU4d2NmOGFmK2VsMXNqS0lCTEdORzFIL1puN1VLUXprVTJOcUgreE5QbDdWMDdhQ2ZqZFNreDFacFpxQWZrYXhjemJKNDZCRDdWZ2xNaWhWdGJRQjZkZGNkaGJ0aGF0TnBGTlFlR2JtOCtzRys4bTk3L2cva2d6N0ZGd0pweGx3RC9aMG53eU4xc2lCaHpsY3h2emw3WnpVRDJHUEMwa1p0TlBkMmFVcFhkT2hLZTFodHRUZnk1TmlBcnkwQWowVUtNelVoUUdvNWlQVVV1RXFKb2JlR0NRbnlyN2NjWXdlWFMxanBtM0FpUTA1VmkrRHFTZzhPQyt6RWYvbW9wbGVMSWREWHU3UGh0d3AxRWNiQmdGcGhTWFczbzBzVkhyQ3FrMFlnZFFxWklOTkxpaWpBM2tuTkVHNWRDY1phMVdNNUZMaDY0TWlEWVg2VUpOL21pc0IzNXBrc2Y5M1RqTWExMHJlSFhVek80dVpBdW1lV1JmRVVZOG8rU1lNS0lLb3BwaGNDYWNaOEQzZFFyZ082MDBQcmtpanRSTmIwVVZNLzhNbm9GLzJuci9TS0tPa25MN24vT2NuL3NEd3VPVWNKbTNPS3RIbUszZHl6amViODhxSFRJUXQycy9rQTJLNmdQV1RlTW5LZ0Q3eEt4dk02VkwxQ1BPalQ0YW9wV1FobndvTnJwcHF0YXNOOUl2MDA3enV3R2pqQXhuMTgyc1hKbXRqb1ZKZ0p2c05QaFF1TjhFT1M3MDc1SFdmRTg2T0E5SmFzaXZoTkJJTE5QNmF0R0x5NVpNZm8zZ1ZuTzhpajVpeVBVZmJnb0FRR2FXSC91eVIzK2VMbWNNbjcyVnRnN1ZoYmZ3S3d5d3JIeVVCSm1ST0IwVDUwKy9zMFZTRXh3ck80ZnB6cUNrdExmVmxGaHRzOEFvVDVhQlU5bVFnd2lESTE5NUFWUkwvaG5BeWhzTmdrQjVTc3FZK29CbmZRelErdk5BL1VubXRaL045dTNMQkVTMFNNQU1NZlV3MFlieC84SUg1bUNDaXdzRTdoU05JTHc5NWpRMkNBck1QMWN6UWdqMDR6UU5mbXRDRVBXaVlKc1VDRGFkek9Yd0NGL0hNNmpSNnBGY0U3V1V2QzZrYzFNcGVHeGlwaGRpb1FueTJQWnZlWm8rSEJ4a1hjVFpUOTJFbUJ0TWhSb2N1S0JXaTJXQWc4eEpuWXBzQmhOdWZNaGxPQXpqSjcrc2Fxc3lqY0sxK09aQ25lWWo2N0pIYklGM3EzRlNUMEZHeHdialBMekRKYWJieEF3TUtuNXpMcVZpQ1BHeldKc0c0UkpnbEdQeGZjWEZMVStRZ1hudmdqd2ZGaEp1cjREUVBERy95RzU5MlBUbDgraXU1UUdOTHArN01vUWQ3aHRQVVhUazBLS2F4cGlKeGY0OHdhdXJqcFltT1h6WHZpRFljWDNLcUpvR2JlemkvVEZ4V0FtTFpJQ0VVdDB6aExmUFo0ME9mRnlXdHhrSlNxd2ZYQXRzRitXaGxJek8zYVQyemttamtqK1hjcjdWQmpkdVQzemRZY25oa3lOY1c4T2MvVkk4TWVTRG5pbThPak5JRTZUdHpGVUdsakxLQXZkVjFmeVlybDJaWFJUQWZDbFBPaTZHUkpsWjUya2dyVEwrcGdKM0hJMXZJWHh0NGVIbTZ5N1l0bUlGVGk0dVl3UEE0OWFSajVBNmI0bkJBNVROSmdpNGxlTDg4RHBsUUk4YkZYYTlUWHZtRGlRYXpTdlozZGdzVnJlREVUYjFpWHJKb1A2OE5ZOW5nWnpNckNROXVCdmhaMXk5TzRZZ2pUZVJkSVhzNmpkT010Uk1UNkU3MlpuVmxMM0JWdE9EM2RUK1RsRnN1YjBVL01lRXpXTGpwQUNUU05YOG1tNDQwdEtpTXk0em54c2szSVlDWWsrcHVvV25tRGhOS0d3Q0lxeGwxUlBMWDZaMVlxUDFpRnlxWTBQTzQxTFAzbWpiMERYdmdZdmF5WTFzR1VGNWhPWDNJb2FsUnkxbExEQ1ZjS3Bzb3NRR2xwZUcvSjRwdTJzam0valJsZUhNeWtlNllFbU9yaWlETzhlOWtrZytodGJlSmNzOG01ZzUrT1pCUEt6aWkyWkZUYzFOSVZZSDlTYWdRakdVUDJObEV2UjRITldhMWtTWTVrdXUzNVpEMm01SE5UUjFtV0NOejZhekR0Q3BEWGRiQjYvN0JwVTh6NjJ4dy84Zk1TS0tqTG1MdXpjTHBCb3lMTXZtOGFHckJGeC9US1RkMWJNcUVGZWNnRlNjSDZwSDdkdmwrbjkzdlI5UEhCNE9iY2Q1U3BqVzdtMEVpbDBWR3prZ1VQU3pYdHd1bWx3ZktCY29BTEtsNmxFT25CY21PVFp2RW52SmVsNXRRTnJRQjAxTklVK1p3enJ3dnI1UTJaWlpxUktHemdVR0hsbHhOT0l1TkZtblB3R2IrRk9vcnI0a0N1UDdRRmZ1Zmc0WUx3RE8reEdTWW1kMU54VndpdTMxeEtzMFJxR0ZnVEJEcW1XWWpuZXVZZUp0M3VPYW1qVlJ3MlRERDNVemlYTmNobU5LTFRsQWpxMFhidTdzMHBaQ0tPQmU5WmFuK2VOakUxazNvcWQ3aDlQU3FvOXF1b0ErNWZueFJHM01QKzdmSXUxZkpWbTFnbWZmanZXWDZYSlZSblY1bkFBOE5kS1F1NVBEYzBRYU1BcjZPSUFzek9UV0J4Q3dPcjV6U2NpMTh6Q3UxMnEzdFlyY3dXak05UFVEc2VUR0g0S1dsQndsOGZ6b3h5UmdYNE8zd3dqT3Q1WklORjhhTDkrSUlRRlk5eGZkRUtrWm5BNHdYNmNydnd0RDJXNDdBaHNUS3czSUFvdS9QckRWUGFyb1NMcDFHd29QNkZCTUVZL2swUlM2OGtjTWFDR2ZyUGZ3WWJac3pMcDRtY0ppNi9kVEtUenhJQ3krTU4zMUtTc1hyQUl6eXZUdlkvRGF3UDVrUVEzbWlPdXh4TXpZZ2JLRzRvVXZkelhrbFNEMWVSbC9zUEVaZjdzNnBWbG1zT1YrRFQ4NXBwaEdoWm9CbjZ3cCticGFteTdnVDFUQ0ZIbkNmUi8yV1NObDFyT3puVWtrZDNNeVp6RHdlWVdhNWM1Z1BKWEJvaGdaL1BSWnkzdmg0ZW10OTVyKzJDWUtkWHBOV1JGZTNEemIxYy90ekhUZVRjKzNOZ3BVa0dCdzRrTXVoZDJ3QWVaaElpbEZ5Z0tRT1BONHVCL05UYkZyRVJrSjRyUjFaSllUOWJ4Mll0WGJHdUorcmdmYytnOE41YUI4L3lha1NXZ2xMcXJFRUNIdC9QejQzbWxvRm0rdnpSaWNYNXJCWENsc1pzV3JuQVpQR2k0bTFrVnlPU2krcUdaa2NNNml4ZWVBWS81UExuWEc2VmlXRHpvOExvR2Y3UmxCZk84UFEzNDFvVHVjMU54ZnVBTmZQVDlhV2VFdHdOdWZlbnc2SlVTNFkxd05ZeVZmK3p1UWJYSDFpQTYyUVk1Z3NHc0dIdzduOG5ocDdPN1ZRVUMzZ1FKN1BrUWZXYjg3bjY1cC9vdnJlS0lMemF6Ui9qREhSRm1sREtsYzBycHgvUk56SmRRTWZFaThOTU1kN0FHK3dZM2w3cytNcGt5dFI0d1A5YUxHYjJLWUozYjRvUmZNK3dLTmNHMFlKVVcvTjV3dDlJcmhHRjBBcG1MYzAwU3NOSUMrNmlCbkpqY0xsWUdDL3A1MGY2MUE0aXdQcFBRN2R2M1ZBbWNJZXZEa2l3RWprU0M2aFlEMW4zeWh6bjcrNlFHaTZsc05TUkRKekR4WFFSdlp5enBUd3VaTDVEUWp1TzVKem02MEtER0xIOGQyb1dHMzdwUm5VZHErekNyV2l5SEVGMzdqSDBXYko1U1FzMEg2TlQwVTBkbFROalJIdVhKVFFoQzZjbGFRTmp6dVNEMlBCRkw1ZkttQm5SbGRKRDJzNVBiaHpXVnExY21ONzhPT0hyN3ZXWE9MTnh1eEhFVnhyUnhkVWVPUHFMOWhJWTIrV3pPOFpDbzNZajdSTlN5MUt0ZmxuWndPOTBnOHhOekxBd1FOcExhZFZ0eTVKMGRwWEpUaUhtZlRQaGthTFo0WnRPTVRFNEpCZlpicHB0WVZhazlTeEdZcTJsNWZmUVM2WG1wNVprL0d2ZjE5NVNVc2E4TlBCZjR6aHBYNFJtc1NuV2FUend3bHRwWU5DdlNwTThUek5iUGhWSGN6bDNwV0IydmY3VzdKcnBFVXlqTU5RN0pKQ1Qza2svOW5mRzczbG5oVHM3YWwxUjZHdkc4TWp5Rkd6bUxVK1ZsS3U1ZHZwaFNlTkZ1dHVhcUt1MmRUSFV5TTFMK2NTbnFONS9uZTdjN1hwSmFsUUFvejMwNkhScHIxOENoTnoyTUJSMTF0Y2ExVVRDeGNWMnhKR2NJZ1l4YVdNUjFhay85UGg4anJYQUZFM3ZuZjV5ZkFGM2hqNlJCOXR6cVpYQnByUFkvSzA3cThremJOSWNUZVhtUjV6b014a0F4b1pzS0J0Q3BlMkd2TDBrUXE0ejloMWRCdi84dlJ3ekhKQkpHR0pPdnJUcFVERHptZERZMHlIelVnZFJzMDRSRnRxZVMrekJMVnF3SlhSald1UVgzQnQ3dHM5T1Zvb3ZaVERaWlJwb0FZQmI3ejBvcFowemk4bnZmRTlYR04rdEpkNXc0SkIzYlF3bVphYVVKaXd6VGxYcDh5RG9ZV2Y5dWRwNWEwenlaQmpPTVMvdVVOVHVvTEpvOEJxa0hHNFp0Y3hXV1dtRzIwYzh5YWZNQ25waUtkL2xibVk5K29vYVZVVmRjYUFBUmpKMThOaU5IWVJPbFV0cCs3UlNKTUhvTlRJZVY5bE11RlpKcmR1Nld3K25BWUhjOGZpbEg5dDlKTzhyd2VaYUVPalNYVUJVdVR6YmNkbzI3SGFiNFIzRmJCKzVWb09rOGUwRERSVm10UEQxNXlLb0thZmFXTFR3UjJkUStqSlB1Wm15MjB3cXd4UzI2aVYxU3IyZ0REM2UyWnhPekhqMnBQWjF4LzRZVWQrOWhoNzI2azdjdisxWWdSN2V0RTExQ25VbkpZeFRtUThXQldjUWtHM1MvcStNT3VMaG9VdTdKR3I0MDB3ZllTMUtkQ0lLdU5ZTFlQcjFRVmxkYXM1d0JFZ1RMNnFYUkE5ejRaekgxY2Eyb1dnbnUyNDhlS2EzN3MwbFQ3WW1tMjRJN29xa0dvOTJzc3g0LzJRT1l0WE45UWY0d1ZxZEQrd0JHQ2JRVkpnR2ZUY01TMjBXV0VvZlNUcjZGOTE0WWZrVUg0cHRRZzBML0wyTUpNcEhoNWtxaVh5T3o1UU1MWUk4WGd6STQ5NjZNRUhGSDZoSlJLSDBROThjRGw3MDRLckFhUHRFKzdMeEdLSVZ0OXY0cVNhOVVJK0xNRjlTT1o0YlFnNFJUeGU3U0R4T0cxdkhyMzR0L04weTJvS2RTcUVyb3JXVFJwcHRUdE5CRy82Z1gvbGp5QzBzSEQ1eGtYSjJsNGRSMlZYVnlZWDBsM0xVazN0TnRKK2ZqVzJLZGdEU2w3b2E1NlZsRS9MazR1VW9uMjFBU3dPUjZQSk9kR05xUStYZ1pvNHNkRUVxZFBkZjZXYW5oZkc5c0F2T1BYcWJiSUYwd2JNc2QrMlZMYStwYTZoVGhzd29FbWRESW5XTnN2ZnYvei82NnVMSjhUVGZ6bmtRZHNrcG1XYUIzaUpKV1NyQXE5NTJaekQ0aktURGVnaXVxVlRDTjNlelZ6anZSUTdzMHBvTFlmNXkxTUt0RzZqL2JXd3BSRFhmd0FiQmxLYXM5bG80MTBnYVF0eWNjcU9ITDZmV1hUY1pEclJtYU93S2NOaUhENUlGeVllcDBsY1V5NnRSNUZQWmRSNUE3YmhLUTViTVZ4L3pmeGt5aWtwbzVVWEo5RFEzeE5weVlTV05JalphZVJmZDVzY3pLNE1sQ2tlVzVudTBJNGZiYnJvVkpuTGxVQzR2VDZqU092ZlBzTEd2RGVuaFBibG5oQTNOTmdESm9DZ0VJcUJrcFpzb0szNFZ3YzJESXh6Tm5GeEsrYzBydXUrdGRreGR2NDJKakVmWVhMUjBZbXV1UWZ6dGNtNCttcThRTDB4WU9CNkxrazh4WVRXWHh4aUlXVCtaVjhlblJQVG1IT1hURnAyVVR3Ti9lMlFwa0E1cnBYaitlbTN1M0xwK2IrUE9qUlYwNFlOQU9PUXcxdFVMejkyQkJpcVFNNll6Yjh3MUE2dkJoN2hCUDhaNDlqWW1lM3Q2VUgrZk4xQ2ZFLytqckZDeU01R05LNTVLZ1JoOGd2TWRXekpOcy9HSTJSR1U4LzRWbzVYQlpEeklxS3JzTlpmNHdYcWxRRUQ4QkxZNHI2TGIzd3czOGlQbWFYc3grRmRrSituVm1iQ3FmeDBIN2swcUI3Z0RhNlpkNFIyT2JpTEY0dTU3K1d3ZXFod3lmU1pBamk2Wlp3T3ZMc3BteXNBam0xN1FJbnF2Y0hSV3Nya0tFQVkzcmU4N3ZZM20wRzlNMkFBSWV2N2c2S29IK2RrRS81STBqYkhRKzB5bVQzT1VzNk4vWnkwUndqMXdQYzNaMnRlekJHZ1Qva09ObVRvWFhuVWd4RkJWd0hSekk5c05GRGdkSFROREVKNXFKbmMwcmw2Zk1NN1hIVjR2UjdWZVZXb2x3WnNBOEpsYUZBamYrMzQzVDU2clgrRXR2bkJtWUEzdm5GaHNrT2huZzNZYURpYXZmR2tlajY0YnhZcCtXVTBkVmYxQi8zaGRkL2lBeHR5VE5YQmkyc3o2TU50MmRTUVVLOE5HQmpQSlkwbitvVFRyc3dTclFFa09zQTErZHkwUFpqNXphRDA0dW9OZFo4WDdjKzVXNkEyWldXMlI3YytBSWFLN1JOWUlWUGRwV2hRTElIWHZhcTk0ME1sQUpxQkhsa3VsOXVwVDZqM0JtekRmOXFnTGh0bXVQMnV1b0EzUmxnOWZXLzFsemhqMWhjcWo4TmkvZW44RmdIVldrNVcyNERSL3NXNUxRNDViTE1vY3NMNEhiU3lvUnVHaGVUVlFYWFVST3NER293QkE4R05QT24ycmsyMXFSY3ZGeWFkVUloOGhBbXpKVTVZdXduWUJ2ZkhKd1JRdjhqRzRvWG50WWt0bk11Q2lNTDYwUTFPSFBSSHVQemFnQ2hxSFZ6OWV2TTJmbzhUbVl3OFZsTDNwSENjaFFabHdEWWd6NXpPVERXMjlia1NTNDhVMERPcmo5THVQT2RxTmlOMDdNcnB3R0FtNmFBVUNUVU9YNi9hWGZDOVA3ZUUxcVVWMGQ5SGk3VWU4Z3duencvRGNCRkJEWENTNmdqMkZqMVh4eFFrWFlFR2FjQTJRTDRINVJ4UEYxUEFNNWxkUldsa2g0dFdiY0JEZHdueHBVaC9UK29iNlVkdGduMjRsdXVwOVlnSCtUalBzTE9LVHRhUzkrU1VhbW9VdTQ2VnNLY3Q0WWlqMUdVOTJzNDJYT1M3RHkxTDFjUVV6d1EwYUFNRzRJMmY2UjFPbzF1NnZybGl5ZUhqOU1uMkhGcWFVblBDMzlCNXhvUVV0a0pDbWNPUFBYV29yNGRoS1MyL3BFSjcwS0hTa2NGR0MvVUo1SWcxT1VqaGJNTUZvTzV5cjR2a2pPb3FHcndCMnpDUmE3RVBPbm40d0I0T3N2ZDZkN056eUs2R0JOUnlMMmIyL2ZxT3dWb1U0U3lnbWVyRmRVZnBvMjF5dFk2R2dqUEdnRzI0dlRPa1hacWFXbUhxS0RCZHN6aTVRR3ZTaDFHZnFZQ0lIVFMwcjJnYjdQVGVhbXludUhWeHFsaTBzS0hoakROZ0FGNzQ3cTRoMWE0dm1nRlkyeTkyNW1obGxqTWh4SU9oL3FkdEVOZnBtMUQzQ01lbXhJeFFVbFpCcjIvSTBrVHhhM3RIYjIzaWpEUmdHMnBxaXFncTBPQUFhWjIvbWRVOWtOOXdqQms3amxIYlBvOXIyd05jcUdHTjZ5ZGQyOXJRY1VZYnNBMmE1aFViOHNRYU5tUUErNkxXY1IxMUhyT202N2xFVTFMUEZEa3dqd3ZoL1VGc3NCMURuZTlwS3dQYTFYY3NUYTEyaDFkREFnd1l3bEN1dmZMMUJMWGxrU3NERCtlbWpHTDZreG50SGRtbERtLzVjd1VpZlNHYTRFT0RtemZXeWxyOTJHaHJZbytUYmV0aGZSS2JxeUdVd1lDVCtBK3g1TVkvc0JueWVDNDkrZFp5aXlPNmlEYWtGN0V4bHpBUlZrcTd1TmFNT20xQm1lczhkWmlQcDlhU0NvL2F0cW0zdGduaXJIQS9hdXBidmJaR3M4RGlzcTkyNTlDSG03TXBzd0YzVTFVRFIyREFPL2tQN2NtTjB4REJUUFdRNXY1MC8xbWhkVzZLQ0E4M2NrQTBYbUFUSTR5N3VMeUNzb3JLTllVSlRHZ2RSNjIzVWtpTzJqQU9KUFMxb05VMDNNK1QvTDA4TlRVT3pOZEcrVGZTaHVVYk42cjl2dXlQdG1UVGU4emVWMmVLcWFIRFF0WU5sdWdwdTZkV1dLM1hraHVHR01ma3pIL2FCZEU1TWVhM0pMb2h3MGxaNFJ4TmlkUnR1R3BZTE5aZnZOaDRHNFkwZ1l1QmxTLzRGY2RNNjgwZG0ycnJQOCtrMlY1WHdwYmpmcm85MjIyNFpsQmgyV21KbXJMeldySmFwcElicGpFMEpvREdKUVRRUmEyYXVIVDZxYUVDaE4xdisvTHA5OFE4dCtFNkFndGR5aUgwdnRnS2Exa1N1ZUV3UXJ3OWFYaGNBSTJLODZkUjhUVXZhRmVmQUVQOWpzUGsrVWtGdE1wZERxb1d2RHdhdGRYY0JoTlpLZnhiTTNLajJnaHE1S25WUmJHVWV4UWJ0WWZiTTJ2TDNkQ0JOblZuRGkxTkxxaFgyeWZxS3ZpcFNreWQxTDZsMThuLzhQalJTaFYza3h2VkJ2WWNUOStYcS8yeURlcGZtQkJJZzZQOXFVV1RNeWRuaHFmRmROYWNROGRwVVVxQk8wUjJNcXhrV1lMZlR4cHd1WFdtMVpQY0J1eGtvSnlEUE0vV09RU1ZTalJDWUxTeFhiQTN0UTZ1KzhvYlpyRG5XQWt0WWcrN2dNUGpyVm5GbEgvQ2JiUXVnMGY1ai9qdFpIejNyTldqV2V5ZUxDdFphNjY3M3cxcXkwYWN3RVk5akV0VGJVSzhxV3VvYjYwM2praUIrWUVEdWFXMDltZ1I1N0pGMml4dWNvRzdON2ttd0VaN21NUG51Rk4vUGduT2cxL2wzeDRoTjJvVjNkbUlZMDd0ZVVMNEhlSG5XZXNhV1pqOFNTNG9vM1hwSjllNjdNdUI0UmE2dEJ2TURTTllwcVpOYW5lOTlpZmJYMFY4dHF1cmh3ZHRKamZxSkxxSCtWS29qeGZGQnpXaUtEYnFXSzVIaHpmMjBqU25ZZVRWOGR6WnhTZDNGS2NlUDBFSCtWY0dHMnN5LzU1V1ZLN0o2aVEyb0ltcGhnQyswKzFUSnJYZmpULy9peUtObXJKck1XZkg1NUliOVJMQmpUd284SlFNSzBwYlBsNU1UMWFhTmloak5qaTN0UHdmRmhqdG1GbnVIdVA2QlF2OWxIWkQrMHR0Ly9sdldZcHk2M044eDg4bE4rb2xjdGdnYzA0UlI0Zko3VFViSnNxZXFmeGYvNHE3MG03cXNJVFA2NS9KRFRmY3FJUGczUGVHempzcS84MXBpVk5KUmNtOTdLYmRhbXh1dUZHM1lDV1BpdWVxL3VWcEJweDlVN2NqbG5KNmh0eHd3NDI2QXlzOWxuWjloOFNxZjIyM3o2L1o1TjNMdUM0OGlOeHd3NDFhaGRWQ205SnZhSCtXM3IvWnJUMVlQU3F1dHBBbGg5eHd3NDNhUktMRllwMWc3eC90R2pEY3RiV2lZZ0lhTGNrTk45eW9GWGhZNkY2OTBQbWZmemY2WnJEU1JCWHU3aXczM0tnZFBKMXlRL3ZmamI1QTJiNlROcW5EVzFSaGZaYmNjTU9ObWtPRjlibTBTZTFmVUgyWmVGZzE2ck9kejdBL2Y1YmNjTU1OMXdMR2UxT0haeVZmYW1yYVBQTHpIVTlhTEI3S1U4RU5OOXh3RUZaNkpPM0c5cTlMdjl5MFhFVFVGN3Q3OHdueEIvOHhndHh3d3czbndFSkhQU3FzTjZiYzJHR21tVzh6UGNLU2RuMjdkZVJoN2N0L1hFdHV1T0ZHOVdHaEpXU3g5alZydkNlL3RScUkrbnozMCt6ekgrRlhjZDBtS3pmY2FLRFEraXlzMXJkU0o3VjdDU0xQNUFDcXJiZ1c5Y1hPZUtxZzUvaWxyaUUzM0hCRENPc01heVBMdmVuWHREOUkxWURUSkJPanBtN3ZaQzMzZUl4UGxTdkpEVGZjMEFXNzJmbVdDdXNySjNzc3FnK25hNTVxSHJtY25yVllMT1A0elRZbE45dzR3NkdGeWhicmx4VVZYcCtuMzloNkd6a1JMaE10dm5UNmRNOFZ4N3VPcWJEU3hmeWZaL092ZUhMRGpUTUVwK1lJZnJhUzlWdVBzdU5yVW03cDVSSVYreHBUSGVjYWNtZFA4bXh0OWJDZWE3VlNPMDdhZ3ptQmorSi9DdU5mQWVTR0cvVU1NRkkyVUJqcWNmNlBYUndhSjVIVnNyRzh3blBWMFZ2YTdLY2F3UDhCd0RCbUhZQytETTBBQUFBQVNVVk9SSzVDWUlJPVwiXHJcbiAgICAgICAgPjwvaW1hZ2U+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ28yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBMb2dvNCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICB3aWR0aD1cIjYxXCJcclxuICAgICAgaGVpZ2h0PVwiNjNcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjEgNjNcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBmaWxsPVwidXJsKCNwYXR0ZXJuMClcIiBkPVwiTTAuNjggMEg2MC42OFY2Mi4yMjJIMC42OHpcIj48L3BhdGg+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxwYXR0ZXJuXHJcbiAgICAgICAgICBpZD1cInBhdHRlcm4wXCJcclxuICAgICAgICAgIHdpZHRoPVwiMVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxXCJcclxuICAgICAgICAgIHBhdHRlcm5Db250ZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHVzZVxyXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoLjAwNDMyIDAgMCAuMDA0MTcgLS4wMTkgMClcIlxyXG4gICAgICAgICAgICB4bGlua0hyZWY9XCIjaW1hZ2UwXzE3XzQ5OTkzXCJcclxuICAgICAgICAgID48L3VzZT5cclxuICAgICAgICA8L3BhdHRlcm4+XHJcbiAgICAgICAgPGltYWdlXHJcbiAgICAgICAgICBpZD1cImltYWdlMF8xN180OTk5M1wiXHJcbiAgICAgICAgICB3aWR0aD1cIjI0MFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIyNDBcIlxyXG4gICAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFQQUFBQUR3Q0FZQUFBQStWZW1TQUFBQUNYQklXWE1BQUJZbEFBQVdKUUZKVWlUd0FBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBSHBSU1VSQlZIZ0I3VjBIZUZSbDA1MU43ejJra05DbFNSTUxJQXFJS0NBaWRySHJaL2Y3N2IzM2hyMmlJdmIyb2FpSW9pQUtvdlFxdlVNZ0lTRzk5MlQvYzk1N2I3SlpVamJKYnRqZ0haK1Z6ZGE3OTc3enpzeVptVE1XYVNPSitYUnJWNm15RHJPSTV5Q3BydTZNaDNyakZpSldDYkphckdFV3NYaUpLYWEwTDhuRExjZGlrUU5XcStSYlBEeTJXc1Q2cDJlVjU4NzkxL2JZS0cwZ0ZuR1I5Sml6dzdmd1lPVXdxOVhqWWcrcjlYeXJTSVNZWXNxL1IvWkN1ZjZxc2xaL2wxalY1K2ZWTjFncXhBWGlkQVdPLzJoYjcycXgvc2RTYmJuT0t0WXdNY1dVZjduQWVPWEJ3L3hlUEtxZlNMdTZ6MTV4b2poTmdlTSsyRDdDYXFtNkZ4ODVRVXd4eFpRR3hQcTFsNWZsdWVRcmU2OFhKMGlyRlRqK3c1MkpWbXZWNjdDMjU0Z3BwcGppb0ZnL0ZROTVyTFVXMlVOYUliRWZiNzhYeXJ2ZVZGNVRUR211V0s0UXEyVmI3SWZiSHBWV1NJc3NjT3hIVzdyZ3l6K0NjejlLVERIRmxGYUoxV0paWjdGVW45TVNhOXhzQlk1L2Y5c1lxNmYxSXdUbUNXS0tLYVk0UmFDSVdSYXJURHB3YmUvRnpYbGZzMXpvdUkrMjMxYnRhZjNOVkY1VFRIR3VRS2NpcXkzeWQrejA3WTgwNTMwT0szRHNSOXNlczFaWHZ5YW1tR0tLQzZYNlNlcWFvNjkyeUlWV0gxaHRmVnhNTWNXVXRoRVB5K05wVi9kNm9xbVhOYW5Bc1I5dHZVK3E1WGt4eFJSVDJsWTg1UDYwcTN1LzBOaExHbFhnMk9sYlQ4Rkxmb09IN2ltbW1HSktXd3RDWXprMTdacmVDeHA2UVlNS3JGSkYxUmErc1l1WVlvb3BoMFVzWXNtdHJyWU9QbmhkN3ozMVBkOHdpRlZ0K1VCTTVUWEZsTU1xN0Nld2VGaSthdWo1ZWhVNGR2cTIvK0tmVThVVVUweHhBN0VPaWZ0Zzh4MzFQWE9JQzYxWFdXMkI2dnVKS2FhWTRpNVNiUEdyN3B0NmFkOGsyd2NQdGNCV3k2T204cHBpaXR0SmdMWFVZNnI5ZzNVc2NPZHBXN3VXZWNodU1jVVVVOXhUcXEybnBGM1haNkh4WngwTFhJN2tzWmhpaWludUs1NldPbFZhTlJhNHcvUnQzVHpFdWt0TU1jVVV0eGFnMGlOU3IrNzFGKy9YV0dBUGkvVWhNY1VVVTlxQldNNHo3dFc2MEZZWkxhYVlZb3I3UzdYMXlxTm5iUExoWGFYQUhUL1l4Snh2RnpIRkZGUGNYbGpja1ZQZ09ZNzNsUUpYV2J3dUUxTk1NYVhkU0pWRkk0L1VYV2pyVURIRkZGUGFqVmlzVmhVSFcvU21oVDFpaWltbXRDdUI5ZTN0NFZIbE1VaE1NY1dVZGlmVlloM21VVzJwTmhYWUZGUGFvWGlJUno5WVlZOWVZb29wcHJRN3FiWldkL1FTQzlKSFZqbWlKTVRIUTZMOFBLVzBVaVNqcEZJcXJFZllEelRGRkNVZXgzdUoxUm9yUjRpRVFYR2ZHaElqNXg4VlV1Zng2bXFycEpkVVNXRkZsYVFXVjBvYWJ1bkYydC83Q3lva3ViQlNkdVdWUzJaWmxaaGlTcnNSaXpVUUNpeFJyaHN5MnJieTg1bWRwVnVZanl4Sks1WTFCMHNreXQ5TEFyd3NFaFhnSmQ0V2kzUVA5cFllWWI0TnZqKy92RnFXSENpU2IzYmt5NXo5aFdLS0tXNHVzWFNoZytRSWtCTmovWlh5ZnJZMVYrNWRjckRSMTRZckY5dExvcUhZc1hDMXU0Yjd5RkVoUHRJbDFFZkdkUWxXdDVmV1pzckxhN1BFRkZQY1diemtDSkd1SWFvMFZPWW1OVzA1YzJCcGM4ckxaVWQrdWZiQTN0cm51b2Q0eXpmak9zbk4vU0xralgreXBhTGFqSjlOY1Y4NVloUTR0YWhTL1pzUVhQdVR2T0EyeHlGS0NQUDJrR0RmdXVRakdZaUREK0JXVkZsWFFYZmxWOGlDbEVLNXBGZVl4TUpDN3k5MHlXQjFVMHh4aWh3eENweXNLOXFZaENBNU90eFBCa1Q3U2I4SVgvSDBhRHpBVHdPQXRUVzNWTlpsbHNtaWxDSlppdGpaVU5vb1B3OHhRMkZUM0ZtT0dBVXVxZElzNlpoT1draFBRR3A1ZW9uc2hVVTlVRlFoWlJWVzVRNTdRYUg5dkFGcytYcEtJa0N0UHFHK01ncEt6OXZ0Z3lJbEQrL2JYNmk1MXAyRGZXUXRGTnNVVTl4VmpoZ0ZUdE5kNkRWUTJ2LyttU3A3a1I0S0JnSWQ3T01sd0t2RUQ0cnJhZEdzY1hsVnRSVGc1ZGxJRkpkQ3FVUGdZdmVMOUpNSlhZTGtOR3dBL1NJMFRyOVEzMWJOUHpmRkZKZkxFYUhBUndGNE9xdTdsdnNkM01GZmxsN1FyVGx2bDRLeWFra3JxWkNNMGlyNUs3bElmS0hzNS9VTVZVb3RraWVtbU9LdVlvbWR2dFdwTU9zZ0xQcUpzR1FUdTRkSVcwbGlrTGY2bDI3enp0d3lCVXpaVjJDVlY5VGU5L1NFTllaeFpXNDRBcTYwRHl4MUROSkovQndmcjFxcnk4L0xLMjlaY1FkajhoMDU1Zkxqbm54Wm5GWWlwcGppQ25HYUFyTjg4Wkhqb3VXeTNtSHE3MHdvVUhKQjJ5QzQreERuenRwVElQTUJRcFczTXUzVEI3bmtmbEgrY2xtdkVQR3hXQlFJeHNsdXZycGlVL0hyQThhcThMM3d6S1c0c2hxdU90RndIM1ZPS0FURjNrWks2cE50dVdLS0tjNFVweWh3ejFBZitYeHNnckpncTRIaVByczZVMVZEL2R1bGI3aXZYTnd6Uk1aMkRsYm5ac0grSXJuc3QyU3BGbE5NY1k2MFdvR1BSOHo1TlpUWEQyYm44WlVaTW0xVGpwaFNWK0NoeTN1bnhNc1pYWUpsRlRhNFM2SEVkTTlOTWFXMTBpcVl0Uk9zeXVlbmE4cDczcHo5cHZJMklLd1Z1ZWFQQS9MWGdXSTVMc1pmWm81UHJIR3ZUVEdsTmRLcVZmVDFXRzBoWHZsYmlpeExONEdhcG9UNWFBclI3YmxuZGFrQjMwd3hwYVhTNGpUU3VkMkRwV3VvdDN5MVBVK0JSNlk0TGg5dnpwR3Irb2JMekRNUzVYODc4aFFBbG9MRWRFcHhoWEt0dCtlV3R4cU1hMGhDNE0rSElqSHVENitwWTZDWEpHQVQ2Y0IvQTcwbEVNOEZBS3piVlZBdUMvY1h5NElETGIrdUxKVHhSMzZkNkg2MHY2ZDBDUENxNlFwakU0bktBckNUQnEveDk3YlVBSU9sK1AyNXVCMUVqdjZmOUZMWmxGMG1PNDJhZFZNT2tSWXI4Q1ZIYVdqenErdk1qcDNteXB2cmN5UUx1ZWU3am9tVXU0K0pxdmMxeXdFQ3JzWUMvaFRJZFZJcjBmd0FLT3QxUjRmTFRmMGpKTlRYczhuWGt5VDgrcU1qNUV0ODkxMkxHKzdzWW5ITVVVRHRoOFlGeUZFQU1sazczaFU1ZVRhV05GWEMyaHdoaXI4aHMwem03aStRcGFrbExxOVA1eWJUWGtnZ1dxekF2Y0o5Vk5XVFdlemZmS0gxWWJzaXlRVHVHaHlwWE9uTjJhVXljMmNCckpTblFxOEpEZzZKRFpDYkIwVEluOGxGOHN5S0RObVEyL3l5VHBJYzBOTDNqZkNUM0xJcStkL09QSlVUcDRYTEthMlNJdHpmQ2l1WGdlZHFYSHk4OXNVVE82aUdEZzhzNWp2K1RxdnptVHplbS9xRnkzazlRZytKNVpuL1hwdFJBaXRlSVFYNC9DeDhibVpKbFJDelN5RjVBcjZEOEYxSlJiVXFXNjFQVWJneHNHLzdCT0FGZzZKODVWaWNpek82QktrYlpVTldxWHdBTDJiR2pueHhodkEzbk5zMVJDYkNxendSNTV4Q3I0aldmOW5CWXBtRjY3SUczK21PMG1JRkRzZE92ajNQZEcyYUk1VjJiakdWaWVtMmI4ZHJDdmFMZDVFOENVVTE1TFNPZ1ZDU0VKblVQVVJHSmdRcWQ1czl5bzV1bWtGd2h6OGVrNkErKzkwTjJjcGJ5cTlvR3YzZWlNM2t2Ri8yeS9SVE9zcmtubEJTZk03TmkxS2xETWQvYkpTZmZEbE93ejUyNTVUTDE5c0xBYzZWeURac0xpbFVUaWNZTHBhMzhoaDRNeVFPMW4xRWZLQ2MzaWxReGlFdDkvckpjVEl5TGxEK2krTnFpYkJUN2RTT0FYSXROcUpqb3YwbDBGdmJpUDVPTFpiMDRrcUpSVmpSRjV2SWdLZ0k1WTF3czMxcFhhYlROZzFuU1l2VFNHc3Y2cTUyN0FrLzdSTlRISk5uaDNhUXF4SDduakJqZHgwbHBPdEpaTG9iM05EN0ZxZkJiYTVidmttMC8vV1RZbVZvZklCNjMxVnpVMlJ6WHVQV21GYnlpOU03d3NYMWhTdWNCMWM0VFpvckxHUjU2K1JZbVloTmhDV21WLzJlSWgrZmxpQW40VGl1bnA4aWMvY2RubFl0L3JiWGNGd253blh2OXZGMktXbkdya0hpQjlhN1g5SXpyTVo3NENiNkczN0xsOEJ6N05ON3gwYjV5K1Y5UW1VNE5vdUVJSzI5bE42VHV5aHlpeTB3WFIrQ0VhWTRMdVZWOVM4MGNuUk5ucHNzdjB6c0pBOGQzd0dLVVNRSFN5cHJudCtIUlhQT3IvdmwxdjZSOHNEeFVUTC92QzV5NTErcDhuVURpNmh2R0F0ckVsVXY5SnYvWk11enF6T2tSY2VMYTN3RExGd2VyUFpsZmNMazNWSHhFdTduSVlWd2l3dktxK1Q0YUQrNDROWEtZaHFHbmRWb0pSVlZVb2pjbWF2aVNDcVJzUUU2RW1uSFk1MWUzQ3RVenVrV0l0MUROZUtISkFCajB6WVZ5T3hkK2JLdEVaQnNkV2FKclA2clJJRjlGMkVqdXd4aEJhMy9sY0NBYnNTNU9kd2haSXMxa0EzeFpocWtlVkphMWZDQzVrSjRlR202VEIwZEw5ZEFXWjVkazNuSWE5N1lrQ1VMWVFtL0hwOGdMdytQazNJb3lYZDdDdXE4NWxLNHZJK2UwRUdDNFJMeTg2WnZhVjF1bmtkOHo5S0Q0ZzAzK2lJYnNzQ1paM1JxOHIyTUk0dWgyVVUyeXN6SHl2QjNVYVdtK0xhdjVlOVJjYkVOVFdvSi9pNUduRjVjWFYzbnRVZnBpamdPMXBTZlZWQloxM0x5ZXdkaGc1a0lwUjBXRXlCc1JLTjFmWDlUdHN4TkttcDJwU0JqKzVjUmdzelltUzkzRFlxVWkzQ2VGNXpkV2Q3ZWtDT3YvblA0Z053V3U5Q2ZqZW1vZW0valB0d21wamdtQnVvOGF1WWUyZFlBZmpCdlltZnBqTVU1NE11ZEt1YXNUL29BNVBwaFFpZGxmUzZkbHl3cjlSejhIVmhZOXc2T2twVENTcmxwNFlHYXg1MGxWSllFV0hVL29IQyszclcyajZodEVGSlEvajZlQ3FDak1NYjBCeGdWZ0kyRXpTTEIyQUI4Z1liN2U5ZUNYZ0VlMnQ4QjNxNHJhaUh1c0FqcHNDKzM1c2tmU0hlV1ZEbkhLemdWK01SencyT1VFWnNQOS92QlplbUh4UnEzMkFKbjZSU3NKSWpMTWNzQ215WGVsb1lkdjduSmhYSjNkSlJDWGh1eUVsdHl5dVJLS0M3UjVROVB4VWI2L1Y2QVUxVnl4OEFJdFloWUZlZUt4ZlJyRzhXOHdTb2ZyWFdKR1JLZ2J3WlVlRzFqc0tnR0U2UEhtM3RBb0ZmZG5ETGJSTC9lbWVlU3N0WGZzUm1jTVNzSklVKzBBdnI2UlBqS3RmTVB5THJzdGtXclc2ekFSZnBKWVd5UWsyMnlWalJIdkJzNTY5dHp0SE9wdUwwYXdaMVkrZlk0RU9zbkFZeTlkRktNZkw4blg3eGgvdDVjbDk3dVUzc0ZjS1VMS2l2RjNZVTg0a3l4YmNiNmYvaTRLUGtGTHZVVEs5TGwzWTF0VjFMY1l0OWx1NTZUSkQycktjMFRINCtHVDN0Qk02ekZOT1JDbHlEdHdWRG1vY0hSNmpHbVFVeHBXK0YxT09tN3ZXcmpmQXo0dzFPNGhmbzBYVERqREdteEFwZnE2eXc2c0cwTzlFaVN4cXFVakJMS1lFL0hMczF0aTlJQS9sUkxmTEMzYk1vb2t6MEZabUhONFJBamRGbUJEWlM1NVRsbmRwSm9QOWZyUm9zVm1DZzB4ZGVKSlhOSHVwUlZPZzZnQlBzNmR2RloyZlQyeG14MWYwNVNnWmh5K0lSS1BPbVgvZkxxMml3MVpPRHRrZkhpYW1teC81dWpnMWdkekZ5d3cwSXl2YWFrV0Urb2VqWmphelh5eXkzdENMc2NJRXlrdjZjVXduMG5TbXRValBGZmZuWUJqcWxjVHdteEJMTFk1bWN3OVZOY1dTWEZXQTVWNWhBNUpWUFdaa29rck84VlNBY3k4K0RLQ1I4dDFyN01VazJCbzN4TkY5cFJLWGNnaFpGYnJyMm1NYVRhWHJycFV5bTI1N1lNVEx5MmI3ajBqUEFWWndxVlhTbS9UWDYyQW44VC9DeEZUcGM1OGVKeUxSOWNrL2RsRVVqbG9YbmZqWmxsMGhVaEFqL0x0aHlWMzBHdnByRHEwQnd3TnhveWp4YVhWMGxSbGJYTm14T2VXWjBocHdPYllCa20rK1JkUmVEUVlnVXUxQS9JMzRVNXZDTk5TdlJyNk4xSTJHRllzWWhteEU4ZHNiaHBDWTFOdGJuaTd3SnlnUUNWM3hVSms5WnY4S3dCditpb1VIR1dVT201VWJCYXpDcTFCU1phMFFrYkxHcGZxeDdIUmpOemQ1N00zdXQ0R28wSys4YTZMSGtXdWVLcmVvZkpHK3V6eFJYU2NoZGFaMnZzRkdoV1l6VlgvQnJSRjhQQytIZzZib0VIUnZqSmx0d2pNNVZIcGZLeE9CZG44ZlZpRHRsVHdwcnhubFVaelE5UFppSzFSd1VlMFRIUS9SU1lRakwxaEJCVGdac3J0Z1VLOXNMV080cWoyR0FrUXBoQVdOQmRMbEJnV3BHdDJhVlNWbDAzSnFkN0g0Z05KZ0RmYXlEcXRMTWtBL0JueFpXWDh4UnVYVmFwZE5YTEpnK25sRlEwM3dYbStWdDVzRmo2Ui9vcHB0SXFGM2p4clZKZ2RpT1o5ZERORjY5R0xJb1JxM1Z3RUZ0Z1h6WmxkeXZTUi9YRjIxOXN6Wk9rZ2pJWkhCTlFwK2UzQW01bkxrQ3IvYXh2cm5FL3lhUlJwUW93YkdOTlZmY01mNVNMbDJOdGZLRHNWWmE2WVJjdHJLZFk1SXErWVdveklvbkJzRmgvOGRJOWtMMjU1WEpKNytiWVN0ZElRVlhMWWxqTzNEbytob1FIdnJMVkJadHNxeFE0RTZra1RrSXdwWG5pM1lTRjRxS09jekEwNldFQVdEa3RYeHlCZHU3Nlh5bEZrbHBTSVE4ZTMwRlprZHNYcFVwSFpCdnVIQndsSDI3T2xRdVBDcEczNFJKNlFJRWZ3R3RtSUVhZDBEVkVlV1FrMU05Q0xENnBlN0JzeVM1VERRdE1yM1FMOWxHS3pQV3lCVmFWVldOazc2QUZyNGJTOC9OWUxza0ZPVERhVDBMMFk4b3VhMWxjN3k2eTlpQmM3NlBENWVTT0FTNVI0RmFoRnptNld4RmpWbU0xU3dLYThJL1Q0VVk3Q2l6MUNOZlE0NTI1TGJmQUFYYmY5ZE9lZ2hxcUgxcmZ2dzhVUVFrcjVidWQrZEkzMGtjTmhlUGNxSSsyNWNtaTVFTFZya2NMTy9IbmZRb3AvZ0h2djJ4ZWlpeFBMWkZVS08vdGk5S1VNdlB4NTFabXlNUEwwMlZuWHJrTSszYVA1SlJXS3RhUFd3Wkd5dktNVXJta2IyMmZMdkdBU1AvMnZiWVc2cFZ4Z3lLZGkvSWIwaW9GenRWM1J4OHY1NElNUjZxVTZTa1YzeVlBS2c1ZGN6U05aTFRWdFJURThyWllEcWtNODdJN1BsYmRNYTZkc2k1VFB0bWlUWmNndnhZVjdaUHRlVEsrYTdEOHNDdGZLcTNhb0RncU14c3hyams2VERvRWFKNEUzLy9ra0E3eXhvWnNDUWFBRk9Mcm9TenpUemJJN3JuZFEyUnhhaTFZOUE4VXVxc054dkw3dmtLNUFodkQyVC90a3c5dEtJeS94a2J5bmw1L1RNU2FOMXVoRjhGbS9WazR4aXk5QUtrVTEySkZXc2toRFNPN3NiRndvcVc5VkxVd2dHVzl4RDZFTjJNNkJZc3J4Q2tLekJ5ZEtVMkxrUWR1aXZDTmJtZUVnekV3T2JUMnRZTGFLS2llemJmSUptZkp4VStGWkNISGlZamxXR3VkaEFYT3poL0d0RVoxMlppRXdEcFZlZWRCcVRsbnFrVFBWZ1RvbTBJWHJCVjJESlhvM3pIUUp2OU1wUzYwQVl2MjVKZkxjWHFJTm1jdnJQcjhGRG0yZ3g5YytVajVIRXI3NGlxTnFHQTQzTk5Yc0xtOHNTWlRidjhyVFhxSDFyVjJOL3h4UUQ2QzYvL002a3k1NHkrTnBPOE9lQVdYejA5VzNzR3pLN1hlNi91WEhKVHhzNU5reE13OU5SdUNJU1VWTFVlZ09IZWFtNTByOEtKVytTZXBSZHJGaVEweVhXaEh4RmpzUGsyVVdlWENoWGJFcXlINVc1OHdYNW1mM0hMNjEvcnkrRDNDZkdRZHdLUkJVQllleFlvTHUybXpuM0Q4MS9VUEYvWmlwQ1BXZlc5MFBFQXFUZUg2UlBuSlgrZDNsZDBBblNiM0NKRnhYVFNMdzZ3WXE1RU1WM2pHK0VUbGloTnQvK0NVZUJsZ2c2SHN4OFpBbXB5YTh3RFQ3NlZ2Q24vZ040NUdPb1pVT005QWNRZmcrd3grTDQxa0wwS2Vnd0tUZlhNZ2pyc0F4b1c1YUc2V1Y4SXRQeG9ieFl0UTRESWRqUG9CRzhLTWNZbXlIQ2d4NlhFZVBENUtQdG1hcTFvME44UHl2Nzg1UjI3b0YxNXpMRVd0Z0pBMzZvUjRKK0M0bk4wcDFybzBVckYyTU1GZVpqR0hJMUpTN1ZpWnBGRzlGSVlGbU50SStxSTM0bDh1VUU1QmJLblU1dzFjMlNkY25rU2NHdUFkcmlodDJTNFg2dU9oTENxUEtSdGdsUlZ2WTRrbEFiZjFXVm5LbGUrRFd3SmNacGJYY2tpNkJ3NDlHb3A3Q203RlpMMkVnbkxhNHpYNC9MVlFuSEJnSjl3WWVBeGMyS3pyVHJUeDVxcHNtRG5JWVQwYlNwZGJWaW5ENHYzbEExaEl3Nk5oaGRmWGNKSEo1cmtwU3dzbFRwMlZwRDZUbXcrSkNGak91Qmp1TW9rUWFuOTc3Vzh1dDZsVHQ5YXpkMWEwZ3Ezdmp4VE5UUjhDRDJibWJ1ZldxN2ZTQW12eFJKaWZXVTdwaUpRNTJPSmFaWFFrd1kxdVRJRU5Uckw5QmM1bEJ3MkdzcjU0Y3F5S0piY3FoYkRDbGJZSS82dXUxdEpDWGw1YTdHeFE1SERtMDdyTTBqcWVBK1ByQVB3ZHFETjFIRWpYRmpKalF1SUFtVkRtZGVrbENyeGludldhdmhFMTcrV1kyUDdSZmpWLy85K0FTQUJmRlRJT0xpNWphQ0w1MzR4TFVNL2R0elJOVmJkOUQrVWMvdTF1ZVIzS1NzVTE1Tks1eVlxTjQzekUyQnh2YzBsUGpRNlhxVEpTNjNZSzBvam0rZGo4cEVMVjBkWEJpY0FzTnhLR0lxVEpkYmEwNmlnTmVwSjRzeHJMSVNtdmRpeVg2R2pxcEwrZUE5NlozM0szckxHY3RDcGZQRXBhSkZSc296bkNuZytMSTFnTkprbHVEMVFzKzZZWTVvTW5kcTBGZnJ5aDhHK1BpcE9VZ2loOFpyVnltOG5JUWN0NU1ZN3o4Uk5pbEFMK2RHWm5wTFBxbm8reGlNK1A2YUJ0QmdZKzk5dWtMa2hkWlFGMDg1STdnTGh6TS9wNGRFZEZIY3ZQZVdkMG5EaFR5S0UrSE9GQkdPTDgzRExuMVVXM1NvR05sa0kvMDROMlNNb2RiQ2MweU8vaS9UMGJqWm42NlJacWF5c1lVZnhkNUR4UklVTGhtYlcwZ3BtS1ZoOVhWa2M3d0pRV240VVNoblFHYXQzWnJqcndpcVBERC9tY1R2aWNGNGJIMW5sc1dEeGMzUGo2eWZxcVdrbDRUUTlnRkRhU1FaSCtzdkNBODBZUnRVcjFTaFdUWUxYMER2TVRVNXFXNG1ySE9vMEs5QjA2b1FsMG4vRWxNd0haNVMwdmR2RDNjcy93cDZqQ2VWYktHVkxTeXVQWmxhdUZPUU9pbkpzUGJyV2pUd3ZSRndlVitwOWVOWThaYUNzN2E0eWRxd1p3c0dybGduemM2RFF6K21UNWo5R05VOXpNSFk5SmYzcW9kVDVYZDFsNTdtMnBTcHNTZFJ4VjFqckh4cC9FdXp6MjVyU204WGdPQWl0SXdua3lDbDZhVXVDTVVzMno4V3dpWDB3UWEzMHJSMzc0dW1FQ2dYRnB1SnZoS29WVnJWTmdveG1pVjVoejY3cGJmZmtPNG1SM0Y2bEppQnRWUm5TaGpFdmdxNlBVQkFvOGJaLzNNSjQvOUdKRjJuK1d2cGFORkl5WFI5UDVWSGVWcS9xRXlhQVlQNVZlV0F4UVpkNyt1aTVWdHQ0VzZOZkk3eU8xTENmNzdjbzU4c2JiTEUwcmtaUGpBOFdkcExVT0FVRXN0akRHT2prWDdMVDlsM3hBN2l5MGVnYVZzVkVKcFcwTTJ2M21WSlB4N2I3Nis1cjZMRzVDWVFnMENZeEV3ZVZsSVFPbkF3eEIvcE9EdE5qd1RRczliMytoVEVOcVpFZCtPUzYwWnVFYm0zelJRUTllZDdSeTlDWkxKR2Z2emxlZFJFd1RjVmk3ZmFjUkpkZ0ZuVVlOU1VaSkJTeHdrQnhwd243dGFDZVQzYlZhZ2Nzcld4ZmN0NVZvcnE5MnY3amFQWTU1Y0pTL1hIaFVzSXhPREpMTGU0ZXAyNTY4Y3BtdFQxdG96TlUrT2tJSHNISmFWeURQRU9qNmhTMGJFRlpENk83dFdTZW5XaCtKZTgzamVEMDNNM3NPWjRyQi9Vd0w3S2UvVi9zT2pRKzZvWmJHVUc4UDVlVzVraUMreWdraE9UL0R6OG5rQ1U1UVlKUFV2YVd5SnJORTNXUnB1Z3lETlNaQitDZ2dvYmNPaWxUUDIxdGdMbHBPeldObmtKRmkyWnA5K0Z4b2JvbzVGZGFhcGhabnlvOTdXMWZ3d0hQRk1Mb2hnbmh1RUxiYm96WWxncy9WV2toYnN2aTg4dGJ6VkxNNkxNemZ6U3h3bVp0WXMvWXVTNEVoOEVacndzcWgxMGJHaVMyR2RldUFDTG14WDBRZGNJZldjMExuUUpWcjVlSXdpajZ5U3pRZUtBNGh5M0V6TkxldFJIbGNsZUpXQlBIc0tlN3E3V1lnVm5HVnFjRE9GRTRDL04rdWZLWEFZWHE4eEtLRkI0NkxQdVMxZlB3NXUxeG1mYUtROEdKdGdIZTVuZ0hJd045RTVyT0xxZXpWNnJHMG9pcEp4V3UwTElHR2hsUC9jL0Z2UVRzSmxkeGRBdHpOaFRhRUxvaTd4SlpIZ2pEdkdPeXJYV3hhMmllV1o4aE4vY1ByVkN5eFBlNlRiWGtTNWV1aFhMOHdMSTRnM0tmN3lHNG1IN2grRWRnRXduQS9HcTViRE56dmFOejNhMkdzcUJRZjFwMEtUb3ZQK1ZoTStiQ3FxZ2k1YXlNZm5ZZkhXQ2RkaHMyZHo3UCtPYXVzV20wS2JKVXMvWmV1azJJZzBjNU9uRGhOZ1FsYW1BcnNQT0hjblRDYmVPemRUZG5xMWcvZzFZQUlYN2w5Y0tSTTZoNGluMEdCWnljMWYrZ1lVMVFSZmw0S2RTWURKdnQ0STZEay9EdmNWNHNiU1NZWEZhRFZDVWRoSXpCSUJqaHhvRXVJai9SdEJXakV6WURwTWlvek55djJ6Ykwwa3ZYUlZIUnVBdlFNbUhMUEw5TTJCT2I2Yy9UM1VGandRdklEbHA2Mk5XMXNTNlJVeDR2NmhmbktSaWV4Y3poTmdWVis5bDhhYjdsQ3FsVW56NkdBeDhic1VuVmJubDRzYzg3cUlsTkh4Y21Fbi9ZMXUwMk5TbkJBN3laclRZTk1qYlVudWd6QUoxU1AwWWs0eHdSNnFzMkJTRFAvSm9ERDE5TlRNTHdBZGpleGxyNW5lT3NybExncGNMWVV1N25VZlNpNHdXWEZqcVdza2lyRkFHTGdBa2E5ZG9IK056dXJWUCt6dFpicmk0UE15ZFZkVU43Nk1NSm9TZnp0M0M2SzNDRzlWTnUwZmtBYXI2V3NsYzVUWUpPVnc2bkNnbnpiR2w5N1lUODhQZXdRV01qdnowaVVsOWRreWxjNzg2V3RoWXY5WUtuemdDS09GZzNUSzlZNE5NQklSWEVEWUVqaHFXOEFCUFBZNGtpdmdKc0N2UVlqUjYxZTY2TnRHSWxlM3VxK3M0dCs2bXZXTUI1bkpTSXJDbzNxUThNejdSeFVDMkF4N1pVWXBQMjJIcUZSTW4xVFRvdDZqbHV0d0ZXbTIrd1NTU211bENFZUdnbThmUzhxM1YraTBsd0UzK3pJbDVPUWVucGxSSnl5SGorMzBReGZWNGthTGFwN0U4NXNmdWZHRU95amhRTkIrQi9aUHd5bFZuLzcxYzRhRGdaMkVHU2o5SUVlV2lxSm00YktTZnZVazk5RzZFRXViNzRud0tmdVpzR2tJUDJTK0FhSUwvZzdXMG9ZMFBvMGt2N0ZBUjZtQlhhR0VGa2UxemtJMWxmckhkMTNWYzhHWDdzNHVVaHUvU3RWVVJyOU9xbUxVdUxGTTNiRDVXdmZUSTZ1RUczbThPR2IzRGhsV0FlNXZNK2hYVkdrRUxyMzd6UnBxYlMra0VOWDRJWG5kMjMwZGJadWhScFgwWWpsNW1zckVRUlc2QU96ak5leTZzdG9WbUNqUW1OTkNrWkRndEdNd0JaYlJ4b1IrTjNWZWhxRjMwM2doQlZjbFE1Nkd2WVRDTzBIbWhFcm9CVWdWWXlGaFJrQm5oSWY0QzNkdzMwVVFHWEx3VXlxV0dQWVdRaEFKRTY4WTR4SEV2Y0ZLY1h5K2ovYTBDdzJvRCsxSWwxZVBDbFdyajg2VEthNGNKaVdLYzJYYzdxR0tPVmRtVmFpY3YxUmVpYUJwQVVrOVd1TnA5RnFCVFo2VjMrRjY4YkZ4bnBqWHk1U2k2amEyc2JvWXdJOE5KZUQ3Z2ZkRjhiUmZDeFl1VE9lYXJHMzU2YUY1Z2czcG8zWlpiSStzMVJkNkxuSmhUVURzWWJDR2s4YnJZMnF2QjBXZDA0OXFQUG4yL01VTDlRMVIwY0FyWGJkTUMxVG1pOFBIQitsMFBUL0xrcDFMMDRzaW1IUm5sK1pJZHZ5MnI2c0wwRHZhaUt6aEdiZExBNXRHc1E3akFZRVJ3QTRZaW5lWXFuNWZFVXJnL2Q2OExQMERTYkFCalJ1akxpT1Zybk1xbFZNc2NEOVlFbWxIQ2lxUEdROEo2M3g3UU1qRllVckxTOFpGK2Mwa2pMNlpGdXVQREdrZzV6YU1WQyszMlBPQ25ZSElhc0p3NkxQdHVZNlhYa3BUa09obXpNTzA1bWkzR3RsYkt4SFRCcUxpa3QyUlhZcThmNFdXT1c3RmgrVXRVMzAvdjY2dDBBcDhNZ0VVNEhkUmE3dG80MkZlZE1kaDV2WmlyZkpMTnNpSVpjeXE2dU9qdkJSM1VuSGRQQlhsS2xVWExyQno2M0trT21ia1dKd0lBZTVqNk5OZ0Y0ZkYyMk91M0VIR1I3ckwvMXdMVWtPNkFyclMzR2EycEdLZExRVEQxTHIzM1dPVmZlMWMyM0xXOUViVnFVQXJZYWZid3dvQzRjZkhvUlVoRCtVTmk3UVN6b0greHhDNXNhM0xqMVlMSE1CYm53S3Q2dTVaWWVrYmhrUWJWSWN1WU5jcFE5bGUyMmQ2MEJGcCtXQm5UbUErZDhnbkg3QTJ1RzVpR25aUUVCbVNjNFBZcFZWYXdDb0pIeldVT1NGbzdCUnRIVGd0eW10bDA2SWU4L3NGcUxHd2V3dGNGMzZ5bWw1NER1QnNLMUpkNXlmeWVER2NwVVFsN3FnUjRpY3I0TUlsR1dBOFArM1BWOFJmTHRhRExDTVRCY0VwL0wwRWozVjVRUFF5bFcvM2FEajZZemZiQ3J3NFpNN2o5RjZ1ci9hN3RycU9LZmxnWk1LSzJWYi91SG5aNHIyODVJcitvVFdBRUJNYmMzWlhTRFQ0WTR1YVFQRlBkeGkxVDBpTDdPdzVyQUpEUVl6QVl4N2Y5N25XakRSYVhuZ0o0ZDJVRzFqaDFOWTVrYldQNVlZMGczbE9JMzNOMlgvcTNLaUdiclY5VFhIM1J3MklZRTdpelU0VjluVjBtb0ZabjZTSXh0akVYT3hwSTkwSmJSNkpXMmMwbUhSTzcrYlZ2YkRqVG50dmlhNHBaS3RjMHJIQnByamJnNlgwSDBtVWVGUHUxMmZ5bXUxQXBPN3lPQXY0Z1M0K1dkM2tYYzNac3VMYlZ6Tzk5ckpzUXBJdS9hM2xIOHRqUXhsbmM0L2ZIU0Vhd1pLbTlLNFRPZ1VwRnpvenhHeUZiVkJvNDlUL2F3MFRxM0RNZmVKTU5NWWgwdTI1NVdyNnpENXFEQUpORnM4MjF5dTdLczFMTHpob3NJTmUzRnErUVVwVmpnaWtyVzdGd0VCcnZrU012N3A3VlpHeTVXOUJIaDRxSHd0ODdTa2dtSFpvaDhXSUFzZGZMd09mUTlycnYzd0h1UHpPZ1MwcjBxU0U1SGtiMnJnc3kwREJkRnJLbVlxRU96eUpuYjJ6N2ZueXQzSFJNbU4vU01VRG1CSzJ3aXY1OGxJNGMxdFpZTkNjOFRwcTU2RkJCemk5Tm9JNTA1M283RFRoMFVZUkw3Smh0bmVraVJHaWVURVRzSFNLN0oxTGk1eEJtNllHazlWcFVyTGtlSTN1N1M2cHJIOXpvRlJrbGxjcFdxa1RYRzkzS1duamxpQTAxYmlkQVUyZHA2SGxxWXJWZ20yQU5iWE9saXVLeVB6eUEyMUZqcnlHa09NR05oZDVYb283bDJ3aWthSkpDM2pmZ2NUL0pGK0hyaDVTV1NBUmtuRG9XYnNsZEI0clR5eDgvdEloSzgyV2NGVzRLREk4OE5qNUtRNGYzbG1kYVpMQ3dyKzdkSXgwRnN1NkJFcWUvSXI1QThuVGg5c1NweXV3Qnp5ZkxtdzA2WlM1dnhMa1dCN29XdkZKb00wNU1wZlhKT3Bwc2tYdW9nUW4wck43Mk1hZzNiNHl0NmhjbGEzRUZVVk5BK3UzVWV3RGd2YmNJSDlXMlJzWXFCaW5IeDlYYWEwcFRoZGdaUDBsc0twbytObHFwaEN1VkdmVC92NDhuU1psZVRhMUFMalpjNUxNbVltTWEzMkxnQ1ZPMkg5VCs4U3BHNHAyRWgrMzE4b0MxSUtaVWRPdWV3cnJKVDJ3T3JvcmtLdjZNWUJFVGl2RmZMdHJyYmxKWE82QXUvUjNUU1c5TEU1dmEya2U1aFBrNkRRNFpMVE9nZkp3ZUlLbHlxdlFRWkhsa2VEVHpvU3FLQXhMK2ozNUVMSlFNeDhjYzlRNlJqRWFyVXdkYk1Wc2pqbVZsVFZZWFFrdld0K1plMzRWMDU3eUxmeEhwanZaNW1vd1ZqQ2Y0bFJxRm9BdTdDSDd5K3IwdmloYTVoU3JCd1VKelhrZGZsNEg3bXNPYnd0R01kUEFOU1d4WkppMitqQ010VXlxLzMza0tyV3FyeWN5bXFOVmFWUVo2dWs4TmhTaXFyVWJHVm5iRnpuQWJEbDJudG1SYnEwOVp3RHB5dndnZUpLN1FRVmxzdkY4NUtscmNSZFkrQmhPdHJNbGpJS1krQXhIUU9sVTRoM3ZXaThuMFVqVkNOeG1zR3V5TmNSZFEveDlxeGg5dWNDNW1lMWRxQVhGenQ1bHd2MWxVZUZKTEpQUnNkb0N6YUVTSThXRThHM0Z6RTJMbU1VRFhVNkZkWTBCYWgvS1RZYWt0bHo0SGc2d2tMdU8vdzNpeHNiSGlPVkxnczNHQjU5c1MxUDJscGNrbnZaQmlTNlY1aXYvSEptSjJrcjZSYm1ub1VMeHFiQ2kzdEI5eEI1ZWxoTUhkNHJSOFNlcjVoS2xxYi9yZmlPUzJzdFNRbkowZkYzTGptSDlSN2lZaXpPSER4T2cyaHJVUTNyMlpRVjRtYWhLRndOaWxkUGJjcWc3ZlJCSDFJaDFUTWNqRVR4L21wMHFVYVg1S3VuL1JRVGlqN3ZWVm5rU2cyc3BOWGx4RVBHOEN5TjdSSHFVKzhtUmJCMFUzYVovSUZRWUhOV21Scko2bXVYcGlRWUg4d1dUbjFFRFkrUEhOWmtsMVFicEtkSHpiQXh6WFB4bEFRQWdvWUgwNVFZNTFLenZobUhwWURJSlFxOHI2QmNqb24yQTJyNjcrN3k1d0k2T1M0UTU2TkN1b2Y0eUtzallyVW0vWlVac2pxOVJLeTZHNmloN1hBN2liamJ1SjJPS3BpcmhkL1BTUkdLR2ZBd1NJOFFyVys2ZDdpUDlJM3dWY1BOU1hxZ0dEdzdCU2t2WWpuT0o3MmMrUURxc2x1cFNBUUNPUm5TSUtybi9rSGtuOHBQNWFheW45TTlWQ0toL0tIaXFWcEFQOXlhSTRkRFhLSmg3R3VkMUUza25yOFB5cDh0UkR4WlJSVGs1WGc5NzlNbmRwQXp1d1NyMktreFBxcTJsQ0Z3bjhrRi9QMk9mSVZDcDhJbDR5RDBQUVdIdjJ1clBjbE9BSEs4MlhlVGNVQjZQeWowV0FCenZNOWJ5akVWOGdTczRleFdqQ2NsRUdpa1Era3B4RUI1NlVhZkVPTW5NWDQrY21iWDRKb3BrU3laZkdwVmhoUWZwdUZ2bHRqcFc1Myt6ZVExL3VqVWp2THdzb015ZlhQTGt0cmRnbjFrOFFWZDVVZ1NkcWY4N3pCTVQvZzNDT2Y0c3YvN2lST2lWVDZjQ3NoQjZUL3Z5WmMxbVkzUEllSUVpREJZMW1NNytNTUFlQ21LMy9HZGdoc01kUWgrZllWVTRFeHN6SnVjTk9Pb3BlSVNDN3dwUy90UmRIMWFLZ1k1T1M5RWUrM2p2UWlKZmJyQmpCWDVPMHpsZFowVUlSYjlHTmJ3OStRaVZSSEYwT1htL2hIcVJnQ0tJY3NLM0tpc0hlRjYweVZuRVV3SFA4OEdXeThMc1FiL3dPY1JUU2RJUmM5eURUSXJiVlVtNllpNFJJRlpzMXVOSHgwYldKdldlZWpZYUFXRU9DSThRVzl1eU5iUWJNU1B0eTlxT1hQOTRSTFdPbE9CT1ZLU0N0eldDZjUvcTNEdGtINlhydStRR0g4WjJ6bFFqbzMybHhGQS9ua3pKSjNaRWlqOXNvTWxrZ1pVT1FOck5wbkFHSXhQR3A1Yk9ibTdMRThya1JzV3VyNm50elhpRWdVbTZNSFpQc2Zha0tzeGJ1Z1M0bGllMWxCZ2dqL2RRcDA3MGJ5dHhCaU5ZdkhVZ0twRkIwb2FmRzEzbkpkQkFHWDhkRXZBdktWUjYwd2h5RVgrTEhQWXR1UEMvREE5TjhON0krREZGc3Z6dWdXcnFqUXlmVGJVTVdUVUU1Q3IyOTNGWlREeFN1eHM1eUp0WXRUK3BoVlhxTUtDSVROMnFlZFB3VzVJdDJjRlhrZUd4aUVkQXVUbnZmbnl5ZGhFNlJLc25jQWRlV1V5TVNLazNnRmY3aTc5SXJYTmkraHlFZ0FZZTdmTFF5eHlWYTlRVlV6UnF3Vzl1MFJlTXdHc3NFREV5T0V5ZGNSaWhkSnlUZUc1aUF1UjR6eFFWRkd6R1doa2V0VXU1K1p5TitINU44S3gwWWxCTWhMcnJ5RUZEdFBUU05sbDd0OHU0eklGVHROM0w4Nzl5Uzh2dzBLcmxLR3hIbXF4VVJrdjdSdW12bnpkSDZuU0h5N09zeWZGSUViTVUyN01JTjF5NXhyc0VvaFgzQ251Y0VTNklmNHZnRUxGWW5QNjNhNG1uRHM4UjZVTWhOWGw1a2JhbjgxWjVXcVRvNFFvZGhFTzJ4YUZkakt2cVJvWC9HdUhiWWRnTTR6RWMrRjRyS3UzcDhPNXkvcUVzMnJKSU1FeG9iWmRUVVJqYzdGSkZGZFg2MTFQVmNvNzRFYVJpK1BPNE92Ym1WZkE4ODE2L1VFMjNOdUc4Ty9MZW9iSnJRTWoxTit6ZHJzL09iN0xGSGlIWGhOOVRKU3ZiQVZTVjZKYkNaTE9HWU9sVHdEc3YrNlM3bXFJbHlGRmVwRkJERjlYVktHL2h5Q1F0QnRoL3BmNXlnTUFQb0x4OTVhYzJyVFJVR3hXMDhiRXEzbTJVMVpseXZTdHpwMWpaTXpVRGRLTEZDSjh0RUlHMjgyQUc0VEtiK3FkVGFINE85eGY2MnJpVVBHV3pxSXlsSnhXdlFEV2kxYWYvY3dFZ1FwTHRTcW5LcVBIR2V0aGIzNkZ5dCsydFhDTzE0bHhBWW9BLzQrVTJqVG5SMk02cWxRVXlmR3YvejFGdGh4bWhOa1JjWmtDYjlDcFhYcnE3dUZCM1NMWHh4SmhPNTM5b0s2MGljRmVrbHFzdVRDZGtGSnFLaFhnVGpJZ1VoOE5DdGVaZWVEU2FrMUIrOE90L21wOGdpS2VtendyU1RibE9QODMxU200YUVWbG45YXE2S1VxcVlqV3NzS0pCUTNqRW9Ka1RLY2dTYWdIejJDOWNUYXNNZXVYdThBRDZldEFDV1lXM0hqTzFOcVlVYXFVZVFOQUpGZDdXenYwODM0YVhPbFZXS2MxRzZqK3o4VForeFMvZG5zUWx5bHdrcTZ3Y2Y3YVYrVHFpK3JvU0YvVktmTnJVcUVpeEZ1TEdMZ3ZGblpKdFRiWmtKMHhGRnFvRkwweG9rdEkrd0t5VG83WEZQanZnOFdLWkoxQ3QvbFQ3UEJNK0YvMFM3TGJGM1BRZmFhbnhQQmxaRlNBV3V6TWt3WmdBOTROaFdPNHN3N1hMaG5YbWFXenRGcjFUWkdnbFdmRjByUlQ0dVU0SGRoYmtsb3NId05FWXBqQU9Id1F2TFRqWXdKa0RMNkRJMVIzNHZQK3lTeFJlVndpd2JsT0xsRmNocy9rb1Y2Rk1JN2V3dE1yTTZRL0RNMHdXR1VXMitSVXRCK3FDSmNwTUFjWE13NDJ3SnhVWGFGWkU4djYxQVNrbU1aaUp4K0k1d093dXdmQzFXUGE1UUY5MkRGZHVxMnBtaFZQREhiUExxT0daR3luWVBYdkJ0MXJZQzc0clJGeEtoNCs3K2Q5YnErOGpBV3Y2QlVtcHlRR0twZHlIMXpkZWZzSzVFTW8zV3BZckp3eXh4V0tDa0xBS0E3WCs5dzUrMVZKNll2QU94NVplbEEyNTJyblFYTmpOVUNKdE1COTRaR2RCUUQwcFpOaWxRZnc1NEZpMVVQOVIzSXhqR1RyWTIxaUNVYVVRSWFVNHp2NHlRMExVb1dWcmN1d3ViUW5HbUtYRml0dnpDcFY3aGJkc1JRYlVLc0FDNW9JYXJVK25TR3ZramZ0cEtYcGJuTUFZamdEQ0F2MWNZL1NTRWVFbHZZWUxJZy9FR2NWNmp2NU9VaGJjTWpWOUkwNXN1UmcyOGQ4amdwejE5ZjJDWmR4WFlLVlpmeGthNjQ4dXVTZ2JNcHRlTU5oU0VRMmlpaHN1TXZTU3V0VnNBU0VFY25ZdERqY21yZUhqNDlHYU9GZG84QzJRbXZPbXpGZGNXUjhvSnpUUFZqZUdSV3ZpbnRJU3ZBZU5wTFd1Tm05d3pTUGJnNCtLeHJod2ZINDNiK2QzVVU5WmhpYzlpSXVWV0NqTjVoeElHZmdVc0tCbHQ0OU1GSk94ZTdPWkRvNXBXM2xhcjFIbFc0WGxadXY2ZEdPWEdqU2lsSit0S25GcGZKeXdiRm0xaDFsTEZ6WFc0QzhEZ2FvdzlMRDgzL1ozMkQxR3drTDJValFGNkVRcmJPUk0yWGVtaW5CK2xwSUZ5TUhUcEs5MTJCUkdVdm5ZMlBibk4zd3B0QWJ1ZitaRXpvaC9WWWhuMjNMbFNtcnMrUk9lR1lYZEErVjJ3WkZ5alg5d2xYamdxSWxhb0VpOXdyWDFoTnp3UVJRNTB6cUxGYllqL2MyWnNzSG13OVBVMEpMeGJVS3JMTkM5RUY4c1V4M2gwTVIyeEtWTFZhVldsN3FSaUV5eU1rTytYRFBSa2lnUXFFcG1WUmdOMjBWckUvK2c4VkZGK3hIV0pBVFltckhmTDY2THJOT3A1RTdDQzN1a3lkMGtFN1lJRC9la2lQWHpEK2dVa24yUXFWbGZIb3A4dGFoUUxTWjQwOHVMRmNLbGdSckdZakhTS2dRM1VEMzJUSmdBVGN2VEZXMXlteDl2QUN1dEpHSnFFLzRQUVRDeVBOMUd6YjdWMDZPeFNaUUxMT3d1VnowNjM1SmdBdDhQYzd6aWd1N3RVaVIrK3FnS1RuYkNQcWRNR08zdEZkeHFRSWJjUzhIYmYxY1ZxaktLenZCM2JwOVI1cHl0TGlEazJtU3ZhV3hzTGd2SUszQ1ZzUnIrNFpMUXJCMmFCdXdRL2JGanQ4ZXB1MFowOWdacnpGdHByRlNhVVVFTTNhNFQwNnhOeFl3aS82WlNubDdmYmE4czNIL0lYRmZMSlNFcml0N21QdkFyYVJGWG9SWWxlMk5wRTQ5SVRaVVdkMlZxc2E0R0VxVUtTc3pHZzRQdnQrZHIyNk95UHViY3hXN3lCbndackt3cVcvREdtQVlkUXVVZWNyd1dBVnVQWWZ2bytLeXkydjVCZDFVcWVyVVRZNmw1SWlwOEhXN2p3Q1NQNWNxOEVvOTNqUFNST21JZTIzVER6eUpMNjNKa0NlSHhnRFk4cFRyc0t2ZUJWZUpSUjloK2xCZlk5b2VnUlYzVjJDRFZ2UVZmUjZzbjU0eVk5eFc1UVlWVHdRUC85cy9RdjV2UUlUOG1WSXN3Nzdkb3dwbjZwTzNUNGxUbXhGcnVmL2NYeVRIMEp1SUVOWDdPbjFUcnV5R2R4V0l6K3VLNjBtTDl2U3dEaElIQy96eGxseDVmR1hyUWdWdWVGL0FkV2F6dmdXbjdWeHNqQ093YWFSaVhTekRjVE5YL2VlNVhaWDF2WDF4bWd5RWgvZm8wQTV5SGw3SHh2cFpUYlFTc3NobVp6dkk4VG9pTGxWZ0p2Slp0V01BQS92aGR2VUpyd1VKcUpSVVhnb0xDb3kwSVpQOFVYcjZ5VmhnWFpBTDNwM3Z2anZtTFZBTWxTcmFVZ3V3K09oMTBPdHoybzRickNFWkdPR25hSWRZd0hIUjNHUlpuSHBvakhzTTR0cE1oREE4ZmlvdWZ3ODMyZVhZaUwrQ3NuQ084V213aWxjai9jSWFkV1hGT0FrQytFYTJEa3JlZ1BQUVdnV093VEhPSEorb0dFVllpc3EwMC9Pck02VUVRT2ROMkh3ODRka3NnU0t6S09iM1NWM2swNjA1Y3M2UFNUSzVkNWk4T3pwZWhpQ09mWDFkZHIzaEFJV3VmaHFPbDh1dHZRL2hjVGxsUmpKemlUWEtXSWw4bjRkQ3BlMGxCUEZPdEI3M1pwUlVLSVdsR0M1UlZJRDdEdXZpUWlmdk14Zis2Ly9VZ2lEdUV2RmVnNURrS2JpYW44STZQZ3VQeDk3TkpHbmMxSkh4TWlwUll3OFpNWE9QNnNLaHBXSjU1L21JWGErQTBqTGtvU3Y5RjVUbjcrUWlDV2VPR0NraWxyNHlZMEFRNjQxL1dqOEpvdHdxaWh5T21FZ1cxa3c4Y0pJUkhTTlV6KzlQY0orWld1cUg3L1JIcG9KbytUVTQ5MHc3amZsaHIzeS9LMSsraHZJeiszRWh3RGg3TG15dVBmN0cvdGlzM2tCcTc5WkZxZTFhaVYyZW4xbWZYcXFzS1JkNW9aNlFydy9zbUlVVFAzV0R0dmk1bXh1djJaT25YWUN1UWU2TFJMODZQRVp4T0wwTzE3a3hjS2F0aFp4UzcyQ1IzanM0U3U3QVFyMS8yY0ZEbEpkQTFqeWtVSWJHNnQxVEZrMTUyR3JIQW9zTmwvU1FTK0dhVnVMQm4zY1hTSmRBSDdrU3ludzBjSWxVL05ZSGtHYnEvK1ZPR1Q4N0NjcVZyOXowMXJLRDVzQnpHL2oxTG5sNVRaWlU0SGhZQUpLRk5mRTNMSEVNbEpscExzcG11UFBlQ0ZOWXQ4M3Y3QTJ3azNIdHNHOTJ5KzlKaGJJVXNmSFZkc3liTERZWmd1ZS8zWm12MkNSZkdoNGo3VmxjYm9HMzZqWFJUQVVacWFRSVB3LzVoeHhHTzJ0ci9jb3JySElGMEVkMklCbVZOMFNpOStwRkQzRkI3c212eGJoM09LelEvd0JjZmJHOTdWa0pHeElGcG8xTlVBeUxwOE15SmRYVERmVVlnQ3lpdWV4WTRobi9EQmFhVkRRTTNkbWJ3R2FMVWloeUJ3Q1BCSDcrQmhMODNxWnNWVVYzVExTdkRJWmk4ZjNQblJoVDB4akE3cWhMb1BDajRkSzJWTzVFcXVqLzRJci9oZTlUdWVobDZjcGlYdE9YblZ0K3NocVdublVFcDNjT2txVUhpZ0NlbGFwNVVTdjB1bXAydWpHTnh6VG1vOGc1YzZyRlMydnI5bVBmRGF5RndPakZ2Y0tVWi9qS1ArMXpocFRMdFNKZFI2S0pLaHVGR1oxZ1RmY0NCR0hsbGIwdzFaS2h4eTdrTHlZREFoZFJKeHR5QUMrWWljNzRQSGFVc05SdkxWNnpKSzN0Q3lTdVJzekYvQ1pkNStkV05iOWhud3VkYVJKU3pKSmQ4cGVrQW5rSHFQQS8yYTBEV0tpOHM1QkgzUUdnNXJvRkJ3Nnh1bngrNnNnNE9RcmcwMTVzc0t4TWVuOUR0bktSWjhEOVpIek1YRERiN1lnNkw4WGY2N05LNVNpa2lzN3RHaUozbmRORmZjNWlLTTkrZUVnY0VlTUZ0N1luNHVLallBVmJXOHQ4ZHRkZ1ZTOU84UE0rS0c1SFhHTXlZL0I0cUxoTU0zSGFCR05qbGxReE4weEFpNXZJSU9BdG41MmVvRDduT2VUZEovNjBYejRjRTQ5MTRpbjNMajVZNHk1em5kMzA1d0daZTFZWHVlZllLTm1LY3o2blBYWE02T0p5QmVhRnAvVEF4ZjlwdDNhQ1RrYjZvcUs2V3FZamNjNWFXVlZhaVVVVmkxMStEWGJSay9YNjRRaWRPSXdYa3k3YmMwQWErK0dDOWd6M080U3ZpSXZtRmV5eVgrOW9HOW9hMXM0eWhjRkNFeExWTlFTWU5DUTN3M0k5Z2h3c2xZdHBFUmF1Y0ZIeTlpZlNOYS9ESWl4dHdhYkVJZXN6eitpa1B1TWh1TXoyWkd1VE9nZkxGSUJaR1FDa0tyRXhla0x4cGdCMHV1ZTRLQlZiTXRWWHJudEFQS2NmQVpTN0FUSG02MUI0OW1Wdnh2V2NDYytKUkc5RGNCM1owc2pYTWY1OUg5ZHpKVUttSkp0UzBYQjJSdmtlaWw4VU03NXRJT1h6SUN6dVRiREF0S1NNWWFsY3BNQzUvN2hvMVZOT0wrSDYzdy9JWmIxREZjdkdOanpQRkI2UDQvT3RlZXJmYUI4dk5Zdksyek5MWForWlp5VEtSNmZFeS9WL3B0Yms0OW11eW8xcUhvQ3dGMDZLbFEwSUE5cGIyNnBMU08zc1pmY1ZSOGs2WE5oYi9rcVRWUmQxYy9oOWJEZTdFSW43cWFQaVZDRTloYm5IM1ZnZzNIMjM1WlJMTWk3dzZZbEJNaDY3TnNHT054R0hQcnZHOWZRMWpCMnBLQThpQnZ5b2dXbDB0Q1JUc1dodSt5c1ZlZURhallVV2NDR3NHRkY2TGk1ajBmeUFSVFlrTnFEbWRiU0VqeTg5S0J0ekhhdWQ3b1RQL1FHVzl3ZmdDVS9hVlgxeHc3c1BzZkFsUFVOVmJYTnNFRjNpSXJXQmNQR3pwNWU4eUo5dHpWTTVYZUlWWE9ndnd6MCtPU0ZRblhkV3huWFNzWWpaeU9rdVRpMVJIVVFzR2FYMVpheEtQbkNtazdwaXd5Ym9GT25YTVBoSXo0cXBJZDRZNDI2RHg3QlV2NjQ4Tnp4UDlBcW9xTWZoK25QU0J3blhtYkdncGY5aWU2N2E4Rm4rZVFJMi9RZVhwT05hNU5TUUtySTZ0eEtHNHZ1ZEJhcHQ4ME04dGhVYjBEVUxVaEVpMUM3Nzg3RnB2b2sxeG56enhKLzJxVkxmOWlKdEVsaXlvS01MTG5BS2R2Mno1K3hUOFREbkJiTTNsQTNreHZsaXJwUXVFdU1aYnBLY0dFQWs4aDI0ZHlFK25vcXZhRVAyb1NtWlJiam9iMlAzLzNCMFI3a0Y3aFJUQkI5dWNXMUpuSUdZRjFVMTcyS1RSSTNXZ0dUbEYvMVNxN3hjckIyaEhQeDdNaDYvRmIrRGl2VWI4cDFmYnN1VHgxZWtON3F3K1A1djhia3o0RW8rYjdlQmtiTG5jN2lWYkE5a0NTUDVsVDlGbnZVa0xQcWpjQzFZenVyTkhER1FaMTZyWHlaMVZuSHdtYlAzeVZac0hwY2dWTmdGVi92M2ZVWHkrMzZOMDVvVXEwUjZyejA2VEFaRHVkaXdvYnFJY0gwWUszOFB3SXNkU3V3UHBqSVdsR3RURFVoSUVJeHJHWStRaUdrMjFpSXp2bzZHaTB2UDdPWitFZXJjY0V3dCthcitnaWZCOHhRSnBSMkRqWVJwSk1wNmZNOEViSkM4MGZPaVpTWEdZbXlhMVZSUWptM0JGMTZNRGFCdmhJOWNOVDlGUGptdG83d0JEK1RtUmJWY1Y5OWlNMko1NWY4aG5Ia0E3alE5Z1BZaWJhTEFtN0d6a2JPWkVEN2J3NVkzMHpXY2s5UjBiTUpkL05MZmtoWHllT3VBY0pjcmNJS090T2FWTksrNDVDRzR6VlEyVmhHdHNwa2Q5ZVhwSFZYUi8xMS9weW9rbGNSc2ZNMkhXSXlYSU9aak9ISDE3eWtOSGdzM0JYYlNQRitQOXpGMVZMd2lhZ3Z6OVZKTi9RU0dycUJTNHJvUWNTWm9lTW5QKzJRU0Z2OTd5S09TZG9mZFlRU3hwaUdueXJKUUtzZHdlQjJzUjJiak95T1lWZkNxeUZyeDhOSjBiS3hsZGF4YWd3SWxMcWlzVkNONEdoSVdockFNOWNRNGYxVkdTWVZtbURFSHJqUExIaStERjhFTmprSXl1bnNHUjh2RUxxVzQvaWsxaFQ4Vy9NZnhxandpSXVpa0xYb01Mamc5bnJsbmRaWkhFREk4WllOYmNQenF5ZkdCeUhHSHkxcUFZdC9zYWg4TW9tM1M1bU5NTE93YjRkcWFabklZRWN5SUlXcnE0a0ZuZnZwWWtOeG10SjdkakZqeVFxUXV2a2NLd3hZVnZRZElOdXU5WDRIQ2ZybTlkdUhRR3ArR3VJemhBdDNDYmcyMFZiNHhQRmIxVnQ4TmtLWStvUlViQ2xkMDdyNEM1U2IrQjZtVlZDQ3ZYTlJFenErSFM4bDB5bDFRQ2xwanBwTHVSMmp3eTc1QzVYcXpuSEl6MGtsZmpVMVVlTVYxMkVnR2ZMVkxMa0I0OHo0VWZDM2NVbnZsWllneHJsUGdJUVFPM01Rdndqa1kyeWxRR2hKdStLU0k1WEYxLzJ5SFVqcW10WjRFNXJEMm91NXlOSkRveTM5TmxnL2dtUkVoWitnMHFxUFdSRUp2N0RHY0I0WUFMRGZnemR0VEcrVXlEQnNDaDd0ZGlQZGUxanRjblFkYk1RQS9qcjl4MTBGNTl0SW1GbmlIWGtIVkk5eEhvY3F1bERLOUxkSFY4N2o4OUNxcmpFYkFxM0tiVVhWMFl4L0JBcVJTY3JjWFhSZzczcWtqMlc4MmtNcVlBWVZuM1RMSkVPenJkNWtLU2dqMVZvdTh2SUZtaWFmd2ZXemR1dy91SWEwUlkrQVlMTkM3L2pxb2NxNHp4blZVcitPN3lXMTEvcS83VkQ2YktiTHJqNDZRSENnMTAwY2ZJYzNrU0szeDdYQkZDVUl4eGlXMUVvRWlROTZGTnpBTXJuc1ZqdU9kMEN4NVM4LzlNNjExMjZCdzZjd1JOTmpJa214K3A4RXV5YkJySWxEd3ErRVNMenhmSzZXOEJhNXpML3orVXYxY3M0LzVDV3hHeHJURUZLRGtrWUdlaXZHVGw0ckh4Z3dJMnlRSjVyR3hacW5lZWNWcmNCZGM2Mm53TU41RFRId0c0bUYzbHpheHdCdDFKTHBic091TE1aaWJKSVBOd1dMWFVZTFNxdlFLMWJ5SmU0K0psbU9pR3U4aEpYTDYxYmhFZGY4R29LY3BPbDBMcmRIblk3V1V4K1Jma3V0bHRLQWNyWHN1ZWVWMW56OExZY21OaUJrWnUzTHgwVm8rQUtEcStIcU9oOHFiV1Z5bFlzbGlMUGJ6Z0VVTTdNQ1VDOEFlTlJqTVEzN1pXNmhBd3dsZGcyVGxoZDFWVEhyREh3ZGs2SGQ3Z0lwbkg2SzhiSVpmZkY1WGVRSmhnWmVsMXRLT1RnaFFSSDMvbVg5QWh1TXp2RzBxN3pnRzVZcDV5Zkl1TUl2enU5ZW1FYS9zRXlxWDl3cFgzVTYvVE94YzcxUUVOb2pNQUFJK0hvckZEWXZzcGQ4aGRHQnpodEZuN2F0dnJNWlhkb1J5MDZ0Z21vNjE2VHpNcDRmR3lMS01FaFZLdkQ0aVZyRy9HUElUdkk1cG0zTGtHTVQxanlHSFBBR2VEeHMvMlBtMDR2eHVDZ2gwSjJrVEM4ejhMejJzWHVHdWJ3dnNCL2RxYldhSkZMbUFKYkVEUUNBV0UxeUZPTWxZWUpPNkI4dXZjRTNYTnVKWi9OK0FTQlhETXFaZG0xWDdPcVpGakhoNGR3TXNIU3hESlRCREJWMWtNMmVLNzNzWUMyc0tyQ3ZSVzhOYThyZ1lIMzZMaGY2U2pTVmpycFpXL0gwc3p1bThJVGRLUkhrTjRqMFdTVHlEZUpCRk05K01UeEJmQkkvMy9wM1dhRk9BcW1PSFIvRThVbEEzdzZxdE9sZ3NzM1dzb2hESUpCc2RVb3VOT25adlpZbU5tYjVzU21FRlZhWU5iU3ZqYjFyVXo2QlVxeWQzVjRwc2JCamNLTWplc2pDNXNNWmkweUtmUGFkWVRvU2l2WVlVMS9ndUdwakZtSjB0cTdjTmpGRDEzRUcrSHRKUk1ZUldLMWVhd3BHdExBOWxHSE5jdEo4OEJLVzhlMmx0K01ISFI4Skx1TEYvUk0xalBCWUNxcmZqM0liajJGalY1ZzdTSmhhWUtHUXlyQTVkUUZmSzJJUWd0YkRXT2RGTjUrZE5STzcwbS9HSjhzOGwzWlZ5OERFcXhNSW1FdjlsK2laQzVWMEo0TTQyN2owdTBrOXVRQzU0TjF4Yit5b2hXMkZGRXN0S1g3WURwKzdHb2lPcVMrWkVXa3NXbEJpYnloTEV2T2YzQ0pWbEFQU28vSlJMNWliTGFUOGtxVHJnQlVoaDVaVlVJMjZ1VXFXSlY4RlNFamo2WkV5Q3l0VVBuN203anZJeXQvd2FMTlhsUGVzVzN0Qk5aYU1EdTRhWUV6YUVQTmljNUVlZ2lwbUVCTDBJSjE0dmo2V3JUMlhPMUN2ei9HRXVtU1ppNWRWZ0tCUlpLdzEwZmpUeXZMU0UvSjViQjBhcHRKS3RMQ0VpL3MxdWVRNGJHVXRHWnlHMXg0M2dOYVFUcWJ5Rk92MVBzSitIY3VrcFJNZG43U3BRU25ucm9qU0ZzaHRFREJRKy9zQlNEWWxtdy85WlFPTjdmYjVEUm4rL1YvN0Joc2RTMGhGeEFlSU8waVlXbUhHSEFRcXNBUWhCVUdValRnelpBZk94aURaa2xUZWJZSnh1N0FtNDZEMnc4RTZFMjN4OGJFQk56dkhiWnN3Z01xaFY0d004VmVVWEtWaVpUNDNCZlZ2R0NRcDNmVllzM1g5c3RQU0dXK3NvVnhjWDQzOXQwaFpFamQ4NU5WNmx5aVkzTWdTZDMzMDVnQmI3dVVybmRndFdZQmdSMlZzR1JCemliaWJDNG5DYUEvbkg2RjRLRUZ6bWRIc2psWEkvWEduUzNaTDI1enNncmFTVm1YSlNqTEl1SjMrN1IzYlY0d2w4ZGxxQ1dzZ1AwMVdHc2pIdnpVWE80bzN4Y0xkL3gvV2tHLzJ3bm41SlV4emdXdDQrRDJCU2RLQjJYUXp5aG13b0xsc0NqYmlWcjZYSHhQVFVzd0NRRnRwUXZYSzIwYmM0emhleGdiSHlMY1ltcjh6ZjdROXZnVVUwTE12bDlYa2FYc0Y4cE1FZVdaNHV0eUswZUI3eE1JdFRQTWl0clUrK1lBRkh1bzVkY09vaE45QW5obmFRdjlKcStiQlUzQTFBakY1TGxyN1JFQmk3SGtEWGNyalRyUDVhbEhyNFozYTVYSUc1Q0lteWNoRXVUQzZTVWNqbFhVZ2swTzUxQkovU3NmTVdZU0ZsNnllUmVXS2lxMFI2U1RiT3Y4bFpQQnp1RGNuUlBPcnBhcUpTY0ZINzRqa3VZRnVPNDFCY3dCQjlBV2kwcVkxeklETWw4Uk1zRVhmZC8rM0lWNEFWVVZncUwvdGkzMW1uRWJHdFNEL1U0aE9VNGNoVHlsUExNK3BVK1B3WGxwZm41WEVzc3NZcWYrZ1dNMWY2MHVxNjFwZXVOK2xmK043dU5uUkRYSFQwREl5aDRwUU9ObzBqVlZDU0lCdy9LWTRlaHN2SWVQaHp4TUFmYk02VktWQVFnNVBiWG5pR09JV1BOd0p1bk16SGVKMHNLcFBndXJKMTc5WGhIbkk4ckNmcmtwbUhUOVFMUHNoNkVhWEhtTXdCMDYwdHF0S3VZNzd1UW85SkRJVFhWS0kybVpNN0JzaGJPcGpIT2NDODFteE80S1pGNEhDQnJ0eFg0VGMrTnF5RFVzcW5rQ04vWjZQV3hua2xFUEpiK2tmS2F5Zkh5Y3ZyTW1YU3ovdFZuRndGWUNSTXYvWkhBVXlkaU9NMmF0ZFg0cnpkUXpjYXYrMHBoQVRHRkJDR05sUmdWWnV0a3kzdVl5aVRVaXdqY0p6TVlXY2M1aDUxbHlzd1R3QVZiUTd5aFV4THNHQStBWXNxRWVCQ3p4QmY2WUovNlZxeFk0bGdEd25TV3NncnJvVHZQVVB2VnFGUTZUbjV2YjRKOXl4U01NYUw3RU9NbGxKVXBWSlJSR25UU3l2cVpWODA2RmptSWQ3N3ZwRVk4YjVqSXhVZExoZkI3S1RhMTUyS0M4OFllZ1BjL1BjMk5aeXJwb0pURVZuUU1NTW1KMmtvNTlUMTJudWovR3N0RW9mQWNSSHpuQlBsWmZGTXNBMGN6K010bVoraXB1ejlCOGN3R1J2cEhjZzMyMzQrclJxdDNBNmIzbXZXSUQ4SkM4VjJ2YXVBOHQ2TStKSXByMVZwcFNvT0praEZmbVhtYnFuQWVUaUh3YnBYc0IvV1BsSXZldkdEQm1mcFV5ZFppbWxzWHNmRkJLZ0dmaUwxL04wTFVqVEx4aENEY1QvTEtabkxab01DYzlaOHplM3dKSjdGeGhhZ2FxR2psQUliOHVZR25QTzkrYXF1KzhRT0FmSWFMT3pET0U2NjAzU3I2VUl2Z3JzK0RKYWZvWWpobGpQV1pycU9YV1ZVYm02SXkzRTdEK2ZwaFRWWnNsK1A2Vm16VGdXZWpHdkJHVjZIVTF5dXdPd2NJWWgxQTZ6aURRTWl4Tm5DazJ3L3ZWQ2JlRit0RkxmWXlUeFVjWHBmOHNhc2hoc09Ub2tMUkx3V3FlTE4xOWZWcG9hQ1lTMmVZODRXQy93YW9MdU5pY0h1OFlKZDdNdkgrWmwwRzRuSjJBNHpmeHB1N0xhOHNqcHV2NzJiUDM5L2tieDhVcXljU2s4STZaMS9iRUExZWlYejRINTJScmFBOWNYamZreFNscGJ1NlkxWTNNeWh2Z3JyZUI5Q2lBODJNZjlib21yQlJ3SjFYZ012NUxST3dmSTJGSWxwR2xwK2R2dHd0R2VrdnNrd2xxL1Nyd2U5SThid1BGYVM1RDJ3cEV3QmtDeWZwV0x6OFFzUnh6UFh6Q0Y1N0RtbSswcDVDcjl6Tjd3Qm9zVWt5a3V2SitOQXBUZHFvQzhPREZNMFJ4ZnJNZnl2MkFqSThFSGFXbHNwMEVrTStEalA3YWZidEZqNnEzRUJpSk5EYTY3RmQ3dno1UUY0UVpmRHBmOWttMk9wTlZlSnl4V1lNUWJyU3dsT0hCWHUzRFFTWFI1S1d4YWdENDdSZHV1TWt2clRWQ3dxZU9Ia0dMVVltUCswamUxcHhiaEEyTG5VMkRFYjFwZU5JTGFUNWczcmE3aCtEQ0hIL3JoWExXaUdKYWNqUlhPNkJOWDVyR0licEpkdS9ic0Fvd2JBVWs2WW5YUklpK0hKQUl4SSszdkMvM1lyNjhYNGtSVmhsSWZnN3JNQzYvVHY5eURkRTZaS0hsbjFOUXZ4OWJqRUlIa2JIZ0ZiQ3hYQXA1UHowd3B6UE01b3ZjaUM3ajNMT1crSEJlOGY3aWVmYk1xVmdWRythb05uZlFCeng4c1BhdFozY3ZjUWhaR3dIdngxNUd2WlFNRnp4amo0QkZqT3NkaGN4c1FIeWtYNDNTZDlzNmZlODhqWGo1dVZKUDhibHdCckd5RHo0VFdOZ1lXOUhON0hnSHFBem1BYkxDRmVCOTRXd2xKdmdGZEJqMlhxUmkyVlpzeXo0dnBqR205S0c5VGVOeVJ0QW1JUmdlWk45b3BUeFZEZ3RoUWk2YlFpcXpMcVI3b2ZIS3lsaGg1ZFdqZStaYnFETHVzV1dPNDMxamZlZTNyL1lNMzZQbTFYazB2ck8vV2Z1aTRiRjlOdGlNLzJRd2tNcTAzNUF5a1hLcFV0UGV6alFIT3B2TFlORkxaQzVXR3U5ZUtqUXVTeWVmc1ZWekpSOGpmZ0p2SnptTTluZisyejJJRGVIeDBubjI3TlUrd2NiNDJLazM5Z2diMzAySWV4TkJGZmJnYjdDaW9sVnUvbDVtZThBWXQyRnVMWmwvSHZqM0JGbjBjY2E2VGdTUEwvNUVydE4wL0dKakZsVFlabWliRnhUZndwU2QxblNvNHRsOFJFT0JDUEZ0SUEzdmc4T2I4WVZqQ1daUXFOSWRGNTJFaEowY09RZ3UyVFRETkYySUJodE9Tc3MrY0dhd0NDbld5OEdQSjh2WXlOank0MlF5TEtHNGo3NlNIY2h1TWhCL2lxek1ORG05UitHTlBkUkhyQXZkemFRSGZRbFZoMDUySHhzeHRvbWswdE51TzAxN0RJMVdzYXFHYzJoSnpJNTJKaGtQM2lMeHNTK0ROaE9SZzMvdFJBWFRpUjFQdWd5SFN2YVVFdm5aZFNSM21wM09PQUdOc3E3eW13WUhSQkozYlJMQ1EzZ3l1QmloTmhwVExkQmV2N0FCUjJTTFNHS0hQeG50RXRSRmxWeHZDM0lpVDZEUnNGR3lpWUQzOFVWdHB3SndudXhBRjlUc0YzR1JUQkZEYWQwSHF5c29zeUV0WjVMaFI1QURiR1JNVEEvK2loQ2V1ZmowZjgraUJpWFc0T3JMdm1mWUppYitFemFCRXBCb1VQRlkvTkhKekx6TEpKS3F3aFBDYTY0bGI4eDdEbVJLRHQvcDYxUU10UHVGNE1FL0xLYTcyVkJCc0YvaExQOFRPWVp6Y3dCWHBXOUU3WTdmVE82UGg2QzAvYVF0cTFBbGUxTWM5eUpGSk1IZUFpSDZqSGVuSDN2ME5IMjUrMVE0M3Ywd3MyMkdEZWxMdi9FQlNHOG9SZE8rQTVjQ2xKeTlwWTZlYW4yN1ZPcFAxMmc3bkkxM1VERnQvRnZ5YlhmRDliL3I2RWEwbWxlWDkwUjdpQ21rSXNReXJuK2RWWktsYi9CMHBLOTNEcWFJMmhVdkZoQVZSaXl1VjVnRHJNaC9ZTDgxVXBtOUZ3VmFmWmdISUVpdGgxeEZ3dzQ5Mm9ldG9LV2VEQm9lOVV6bU9pL0dWVGR1MWdzMnNCdGczczRLdFNUOWN0UEtESUh5WWlwMzNqbjZtS3pJNzVlTDdHbUhyNTVrbHhDaTIvSEJzWDNlMTR1MXBtcG80dW1adWkyaHovcjMrNC9KNWNtNnA2Q3dvNEcvbGpXK3dnMW80QmhpNHpsZlJpbTF3NFN6Q240RHp3ZmU4RFpEc2MwcTRWbUlVRUlkN09KN3ZyMGtCKzE3aW9LZlVvNFNzbnhrb01sT0xGMVhYalc2WjVHQnN5L210b29MUWhiQUJnaXg3NXdXdy9nL0hZNlhoOFJndklDdnJBb3JNUTRrVlk2RjM1dFo0RDNWenVmN09RWDM1a3lVRjVESEgwSFhxSEQxSGNPYnMxY2pobURUWkNrVDg3cmFPYVlmVVEway9EOVNLRytYQWRTZWRhbi9ENDJYUlFvTWZnL2w2SExqV2k1WHdkajR0dGdldHN3cExGY09kWmVITE9ISzJPbXZsck1sUFNTcjV4U3B4eXhkZnJ6Q1g4ZlNSOG9IZEJUTzlscEpCZVdYdG9tTUl3N2tvbzhRMklXMGw1L0pJZXUxSUJqNHYxci9QYUtyczIwV2s2NS9RbGRpd3k5Q2hZeURJU29PRFFHSDlwYTJuWENyd2FGNXdkVHFkMkRCUm5DS3QraUZxeUpkRTJualNFRm9JWDhmUk9kWUVpcGhOT0FoTExDaUQ3TnJTdnhtbTF6blRobWhMR2Q1Um43Q3o0MEZnLzFTN1owTGlUaG9TbzhpZGpFMlE2bEhDYVhjcUt2K05aeEluUHc0Vm0vdlcreFFkVkpkT1Z1b1Y1REI0QTAwRXZBc2k2QjgreERKWlVzanZ5S2hTNzVmMTRMVGNGc3FmWVYwZFJGaVFYcXhiU2J5WWtLaVUxU1A1dGhlV1dKTjVqMTFJL1hNZWY5OVNmbHVQR1FqVDdMY1RpLzlYTEc0M2Z3K3ZFMXNqTGY5TUtZbmo5aURnenBLREZKTjN2ZlVnekdkWjFDMUI2YmdTUFlzTmlrOGgxc09JWk9vck4rdm1uVjJUSTFYaU12ZG0yYmpIUDE5ZEFuSHZwSTJWc2hUelpsR003dFAxY0pmZGtpbk5ReUloSUJnbzJCTENvZ0NETGZxUWhaclNnbC9QelV6dktxWWd6NlpaekZDb0JNdFloczVIZXRxNTZGaXdUMHdjR3hTcVY1RTRzSWxZM3ZXeTM2OU4xNWNJaDZKTGt3QlNBMGlxdFdNVTJGcU93Nkg5SkM2cCtudEt0NHpNTjhEVFRlckNBaG5ReTl5S2VveVYrWGsrdGZBSWx1SHIrQWZueHpFNktONHFNR2VuNjRMbG5WbWVvdGo3eWxKSE1qL1JBOXB1TFFWaklPSGpXN3NKNmU0VzU0WTFFeXUzOVV6cXExTXdDbTFwdlE0aTgwMjFsMVJuSkI1aWV1K0RuL2FxTzJ1QWtPeDkvczBGa1BrQzNYZG5sOGhpdUdYUEtIK0NhZHNBMXBMZHhRcHkvQXJPTTM4MkNJdkprOHpGeWtMRmMxS2lzb2l0TzEzeEM1MkRGaDIzSXo4QWZyc2VHd1BKVS9sN08rVG9tMGwvTzZxN1ZIZmg1dGIwOWJOY0t2QjJJSWdHUnQ0QVFqb05WSEtkYnhwMTR2RGx0aTF3a1ZONEZ5Skd5c0lGWDhGVXM1TXV3UUU0QzBNTU9uUnJhRzRCTFZPRFRZRFY0RVNjaE5xV1N2bURuT3ZNeGRnYnhzZmMzT2tZdXdQay80N0ZvK04yUExNdW9vYWdsbmRCTkN3NUljNlE3d0RZZS94bmY3NjB6azZrYkZqYWJDUXl3NlFPZER1aEZMR1kyTU5ncjhhU2Y5Nm5OYWdGaVJxUDhrTzk5RjcrSjdqT3IxUW9iWUFxeFpSMnRUL2c1bDgxUGJ2UTFMTU9kb3A5YmRnUXgvL3kzbm1xNkI4cjdCT0p2dXR1L0lYOU51UlcvZ1dneDBYSXltWEN6WWJmWUI2ZDByUE81dCtFNnN5YjhQRnkvbVhZaEM4L1dqOWhRQnNPaTJpb3dXUyszWWwzeG1wK1NFRlF6L29kQ3lxRWQyVzAvTnRZemFOTC9QUzd0V0pScmc5aVFMdFdxdEJJRjlneEZydmEzL1VXT3pja0owZ3IxSzJCbHIvN2pnQUpkdUdQUHhBVmtPZVpZS0RhcmMyaXBPa0VwQ0g0d0Q4cEpmbS9Cc2pJM1dsSmhsYnV4SUVwcytuK2ZHUm9qQTVEN0prL1RxZ3pIR0VoWUljWDRleUtRM25PUWFra005RkVWYW1kMTFSRGUwaXJIUWJzZjRMck94N0YrdksxMkFiSnE2bTJBTFpNUngzSHlxYkhKOFY4eWl4QzRZbDZYVXcrZXhmMU11TDIwU2d3ZDdNc3NWMEJwbURkbHNjempLekpjVnN6QU1rWitQN3VWV05sMkk2NFJOeVNDeUp5VlJHL3BmSnlyem5EdlNYUjNMMUp3VjJMaklnUGw2N2crWlA1OEFiK0ZYVXEyWGdMcGlYeHdmVm1VOGlrMnNUSzdjeHNHQU80NkFIL3YyRlZhRGNSMVorTUZOL2xmZ1o1L2hmUDdGSDcvMHdnNU5oK0djUzN0WG9FTjRRWFl4ZkkvWEljemNiRzVDN1BhaUhEL3BnWm9XZ2thVVFHcHhHeW4rOVBPaGZ1THc1NkJYckp1OW5SWVJxS2dpY2h0SnNGZDV1NnNTTmNBeEh5SjJNaVdrcFF1NzkyRHRaYStWOVk1empkTVQ1MXVXakp5cHl4V29KczNIcHNIRnlrdEJGMDN1b1hYSVlYaWcxU0o2dmFwUjNIWUtrZjZWMDVYTUo0bk1RYWJFcTVCR210N1RybGNCeVQyZEh3K2VhZjRHaW94YVdpWUM1MkRoZmxYc3FiRWpEMVgxVlByelU4bGxlOWNoQzZ1ckVSaTJldVZmY0xsS0Nqb2Y0RkE3OUpERWFvYk9iaVl2bUtwTGpkdzhsTXpwajRiYnZHbW5ESjVHY0RpbFRoWGJJUjRxNTZTUjlhNGM0QWJZM0Y3QmxDZWM3WU9mclV0dnc0WEdWbFJlYzB2Z0dmQ0lXekVZZWpSVkxWdFFxUkdqaGdGTm9RWFloY1dhQUJXTFBPSUU2QjhaeVFHcWZwYTI0WEdmczl2eG5kUzNValB3YzJhMXNCY1dQYkxzbXVIcFpNV2JBYVRvQndFenRqYWFzeDh1dW5QMURxZi9URVFXMzd1ZFF0U1c3UzR1ZUY4ak1YQmNrQ09uT21KVkExZDZ4UGd5cks1Z2N5Tm94RXVYTjR6VEpIcmtjRGM5bnVtblJLdmFIdCt0S25CNXJQSHczS2NpK09uZC9JcU5oWTI3Tjg3T0ZvWXVyRmRqeGFLU3Z3WUxQVmNiQ1NMa3BreWlsRUVDY3NPMDJCeXRvWlNPZC9GTGRrT0NHT29SQlpOTmt2UTQva0d2NW11TVlzd1dFbkdMak8yVWM2ejJWeU5BZk1VRWlybVEvbnVyY2NLOHpYWDlZMlFuZmxsc3RuR0FIRGNERUZNcHRzMlpSLytBV2xIbkFKVFdHanhIV0pWb296aGNQTkdRWUVKRE5udXNpekk0R0pteDRyUkpONlFzQnVLRitzSHVKZmxXRU5FWGcwQ0NwS3QyVTVrdUxaM3VKd05OLzVETExnZjk3WjhwQ2lYR0wrVHFhUForQzFwT3JNbkc5Mjc0MSt5WGJEbzRjbytZUXBwNVRFeWIwc2M0QklvTm1OQis4MkRzWjZmaDBmTkpBV2kzVVJlNlNxZVJ6NXF4T0JxVGpQYzZXZGdmY25Rd1pEaGNTajBKMENlaTV0SmtoQ0p6WWY4MmZRazZBMnhzNmdMbEl2ZlhZTFBLbTRsNlFLN2dXYU1UWlF6NEcyd3A1azhXbGZnZkpDWTc0ZGRCWElsMEdRamJpZmhPeWN1UGcwUGc1Z0hOemd5a3hCSDRkemlnSHFzTUwwc3RpSXV0bm1jZmM3c3RXYnY4cnJEVkgxbEswZWtBaHZDWFpUVERRazZNUjlMTHVIK1ViNnd2b0ZxSWtJSUxnWmJ3NHlSSEk0SVh6dG5UeUVzZTVDNjZHLytreTFiY3JTZG1KMVVyeUNlenNWbWNSM2lzUW9udVZVa1JDRC84cy80M2pBb0JTMS9GV0pZTmhad29qeExHRzlIcW9SV2hIMjVQTVlaZXY4d1BZRWhXSWdXL01zcEMrbzViQXBzQ3lSSE5KRmZNbmVjQkd0OERwU1lvSTBSRXo4TE1Jdk45VWZqK3o1aUh0UUJ2bVFpOXlTTEc5a3hBTmJLVncwcUl5YzRhNXJKSTAybENVVHVudGZnOU1SQVZTZk5xWlBOOVZTSU12OXlWbWVrdXFyVnRFVldhREVjT2d2S1RERHVUU0ROL0VRT2Juc1FZT0lySStKa0E0N2pzZVVacXBHQm5WRkw0Vlh3RXBHeStKbytXcTJ6clRDdkc0N2Z3MDNORUdZZDJFM0c4cytsYVlmSEs3R1ZkbzFDT3lLa08yVzMwbDJJU1VuUGFnZ1hETk0rN0NacHJteEZMckVFTzNNaFB1T0hQYlVwcThrOVExUXp3KzJMVXAzZUJVVWhLczN5dlFnc3VHcEw3ZWV6cnZqNmZoR3EzSkpXYnNLUGUydWVZeDZYdGNUMEdINkJSMENLV0hvU1E3L1pyZktycjUwVUI4dWNKenZ5eTFWc1p3alJhWlpETXNaazhVWnlFeHhqeEFPdTdSMnFlcm1OaHYvNmhOUTZ2Qm1BRWtPZGlWMUNBQkI2S1REUzBjWVVUaGI4RVo3SkkwZ1pIUXRnNmUxUmNWS0E0MlVIbGZFWlRPTVJCRE9tWi9BN3g4SVQ4RVhNa0d4VHJjYnBFNlRnTVZLRGhuQm0wbW1KZFdzTWluVTMyN1k4OUhES0VhL0FGS1l6ZURzR2xvUjFzaXp0WTBOK1M4RVhna2xjc014akdtR1RZcy9vZVNoN1JrUENrWjlYWWNFengwemFYZTd5ckhPdWNFRHhld05JK1hsTlhmZWN6UVBqT3dXcjZRVnJNbXRqTXdKdnQyRkQyWTZ3Z25OOTJlaitJRklzMzBGWnZzRHhrNzJFSTJzWUd6Njh0QzdQRTJsMVpqa1FCbEJSV0EvMzh2cnNacDlUdXRGR3VvbjBRY3lrdnVGQWp5MFJlZElCTVYzRXlpcm0ycGt5NHVuckZlWWpId1BzNDh5bkY0QU9mNGdOcFQrdS9iZmpFbFVQOEV2WThHeXZFWS81TjV4L2duKzJDcHlwVDRlb2M3eTZGK0xqMVlxbWRTZkt2MEtCRGJFbGxHdU5YS2J6Q2RzV2JyRFJQVWEzdmszSnVYQlZHWXR4NFJEbEpZRTY1OXMrakIzL3I5UWlWU2E0dTRIQ0Q4WnZqSVAvT2xEcnZyR2NsUDIzbk8vTENmVzJNaFg1MmpkR3hxa1JKUFEyM3NabnN5WHlCaWp6YmNkRXFobEt6RlAva1ZJa3pSWEdzdmZDRlo4SlpYREd1U1ZTVElYNURLNHdweU0wWm8zcGlid0RxeHZqNzZuYU5tMEhsaitMR0g4TE5xemJaMnNURXA4WUVxMWNaRTZNR1B5LzNUVlRNbTNsMjUwRnFxdUszb2FSRHN3dDBUakRiQ1ZMTHczMWRnLzkvWGNwc0RPa0wzWjN1bHAwUlkwRnhyanZncU5DSExLK2NXcElWNVFhSVhPR1BreUwzTkFFZWE2R0phT0M4c2I2V3VZZ2JRRVVmZzlMQno5RzNHczdoM2c4NG5GYUJzYmtLOUxyVmtTeHBKQ2VBaHZ5V2JYRTNEWW4vZDBNNUp6OFg1dzc5RDdBSGJxK244R1YvQUZ4dGlOdUxOTTFMd0hvWXR1ZU0vdXgrVmtrbEpzQ0pid0xzV3hxQTMzWGZOM0VCbmliU2VqQWVuV21FdGxCdEJzWUJjbmNhVjE3aGJMQUpWTGhDQ3dWZlc1bHBpSkhXSTd6eHNwSkVnY1lzZTMrd3ZJR0taZVlKM1lITWRzSm15blg2N1c0WDlnVVNQd0hTbEFmYzJSOTh2RHhXbWNTcmF5eDhJbUVUZ1ZJcE1hR0FKQmhrOEJvSU9mZm50RkpscHpmVlZVTDBkcDlpdlFVeWVLZnMva2VGaU5RcWJjQmtVNVhqZkdIcGpiNFBXekk1K2MvQnN1bWFHdk82NHJVU3dlMXFFZk4zS3VHYVROV1pyVVRGMzVUOGl6ZTYyemxOWVR4NlkxL0hsRHhhMUFMeWhNZncyOGRHdWN2bHlHa2VRM242aW00MW1NN0I4cWFDN3JKUXZ4dUVoQ3NoMGRDT2wzT2RxTFFHOW9JdkdTb1RaMXpnWTZTKzlXanhINCs3cUU2cGdWdWhrVGdvbkhBMW00b25NSFIzQkV1MXNXOXRkajNteWFzTHkzcnVWQkd4cDNUR3BqZFJJWkgzcWhrckp4aUZkaGJJN1ZlWW5ZMG5mZEwzYVlJRHVPaXJNb3NrVXk3R21xakdOODJMdjBCTVMxdnFqa2VteEd0Y3NRUVQ4VGZCU29WUTg2dTYvRDR0RWI0dXNpbzhhTE5CdVFLNFRFekZ2N3ZnSWhEYUlXYWtqUlk3VmRXWnlteXZOdUJRTFAzZDluQllwVkwvbHJ2N2VXNVlWVlYxNURhR1Bkdm5QZGo2eUhGZDJjclp5cHdNK1MwenNHS3lYSEs2bHF3NTBMRXN5eDN2Qk14V1dQd0RSV0dEZWtwaUhPYm9tRGg0cm9RTHJrdEtqd2JPZHg3NFZybTJpZ3BVV1NTajQrZXVVZWVHaFlqSzIzU1lhU2RmWVhjVHJBZXJGaGk4UWY3Vjhra1FzWGo3VDZDVmt0Rk1VdXdkUE52V0h1NjR2L2JrZGZvNzJDblhWdlFHUEU3dHNNcTJxUEREY2xWeURLY0RpQnZDSUFxR2s4eWl0Ni9PRTF0aUZUYUhrRSthaFBscHNqUHROOFFpWTVQN2xrN0x5bFlCNnFLMjdqdnZEbGlLbkF6NUE3a2pya1FETUNIbzBLWnZ1RkMrMnBINDRYN1U0WjFVRURUcll0U20xejhSb3ByWjA2NXZEczZYaktSQmhsRUhpdkV1ci92TDFJVzVuSXNWcmIvY1RMZ0ZpdzhWb2U5YmROdnpBYjQ2YkR5cE1QdEgrR25taThlME4xMzB1U3N6Q2hSMzhGajRiZ1Mzam9GZTBzb0FMSDZScmdhUWhhT2U1YlVibUJFZGRsZzM5d3hxdzBLUG1ZT1FvaUpVTVF2ZHVjcEprMU9GV3hLZ1RramlnVXNYKy9JVldBWU9hdlpBY1hqdXduWGlHZzhDMkEySThSZzd2dDV4TDRyN1dyVVNhdERBZ0hpRktrNklVRkRVbDdwSGpPRVRRVjJVRmlCMHhudTFzOVlVRVlPa2NVZ1lVQkJIMS9VK0R4WkxucFdnN0gxN3B0bWtNNGJWVVNuL2JCWHZaOXRpdzhjRzYyYUl6aHFoRjA2VkZJV2EzQnNhRzU1TGVERHROUkRBTXNJMWl6R2h2TWhnQzlXYXJIWWhLV1pCSy9VUVBGdjl0UzArdTFUeUhmRG13dVZZYmxOU2VVWnNHUmsycHdPZEhzOGptYzF3SjlqOFJxUzJpVUdlYWxhYVc0WVRObXg3WTZwMDgzWWxJWW8yaHVSSEd4VXk2Q1laS05rUHBqTkZ6eStGd0dPTFFDSVY2eFh3dnlHeHhtNnpFOXVHQ2svRHB2SWU5akFQdGlhbzl6Z1o3RmhrbDZZQXdCWW1NSnovNE1OOEZpZmJOT25hSEpXRWhXWU9mMGN1L0d4eG5pWTdNUE1CMjJJcWNBT1NxRE9oYlF6dDVaQTdid2VUU1BQZk4xTi9UU3FuZWRXTnkrV1M5WFpIYjJoSkYvRHd2TjJOaGJsdGYzQzViYUZxVEpqdC9hOXhzU0RBNFcxaTRxMTNhd1FJeVhyQ0N4K1ZtcHg2UFZxTEdieVdXM0ZjNE9qL0ZXVGc2TVZqU1BpQSt2RW95UmVaeEVKWjBhOU5pSk9wZEM0K0ZscnphcW9aMWVrcTNwdThtNnh1WUJOSHQ4akZHRHZMcWxiV1dEeitBa2RsSklNaXZHVEhrRDQyYVpJMTU3a0NzYkdRdXZMb1dLTktUQ3pBbXpFTUtpTDJWSDFORUEyTm1ZWUdBQkRrejdZdkFaQndYdEcrS2hOajMzV3Rrd25xbVFWbmdoSG5QTDU3WGwxUWNGb25TSzMxRDBNc0tuQWpvb1JCa1hya3c2SS9KTGRrSWhuWTBLaXRUQS9EN2xsM29GNjg0K055VjRvUGI4M3lvOVVyZHBqQmdobEsyRTZXSFhRaGkrTGk1VWtBcXRnTVYvWFhXdkdmVlJvNW91NXNaQlJvN1FaOFoydloxMDB0dHl1QllmTUdDeXdJRmpFRHExVFlKV3ZtcCtpOHJKVVlKSVZjQlBabzFQN3NJRGpndTdCTlZhdXF6NjlrcHRkdUovSElkL0YzOVJRb1FnM3JOWHBwVUN0TGFyc2xDMkhmRDI1d01na3lpRm14QytNejJjWXdWVGVjME5qRkZzSWE1c3A3RjRqK1R1RlpBQ0ZkdC9YUWYrTWc4VnRSMlhjbUpnSzdLRFFhckJpaXNPdTJmMXlPdHpIZWRqMUc3TytWSEoyeHJ3Sks5V1k5V2pxZXpuOGUyMW13NTB2d1hZcERUSlgvSFJXN1loT0trNDZGbXNhRmgxWk5VaWV6bUZySEZYQ1lkdTBPbVNhdEozR1lDOXN2VnlVVWpjT05hcVJtT2xSRGZlcEpUSUJDbmtzTER2cnJqbHBneXlPcnlQVzdvanpzQWZuaitkTEFVaDRQV1BObC8vSmxxRWQvQ1FEeDJDMC9QRmpyWFo2U2tzNkNoNUFZdzBpYXpMcnhyVC9SZXg3RG43ZlY5aE0ySmhCZDUxem13eUNBNTRmanFObGc4VmYrbnVLYkJTMlo3aVA0alczbFFDOWdpT2p4SFNoMjUxY3V5QlZQaHdUcjVTWHdwZ3BDcnQxWmowaldFN0FqbiszUHJpN0tSN294b1JOL3B3UC9FMHozbk5ELzNEWmtsV3EyaGxwbmVrMU1KZEpTK1FQaFNMNUhrR3ZRRHpYQVVyV0ZlQU8wZXEvNFU1ZThFdjkzRjE5RWFmTzIxdVgwcmFvM0tvc2VieE5EbnpybWpKc09ONndhaFh5T1JTSGNUSmo0UjVRMEUxdzNSUGg3bTlCVFB3eVFLU1JpRnRYNERqWFFaOUl4aENPWStPMy94L2M0Sm03NmlycTdyd0sxV3pSbkE2dldCd2JSNk44dm8zc0dyNHlpZzBXY05NSDRiZDB3aWJIMElPamEydzMxMUliY0tvTDRuSERNaHR5ckU2eG0xeGdXdUIySndSak9BV0FLUjdTbXQ2QzI5blk0ZDlEM01aR2dRTjZ3VDh0MjF1bnhLdVp5Sk4vM1MrRnJXaWJXd01YK0tRbVNQdUs3YnFFdnNQaTV6alUxUmQxVTRnMVNkdm9LcWRpMGUzQmhySXp0MHlXNERHNmtPeUJKVmpXUGRSWEZZb3dkVkpRei9GeTh1TVRRNlBsMFJXMXhSdnZic3BXUlI5ZVZtazBoWGFHSFFtZ3Jad1dXUHNjejljcGlOZVhRR25zd1NhNnRzMmRZUGtCcnN1SGlNWFhYeEtxR3ZUcFpXd0ZpTWFPTEpLMWI5UnBiRzNEQ0YrOWFJTkQ0UG9nVmw2M3BPN1lIb094ZEVkTzI5UG4xQ2VtQWpkVHlyR0lQZ2VpU2VEamNpQzVOeUFQeTdwbUR1SWlDc3NXUnJiZjBUTDltbFNvV3VWYUkwUnRPVUNibEs3RkRkQSs1SmZYVmd4eE1STDBPZTUvdTZScmlEYmNqTUFMcldRYzZWTmhRZWo2TWdYR211cG9tK21GSkpNdmFHQ3pJWFJEeWlGV1I1VXhWd3hYbU1YK2pSVjhPRnY4TEkwWElCTjk1Z1pndFdoTUhveWJEVDVuaGdtMHJveHBHYWR6TTRnTzhGVG55M2F6Q01KNVlTa21pZVpKVzJ3ZnVuUUowMGEzN2kweUxYQzdGaW95NlZxcHlLVHdJYWs3clRHRkpHK1ZXQ1RkZzFzL0M0b1ZSQVErT1FDc0lWYU1VajBIUzJVMEZpUFRJS25GVFlObVZIcTZra3lQN01odjJxcVFJb2liRTBuZDZTWi91YjM1REtBdEVYWTg5WXBvZUVBOGorbUxzUW1LMU40VzZPTHZDb1VDazhuRXFHdm1ZL1NTZ3ZBNGpUcUh2QzNUaTJBWXR4TXZPRFVoU0pIWTJ3cmZ6Zmg5aFJ2MEFSdGlLbkFycFFDN09vczRlR09oUEwweGRoS3hzSUR1cGFOVlJBMStQallEOGk0UlBXNUlnUTNYUGNJR3JhNVBHR01HWVlFUzRNMHIxMXhuV3FDOURzUnp0Z0EwTndrV2dSQ2dJMUNYaG5RWG1UdlNtb215T3lJbngvbkx5ZkZhRGpqR3IrSENpcU1COUhGNDI4UWY5elVMV1g4YjZhL0p2VUtWQW5NelkwTklVV1dWbklUck5uTlAzYzJKbEVTVVZlbW1BaCtSWWhRQ1VPZytVNEhQMFRtRVd5T2NaVHNKQU03YmpkRFRVcW42SVMvN2orN3lUVWdNVXUyQ0hHb2Q3dTFaa3hxaEdJUFNKODVPYW5CSW03M2tZNk5pVVlRdFIvWStYWkcxb1dNUmFyTlpCWS9oOTVUVy9WNkdDeVR6Nnc1M2RjM0IwcHBSTmFNYndRS1dwQmRMYmtXVmJMMnNoNXJyYkJzdkZ5dTNXUnNzWHNyN0hCeXZnMVVrUURBbU5HZ1VPc2lMQTJBZWdQdDMvVjAzL2pVVWVHa3JyNmN6eFZSZ0Z3bVZkaTEyYW5JSWszc3F0N3psYVFlT1dtSFpKTWVrYk1tcjM4MzlCOS9WMDhiRmZPbmtPUGxoZHo3Y3ZXTGtoNnVrQUl1YUM1emVOdlBSTThZbHFDNG5SeFY0ZjBHbFV0VDZCcnR4ODNoWXo0ZHpqQ2Nyd1B3OVBOVFVRRTVqWE9hQXhXSkxKUWVURFFaK2NBQ2V3Wi83aTJYbTdsckVtYTV0VmxuRDU1QnU4NWp2OWtpL0tFM0pXQ0htaXcySDhXOGc3dnQ3VytxMEJnYm8xcGJWYkYvcVpiQ2RnM0IrQWZDeHBaQU5LeHZ0YUdKSGR3cFVjZkhDRkZPQi94VkMzdWpwUUVISlZmemdzdlNXZm94eXlWa3hkRWEzWU5teXR2NlUxQVlvQ3VmekdGS0pSR3FYWUMveDl3bFVGNWtORjBSV2lTWnpJZE1kZmYyZnVwL0ZpcXIwQm9hbnpVOHVsQXVoOEExTlpqU0Uxc213VUtUZ1BRcFc5RFlBZlV4ZjBTWlNoWWpqOG40SnJDVGpVWG9FZStHRzA5T3dKUWkwRlpaZkxtMWlPa1YrcGJYRzI2SGlqb3dMQUloWXJ0aElNaDBvZlJ3Q2Q1ME5EcHd5K2NYV3VsUkxpa0lZbXhNSkVDcXRMYzhxT0Z0TUJYYWhzQ2lmeFFOWDl3MVgvRTNMV2hFN3pZTkxmaWVzTU9maDFnZEcwNUxlamVlTmFxV3pmOW92anh3ZnBlTENTcWdMeXlkSjhNZDFYQUJ2b0JndVpBaVU2ajdrcWdrT2tlK1lpNVJGSGh3YWJsL3h4TCtOS2lSSFpYOXhoYnI5Y2FCbFJTeTIwaS9LVjUxUFIyWFdoRTVxS0J4YkNiMXhZK1hWZmpVV3RRd3hiTEdpNHQxdXR4bVJHWVZlRTd1VnJyR2JoREc2bzlZWjl0MnV0Z0h0SEJWVGdWMHNiS0NmaWNVMDdkU09OUXdjTFpHdmR1WXBCZWE4bnZxS0dVaVpReW9ZY2orUlhvYnU2MVZJK3pDTmxBQ1VlUmlzVVo4SVAra1Q3cU1RYmM3eFlYNlkzTXJyc2tvVkQvUmVXS3ZQVGsrUVlZajE1dFpUT2NZMFZnOG8rVTZiMzhBTmcwT3VHV3VUdVhKalRwbmNkSFNFN0lEN1NaU1h6QlVmNjhTQkhHREdPbTRPQlNmRjdXVkhoY3F4c0t6a3N5SUN6aFJWS0dMMUR6YmwxcDNPQ0VzZTZldjRVdVZzMzk3QUE5Z0V3bHd2S1dXSnRQTjNzOVh3SXVUeGlkaHp5Sm5oaFZEWitSNW1EMGlvWUgrZGJ1d2ZxVW8rWisxdU9WV3dLOFJrNUhDeGNBUW1Gd3FueG45eVdzZDYyUjBjRVZyQWo3ZmtxQ2I4K29UQURMdU5Uck54bzlteHRHNXlkL25qM0s2cWI5Z1BjZURjZlVWeXk1K3Awdi9MblRMaHAzMEtQZWRZbWRHSkFmTHVxSGdWNDIxdXdFMytFTi9QSWVHMjhoWlFYRnE0MVVESWlieDc0L2R4b2dXYkcrZ1IvRzdEdGNWdXFtMDRIeThNMDNpcEh4bWl6VmFhTWp4R1dUMGViNUNYWncxTGhpR1RvWEJ2TlVCME53YkExdStUT3NQaUpxb0NHdzVCSjhVc0ZaQy9ad3ErNjNnb2JUWkNBMjRVWktjYzhQVXV1ZnIzRkxuWjVseWVxbHZZZmxEeWQrem9aVm5DeVRuRzh4QkdsTGxaYjdCcGdkdEFwbS9PZ1JYMGhoS0Z5OGVJaWYrRHhWUGNnbGtjYjJNUlg5MG5YQzJvaGZXNHBiTUJXajE4UWdmRjgxd0lGNWt4SzYzSlEvQUN5RHhCQzlNREZ2aTBUdUZxaGk2VmlMektqQnZKLy9UQzJzdzYzVHYyd3NjNXVZR0EwM1lkVEtQRkp6MFFwOVJUVkp5SVkyTWhCUXNtV0VEeE5CVDdqK1JpL080REt1MUU5ZzhXa1pCcy8zY29CU2NkOE84a1dHRTJPckFyeVJDNjlRWDQzb1k4bDJlaC9FVDhPYnVLcGF1dm4rd3QzOEJiWVc4MHdhdSsrTDBUc0RtUTNZU1Npcy9oTkVJV3R1eXpTWjl4UkN5Rk5lTDJmTS9HOFBPWDE3YThKTlpWWWlwd0c4a1RLOU9ScC9WVVZvS2pUemkzcUxDWlRlRlVvRTloQlI4RXlydm94NkpEeWhlSjJsS0I2U3BTS1prM1pvc2RDMDA0UDJndmxJNnhNb0VZRXRKejhrTnpPNlRlaDV2OEZKVGhYcDJDbHRNYy9nK3U3eWViYytVYXBNMjJ3M1VtZ1I0bkJsTDVPSGhzSVpSM0x6YUllNkM4SEEvNitqcHRVSGNZRkl5amJ3aWNVYkU0ZzlqYjAwTzU5WWJRK242eHJlRzRrNHJQVXRLcEc3SVYyaytDK2d1Z2pNL0I4ckp2ZS9iT2ZHeE1HbkVCKzQ1N2hIckxRS0RNK3hCaXZMZEJjKzE1bklQMTRkemN4R3hsQUk2SjRDQW5PYlFGQzBsenhSSTdmYXY3OG9VY2dmSTZMQitWZUFYY3pPc0JsQnhzWm1NNCsyMlhYZEJOMGZKTXIyZWUwOU5RNEQ0QXBBeXFtQk1RejVKN2VSOFVxRDdMR2d0TFJFQ3JPWHpPWFBCMGR6L1F2Lzk4V1BwSWhBZy83aXBRTEpLVG9KVEc1RU0yWWhpVERVNURicHJFQ0JTMkVqSW1aaDUyOXU1Q3hiSkp1dDBvYkhKRW9qa044VWFBZjJUbGJJd2g1Snd1SWZMQUNWRnF6QXJKRnI3RWU5azhRYnJaVVIyRFZMa3J4N055UXlOVjBMeWtva05TZXB3VFRLcWQzL0QrSy82b0MxNFpjNk5QK25hM05qelB6Y1JVNE1NZ1ZMSnI0Slp4UjJkTTF0eWRuWEV3NDdlaFdGVDJpc2RXdnAvTzZpUVRaKzlyY0t3cFp4WmQzRE5NVGtrTWxHRXhBVktPNVBBVnY2WFVETGltMEwzdUdlSWpxeHFZLzNNdWxMUXpYTjFYMTduR3JlUW1Gd25yT3RYQldtdUdGUnpwY2lvMkZsTEtmcm9sVjVIUzg5d09oSnZQR1ZLczZHSTlDL214RFhkWTFheWYxVmw1UjJUdHRMMFdaM2NOa2FtbnhDbkZKdysxTzRxcHdJZEpHSzh4SHVTQ1lRdGZValBiMDM0K3M1TnNCK0o3eCtLRGh6ekhDUVJVeWt1Z2xJWlFJVGtMNmJST0dxRWJZOVBQc0pBNVZQd0tXS2tBYjA4RjdQQjExOEx5L1JjYkJBc2RHRU5mUGorbDNtT2c1U1h0ekJ2cm01NmswQnpoZkY5V1kwMXRScU9Fc2VFY0FGSThDbGFkelNVOTRmNlNQWlQxNmh6TVhvWDg3Y1d3dEsvQTRvNzhibzlLSXozT3lRNzl0Y2tPVDYycVM0cFBpbDF5Y1ErZnVjY3QzV2VLaVVJZkppSGgrcU02Ui9QQ3M3dW9RVi9ORVFKVDUyTXhqa2s0OUgxUHJVaUhkUTFTZzg0TmVmT2tXRVh1UnJSNC9LeTlNdkw3UGJJUGdCRjV2UmlIem9PaWNrTGhmQnpMWkNnNldUYUh3Q0tOZ2NMYmp4Y3g1RnVrZ2pnZitGR2RMSysxd3Q3bFc2Rk1IQTlibi9LZWlXTWhJRGJCcmoyUjM3M3lndTR5RzVhVWc4MDNJczRmK1QxK0l4VVBHeU9QYjhzbDNaV3JiSEFmZUFLTTQvdEk4MHZsdEZmZXV4RFg4L24zTitTNHJmSlNqdWpwaE80dW5EM01XdDlUT3dYS3BiM0NwQUtvN1hJSDUvQ1NXWUlUQ2g4SFNNWGNwSzByZlJCV0tCcXhKaFh4YzcyeVNjMURBaEJEZ09pcTN1RnF4T2lvaENERW1NVXFMcHdBc0ltVzcrTXRlU3JOUk1JNUZubVFObWpxaGl4cGFEQmhGbUo0enMrOUROOUZWa3R5aGpXMy9abnpxdjZEN3g2RmxORG4yL0prUzk2aDdDT0RBY3g5UFQ0UmdGZVZtcXhJTWRCaXVzNnhRUG5QUk5oQXBYc2VteFgvWldVWE54bnliUEdjSE1NUk50aWtwbUR6bkx1L1VFMXlIQUp2WlB5c0pEV2UxUkMrZCtxb09OWE45Ui9FeEc3TUttdTYwTzRnWERBenowaFUvNzZ6UGd2V3dISHl1NWxZMUFGQWN5Zjl2RS9LYlZZYVhjckY1M1ZWN2kxN2RxK0RXMHowbXFrZEVzdjl0TGRRb2RML056QkNWWXI5aXIvdlhKeW0zTXdiZ0NKZmUzU0VJakI0WUhINkljUnVqZjBPb3NhMGJvdFNpMlJaV2ltUTh2cVhseGVVOXBnb1h4a0VnS2szMGxLY1RMZ3lvK0hOaTBwNkxWSm9KOEgxSFlDWTl2MVQ0MlV2Tm91N2xoeVVJT1MzdnoranM2d0E4djNvOG5SVnFmWUdyTzB4MGY3d2RETFVGSTBjTzZ5QUpBTXNjMzBTM3NwVXV5YVIzMkRKbVE4bW45ZmNabFIvSFE0eEZkaE5oSXYvUStSU3VYQTJ3REt6bE04UjEwMmhyMWh3SERUT1VTZTJjaldzMm9QSFJjdm9IL2FxejJJUkNaY3g5ZnlXZ2VISWIwYkNlcGJLaTJ1eWFrWnZUb0gxb3JWOWVFbWEvTnBDSGk5V2Y3Rno1d1NrWmlyMGVtZERGR21jaDRjcTc5eVlwWEUwTzRLQWMwT2llMC9PcWl2MG1Id0dZbjFrblJRUVNMbHZjS1NjMXlOVUFWZ3MvR0NzejdHeTZsd0FEOWlrejNGbVk4UXZrenJMZ24xRmN0K3l1aGdDY1FuaUU5T2cxSSt1YUhuOWVsdUpxY0J1SkZTd2V3Wkh5YzBESXBvRmJuV0Y2L3JycEM3eUxoYnRxM1lOQ3UrTmlKTWVTTmVjOVZOU1RTdmc4OE02eURuZFErVkI1SEpaMHNoQjF2Y2NHNlh5cExUV1pMRm82ZWhWVndvM3VYZmgycklNOGthNHRzeGpNN2Q4TFR3RzVvQjU3TU9odEFTcHVHZDhnUGoxOCsyNWNqODJNWFk1blRsSEc0YjI1a2x4TWlUZVgwNy9JYWxPU3VsWXZPWW5LRGJQL1pnZjlycmxPYkFYTXdaMkk2RitNVzRyd3gwV1gxd0FhMExTdFoxTk1HVXdmdHVQSE9WencyTWt1N2hLMVRZYnd0UVErNUxaS21lUXQ3MkpCZjRRTEE4SjA1OUNIS2hvWHpQTDVQTGZrbVVlWWtPeVduNThhb0xjQkVDSkV3N1MyNUNCa2MwWC8ra2JwbVk1czFLcXhLWmlqUXJGUEM4dEtKV1UrdlVpMGtHbE9GL2tsK1lraFMrQXJKTmlsclEzTjJJanZBcmhBYWx6eUNMNVBiQUNwdUF1Z1dkeUZ1SmwyeUlXb3VtZmowMFFmMnlpNDM3YzV6YXNrMDJKcWNCdUtDUmRVK0FXa09sTGUydDF3VXVib0hIWkJrVlBMYWlVS1ZqWUI1RWlXcCtsdVlza3JXTnp3eE5ET3FoV1BvSmtMUGEvYlZDVWluTkpMWE1UUUN1Nm5LUUN1Z3JmOThHcEhWWG5EMHNZV2VZNHN3MDdjRmp5ZUJWaTNVRWQvR1FrUUswWk5yUzlWTzY0QUcvNUJjZkczL3Jra0doRkNmc2NRb0JaZS9MbFBuZ1JuRWpJallvYkY2dW4vTDAwUGl5V2x4NExEK04xV1BBN0Y2VWQwaGsyZTBJbjZZWlkvQVZZOHQrU1c5ODkxVlppdXRCdUxFUjF2eDJ2Z1Z2ZndQS3dwN2lwOHN0cm9ZQlB3YUkrQ1RESE5oVkQwR1lhWXV5N0VkdCt0VDFmUmlKWHlsalhsaTJFeWtPdzZHRjhEeWx5MlBSUGhYZTBpSUdNam8vQVhlMERjSW94NUs4TkFFQjl3bndVYTBaOUZEdy9JZzFFRHVkWmV3cGx3YmxkNUs1RnFmSVRQb2UxeXo4Zzk4MXp3VUhkbDg1TFZ2UzRCUDhvaklQWnB2c3l2QkF5ZWR3TUYzdUZUUkVLd3dPK3RyNHdZK3JJT0RrYjZTU1dsejY3T2tQYWs1Z1cySTJGNU9qc0k2YVZtZFFqUk03cUdxTHl0WTNGWml4aHBIVmlrVC9Gc055Y3ZKY1BwWGxoZUt4a3NTM09aazRReXh2SkRVVkd4OG0vSnFzNjVhOU9UMUJjV1ZUZU1nY2JMKzRGK0hNbTBsRWNFc2FhWnhhS2xOcTlsM09GMmFuRWxCVkxIZzhVMVZYaUdIOXZ1UUl1dEZHbWVUdnlzZXlZSXFMTW5DMVRSZGZBTFk3MDg1RFpVUFNmY2FOSGNUK3NMMmNrUDdNbVUvMmVKNGZGeUtkYmM5V3g5NFpDL3crYjBZY0F0MTZ4cXh4N0dPKzdBaGFmODZOdWNkTnFxOGJFVkdBM0Y5WUVzeVNRWFVCbmRBbFNiWGVyNFI2bU5oS2piUUM0c3hZdU9HbDRXT3U4TEsxRXhkZFVidkk5UFE1TFMycllGZW1haFhwdlZMd2tJdTdsRlB2aGNRSHlOdjcrY0hPdTNOcUU4aEk4SzZpdzFpU0tHSmUrdWk1VFRVUWtSOWFYVy9QcTVGZlpHMHozZk1LUGU5VTBDZEx2Mmx0cHppVGlpQllpMTFUaUs1R3pKcU1rWng5eFRBcEJ2WStobU04QmlEdFFXS2thTnBqcUNjRm5QNmR2V24vQ2UyRHNPMzFUcmd5SzlKVXZnVlovaFB6MlMzYU5Da1NjT1RPSzZiS0w1NmJVU2NPMUZ6RXJzZHFKY1BIZEJZVml2K3ZQU0tmY09pQ2kwZGVUQldNaWNzTm5BQXhiY0c3WG1rcXAxNUZuZm1ScHVqd0UwSWNMbU5JbDFGdkZ5ZXdpdXUvWWFMa1gzL044RXpPTXZ4cVRJRXN1NkNaTEwraXFVanprbStaMy9MNnZXTVhONjVFSzIyT1hCak9tSGxEcE4yZVhxeHBsUTZMOXZHUWdYRzk2RjAvQmhTZUFScGY4dnIvVDVIb29McHM0R0Jhd3U0bzl5MCtzekZSV3RwL09BOGJ6Y3hrMklEWWx6SnJZV2FXU1JpWUV5RGRuZEpMcDJJenFVMTZtaTdaaHc1ajhTM0t6TzhQY1JVd0wzSTZFbHBXQUVxMHd5eCtKeGhLMWJzaHdVQm1ZSCs0UEsvUWdGRE9uckZKeFo5RVNVOEVlT3I2RG9zSmxZUWRUTVp4ZmZPWDhBMDFTNEhBZ09KSHRrZC90VmVXWDZZaGx4M1lPVmtyd0VSVG5KVmpDbi9kb0ZFSWtHT2dKRjNablhvWHlBZ2lTTFlkSGtFM2FIMnd1TEtKZ0dlazhiRXFYOVFxVFVuZ0duOE9Dc3lwckJPTDBWOWRueXltNHo3d3lVMFZzSDd3SGl2ZkVpZ3lKOXZWUTB6Ryt3ZXZwcXBNbWg2bWt6MkZ0R1FlejBvcGtDcS9aeEx3RXdrZ293QTFpRDVEN1N4Qkx1NElPdDYzRXRNRHRUSXdPcHBVNjF4YXJoaHFyUTJiSjViVUFkS1lpSi9yUzhEaDVZNFJXWmtpazlmUlplMlVvbE9RT3VOcG53VnF6Zm5oamR1TXNsVDV3YmU4ZUhLbVVvbnVJTjF4dmJ4Vm4wL1dlQWFDTm8wYzRSMmwyVXFHeWNtL0JIWitPbEJRVm5wSlhWcVVJOXZZQU5XYytsMWFXcllsc3lyOFVGdlJXdUxUa29INFNDam9PbXhTTE1aNVptYUhTYXF6dFpxVVZtemltajQ2VGgzUW16QXVPQ3FrNVB2NjJ0NEUwWDQ3TmdJVHRiOW93ZWZDNXVaTTZ5ZVVBNmhidEwxSzB1dTVjNSt5SW1BcmNEb1dMN2l3b01XY3lrWkNPNkNxSnpSdVROemRreVpCdmRpdTNsYStuSmVUbmpQMGhTU2tQZTR6dkdCalo1SGZmTWtoejNUa1htR2ozSjdDNENVRmVpbktHM3NENXNNanJFVnZ2UXU3NlpDajE4NnN5QUJ4bEtxSjBDcTBleDVZWUJSUzArdlFLeU95eEtyTkVtMzZBOS8yRFhEWS8rMjVzQXJ3L0hiLzFpUk9pdFdNQU1oMkZkTklQU1Awd3JzN1VnVEIyR3JGYWl6SHphZGljRnR2VWxiUFJuODl4NFBrSHNOSVhJZWZkR0UxdGV4RlRnZHV4UEw0aVhaNkFGZW9JSlppUGxNc3QvUnVQaTZtd3RMTFRZSTFaN2NWMnVjSFJmc3FxY2RqMnhiMUMxV01uNkFUbTlrSUxkaDBRVzA0aXZCejVWcnFqYjhMRlpkeTVFQmFkeGYvbndocCtxcFBZc1RrL0g0b2FnbHhzWVlXbUxIUzNHVE5ubEZaSk9WenV2bkIxdjl1ZHJ4cndtZW9oSUhWQk44MmljcGc0Z2E0TGdjQlB3U1l3QU1kNkZGeCtraUNjTzJlZkxDSnl2UENBQXI2NEtSR2NZNnhMYnlKREowbzRHcC9QNXpqc2pYSTNZdXBIbHJ0L2lhU2pZaXB3T3hjTzB6YjZWZGx4OUFEY1lkOG1pUE9tYmNsUmJ2Z2ZVQlpXSDNGeEp4ZVdxOGVvRkxPUWJ6VmNiVnVoUzB6T0tySmtjQmJVeStzeTFQeGlXa3pHMFQyQVpIT2dta0VNd0I1ajVudERvY2dHQnhqTEg3dnIzZ0xUVkhTakdhdXplSVc1Nlc5MzVzbFl1TTZrZzgyQmhYeVZiWmVJWmQ5QTZvbDEwRG02WXZMMzBqMGVqTTNtTjFoV3poTm0rYU14YkkyYnhQMDRGNndUTjhiYjhQbUdlS2ZicTVnS2ZBUUlGWUhLdHhIZ0ZNZWUvanF4YzVQOXVWU0ErNEgya29XQ0RCYmZBcTM5OHZTT1NwSG9hZ2Q2ZXlocnpCNWFsbFpTaUlDdkJQajFDSEtuSkRkblFjZ0lLQzhIZFM5SUtWYmcxanE0ejBaY1NlWVBna3VoK0t3c1BlMUZCWXpRWnh5eG9UNUJQMDZPWjZVbFg2c1hYNXlvdTl6Y29CNWZuaUhwc081bjR6ZHlJaUliT0I0K0xscldYdFJkMGNST25wc3M1LytxTVp0UWNiblI4TG5iY0M2WWsrYTVhUW56U1hzUVU0R1BFT0hpUE8zSEpIbDNmWTcwUm96NS9Sa2F6YW9qNzJPeEJoVjVBWUNkQndaSHk4K0lMVmxHK2Q4RkI4UUMwR3JSK1YxbERqWUZOc2VUbDVwRkZSZnFuRnNFcE1pNTFRMHg4Tms5Z3VYTDdacjdUSVRjQjY0em1VRkNvSERHckNMR3dCMEROYVdsaFNWZk0yVUdMRGlIczlHTkpzYzFFV2hEeUo5MTc1S0RFb0VOZ1FVbTZ5L3BJY2ZGYU8xK1ZHcGFWME54VjE3WVhhV0hHTi9laGxoNUF0enBKVzQweThqWllySlNIbUh5eEtwMFNTb29WeDA0Sk5BN3UxT3dTc1UwMW10TG9TSS9DclNYdDR0Z1NjL3BIaXh2bnhLdkh2OE5yblovS0ZaTVloRHlzUjZLV0w0dndMTmNXRlhHcjB3SHNjeHhPUlRGSUQ0bkhRL2xvRzU1TS9RSmloeXlYUTFsdnBUazZsRCtMUDF4dXRGems0cmtvekVkbFRKK0RWZlhCNkVBTzZWSWVERDVxRERGcHNISHo1dVRYYU9VWlBFZ0d5Wnp4WHdmTFRXSGxiSHFxc3FOUnFDNFNzeGE2Q05VRXZYUm54ZnBmTWNjR2NJSkNZdVNpeDNPZTNhRWRUd3BMbERPNmhZc294TzB3VjVlTnZFMUZaR2pOaGZCZmViSUVrNUJJTHNraFhPWVNDakE2aWE2eWNQaGx1L1dXeU1OUGpDT2NibncxMXJYbGdySUdEN1N6MHZDWWJWSmo4dFltTFhQWkp5Y2JjTlpUYUNOUU5yWUxrR3FxaXNUaWtzdTZDOTI1S2twaWY4V01SWDRDQmVTc0xPZStKenV0ZTcwS3FSWFdJRzBBZWtaV3NaY0xIaE9MY3pndkdBWXpPeVN5a05tN0xKWG1ZRFJrQTUrTWl3K1VMb2ozeHNmZkdpY1RhSjRqbFVoK2t5cUhGWktrVHQ2a1YxeFNCU1V0RFBlejFpN1c2aTN4Q0l0UkhlYUNzcjNVMm4vd28yVXNvYlNVc0V2QkVJOXZsdHdUWXhNUy93cDR1UmY0ZjY3MjlTRXRoQlRnZjhsWWt6WFk5RURLV21DZlJxSFAwaVd6amlTa3dNWnF4cDl1YlpqU2dPaDFOSElBY2ZwRnBOemhjTDl0ZW1IMVhnZkxUYmZ4Y2N6NFVvYmRwODgxSnpQUzZ2Sm5sK21uemgzaUpWbVJMVnRlNENwdENOaUF1UThIUGVKMkRqNE4wc3lsNlNXcUVrVlIzSjg2NGhZNHFadnk4RnBEaE5UL2xYU0g1YVJWcENGRkl3ak9RQ2NWcGJORHpFQW1VaFZ3M1NVTVk0MERDbWhZRi9uWUo1NU1QT3NFTXZIUmxDaDY2cXhNVkJLWUhGNWp4TVRoOWd3YTI2QngvRE5yZ0trZ25MYkJWdEdXNGdYbEpld29hbkEvektodFJOeGpLek9YbGlZd2R3dTFabXRleUcrMmhSQ1Rqd2tkaFdsVzJHNjBPSFlIUHh4WTNjUjAwa2hlSDBvL2c3d3NibnZYZi9HUUMrQUZ2YVBmVVh5SytMZlhRVkhYaHFvbFpKR2NzRGNmd0ZZWjRvVEpaK2pXQW8xQzVqa3hOeHFzSmNGcnIyWHN2NlUxS0pLdHhxbTdYWmlzV2JTQXYrRGU0UEVGRk1Pc3hRZ24xeFFhVnBaaDhVcXV6M3d2NzFpaWltbXREdXhpTWRtRDZ1SGJCZFRUREdsM1luRlVyM2VBN2pEWERIRkZGUGFuVmk5UE5kNXBGelpoM1FGKzhVVVUweHBOMklSU1VtOW91Y1doZmNCaWY1T1RESEZsSFlqVnJIOHhuK1ZBbHVyckQrSUthYVkwbjdFMC9JdC82bXBURGNyc2t3eHBYMkljcC8vMHlzUnJyTzFwZ1RHYXFsK1Ewd3h4UlMzRitVK1EzbDV2MGFCUGNUN0EvV2NLYWFZNHRiaTRTRXYxTnczN2h6NFQ0LzlBTFBtaVNtbW1PSzJZaEhyOXdldTdyWFYrTHRPRmJuRmFubGFUREhGRkxjVmExWDFJN1ovMTFIZ0E5ZjAraHYvZkNhbW1HS0tHNHJsNDdUcmo5NWsrOGdoZlZ3ZWxaWTdMV0xKRlZOTU1jV2R4Q29lMVUvWVAzaUlBaCs0b1ZlbVZGdWZFRk5NTWNWOXhFTWVTTHU2ejE3N2h4dGtBSStadm5VdW5qeGRUREhGbE1NdGE5S3U2WDFzZlU4MHlKSGk0VmQ5UFJRNFMwd3h4WlRES1h2RnczcGVRMDgycU1DcGwvWk5FbXYxdWJqYitLeEpVMHd4eFZYQ1NxdmI2bk9kRFdtVXBTejEycjZMb01UM2lpbW1tSEk0NUxFRDEvVCtzYkVYTkVrem1IWnQzM2VzMWRhSHhCUlRUR2s3QVpDTXVQZXBwbDVtRVFjbGR0cldlNkR1VThRVVUweHhyVkI1cit2enVDTXZkVmlCS1RIVHR0NXE4WkRYeFJSVFRIR05XSzMzcEYzYjV5VkhYOTRzQmFaMGZILzdvR3JQNmgrdElvbGlpaW1tT0V0U3BjcHlUZHIxdlg1cHpwdWFUYldmY24zUGRWWVA2d2pjYmRZWG1XS0tLUTJJUlJZaVZYUmljNVZYZTJzckpQYUR6ZmVKeGVOVzNJMFhVMHd4cFZuQ2t1VnFhL1dVZzlmMmVVNWFLSzFTWUVyc1IxdTZTSlU4TGhiTGxXS0tLYVk0SkZhTDVYdVA2cW83a0twTmtsWklxeFhZa0E3VHQzWHpzRlkvYWlxeUthWTBKcGFmcGFyNnhiVHIrL3dwVGhDbktiQWh0TWlXYXN2REFMa204RTh4eFpSL3VkQlZ0a3JWTkEveG1IN2dtdDdieEluaWRBVzJsWTRmYkRxMVdqd25XeTB5Qm45MkVWTk0rWmVJeFNKWjFXS2RhYW1TcnlKRHE1ZHN1dkRvY25HQnVGU0JiU1hoZzUwOXJCN1Z2YTFpUFI2M2diRFFvUWdFRXNSaURSS3JjSHk4YzRiUG1tSksyMGlsWmxtdGxSYUxKZE5xbFozNGQxZDFkZVZHaTZkbFdXUDF5ODZVL3djOWlLNjE3SlJQdXdBQUFBQkpSVTVFcmtKZ2dnPT1cIlxyXG4gICAgICAgID48L2ltYWdlPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvNDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTG9nbzUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgd2lkdGg9XCI2MVwiXHJcbiAgICAgIGhlaWdodD1cIjYzXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDYxIDYzXCJcclxuICAgID5cclxuICAgICAgPHBhdGggZmlsbD1cInVybCgjcGF0dGVybjApXCIgZD1cIk0wLjg0IDBINjAuODRWNjIuMjIySDAuODR6XCI+PC9wYXRoPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8cGF0dGVyblxyXG4gICAgICAgICAgaWQ9XCJwYXR0ZXJuMFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjFcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMVwiXHJcbiAgICAgICAgICBwYXR0ZXJuQ29udGVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx1c2VcclxuICAgICAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KC4wMDQzMiAwIDAgLjAwNDE3IC0uMDE5IDApXCJcclxuICAgICAgICAgICAgeGxpbmtIcmVmPVwiI2ltYWdlMF8xN180OTk5OFwiXHJcbiAgICAgICAgICA+PC91c2U+XHJcbiAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgIDxpbWFnZVxyXG4gICAgICAgICAgaWQ9XCJpbWFnZTBfMTdfNDk5OThcIlxyXG4gICAgICAgICAgd2lkdGg9XCIyNDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMjQwXCJcclxuICAgICAgICAgIHhsaW5rSHJlZj1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUEFBQUFEd0NBWUFBQUErVmVtU0FBQUFDWEJJV1hNQUFCWWxBQUFXSlFGSlVpVHdBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQURvdVNVUkJWSGdCN1YwSGZCdmwyWDlPa2lYdlBXVEhkcHdRSjg3ZW14QklVd2loRGF0QXd5YWswRUxaRkFvRkVrWUxwZXpWRDBoQ3lpZ2o3QlJDQ0NzSmhCRElYazRjSjk1N3kwT1NMZDMzUEs4a2ExaXlaY2UyZEhmdlB6L2xwTk5aMHQyOS8vZlp6eXZBSUNIcHRZTjZyUmd5elNMQ2FBQnhEQWhpRm9oQ09qN1hDQ0JvUkVIVUFBZUhsQ0NDRWY5dkFnSHFjQ3hYQ0Nycno2SlYySzNXaVB0S3J4cGRDNE1BQVFZUSt0Y09ueTZBK2x5d1doZUpBRG5Bd2FFUW9GRGFpMk4raTZDQ2RlWFhqTm9LQTRSK0ovQ3dWL2VudEttMU53aWkrR2M4Z1hqZzRPQW9RS2E5aDFybnZ5dXVHVjBBL1loK0kvQ1ExVWNtaWlMY1poWEVxNENEZzhNSGhMV2dzajdZWDBRK2FRS24vUHRZTXVnc0R3c2lMRWVqUUFVY0hCdzlRaENFVjBUQit1akpFdm1rQ0t4ZmUrUkd3UUtQaUNER0FnY0hSMjlSb0JMaDRiTGxPV3VnaitnVGdkTlhIWWh2VjZuZkVVVGgxOERCd1hGeUVJVC9nR0JkMlJkcDNHc0NwNjNKbTJLMVdqN0V2eHdLSEJ3Yy9ZVUN0RDhYbFYyYmM2UTNmOVFybTFXL0p2ZFBWdEd5bFpPWGc2UGZrV1VGT0t4ZmxYdFJiLzdJYndLbnJEbHlEd2F1WDhLbjRjREJ3VEVRRUNqY2xQcmEwVC82K3dkK0VWaS85dWhkR05mOUIzQndjQXc0Ukt2MTM2bXJjMi8xNTlnZWJXRDltaU5YZ1NpdUJRNE9qa0dGU2hRdksxcysrci9kSGRNdGdWUFhIcDRxV29SZmdJT0RJeEJvMUtqRWVTWFhqTjd2NndDZktyVCt0Y05aU043M2dZT0RJMUNJNmJBS24yYTlkc0pubm9WUEFndFc0UW5jWkFFSEIwY2drV1cwbXQvMDlhWlhBcWVzUG55VENIQWhjSEJ3QkFIRWM5Slc1MTdyN1owdU5qQ3B6bUFSTnVNN21jREJ3UkVVd1BoU1EwaW9hWGpSWlJQcVhmZDNsY0JXMVFwT1hnNk80QUxWRzdTYlF4L3czTzhtZ1ROWEh4bHVCakVmT0RnNGdoRkdFRHFtVml3YmQ4aXh3MDBDbXdIdUJ3NE9qbUJGS0lEbVR0Y2RuUktZMmI1VzRRUndjSEFFTXpvMFlrUkt5ZktNT25yUktZRkZxK3BlNE9EZ0NIWm9Pb1RtbXgwdk9na3NnSGdtY0hCd1NBRENkWTVuak1EVVBSSTN2RVNRZzBNYVNOV3ZPVHlmbmpBQ2k2SnFLWEJ3Y0VnR29oWE9wUzBqc0dDRlh3RUhCNGRrSUFpcWVXeWI5bkorcGxYVFhnZ2NIQnlTZ3FwRFNOS0k2dll4SUNOY25CME5sMlRIUUxEaXdzK0xlendtUWFzQ2pTb3dIWG9yalIwOUh2TzNxVWt3SlNVVXBBaC9ycjlVSUtyRmFScFJnT2tnSTJSRWhzQWN2ZlM2L3N6Umg4RUZwOFRBYVVQQzJUa0VDcTN0VmpoVVo0TGNlaE9zUDlFRTM1Y2J3UXFpMnpIakVuU1N2TVp5ZzFXdzVtZ0VnQ2tpY0FRS3M1RzREODVJaHZHSm9WQmthSWNOQlFhdzRQNzZWZ3VrUldvZ3Q4NE1PZkZhdGgyTHhEbFlhK3AyZTZLcEhZWkZoOERlR2lOTXhNL3M2ZmdmeTF2ZGZrOUN1SVlSZEc1cUJGeWVFd3ZGemUydytrQTl2SHlvSGppQ0N3S29KNnBRQXZPbTdBSENMUk1UNE1QRm1kRFNZV1dxM2N4MXgySEZqbXI0VFZZVVZKbzZZT25JR01ock1uZHVyeGdkQ3dmcmpXemIxRzVoMnhwVWVXbWIxMlJpMjRyV2RyYk5yVGU3N2FjdG1SWWxTTWp6aGtlQlVSVGg5SXdJK0FnbkROZkhLaVRxclZzcllNNEh4K0hVOTQvRE5pVDR5bG5Kc09uY29SQ3Q1UXR2QkJPUXUwTlVlQitIQU1lZ2c5VGtQNCtMaCtmMjFNTDVTTjV0RlU1SitFVmhNeEt0QXo0NGJtQVMwTEY5OTFnamxMVlkyUFl3RXBTMlJ4dHMyMkk4bnJZa3hXbmJaTGJZdDliTzdmdkhtNkFXOTM5OHdnQkZ6V2I0b3FpNTI5K1lqOUtjeUh6V0o0V1FHYVdGUDR5TkE0N2dnU0NLR1NwVW9jT0FZOUN3ZHNFUTluaHhuaDdDUTFUdzcvMTFidS9mTVRtQkVTVWQxZWNMVVZJUzBSM2JTMGJFUUZxRW1tMUh4Mm5aZG1Tc2JadUJ4OU0yTThwMlhMUldiZCtxT3JlL0d4Nk5EakkxbkRjc0NqSWprWkJqNHVDalJSazkydHo3YW8zd0g1VE0xNDJOaHc4V1o4Q1VaRDVrZ2dTaGduNVZyZ0dWNlVpUUFXZ2dybG1ZQnVQaWc5ZEQ2aXBwbTAxV3VPcnIwczdYdnpzbEdwNmZud3F2SEt5SEozZlhzUE00VUdmczNNNUlESU85U0thSkNhRnd3bUNHWVNnVmp6V2FZVVNNMXUwNDJ1N0I0MGJHNmR6Mmo0N1ZRUmxLOG1GSThzbzJDOXJLV25oMGJncTBveHBHS2p4SmVWOVlrQllCUzBaRXNlZG5wa2RBWEtnMDEyT2Y4ZDd4YnM5VFlpZ1E5S3R6MjRDVktVa2JSTjVQenNtRTFJamdIbGlwYTN5dm5MSGo0dUh3VTBVYjNMU2wzRzAvbmR1amFJZGEvUEEyaHFzRmlBOVRRME83dFV2SVpNV01KRmlXRXdmVmJSMXdFRDNOQkMwZWZ6b1M4Z1JPQktkL1ZBQm1hODlmOHZhWjZleHZwQWdpYjArVGxZUlFJYzFwMUFNMHdFbTFhME5uMEp1NURjeDdLaldjbVJuSnp1UEtmYVZkM2lPVityRmROU2hGVFJDS1JrOFNlb29ub3hST0RGZERPa3JUK0ZBMXhJV29JUVpWOGdKMFl1M0hFSkNEb0s3WVVOQU0rNnFNTUFhOXpLUGpkZENPSVYrVGFJVTkxU1NsZFhEamhIaDRHbTF5T1FPVkRmamc3QXhZK0VrQjh3dElIYklnOEczb3pXVzJJczZzczFPbGFaK05UN0NwdDdrTlhZbFhpTTZraDJZbXM3elhncFoycUVYMXR4aWRWZFVZYXRwVTNBSjE2SWx1NmZBdU9UY3VHWXJxcmhyZXoydUN4MUV0SjVDMzJZRndEQ1JxY0ZLNGJWSUMvSEZjVndKN3M0L1ZxbjViRjM3UWNlMVhwYkRwL0N5NERzLzFpVjAxSUhWSW5zRHBPTUNXanJKbFhoVmhxRVdxQkc1SC9kamk0NzNWaCt2Wm95K1lrR2l6am1iU2RkbmQ5ZjFXUm53Uk5oVzFNQUpubzExTUlhc3ArSGNQNHFReExVVmVEcXNEcUoyUTVDVUgzaXNINmlRdmhTVlBZRW82Y0tDa3RRTktEQjNNVVVTWlFtVG5CSU90NDNDcWtTUEpGd3BReXBLMG00NGUzcCtyMnFDL1FOOFpnNTduRXczZFg0ZjhScHZrSDRGZWJZb2JMOGNCL2xObEsxeURFc3R6a0YrSXpyYXNHSnRrcHV0OEZFbFJZN0pBTUlKK0gxMEQxM09nRUJyZGt6UFFNZmVKaXpZaVJVaWV3SE5UYkNsOUZTMjJIRjZLZWRLamZOa29lQlc5dVJSVERUU2VPVTBQdFRpNVhQZGR1ZGYzaWJqM29ZT0pFTkxQNnVtdlAvYXZUaVV4ekRZVTFpd2N3Z2I3UXp1cVlUV0dqc2hEN1FtSEp6MGNmMnYrMVNQWmRkNWMxZ3JCQmdxdHpWbWNDU3UyVjd0NS95a0xqUWljamQ1N3FVUHlCSjV1Vi9IS1dycEtHTEliNlJFTVdIKzh5ZXYrZExzRExrSVQyQ3luT2FtMmlmQi9Kd3l3NHFkcUtHdjFYM1A1MTZsNmtCSU8xcUFtbEIzRE10R2UyQ3R0cDUya0NSeUZYdGVKU1RiMWxEeXpPUmpuZERpQnlGa1JUSEJvQ0s0ZzhuNkk1Q1ZjOVdVcHJGOFN1SGJjVSt5MmNnVnFDdjZTdDEwTXZ1dnNEZmtOWnJmWHhhMjJlekVlcFRDRjNWb3QwcTBHa0RTQjV3OXhWc1NRR3ZydEJWbTJnb0JDQTB2U1AxQm5odEtXNEl6M3hXRFk1MTJNcHhMSWUyN3FDT3dnbW1BdnBsaU9JYXRtakNHL3NLL1dwMmZiQVZLdlB5OGFQQk1sUkJBZ1RvZmhNaTNHdWtNMUVJcmtJdys3VG0zenBDZGgvSnM4NUhFNHNVZmlma0lhSG5mUE5BM29VTVBSNFhzSm9lcE9MN29XUGZDVDBlZndRM253cWYvK1F0SUVucHZxSlBDL2R0YkE5c28yZExCRXdlS3NLTGdlUGFxRU9neTU1S0tEcHFpeEhRclFlVkdDZzVTa0RJYU1vUlFkWENXdFBkZS85aFh4V2hXSVBqandBdHJGc1RnWWYvTy9JdVpvUzdabk5zWGk0S01CT0pnZ0o5ZHd0QWRKbW1hakUrdDJEQ2xkT0NJYW5zQ3cwNC9sYlgxMkJFWWdzV0owR29oRndrVnBpVGkyODR2UzJjaEZHbFFrWGlNaUZPMG5Vc2JxVkJCS3grREJzV0gyNDVCOHNYWkNkZ2VEeVFxMXBnNm94bnRPazBzTmFSTVlZaU9KUzgvTnVJK09xVU9IMjhPemt0bjFQek16Z2hNNFVKZy94SmtOVkdnd00wZUZ3MW1SaGs0WjhxaFMwc0kwbkdVejBXczZDME1wSkttOXhURWJqQll3ZE5nOGxTUU4yMUFLR2ExV3BpWjZBemx3S0l1SjhwbGRQNDhHVzVSVzVWZXM5SHdrTDZWRUVtYmJiZm5Wdnc1Y2Jja1JWRFZKb241NDNBQjNUa21FSitib0lRVFBzUm9IZndIK1RzOXJRZGNnRE04MzNGNmxKT0MvT0h3ZTRVZlZrc1VxZGhLTm50Zmg5VGZpdGcwZGFJNEpvNjNhQ3VWb2VoRGg4SGFBR2U5UG5SbVA2M0FlYjhIOWxGbldMdlpPZzdscFFqd2o4R21wTklhcVFhcVFMSUhUSWtKWUxxOEQ1YTN1WVl3eXZLbjAyTUptVjJjTWxkUXdmWVFHOUVod0dweXhXaFdURGpUWng3cW9WM1FjcVdpa25xa0ZkekphY0xDMDQrQWhvaHRkQmc2Um5qeTROTmpvR01wcmZtRnZIWHhiMnVMMjk5UTFoSnhHMiszaG9oeWNhQjZmcDRkMXg1cmduYU9ORUFpUUkyMWVXamprWXd5WUNIVExsbkw0KzQ0cUdKOFFCbVBpdFhBclNtVXE4cWNZc2NWT0poUGFqbzVKajBqWWpPZHVzTFBjWXBkMjlENjlaekJiTzQrbDZ4VG9zTk5oUEJmS0ZjK0oxN0ZDRDZuR2d5VkxZQ3FFZDRXeHc3OGJRRFAxWU1XSGljQUhNUWJwR3NJZ3VDYWJrRWJ3eHBrWkdLYzF3KzFiSzZCRERJd3R2QlhEUU9lZzZiRTJ0NkZ6WHhWS3VhOUxtNEhxTGU2ZW1nai9PZElBNytVMWdSeFFiM1JPSUxNd0ZQbGxjZUREalgyQlpDdTBaM3FVdEpXMkRKd3RPMUJ3NUhDTCtHL1pOMlVCSXk5aEV3NWdTbnJ3VnJSUG5sclNUQ3BiZ2pOWm95K2crbWtINXFaSk45dE1zZ1RPam5PcXo5VEhxYkpOV2dUV29GciszaUtuRjdvM2NkZUJ3RHFVck5SSDc0elVycjJ1UnNmWlFrd21pL1NUL3gwb01qaERTMk5pZFNCVlNGYUZudVhTVkMxWVEwWGRnY29leldoREx2MnloTDBPWkNNN0I4akd2VGc3Qm5iVnVoZFVKSVhiUE1CVkVwc2t1ME9kaXcwdTVRWUZraVJ3V3JqN3p5Yi9ReVI2UTVzN2drZENSR2g2OWtLVEY1dEsyNElKT2VqWTJaSHB2Yi9Ea21IUjhJekVNNWNjR09VaWRTbVNrSXdPekNxajlFd0VTUkxZTTBRekZqMkozMXlRQlMvc3FZV3Q2SFUrWVFpc1JNNUVhZnJhd2pUbTJTeng4bHMrelRmQTRWb1RTQWxrSDVNamk5cnhYSUh4WWlrV3hKTjlUMldiTjQ1TGdETXkzQnNTNkZncXEvUUlMTW1PSEtSdVV2Y0tYNkRVdVgwMWJYQ296b3poQWlNamRLR2hnNFUyQmhwWGpJeGxoUW1OcUtKZDgzVVo4MExMQlJQaVEyRVZUa3dwR0lKN2JsOHRQTGs3ZUtVeGFVQlpPRTRtb1hvOEV2MGw0eE5DbWVOVDVTTStQLzYveDZCR2VoSzRRckl0ZFhaZmZBcm9JM3VuUUZEb2dOcXdVaVlXRmNOVElnQWxLVGlTQUNnK1NYWnBHejQ2dW1rdFEvRmZNenAwS0lYV2lQODUvbjdSMENqV1BXTjNwUkgrdGJ1R0ZkcFRlS3ZWQ2l6NXdOaUIzMm1CWGljZEJCdnVucExJV3VLU0ZMNXNZd2tjYXpMRFlNR1IzWldnVTdGT0pJa1l3STlFRlRnMUlvU05oK0ZSV2hnYUZRTEo0ZjZQRFVvaHBaYStFb1IwQ1h6SktXaVBZWnhWRG1pMVR4eXVrd0hCaE9SdmF4ZkI0T0g5YmNmSmdIcEowNlJBN1dOYjhaaG1QT1prMnVGUTRncmxHR3MxYWlRSkVnVkpFWVlQd2VWOVVrRzE5cnhqYXVWejUrUkVNT0Z2cDA0ZllTN3BuM1JzR0I0WHFWT3pGa0NoS0EzRFVVWFZ1dmdGSEZsY09vM2daaExSMzVMMDFLcHQ3dzBHS0dubHZXT1NqRzlMdHlmV3UvbE5rQkd0WlcxWXBRNXlvb1QzZ3hONmI1VVJ2aWxyOGZyZXBkblJjQ3NTamtEcG5vNDAwSk9GRGovai9obkJVYkxaRjVBWklGSHlNa2krS3lYMVBLWitUa09qUXpvN1ExQzcxV0R2VGprUThOWnhrYVRtSFpNUzRicHh5bWpLN3BwWDdmcWNXdmpTMktBaWZxb2gvN215RFI3ZlZRUGZTN2lRQWFTc1FudUNuRnFyRDlUQnk0ZWNxWURqMFRzZGcyb2MyVVNVL3p3VTdhUWhTUFJFM0VlMXVPRWhrczFqOFltYU5ndDhXZFFNaDlDSmx4bXJoZDlueHdiOWtpaGtRdFRhNDdMa2gyaEU3ejJaRS9Yb1EyaTBWdytSYVVFa2JMRG5MQnZRZEtEbjFFdXNGa2xLL2dacXBkc1RTR09qSldhb1A3UU1JSSsyc3I2dzM5NWE5WHZ2bld5WXZaV0N6Zzd5cWlhSHE5bHFCcXlhUnFmcWZEOEdYNGRwWFY2SDJGNUhvbzFHdHAycjdVZXFxY091Q3hUSXFYTXBOZmtiTlhCTHJMcFdiaEhocUVObVk3dVZrY3hzcnhTaTV3NHlkdGlMSDhyUllWalZXWUhVdHlvaURuZklsc0NYaklobTFUTDFSdWVBcWNWWnVoSUhrY0ZlcUU3N1MxcmEyV09nUUtTUFpFUzMxY002UUU0YzBnQzBhcUZMWE50bW85cGlrMUYyaHc0ZHAvVXlNWVNwYkU0bFI5V1VOcVRueVlPdUJUbklXT1dVdlp5UEtvbElvcmxXRURuVVQwSWpQbThLb2tRWmZ4Q0hFekdsZ1hvV2s4Z0pzaVh3TTZmMTdLRnV3a0haYUIrc0ZMZHRzYmRXb1pwVVV0dW9EWTdKTGlGczZwdE56U09Wajk0WE96L0h5ajZIL1cwN2ZxYlo2VTJtYlgwN1BlU1RSeHhNb0VtTC9CMFVWcUlsWnZUb0RaeWNITW82akZDK3dMdDVqWnpBY2tVMHhoR2pvZWRPRDMxQmE3dTdoR3ZCNXlUQkhLU25TYUlGajJrVG5aTkdHNFdGY0FJZ2FlZ2FpNmJQb25oeWkwdnZKb3ZWVmtKSjB0SjFiaUFWMW1RL1ZpcnFLYlc2aVFxeGFTa0UwanFvUnR1MVpRNDlKd2NVdGNvaHJZTklxMGVmUml3ZUY2WGdaVThWVGVDQmhDMDBGTmlCUlJNSG1SSGVZc3lPOThrSlJNMEp6UGIzMi91Ujg2VE5rd25CMUg4dmNWMHlGWWljWVRKMEpnNFdPSUZsRExLdGJiWTJjTWdVZk9yajRKQXdPSUU1T0NRTVRtQU9EZ21ERTVpRFE4TGdCT2Jna0RBNGdUazRKQXhPWUE0T0NZTVRtSU5Ed3VBRTV1Q1FNRGlCT1Rna0RFNWdEZzRKZytkQ0R3S29LcW5STEo5MWhmeEJNS3cwb1FSd0FnOHdhSDNiY3o4cmttUWo5SlBCMlJtUnNDYUFheDByQlZ5RkhtRDhiVnVsNHNoTDJGRGN6SnJHY1F3c09JRUhFTlN5ZElORTE1M3REMUNmNm8veUFyTmd1VkxBQ1R4QWVEdTNFWjdZelNYUVgzK3FndndHYWEwREpTVndBZzhBampXWTRmWnRGY0JoYytBdC9iSVVHa3k4SjloQWdCTzRuMEgyN3FYMk5YODViR0RYNUl0aTFscVdvMy9CQ2R5UHNGcEYrUDJHWWtVNnJYckM3bG9qUExxVG14VDlEZGtTT0JBa1dybWpHbzRiT0hsOTRmOE8xc01xZkF3bXJETHZHeTliQXRNYVFRZHJCMjl0M3VmUTQvcnFvY0VkbkZMRVB6RzBkR0FRNzh1aE9uazcwR1JGNE94WVhlZHprc0FYb0RxNzdrZ0RERFMrS0d5R1Izbk0weTgwdDF2aDBvMGxnNkloa1VtenNjZzlqRWNaWWsxbStkamlzaUh3R2xUTkxzdUpoU21Kem5YYTZFYmQvRVBsZ0s0a1R3UHh6cTNjNDl3YlZCc3RjTzFYWlRDUVlDczFldmdqNWlTSHNZWE4vbnQ0NENmMXdZSnNDRXoyRlMwWitleHBxYXpUdnlzb0h2dDN0RTh0L1d3UWxUWjNNRlc5Vm1GNXp2MkIvWFZHV0lreDRvSEFhalJsenZqd0JHeXZiSFBiLzh6cHFiQ3JvZzNXSE9FRURrcmMrMk1sREkvUndyVmpZcnU4OThLQk9qajcweUtXbTl3Zm9FVU83djJ4Z251Y1R3SXY0NlQ3enRIK1cxeWJhVnlieStHKzdWWFEwdUUrV2Q4ek5SRVNkR3I0NDVaeWtCTmtSZUFENkxCNEFtM1J1NmNrZWEyR29WbS92d29MbmtTbjFaZkZMY0J4Y3Jqcmh3bzRYSFB5VHEwRCtCa0xQeTZBZGZsZEp3UWFDemVNajRlWER0VExic0tWblJmNkZaelZhUjNhWitmcHZiNVBOL0MzNjR0T3loUDZLbjdIa3p4TnNsOUE2ekZkK1hVWjFMYjFYVE42SFczYVJldDlUOHh2TGt4blkwS085MHgyQkc3cHNPSXMzQWdqVVpYMmhVb2NMT1RnK0RTLzkrcmI3a29qUERCQXRwdFNRZXN6MzdPdEVub0w4bWpmamlyeDNXZzZXYnBaaVhGb3RBYmVrSkhqeWhXS3pjUWllK2w2dEpkNjQ2R21HZjc2elFQclBWVXExbU1vN3JHZi9aZVFSK3BOc1BDakFuajdXUC9aMEZLRTRsTXB5VVB0RDRscCtjMkxQdWRwa2dPSlovZlh3dmRsUFMvRy9RbVNkZ242TWdyNXZaQXZnU08wS3JncUo4YXZZNG5FZjlsYXlSYlM5b1UvZlZmR0I4d2c0UGJ2Zlh2MmFVRnpDajJSSjluZlpJeGxvMk5CcDVHdm5KTHRtWVhpVFh0c2poNVdURStDQ0xYUTQvRnY1alhBN3plV1FGMWIxNWd1U2VqUEM1VmJtSCt5Q01XNGZKek92NkZHNUwzbis2NzJjRFU2b1piaS9Yblp6MXpxYUp6QS96VTdCZjZPRHpsRDlpcjBIekY4OE8yRncveHFzdlp6VlJ1cVpvVnVzZUxuOTlieHd2eVR3TlRFVUhqaVZEMWNqWkx3MWdueG9CRjZua3kvTG11Qno0NGJPbDhUcVJkaEROOHpNY01YeHNUcDRQUGZEb1hMUjhlQzNLR0lwblpFM2gwWEQ0ZjdmNnlDVlllN244SHptOXBackhpMlBod0ttc3l3bzhxL1FjUGhIVXV6WTZET1pJRVJNVHI0cHJnWnpoNGFBZXNMZXRabXFDRkNyYmtEUkZHQTUvZlZRVm1yZitiTG44YkZ3ZjNUazhHUGVVSVdVRlJYeW9kbko4UGtKQjA4dUtNR3FveSs0NDQwNHhjZjQ3MmMrZ094V2pXMDRyVTJXMFZtdDJwVS9qR0xqcjE3bS8vaHV0UndEVHcrSndVV1prYUNraUJiRmRxQXMvNTZMM0hlQzBiRXdQK1daTUxFZUIxd0REdzJsN2N3KzNkL3JSRXVIQllOUC9qaFplNHQ1dWpENEROVW1iMlJkOE1KQTVoazNBbEV0aEtZd2o3WFlaejNUbFNKNzVpYzRQWWVxZFJmbkpmbGR3aXBPOXcxS1FGK096emFiVjhiZXJNTkZpdExFWHo1VUlPYlYzWEYxRVNZbFJyZStmcnMveFYxK2N6SkNUcjRoNHZ6WmRXaGV2Z0FiY0svVFV1Q1JYNUttTmZRVkZqamtiendKRXFvR1hyYmQrK3JOc0tOVzMzbkJjOU1EbU8ycXlmcVRSMHNnZUpqSk1aN2VlNFQ1TUtNQ0hRYUpuZStwdFpDYnh4dGhPK1F0REVvaWQvS2JRUlRQeGVVL0JYdjdTMlRFNzIrOXhUZTIzL2hQUzY0TWh2a0N0bXIwRVJTZzlrQ0syY21kM252VHJ6eDgxUEM0Y2J2KzE2VWtJQ3EyNGhZNzFsZmM1QXM1d3lMZ3R1MlZNSjM1YmE4YVNxMm1JVGs2QTVoSVNxM1l4S1AyNGlTRktiMitWMmVpQXRWdTcybVNldlNIS2RUaHo3bnZoMVZTRWp2bFZScUZmajRMdHUrTTlJajRVOWo0K0hjejRzNlF6b0pvZDZ2QlROSm9IOURjT2w0UGkrY2xnb3o5ZDZ2NVgzbzcxaDlXUDRORmhTUnlFR2hoNnUvS2tVaWQxV2xwcWVGdzhmblpNQ1NyQ2dZQ09nalF1RGxYNldoR3FtR1FPSVBZK0s2N0x0dTdNbDVhWFBRREhsNnJoNEdHeGVqeHZNMWFsRGV5RnVEWWNBbG54WXFncndFeFRpeHFEUEQyWjhXd051TE1ycUVsTktJWkF2U1lNSytXbmprbDc2SGpKN2FWUVB2SEd0aTZ1SkZJNkxndW5IeGJIODBTeXFKaFdmMm5weTZUam5ZcmlyL0I0dWQ1MEx2ZmVFU3EvWmNpMmxSVmxmVmU5bVllSGhwZnowWTJydTNFYmRWdE1LdFcyeE5DK2pjbG8ySmhhVWpiVWt5aTFIRG1MeFBCN3RyQjc1MVRTVEc5djh5SlJHdmE1elg5MWtSdjhLeTVSU1ZTa2toSXJyQlIzMzBTYnB4UWdKVGUvdUtKaVFORFo0RGRVWllzYVBhTFg0OFA2M3ZuK3Y4Zkt0TkhiVS9YTkZvLzI3SHd6VlRpYnBRT0loT0V1cUF2WHlQSnBiZlpQaG5VenMrbDg2TnNxVzJ1amlqSmlXRndXQmdRcUxPSjNtcHVtekpldVd0UWFXNFhHaTZ3ZWRnbkhmdHdZR3ZUbWwwYVdhdURtQmc4dktSenBUU3IwdWFNUTdyVEpLNEtLZHZhdlJQbFU0Q3A0UUhWcEY3TjY4Unp2K3NHQ3JhK3FkWmc1U2d5R0lHOHFMZTg5UEE5c29pSjR1cnREaHVNRU1nTUJxZFN0TlNuQktTT21CODZGTEJNeHZ0eUw1b0hWTVNuTDNIOXRZTVhwZEpUenk3cHhadTNWb0J6UXB0R3EvbzVVVkp4VzFHMVhPRkZ3OTFYN0FFblN1akUwTmhTSmdHNXFaRnVHVUR2WjhYbUxLMzY4ZkhkejRuN1dPN1hYSnVSN3QybHAyNFY0NktZWGF1TDVEZDYxREJJelVDWElsU2U0RTluTldNWHV6ZEFTTHc3UmdtZkR0ZjJlV0VpaUR3Zkl5NzdzTkJWdS9GV1VQTjhKYU5qZXVYQmFtbllPaG5pcGNRRWZXTS9yNmkveE1ZZWtJQ0V1LzhZVTd2K29kSG5kbGxWSnpoSVBDaW9aSE1IdlpWNFRNV3ZjMlVpdW9ORk9ldWFCMTgxWlVtSTEva3BYUEpqdGJDemdCcUJvTUZSYWpRbEdDdzhmd3NPQ3N6QWdZVFJJaVZQMVc3OVl6dTZFTWVRMSsxdzdPUW1GcVhVcnBiMElOYnZtd1Vlenprb25WUXVkMGZ4c1pCYjBDbGwrVDVEclpDajFOeHN2NEtRMHluWnd6dXZRNFVGS05DazRSZHV6Q2R0Vlo1Zm4vZGdIZ3JYOCt0aDArTzIwSTVkVVlMRkRXYm9kV0RzUVlQTm82TDA4R0JlbmV2ZUVxWSsyMnBNL1d0YmUzTkV4UDhQdmFLa2JId05Qb0V2TTBWaDlEem5CNnBaWktOUU5lT0dzZ0ZVNFAwZUl5enI1eVJEQmRsUjRPU29EZ24xaFdqWTFuODlJTGgvWCtqanplWW1TMUpqOXdHVXhmeUV2STh5THBrV05jRWtuTThZcmFWYmIwbjhPa1l0aG9hN2I5WmtCS2hZUkxiR3hxUXFBKzU5QUdqeVpCQ1U4R0N4UmdLMjN4Qmx1TElTMUNrRTRzRzRJdW5wOEk4SE9SUDdSazRUN1EzN0s1eEovQ2ZKc1NqcEc2SHowNFlJQktsQ0tteTV3eHpEa1JxSHIrdEQvYnowcEh1Qkx0OFk0bGJXTXVCZjg5UGhmUVlHOUdYajRtRERUNGFGN3lGb1pyZkRvK0MrVU5zcWltbG9WTGlTQ0RqcnFRUlBIZHFLcHlWcGF3S0pGY28yZ3Y5ZXh6a2M1SEU1R1VkTERBSlhkNEtjK3dGRFZSZTk2OVQ5ZXpoRGEvMVljRTBtcUNXdUdnWVh4VTF3OWVsM250WXYzTzhrWkdSUUw5cFhDeXE5QTNlRTEzKytGMFpiTHR3R01TRmFoaDVucG1uWjkwOUF3RzZaenN1R2c0eEFVNVJEVFFVMzlTT0JydkR0aHNzM0xMRnYrS0o3NHBiNE1VRGRkQmJYTzZoM3E3dHBxVXE5YmgydFdVdkd1VmJEVzFBQ1g3bkQwNVZtZ2kvZkV6dm5GLzlCYnBuU2ljdmdTL3dIUUJRSDJSSzZYem5xUGVtQVVTb3gzZld3TkpOSmRCYmhHRHcrWHdYVzVBbUNsL1MxL0ZkRzA0NHd6R1hvek9ydXdudDgwSUR2SjNybkJBb043ay9RbkFjZllPaVZlaitBTm11NUx3aWJDdjN2LzBPRWV1Mjd5dmcwVitxWVRUR1diTmp0R0MwaUhDNHpnUjVUV2EvUEx4UDdhcEZWZEpHTm1vNFQ0alhxV0QxQWFmYS9Zc2ZMWUZlM0Y4UGgrdWRtV0lwcUNMbjR6bXQzRzZUdHBVZUtZci93TW5sU0lQemVQcnRkRDY3S3RzNi80YlF5QmQ5RzNCd0FwOGt0cUE5UzQrK29nckRUVlZscmJDNUQ1MHEzdkhTOXFjU1ArL2xYdHJOTkdIa0hlcWE2dW5yYzJwTTNyL0QxK2R3REJ3VW9VS3ZQZHpJRzdJckNOUlZkR09oTWhhZVV3U0I4dzFtWm5NV0dUaUo1UTZLczFOWFVTcDdWQUlVNDhSaTJVTWZGYmdWdlhQSUM5VEE3amVmS2FzbVdGRmVhRXBqdk9iclVuaHBYKzlETXh6QkRXcGd0K3pic3FCSzd4d01LTktKOVRCNmZxbCs5SzRwaWNBaGJkQjZTWC8vdWFiSGh2MXloV0xqd0UvdndSbDdVeW5VdHZGUWgxUkIwdmJLVFdXS0pTOUJFUVRXK2xnTllFTnhNK3lzSFB3NlhZNyt3WVpDQTJ3dFY0YTMyUmNVUWVESDVxVHdiQ0VGZ2U3MXd6T1NRQWxRQklHcHJNNjFCU3VIZkRFeVJnc2ZMczZFVElYY2E4WFl3RVJlSXZHd0tFNWl1V0pLWWlpcy8rMVFTSTlVam05V1VVNHNJakV0Z25WR21qTGFyU2dKNTJSR3NxYjlnMTFaRm1nb3pndE5hd2I5NTlkRDRQb0FsY0Z4OUQrbzcvVXJDOUlVUjE2Q0l1UEFJV29CVnM1S2hrZ2RyNmFVT202ZUVBLzNURk9HdzhvYkZGMk5SSjBvbEphNUl5ZWNQVFJLa1ZMWEZZbzQrOFp1dWpvcWZRQklHZDNkdTVaMlpVek1paGk5OS81WXhjc0pGWVJqRFdaWThYTTFLQUdLSURDdEhLQzBaU2VWaW9LbWRyaG9RekZVRzVXUklxdW9ja0pPWW5tajJOQU92OXVnckZVS0ZXVUFjaExMRit6ZUlubExXL2o2d0xJR0o3SDhvT1I3cWtnWExDZXhmS0QwZTZuWUdJcmp4dGUwS205VmQ3bUFUOFFLSWJDdmVDSHJaVnpsZnk5bmp1QUNMVkdqZEMxS0VRU210WEI1S2FGeXdPdUJaWWFNS0Y0UHJCUTR5a1o1UGJETXdHN3MyWnpFY29hRHZFcTZ4OHFxQithU1dMWlFJbmtKaXF0R2N0em9ZUE5la3AwZTdWSGVXTnJVRGovUWVzSVZ2WGUwa2VPT0Zncy9OU1VNZENFcWFEQlo0SzNjUnZpc3FHdGoreXljMkM3T2pvSDVhYlkxaXltajZaV0Q5YkNyUmhxckd5aVZ2QVJGbGhQU2pmNklTQnlneGFtOVlkSFFTSzhEOEhaOHZINjRBZTc3cVFyYXJhSS9Id1hwK0Rudm5wVU93Mk8wYnZ2UFNJOWtDNGJmNjdLQzRIbkRvdUhwZVNrUXFuRk9IbE9TdytEY1U2TGhpZDAxOE9UdVdnaG1LSm04QkVXbzBCWXZsV1ZEOElhdlE1czRNVHo0NTdBclI4ZkN6UlBqL1Q3KzNxbUpYY2pyd0RWajR1RGlFYmIxZzJuUTN6ODl5WTI4cnFCNjZkbjZjQWhXS0oyOEJFVVErTzgvVjRQQlMrRSszWGlTTnNHR2JhZzJyenZXNUtiaVh6ZldQd0pUVjhielQzRXU4UDBxcXNJM2JTNkh2ZFZPZGZnU1ZKY0o4MUxESWMybEFkdy84RHJkODBPbFczTExiN01pSVZneEIzKy9OL0syZFZqaEh6dURXM1BvTHlpQ3dIdHJqZkNucjh0QTlFOEREVGpleld1RW03ZVV3eVV1S2o3WnRFTWllcFkwcVJGT1FsSzNrUWRROVg0L3Z3bWUyZXNjMERteE51bWNGZTM4dk04TG11SDUvWFd3OWtnRC9OOEI1OXBSVXhORFFXcTRhbE1wSEdrMGdSS2dHQy8wMStVdDhOQlBWU0FWUkdnRVpoZTdvdDdZYzlxbndXU0Y3MHBhMk9OL0JZYk8vUmt1eEc3dHNNMWtZV3JuaWhXMUxpVjROU2FudGhLdVZZT1VjT3ZXQ3RoYXJwelZOaFRseFBvL2RPQkVvQ1M3TThnWE5YdDhkZ3A3NkZ4czAzMm9BcmRhYk1TN2VsUk1sNzg1Z1o3anpXV3RzQXUxamFWZmxyaTlSMnIxYlpPZDUweWViVG5pa1IzVlRIdFJFaFRuaFg1eVR5MElnZ0IzVEU2QVlJWE93NmxFcXIrcjl2RG9YSDJYdjZHQlN3VDJ4SXlrVUhqanpJek9FQldGazRMZHM5d1gwRG05ZUVCNXk4WXFzaHFKd2lPckQwaGpSYnY4QmpNczNWZ0NQL1NoNklLYW5YOTBUbVluZWR0UmdsLzZSWW5zQ2dDZXhVbVo3cWtTb2RpMnN2ZnRxSUlvblJvdXpvNkdZTU1MNkhENjlMZ0JhdEVKVmVhbHc4UkxlN3RLMEQyMTdrNmI1Umg2ZW5CbU1xanNLelBTT3JvM2I2NkEzYlhla3pQVWF1OHJPRnFzd2UzNSt3QTFqOGQyS1pPOEJFWDNoYjdyaHdvWWhtR1U2YW5CRmV2TWF6TEQvbnJmWHRTSGQzWS9ZRzlIOCtBdkxqYXZGWDFTTjM1YnpqN1RFWFloS1Z6bHNqWXllWnZUd2tPZ0VwMVo4MXl1UjNscjhFcnJIUlZ0OEdkMFdpa1pzaWR3QWtyWmE4Zkd3ZU5lWm1rVFNwY3ZpbHVDanNBbmcxSFJXamZ5RWxTb1FhLys5WkRPMXdhMGcwZStkUXgydXNTR1I4WHJZTk41UThHSWFuYWFpOGY2VXhkUGRyRGh2V08rSFZZUHowaUdoMzZwOWp0N1RhcVF2UTFzeGdGNTI2UUVlR0p1aXRmM2xkelluUkpHTmhZNGM2UGpROVZ1NUNVcC9mYlJKZ2hXNkNPNnloOGRtZ3hyRnd5QjVlUGlaRTllZ3V4SHI2SERGdE84YkZRc3ZIdG1Pa1NGdUo5eWhzS1hHNzFoU3ptOHVMZXVTNUxMMTBYTnNHUjlFUVF6MGp3U1c1SndBcUwwMkxPQ09IdXN2NkVvRy9pMDlBajRHTDJ5bDZKWHQ5S2V1SkFSSkd2SnpuanZPUFFIanFEOW5Mcm1pTi9IdCtJRTk4ak9hbmh1WHkxTXhwQlRORTV3VlAxVWF3cit4dWlKT21lU0NkbjI3eXVva044QnhlbVBZOURXVy8rYnpFNW5UbXFFRmpnQW10cXRMSTY4dnJCWkV1UWxqRTdRc2EyM0xoekI3ajN2THlqU0FIUXQ3RThMbDFhcUlJY1Q4Vm8xeXpMN2NIRm1sNklHVTRjeUNLd0lGZHFFYXFKbmRoUGQ4SS94eGp2aXBCelNBNlhGZm9yYVZJeXU2eVJzc3ZEVkNXV0RrbWJ2UlFCcFFXTC9jdlFkM3NoTEtHdmppNXRKRnA2aG9XWGZsRUtyUXRhTDVRQ29RL0plODFXcDI3N1lFSG1hU3JJak1CVXBVUEY3dGNzTWZMVEJERGQ4Vnk2WmVtQ09rOE4xMzVTNTVYdVRCbmJEcEhpNFkxTHdGckQwRmJJaU1KR1gyc0JRWlVwZHV3Vm1KVHN6ckRZV044Tmp2eWczWjFZcHVQdUhTdmloMGxtVlJabHB0TndvalFrcUkvM2ptRGlRRTJSRDRGK2xoWGVTbHlwVEdsRUNQM2xxaXBzNi9keitXbmg2Z0V2cHFBamZzdzBOclJMZytqdG1wNGJCTTZmcDRkRlo3aXRHME45NkZsZFF0OHB4OGJad3lZV25STU9DSVJGZXYvZnNqRWg0OGJSVWVHeFdpdHRuVXZ1Y2FmYXVHdlQ1bmswQy9qYTE2Mis3ZktUek53eU5DR0hkTFFrM2pZOW52NXNlNCtOME1Bay8xMUdXU2Q5Sit3TUp1dmV2SDJub2ZFMXB0RzhzU29mS2xuWTJKbDdjVndjcjhKclBDZUkrWDcyRkxBaWNIS3FHUjAvVncxZEZ6WjFsWlJUTEhCNnJSYlhKUFMvNGNYei8vYnlCU3c4Y2kyU2JsT0Rzc3pWSEh3Ykx4OFhERlNPZFJmaVprVnJJUUdJMG1xeXc2ZHlzenYyM1RFaUErNmNsUWFpTFo1d0k5d2lTa203VWpKUXd5STdwbXFoQUpIb0FpZjRkeG5GSjJsREhUUWZwWitQM3A5dXp6ZWkzamJYdko4eE1Eb00vVDR5SHEzTmkzWDdiYVduT1NZSktFUjJrcDl6cGFZbGgwR3kwUUFQNkZQYlVHT0hTN0ZoR2lHV2o4VE1DYUtLOGNxQytTMG5oZGVQaTJNUlMxbUl6cHg3NXBacXRwL1QwUEwxc1VtaGxjUmFYaklpQmxGQ05XN3ZVV3FQdHB2MEJiK0lVajc1T0g1OFl2UHhlNnJmOHl2NDZ1R0c4dS8xRi9hcDJWTFpCdU1aRzFwRTQyVVJncUl2czlkTThpaXNxVUlKY1A4NjM2cmM4Snc0dS9xSVkxaDFyWkwydjNzNXJoRXRHeGtCUFdEb3FCcDVCcVhYRGVQOGE1bEh1Tk5tVzI4cmJPbTFNT3JjSFp5YXhleERJUmdHYlMxdmNYcCtLazhyTkUyM1gzR2gxT2pDcEFrMGZwb2FyUnNXQ0hDQUxBbDh4SmhiVzVidDNjV3kzZTZ5SUh2KzNJTTJ0LzFOaTJPQ0VqMmoydndnSGRpcCtYMWlJQUhOZGlFa2RGVytlRUEvMzJ6dHRFSWtzT05Bc0ZoR3VuK0JPcUJlUUpOUU8xcGZVaU1VQnVRTFY5Q2ZtNmlFblJzc2FzNmU1bktPM1VsLzZiUmNPajJZVEIzVW9XWkFXQVgwQk5jR0wxMm5neTVMbWdEWUtTSFJKeUluQ1NmRXBGM1hlTmFranY2a2QxcUVHZHVNRS85djBCak1rVCtCZnBVZXd3ZmpLUWZkMktxNnRVZW45ZTZZNVY2dExDZXYva0VJMk9rdk9HeFlGY1doM09TYVBjek1qWVV0SkMreEVWWE5qWVRQY010RXBoVGNVR3VBOGxKci95VzJBT0syYUVmMGRIRmhmNC9IakVrSmhlcEpURFc5RWFmM0c0VWEwcmFPOGZ2ZDZuTHhJU2Q2Q1V1aU5YNmZEdzZoeWY1QnYweklhVUUyZm5ScUJHb29hemtxUGhIcTdabkk2K2d4K1JIV1N0SUJOQmMxd2cwdmY2V2o4UGFUNmsxYlRFNmdrYzJ0NUM1UE9nWVNyMmJGeXByc2ZvTXFqR2VDSEp3d3NmaXdIVzFqeUJGNDhOQW9PMWhxWjZ1a0tvMGZZbHh3eGpodVdQZ0FKN3pWb2M5TjNrUHI3dHIyeDJvZ0VIYXo0dVJwZVBsUVBkLzlZQ1dxVnJkeXRFWTg5NU5KQll5d2U5L1NlV25ZY1BaN1lWUU9aZHJ2MUlCN1hhTGF3VnErVXExeHM2SnFVY3Z1MlNyVHpPdUR1cVlsczhpQXlYV1R2L2J6cVlEM0VvK1JldjJRb0hNZHI5TDZkMkZQUm5sNXAvMjMzN3FoRUtRd1FycmI5dGhDVVlIZWd4ellqU2dOR2xGNEhYSDVyYnIycEN5Rkk0cGNZQXJ0UStraDdJL3VGT0tGZjZ0SDB6Mkp4Tjg0ZHBzQ0M5TDVwSGNFRVFiODZsNW90U2EvNXJ4MmZucE1CbGExSW5tL0wzUGIvRGoyMno4OVBkZHRITjIzaHh3WHcrSndVT0hlNDkxWTZ0R1pTb0tVSmgzZVFWdkRCNGt5djcxRlR2My91cklGUGZ0TTFML3IzWDVUZzVPZHVJNytBSG5zNjd0elBnN3Rrc2dkVVNGNENaMFZwSWJlaGEvdVo2cmF1RW9GdTJGOVJzaVJKWURrVmp0NGhGdFgrdjVEVzRFVzc4bGJZWDlIYURxa3lTS1dWL0JrUUdVdTlxRzlHSDlVbzVBeHFNdk8wU3JuaHJLRytpL2pOWGdvYnFsRnI4OGZHRDNaSVdnTEgyQ3VNaXIxMGJxenVKcGxkeVcxMGxBaHZ4U3hWcUtGcDBkWVBrWGcxbXFSSGNuU296WnZzTGNlNXpoaFlwd3BIOEtEQ2l6bmw2TWdTcjVOMmtZT2tDYXdXYkxOblcwZFhhZHZBcTQ4NHVvRmp4R2pWWEFJSERJN1lmYU1QbTliY3dVbXNkRFQ0TUtWTU12R0RTSnJBVWZhVjgzd0oyeW9qSjdEU1lmRFJtYU9wM1daM2hVamNIU0xwbjYvclFmMFJnUmNBS3gwR2szY0NPN0xsSXRYU1pyQzBDZHlOQjVINlAxc1UwdGlNd3pkRUhDSWF3ZmM0MFdxa2JRTkxPaEFXNGlLQmljeFVuem9oS1JRV1kweHdNajczYkdUbkQ4NGFHc0dxVmNoelNVVXNsRGJZYkJhN3BBOXlEQXhDa0d3SmVQMHB2Qk9MazNDVVRzVzZUMUlEdStIUnZXOEJUT1dUaFZkbncvYktOdmlpc0JuMlZyZkJqaXJua2pKYWlVdGdTUk5ZWTVmQXRCajJwT1JRaU8xalNJQVNPdzdVR1dGemNRdk1IeExCV3ZKNGdqcGJWaGt0VU4zYUFVYXJ5RlF6cWptdXdCaGpXV3M3dEtBaFRyRkZ5dnFwYUxWQU03NVhyMUJQZURSS3RaaFFEYk12azNBYmloTnRJcEtTN2hlRmJhaXRiemdTTWt4RlpOVkFEQjRZZ3lGQmtwVEplSnphaDJhMXE2b043dnV4RWhZUGkySk5DclIrVHRBcS9GektnM2Zrd2xlMmRFQyt3Wlk3SHk1eEw3U2tDZXk0ejZkbjlENHBQYi9CQkYrVnRNRG1rbGEyWXIzWm5tNzMzSDViVlJQTi9pTmlkU3pNa0lpRGk1SS9hQkNHNG93OUxEb0VFc00xa0lTdjU2V0ZzODRQNFQ2OElmWG9CVDNXWkFMeW1WQ0ZGSG5NS1FaSmEvVWVxemV4Y0pjWlZmMUtsOGtoV0VEblBBUUpGb2ZuU2RlRHN0N2lRbTNYZ0o2VDhISklSMnFxa0JJV3dpU21MMUJVZ002VC9Fb1VwMitoODhaelBvaVBKbnl2R1NmRkJydytIWGdOYXVoOXZHaFVwRkdMejAwdTEyWDFZVnZYalRQU0l1RHNyRWlZbVJJR0krTjA0QzlTSWpUc0lRY29KaW1ZcE94WFJRYllYdEVHL3lzMFFMMnBlK2xJeFBxbHVuZUxhbE1OTGtrWGtpQlV2a2ZkTElqb1ZPcVdoQU9HcEJHOWYzcVlyYnpQbHdUNXJxUVpsbjVaQ24wRit6NzgzcE9kRUtpZHp5WFo3cFU5anM4a011WTN0a09kR1NjZUpPWFBlRjJOeU13YW5MQkk4VERnZmlJakhVOEVyQnVBc00yM1pTM3NRYUFjYUpLd3B3OEpod1Vaa1lySnRwTXRnV25jYnE5RTZWcmFBdCtYazkzVCt4WHVlNHN5bEt4bGJiMnpsU2tmbHdZYjlhaE93Z2tnQ3dsT3BYelVsK3JOWHF3TTZGaEc5ZnhoMFpEbDBuYm5SSU1adHBhM3NxWUF2U200SjBKUVJkZmp2OVRBdXVOTlRIc0lKdTNBRTNSdTd4NXJaQS9DNUlSUU9ETXpFbWFraHNtcUI1WW5aRVZnc20wK1IrbjZGZHF5SkQybFVMUlFpZEtwMG1oYjFOdUJIRlRkNzVpY0NKOFdOUHQxRHRlT2lZTzdwdGg2ZjlHYXVidDJ0akZWTlFKdDBZV1pFWEFHU3FUTFI4WENZenVyNGZuOWRlQVBxT1ZNTTM3M21rUDEwQ2pCaEpqZHRVYjJnTjBBTVRoQkVvbUowSFBSNU1tUTBRSm9zaUR3UXo5Vk0rSVdOZ2Z2YXZLOXdWM29xUG54b3VHc3krWURQMVYxZTZ5amxlNnJCMjFOM1lqd05FQWZtcFVNSy9Gdk4yMXJRWnUxR3Y0OElRSHVuWjRFWVdqTGVsdnMzQlgwOStlajlGMlgxeWhKOG5xQy9BNGJpcHJaZ3pBYTdlWDVhRCt2bUprRVVvZWtEUVhIQ25TMGlyeGN5RXVvUXcvMlUwaEc2dkRoMlpEUEZkUXdqOGo3eE81YWVQdG9ZMmYzeUdSVXk4bExtMkQzeWcvRDhFdFJzeG51MzE3RkZqdDM3VUxwL1hPaklUcEVnRmNPTjRBY2NSaWRoNS9oaEU5b3RVZzdWMERhQkxaZmV6bXVUN1lLVmRjOEhHajNUZmN0SmU1RTZmditzU1o0RXNsT1hTc2ZtWm5DOXUrc2FZUHg3K1REcmhwYnZQTXZVeExncm9tSjdEUGZQdElJZi9Yb0JlMEtQZHJoeTVEZzc2RDBMWmJScENoWFNGd0NnMnhCazlQZDI2cGdkbW80WE9LbC9jOGl0T2RJMWFWbTVZUy8vbEFKTTlibHMrY2t1ZW5HWG1WdkxYdmpkK1d3NE5NQzluemx6MVVRZzk1eGNuWjV3MDBUNHBtejZwVkQ4cFMrbnBENk9zS1NKbkNIekJkeC9oRzk2Qi9rTmNISzJjbGRKQ1oxNDl5SEV0YlJUb2hJMTJBUGpaSG5lZU41UXp1empOcHdObkE0dzJoTHpjMm5wblJWeldsQ1dJYmtmek5YT2RMWEl2RUZzeVJONEZhci9ET2RIa2FKU1psRVpPdTZnbGFkS1BGQnNxOHdkUGJGaVdiNHI3MDdwaWVPSXVteklydW1KWkpEaklpNzZxQi9ubW9wSThTZUgyMldlTDY4cEFsc1ZrQjZNb1dEbnQxVEM4dFJNazVNY004Mk1uaEoxYVRPamYrazFOS2tVSGoyTkQwc1JVZVhaOWlrMFVzU3l3UU1YVkhTeHBQb29UWW9vQWdrMUQ3eVRSTFg0aVFkUmpJclFBSVRWcVB6aVR6TUQ4eEloZ3MzRkxOOXRBWnVab1NUbUxHb1lxOWVPS1JMMHNJNVdWR3NxUEtsZmJYd3oxMjFMRmQ3Wkp5MlMxTEdLL2kzUlFaS2hoaThaV2NDQ1VjaGpOUzkwTkltc0YxU1NEMGh2U2VRbEhoc1p3MThzRGdETGtQSDFGc1lNcUxNTWtwMUxGODJxc2UvcDZ0ekk4YUI2ZUhBODN1YzZ4ajllVnc4REkwT2dibnJUb0JTRUtxUlI2cWx4RzFnRzRGMWNvd2plWUNhelgrQTB0RVJBcUwxZlU2bVpkQmJkdnVZMU91cnhzVEI2K2gxUG00d2cxSWc4U3JDVHNqaU5LUmVsTzB2N3QxZXlhcWphQm5TQnJPRlpWLzFCYlNLUWFIQjVnRDdCNnJsMUxuazBWMTg4WE1wUWg0RWxzdDAyZ01vQkVUckp0MkFzVnBhL0l4S0g0L1dtWHIxR2VSbGZ1VG5hdmFjNHNVTHN5Smh4WTlWYkVKUUlxU2VTOEE3bkVzTXI2SkQ2eURHZjUrYmIxcys4N0pOcFd6Uk1uK1FpMlNudFo5cTBMTk5xdlBmcGliQ2MyZ0xieWh1QnFXaVZlSVRsN1J0WUlWMnZLQ0YzT0pETmZEa1hEMVV0SGJBM0E5UHdNcnRWVDZUTDBoeTArTGJaMzlheUk0aGp6VTV4S3JRay8zUDNjcFVuYU0wdGp6eEZoNUdDaHhNZGlkT2xFSnNZQWRPb1AxNjlaY2w4TjdaR2JEMlYybXcvSnV5enFWSlo2QnFQUzBsakMwb1RtMSs5dFdZNEJmMFdKdGRCdXByQzRhQUduM1Q1MjBvQXBrbnMvbUV2U094MTRYUHBBUkpFN2paSHNPN2VWSUN6RStQWU8xWlRqU1ptWXFZVzJkbTNTTGtpaCtSbEJlaE9yem0xME5neSsrR3dXVmZsTENhNGgzVXRNMUhKeEVWa3ZiSmVTa3dLeTBjenZ5a1VESHBrb2s2Tll5TTFiSnVLTW5VTlFYTkIycCtLQWRJZm4zZys2Y253ZkFZTFF1dERJL1NndDZsMXhGSjZBS1VWdFI4THJmV0JPVkk4RUljNVBTNmlwNGJPanI3QTBzVk5CamZRaEpueCttWWQvbXQzQWI0dWRyWTViZ3BDYUh3OEt4a2R0eXRtOHZoYzVuWXZZNzJRZFM3YTJoTUNDU0VxdGsxeWNLNDl2QllIU092bzErWkZhVnRLZDczT3B6Zzg5QnZVRzNzZ0lkMlZJT0VVU0drcmo1U2oyR0VXSkFKb2tOczdVZXA0bVlvM3NoVGNPWTloUkZjemRyVnVLNE5UQVFuS1VUZEpxbGx6SW5HZHNocnRCRzlIdmNWNFhzdEVra3J2RFE3Qm02ZG5NQUc3OUY2TSt4REtYeW8zZ1F4ZU43VFU4TmdGcXJWZWJqL2p1OHJZR2VORWFTQ0JMeVBNVWpDckVqYnZUc0Y3MjF5SkpJMUlnU0drRVJGd3JxMkR5NXY2V0JyUXhmZ1JFMUUzWXNUZHkxdXlkRlhhKzdvTFBpUUI0Umlrc0NVbTVjT0NnRVJuQVlCTlp5andVN2RDYlB4TlRXZFM4TUJrb2xTM0RVdnBBSUhSSEd6R1F6b0NDcHQ3bUF0Y0E3aG9HaEU5Wnc2SnRLK1lKTGkxR25pdkZPaVlCUk9YSWxodHNrcUh3ZnZKL2xOOEZsUnM5Zjg2VURCSVQyVFExVW9NVzBxYmhvU2t6cGZrZ1NOMStFOWNkR29xSk1uOWV1bVJubjVqV2FtWGRIMXB3WUlkSTVON1JabVBpa0lCVVJneXAvTEFvNU9PR1ozNmh5WmpsdHFxNXFKWkNmQ1orSnJ6LzdUSkwyUDRvemZaclpKOUJvY1VDVTR1Qmo1VzlxaHJEbTRHOElOQktnZkYzbktSNUNVUkJLbXNna3lCQ0pDVkl5YzFDVWtMdFRqT2lJNUcwME9xZG1CMTgvQ3BHZUp3UXpIVUR1cTVNMzEzU0FJc0VlRC8xZUFLR1lCUnljS2tYU0ZMYjRkUEZTS1JtVE9pRUxiQzdkNjZoRWRhbXRZUGlzMW5MMzJKRG1wNjJWSWRDb0JwQzAxaENlcFhrWUViK2xnKzhndUQvYnFHSWZVVENkdGhVbEpOU05xVWdST2RpanhNOUZjOGRZbm04alpqTkovTjlybkI1R2dtOUFHTDBlQ2x1UDVrMWM5MkhwaVN3RjR0Um9vQUhNTW44d0NEcjlCS2pQbERYZVhPMHdrMTl2VjhnaTAwY1ltNkpndFI1S0l5RDhxUmdmamNaL25LZ1FPTlpFODZoVDZLVWJKVTl6YXpwcWVVN056MW5jWnY1ODZjQmIxZy9wT2VlU3ArQnRUcUdtNzNkNk1SSWNnVFVBcHpHT3JZWjdiS0h6dGFXOFN6SFkvUWpIK2xoTDgzZnZRN3E1cHRiQ0pxdGhnMDBaSUU1RzZzekJJVWFrUlJXdStyVjZGb3o5QkE5WTJzRzJTL0J0N0EzSlBrRVFqdTQvSTdwQnVtVWdhdlYyeVo2Qm5kWEpLS01TaE04clZBZWNLaC9TaXRYQWR5Mm1TT2svcGthUjBSaUhwb3BDVU5Ga2s0T2ZRc2laYXdiYmNpZWNFUWkxbXF2RnpxRWs3YlVsQ1ZocE5VSVEyWnlsS3pEYlNKSkNRdExvRU9ZbGErQnJNQVlNZ3duWU5pTUpCenQvQWdZalhrelIzZ0tSbE1xbm5JV3EyaEltRDhLaTlvcDBaMHJuY2lZT2tZZlkyUE1UcEJwU0VyZmlrd05vT2RXMDJWWjc4UFVUSUdwZGxYYmdxS3gySVZuR1BScVhTYkxlSzNEa2dCWkI5ektRNjhHNlJITFJzcW1XZnFtelppR0xVcG9xQmc0TkRNaERSQTEyeWZGeWRUY2NTeFkrQWc0TkRNaEJBL0o2MmpNQ2lGVGlCT1Rna0JLdFZlSWUyak1BVk1UbGJCUkNVMGNtYmcwUDZLS2hhbnZNRFBiR3AwQmNMRmhDcy93WU9EZzRwWUozalNXZFVIbzNpVjRDRGd5UDRvUkpmNm56cWVGSnh6ZWdDTkkzZkFRNE9qaUNHc05iR1ZSdmM4dUxRcy9Va2NIQndCQzlVMWdmZFhycStLTDgyNXhkMFpyME9IQndjUVFkQnRLNXlsYjZFTGszdHpCcTRsM3VrT1RpQ0RnV2lXdmk3NTg0dUJLNjlhbFFwaU9KSzRPRGdDQnFJQUk5NFNsK0N6eklHL2VyY2IzQnpCbkJ3Y0FRVW9taDlzM0w1bUN1OHZlZTdMN1NndmdUWnpYT2tPVGdDaXdKQkxkenY2ODF1Q3dsVFYrZE9ROUZOR1I5YTRPRGdHSFJvQmZYWW9tWFpoM3k5MyszS0RNd3JMY0pkd01IQk1laEExWGxwZCtRbDlMaTBTdm55bkdkeDh3QndjSEFNR2xTaWNCUGF2VDBtVnZtMU5sTEZ0VGtQNDJ4d1AzQndjQXc4ckhCWDJmSlJML2h6YUsrYTZhU3RPckxjS29pdkFnY0h4MERBb0JMaDFyTGxPV3Y4L1lOZWQ4TktlZlhRTEVHbGVodDRMMmtPanY1RWdSV0U4NnF1SGJXM04zL1U2K1ZGSy84d1pqc3E2R2NJQW53Q0hCd2NKdzhCTm1wRHpWTjZTMTdibjU0RU1NeDBLMzdDSGFLb25LVlpPRGo2QzVTeUxBcml2UlhMY3ZwY2kzL1NEV1gxcngzT0FndXNCRUc0Q2pnNE9QeUFZQkVFY1pVUUt0eFhkdW1vazFwaHZkODZRaWUvbkhlS1N0MXhQeWN5QjBkM0VGKzNndXFwdnFqTDN0RHZMZDFKSW90V3VGY1FoVFB4MDRjQ0J3ZEhuVW9RWHJCbzFDOVdYam1pQ3ZvUkE3b21nLzdWdzZlTEtsZ3FpS29GSUlnamdJTkRJUkFCOGxRQ2ZDNWF4SThyL2pENk94Z2dETnFpS2tQZXpFc1hUUjFqVVBtZmpsODZDWGNsNGtPUGtqb1N5UjBHb3FBR0RnNnBRQlE3UkFHYTZTbU81eEpSRUk2TG92VXd2anBrQWZpbDV0cWNNaGdFL0QrODVpTytOdXdCUndBQUFBQkpSVTVFcmtKZ2dnPT1cIlxyXG4gICAgICAgID48L2ltYWdlPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvNTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBMb2dvNigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICB3aWR0aD1cIjYwXCJcclxuICAgICAgaGVpZ2h0PVwiNjBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjAgNjBcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBmaWxsPVwidXJsKCNwYXR0ZXJuMClcIiBkPVwiTTAgMEg2MFY2MEgwelwiPjwvcGF0aD5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHBhdHRlcm5cclxuICAgICAgICAgIGlkPVwicGF0dGVybjBcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxXCJcclxuICAgICAgICAgIGhlaWdodD1cIjFcIlxyXG4gICAgICAgICAgcGF0dGVybkNvbnRlbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dXNlIHRyYW5zZm9ybT1cInNjYWxlKC4wMDQxNylcIiB4bGlua0hyZWY9XCIjaW1hZ2UwXzE3XzUwMDAzXCI+PC91c2U+XHJcbiAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgIDxpbWFnZVxyXG4gICAgICAgICAgaWQ9XCJpbWFnZTBfMTdfNTAwMDNcIlxyXG4gICAgICAgICAgd2lkdGg9XCIyNDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMjQwXCJcclxuICAgICAgICAgIHhsaW5rSHJlZj1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUEFBQUFEd0NBWUFBQUErVmVtU0FBQUFDWEJJV1hNQUFCWWxBQUFXSlFGSlVpVHdBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUhaYVNVUkJWSGdCN1YwRmZCVG45cjBiZHplQ3UwdXhRbHVnU3FGQzNmdnE3YXUrdXJ1KzZudjE5Nis3VWVxVVFndVVVcUI0b2JoclFvUUljZC8vT2QvTUpKdGxrNnhsTjZGeitwc21XZFptNXJ2ZjlYTXQ0aU9rdmJlaG0xV3NZeXgxZ2NORXJEM3dFSTlFc1VxVTFXS05zNGdsU0V5WWFDZkFXcTZ4V0MyRllwRVMvTGxYeEhMQUVpQnI2cVJ1a2NVYXRDM3JpdDdyeFFld1NDc2gvZnZsRVhWNWthT2x6bkllaFBOOG5IQ2NtRER4OThGT2lOZThRR3ZOeHhsWERad2pyUVN2QzNENmU1djZXZXZrYXZ4NmhTbTBKa3dvN0lNc1RJZUdmaXJyOHY0N3hZdndtZ0NudjdQcEtIekpCNjBpRThXRUNSTk53UEsrV0txZnk3cGlrRmRNYkk4Rm1MNnRwUzdnUHhEZU04U0VDUlBPd1dyNVFBTHJIdkZVSTNza3dHbnZiTHdUL3UxOXBxbHN3b1JieUxOWUFsN2NkMFdmSjhSTnVDWEFIZDVlMzlVYUVQQUJRbkVUeElRSkU1N2lWd213WHVHT05uWlpnRHUrdS9IWU9xdDhDVjgzUVV5WU1PRXQ3TEphQXM3THZxTFBFbGRlRk9ES2t6dTh1L21CV3F2TU1ZWFhoQW12bzZ2RldyYzQvWjB0TjdqeUlxY0ZPTzI5VFE5YnJYV1Bpd2tUSmxvTmRWTDdhdHE3bXg1eTl2bE9DVENGVitxc2o0Z0pFeVphSDFicm8wcm1uRUNMUG5EYXU1dnZFR3ZkYzJMQ2hBa2ZJK0N1ckN2N05DdDd6UW93MGtUSDRNZGNNV0hDaEQ5UVYxZHJIWmR6VGY5RlRUMmhTUUZXQlJwV3l3S3JWVHFLQ1JNbS9BUkxkbldRak1pN3RHK0dvMzl0MmdldXMzeHZDcThKRS82R05UVzQxdnB4VS8vcVVJQjFCM3F3bURCaHd2K3d5dEVkM2w1L3E2Ti9Pc2lFcHVrczFvRDFpSVNGaXdrVEp0b0VMR0lwdEFRSERjMjhwT2R1MjhjUDBzQ1dXc3VUcHZDYU1ORzJ3SDZEdXVxYWcycW1HMm5nanU5c0dsb3IxbFZpd29TSk5nbHJRTjNZN01zSExEYiticVNCYXkxeXE1Z3dZYUxOSXFBdThDN2J2K3MxY09wYkc3dGJBbVM3bURCaG9tMGpJTFI3MXVYZGQ2cGZqY2NzZ2ZLZ21EQmhvdTJqcnZKNjQxZE5nSzFXaThWcU1SazFUSmhvQjBCRSt1cUJVOWVGOEhjbHdKM2UzakRaWk5Vd1lhSjlnTEthZHlEZ0NQNnVCTGdtTVBCY01XSENSUHVCUmM3aUQ4T0VOcWx4VEpob1Q3REkyZXBIQ25LL0FXYnUxNFNKZG9mQXVzRE9BVUZXNlM0bVRKaG9kNmdOckIwVFVHc3h6V2NUSnRvbHJOWkJBUmFSZm1MQ2hJbjJCNnYwRFJDTHhVd2ZIUUlJc3JUYW5Eb1RiUlVCQWQyQ29JYlR4RVM3eC9ERVVKbmNQVm91NmhNcnJZSDdGK2ZJbDl1S3hFUWJBbVFYQWl4SlltN2U3UXFYUUVpVEl4dVBVNTdVSlVvR0pZWkphK0hSdzFNa3dHYWRIS2lxbFlYN3lxVzR1azVNK0ExQmxyUjNObHJGUkx2QmhiMWo1WVZ4YmNObzJsTlNMU2Q5djB2MlY5U0tDYitnSkVoTXRCdDBqZ3FXV3c1TFZJSnoyUzhaamJSZklMUWpsS0xVMWpYc3g0RlFtWUZPTUg5SHFPZFpzSjJMaE9BRndYZ3pSeTUxTU40ckdPWmFOY3kyVWFrUmNqdSt5d3RIcE1tbGN6UEVoRjhRWkFwd0cwTWdKS2QvZklqRWhCd3NlWmYwalZOQy9QYmFBZ25FMzNIQjJuTkNBelZwQ3dseTdBdFJRRU1DTFVvNFEvR2NJUHdkeWIrRHRMOGJQeGVQNGMzRFF3SWJDVDhGTnd6UGpjQnJiRDluWXJjbytlNmtMbEpsdFVwK2VZMlUxMWdsdDd4V0t1cnFwTFN5VHJZVlZja3ZlMHZGUk92QU5LSGJFTTdxR1NOM1FxdDFqUW1SdG93eWFQNnFXcXNVMTJnV1FDZzJoTVN3UUtYRkhlR2JyVVh5NzVYN2xlVmd3cXVvTURWd0d3QzE3UjJISmNuVkErT2xxS3BPM2xpYkx4dnlxdzU2SGhWdVVualRna0x6dWJaT2xIRFY0SmRLYk0yT1lreFZFTHd5YUVxbEphdXNlSDZkbE9EdmFtdmp2YnlDejZtQk5vVnBidjl2VFNFMUxFaHA2QlQ4ak1WNW5kRXJSczdHTWFGanBEeTZQRWVtYmpFajJkNkVxWUg5akRHcDRmTHloQTdLTkY2WlV5Nlh6czQ0NUlKQ1ozU1BrWHRISmFselhMcXZURzc4UGN2VXh0NUJoU25BZmdLMTdxM0RFdVhhUVFsSzYvN256eng1YTMyKzFCMmlkNk5UWkxBNjN3djd4a0xyMThrcmEvTGxwZFY1WXNJam1BTHNENHhOQzVmL0hKVW0zZURyTHNrcWs3c1hac3VtQTFYeWQ4Q2tUbEh5MkJFcFNodHZ5S3VVUytka21OcllmWmdDN0V0UTY5NHlORkd1RzV3Z05WQzFMNi9PbCtmKzNDOS9OOUEzdmhzKy8rWHcrZW12dndadC9Pekt2OTkxOEFKTUFXNE5SQ1BhTkM0OVFnNkhwbzFsVGtaRUJaZjRHRFhQWC9zcjVKcTVtYkxyYjY1NUJzZUh5anNuZEZUWGhGcjRyQmw3VEczc0drd0I5allHSjRiSk84ZWxxMFZwRHdaeUgxMmE2N0d2RzRrb2IwZjRsSXhJUnlNdkd3V05GbVFUbWE2c2NmN05RNE04cTZNdHJLeVZqSklhV1Z0UUtlNkFuLzdnaUdTNWJtaUMrdnMxK01Vdi9aVnZsbWc2QjFPQXZRa0s3UytuZFVXNnh5SmZieXVTM3ZCeEQ0ZldKWDdkV3lyM0xzcDJXZXVPNnhBaC9STkNaVFNpMVFQeE15VThTQ0tDblNpdjhqRW94TDlubHNwL1Z1VzVwVVY1N2FaTjdpeGRvalZ0ZkIwc2xCV3dWRXcwQzFPQXZZbC9qMDJSeS9ySHk5S3NjdWtIWWFQUHV3aEJxaGRXNXFtZnp1THcxREM1b0hlc1RPNFdVMStSeFJ4dlpsbU43RUt3SzZPOFJvcVJhdHFCMzB2MWpCTnp1NVY0RG91eVFxR1ZBejFzTDZ5RnVWQmIyL0xTQ01RSERrc0trL0VkSTZSM1hLaDY3QlZvMFZjZ3lNVzFyaTh0NXNQL05TUmVnZ01ENU5OTkIrVEYxWG1tV2QwMFRBSDJGaWhvWDUzVVdRWWxhQjFCRy9NcTVBR1l5d3YzT1MrNHhIM0RrK1FtcEZ1SXBSRDZtYnRMWlhWdXVhd3ZySVM1MnJiTnlzTlR3dVhCa2NreUFyNi9KejR0dGZIL2tCc2ZBYXVEbXYyVFRZWHkwWVpDMlY5bE5rM1l3UlJnVHhBQUQyNU1XaGcwUnFKTTZCU3BIbU5POS9rVisrV3REUVhpS3U0YW5vaGNhWkxTNEUrdXlKV2wyZVVIUFlkbGl6MWpRNVE1M1JubVpnek02Ymh3TFZER2VtVkdlRVB4V0JQRldxb3UyaFpsVGpyalZUVldyY0lMbXJrVTJwN0ZKcHNMcW1RdE5xcTErWTM5M3hzUlpiOS9WTExIZ2FuemVzWEs3YmdtRk9oOXBkVXlkWE9SZkxMbGdLbVJHMkFLc0R2b0VCRW8vK2dYTDVmMWk1UDRNRTE0YUNKL0RDMHhhM2VKbExsaE9uS1JMajZudSt5RnhoazdiZnRCUWE3Sm5hUHdtWEV5RWxvcE9xUjVINWhCckVvSVdUWGVwTXpGYUJuRk8xenZUZ3JVdTVOZ2tUZFp2a2xRUzg3Y1dTeHZyQytvRjY1eklYd3ZqVStUTFJEeVUzN2NwVFkyZDJFcnlNUVhFT0xYa1hyYVhQajN5SjAzQTFPQW5RVTEzNVR1MFhKKzMxZzVJazBMVERFQyt4NkU5b1AxaFpKZFVTT2U0TGtqMHVUaWZyRnkwN3g5TW0xN1E3M3c2ZDJpNWVralUrdlRVZHdvMWlLNDh3ZTA5SjdpYWlsaVl3RUVOaC9meGRsNlpVOFJEUCs2T3dKMEtkRDhwM2FQa21Pd3VWQzRNaUM4OXlOUU4wdnZQbUxsMVYxd0NkNWVteThQd3Azd0ZPZEFrSzhmRksvaUM4Um1STDVmdzN2L25sRW0rOG84dS83dEZLWUF0d1Q2ZGNmQlBMNTBRTHp5Y3l1ZzJaWmxWNmpneWhLWXVMVmVFQnJxdHVYbjlWVHZOWHFxTmlDU24vWDQ0YWx5YnU4WXBiM2VXbGNnNzBIRDVWVzJUVCtRV3ZLK2tVbVNGQllrRjh6YUkvTjEzLzhyUkpiSElwSisydlRkc2l5blhMeUI0UWlhOFg2YzBqVktSZVRyY04yKzJWWXNzM2FWeU55TUVwajRmNXNsYlFxd0kxQjR6b1MyUGJWblRMMjIzUVp6N2RzZHhmTG11bnlQekVGSEdJOEYvZ1VXK2xQTGN1U1ZOUVVxei92bHBNNXlHRGFQMzZETnJvVldMbXdIQVp6dThNbG5UT21tL085anZ0NkpxSG0xak1YMSt4ckJ2Ymw3U3VTaVg3emIrSjhDOStXWVRsRnlRWjhZT1Z5L1Qvbnd6WC9MS0pXcE1MTzV3WmJYSHRMTDIyd250TVVSaUo2ZTJTTkdUdTJocFcrS0lhaGZiU21TVDdFWVhFa0R1UXBxV2VMN25TWHFKd05aRk40My84cVhoNWQ3Ym5yNkNqdGcwdC94ZTVhOGZYeTYzRG9rUWU1Y25BMVR2MHdXUVJ1UGdZRHhtbnB6ODh1QnNINng5WUE2ZXNLa1A2RnpwRndFRitjTWJMdzhLTXhMNEdyTTNGTXM4L2FVNGZtSG5wbHRhbURnMlBSSXVXTTRoVVpMQVMzSkxwT2ZJRXlmUVhDOXJXMGRZU1hNWnpiSkgvWDFEdW1QWE9yY003c3AvMjdDTnp1bFBZSm1NeXZTUms3ZHBxN2ZQL3JFeXJOSHBjbDlmMlNybUVGcm95Y3NnY2xkbytXMEh0RXlLS21CNkkrYjhPL1F6clAzbEI0VU9XK25NRFV3ZTFWZlA2YURXbWp2d3MvOGFsdVJyUFJoQmRESTVIRHBFQmtrSCtvTCt5YTlwUER5T2UyWForb24rS0pId0MwNEcxcndYWnpYZFB6OTlCRldtWWhnbHk4RWVCc3NnVmNSM09MQjRCcGpHTlRPeCtMejZSTGRQU0paOHNwclpUNkVlUTZPQlFpQ1piZFQ3ZnkzRnVCdzVFa2VHcDJzMGlCbnpOanRsL3dpRy9xSm1Wams2WkhCeXZTYmpWVFU5cUwybSt2a0p2ajRtQlFabmh3R0FSWXBRT0R0cjd4S0daNFNMcjRHNytuN0d3dlZFWUhZd3FpVUNCVTVIOTh4VXJHRjhDQm84YXpNclpCZjRLdXZ5cTFVL250N3dOOWFnRmxmbkFidDkrRGlITDhWQnh6VEpWTGxmRm14ZGI3dUMyOCtVS1g4OGZhTS9lVTEwTUtSOVg4dnlDeVZZUkRvVVRpVzVmcW54cGswUXIvaGUvQWcrc1NGeUpDa2NEbTVXNVFNZzhsL1Brejk4M1ZpL0xYNUZiSUpadllNYkt6YkQxVEx4c0syYVhML3JRVTRMVklyRE5qaXg0SUFsbDZ1UUxTVXJJNlRrUE1scmgrY29JNURDU3Qwb1IyYzVEOEJ0Z2NMUVhoTVF4Q01HQTVoSHBvVUtzZDNpWkloaWFFeXFGZVluTlZMRTJocTZPMHd6WmtWMkFEQi9oTnVWbFVib0U4eG85QWlxbUxKSCtDdXo4anNYL25hZ3A2N3UxZ3RrSE5oMXZYVml4VmFBOVFvMDNjVXliLzBtdXZXQkhPMmpDbXMwb1YyWUN0T2ovQVVLL2VYcStPOWpacWZQaEFCeGFINC9xTTdoTXRoK01ucEZ6d01NQ2ltaEJubnhtSVNmMFM1VFFHV3htVG92c1NBZUUxSWY4L1VVbFJ2YjlRMHdaV0Q0cHN0WGZRVXVaVTE4dG5XSXJrVmtmZld4aW1JQkZPQXMyQlM1eUd0TTA1dnIyd1BXQWV6bWNlbnVvWk9oN3RGaTRtK1BkMkI0UWhBR25VQ3pDSzh0NkZBbmxxK1gzelpjdkwzRG1McEpjVzFWdjhJOEVqZHo5MXRFN0E2cjNlc2lweXlKZStqVFFmRTIvanBsQzZOL3Y0T0FhY25WM2lmemlZTUd4RFRZZDJpR3ppdUY4TDNuS0xuMkgyUm52TTJNa3RyY0pUSXozdEs2aC9yQXkxOU9OS1AxOExsdVdGSW9pU0dCY210QzdMRVYvaGJDN0NoNWFyOFZIclhIeG80dDZ4R050Z0VTQzdSZ3lnVVhsOEUxaWhJcmZVNXU0cXE1TWdPRFJwM2gwN2MxeXNteEtlcHV0YkVadHc3SGg5dlBxQUlDYzdGQnZ6dzBoeWZiVkIvYndIV3JWUi94U0lHSTFDeXhLWSsrQ1RrS1ljak1yNE12bFhmbUdCb1lzZTNoOTFDdGdhMjBUblU4THYyUjFDZ0hOVFlIMjdINXBFUUh0aHFFVzkyVnZXRWhrcVBDRlpwbVZWNTJrWTFSUGVMRHlWd0NaRzBudmx2V2xHc1hmY0ZUQTBzNHJNdUhsdFFDL0h6MlU5cjRQUmVXaFI2RlB5cWp5YjV4bGM4R1pIdmsvWG9kMnRoWUVLSUV1QjFldlZUMzdpMlBUckdYZnlFSU9SalZTbHljdGRvVTRCOUFVTTcrVVdBNDdWRnZDcW5RWUFmWDdaZlp1d29VWlE0M29JdE5VNmxibXJRYk9kODMxdm0rOFpYeXlqVm9yTTAxVW45MHllKzlTTHMvZ1ROWmhiaG5Ja3NRaDlzMEp1TFdqODkrYmNXWUlPUjBSOEVpTDMxQVdiWjVWcVhFUU5YYkZyM0JkYkJsTjJFeFRVMjNUZkZJbU9RaHJselFiWmk4OWlFdkd1L1ExU0FpVS9nQzFPQXorb2RJLzllMGZwYzEzOXJBUTYydEY2cXBpV1FEb2ZZcWdld2JoZ2NyM3BxZllGRlVXV3FkTk5YbjBkOENmK1FlZFAxQlpXcW1LTzlScUpiQXMrUjUzVkp2emg1WmtYcnA1VCs1Z0lzZmtQdjJCQ1ZmODdSQjVrTlNBaFZOLzZ3VDdkS2EyTHB1VDBhL2YwNW90MzMvNUV0cllWUkNKQjlQcW16bk5ZOVdpM3V2Y1ZheEp1QnJhS3FRNklqNkNDOGozend2NFltcWhiSzFteERKZHF0QURQcXltNlhMakE5T3lKaW14b1dxRGlUbzNYcUdTYldWeUhTK2NLZmpXbEp1Zk96T3VoMDVDTW50M0x3cGpuMFFpQm5wZTcvOGx3NDhaNk42R1UrRG9tN3c1dmxDbjdMTEZQUjZDazlvdVZ1YkJSN2RIK1lwWXB0dGI3WVU1QVRuQUo4V2I5WVU0QnRRVjZxVGtpdHFMRWxXUENuOTR5cC96Y0dSN0toemZpVGpmZ2NiOEp3UHNQNk55Tlkwd092TzY1TGxCeVpIbG5QdGV3dkU0Nm1leEkybStXNkFCcytZUncybjlzUFM2eC9EZy91UjBacUtLUUZreUhDSUtORGtvbitmYUFETXJyRWlDQ2VlUDNmUTVMRDZqK3p0VkJZV1lQN0ZxYXFsdGJrYW1tejNvZG9KSnFnbjA4U2cwbUlSc2VFWkxmcU9tdlRBc3pBenZDa1VKVWJIUndmSnNOVHdocEZhSGxoWGxxVkp4OXNMRlJVcC9hNHNuKzhQSFo0c3FKME1mQW44cTQvN0N5Uk9mQUJMeHNZSjVjUGlCZGZvNXZ1Lys0bzFnUXBTV2UyWk4zdDBDVHYxZ3FUb1ZKRm91czBXdGdzYU1BaUczN3AxdmpNcGpDeFM2U2EzRUFrUnh6YTN0dm5DR1pSZVZ5Qk5maGlLNDVSYlZOWHNSc0U5b1N1VVhJVUJIYU1qYVlrU21BU2M5UUc4NmJyODZwa0lmMnBGaXFJM29FdmtsZGVJLzg3TmwzOS9RS0NDcy9iWEV5YWRrUUNQbWVQK0E1ZFlqUUJ6dGJOU1JiRUgvZjFUaVZrTFptelZUWUNXUW1CckxhNmx3WmpxZU9KUG1iOElEOFZOMTFTM2ZTS1BYUTFNUEg5am1KNVlteXFuQUV0Zk1nTE1BblNINEdtdkhwZ2d6WmNyWGV3cklQQXpvY2YxZHhNSVFvNlgzc3FMbFllOHBzZnJpK1U3M1lXcTMvN0ZqOVhmN2xka2NiZFBpSkpkdU45cG03VGFGdHp5alVCSXUzS2FoOVNySFRWTmZBYXBIUFUxSHE3d0pJdjhNVGlISGxnVElyNEVnOHR5WkV0NjZva0IzbG9Zd3pMb1FybTNFbUF5RkV4UjdSaU1NdnZBa3poZS92b2RCblhLVklOdSthaytsVVFXbWY5QmpJVC9qQ2xxd3BtVWR2MmhqL0pDM1k2ek9SSGx1WElMa1E5U2JiR0NRRmZuOVJGSGh1VEtqUDNsS2ozLzFOdmNTTjFMUE4zdmdLRGJVUnBkVzI5bGNFRzhuVSsyRVFtZDRsV043MjBWcnUrODNBdHNuMUFWWHNTUHBldGVLeFFXbzM3UzI3blJEajRiWlVtMXhzZ1gvZzFBeFBrNGRISmN1TDN1NlExNEhjQmZ1YndWQ1c4UE5uSGx1Y28xZ1JYd0dneWhaZlJabmJ3cE1DM1lsQ0dBYXhKM2FJT2lrRHpNR3BWdHlHWXN4WkNmQ0tpMFoxWCtXNklscEVEM2xGVUxZTVNOVTMwL2JaaWVXVk52clEyZXB3Y1hFOWtRSHkwOFlETXNPbXVhUzEwbmh5TXlIT1lvc3pOMVVuWVkwTUREbGtCN2hjVElpZjNqRmEwVGVHQnJUZE4wcTl6S2krRUlKM2VPMGExdE4yek9OdGw0U1ZZNVVPOEN1R2wyVUlodk9YM0xKbncxUTVaZ2tnZ3AvZ1p4MTRJN0hveUtWUTNmTTdMZitYWER5WWp2V3VTbm9acVRaREdoejRzcHlvRTYxRmlYNUdxc2QzTkg5MVg3SG5tSE9NSmlHM3MwWFBCUFdNT1RUK1k2K2tqNUw1cFBtK0VWWFhwN05ZaktQU2JCazZER1hrM2ZGSUtuTHY5cUdNUjdDSjk2SEpFbGl2c2dqL2tsVHI5cDVaRFV6L3NLcGJINEE5ZU95UkJYaHJYUVFXV1BrUlUrOFhWK1ZJbnJiUFFJN0VqWitwYUtGazNweS90R3ljbmRXNzl2SFFuYkI2cjl6ZVk2amNNVFZBdGNLMk5oRkJOVnh5T0RmZVBmVm9xS1RHODlUZExmNER1MlR2cjgyRTZwOGl6Sy9mWFp4dGFBMzRUWU00Wm9ybDd5L3g5THB1dTNPRnVHNWFvL0lzRDBLelh6OXNuN3VETUh0RXlYcDhxT0FQQnJzdVFVa3JGQXI4VEd3dG5JRjMxUzRiOFZlQjl2NVJtczFIRUVhblhZL3VTc2JIYVptUHlOVlBrWkd4U2I2L1RLR3ZhU2swMGc2aTQ3Y2k1dzl3TmJyeXBrUFFoRkJzdU41dFVyRmRhRWN6WGQ4RHZZWGgrbjloUStYSjdrWExKV0E1N2FYOHRFQnNib3IzUDFsWnVhUENiQUY4MUtCN2FybHErMkZyazB1dXVRYlQ1ZHBnbUZHSUdmdjQ1eC9VTklCbUJyODhuZHBJQkR2S2ZyQkV1aFY5MktvUjcxaG5kNUxHbE9mSy90ZDVyRGFOUHhPSUtJd1cyQlpiQ1dUTjJpNjlSVUZIbnQ4ODFmT0RFTVBjMU1LbHRtRmVPRFE2UUtBaFVITlpEWkZDQUJPc2JJbXRlb2lHTVlVR1dSc1VzTEhaaFR6UWZEL0JTTGZ5c3ZWb01JYmU4VG1VVnVCNFpkZjRFbHR6TzR0YU5xL2hGZ01lbWhhc1QvV2lqNnlUZmR3OVBVb0dQdTMvZkp6L3VMblVyQi9yTUVXa09oWmR2TmFtclJscTJENlowQnl5SWgyQUdjWUFXZzJUZVFJY0lMWUNVQlo5M1JGSTRmTzh1NGcvTTIxc3FSM2VLRkY5anp1NFN1UmcrSVhQQlhhUGM4NEc1ZG1hYzJrV0NBeHNMSU85ZmVVMmRNbUZ0MXdVSDBsWEE3eSsySy9ZeCtLeWF3bUxFVU1nVFhZNVlSVWNTeEhlT3FwK01TS3lHRlRVMHBXRWRyZFBKQ1RtUS9LWFZyUitRSlB3aXdNZDIxQmJPTjl0YzA3NHNMYVF3ellUZit1MHU5eUtuZldKRFpES2kwK1EzSWtsWkkyQTlQSUpnMmdBSTFqazJaWm9NUm16T3IxTCtzcWRJanRTMFRpa1dSWmhlR3NsNXQ0WmY2QXU4T0Q2dC92ZmZNMHZscTYyZW41Y3pZTXhqaUw1eFVzalNvdHhiZmpSVktid1h6OXFyWWgzTWlKVWpKVmRTWTNWcFE5OTBjVzlseVZGamNtM3g5d2dieGhLNk9hL0QrdnI1dEs1cWxPdzBXSXZsK0RER01KamhzSGMvc3ZUQ25Jc1F6MGlBVmJBZUFTekdWT2J0YTcxNmFMOEk4TkJrN2NTWFpMdTJhQTJLbVRJUEpzNzExLzB1UjJYRmZLZ0FnblV6L1BMbkVYejRSNTg0eFpMQkhmLzVjV255Mjc1U2ordGF3M1J6am1aa0ozMWc5ZmZiaTJWdVJxbjRDcllDdlBOQXRSb081Z3VNUlFDTEtieTRVRTFvUmlTSHFVWU9WMjhuYy8yTTRzL3g4Sm90eHVZMUVTbkU0Ny9kMmVpKzJoZlhSRUJnQjZlSHliajBCb3VGSnZLUGlKdXdRckJBN3lpalpVZ2krSEVkSXVTYVFRMjgzcThoUS9KRUsvVUcrMFdBMHlNQ1pXMWVwY3U5a2tiRU5xL2MvZHhobnA2dUNXcUN0dldBWGlmTUJmYlV5bHgxM0RRNFVlNGJsU1RYd3Y5KzFrTlR1ck9lZytYbmRJL1ZmaStyT2ZUNlloMWhxMDZnUHhEKzYwNEVkOWlVa2hvZTdQSVlrektkZ2VHOFhqSGlDZXAwSC9pZkNJYnVScVNZOFFscVlHT2RzUlh5MFZISmtnQmZuUUplQWdGTjEzUDR0dVkzTjZVTEVQVDhFUnZ4bmRqODgvSDlTQm5jQ2U3U25TTVQ1WitERStUbE5mbXQwdFRnY3dIbVJTTFIyZnhNMTNkUEl4OWU1TUdzM0FWWjVlcEN4anNJb0d5SE9mYkw3b05OODFmVzVNbkpYU1BsU3R6by8wTzAwWk1ia2FwYkVWblF3Q04xRTJ6cWlaM0ZYeUk4RHU2TXJVWnVUYVRyRFF6c2ZjN1d5MWdqM1dqS1pnQ1FnYWtYeDNjUWIrQzJKcnF4UmlGTk9TcTF3VXltaWMxdU42WUE5NVRVcUkwbkZ5WXlLK2dXd1FXeUpYWW5jUUVQdWt6UEg1VW1KeURlOE5WMjc3c3FQaGZnSkgxMyt5dlgvZlRNQVE5M3N0dXdTNzU5ZkVmMWV5bmVheGQyMzVsN1N1V050ZmxOQ3RJUE1KY2VHQjN1OFkwSTB3TXZ1YmpaM0laYXUxKzBLV3dzcUZKQnJHNHh3VGg4eDh4Qk1IMjBaci9tUGxIYmJUbmdXcXJsOVRVRjhzT09FcUc3R2d6SEowU1BQSWZhV1ZVaE5wMXJ0dHhnaE1FUDl1YXg2VXJRSGxuU01JZVo1amtEVjdZK2RTSHVWN0dMQlRDakVlRHFxN3RzMGNHdFV6UGxjd0ZPMUJQNkZYV3VDMkd3bDFna2Y0U1dmV0JSdHZ4elNJTHlkd1lraHNHYzBwZ2lmOWxkTE50WllvbWdsZTNzR3c3ZmZnQVI2UkhRbXA0SXNHR2VsVlpaSlZvUG9QZ0R6OEUxNkJIdG55emlLczZDMG45UGNhT1lnOWZNVzllTnBud3E3b245UmhxTlRTRTZKS2plNnV1QnRSR0orOFZnRjYwMzVvenBoakZZeFdCb09QOE5tMGt5M0VOdTBuM2p3eHIxbmMvTFBFU2FHWXdvWDYwYlNqVEdpN3ZZTzBoaHpZQWdjN3duaDFueDU2QWVZWW81Z21EcVlVMWVoZXhDa09jdi9GeUhYWnErMTFBUFovdkU2K2ZBa1pzWDl2R3Q1clBGQ3l2elZBREhIeWpCdFdWUE5tRm9UMWN3RHY3bmZTT1RQR0lTWVQ0NEpKQUNGNndFelFoYVJVTnJjMk4xZDdRTlRXd3FhcTd6ZHhEQi9oV0J0bVc1NWEzVzFPKzNRbzRTTi94WW81bS8xc213SlhkSDN1Z2hDSnJzZzkveTJMSmMxY0JnZ0k5OXM2TllIUVMxOFVENFo2VGNHWUVBQm9zRlNIVnp0alFJbXRITDZ5NmlzSHR6M2ZYVUdTbmVSSERqeFZXdDF5OXFqM2VQNnloamJPWVR2WUhQZjhtSG56L25qTzZLOS9vRGZRNVVwd2pYcnljRmJCZ3NJWlh2aGNCUUVFTjBWY24wVW9BTllYKzF2bGFxb0RINEswa05LaDFZY05TczIvV1NSeW9YVnNneFRjUzg5Wi9Zd0psS2RBVG1mTitBU1o5ZldZTW90Q2FranlEd3hjQlZGS3hOS3o0clBqancwQlBnR2pkMlQyTlhySFRTRjVtSi9GMW5QVlV6R01maFdEZ25mTGV6U2ZQTE1NMW0yZ1N5MlBMR0lWWURFa1BrL041eHltZGtLcWpDZzkyZmJZODk5STJBWXpjTGZNaHJhM3p2YUYzenNiakJsNSsvQ3I3dlJGZzhSaVZheDJqM044VC93QTE0WTczcnhVQzI2QXp6ZCtsNVBWVTkvVzBMc3FSWXZ4YkhJV1gwOGFSTzhqMXkvNXk0Y0htL09Oa0VYLzN5MlJseURQN3RXSndEcDBneTU4dGg0V1NnL0VxdmErRDZPUWJ4QlVhbno5UHJ6RmxIY1BIc3ZWNTNtZHBFUTM5L2FLUElGc2pNTThzYU5IYUZFeHFZRlZXRzhCcGcrOXFGdldMbG1WWE81K1NZMi90bGJ3a09yYjcxT3V5c3BJTng5MGJFNFR3cFJEMTFSZ29HOVVZbStXN2tab3hlbzJ0c2hyeEd4bWdWalllcjRibk1zckRjc0tucGplNllzRUU2YjVjUnpHdWwySTdUSU1rZWMvS25kSTlXQjlONzJ3NVVTcFQreFl6ckV3d05UN0wyeVJCY2Z2OU4rUlh5eFJhcm5OUkZXMmV2VHVpZ0FwdzN6cytTeGZEeEozeXpVOFZVR0RNeDh0L3NlQnMvYllkSG03ODkyb1FBL3dkaDltRXRGTlhmL0h0RHc0SXpoUnhHTWJrOTNQRzVET3pYODgrOE1lNEtjRFJNNkRLWVV4MzBsTXFUWTMzTGltR2dSRytwdE5VU3ZnUTNNUHFMcVI1d1k1M1ZNMVpHdzZvSzFDZEZHVVQ5anU0eE42YXdBSzBHT3N4dTE3Q2xidUltYjF0aHBVem53L1EvOEx5bVVsZU1qN0N5akI5dEdJaHNaT0RCUWhsV2FkMDhMRkZHSU5heTBJdVZXWDRUWVB1aFcvUVJTRUZpang3UklZcnBubWhKOW1aTzZhck1HSGFHL01RMndjTlRHdDBjWXM1dTk1dlg5NVJvUHBKUkR1a09xT1Y0cmpTZDkvL1orc3o5VFlFdGJoeXRncUNwbEhteHB6N0M1dElZZnFsaXg3UTBGaTdPQ2lhTGFGS28rMHR3Y0hLWU91eEJpNEcxTWZSNzZmTTZzaFNZSmlLbkdGMElic2IwZXhtNHBBbHRaRG5LZGY0dUJoeUw5UTJ2ckxwVzlYSFQwaTdHNDRYNGhhOGxQVk5ORTlrUnJrR3JyblE2Um5sWDVQd213S0YyMHNoWlBZNGFCdWlMR0FJY0Z0aTBCSk1UeTJCWTdCZ1pMRThpWUhYMTdFeDVmbnlxTW5Fb05NOURZQmJsdUY5em5GbWlyZlRVTVBjdm16YVJvRmF1N0IrblViejZDVC92S3ZIWktCZEhtTHVuUkduZzZGRFhiZWhma0xNZjhOR1dSbzlWNmdMaWExN3Q1dkFPY3N3azcyTWpSQ1MwUGlzSXZWM3o3dk1WWkpUQmhidmgvRFExQ29VQ2VodHl1dHhKU1pqMnowSHhjbEszS01XRE5YcnFkbVd1MHZ6MU5IOXNWTnE0bTVRM21qRzRXUTNEUmhNTWYzaTdqOG5OYWJvYTVQZThialR0c2twOWw0dW1EOTRETVk5aENBeFNBL2VMYzMwSjhqNFdWRHUrbDd6R3NTR04rM29ac0V2QXBoc2YycmhaZ2ZjeHlpWmxGQk9rdFNZYXVWK21sUGp2UnRsdGRHQ0FxbC9nUjdQK21RU0ptL01xNWZlc2NzbHdjQTJaN3JMaXRYL0FaRjZFNTN5eXVkRHIwV2lmQzNCUmxmdENGTlNFQmlZSFZoeUNRUS8rdGsrbXdZU20zOExIZmorem05eTNPRnQrenl4WE5EWkVvVEtIM0x1SUJuOXpTcVI3bDgxbzNqZldIdnVadWNuNEVwOU43TlNvamZCakxDcHZ0VW82QTZOUmdORjhCbzlhYXVsemhOdUhKc3A1ZlRXL25aT1NLYUJSSHVSdW13UE44UklJSFhuSDAzVkxqcmN4d200VFg3QzNWRzVibEgxUWJLUVNyL3QrWjdHc2d1WFhHbFJHUGhkZ1F3dmFhdE5RSnkrOFlYYlgyV2pTSTFLMENOLzA3VVZLZUFtYXloUmc1bzFmT0tweDBHRnBWcG1jcGdzTi9iS0puU0trTDNLL3ZQbjdzYUIyRjFjckpzdnRPTmdrUGdZUlNOTFZIdGNsV2dVNHRPOHViaUhDM3lIWE5nQ2o1UzR0UEZpMTVoRjBTVnpoQk9NR3lvMWdjMEdsN05kSjhXcDFuN1JZZjgvNnYydU12elZCcEM5cjY4ZnljVTd5dUhsWWdrenBFU1BuL0xoSDFoZFVxT2ZaV216VXhwc3Y2YTFpSytSYzQvcGxtU1Q3ZzAvQUd1SnI1NTNSVGU3OUkxdW02aVFWZnlBYVBSSFprSmR0QWw4a2ZIOEFTcVhVUzhMc055Y3NOc1Q5eFd5YlEzN3g2QTdxNzhlV0h4d1EybFpZSlROd3dZMjYxOEVKWVhJaUxxZ3hTb1NVUERGTmZBL0QxREgrZlQyUytkOXZoOGFFUCs0dXA3R2hJWXdnT2hlaHB4MDFyaUxCcm9uREdEL2phN0JnWnZvT2JhR25JUExsRHFuZnhiOWtlQzJ2T2plalRBbGhla3lRTE1nKzJFSUwwYTIvRXpwSHlTY25kSlFmRVVQNGEzK0ZURU9FbWNkcmYrV3Irdm9Ya0ZGWnU3OVMxc00xdW5ST2hyckhneE5EWlNTbmkyRGRuTjhuVnVYQVgvQlM4WXpmZk9BWUR3VFlNRVhJYXNrTDlPYmFBb2MzY2hzdTRsTTJmWmo4ek5tSjNRNnFxc21INW1VRlQ3UU5JNlh4L1JqUm5ycnBnS3pWZlZWMjc4UjVRQVdqZlgvdEd2QzdlNnVqeGxVb3pRTU5GUWVySU03SDNGVDgzT1R3UU5XUlJTU3BvS0Ryc1FEMmg5T29DZFBMSW9Nc0ZvY3BKS05za2xIeFVBZi9UaCszbzE2amZpNVNVOHg4aEFmcXJ3a0tVRDZ4a1pia0JuZ3NoSmdIc1krODQvQi95VS9PNS9DOU9zQkNXSyt2RjZNNGlIM0N0RFEzWDl4TEJpVjZMKy92Y3dGbVlVUTE3SnNrRHlPd3lSQzJXNkJKZVhGZVhOVllTUHM0b0N2bERUa0ttaVpjMzBtNUMvS2k4d1lsNk4rRlBobE5HM1lua2V5ZCtVTEYwb0NnU1Bmb1lEa0JTZnNJTEFCUEE1MWhXQkZzU3pSR3BGQWpxdzZZRmx4ejlWeVZJdEZlWTJ4azdrUmUxOE02NmZPSlo2Tk1hVWJpMHRRTGh4cXMxc3krSEtFUFd3dldqMjU2T2FtN2FibldvQ002TWoxQ0hjNkM1andEc2pUVnFaRy8zbmFnU2FJQjZpNnV0L0JBNy9ucWZqR2g4eXJxR2pYVXV4cDhvRWw4RFNMTjFHQmt0U3l3aWV3bFl6Zm5wQWFDeGZxYkx1b2wrZGcwbUZxeTVWRGl4TUtCTUcxTzd4NHQzMjBybGpjM2FNUjFmTS8zajA5WHdrc3oybEdoUTYySEVueEM1MGc1UDhLM3hSTzJRODdJMGJ3Ui9pT0ovU2h3Rkw0Z1hianFKeHhhR2ovZUdyaG1icWI2NmVxZzlkLzJscWtvc0tPc0FqYzE1bjZaQTFaem94eHNpclNBdUliNFhFZWJuL1llV3A2NFROOHdLNm9iL25ZVnc2QnhqK2tjSWVmMTFPNzVEenU4MXhmc0Z3SG1oYmZOcGJxNlFPYWQxYjMrZDVxZ2pzeFEzc1JaOEgrWmErV2kzQWlOczRtalMzQURiaDZlcEtoZEh6MWNxNElhakF2OE9YWk9DdXh4SFNOa0FIeGxSbVlaREJzUHJUMUtMelhjVmxDbGZHQjJMMUhSdUpzUU1LTFE1TUp5WlBvYkpZMjhMa0dXaG9LSWxzYUwxci9Pb3JXNkdYNmJyVm5KeFJRSDg1VjVTUlpCN0MrdlVVTzNtMXFZVnIwaGdOZFQwL3pOTDJJR2o2cHIrTnk2Sm9ldmpZWjF3L3JoQ1AzN3BiaG9qYzNZWGF5T3RnQ2E3YjFpZzZFZ2dxQjVENjZ3WXZta0VXbm4rbUxOOUNkYnZFZGg1QmNCNXBTRWFBLzhTQmFMSDJpbW00bUxsQkhDeHhIWXNoY1FRNXNhdXo0MUVqVnppTjBtc2tndmQ1dVBuL050U3QrTzdxeWxZSmhTeXFsd3I0VEpXTkFza3ZkMVEvL2E4M3MyK3ZzVCtQZFByL1J0UmRpNXZXS1ZBSGZTR3pyaVhJaUgwS1hwQVhjbU5ERGdJSE9kOXpUTThGMzFmbDE3MEh6bGEzblBReDM2eXdGcUpqTTNUVzZZeW44TzBIeG5ZeVBrV3VIOTU4aVVWSnVVSXRmYTAxaHpYMjgvbUt5UkJIZlByTWlWbi9kNGwvdk1Md0pjQ0JNbU9jRDlqMzVvY1U2ejBjZVRvU0VaRVdSREE0TlFqc0RpaFIwSHFxUjdiSWpNM1ZraSs1MFV4aExkWE5kYUd6MnJRUnlvNWlMNXRuTElLS0F4TnJEanVrUzZ6UTdwTG95QVVHODlWdUZLUGZRZ1JLLzlSY1ZMdzhOMlQrRGYzME5ZV1c3SmxYQTZYTGJYa0JVaDE1bVJXMytGMGVaaEdvZldCeWQwVWxiZ005Z3dmOXJ0blhsVWZoRmdkeFA0enVKM1hhdWRoZ3RxMzVWa0xKNm5qa3hUU1haaUlFeEpvNkhiK1BmM3NBRVlXdjZHWHpObG1UN0pzRUIvekpPVWJvUytDaDQ3M0QrTkRFUk1pUFlkMlBQTXd4OWdKUlJyb3QwWjlrMWVhMXBKaHIvcnFKNmI1ajd2TVcrWnFxQ3k4M2tNZjVtdWdaRS8vbXBTWitsczAvTk45K0dMalFma3ZxVTV5bkk2Q3V1V3dkTWo0VnJ4TnBKWmxNTUEyRlArQnJJaG4wM3NxTEljcTdGZVp1TTdrb21EUjI4b2lodUdKS2lKSk85aWJVMzVZYmRxOVBjVWZoRmdveDJRN0JUc1JmVjJrTVRJNFk3UUNjazI2MndhUkY1WjQzeGpocDBtdC8xM28relB0clBKQ0dERnE4ZmN5MEV1UTRMZkhWSS9iMkYvWloyc3lxdVVZWjl1RTMvamh5bGQzS290bjdlM3hPTmVZRWRZbEYwbTU4WEV5cE5MYzZVTFRQVi85SStUMlBDQWVyZG5BWlREZ3AvS3BCdis3WkZSS1hKaXR5aDVIVDc5dmFPcVplN3VVZ213Nm1XWGR1Mng1UDFpQVFqZEp2ckZ4OE1WYTdjQ25Lc3pFckx1VkJOZ1RmUGRNalJCQ3JFamM1STdkejd1emowZE1HQmNOVERPcFpyU1czSGhWdTZ2RUZkQmYvbkZjWTBaRzRzYm1kRHVnVUdiQkQ4Mk1pVEErRGs3TUVhNmVzZ3U0aW5XWVJNcHdqMk9jU01lY25TbktMVit2QTNEV2pzTVZwa3VpNHFaOG1Ob1RYWVNSV0tkaGxnMDdpdmIwU3g4M2FVRHRIWDUxTEpjK1dhbjR5RGJHbjBkcGtaNjUvNzdaUldWNnRvd1dSRjhhNDh4T0hIM2lHU25YczhLS21kQVU1M20yZlV3WFZibHVpN0F3eHkwcXBYb3VkY3dEM0o1dzdFZ2hxZjZkcWlZUGZ3MVdzVVdzK0FINW1QQnUxUFp4dS9lbXQvL3BPNE5mR0djcDh5akdKWkxYbVdON0lZQ0lrOWFQbXh6K3I5c29PRUVodVZZWTgzRlprWW1oNmxxTHlLNzFEdmpaUDBpd0JrbDJwZG5BR2tsZG1FVzlOUGtNQ3FjNkYrbVJ3U3JpWENNL2pGVXZ4MHBuRTQ2S2ZvbFArOVZhU0ZIdUJmK3h4bTlZK1NaNWJueTJlWWkrZlRFam5JeWZPR1R2VXpnRmgvcWdSTXNtZ2w0MTZJYzhRZHNwdzV3TnZPVEszemZsMHd6c2kvY2srVTVGU3E2eThLT2FpZHlyT3pxWVllWkw2RHFxYXRhcHBPbEM4QnpZRlZiNy9RSXBUUTRsb1UrUHNucng4QmZacHVyd1VWT1NxV1BOM3NubGVRWEFjNnBKL1hXaE1EWmV0YWh1a1prdFZSVHI3bG5TVGFTNWxGeWNiODRlWGRqb1R5UEtDQ0ozTjViWHlEVGR4NGMrU1BkQ1lNT3I2N09WK3dKbldBbUhRN3R5REVhRHkvSlVSTWsyRFZrME01MGp6WlNINjZiYjJVMlVaU3FaczdCbDJDSFYrY28zeThEOG5IVHh6UzJRUmJnT0R1aHdXMDJGRHVxV08xdnJYM1F0bldRQjJ2MVNUZHJ0QmVHUW9sUW9UQmVrNGpYUlBDNUZpMmRGT3pBR3R0WlZDM256dHlqM245WVVtaTljdUo4cFhzV1piWHZab2E5dWdaMk5mcG9tSy9OZFMvUkIzbDVkWjQ4ZEhpeThtSFg1V21tTXdOWmpuS3VmWFEvOE1LK3NRY1YrbDgxTUY0VmMrd3BDVHdvZFJIdGh2OWw2N2R6T3NYdFRVd0VVRFc5UEFLTllnNjlLS1BaTWtXOWdrcTAvR2Fna3hWVXJXR2R1QUtqTHR6Wk9GWVNyanZ2Q3dVczNDWi9iRXNIeTJLV21HQk55QWhIZzh2Y0FRT1lmSC9lUjQ3b29lRGFDaStuTTN5NzdZRGkxbUtlbXgvM0JISy9IMndxbEJzR3hjdlp5SCtmM1N0R0RvY3llQlpXenpRWGgvczVnbDhFdUZ5L2FSMGkzQXVpSklRMWZ5T203eXBXQXB6WWpKQXhpdmpneU9SNlg0ZTc3dnZRMGp1d2M5S2M2eDBmSXNmZ0pydzBya1A5dktTRkdhV0tzT3oyNFVuTjF2dzJCVVl5NlVlUmhZSzBzazFSbFhvRHRyUXlScTIxVVVHbEN1eUxxK1craFZuaWJ4akJQT2FFdHhlMXJGblpLRUJ1S1Vjd1dnTnRXd2h0L3laRkRpbHcyRXh4UUI5Qnl1ZVFLY1BZVzlscWVHTFhhRlZ4ZHhQU2h6dWdiS2FmMmtVK2hjbDcrNElzMlh0Wkg3VlJ6TmxkSVo5RG0xS0xYNEVOaFIxZFI4Q2FTOEM5emRkYkhFbHJ2RjIwWm9aN0Z1ZklhMGd6bllIM3ZucHd2RHc1TmxVTlJ5dXY5VXdUKzBXQU0vVlVUWlNMamJWbGVnNDIwTWtBa2lNTno1MzRYME1TNWZyQkNZcDFrUVJqLzBIUzNaRjI1czU5eC9CRStkZFFiY0d3ZnZnajdLWVVZSHZHUzJkUmlBWEMzZnYyaGRuS2pEYnFrNXNxTzdTRnE4OXZDZkYrN2svbTRwMnN6Mk9PZFhKQ1E0UWUvU2QvMmh0ckNwM3lVVjFGREFTUEFzeDZlSU5wZ3dQNWVNOE5xK1lNL0RzUEN1Y25Hd3BWSThPMVdGTzI4NE0zMjQyTTRYTmZ4dmVPUmxycVJxeEJNcEo2NmtiNUxaZXhCN3Z0TUJmcFZQUDFiYktsNHZkUy9YbjJjczZDaFhlT1Q1Y3V1QkZNdEpQb3ZibFNSZ3JIdjJIcTVHT0hmbVJNaWt5Q3FmbmVScTFtdW0rY2U4T3BpVmdzRVByZUJwaU9DTE01SjlWQVlQUGRRK3pVdlgxTmRJUmRZNGpCMGtqWWx3c2E1WUJmUXFQODEwK3RqQVoraGdaNlk3MVdLZWZzMUEzalVuUkZRUE9rcnBHTm1EaTRMcUp3ZnVId1BjSjBQN2FSbVkwWHEvRW9OaGMzU3BWVU9qYXZuenVxSVlYSXROWFNjNk1PZWc2RitwNVJqYk1uQnY5YVU2bE9ONllLTlFtL0NUQW5KSXhJY1MyVlVxT2JHNGt0NUEwUFZCOWNsak0rTFJMSjloVFZIUERNOHYzeThwbzhwOXNDdWNoS29lNmVHNWNxWDA3dXBGNUhUaWVOb002MXU4RTY4TTVKd2ExcVBqdURuL1dBSHQyREFxUkc2c2tHNnBpRFo3Rk5nK25KQ1h3VlZ1OXF1Zk42YVRYcHVYb0pWYXlMTVlVVHNabWU2SVR2cmpxT2Fock9oVEJNNjRwYWF5TUdTc1ZTV1Z0WC8vMm9IVzAzZUd1ZFZ0MVZZbU9XczNHRGxnVEpJN0lRbkNWbFUyWlo4eW1pK0REdjVhLzlKc0FjTDBsZndoVWhNT3FWTzdRUS9ETGNDdHRxbU1rOW8xVys3cXE1bWJMTURXYktqN2NVU2paZS93S0VPRTVQSVkzRkJqUnJyMnNWVllYNmpmYzBqVlJiMTdpdGtVUEMyRldWak1VeElDRUU3b0ZGMHFHbEdDVU5oWFloY2I0akJralNCTVdHdG14TkhNQzE1d0psUC9kYUJBYm40N3dOLzgzb1M2NjA4ZWVvS1lOc3JBcjdSbnREZ0EyU2MyZXJzZGJtVjhvbHMvWktxZjVaMmlSQnE1cTNaT3RPcU9tQ09Od2xVVDhPOFEvbWVFbTk2MjBZN2xkK2hlZTVZTDhKY0k2K1N5V0hPVDgzcGxBUERqakxhTWsxTTFhbmkrRnV5bnl6Sno3SEx4a2xjdkwwU3ZudHpHNFNEb0c0Qmo2UHF3S2NxNTgzU2NZOVRkL1FFamtXcHQwa0JFYmlIQWhucFpvYkZDQ09QSTZ6ZXpkUDVVTitNQWIwT0lXUGhUZldBQXBab0pvaXdUcDJaNHRwV29KeFBad2wzT2RhK1NXajljdFFjK0EycFlSN1R6eFVXV2FmT0ZXVDNRc1pDR1pGdkpGSzhwc0FieitnQ1ZJZm5NeTJJdWVFS2s4WFlHZGpYeHlpeGFaK2J3aXZBYjdINW9JcWxaTm01SkZGN2E0dzdSdDE0Qnd3OWxXNmQ3cHFNb3RyWkFPQ0tBeTZST3REcU9uVGNkRTBGUzVvaWRhRmpDbTJyQ25iWVNKdWh0dnorZVlpS1NLcmlwVmpZUUtkRXJ4Z1ZYb1lwSHkvYnRpMHVQRW82aGxvb2dkR2FxNUU1MGp2bFhXcUVhQ2hnZlgrUHdzc09BSTBTdmVIbCtZY1hERVZoUTE1TVBLMVhYVHRTSkwzRGdoSWNRNFNYUXhHclNsdjVkV01ZRnRkRGg2U0xIRStOcDRYeHFlcFdvT1pPMTJ2REhRRXZ3bndtbnp0QkhvakdQVFRidWRmeDg2UlpDZlRUL1ExdkNtOHhEazlZcFR3OGdhSDRhYS9OQzVOcGt6ZjQzUVJnbEVIN2drWXBPUG4weEpoN1hnQ0JDazl1bkYzRnltRDVtZVdLWDhzRTVGVWx1NXg4OWlKeUdoMlJRT1RZNVh1ODRYby9iVU0vckJPTncwQ1IxZUZ4UXQ5c2NteWttaFNITFI5RnkyUVE1N3RPWEFEeUhuTXNsSUtPNlBhbkw0WWdUZnFqelFjZzBPa0xXcXVibnl3SHNqczVNU1FNNXFlVncySWsxaThKOTJqVHZpZU1hR0JldTdYb3Fyam5LMVJ2KzIzZmZLWm5vZmwrN0l5ekZGbTRkTkpuY1NiNERxa01FL3FGaVUzd29KN2RVMitlQUsvQ2JCQkw5b2oxclZvYmc2Q0htRXRGQ2lrNmFZUE44bHpmL0tlOEpMQzlnVUlMRXRCNzBjTzlmMFRPeW5XL1c5UDZlejBKdkVob3RncnNpc2tGV2tKYmpCcTBCY0hSWWRyRlVLTWxNYnBLUlV1U3BhVUpvVTNYcGlNcEVicTJvVGl0emlySENtTFNsbVRXeW1yb0lrcHZLNzdmZzJCdnkxRmpzdFVxZFVPZytabUQvRnhNTjJibTZ0RTA1aWJGU3VTK0pPYmgrSWNnem0rVC8rM2JOeEw4aTBiSTBxYUE0WHI2NU82S08xbEM2NGpnL09iVkVHMjFMSU1UQm41WHZyRStRallCZUN5UERBNlNSNUJIdFlRNFBHd2hoU1YwdnBDdFNGeFJNcHhuYU5VY1E5enRSdGc3cExsSko1OGE5REtkQ0VZM0NyRSs1RngwcG1VSWszL1YxZm55ZXZJQlRNdXNlcUNuakNsM2M5a0dQQ2JBTk1jWnBDZ240dU1pTFZpYmJHVDQ5NlJXbGovNmVXNXNyUFlPOExMbWNIdlQreWtGc1E1MkJTTU9UaThNY1lPN293UWV6SmRYcHM2RUtBMEw2dlJ1STF0SzY1cU1wb2VxVThrNkJBUnFBSmE5R2ZKQU1tdW1vZ21XREM0OWlsbys2QzFEK0Fla1hXRTJwYitNR2NFemMwc1ZjZjlrcU9FbVFVcEZNYjg4anFWNCtiYzU0SldtSVY3ZktmSWc0U1grQlZXQUsvRStSQTI5Z2UvdUxwbHV0YlIrclJBV2hsa3hqUmNVUWFWbGlEQXlXSU9DaXdGK00vY2NnVHN5bFFBa0Q0eEg2Y0FNeVhKelNDcWlacDRXa2hsZU9PUE54YktiOWhZVnVCOURYcGpnK0MvcWozN3dNUTZSQlRIcG9XN05HK1hpeXV0bVNqMG1UQnh6MFdBaGtQTVh2YlFQREZBdjRnTi9zUS9mdDZyQm9PbDZGRlRFbjF2SzZ5VyswWWxPUzNFN29LYVJCR1pWelpPay9HNzlJb0psdTRRSms3VzQ4emJickJzV2pKZlhRRURZbXdnb2Zha29MQkVsUVg3ZitaNXg1ZHJDUWxORkhwYzBEZE9KbjIzUzQ3c0dDRjNJalUzZTFkSlBRVndVekNpNWNHNkpjZDdTRi84dHVIYVlZc0hrSHFVVVFlL2gwRTd6UFZJNG9mTmlPbmtZTk5idGI5U3JldmRKVlhLQmRsazEzVEQxeGxXeTE5ZXVIWitGZUExKzh0VnQwWi9wRDMrM084Y0wzQUJ6SmFoU1VFT2hWNGwxWEVqZUZIdlhleWRUaCsrNXpRSUpzMmU4NkI1VitrWHZkd21yL2dLY3NxbDJMV2ZnRm0yNU53ZWF1STl6YkdteU1vNWlFMmowOUdBVUpNYWUwbXR5ak5pcTkvUE9CeHRCTnk5NlpPT3hzWkg3cThqRVdSSnNsdmNGTFlzYUUwRzEraHZaY0xNWkZTVlppUTNBUHJOaGRDU0RNallwbjRZK0tLR3BtblA0QmVMK2FtdFNYa3pBTiszZTFTSTVndDNhU2hvK0IzYW1LeWU1QTFyemVhTWlHYXE3OWdVYytYc0REV2Q4dDJKSGVYNGIzZTZsSi9uYzAvNlliZGlLTzBaRTZMT243RVdsdGx1aFFCK3U2TklSZVVaT2lpR3NPYmlXbWJnbXJZVTk2aXFxVll1MEJBRXg2NGVFQy9wdUpaVUJnRzR6N3hXMU15ZXdxOENQQytqVEs0ZmtvaWNXNVRUQXN3Um40RUJrUTZIYk44NkxMR2VhdFliaThrMnVQSDQwaHhaa04yUVA3WXREQ0RZK1VRZjdCTUVQVzdCOTdoNWFLSXk3N0wwbWNLMnhWUkdEclFwa1BYeVVTeWcyK0ZuZjdHbFNFYW5oQ2xPNnlPUm14d0JBYkxWcWp6UEw3YVdLSzZsN2JBRS9rSndjRitaZTRHeU1naTMwdkROZExxeFJXNTRFdnVaUTJFOVJhcXVMUjdFSnZpS3I2L05sMS8zbEVxdW00Ui9UU0c1aVpRT3o1L2RZaFRDUjVibXltTmpVdVRWOFIza0VnaDBVekFDNTdWMWpkL25GUnVMTFFtbU1SdjVhZll1MlZldVloWXFjbzUxMXgrYkdkMlpoREF0Q2grdVA1Nm0rOEp4d1lFT2MrN01EZ1RvV3Y4NUI0U0w3c0N2QXJ3Y2ZnRXYvRmdTYWE5MmJ0U0VFZnhLc0NFRElJN0ZlMXpRSjFZVkdIeXgxZk11RDk2RXFSQkdDaThKeWhoOGNBVGJZaEVHZjlpclNnRTl0MDlNUFh1L0k1ejZ3eTdWcXNnRmNHYVBhRVI3ZzFSTVlENDJ0WkV3Z3puNjg5bXhhZkxvNk5UNm1VeGNBSXR4elZiRGRQMGRHbTkxWG9YWHA5MjFCQTZHKzIxZnFUcitLL25LRWpvUkd3NUgxbEF6cy9tRHhSVWZZa043YVZXK2xFRktxTmxJZ0U0TDRJZWRKVzR0M0hpOVVtdnE1Z080dHRvR3lITy82L2ZzK212dzF2b0NOVDduSEZ6N3E2RHgzbDd2K0o0WlZXY0dKeHJaTmhpY1V1a3V2V1hRQUJYRmw5akVXMElkWnkvQnA3V2RPTUx6NUthZWp4akIrVENiU2VyK0FqYVpHN0RCdjN4MEIxV0plTS9pYlBFRWZoVmdWdkt3Q0p6NVZKcHIyVTZrV0F5TnhqR1pxL01hdFBiVGV0M3FIWXM4dXlBRy9vdG9jemVZVXdZL3RDUFFWTy9xSUlyT2lldzhDSnBRakRaUitMaXd5UTV5STdSek5zNmprMjZlMjdJeUZ1QWFQTEE0VjdXYnZUS2hnd29tVWNQTzJsV3FybFZKalc4RnRpWFFqZmtPa1ZvZUNTR0Jhbm9GTjUvTElVREg2NmEyYlpUMi9sSEpjdmZDYkpjYjJobDA0L1c3ZVVHV3ZQSlh2c1JCb0JsNUp5WmcvVEErc0xPb1JoNWFscTBtSzl3M0lrblIxeXh4VUhWbjBaUGplWHB6RE84enZ5TWp5eHNMcktxYmlPL0gyZFFNQWo3M1o2NEs1SEdEcGFEZkRUOTV4bzVpZVdkRG9SVEFUZnB3WW1jVllQdDBjNEhLZ0p6ZVV5dVNZYXpnMzh0eVZjTUdoM0ltNFJ6ZTNsQ2c2SFptbk5wRktaeDJMY0RFcDVzSzVTaGM4SXY3eFRvMTVuS2hYb1hESVZGZmI5ZDRoK2hUOGdhd3E4Z2Jac21UcW5FaFN0NkIxbTFLZUFrR2RjYkF6T0puTi9XNTluNlM0YmV6bUl3NVJudEsxWGdzZ0tlUFRKWGo0TWNkLy9WT1dlZmorY0dlZ0JRenh1YjFUd2d3RzBEc3djYU5aNDVJVTViR2JoZm5FaGZyYlowa1hoZ0tNNWFCUlh0MjB5VVF3a2VXWk11cjJQd2VISjBzcDB3L3VNZ2d5VUhkdFZFdllJdFhZSXF6Zi9lMU5RV0tMWVFhbWh1SDhwbGhWZkJnbk9HNzdVV0tjZkxhUVFscWNEbUpHeGhQWUVEVkNGanhOUS84a1FPTHhDcGxMQVpDUG41a2t1ZTBTbjRYWVBJaThlUk9oTG5wakFEdmhkWWpEY3hwMk9XV25OTkRaaUtDZUZJM3JhMkxacHVuWUpQOUZWaDhzN0JMUHJDMCtVRFlpd2hXMFVkK1pteUtYUGhMaHJpQ1U3cEdONWsvWkRVVldRdmYyK0FkMWtWV0dkRTBaTDZVbG83R05OSFlSeU9KNEc2a2lqakUzQmhlN1VtcEg2bHlta0lBUHZyeWdYSHlLTXhKWjBHUk0vSzc1Ri8rNy9nMFZYeFNybzg4WVhxSGdjWERJZEE4Y3VCcTBVUTFjcmEyQ0F1MlNKbWQ2MEZTUmQ1N1JZOFRyUG0xRXpwcXZ2M0NzN3NyNFUxMHdMNXhwRjZOWjRCdUUvZG91bm9VNGsrZ29GaS8vUVBXVTJ1NE8zNFhZTzVJSDhDc3VBbG1wYU9MN1FnMGsvZVYxc3FsL1dQbG1rRmFUUzREVjlrZVZqbWRES0ZpbHhBdjlJMU9GTEh6dXpMYWZObUFPUG53dUk1eUh5TGZlNTNVS3FrdDFObjJpWFV2eWMvM0hZV2dGOGZCZElrT2tWSEpZY3EvZGdjVTVBMndBTFloT0VWM2hZR3lOVGdxblVqNVJZVTBYMndUNzJMM1VhUWVCVlF4Q2JnM0ZOZ0t2V1EwWE44SEdUaks0bHhuYkZiR0VQWUo2UWV2S1piaTV0bE45cUR2YXQ4aFJvMVB4VURUblkwY3BJWmx6anRUTDVReEl0UE1RTEJJeENoZU1ZcFMraUN0dDlsQkdva1dJOWQ2dTg4REc1aUdTQ3NibkxrREx2cXBaUUZtbDhtankzTVErUzFRQkcyY3NPQ053TldQME9iazdXVWUrYzFqMHVYaVgvWTJPZjlvSWpRa204dnZoUS9EZ2VOa1plZ0hzODdaUFBEdUZwN1RuQWF6QlJjRXU2TFlyM29Tekg3Yk9VTmM0S3pLbWcyM0k2dWtSazJqWUFpQitVcjY0RVkzRTRVZ0psUkxJVEZkeGpSS2QrU1Y2UnNhelF2L3NQbE0rdUkwSFJkbWtyaThYTFhZMmNNZ0xtd0tlNHRjTTUvSlRVVXJnV3VFMzllZ28vMElWc3BuOEtkWm0wMjZZWnFzRlRaVlhZTVNEeTRVU29iRVY5b0l6ME5MY3RSckdGL1JXRk5hcmd4ckNUVFRnNnlpNWorekFDUWVtOHB5WkRFZU9UeEZiVUk3a0RlKzhiZE04UlJ0UW9CWkpQOER6T0lwT05ranNWZ1dPamt2eU9DVXVtT0I5MXErYnY1OW4xcVFERERNUEsycm5JM2NyNzNwOHpCOHEydDF6WC9Ea0FvNWQrWmVWWDNFN3pQejFLNXlGbDZ6c1FYZmRXbE9tYXlESUF4MFFHckFvdjgxelNUNU9mcDBDRFFycDA2TVNnNnZOK3N5b1gyNG9QbmFCVWg5c09ERUcyRHpmTGZZWUpYS1l1MHlQM01JZmw0M09FSGxTNWsyNGp5Z2IyMm03dEZQWlJESDBmRHdDZ2pQRnk3eVFWRUJGMWZVS1pvajl1TlNlSDlDRE9TdVB4cUNRQ1JPajRWd2szakJFUEFFQjVxZXVmUXROaHZJM0NhNm01cHFkYVU1eldGbXBHVmlWU0JUWEJ3aVFMT2Jnd0JJNWVTUWYydFF3Njlic1Q0MkYzcCtmOXFFQUJPUElpOTJQQllrZlp1SjMrNlN3cXJtODRnOVlSNXl0NTJGUmJNbzIzT0dlMXZjaGcyQk4rNmZnK0xscThtZDVaeWY5amI2UGxmMmoxYzF2cHd3ejRqeU4vQ0RMNWkxVnhaaklYdzZ1WlA4NTZoVU9RMmF1RG1hVkpxQWw4L05QS2lJZmg5OHAyZFg3b2VQSEtVNGxBeHpsWXZwa2o1eGNtSGZPRFY3aDZBbFFuYi8yYnRMWlRwOHJOWXFwTmdGamMzRHR2Q0FRbndrelBRSnNFUk93SGZsY2Qrb2F2ay81RksvaDJBeG4weUJNbEkwdHZoaFo1SEwzNVhsa2l6WW9JVlJvbGVpL2VwZ3VzVk1iQ1lVWUtOVzNINlNvdEVaWmRBUzg3cHl5Z2FyK3pycXMzNFpMNkNKejA0NWxvcXlGenBXYjhLUFJYb3hwaGxLWWJhOExzVjZaQkVQclo3dDJNZzI1RmRKZjF3RDBqT2w0M05tNHpzeTdjYjE5Y0lxNTlLblRhSE5DRENqdFU4amRjSkUvT1BRY0RjNTBLcTgyRFRuT0ozd3NURmF2Zk9EeTV3UGhMaUNSeERBb29CUXExSkFyNWlUVVY4elM0MjNFemVHZk1vTWpQSTV6eCtaSmhmQjVPWjhIQXIxYU96SXpiVVpVb0M1aUprMzVqbFJpRm14OHo5RVBBMC9tdWRiaWZ3RGZkclhqazVYeitIRzhpRzA3QXprVS8vTUsvZDVIdGdBTnc0ZUwwSmcrYjNPZ05CY2pGZ0F5ZHJJRFhYdG5FeFpDVXRnQXFMcHh2a3h5SFJwL3pnNUIzbnkveUVWdE1FRkRVU3FuR3pZeWJUV0diUmlnaXJXZ1NBWmVWZytoMVJEdFhhWEoxbXZXdHVyTjJ3NE15ek5kb09sUDAzenVJOWV3NzhRbXhyWExaazlyeDBjci9Mazk4SXFzSzNCNTNkU0pBdjRqMUY0S29nL092UlFzN3NPR1FFbW1JaG5wZEhaTUY4cEpCUVFZNmMrRXlIN3g3QTROc0gwWUhDRjBiNHZ0eDVvMWZJOXBwQzRIRzZsYjQ2SWQxUFBHWWlieWJSVGZ3U2V2dDZpYWVXSlhTSWRDckRoZTlrV0N4aEJscWxiUlRVSUdBSk00VHdMMGZhWEViUmhOdytqM3Y5Ym0rODNvVzBLaXF3TjMrczlaQUhZQUhBWDhxVFQ0WDdjc3lCYlB0eGMyQ2lJUkZZVm10VjNERXVTSytjNTd3TXlNcisrc0ZiVzUybHVCK21WTG9FbDlOMk9oc0lRNW1BWklPTEdhL1NNWjlpNUVVbTZKczJ3QzNqTzJsVWlQK0ZnSUlwNVlEYmIwQlQrQ2VleEVZRTdyWHNzcUQ3VmRDa3NvUnVHSnFpYzg2TUJ5U3F3eXBxZUs3QkIvVEtsbTVyOUhCVVdvTlpHTDZ3THRwN3l2ajBJZjV2dnY2bWdRcFZ0ZW9vMkpjREViUXV6RktjVmJ3NzVkWm1JajFNN21PWXJzbTc0cmhGYXRQQzVsWjd0WHM3Z1dRZ294Y1h3dDMvYlc2cnFpN2ZaTUE2dWhpOUxBV1p2S3I4dk41aWhMVXo4YzFUYlM5RmVhZVA3Y3VkL0hqbGhCcHd1UVpwcWJiNXZHZ2ZjQmN0TDMxaFhvRVpuZmpXNUN3STJ5ZkQxeXh2RkF5ak05STBuOTRpV21FWE8weWx4dzJON0lEVWVCWmkxR0x3KzM1N2NHZmVrREJxM1RzNkVaby9SQ3o2TURYS3ZYVm1wMGRSZll2ZTVOY3JVdHFxWlJ6M2dvdkI1Q1hyRGlsV3Zzb3JINzY4aE41eXNsMVVHNkJiWmNMZ1NjOC9zMXZBWm9SYTVjbEM4K3AzRkg2eHQveU9yWEQ3ZmVxRCtmQmwwQzNXSG05Z09iVTZBbVZhNkd3bnZsYm1WOG85K3NhcGdud1JrYjhEa09oV0o4U0dxRnRqUzVIVDcxb0JSekVFaFp2L3luZGh0YlQvN0JHaGJqcWxjclErdVlyVlVkQlB0ZWxXMXptdlAveDZWcG5idW0yYTJmZUcxQlRlNDYzN05sQjlPN1NMUEhwRWlVK3dLSk42RmtGTUxYdzV0OWRKcTV6dkdTRTdIQ1Jxc2JDS2pDSzBaUm5ndjZLc1ZTekJLemZKSTIxcnhHanNmMkppb3NkOU9BNThNWlhGeWQ4Y2tlZjF0QW8xbkl0REtEU0pYajFpVEdvZXRsbXlsSkdFaE5UZFRuTHVnK2JkaWs3ZWZPMzM3TUtSTG9iV1ZLOWpFQURSWDBPWUUySUJ0T2FLQmdkQnE2WjIwcUtZelJSOU5ZUXA4ais5ZHZIaTJRc3pBMCtrNkN3Znp0V3poNDRaaVZGbXhLS0NselNXa0JWS0NnZkROYUo1Tnd6VlltT041MTRvdFdONUpQaTR5YWREVVpLQ0grd28zSUhkSjRPeXhIUDR4eDltd3BQSThwT1hZbEdHQWMzT3BpVmdvNFl3QTE5TUk0MmNWVTNid3IyMkRZNFVRSmtaOTY2QkJ1ZUdSTXZqRFRZWHlBamJBSEx2QndZWUpiWlRra2g3cFR2aWtkRkdZOXpYbUNCOU1FczhBVlkxU01DMmhQd0pmL1dFNmowU2dqMm1zdnZFaGloTDUvLzRxVUdXMUZGNnlXTjY2d1BPeTN6WXJ3STV3dy94OXN2ckNua2lSdU4rNlJwNm9ONDVObDlNUnZhWW16YXQwdm12R1ZvZ05GZzdXTmhQdjY0WHpqSXpUalB1bWlieDBsWk5NL01mcmsvZW1lcGpmWmhYV1lYcktpVE9mdXNQdmFtN0VTRVp4dGFveFpwQ01EUk83UENCRVlGdmw2YkNhSGpzOFZmRjJHWVBYR1ZsZkNkT2FDOWtaVnRKby9mdWVDZzE1ZTJHaTJyd1pIRHNYSnZQakNIckcxYmRUV21ReHZ2TlpNL2VvTWtZaTI4NkVOb1ozR3hURmpKYTdVcGZONWcxR3NVa2l5RGxaN0VnYW5CU3UvRzlPOCtCUCsyb3RybFZPWUR4aVlvU2NOWDIzN08rblRjMnNrME9ra01OWmpFalZUSm12dDdrLzJlMmEvcHB2TWhtTFlSQk1vN05jcE55eDE4VFVacXhRV3FVM1Z2QnhkcCswMU92WkVobmNlQWd3bGVGQ04zdEd1WkF1Z2d0QzlrZ2pNc3NVeDU4UUhQWUhGeUV0UnIrTzJvM2l3K2V3ZW9rOFU4ZDBpbElIUVovMWs0MEhWSjdYVlpCNzZ6emt5S2NpRlRjVjE0cnRobXpPNERSN1ZpenhHblNNWUdTOStaeDV0TTJHWTFSTFVZaDVMakYycmdvbkFZNUpqWURXMDdSenFWMUJScnBPbm1lNEpIdzk4K29VUkZva3ZXRlJrZGVMT1YzeWZObFNITEh6akNta0FBZE1nUVpIR3ZFTFlnQS9ZZ1BjQnQ5L0QxSkpSVEN2SHgyZG9nMEx4M3MvalpUcDh3aE1NaEQyU252bHhISUhvM1FpK0RYNzNTL3dQNldIeGxMSmlpdERDRjFsMGFBUXMxckhLTlkzZHZETCtzWFZOelp3RnF5ajl5eHZ3UVVPMFh0TFNkbXlBdmxFVitQTkRQamRPekpKTHVtbmJWVFpXRUNmSWhLY2dQeGxuVVViWEgxa1I4ZHpkWm52WEFNaCt3TG1Kd3RUbUJ0bFp3MDFKWWtTbmtkKzJsV0xnT1NGRTcvYktjOGNrYXJtR3JGaTdPaE9EVzJXZzVORFZibG1jNGpVUThxc1QyZjZoa0xNbEV4dUV3MzFKSWtZcXZ1dDl0MUlMTHBnb1l4UjU4MDAwb2NUSFJQWEdYT3NhQ0d3Mm05UGJiVUtmckhPZVI4K202NFNVMlo4N0lsbE9ZclhqQkY0amxkaEsrTlFyTmNMK29YS0tYRFp1Rkd3ZG1BdTNBZGpNRUhQOXN5SjVRNmk5SjA0djhLOU5Bck5XM2IvM0FYZjR5TXNhbW9rbW1BelR1MHFOODdicDNwY25ZV2Exb0JGOE54UnFYSTk4bjhjRThONU9nU0YrUFZqMHVXMG5pVnlEOHowTEFjTjlvWUc1bzBkQndFaFR4TURkb2ZaVkZiOTVXTGdpaWtVTG02K0p6VW56VW4yeDE0RFB6VEFpVW1GMUE2c3RoSWJMdTAzb1NHb0pVbGs5eElpc0NkMWlaSUhsK2E2dE9IeHVSZit2RmY5enRUTThaMjFsa05lcDdISkVXb3piUTdSZXVDSnhSZDNMTXlXenlaMVVwdnZqZ09PODhqa0syT0R3UjhPS3ZwWWhaWGpvR2IrMjIxRjh0R21Bd2ZWTTdOVTEraFVNc3puR0dqYS9va2hVaEJVcXpaWlZtRTlmV1Nhc2pBWVNPTjVmVEdwb1llWVk0VGVRdUNPODV6b1BoUjZrZXlnWFFud0puMm52cUJ2akZ0QkxONTAxdWordEZzTFlIR1hKR1hLNjBkM2tNOG5kNUw3a0lCM3BRT0l0S3ByOThkcXBuZ3ZyWi8wdFZYNWlnaU9GQ3BzNmgrUTBMZyt1dEttbi9kS21GUWs0RFBtSkhPbm41ZFJxa29ndHlDNE1uZXZjK1l6dWErbzRWaUJ4UFA3R09jd0RPN0diUjZPYitGQ0pIazlOZk1uV056a3BUb0RHbmtNTnB3N0YyV3A1bnhYd1pnRGc1TTBNNzlCQ3VnOG1QbXNQTnZueEpRQ2NsalJaejNsaDkzeXl2ZzBsWlZ3aEp1SEpBcjNxMmt3L1FkQXl4a3pnTG14VVRNdmRsQzV4L2RtL2Zkb1hMZklvRUJKamd4VTg2cDREWGpzdktSM3MveGlESHJ4UFg3TExGWDBSWnludFI0YjhCLzRMUHNObkN5WVJGbTE1L2w4UzlvN0c3MFRkdlFCZUFPV25kdFQvWDdLOTd1YXBEOTFoQnNISmNqOW81UGxzY1U1OGo4N3BnWUd0cVpON2x6UHZ0RmNEN0FCQmpDKzBGOURmK3E3cmNYeTZ0ckcvZ3hUQm5jTTF6aTY3bHVVSTlPeGNaQ2Q0bi9RenZ3TWFrc0s5bnZyQ3hXeG1qc01tdng4TW9ldzhXQTYvRlJHVFMvb0V5ZXRBWDdYenpZV3lwWFE5T3h3NGpsNGtnMDROajFTVVJBOXZTSzMyV2cwTGE4VjUvVlU5OTlXODdzeklaSys2amsvN3BIbGVyNmRnOXVicThRaWlUMGJRcmh4a0txb0NnbGNsa21TWjV2ZkpaTStMamJlYkNmSHBCZzBUWkd3c2laaEkvSXdGVnJScmdTWUlCL1RkNGdBODJJNjY3dnlvczA1dlp1cVp4N3o1WGFITkt5S3ZBNENTV0grR0Q3Z25RdWJEdkYzVVFVRVhTUVZHdW5oSmJtS1phRXBzRnp1eWJFcGFzR3o2NFZSM25lUUF1Rk41NExrT1N6S2NpOVFaY3ZaeFRRV1ord09UL1c4U2J3bGNGYnVPSjFMMlJNaFpuQnFPUVNUNDFhUG1MYWoyZWZ5M0o2R3U4SmFZalgzcUtaaE9vSWlxSWRnSHFodVBCOUpEVGJEWTBYVkdoRStyem5MY0cxenN4d1hRNStjcjhxR1g4c2hkbXhMNVd1enZUQzd5QjZmbnRCSmp1a2NLZmZEMm52WDgzN3ZpblpsUWhNcjk1ZkxSOUJZbDdQUkFJdjNUT3ltemZYZ2NvZDlFYjRiQ3l0WVhOQlVtcE1id2NuUTZzdlA2eUVYSXpxWUVocWswbGIyRkRZR1N5VURQRGZqMzc5c29hdUdWRE1ya1YrZGpRM2tlbG9CZXZlTTBpYkYxVzRMYnljYjRYMEhtcDhqWk55ZFdld3FMdXdUcTRTWWJDUzJVV0ZYd2JyaDcyRTFYSXpnWHg4STZPWm1MQ3BhVy9hTUdkNEFJK1gyOVFhdENXUGVjRVcxZC9TbWZ5YzhPd0FYOWdsTlJFbFpuRTdUOWJTZURjRWlMbUtqdXNZV0RKYThEc0dsZWNSbzRTMi83NU01TFF6Rll0VU8vUno2TXhPN1JjbXMwN3FxOTdIRis4ZDFWSi83SFB5Mkw1MXNpV01xZzl6QkxBeXc3VU0xZkhGM1lId1BDcEl2aGRjQWhaaTBPRnNRbDZBUW45Z3AwcTMzbWE0WDFMQ3JxU1Z3YlJnK3FYR295UldJRkVjNk9mVGQzM2g4ZWE2cUFuc1l3ZE93QU0rL2M1dlJ3THdaL3hxU29EaUlxQ1U1V0pzQmg4T2hRZTBKeWhucCs5ZXYrMlJzUjQySmtrTE1FU29Na0ZEak11cHF6STVsUThHdHYyYzVaV29uNmN3VnIvMlZyMHlxbStIRC9vQUk5WGt6TlZQOWdSRkppaC81bGRWNTh0L1Z6bXVjNXhCZzR2azl1cVF4UmMrTUhhNEhnWWg3OFQzSUswMUw1R2hFaDMwdHZBYklSUEltdEg5eVdMQzhOQ0ZkeG4rMVExSHl1SUkvOWZKVFJxWVpxVzBPUnlGNDlvNU9zTzhNdUJHeks0a210MjFib1hvY0cybXhQbjYwc2xvZndTSmFSUnJ6K0VaRldybitiOXpjNjZ6YTMrVCtNa3h6SXc3bDdOQXptdkhUc1BHem45d1JOYktyOExzQVV6anZHcEVNUVl4UkNmTHQyTkY3eElXcTlBNlJVVnlqQ3NFTnBrQVdIcEE2OXNzZFJlcGdVUUtqeSt3YXNlSm1kZEdwYUdpYXZyQXl6eVVUTlNWQzA3YWMxL015aEpqSzBzZ1Z2N09tUUc0WW1pZ2I4aXZscVJVdEI3a01NSjF4a2w1ankyaHp1VDZlblF0aVJhN3I5YzJjd1BBdmZBODJVMFNHQnZoTmVBMWNpYzN5SlpqUHQyRlRlZlhvTkVWdTRBcTRvRm1WTlN3cHpPblhjT29HNjR3NTRqWFVibFFsMXdlcnowS2drZTJMWmZodjFOUmt1R1JKWldkWWN4SEJyV09FY3BOZ2dHdHVSb2xzUkhxSjlMTEdGRTVEeERrTXpsT253SzhDekk0ZFZ1Z1llVXNLSEcvbTRuTklrNlB4TUhXT0RwRnUwVUhhREI0RXJtaUc4c1lZQlJPMmxWRUU2MjgvUWFSMG5SdHNCMFo5Y3BhZUorUjdud3BUbXNVRGp5QVF4UzZqUzJlN1JsNTNqcDRiNWtKbFJIcWIvcjFXNVZUVXoxZHlCZThlcDJrZzVpMXZ4L3R4b2RCTnA0Rml1T3VoZGd1WEFSNXVSbzRXYTVYK29oQWJDOGQ0VDF2WXZyL3hPMyt5NjJjS1hKb1oyNHZscEI3UlR2T2EyWUlqUnRSSW1HYllQVzJ4SEJ2ZkFodDNpRm8yMU02RWJxclNqVzRZbjh0UnJFSDYvZVk1c0R1TUFiSllXR0VVOHE1UkdxVlFYTGh6M0YzVXlKd0N1UUlXeGZyOWxmSXJsSXo5M0tvQXNjaWRoeVhJZGRDK1RQZnRMUFZNK3hKK0UrQndYS1NyRVlpaThENjJGS21kdFFYSy9DVlZLRmtSeGlERndFUHRaQkRjV2pWV05BZzNPbGdtd04vaWRYbEJqNEJTMEJoVXVxaHZyS3BpdXJoZnZKb1E0S3A1a3FxWDJlMjNLWUMzSlYrajJlektlM0pCbm8zRnplNmN5UWlRY1dJRGl5MElSM3pGTFlIdVJXOXNKdDl0TGFvbk4rZDMyb0NOVGkwVWk5Wkl3Wi9oRUs1L0g1a21EeXpLVnRWVnZHRGpjSDI1UVBmaSs1eUlqWW5WWGpmL3RrK05adUV4RHJFSHpoa3V3R0tjczd0VXBrQWdXV0pJNHI3cmNLK2V4N1htT0ZoeUlPOW0rZ1JXMFZlSXhuUEszanhvR202dTkyQlRtVEpqdDB2bnRVWGYxSnFxWHJQSDNkRDJkNC93TE1mdExFb3E2M0E5YXVzN2tMaUo4KzhzV0lZN2NCM1pMa2hyS0t1OFdnMHphd3FNM2J5TW1NeElCUDYySWNkLzZad01yL1IxKzBXQUthaVBqa3FSUWJoaCtSQk9taEt6cG5SVnJZSUVkL0JaTzB2VVJEZEdIMjFQbEFMUC9PRjl5T2thSlhVVTRNZFl5b1ovbTZ5YnErd2xQdjZiblM2bEFsTDBFcmNLbTRhRFpKMGtqazNkTGZsbzlxQlB6OTJkaFFwMEFaaEdZdVNaeEdhc24zWVYxMEg0S2Fqc0Q3WTFuV21aMEdTTXhtWXpBdGQwYzJHbG91YmhkYUU1eVpKQUZqSnd3UTBOYnhqN3dWZ0N5ZlZKemtmejhtTUlLcHZoSDhiM3k4Tjdrdk9LV0lYN1FDMTdKeUxveVZXQk1qQWtGSjhUTEF0czZyVFA3aFVyUHlDaWZDRWl5cTVxNGJWNmFXeUhGcVpPMGhSOWRtV3V3MXBrUjZqVnU2ellRRUtlTTk1WDI5b0pQc2JDR3NPWHRlOUFjb2ZjcmhPVUFHdXJEMHNOazdHNERteDNaTUZQWFUzRFZFMjZVWmxlMEw2RVQvUEFGTDVISUxqczM2VHB0aG8zTGo0c0FEdDRxQkpTVmtaOWh0ellYaWZvWWZsZTVLdGlYNmh0TGxYUnQwRG9Yank2ZzFwZzU4eDAzc3NnNHo2MUpJTXhwQkNsU2JYaWZLMXc1RDVvc3ZkYzRKMitFZ0dlSjhha0tuL3RZanV6bThKSDYzbXZDemR4TURUdnoyZDBVeXdrWTNTS21yYUdMemNka0hOd2IxMjk3andYbGl5eW84dGJRK2xhRzR4K3AwWUV5R0I5eEdwWHVIcGo5ZTRxQTlUV3JKTm1COVRyZitXcDJNbkRvMU9VRlhZN0FxdWZidkU0ZmVXN1BQQzVQV0pVSlJSSnlWaGlsbGxhcThqTDZUdTh0anBmWGw2VDUvSkV1YXRuWjhvZnlOdXlCdGtRWU9Qbk9KalpmUHdDSEo4NVdZRGZRNmM0S2RJbkFQUzA0V2J1Rk8zOHBhSzU5TURJWkdVT09scVE3a1FlejlXYjFyZkMvS0lBKzRyTXdDVUVhT05FMkxib1RKdWdnVnk5MURDOGhZQVMzelBXSm1VWW9UK2RCTzkwWjFuS3FBYW02MzNPdEVyNE4zOEdPVWpaMEkwakt3WnJ6MjNqQml5aEpDTkh1QzZNWklGSmgvWWtNWDRZbnAvbXdGS2dRbUpqLzdmWjVhb0xxUWgvc3lQcVFyMHFic3VCYXFGaFI5WlFOWjB5d2JXNTJFMmhWUVdZT1ZRMk0xL1VOMDdPaEFsR2Y0Rzc3SEZkb3VSNCtGK0xJV3czL3BaVm45eDJGUXdDcU00ZjNmVG1EWDRZZ25NN3RDVko2VGluNXhGb3daLzNsRHJWOTV1RUtEUTNGTVBzN2hyZG9PV3VINXlJR3g2Z3lOdWJBeHU1YVJsd1lkd3dkNi9YQk8wNGJFaTdzRUE0ODloYmM0OWJBeGZETnlmYnhtUmNlMmU1dWl1VXFXdFZsVzNOd2RVMGtqZGgrTUEwZlVrVHhER2p2QitzZSthM1pxaWtHelR4VVIwaVZhekNDQmh5YzNvSXJzem51cll0MWMzenlCRHZSTDliVFlCdHkveUlCWm1sOGhzUy94d0JTandFUVhocnZXcytwU01VNEFJYU5KOXNEYU1QOWhVaW90VEV0eUJBOCs0SkhlVi94M1J3S3IxQmY3RlJtWjNkVGt0MmlUeDgzZ3RONUlESFF2TzhmMEluSk9oRmJsMlFKY3YyZTRmdU5sVVJyWWVva1RKdEhmTXp0WE5tV3NnVnNuMEtCNXNJbk1GTUR2RnVwbE9MWlpEMGIrbmpNMTNIbUtUaDcxSUxxaEpMdTVJODVuZDUzeXg2TkQ0V1B5T2d4b01ZRWNSRDFPcnNEK2JvbGM2d3hnYkVoOHVrcnRIMXJZRUc4ckIrbGlEdHVSNHhqcC8zbENoaHQwV3hsd2tKVzBXQWJZWDNmOUFXYlB0aUxUQW4wMUVqM2ZEclBrVko2ZzB3U0xDOVJJdGlEdFNKNUVpbGN1UzA3ZklUTHVCOHBCdkdJN282R2ViNlQzdWFyc1JpR3gzVEJsc0tHb0pMSGZXbzlEMExzMVh3aWJXNHR5UDZ5UmF5ZVhaQkdwcEZiTnBtY2NCMU9MOFplOXdyMG5DRXcvVDY1dCtkYUhka2dMQzEvR09Ta2E5QTNJTE1tY3kvT3dvUWNqTDlYa1NvSjdoWW1jVWNmNHlUV29rYmR1Zm9scytSS2FPUUFBaGlpS1VSQ3lpYjlCbklNeDVqQUM4ZWZ6ZlhiV1FMbXNzc3dkeUZBT3ZzdlZXeU9iOUtOVHl3S0lYV1pIT3NSTFYxM2cwNWVWMkFlUk0rTzdHVFh1aWVwMUk5dHlGSGU2ZmVlZU5xODN4ejRHZWtJYVV4VXk5SlBLV2IxaWplRFVHREd4QkJKZHZCZGZQMnlSL0lLNzg0SVYzK21McjlJTUo0M3J3M2owMVhsRE9FTFNkVUYxMFFQdGlrQmEvT1IyRG1weW5kNUIxbzlUdCszeWZmSUZKT2p1RFhFRERqSnNISWIydXdSL2FQMTN6eHJZVk5YemMyQmp3OU5sVm1ZK05ZbGVOOUFqeWFoQXdZMHYrdXFiTEtucWdhbWJITDhTYTFzYUJDNnl0MkFZd1d4em81TDhsK0lxRXpvR3ZFYUxUdFlIYmJxSFB0Z1lhb004MWViY1NLVm9WbENDd2Z6eWhyUGwzVUVnSUR2RnZ5NlhVQmZnd3BDQVovWHRDRjl5cVl0SzBodk1UUkhiVWJTVDVmQm81RzQ4Yk9nWmJ0QVFFbU56TWJ4YWtsbmw2ZUswOGRrYW8ya29mc3lobEpmVXJoNVhnUWRvbnN0K25kVkRPSTl6Y0l3M2I0UEJkQ2lOOCtycU84Zm14SE9SOXV3YkFrTFdERGFRVDNMODQraUlYUUcwalJTenozTkROdjZKLzk0K1RwbFJxUDl0MXdVMWdCZHN1Q2JMa2UrZHR2dCtHN2pVNlNYMkdOOE4rNWFDTUNBNlZMdERhSmdGSGpvNkRsbVowWmxoS0c5RjJGZkxlaldGbE1ieU0vZnpTdUMvbU0vOHlyZ0pzUW9RYUdmYlM5NlFncXpValN5OURjZERhTlIrRkphV0dnMnkrNFJ3TSsycUtFSUZCUEpkbXlmTEtnZ3owQzFWYWZKVlpjaG5Fdm5lVkdhd2xlcnlPYjBFRXpuZGJDLzZPR2ZBZ0MzUnJDUzgzSmlZWjh6L21JZk42cys5Yk0xVDRNLzVwQzllSTRiZWczMHo4Y0xFVXpkNnpON3MzWk5od2x1Z0xtOEtQTE5NR20zMnNVOVREYWFPK3pzTkpteW8rN1pScjh1L0hJUnh2UlZnNmRiZzNoSmNKMTB5NjNDV0VJeFlJbW5ZdHhmUmxCSmEzTGlWMGlGY3ZJZ3B3eTVXTmVNU0JCUlhIWlVuZm55Q1N4Qm1qUC9UOVlJTE93R1VYQ242T1cvUTZXQlR1eWpvWVp6TnJtcTNEZFR0R0hkZitSWFFiaHREU3JoWEwxTkdCTHZGKzJvT1lMYmVINUZFd1dtYkEzVi9Ya2NoUnFkVjM5UWIrMkxRc3ZNVEpOYzRmVzVYbG43ck5YQlRnbU9GQ1pjbHhJM05YcEJ6TkVmOUhNdlY1UGU5eWhVN0s4QUszRG42VExXWk5ib1JnUmZvR21tWWxGU00weFRqZmxPTFNzR3J2MVk5QzRSaGVJUVlFekZjR2hUWVZWU21QVFJLVEpmYjllNmJQYlFaTTl6K1dtK2Z1a3c3dWI1RXFZekh5M1R5WjJsQ0VKenRmenVnS0RCTDZwV1V0TXpUbmlsWnJjT1VvdTAwbjhTRGJBVVNSa2gyQ0VQQ21zNGRZelFMUFVocVdDTG9BOTU3alY1dSt3RmdTdHdnM3R3Z0NUdDgzTHRnYTZGWThpbGNvTmYyNkc4L1JOemNHckFueHE5eWhWWUUraHVuNW9naEtzcDVibHVzU2M0UXo0dnRmRHgyVmdpWkhPbDNWTmU5K1NoaWI4aDVCRzRvWDZMLzZOV3BMbTc0dklOMVBEWERFZ1RnMkpaaVVYaWJrTlg0NUNUdE9md1N1YTRIVVFtSllxaWhpc2VtTmR2aEtpNmFkMmtiT2FvSG54QkMxeEVkTy9Nd0p1Qkx1cW1QZmNpb0RTRVRwTG95RWJOT0dZeXVBTUpsNUhUdStqOVVEd2QrWlNXVTMwTml3WmtyZXhOSldiMk1MTUJnRjN0aExLRmRUVnRXM042UTY0N282QnUwRmw4T3ZwM2VSTHBCY3R1SFpYejg3d21rTHpxZzlNTTVaZmJCSEM2TThqRXN6ZlgvRnl6bEpWWUVHejB3ZTZZTlllNlFvemwxU2k3R0t5TlV2NDJXVHh2MjlVa2lwcGZHTDVmbFhwZFQ3eWxEY1BTMUpEbWhuRXVCZ2ExTmIwWmZuaHB3aGFNU0s5QWNHWWdzcm13LzRzVUIrYXFHbGVsdVM5aW9CV0N2S1ovMXZuZVlyTUhrMzVsTXh4VTRDNUcvUGJzdUtIQi8ycy82N0tWNzNJQkFlcEdiNFhSOFlNUWM2YVdvKytMY25lWHY0clQxNWJrNmUwTHdzUExwMjlWelY0ME84M2lqSW85TlV0YkNqRzhISVhobEE0TlRTOHJZTnJjM0JpS0lKc2tZcjNpcVR1QnRVc3I5OVhzUENlWDdYZkxlcWtwdUExQWFZSnk1djd3RUl0Y0VJTjhPL2x6cmZkT1FPYWtsL3BQRlJzZ0REYXMxNURYcGF0ZmpmallDREh3Q3RZakNkMWpaU3I0T2QraXlEVFd1VG1XRWp5SU5JOU1mQVIxK1ZYT3R3SjJUeVJXZFp5OEtVZmdpN2NxTWhLeUE0b0ZsaVFsb2QrUDF2V1BPR0xzZ1UxSWNIMFNYWVRBZWIvcnQ0djkyQ25KN1hPNlQxYnRnTG9MbkNRTjZ1WUJzV0ZxbG02MWRETVpOb01zV2lkT1JGSXdkRFY3WUxOb2FSYTh5OFpwTFFQQk5yRDRGN09MR3VEMVdKZUJBV1dUS0prN0ZTOTY2a044UlVLN0hMa2dIL1pYU3FyRURkWm11UGRFYmdHdkNiQXQwQjR5Rjc0elk0aW1UbTBteks3dnRudXZjSURhcm8zamtsWEpqQUZnOTFMQnA2QXRtRWttVUV0UnFGdGM4eVBZeE9oeHViQ3UyeE9CbElCRGRxVzVXd01kRDJMMXpzanNBYVlhNzBDdnFVeFM0Y2pSVm41UlRCWXg4K2plUjRFUVhobXBlZWIyRzU5a3htS0hYMUxFMVNxZEJGSWkzbzEzQU5uOHBrMzZoTWxuTVd4RU81aXBJODRHck9naGFvMlR2TGJmY0ExdHluUTByYjhYMUxIa21hWEJWV2NSVTFHVGdZQTJaM0YxR1ZmYk43RGtodjR4d3hHVVE0eVd3WUxkR1dlYjJaWmVVV0E3MFI2aHJsWHpxM3RqaE9qaHZ4b284ZUVYZldnYjBZS21WRVFuRSt4U0dubXN1b3FBdHBqcVM2c2R5N01rUzhtZFpSbmoweVZpZC92cWcvNDBJZGxaSm9SNkc5TzZxSm9YbWtDWHZKemh0dytJbEZaRHNjaWg4dHl5OTh5U2xRS1pIZVIxaVpHc01PSFhVcWNXSGRZU3JpYzBUMUdUVEF3M3R1ZU5JQWEvZlFmOThnbnlCV3pNWUtaemFjOEZPTGxXZG81RGs0T2sybmJtNmJoNFdjL3RMUjE1aVU3QzdaZmNwT2R1OXUxUXBhbTRtSmNTMGVrTlUzVUY2SlNTdHFrUDVyKzlNOURneHcxK1Zza1hLZVhWWTlCSWNTR2FNTzhPVldTcm9TckJSMTByMTdFV21RQng3SlcwckF0d1dNQi9oQ0N4ZW5zNUZkK0ZTYmtZWHBkOHU5dWpnU3hSeGVkUkk0M2tsUHQ3b2Y1eGtucTd4N2ZVVVc5VC9odXAxcTRURys4dWE1UWJvQm1JWjJyclNuZFRhL2FLZEtGY2hKZXN4N2ZkOTcwVWptdlY2d2lHV2N2OFVWNncwQno0RTVMZ203UzRUVFYwOHQ2MmRObTdGYlg1aVo4bHdId05hLzk3V0NDUEdleFdXK3BISm5jK295VG5zSzQvM05kdlA5TkVjOFBwcFUwdm9PMEZoUTFUbFdkR2pXVENjdUNKY3NGaURPVVF3RVlGTElzdldRUE5ZczU2TTd3cTNMTTZCRGt6T21XK1V0NENZOEZtTUxMWW9kejlVREhFWHJhcHRRTHBOVzJrd2FlZ0daNURha1E1anhmSHRlaHZseHc2cVRPY3NLM081Vnd2QVJmK0xpT0VjcVUvZ3JSYVVhL1NaREhwZ1pPK1JzRVFhS3dyN2RoNnpDbUlMSzVuWTNxWERCcGVHL2JOQW9iL0hmaXZaYkJBZDEwd0xuOEhhL0YyYmdtRDQxS1VjUUZwS0ZsMEMzWHpWenh6N3VLNVd4WUM0eWVqMHhwblhTVnA5aFRYQ05EOWU4MjE4VlMwbGk5bnYzRjhXbjFqMUZMRHRLN2RzaTBNdDFKSW5sdHpLaFZ6UXgyVlBQTWNsZFBnMmIvL0MxVDVwL1pUWDNmWTc3ZVVUK3F4ZGZ3aWduTnZrY2pTbGxXclMxUWpxOTBGeFJPWGhpV3pPWEFONzBjWVhlYXFjcW5QQ0pWelZkbG1vTkZGcmZDZkg4WXVUVk9HdVNONFd6aDcwN3BJdS9EaEozdzlVNTVFaVkxd2FETjJRZ3dUV3VDUXBTNVQvS3l6OXp0dlJwbTNsT21zeGo1NVRUM0gwL3Q2dkl3TlFPc3BxSUFzMUg4bk41eFR0Y04reEp6NFlZTVNRcFZsREk3M0l5MDBpS3lCY3NZZWIyV3dvMXdsNEszTmNCSThuOFE0U2N6Q09jY3Y3ckcrMWtIWitEMVVrcE81YU5aTWdYNTBBODJ1ZGF3ekVYSkNRbzM2VlZWWCtEMVQ2eklWV2tlZGdxOUNyT0ZWREF6dGhXcDBqN2lpQTdoaWxlWWhSaE1FekhheHlGYzVKLzZFWGxaYmdidkljaDBoaDZabmIzYk93bDBWOEJ6WUkyMXU4UFVpSG43dEptNlhPRFViczVFbW4yTjFRamNITnM1VXA1WTVyb2Z6Z0JSSm9SaTNGYzcxTjl0dlNTU2VIZERnVnlLdFhmVDBDVDVFR3ZWR3hRNXJzSXJBdHpGcGpPRUowRnpoMm1kWjhhbVFpTzJQTVNZUVlwLzlJMVRrOWNaUVBncnAwSWVYWjViditOeVlQSjcwS2hrUGZnU3B2RnR2MmZWdi9icXVaa3lZMG8zZVFSYW1JT2RHWUYrR2ZuZmM3RFFTZEZEUVprT3Jmb2hmR2IrL3AwWHBxSzdBd2JlNkV2ZGk3dzB6ZjZ4MDdhNzlIcW1YbDlEbnBhemxESWQxRVN6UFpPem1KWmtsb3ZWd2drV1lmSWRzZ0E5NDBOazBkNHk0VHk0Q2Rqc1ptZG8xM1JLejJqRmUwVWl6bjVKNFhJdHpIdzJtN05WaitrcTB0YXV6YWxRd1oyak9rWEliM2d1QTBVZFlGbmRNeXI1b004bnlSNzdZSG1ONSt4MWZaTk1pOVJHMUpTMW8zeXd3U0x6QUs0SEozQjh0TmwzQlBFR1BMYkRHT0h0Z2NqejAyTlM2eDlqQUluVXI1ZkF0Q0JWQ24xWkN1a3dMQW9PbStMdzZrc1JNSG9ST2RSTkYvZFc1T3ZVS0t3elBuL21Yamx4K2k3RlRua2tGdHhyRXpySW5ETzZLK0g5OTdMOThxLzUreHF4T2RLbnBJbE5IK1N0WXpzb3FoUHUzTmZPeTFTME5SL2lBdDg0T0VFMVVEKy8wcnQ1YVZkQjFoSFdVRE5pbnhUbVhPZU5MZDVIWkorTDVtSmNWM3QrTGs3aVk1c21HekpJdWs0TFpUU2k1cVN1ZlJ4dXg1VVEwQ0xzQXZUSEtieHN4enN5UFZ4ZVBEcGRGdWx0aXB4Zm14UVpLTTlpNDUwQTkrVnNiS3FzaGU2S2EzbzZ6SGNHZE5ZNTRQSmkrcERGSXJSMjNzZjNjclVtbkpZWGord1M3NDh5YVcxOHYwTlRDSDI5TUNyVUhYaXNnUitGanpjUXdhRkxrWC9rWkhmT2U2SHZkLzdQZTFVWDB0bTlZMVFPdGlsdzlDSjU0KzVibEt0R2ZoTE16M0lVaVFGcTRtZVF6MjBxR2M2ZCt6RXNXQTVOcGhDejJZREpjeFljc0FXTWkvb0FRdjUvWlBrdldtaGdEY3hNYWlvR3plWmx1cWFwS0x6UElHZk5XVXZKU0gxUTJ4bkJ2UE5oY1pESWJ6b1dGSVdWbkZ6SElIaEhwazNtb3BsWnVYWndvdFRwZmJma0lac055K1FPNUhWUDZScGQveG5IcFVlcU5Nd0IzRVFPWE9Qa1JRcitMekRiV1ZuVUt6WlVIb0cySDQ2VTFoVGRqSDhYRzh2TjhQSDVmZDVZNzNyNjBBaFViU2p3VG9HL0wySDA5NFlFK2ljbTRSVlNPMnE5YjAvcHJNMStSVVRZUG9EQllCUlRPU1JPWnpOMVVMQkYwc0tDSkJsYWFHQ3kxbzZYZ1p0L0xGNXIrQkZQUXVpdmdPWm1aZEV0TmlaemMyQlJCdk82Vjg3TmtCazJFY3NGWjNaWHhHTnN6RGQ2ZS8yRkVUQlhwMC9wSWk5Q3FKNVo1VjZsRnF2UkdPMS8rYzg4dVJ6WEtOcVBBYTFQc1dFZjBWRWpRemdIdnYwQ053Sk5keUdOZCt1d0pEa0hBYjRGKzlwT29Nb1pzQktMUXdVOG5kVG9KaXE4Y3VkWk1uY2o4cHhzK3ViSVRTTkMrdTZ4SFZYUWhubldhd2ZIeTRVd3lhNkRiM3pOd0FTMWU0OUZpbWZuZ1NwbFZuWmtHZWFJQnQvcUdWd1FScUFuUXp0MGRZSjlnVWw0TG1yNm1XdjJOK3prREJ4UmVGbEM2Vy9oSldpbDFFQ2pqZTdnZWxPNkFXNW9IRzk1Q2JUc3Urdjh4NCsxSGZlT0phTVUzcGV4R1Mxd00wbzhPa1c3Rmt1ei9XOGh1UXJXUGhQcmNuMVRlV1VQcjIzZHZQZ01wS2lvNzdFYThkaFVhRTlxWHg0czZxYXZOSFhiQVhrUk85V044L1pKMzQrM3lJay83RkorTGRrTTZZT04xeGMyTmZHZE1PKzRHVHcxSnFYRno3OWxtTmI5eEhwa21uSjgzVG5ZSkl3WnZJOHQ4MitGa2dHbXVxaGwyQ0hrYmlxSTUzTU5ySXc0V0R4TUxiMjh5dWM3UC9MaTFiSUU5NXl4QzVJaC9Odk4rQUk1cVk5RVd2QVBaQytxMm1GRHc0Z1VyYmhtWTZGM08rNmNSV0RVYVRjK0lsN0NTdXhDbldCT2sxeWRJNEErUmxTT0dwR00vL053azgrRFg4d281MExzMVBSM0ttMjZXamcxbmZrMDVuaHBOdlBmMkt6UUR6NFhCNVd4dkhGOUV6NFN0ZXp0RUZRdUtwclAvUHV6RXp2TE1RaVdHWE9FbldHbDlCV0dZTmNtUXo4cFNuOTFzeTgwQStlMXQ2aEdUV2pncU5IL0lmSk9DOFRpZzVwaStzN3I0TXRmeFBRZDdnbUxlTnl0WTVpSStJUktPY0tQOW1kRms3dGdYY0wrOGxwNTNnK2JLRkRqZGVmcEFRU09LRWgzSWNFOXFYT1VhaWY4Q1lFVmpnUTF4b280QXBzZm1EK2tGcjM3c0lheEdYZitrYVcwOFVPalV5UWxySEhNamIycVRBOVJ5M0loVFVIMG1zTEx2em5Da1ZIbzYrWmt0aWtPWlZvVDF3elNHZ2w0UFVhbHVGOGUrUVdzbVpzUWVTWXpJblBuYlBCbzdYTjk0Njk4cFRYLzBUOGVyb3JHVGxMdUFUM00vYU0wNnlxM292MUZvRmsyeWo3dzN6SjhYMXRnd09zQ3pHWnhvNnlTTmF3VXlMc1daYXVGeGFrTTQ1cngvZDVBQ21JSnRET0RWMGZxMURlRmlCNC9oRnd5Wi9jOGZyam1JOVAwcEtET1EzQ0taWkpmUW1NekFNS1JqWWJKZk5JUHU2WEhSMXRrUlo1L2ZCTkhZSUNOMUxSL0lyLzZvVDZkUGRoREZvcHBPNHJreE85M0tRdURkZUNMWUlyU2dpbnpjbEVCTXdHdnJNeFRHcDlXMGp1NFYyZk0yTzFSOGNKbDBPRGRZOXJlaEFsbndTSU9ZcG9mNlg1YkpYeEpBYUwveXZyV1QwL29wT2J0WEFDaFpyM3lLK003TkV0N2V0UDhMUFg4LzQ1UHEvY1J2OEFGWW5NRUExK01OQzg3dDZjU1ZITCtYamMzVTlWQXZ3bS8rM29zNEwrb0ZTQzhiWEZ5d2JrOXRkbkhWK0U3ZjZRSDFBd21UVSt3dVZDYlhqOXpaN0djcHhPcnMrQ0ZFd09OWG1KM1FjRjlTVGNQYjBJd2tvVWRqT2JUMHZLay9sZXhxdGkwTkpaWCs3Nkt5Vk53SStNNjg2ZnAzMnI1aCsreG1Kam02QlVmSWcrT1RsYis3SjJJbnBJMDdyMWowMVZkc3lQd2dyQS9semY0enVFTnBqU3JyMVFwSWJRWWE0dkpOSG5DdDd0VXBkSDhzN3JMbUxSd1Zkd3daZnJ1K3ZHZ2JRM3NreVZITnFQMjdHTFppMnN5cFh0TS9WaFRUOERyZGprMmhsdm1heWszNXVWSk5MQTB1MHh4YzgvQy9TaDBNZzZ3cFZBalB2aFV0eExJdE1KQTVBL1lFTVpQMitHVmFQNjd4NldyZTJ4VTJ4VlZ0YThBMWxuWWpCWC8rUmIva3UyMzZtaVY1MWJ0VjlVK1pINWs4VGNGN0xDL0N1VGFJZkh5N0JFcGN0dEN4MldXbk5oQXpVUW1qWitReitWTjVpQXdFc2x4V0JRTE4rZy8vbnBtTjZXbDZUL2ZDZ0Z2UzhYdWpoQ2lKZ1UyQ05IWE1IODVySHNrL0dCdmZYZDJWbjBOaTRXamJKaSttNkp6ZEZIQTJXeFFBU3VvbkZ3M1ZtMW1FTnY0S3FwcjFieGZOcXRYV2psU0praFYwYkczbHAwOTMrRDkzdHZndlNEVEMyTlQ2NGtaOXVHK2NuT29xR2xmR3RpWSsreUZBV1Vlb1ZVRm1CWVdKL1A5ZkZvM2VmVHdGRm1RVVNhUExzK1J3Y21oY2dGeXdneTl2OWtFZHhRRFd0K2YybFZlaGlsdEZIajhySGNLR1lFcWpqbDU2SThjZVdkamdiU1hESVJ0eGM0OFhBOEs4Q1Q0OGQ3Y2ZGaEthclJKVWpqTzZCRXRSNlZIeXBtOW5HdUFZQWZRZkh3M0RxbitmS3YzaXZSSmd2LzhrYWtxcS9BRE5nVVdQM0R1TUZGYzFYYXlCQzJCUlVrVGtGbjVFVmFOdjEyMVZwOU95Q0RVbFhNeVpQckpYZVNEaVIxVnBSWWJFR2FkMWxYTnlRMFBzc2dXbUpOcVNucXd4bWZNQU5aZ3ZUR2NxUmJTNVV6VlRSWFdWRS9zcVBtTjdNMTlhNE4vMnJqY0FSV2ZMVnNFNjVkSnhrZS85VDJjeDQ1aTd5OEdiZ3pHNXNEcXR4NXhJYW9NTWdyWG1yT1B1WitVVjJsY3k1bkZOU29WdUtlMHlxUHBBL2FnbFhRcE5td3lmZkozTmo3Y3BKdjZ4clRCNHByMlkwSnoweVUrMyt4ZjdVdjRaTHpvbXJ4S2VXWkZuanlJS1BMYjhIODVhT3c4UkkxL2dXYStaOFRCblMyS1h3amE5azhzcG5BRXdoNC9QRlVDc2ZqUDdodXJOQXFEWEdTY0pHbGRlMElwdEV5TVhSUERuWXR5NU10Sm5WUUYyNU5MYzF1MVd5b0xxWnFzckJxZnVScmt1YnB0V0lMOEU5bUJTR3dZSEZOeUR6SVNIOWpRTFVVR3RTOHVhTklybmFCUGlweTkxMy9wSXdNK213LzgrcnA4NlI0YnJIcDNYNFZaUEd0WGlkeXlZSjhLQkpBdU5Sb1hobHpqM1BsSlMzb1l0TVRSWFJvaXRQK1owRUZyVlZ4VG9DaGI5N1JEeHNNeXFPQVlhU3pBRkthN0VBdGdnd0luSk55RXpZNVRKR2JzS3BMNSs5cGZZWU1CQmlrL1JvNStRdWRJV1pWZElSOXNMbEQ4Mi9ibXVER0dzN2FkdU1CMFF6aWw4QW5FWTlvQ2ZDYkF4T09JSEROZ2MxYXZXSFUwQjliWmZyVTJYeFpubGN0ejhKcysySGhBY1ZINW8ybmFXMkNUZXJTRHJwVlBFQWpoZUJqNjlwd0R6QWd5RC9wWFY4ek9VQkhyOWdheXBGQjRQNE9aU1NiTHBtQk1ZeWl1YXZ1RkhIRXcvNjhjb0hWZHVUSTZ0VFhoVXdHbThCMERIN2hQYklqMGl3OVZUUXJHL0J6bWREa043c2tqVW1WelFaVk0rR1pIL2V0SUZkdlcyUm1jQWJWTWRLamp6QjBYaGRGMXhXdHpYczlvVmZUeFBXSUhET0x0TEc0L0ZnZWIyemxQYVJZeUNNMEpyeTNhZ3cvTXFSdmtUYnZOeWU0NFg4Q25BbXhnTTdUcjVpWjRnMGsyVGpvY01rVDhuODc5ZkNnSUw4RVVralB6ZnpZV1ZDSmFYeWsvN3kyVHIwL3FyTWpqejBiTW9MM2dldmk4dkdNUExzMXA4Ym5SUWY1cmhYUUZDUWkyWFQ5RW16d3lkYXYvZzFjRzJ0elZlL1d2Zk5rRmJmUEF5R1RwRStNZmxvUFdRckdMdVU1R3FlY2dtTWRSb2U3TXhQVUgyS2hCdWxWMm9qbVRZb2tPZFoyWnhCL2c0SUowYUYvTy9hcHRRL3FrelFrdzZUNVpka25tQ0E3ZWJvdnNpNTRpMm9YSXF6SHg0ZTdoaWRMV01RcUJSMDdQSUQ3ZTRGeTFGa01DWlcwOHJzRkE2NVdENHVxSDZiVWx0RW5wWUQ3MCtaWDUwaGM1NGZzZHBKbmFPNkpEblBkY3RpSmRRUXBkRGk5bmtLdXRnUnZzeGNoams3aUJoVGRzN21lRjFmTDl6amVSVkxVbGxlWUFISTdIcWpRT3JHOXI4SXNQN0F4SUFEZStZNFFxNlZ1YlYrRVh4ajl2bzB3djJJOExzWWdyZ3d1ZXc4STVGdEZwVnA4bGhRYko2MnZ6L1ZZQlJJSHRGeGNpSjNhTmxtSFF1SVpwei9HZ0N6Tkw1VmtJcjZ2TUdzVnRPSWRFeGxXbVB0ZnRyMnh6MnBkb3N3Sk1YUFdyVm9iNXhOaFVXWkpUSVpzTDIxODZ4Ulk1ZXBORmRJaHJmcDlxNHBpNVY0M3p1QXpwSlI0azdXTlRQUWtMT01lcENBRXlnMkEvdjZwV3VGZFFMcGllSVVsa1M0RkFGbDJRWXBiV0FjMWFlaTY5b0UzakVGVGtUR0dha2N6TkQwcHFtQXBCWW4zMndyTEcydDJTeTRnMlB0VDc3YU0xbCtEeXVSblNGdEdtQlpobG1KZitraUhmSVpYeThjU09iaEdpdHlVVTZ3dmNuVW4wYk9ZNDdhZmRLa1hEUm9XeHFlRXlMTW0zSTFZb29HUlVXWk5iTHN1eG9lN2dlTmNBQ3FGSTE4aGdpWWdMYURTU2hqeGxZWUVXQ1E4S09HamdHTWZQaHVQZmhpYUhxOEtWdG9qTDRCcHdvTndYVGdiay9JRTJMY0FFcVhmdVhaU3RCbWUvZjN4SE9mZW50a1dQNHdwSzlGeG56eGkyMFduQkxFUGpHV0JoRWxNcjVCQ3pmWnlQc1hzb0RLK1pzYXRZSFVsaDBJeVJRZElCUnl5aXViM2pxREdEcExXVUdzMW4xcVh6OEJhNEtiQ2Z1NjJCRnNjTnd6UnlDUEtSdDFWNGhWYldGNkQveHlBTy9XSE9GMnFQRlZsZElvTGxGNzBGMGw4Z2p6SDV4aGc0c2s5cjhkLzRPSDExMndrSk5NWFpvY1RYMmZ1cnhyK1ZWMXVsdEs1T05lYnpQU3B3MlBmb2MyNFdtNDRxOER6ajM5Z2EyaGJ2NVp0UUdLZjJpRkhFRkIrMzNmaExSWnZYd0FiWWVrWXJqTTNsL3plaGd4clgyZDZFZUhkWnRacWtlTU9RZU9rZUU2b0tPeWdRN0FhcXRCTW9RNWdvRUdWMkJvY2hDT3pydFMxZzRuUDVQdVNvVWoveFBQNWUwUTdaSHYySkMzdkhLdUdsNmR5R2hWZWgzV2hnQXh6aHdqcGhVcGxlUGlmRDR6R1JKa3pZZ3FiemIyZDBVKzJWN1NEbVV0RW04OERONFo3RjJZb1FqdU5TT0gyd1EzaTdNU0pNdEhIRUlNN0FmSFk0QWhFUExNeHVGd0hUZGxubXhJbUhyNjNPbDRHSllmS2RQa0xVaEFsUDhmU1JxV290c1JEbDV3ei85L282ZzNaYnA4aVp1N3pRaWxnTXUrYVlaUGY1bFUyMExzSVFGamRHa0xSVjNEczhTYzJRL256VEFSVnZhUzlvZHo2d1BhNGZtQ0QzakV5VUlPUmNYdkRQZ0NtUHdhajBDRmdUM1pBR0l0a2JGM3hjYUlDSzFISStGSmtsbCtkV3RLdVdRbHQwaVFxUkplZDJWK1NEbks3eDA0NGkvS3hxRTMzT29ialdiSnk1YWxDOHJFQSsrc0pmOXJhbjRHaEZ1eGRnZ25uVnp5WjFWdHFZMCt2ditTT25UZnN2RkZDTzZwelVOVm9PU3dsenV0Tm95YjV5dVdkaGxtd3M4czhjSGdPOHpwSHdGemM2V1JuSDUzTk9OQXRaYkNjcFpwWFV5QnFra2VidExaVVZ1ZVd5T3MrM0FzM0pIcXd0NENENDN4RVV2ZUxYVE1WZDNvNXdhQWd3UWE0aVRxOC92MCtzU3MvOGU4VitlVytqLzZjUkdoZ0tnUjNiSVVKTmtoZ0tMUnVwVThrd2gwclMrdm1aMnJ5b2JRZXFGVyswQVFicEtPU3NQVDVYWjVVa2IvWi8vVlQ4d0RsTTdGRW1iL1RyYTUwakZEUUUrQ01FSCtuNmNNTWEyeUZjRWRCelRySUJVc3N1emlwVFE5T1dacFdyNGVTdGtXWGdXdUVVajJ1Z2RWa1Y5d3JpS1UrdnpHMDN6S1kyT0hRRTJNQjV2V0lWSHpJWGphcWlXWjRyMzJ4dlBhSzRwaEFOQVNYNUdZZVkwYmVLMC90ZVdaTE1TWXdyY3NybHNnSHhrbDlSSTJPbjdYRHFQVmxZUDIyeVptbDhDbCtOTGtObW1lK29hR2pxazEyMGQzeW9Pb2V6bkNRWk1BU1lRbi92NHNaTi9qRzRUaFJrRXZPVGlkVGVHdUdramNWd0lWWm1WOGhHbU55YjNMUStvbUF4ak1lbWNTWnl2Qk03UjBsd29FVlc0NzBmVzVyYjV2bkVtOEdoSjhBRXRjVDEyRjFKU1VOc0s2eFMzVTFUZmNDaVB3Nkw1T2FoU2Nvc004eEZUbUNZdWJkRWZ0NVZBak94b2ZMb2t4TTZ5U2dJK01pcDI1ejJ1MjRhbkNEM2pkSmFMRE5oZ242L3ZVamUzMVNvU0JCYUEyU05ISjJpYWN0TCtzY3JJZVkwUHM2cUlrdklRaWNHY3JQSmY5WnAzWndhZ3MzNjZNT1N0YzhiQ2N1REE3UmpiWmc4aTNSaS93MHd0OWwydWhzQ3pYbGNyQjR6eHJPd1dZVE1MaVNxWjB2cTRmaitBL0F6VEdmL29NQXlpekczblVTYW04R2hLY0FHdVBPei9QSWNhR1hXQjNNbzlyek1VdmtCaTM3Vi9rcXYxRlR6TTRZbjBUeU9sTk42UkN0TlMxT01Xb01qVlRsaXBpbmh1bVpndkNLOGZ3UmE2WTMxTFp1amh2bktuL2NoVDNuOTBJVDZGTm8rZk1hTzBwYUZtTjAvN0R4U0hVZjRIOWQwVTgwVmZHNWlSRU9lblJ2UmEydnpZZTZYeWs5VHVxbHFNZllxLzc2dlZEWWlLRlhzWUw0UmViei9PNzREQWxuQmloTjhuUnVCSzVyWm5CWnhYTWRJNlFYdDN4L0NHQlhzZkFLRlFzOUppdnllWDIwdFZvMGhod2dPYlFFMndFVitZcWNvdVdSQXJQU09hMGhuMER6akdOSmNDRExMR2NsYjNGVGJIVHRyRWlDY0ljRVdTY0lPM3dubUxOdnM0bTIwQXlQR0g4RzAvUVMrOXo0bjVqTlJteTA1cDZmYVhPNWRsQ1ZmTjJIcWszYjNncjR4Y2prMElNZFpVb3NacVk3ak9rYkpxVDJpcEQ4V2R2Zm9FTlh3UU5UaVBDaGc2c0FwbFRYajRCbGxteldza2NidnRzL2RqM05ha1ZPaE9McFg0bnJWNnRkbkFqVGtjK1BTR3VYZ09VaXRvbGJUaHFTTHBTYms2Tk5LYU1qblYrYkpxeEIrYjRDVXRiMWlRNVNHVFdjekI2NUppRTIzRTgrSFZrS3AwdGFWeXBVNlJNdEpTeXdkM3RsVVlCVnJuUHhOMEI4Q3pLbHlIQ3pkS1RKWVRTcHdGVndnOUQxenNHQlh3U1RlakVYQ0FlVk5FZlUxaCtQVEkrWGxvOU93RVFRcC81Z21kcGtlQ1kyQU1KTGh3dkNmcVVtZVFRRHIzVFkwallJYnlORGtVRFhuT0lLYkc4NGpXTjlFMkovTWZ1RnZzVEUxTlp6ZGhFZllTdzNNQ0VvMytSc2pqdHBDRnhLYWphR0Jsdm9aUmxYUUtHd0RORFJ6TGdUWDI3czV0ZGdsZmVOa0NBU0JwbVljTkJkbGdKOUxZZVpRc1hYdythWjZjVTZSaVVNQjFxMFU0RFg0YlpDWU1HR2lmY0VpOCtoK2JSUVRKa3kwUnhUQlRyVHVGaE1tVExSRFdGWUYxQVhJQ2pGaHdrVDdnNlYyU1VCWWplVVBNV0hDUkx0RGJWRGRaaFh2Lzd1bGtreVlPQVN3TSt2S2Z0MVZycVJPNnI0VUV5Wk10QnRZQWl4eitGTUpzS1ZPUGhVVEpreTBHMWpyckovd3B4TGdtZ0RMQ290WTJrN3ZuUWtUSnBvRS9ONE1tTSsvOG5jbHdQdXY3RmNNbVg1ZlRKZ3cwZVpSSjlZZmpkL3JXenFzbHBxM3hJUUpFMjBlbGdENXQvRjd2UUJuWFRGb1Bjem8yV0xDaElrMkRNdjdXWmYzMzJuODFiaXAwbHI3dUpnd1lhTE5JaUJBbm1uMHQrMGYrNjRhTU45aXRYd25Ka3lZYUlPd2ZwaDVlZDlHdlFzSDBScFlBK3R1TVNQU0preTBMVUN4WmtOYUg3Wi8vQ0FCcG4yTkhOTlRZc0tFaVRhRE9xbDd5ZGIzTmREa0pObTBkemZPRTZ0TUVCTW1UUGdWRm92TTJuZEZ2MG1PL3ExSlpqQkxhTjJsZUtGM1NJeE1tRERoTG5aWkxkWnJtL3JISmdWNDMwVURkdFZKelRsaXdvUUovNkhXY280ajA5bEFzOXljMlZjTW1vc2ZENGtKRXlaOGp6ckxqVm5YOUYzVzNGTmFKTmZOdXJMZjQxSm5mVlJNbUREaFExZ2Z5YnE2NzJzdFBjc3BkdXlzcS9zL1lncXhDUk0rQW1RdDY4citUc21iUlZ4QTJsc2I3NFRJUHlzbVRKaG9CVmpxeEdxOU4rdXFmazdMbUVzQ1RLUzl1MldDeFZyN2tWV2tzNWd3WWNKTHNHVFgxZGFkbVhOTi8wVXV2VXJjUU5wN0c3ckJ3WjZHWDBlSUNSTW1QSU5GNWxVSFdpN091N1J2aHJnSXR3VFlRTnBiR3g1Qmx2bDJ2RXVVbURCaHdpV29rbVZyN1dQN3JocndYM0VUSGdrd1FXMXNyWk1uOEdVdUVoTW1URGdGaTlYNnFZUmI3Mk85aFhnQWp3WFlRT3JiNndkQmlPK0FScjVVVEpndzRSaFc2dy9XUU90VDJaY1BXQ3hlZ05jRTJJRG1IOHRERU9aVEVlaEtFaE1tL3VhZ3FXd05zTHhscmFuN1gvYlYvWGFJRitGMUFiWkYranNiSnRaWjVVSm9aVFpGZEJNVEp2NG1nR0R0dDByZFZBUjd2NHpxR1BUSDFwTjZ0OHA4MVZZVllGdlF4QTRVUy9jNmkzV2NTT0FBaTFoam9hRTdXYXdTWmRXQ1lHRml3a1Q3UVFXa0IwRW9xYkJZTFB1dFZ0a0tZZHBwRmV1ZkFjSEJpek12NmVtVG1XUC9EMG1LYWJEdk00TDJBQUFBQUVsRlRrU3VRbUNDXCJcclxuICAgICAgICA+PC9pbWFnZT5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbzY7XHJcbiIsIi8vIE5hdkJhci50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTmF2QmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8dWwgIGNsYXNzTmFtZSA9IFwibmF2QmFyXCIgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGxpc3RTdHlsZTogXCJub25lXCIsIHBhZGRpbmc6IDAgLCB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJsaVN0eWxlXCI+PC9kaXY+XHJcbiAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEyMHB4XCIgfX0+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlRyYW5nIGNo4bunPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEyMHB4XCIgfX0+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL2Jhby1oYW5oXCI+QuG6o28gaMOgbmg8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTIwcHhcIiB9fT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvaGUtdGhvbmctZGFpLWx5XCI+SOG7hyB0aOG7kW5nIMSR4bqhaSBsw708L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTIwcHhcIiB9fT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvdGluLXR1Y1wiPlRpbiB04bupYzwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMjBweFwiIH19PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi90dXllbi1kdW5nXCI+VHV54buDbiBk4bulbmc8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL2xpZW4taGVcIj5MacOqbiBo4buHPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcInV0aWxzL3V0aWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgU3R5bGVkU3RpY2t5UHJvcHMge1xyXG4gIGZpeGVkT246IG51bWJlcjtcclxuICBjb21wb25lbnRQb3NpdGlvbjogbnVtYmVyO1xyXG4gIGNvbXBvbmVudEhlaWdodDogbnVtYmVyO1xyXG4gIGZpeGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRTdGlja3kgPSBzdHlsZWQuZGl2PFN0eWxlZFN0aWNreVByb3BzPmBcclxuICBwb3NpdGlvbjogJHsocHJvcHMpID0+IChwcm9wcy5maXhlZCA/IFwiZml4ZWRcIiA6IFwicmVsYXRpdmVcIil9O1xyXG4gIHRvcDogJHsocHJvcHMpID0+IHByb3BzLmZpeGVkT259cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgLy8gYm94LXNoYWRvdzogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5maXhlZCA/IGdldFRoZW1lKFwic2hhZG93cy5zbWFsbFwiKSA6IFwidW5zZXRcIn07XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcclxuICB6LWluZGV4OiA5OTtcclxuXHJcbiAgJiArIC5zZWN0aW9uLWFmdGVyLXN0aWNreSB7XHJcbiAgICBwYWRkaW5nLXRvcDogJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmZpeGVkID8gYCR7cHJvcHMuY29tcG9uZW50SGVpZ2h0fXB4YCA6IFwiaW5oZXJpdFwifTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRTdGlja3k7XHJcbiIsImltcG9ydCBSZWFjdCwge1xyXG4gIFJlYWN0RWxlbWVudCxcclxuICB1c2VDYWxsYmFjayxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlUmVmLFxyXG4gIHVzZVN0YXRlLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGVkU3RpY2t5IGZyb20gXCIuL1NpY2t5U3R5bGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RpY2t5UHJvcHMge1xyXG4gIGZpeGVkT246IG51bWJlcjtcclxuICBjb250YWluZXJSZWY/OiB7IGN1cnJlbnQ6IGFueSB9O1xyXG4gIGNoaWxkcmVuPzogUmVhY3RFbGVtZW50O1xyXG4gIG9uU3RpY2t5PzogKGlzRml4ZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgbm90aWZ5T25TY3JvbGw/OiAoaGFzUmVhY2hlZFBvc2l0aW9uOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIG5vdGlmeVBvc2l0aW9uPzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBTdGlja3k6IFJlYWN0LkZDPFN0aWNreVByb3BzPiA9ICh7XHJcbiAgZml4ZWRPbixcclxuICBjb250YWluZXJSZWYsXHJcbiAgY2hpbGRyZW4sXHJcbiAgbm90aWZ5UG9zaXRpb24sXHJcbiAgbm90aWZ5T25TY3JvbGwsXHJcbiAgb25TdGlja3ksXHJcbn0pID0+IHtcclxuICBjb25zdCBbZml4ZWQsIHNldEZpeGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGFyZW50SGVpZ2h0LCBzZXRQYXJlbnRIZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBwb3NpdGlvblJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIXdpbmRvdykgcmV0dXJuO1xyXG5cclxuICAgIGxldCBkaXN0YW5jZSA9IHdpbmRvdy5wYWdlWU9mZnNldCAtIHBvc2l0aW9uUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgaWYgKGNvbnRhaW5lclJlZj8uY3VycmVudCkge1xyXG4gICAgICBsZXQgY29udGFpbmVyRGlzdGFuY2UgPVxyXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldFRvcCArXHJcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQ/Lm9mZnNldEhlaWdodCAtXHJcbiAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgICAgaWYgKG5vdGlmeVBvc2l0aW9uICYmIG5vdGlmeU9uU2Nyb2xsKSB7XHJcbiAgICAgICAgbm90aWZ5T25TY3JvbGwoXHJcbiAgICAgICAgICBkaXN0YW5jZSA8PSBub3RpZnlQb3NpdGlvbiAmJiBjb250YWluZXJEaXN0YW5jZSA+IG5vdGlmeVBvc2l0aW9uXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2V0Rml4ZWQoZGlzdGFuY2UgPD0gZml4ZWRPbiAmJiBjb250YWluZXJEaXN0YW5jZSA+IGZpeGVkT24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChub3RpZnlQb3NpdGlvbiAmJiBub3RpZnlPblNjcm9sbCkge1xyXG4gICAgICBub3RpZnlPblNjcm9sbChkaXN0YW5jZSA+PSBub3RpZnlQb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlzRml4ZWQgPSBkaXN0YW5jZSA+PSBmaXhlZE9uO1xyXG4gICAgc2V0Rml4ZWQoaXNGaXhlZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF3aW5kb3cpIHJldHVybjtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxMaXN0ZW5lcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzY3JvbGxMaXN0ZW5lcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxMaXN0ZW5lcik7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNjcm9sbExpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFwb3NpdGlvblJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHBvc2l0aW9uUmVmLmN1cnJlbnQgPSBlbGVtZW50UmVmLmN1cnJlbnQ/Lm9mZnNldFRvcDtcclxuICAgIH1cclxuICAgIHNldFBhcmVudEhlaWdodChlbGVtZW50UmVmLmN1cnJlbnQ/Lm9mZnNldEhlaWdodCB8fCAwKTtcclxuICB9LCBbZWxlbWVudFJlZi5jdXJyZW50LCBjaGlsZHJlbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG9uU3RpY2t5KSBvblN0aWNreShmaXhlZCk7XHJcbiAgfSwgW2ZpeGVkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkU3RpY2t5XHJcbiAgICAgIGNvbXBvbmVudFBvc2l0aW9uPXtwb3NpdGlvblJlZi5jdXJyZW50fVxyXG4gICAgICBjb21wb25lbnRIZWlnaHQ9e3BhcmVudEhlaWdodH1cclxuICAgICAgZml4ZWRPbj17Zml4ZWRPbn1cclxuICAgICAgZml4ZWQ9e2ZpeGVkfVxyXG4gICAgICByZWY9e2VsZW1lbnRSZWZ9XHJcbiAgICA+XHJcbiAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgaXNGaXhlZDogZml4ZWQgfSl9XHJcbiAgICA8L1N0eWxlZFN0aWNreT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xyXG5cclxuY29uc3QgU3R5bGVkVG9wYmFyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yIDojMDBBREVGO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAudG9wYmFyLWxlZnQge1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgKjpub3QoLmxvZ28pIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG9wYmFyLXJpZ2h0IHtcclxuICAgIC5saW5rIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLWhhbmRsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAubGluayB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0eWxlZFRvcGJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0eWxlZFRvcGJhciBmcm9tIFwiLi9Ub3BiYXIuc3R5bGVcIjtcclxuZnVuY3Rpb24gVG9wYmFyKCkge1xyXG4gIHJldHVybiA8U3R5bGVkVG9wYmFyPjwvU3R5bGVkVG9wYmFyPjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb3BiYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFRvcGJhcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuYDtcclxuXHJcbmNvbnN0IFRvcGJhckxpc3QgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgVG9wYmFySXRlbSA9IHN0eWxlZC5saWBcclxuICBjb2xvcjogIzAwYWRlZjtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMYW5ndWFnZVNlbGVjdG9yID0gc3R5bGVkLnNlbGVjdGBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5mdW5jdGlvbiBUb3BiYXJIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb3BiYXJXcmFwcGVyPlxyXG4gICAgICA8VG9wYmFyTGlzdD5cclxuICAgICAgICA8VG9wYmFySXRlbT44OjAwIMSR4bq/biAxNzozMCB0aOG7qSAyIMSR4bq/biB0aOG7qSA3PC9Ub3BiYXJJdGVtPlxyXG4gICAgICAgIDxUb3BiYXJJdGVtPjAzNzcgMjIyIDc3NzwvVG9wYmFySXRlbT5cclxuICAgICAgICA8VG9wYmFySXRlbT5cclxuICAgICAgICAgIDYzIEPhu61hIEjDoG5nXHJcbiAgICAgICAgICA8TGFuZ3VhZ2VTZWxlY3RvciBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpXCI+VGnhur9uZyBWaeG7h3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZnJcIj5GcmFuY2U8L29wdGlvbj5cclxuICAgICAgICAgIDwvTGFuZ3VhZ2VTZWxlY3Rvcj5cclxuICAgICAgICA8L1RvcGJhckl0ZW0+XHJcbiAgICAgICAgPFRvcGJhckl0ZW0+xJDEg25nIG5o4bqtcC/EkMSDbmcga8O9PC9Ub3BiYXJJdGVtPlxyXG4gICAgICA8L1RvcGJhckxpc3Q+XHJcbiAgICA8L1RvcGJhcldyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wYmFySGVhZGVyO1xyXG4iLCJpbXBvcnQgU2VjdGlvbjEgZnJvbSBcIkBjb21wb25lbnQvSG9tZVBhZ2UvU2VjdGlvbjFcIjtcclxuaW1wb3J0IFNlY3Rpb24xMSBmcm9tIFwiQGNvbXBvbmVudC9Ib21lUGFnZS9TZWN0aW9uMTFcIjtcclxuaW1wb3J0IFNlY3Rpb24xMyBmcm9tIFwiQGNvbXBvbmVudC9Ib21lUGFnZS9TZWN0aW9uMTNcIjtcclxuaW1wb3J0IFNlY3Rpb241IGZyb20gXCJAY29tcG9uZW50L0hvbWVQYWdlL1NlY3Rpb241XCI7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IEJ1dHRvblNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudC9Ib21lUGFnZS9CdXR0b25TZWFyY2hcIjtcclxuaW1wb3J0IEJlc3RTZWxsZXIgZnJvbSBcIkBjb21wb25lbnQvSG9tZVBhZ2UvQmVzdFNlbGxlclwiO1xyXG5pbXBvcnQgRGlzdHJpYnV0aW9uIGZyb20gXCJAY29tcG9uZW50L0hvbWVQYWdlL0Rpc3RyaWJ1dGlvblwiO1xyXG5pbXBvcnQgU2hvcFN5c3RlbSBmcm9tIFwiQGNvbXBvbmVudC9Ib21lUGFnZS9TaG9wU3lzdGVtXCI7XHJcbmltcG9ydCBBZHZpc2UgZnJvbSBcIkBjb21wb25lbnQvSG9tZVBhZ2UvQWR2aXNlXCI7XHJcbmltcG9ydCBTdW1tYXJ5IGZyb20gXCJAY29tcG9uZW50L0hvbWVQYWdlL1N1bW1hcnlcIjtcclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPFNlY3Rpb24xIC8+XHJcbiAgICAgIDxTZWN0aW9uNSAvPlxyXG4gICAgICA8QnV0dG9uU2VhcmNoIC8+XHJcbiAgICAgIDxTZWN0aW9uMTMgLz5cclxuICAgICAgPEJlc3RTZWxsZXIgLz5cclxuICAgICAgPFNlY3Rpb24xMSAvPlxyXG4gICAgICA8RGlzdHJpYnV0aW9uIC8+XHJcbiAgICAgIDxTaG9wU3lzdGVtIC8+XHJcbiAgICAgIDxBZHZpc2UgLz5cclxuICAgICAgPFN1bW1hcnkgLz5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXhQYWdlLmxheW91dCA9IEFwcExheW91dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIiwiZXhwb3J0IGNvbnN0IGRldmljZVNpemUgPSB7XHJcbiAgeHM6IDQyNSxcclxuICBzbTogNzY4LFxyXG4gIG1kOiAxMDI0LFxyXG4gIGxnOiAxNDQwLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxheW91dENvbnN0YW50ID0ge1xyXG4gIGdyb2NlcnlTaWRlbmF2V2lkdGg6IFwiMjgwcHhcIixcclxuICBjb250YWluZXJXaWR0aDogXCIxMjAwcHhcIixcclxuICBtb2JpbGVOYXZIZWlnaHQ6IFwiNjRweFwiLFxyXG4gIGhlYWRlckhlaWdodDogXCI4MHB4XCIsXHJcbiAgbW9iaWxlSGVhZGVySGVpZ2h0OiBcIjY0cHhcIixcclxufTtcclxuIiwiaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tIFwiQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0XCI7XHJcbmltcG9ydCB7IGRpZmZlcmVuY2VJbk1pbnV0ZXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgY2VpbCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUaGVtZSA9IChxdWVyeTogc3RyaW5nLCBmYWxsYmFjaz86IHN0cmluZykgPT5cclxuICB0aGVtZUdldChxdWVyeSwgZmFsbGJhY2spO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRIZXhUb1JHQiA9IChoZXgpID0+IHtcclxuICAvLyBjaGVjayBpZiBpdCdzIGEgcmdiYVxyXG4gIGlmIChoZXgubWF0Y2goXCJyZ2JhXCIpKSB7XHJcbiAgICBsZXQgdHJpcGxldCA9IGhleC5zbGljZSg1KS5zcGxpdChcIixcIikuc2xpY2UoMCwgLTEpLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuIHRyaXBsZXQ7XHJcbiAgfVxyXG5cclxuICBsZXQgYztcclxuXHJcbiAgaWYgKC9eIyhbQS1GYS1mMC05XXszfSl7MSwyfSQvLnRlc3QoaGV4KSkge1xyXG4gICAgYyA9IGhleC5zdWJzdHJpbmcoMSkuc3BsaXQoXCJcIik7XHJcbiAgICBpZiAoYy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgYyA9IFtjWzBdLCBjWzBdLCBjWzFdLCBjWzFdLCBjWzJdLCBjWzJdXTtcclxuICAgIH1cclxuICAgIGMgPSBcIjB4XCIgKyBjLmpvaW4oXCJcIik7XHJcblxyXG4gICAgcmV0dXJuIFsoYyA+PiAxNikgJiAyNTUsIChjID4+IDgpICYgMjU1LCBjICYgMjU1XS5qb2luKFwiLFwiKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0ZURpZmZlcmVuY2UgPSAoZGF0ZSkgPT4ge1xyXG4gIGxldCBkaWZmID0gZGlmZmVyZW5jZUluTWludXRlcyhuZXcgRGF0ZSgpLCBuZXcgRGF0ZShkYXRlKSk7XHJcbiAgaWYgKGRpZmYgPCA2MCkgcmV0dXJuIGRpZmYgKyBcIiBtaW51dGVzIGFnb1wiO1xyXG5cclxuICBkaWZmID0gY2VpbChkaWZmIC8gNjApO1xyXG4gIGlmIChkaWZmIDwgMjQpIHJldHVybiBgJHtkaWZmfSBob3VyJHtkaWZmID09PSAwID8gXCJcIiA6IFwic1wifSBhZ29gO1xyXG5cclxuICBkaWZmID0gY2VpbChkaWZmIC8gMjQpO1xyXG4gIGlmIChkaWZmIDwgMzApIHJldHVybiBgJHtkaWZmfSBkYXkke2RpZmYgPT09IDAgPyBcIlwiIDogXCJzXCJ9IGFnb2A7XHJcblxyXG4gIGRpZmYgPSBjZWlsKGRpZmYgLyAzMCk7XHJcbiAgaWYgKGRpZmYgPCAxMikgcmV0dXJuIGAke2RpZmZ9IG1vbnRoJHtkaWZmID09PSAwID8gXCJcIiA6IFwic1wifSBhZ29gO1xyXG5cclxuICBkaWZmID0gZGlmZiAvIDEyO1xyXG4gIHJldHVybiBgJHtkaWZmLnRvRml4ZWQoMSl9IHllYXIke2NlaWwoZGlmZikgPT09IDAgPyBcIlwiIDogXCJzXCJ9IGFnb2A7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9