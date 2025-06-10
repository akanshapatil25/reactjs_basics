 const conf = {
    appwriteUrl: (import.meta.env.VITE_APPWRITE_URL),
    appwriteProject: (import.meta.env.VITE_APPWRITE_PROJECT_ID), 
    appwriteDatabase: (import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollection: (import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucket: (import.meta.env.VITE_APPWRITE_BUCKET_ID),
 }

 export default conf;