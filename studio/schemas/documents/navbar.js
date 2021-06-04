export default {
    name: 'navbar',
    type: 'document',
    title: 'Navbar',
    fields: [
      {
        name: 'text',
        type: 'string',
        title: 'Link display',
        description: 'Navbar the links displayed text.',
      },
      {
        name: 'url',
        type: 'url',
        title: 'Href to',
        description: 'Navbar where the link is referring to.',
      }
    ]
  }