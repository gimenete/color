const COLOR_MODE_NORMAL = 'COLOR_MODE_NORMAL'
const COLOR_MODE_DARK = 'COLOR_MODE_DARK'

const allColors = {
  [COLOR_MODE_NORMAL]: [
    {
      name: 'red',
      value: 'red'
    },
    {
      name: 'blue',
      value: 'blue'
    },
    {
      name: 'green',
      value: 'green'
    },
    {
      name: 'orange',
      value: 'orange'
    },
    {
      name: 'purple',
      value: 'purple'
    },
    {
      name: 'pink',
      value: 'pink'
    },
    {
      name: 'grey',
      value: 'grey'
    },
    {
      name: 'yellow',
      value: 'yellow'
    },
    {
      name: 'brown',
      value: 'brown'
    }
  ],
  [COLOR_MODE_DARK]: [
    {
      name: 'red',
      value: 'rgb(197, 30, 30)'
    },
    {
      name: 'blue',
      value: 'rgb(9, 9, 180)'
    },
    {
      name: 'green',
      value: 'rgb(26, 102, 26)'
    },
    {
      name: 'orange',
      value: 'rgb(209, 137, 4)'
    },
    {
      name: 'purple',
      value: 'rgb(78, 6, 78)'
    },
    {
      name: 'pink',
      value: 'rgb(236, 154, 168)'
    },
    {
      name: 'grey',
      value: 'rgb(41, 36, 36)'
    },
    {
      name: 'yellow',
      value: 'rgb(231, 231, 0)'
    },
    {
      name: 'brown',
      value: 'rgb(126, 48, 48)'
    }
  ]
}

export { COLOR_MODE_NORMAL, COLOR_MODE_DARK, allColors }
