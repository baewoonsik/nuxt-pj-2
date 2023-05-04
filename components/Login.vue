<script setup lang="ts">
import { useUserStore } from "@/store/userStore";
import { ref } from "vue";
import { useRouter } from "nuxt/app";

const userStore = useUserStore();
const router = useRouter();

const username = ref("");
const password = ref("");

function handleSubmit(event: Event) {
    event.preventDefault();
    const user = userStore.user.find(
        (u) => u.username === username.value && u.password === password.value
    );
    if (user) {
        alert("로그인 성공.");
        userStore.getUserInfo(username.value);
        router.replace("/dashboard");
        console.log(userStore.userInfo)
    } else {
        alert("아이디와 비밀번호를 확인해주세요.");
    }
}

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-9 p-0" style="height: 100vh; overflow: hidden;">
                <img src="https://www.10wallpaper.com/wallpaper/1366x768/1107/The_Best_of_Nature-The_most_Beautiful_Landscape_01_1366x768.jpg"
                    alt="image" style="height: 100%; width: auto;">
            </div>
            <div class="col-md-3 p-0">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <form @submit="handleSubmit">
                        <div class="form-group">
                            <label for="username">아이디</label>
                            <input v-model="username" type="text" class="form-control" id="username"
                                placeholder="아이디를 입력하세요">
                        </div>
                        <div class="form-group mt-2">
                            <label for="password">비밀번호</label>
                            <input v-model="password" type="password" class="form-control" id="password"
                                placeholder="비밀번호를 입력하세요">
                        </div>
                        <button type="submit" class="btn btn-primary mt-2">로그인</button>
                        <div style="text-align: center; margin-top: 0.5rem;">
                            <NuxtLink to="/signup">
                                <span style="margin-right: 0.5rem;">회원가입</span>
                            </NuxtLink>
                            <NuxtLink to="/passwordchange">비밀번호 변경</NuxtLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
