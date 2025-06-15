// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub repositories and Stats",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-paper-review-presel-pre-instruction-data-selection-for-visual-instruction-tuning",
        
          title: "[Paper Review] Presel: Pre-Instruction Data Selection for Visual Instruction Tuning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Presel/";
          
        },
      },{id: "post-dit-scalable-diffusion-models-with-transformers-dev-in-seoul",
        
          title: '[DiT] Scalable Diffusion Models with Transformers — Dev In Seoul <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "논문 의 내용을 정리한 글입니다.논문 출처: 아카이브, Code이 논문은 Facebook Research(현 Meta AI)에서 공개한 논문이며, 저자 중 William Peebles는 OpenAI에서 Research Scientist로 일하고 있으며, 영상 생성 AI Sora의 개발을 공동으로 리드하고 있다고 한다.DiT 아키텍처에 관한 관심은 OpenAI의 Sora 공개 이후 뜨거워진 것 같으며, 최근에 공개된 이미지 생성 모델인 Stable Diffusion 3, PixArt 계열의 모델에도 적용되어 더욱 각광받고 있다고 생각한다.개괄적인 논문 요약개요이 연구는 이미지 생성을 위한 새로운 접근 방식으로 트랜스포머 기반 확산 모델을 제안한다. 기존의 U-Net 구조를 대체하는 트랜스포머 아키텍처를 사..",
        section: "Posts",
        handler: () => {
          
            window.open("https://dev-in-seoul.tistory.com/51", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-personal-website-is-opened-sparkles-smile",
          title: 'My Personal Website is opened! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-we-go-gym",
          title: 'We Go Gym',
          description: "A fitness app that helps users find the best gym-mate for their needs, powered by Large Language Models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%77%63%68%6F%6F%69%32%32%34@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/GoGiants1", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hwchoi", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
