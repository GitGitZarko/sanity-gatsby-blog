export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d3189b7be45f797e0e235d5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-m3caycht',
                  apiId: 'c001152f-695b-42af-be88-eaaf29539f29'
                },
                {
                  buildHookId: '5d3189b8141560be1cf10a10',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3escimag',
                  apiId: '2183cf04-3c9f-40ad-ac7b-dfd811a713ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GitGitZarko/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3escimag.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
