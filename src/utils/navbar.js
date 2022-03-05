import { Generic } from '../pages/Generic';
import Asosiy from '../pages/Asosiy';
import Login from '../pages/Login';
import OurTeam from '../pages/OurTeam';
import Natijalar from '../pages/Natijalar';
import Kurslar from '../pages/Kurslar';

export const navbar = [
  {
    id: 1,
    title: 'Asosiy',
    pathname: '/asosiy',
    Element: Asosiy,
    hidden: false,
  },
  {
    id: 2,
    title: 'Kurslarimiz',
    pathname: '/kurslarimiz',
    Element: Kurslar,
    hidden: false,
  },
  {
    id: 3,
    title: 'Natijalar',
    pathname: '/natijalar',
    Element: Natijalar,
    hidden: false,
  },
  {
    id: 4,
    title: 'Bizning jamoa',
    pathname: '/bizningjamoa',
    Element: OurTeam,
    hidden: false,
  },
  {
    id: 5,
    title: 'YouTube',
    pathname: '/youtube',
    Element: Generic,
    hidden: false,
  },
  {
    id: 6,
    title: 'Signin',
    pathname: '/login',
    Element: Login,
    hidden: true,
  },
  {
    id: 7,
    title: 'Signup',
    pathname: '/signup',
    Element: Generic,
    hidden: true,
  },
];
