import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CharacterDetail } from '../model/character-detail';

@Injectable({
  providedIn: 'root'
})
export class DataService {
<<<<<<< HEAD
  readonly BASE_URL = 'https://rickandmortyapi.com/api/'
  pageNumber = 1;
  allCharacters = new BehaviorSubject<CharacterDetail[]>([])



  constructor(private http: HttpClient) {
    this.getAllCharacters()
  }

  getAllCharacters(): void{
    // return this.http.get<any>(this.BASE_URL + 'character?page=' + this.pageNumber).pipe(
    //   map(data => data.results)
    // );
    this.http.get<any>(this.BASE_URL + 'character?page=' + this.pageNumber).pipe(
        map(data => data.results)).subscribe(characters => this.allCharacters.next(characters))
  }

  prevPage(){
    if (this.pageNumber>1) {
      this.pageNumber--
      this.getAllCharacters()
    }

=======

  allCharacters = new BehaviorSubject<CharacterDetail[]>([]);

  readonly BASE_URL = 'https://rickandmortyapi.com/api/';

  pageNumber = 1;

  constructor(private http: HttpClient) {
    this.getAllCharacters();
  }

  getAllCharacters(): void{
    this.http.get<any>(this.BASE_URL + 'character?page=' + this.pageNumber).pipe(
      map(data => data.results)
    ).subscribe(characters => this.allCharacters.next(characters));
  }

  previousPage(){
    if (this.pageNumber>1) {
      this.pageNumber--;
      this.getAllCharacters();
    }
>>>>>>> d8d17ee3e81de15705ad1e0dac974d369ac75f7c
  }

  nextPage(){
    this.pageNumber++;
<<<<<<< HEAD
    this.getAllCharacters()
  }

=======
    this.getAllCharacters();
  }

    // getAllCharacters(): Observable<CharacterDetail[]>{
  //   return this.http.get<any>(this.BASE_URL + 'character?page=' + this.pageNumber).pipe(
  //     map(data => data.results)
  //   );
  // }

>>>>>>> d8d17ee3e81de15705ad1e0dac974d369ac75f7c
}
