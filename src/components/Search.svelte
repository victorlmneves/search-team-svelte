<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export const title = 'Search Your Team'

  const filterUser = (value) => {

    dispatch('filterUser', value)
  }
</script>

<style>
  .search {
    margin: 30px auto 60px;
    padding: 0;
    position: relative;
    width: 300px;
  }

  .search__title {
    font-weight: 300;
    text-align: center;
  }

  .search__input {
    border: 2px solid #ccc;
    border-radius: 3px;
    color: #ccc;
    font-size: .9rem;
    padding: 5px 40px 5px 10px;
    width: 100%;
  }

  .search .icon-search {
    bottom: 14px;
    position: absolute;
    right: 6px;
  }
</style>

<section class="search">
  <h1 class="search__title">{title}</h1>
  <input type="search"
    id="js-search-input"
    name="search"
    class="search__input"
    placeholder="Search"
    on:keyup={({ target: { value } }) => filterUser(value)}
  />
  <i class="icon-search"></i>
</section>