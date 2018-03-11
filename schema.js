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
        default: '26px',
        options: [
          {
            'value': '20px',
            'label': '20px'
          },
          {
            'value': '22px',
            'label': '22px'
          },
          {
            'value': '24px',
            'label': '24px'
          },
          {
            'value': '26px',
            'label': '26px'
          },
          {
            'value': '28px',
            'label': '28px'
          },
          {
            'value': '30px',
            'label': '30px'
          },
          {
            'value': '32px',
            'label': '32px'
          },
          {
            'value': '34px',
            'label': '34px'
          },
          {
            'value': '36px',
            'label': '36px'
          }
        ]
      }
    ]
  }
]
