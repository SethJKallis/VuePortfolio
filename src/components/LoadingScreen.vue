<template>
    <div class="spinner-grow text-danger loaderOne" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-primary loaderTwo" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-success loaderThree" role="status">
  <span class="sr-only"></span>
</div>
</template>

<script>

export default{
    name: 'loadingScreen',
    props: {loadingItems: true}
}
  
</script>