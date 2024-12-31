<template>
    <div class="page">
        <dropdown :title="`你好 ${user.name}`">
            <dropdown-item><a href="#">新建文章</a></dropdown-item>
            <dropdown-item disabled><a href="#">编辑资料</a></dropdown-item>
            <dropdown-item><a href="#">退出登录</a></dropdown-item>
        </dropdown>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Dropdown from '../components/Dropdown.vue'
import DropdownItem from '../components/DropdownItem.vue'

const user = reactive({
    name: '张三'
})
</script>

<style lang="scss">
.page {
    padding: 300px 600px;
}
</style>