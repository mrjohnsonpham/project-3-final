import React from 'react';

// endpoint firebase :https://us-central1-project3final-62945.cloudfunctions.net/uploadFile

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


// Create a reference with an initial file path and name
var storage = firebase.storage();
var pathReference = storage.ref('images/stars.jpg');

// Create a reference from a Google Cloud Storage URI
var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg')

gs://project3final-62945.appspot.com/images/imageedit_5_small_vin.jpg
https://firebasestorage.googleapis.com/b/project3final-62945.appspot.com/o/images%20imageedit_5_small_vin.jpg
// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');

  // Set the configuration for your app
  // TODO: Replace with your app's config object
  var firebaseConfig = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket-url>'
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...


  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      // ...
    } else {
      // User is signed out.
      // ...
    }
    // ...
  });


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
// jivko added for upload
const [selectedFile ,   setSelectedFile] = useState(null);
// const fileInput = useRef();
  
const fileSelectedHandler = event =>{
    setSelectedFile(event.target.files[0]);
    // console.log(selectedFile.name);
  }

const fileUploadHandler = event =>{
  // event.preventDefault()
  console.log(selectedFile.name);
  const fd= new FormData();
  fd.append('image', selectedFile, selectedFile.name);
  axios.post('https://us-central1-project3final-62945.cloudfunctions.net/uploadFile', fd,{ 
    onUploadProgress: progressEvent =>{
console.log('Upload Progress:'+ Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
  }
})
  .then(res => {

      console.log(res);
  })
}

   {/* jivko added for the upload */}
   <input  type="file" onChange={fileSelectedHandler}
   />
     {/* <button  onClick={ fileInput}>Pick a file</button> */}
     <button  onClick={fileUploadHandler}>Upload</button>

export default InputItemSelf;

