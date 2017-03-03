export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 11,
      name: 'Basketball',
      heroImageUrl: 'http://v109.api-admin.fitivity-webservice.appspot.com/v1/images/6497719925342208'},
      { id: 12, name: 'Yoga' },
      { id: 13, name: 'Football' },
      { id: 14, name: 'Soccer' },
      { id: 15, name: 'Judo' },
      { id: 16, name: 'Swim' },
      { id: 17, name: 'Jump' },
      { id: 18, name: 'Muscle' },
      { id: 19, name: 'Flexibility' },
      { id: 20, name: 'Strength' }

    ];
    return { heroes };
  }
}
