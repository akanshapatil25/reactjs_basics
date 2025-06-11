import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, images }) {
  console.log("Image URL:", appwriteService.getFileView(images));
    // Add error state for image loading
    const [imageError, setImageError] = React.useState(false);
    
    // Verify the images prop is valid
    if (!images) {
        console.error("No images prop provided for post:", $id);
        return (
            <Link to={`/post/${$id}`}>
                <div className='w-full bg-gray-100 rounded-xl p-4'>
                    <div className='w-full justify-center mb-4 bg-gray-200 h-48 flex items-center'>
                        <p className='text-gray-500'>No image available</p>
                    </div>
                    <h2 className='text-xl font-bold'>{title}</h2>
                </div>
            </Link>
        );
    }
    
    
    
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {imageError ? (
                        <div className='bg-gray-200 h-48 flex items-center justify-center rounded-xl'>
                            <p className='text-gray-500'>Image not available</p>
                        </div>
                    ) : (
                        <img 
                            src={appwriteService.getFileView(images)} 
                            alt={title}
                            className='rounded-xl w-full h-48 object-cover'
                            onError={() => setImageError(true)}
                            loading="lazy"
                        />
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}


export default PostCard;