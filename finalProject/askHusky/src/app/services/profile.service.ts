// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
//
// import { Profile } from '../classes/profile';
//
// @Injectable()
// export class ProfileService {
// // URL for CRUD operations
//   articleUrl = 'http://localhost:3000/profile'; //
//   // Create constructor to get Http instance
//   constructor(private http: Http) {
//   }
//
//   // Fetch all articles
//   getAllArticles(): Observable<any> {
//     return this.http.get(this.articleUrl + '/get-article')
//       .map(this.extractData)
//       .catch(this.handleError);
//
//   }
//   // Create article
//   createArticle(article: Article): Observable<number> {
//     const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//     const options = new RequestOptions({ headers: cpHeaders });
//     return this.http.post(this.articleUrl + '/create-article', article, options)
//       .map(success => success.status)
//       .catch(this.handleError);
//   }
//   // Fetch article by id
//   getArticleById(articleId: string): Observable<Article> {
//     const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//     const options = new RequestOptions({ headers: cpHeaders });
//     console.log(this.articleUrl + '/get-article-by-id?id=' + articleId);
//     return this.http.get(this.articleUrl + '/get-article-by-id?id=' + articleId)
//       .map(this.extractData)
//       .catch(this.handleError);
//   }
//   // Update article
//   updateArticle(article: Article): Observable<number> {
//     const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//     const options = new RequestOptions({ headers: cpHeaders });
//     return this.http.put(this.articleUrl + '/update-article', article, options)
//       .map(success => success.status)
//       .catch(this.handleError);
//   }
// // Delete article
//   deleteArticleById(articleId: string): Observable<number> {
//     const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//     const options = new RequestOptions({ headers: cpHeaders });
//     return this.http.delete(this.articleUrl + '/delete-article?id=' + articleId)
//       .map(success => success.status)
//       .catch(this.handleError);
//   }
//   private extractData(res: Response) {
//     const body = res.json();
//     return body;
//   }
//   private handleError(error: Response | any) {
//     console.error(error.message || error);
//     return Observable.throw(error.status);
//   }
// }
