import React from 'react';

function InputItemSelf(props) {

    async function SavePhoto(inp) 
    {
        let user = { name:'john', age:34 };
        let formData = new FormData();
        let photo = inp.files[0];      
             
        formData.append("photo", photo);
        formData.append("user", JSON.stringify(user));  
        
        try {
           let r = await fetch('/upload/image', {method: "POST", body: formData}); 
           console.log('HTTP response code:',r.status); 
        } catch(e) {
           console.log('Huston we have problem...:', e);
        }
        
    }

    return(
 <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">Upload</span>
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="inputGroupFile01"/>
    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
    
    )
}



//======cloudinary implant

$.get("/api/user_data").then(cloudData => {
  var myWidget = cloudinary.createUploadWidget({
    cloudName: cloudData.cloudUploadName,
    uploadPreset: cloudData.cloudUploadPreset
  
  }, (error, result) => {   // my_preset
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
      var imageUrl = result.info.secure_url;
      $.ajax({
        url: "/api/user_data",
        method: "PUT",
        data: { profilePicture: imageUrl }
      }).then(() => {
        console.log("done!!!");
        $('.member_icon').attr("src", imageUrl);
      })
    }
  })
  document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
  }, false);
});

//===========




export default InputItemSelf;

