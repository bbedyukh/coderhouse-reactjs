import { useState, useEffect } from 'react'
import { LinearProgress } from '@material-ui/core'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'

const itemsFromAPI = [
    {
        id: 1,
        category: 'empanadas',
        title: 'Empanada vegetariana',
        description:
            'Relleno: Carne de soja, morrón colorado, morrón verde, ajo, cebolla, cebolla de verdeo, huevo y aceitunas.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555236178.jpg',
    },
    {
        id: 2,
        category: 'empanadas',
        title: 'Empanada de carne',
        description:
            'Relleno: Carne molida, cebolla, morrón, ajo, huevo y aceitunas verdes.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207899.jpg',
    },
    {
        id: 3,
        category: 'empanadas',
        title: 'Empanada de carne cortada a cuchillo',
        description:
            'Relleno: Carne cortada a cuchillo, cebolla, morrón, ajo, huevo, ají picante y aceitunas verdes.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230009.jpg',
    },
    {
        id: 4,
        category: 'empanadas',
        title: 'Empanada de carne picante',
        description:
            'Relleno: Carne molida, cebolla, morrón, ajo, huevo, ají picante y aceitunas verdes.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207885.jpg',
    },
    {
        id: 5,
        category: 'empanadas',
        title: 'Empanada de jamón y queso',
        description: 'Relleno: Jamón y queso.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203994.jpg',
    },
    {
        id: 6,
        category: 'empanadas',
        title: 'Empanada de pollo',
        description: 'Relleno: Pollo, cebolla, morrón y ajo.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207875.jpg',
    },
    {
        id: 7,
        category: 'empanadas',
        title: 'Empanada capresse',
        description: 'Relleno: Muzzarella, tomate y albahaca.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207833.jpg',
    },
    {
        id: 8,
        category: 'empanadas',
        title: 'Empanada de roquefort',
        description: 'Relleno: Muzzarella y roquefort.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203970.jpg',
    },
    {
        id: 9,
        category: 'empanadas',
        title: 'Empanada de humita',
        description: 'Relleno: Choclo y salsa blanca.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207848.jpg',
    },
    {
        id: 10,
        category: 'empanadas',
        title: 'Empanada de cebolla y queso',
        description: 'Relleno: Cebolla y muzzarella.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207823.jpg',
    },
    {
        id: 11,
        category: 'empanadas',
        title: 'Empanada de verdura',
        description: 'Relleno: Acelga y salsa blanca.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228045.jpg',
    },

    {
        id: 12,
        category: 'pizzas',
        title: 'Muzzarella',
        description: 'Test description',
        price: 650,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228383.jpg',
    },
    {
        id: 13,
        category: 'pizzas',
        title: 'Fugazzeta',
        description: 'Test description',
        price: 740,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480256273.jpg',
    },
    {
        id: 14,
        category: 'pizzas',
        title: 'Napolitana',
        description: 'Test description',
        price: 740,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480261320.jpg',
    },
    {
        id: 15,
        category: 'pizzas',
        title: 'Calabresa',
        description: 'Test description',
        price: 800,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230939.jpg',
    },
    {
        id: 16,
        category: 'pizzas',
        title: 'Pepperoni',
        description: 'Test description',
        price: 820,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482883674.jpg',
    },
    {
        id: 17,
        category: 'pizzas',
        title: 'Veneciana',
        description: 'Test description',
        price: 820,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230929.jpg',
    },
    {
        id: 18,
        category: 'pizzas',
        title: 'Muzzarella c/ jamón y morrón',
        description: 'Test description',
        price: 800,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236996.jpg',
    },
    {
        id: 19,
        category: 'pizzas',
        title: 'Especial Don Boedo',
        description: 'Test description',
        price: 840,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480275596.jpg',
    },
    {
        id: 20,
        category: 'pizzas',
        title: 'Muzzarella c/ morrón',
        description: 'Test description',
        price: 740,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480256055.jpg',
    },
    {
        id: 21,
        category: 'pizzas',
        title: 'Muzzarella c/ huevo',
        description: 'Test description',
        price: 740,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230561.jpg',
    },

    {
        id: 22,
        category: 'calzones',
        title: 'Calzone napolitano',
        description: 'Muzzarella, tomate en rodajas, jamón y provenzal.',
        price: 890,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228246.jpg',
    },

    {
        id: 23,
        category: 'calzones',
        title: 'Calzone roquefort',
        description: 'Muzzarella, jamón y roquefort.',
        price: 890,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230268.jpg',
    },
    {
        id: 24,
        category: 'calzones',
        title: 'Calzone mix de vegetales',
        description:
            'Muzzarella, salsa de tomate, zapallito, berenjenas, apio, zanahoria y morrón.',
        price: 890,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230258.jpg',
    },
    {
        id: 25,
        category: 'calzones',
        title: 'Calzone especial Don Boedo',
        description: 'Muzzarella, palmitos, jamón, morrón y huevo.',
        price: 890,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212737.jpg',
    },
    {
        id: 26,
        category: 'calzones',
        title: 'Calzone palmitos',
        description: 'Muzzarella, palmitos, salsa golf y jamón.',
        price: 890,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228231.jpg',
    },
    {
        id: 27,
        category: 'calzones',
        title: 'Calzone roquefort',
        description: 'Muzzarella, jamón y roquefort.',
        price: 890,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230268.jpg',
    },
    {
        id: 28,
        category: 'calzones',
        title: 'Calzone calabresa',
        description: 'Muzzarella, longaniza, jamón, morrón y huevo.',
        price: 890,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230278.jpg',
    },
    {
        id: 29,
        category: 'porciones',
        title: 'Faina rellena',
        description: 'Jamón y muzzarella.',
        price: 140,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203890.jpg',
    },
    {
        id: 30,
        category: 'porciones',
        title: 'Faina al verdeo',
        description: 'Verdeo, muzzarella y sésamo.',
        price: 140,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203900.jpg',
    },
    {
        id: 31,
        category: 'porciones',
        title: 'Faina',
        description: '',
        price: 90,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203905.jpg',
    },
    {
        id: 32,
        category: 'porciones',
        title: 'Muzzarella',
        description: '',
        price: 140,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212448.jpg',
    },
    {
        id: 33,
        category: 'porciones',
        title: 'Jamón y morrón',
        description: 'Muzzarella, jamón y morrón.',
        price: 170,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204944.jpg',
    },
    {
        id: 34,
        category: 'porciones',
        title: 'Napolitana',
        description: 'Muzzarella, tomate y provenzal.',
        price: 170,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203865.jpg',
    },
    {
        id: 35,
        category: 'porciones',
        title: 'Calabresa',
        description: 'Muzzarella con longaniza.',
        price: 140,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203880.jpg',
    },
    {
        id: 36,
        category: 'porciones',
        title: 'Fugazzeta rellena',
        description: '',
        price: 170,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203915.jpg',
    },
    {
        id: 37,
        category: 'porciones',
        title: 'Fugazzeta',
        description: '',
        price: 140,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203920.jpg',
    },

    {
        id: 38,
        category: 'cocina',
        title: 'Taco de lomo',
        description: '',
        price: 200,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212562.jpg',
    },
    {
        id: 39,
        category: 'cocina',
        title: 'Taco de pollo',
        description: '',
        price: 200,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212557.jpg',
    },
    {
        id: 40,
        category: 'cocina',
        title: 'Tequeños',
        description: 'Tequeños bastones de queso envueltos en masa. 5 unidades',
        price: 430,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230243.jpg',
    },
    {
        id: 41,
        category: 'cocina',
        title: 'Bastoncitos de muzzarella',
        description: 'Bastoncitos de muzzarella. 6 unidades.',
        price: 430,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1510078191.jpg',
    },
    {
        id: 42,
        category: 'cocina',
        title: 'Revuelto gramajo',
        description: '',
        price: 500,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236523.jpg',
    },
    {
        id: 43,
        category: 'cocina',
        title: 'Papas fritas Don Boedo',
        description: 'Papas fritas con panceta y queso cheddar.',
        price: 500,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230236.jpg',
    },
    {
        id: 44,
        category: 'cocina',
        title: 'Papas fritas',
        description: 'Porción de papas fritas',
        price: 400,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1511403004.jpg',
    },
    {
        id: 45,
        category: 'cocina',
        title: 'Papas a la crema',
        description: 'Porción de papas a la crema.',
        price: 450,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203920.jpg',
    },
    {
        id: 46,
        category: 'cocina',
        title: 'Papas fritas con cheddar',
        description: 'Porción de papas fritas con queso cheddar.',
        price: 450,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1511403004.jpg',
    },
    {
        id: 47,
        category: 'cocina',
        title: 'Papas noisette',
        description: 'Porción de papas noisette.',
        price: 400,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1831177052.jpg',
    },
    {
        id: 48,
        category: 'cocina',
        title: 'Tortilla de papa',
        description: '',
        price: 480,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555055541.jpg',
    },
    {
        id: 49,
        category: 'cocina',
        title: 'Tortilla de papa con cebolla',
        description: '',
        price: 500,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555055541.jpg',
    },
    {
        id: 50,
        category: 'cocina',
        title: 'Tortilla de papa a la española',
        description: '',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555070293.jpg',
    },
    {
        id: 51,
        category: 'cocina',
        title: 'Omelette de queso',
        description: '',
        price: 500,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555150426.jpg',
    },
    {
        id: 52,
        category: 'cocina',
        title: 'Omelette de jamón y queso',
        description: '',
        price: 500,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555085099.jpg',
    },
    {
        id: 53,
        category: 'cocina',
        title: 'Arrolladitos de salchicha',
        description:
            'Arrolladitos de salchicha con panceta y queso cheddar. 3 unidades.',
        price: 450,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230221.jpg',
    },
    {
        id: 54,
        category: 'cocina',
        title: 'Milanesa con guarnición',
        description: '',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236513.jpg',
    },
    {
        id: 55,
        category: 'cocina',
        title: 'Bondiola a la riojana con guarnición',
        description: '',
        price: 700,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555129735.jpg',
    },
    {
        id: 56,
        category: 'cocina',
        title: 'Bife a la portuguesa',
        description: '',
        price: 650,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555129907.jpg',
    },
    {
        id: 57,
        category: 'cocina',
        title: 'Bife a la criolla',
        description: '',
        price: 650,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555130905.jpg',
    },
    {
        id: 58,
        category: 'cocina',
        title: 'Milanesa napolitana con guarnición',
        description: '',
        price: 630,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236503.jpg',
    },
    {
        id: 59,
        category: 'cocina',
        title: 'Suprema con guarnición',
        description: '',
        price: 580,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230124.jpg',
    },
    {
        id: 60,
        category: 'cocina',
        title: 'Suprema napolitana con guarnición',
        description: '',
        price: 630,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228131.jpg',
    },
    {
        id: 61,
        category: 'cocina',
        title: 'Pollo grillé con guarnición',
        description: '',
        price: 600,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230076.jpg',
    },
    {
        id: 62,
        category: 'cocina',
        title: 'Brochette de pollo con guarnición',
        description: '',
        price: 700,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236373.jpg',
    },
    {
        id: 63,
        category: 'cocina',
        title: 'Brochette de lomo con guarnición',
        description: '',
        price: 700,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236363.jpg',
    },
    {
        id: 64,
        category: 'cocina',
        title: 'Bife de costilla con guarnición',
        description: '',
        price: 660,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228106.jpg',
    },
    {
        id: 65,
        category: 'cocina',
        title: 'Bife de chorizo con guarnición',
        description: '',
        price: 800,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228089.jpg',
    },
    {
        id: 66,
        category: 'cocina',
        title: 'Pollo a la mostaza con guarnición',
        description: '',
        price: 780,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230049.jpg',
    },
    {
        id: 67,
        category: 'cocina',
        title: 'Pollo al verdeo con guarnición',
        description: '',
        price: 780,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212606.jpg',
    },
    {
        id: 68,
        category: 'cocina',
        title: 'Pollo a la provenzal con guarnición',
        description: '',
        price: 780,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212601.jpg',
    },
    {
        id: 69,
        category: 'cocina',
        title: 'Medallón de lomo con guarnición',
        description: '',
        price: 780,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207924.jpg',
    },
    {
        id: 70,
        category: 'cocina',
        title: 'Lomo a la pimienta negra con guarnición',
        description: '',
        price: 890,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212577.jpg',
    },
    {
        id: 71,
        category: 'cocina',
        title: 'Lomo al champiñón con guarnición',
        description: '',
        price: 950,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207914.jpg',
    },
    {
        id: 72,
        category: 'sandwichs',
        title: 'Hamburguesa completa con fritas',
        description: '',
        price: 570,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204864.jpg',
    },
    {
        id: 73,
        category: 'sandwichs',
        title: 'Hamburguesa Don Boedo con fritas',
        description: '',
        price: 590,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204854.jpg',
    },
    {
        id: 74,
        category: 'sandwichs',
        title: 'Sandwich de milanesa',
        description: '',
        price: 570,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204849.jpg',
    },
    {
        id: 75,
        category: 'sandwichs',
        title: 'Sandwich de milanesa completo',
        description: '',
        price: 610,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212350.jpg',
    },
    {
        id: 76,
        category: 'sandwichs',
        title: 'Sandwich de pollo grillé',
        description: '',
        price: 570,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212330.jpg',
    },
    {
        id: 77,
        category: 'sandwichs',
        title: 'Sandwich de pollo grillé completo',
        description: '',
        price: 610,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212340.jpg',
    },
    {
        id: 78,
        category: 'sandwichs',
        title: 'Sandwich de suprema de pollo',
        description: '',
        price: 570,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204809.jpg',
    },
    {
        id: 79,
        category: 'sandwichs',
        title: 'Sandwich de suprema de pollo completo',
        description: '',
        price: 610,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204824.jpg',
    },
    {
        id: 80,
        category: 'sandwichs',
        title: 'Sandwich de lomo',
        description: '',
        price: 600,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204799.jpg',
    },
    {
        id: 81,
        category: 'sandwichs',
        title: 'Sandwich de lomo completo',
        description: '',
        price: 640,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203775.jpg',
    },
    {
        id: 82,
        category: 'pastas',
        title: 'Spaghetti',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203955.jpg',
    },
    {
        id: 83,
        category: 'pastas',
        title: 'Spaghetti capresse',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203950.jpg',
    },
    {
        id: 84,
        category: 'pastas',
        title: 'Tallarines',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1575993261.jpg',
    },
    {
        id: 85,
        category: 'pastas',
        title: 'Ñoquis de papa caseros',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1575987407.jpg',
    },
    {
        id: 86,
        category: 'pastas',
        title: 'Ñoquis de calabaza caseros',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204996.jpg',
    },
    {
        id: 87,
        category: 'pastas',
        title: 'Sorrentinos caseros de jamón y muzzarella',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204984.jpg',
    },
    {
        id: 88,
        category: 'pastas',
        title: 'Sorrentinos caseros de jamón crudo y muzzarella',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1575996383.jpg',
    },
    {
        id: 89,
        category: 'pastas',
        title: 'Sorrentinos caseros capresse',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1575993757.jpg',
    },
    {
        id: 90,
        category: 'pastas',
        title: 'Canelones caseros',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1483039597.jpg',
    },
    {
        id: 91,
        category: 'pastas',
        title: 'Ravioles caseros de ricota',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228015.jpg',
    },
    {
        id: 92,
        category: 'pastas',
        title: 'Ravioles caseros de pollo y verdura',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1576000510.jpg',
    },
    {
        id: 93,
        category: 'pastas',
        title: 'Ravioles caseros de calabaza',
        description: '',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1576000638.jpg',
    },
    {
        id: 94,
        category: 'ensaladas',
        title: 'Ensalada 3 gustos',
        description: 'Ensalada de 3, 4 y hasta 5 gustos a elección.',
        price: 450,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482900774.jpg',
    },
    {
        id: 95,
        category: 'ensaladas',
        title: 'Ensalada capresse',
        description: 'Tomate, queso y albahaca.',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482883931.jpg',
    },
    {
        id: 96,
        category: 'ensaladas',
        title: 'Ensalada de rúcula',
        description: 'Rúcula, ajo y queso parmesado rayado.',
        price: 490,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482898327.jpg',
    },
    {
        id: 97,
        category: 'ensaladas',
        title: 'Ensalada cesar',
        description:
            'Lechuga, pan tostado, parmesano, pollo, oliva, pimienta negra y salsa cesar.',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482900360.jpg',
    },
    {
        id: 98,
        category: 'ensaladas',
        title: 'Ensalada completa',
        description:
            'Lechuga, tomate, zanahoria, huevo, choclo, jamón, palmito y ananá.',
        price: 590,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482898444.jpg',
    },
    {
        id: 99,
        category: 'ensaladas',
        title: 'Ensalada Don Boedo',
        description:
            'Lechuga, arroz, atún, apio, zanahoria, aros de cebolla, tomates cherry, huevo y perejil.',
        price: 580,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482905234.jpg',
    },
    {
        id: 100,
        category: 'tartas',
        title: 'Tarta de jamón y queso',
        description: '2 tartas por porción.',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212255.jpg',
    },
    {
        id: 101,
        category: 'tartas',
        title: 'Tarta de jamón, queso, tomate y huevo',
        description: '2 tartas por porción.',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480212255.jpg',
    },
    {
        id: 102,
        category: 'tartas',
        title: 'Tarta de verdura',
        description: '2 tartas por porción.',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207612.jpg',
    },
    {
        id: 103,
        category: 'tartas',
        title: 'Tarta vegetariana',
        description: '2 tartas por porción.',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204769.jpg',
    },
    {
        id: 104,
        category: 'tartas',
        title: 'Tarta de atún',
        description: '2 tartas por porción.',
        price: 600,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203714.jpg',
    },
    {
        id: 105,
        category: 'tartas',
        title: 'Tarta capresse',
        description: '2 tartas por porción.',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203724.jpg',
    },
    {
        id: 106,
        category: 'postres',
        title: 'Budín de pan',
        description: '',
        price: 190,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203834.jpg',
    },
    {
        id: 107,
        category: 'postres',
        title: 'Flan',
        description: '',
        price: 190,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207706.jpg',
    },
    {
        id: 108,
        category: 'postres',
        title: 'Tiramisú',
        description: '',
        price: 300,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480204879.jpg',
    },
    {
        id: 109,
        category: 'postres',
        title: 'Queso y dulce',
        description: '',
        price: 190,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207681.jpg',
    },
    {
        id: 110,
        category: 'gaseosas',
        title: 'Pepsi 500cc',
        description: '',
        price: 150,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476483740.jpg',
    },
    {
        id: 111,
        category: 'gaseosas',
        title: '7up 500cc',
        description: '',
        price: 150,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476491343.jpg',
    },
    {
        id: 112,
        category: 'gaseosas',
        title: 'Pepsi 1.5lt',
        description: 'Pepsi 1.5 litros. Botella no retornable.',
        price: 240,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476479280.jpg',
    },
    {
        id: 113,
        category: 'gaseosas',
        title: 'Pepsi Light 1.5lt',
        description: 'Pepsi Light 1.5 litros. Botella no retornable.',
        price: 240,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476479969.jpg',
    },
    {
        id: 114,
        category: 'gaseosas',
        title: 'Pepsi Black 1.5lt',
        description: 'Pepsi Black 1.5 litros. Botella no retornable.',
        price: 240,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476491219.jpg',
    },
    {
        id: 115,
        category: 'gaseosas',
        title: '7up 1.5lt',
        description: '7up 1.5 litros. Botella no retornable.',
        price: 240,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476483154.jpg',
    },
    {
        id: 116,
        category: 'gaseosas',
        title: 'Mirinda 1.5lt',
        description: 'Mirinda 1.5 litros. Botella no retornable.',
        price: 240,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476468889.jpg',
    },
    {
        id: 117,
        category: 'gaseosas',
        title: 'Paso de los Toros tónica 1.5lt',
        description:
            'Paso de los Toros tónica 1.5 litros. Botella no retornable.',
        price: 240,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476483293.jpg',
    },
    {
        id: 118,
        category: 'gaseosas',
        title: 'Paso de los Toros pomelo 1.5lt',
        description:
            'Paso de los Toros pomelo 1.5 litros. Botella no retornable.',
        price: 240,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482937112.jpg',
    },
    {
        id: 119,
        category: 'gaseosas',
        title: 'Paso de los Toros pomelo Light 1.5lt',
        description:
            'Paso de los Toros pomelo Light 1.5 litros. Botella no retornable.',
        price: 240,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1498859934.jpg',
    },
    {
        id: 120,
        category: 'cervezas',
        title: 'Brahma Lata 500cc',
        description: '',
        price: 180,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476498210.jpg',
    },
    {
        id: 121,
        category: 'cervezas',
        title: 'Stella Artois Lata 500cc',
        description: '',
        price: 200,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476489507.jpg',
    },
    {
        id: 122,
        category: 'cervezas',
        title: 'Corona 355cc',
        description: '',
        price: 260,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476498463.jpg',
    },
    {
        id: 123,
        category: 'cervezas',
        title: 'Corona 710cc',
        description: '',
        price: 380,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476510000.jpg',
    },
    {
        id: 124,
        category: 'cervezas',
        title: 'Stella Artois 1L',
        description: '',
        price: 380,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476498215.jpg',
    },
    {
        id: 125,
        category: 'cervezas',
        title: 'Quilmes 1L',
        description: '',
        price: 340,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478706476.jpg',
    },
    {
        id: 126,
        category: 'cervezas',
        title: 'Quilmes Stout 1L',
        description: '',
        price: 340,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478697717.jpg',
    },
    {
        id: 127,
        category: 'cervezas',
        title: 'Brahma 1L',
        description: '',
        price: 340,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476489601.jpg',
    },
    {
        id: 128,
        category: 'cervezas',
        title: 'Budweiser 1L',
        description: '',
        price: 340,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1476483844.jpg',
    },
    {
        id: 129,
        category: 'cervezas',
        title: 'Andes 1L',
        description: '',
        price: 360,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478706330.jpg',
    },
    {
        id: 130,
        category: 'cervezas',
        title: 'Andes Roja 1L',
        description: '',
        price: 360,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478706306.jpg',
    },
    {
        id: 131,
        category: 'cervezas',
        title: 'Andes Negra 1L',
        description: '',
        price: 360,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478696576.jpg',
    },
    {
        id: 132,
        category: 'cervezas',
        title: 'Patagonia 24.7 750cc',
        description: '',
        price: 380,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1479117548.jpg',
    },
    {
        id: 133,
        category: 'cervezas',
        title: 'Patagonia Amber 750cc',
        description: '',
        price: 380,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1479118690.jpg',
    },
    {
        id: 134,
        category: 'cervezas',
        title: 'Patagonia Weisse 750cc',
        description: '',
        price: 380,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1479117671.jpg',
    },
    {
        id: 135,
        category: 'cervezas',
        title: 'Patagonia Bohemian 750cc',
        description: '',
        price: 380,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1479117661.jpg',
    },
    {
        id: 136,
        category: 'cervezas',
        title: 'Malta Barba Roja 330cc sin alcohol',
        description: '',
        price: 250,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478681934.jpg',
    },

    {
        id: 137,
        category: 'vinos',
        title: 'Alaris Sauvignon Blanco 187cc',
        description: '',
        price: 150,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236647.jpg',
    },
    {
        id: 138,
        category: 'vinos',
        title: 'San Felipe Tinto 375cc',
        description: '',
        price: 250,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478681554.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Chamullo Malbec',
        description: '',
        price: 600,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1491413268.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Norton Mil Rosas Rosado',
        description: '',
        price: 400,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1491408846.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Los Arboles Dulce',
        description: '',
        price: 400,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478670053.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Norton Cosecha Tardía Blanco Dulce',
        description: '',
        price: 400,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478681066.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Latitud 33 Malbec',
        description: '',
        price: 600,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478636683.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Latitud 33 Cabernet Sauvignon',
        description: '',
        price: 450,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478644277.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Trumpeter Malbec 375cc',
        description: '',
        price: 500,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478630732.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Altos del Plata Malbec',
        description: '',
        price: 500,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478648514.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Trumpeter Malbec',
        description: '',
        price: 1200,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478644013.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Alamos Malbec',
        description: '',
        price: 700,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478681371.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Fond de Cave Malbec',
        description: '',
        price: 550,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478645380.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Altos del Plata Chardonnay',
        description: '',
        price: 700,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1491406608.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Valmont Blanco',
        description: '',
        price: 400,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478646796.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Rutini Malbec',
        description: '',
        price: 1500,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478646464.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Luigi Bosca Malbec',
        description: '',
        price: 100,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478645796.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Trumpeter Sauvignon Blanco',
        description: '',
        price: 700,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478659160.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Saint Felicien Malbec',
        description: '',
        price: 1000,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478648269.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Navarro Correas Colección Privada Malbec',
        description: '',
        price: 700,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478659688.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Escorihuela Gascon Malbec',
        description: '',
        price: 800,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478670113.jpg',
    },
    {
        id: 137,
        category: 'vinos',
        title: 'Nicasia Malbec',
        description: '',
        price: 1400,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1478644922.jpg',
    },
]

const getItems = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsFromAPI)
        }, 1000)
    })

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        getItems()
            .then(result =>
                setItem(result.find(item => item.id === parseInt(itemId)))
            )
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <>
            {loading ? (
                <LinearProgress color='secondary' />
            ) : (
                <ItemDetail item={item} stock={5} initial={1} />
            )}
        </>
    )
}
