import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite"; 


export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProject);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, images, status, userid}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug,
                {
                    title,
                    content,
                    images,
                    status,
                    userid,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, images, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug,
                {
                    title,
                    content,
                    images,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = []){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucket,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucket,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFileView(fileId, width = 400, height = 300){
        return this.bucket.getFileView(
            conf.appwriteBucket,
            fileId,
            width,
            height
        )
    }

}


const service = new Service()
export default service