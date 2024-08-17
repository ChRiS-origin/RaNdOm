import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/ChRiS-origin/RaNdOm.git', // Update to point to your repository
  user: {
   name: 'ChRiS', // update to use your name
   email: '' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);