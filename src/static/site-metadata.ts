interface ISiteMetadataResult {
  siteTitle: 'Run Page';
  siteUrl: 'https://running-page-beige.vercel.app/';
  description: '个人运动数据';
  logo: 'https://raw.githubusercontent.com/canbaodexieshen/FoodPhoto/main/img/logo.jpg';
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://running-page-beige.vercel.app/',
  logo: 'https://raw.githubusercontent.com/canbaodexieshen/FoodPhoto/main/img/logo.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://github.com/yihong0618/gitblog',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
