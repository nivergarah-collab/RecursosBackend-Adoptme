import { expect } from 'chai';
import request from 'supertest';

import app from '../src/app.js';
import { resetServices, setServicesForTesting } from '../src/services/index.js';

function createFakeServices() {
  const ids = {
    adoption1: '507f1f77bcf86cd799439011',
    adoptionMissing: '507f1f77bcf86cd799439012',
    user1: '507f1f77bcf86cd799439013',
    userMissing: '507f1f77bcf86cd799439014',
    pet1: '507f1f77bcf86cd799439015',
    pet2: '507f1f77bcf86cd799439016',
    petMissing: '507f1f77bcf86cd799439017'
  };
  const adoptions = [
    { _id: ids.adoption1, owner: ids.user1, pet: ids.pet1 }
  ];
  const users = [
    { _id: ids.user1, first_name: 'Ada', pets: [] }
  ];
  const pets = [
    { _id: ids.pet1, name: 'Firulais', adopted: false, owner: null },
    { _id: ids.pet2, name: 'Mishi', adopted: true, owner: 'user-9' }
  ];

  return {
    ids,
    usersService: {
      async getUserById(id) {
        return users.find((user) => user._id === id) ?? null;
      },
      async update(id, doc) {
        const user = users.find((item) => item._id === id);
        if (!user) {
          return null;
        }

        Object.assign(user, doc);
        return user;
      }
    },
    petsService: {
      async getBy(params) {
        return pets.find((pet) => pet._id === params._id) ?? null;
      },
      async update(id, doc) {
        const pet = pets.find((item) => item._id === id);
        if (!pet) {
          return null;
        }

        Object.assign(pet, doc);
        return pet;
      }
    },
    adoptionsService: {
      async getAll() {
        return adoptions;
      },
      async getBy(params) {
        return adoptions.find((adoption) => adoption._id === params._id) ?? null;
      },
      async create(doc) {
        const newAdoption = {
          _id: `adoption-${adoptions.length + 1}`,
          ...doc
        };

        adoptions.push(newAdoption);
        return newAdoption;
      }
    }
  };
}

describe('Adoption router', function () {
  beforeEach(function () {
    const fakeServices = createFakeServices();
    this.ids = fakeServices.ids;
    setServicesForTesting(fakeServices);
  });

  afterEach(function () {
    resetServices();
  });

  it('GET /api/adoptions returns all adoptions', async function () {
    const response = await request(app).get('/api/adoptions');

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('success');
    expect(response.body.payload).to.be.an('array').with.lengthOf(1);
    expect(response.body.payload[0]._id).to.equal(this.ids.adoption1);
  });

  it('GET /api/adoptions/:aid returns one adoption', async function () {
    const response = await request(app).get(`/api/adoptions/${this.ids.adoption1}`);

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('success');
    expect(response.body.payload._id).to.equal(this.ids.adoption1);
  });

  it('GET /api/adoptions/:aid returns 404 when the adoption does not exist', async function () {
    const response = await request(app).get(`/api/adoptions/${this.ids.adoptionMissing}`);

    expect(response.status).to.equal(404);
    expect(response.body.status).to.equal('error');
    expect(response.body.error).to.equal('Adoption not found');
  });

  it('GET /api/adoptions/:aid returns 400 when the id is invalid', async function () {
    const response = await request(app).get('/api/adoptions/not-a-valid-id');

    expect(response.status).to.equal(400);
    expect(response.body.status).to.equal('error');
    expect(response.body.error).to.equal('Invalid aid');
  });

  it('POST /api/adoptions/:uid/:pid returns 404 when the user does not exist', async function () {
    const response = await request(app).post(`/api/adoptions/${this.ids.userMissing}/${this.ids.pet1}`);

    expect(response.status).to.equal(404);
    expect(response.body.status).to.equal('error');
    expect(response.body.error).to.equal('user Not found');
  });

  it('POST /api/adoptions/:uid/:pid returns 404 when the pet does not exist', async function () {
    const response = await request(app).post(`/api/adoptions/${this.ids.user1}/${this.ids.petMissing}`);

    expect(response.status).to.equal(404);
    expect(response.body.status).to.equal('error');
    expect(response.body.error).to.equal('Pet not found');
  });

  it('POST /api/adoptions/:uid/:pid returns 400 when the pet is already adopted', async function () {
    const response = await request(app).post(`/api/adoptions/${this.ids.user1}/${this.ids.pet2}`);

    expect(response.status).to.equal(400);
    expect(response.body.status).to.equal('error');
    expect(response.body.error).to.equal('Pet is already adopted');
  });

  it('POST /api/adoptions/:uid/:pid creates an adoption', async function () {
    const response = await request(app).post(`/api/adoptions/${this.ids.user1}/${this.ids.pet1}`);

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('success');
    expect(response.body.message).to.equal('Pet adopted');
  });
});
