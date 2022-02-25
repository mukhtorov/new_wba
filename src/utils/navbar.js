import { Generic } from '../pages/Generic';
import Asosiy from '../pages/Asosiy';
import Login from '../pages/Login';

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
    Element: Generic,
    hidden: false,
  },
  {
    id: 3,
    title: 'Natijalar',
    pathname: '/natijalar',
    Element: Generic,
    hidden: false,
  },
  {
    id: 4,
    title: 'Bizning jamoa',
    pathname: '/bizningjamoa',
    Element: Generic,
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
