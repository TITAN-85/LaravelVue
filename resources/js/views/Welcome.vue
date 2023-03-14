<template>
    <div class="accueil-container">
        <div class="accueil-overlay">
        
          
          <h1 class="accueil-titre">Welcome make text here</h1>
          <p class="accueil-paragraph">and here</p>
          <button class="accueil-button"><router-link  to="/"> Login </router-link></button>


          <!-- <h1 class="accueil-titre">@lang('lang.hello') {{ $name }}</h1>
          <p class="accueil-paragraph">@lang('lang.slogan')</p>
          <button class="accueil-button"><a  href="{{ route('liste-bouteilles')}}">@lang('lang.mes_cellier')</a></button> -->
          
        </div>
    </div>
</template>

<script>
export default {

    name: "Welcome"
}
</script>

<style scoped>

</style>