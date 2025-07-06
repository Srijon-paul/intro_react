import config from "../config/config";
import {Client, Account, ID} from 'appwrite'


// this class is created and exported an object based on that.
// some of the methods are given from apppwrite itself so more usage of those methods are on its website docs
export class AuthService{
	client = new Client();
	account;

	// this automatically creates client on creating authservice object 
	constructor(){
		this.client
			// this are exported from the config file we created for .env variables
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId)
		this.account = new Account(this.client)
	}

	// creating user account
	async createAccount({email, password, name}){
		try {
			const userAccount = await this.account.create(ID.unique(), email, password, name);
			if(userAccount){
				// call a method
				return this.login({email, password})
			} else{
				return userAccount;
			}
		} catch (error) {
			throw error;
		}
	}

	// login of user
	async login({email, password}){
		try {
			return await this.account.createEmailPasswordSession(email, password);
		} catch (error) {
			throw error;
		}
	}

	async getCurrentUser(){
		try {
			return await this.account.get();
		} catch (error) {
			console.log("Appwrite service :: getCurrentUser :: error", error);
		}
		return null; // we can also use if-else for handling this
	}

	async logout(){
		try {
			// we can also use deleteSession("current") or "[SESSION_ID]" as parameter
			return await this.account.deleteSessions();
		} catch (error) {
			console.log("Appwrite service :: loggout :: error", error);
		}
	}
}

const authService = new AuthService();
export default authService