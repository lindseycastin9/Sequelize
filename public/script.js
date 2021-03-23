async function windowActions() {
    console.log('window loaded');
    const request = await fetch('/api');
    const data = await request.json()
