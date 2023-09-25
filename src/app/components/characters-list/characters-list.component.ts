import { Component, OnInit } from '@angular/core';
import { CharacterDetail } from 'src/app/model/character-detail';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit{
<<<<<<< HEAD
=======

  characters: CharacterDetail[] = [];

  constructor(private dataServ: DataService){}

  ngOnInit(): void {
    // this.dataServ.getAllCharacters().subscribe(characters => this.characters = characters);
    this.dataServ.allCharacters.subscribe(chars => this.characters = chars)
  }

>>>>>>> d8d17ee3e81de15705ad1e0dac974d369ac75f7c

  characters: CharacterDetail[] = []

  constructor(private dataServ: DataService){ }

  ngOnInit(): void {
      this.dataServ.allCharacters.subscribe(characters => this.characters=characters)
  }
}
