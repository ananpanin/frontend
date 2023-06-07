import Head from 'next/head'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
  return (
    <>
      <Head>
        <title>MyCats</title>
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

<center><h2>ช่องทางการติดต่อ</h2></center>
<br></br>
<ul>
  <center><a href="https://www.instagram.com/anpn_bomm/"> instagram</a></center>
  <br></br>
  <center><a href="https://facebook.com/boomananpanin"> facebook</a></center>
  <br></br>
</ul>

<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

</div>
</div>
    </>
  );
}