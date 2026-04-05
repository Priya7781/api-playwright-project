const { test, expect } = require('@playwright/test');

const baseURL = 'http://localhost:3000';

let userId;

// CREATE
test('1.Create User', async ({ request }) => {
    const response = await request.post(`${baseURL}/users`, {
        data: {
            name: 'John',
            age: 25
        }
    });

    const body = await response.json();
    userId = body.id;

    console.log(userId);

    expect(response.status()).toBe(201);
    expect(body.name).toBe('John');
});

// GET
test('2.Get Users', async ({ request }) => {
    const response = await request.get(`${baseURL}/users`);
    const body = await response.json();
    console.log(body);

    expect(response.status()).toBe(200);
    expect(body.length).toBeGreaterThan(0);
});

// UPDATE
test('3. Update User', async ({ request }) => {
     // Replace with actual user ID from CREATE test
    const response = await request.put(`${baseURL}/users/${userId}`, {
        data: {
            name: 'Updated John'
        }
    });

    console.log(response);

    expect(response.status()).toBe(200);
});

// DELETE
test('4. Delete User', async ({ request }) => {
    const response = await request.delete(`${baseURL}/users/${userId}`);

    expect(response.status()).toBe(200);
});