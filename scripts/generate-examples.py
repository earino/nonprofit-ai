#!/usr/bin/env python3
"""
Generate multi-model example outputs for prompts using OpenRouter API.

Usage:
    python scripts/generate-examples.py --prompt thank-you-first-time-donor
    python scripts/generate-examples.py --all
    python scripts/generate-examples.py --dry-run
"""

import argparse
import os
import re
import sys
from pathlib import Path
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
PROMPTS_DIR = Path("src/content/prompts")

MODELS = {
    "chatgpt": "openai/gpt-4o",
    "claude": "anthropic/claude-3.5-sonnet",
    "gemini": "google/gemini-pro-1.5"
}

MODEL_DISPLAY_NAMES = {
    "chatgpt": "ChatGPT (GPT-4o)",
    "claude": "Claude (Sonnet 3.5)",
    "gemini": "Gemini (1.5 Pro)"
}


def extract_prompt_text(markdown_content):
    """Extract the prompt text from the first code block in markdown."""
    match = re.search(r'```\n([\s\S]*?)\n```', markdown_content)
    if match:
        return match.group(1).strip()
    return None


def generate_output(prompt_text, model_key, dry_run=False):
    """Generate output from a specific model via OpenRouter."""
    if dry_run:
        return f"[Dry run - would call {model_key}]"

    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key=OPENROUTER_API_KEY,
    )

    try:
        completion = client.chat.completions.create(
            model=MODELS[model_key],
            messages=[
                {"role": "user", "content": prompt_text}
            ]
        )
        return completion.choices[0].message.content
    except Exception as e:
        print(f"Error calling {model_key}: {e}")
        return None


def update_markdown_with_outputs(markdown_path, outputs):
    """Update markdown file with generated outputs."""
    with open(markdown_path, 'r') as f:
        content = f.read()

    # Remove existing Example Output section if present
    content = re.sub(
        r'## Example Output[s]?.*?(?=##|\Z)',
        '',
        content,
        flags=re.DOTALL
    )

    # Build new Example Outputs section
    example_section = "\n## Example Outputs\n\n"
    example_section += "We tested this prompt with three AI models. Here's what each generated:\n\n"

    for model_key in ["chatgpt", "claude", "gemini"]:
        if outputs.get(model_key):
            example_section += f"### {MODEL_DISPLAY_NAMES[model_key]}\n\n"
            example_section += f"> {outputs[model_key]}\n\n"

    # Insert before Pro Tips or at the end
    if "## Pro Tips" in content:
        content = content.replace("## Pro Tips", example_section + "## Pro Tips")
    else:
        content += "\n" + example_section

    with open(markdown_path, 'w') as f:
        f.write(content)

    print(f"✓ Updated {markdown_path.name}")


def process_prompt(prompt_slug, dry_run=False):
    """Process a single prompt file."""
    markdown_path = PROMPTS_DIR / f"{prompt_slug}.md"

    if not markdown_path.exists():
        print(f"Error: Prompt file not found: {markdown_path}")
        return False

    print(f"\nProcessing: {prompt_slug}")

    # Read markdown
    with open(markdown_path, 'r') as f:
        content = f.read()

    # Extract prompt text
    prompt_text = extract_prompt_text(content)
    if not prompt_text:
        print(f"Error: Could not extract prompt text from {prompt_slug}")
        return False

    print(f"Prompt text ({len(prompt_text)} chars): {prompt_text[:100]}...")

    # Generate outputs from each model
    outputs = {}
    for model_key in ["chatgpt", "claude", "gemini"]:
        print(f"  Calling {MODEL_DISPLAY_NAMES[model_key]}...", end=" ", flush=True)
        output = generate_output(prompt_text, model_key, dry_run)
        if output:
            outputs[model_key] = output
            print(f"✓ ({len(output)} chars)")
        else:
            print("✗ Failed")

    # Update markdown file
    if not dry_run and outputs:
        update_markdown_with_outputs(markdown_path, outputs)
        return True
    elif dry_run:
        print(f"Dry run - would update {markdown_path.name}")
        return True

    return False


def process_all_prompts(dry_run=False):
    """Process all prompt files in the prompts directory."""
    prompt_files = list(PROMPTS_DIR.glob("*.md"))

    if not prompt_files:
        print(f"No prompt files found in {PROMPTS_DIR}")
        return

    print(f"Found {len(prompt_files)} prompt files")

    for prompt_file in prompt_files:
        prompt_slug = prompt_file.stem
        process_prompt(prompt_slug, dry_run)


def main():
    parser = argparse.ArgumentParser(description="Generate example outputs for prompts using OpenRouter")
    parser.add_argument("--prompt", help="Process a specific prompt by slug (e.g., thank-you-first-time-donor)")
    parser.add_argument("--all", action="store_true", help="Process all prompts")
    parser.add_argument("--dry-run", action="store_true", help="Test without calling APIs or updating files")

    args = parser.parse_args()

    # Check for API key
    if not OPENROUTER_API_KEY and not args.dry_run:
        print("Error: OPENROUTER_API_KEY not found in environment")
        print("Create a .env file with: OPENROUTER_API_KEY=your_key_here")
        sys.exit(1)

    # Process prompts
    if args.all:
        process_all_prompts(args.dry_run)
    elif args.prompt:
        process_prompt(args.prompt, args.dry_run)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
