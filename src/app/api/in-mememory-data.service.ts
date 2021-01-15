import { Injectable } from '@angular/core';
import {InMemoryDbService, ResponseOptions} from 'angular-in-memory-web-api';
import {Game} from '../types/Game';
import {gameList} from './collections/game-collection';
import {RequestInfo} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMememoryDataService implements InMemoryDbService{

  users = [
    {email: 'gwenn.linski@gmail.com', password: '123456', fakeJWT: 'token123'},
    {email: 'john.doe@email.com', password: '654321', fakeJWT: 'token456'}
  ];

  createDb(): any{
    const games: Game[] = gameList;
    const users = [
      {email: 'gwenn.linski@gmail.com', password: '123456', fakeJWT: 'token123'},
      {email: 'john.doe@email.com', password: '654321', fakeJWT: 'token456'}
    ];
    const auth = [];
    const profile = [];

    return {games, users, auth, profile};
  }

  get(reqInfos: RequestInfo): any {
    console.log(reqInfos.utils.getDb());
    return undefined;
  }

  post(reqInfo: RequestInfo): any {
    if (reqInfo.collectionName === 'auth') {
      return this.authenticate(reqInfo);
    } else if (reqInfo.collectionName === 'profile') {
      return this.profile(reqInfo);
    }
    return undefined;
  }

  authenticate(reqInfo: RequestInfo): any {
    return reqInfo.utils.createResponse$(() => {
      const {users} = reqInfo.utils.getDb();
      console.log(users);
      const { headers, url, req } = reqInfo;

      const {email, password } = req['body'];

      let response: ResponseOptions;
      let user = users.find(user => user.email === email && user.password === password);
      if (user) {
         return  {
           status: 200,
           headers, // reqInfo (line 30)
           url, // reqInfo (line 30)
           body: {
             token: user.fakeJWT
           }
         };
       }
      return  {
        status: 401,
        headers,
        url,
        body: { }
      };
    });
  }

  profile(reqInfo: RequestInfo): any {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url, req } = reqInfo;

      const {token } = req['body'];

      const user = this.users.find((user) => user.fakeJWT === token);
      if (user) {
        return {
          status: 200,
          headers, // reqInfo (line 30)
          url, // reqInfo (line 30)
          body: {
            user: {
              email: user.email
            }
          }
        };
      }
      return {
        status: 401,
        headers,
        url,
        body: { }
      };

    });
  }
  constructor() { }
}
