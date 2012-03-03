new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 4,
  interval: 30000,
  width: 'auto',
  height: 215,
  theme: {
    shell: {
      background: '#f7f7f7',
      color: '#ffffff'
    },
    tweets: {
      background: '#f7f7f7',
      color: '#000000',
      links: '#3b5998'
    }
  },
  features: {
    scrollbar: false,
    loop: false,
    live: true,
    behavior: 'all'
  }
}).render().setUser('akennedy').start();