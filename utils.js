const c = (el)=> document.createElement(el);

const q = (el)=> document.querySelector(el);
const GET =async(BaseUrl)=>{
    const res = await fetch(BaseUrl);
    return await res.json();
}


export { c, q, GET}