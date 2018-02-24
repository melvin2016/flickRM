<template lang="html">
  <div>
    <div class="container">
      <div class="card-panel">
        <p class="flow-text">Gets images from Flicker</p>
        <div class="input-field">
          <input type="text" id="searchPics" validate v-model="searchText" v-on:keyup.enter="search">
          <label for="searchPics">Search</label>
          <input type="submit" class="waves-effect waves-light btn" v-on:click.prevent="search">
        </div>
      </div>
    </div>
    <pics-grid v-bind:pics="pics"></pics-grid>
  </div>
</template>

<script>
import grid from './picsGrid.vue';
export default {
  data(){
    return{
      searchText:'',
      pics:[]
    };
  },
  components:{
    picsGrid:grid
  },
  methods:{
    search(){

      this.pics=[];
      fetch(`/photos/search/${this.searchText}`)
        .then(data=>data.json())
        .then(res=>{
          this.searchText='';
          res.photos.photo.forEach(pic=>{
            let url = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
            let title = pic.title;
            this.pics.push({
              url : url,
              title:title
            });
          });
        })
        .catch((err)=>{
          console.log(err);
        });
        console.log(this.pics);
    }
  }
}
</script>

<style lang="css" scoped>

</style>
