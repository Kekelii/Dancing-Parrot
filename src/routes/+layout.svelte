<script>
    import Footer from "$lib/home-body/components/footer.svelte";
import "../app.css";
  </script>

<div class="  h-screen overflow-y-auto layout  m-0 ">
<slot></slot>
</div>
<style>
    .layout{
        /* background: linear-gradient(180deg, #FFFFFF 0%, #FFFACB 100%); */
        background-color: black;
    }
</style>