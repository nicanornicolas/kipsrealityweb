# RentFlow360 API Documentation

**Version:** 6.0
**Date:** March 4, 2026
**Status:** Production Ready - Multi-Payment Gateway Integration Complete

---

## Table of Contents

1. [Overview](#1-overview)
2. [Technology Stack](#2-technology-stack)
3. [Authentication APIs](#3-authentication-apis)
4. [Payment APIs](#4-payment-apis)
5. [Stripe & Plaid Integration](#5-stripe--plaid-integration)
6. [Paystack & M-Pesa Integration](#6-paystack--m-pesa-integration)
7. [Invoice APIs](#7-invoice-apis)
8. [Financial APIs](#8-financial-apis)
9. [Property Management APIs](#9-property-management-apis)
10. [Lease Management APIs](#10-lease-management-apis)
11. [Tenant Application APIs](#11-tenant-application-apis)
12. [Utility Management APIs](#12-utility-management-apis)
13. [Maintenance APIs](#13-maintenance-apis)
14. [Document Signing APIs](#14-document-signing-apis)
15. [Listing Marketplace APIs](#15-listing-marketplace-apis)
16. [Dashboard Analytics APIs](#16-dashboard-analytics-apis)
17. [Webhooks](#17-webhooks)
18. [Security & Encryption](#18-security--encryption)
19. [Error Handling](#19-error-handling)

---

## 1. Overview

RentFlow360 is a comprehensive property rental management platform with multi-region payment processing capabilities. The system supports:

- **USA Market**: Stripe (card payments), Plaid (bank verification), ACH transfers
- **Africa Market**: Paystack (Nigeria, Ghana), M-Pesa (Kenya)
- **Security**: SSN encryption (AES-256-GCM), JWT authentication, role-based access

### API Statistics

- **Total API Endpoints**: 175
- **Database Models**: 79
- **Prisma Schema Lines**: 1,727

### Base URL

```
Production: https://api.rentflow360.com
Development: http://localhost:3000
```

### Authentication

All protected endpoints require JWT Bearer token authentication:

```
Authorization: Bearer <your_jwt_token>
```

---

## 2. Technology Stack

### Core Technologies

| Technology | Version | Purpose                         |
| ---------- | ------- | ------------------------------- |
| Next.js    | 16.1.6  | React framework with App Router |
| React      | 19.1.0  | UI library                      |
| TypeScript | 5.9.3   | Type safety                     |
| Prisma     | 6.19.2  | Database ORM                    |
| MySQL      | 8.0+    | Production database             |

### Payment Processing

| Service  | Version | Purpose                   |
| -------- | ------- | ------------------------- |
| Stripe   | 20.3.1  | Card & ACH payments (USA) |
| Plaid    | 41.1.0  | Bank verification (USA)   |
| Paystack | -       | Africa payments           |
| M-Pesa   | -       | Kenya mobile money        |

- #### **1.3.2 Request Path Parameters**

| Library      | Version | Purpose            |
| ------------ | ------- | ------------------ |
| bcryptjs     | 3.0.2   | Password hashing   |
| jsonwebtoken | 9.0.2   | JWT authentication |
| Zod          | 4.3.6   | Runtime validation |

---

## 3. Authentication APIs

### 3.1 Login

**POST** `/api/auth/login`

Authenticate user and receive JWT tokens.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (200):**

```json
{
  "success": true,
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "PROPERTY_MANAGER"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

### 3.2 Register

**POST** `/api/auth/register`

Create new user account.

**Request Body:**

```json
{
  "email": "newuser@example.com",
  "password": "securepassword123",
  "firstName": "Jane",
  "lastName": "Smith",
  "role": "TENANT",
  "phone": "+254712345678"
}
```

### 3.3 Refresh Token

**POST** `/api/auth/refresh`

Refresh expired access token.

**Request Body:**

```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response (200):**

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "expiresAt": 1735689600000
}
```

### 3.4 Get Current User

**GET** `/api/auth/me`

Get authenticated user profile.

**Headers:**

```
Authorization: Bearer <access_token>
```

**Response (200):**

```json
{
  "id": "user_123",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+254712345678",
  "role": "PROPERTY_MANAGER",
  "organizationId": "org_456"
}
```

### 3.5 Verify Email

**POST** `/api/auth/verify-email`

Verify user email address.

**Request Body:**

```json
{
  "token": "verification_token_here"
}
```

### 3.6 Forgot Password

**POST** `/api/auth/forgot-password`

Request password reset.

**Request Body:**

```json
{
  "email": "user@example.com"
}
```

### 3.7 Reset Password

**POST** `/api/auth/reset-password`

Reset password using token.

**Request Body:**

```json
{
  "token": "reset_token_here",
  "newPassword": "newsecurepassword123"
}
```

### 3.8 Two-Factor Authentication

**POST** `/api/auth/2fa/toggle`

Enable or disable 2FA.

**Request Body:**

```json
{
  "enabled": true
}
```

**POST** `/api/auth/2fa/send`

Send 2FA code to user.

**Request Body:**

```json
{
  "userId": "user_123"
}
```

**POST** `/api/auth/2fa/verify`

Verify 2FA code.

**Request Body:**

```json
{
  "userId": "user_123",
  "code": "123456"
}
```

---

## 4. Payment APIs

### 4.1 Initialize Payment

**POST** `/api/payments/initialize`

Initialize payment with automatic gateway selection based on region.

**Request Body:**

```json
{
  "invoiceId": "inv_123",
  "amount": 50000,
  "currency": "USD",
  "region": "USA"
}
```

**Response (200):**

```json
{
  "success": true,
  "payment": {
    "id": "pay_789",
    "invoiceId": "inv_123",
    "amount": 50000,
    "currency": "USD",
    "status": "PENDING",
    "gateway": "STRIPE",
    "gatewayReference": "pi_xxx"
  },
  "clientSecret": "pi_xxx_secret_xxx",
  "checkoutUrl": null
}
```

**For Kenya (M-Pesa):**

```json
{
  "region": "KEN",
  "invoiceId": "inv_123",
  "amount": 5000,
  "currency": "KES"
}
```

**Response:**

```json
{
  "success": true,
  "payment": {
    "id": "pay_789",
    "gateway": "MPESA_DIRECT"
  },
  "checkoutUrl": null,
  "message": "STK push sent to your phone"
}
```

### 4.2 List Payments

**GET** `/api/payments`

List all payments with filtering.

**Query Parameters:**

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| page      | number | Page number (default: 1)     |
| limit     | number | Items per page (default: 20) |
| status    | string | Filter by status             |
| gateway   | string | Filter by gateway            |

**Response (200):**

```json
{
  "payments": [
    {
      "id": "pay_123",
      "invoiceId": "inv_456",
      "amount": 50000,
      "currency": "USD",
      "status": "SETTLED",
      "gateway": "STRIPE",
      "method": "CREDIT_CARD",
      "createdAt": "2026-03-04T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
```

### 4.3 Get Payment

**GET** `/api/payments/[id]`

Get payment details by ID.

**Response (200):**

```json
{
  "id": "pay_123",
  "invoiceId": "inv_456",
  "amount": 50000,
  "currency": "USD",
  "status": "SETTLED",
  "gateway": "STRIPE",
  "method": "CREDIT_CARD",
  "gatewayReference": "pi_xxx",
  "createdAt": "2026-03-04T10:00:00Z",
  "settledAt": "2026-03-04T10:01:00Z"
}
```

### 4.4 Reverse Payment

**POST** `/api/payments/[id]/reversal`

Reverse a payment with automatic GL adjustment.

**Request Body:**

```json
{
  "reason": "Customer request"
}
```

**Response (200):**

```json
{
  "success": true,
  "reversedPayment": {
    "id": "pay_123",
    "status": "REVERSED",
    "isReversed": true
  },
  "invoice": {
    "id": "inv_456",
    "status": "PARTIAL",
    "balanceDue": 50000
  }
}
```

### 4.5 Get Receipt

**GET** `/api/payment/[id]/receipt`

Get payment receipt.

**Response (200):**

```json
{
  "receiptNo": "RCP-2026-0001",
  "paymentId": "pay_123",
  "invoiceId": "inv_456",
  "amount": 50000,
  "currency": "USD",
  "method": "CREDIT_CARD",
  "issuedOn": "2026-03-04T10:00:00Z",
  "propertyName": "Sunset Apartments",
  "tenantName": "John Doe"
}
```

---

## 5. Stripe & Plaid Integration

### 5.1 Create Plaid Link Token

**POST** `/api/plaid/create-link-token`

Create a Plaid Link token for bank account connection.

**Request Body:**

```json
{}
```

**Response (200):**

```json
{
  "linkToken": "link-sandbox-xxx",
  "expiration": "2026-03-04T12:00:00Z"
}
```

### 5.2 Exchange Plaid Token

**POST** `/api/plaid/exchange-token`

Exchange Plaid public token for access token and create Stripe bank account.

**Request Body:**

```json
{
  "publicToken": "public-sandbox-xxx",
  "accountId": "account_xxx"
}
```

**Response (200):**

```json
{
  "success": true,
  "paymentMethod": {
    "id": "pm_123",
    "type": "ACH",
    "plaidAccessToken": "access-xxx",
    "stripePaymentMethodId": "pm_stripe_xxx",
    "isDefault": true
  }
}
```

### 5.3 Stripe Webhook

**POST** `/api/webhooks/stripe`

Handle Stripe payment events.

**Headers:**

```
stripe-signature: <signature>
```

**Event Types:**

- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `charge.refunded`

---

## **7\. Lease APIs**

### 7.1 Lease Management

API Name: Lease Contract Management

API Description: Comprehensive lease management including creation, retrieval, updates, and financial tracking.

#### **7.1.1 Work Unit Detail**

- **GET Method**

| Field           | Value                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------- |
| Job Code        | LS001                                                                                         |
| Source System   | Property Management System                                                                    |
| Target System   | Database (Prisma/PostgreSQL)                                                                  |
| Objective       | Retrieve details of a specific lease contract, including financial summaries and relations.   |
| Periodicity     | On-demand                                                                                     |
| Interface       | REST API                                                                                      |
| URL             | http://localhost:3000/api/lease & http://localhost:3000/api/lease/\[id\]                      |
| Method Name     | GET                                                                                           |
| Input Type      | JSON                                                                                          |
| Output Type     | JSON                                                                                          |
| Expected Output | Lease object with financial summary and relations                                             |
| Macro Logic     | Fetches lease details by ID                                                                   |
| Watch-outs      | Lease ID must be valid Application must be APPROVED Calculates balance from invoices/payments |
| Performance     | Complex queries with multiple relations and calculations                                      |

####

####

- **POST Method**

| Field           | Value                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Job Code        | LS001                                                                                                                                 |
| Source System   | Property Management System                                                                                                            |
| Target System   | Database (Prisma/PostgreSQL)                                                                                                          |
| Objective       | Create a new lease contract from an approved application and generate financial summaries.                                            |
| Periodicity     | On-demand                                                                                                                             |
| Interface       | REST API                                                                                                                              |
| URL             | http://localhost:3000/api/lease                                                                                                       |
| Method Name     | POST                                                                                                                                  |
| Input Type      | JSON                                                                                                                                  |
| Output Type     | JSON                                                                                                                                  |
| Expected Output | Lease object with financial summary and relations                                                                                     |
| Macro Logic     | Creates lease from approved application, calculates financial summaries, prevents duplicate leases                                    |
| Watch-outs      | Application must be APPROVED before lease creation Prevents duplicate lease per application Calculates balance from invoices/payments |
| Performance     | Complex queries with multiple relations and calculations                                                                              |

####

- **PATCH Method**

| Field           | Value                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| Job Code        | LS001                                                                                                |
| Source System   | Property Management System                                                                           |
| Target System   | Database (Prisma/PostgreSQL)                                                                         |
| Objective       | Update details of an existing lease contract                                                         |
| Periodicity     | On-demand                                                                                            |
| Interface       | REST API                                                                                             |
| URL             | http://localhost:3000/api/lease/\[id\]                                                               |
| Method Name     | PATCH                                                                                                |
| Input Type      | JSON                                                                                                 |
| Output Type     | JSON                                                                                                 |
| Expected Output | Updated lease object                                                                                 |
| Macro Logic     | Updates lease details without duplicating records Validates application and lease existence          |
| Watch-outs      | Cannot patch a lease linked to an non-approved application, Prevents duplicate lease per application |
| Performance     | Complex queries with multiple relations and calculations                                             |

####

#### **7.1.2 Request Body Parameters (POST)**

| S.No | Field Name               | API Tag Name             | Data Type   | Remarks                              |
| ---- | ------------------------ | ------------------------ | ----------- | ------------------------------------ |
| 1    | applicationId            | applicationId            | String      | Required \- Must be APPROVED status  |
| 2    | tenantId                 | tenantId                 | String      | Optional \- Tenant user ID           |
| 3    | propertyId               | propertyId               | String      | Required \- Property ID              |
| 4    | unitId                   | unitId                   | String      | Required \- Unit ID                  |
| 5    | startDate                | startDate                | Date/String | Required \- Lease start date         |
| 6    | endDate                  | endDate                  | Date/String | Required \- Lease end date           |
| 7    | rentAmount               | rentAmount               | Number      | Required \- Monthly rent             |
| 8    | securityDeposit          | securityDeposit          | Number      | Optional \- Security deposit amount  |
| 9    | leaseTerm                | leaseTerm                | String      | Required \- Term description         |
| 10   | paymentDueDay            | paymentDueDay            | Number      | Required \- Day of month rent is due |
| 11   | paymentFrequency         | paymentFrequency         | String      | Required \- Payment schedule         |
| 12   | lateFeeFlat              | lateFeeFlat              | Number      | Optional \- Flat late fee            |
| 13   | lateFeeDaily             | lateFeeDaily             | Number      | Optional \- Daily late fee           |
| 14   | gracePeriodDays          | gracePeriodDays          | Number      | Optional \- Grace period days        |
| 15   | landlordResponsibilities | landlordResponsibilities | String      | Optional \- Landlord duties          |
| 16   | tenantResponsibilities   | tenantResponsibilities   | String      | Optional \- Tenant duties            |
| 17   | tenantPaysElectric       | tenantPaysElectric       | Boolean     | Optional \- Utility responsibility   |
| 18   | tenantPaysWater          | tenantPaysWater          | Boolean     | Optional \- Utility responsibility   |
| 19   | tenantPaysTrash          | tenantPaysTrash          | Boolean     | Optional \- Utility responsibility   |
| 20   | tenantPaysInternet       | tenantPaysInternet       | Boolean     | Optional \- Utility responsibility   |
| 21   | usageType                | usageType                | String      | Optional \- Usage type               |
| 22   | earlyTerminationFee      | earlyTerminationFee      | Number      | Optional \- Early termination fee    |
| 23   | terminationNoticeDays    | terminationNoticeDays    | Number      | Optional \- Notice period            |

#### **7.1.3 Response Fields**

| S.No | Field Name                     | API Tag Name                   | Data Type | Remarks                                   |
| ---- | ------------------------------ | ------------------------------ | --------- | ----------------------------------------- |
| 1    | id                             | id                             | String    | Unique lease ID                           |
| 2    | applicationId                  | applicationId                  | String    | Source application ID                     |
| 3    | tenantId                       | tenantId                       | String    | Tenant user ID                            |
| 4    | propertyId                     | propertyId                     | String    | Property ID                               |
| 5    | unitId                         | unitId                         | String    | Unit ID                                   |
| 6    | startDate                      | startDate                      | DateTime  | Lease start date                          |
| 7    | endDate                        | endDate                        | DateTime  | Lease end date                            |
| 8    | rentAmount                     | rentAmount                     | Number    | Monthly rent amount                       |
| 9    | leaseStatus                    | leaseStatus                    | String    | DRAFT, SIGNED, ACTIVE, etc.               |
| 10   | tenant                         | tenant                         | Object    | Tenant user details                       |
| 11   | property                       | property                       | Object    | Property details with building/house info |
| 12   | unit                           | unit                           | Object    | Unit details                              |
| 13   | invoice                        | invoice                        | Array     | Associated invoices with payments         |
| 14   | financialSummary               | financialSummary               | Object    | Calculated financial data                 |
| 15   | financialSummary.totalInvoiced | financialSummary.totalInvoiced | Number    | Sum of all invoices                       |
| 16   | financialSummary.totalPaid     | financialSummary.totalPaid     | Number    | Sum of all payments                       |
| 17   | financialSummary.balance       | financialSummary.balance       | Number    | Outstanding balance                       |
| 18   | buildingName                   | buildingName                   | String    | Building name (apartments)                |
| 19   | houseName                      | houseName                      | String    | House name (houses)                       |

#### **7.1.4 Request-Response Sample**

**POST Request:**

{

"applicationId": "app_abc123",

"tenantId": "user_tenant456",

"propertyId": "prop_def789",

"unitId": "unit_ghi012",

"startDate": "2025-12-01",

"endDate": "2026-11-30",

"rentAmount": 1500.00,

"securityDeposit": 1500.00,

"leaseTerm": "12 months",

"paymentDueDay": 1,

"paymentFrequency": "MONTHLY",

"lateFeeFlat": 50.00,

"gracePeriodDays": 5,

"tenantPaysElectric": true,

"tenantPaysWater": false

}

**POST Response (201):**

{

"id": "lease_xyz789",

"applicationId": "app_abc123",

"tenantId": "user_tenant456",

"propertyId": "prop_def789",

"unitId": "unit_ghi012",

"startDate": "2025-12-01T00:00:00Z",

"endDate": "2026-11-30T00:00:00Z",

"rentAmount": 1500.00,

"securityDeposit": 1500.00,

"leaseStatus": "DRAFT",

"tenant": {

    "id": "user\_tenant456",

    "firstName": "John",

    "lastName": "Doe",

    "email": "john.doe@example.com"

},

"property": {

    "id": "prop\_def789",

    "name": "Sunset Apartments"

},

"unit": {

    "id": "unit\_ghi012",

    "unitNumber": "101"

}

}

**GET Response with Financial Summary (200):**

{

"id": "lease_xyz789",

"startDate": "2025-12-01T00:00:00Z",

"endDate": "2026-11-30T00:00:00Z",

"rentAmount": 1500.00,

"leaseStatus": "ACTIVE",

"tenant": {

    "id": "user\_tenant456",

    "firstName": "John",

    "lastName": "Doe"

},

"property": {

    "id": "prop\_def789",

    "name": "Sunset Apartments"

},

"unit": {

    "id": "unit\_ghi012",

    "unitNumber": "101"

},

"buildingName": "Sunset Apartments",

"financialSummary": {

    "totalInvoiced": 4500.00,

    "totalPaid": 3000.00,

    "balance": 1500.00

},

"invoice": \[

    {

      "id": "inv\_001",

      "amount": 1500.00,

      "status": "PAID",

      "payment": \[

        {

          "id": "pay\_001",

          "amount": 1500.00

        }

      \]

    }

\]

**}**

#### **7.1.5 Error Handling**

**Handled Response:**

**400 Bad Request: Missing required fields**  
 { "error": "Missing required fields"}

- **400 Bad Request: Application not approved**  
   { "error": "Application must be approved before creating a lease"**}**

- **404 Not Found: Application not found**  
   { "error": "Application not found"}

- **409 Conflict: Duplicate lease**  
   { "error": "Lease already exists for this application"}

- **Un-Handled Response:**

- **500 Internal Server Error**

---

## **8\. Lease Signing APIs**

### 8.1 Digital Lease Signing

API Name: Lease E-Signature Management

API Description: Handles digital signing of lease agreements by both landlord and tenant with token-based authentication for tenants.

#### **8.1.1 Work Unit Detail**

- Post Method

| Field           | Value                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| Job Code        | LS002                                                                                                          |
| Source System   | Property Management System                                                                                     |
| Target System   | Database (Prisma/PostgreSQL)                                                                                   |
| Objective       | Enable digital lease signing with role-based authentication                                                    |
| Periodicity     | On-demand (per lease activation)                                                                               |
| Interface       | REST API                                                                                                       |
| URL             | http://localhost:3000/api/lease/\[id\]/sign/\[role\]                                                           |
| Method Name     | POST                                                                                                           |
| Input Type      | JSON (token for tenant, auth for landlord)                                                                     |
| Output Type     | JSON                                                                                                           |
| Expected Output | Updated lease with signature timestamps                                                                        |
| Macro Logic     | Tenant signs via invite token, landlord signs via authentication, updates leaseStatus to SIGNED when both sign |
| Watch-outs      | Role must be "tenant" or "landlord", prevents duplicate signatures, validates token for tenant                 |
| Performance     | Single update with authentication checks                                                                       |

#### **8.1.2 Request Body Parameters**

| S.No | Field Name | API Tag Name | Data Type | Remarks                                  |
| ---- | ---------- | ------------ | --------- | ---------------------------------------- |
| 1    | token      | token        | String    | Required for tenant role \- Invite token |
| 2    | role       | role         | String    | Path parameter \- "tenant" or "landlord" |

#### **8.1.3 Response Fields**

| S.No | Field Name             | API Tag Name           | Data Type | Remarks                          |
| ---- | ---------------------- | ---------------------- | --------- | -------------------------------- |
| 1    | message                | message                | String    | Success message                  |
| 2    | lease                  | lease                  | Object    | Updated lease object             |
| 3    | lease.id               | lease.id               | String    | Lease ID                         |
| 4    | lease.tenantSignedAt   | lease.tenantSignedAt   | DateTime  | Tenant signature timestamp       |
| 5    | lease.landlordSignedAt | lease.landlordSignedAt | DateTime  | Landlord signature timestamp     |
| 6    | lease.leaseStatus      | lease.leaseStatus      | String    | Updated status (DRAFT or SIGNED) |
| 7    | lease.tenant           | lease.tenant           | Object    | Tenant details                   |
| 8    | lease.property         | lease.property         | Object    | Property details                 |
| 9    | lease.unit             | lease.unit             | Object    | Unit details                     |

#### **8.1.4 Request-Response Sample**

**Tenant Sign Request:**

{

"token": "invite_token_abc123xyz789"

}

**Tenant Sign Response (200):**

{

"message": "Lease signed by tenant",

"lease": {

    "id": "lease\_xyz789",

    "tenantSignedAt": "2025-11-19T10:30:00Z",

    "landlordSignedAt": null,

    "leaseStatus": "DRAFT",

    "tenant": {

      "id": "user\_tenant456",

      "firstName": "John",

      "lastName": "Doe"

    },

    "property": {

      "id": "prop\_def789",

      "name": "Sunset Apartments"

    },

    "unit": {

      "id": "unit\_ghi012",

      "unitNumber": "101"

    }

}

}

**Landlord Sign Request:**

**POST /api/lease/lease_xyz789/sign/landlord**

**Headers: Authorization: Bearer {auth_token}**

**Landlord Sign Response (200):**

{

"message": "Lease signed by landlord",

"lease": {

    "id": "lease\_xyz789",

    "tenantSignedAt": "2025-11-19T10:30:00Z",

    "landlordSignedAt": "2025-11-19T11:00:00Z",

    "leaseStatus": "SIGNED",

    "tenant": {

      "id": "user\_tenant456",

      "firstName": "John",

      "lastName": "Doe"

    },

    "property": {

      "id": "prop\_def789",

      "name": "Sunset Apartments"

    },

    "unit": {

      "id": "unit\_ghi012",

      "unitNumber": "101"

    }

}

}

#### **8.1.5 Error Handling**

**Handled Response:**

**400 Bad Request: Missing token (tenant)**  
 { "error": "Missing invite token for tenant signing"}

- **400 Bad Request: Invalid role**  
   { "error": "Invalid role: 'manager'. Must be 'tenant' or 'landlord'"}

- **401 Unauthorized: Not authenticated (landlord)**  
   { "error": "Authentication required for landlord signing"}

- **403 Forbidden: Invalid token**  
   { "error": "Invalid invite token"}

- **403 Forbidden: Token mismatch**  
   { "error": "Invite token does not match this lease"}

- **403 Forbidden: Unauthorized landlord**  
   { "error": "You are not authorized to sign this lease"}

- **404 Not Found: Lease not found**  
   { "error": "Lease not found"}

- **Un-Handled Response:**

- **500 Internal Server Error**

---

## **9\. Tenant Invite APIs**

### 9.1 Tenant Invitation Management

API Name: Tenant Onboarding Invitation System

API Description: Creates tenant user accounts, generates secure invite tokens, and manages tenant onboarding process.

#### **9.1.1 Work Unit Detail**

- **GET method**

| Field           | Value                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| Job Code        | TI001                                                                                                              |
| Source System   | Property Management System                                                                                         |
| Target System   | Database (Prisma/PostgreSQL)                                                                                       |
| Objective       | Retrieve details of a specific tenant invitation, including secure token and user information.                     |
| Periodicity     | On-demand (per tenant invitation)                                                                                  |
| Interface       | REST API                                                                                                           |
| URL             | http://localhost:300/api/auth/invites/tenant                                                                       |
| Method Name     | GET                                                                                                                |
| Input Type      | JSON                                                                                                               |
| Output Type     | JSON                                                                                                               |
| Expected Output | Invite object with secure token and user details                                                                   |
| Macro Logic     | Fetches tenant invites details Validates token expiry Returns associated lease and user information                |
| Watch-outs      | Email must be unique requires PROPERTY_MANAGER and SYSTEM_ADMIN roles, Expired tokens should return status EXPIRED |
| Performance     | Read operation with validation checks for token expiry and user association                                        |

####

- **POST method**

| Field           | Value                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------- |
| Job Code        | TI001                                                                                       |
| Source System   | Property Management System                                                                  |
| Target System   | Database (Prisma/PostgreSQL)                                                                |
| Objective       | Invite tenants, create inactive accounts, generate secure onboarding links                  |
| Periodicity     | On-demand (per tenant invitation)                                                           |
| Interface       | REST API                                                                                    |
| URL             | http://localhost:3000/api/auth/invites/tenant                                               |
| Method Name     | POST                                                                                        |
| Input Type      | JSON                                                                                        |
| Output Type     | JSON                                                                                        |
| Expected Output | Invite object with secure token and user details                                            |
| Macro Logic     | Creates inactive user, generates 32-byte token, associates with lease, sends invite link    |
| Watch-outs      | Email must be unique requires PROPERTY_MANAGER or SYSTEM_ADMIN role token expires in 7 days |
| Performance     | Multiple database operations (user, org user, invite creation)                              |

####

####

#### **9.1.2 Request Body Parameters (POST)**

| S.No | Field Name | API Tag Name | Data Type | Remarks                           |
| ---- | ---------- | ------------ | --------- | --------------------------------- |
| 1    | email      | email        | String    | Required \- Tenant email (unique) |
| 2    | firstName  | firstName    | String    | Required \- Tenant first name     |
| 3    | lastName   | lastName     | String    | Optional \- Tenant last name      |
| 4    | phone      | phone        | String    | Optional \- Contact phone         |
| 5    | leaseId    | leaseId      | String    | Required \- Associated lease ID   |

#### **9.1.3 Response Fields**

| S.No | Field Name       | API Tag Name     | Data Type | Remarks                    |
| ---- | ---------------- | ---------------- | --------- | -------------------------- |
| 1    | success          | success          | Boolean   | Operation status           |
| 2    | message          | message          | String    | Success message            |
| 3    | tenant           | tenant           | Object    | Created tenant details     |
| 4    | tenant.id        | tenant.id        | String    | User ID                    |
| 5    | tenant.token     | tenant.token     | String    | Secure invite token        |
| 6    | tenant.email     | tenant.email     | String    | Tenant email               |
| 7    | tenant.firstName | tenant.firstName | String    | Tenant first name          |
| 8    | tenant.lastName  | tenant.lastName  | String    | Tenant last name           |
| 9    | tenant.accepted  | tenant.accepted  | Boolean   | Invite acceptance status   |
| 10   | tenant.lease     | tenant.lease     | Object    | Associated lease details   |
| 11   | inviteLink       | inviteLink       | String    | Full invite URL (dev only) |

#### **9.1.4 Request-Response Sample**

**POST Request:**

{

"email": "john.doe@example.com",

"firstName": "John",

"lastName": "Doe",

"phone": "+1234567890",

"leaseId": "lease_abc123"

}

**POST Response (200):**

{

"success": true,

"message": "Tenant invited successfully",

"tenant": {

    "id": "user\_xyz789",

    "token": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",

    "email": "john.doe@example.com",

    "firstName": "John",

    "lastName": "Doe",

    "phone": "+1234567890",

    "accepted": false,

    "createdAt": "2025-11-19T10:30:00Z",

    "lease": {

      "id": "lease\_abc123",

      "startDate": "2025-12-01T00:00:00Z",

      "endDate": "2026-11-30T00:00:00Z",

      "rentAmount": 1500.00,

      "unit": {

        "id": "unit\_def456",

        "unitNumber": "101"

      }

    }

},

"inviteLink": "https://yourdomain.com/invite/tenant/accept?token=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6\&email=john.doe@example.com\&leaseId=lease\_abc123"

}

**GET Response (200):**

{

"invites": \[

    {

      "id": "invite\_001",

      "token": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",

      "email": "john.doe@example.com",

      "accepted": false,

      "createdAt": "2025-11-19T10:30:00Z",

      "firstName": "John",

      "lastName": "Doe",

      "phone": "+1234567890",

      "status": "INACTIVE",

      "leaseId": "lease\_abc123",

      "lease": {

        "id": "lease\_abc123",

        "startDate": "2025-12-01T00:00:00Z",

        "endDate": "2026-11-30T00:00:00Z",

        "rentAmount": 1500.00,

        "unit": {

          "id": "unit\_def456",

          "unitNumber": "101"

        }

      }

    }

\]

}

#### **9.1.5 Error Handling**

**Handled Response:**

**400 Bad Request: Missing required fields**  
 { "error": "Email, first name, and leaseId are required"}

- **401 Unauthorized: Not authenticated**  
   { "error": "Unauthorized"}

- **403 Forbidden: Insufficient permissions**  
   { "error": "Only property managers or admins can invite tenants"}

- **404 Not Found: Lease not found**  
   { "error": "Lease not found"}

- **409 Conflict: Email already exists**  
   { "error": "A user with this email already exists"}

- **Un-Handled Response:**

- **500 Internal Server Error**

---

### **9.2 Accept Tenant Invite**

API Name: Tenant Invite Acceptance & Account Activation

API Description: Allows invited tenants to accept invitations, set passwords, and activate their accounts.

#### **9.2.1 Work Unit Detail**

| Field           | Value                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------- |
| Job Code        | TI002                                                                                             |
| Source System   | Property Management System                                                                        |
| Target System   | Database (Prisma/PostgreSQL)                                                                      |
| Objective       | Activate tenant account, set password, link to lease                                              |
| Periodicity     | On-demand (per tenant acceptance)                                                                 |
| Interface       | REST API                                                                                          |
| URL             | /api/invite/tenant/accept                                                                         |
| Method Name     | POST                                                                                              |
| Input Type      | JSON                                                                                              |
| Output Type     | JSON                                                                                              |
| Expected Output | Success message with user details                                                                 |
| Macro Logic     | Validates token, activates user, hashes password, links to lease, marks invite as accepted        |
| Watch-outs      | Token must be valid and not expired, prevents duplicate acceptance, updates user status to ACTIVE |
| Performance     | Multiple updates (user, invite, lease) in transaction                                             |

#### **9.2.2 Request Body Parameters**

| S.No | Field Name  | API Tag Name | Data Type | Remarks                        |
| ---- | ----------- | ------------ | --------- | ------------------------------ |
| 1    | email       | email        | String    | Required \- Tenant email       |
| 2    | token       | token        | String    | Required \- Invite token       |
| 3    | password    | password     | String    | Required \- New password       |
| 4    | firstName   | firstName    | String    | Required \- First name         |
| 5    | lastName    | lastName     | String    | Optional \- Last name          |
| 6    | phone       | phone        | String    | Optional \- Phone number       |
| 7    | companyName | companyName  | String    | Optional \- For vendor invites |
| 8    | serviceType | serviceType  | String    | Optional \- For vendor invites |

#### **9.2.3 Response Fields**

| S.No | Field Name     | API Tag Name   | Data Type | Remarks                |
| ---- | -------------- | -------------- | --------- | ---------------------- |
| 1    | success        | success        | Boolean   | Operation status       |
| 2    | message        | message        | String    | Success message        |
| 3    | user           | user           | Object    | Activated user details |
| 4    | user.id        | user.id        | String    | User ID                |
| 5    | user.email     | user.email     | String    | User email             |
| 6    | user.firstName | user.firstName | String    | First name             |
| 7    | user.lastName  | user.lastName  | String    | Last name              |
| 8    | user.phone     | user.phone     | String    | Phone number           |

#### **9.2.4 Request-Response Sample**

**POST Request:**

{

"email": "john.doe@example.com",

"token": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",

"password": "SecureP@ssw0rd\!",

"firstName": "John",

"lastName": "Doe",

"phone": "+1234567890"

}

**POST Response (200):**

{

"success": true,

"message": "Invite accepted. Tenant account created and linked to lease.",

"user": {

    "id": "user\_xyz789",

    "email": "john.doe@example.com",

    "firstName": "John",

    "lastName": "Doe",

    "phone": "+1234567890"

}

}

#### **9.2.5 Error Handling**

**Handled Response:**

**400 Bad Request: Missing required fields**  
 { "error": "Email, token, password, and first name are required"}

- **400 Bad Request: Invalid token**  
   { "error": "Invalid or expired invite"}

- **400 Bad Request: Email** mismatch  
   { "error": "Invite email does not match"}

- **400 Bad Request: Already accepted**  
   { "error": "Invite already used"}

- **400 Bad Request: Expired**  
   { "error": "Invite has expired"}

- **Un-Handled Response:**

- **500 Internal Server Error**

---

## **10\. Tenant Management APIs**

### 10.1 Tenant Listing with Financial Summary

API Name: Tenant Portfolio Management

API Description: Retrieves comprehensive tenant information including lease details and financial summaries.

#### **10.1.1 Work Unit Detail**

| Field           | Value                                                                        |
| --------------- | ---------------------------------------------------------------------------- |
| Job Code        | TM001                                                                        |
| Source System   | Property Management System                                                   |
| Target System   | Database (Prisma/PostgreSQL)                                                 |
| Objective       | List all tenants with lease and financial information                        |
| Periodicity     | On-demand                                                                    |
| Interface       | REST API                                                                     |
| URL             | http://localhost:3000/api/tenants                                            |
| Method Name     | GET                                                                          |
| Input Type      | None                                                                         |
| Output Type     | JSON                                                                         |
| Expected Output | Array of tenant objects with financial summaries                             |
| Macro Logic     | Joins leases with tenants, calculates total invoiced/paid/balance per tenant |
| Watch-outs      | Includes all leases, financial calculations from invoices and payments       |
| Performance     | Complex query with multiple relations and aggregations                       |

#### **10.1.2 Request Parameters**

**No request body required for GET operation.**

#### **10.1.3 Response Fields**

| S.No   | Field Name                                  | API Tag Name                                | Data Type    | Remarks                    |
| ------ | ------------------------------------------- | ------------------------------------------- | ------------ | -------------------------- |
| **1**  | **success**                                 | **success**                                 | **Boolean**  | **Operation status**       |
| **2**  | **data**                                    | **data**                                    | **Array**    | **Array of lease objects** |
| **3**  | **data\[\].id**                             | **data\[\].id**                             | **String**   | **Lease ID**               |
| **4**  | **data\[\].startDate**                      | **data\[\].startDate**                      | **DateTime** | **Lease start date**       |
| **5**  | **data\[\].endDate**                        | **data\[\].endDate**                        | **DateTime** | **Lease end date**         |
| **6**  | **data\[\].rentAmount**                     | **data\[\].rentAmount**                     | **Number**   | **Monthly rent**           |
| **7**  | **data\[\].leaseStatus**                    | **data\[\].leaseStatus**                    | **String**   | **Lease status**           |
| **8**  | **data\[\].tenant**                         | **data\[\].tenant**                         | **Object**   | **Tenant information**     |
| **9**  | **data\[\].tenant.id**                      | **data\[\].tenant.id**                      | **String**   | **Tenant user ID**         |
| **10** | **data\[\].tenant.name**                    | **data\[\].tenant.name**                    | **String**   | **Full name**              |
| **11** | **data\[\].tenant.email**                   | **data\[\].tenant.email**                   | **String**   | **Email address**          |
| **12** | **data\[\].property**                       | **data\[\].property**                       | **Object**   | **Property details**       |
| **13** | **data\[\].unit**                           | **data\[\].unit**                           | **Object**   | **Unit details**           |
| **14** | **data\[\].financialSummary**               | **data\[\].financialSummary**               | **Object**   | **Calculated financials**  |
| **15** | **data\[\].financialSummary.totalInvoiced** | **data\[\].financialSummary.totalInvoiced** | **Number**   | **Total invoiced amount**  |
| **16** | **data\[\].financialSummary.totalPaid**     | **data\[\].financialSummary.totalPaid**     | **Number**   | **Total paid amount**      |
| **17** | **data\[\].financialSummary.balance**       | **data\[\].financialSummary.balance**       | **Number**   | **Outstanding balance**    |

#### **10.1.4 Request-Response Sample**

**GET Request:**

**GET /api/tenants**

**GET Response (200):**

{

"success": true,

"data": \[

    {

      "id": "lease\_abc123",

      "startDate": "2025-12-01T00:00:00Z",

      "endDate": "2026-11-30T00:00:00Z",

      "rentAmount": 1500.00,

      "securityDeposit": 1500.00,

      "leaseStatus": "ACTIVE",

      "tenant": {

        "id": "user\_tenant456",

        "name": "John Doe",

        "email": "john.doe@example.com",

        "phone": "+1234567890"

      },

      "property": {

        "id": "prop\_def789",

        "name": "Sunset Apartments"

      },

      "unit": {

        "id": "unit\_ghi012",

        "unitNumber": "101"

      },

      "financialSummary": {

        "totalInvoiced": 4500.00,

        "totalPaid": 3000.00,

        "balance": 1500.00

      }

    },

    {

      "id": "lease\_xyz789",

      "startDate": "2025-11-01T00:00:00Z",

      "endDate": "2026-10-31T00:00:00Z",

      "rentAmount": 1200.00,

      "securityDeposit": 1200.00,

      "leaseStatus": "ACTIVE",

      "tenant": {

        "id": "user\_tenant789",

        "name": "Jane Smith",

        "email": "jane.smith@example.com",

        "phone": "+1987654321"

      },

      "property": {

        "id": "prop\_abc456",

        "name": "Downtown Lofts"

      },

      "unit": {

        "id": "unit\_def789",

        "unitNumber": "205"

      },

      "financialSummary": {

        "totalInvoiced": 3600.00,

        "totalPaid": 3600.00,

        "balance": 0.00

      }

    }

\]

}

#### **10.1.5 Error Handling**

**Handled Response:**

- **No specific error responses for GET operation**

**Un-Handled Response:**

**500 Internal Server Error**  
 { "success": false, "error": "Failed to fetch tenants"}

- ***

## **11\.** **Maintenance API**

The Maintenance API provides endpoints to **retrieve** and **create** maintenance requests for properties under a specific organization.  
 It supports two main operations:

- GET – Fetch all maintenance requests for an organization.

- POST – Create a new maintenance request.

#### **11.1.1** **Work Unit Detail**

- GET Method

| Job Code: L002 | SourceSystem: Rentflow360 | Target System: Rentflow360 |
| :------------- | :------------------------ | :------------------------- |

| Objective:           | To manage maintenance requests by fetching records tied to specific organizations, properties, and units                                                                                    |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Periodicity:**     | On-demand (triggered by user or system request)                                                                                                                                             |
| **Interface:**       | REST API                                                                                                                                                                                    |
| **URL:**             | http://localhost:3000/api/maintenance                                                                                                                                                       |
| **Method Name:**     | GET                                                                                                                                                                                         |
| **Input Type:**      | Get query parameter                                                                                                                                                                         |
| **Output Type:**     | JSON                                                                                                                                                                                        |
| **Expected Output:** | Returns maintenance request data                                                                                                                                                            |
| **Macro Logic:**     | Validate organization ID, query maintenance requests, include related property/unit/user info, return list.                                                                                 |
| **Watch-outs:**      | Missing organizationId returns 400 error. \- Invalid priority or category returns 400 error. \- User not associated with organization returns 403\. \- Missing database table returns 503\. |
| **Performance:**     | Depends on database query performance                                                                                                                                                       |

####

- #### **POST Method**

| Job Code: L002 | SourceSystem: Rentflow360 | Target System: Rentflow360 |
| :------------- | :------------------------ | :------------------------- |

| Objective:           | Create a new maintenance request.                                                                                                                                                            |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Periodicity:**     | On-demand (triggered by user or system request)                                                                                                                                              |
| **Interface:**       | REST API                                                                                                                                                                                     |
| **URL:**             | http://localhost:3000/api/maintenance                                                                                                                                                        |
| **Method Name:**     | POST                                                                                                                                                                                         |
| **Input Type:**      | JSON                                                                                                                                                                                         |
| **Output Type:**     | JSON                                                                                                                                                                                         |
| **Expected Output:** | Returns maintenance request data or confirmation of a newly created request.                                                                                                                 |
| **Macro Logic:**     | Validate fields, check user-organization link validate priority and category enums insert record into database, and return created record.                                                   |
| **Watch-outs:**      | Missing organization Id returns 400 error. \- Invalid priority or category returns 400 error. \- User not associated with organization returns 403\. \- Missing database table returns 503\. |
| **Performance:**     | Depends on database query performance                                                                                                                                                        |

####

#### **11.1.2** **Request Body Parameters**

| S.No | FieldName       | Api Tag Name   | DataType                                    | Remarks                                                                |
| :--: | :-------------- | :------------- | :------------------------------------------ | :--------------------------------------------------------------------- |
|  1   | Organization ID | organizationId | string                                      | Required – identifies the organization.                                |
|  2   | Property ID     | propertyId     | string                                      | Required – identifies the property where maintenance is requested      |
|  3   | Unit ID         | unitId         | string                                      | Required – identifies the unit within the property                     |
|  4   | User ID         | userid         | string                                      | Required – user creating the request; must belong to the organization. |
|  5   | Title           | title          | string                                      | Required – short summary of the maintenance request.                   |
|  6   | Description     | description    | String                                      | Required – detailed explanation of the maintenance issue.              |
|  7   | Priority        | priority       | Enum (LOW, NORMAL, HIGH, URGENT             | Optional – request urgency level.                                      |
|  8   | Category        | category       | Enum (EMERGENCY, URGENT, ROUTINE, STANDARD) | Optional – request classification.                                     |

#### **11.1.3** **Response Fields**

| S.No | FieldName    | Api Tag Name | DataType | Remarks                                                  |
| :--: | :----------- | :----------- | :------- | :------------------------------------------------------- |
|  1   | Request ID   | id           | string   | Unique identifier of the maintenance request.            |
|  2   | Title        | title        | string   | Maintenance request title.                               |
|  3   | Description  | description  | string   | Maintenance request details.                             |
|  4   | Property     | property     | Object   | Includes property ID, name, address, and city.           |
|  5   | Unit         | unit         | object   | includes unit ID, unit number, and name.                 |
|  6   | Created At   | createdAt    | DateTime | Timestamp when request was created.                      |
|  7   | Requested By | requestedBy  | Object   | includes user’s first name, last name, and email         |
|  8   | Priority     | priority     | string   | Priority level (LOW, NORMAL,HIGH,URGENT).                |
|  9   | Category     | category     | String   | Request category (EMERGENCY, URGENT, ROUTINE, STANDARD). |

#### **11.1.4** **Request \- Response Sample**

**GET REQUEST** \-\> GET /api/maintenance?organizationId=org_123

**GET RESPONSE \-\>**

\[

{

    "id": "req\_001",

    "title": "Leaking Faucet",

    "description": "The kitchen faucet is leaking.",

    "priority": "NORMAL",

    "category": "ROUTINE",

    "property": {

      "id": "prop\_001",

      "name": "Sunrise Apartments",

      "address": "123 Main St",

      "city": "New York"

    },

    "unit": {

      "id": "unit\_101",

      "unitNumber": "101"

    },

    "requestedBy": {

      "user": {

        "firstName": "Jane",

        "lastName": "Doe",

        "email": "jane.doe@example.com"

      }

    },

    "createdAt": "2025-11-12T10:15:00.000Z"

}

\]

**POST REQUEST \-\>**

{

"organizationId": "org_123",

"propertyId": "prop_001",

"unitId": "unit_101",

"userId": "user_456",

"title": "Air conditioner not cooling",

"description": "The AC in the living room is blowing warm air.",

"priority": "HIGH",

"category": "URGENT"

}

**POST RESPONSE \-\>**

{

"id": "req_002",

"organizationId": "org_123",

"propertyId": "prop_001",

"unitId": "unit_101",

"requestedById": "orgUser_456",

"title": "Air conditioner not cooling",

"description": "The AC in the living room is blowing warm air.",

"priority": "HIGH",

"category": "URGENT",

"createdAt": "2025-11-12T10:30:00.000Z"

}

#### **11.1.5** **Error Handling**

**Handled Response:**

| Type                     | Condition                       | Response                                                                                                   | Http status |
| :----------------------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------- | :---------- |
| Handled Response         | Missing organizationId          | { "error": "organizationId is required" }                                                                  | 400         |
|                          | Missing required POST fields    | { "error": "Missing required fields" }                                                                     | 400         |
|                          | Invalid priority/category       | { "error": "Invalid priority value: MEDIUM" }                                                              | 400         |
|                          | User not in organisation        | { "error": "User is not associated with the organization" }                                                | 403         |
|                          | Missing table in Db             | { "error": "Maintenance requests feature not yet available" }                                              | 503         |
| **Un-Handled Response:** | Unexpected server or DB failure | { "error": "Failed to fetch maintenance requests" } or { "error": "Failed to create maintenance request" } | 500         |

#### **11.1.6** **Sample Postman Simulation**

GET Simulation

Method: GET

URL: {{baseUrl}}/api/maintenance?organizationId=org_123

Headers: Content-Type: application/json

Response: Returns list of maintenance requests.

POST Simulation

Method: POST

URL: {{baseUrl}}/api/maintenance

Headers: Content-Type: application/json

Body (raw JSON):

{

"organizationId": "org_123",

"propertyId": "prop_001",

"unitId": "unit_101",

"userId": "user_456",

"title": "Broken window latch",

"description": "Window latch in bedroom is jammed.",

"priority": "NORMAL",

"category": "ROUTINE"

}

## **11.2** **Maintenance Assignment API**

**API Name:** Assign Maintenance Request to Vendor

**API Description:** Assigns an existing maintenance request to a vendor, provided the request is still _OPEN_ and currently _unassigned_. Only users with the roles **PROPERTY_MANAGER** or **SYSTEM_ADMIN** are authorized to perform the assignment.

#### **11.2.1** **Work Unit Detail**

| Job Code: L002 | SourceSystem: Rentflow360 | Target System: Rentflow360 |
| :------------- | :------------------------ | :------------------------- |

| Objective:           | To securely assign an open maintenance request to a vendor within the same organization, preventing double-assignments using conditional updates                                                                                                                                                                                                                                                                   |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Periodicity:**     | On-demand (triggered by user action)                                                                                                                                                                                                                                                                                                                                                                               |
| **Interface:**       | REST API                                                                                                                                                                                                                                                                                                                                                                                                           |
| **URL:**             | /api/maintenance/{requestId}/assign                                                                                                                                                                                                                                                                                                                                                                                |
| **Method Name:**     | POST                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Input Type:**      | JSON request body \+ path parameter \+ auth cookie token                                                                                                                                                                                                                                                                                                                                                           |
| **Output Type:**     | JSON response                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Expected Output:** | \-Success confirmation and the updated maintenance request record\-Or standardized error responses (400, 401, 403, 404, 409, 500\)                                                                                                                                                                                                                                                                                 |
| **Macro Logic:**     | Read authentication token from cookies.Verify role (must be PROPERTY_MANAGER or SYSTEM_ADMIN).Extract requestId from URL path.Extract vendorId from body.Validate vendor exists and belongs to same organization.Perform **conditional update** to avoid race conditions Request must be OPEN Must not already be assigned If update successful → return updated maintenance request. If not, return 409 conflict. |
| **Watch-outs:**      | \-Uses updateMany to prevent race conditions. \-Vendor must belong to the same organization as the logged-in user \-Role-based authorization required                                                                                                                                                                                                                                                              |
| **Performance:**     | Lightweight database operations                                                                                                                                                                                                                                                                                                                                                                                    |

#### **11.2.2** **Request Body Parameters**

| S.No | FieldName | Api Tag Name | DataType      | Remarks                                           |
| :--: | :-------- | :----------- | :------------ | :------------------------------------------------ |
|  1   | Vendor ID | vendorId     | string (UUID) | Required; vendor must exist in same organization. |
|  2   | ID        | id           | string(UUID)  | Maintenance Request ID to be assigned             |
|  3   | token     |              | String        | Must contain a valid access token                 |

#### **11.2.3** **Response Fields**

| S.No | FieldName                | Api Tag Name | DataType | Remarks                                                               |
| :--: | :----------------------- | :----------- | :------- | :-------------------------------------------------------------------- |
|  1   | Success flag             | success      | boolean  | Always true in success.                                               |
|  2   | Maintenance Request Data | data         | Object   | Full updated record (includes property, unit, vendor, requester info. |

#### **11.2.4** **Request \- Response Sample**

POST Request

POST /api/maintenance/37d5a7f9-cec8-486b-ab8c-733d45d773d0/assign

       **Body:**

{

"vendorId": “VendorId_123"

}

POST Response (200)

{

"success": true,

"data": {

    "id": "37d5a-id",

    "organizationId": "999-id",

    "assigned\_vendor\_id": "4d-Id",

    "assigned\_at": "2025-11-18T10:22:14.221Z",

    "property": { "id": "...", "name": "..." },

    "unit": { "id": "...", "unitNumber": "..." },

    "requestedBy": {

      "user": { "firstName": "Larvene", "lastName": "Thomas" }

    },

    "vendors": {

      "user": { "firstName": "Mike", "lastName": "McLusky" }

    }

}

}

#### **11.2.5** **Error Handling**

**Handled Response:**

| Type                     | Condition                            | Response                                                                 | Http status |
| :----------------------- | :----------------------------------- | :----------------------------------------------------------------------- | :---------- |
| Unauthorized             | Missing/invalid token                | { "success": false, "error": "Unauthorized" }                            | 401         |
| Forbidden                | Role not allowed                     | { "success": false, "error": "Forbidden" }                               | 403         |
| Validation               | vendorId missing                     | { "success": false, "error": "vendorId is required" }                    | 400         |
| Not Found                | Vendor not in organization           | { "success": false, "error": "Vendor not found in your organization" }   | 404         |
| Conflict                 | Request not open or already assigned | { "success": false, "error": "Request is not open or already assigned" } | 409         |
| **Un-Handled Response:** | Internal Server Error                | { "success": false, "error": "Some server error message" }               | 500         |

## **12.1 Vendors APIs**

**API Name:** Vendors  
**API Description:** Provides vendor listing and vendor creation services for organizations. Supports filtering by organization, service type, and active status.

#### **12.1.2 Work Unit Detail**

- **GET method**

| Field           | Value                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Job Code        | VM001                                                                                                                                                            |
| Source System   | Property Management System                                                                                                                                       |
| Target System   | Database (Prisma/PostgreSQL)                                                                                                                                     |
| Objective       | Fetch vendors for an organization                                                                                                                                |
| Periodicity     | On-demand                                                                                                                                                        |
| Interface       | REST API                                                                                                                                                         |
| URL             | http://localhost:3000/api/vendors                                                                                                                                |
| Method Name     | GET                                                                                                                                                              |
| Input Type      | Get query Params                                                                                                                                                 |
| Output Type     | JSON                                                                                                                                                             |
| Expected Output | Array of vendor objects with user and organization details                                                                                                       |
| Macro Logic     | Filters vendors by optional parameters; includes user & organization info.                                                                                       |
| Watch-outs      | Duplicate vendor restriction per user & organization Optional filters must be handled carefully (isActive boolean parsing) Service type may be a free-text field |
| Performance     | Query is indexed by organizationId; includes relational joins.                                                                                                   |

- #### **POST method**

| Field           | Value                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Job Code        | VM001                                                                                                                                                                  |
| Source System   | Property Management System                                                                                                                                             |
| Target System   | Database (Prisma/PostgreSQL)                                                                                                                                           |
| Objective       | Filter and register vendors for an organization                                                                                                                        |
| Periodicity     | On-demand                                                                                                                                                              |
| Interface       | REST API                                                                                                                                                               |
| URL             | http://localhost:3000/api/vendors                                                                                                                                      |
| Method Name     | POST                                                                                                                                                                   |
| Input Type      | JSON Body (POST)                                                                                                                                                       |
| Output Type     | JSON                                                                                                                                                                   |
| Expected Output | Array of vendor objects with user and organization details                                                                                                             |
| Macro Logic     | Validates input and ensures vendor uniqueness creates vendor record.                                                                                                   |
| Watch-outs      | Duplicate vendor restriction per user & organization \- Optional filters must be handled carefully (isActive boolean parsing) \- Service type may be a free-text field |
| Performance     | Query is indexed by organizationId; includes relational joins.                                                                                                         |

**12.1.2 Request Body Parameters**

**12.1.1 Get Request Body Parameters**

| S.No | FieldName       | Api Tag Name   | DataType                          | Remarks         |
| :--: | :-------------- | :------------- | :-------------------------------- | :-------------- |
|  1   | Organization Id | organisationId | String                            | Optional filter |
|  2   | Service Type    | servicetype    | String                            | Optional filter |
|  3   | Active Status   | isActive       | Boolean (true or false as string) | Optional filter |

**12.1.2 Post Request Body Parameters**

| S.No | FieldName       | Api Tag Name   | DataType | Remarks  |
| :--: | :-------------- | :------------- | :------- | :------- |
|  1   | Organization Id | organisationId | String   | Required |
|  2   | User Id         | userId         | String   | Required |
|  3   | Company Name    | companyName    | String   | Required |
|  4   | Service Type    | serviceType    | String   | Required |
|  6   | Phone           | phone          | String   | Optional |
|  7   | Email           | email          | String   | Optional |

#### **12.1.3 Response Fields**

| S.No   | Field Name               | API Tag Name       | Data Type    | Remarks                                |
| ------ | ------------------------ | ------------------ | ------------ | -------------------------------------- |
| **1**  | **Vendor Id**            | **id**             | **String**   | **Unique vendor identifier**           |
| **2**  | **Organization Id**      | **organizationId** | **String**   | **Owning organization**                |
| **3**  | **User Id**              | **userid**         | **String**   | **Linked User**                        |
| **4**  | **Company Name**         | **companyName**    | **String**   | **Vendor business name**               |
| **5**  | **Service Type**         | **servicetype**    | **String**   | **Eg, Plumbing**                       |
| **6**  | **Phone**                | **phone**          | **String**   | **Contact number**                     |
| **7**  | **Email**                | **email**          | **String**   | **Vendor email**                       |
| **8**  | **Active Status**        | **isActive**       | **Boolean**  | **Vendor status**                      |
| **9**  | **Created At**           | **createdAT**      | **DateTime** | **Record Creation Timestamp**          |
| **10** | **updatedAt**            | **updateAt**       | **DateTime** | **Last update timestamp**              |
| **11** | **User Details**         | **user**           | **Object**   | **Includes firstName, lastName email** |
| **12** | **Organization Details** | **organization**   | **Object**   | **Includes id and name**               |

#### **12.1.4 Request-Response Sample**

GET Request

**GET** /api/vendors?organizationId=orgId

GET Response (200)

\[

{

    "id": "932-id",

    "organizationId": "999-is",

    "userId": "a9c-id",

    "companyName": "Thomas Eagan",

    "serviceType": "General Services",

    "phone": "Thomaseagan@gmail.com",

    "email": "thomaseagan@gmail.com",

    "isActive": true,

    "createdAt": "2025-11-18T12:42:52.413Z",

    "updatedAt": "2025-11-18T12:42:52.413Z",

    "user": {

      "firstName": "Thomas",

      "lastName": "Eagan",

      "email": "thomaseagan@gmail.com"

    },

    "organization": {

      "id": "99-id,

      "name": "leslie's Company"

    }

}

\]

---

POST Request

{

"organizationId": "999-id",

"userId": "2e4-id",

"companyName": "Landscaping Pros",

"serviceType": "Landscaping",

"phone": "+254 712 345 678",

"email": "support@landscapingpros.com"

}

POST Response (201)

{

"id": "e1a-id",

"organizationId": "999-id",

"userId": "2e4-id",

"companyName": "Landscaping Pros",

"serviceType": "Landscaping",

"phone": "+254 712 345 678",

"email": "support@landscapingpros.com",

"isActive": true,

"createdAt": "2025-11-19T09:15:22.000Z",

"updatedAt": "2025-11-19T09:15:22.000Z"

}

#### **12.1.5 Error Handling**

**Handled Response:**

| Type                     | Condition                                 | Response                                                               | Http status |
| :----------------------- | :---------------------------------------- | :--------------------------------------------------------------------- | :---------- |
| Handled Response         | Missing required POST field               | { "error": "Missing required fields" }                                 | 400         |
|                          | Duplicate vendor                          | { "error": "Vendor already exists for this user in the organization" } | 409         |
|                          | General fetch failure                     | { "error": "Failed to fetch vendor data" }                             | 500         |
|                          | Create Vendor Failure                     | { "error": "Failed to create vendor" }                                 | 500         |
| **Un-Handled Response:** | Internal server error during vendor fetch | { "error": "Failed to fetch vendor data" }                             | 500         |

## **12.2 Single Vendor Retrieval API**

## **12.2.1 Fetch Vendor by User & Organization**

**API Name:** Vendor Detail Lookup  
**API Description:** Retrieves a single vendor record for the specified userId and organizationId.

#### **12.2.2 Work Unit Detail**

| Field           | Value                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| Job Code        | VM001                                                                                                    |
| Source System   | Property Management System                                                                               |
| Target System   | Database (Prisma/PostgreSQL)                                                                             |
| Objective       | List, filter, and register vendors for an organization                                                   |
| Periodicity     | On-demand                                                                                                |
| Interface       | REST API                                                                                                 |
| URL             | /api/vendor                                                                                              |
| Method Name     | GET                                                                                                      |
| Input Type      | Query Parameters                                                                                         |
| Output Type     | JSON                                                                                                     |
| Expected Output | Single vendor object matching the criteria                                                               |
| Macro Logic     | Validate params → search vendor by userId & organizationId → return result or errors                     |
| Watch-outs      | \-Both parameters required \- No relational includes in this endpoint \- Returns 404 if vendor not found |
| Performance     | Single-row lookup using indexed fields                                                                   |

**12.2.2 Request Body Parameters**

**Get Request Body Parameters**

| S.No | FieldName       | Api Tag Name   | DataType | Remarks  |
| :--: | :-------------- | :------------- | :------- | :------- |
|  1   | Organization ID | organisationId | String   | Required |
|  2   | User ID         | userId         | String   | Required |

#### **12.2.3 Response Fields**

| S.No   | Field Name          | API Tag Name       | Data Type    | Remarks                       |
| ------ | ------------------- | ------------------ | ------------ | ----------------------------- |
| **1**  | **Vendor Id**       | **id**             | **String**   | **Unique vendor identifier**  |
| **2**  | **Organization Id** | **organizationId** | **String**   | **Owning organization**       |
| **3**  | **User Id**         | **userid**         | **String**   | **Linked User**               |
| **4**  | **Company Name**    | **companyName**    | **String**   | **Vendor business name**      |
| **5**  | **Service Type**    | **servicetype**    | **String**   | **Eg, Plumbing**              |
| **6**  | **Phone**           | **phone**          | **String**   | **Contact number**            |
| **7**  | **Email**           | **email**          | **String**   | **Vendor email**              |
| **8**  | **Active Status**   | **isActive**       | **Boolean**  | **Vendor status**             |
| **9**  | **Created At**      | **createdAT**      | **DateTime** | **Record Creation Timestamp** |
| **10** | **updatedAt**       | **updateAt**       | **DateTime** | **Last update timestamp**     |

####

#### **12.2.4 Request-Response Sample**

GET Request

GET /api/vendor?organizationId=999baab5-a755-4e00-a58e-7d5789be7445\&userId=2e4ae432-84a9-4196-ba88-4d63b96fc2b5

GET Response (200)

{

"id": "37d9-id",

"organizationId": "999-id",

"userId": "2e4=id",

"companyName": "N/A",

"serviceType": "Landscaping",

"phone": "+254 742 594 202",

"email": "larvenethomas@gmail.com",

"isActive": true,

"createdAt": "2025-11-12T02:53:25.577Z",

"updatedAt": "2025-11-12T02:53:25.577Z"

}

#### **12.2.5 Error Handling**

**Handled Response:**

| Type                     | Condition                        | Response                                        | Http status |
| :----------------------- | :------------------------------- | :---------------------------------------------- | :---------- |
| Handled Response         | Missing userId or organizationId | { "error": "Missing userId or organizationId" } | 400         |
|                          | Vendor not found                 | { "error": "Vendor not found" }                 | 404         |
| **Un-Handled Response:** | Internal server error            | { "error": "Unknown server error" }             | 500         |

## **13\. Property APIs**

### 13.1 Lease Management

API Name: Property Management

API Description: Comprehensive property management including creation, retrieval, updates, and deleting.

#### **13.1.1 Work Unit Detail**

- **GET method**

| Field           | Value                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------- |
| Job Code        | PM001                                                                                               |
| Source System   | Property Management System                                                                          |
| Target System   | Database (Prisma/PostgreSQL)                                                                        |
| Objective       | Fetch property with ID                                                                              |
| Periodicity     | On-demand                                                                                           |
| Interface       | REST API                                                                                            |
| URL             | & http://localhost:3000/api/propertymanager/${id}                                                   |
| Method Name     | GET                                                                                                 |
| Input Type      | JSON                                                                                                |
| Output Type     | JSON                                                                                                |
| Expected Output | Property object with unit summary and relations                                                     |
| Macro Logic     | Queries the DB to get property details Checks property existence Returns formatted property details |
| Watch-outs      | Application must be APPROVED prevents duplicate lease per application                               |
| Performance     | Complex queries with multiple relations and                                                         |

####

####

- #### **POST method**

####

| Field           | Value                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| Job Code        | PM001                                                                                                             |
| Source System   | Property Management System                                                                                        |
| Target System   | Database (Prisma/PostgreSQL)                                                                                      |
| Objective       | Create and manage property                                                                                        |
| Periodicity     | On-demand                                                                                                         |
| Interface       | REST API                                                                                                          |
| URL             | http://localhost:3000/api/propertymanager & http://localhost:3000/api/propertymanager/${id}                       |
| Method Name     | POST                                                                                                              |
| Input Type      | JSON                                                                                                              |
| Output Type     | JSON                                                                                                              |
| Expected Output | Property object with unit summary and relations                                                                   |
| Macro Logic     | Creates property , from approved application, calculates financial summaries, prevents duplicate leases           |
| Watch-outs      | Application must be APPROVED, prevents duplicate lease per application, calculates balance from invoices/payments |
| Performance     | Complex queries with multiple relations and calculations                                                          |

####

- **PATCH method**

####

| Field           | Value                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| Job Code        | PM001                                                                                                             |
| Source System   | Property Management System                                                                                        |
| Target System   | Database (Prisma/PostgreSQL)                                                                                      |
| Objective       | Create and manage property                                                                                        |
| Periodicity     | On-demand                                                                                                         |
| Interface       | REST API                                                                                                          |
| URL             | http://localhost:3000/api/propertymanager & http://localhost:3000/api/propertymanager/${id}                       |
| Method Name     | PATCH                                                                                                             |
| Input Type      | JSON                                                                                                              |
| Output Type     | JSON                                                                                                              |
| Expected Output | Property object with unit summary and relations                                                                   |
| Macro Logic     | Creates property , from approved application, calculates financial summaries, prevents duplicate leases           |
| Watch-outs      | Application must be APPROVED, prevents duplicate lease per application, calculates balance from invoices/payments |
| Performance     | Complex queries with multiple relations and calculations                                                          |

####

- **DELETE method**

####

| Field           | Value                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| Job Code        | PM001                                                                                                             |
| Source System   | Property Management System                                                                                        |
| Target System   | Database (Prisma/PostgreSQL)                                                                                      |
| Objective       | Create and manage property                                                                                        |
| Periodicity     | On-demand                                                                                                         |
| Interface       | REST API                                                                                                          |
| URL             | http://localhost:3000/api/propertymanager & http://localhost:3000/api/propertymanager/${id}                       |
| Method Name     | DELETE                                                                                                            |
| Input Type      | JSON                                                                                                              |
| Output Type     | JSON                                                                                                              |
| Expected Output | Property object with unit summary and relations                                                                   |
| Macro Logic     | Creates property , from approved application, calculates financial summaries, prevents duplicate leases           |
| Watch-outs      | Application must be APPROVED, prevents duplicate lease per application, calculates balance from invoices/payments |
| Performance     | Complex queries with multiple relations and calculations                                                          |

####

#### **13.1.2 Request Body Parameters (POST)**

####

| S.No | Field Name          | API Tag Name                   | Data Type        | Remarks                                                                 |
| ---- | ------------------- | ------------------------------ | ---------------- | ----------------------------------------------------------------------- |
| 1    | Listing ID          | listingId                      | String / Null    | Optional — External listing reference                                   |
| 2    | Manager ID          | managerId                      | String           | Required — Must be a valid organizationUser ID                          |
| 3    | Property Name       | name                           | String           | Required — Name of the property                                         |
| 4    | Property Type ID    | propertyTypeId                 | String           | Required — Must match an existing propertyType (e.g., apartment, house) |
| 5    | Location ID         | locationId                     | String / Null    | Optional — FK to location entity                                        |
| 6    | Country             | country                        | String           | Required                                                                |
| 6    | City                | city                           | String           | Required                                                                |
| 7    | Zip code            | zipCode                        | String           | Required                                                                |
| 7    | Address             | address                        | String           | Required                                                                |
| 8    | Amenities           | amenities                      | Array of Strings | Optional list of amenities (\["Pool","Parking"\])                       |
| 9    | Furnished Status    | isFurnished                    | Boolean          | Optional — Default false if not supplied                                |
| 10   | Availability Status | availabilityStatus             | String           | Optional — e.g., "AVAILABLE", "OCCUPIED"                                |
| 11   | Property Details    | propertyDetails                | Object           | Required depending on property type                                     |
| 11a  | Building Name       | propertyDetails.buildingName   | String           | Apartment only — Optional                                               |
| 11b  | Total Floors        | propertyDetails.totalFloors    | Number           | Apartment only — Optional                                               |
| 11c  | Total Units         | propertyDetails.totalUnits     | Number           | Apartment only — Used to autogenerate units                             |
| 11d  | House Name          | propertyDetails.houseName      | String           | House only — Optional                                                   |
| 11e  | Number of Floors    | propertyDetails.numberOfFloors | Number           | House only — Optional                                                   |
| 11f  | Bedrooms            | propertyDetails.bedrooms       | Number           | House only — Optional                                                   |
| 11g  | Bathrooms           | propertyDetails.bathrooms      | Number           | House only — Optional                                                   |
| 11h  | Size                | propertyDetails.size           | Number           | House only — Optional                                                   |
| 11i  | Total Units         | propertyDetails.totalUnits     | Number           | House — Required to generate units (defaults to 1 if missing)           |

####

####

####

#### **13.1.3 Response Body Parameters (POST)**

| S.No | Field Name          | API Field Name     | Data Type        | Remarks                             |
| ---- | ------------------- | ------------------ | ---------------- | ----------------------------------- |
| 1    | Property ID         | id                 | String           | Auto-generated UUID                 |
| 2    | Listing ID          | listingId          | String / Null    | Optional external reference         |
| 3    | Manager ID          | managerId          | String           | FK → organizationUser               |
| 4    | Organization ID     | organizationId     | String           | Derived from manager’s organization |
| 5    | Name                | name               | String           | Property name                       |
| 6    | Property Type ID    | propertyTypeId     | String           | FK → propertyType                   |
| 7    | Location ID         | locationId         | String / Null    | Optional                            |
| 8    | City                | city               | String / Null    | Optional                            |
| 9    | Address             | address            | String / Null    | Optional                            |
| 10   | Amenities           | amenities          | Array of Strings | Optional list of amenities          |
| 11   | Furnished Status    | isFurnished        | Boolean          | Indicates if property is furnished  |
| 12   | Availability Status | availabilityStatus | String           | e.g., "AVAILABLE", "OCCUPIED"       |
| 13   | Created Timestamp   | createdAt          | DateTime String  | ISO timestamp                       |
| 14   | Updated Timestamp   | updatedAt          | DateTime String  | ISO timestamp                       |

####

#### **13.1.4 Response Body Parameters (GET) \- Property**

####

| S.No  | Field Name        | API Tag Name | Data Type   | Description                                      |
| ----- | ----------------- | ------------ | ----------- | ------------------------------------------------ |
| **1** | Property ID       | id           | String      | Unique identifier of the property                |
| **2** | Property Name     | name         | String      | Name of the property                             |
| **3** | Property Location | location     | String      | Physical address or general area                 |
| **4** | Description       | description  | String      | Optional property description                    |
| **5** | Created Date      | createdAt    | Date/String | ISO timestamp when the property was created      |
| **6** | Updated Date      | updatedAt    | Date/String | ISO timestamp when the property was last updated |

####

#### **13.1.5 Response Body Parameters (GET) \- Units**

| S.No | Field Name        | API Tag Name                 | Data Type | Description                          |
| ---- | ----------------- | ---------------------------- | --------- | ------------------------------------ |
| 1    | Total Units       | unitSummary.totalUnits       | Number    | Total units assigned to the property |
| 2    | Occupied Units    | unitSummary.occupiedUnits    | Number    | Units currently occupied             |
| 3    | Vacant Units      | unitSummary.vacantUnits      | Number    | Units available/vacant               |
| 4    | Maintenance Units | unitSummary.maintenanceUnits | Number    | Units marked for maintenance         |

#### **13.1.6 Unit Object Fields**

| Field        | API Tag Name | Type           | Description                        |
| ------------ | ------------ | -------------- | ---------------------------------- |
| Unit ID      | id           | String         | Unique ID of the unit              |
| Unit Number  | unitNumber   | String         | Unit label (e.g., "A1", "3B")      |
| Unit Type    | type         | String         | e.g., "1 Bedroom", "Studio"        |
| Rent Amount  | rentAmount   | Number         | Base monthly rent                  |
| Status       | status       | String         | VACANT, OCCUPIED, or MAINTENANCE   |
| Tenant       | tenant       | Object or null | Current tenant if unit is occupied |
| Active Lease | activeLease  | Object or null | Current lease details              |

#### **13.1.4 Request-Response Sample**

**POST Request:**

**1)Apartment complex type**

{

"listingId": "LIST123",

"managerId": "orguser_55",

"name": "Sunset Apartments",

"propertyTypeId": "ptype_apartment",

"locationId": "loc_21",

"city": "Nairobi",

"address": "Waiyaki Way",

"amenities": \["Pool", "Security"\],

"isFurnished": false,

"availabilityStatus": "AVAILABLE",

"propertyDetails": {

    "buildingName": "Block A",

    "totalFloors": 10,

    "totalUnits": 40

}

}

**2)House detail structure**

{

"listingId": "LIST789",

"managerId": "orguser_89",

"name": "Green Villa",

"propertyTypeId": "ptype_house",

"locationId": "loc_11",

"city": "Nakuru",

"address": "Section 58",

"amenities": \["Parking"\],

"isFurnished": true,

"availabilityStatus": "OCCUPIED",

"propertyDetails": {

    "houseName": "Villa 12A",

    "numberOfFloors": 2,

    "bedrooms": 4,

    "bathrooms": 3,

    "size": 2400,

    "totalUnits": 2

}

}

**POST Response (201):**

{

"message": "Property created successfully",

"property": {

    "id": "string",

    "listingId": "string | null",

    "managerId": "string",

    "organizationId": "string",

    "name": "string",

    "propertyTypeId": "string",

    "locationId": "string | null",

    "city": "string | null",

    "address": "string | null",

    "amenities": \[ "string" \],

    "isFurnished": true,

    "availabilityStatus": "AVAILABLE|UNAVAILABLE",

    "createdAt": "2025-01-01T00:00:00.000Z",

    "updatedAt": "2025-01-01T00:00:00.000Z"

}

}

**GET Response with Property details (200):**

\[

{

    "id": "string",

    "name": "Sunset Apartments",

    "city": "Nairobi",

    "address": "Waiyaki Way",

    "type": "Apartment",

    "isFurnished": false,

    "availabilityStatus": "AVAILABLE",

    "details": {

      "id": "string",

      "buildingName": "Block A",

      "totalFloors": 10,

      "totalUnits": 40

    },

    "totalUnits": 40,

    "manager": {

      "id": "string",

      "email": "manager@example.com",

      "firstName": "Sly",

      "lastName": "John",

      "role": "PROPERTY\_MANAGER"

    },

    "organization": {

      "id": "string",

      "name": "Real Estate Ltd",

      "slug": "real-estate-ltd"

    },

    "createdAt": "2025-01-01T00:00:00.000Z"

}

\]

**PUT Response (200 — Property Updated)**

{

"message": "Property updated successfully",

"property": {

    "id": "prop\_123",

    "listingId": null,

    "managerId": "orguser\_55",

    "organizationId": "org\_88",

    "propertyTypeId": "ptype\_apartment",

    "locationId": "loc\_44",

    "name": "Greenview Residency",

    "city": "Nairobi",

    "address": "Kilimani",

    "isFurnished": false,

    "availabilityStatus": "AVAILABLE",

    "createdAt": "2024-11-01T08:00:00.000Z",

    "updatedAt": "2024-11-02T10:30:00.000Z"

}

}

#### **13.1.5 Error Handling**

**Handled Response:**

**400 — Missing Required Data**  
{

"error": "Manager ID is required"

}

{

"error": "Invalid propertyTypeId"

}

### **401 — Unauthorized** {

### "error": "Unauthorized"

### }

**404 — Property Not Found**  
{

"error": "Property not found"

}

### **500 — Server Error**

{

"error": "Failed to create property",

"details": "error message"

}

## **14\. Invoice APIs**

API Name: Invoice Management

API Description: Comprehensive invoice management including creation and retrieval.

| Field           | Value                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Job Code        | INV001                                                                                                                                                                                                                                      |
| Source System   | Property Management System                                                                                                                                                                                                                  |
| Target System   | Database (Prisma/PostgreSQL)                                                                                                                                                                                                                |
| Objective       | Create, manage, and retrieve invoices for leases (rent and utilities)                                                                                                                                                                       |
| Periodicity     | On-demand                                                                                                                                                                                                                                   |
| Interface       | REST API                                                                                                                                                                                                                                    |
| URL             | /api/invoices /api/invoices/${id} /api/invoices/utilities/:leaseId /api/tenants/:tenantId/invoices                                                                                                                                          |
| Method Name     | POST, GET                                                                                                                                                                                                                                   |
| Input Type      | JSON                                                                                                                                                                                                                                        |
| Output Type     | JSON                                                                                                                                                                                                                                        |
| Expected Output | Invoice object with lease, tenant, property, unit, utilities, and financial summary details. For grouped endpoints, invoices are grouped by lease and due date.                                                                             |
| Macro Logic     | \- Generate invoices for rent or utilities- Auto-calculate amounts (rent from lease, utilities from fixed/metered rates)- Include payments for balance calculation- Group invoices by lease and due date if needed                          |
| Watch-outs      | \- Lease must exist and be active- For utility invoices, ensure utilities are linked to the lease- Correctly calculate due dates based on paymentFrequency and paymentDueDay- Handle multiple statuses (PENDING, OVERDUE) for GET filtering |

#### **14.1.2 Response Body Parameters (POST)**

| S.No | Field Name    | API Tag Name | Type                    | Description                                                          |
| ---- | ------------- | ------------ | ----------------------- | -------------------------------------------------------------------- |
| 1    | Invoice ID    | id           | String                  | Unique identifier for the created invoice                            |
| 2    | Lease ID      | lease_id     | String                  | ID of the lease associated with this invoice                         |
| 3    | Type          | type         | String (RENT / UTILITY) | Type of invoice                                                      |
| 4    | Amount        | amount       | Number                  | Total amount for the invoice                                         |
| 5    | Due Date      | dueDate      | String (ISO date)       | Invoice due date                                                     |
| 6    | Status        | status       | String (PENDING)        | Default status on creation                                           |
| 7    | Created At    | createdAt    | String (ISO date)       | Timestamp of invoice creation                                        |
| 8    | Updated At    | updatedAt    | String (ISO date)       | Timestamp of last update                                             |
| 9    | Invoice Items | InvoiceItem  | Array of Objects        | List of individual items (for utility invoices or manual breakdowns) |

####

#### **14.1.2 Request Body Parameters (POST)**

| S.No | Field Name    | API Tag Name | Data Type               | Required                         | Remarks                                                                 |
| ---- | ------------- | ------------ | ----------------------- | -------------------------------- | ----------------------------------------------------------------------- |
| 1    | Lease ID      | lease_id     | String                  | Yes                              | ID of the lease to generate invoice for                                 |
| 2    | Type          | type         | String (RENT / UTILITY) | Yes                              | Type of invoice: RENT or UTILITY                                        |
| 3    | Amount        | amount       | Number                  | Required for manual invoice only | Amount to charge for this invoice                                       |
| 4    | Due Date      | dueDate      | Date/String             | Required for manual invoice only | Invoice due date                                                        |
| 5    | Invoice Items | InvoiceItem  | Array                   | Optional                         | For utility invoices, list of utility items with description and amount |

#### **14.1.3 Response Body Parameters (GET)**

| S.No | Field Name    | API Tag Name | Type                            | Description                                             |
| ---- | ------------- | ------------ | ------------------------------- | ------------------------------------------------------- |
| 1    | Invoice ID    | id           | String                          | Unique invoice ID                                       |
| 2    | Lease ID      | lease_id     | String                          | ID of the lease associated with the invoice             |
| 3    | Type          | type         | String (RENT / UTILITY)         | Type of invoice                                         |
| 4    | Amount        | amount       | Number                          | Total invoice amount                                    |
| 5    | Due Date      | dueDate      | String (ISO date)               | Invoice due date                                        |
| 6    | Status        | status       | String (PENDING, PAID, OVERDUE) | Current invoice status                                  |
| 7    | Created At    | createdAt    | String (ISO date)               | Timestamp of invoice creation                           |
| 8    | Updated At    | updatedAt    | String (ISO date)               | Timestamp of last update                                |
| 9    | Invoice Items | InvoiceItem  | Array                           | List of individual items for utility or manual invoices |

#### **14.2.1 Request Body Parameters (POST)**

**Automatic Invoice Generation**

{  
 "lease_id": "lease_12345",  
 "type": "RENT"  
}

**Manual Invoice Generation**

{  
 "lease_id": "lease_12345",  
 "type": "UTILITY",  
 "amount": 1500,  
 "dueDate": "2025-12-31T00:00:00.000Z"  
}

#### **14.2.2 Successful Response (201 Created)**

{  
 "id": "inv_98765",  
 "lease_id": "lease_12345",  
 "type": "RENT",  
 "amount": 5000,  
 "dueDate": "2025-12-05T00:00:00.000Z",  
 "status": "PENDING",  
 "createdAt": "2025-11-24T12:00:00.000Z",  
 "updatedAt": "2025-11-24T12:00:00.000Z",  
 "InvoiceItem": \[  
 {  
 "id": "item_001",  
 "description": "Water",  
 "amount": 200  
 },  
 {  
 "id": "item_002",  
 "description": "Electricity",  
 "amount": 300  
 }  
 \],  
 "Lease": {  
 "id": "lease_12345",  
 "tenant": {  
 "firstName": "John",  
 "lastName": "Doe",  
 "email": "john.doe@example.com"  
 },  
 "property": {  
 "id": "prop_001",  
 "name": "Sunset Apartments",  
 "address": "123 Main St, Nairobi",  
 "buildingName": "Sunset Block A"  
 },  
 "unit": {  
 "id": "unit_101",  
 "unitNumber": "101"  
 },  
 "lease_utility": \[  
 {  
 "id": "util_001",  
 "name": "Water",  
 "type": "METERED",  
 "fixedAmount": 0,  
 "unitPrice": 50,  
 "isTenantResponsible": true,  
 "lastReading": 20  
 }  
 \]  
 },  
 "financialSummary": {  
 "totalPaid": 0,  
 "balance": 5000,  
 "isPaid": false,  
 "isOverdue": false  
 },  
 "buildingName": "Sunset Block A"  
}

#### **14.2.3 Response Body Parameters (GET)**

\[  
 {  
 "lease_id": "lease_12345",  
 "date": "2025-12-05",  
 "totalAmount": 5000,  
 "totalPaid": 0,  
 "tenant": {  
 "firstName": "John",  
 "lastName": "Doe",  
 "email": "john.doe@example.com"  
 },  
 "property": {  
 "id": "prop_001",  
 "name": "Sunset Apartments",  
 "address": "123 Main St, Nairobi"  
 },  
 "unit": {  
 "id": "unit_101",  
 "unitNumber": "101"  
 },  
 "invoices": \[  
 {  
 "id": "inv_98765",  
 "lease_id": "lease_12345",  
 "type": "RENT",  
 "amount": 5000,  
 "dueDate": "2025-12-05T00:00:00.000Z",  
 "status": "PENDING",  
 "InvoiceItem": \[  
 {  
 "id": "item_001",  
 "description": "Water",  
 "amount": 200  
 },  
 {  
 "id": "item_002",  
 "description": "Electricity",  
 "amount": 300  
 }  
 \],  
 "financialSummary": {  
 "totalPaid": 0,  
 "balance": 5000,  
 "isPaid": false,  
 "isOverdue": false  
 },  
 "buildingName": "Sunset Block A"  
 }  
 \]  
 }  
\]

#### **14.2.4. 400 — Missing Required Data**

{  
 "error": "lease_id and type are required"  
}

#### **14.2.5. 401 — Unauthorized**

{  
 "error": "Unauthorized"  
}

#### **14.2.6. 404 — Resource Not Found**

####

{  
 "error": "Lease not found"  
}

#### **14.2.7. 500 — Server Error**

#### **{**

#### **"error": "Failed to generate utility invoice",**

#### **"details": "Database connection error"**

#### **}**

## 15. Authentication & Security APIs

### 15.1 User Registration (Enhanced)

**API Name:** Transactional User Registration  
**Endpoint:** `/api/auth/register`  
**Method:** `POST`

Creates a new user and conditionally creates an organization within a single
atomic transaction. Triggers an email verification workflow.

#### Work Unit Detail

| Field        | Value                     |
| ------------ | ------------------------- |
| Job Code     | AUTH001                   |
| Source       | Frontend (Web)            |
| Target       | Prisma DB + Email Service |
| Interface    | REST                      |
| Input        | JSON                      |
| Output       | JSON (201 Created)        |
| Side Effects | Verification email sent   |

---

**Watch-outs: Ensure id is a valid integer; handle non-existent service.**  
 **Performance: Fast; single DB query**

---

### **1.2 Request Body Parameters**

**None (ID passed as URL parameter)**

---

### **1.3 Response Fields**

| S.No  | FieldName       | Api Tag Name    | DataType    | Remarks                          |
| ----- | --------------- | --------------- | ----------- | -------------------------------- |
| **1** | **id**          | **id**          | **integer** | **Service ID**                   |
| **2** | **name**        | **name**        | **string**  | **Name of the service**          |
| **3** | **description** | **description** | **string**  | **Description of the service**   |
| **4** | **categories**  | **categories**  | **object**  | **Related category information** |

---

### **1.4 Request \- Response Sample**

**Request:**

**GET /api/services/1**

**Response:**

**{**  
 **"id": 1,**  
 **"name": "Recycling Pickup",**  
 **"description": "Pickup service for recyclable waste",**  
 **"categories": {**  
 **"id": 2,**  
 **"name": "Waste Management"**  
 **}**  
**}**

---

### **1.5 Error Handling**

**Handled Response:**

- **404 Service not found**

- **500 Database error**

**Un-Handled Response:**

- **Invalid ID format**

---

### **1.6 Sample Postman Simulation**

- **Method: GET**

- **URL: http://localhost:3000/api/services/1**

- **Headers: Content-Type: application/json**

---

# **2\. Update Service**

**API Name: Update Service**  
 **API Description: Updates an existing service record by ID.**

### **1.1 Work Unit Detail**

- **Job Code: SVC002**

- **Source System: property management system**

- **Target System: Database**

**Objective: Update service attributes using provided data.**  
 **Periodicity: On-demand**  
 **Interface: REST API**  
 **URL: /api/services/\[id\]**  
 **Method Name: PUT**  
 **Input Type: JSON Body**  
 **Output Type: JSON**  
 **Expected Output: Updated service object**  
 **Macro Logic: Update service fields in DB; return updated service.**  
 **Watch-outs: Ensure id exists; validate all input fields.**  
 **Performance: Fast; single DB update query**

---

### **1.2 Request Body Parameters**

| S.No  | FieldName       | Api Tag Name    | DataType    | Remarks                   |
| ----- | --------------- | --------------- | ----------- | ------------------------- |
| **1** | **category_id** | **category_id** | **integer** | **Service category ID**   |
| **2** | **name**        | **name**        | **string**  | **Name of the service**   |
| **3** | **description** | **description** | **string**  | **Service description**   |
| **4** | **features**    | **features**    | **string**  | **Optional features**     |
| **5** | **impact**      | **impact**      | **string**  | **Optional impact info**  |
| **6** | **icon**        | **icon**        | **string**  | **URL or icon reference** |

---

### **1.3 Response Fields**

| S.No  | FieldName       | Api Tag Name    | DataType    | Remarks                 |
| ----- | --------------- | --------------- | ----------- | ----------------------- |
| **1** | **id**          | **id**          | **integer** | **Service ID**          |
| **2** | **category_id** | **category_id** | **integer** | **Updated category ID** |
| **3** | **name**        | **name**        | **string**  | **Updated name**        |
| **4** | **description** | **description** | **string**  | **Updated description** |

---

### **1.4 Request \- Response Sample**

**Request:**

**PUT /api/services/1**  
**{**  
 **"category_id": 2,**  
 **"name": "Recycling Pickup Updated",**  
 **"description": "Updated pickup service",**  
 **"features": "Fast, Reliable",**  
 **"impact": "High",**  
 **"icon": "icon.png"**  
**}**

**Response:**

**{**  
 **"id": 1,**  
 **"category_id": 2,**  
 **"name": "Recycling Pickup Updated",**  
 **"description": "Updated pickup service"**  
**}**

---

### **1.5 Error Handling**

**Handled Response:**

- **404 Service not found**

- **500 Database error**

**Un-Handled Response:**

- **Invalid JSON body**

---

### **1.6 Sample Postman Simulation**

- **Method: PUT**

- **URL: http://localhost:3000/api/services/1**

- **Body: JSON**

- **Headers: Content-Type: application/json**

---

# **3\. Delete Service**

**API Name: Delete Service**  
 **API Description: Deletes a service record by ID.**

### **1.1 Work Unit Detail**

- **Job Code: SVC003**

- **Source System: property management system**

- **Target System: Database**

**Objective: Remove a service from the database.**  
 **Periodicity: On-demand**  
 **Interface: REST API**  
 **URL: /api/services/\[id\]**  
 **Method Name: DELETE**  
 **Input Type: URL parameter (id)**  
 **Output Type: JSON**  
 **Expected Output: Success message**  
 **Macro Logic: Delete service from DB; handle non-existent IDs**  
 **Watch-outs: Ensure ID exists; handle DB errors**  
 **Performance: Fast; single DB delete query**

---

### **1.2 Request Body Parameters**

**None**

---

### **1.3 Response Fields**

| S.No  | FieldName   | Api Tag Name | DataType   | Remarks              |
| ----- | ----------- | ------------ | ---------- | -------------------- |
| **1** | **message** | **message**  | **string** | **Success or error** |

---

### **1.4 Request \- Response Sample**

**Request:**

**DELETE /api/services/1**

**Response:**

**{**  
 **"message": "Service deleted successfully"**  
**}**

---

### **1.5 Error Handling**

**Handled Response:**

- **404 Service not found**

- **500 Database error**

**Un-Handled Response:**

- **Invalid ID format**

---

### **1.6 Sample Postman Simulation**

- **Method: DELETE**

- **URL: http://localhost:3000/api/services/1**

- **Headers: Content-Type: application/json**

---

# **4\. Get All Services / Filter by Category**

**API Name: Get All Services**  
 **API Description: Retrieves all services or filters by category ID.**

### **1.1 Work Unit Detail**

- **Job Code: SVC004**

- **Source System: property management system**

- **Target System: Database**

**Objective: Fetch all services or those belonging to a specific category.**  
 **Periodicity: On-demand**  
 **Interface: REST API**  
 **URL: /api/services?category_id=2**  
 **Method Name: GET**  
 **Input Type: Query parameter (category_id)**  
 **Output Type: JSON array of services**  
 **Expected Output: List of service objects**  
 **Macro Logic: Return all services; filter by category_id if provided**  
 **Watch-outs: Validate category_id if present**  
 **Performance: Fast; single DB query**

---

### **1.2 Request Body Parameters**

**None**

---

### **1.3 Response Fields**

| S.No  | FieldName       | Api Tag Name    | DataType    | Remarks                 |
| ----- | --------------- | --------------- | ----------- | ----------------------- |
| **1** | **id**          | **id**          | **integer** | **Service ID**          |
| **2** | **category_id** | **category_id** | **integer** | **Category ID**         |
| **3** | **name**        | **name**        | **string**  | **Service name**        |
| **4** | **description** | **description** | **string**  | **Service description** |

---

### **1.4 Request \- Response Sample**

**Request:**

**GET /api/services**  
**GET /api/services?category_id=2**

**Response:**

**\[**  
 **{**  
 **"id": 1,**  
 **"category_id": 2,**  
 **"name": "Recycling Pickup",**  
 **"description": "Pickup service for recyclable waste"**  
 **},**  
 **{**  
 **"id": 2,**  
 **"category_id": 2,**  
 **"name": "E-Waste Collection",**  
 **"description": "Electronic waste collection"**  
 **}**  
**\]**

---

### **1.5 Error Handling**

**Handled Response:**

- **500 Database error**

**Un-Handled Response:**

- **Invalid query parameter**

---

### **1.6 Sample Postman Simulation**

- **Method: GET**

- **URL: http://localhost:3000/api/services or ?category_id=2**

- **Headers: Content-Type: application/json**

# **1\. Get Plan by ID**

**API Name: Get Plan by ID**  
 **API Description: Retrieves a single plan and its associated features using the plan ID.**

### **1.1 Work Unit Detail**

- **Job Code: PLAN001**

- **Source System: property management system**

- **Target System: Database (Prisma/Plan Table)**

**Objective: Fetch a plan by ID along with all connected features.**  
 **Periodicity: On-demand**  
 **Interface: REST API**  
 **URL: /api/plan/\[id\]**  
 **Method Name: GET**  
 **Input Type: URL parameter (id)**  
 **Output Type: JSON**  
 **Expected Output: Plan object with features**  
 **Macro Logic: Retrieve plan from database; return 404 if not found; include related features.**  
 **Watch-outs: Ensure id is a valid number; handle non-existent plan.**  
 **Performance: Fast; single DB query**

---

### **1.2 Request Body Parameters**

**None (ID passed as URL parameter)**

---

### **1.3 Response Fields**

| S.No  | FieldName        | Api Tag Name     | DataType    | Remarks                         |
| ----- | ---------------- | ---------------- | ----------- | ------------------------------- |
| **1** | **id**           | **id**           | **integer** | **Plan ID**                     |
| **2** | **name**         | **name**         | **string**  | **Name of the plan**            |
| **3** | **badge**        | **badge**        | **string**  | **Plan badge or label**         |
| **4** | **monthlyPrice** | **monthlyPrice** | **number**  | **Monthly cost**                |
| **5** | **yearlyPrice**  | **yearlyPrice**  | **number**  | **Yearly cost**                 |
| **6** | **description**  | **description**  | **string**  | **Description of the plan**     |
| **7** | **gradient**     | **gradient**     | **string**  | **Visual gradient color**       |
| **8** | **features**     | **features**     | **array**   | **Array of connected features** |

---

### **1.4 Request \- Response Sample**

**Request:**

**GET /api/plan/1**

**Response:**

**{**  
 **"id": 1,**  
 **"name": "Premium Plan",**  
 **"badge": "Best Value",**  
 **"monthlyPrice": 1000,**  
 **"yearlyPrice": 10000,**  
 **"description": "Full access plan",**  
 **"gradient": "linear-gradient(...)",**  
 **"features": \[**  
 **{ "id": 1, "title": "Feature A", "description": "Description A" },**  
 **{ "id": 2, "title": "Feature B", "description": "Description B" }**  
 **\]**  
**}**

---

### **1.5 Error Handling**

**Handled Response:**

- **400 Invalid plan ID**

- **404 Plan not found**

- **500 Database error**

**Un-Handled Response:**

- **Non-numeric ID in URL**

---

### **1.6 Sample Postman Simulation**

- **Method: GET**

- **URL: http://localhost:3000/api/plan/1**

- **Headers: Content-Type: application/json**

---

# **2\. Update Plan**

**API Name: Update Plan**  
 **API Description: Updates a plan and manages its features (connect existing, replace connections).**

### **1.1 Work Unit Detail**

- **Job Code: PLAN002**

- **Source System: property management system**

- **Target System: Database**

**Objective: Update plan attributes and feature associations.**  
 **Periodicity: On-demand**  
 **Interface: REST API**  
 **URL: /api/plan/\[id\]**  
 **Method Name: PUT**  
 **Input Type: JSON Body**  
 **Output Type: JSON**  
 **Expected Output: Updated plan object with features**  
 **Macro Logic: Update plan fields; replace feature connections with new featureIds**  
 **Watch-outs: Validate ID; validate numeric pricing; ensure feature IDs exist**  
 **Performance: Fast; single DB update**

---

### **1.2 Request Body Parameters**

| S.No  | FieldName        | Api Tag Name     | DataType   | Remarks                                      |
| ----- | ---------------- | ---------------- | ---------- | -------------------------------------------- |
| **1** | **name**         | **name**         | **string** | **Plan name**                                |
| **2** | **badge**        | **badge**        | **string** | **Plan badge**                               |
| **3** | **monthlyPrice** | **monthlyPrice** | **number** | **Monthly price**                            |
| **4** | **yearlyPrice**  | **yearlyPrice**  | **number** | **Yearly price**                             |
| **5** | **description**  | **description**  | **string** | **Plan description**                         |
| **6** | **gradient**     | **gradient**     | **string** | **Gradient for UI**                          |
| **7** | **featureIds**   | **featureIds**   | **array**  | **IDs of features to connect (replace all)** |

---

### **1.3 Response Fields**

**Same as GET Plan by ID**

---

### **1.4 Request \- Response Sample**

**Request:**

**PUT /api/plan/1**  
**{**  
 **"name": "Updated Plan",**  
 **"badge": "Popular",**  
 **"monthlyPrice": 1200,**  
 **"yearlyPrice": 12000,**  
 **"description": "Updated plan description",**  
 **"gradient": "linear-gradient(...)",**  
 **"featureIds": \[1,3,4\]**  
**}**

**Response:**

**{**  
 **"id": 1,**  
 **"name": "Updated Plan",**  
 **"badge": "Popular",**  
 **"monthlyPrice": 1200,**  
 **"yearlyPrice": 12000,**  
 **"description": "Updated plan description",**  
 **"gradient": "linear-gradient(...)",**  
 **"features": \[**  
 **{ "id": 1, "title": "Feature A" },**  
 **{ "id": 3, "title": "Feature C" },**  
 **{ "id": 4, "title": "Feature D" }**  
 **\]**  
**}**

---

### **1.5 Error Handling**

- **400 Invalid plan ID**

- **500 Database error**

### **1.6 Sample Postman Simulation**

- **Method: PUT**

- **URL: http://localhost:3000/api/plan/1**

- **Body: JSON**

- **Headers: Content-Type: application/json**

---

# **3\. Delete Plan**

**API Name: Delete Plan**  
 **API Description: Deletes a plan and its feature connections (cascading delete if set).**

### **1.1 Work Unit Detail**

- **Job Code: PLAN003**

- **Source System: property management system**

- **Target System: Database**

**Objective: Remove a plan and associated feature links.**  
 **Periodicity: On-demand**  
 **Interface: REST API**  
 **URL: /api/plan/\[id\]**  
 **Method Name: DELETE**  
 **Input Type: URL parameter (id)**  
 **Output Type: JSON**  
 **Expected Output: Success message**  
 **Macro Logic: Delete plan; cascade features if DB relation is set to cascade**  
 **Watch-outs: Validate ID exists**  
 **Performance: Fast**

---

### **1.2 Request Body Parameters**

**None**

### **1.3 Response Fields**

| Parameter    | Type   | Description             |
| ------------ | ------ | ----------------------- |
| status       | string | Filter by status        |
| propertyType | string | Filter by property type |
| minPrice     | number | Minimum price           |
| maxPrice     | number | Maximum price           |

### 15.2 Create Listing

**POST** `/api/listings`

Create marketplace listing.

**Request Body:**

```json
{
  "propertyId": "prop_123",
  "title": "Beautiful 2BR Apartment",
  "description": "Modern apartment with great views",
  "price": 50000,
  "status": "ACTIVE"
}
```

### 15.3 Update Listing Status

**PATCH** `/api/listings/[id]/status`

Update listing status.

**Request Body:**

```json
{
  "status": "ACTIVE"
}
```

### 15.4 Bulk Operations

**POST** `/api/listings/bulk`

Perform bulk listing operations.

**Request Body:**

```json
{
  "listingIds": ["list_1", "list_2"],
  "action": "ACTIVATE"
}
```

---

## 16. Dashboard Analytics APIs

### 16.1 Analytics

**GET** `/api/dashboard/analytics`

Get comprehensive dashboard analytics.

**Response (200):**

```json
{
  "totalProperties": 15,
  "totalUnits": 180,
  "occupiedUnits": 165,
  "vacancyRate": 0.083,
  "totalTenants": 165,
  "totalRevenue": {
    "mtd": 8250000,
    "ytd": 24750000
  },
  "outstandingArrears": 450000,
  "pendingMaintenance": 12,
  "revenueChart": [...],
  "occupancyChart": [...]
}
```

---

## 17. Webhooks

### 17.1 Stripe Webhook

**Endpoint:** `/api/webhooks/stripe`

**Events:**

```json
{
  "type": "payment_intent.succeeded",
  "data": {
    "object": {
      "id": "pi_xxx",
      "amount": 50000,
      "currency": "usd"
    }
  }
}
```

### 17.2 Paystack Webhook

**Endpoint:** `/api/webhooks/paystack`

**Events:**

```json
{
  "event": "charge.success",
  "data": {
    "reference": "PSK_xxx",
    "amount": 50000,
    "status": "success"
  }
}
```

### 17.3 M-Pesa Webhook

**Endpoint:** `/api/webhooks/mpesa/callback`

**Events:** STK Push callbacks with transaction details

---

## 18. Security & Encryption

### 18.1 SSN Encryption

RentFlow360 uses AES-256-GCM encryption for SSN data.

**Encryption Flow:**

1. User submits tenant application with SSN
2. Server validates SSN format
3. SSN is encrypted using AES-256-GCM
4. Encrypted value stored in `ssnEncrypted` field
5. Original `ssn` field is set to null
6. Only authorized personnel can decrypt

**Environment Variables:**

```
SSN_ENCRYPTION_KEY=your_32_byte_base64_encoded_key
```

### 18.2 Payment Data Encryption

Non-PCI payment metadata is encrypted using AES-256-GCM.

**Encrypted Fields:**

- #### **Target System: Database**

#### **Objective: Remove hero section** **Periodicity: On-demand** **Interface: REST API** **URL: /api/hero/\[id\]** **Method Name: DELETE** **Input Type: URL parameter (id)** **Output Type: JSON** **Expected Output: Success message** **Macro Logic: Delete hero section in DB** **Watch-outs: Ensure valid ID** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

#### **None**

#### ---

### **1.3 Response Fields**

| S.No  | FieldName   | Api Tag Name | DataType   | Remarks             |
| ----- | ----------- | ------------ | ---------- | ------------------- |
| **1** | **message** | **message**  | **string** | **Success message** |

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **DELETE /api/hero/2**

####

#### **Response:**

#### **{**

#### **"message": "Hero section deleted successfully"**

#### **}**

####

#### ---

### **1.5 Error Handling**

- #### **500 Database error**

#### ---

### **1.6 Sample Postman Simulation**

- #### **Method: DELETE**

- #### **URL: http://localhost:3000/api/hero/2**

# **1\. Get All Features**

#### **API Name: Get All Features** **API Description: Retrieves all features; optionally limits the number of results returned.**

### **1.1 Work Unit Detail**

- #### **Job Code: FEATURE001**

- #### **Source System: property management system**

- #### **Target System: Database (Prisma/Feature Table)**

#### **Objective: Fetch all features, optionally filtered by limit.** **Periodicity: On-demand** **Interface: REST API** **URL: /api/feature** **Method Name: GET** **Input Type: Query parameter limit (optional)** **Output Type: JSON array** **Expected Output: Array of feature objects, including connected plans** **Macro Logic: Query all features; slice by limit if provided** **Watch-outs: limit must be numeric** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

#### **None**

#### ---

### **1.3 Response Fields**

| S.No  | FieldName       | Api Tag Name    | DataType    | Remarks                              |
| ----- | --------------- | --------------- | ----------- | ------------------------------------ |
| **1** | **id**          | **id**          | **integer** | **Feature ID**                       |
| **2** | **title**       | **title**       | **string**  | **Feature title**                    |
| **3** | **description** | **description** | **string**  | **Optional description**             |
| **4** | **plans**       | **plans**       | **array**   | **Connected plans (id, name, etc.)** |

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **GET /api/feature?limit=5**

####

#### **Response:**

#### **\[**

#### **{**

#### **"id": 1,**

#### **"title": "Premium Support",**

#### **"description": "24/7 customer support",**

#### **"plans": \[**

#### **{ "id": 2, "name": "Gold Plan" }**

#### **\]**

#### **}**

#### **\]**

####

#### ---

### **1.5 Error Handling**

- #### **500 Database error**

#### ---

### **1.6 Sample Postman Simulation**

- #### **Method: GET**

- #### **URL: http://localhost:3000/api/feature?limit=5**

#### ---

# **2\. Get Feature by ID**

#### **API Name: Get Feature by ID** **API Description: Retrieves a single feature by its ID.**

### **1.1 Work Unit Detail**

- #### **Job Code: FEATURE002**

- #### **Source System: property management system**

- #### **Target System: Database**

#### **Objective: Fetch a specific feature** **Periodicity: On-demand** **Interface: REST API** **URL: /api/feature/\[id\]** **Method Name: GET** **Input Type: URL parameter (id)** **Output Type: JSON object** **Expected Output: Feature object with connected plans** **Macro Logic: Retrieve feature by ID** **Watch-outs: Ensure numeric ID** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

#### **None**

#### ---

### **1.3 Response Fields**

#### **Same as Get All Features (single object)**

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **GET /api/feature/1**

####

#### **Response:**

#### **{**

#### **"id": 1,**

#### **"title": "Premium Support",**

#### **"description": "24/7 customer support",**

#### **"plans": \[**

#### **{ "id": 2, "name": "Gold Plan" }**

#### **\]**

#### **}**

####

#### ---

### **1.5 Error Handling**

- #### **404 Feature not found**

- #### **400 Invalid feature ID**

- #### **500 Database error**

#### ---

### **1.6 Sample Postman Simulation**

- #### **Method: GET**

- #### **URL: http://localhost:3000/api/feature/1**

#### ---

# **3\. Create Feature**

#### **API Name: Create Feature** **API Description: Creates a new feature and optionally associates it with a plan.**

### **1.1 Work Unit Detail**

- #### **Job Code: FEATURE003**

- #### **Source System: property management system**

- #### **Target System: Database**

#### **Objective: Add a new feature** **Periodicity: On-demand** **Interface: REST API** **URL: /api/feature** **Method Name: POST** **Input Type: JSON Body** **Output Type: JSON object** **Expected Output: Created feature object** **Macro Logic: Insert new feature; connect to plan if planId provided** **Watch-outs: Validate numeric planId** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

| S.No  | FieldName       | Api Tag Name    | DataType    | Remarks                                |
| ----- | --------------- | --------------- | ----------- | -------------------------------------- |
| **1** | **title**       | **title**       | **string**  | **Required**                           |
| **2** | **description** | **description** | **string**  | **Optional**                           |
| **3** | **planId**      | **planId**      | **integer** | **Optional; connects feature to plan** |

#### ---

### **1.3 Response Fields**

#### **Same as Get Feature by ID**

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **POST /api/feature**

#### **{**

#### **"title": "Advanced Analytics",**

#### **"description": "Insights for recycling trends",**

#### **"planId": 1**

#### **}**

####

#### **Response:**

#### **{**

#### **"id": 5,**

#### **"title": "Advanced Analytics",**

#### **"description": "Insights for recycling trends",**

#### **"plans": \[**

#### **{ "id": 1, "name": "Basic Plan" }**

#### **\]**

#### **}**

####

#### ---

### **1.5 Error Handling**

- #### **500 Database error**

#### ---

### **1.6 Sample Postman Simulation**

- #### **Method: POST**

- #### **URL: http://localhost:3000/api/feature**

#### ---

# **4\. Update Feature**

#### **API Name: Update Feature** **API Description: Updates an existing feature by ID and optionally changes its associated plan.**

### **1.1 Work Unit Detail**

- #### **Job Code: FEATURE004**

- #### **Source System: property management system**

- #### **Target System: Database**

#### **Objective: Update a feature** **Periodicity: On-demand** **Interface: REST API** **URL: /api/feature/\[id\]** **Method Name: PUT** **Input Type: JSON Body** **Output Type: JSON object** **Expected Output: Updated feature object** **Macro Logic: Update DB record; optionally replace plan association** **Watch-outs: Numeric ID; optional fields** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

| S.No  | FieldName       | Api Tag Name    | DataType    | Remarks                                         |
| ----- | --------------- | --------------- | ----------- | ----------------------------------------------- |
| **1** | **title**       | **title**       | **string**  | **Optional**                                    |
| **2** | **description** | **description** | **string**  | **Optional**                                    |
| **3** | **planId**      | **planId**      | **integer** | **Optional; replaces current plan association** |

#### ---

### **1.3 Response Fields**

#### **Same as Get Feature by ID**

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **PUT /api/feature/5**

#### **{**

#### **"title": "Premium Analytics",**

#### **"planId": 2**

#### **}**

####

#### **Response:**

#### **{**

#### **"id": 5,**

#### **"title": "Premium Analytics",**

#### **"description": "Insights for recycling trends",**

#### **"plans": \[**

#### **{ "id": 2, "name": "Gold Plan" }**

#### **\]**

#### **}**

####

#### ---

### **1.5 Error Handling**

- #### **400 Invalid feature ID**

- #### **404 Feature not found**

- #### **500 Database error**

#### ---

### **1.6 Sample Postman Simulation**

- #### **Method: PUT**

- #### **URL: http://localhost:3000/api/feature/5**

#### ---

# **5\. Delete Feature**

#### **API Name: Delete Feature** **API Description: Deletes a feature by ID.**

### **1.1 Work Unit Detail**

- #### **Job Code: FEATURE005**

- #### **Source System: property management system**

- #### **Target System: Database**

#### **Objective: Remove a feature** **Periodicity: On-demand** **Interface: REST API** **URL: /api/feature/\[id\]** **Method Name: DELETE** **Input Type: URL parameter (id)** **Output Type: JSON** **Expected Output: Success message** **Macro Logic: Delete feature in DB** **Watch-outs: Ensure numeric ID** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

#### **None**

#### ---

### **1.3 Response Fields**

| S.No  | FieldName   | Api Tag Name | DataType   | Remarks             |
| ----- | ----------- | ------------ | ---------- | ------------------- |
| **1** | **message** | **message**  | **string** | **Success message** |

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **DELETE /api/feature/5**

####

#### **Response:**

#### **{**

#### **"message": "Feature deleted successfully"**

#### **}**

####

#### ---

### **1.5 Error Handling**

- #### **400 Invalid feature ID**

- #### **500 Database error**

####

#### **1 Get All CTAs**

#### **API Name: Get All CTAs** **API Description: Retrieves all CTA (Call To Action) entries, ordered by creation date descending.**

### **1.1 Work Unit Detail**

- #### **Job Code: CTA001**

- #### **Source System: property management system**

- #### **Target System: Database (Prisma/cTA Table)**

#### **Objective: Fetch all CTA entries** **Periodicity: On-demand** **Interface: REST API** **URL: /api/cta** **Method Name: GET** **Input Type: None** **Output Type: JSON array** **Expected Output: Array of CTA objects** **Macro Logic: Query all CTAs from the database, order by createdAt descending** **Watch-outs: None** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

#### **None**

#### ---

### **1.3 Response Fields**

| S.No  | FieldName      | Api Tag Name   | DataType    | Remarks                      |
| ----- | -------------- | -------------- | ----------- | ---------------------------- |
| **1** | **id**         | **id**         | **integer** | **CTA ID**                   |
| **2** | **page**       | **page**       | **string**  | **Page where CTA appears**   |
| **3** | **title**      | **title**      | **string**  | **CTA title**                |
| **4** | **subtitle**   | **subtitle**   | **string**  | **Optional subtitle**        |
| **5** | **buttonText** | **buttonText** | **string**  | **Text displayed on button** |
| **6** | **buttonUrl**  | **buttonUrl**  | **string**  | **URL button points to**     |
| **7** | **gradient**   | **gradient**   | **string**  | **Gradient style for CTA**   |
| **8** | **updatedAt**  | **updatedAt**  | **string**  | **Timestamp of last update** |

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **GET /api/cta**

####

#### **Response:**

#### **\[**

#### **{**

#### **"id": 1,**

#### **"page": "home",**

#### **"title": "Join Recycling",**

#### **"subtitle": "Start today",**

#### **"buttonText": "Sign Up",**

#### **"buttonUrl": "/signup",**

#### **"gradient": "linear-gradient(to right, \#00f, \#0ff)",**

#### **"updatedAt": "2025-11-25T18:30:00Z"**

#### **}**

#### **\]**

####

#### ---

### **1.5 Error Handling**

- #### **500 Database error**

#### ---

### **1.6 Sample Postman Simulation**

- #### **Method: GET**

- #### **URL: http://localhost:3000/api/cta**

#### ---

# **2\. Get CTA by ID**

#### **API Name: Get CTA by ID** **API Description: Retrieves a single CTA entry by its ID.**

### **1.1 Work Unit Detail**

- #### **Job Code: CTA002**

- #### **Source System: property management system**

- #### **Target System: Database**

#### **Objective: Fetch a specific CTA entry** **Periodicity: On-demand** **Interface: REST API** **URL: /api/cta/\[id\]** **Method Name: GET** **Input Type: URL parameter (id)** **Output Type: JSON object** **Expected Output: CTA object** **Macro Logic: Retrieve CTA by ID** **Watch-outs: Ensure numeric ID** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

#### **None**

#### ---

### **1.3 Response Fields**

#### **Same as Get All CTAs (single object)**

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **GET /api/cta/1**

####

#### **Response:**

#### **{**

#### **"id": 1,**

#### **"page": "home",**

#### **"title": "Join Recycling",**

#### **"subtitle": "Start today",**

#### **"buttonText": "Sign Up",**

#### **"buttonUrl": "/signup",**

#### **"gradient": "linear-gradient(to right, \#00f, \#0ff)",**

#### **"updatedAt": "2025-11-25T18:30:00Z"**

#### **}**

####

#### ---

### **1.5 Error Handling**

- #### **404 CTA not found**

- #### **500 Database error**

#### ---

### **1.6 Sample Postman Simulation**

- #### **Method: GET**

- #### **URL: http://localhost:3000/api/cta/1**

#### ---

# **3\. Create CTA**

#### **API Name: Create CTA** **API Description: Creates a new CTA entry.**

### **1.1 Work Unit Detail**

- #### **Job Code: CTA003**

- #### **Source System: property management system**

- #### **Target System: Database**

#### **Objective: Add a new CTA entry** **Periodicity: On-demand** **Interface: REST API** **URL: /api/cta** **Method Name: POST** **Input Type: JSON Body** **Output Type: JSON object** **Expected Output: Created CTA object** **Macro Logic: Insert new CTA into database** **Watch-outs: Required fields: page, title** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

| S.No  | FieldName      | Api Tag Name   | DataType   | Remarks      |
| ----- | -------------- | -------------- | ---------- | ------------ |
| **1** | **page**       | **page**       | **string** | **Required** |
| **2** | **title**      | **title**      | **string** | **Required** |
| **3** | **subtitle**   | **subtitle**   | **string** | **Optional** |
| **4** | **buttonText** | **buttonText** | **string** | **Optional** |
| **5** | **buttonUrl**  | **buttonUrl**  | **string** | **Optional** |
| **6** | **gradient**   | **gradient**   | **string** | **Optional** |

#### ---

### **1.3 Response Fields**

#### **Same as Get All CTAs (single object)**

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **POST /api/cta**

#### **{**

#### **"page": "home",**

#### **"title": "Join Recycling",**

#### **"subtitle": "Start today",**

#### **"buttonText": "Sign Up",**

#### **"buttonUrl": "/signup",**

#### **"gradient": "linear-gradient(to right, \#00f, \#0ff)"**

#### **}**

####

#### **Response:**

#### **{**

#### **"id": 2,**

#### **"page": "home",**

#### **"title": "Join Recycling",**

#### **"subtitle": "Start today",**

#### **"buttonText": "Sign Up",**

#### **"buttonUrl": "/signup",**

#### **"gradient": "linear-gradient(to right, \#00f, \#0ff)",**

#### **"updatedAt": "2025-11-25T18:45:00Z"**

#### **}**

####

#### ---

### **1.5 Error Handling**

- #### **400 Missing required fields**

- #### **500 Database error**

#### ---

### **1.6 Sample Postman Simulation**

- #### **Method: POST**

- #### **URL: http://localhost:3000/api/cta**

#### ---

# **4\. Update CTA**

#### **API Name: Update CTA** **API Description: Updates an existing CTA entry by ID.**

### **1.1 Work Unit Detail**

- #### **Job Code: CTA004**

- #### **Source System: property management system**

- #### **Target System: Database**

#### **Objective: Update a CTA entry** **Periodicity: On-demand** **Interface: REST API** **URL: /api/cta/\[id\]** **Method Name: PUT** **Input Type: JSON Body** **Output Type: JSON object** **Expected Output: Updated CTA object** **Macro Logic: Update DB record by ID** **Watch-outs: Numeric ID required** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

| S.No  | FieldName      | Api Tag Name   | DataType   | Remarks      |
| ----- | -------------- | -------------- | ---------- | ------------ |
| **1** | **page**       | **page**       | **string** | **Optional** |
| **2** | **title**      | **title**      | **string** | **Optional** |
| **3** | **subtitle**   | **subtitle**   | **string** | **Optional** |
| **4** | **buttonText** | **buttonText** | **string** | **Optional** |
| **5** | **buttonUrl**  | **buttonUrl**  | **string** | **Optional** |
| **6** | **gradient**   | **gradient**   | **string** | **Optional** |

#### ---

### **1.3 Response Fields**

#### **Same as Get All CTAs (single object)**

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **PUT /api/cta/2**

#### **{**

#### **"title": "Start Recycling Today",**

#### **"buttonText": "Register Now"**

#### **}**

####

#### **Response:**

#### **{**

#### **"id": 2,**

#### **"page": "home",**

#### **"title": "Start Recycling Today",**

#### **"subtitle": "Start today",**

#### **"buttonText": "Register Now",**

#### **"buttonUrl": "/signup",**

#### **"gradient": "linear-gradient(to right, \#00f, \#0ff)",**

#### **"updatedAt": "2025-11-25T18:50:00Z"**

#### **}**

####

#### ---

### **1.5 Error Handling**

- #### **500 Database error**

#### ---

### **1.6 Sample Postman Simulation**

- #### **Method: PUT**

- #### **URL: http://localhost:3000/api/cta/2**

#### ---

# **5\. Delete CTA**

#### **API Name: Delete CTA** **API Description: Deletes a CTA entry by ID.**

### **1.1 Work Unit Detail**

- #### **Job Code: CTA005**

- #### **Source System: property management system**

- #### **Target System: Database**

#### **Objective: Remove a CTA entry** **Periodicity: On-demand** **Interface: REST API** **URL: /api/cta/\[id\]** **Method Name: DELETE** **Input Type: URL parameter (id)** **Output Type: JSON** **Expected Output: Success message** **Macro Logic: Delete CTA in DB** **Watch-outs: Ensure numeric ID** **Performance: Fast**

#### ---

### **1.2 Request Body Parameters**

#### **None**

#### ---

### **1.3 Response Fields**

| S.No  | FieldName   | Api Tag Name | DataType   | Remarks             |
| ----- | ----------- | ------------ | ---------- | ------------------- |
| **1** | **message** | **message**  | **string** | **Success message** |

#### ---

### **1.4 Request \- Response Sample**

#### **Request:**

#### **DELETE /api/cta/2**

####

#### **Response:**

#### **{**

#### **"message": "CTA deleted successfully"**

#### **}**

####

#### ---

### **1.5 Error Handling**

- #### **500 Database error**
