// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Junlin`s Blog",
  title: "Junlin`s Blog",
  description: "A modern blog built with Astro",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Posts",
    contact: "Contact",
    // comments: "Comments",
  },
  
  // Hero Section
  hero: {
    prefix: "I am",
    name: "Squidwa2d",
    intro: "2027届计算机科学与技术专业Scu'er。热衷软件开发、物联网与AI技术探索，积极参与竞赛与项目实践，也投身技术社群活动组织与科普，愿以专业能力解决实际问题，持续学习成长。\n欢迎来到我的博客！",
    avatar: "/image/20943608.jpeg",
    buttons: {
      viewPosts: "View Posts",
      contactMe: "Contact Me",
    },
    socialLinks: [
      //{ name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
      //{ name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
      //{ name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/Squidwa2d" },
    ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "大家好，我是Squidwa2d，一名2027届计算机科学与技术专业的Scu'er，对技术探索抱有极大热情。我热爱钻研软件开发、物联网与人工智能领域的前沿技术，积极参与各类工程实践项目和学科竞赛。同时我也热衷社群建设与技术普及，曾参与组织多项技术类活动，和同行交流分享技术见解。我希望在未来的学习与职业道路中，持续深耕实践，将专业知识运用到实际问题的解决中。",
  },
  
  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "3200902813@qq.com",
        //link: "mailto:tom@example.com",
      },
      phone: {
        label: "Phone",
        value: "+86 13668144932",
        //link: "tel:+1 (234) 567-890",
      },
      location: {
        label: "Location",
        value: "成都, 四川",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        //{ name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
        //{ name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
        //{ name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/Squidwa2d" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    // messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Someone. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star my project on Github",
      url: "https://github.com/",
    },
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore our latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },
  
  // // Comments Page
  // comments: {
  //   title: "Comments & Discussion",
  //   subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
  //   guidelines: {
  //     title: "Community Guidelines",
  //     items: [
  //       "Be respectful and constructive in your comments",
  //       "No spam, self-promotion, or advertising allowed",
  //       "No personal attacks, hate speech, or harassment",
  //       "Stay on topic and keep discussions relevant",
  //       "No inappropriate, offensive, or illegal content",
  //       "Use clear, friendly, and inclusive language",
  //     ],
  //   },
  // },
};

