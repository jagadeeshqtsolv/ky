export function greet(name: string): string {
	return `Hello, ${name}!`;
}

interface User {
	username: string;
	password: string;
}

const mockUserDB: User = {
	username: "admin",
	password: "password123",
};

export function login(username: string, password: string): boolean {
	return username === mockUserDB.username && password === mockUserDB.password;
}

