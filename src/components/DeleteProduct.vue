<template>
    <div class="modal fade" style="color:black !important" :id="`deleteProduct`+product.product_id" tabindex="-1" :aria-labelledby="product.product_id+`DeleteLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`deleteProductLabel`+product.product_id">Delete Product</h5>
                    <button type="button" :id="`deleteProductClose`+product.product_id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Are you sure you want to delete this</h3>
                    <button data-bs-dismiss="modal" class="btn btn-primary">CANCEL</button>
                    <button class="btn btn-danger" @click="deleteProduct">DELETE</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['product'],
    methods:{
        deleteProduct(){
            this.$store.dispatch('deleteProduct',this.product.product_id);
            document.getElementById(`deleteProductClose`+this.product.product_id).click();
        }
    }
}
</script>
<style scoped>
</style>