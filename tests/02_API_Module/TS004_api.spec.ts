/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: TS004_api.spec.ts
 * Description: Test Suite 004: Test cases for CRUD operations (Create, Read, Update, Delete).
 * Author: Hisyamil Ramble
 * Created: 20-Jan-2026
 */

import { test, expect } from '@playwright/test';
import { ApiClient } from '../../POM/005_api.client';

test.describe('Test Suite 004: API Testing', () => {
  let apiClient: ApiClient;

  // Initialize ApiClient instance before each test execution
  test.beforeEach(async ({ request }) => {
    apiClient = new ApiClient(request);
  });

  test('TC008: Create a new post', async () => {
    // Define data for the post
    const newPost = { 
      title: 'Candidate Name: Hisyamil Ramble',
      body: 'RYT Job Status: In Progress',
      userId: 1
    };
    // Perform the POST request
    const createResponse = await apiClient.createPost(newPost);
    // Validate the response
    expect(createResponse.status()).toBe(201);
    const createData = await createResponse.json();
    // Ensure the response matches the sent data
    expect(createData).toMatchObject(newPost);
    // Extract and validate the ID
    expect(createData.id).toBeDefined();
    expect(typeof createData.id).toBe('number');
    // Log the ID post created
    console.log(`Created post ID: ${createData.id}`);
    // Log the full response of the POST data
    console.log('Post data:', createData);

  });

  test('TC009: Read the post data', async () => {
    // Define data for the post
    const newPost = { 
      title: 'Candidate Name: Hisyamil Ramble',
      body: 'RYT Job Status: In Progress',
      userId: 1
    };
    // Perform the POST request
    const createResponse = await apiClient.createPost(newPost);
    // Log the ID post created
    const createData = await createResponse.json();
    console.log(`Created post ID: ${createData.id}`);
    // Perform the GET request
    const readResponse = await apiClient.getPost(createData.id);
    // Validate the response
    expect(readResponse.status()).toBe(200);
    // Verify the created data
    const readData = await readResponse.json();
    expect(readData).toEqual(createData);

    // Log the GET data
    console.log('Retrieved post data:', readData)

  });

  test('TC010: Update the post data', async () => {
    // Define data for the post
    const newPost = { 
      title: 'Candidate Name: Hisyamil Ramble',
      body: 'RYT Job Status: In Progress',
      userId: 1
    };
    // Perform the POST request
    const createResponse = await apiClient.createPost(newPost);
    // Log the ID post created
    const createData = await createResponse.json();
    console.log(`Created post ID: ${createData.id}`);        
    // Define modify data
    const updateBody = {
      title: 'Candidate Name: Hisyamil Ramble',
      body: 'RYT Job Status: Accepted' 
    };
    const postId = createData.id;
    // Perform the PATCH request
    const updateResponse = await apiClient.updatePost(postId, updateBody);
    // Validate the response
    expect(updateResponse.status()).toBe(200);
    // Verify the updated data
    const updateData = await updateResponse.json();
    // Verify unchanged fields remained thes same
    expect(updateData.title).toBe('Candidate Name: Hisyamil Ramble');
    // Verify updated field changes correctly
    expect(updateData.body).toBe('RYT Job Status: Accepted');

    // Log the PATCH data
    console.log('Retrieved udpated data:', updateData);
  });

  test('TC011: Delete the post data', async () => {
    // Define data for the post
    const newPost = { 
      title: 'Candidate Name: Hisyamil Ramble',
      body: 'RYT Job Status: Accepted',
      userId: 1
    };
    // Perform the POST request
    const createResponse = await apiClient.createPost(newPost);
    // Log the ID post created
    const createData = await createResponse.json();
    console.log(`Created post ID: ${createData.id}`);
    
    // Perform the DELETE request
    const deleteResponse = await apiClient.deletePost(createData.id);
    // Validate the response
    expect(deleteResponse.status()).toBe(200);
    // Verify deletion of the created post
    const verifyDeleteResponse = await apiClient.getPost(createData.id);
    // Validate the deletion
    expect(verifyDeleteResponse.status()).toBe(404);
    const deleteData = await deleteResponse.json();

    // Log will shows no data since being deleted
    console.log('Deleted data:', deleteData);
  });
  
});