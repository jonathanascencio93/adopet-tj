# Karen Rescue - Reference Examples

These are real adoption posts from Karen rescue organization. Saved for reference when building pet listing features (Story 3.x).

## Images Saved:
- `karen-raquel.png` - Raquel, 3 months, calico cat
- `karen-jacinto-gardenia.png` - Jacinto y Gardenia, 4 months, bonded pair
- `karen-gretel.png` - Gretel, 11 months, Siamese-style cat

## Key Features to Note:

### Design Elements:
- **Brown/warm color scheme** - Professional and warm
- **Large pet photo** - High quality, eye-catching
- **"SE BUSCA KAREN"** branding - Clear organization identity
- **Paw print decorations** - Playful, themed

### Information Structure:
1. **Pet Name** - Large, prominent
2. **Age** - "X meses" (months)
3. **Description Box** - Personality traits:
   - Gender (Gato/Gata - macho/hembra)
   - Temperament (cariñoso, sociable, juguetón, etc.)
   - Special notes (FeLV/FIV status, adoption status)
   
4. **Medical Status Icons** (circular badges):
   - 💉 **Vacunado** (Vaccinated) - Green
   - 🐾 **Esterilizado** (Sterilized/Neutered) - Black
   - 💊 **Desparasitado** (Dewormed) - Pink/Red

5. **Contact Info**:
   - WhatsApp icon + number (664-188-1426)
   - "Whats:" label

### Pet Descriptions Used:
- **Raquel**: "Gato hembra, muy cariñosa y amorosa, le encanta el contacto con humanos, sociable con gatos"
- **Jacinto y Gardenia**: "Gatos macho y hembra, cariñosos y amigables, juguetones, sociables, amorosos y mimosos. Se adoptan juntos"
- **Gretel**: "Gato hembra, tranquila, en proceso de adaptación, manejable, sociable con otros gatos"

### Special Notes:
- **Bonded pairs**: "Se adoptan juntos" (adopted together)
- **Health status**: FeLV/FIV test results mentioned
- **Adoption status**: "En proceso de adaptación" (in adaptation process)

## Implementation Notes for AdoPet TJ:

When building pet listing cards (Story 3.x), consider:

1. **Medical Info Display**: 
   - Icon-based badges for vaccination, sterilization, deworming status
   - Our `MedicalInfo` interface already supports this data
   
2. **Pet Card Layout**:
   - Large image area (similar design)
   - Name + Age prominently displayed
   - Personality traits in description
   - Medical status icons
   - Contact/action buttons
   
3. **Photography**:
   - High-quality pet photos are essential
   - Clean backgrounds work well
   - Show personality in photos

4. **Bilingual Content**:
   - All descriptions in Spanish (for TJ market)
   - Medical terms should be familiar and clear
   
5. **Branding**:
   - Allow rescuer organizations to show their branding
   - Karen uses consistent brown theme
   - Our system should support organization logos/colors

## API Considerations:

Our `Pet` interface should store:
- Pet photos (array of image URLs)
- Personality description (long text)
- Medical status (already in `MedicalInfo`)
- Rescuer contact (already in `RescuerInfo`)
- Special notes (bonded pairs, FeLV status, etc.)

These examples will be very helpful when we implement Story 3.1-3.4! 🐾
