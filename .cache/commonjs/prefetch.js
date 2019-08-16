"use strict";

exports.__esModule = true;
exports.default = void 0;

const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }

  const fakeLink = document.createElement(`link`);

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
const linkPrefetchStrategy = function linkPrefetchStrategy(url) {
  if (typeof document === `undefined`) {
    return;
  }
=======
=======
>>>>>>> develop
const linkPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }
>>>>>>> develop

  const link = document.createElement(`link`);
  link.setAttribute(`rel`, `prefetch`);
  link.setAttribute(`href`, url);
  const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
  parentElement.appendChild(link);
};

<<<<<<< HEAD
<<<<<<< HEAD
const xhrPrefetchStrategy = function xhrPrefetchStrategy(url) {
  const req = new XMLHttpRequest();
  req.open(`GET`, url, true);
  req.withCredentials = true;
  req.send(null);
=======
=======
>>>>>>> develop
const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);
    req.withCredentials = true;

    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
>>>>>>> develop
};

const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};

<<<<<<< HEAD
<<<<<<< HEAD
const prefetch = function prefetch(url) {
  if (preFetched[url]) {
    return;
  }
=======
=======
>>>>>>> develop
const prefetch = function (url) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }
>>>>>>> develop

  preFetched[url] = true;
  supportedPrefetchStrategy(url);
};

var _default = prefetch;
exports.default = _default;