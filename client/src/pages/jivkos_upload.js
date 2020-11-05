import React from 'react';

function Login(props) {

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
export default Login;

