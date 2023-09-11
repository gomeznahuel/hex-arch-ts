// import { IUser } from "../entities/User";

// export interface UserRepository {
//   getAllUsers(): Promise<IUser[]>;
//   findUserById(id: string): Promise<IUser | null>;
//   createUser(name: string): Promise<IUser>;
//   updateUser(id: string, name: string): Promise<IUser | null>;
//   deleteUser(id: string): Promise<IUser | null>;
// }

import { IUser } from '../entities/User';

// Explain: UserRepositoryInterface is a contract that defines the methods that a UserRepository must implement.
export interface UserRepositoryInterface {
  findByUsername(username: string): Promise<IUser | null>;
  findById(userId: string): Promise<IUser | null>;
  save(user: IUser): Promise<void>;
  update(userId: string, updates: Partial<IUser>): Promise<void>;
  delete(userId: string): Promise<void>;
}

// Explain: UserRepositoryInterface is a contract that defines the methods that a UserRepository must implement.
// Explain: UserServiceInterface is a contract that defines the methods that a UserService must implement.