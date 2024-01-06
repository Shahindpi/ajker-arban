import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Create(){

    const [title, setTitle] = useState('');
    const [descriptions, setdescriptions] = useState('');
    const [image, setImage] = useState('');
    const [image_alt, setImage_alt] = useState('');
    // const [author, setAuthor] = useState('Shahin');

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = { title, descriptions, image, image_alt };
    
        setIsLoading(true);
    
        try {
            const token = '$2y$12$4Q0lAgD1pUNITtHOTyVLc.dZW4LC1oxw/d/74CNymL8EvdRjlclJS'; // Replace with your actual auth token
    
            const response = await fetch('http://127.0.0.1:8000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(blog) // Include the blog data as the request body
            });
    
            if (response.ok) {
                console.log("New blog added");
                setIsLoading(false);
                navigate('/dashboard');
            } else {
                const errorText = await response.text();
                console.error('Failed to create blog:', errorText);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    }
    
    return(
        <div className="create-news">
            <h2>Create News</h2>
            <form onSubmit={handleSubmit}>
                <label>News Headline</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value) }
                    />
                <label>News Descriptions</label>
                <textarea  
                rows="10"
                    value={descriptions}
                    onChange={(e) => setdescriptions(e.target.value)}
                    required></textarea>
                <label>Add Images</label>
                <input 
                    type="file" 
                    required 
                    value={image}
                    onChange={(e) => setImage(e.target.value) }
                    />
                <label>Image Alt Text</label>
                <input 
                    type="text" 
                    required 
                    value={image_alt}
                    onChange={(e) => setImage_alt(e.target.value) }
                    />
                {/* <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select> */}
                {!isLoading && <button>Publish</button>}
                {isLoading && <button disabled>Publishing News</button>}
                {/* <p>{title}</p>
                <p>{descriptions}</p> */}
            </form>
        </div>
    )
}