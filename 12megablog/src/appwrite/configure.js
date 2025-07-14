import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
	client = new Client;
	databases;
	bucket;
	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId)
		this.databases = new Databases(this.client)
		this.bucket = new Storage(this.client)
	}

	async createPost({ title, slug, content, featuredImage, status, userId }) {
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
					userId
				}
			)
		} catch (error) {
			console.log("Appwrite service :: createPost :: error", error);
		}
	}

	async updatePost(slug, { title, content, featuredimage, status }) {
		try {
			return await this.databases.updateDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredimage,
					status
				}
			)
		} catch (error) {
			console.log("Appwrite service :: updatePost :: error", error);
		}
	}

	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			) // didn't used return since it doesn't required to return as it is deleting
			return true // this depends on how frontend handle this
		} catch (error) {
			console.log("Appwrite service :: deletePost :: error", error);
			return false;
		}
	}

	async getPost(slug){
		try {
			return await this.databases.getDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			)
		} catch (error) {
			console.log("Appwrite service :: getPost :: error", error);
			return false;
		}
	}

	// queries are taken inside the square brackets
	// also queries can be applied if indexes are made inside databases. they are given as keys
	async getPosts(queries = [Query.equal("status", "active")]){
		try {
			return await this.databases.listDocuments(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				queries // this can be also be given manually again which we have given earlier as parameter in the function. since we have stored in a variable we didn't have to write again
			)
		} catch (error) {
			console.log("Appwrite service :: getPosts :: error", error);
			return false;
		}
	}

	// file upload services
	async uploadFile(file){
		try {
			return await this.bucket.createFile(
				config.appwriteBucketId,
				ID.unique(),
				file
			)
		} catch (error) {
			console.log("Appwrite service :: uploadFile :: error", error);
			return false;
		}
	}

	// for deleting file
	async deleteFile(fileId){
		try {
			await this.bucket.deleteFile(
				config.appwriteBucketId,
				fileId
			)
			return true;
		} catch (error) {
			console.log("Appwrite service :: deleteFile :: error", error);
			return false;
		}
	}

	// for previewing file
	getFilePreview(fileId){
		return this.bucket.getFilePreview(
			config.appwriteBucketId,
			fileId
		)
	}
}

const service = new Service();
export default service