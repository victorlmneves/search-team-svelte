<script>
  import { Navigate } from 'svelte-router-spa'
</script>

<style type="text/scss">
  $color: red;

  h1 {
    color: $color;
    text-align: center
  }

  .borat {
    margin: 0 auto;
    max-width: 40vw;
  }

  img {
    width: 100%
  }

  figcaption {
    margin-top: 30px;
    text-align: center;
  }
</style>

<main>
  <h1>Great success!</h1>
  <figure class="borat">
    <Navigate to="/about">
      <img alt="Borat" src="/build/assets/images/great-success.png">
    </Navigate>
    <figcaption>HIGH FIVE!</figcaption>
  </figure>
</main>