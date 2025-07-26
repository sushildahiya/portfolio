#!/bin/bash

# Git Setup and Push Script for Portfolio
# Automatically initializes git, commits, and pushes to GitHub

set -e

echo "📦 Git Setup & GitHub Push Script"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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

# Default values
REPO_NAME="portfolio"
GITHUB_USERNAME=""
COMMIT_MESSAGE="Initial commit: Complete portfolio with 3D animations and responsive design"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -u|--username)
            GITHUB_USERNAME="$2"
            shift 2
            ;;
        -r|--repo)
            REPO_NAME="$2"
            shift 2
            ;;
        -m|--message)
            COMMIT_MESSAGE="$2"
            shift 2
            ;;
        -h|--help)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  -u, --username    GitHub username (required)"
            echo "  -r, --repo        Repository name [default: portfolio]"
            echo "  -m, --message     Commit message [default: Initial commit...]"
            echo "  -h, --help        Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0 --username sushildahiya"
            echo "  $0 --username sushildahiya --repo my-portfolio"
            echo "  $0 -u sushildahiya -r portfolio -m 'Add portfolio website'"
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use -h or --help for usage information."
            exit 1
            ;;
    esac
done

# Get GitHub username if not provided
if [ -z "$GITHUB_USERNAME" ]; then
    echo ""
    read -p "Enter your GitHub username: " GITHUB_USERNAME
    
    if [ -z "$GITHUB_USERNAME" ]; then
        print_error "GitHub username is required!"
        exit 1
    fi
fi

print_info "GitHub Username: $GITHUB_USERNAME"
print_info "Repository Name: $REPO_NAME"
print_info "Commit Message: $COMMIT_MESSAGE"

# Confirm before proceeding
echo ""
read -p "Do you want to proceed? (y/N): " confirm
if [[ ! $confirm =~ ^[Yy]$ ]]; then
    print_info "Operation cancelled."
    exit 0
fi

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check current directory
if [ ! -f "frontend/package.json" ]; then
    print_error "frontend/package.json not found. Please run this script from the project root directory."
    exit 1
fi

print_info "Setting up Git repository..."

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    print_info "Initializing Git repository..."
    git init
    print_success "Git repository initialized!"
else
    print_warning "Git repository already exists."
fi

# Set up .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    print_warning ".gitignore not found. Using default .gitignore."
fi

# Configure git user (optional)
echo ""
read -p "Configure Git user name (press Enter to skip): " git_name
if [ ! -z "$git_name" ]; then
    git config user.name "$git_name"
    print_success "Git user name set to: $git_name"
fi

read -p "Configure Git user email (press Enter to skip): " git_email
if [ ! -z "$git_email" ]; then
    git config user.email "$git_email"
    print_success "Git user email set to: $git_email"
fi

# Add all files
print_info "Adding files to Git..."
git add .

if [ $? -ne 0 ]; then
    print_error "Failed to add files to Git!"
    exit 1
fi

print_success "Files added to Git!"

# Check if there are changes to commit
if git diff --staged --quiet; then
    print_warning "No changes to commit."
else
    # Commit changes
    print_info "Committing changes..."
    git commit -m "$COMMIT_MESSAGE"
    
    if [ $? -ne 0 ]; then
        print_error "Failed to commit changes!"
        exit 1
    fi
    
    print_success "Changes committed!"
fi

# Check if remote origin exists
if git remote get-url origin &> /dev/null; then
    print_warning "Remote origin already exists:"
    git remote get-url origin
    echo ""
    read -p "Do you want to update the remote URL? (y/N): " update_remote
    
    if [[ $update_remote =~ ^[Yy]$ ]]; then
        git remote set-url origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
        print_success "Remote URL updated!"
    fi
else
    # Add remote origin
    print_info "Adding remote origin..."
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    print_success "Remote origin added!"
fi

# Get current branch name
CURRENT_BRANCH=$(git branch --show-current)
if [ -z "$CURRENT_BRANCH" ]; then
    CURRENT_BRANCH="main"
    git checkout -b main
fi

print_info "Current branch: $CURRENT_BRANCH"

# Push to GitHub
print_info "Pushing to GitHub..."
echo ""
print_warning "Make sure you have created the repository '$REPO_NAME' on GitHub first!"
print_info "Repository URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""
read -p "Press Enter to continue with push, or Ctrl+C to cancel..."

# Push to remote
git push -u origin $CURRENT_BRANCH

if [ $? -eq 0 ]; then
    print_success "Successfully pushed to GitHub!"
else
    print_error "Failed to push to GitHub!"
    echo ""
    print_info "Possible solutions:"
    echo "1. Create the repository on GitHub: https://github.com/new"
    echo "2. Check your GitHub authentication (token/SSH key)"
    echo "3. Ensure repository name matches: $REPO_NAME"
    exit 1
fi

# Success message
echo ""
print_success "🎉 Repository setup complete!"
echo ""
echo "📊 Repository Information:"
echo "=========================="
echo "🔗 GitHub URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "🌐 Clone URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
echo "📁 Branch: $CURRENT_BRANCH"
echo ""
echo "📝 Next Steps:"
echo "1. Visit your GitHub repository"
echo "2. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)"
echo "3. Run deployment script: ./deployment/deploy.sh"
echo "4. Configure custom domain (optional)"
echo ""
echo "🚀 Deployment URLs (after deployment):"
echo "• GitHub Pages: https://$GITHUB_USERNAME.github.io/$REPO_NAME"
echo "• Vercel: Will be provided after deployment"
echo "• Netlify: Will be provided after deployment"
echo ""
print_success "Happy coding! ✨"