<template>
    <section class="vh-100 gradient-custom">
  <div class="container">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 10px;">
          <div class="card-body">
            <h3 class="pb-3">Registration Form</h3>
            <form>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="firstName" class="form-control form-control-lg" placeholder="First Name"/>
                  </div>
                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="lastName" class="form-control form-control-lg" placeholder="Last Name"/>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="email" id="emailAddress" class="form-control form-control-lg" placeholder="Email"/>
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="tel" id="phoneNumber" class="form-control form-control-lg" placeholder="Phone Number"/>
                  </div>

                </div>
              </div>
              <div class="">
                <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
  height: 300px;
}
.container{
  margin-top: 170px;
}
  @media only screen and (min-width:320px) and (max-width: 321px){
  .card{
    height: 430px;
  }
  section{
    /* padding-top: -40px; */
    margin-bottom: 100px;
  }
}
 @media only screen and (min-width:375px) and (max-width: 376px){
  .card{
    height: 430px;
  }
  section{
    /* padding-top: -40px; */
    margin-bottom: 70px;
  }
}
 @media only screen and (min-width:425px) and (max-width: 426px){
  .card{
    height: 430px;
  }
  section{
    /* padding-top: -40px; */
    margin-bottom: 70px;
  }
}
</style>