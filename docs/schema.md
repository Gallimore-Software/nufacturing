## Schema Definitions for Each Model

### Task Description: Define Schema for Each Collection

Create schemas for the following models to ensure a structured and efficient database schema for the Nufacturing system:

1. **Customer**:
   - Stores customer information, contact details, addresses, qualification forms, and associated brands.

2. **CustomerBrand**:
   - Manages information about customer brands, including brand code, photo, and website.

3. **CustomerQualificationForm**:
   - Contains details about the customer qualification process.

4. **Vendor**:
   - Holds information about vendors, including contact details and vendor-specific inventory.

5. **InventoryItem**:
   - General inventory items, including raw materials, packaging, labels, and finished products.
   - Fields: Ingredient name, price per KG, and stock quantity.

6. **Ingredient**:
   - Specific details about ingredients, including their scientific name and associated inventory item data.

7. **ProductType**:
   - Types of products with attributes and associated processes.

8. **ProductSKU**:
   - Details about product SKUs, including formula, customer, status, and additional optional fields like packaging information, production details, and pricing.

9. **Formula**:
   - Details about product formulas, including ingredients, quantities, and manufacturing instructions.

10. **Order**:
    - Information about customer orders, status tracking, and production steps.

11. **Quote**:
    - Details about quotes provided to customers, including quote status and related products.

12. **Process**:
    - Different processes involved in production, such as R&D testing, raw pick list, sifting, mixing, and packaging.

13. **User**:
    - User details, permissions, and roles within the system.

14. **BatchRecord**:
    - Information about production batches, including creation and listing of batch records.

15. **MasterManufacturingRecord (MMR)**:
    - Details about master manufacturing records, including creation and listing of MMRs.

16. **AuditReport**:
    - Reports from audits, including FDA, UL, and ASI reports.

17. **Asset**:
    - Information about assets and machinery, including costing, manuals, maintenance logs, and how-to videos.

18. **Training**:
    - Details about employee training sessions and materials.

19. **Notification**:
    - Alerts and notifications for users, including key metrics and updates.

### Objectives

- Ensure each schema is well-defined and includes necessary fields and relationships.
- Implement data validation and appropriate indexing for efficient queries.
- Facilitate integration with backend services for data manipulation and retrieval.

This task will involve creating Mongoose models and ensuring they align with the overall application requirements and structure.
