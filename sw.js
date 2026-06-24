const CACHE = 'aquatoolz-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Pass through all requests (app uses Firebase for data)
});
