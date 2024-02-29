<template>
    <div class="container-outer">
        <div class="container-loading">
            <div class="img-container">
                <img src="../assets/images/loader-maskot.gif" id="img-loader" alt="" srcset="">
            </div>
            <div class="text-container">
                <h1>Loading...</h1>
                <p>Sedang mengarahkan ke halaman login</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    inject: ['container', 'alert', 'unsavedChanges'],
    async mounted() {
        try {
            const session = this.container.requestData.session;
            const token = await session.token;
            // Menunda eksekusi permintaan selama 5 detik
            session.request({
                method: 'DELETE',
                url: '/v1/sessions/' + token,
            })
                .then(() => {
                    window.location.replace('/');
                })
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } catch (error) {
            console.error('Error while fetching token:', error);
        }
    },
};
</script>


<style scoped>
.container-outer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    border-radius: .7rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}

.container {
    text-align: center;
    margin-top: 50px;
}

.loading-indicator {
    margin-top: 20px;
}

.box {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

#img-loader {
    height: 30rem;
}

.text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.header {}

.logo-pkl {
    width: 5rem;
}
</style>