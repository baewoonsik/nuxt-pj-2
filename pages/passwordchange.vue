<script setup lang="ts">
import { useUserStore } from '~/store/userStore';
import { useRouter } from 'nuxt/app';
import { ref, computed } from 'vue';

const userStore = useUserStore();
const router = useRouter();

const confirmUsername = ref('');
const oldPassword = ref('');
const newPassword = ref('');
const newConfirmPassword = ref('');

const passwordsMismatch = computed(() => newPassword.value !== newConfirmPassword.value);

const changePassword = () => {
    if (passwordsMismatch.value) {
        alert('비밀번호가 일치하지 않습니다.');
    } else {
        const username = confirmUsername.value;
        userStore.changePassword(username, newPassword.value);
        router.push('/');
    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-6">
                <form @submit.prevent="changePassword">
                    <h2 class="text-center mb-4">비밀번호 변경</h2>
                    <div class="form-group">
                        <label for="username">아이디</label>
                        <input v-model="confirmUsername" type="text" class="form-control" id="confirmUsername"
                            placeholder="아이디">
                    </div>
                    <div class="form-group">
                        <label for="oldPassword">현재 비밀번호</label>
                        <input v-model="oldPassword" type="password" class="form-control" id="oldPassword"
                            placeholder="현재 비밀번호">
                    </div>
                    <div class="form-group">
                        <label for="newPassword">새로운 비밀번호</label>
                        <input v-model="newPassword" type="password" class="form-control" id="newPassword"
                            placeholder="새로운 비밀번호">
                    </div>
                    <div class="form-group">
                        <label for="newPasswordConfirm">새로운 비밀번호 확인</label>
                        <input v-model="newConfirmPassword" type="password" class="form-control" id="newPasswordConfirm"
                            placeholder="새로운 비밀번호 확인">
                        <small v-if="passwordsMismatch" class="text-danger">비밀번호가 일치하지 않습니다.</small>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mt-4">비밀번호 변경</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
@media (max-width: 767px) {
    .form-group {
        margin-bottom: 1rem;
    }
}
</style>