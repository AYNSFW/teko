'use client';

import Container from 'react-bootstrap/Container';

export default function DashPage() {
  return (
    <>
      <Container>
          <h1 className='mt-4 mb-3 ml'>Selamat Datang!</h1>
          <h4>Berikut adalah peraturan dalam mengelola website yang harus dipatuhi</h4>
      </Container>
      <Container>
          <p className='text-justify lg:text-lg'>
            Harap memperhatikan konten yang dibuat atau edit sesuai dengan peraturan yang telah ditetapkan <br></br>
            Harap bertanggung jawab dalam mengelola website <br></br>
            Saling berkoordinasi dalam mengelola website <br></br>
            Dalam membuat konten tidak mengandung SARA <br></br>
            Mengelola website dengan baik dan berkala <br></br>
          </p>
      </Container>
    </>
  );
}

