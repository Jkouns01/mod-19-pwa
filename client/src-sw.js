
const pageCache = new CacheFirst({
    cacheName: 'page-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      })
    ],
  });
  
  
  registerRoute(({ request }) => request.mode === 'navigate', pageCache);
  