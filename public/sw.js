/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-eaacc94a8aca09426951.js"
  },
  {
    "url": "app-3125c983490299cbcd7e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-2ab347e8ce9c31b0f61b.js"
  },
  {
    "url": "index.html",
    "revision": "b5a5b0c749a507b9174bfe1ee5c8a69c"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "20364bc9baeb59f6289f4615748280bb"
  },
  {
    "url": "1.714e789c58edc4d97d4f.css"
  },
  {
    "url": "0-cb55d21372734f4924a6.js"
  },
  {
    "url": "1-641f6ede229a1d6eee74.js"
  },
  {
    "url": "component---src-templates-index-js-d30b8c9d4d37e3dc0c40.js"
  },
  {
    "url": "static/d/160/path---index-6a9-n0cWZXvbAXH4dOIGtlZrqnJAdk8.json",
    "revision": "1850cb9d557eb13cd361434bda08fdc4"
  },
  {
    "url": "component---src-pages-404-js-9d6c2d6e8cfca47bfdcd.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f44d61b4740039582fd5b52958e5c637"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});