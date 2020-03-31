<script>
  import { onMount } from 'svelte'

  import Search from '../components/Search.svelte'
  import UsersCards from '../components/UsersCards.svelte'

  let users = [];
  let usersList = []
  let value = ''

  onMount(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await res.json();
    usersList = users
  })

  const filterUserHandler = (value) => {
    usersList = []
    users.filter(function(user) {
      if (user.name.toLowerCase().includes(value.detail.toLowerCase())) {
        return usersList = [...usersList, user]
      }
    })
  }
</script>
 
<Search data={usersList} on:filterUser={filterUserHandler} />
<UsersCards users={usersList}/>