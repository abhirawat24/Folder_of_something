console.log("at the top 1")

function promisifiedSetTimeout() {
    console.log("function called 3")

    const p = new Promise(function(resolve){
        console.log("inside promise callback 4");

        setTimeout(function () {
            console.log("setTimeout called 5");
            resolve("done baby i am burnt out");
        }, 5000);
        });

        return p;

    }

    console.log("in the middle 2");
    promisifiedSetTimeout().then(function (value) {
        console.log("promisified then 6");
        console.log(value);
    })
