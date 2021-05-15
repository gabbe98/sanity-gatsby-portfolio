export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a02fd54bb8d451e572eda0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-m212rjyp',
                  apiId: '605071fe-5269-4efc-b8d4-8cec1bd26ab4'
                },
                {
                  buildHookId: '60a02fd5c1a56f5bb275dc93',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ta3i4oio',
                  apiId: 'a8e80000-ddb2-436d-8596-f8b987f0c50c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabbe98/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ta3i4oio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
