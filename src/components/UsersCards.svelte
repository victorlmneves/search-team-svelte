<script>
  import { fly } from "svelte/transition";

  export let users;
  let visible = false;
</script>

<style>
  .users {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
  }

  .users__content {
    border: 2px solid #ccc;
    border-radius: 3px;
    padding: 10px 10px 40px;
    position: relative;
    margin: 0 30px 50px;
    width: 300px;
  }

  .users__content-move {
    transition: all 600ms ease-in-out 50ms
  }

  .users__content-enter-active {
    transition: all 300ms ease-out
  }

  .users__content-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  .users__content-enter,
  .users__content-leave-to {
    opacity: 0
  }

  .users__content-enter {
    transform: scale(0.9)
  }

  .users__item {
    align-items: center;
    display: flex;
    font-size: .9rem;
    margin-bottom: 10px;
    text-indent: 10px;
    transform-origin: 10% 50%;
    z-index: 1;
  }

  .users__item:before {
    content: "";
    font-size: 1.2rem;
    margin-right: 10px;
    width: 30px;
  }

  .users__item--user {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .users__item--user:before {
    content: "\e900";
    font-family: "icomoon";
    font-weight: 400;
  }

  .users__item--address:before {
    content: "\e902";
    font-family: "icomoon";
  }

  .users__link {
    color: #333;
    text-decoration: none;
    text-indent: 0;
  }

  .users__link:hover {
    text-decoration: underline;
  }

  .users__button {
    align-items: center;
    background: transparent;
    border: 2px solid #ccc;
    bottom: 10px;
    color: #333;
    cursor: pointer;
    display: flex;
    font-size: .8rem;
    padding: 5px 10px;
    position: absolute;
    right: 10px;
    text-decoration: none;
  }

  .users__button .icon-phone {
    padding-right: 10px;
  }

  .users__button .icon-phone:hover {
    background: #ccc;
    color: #fff;
  }

  .no-results {
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }

  .no-results__msg {
    font-size: 2rem;
    font-weight: 300;
  }
</style>

<div id="js-content">
  <div class="users">
    {#each users as {id, name, company, email, phone, website, address},i}
      <div
        class="users__content"
        in:fly="{{x: -200,duration: 1000,delay:i*200 }}" 
        out:fly="{{ x: 200, duration: 1000,delay:i*200 }}"
      >
        <div class="users__item users__item--user">{name}</div>
        <div class="users__item">{company.name}</div>
        <div class="users__item"><a href="'mailto:' + email" class="users__link">{email}</a></div>
        <div class="users__item"><a href="phone" class="users__link">{phone}</a></div>
        <div class="users__item">{website}</div>
        <div class="users__item users__item--address">{address.city}</div>
        <a href="user.phone" class="users__button">
          <i class="icon-phone"></i>
          Contact
        </a>
      </div>
    {:else}
      <div id="js-no-results" class="no-results">
        <p class="no-results__msg">No results found</p>
      </div>
    {/each}
  </div>
</div>