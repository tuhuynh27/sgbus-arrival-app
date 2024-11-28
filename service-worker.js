const CACHE_NAME = 'sg-bus-arrival-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/bus.png',
  '/stops.json',
  '/services.json',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css',
  'https://unpkg.com/feather-icons',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.4.4/lz-string.min.js',
  'https://cdn.jsdelivr.net/npm/@intelight/geolib@2.0.22/dist/geolib.min.js',
  'https://unpkg.com/preact@latest/dist/preact.min.js',
  'https://unpkg.com/preact@latest/hooks/dist/hooks.umd.js',
  'https://unpkg.com/htm@latest/dist/htm.umd.js'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting()) // Force activation
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Notify all clients about the update
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'APP_UPDATED' });
        });
      });
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) && 
      !STATIC_ASSETS.includes(event.request.url)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Return cached version
        }
        return fetch(event.request).then(response => {
          // Cache important resources that weren't in STATIC_ASSETS
          if (response.status === 200 && 
              (event.request.url.endsWith('.js') || 
               event.request.url.endsWith('.css') || 
               event.request.url.endsWith('.json'))) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        });
      })
  );
});

// Push notification handler
self.addEventListener('push', function(event) {
  if (event.data) {
    const data = event.data.json();
    const title = data.notification.title;
    const options = {
      body: data.notification.body,
      icon: data.notification.icon,
      badge: data.notification.badge,
    };
    event.waitUntil(self.registration.showNotification(title, options));
  }
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(function(clientList) {
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client)
          return client.focus();
      }
      if (clients.openWindow)
        return clients.openWindow('/');
    })
  );
});
