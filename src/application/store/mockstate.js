const mockState = {
    drivers: {
      hamilton: {
        driverId: 'hamilton',
        permanentNumber: '44',
        code: 'HAM',
        url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
        givenName: 'Lewis',
        familyName: 'Hamilton',
        dateOfBirth: '1985-01-07',
        nationality: 'British',
        results: {
          points: '381',
          wins: '10'
        },
        isWorldChampion: true
      },
      vettel: {
        driverId: 'vettel',
        permanentNumber: '5',
        code: 'VET',
        url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
        givenName: 'Sebastian',
        familyName: 'Vettel',
        dateOfBirth: '1987-07-03',
        nationality: 'German',
        isWorldChampion: false
      },
      rosberg: {
        driverId: 'rosberg',
        permanentNumber: '6',
        code: 'ROS',
        url: 'http://en.wikipedia.org/wiki/Nico_Rosberg',
        givenName: 'Nico',
        familyName: 'Rosberg',
        dateOfBirth: '1985-06-27',
        nationality: 'German',
        isWorldChampion: false
      }
    },
    seasons: {
      '2015': {
        season: '2015',
        round: '19',
        DriverStandings: [
          '1-2015'
        ],
        position: '1',
        Races: [
          '2015_Australian_Grand Prix',
          '2015_Malaysian_Grand Prix',
          '2015_Chinese_Grand Prix',
          '2015_Bahrain_Grand Prix',
          '2015_Spanish_Grand Prix',
          '2015_Monaco_Grand Prix',
          '2015_Canadian_Grand Prix',
          '2015_Austrian_Grand Prix',
          '2015_British_Grand Prix',
          '2015_Hungarian_Grand Prix',
          '2015_Belgian_Grand Prix',
          '2015_Italian_Grand Prix',
          '2015_Singapore_Grand Prix',
          '2015_Japanese_Grand Prix',
          '2015_Russian_Grand Prix',
          '2015_United_States Grand Prix',
          '2015_Mexican_Grand Prix',
          '2015_Brazilian_Grand Prix',
          '2015_Abu_Dhabi Grand Prix'
        ]
      }
    },
    races: {
      '2015_Australian_Grand Prix': {
        season: '2015',
        round: '1',
        url: 'http://en.wikipedia.org/wiki/2015_Australian_Grand_Prix',
        raceName: 'Australian Grand Prix',
        Circuit: {
          circuitId: 'albert_park',
          url: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
          circuitName: 'Albert Park Grand Prix Circuit',
          Location: {
            lat: '-37.8497',
            'long': '144.968',
            locality: 'Melbourne',
            country: 'Australia'
          }
        },
        date: '2015-03-15',
        time: '05:00:00Z',
        Results: [
          '1-Australian_Grand Prix'
        ]
      },
      '2015_Malaysian_Grand Prix': {
        season: '2015',
        round: '2',
        url: 'http://en.wikipedia.org/wiki/2015_Malaysian_Grand_Prix',
        raceName: 'Malaysian Grand Prix',
        Circuit: {
          circuitId: 'sepang',
          url: 'http://en.wikipedia.org/wiki/Sepang_International_Circuit',
          circuitName: 'Sepang International Circuit',
          Location: {
            lat: '2.76083',
            'long': '101.738',
            locality: 'Kuala Lumpur',
            country: 'Malaysia'
          }
        },
        date: '2015-03-29',
        time: '07:00:00Z',
        Results: [
          '1-Malaysian_Grand Prix'
        ]
      },
      '2015_Chinese_Grand Prix': {
        season: '2015',
        round: '3',
        url: 'http://en.wikipedia.org/wiki/2015_Chinese_Grand_Prix',
        raceName: 'Chinese Grand Prix',
        Circuit: {
          circuitId: 'shanghai',
          url: 'http://en.wikipedia.org/wiki/Shanghai_International_Circuit',
          circuitName: 'Shanghai International Circuit',
          Location: {
            lat: '31.3389',
            'long': '121.22',
            locality: 'Shanghai',
            country: 'China'
          }
        },
        date: '2015-04-12',
        time: '06:00:00Z',
        Results: [
          '1-Chinese_Grand Prix'
        ]
      },
      '2015_Bahrain_Grand Prix': {
        season: '2015',
        round: '4',
        url: 'http://en.wikipedia.org/wiki/2015_Bahrain_Grand_Prix',
        raceName: 'Bahrain Grand Prix',
        Circuit: {
          circuitId: 'bahrain',
          url: 'http://en.wikipedia.org/wiki/Bahrain_International_Circuit',
          circuitName: 'Bahrain International Circuit',
          Location: {
            lat: '26.0325',
            'long': '50.5106',
            locality: 'Sakhir',
            country: 'Bahrain'
          }
        },
        date: '2015-04-19',
        time: '15:00:00Z',
        Results: [
          '1-Bahrain_Grand Prix'
        ]
      },
      '2015_Spanish_Grand Prix': {
        season: '2015',
        round: '5',
        url: 'http://en.wikipedia.org/wiki/2015_Spanish_Grand_Prix',
        raceName: 'Spanish Grand Prix',
        Circuit: {
          circuitId: 'catalunya',
          url: 'http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya',
          circuitName: 'Circuit de Barcelona-Catalunya',
          Location: {
            lat: '41.57',
            'long': '2.26111',
            locality: 'Montmeló',
            country: 'Spain'
          }
        },
        date: '2015-05-10',
        time: '12:00:00Z',
        Results: [
          '1-Spanish_Grand Prix'
        ]
      },
      '2015_Monaco_Grand Prix': {
        season: '2015',
        round: '6',
        url: 'http://en.wikipedia.org/wiki/2015_Monaco_Grand_Prix',
        raceName: 'Monaco Grand Prix',
        Circuit: {
          circuitId: 'monaco',
          url: 'http://en.wikipedia.org/wiki/Circuit_de_Monaco',
          circuitName: 'Circuit de Monaco',
          Location: {
            lat: '43.7347',
            'long': '7.42056',
            locality: 'Monte-Carlo',
            country: 'Monaco'
          }
        },
        date: '2015-05-24',
        time: '12:00:00Z',
        Results: [
          '1-Monaco_Grand Prix'
        ]
      },
      '2015_Canadian_Grand Prix': {
        season: '2015',
        round: '7',
        url: 'http://en.wikipedia.org/wiki/2015_Canadian_Grand_Prix',
        raceName: 'Canadian Grand Prix',
        Circuit: {
          circuitId: 'villeneuve',
          url: 'http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve',
          circuitName: 'Circuit Gilles Villeneuve',
          Location: {
            lat: '45.5',
            'long': '-73.5228',
            locality: 'Montreal',
            country: 'Canada'
          }
        },
        date: '2015-06-07',
        time: '18:00:00Z',
        Results: [
          '1-Canadian_Grand Prix'
        ]
      },
      '2015_Austrian_Grand Prix': {
        season: '2015',
        round: '8',
        url: 'http://en.wikipedia.org/wiki/2015_Austrian_Grand_Prix',
        raceName: 'Austrian Grand Prix',
        Circuit: {
          circuitId: 'red_bull_ring',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Ring',
          circuitName: 'Red Bull Ring',
          Location: {
            lat: '47.2197',
            'long': '14.7647',
            locality: 'Spielburg',
            country: 'Austria'
          }
        },
        date: '2015-06-21',
        time: '12:00:00Z',
        Results: [
          '1-Austrian_Grand Prix'
        ]
      },
      '2015_British_Grand Prix': {
        season: '2015',
        round: '9',
        url: 'http://en.wikipedia.org/wiki/2015_British_Grand_Prix',
        raceName: 'British Grand Prix',
        Circuit: {
          circuitId: 'silverstone',
          url: 'http://en.wikipedia.org/wiki/Silverstone_Circuit',
          circuitName: 'Silverstone Circuit',
          Location: {
            lat: '52.0786',
            'long': '-1.01694',
            locality: 'Silverstone',
            country: 'UK'
          }
        },
        date: '2015-07-05',
        time: '12:00:00Z',
        Results: [
          '1-British_Grand Prix'
        ]
      },
      '2015_Hungarian_Grand Prix': {
        season: '2015',
        round: '10',
        url: 'http://en.wikipedia.org/wiki/2015_Hungarian_Grand_Prix',
        raceName: 'Hungarian Grand Prix',
        Circuit: {
          circuitId: 'hungaroring',
          url: 'http://en.wikipedia.org/wiki/Hungaroring',
          circuitName: 'Hungaroring',
          Location: {
            lat: '47.5789',
            'long': '19.2486',
            locality: 'Budapest',
            country: 'Hungary'
          }
        },
        date: '2015-07-26',
        time: '12:00:00Z',
        Results: [
          '1-Hungarian_Grand Prix'
        ]
      },
      '2015_Belgian_Grand Prix': {
        season: '2015',
        round: '11',
        url: 'http://en.wikipedia.org/wiki/2015_Belgian_Grand_Prix',
        raceName: 'Belgian Grand Prix',
        Circuit: {
          circuitId: 'spa',
          url: 'http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps',
          circuitName: 'Circuit de Spa-Francorchamps',
          Location: {
            lat: '50.4372',
            'long': '5.97139',
            locality: 'Spa',
            country: 'Belgium'
          }
        },
        date: '2015-08-23',
        time: '12:00:00Z',
        Results: [
          '1-Belgian_Grand Prix'
        ]
      },
      '2015_Italian_Grand Prix': {
        season: '2015',
        round: '12',
        url: 'http://en.wikipedia.org/wiki/2015_Italian_Grand_Prix',
        raceName: 'Italian Grand Prix',
        Circuit: {
          circuitId: 'monza',
          url: 'http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza',
          circuitName: 'Autodromo Nazionale di Monza',
          Location: {
            lat: '45.6156',
            'long': '9.28111',
            locality: 'Monza',
            country: 'Italy'
          }
        },
        date: '2015-09-06',
        time: '12:00:00Z',
        Results: [
          '1-Italian_Grand Prix'
        ]
      },
      '2015_Singapore_Grand Prix': {
        season: '2015',
        round: '13',
        url: 'https://en.wikipedia.org/wiki/2015_Singapore_Grand_Prix',
        raceName: 'Singapore Grand Prix',
        Circuit: {
          circuitId: 'marina_bay',
          url: 'http://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit',
          circuitName: 'Marina Bay Street Circuit',
          Location: {
            lat: '1.2914',
            'long': '103.864',
            locality: 'Marina Bay',
            country: 'Singapore'
          }
        },
        date: '2015-09-20',
        time: '12:00:00Z',
        Results: [
          '1-Singapore_Grand Prix'
        ]
      },
      '2015_Japanese_Grand Prix': {
        season: '2015',
        round: '14',
        url: 'https://en.wikipedia.org/wiki/2015_Japanese_Grand_Prix',
        raceName: 'Japanese Grand Prix',
        Circuit: {
          circuitId: 'suzuka',
          url: 'http://en.wikipedia.org/wiki/Suzuka_Circuit',
          circuitName: 'Suzuka Circuit',
          Location: {
            lat: '34.8431',
            'long': '136.541',
            locality: 'Suzuka',
            country: 'Japan'
          }
        },
        date: '2015-09-27',
        time: '05:00:00Z',
        Results: [
          '1-Japanese_Grand Prix'
        ]
      },
      '2015_Russian_Grand Prix': {
        season: '2015',
        round: '15',
        url: 'https://en.wikipedia.org/wiki/2015_Russian_Grand_Prix',
        raceName: 'Russian Grand Prix',
        Circuit: {
          circuitId: 'sochi',
          url: 'http://en.wikipedia.org/wiki/Sochi_Autodrom',
          circuitName: 'Sochi Autodrom',
          Location: {
            lat: '43.4057',
            'long': '39.9578',
            locality: 'Sochi',
            country: 'Russia'
          }
        },
        date: '2015-10-11',
        time: '11:00:00Z',
        Results: [
          '1-Russian_Grand Prix'
        ]
      },
      '2015_United_States Grand Prix': {
        season: '2015',
        round: '16',
        url: 'https://en.wikipedia.org/wiki/2015_United_States_Grand_Prix',
        raceName: 'United States Grand Prix',
        Circuit: {
          circuitId: 'americas',
          url: 'http://en.wikipedia.org/wiki/Circuit_of_the_Americas',
          circuitName: 'Circuit of the Americas',
          Location: {
            lat: '30.1328',
            'long': '-97.6411',
            locality: 'Austin',
            country: 'USA'
          }
        },
        date: '2015-10-25',
        time: '19:00:00Z',
        Results: [
          '1-United_States Grand Prix'
        ]
      },
      '2015_Mexican_Grand Prix': {
        season: '2015',
        round: '17',
        url: 'https://en.wikipedia.org/wiki/2015_Mexican_Grand_Prix',
        raceName: 'Mexican Grand Prix',
        Circuit: {
          circuitId: 'rodriguez',
          url: 'http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez',
          circuitName: 'Autódromo Hermanos Rodríguez',
          Location: {
            lat: '19.4042',
            'long': '-99.0907',
            locality: 'Mexico City',
            country: 'Mexico'
          }
        },
        date: '2015-11-01',
        time: '19:00:00Z',
        Results: [
          '1-Mexican_Grand Prix'
        ]
      },
      '2015_Brazilian_Grand Prix': {
        season: '2015',
        round: '18',
        url: 'https://en.wikipedia.org/wiki/2015_Brazilian_Grand_Prix',
        raceName: 'Brazilian Grand Prix',
        Circuit: {
          circuitId: 'interlagos',
          url: 'http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace',
          circuitName: 'Autódromo José Carlos Pace',
          Location: {
            lat: '-23.7036',
            'long': '-46.6997',
            locality: 'São Paulo',
            country: 'Brazil'
          }
        },
        date: '2015-11-15',
        time: '16:00:00Z',
        Results: [
          '1-Brazilian_Grand Prix'
        ]
      },
      '2015_Abu_Dhabi Grand Prix': {
        season: '2015',
        round: '19',
        url: 'https://en.wikipedia.org/wiki/2015_Abu_Dhabi_Grand_Prix',
        raceName: 'Abu Dhabi Grand Prix',
        Circuit: {
          circuitId: 'yas_marina',
          url: 'http://en.wikipedia.org/wiki/Yas_Marina_Circuit',
          circuitName: 'Yas Marina Circuit',
          Location: {
            lat: '24.4672',
            'long': '54.6031',
            locality: 'Abu Dhabi',
            country: 'UAE'
          }
        },
        date: '2015-11-29',
        time: '13:00:00Z',
        Results: [
          '1-Abu_Dhabi Grand Prix'
        ]
      }
    },
    standings: {
      '1-2015': {
        position: '1',
        positionText: '1',
        points: '381',
        wins: '10',
        Driver: 'hamilton',
        Constructors: [
          'mercedes'
        ]
      }
    },
    raceResults: {
      '1-Australian_Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '1',
        laps: '58',
        status: 'Finished',
        Time: {
          millis: '5514067',
          time: '1:31:54.067'
        },
        FastestLap: {
          rank: '1',
          lap: '50',
          Time: {
            time: '1:30.945'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '209.915'
          }
        }
      },
      '1-Malaysian_Grand Prix': {
        number: '5',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'vettel',
        Constructor: 'ferrari',
        grid: '2',
        laps: '56',
        status: 'Finished',
        Time: {
          millis: '6065793',
          time: '1:41:05.793'
        },
        FastestLap: {
          rank: '3',
          lap: '46',
          Time: {
            time: '1:43.648'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '193.501'
          }
        }
      },
      '1-Chinese_Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '1',
        laps: '56',
        status: 'Finished',
        Time: {
          millis: '5982008',
          time: '1:39:42.008'
        },
        FastestLap: {
          rank: '1',
          lap: '31',
          Time: {
            time: '1:42.208'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '191.996'
          }
        }
      },
      '1-Bahrain_Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '1',
        laps: '57',
        status: 'Finished',
        Time: {
          millis: '5705809',
          time: '1:35:05.809'
        },
        FastestLap: {
          rank: '5',
          lap: '38',
          Time: {
            time: '1:37.857'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '199.098'
          }
        }
      },
      '1-Spanish_Grand Prix': {
        number: '6',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'rosberg',
        Constructor: 'mercedes',
        grid: '1',
        laps: '66',
        status: 'Finished',
        Time: {
          millis: '6072555',
          time: '1:41:12.555'
        },
        FastestLap: {
          rank: '2',
          lap: '53',
          Time: {
            time: '1:29.109'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '188.061'
          }
        }
      },
      '1-Monaco_Grand Prix': {
        number: '6',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'rosberg',
        Constructor: 'mercedes',
        grid: '2',
        laps: '78',
        status: 'Finished',
        Time: {
          millis: '6558420',
          time: '1:49:18.420'
        },
        FastestLap: {
          rank: '2',
          lap: '76',
          Time: {
            time: '1:18.599'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '152.841'
          }
        }
      },
      '1-Canadian_Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '1',
        laps: '70',
        status: 'Finished',
        Time: {
          millis: '5513145',
          time: '1:31:53.145'
        },
        FastestLap: {
          rank: '3',
          lap: '64',
          Time: {
            time: '1:17.472'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '202.648'
          }
        }
      },
      '1-Austrian_Grand Prix': {
        number: '6',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'rosberg',
        Constructor: 'mercedes',
        grid: '2',
        laps: '71',
        status: 'Finished',
        Time: {
          millis: '5416930',
          time: '1:30:16.930'
        },
        FastestLap: {
          rank: '1',
          lap: '35',
          Time: {
            time: '1:11.235'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '218.622'
          }
        }
      },
      '1-British_Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '1',
        laps: '52',
        status: 'Finished',
        Time: {
          millis: '5487729',
          time: '1:31:27.729'
        },
        FastestLap: {
          rank: '1',
          lap: '29',
          Time: {
            time: '1:37.093'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '218.425'
          }
        }
      },
      '1-Hungarian_Grand Prix': {
        number: '5',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'vettel',
        Constructor: 'ferrari',
        grid: '3',
        laps: '69',
        status: 'Finished',
        Time: {
          millis: '6369985',
          time: '1:46:09.985'
        },
        FastestLap: {
          rank: '5',
          lap: '63',
          Time: {
            time: '1:26.772'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '181.759'
          }
        }
      },
      '1-Belgian_Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '1',
        laps: '43',
        status: 'Finished',
        Time: {
          millis: '5020387',
          time: '1:23:40.387'
        },
        FastestLap: {
          rank: '2',
          lap: '34',
          Time: {
            time: '1:52.504'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '224.120'
          }
        }
      },
      '1-Italian_Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '1',
        laps: '53',
        status: 'Finished',
        Time: {
          millis: '4680688',
          time: '1:18:00.688'
        },
        FastestLap: {
          rank: '1',
          lap: '48',
          Time: {
            time: '1:26.672'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '240.617'
          }
        }
      },
      '1-Singapore_Grand Prix': {
        number: '5',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'vettel',
        Constructor: 'ferrari',
        grid: '1',
        laps: '61',
        status: 'Finished',
        Time: {
          millis: '7282118',
          time: '2:01:22.118'
        },
        FastestLap: {
          rank: '2',
          lap: '53',
          Time: {
            time: '1:50.069'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '165.659'
          }
        }
      },
      '1-Japanese_Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '2',
        laps: '53',
        status: 'Finished',
        FastestLap: {
          rank: '1',
          lap: '33',
          Time: {
            time: '1:36.145'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '217.434'
          }
        }
      },
      '1-Russian_Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '2',
        laps: '53',
        status: 'Finished',
        Time: {
          millis: '5831024',
          time: '1:37:11.024'
        },
        FastestLap: {
          rank: '3',
          lap: '44',
          Time: {
            time: '1:40.573'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '209.328'
          }
        }
      },
      '1-United_States Grand Prix': {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'hamilton',
        Constructor: 'mercedes',
        grid: '2',
        laps: '56',
        status: 'Finished',
        Time: {
          millis: '6652703',
          time: '1:50:52.703'
        },
        FastestLap: {
          rank: '2',
          lap: '48',
          Time: {
            time: '1:40.738'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '197.014'
          }
        }
      },
      '1-Mexican_Grand Prix': {
        number: '6',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'rosberg',
        Constructor: 'mercedes',
        grid: '1',
        laps: '71',
        status: 'Finished',
        Time: {
          millis: '6155038',
          time: '1:42:35.038'
        },
        FastestLap: {
          rank: '1',
          lap: '67',
          Time: {
            time: '1:20.521'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '192.426'
          }
        }
      },
      '1-Brazilian_Grand Prix': {
        number: '6',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'rosberg',
        Constructor: 'mercedes',
        grid: '1',
        laps: '71',
        status: 'Finished',
        Time: {
          millis: '5469090',
          time: '1:31:09.090'
        },
        FastestLap: {
          rank: '2',
          lap: '57',
          Time: {
            time: '1:14.957'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '206.950'
          }
        }
      },
      '1-Abu_Dhabi Grand Prix': {
        number: '6',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: 'rosberg',
        Constructor: 'mercedes',
        grid: '1',
        laps: '55',
        status: 'Finished',
        Time: {
          millis: '5910175',
          time: '1:38:30.175'
        },
        FastestLap: {
          rank: '5',
          lap: '37',
          Time: {
            time: '1:45.356'
          },
          AverageSpeed: {
            units: 'kph',
            speed: '189.779'
          }
        }
      }
    },
    queryOpts: {
      seasons: [
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015
      ],
      selectedSeasons: {
        start: 2005,
        end: 2015
      },
      activeSeason: '2015'
    },
    busyState: {
      loadingSeasons: false,
      loadingRaces: false,
      loadingWorldChamp: false
    }
  };

export default mockState;