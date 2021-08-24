module.exports = {
  docs: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['prerequisites', 'installation', 'initialization', 'deployment']
    },
    {
      type: 'doc',
      label: 'Management & Maintenance',
      id: 'management-maintenance'
    },
    {
      type: 'doc',
      label: 'Teardown',
      id: 'teardown'
    },
    {
      type: 'doc',
      label: 'Architecture',
      id: 'architecture'
    },
    {
      type: 'category',
      label: 'Helpful Resources',
      items: [
        {
          type: 'link',
          label: 'AWS CLI Setup',
          href: 'https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html'
        },
        {
          type: 'link',
          label: 'DBT Tutorial',
          href: 'https://github.com/tapestry-pipeline/dbt#readme'
        },
        {
          type: 'link',
          label: 'Tapestry Case Study',
          href: 'https://tapestry-pipeline.github.io'
        },
      ]
    }
  ],
};
