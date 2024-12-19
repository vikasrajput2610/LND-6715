const getData=async()=>{
    const data=await fetch('https://fakestoreapi.com/products');
    return data.json();
}

document.addEventListener('DOMContentLoaded', async function () {
    const result=await getData();
    const renderData=async(data)=>{
        const productContainer = document.getElementById('productContainer');
        productContainer.innerHTML = '';
        data.forEach((item)=>{
          const div=document.createElement('div')
          div.innerHTML=` <div class="hover:shadow-md m-4 border black  flex flex-col justify-center items-center  h-96 w-96">
                <img class="h-3/5"
                    src="${item.image}" alt="">
                <h2 class="m-5 text-center"><strong>${item.title}</strong></h2>
                <div class="mt-2 flex justify-around  w-full font-bold">
                    <div>${item.rating.rate} &#11088;</div>
                    <div>${item.price}$</div>
                </div>
            </div>`
        productContainer.appendChild(div);
        })
    }
    renderData(result);
    const input=document.querySelector('input')
    input.addEventListener('input',async(event)=>{
        const searchedValue=event.target.value.toLowerCase();
        const filterData=result.filter((item)=>`${item.title} ${item.category}`.toLowerCase().includes(searchedValue));
        renderData(filterData)
    })
});
