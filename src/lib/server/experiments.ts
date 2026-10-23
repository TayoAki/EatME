/**
 * Experiments the server can switch on for everyone. The app still asks each person before showing
 * them (Profile → Preferences).
 *
 * FOOD_QUALITY_TAG=true: meal analyses also return how processed the meal is (whole, processed,
 * highly processed), a one-line neutral reason and an added-sugar estimate.
 */
export const foodQualityEnabled = () => process.env.FOOD_QUALITY_TAG === 'true';

/**
 * Steer the AI (v2.1). MULTI_PHOTO (on unless set to "false"): up to 3 photos of one meal.
 * FOLLOW_UP_QUESTION=true: the AI may ask one tap-to-answer question (cooking fat, portion or
 * filling). Check both on weighed meals and the §11 benchmark before turning them on for everyone.
 */
export const multiPhotoEnabled = () => process.env.MULTI_PHOTO !== 'false';
export const followUpEnabled = () => process.env.FOLLOW_UP_QUESTION === 'true';

/**
 * What to order (v2.5, WHAT-TO-ORDER.md): on unless WHAT_TO_ORDER=false, a switch for outages only.
 * It is on in the build Apple reviews and is never turned on for the first time after a review (2.5.19).
 */
export const whatToOrderEnabled = () => process.env.WHAT_TO_ORDER !== 'false';
