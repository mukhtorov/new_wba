import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import { Container } from './style';
import { Navbar } from '../components/Navbar';
import Settings from '../components/Settings';
import { data } from '../mock/kurslarimiz';

export const Root = () => {
  return (
    <Container>
      <Settings />
      <Routes>
        {navbar.map(
          ({ id, Element, pathname, hidden }) =>
            hidden && <Route key={id} path={pathname} element={<Element />} />
        )}
        <Route element={<Navbar />}>
          {navbar.map(
            ({ id, Element, pathname, hidden }) =>
              !hidden && (
                <Route key={id} path={pathname} element={<Element />} />
              )
          )}
        </Route>
        <Route element={<Navbar />}>
          {data.map(({ id, pathname, Element }) => (
            <Route key={id} path={pathname} element={<Element />} />
          ))}
        </Route>
        <Route element={<Navbar />}>
          {data.map(({ id, pathname, Element }) => (
            <Route key={id} path={`${pathname}/:id`} element={<Element />} />
          ))}
        </Route>
        <Route path='/' element={<Navigate to={'/asosiy'} />} />
        <Route path='*' element={<h1>not found</h1>} />
      </Routes>
    </Container>
  );
};
