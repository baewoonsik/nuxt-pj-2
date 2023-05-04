<script setup lang="ts">

const notices = [
    {
        id: 1,
        title: "공지사항1",
        content: "공지사항1 내용입니다."
    },
    {
        id: 2,
        title: "공지사항2",
        content: "공지사항2 내용입니다."
    },
    {
        id: 3,
        title: "공지사항3",
        content: "공지사항3 내용입니다."
    }
]
</script>

<template>
    <div>
        <NuxtLayout name="inner-nav">
            <div class="container">
                <h2 class="mt-4 mb-4">공지사항</h2>
                <ul class="list-group">
                    <li class="list-group-item" v-for="notice in notices" :key="notice.id">
                        <h3>{{ notice.title }}</h3>
                        <p>{{ notice.content }}</p>
                    </li>
                </ul>
            </div>
        </NuxtLayout>
    </div>
</template>

<style></style>