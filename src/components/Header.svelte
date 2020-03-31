<script>
  import { routes } from '../routes'

  export let currentRoute = {};

  let isActive = ''

  $: routes.forEach((elm) => {
    if (elm.name === currentRoute.name) {
       isActive = 'active'
    } else {
       isActive = ''
    }
  })
</script>

<style>
  .nav {
    border-bottom: 1px solid rgba(255,62,0,0.1);
    display: flex;
    font-weight: 300;
    height: 50px;
    justify-content: center;
    padding: 0;
  }

  .nav__list {
    margin: 0;
    padding: 0;
  }

  .nav__item {
    display: block;
    float: left;
  }

  :global(.nav__item > a) {
    color: #333;
    position: relative;
    display: inline-block;
    text-decoration: none;
    padding: 1em 0.5em;
  }

  :global(.nav__item > a.active:after ) {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }
</style>

<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a class:active="{'/' === currentRoute.name}" href='/'>home</a>
    </li>
    <li class="nav__item">
      <a class:active={'/about' === currentRoute.name} href='/about'>about</a>
    </li>
    <li class="nav__item">
      <a class:active={'/users' === currentRoute.name} href='/users'>users</a>
    </li>
  </ul>
</nav>