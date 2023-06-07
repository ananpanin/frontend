import Head from 'next/head'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
  return (
    <>
      <Head>
        <title>itsyou</title>
      </Head>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/">itsyou</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/">หน้าเเรก</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul class="dropdown-menu">
          <li><Link class="dropdown-item" href="/contect">ติดต่อ</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/supportme">Supportme</Link>
        </li>
        <br></br>
      </ul>
    </div>
    <form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="ค้นหา" aria-label="Search" />
  <button className="btn btn-outline-success" type="submit">ค้นหา</button>
</form>
  </div>
</nav>

<div class="col">
          <div class="card shadow-sm">
      <img src="/bg2.png" className="d-block w100" alt="..." width="1%" height="100%"/>       

<br></br>

<div className="container marketing">
  <div className="row">
    <div className="col-lg-4">
      <img src="/1.png" alt width="{140}" hanging="{140}" />
      <h2 className="fw-normal">☆</h2>
      <p>YL FULL ZIP - GREY HEARTS ♥ </p>
      <p><a className="btn btn-secondary" href="#">$120.00</a></p>
    </div>
    <div className="col-lg-4">
      <img src="/2.png" alt width="{140}" hanging="{140}" />      <h2 className="fw-normal">☆</h2>
      <p>YL FULL ZIP - PURPLE HEARTS ♥ </p>
      <p><a className="btn btn-secondary" href="#">$120.00</a></p>
    </div>
    <div className="col-lg-4">
       <img src="/3.png" alt width="{140}" hanging="{140}" />      <h2 className="fw-normal">☆</h2>
      <p>YL FULL ZIP - BLUE HEARTS ♥ </p>
      <p><a className="btn btn-secondary" href="#">$120.00</a></p>
    </div>
  </div>
</div>

<div className="container marketing">
  <div className="row">
    <div className="col-lg-4">
      <img src="/เข็มขัดขาวดำ.png" alt width="{140}" hanging="{140}" />
      <h2 className="fw-normal">☆</h2>
      <p>YL! BELT - (REVERSIBLE) WHITE / BLACK ♥ </p>
      <p><a className="btn btn-secondary" href="#">$120.00</a></p>
    </div>
    <div className="col-lg-4">
      <img src="/เข็มขัดดำ.png" alt width="{140}" hanging="{140}" />      <h2 className="fw-normal">☆</h2>
      <p>YL! BELT - BLACK ♥ </p>
      <p><a className="btn btn-secondary" href="#">$120.00</a></p>
    </div>
    <div className="col-lg-4">
       <img src="/เข็มขัดดำ.png" alt width="{140}" hanging="{140}" />      <h2 className="fw-normal">☆</h2>
      <p>YL! BELT - WHITE ♥ </p>
      <p><a className="btn btn-secondary" href="#">$120.00</a></p>
    </div>
  </div>
</div>

<div className="container marketing">
  <div className="row">
    <div className="col-lg-4">
      <img src="/กระเป๋า.png" alt width="{140}" hanging="{140}" />
      <h2 className="fw-normal">☆</h2>
      <p>YL BACKPACK ♥ </p>
      <p><a className="btn btn-secondary" href="#">$120.00</a></p>
    </div>
    <div className="col-lg-4">
      <img src="/ผ้าพันคอ.png" alt width="{140}" hanging="{140}" />      <h2 className="fw-normal">☆</h2>
      <p>YL SCARF ♥ </p>
      <p><a className="btn btn-secondary" href="#">$50.00</a></p>
    </div>
    <div className="col-lg-4">
       <img src="/หมอน.png" alt width="{140}" hanging="{140}" />      <h2 className="fw-normal">☆</h2>
      <p>YL PILLOW ♥ </p>
      <p><a className="btn btn-secondary" href="#">$30.00</a></p>
    </div>
  </div>
</div>

<div className="container marketing">
  <div className="row">
    <div className="col-lg-4">
      <img src="/ผ้าเช็ดหน้าขาว.png" alt width="{140}" hanging="{140}" />
      <h2 className="fw-normal">☆</h2>
      <p>BANDANA - WHITE ♥ </p>
      <p><a className="btn btn-secondary" href="#">$20.00</a></p>
    </div>
    <div className="col-lg-4">
      <img src="/ผ้าเช็ดหน้าดำ.png" alt width="{140}" hanging="{140}" />      <h2 className="fw-normal">☆</h2>
      <p>BANDANA - BLACK ♥ </p>
      <p><a className="btn btn-secondary" href="#">$20.00</a></p>
    </div>
    <div className="col-lg-4">
       <img src="/ผ้าเช็ดหน้าฟ้า.png" alt width="{140}" hanging="{140}" />      <h2 className="fw-normal">☆</h2>
      <p>BANDANA - WHITE ♥ </p>
      <p><a className="btn btn-secondary" href="#">$20.00</a></p>
    </div>
  </div>
</div>

<br></br><br></br><br></br>
</div>
</div>


    </>
  );
}