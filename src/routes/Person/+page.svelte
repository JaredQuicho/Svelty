<script lang="ts">


    let {data} = $props()
    console.log(data);
</script>

<div>
    {#if data.datas.length > 0}
        {#each data.datas as person (person.id)} 
            <div>
                <h1>{person.name}</h1>
                <p>Language: {person.language}</p>
                <p>ID: {person.id}</p>
                <p>Bio: {person.bio}</p>
                <p>Version: {person.version}</p>
            </div>
        {/each}
    {:else}
        <p>No data available</p>
    {/if}
</div>
