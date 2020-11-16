export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fb27f5c92ce9ac9bedf86af',
                  title: 'Sanity Studio',
                  name: 'sanity-helpidserver-landing-pages-studio',
                  apiId: '7b9f380e-e9c7-4e97-8505-d06d9ebd3991'
                },
                {
                  buildHookId: '5fb27f5c86dab3e45ab8bbcb',
                  title: 'Landing pages Website',
                  name: 'sanity-helpidserver-landing-pages',
                  apiId: 'ba0d3a95-d224-42df-9537-3cbde7aba532'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MilHelp/sanity-helpIDserver-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-helpidserver-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
