<script>
	import Prism from './Prism.svelte';
	/**
	 *  @type {{value:{language:string,code:string}}})}>
	 */
	export let portableText;
</script>

<div class="my-6">
	<Prism language={portableText.value.language} code={portableText.value.code} />
</div>
