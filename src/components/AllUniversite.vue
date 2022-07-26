<template>
<div>
<section> 
  <div class="bg-black text-secondary px-4 py-5 text-center">
        <div class="py-5">
            <h1 class="display-5 fw-bold text-white">Bienvenue sur Findscola</h1>
            <div class="col-lg-6 mx-auto">
                <p class="fs-5 mb-4">Recherchez des universités en toute quiétude pour vos enfants! Faites nous confiance!</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-info btn-lg px-4 me-sm-3 fw-bold">La liste des universités</button>
                </div>
            </div>
        </div>
        

        <form class="d-flex" role="search">
            <select id="universites" v-model="university" name="universites" style="width:30%;" >
                <option value="" disabled selected>Recherchez par catégorie d'université</option>
                <option value="Universités techniques">Universités techniques</option>
                <option value="Universités informatiques">Universités informatiques</option>
                <option value="Universités de marketing">Universités de marketing</option>
            </select>
            
          
          <select id="universites" v-model="university" name="universites" style="width:30%;" >
                <option value="" disabled selected>Recherchez par quartier</option>
                <option value="Agoè Cacavéli">Agoè Cacavéli</option>
                <option value="Totsi">Totsi</option>
                <option value="Djidjolé"> Djidjolé</option>
            </select>

            <select id="universites" v-model="university" name="universites" style="width:30%;" >
                <option value="" disabled selected>Recherchez par excéllence</option>
                <option value="Les top 5">Les top 5</option>
                <option value="Les plus anciennes">Les plus anciennes</option>
                <option value="Les plus côtées"> Les plus côtées</option>
            </select>
          <button class="btn btn-info btn-lg px-4 me-sm-3 fw-bold" type="submit">Rechercher</button>
        </form>
    </div>

</section>
</div>

<!-- Liste des universités -->
<div>
<section >
    <div class="container py-5">
        <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">La liste de nos Universités </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
        </div>
        <div class="row">
            <div v-for="univ in current_list" :key="univ.id" class="col-12 col-md-4 mb-4" >
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/esgis.jpg" class="card-img-top" alt="..." style="width:354px; height:236px;">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark"> {{ univ.nom }} </a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <router-link to="/univdetails" class="btn btn-info btn-lg">Lire Plus</router-link>
                        <router-view />
                    </div>
                </div>
            </div>

            <div v-for="univ in current_list" :key="univ.id" class="col-12 col-md-4 mb-4" >
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ecolecadre.jpg" class="card-img-top" alt="..." style="width:354px; height:236px;">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark"> {{ univ.nom }} </a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <router-link to="/univdetails" class="btn btn-info btn-lg">Lire Plus</router-link>
                        <router-view />
                    </div>
                </div>
            </div>

            <div v-for="univ in current_list" :key="univ.id" class="col-12 col-md-4 mb-4" >
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ul.jpg" class="card-img-top" alt="..." style="width:354px; height:236px;">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark"> {{ univ.nom }} </a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <router-link to="/univdetails" class="btn btn-info btn-lg">Lire Plus</router-link>
                        <router-view />
                    </div>
                </div>
            </div>

        </div>
    </div>
  </section>
  </div>
  <!-- Fin de la liste des universités -->

</template>

<script>
  export default {
  name: "AllUniversite",

  components: {
   
  },
  data: () => ({
   university:null,
   current_list: [],
   university_list: [ 
    {
    id:1,    
    nom:"Esgis Togo",
    quartier:"Agoè Cacavéli",
    rang:1,
    categorie:"Universités techniques",
    } ,
    {
    id:2,    
    nom:"Ecole des cadres",
    quartier:"Totsi",
    rang:8,
    categorie:"Universités informatiques",
    },
    {
    id:3,    
    nom:"Esa",
    quartier:"Djidjolé",
    rang:10,
    categorie:"Universités de marketing",
    }

]

  }),

  created(){
    this.current_list=this.university_list
  },
  watch: {
    university(newValue) {
    console.log(newValue)

    //Filtre par catégorie d'université
    if(newValue=="Universités techniques"){
         let result = this.university_list.filter(function (element) {
            return (
              element.categorie == "Universités techniques"
          
            );
          });
          console.log(result)
          this.current_list = result
    }
    if(newValue=="Universités informatiques"){
         let result = this.university_list.filter(function (element) {
            return (
              element.categorie == "Universités informatiques"
          
            );
          });
          console.log(result)
          this.current_list = result
    }
    if(newValue=="Universités de marketing"){
         let result = this.university_list.filter(function (element) {
            return (
              element.categorie == "Universités de marketing"
          
            );
          });
          console.log(result)
          this.current_list = result
    }

    //Filtre par quartier
     if(newValue=="Agoè Cacavéli"){
         let result = this.university_list.filter(function (element) {
            return (
              element.quartier == "Agoè Cacavéli"
          
            );
          });
          console.log(result)
          this.current_list = result
    }
    if(newValue=="Totsi"){
         let result = this.university_list.filter(function (element) {
            return (
              element.quartier == "Totsi"
          
            );
          });
          console.log(result)
          this.current_list = result
    }
    if(newValue=="Djidjolé"){
         let result = this.university_list.filter(function (element) {
            return (
              element.quartier == "Djidjolé"
          
            );
          });
          console.log(result)
          this.current_list = result
    }
    
    //Filtre par excellence
    if(newValue=="Les top 5"){
         let result = this.university_list.filter(function (element) {
            return (
              element.rang <= 5
          
            );
          });
          console.log(result)
          this.current_list = result
    }
   

    },
    
  },
  
};


</script>

<style>

</style>