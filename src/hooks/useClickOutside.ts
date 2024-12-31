import { ref, onMounted, onUnmounted, Ref } from 'vue';

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    // 是否点击外面
    const isClickOutside = ref(false)
    const handler = (e: MouseEvent) => {
        // 判断elementRef这个元素是否存在
        if (elementRef.value) {
            // 判断elementRef是否包含在这document中
            if (elementRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value = false;
            } else {
                isClickOutside.value = true;
            }
        }
    }

    onMounted(() => {
        // 添加handler事件
        document.addEventListener('click', handler);
    })
    
    onUnmounted(() => {
        // 移除handler事件
        document.removeEventListener('click', handler);
    })

    return isClickOutside;
}

export default useClickOutside