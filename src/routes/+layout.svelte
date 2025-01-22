<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<nav>
	<a href="/">Home</a>
	<a href="/Person">Person List</a>
	<a href="/payments">Payment</a>
</nav>
{@render children()}
