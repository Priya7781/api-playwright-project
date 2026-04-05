import {test, expect} from '@playwright/test';

test.skip('Simple get request', async ({request}) => {
    const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
    const body = await response.json();
    console.log(body);
    expect(body.tags[0]).toBe('Test');
});

test('Simple POST request', async ({request}) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/',{
        headers:{
            Authorization:'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1MTQwMH0sImlhdCI6MTc3NTM5MjA3MCwiZXhwIjoxNzgwNTc2MDcwfQ.2UR2kQv1RJC3ccNBScTmsN_w_ys5f4Ujvx_8ULF6qoY'
        },
        data:{article: {title: "test test", description: "abcd", body: "abcd", tagList: []}}
    });
    const body = await response.json();
    console.log(body);
});

