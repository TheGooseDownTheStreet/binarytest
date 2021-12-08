// javascript sandbox

function imageClick (parm) {
    let img = document.getElementById(parm);
    console.log(`id: ${parm}`);
    if (parm == `honker`) {
        page_div3.style.zIndex = 1;
        page_div4.style.zIndex = 2;
        text1.innerText = `\nhonk`;
    } else if (parm == `honker2`) {
        page_div3.style.zIndex = 2;
        page_div4.style.zIndex = 1;
        text1.innerText = ``;
    }
}
let image1 = document.createElement("img");
image1.setAttribute("src", "img/honker.png");
image1.setAttribute("onclick", "imageClick(this.id)");
image1.setAttribute("id", "honker");

let image2 = document.createElement("img");
image2.setAttribute("src", "img/honker2.png");
image2.setAttribute("onclick", "imageClick(this.id)");
image2.setAttribute("id", "honker2");

let text1 = document.createElement(`text`);
text1.setAttribute("id", "text1");
text1.setAttribute("class", "honk_text");


let page_div1 = document.createElement(`div`);
page_div1.setAttribute(`class`, `page_container`);
page_div1.setAttribute(`id`, `div1`);
//page_div1.appendChild(image1);
//page_div1.innerHTML += `Up high`;
//document.body.innerHTML = `<h1>` + pretty_text + `</h1>`;

let page_div2 = document.createElement(`div`);
page_div2.setAttribute(`class`, `page_text`);
page_div2.setAttribute(`id`, `div2`);

let page_div3 = document.createElement(`div`);
page_div3.setAttribute(`class`, `page_honk1`);
page_div3.setAttribute(`id`, `div3`);
page_div3.appendChild(image1);

let page_div4 = document.createElement(`div`);
page_div4.setAttribute(`class`, `page_honk2`);
page_div4.setAttribute(`id`, `div4`);
page_div4.appendChild(image2);

page_div2.appendChild (text1);
page_div1.appendChild (page_div2);
page_div1.appendChild (page_div4);
page_div1.appendChild (page_div3);

document.body.appendChild(page_div1);

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

