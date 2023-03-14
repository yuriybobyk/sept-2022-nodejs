import { ApiError } from "../errors/api.error";
import { Token } from "../models/Token.model";
import { User } from "../models/User.model";
import { ITokenPair } from "../types";
import { IUser } from "../types";
import { ICredentials } from "../types/auth.types";
import { passwordService } from "./password.service";
import { tokenService } from "./token.service";

class AuthService {
  public async register(body: IUser): Promise<void> {
    try {
      const { password } = body;
      const hashedPassword = await passwordService.hash(password);
      await User.create({
        ...body,
        password: hashedPassword,
      });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async login(
    credentilas: ICredentials,
    user: IUser
  ): Promise<ITokenPair> {
    try {
      const isMatched = await passwordService.compare(
        credentilas.password,
        user.password
      );

      if (!isMatched) {
        throw new ApiError("Invalid Credentials", 400);
      }

      const tokenPair = tokenService.generateTokenPair({
        name: user.name,
        id: user._id,
      });

      await Token.create({
        _user_id: user._id,
        ...tokenPair,
      });

      return tokenPair;
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const authService = new AuthService();
