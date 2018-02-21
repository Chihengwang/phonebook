<template>
<div>
    <nav class="panel column is-offset-2 is-8">
  <p class="panel-heading">
    Vue.js phonebook
  <a class="button is-primary is-outlined is-medium has-text-weight-bold" @click="openAdd">Add new</a>
  <span class="is-pulled-right" v-if="loading">
    <i class="fa fa-spinner fa-spin" style="font-size:30px"></i>
  </span>
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search" v-model="searchQuery">
      <span class="icon is-small is-left">
        <i class="fas fa-search"></i>
      </span>
    </p>
  </div>
  <a class="panel-block" v-for="(list,index) in temp" :key="list.id">
    <span class="column is-9">
      {{list.name}},{{index}}
    </span>
    <span class="panel-icon column is-1" @click="openDel(list.id,index)">
      <i class="has-text-danger fas fa-trash-alt" ></i>
    </span>
    <span class="panel-icon column is-1" @click="openUpdate(index)">
      <i class="has-text-info fas fa-edit"></i>
    </span>
    <span class="panel-icon column is-1" @click="openShow(index)">
      <i class="has-text-primary fas fa-eye" aria-hidden="true"></i>
    </span>
  </a>
</nav>
  <Add :openmodal='addActive' @closeRequest='close'></Add>
  <Show :openmodal='showActive' @closeRequest='closeShow'></Show>
  <Update :openmodal='updateActive' @closeRequest='closeUpdate'></Update>
</div>
</template>

<script>
//Directory is under the components
let Add=require('./Add.vue');
let Show=require('./Show.vue');
let Update=require('./Update.vue');

export default {
  mounted(){
    console.log('this working')
        axios.post('../getdata')
        .then((response)=> this.lists=this.temp=response.data)
        .catch((error) => this.error_obj=error.response.data.errors);
  },
  components:{Add,Show,Update},
  data(){
    return{
      addActive:'',
      showActive:'',
      updateActive:'',
      lists:{},
      error_obj:{},
      loading:false,
      searchQuery:'',
      temp:{}
    }
  },
  watch:{
    searchQuery(){
      // console.log(this.searchQuery);
      if(this.searchQuery.length>0){

        this.temp=this.lists.filter((item)=>{
         return Object.keys(item).some((key)=>{
            let string= String(item[key]);
            return string.toLowerCase().indexOf(this.searchQuery.toLowerCase())>-1;
          });
        });
        // this.temp=this.lists.filter((item)=>{
        //   return item.name.toLowerCase().indexOf(this.searchQuery.toLowerCase())>-1;
        // });
        // console.log(result);
      }else{
        this.temp=this.lists;
      }
    }
  },
  methods:{
    openAdd(){
      this.addActive='is-active';
    },
    openShow(list_index){
      // console.log(this.lists[id]);
      this.$children[1].list=this.temp[list_index];
      this.showActive='is-active';
    },
    close(){
      this.addActive='';
    },
    closeShow(){
      this.showActive='';
    },
    openUpdate(id){
      // console.log(this.lists);
      this.$children[2].list=this.temp[id];
      this.updateActive='is-active';
    },
    closeUpdate(){
      this.updateActive='';
    },
    openDel(id,index){
      // console.log(index,list_id_minus_one);
      if(confirm("Are you sure about this?")){
        this.loading=!this.loading;
        axios.delete('../phone/'+id).then((response)=>{this.loading=!this.loading;this.lists.splice(index,1)})
        .catch((error) => this.error_obj=error.response.data.errors);
      }
    },
  }

}
</script>
