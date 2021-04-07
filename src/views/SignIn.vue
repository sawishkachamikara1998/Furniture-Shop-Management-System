<template>
  <div class="Signup">
    
    <form>
        <div class="mb-3"> </div> 
        <div class="mb-6">
        <label for="exampleInputEmail1" class="form-label">First Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

        <div class="mb-6">
        <label for="exampleInputEmail1" class="form-label">Last Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="mb-6">
        <label for="exampleInputEmail1" class="form-label">E-Mail</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Re-Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <br>
        <p>Gender:</p>
        <div class="Radio"> 
          <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
            Male
          </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
        
        <br>
        <div class="checkBox">
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            I agree all statements in the terms of conditions
          </label>
          </div>

        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">Create Account</button>
        </div>

        <br>
        <p>Already have an account?  


        </div>

        </div>




        
      </div>

       

    </form>
  </div>
    
</template>
