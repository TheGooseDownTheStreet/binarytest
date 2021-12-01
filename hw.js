// javascript sandbox

function imageClick (parm) {
    let img = document.getElementById(parm);
    console.log(`id: ${parm}`);
    if (parm == `hand-3`){
        console.log(`Match`);
        let div = document.getElementById(`div1`);
        div.innerHTML = ``;
        image1.style.display = "none";
        image2.style.display = "block";
        image3.style.display = "none";
        let div2 = document.getElementById(`div2`);
        div2.innerHTML += `Down low`;
    } else if (parm == `cat-1`){
        console.log(`Match`);
        let div = document.getElementById(`div2`);
        div.innerHTML = ``;
        image1.style.display = "none";
        image2.style.display = "none";
        image3.style.display = "none";
        let div2 = document.getElementById(`div3`);
        div2.innerHTML = `Too slow`;
    }else if (parm == `hand-1`){
        console.log(`Match`);
        let div = document.getElementById(`div3`);
        image1.style.display = "none";
        image2.style.display = "none";
        image3.style.display = "none";
    }

        
}
let dt = new Date;
let pretty_time = dt.toTimeString();
pretty_time = pretty_time.match(/(.*)GMT/)[1];
let pretty_text = `hello world at ${pretty_time}`;
pretty_text = pretty_text.toUpperCase();

if(pretty_text.includes(`at`.toUpperCase())) {
    console.log(`match`);
    pretty_text = pretty_text.replace(`AT`, 
    `<span style="color:blue;font-family:monospace">AT</span>`);
} else {
    console.log(`No match :)`);
}
let image1 = document.createElement("img");
image1.setAttribute("src", "img/hand-3.jfif");
image1.setAttribute("onclick", "imageClick(this.id)");
image1.setAttribute("id", "hand-3");

let image2 = document.createElement("img");
image2.setAttribute("src", "img/hand-3.jfif");
image2.setAttribute("onclick", "imageClick(this.id)");
image2.setAttribute("id", "cat-1");

let image3 = document.createElement("img");
image3.setAttribute("src", "img/hand-3.jfif");
image3.setAttribute("onclick", "imageClick(this.id)");
image3.setAttribute("id", "hand-1");

image1.style.display = "block";
image2.style.display = "none";
image3.style.display = "none";

let page_div1 = document.createElement(`div`);
page_div1.setAttribute(`class`, `page_div1`);
page_div1.setAttribute(`id`, `div1`);
page_div1.appendChild(image1);
page_div1.innerHTML += `Up high`;

let page_div2 = document.createElement(`div`);
page_div2.setAttribute(`class`, `page_div2`);
page_div2.setAttribute(`id`, `div2`);
page_div2.appendChild(image2);

let page_div3 = document.createElement(`div`);
page_div3.setAttribute(`class`, `page_div3`);
page_div3.setAttribute(`id`, `div3`);
page_div3.appendChild(image3);
//document.body.innerHTML = `<h1>` + pretty_text + `</h1>`;
document.body.appendChild(page_div1);
document.body.appendChild(page_div2);
document.body.appendChild(page_div3);

//document.body.setAttribute("bgcolor", "blue");

//document.body.setAttribute("style", "color:red;font-size:50px;font-family:monospace");

//document.body.setAttribute("style", "font-size:50px");


//image.setAttribute("src", "img/jeff.gif");
//document.body.appendChild(image);

//let div1 = document.createElement('div');
//div1.appendChild(`at ${dt.timeDateStr}`);
//document.body.appendChild(div1);
//console.log("Hello world");

// * as http from "http";

//let fs = require ('fs'); 

//console.log(fs.existsSync("jeff.gif"));

//document.body.innerHTML = "hello world";

