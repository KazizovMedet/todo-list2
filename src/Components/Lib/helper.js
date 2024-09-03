import Cookies from "js-cookie";
import axios from "axios";

export const isAuth = () => {
  const token = Cookies.get('token');
  const localToken = localStorage.getItem('token');
  return !!(token && localToken);
};

export const handleUploadImage = (e, setState) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'gallery')
    axios.post('https://api.cloudinary.com/v1_1/dktewh88s/image/upload', formData)
      .then(({data}) => {
        console.log(data)
        setState(data.url)
      })
}