import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    subheader: 'E-learning',
    cover: '/assets/images/menu/menu_elearning.jpg',
    items: [
      { title: 'Landing', path: '/' },
      { title: 'Courses', path: paths.courses },
      { title: 'Course', path: paths.course },
      { title: 'Blog Posts', path: paths.posts },
      { title: 'Blog Post', path: paths.post },
      { title: 'About', path: paths.about },
      { title: 'Contact', path: paths.contact },
    ],
  },
  {
    subheader: 'Common',
    items: [
      { title: 'Login Background', path: paths.loginBackground },
      { title: 'Register Background', path: paths.registerBackground },
      { title: 'Forgot Password', path: paths.forgotPassword },
      { title: 'Verify Code', path: paths.verify },
      { title: '404 Error', path: paths.page404 },
      { title: '500 Error', path: paths.page500 },
      { title: 'Maintenance', path: paths.maintenance },
      { title: 'ComingSoon', path: paths.comingsoon },
      { title: 'Pricing 01', path: paths.pricing01 },
      { title: 'Pricing 02', path: paths.pricing02 },
      { title: 'Payment', path: paths.payment },
      { title: 'Support', path: paths.support },
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'Cursos', path: paths.courses },
  { title: 'Blog', path: paths.posts },
  { title: 'Nosotros', path: paths.about },
  { title: 'Contacto', path: paths.contact },
];
