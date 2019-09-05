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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "608572fde1ebe80413c1b78d63c471a6"
  },
  {
    "url": "build/p-1eda916e.js"
  },
  {
    "url": "build/p-59290340.js"
  },
  {
    "url": "build/p-8178315f.js"
  },
  {
    "url": "build/p-8c5e5fb1.js"
  },
  {
    "url": "build/p-af0f8efd.js"
  },
  {
    "url": "build/p-btkkdkvs.entry.js"
  },
  {
    "url": "build/p-diqhspxd.entry.js"
  },
  {
    "url": "build/p-euras9o0.entry.js"
  },
  {
    "url": "build/p-f23wy96x.entry.js"
  },
  {
    "url": "build/p-hafqnk0k.entry.js"
  },
  {
    "url": "build/p-latbkdct.entry.js"
  },
  {
    "url": "build/p-ldblyb4n.entry.js"
  },
  {
    "url": "build/p-nopkaytf.css"
  },
  {
    "url": "build/p-xzfs211l.js"
  },
  {
    "url": "build/p-zv8vh8qc.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "8a80554c91d9fca8acb82f023de02f11"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
