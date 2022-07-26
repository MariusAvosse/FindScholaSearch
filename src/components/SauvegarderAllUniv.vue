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
                <option value="Universités techniques">Esgis Togo</option>
                <option value="Universités informatiques">Universités informatiques</option>
                <option value="Universités de droit">Universités de droits</option>
                <option value="Universités de marketing">Universités de marketing</option>
            </select>
            
          
          <select id="universites" name="universites" style="width:30%;" >
                <option value="" disabled selected>Recherchez par quartier</option>
                <option value="Agoè Cacavéli">Agoè Cacavéli</option>
                <option value="Totsi">Totsi</option>
                <option value="Djidjolé"> Djidjolé</option>
                <option value="Kodjoviakopé">Kodjoviakopé</option>
            </select>

            <select id="universites" name="universites" style="width:30%;" >
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
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/esgis.jpg" class="card-img-top" alt="..." style="width:354px; height:236px;">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark">Esgis Togo </a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <router-link to="/univdetails" class="btn btn-info btn-lg">Lire Plus</router-link>
                        <router-view />
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ecolecadre.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark">Ecole des cadres</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <a href="#" class="btn btn-info btn-lg">Lire Plus</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ul.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark"> Université de Lomé</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <a href="#" class="btn btn-info btn-lg">Lire Plus</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ul.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark"> Université de Lomé</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <a href="#" class="btn btn-info btn-lg">Lire Plus</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ul.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark"> Université de Lomé</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <a href="#" class="btn btn-info btn-lg">Lire Plus</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ul.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark"> Université de Lomé</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <a href="#" class="btn btn-info btn-lg">Lire Plus</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ul.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark"> Université de Lomé</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <a href="#" class="btn btn-info btn-lg">Lire Plus</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ul.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark">Ecole des cadres</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <a href="#" class="btn btn-info btn-lg">Lire Plus</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/ul.jpg" class="card-img-top" alt="">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark">Université de Lomé</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                         <a href="#" class="btn btn-info btn-lg">Lire Plus</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  </div>
   <ul>
  <div v-for="univ in university_list" :key="univ.id">
    <li>{{ univ.nom }}</li>
  </div>
</ul>
  <!-- Fin de la liste des universités -->

</template>

<script>
  export default {
  name: "AllUniversite",

  components: {
   
  },
  data: () => ({
   university:null,
   university_list: [ 
    {
    id:1,    
    nom:"Esgis Togo",
    quartier:"Agoè Cacavéli",
    rang:"3è",
    categorie:"université technique",
    } ,
    {
    id:2,
    nom:"Université de Lomé",
    quartier:"Adéwui",
    rang:"4è",
    categorie:"université technique",
    } ,
    {
    id:3,    
    nom:"Ecole des cadres",
    quartier:"Agoè Cacavéli",
    rang:"5è",
    categorie:"université informatique",
    } 
]

  }),
  watch: {
    university(newValue, oldValue) {
    console.log(newValue)
    
    console.log(oldValue)
    },
  },
  
};

</script>

<style>

</style>