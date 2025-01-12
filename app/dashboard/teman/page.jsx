'use client';

import React from 'react';

import { Container, Button } from 'react-bootstrap';

import ProfilPage from './menus/profil';
import KegiatanPage from './menus/kegiatan';
import ProkerPage from './menus/proker';
import PrePage from './menus/prepage';

class DashboardTeman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPrepage: true,
      showProfil: false,
      showKegiatan: false,
      showProker: false,
    };
  }

  showProfil = () => {
    this.setState({ showProfil: true });
    this.setState({ showKegiatan: false });
    this.setState({ showProker: false });
    this.setState({ showPrepage: false });
  };

  showKegiatan = () => {
    this.setState({ showKegiatan: true });
    this.setState({ showProfil: false });
    this.setState({ showProker: false });
    this.setState({ showPrepage: false });
  };

  showProker = () => {
    this.setState({ showProker: true });
    this.setState({ showKegiatan: false });
    this.setState({ showProfil: false });
    this.setState({ showPrepage: false });
  };
  render() {
    return (
      <>
        <Container className="mb-3 text-center w-full m-0 p-0 md:w-52 bg-brand md:fixed h-full">
          <h1 className="text-white p-2 font-bold">Teko</h1>
          <h5 className="text-white p-2 font-bold">Dashborad Teman</h5>
          <hr className="text-white text-center" />
          <Button
            className={
              this.state.showProfil
                ? 'm-auto bg-brand border-brand block text-white p-2 py-3 no-underline text-center float-none xs:float-left xs:ml-0'
                : 'm-auto bg-brand border-brand block text-white p-2 py-3 no-underline text-center float-none xs:float-left xs:ml-0'
            }
            onClick={this.showProfil}
          >
            Profil
          </Button>
          <Button
            className={
              this.state.showKegiatan
                ? 'm-auto bg-brand border-brand block text-white p-2 py-3 no-underline text-center float-none xs:float-left xs:ml-0'
                : 'm-auto bg-brand border-brand block text-white p-2 py-3 no-underline text-center float-none xs:float-left xs:ml-0'
            }
            onClick={this.showKegiatan}
          >
            Kegiatan
          </Button>
          <Button
            className={
              this.state.showKegiatan
                ? 'm-auto bg-brand border-brand block text-white p-2 py-3 no-underline text-center float-none xs:float-left xs:ml-0'
                : 'm-auto bg-brand border-brand block text-white p-2 py-3 no-underline text-center float-none xs:float-left xs:ml-0'
            }
            onClick={this.showProker}
          >
            Program Kerja
          </Button>
        </Container>
        <Container className="ml-0 md:mt-0 md:ml-52 md:p-4 h-full">
          {this.state.showProfil && <ProfilPage />}
          {this.state.showKegiatan && <KegiatanPage />}
          {this.state.showProker && <ProkerPage />}
          {this.state.showPrepage && <PrePage />}

          {/* 

          <ProfilPage></ProfilPage>
          <KegiatanPage></KegiatanPage>
          <ProkerPage></ProkerPage> */}
        </Container>
      </>
    );
  }
}

export default DashboardTeman;
