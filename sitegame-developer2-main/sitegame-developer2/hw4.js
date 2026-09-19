//1
for (i = 0; i < 2; i++) {
    console.log('Привет')
} 

//2
for (i=1; i < 6; i++) {
    console.log(i)
}

//3 
for (i=7; i < 23; i++) {
    console.log(i)
}

//4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(key + " — зарплата " + obj[key] + " долларов");
}

//5
for (let i = 1000; i > 50; i = i / 2) {
    if (i < 50) {
        console.log(i)
    }
}

//6
for (Friday=5; Friday < 31; Friday += 7) {
    console.log(Friday)
}
