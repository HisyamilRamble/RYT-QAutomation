/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: 005_api.client.ts
 * Description: This file defines the Page Object Model (POM) for the API Module.
 * Author: Hisyamil Ramble
 * Created: 20-Jan-2026
 */

import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  private request: APIRequestContext;
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createPost(data: any) {
    return this.request.post(`${this.baseUrl}/posts`, { data });
  }

  async getPost(id: number) {
    return this.request.get(`${this.baseUrl}/posts/${id}`);
  }

  async updatePost(id: number, data: any) {
    return this.request.patch(`${this.baseUrl}/posts/${id}`, { data });
  }

  async deletePost(id: number) {
    return this.request.delete(`${this.baseUrl}/posts/${id}`);
  }
}