(function() {
  var DISTRACTIONS = [
    '.DashboardProfileCard-stats',
    '.wtf-module',
    '.trends-container',
    '.new-tweets-bar',
    '.stream.home-stream',
    '.ProfileNav-item--followers',
    '#discover-stories',
    '.WhoToFollow',
    '.Trends',
    '.topics',
    '#global-nav-search',
    // Mobile
    '.view-tweets .timeline',
    '.navItem[nav="people-button"]',
    '.navItem[nav="search"]',
    '.navItem[tab="discover"]',
    '.profile-counts',
    // Facebook
    '#newsFeedHeading ~ div',
    'body.home #leftCol',
    '#rightCol'
  ];

  var STYLESHEET_TEXT = [
    DISTRACTIONS.join(', ') + ' {',
    '  visibility: hidden !important;',
    '  opacity: 0 !important;',
    '  display: none !important;',
    '}'
  ].join('\n');

  var style = document.createElement('style');
  style.appendChild(document.createTextNode(STYLESHEET_TEXT));
  document.head.appendChild(style);
})();
