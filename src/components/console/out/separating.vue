<!-- ID控制台 -->
<template>
    <div class="console-item-wrapper console-putitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div></div>
        </fieldset>
    </div>
</template>
<script>

export default {
    components: {
    },
    vuex: {
        getters: {
            title:({outSeparatingConsole})=>outSeparatingConsole.title,
        }
    }
}
</script>
