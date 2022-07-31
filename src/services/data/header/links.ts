
const defaultOptions = {
  smooth: true,
  duration: 500,
  offset: -90,
}

export const headerLinks = {
  navLinks: [
    {
      id: 1,
      name: 'Club',
      link: '#club',
      text: 'links.club',
      isExternal: false,
    },
    {
      id: 2,
      name: 'Store',
      link: 'https://www.wine.com.br/loja-vinhos',
      text: 'links.store',
      isExternal: true,
    },
    {
      id: 3,
      name: 'Producers',
      link: 'https://www.wine.com.br/loja/produtor/',
      text: 'links.producers',
      isExternal: true,
    },
    {
      id: 4,
      name: 'Offers',
      link: 'offers',
      text: 'links.specialOffers',
      isExternal: false,
      options: {
        ...defaultOptions
      }
    },
    {
      id: 5,
      name: 'Events',
      link: 'https://www.wineeventos.com.br/encontreembaixador/',
      text: 'links.events',
      isExternal: true,
    },
  ],
};
