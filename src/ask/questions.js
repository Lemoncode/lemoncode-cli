module.exports = {
  questions: [
    {
      name: 'useJest',
      type: 'confirm',
      message: 'Do you want jest configuration?',
      default: true,
    },
    {
      name: 'useReact',
      type: 'confirm',
      message: 'Are you using React?',
      default: true,
    },
    {
      name: 'webpackVersion',
      type: 'list',
      message: 'Which webpack version?',
      choices: [
        '3',
        '4',
      ],
      filter: (value) => Number(value),
    },
  ],
}
