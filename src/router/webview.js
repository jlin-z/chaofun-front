let routes = [];
routes = [
  {
    path: '/webview/contact',
    component: () => import('@/views/chaofun-webview/contact'),
    name: 'contact',
    meta: { title: '联系我们&意见反馈'},
    hidden: true
  },
  {
    path: '/webview/cancelAccount',
    component: () => import('@/views/chaofun-webview/cancelAccount'),
    name: 'contact',
    meta: { title: '注销账号'},
    hidden: true
  },
  {
    path: '/webview/buttonGame',
    component: () => import('@/views/chaofun-webview/buttonGame'),
    name: 'buttonGame',
    meta: { title: 'buttonGame'},
    hidden: true
  },
  {
    path: '/webview/forum/seting',
    component: () => import('@/views/chaofun-webview/forum/setting'),
    name: 'forumseting',
    meta: { title: 'forumseting'},
    hidden: true
  },
  {
    path: '/webview/forum/mod_manager',
    component: () => import('@/views/chaofun-webview/forum/ModManager'),
    name: 'mod_manager',
    meta: { title: '版主管理'},
    hidden: true
  },
  {
    path: '/webview/forum/ban_manager',
    component: () => import('@/views/chaofun-webview/forum/BanManager'),
    name: 'ban_manager',
    meta: { title: '用户封禁'},
    hidden: true
  },
  {
    path: '/webview/forum/analytics',
    component: () => import('@/views/chaofun-webview/forum/analytics'),
    name: 'forumanalytics',
    meta: { title: 'forumanalytics'},
    hidden: true
  },
  {
    path: '/webview/forum/tag',
    component: () => import('@/views/chaofun-webview/forum/tag'),
    name: 'forumtag',
    meta: { title: 'forumtag'},
    hidden: true
  },
  {
    path: '/webview/forum/user_tag',
    component: () => import('@/views/chaofun-webview/forum/userTag'),
    name: 'forumUsertag',
    meta: { title: 'forumUsertag'},
    hidden: true
  },
  {
    path: '/webview/forum/rule',
    component: () => import('@/views/chaofun-webview/forum/rule'),
    name: 'forumRule',
    meta: { title: '板块规范设置'},
    hidden: true
  },

  {
    path: '/webview/forum/show_rule',
    component: () => import('@/views/chaofun-webview/forum/showRule'),
    name: 'forumRule',
    meta: { title: '板块规范设置'},
    hidden: true
  },
  {
    path: '/webview/thx',
    component: () => import('@/views/chaofun-webview/thx/thx'),
    name: 'forumthx',
    meta: { title: 'forumthx'},
    hidden: true
  },
  {
    path: '/webview/forum/notify',
    component: () => import('@/views/chaofun-webview/forum/notify'),
    name: 'forumnotify',
    meta: { title: 'forumnotify'},
    hidden: true
  },
  {
    path: '/webview/activity/index',
    component: () => import('@/views/chaofun-webview/activity/index'),
    name: 'activityindex',
    meta: { title: 'activityindex'},
    hidden: true
  },
  {
    path: '/webview/prediction/rank',
    component: () => import('@/views/chaofun-webview/prediction/rank'),
    name: 'prediction_rank',
    meta: { title: '竞猜活动'},
    hidden: true
  },
  {
    path: '/webview/badge',
    component: () => import('@/views/chaofun-webview/badge/badgeDetail'),
    name: 'badge',
    meta: { title: '徽章介绍'},
    hidden: true
  },
  {
    path: '/webview/fbi',
    component: () => import('@/views/chaofun-webview/fbi/fbi'),
    name: 'fbi',
    meta: { title: 'Fbi'},
    hidden: true
  },
  {
    path: '/webview/fbi/history',
    component: () => import('@/views/chaofun-webview/fbi/FBiHistory'),
    name: 'fbi',
    meta: { title: 'Fbi'},
    hidden: true
  },

  {
    path: '/webview/fbi/redPacket',
    component: () => import('@/views/chaofun-webview/fbi/RedPacket'),
    name: 'FBi 红包',
    meta: { title: 'FBi 红包'},
    hidden: true
  },

  {
    path: '/webview/fbi/redPacket/create',
    component: () => import('@/views/chaofun-webview/fbi/RedPacketCreate'),
    name: 'FBi 红包创建',
    meta: { title: 'FBi 红包创建'},
    hidden: true
  },
  // {
  //   path: '/webview/fbi/redPacket/password',
  //   component: () => import('@/views/chaofun-webview/fbi/RedPacketPassword'),
  //   name: 'FBi 红包',
  //   meta: { title: 'FBi 红包'},
  //   hidden: true
  // },
  {
    path: '/webview/OAuth',
    component: () => import('@/views/chaofun-webview/OAuth'),
    name: 'FBi 红包',
    meta: { title: 'FBi 红包'},
    hidden: true
  },
  {
    path: '/webview/Year2021',
    component: () => import('@/views/chaofun-webview/year2021/year2021'),
    name: 'year2021',
    meta: { title: '我的炒饭2021'},
    hidden: true
  },
  {
    path: '/webview/buttonGame/rank',
    component: () => import('@/views/chaofun-webview/buttonGame/rank'),
    name: 'rank',
    meta: { title: 'rank'},
    hidden: true
  },
  {
    path: '/webview/secret',
    component: () => import('@/views/chaofun-webview/secret/index'),
    name: 'webViewSecret',
    meta: { title: 'secret'},
    hidden: true
  },
  {
    path: '/webview/forumIntro',
    component: () => import('@/views/activity/help/forumIntro'),
    name: 'webViewForumIntro',
    meta: { title: '版主介绍'},
    hidden: true
  },
  {
    path: '/webview/agreement',
    component: () => import('@/views/chaofun-webview/agreement/agreement'),
    name: 'webViewForumIntro',
    meta: { title: '炒饭隐私政策'},
    hidden: true
  },
  {
    path: '/webview/useragree',
    component: () => import('@/views/chaofun-webview/agreement/useragree'),
    name: 'webViewForumIntro',
    meta: { title: '炒饭用户协议'},
    hidden: true
  },
]

export default  routes;
