import { NextFunction, Request, Response } from "express";

import { EActionTokenType, ETokenType } from "../enums";
import { ApiError } from "../errors";
import { Action, Token } from "../models";
import { tokenService } from "../services";

class AuthMiddleware {
  public async checkAccessToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const accessToken = req.get("Authorization");

      if (!accessToken) {
        throw new ApiError("Token missed", 401);
      }

      const jwtPayload = tokenService.checkToken(accessToken);

      const tokenInfo = await Token.findOne({ accessToken });

      if (!tokenInfo) {
        throw new ApiError("Token isn't valid", 401);
      }
      req.res.locals = { tokenInfo, jwtPayload };
      next();
    } catch (e) {
      next(e);
    }
  }

  public async checkRefreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const refreshToken = req.get("Authorization");

      if (!refreshToken) {
        throw new ApiError("Token missed", 401);
      }

      const jwtPayload = tokenService.checkToken(
        refreshToken,
        ETokenType.refresh
      );

      const tokenInfo = await Token.findOne({ refreshToken });

      if (!tokenInfo) {
        throw new ApiError("Token isn't valid", 401);
      }
      req.res.locals = { tokenInfo, jwtPayload };
      next();
    } catch (e) {
      next(e);
    }
  }
  public async checkActionForgotToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const actionToken = req.params.token;

      if (!actionToken) {
        throw new ApiError("No token", 401);
      }

      const jwtPayload = tokenService.checkActionToken(
        actionToken,
        EActionTokenType.forgot
      );

      const tokenInfo = await Action.findOne({ actionToken });

      if (!tokenInfo) {
        throw new ApiError("Token not valid", 401);
      }

      req.res.locals = { tokenInfo, jwtPayload };
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const authMiddleWare = new AuthMiddleware();
