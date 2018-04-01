import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor( private _http: HttpClient ) { 
    this.getPokemon();
  }
getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => { 
        let res = [];
        let abilities_urls = [];
        res.push("Data have been received:\n");
        var pokName = data['name'];
        res.push(data['name']);
        res.push("'s abilities are ");
        for (let each in data['abilities']){
          res.push(data['abilities'][each]['ability']['name']);
          abilities_urls.push(data['abilities'][each]['ability']['url']);
          res.push(" and ");
        }
        res.pop();
        console.log(res.join(""));
        for (let each in abilities_urls){
          let ability = this._http.get(abilities_urls[each]);
          ability.subscribe(data => {
            let res = [];
            res.push(data['pokemon'].length);
            for (let eachPokemon in data['pokemon']){
              if (data['pokemon'][eachPokemon]['pokemon']['name']!=pokName){
                console.log(data['pokemon'][eachPokemon]['pokemon']['name'], 'knows', data['name'], 'too!');
              } else{
                res.pop();
                res.push(data['pokemon'].length-1);
              }
            }
            res.push(' other pokemon have the ');
            res.push(data['name']);
            res.push(' ability.')
            console.log(res.join(''));
          });
        }
    });
  }
}
