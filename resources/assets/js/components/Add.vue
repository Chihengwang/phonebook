<template>
  <div class="modal" :class="openmodal" >
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click="close" ></button>
    </header>
    <section class="modal-card-body">

      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <!-- 要是error_obj.name有數值的話 觸發 is-danger -->
          <input class="input" :class="{'is-danger':error_obj.name}" type="text" placeholder="Name" v-model="list.name">
        </div>
        <small v-if="error_obj.name" class='has-text-danger'>{{error_obj.name[0]}}</small>
      </div>

      <div class="field">
        <label class="label">Phone number</label>
        <div class="control">
          <input class="input" type="text" :class="{'is-danger':error_obj.phone}" placeholder="Phone" v-model="list.phone">
        <small v-if="error_obj.phone" class='has-text-danger'>{{error_obj.phone[0]}}</small>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" :class="{'is-danger':error_obj.email}" placeholder="Email" v-model="list.email">
        </div>
        <small v-if="error_obj.email" class='has-text-danger'>{{error_obj.email[0]}}</small>
      </div>

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click='save' >Submit</button>
      <button class="button" @click="close">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
export default {
    mounted(){
      console.log(this);
    },
    props:['openmodal',],
    data(){
      return{
        list:{
          name: '',
          phone:'',
          email:'',
        },
        error_obj:{}
      }
    },
    methods:{
      close(){
        this.$emit('closeRequest')
      },
      save(){
        axios.post('../phone',this.$data.list).then((response)=>{
          this.close();
          // console.log(response);
          this.$parent.lists.push(response.data);
          this.$parent.lists.sort(function(a,b){
            if(a.name>b.name){
              return 1;
            }else{
              return -1;
            }
          });
          this.list='';
          error_obj={};
          ;})
        .catch((error) => this.error_obj=error.response.data.errors);
      }
    }
}
</script>
