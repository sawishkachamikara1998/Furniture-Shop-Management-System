<template>
  <div class="appbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin:-20px">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="font-size:24px">

            <li class="nav-item" style="padding:10px">
              <a class="nav-link active" aria-current="page" href="http://localhost:8081/" style="margin-left: 120px;"><i class="fas fa-home"></i></a>
            </li>

            <li class="nav-item dropdown" style="margin-left:40px; margin-top: 10px">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="font-size:24px">
                <li><a class="dropdown-item" href="/Products?code=wood">Wood</a></li>
                <li><a class="dropdown-item" href="/Products?code=plastic">Plastic</a></li>
                <li><a class="dropdown-item" href="/Products?code=electronic">Electronic</a></li>
                <li><a class="dropdown-item" href="/Products?code=gallary">Gallary</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Documentation</a>
                </li>
              </ul>
            </li>

            <li class="nav-item" style="padding:10px">

              <a class="nav-link active" aria-current="page" href="/delivery">Delivery</a>

            </li>
            <li class="nav-item" style="padding:10px">
              <a class="nav-link" href="/Branches">Branches</a>
            </li>
            <li class="nav-item" style="padding:10px">
              <a class="nav-link" href="/about">Return</a>
            </li>
            <li class="nav-item" style="padding:10px">
              <a class="nav-link" href="/about">My Account</a>
            </li>
            <li class="nav-item" style="padding:10px">
              <a class="nav-link" href="/about">My Order</a>
            </li>
            <li class="nav-item" style="padding:10px">
              <a class="nav-link" href="/about">Contact</a>
            </li>
            <li class="nav-item" style="padding:10px">
              <a class="nav-link" href="/about">About</a>
            </li>

            
            
          </ul>
          
        </div>
      </div>
    </nav>
  </div>
</template>





