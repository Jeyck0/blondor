
const getWidth = (elementId) =>{
    const element = document.getElementById(elementId);
    const width = element.offsetWidth;

    return width;
}

const getHeight = (elementId) =>{
    const element = document.getElementById(elementId);
    const height = element.offsetHeight;

    return height;
}

const setHeight = (elementId, newHeight) => {
    const element = document.getElementById(elementId);
    element.style.height = `${newHeight}px`;
};

const updateImages = () =>{
    if ($(window).width() <= 320) {
        $('#image1').attr('src', './includes/PNG/imagen2_xsmall.png').attr('class','img-fluid');
        $('#image2').attr('src', './includes/PNG/imagen3_xsmall.png').attr('class','img-fluid');
        $('#image3').attr('src', './includes/PNG/imagen4_xsmall.png').attr('class','img-fluid');
    } 
    else if($(window).width() >= 375 && $(window).width() < 768){
        $('#image1').attr('src', './includes/PNG/imagen2_small.png').attr('class','img-fluid');
        $('#image2').attr('src', './includes/PNG/imagen3_small.png').attr('class','img-fluid');
        $('#image3').attr('src', './includes/PNG/imagen4_small.png').attr('class','img-fluid');
    }
    else{
        $('#image1').attr('src', './includes/PNG/imagen2.png');
        $('#image2').attr('src', './includes/PNG/imagen3.png');
        $('#image3').attr('src', './includes/PNG/imagen4.png');  
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("ancho_mensaje_container",getWidth("mensaje-container"));
    console.log("largo_mensaje_container",getHeight("mensaje-container"));
    console.log("ancho",getWidth("nosotros_row"));
    console.log("largo",getHeight("nosotros_row"));

    setHeight("nosotros_row", getHeight("mensaje-container") - 120); // Ajusta el alto del div a 300px
});


document.addEventListener('DOMContentLoaded', updateImages);
window.addEventListener('resize', updateImages);

