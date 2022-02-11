//Datos falsos que seran sustituidos despues en la creacion de la API
const data = [
    {
        id: 0,
        destination: "Guadalajara",
        vuelos: [
            {
                id: 1,
                despegue: '08/02/2022 11:00:00',
                aterrizaje: '08/02/2022 12:00:00',
                price: 600
            }
            ,
            {
                id: 2,
                despegue: '08/02/2022 13:30:00',
                aterrizaje: '08/02/2022 14:30:00',
                price: 200
            },
            {
                id: 3,
                despegue: '08/02/2022 16:40:00',
                aterrizaje: '08/02/2022 17:40:00',
                price: 300
            }
        ]
    },
    {
        id: 1,
        destination: "Monterrey",
        vuelos: [
            {
                id: 1,
                despegue: '09/02/2022 11:00:00',
                aterrizaje: '09/02/2022 12:00:00',
                price: 800
            }
            ,
            {
                id: 2,
                despegue: '09/02/2022 13:30:00',
                aterrizaje: '09/02/2022 14:30:00',
                price: 400
            },
            {
                id: 3,
                despegue: '09/02/2022 16:40:00',
                aterrizaje: '09/02/2022 18:20:00',
                price: 100
            }
        ]
    },
    {
        id: 2,
        destination: "Ciudad de México",
        vuelos: [
            {
                id: 1,
                despegue: '10/02/2022 17:00:00',
                aterrizaje: '10/02/2022 19:00:00',
                price: 800
            }
            ,
            {
                id: 2,
                despegue: '10/02/2022 14:30:00',
                aterrizaje: '10/02/2022 16:30:00',
                price: 400
            },
            {
                id: 3,
                despegue: '10/02/2022 18:40:00',
                aterrizaje: '10/02/2022 20:10:00',
                price: 100
            }
        ]
    }
]

export default data