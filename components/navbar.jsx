'use client';

import { use } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { assetPrefix } from '../next.config';

import MasukModal from './navbar/masukModals';
import DaftarModal from './navbar/daftarModals';

const getMenus = async (q) => {
  const res = await fetch(`${assetPrefix}/api/menus?current=${q}`);
  const data = await res.json();
  return data;
};
function CustomNavbar(props) {
  const menus = use(getMenus(props.current));
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        position="fixed"
        className="w-full z-50 sticky top-0 bg-white drop-shadow mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <h1 className="text-brand ml-2 text-2xl font-extrabold lg:text-4xl">
              Teko
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              {menus.map((menu) => (
                <Link
                  key={menu.id}
                  className={
                    menu.current
                      ? 'mx-2 font-bold lg:text-lg'
                      : 'mx-2 lg:text-lg'
                  }
                  active={menu.current.toString()}
                  href={menu.href}
                >
                  {menu.name}
                </Link>
              ))}
            </Nav>
            <div className="flex flex-col md:flex-row ">
              <DaftarModal></DaftarModal>
              <MasukModal></MasukModal>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
