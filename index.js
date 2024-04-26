const wrapperEle = document.getElementById("wrapper");
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" }
];

const titleEle = document.createElement("h1");
titleEle.innerHTML = "Freelancer forum";
wrapperEle.appendChild(titleEle);

function avgPrices(fl) {
    const averagePriceEle = document.createElement("p");
    const average = fl.reduce((acc, cv) => acc + cv.price, 0) / fl.length;
    averagePriceEle.innerHTML = `The average starting price is $${average}`;
    wrapperEle.appendChild(averagePriceEle);
}

function availableFreeLancers(fl) {
    const freelancersWrapperEle = document.createElement("div");
    const freelancersTitleEle = document.createElement("h1");
    freelancersTitleEle.innerHTML = "Available Freelancers";

    const freelancersTable = document.createElement("div");
    const titlesEle = document.createElement("div");
    titlesEle.style.display = "flex";
    titlesEle.style.justifyContent = "space-around";
    let titles = "";

    for (let prop in fl[0]) {
        titles = titles + `<h1>${prop}</h1>`;
    }

    titlesEle.innerHTML = titles;
    freelancersTable.appendChild(titlesEle);

    fl.forEach((i) => {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "space-around";
        let info = "";
        for (let p in i) {
            info = info + `<h1>${i[p]}</h1>`;
        }
        row.innerHTML = info;
        freelancersTable.appendChild(row);
    });

    freelancersWrapperEle.appendChild(freelancersTitleEle);
    freelancersWrapperEle.appendChild(freelancersTable);

    wrapperEle.appendChild(freelancersWrapperEle);
}

availableFreeLancers(freelancers);

// Function to generate more freelancers every 10 seconds
function generateMoreFreelancers() {
    setInterval(() => {
        const newFreelancer = {
            name: "New Freelancer",
            price: Math.floor(Math.random() * 100) + 1,
            occupation: "random occupation"
        };
        freelancers.push(newFreelancer);
        wrapperEle.innerHTML = ""; // Clear existing content
        avgPrices(freelancers); // Recalculate average prices
        availableFreeLancers(freelancers); // Display updated list of freelancers
    }, 10000); // 10 seconds
}

generateMoreFreelancers();
