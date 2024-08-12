export const getImageNavbar = (imageName) => {
    return new URL(`../assets/Navbar/${imageName}`, import.meta.url).href;
};

export const getImageRecipe = (imageName) => {
    return new URL(`../assets/Recipe/${imageName}`, import.meta.url).href;
};

export const getImageFooter = (imageName) => {
    return new URL(`../assets/Footer/${imageName}`, import.meta.url).href;
};