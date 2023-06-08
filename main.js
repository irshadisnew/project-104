Webcam.set({
    width : 350,
height : 300,
image_format :'png',
png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_image"src="'+data_uri+'">';
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D5utOUY7M/model.json',modelloaded);
function modelloaded(){
    console.log("modelisloaded");
}


function identifyimage(){
    img =document.getElementById("captured_image");
    classifier.classify(img, gotresult);
}
function gotresult(error,result){
if(error){
    console.log(error);

}
else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("Accuracy").innerHTML=result[0].confidence.toFixed(3);
}
}





