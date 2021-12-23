import frisby from 'frisby';
import { MongoClient } from 'mongodb';

const mongoDburl = 'mongodb://localhost:27017/Cookmaster';
const url = 'http://localhost:3000';

describe('1 - Crie um endpoint para cadastro de usuários ', () => {
  let connection: any;
  let db: any;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDburl);
    db = connection.db('Cookmaster');
  });

  beforeEach(async () => {
    await db.collection('users').deleteMany({});
    await db.collection('recipes').deleteMany({});
    const users = {
      name: 'admin',
      email: 'root@email.com',
      password: 'admin',
      role: 'admin'
    }
    await db.collection('users').insertOne(users);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Será validaddo que o campo "name" é obrigatório', async () => {
    await frisby
      .post(`${url}/users/`,
        {
          email: 'erickjaquin@gmail.com',
          password: '12345678',
        })
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Invalid entries. Try again.');
      });
  });
})