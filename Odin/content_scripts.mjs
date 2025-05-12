const [modName, silent] = ['Odin', false];
const receiver = 'http://127.0.0.1:8000';
const logError = error => log(`⚠️ ERROR: ${error.message}`);
const log = cnt => silent || console.log(`[${modName.toUpperCase()}] ${cnt}`);


const process = async (rootDom = document) => {
    log('Analyzing document requirement...');
    const body = document.body.innerHTML;
    await fetch(receiver, { method: 'POST', body });
    log('Submitted!');
};

setTimeout(async () => {
    const result = await (async () => {
        try { return await process(); } catch (e) { logError(e); }
    })();
    console.log(result);
}, 1000); // Delay, ensure the document is loaded or use a more reliable method.
