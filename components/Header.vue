<!-- <template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NuxtLink to="/" class="navbar-brand">HOME</NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NuxtLink to="/regionChart" class="nav-link">Region Chart</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/comparisonChart" class="nav-link">Comparison Chart</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/notice" class="nav-link">Notice</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>   -->

<!-- <template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">
                    <img alt="Vue logo" src="../assets/logo.png" style="height:25px;" />
                    <p></p>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <NuxtLink to="/regionChart" class="nav-link">Region Chart</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/comparisonChart" class="nav-link">Comparison Chart</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/notice" class="nav-link">Notice</NuxtLink>
                        </li>
                    </ul>
                    <div class="navbar-info">
                        <div v-if="isLogin">
                            {{ this.$store.state.loginStore.memberId }}님, 안녕하세요.
                            <span @click="Logout()">로그아웃</span>
                        </div>
                        <div v-else>
                            <router-link :to="{ name: 'Login', query: { returnUrl: '/' } }"
                                v-show="isLogin == false">로그인</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.header { position:relative; }
.header .topline { position:relative; height:30px; margin:0 10px; }
.navbar-info a { font-weight:bold; color:#2c3e50 !important; text-decoration:none; }
.navbar-info span { font-weight:bold; color:#2c3e50; cursor:pointer; }
</style> -->

<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">
                    <img alt="Vue logo" src="../assets/logo.png" style="height:25px;" />
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <NuxtLink to="/regionChart" class="nav-link">Region Chart</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/comparisonChart" class="nav-link">Comparison Chart</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/notice" class="nav-link">Notice</NuxtLink>
                        </li>
                    </ul>
                    <!-- <div class="navbar-info">
					<div v-if="isLogin">
						{{this.$store.state.loginStore.memberId}}님, 안녕하세요.
						<span @click="Logout()">로그아웃</span>
					</div>
					<div v-else>
						<router-link :to="{ name: 'Login', query: { returnUrl: '/' }}" v-show="isLogin == false">로그인</router-link>
					</div>
				</div> -->
                </div>
            </div>
        </nav>
    </header>
</template>

<!-- <script>
export default {
	name : 'App',
	methods : {
		Logout() {
			this.$store.dispatch("loginStore/doLogout");
			this.$router.push('/');
		}
	},
	computed : {
		isLogin() {
			return this.$store.getters['loginStore/isLogin'];
		}
	}
};
</script> -->

<style scoped>
header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav.navbar-transparent {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
}

nav .navbar-nav a.nav-link {
    font-weight: bold;
    color: #2c3e50 !important;
    text-align: initial;
}

nav .navbar-nav a.router-link-exact-active {
    color: #42b983 !important;
}

.header {
    position: relative;
}

.header .topline {
    position: relative;
    height: 30px;
    margin: 0 10px;
}

.navbar-info a {
    font-weight: bold;
    color: #2c3e50 !important;
    text-decoration: none;
}

.navbar-info span {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
}
</style>