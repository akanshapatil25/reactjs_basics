 const conf = {
    appwriteUrl:  String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProject: String(import.meta.env.VITE_APPWRITE_PROJECT_ID), 
    appwriteDatabase: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollection: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucket: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceApiKey: String(import.meta.env.TINYMCE_API_KEY),
 }

 export default conf;