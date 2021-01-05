


// document.querySelectorAll('iframe').forEach( item =>
//     console.log(item.contentWindow.document.body.querySelectorAll('.content'))
// )

document.querySelector("iframe").addEventListener( "load", function(e) {

    // this.style.backgroundColor = "red";
    console.log(e.target.contentWindow);
} );
