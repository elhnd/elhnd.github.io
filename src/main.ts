/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { setupWorker } from 'msw/browser';
import {http, HttpResponse} from 'msw';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


const handlers = [
  http.get('/options/:id', ({ params }) => {

    const options = {
      "S": {
        configs: [
          {id: 1, description: "Dual Motor All-Wheel Drive", range: 405, speed: 149, price: 74990},
          {id: 2, description: "Plaid - Tri Motor All-Wheel Drive", range: 396, speed: 200, price: 89990},
        ],
        towHitch: false,
        yoke: true
      },
      "X": {
        configs: [
          {id: 1, description: "Dual Motor All-Wheel Drive", range: 348, speed: 149, price: 79990},
          {id: 2, description: "Plaid - Tri Motor All-Wheel Drive", range: 333, speed: 149, price: 94990},
        ],
        towHitch: true, // costs $1,000
        yoke: true, // costs $1,000
      },
      "C" : {
        configs: [
          {id: 1, description: "Rear Wheel Drive", range: 250, speed: 110, price: 60990},
          {id: 2, description: "Dual Motor All-Wheel Drive", range: 340, speed: 112, price: 79990},
          {id: 3, description: "Cyberbeast - Tri Motor All-Wheel Drive", range: 320, speed: 130, price: 99990},
        ],
        towHitch: true, // costs $1,000
        yoke: true, // costs $1,000
      },
      "3": {
        configs: [
          {id: 1, description: "Rear-Wheel Drive", range: 272, speed: 140, price: 38990},
          {id: 2, description: "Long Range - Dual Motor All-Wheel Drive", range: 333, speed: 145, price: 45990},
          {id: 3, description: "Performance - Dual Motor All-Wheel Drive", range: 315, speed: 162, price: 50990},
        ],
        towHitch: false,
        yoke: false,
      },
      "Y": {
        configs: [
          {id: 1, description: "Rear-Wheel Drive", range: 260, speed: 135, price: 43990},
          {id: 2, description: "Long Range - Dual Motor All-Wheel Drive", range: 330, speed: 135, price: 48990},
          {id: 3, description: "Performance - Dual Motor All-Wheel Drive", range: 303, speed: 155, price: 52490},
        ],
        towHitch: true,
        yoke: false,
      }
    };
    // @ts-ignore
    return HttpResponse.json(options[params.id.toUpperCase()]);
  }),
  http.get('/models', ({ request, params, cookies }) => {
    return HttpResponse.json([
      { code: "S",
        description: "Model S",
        colors: [
          {code: "white", description: "Pearl White Multi-Coat", price: 0, image: "../assets/img/car/S/white.jpg"},
          {code: "black", description: "Solid Black", price: 0, image: "../assets/img/car/S/black.jpg"},
          {code: "blue", description: "Deep Blue Metallic", price: 0, image: "../assets/img/car/S/blue.jpg"},
          {code: "grey", description: "Stealth Grey", price: 0, image: "../assets/img/car/S/grey.jpg"},
          {code: "red", description: "Ultra Red", price: 0, image: "../assets/img/car/S/red.jpg"}
        ]
      },
      { code: "X",
        description: "Model X",
        colors: [
          {code: "white", description: "Pearl White Multi-Coat", price: 0, image: "../assets/img/car/X/white.jpg"},
          {code: "black", description: "Solid Black", price: 0, image: "../assets/img/car/X/black.jpg"},
          {code: "blue", description: "Deep Blue Metallic", price: 0, image: "../assets/img/car/X/blue.jpg"},
          {code: "grey", description: "Stealth Grey", price: 0, image: "../assets/img/car/X/grey.jpg"},
          {code: "red", description: "Ultra Red", price: 0, image: "../assets/img/car/X/red.jpg"}
        ]
      },
      { code: "C",
        description: "Cybertruck",
        colors: [
          {code: "grey", description: "Stainless Steel", price: 0, image: "../assets/img/car/C/grey.jpg"},
          {code: "black", description: "Satin Black", price: 6500, image: "../assets/img/car/C/black.jpg"},
          {code: "white", description: "Satin White", price: 6500, image: "../assets/img/car/C/white.jpg"}
        ]
      },
      { code: "3",
        description: "Model 3",
        colors: [
          {code: "white", description: "Pearl White Multi-Coat", price: 1000, image: "../assets/img/car/3/white.jpg"},
          {code: "black", description: "Solid Black", price: 1500, image: "../assets/img/car/3/black.jpg"},
          {code: "blue", description: "Deep Blue Metallic", price: 1000, image: "../assets/img/car/3/blue.jpg"},
          {code: "grey", description: "Midnight Silver Metallic", price: 0, image: "../assets/img/car/3/grey.jpg"},
          {code: "red", description: "Red Multi-Coat", price: 2000, image: "../assets/img/car/3/red.jpg"}
        ]
      },
      { code: "Y",
        description: "Model Y",
        colors: [
          {code: "white", description: "Pearl White Multi-Coat", price: 1000, image: "../assets/img/car/Y/white.jpg"},
          {code: "black", description: "Solid Black", price: 2000, image: "../assets/img/car/Y/black.jpg"},
          {code: "blue", description: "Deep Blue Metallic", price: 1000, image: "../assets/img/car/Y/blue.jpg"},
          {code: "grey", description: "Midnight Silver Metallic", price: 0, image: "../assets/img/car/Y/grey.jpg"},
          {code: "red", description: "Red Multi-Coat", price: 2000, image: "../assets/img/car/Y/red.jpg"}
        ]
      }

    ]);
  }),
];
export const worker = setupWorker(...handlers);
worker.start();

