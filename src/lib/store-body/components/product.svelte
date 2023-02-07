<script>
    export let price = 20;
    export let name = "product name"
</script>

<div class="h-48 w-40 border p-3 border-neutral-900 rounded-md">
    <div class="image h-3/4  flex justify-center items-center">
    <img src="/storeproducts/shirt.png" class=" w-1/2 " alt="product">
    </div>
    <div class="info h-1/4 p-1">
    <p>{name}</p>
    <p>$ {price}</p>
    </div>

</div>