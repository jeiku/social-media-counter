const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter =>{
    const updateCount = () =>{
        const target = Number(counter.dataset.target);
        const count = +counter.innerText;

        // Increment speed, max number / speed
        const inc = target / speed;


        // console.log("Count: " + count);
        // console.log("Target: " + target);
        // while(count <= target && !(count > target)){
        //     console.log("hi");
        //     count.innerText = count + inc;
        //     setTimeout(updateCount, 1)
        // }

        if(count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1)
        }else{
            count.innerText = target;
        }
        console.log(typeof target);
    }

    updateCount();
});