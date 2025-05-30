// src/utils/userUtils.ts

export interface UserProfile {
	id: number;
	name: string;
	email: string;
	age?: number;
	isActive: boolean;
}

/**
 * Checks if the user profile is active.
 * @param user - UserProfile object
 * @returns true if user is active, false otherwise
 */
export function isUserActive(user: UserProfile): boolean {
	return user.isActive;
}

/**
 * Returns user's greeting message based on the time of day.
 * @param name - User's name
 * @param hour - Current hour (0-23)
 * @returns Greeting message string
 */
export function getGreeting(name: string, hour: number): string {
	if (hour < 0 || hour > 23) {
		throw new Error("Invalid hour");
	}

	if (hour < 12) {
		return `Good morning, ${name}!`;
	} else if (hour < 18) {
		return `Good afternoon, ${name}!`;
	} else {
		return `Good evening, ${name}!`;
	}
}

/**
 * Validates an email address format (simple regex).
 * @param email - Email string
 * @returns true if email format looks valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
