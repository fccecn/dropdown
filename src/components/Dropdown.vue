<template>
<div class="dropdown" ref="dropdownRef">
    <input class="dropdown-btn" :value="title" type="button" @click="toggleOpen" />
    <ul class="list" v-if="isOpen">
        <slot></slot>
    </ul>
</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import useClickOutside from '../hooks/useClickOutside';

defineProps({
    title: {
        type: String,
        require: true
    }
})

/**
 * 是否打开下拉菜单
 */
const isOpen = ref(false)

/**
 * 点击按钮切换操作
 */ 
const toggleOpen = () => {
    isOpen.value = !isOpen.value;
}

/**
 * 点击空白区域事件处理
 */
const dropdownRef = ref<null | HTMLElement>(null)

const isClickOutside = useClickOutside(dropdownRef);

/**
 * 监听isClickOutside的变化
 */
watch(isClickOutside, () => {
    if (isOpen.value && isClickOutside.value) {
        isOpen.value = false;
    }
})
</script>

<style lang="scss">
.dropdown {
    .dropdown-btn {
        display: inline-block;
        margin-bottom: 10px;
        padding: 5px 10px;
        cursor: pointer;
    }
    .list {
        width: 100px;
        border: 1px solid #ccc;
        li {
            padding: 10px;
            border-bottom: 1px solid #ccc;
            &:last-child {
                border-bottom: none;
            }
        }
    }
}
</style>