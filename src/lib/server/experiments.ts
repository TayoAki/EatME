/**
 * Experiments the server can switch on for everyone. The app still asks each person before showing
 * them (Profile → Preferences).
 *
 * FOOD_QUALITY_TAG=true: meal analyses also return how processed the meal is (whole, processed,
 * highly processed), a one-line neutral reason and an added-sugar estimate.
 */
export const foodQualityEnabled = () => process.env.FOOD_QUALITY_TAG === 'true';
