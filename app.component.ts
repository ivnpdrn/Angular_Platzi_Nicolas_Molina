
import { Component } from '@angular/core';

import { Product } from './product.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nicolas';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  person={
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';

  products: Product[] = [
    {
    name: 'El mejor juguete',
    price: 565,
    image: './assets/images/toy.jpg',
    category: 'all'
    },

    {
    name: 'Bicicleta casi nueva',
    price: 356,
    image: './assets/images/bike.jpg'
    },

    {
    name: 'Collection de albumnes',
    price: 34,
    image: './assets/images/album.jpg'
    },

    {
    name: 'Mis libros',
    price: 23,
    image: './assets/images/books.jpg'
    },
    {
    name: 'Casa para perro',
    price: 34,
    image: './assets/images/house.jpg'
    },
    {
    name: 'Gafas',
    price: 3434,
    image: './assets/images/glasses.jpg'
    }
  ]


  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
      }

  increaseAge()  {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  changeName(event: Event)  {
    const element = event.target as HTMLInputElement;
    element.value;
    this.person.name = element.value
  }

  addName ()  {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }



}
