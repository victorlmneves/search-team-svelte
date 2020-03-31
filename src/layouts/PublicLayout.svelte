<script>
  import { Route } from 'svelte-router-spa'

  import Header from '../components/Header.svelte'

  export let currentRoute

  const params = {}
</script>
 
<div class="app">
  <Header {currentRoute} {params} />
  <Route {currentRoute} {params} />
</div>