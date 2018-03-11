export const schema = [
  {
    name: 'Typography',
    settings: [
      {
        type: 'header',
        content: 'Headings and buttons'
      },
      {
        type: 'select',
        id: 'typography-heading-font',
        label: 'Heading Font',
        options: [
          { value: 'A', label: 'A', group: '1' },
          { value: 'B', label: 'B', group: '1' },
          { value: 'C', label: 'C', group: '2' },
          { value: 'D', label: 'D', group: '3' },
          { value: 'E', label: 'E', group: '3' }
        ]
      },
      {
        type: 'select',
        id: 'typography-heading-size',
        label: 'Heading Font Size',
        options: [
          { value: '15px', label: '15px' },
          { value: '16px', label: '16px' },
          { value: '17px', label: '17px' }
        ]
      }
    ]
  }
]
