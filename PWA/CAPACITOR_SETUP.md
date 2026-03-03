# Capacitor Setup Guide for SmartDensity PWA

## Overview
This guide explains how to build and deploy your SmartDensity PWA as native iOS and Android applications using Apache Capacitor.

## Prerequisites

- **Node.js & npm/yarn** - Ensure you have Node.js installed
- **iOS Development** (macOS only):
  - Xcode 14.1+ from the App Store
  - Xcode command line tools: `xcode-select --install`
  - CocoaPods: `sudo gem install cocoapods`
  
- **Android Development** (Windows, macOS, or Linux):
  - Android Studio 2022.1+
  - Java Development Kit (JDK) 11+
  - Android SDK API Level 24+

## Installation & Initial Setup

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Build the Web Project
```bash
npm run build
# or
yarn build
```

This creates the optimized build in the `out/` directory that Capacitor will use for native builds.

## Adding Platforms

### Add iOS Support (macOS only)
```bash
npm run cap:add ios
# or
npx cap add ios
```

### Add Android Support
```bash
npm run cap:add android
# or
npx cap add android
```

This will create `ios/` and `android/` directories with the native project files.

## Development Workflow

### 1. Sync Changes
After making changes to your Next.js app, sync them to native projects:
```bash
npm run cap:sync
# or
npx cap sync
```

### 2. Open in IDEs
```bash
# Open iOS project in Xcode
npm run cap:open ios
# or
npx cap open ios

# Open Android project in Android Studio
npm run cap:open android
# or
npx cap open android
```

### 3. Build and Run

#### iOS
- In Xcode: Select target device/simulator → Click Play button
- Or from CLI: 
```bash
npx cap build ios
```

#### Android
- In Android Studio: Click Run button or use Shift + F10
- Or from CLI:
```bash
npx cap build android
```

## Complete Build Process

### For iOS
```bash
npm run build          # Build web assets
npm run cap:sync      # Sync to iOS
npm run cap:open ios  # Open in Xcode
# Then build in Xcode
```

### For Android
```bash
npm run build             # Build web assets
npm run cap:sync        # Sync to Android
npm run cap:open android # Open in Android Studio
# Then build/run in Android Studio
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run cap` | Show Capacitor help |
| `npm run cap:add` | Add a platform (ios/android) |
| `npm run cap:sync` | Copy web assets to native projects |
| `npm run cap:open ios` | Open iOS project in Xcode |
| `npm run cap:open android` | Open Android project in Android Studio |
| `npm run cap:build` | Build web and copy to native |
| `npm run cap:prebuild` | Prepare for native building |

## Configuration

The app configuration is defined in `capacitor.config.ts`:

- **appId**: `com.smartdensity.pwa`
- **appName**: SmartDensity
- **webDir**: `out` (Next.js exported build directory)
- **Plugins**: Configured for SplashScreen, StatusBar, and SafeArea

## Common Issues

### Build Output Not Found
Ensure you run `npm run build` before syncing. The `out/` directory must exist.

### iOS Build Fails
- Run `pod install` in the `ios/` directory
- Update CocoaPods: `pod repo update`
- Check Xcode settings match your deployment target

### Android Build Fails
- Ensure Android SDK is properly installed
- Check environment variables: `ANDROID_HOME`, `JAVA_HOME`
- Run `./gradlew clean build` in the `android/` directory

### Changes Not Reflecting
Always run `npm run cap:sync` after changes to ensure web assets are copied to native projects.

## Native Plugins

The app currently includes integrations for:
- **@capacitor/geolocation** - For location-based density prediction
- **@capacitor/camera** - For any future image capture features
- **@capacitor/network** - For network status detection
- **@capacitor/app** - For app lifecycle management

## Next Steps

1. Install all dependencies: `npm install`
2. Build the web project: `npm run build`
3. Add iOS platform (macOS only): `npm run cap:add ios`
4. Add Android platform: `npm run cap:add android`
5. Open projects in respective IDEs: `npm run cap:open ios/android`
6. Follow IDE build instructions

## Resources

- [Capacitor Documentation](https://capacitorjs.com/)
- [Ionic Blog - Capacitor Guides](https://ionic.io/blog)
- [iOS Development Setup](https://capacitorjs.com/docs/ios)
- [Android Development Setup](https://capacitorjs.com/docs/android)
