// import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// export const GetUser = createParamDecorator(
//   (data: string | undefined, ctx: ExecutionContext) => {
//     const request: Express.Request = ctx.switchToHttp().getRequest();
//     if (data) {
//       return request.user[data];
//     }
//     return request.user;
//   },
// );


import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    const user = request.user;

    console.log("User: ", user);
    
    // Check if user exists before accessing its properties
    if (!user) {
      throw new Error('User not found');
    }

    if (data) {
      return user[data];
    }
    return user;
  },
);
