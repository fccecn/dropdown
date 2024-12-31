<template>
    <li 
        class="dropdown-option"
        :class="{'is-disabled': disabled}"
    >
        <slot></slot>
    </li>
</template>

<script lang="ts" setup>
defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss">
.dropdown-option.is-disabled * {
    pointer-events: none;
    background-color: transparent;
    color: #6c757d;
}
</style>