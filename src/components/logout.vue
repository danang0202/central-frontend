<template>

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
            }, 1000);
        } catch (error) {
            console.error('Error while fetching token:', error);
        }
    },
};
</script>