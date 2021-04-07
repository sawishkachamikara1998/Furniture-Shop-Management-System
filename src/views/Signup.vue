<template>
  <div class="SignUp">
    <div class="row" style="align: center">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="col mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="col mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="mb-3 col form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Remember Me</label
            >
          </div>

         <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">Submit</button>
        </div>
        <br>
          <p style="text-align:right;">
            <a href="https://example.com">Forget Password ?</a>
        </p>
        </form>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>
<script>
</script>
