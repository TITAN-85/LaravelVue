

<script>

import Header from '../Header.vue';

</script>
<!-- <template>
    
    <Header></Header>

</template> -->

<template>
    <!-- <Header></Header> -->

    <main class="container-signup">

        <div class="header-form">
            <h3>Welcome</h3>
        </div>

        <div class="container-form">

            <form action="" method="post">
                @csrf
                <p class="text-form">Log in to your account</p>

                <input type="email" placeholder="email" class="email" name="email" value="">

                @if($errors->has('email'))
                <div class="text-form">
                    <!-- {{ $errors -> first('email') }} -->
                </div>
                @endif

                <input type="password" placeholder="password" class="password" name="password">

                @if($errors->has('password'))
                <div class="text-form">
                    <!-- {{ $errors -> first('password') }} -->
                </div>
                @endif

                <input type="submit" value="submit" class="submit">
            </form>
        </div>
    </main>
</template>


<script>
export default {

    name: "Welcome"
}
</script>

<style scoped></style>