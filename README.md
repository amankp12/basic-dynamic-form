Objective: Build a form with dynamic fields and simple validation.

Form Type: Event Registration Form

Tasks:

1. Form Fields:
○ Name (Text)
○ Email (Email)
○ Age (Number)
○ Are you attending with a guest? (Yes/No)
○ Guest Name (Text, visible only if attending with a guest)

2. Conditional Logic:
○ Show the "Guest Name" field only if the "Are you attending with a guest?"
field is answered with "Yes".

3. Validation:
○ Name: Required
○ Email: Required and must be a valid email format
○ Age: Required and must be a number greater than 0
○ Guest Name: Required if attending with a guest

4. Submission:
○ On form submission, display a summary of the entered data.
Requirements:
● Use React functional components and hooks (useState, useEffect).
● Implement custom hooks for form validation and management.
● Ensure a clean and user-friendly interface with clear error messages.

Deliverables:
● A URL hosted on a free hosting site (e.g., Netlify, Vercel) where we can interact
with your form.
● A link to a public repository (e.g., GitHub) with your source code.

Live Link - https://basic-dynamic-form.netlify.app