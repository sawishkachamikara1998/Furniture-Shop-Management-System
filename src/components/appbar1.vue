<template>
  <div class="appbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        
        <a class="navbar-brand">
           <a href="http://localhost:8081/"><img src="@\assets\logo.svg" style="height: 150px; width: 150px; margin-left:40px"></a> 
        </a>
         <h3 style="color: black; font-size:44px; text-align:center">NEW KAMAL PVT(LTD)</h3>
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-left:60px">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style=" font-size:24px">

            
            
            
            <div class="search-bar" style="margin-top:20px">
              <form class="d-flex" >
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <a href="#" class="btn btn-primary btn-lg" tabindex="-1" role="button" style="margin-right:50px">Search</a>
            </form></div>
            

            <li class="nav-item" style="padding:10px">
              <a class="nav-link active" aria-current="page" href="/cart" style="margin:10px"><i class="fas fa-shopping-cart"></i></a>
            </li>

            <li class="nav-item" style="padding:10px">
              <a class="nav-link" href="/wishlist" style="margin:10px; size: 30px"><i class="fas fa-heart"></i></a>
            </li>


            <li class="nav-item" style="padding:10px">
              <a href="/signup" class="btn btn-primary btn-lg" tabindex="-1" role="button" >Sign Up</a>
              <a href="/signin" class="btn btn-primary btn-lg" tabindex="-1" role="button" style="margin: 10px">Sign In</a>
            </li>
        
          </ul>
          
        </div>
      </div>
    </nav>
  </div>
</template>