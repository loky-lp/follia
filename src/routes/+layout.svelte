<script lang="ts">
	import { ModeWatcher } from 'mode-watcher'

	import './layout.css'
	import '@fontsource-variable/quicksand'

	let { children } = $props()
</script>

<ModeWatcher />
{@render children()}
