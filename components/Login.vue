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
        // 로그인 성공
        alert("로그인 성공.");
        // localStorage.setItem("user", JSON.stringify(user));
        router.push("/dashboard");
    } else {
        // 로그인 실패
        alert("아이디와 비밀번호를 확인해주세요.");
    }
}

onMounted(() => {
    // 로그인 상태 확인
    // if (userStore.isLogin) {
    //     alert("이미 로그인 되어있습니다.");
    //     router.push("/dashboard");
    // }
    console.log(userStore.user)
});

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="img-container col-md-6 p-0" style="height: 100vh; overflow: hidden;">
                <img src="https://img.freepik.com/free-photo/contemporary-architecture-office-building-cityscape-personal-perspective-concept_53876-42940.jpg?w=2000"
                    alt="이미지 설명" style="height: 100%; width: auto;">
            </div>
            <div class="col-md-6 p-0">
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

<style>
.img-container {
    position: relative;
}

.img-container img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>
