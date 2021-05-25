const dataPath = "data/";

$(async () => {
    const EarwaxAudio = await $.getJSON(dataPath.concat("EarwaxAudio.jet"));
    console.log(EarwaxAudio);
    const EarwaxPrompts = await $.getJSON(dataPath.concat("EarwaxPrompts.jet"));
    console.log(EarwaxPrompts);
});