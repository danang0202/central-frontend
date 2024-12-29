<template>
    <div>
        <!-- If the user's session is restored during the initial navigation, that
      will affect how the navbar is rendered. -->
        <!-- <navbar v-show="routerReady"/> -->
        <alert id="app-alert" />
        <!-- Specifying .capture so that an alert is not hidden immediately if it
      was shown after the click. -->
        <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
        <div class="container-fluid">
            <router-view />
        </div>
        <div id="tooltips"></div>
    </div>
</template>

<script>
export default {
    name: 'PmlLayout'
}
</script>