<template>
	<div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
		}
	},
	mounted() {
		//this.FetchLoading(true);
	},
//	methods:{
//		//...mapGetters(['fetchLoading']),
//		...mapActions(['FetchLoading'])
//	},
	updated() {

	},
	beforeRouteEnter(to, from, next) {
		next(vm => {

		});
	},
	beforeRouteUpdate(to, from, next) {
		next(vm => {

		});
	},
	afterRouteEnter(to, from, next) {
		next();
	}
}
</script>

<style scoped>

</style>
