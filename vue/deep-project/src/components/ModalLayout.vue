<template>
    <div class="modal-container">
        <!--모달쓰기위해 필요한 조건 header, main, footer-->
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>