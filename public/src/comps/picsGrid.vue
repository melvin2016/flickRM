<template lang="html">
  <div class="row">
    <div class="col s12 cards-container">
      <div class="card hoverable" v-for="pic in pics">
        <div class="card-image waves-effect waves-light">
          <img v-bind:src="pic.url">
        </div>
        <div class="card-content">
          {{pic.title}}
        </div>
        <div class="card-action">
          <a v-bind:href="pic.url" target="_blank">Original Image</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    pics : {
      type:Array,
      required:true
    }
  }
}
</script>

<style lang="css" scoped>
.cards-container {
  column-break-inside: avoid;
}
.cards-container .card {
  display: inline-block;
  overflow: visible;
}

@media only screen and (max-width: 600px) {
  .cards-container {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
  }
}
@media only screen and (min-width: 601px) {
  .cards-container {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
}
@media only screen and (min-width: 993px) {
  .cards-container {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}


</style>
