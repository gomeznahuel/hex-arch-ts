import { IUser } from "../entities/User";

// Explain: UserServiceInterface is a contract that defines the methods that a UserService must implement.
export interface UserServiceInterface {
  createUser(name: string, username: string, email: string, password: string): Promise<IUser>;
  getUserById(userId: string): Promise<IUser | null>;
  getUserByUsername(username: string): Promise<IUser | null>;
  updateUser(userId: string, updates: Partial<IUser>): Promise<IUser | null>;
  deleteUser(userId: string): Promise<boolean>;
}
