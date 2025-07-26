#!/bin/bash

# Portfolio Deployment Script
# Supports multiple deployment targets: Vercel, Netlify, GitHub Pages

set -e

echo "🚀 Portfolio Deployment Script"
echo "=============================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "frontend/package.json" ]; then
    print_error "frontend/package.json not found. Please run this script from the root directory."
    exit 1
fi

# Parse command line arguments
DEPLOYMENT_TARGET=""
ENVIRONMENT="production"

while [[ $# -gt 0 ]]; do
    case $1 in
        -t|--target)
            DEPLOYMENT_TARGET="$2"
            shift 2
            ;;
        -e|--env)
            ENVIRONMENT="$2"
            shift 2
            ;;
        -h|--help)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  -t, --target    Deployment target (vercel|netlify|github-pages|all)"
            echo "  -e, --env       Environment (development|production) [default: production]"
            echo "  -h, --help      Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0 --target vercel"
            echo "  $0 --target netlify --env production"
            echo "  $0 --target github-pages"
            echo "  $0 --target all"
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use -h or --help for usage information."
            exit 1
            ;;
    esac
done

# If no target specified, ask user
if [ -z "$DEPLOYMENT_TARGET" ]; then
    echo ""
    echo "Select deployment target:"
    echo "1) Vercel (Recommended)"
    echo "2) Netlify"
    echo "3) GitHub Pages"
    echo "4) All platforms"
    echo "5) Exit"
    echo ""
    read -p "Enter your choice (1-5): " choice
    
    case $choice in
        1) DEPLOYMENT_TARGET="vercel" ;;
        2) DEPLOYMENT_TARGET="netlify" ;;
        3) DEPLOYMENT_TARGET="github-pages" ;;
        4) DEPLOYMENT_TARGET="all" ;;
        5) exit 0 ;;
        *) print_error "Invalid choice"; exit 1 ;;
    esac
fi

print_info "Deployment target: $DEPLOYMENT_TARGET"
print_info "Environment: $ENVIRONMENT"

# Navigate to frontend directory
cd frontend

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_info "Installing dependencies..."
    yarn install
fi

# Build the application
print_info "Building application for $ENVIRONMENT..."
if [ "$ENVIRONMENT" = "production" ]; then
    yarn build
else
    print_warning "Development build not recommended for deployment"
    yarn build
fi

if [ $? -ne 0 ]; then
    print_error "Build failed!"
    exit 1
fi

print_success "Build completed successfully!"

# Deploy based on target
deploy_vercel() {
    print_info "Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    if [ "$ENVIRONMENT" = "production" ]; then
        vercel --prod --yes
    else
        vercel --yes
    fi
    
    if [ $? -eq 0 ]; then
        print_success "Successfully deployed to Vercel!"
    else
        print_error "Vercel deployment failed!"
        return 1
    fi
}

deploy_netlify() {
    print_info "Deploying to Netlify..."
    
    if ! command -v netlify &> /dev/null; then
        print_warning "Netlify CLI not found. Installing..."
        npm install -g netlify-cli
    fi
    
    if [ "$ENVIRONMENT" = "production" ]; then
        netlify deploy --prod --dir=build
    else
        netlify deploy --dir=build
    fi
    
    if [ $? -eq 0 ]; then
        print_success "Successfully deployed to Netlify!"
    else
        print_error "Netlify deployment failed!"
        return 1
    fi
}

deploy_github_pages() {
    print_info "Deploying to GitHub Pages..."
    
    # Check if gh-pages is installed
    if ! yarn list gh-pages &> /dev/null; then
        print_warning "gh-pages not found. Installing..."
        yarn add --dev gh-pages
    fi
    
    yarn deploy
    
    if [ $? -eq 0 ]; then
        print_success "Successfully deployed to GitHub Pages!"
        print_info "Your site will be available at: https://sushildahiya.github.io/portfolio"
    else
        print_error "GitHub Pages deployment failed!"
        return 1
    fi
}

# Execute deployment
case $DEPLOYMENT_TARGET in
    "vercel")
        deploy_vercel
        ;;
    "netlify")
        deploy_netlify
        ;;
    "github-pages")
        deploy_github_pages
        ;;
    "all")
        print_info "Deploying to all platforms..."
        echo ""
        
        deploy_vercel
        echo ""
        
        deploy_netlify
        echo ""
        
        deploy_github_pages
        echo ""
        ;;
    *)
        print_error "Invalid deployment target: $DEPLOYMENT_TARGET"
        exit 1
        ;;
esac

print_success "Deployment process completed!"

# Final instructions
echo ""
echo "🎉 Deployment Summary"
echo "===================="
echo ""

case $DEPLOYMENT_TARGET in
    "vercel")
        echo "✅ Vercel: Check your terminal output for the deployment URL"
        echo "📊 Dashboard: https://vercel.com/dashboard"
        ;;
    "netlify")
        echo "✅ Netlify: Check your terminal output for the deployment URL"
        echo "📊 Dashboard: https://app.netlify.com/"
        ;;
    "github-pages")
        echo "✅ GitHub Pages: https://sushildahiya.github.io/portfolio"
        echo "📊 Repository: https://github.com/sushildahiya/portfolio"
        echo "⏳ Note: GitHub Pages may take a few minutes to update"
        ;;
    "all")
        echo "✅ All platforms deployed successfully!"
        echo "🔗 Check individual platform dashboards for URLs"
        ;;
esac

echo ""
echo "📝 Next Steps:"
echo "1. Test your deployed portfolio"
echo "2. Update DNS settings if using a custom domain"
echo "3. Set up monitoring and analytics"
echo "4. Share your portfolio link!"
echo ""

print_success "Happy coding! 🚀"