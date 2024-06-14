/**
 * Note(Antoine): So, This has a few keywords that I have not used before, as  
 * well as some syntax that is new So I'll explain them here as a reference and
 * as a learning step since I re-wrote this from the web.
 */
export type PickOnlyOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> &
        Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys]

/**
 * Keys:
 */


/** 
 * Pick: Creates a new type based by selecting specific elements of the main 
 * type. In this case, it allows the exclusion and therefore selection of only 
 * one of the enumerated elements. The way it works is by removing all required 
 * keys from the initial type and then by adding them back but once.
 */

/** 
 * Exclude: Pretty self explanatory, altho, the syntax in its first usage is 
 * not intuitive as I expected it to be. In this case, we need to reiterate the 
 * key of T, since we don't know its type, but 
 */

/**
 * Required:
 */

/**
 * Partial: Turns all the element within a type as optionnal. Very Usefull for 
 * deconstructing types and reusing them
 */

/**
 *  Record: 
 */


/**
 * Now. What the heck is this : ` [K in Keys]-?: `
 * This, fellow friends is a weird syntaxe to write, all items, referenced K, 
 * in the Keys objects unioned above will lose their optionnal feature. This 
 * ensures that the optionnal keys with its modifier are removed. This way, even
 * if a type had optionnal keys, there will be only one.
 * 
 * In other words, it removes the optionnal attribute from the type properties
 */