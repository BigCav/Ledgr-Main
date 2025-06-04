# NZ Payroll System

A tiny demo payroll system for New Zealand built with standalone HTML pages and Tailwind CSS. All pages can be opened directly in a browser.

## Pages
- `index.html` - Home page
- `calculate.html` - Pay calculator that pulls employee rates
- `employees.html` - Manage employees (stored in your browser)
- `payslip.html` - Example payslip

Employee data is stored in `localStorage`, so you can add or edit employees on the **Employees** page. The pay calculator lets you select an employee and automatically fills in their hourly rate.

## Development
Install Node dependencies (none are required) and run the included test script:

```bash
npm test
```
