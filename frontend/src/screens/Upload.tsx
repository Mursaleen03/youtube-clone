import axios from "axios"

export function Upload() {
    async function upload() {
        await axios.post("http://localhost:3000/api/videos", {
            videoUrl: document.getElementById("videoUrl")!.value,
            thumbnail: document.getElementById("thumbnail")!.value,
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    }
    return <div>
        <input id="videoUrl" type="text" placeholder="Video url" />
        <input id="thumbnail" type="text" placeholder="thumbnail" />
        <button onClick={upload}>Upload</button>
    </div>
}