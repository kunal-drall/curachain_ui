# CuraChain: Decentralized Crowdfunding Platform on Solana

CuraChain is a blockchain-based crowdfunding platform built on the Solana network that enables transparent, secure, and low-fee fundraising campaigns.

![CuraChain Banner](https://i.imgur.com/placeholder.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Smart Contract](#smart-contract)
- [Frontend](#frontend)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)

## Overview

CuraChain addresses the limitations of traditional crowdfunding platforms by leveraging blockchain technology to create a more transparent, secure, and cost-effective fundraising solution. By using Solana's high-performance blockchain, CuraChain provides faster transaction processing and lower fees compared to traditional platforms.

The platform allows users to:
- Create and manage fundraising campaigns
- Donate to campaigns using SOL cryptocurrency
- Track campaign progress with real-time updates
- Withdraw funds with automated fee distribution
- Manage platform settings (for administrators)

## Features

### For Campaign Creators
- **Campaign Creation**: Create campaigns with titles, descriptions, images, and funding goals
- **Campaign Management**: Edit campaign details, view donation history
- **Withdrawals**: Withdraw funds with automatic platform fee distribution
- **Campaign Deletion**: Mark campaigns as inactive when they're complete

### For Donors
- **Browse Campaigns**: Explore active fundraising campaigns
- **Campaign Details**: View detailed information about each campaign
- **Transparent Donations**: Send SOL directly to campaign wallets with on-chain transparency
- **Transaction History**: View your donation history

### For Platform Administrators
- **Platform Fee Management**: Adjust the platform fee percentage (between 1-15%)
- **Program Initialization**: Initialize the platform with default settings

## Architecture

CuraChain follows a modern web3 architecture with the following components:

### High-Level Architecture

```
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│                     │     │                     │     │                     │
│   Next.js Frontend  │◄───►│  Solana Blockchain  │◄───►│   Anchor Program    │
│                     │     │                     │     │                     │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘
          ▲                                                       ▲
          │                                                       │
          │                                                       │
          │                                                       │
          ▼                                                       ▼
┌─────────────────────┐                              ┌─────────────────────┐
│                     │                              │                     │
│   Wallet Adapter    │                              │   Program Accounts  │
│                     │                              │                     │
└─────────────────────┘                              └─────────────────────┘
```

### Components

1. **Smart Contract (Anchor Program)**:
   - Written in Rust using the Anchor framework
   - Manages campaign creation, donations, withdrawals
   - Handles program initialization and platform settings

2. **Frontend Application**:
   - Built with Next.js and React
   - Redux for state management
   - Solana Wallet Adapter for wallet integration

3. **Data Storage**:
   - Campaign data stored on-chain in Solana program accounts
   - Transaction history recorded on-chain

4. **User Authentication**:
   - Wallet-based authentication (Phantom, Solflare)
   - Role-based access control for campaign management

## Smart Contract

The smart contract is built using the Anchor framework and consists of the following main components:

### Program Accounts

1. **ProgramState**: Stores global program configuration
   - Platform fee percentage
   - Campaign counter
   - Platform administrator address

2. **Campaign**: Stores information about each fundraising campaign
   - Title, description, image URL
   - Goal amount and amount raised
   - Creator address
   - Campaign status

3. **Transaction**: Records donation and withdrawal transactions
   - Transaction amount
   - Campaign ID reference
   - Owner address
   - Timestamp

### Instructions

1. **Initialize**: Set up the program with initial configuration
2. **CreateCampaign**: Create a new fundraising campaign
3. **UpdateCampaign**: Modify campaign details
4. **DeleteCampaign**: Mark a campaign as inactive
5. **Donate**: Send SOL to a campaign
6. **Withdraw**: Withdraw funds from a campaign (with platform fee)
7. **UpdatePlatformSettings**: Modify platform settings

## Frontend

The frontend is built with Next.js and React, providing a responsive and intuitive user interface.

### Pages

- **Home**: Displays featured campaigns and platform information
- **Campaign Details**: Shows detailed information about a specific campaign
- **Create Campaign**: Form for creating new campaigns
- **Edit Campaign**: Form for editing existing campaigns
- **Account**: User dashboard for managing campaigns
- **Platform Settings**: Admin panel for platform configuration

### State Management

- Redux for global state management
- React hooks for component-level state
- Solana Web3.js for blockchain interaction

### UI Components

- Campaign cards for browsing campaigns
- Donation form for contributing to campaigns
- Progress bars for tracking campaign funding
- Transaction history displays
- Modal dialogs for confirmations

## Getting Started

### Prerequisites

- Node v18.18.0 or higher
- Rust v1.77.2 or higher
- Anchor CLI 0.30.1 or higher
- Solana CLI 1.18.17 or higher

### Installation

#### Clone the repo

```shell
git clone <repo-url>
cd <repo-name>
```

#### Install Dependencies

```shell
pnpm install
```

#### Start the web app

```
pnpm dev
```

## Usage Guide

### Creating a Campaign

1. Connect your wallet
2. Navigate to "Create Campaign"
3. Fill in the required details
4. Submit the transaction
5. Your campaign will be visible on the platform

### Donating to a Campaign

1. Browse campaigns or search for a specific one
2. Click on a campaign to view details
3. Enter the amount you wish to donate
4. Approve the transaction in your wallet

### Withdrawing Funds

1. Go to your account page
2. Find the campaign you created
3. Click on "Withdraw"
4. Enter the amount to withdraw
5. Approve the transaction

### Updating Platform Settings (Admin only)

1. Connect with the admin wallet
2. Navigate to platform settings
3. Adjust the platform fee percentage
4. Submit the changes

## Development

### Anchor Program

#### Sync the program id:

Running this command will create a new keypair in the `anchor/target/deploy` directory and save the address to the Anchor config file and update the `declare_id!` macro in the `./src/lib.rs` file of the program.

You will manually need to update the constant in `anchor/lib/basic-exports.ts` to match the new program id.

```shell
pnpm anchor keys sync
```

#### Build the program:

```shell
pnpm anchor-build
```

#### Start the test validator with the program deployed:

```shell
pnpm anchor-localnet
```

### Web App

The web app is built with Next.js. You can use the following commands to work with it:

```shell
# Start the development server
pnpm dev

# Build for production
pnpm build

# Start the production server
pnpm start
```

## Testing

### Smart Contract Tests

The Anchor program includes comprehensive tests to ensure functionality and security:

```shell
pnpm anchor-test
```

These tests verify:
- Campaign creation and management
- Donation handling
- Withdrawal logic with fee distribution
- Platform administration

### Frontend Testing

To run frontend tests:

```shell
pnpm test
```

## Deployment

### Deploying the Smart Contract

To deploy the Anchor program to devnet:

```shell
pnpm anchor deploy --provider.cluster devnet
```

To deploy to mainnet:

```shell
pnpm anchor deploy --provider.cluster mainnet-beta
```

### Deploying the Web App

The web app can be deployed to any hosting platform that supports Next.js:

```shell
pnpm build
```

Then deploy the generated output according to your hosting provider's instructions.

## Future Enhancements

- **Multi-token Support**: Enable donations in various SPL tokens
- **Campaign Categories**: Add categorization for better discovery
- **Campaign Updates**: Allow creators to post updates
- **Social Integration**: Share campaigns on social media
- **Advanced Analytics**: Detailed metrics for campaign performance
- **Mobile App**: Native mobile application for iOS and Android

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Solana Foundation
- Anchor Framework
- Next.js and React
- The blockchain community